import SignupForm from "@/components/SignupForm";

export const metadata = {
  title: "Sign Up - Food Lovers",
  description: "Create a new Food Lovers account and join our community",
};

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-12">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-4xl mb-3">🍳</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Join Food Lovers
          </h1>
          <p className="text-gray-600">
            Create an account and start exploring delicious recipes
          </p>
        </div>

        {/* Signup Card */}
        <div className="bg-white rounded-xl shadow-xl p-8 border border-amber-100">
          <SignupForm />
        </div>

        {/* Footer Note */}
        <p className="text-center text-xs text-gray-500 mt-6">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-amber-600 hover:text-amber-700 font-medium"
          >
            Sign in
          </a>{" "}
          |{" "}
          <a
            href="/terms"
            className="text-amber-600 hover:text-amber-700 font-medium"
          >
            Terms
          </a>
        </p>
      </div>
    </div>
  );
}
