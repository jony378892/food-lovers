import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/login",
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        await dbConnect();

        // Check if user exists
        let existingUser = await User.findOne({ email: user.email });

        if (!existingUser) {
          // Create new user with default role 'user'
          existingUser = await User.create({
            name: user.name,
            email: user.email,
            image: user.image,
            googleId: account.providerAccountId,
            role: "user",
            emailVerified: new Date(),
            isActive: true,
          });

          console.log("✓ New user created:", {
            id: existingUser._id,
            email: existingUser.email,
            role: existingUser.role,
          });
        } else {
          // Update existing user if Google ID is not set
          if (!existingUser.googleId) {
            existingUser.googleId = account.providerAccountId;
            existingUser.emailVerified = new Date();
            await existingUser.save();

            console.log("✓ User Google ID updated:", existingUser.email);
          }
        }

        return true;
      } catch (error) {
        console.error("✗ SignIn callback error:", error);
        return false;
      }
    },

    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },

    async session({ session, token }) {
      try {
        await dbConnect();
        const user = await User.findOne({ email: session.user.email });

        if (user) {
          session.user.id = user._id.toString();
          session.user.role = user.role;
          session.user.isActive = user.isActive;
        }

        return session;
      } catch (error) {
        console.error("✗ Session callback error:", error);
        return session;
      }
    },
  },
  events: {
    async signIn({ user, account }) {
      console.log("📝 User signed in:", user.email);
    },
    async signOut() {
      console.log("👋 User signed out");
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
