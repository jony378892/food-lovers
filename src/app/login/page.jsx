import LoginForm from "@/components/LoginForm";

export const metadata = {
  title: "Login - Food Lovers",
  description: "Sign in to your Food Lovers account",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-12">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-4xl mb-3">🍽️</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600">Sign in to your Food Lovers account</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-xl shadow-xl p-8 border border-amber-100">
          <LoginForm />
        </div>

        {/* Footer Note */}
        <p className="text-center text-xs text-gray-500 mt-6">
          Don&apos;t have an account?{" "}
          <a
            href="/signup"
            className="text-amber-600 hover:text-amber-700 font-medium"
          >
            Create one
          </a>{" "}
          |{" "}
          <a
            href="/forgot-password"
            className="text-amber-600 hover:text-amber-700 font-medium"
          >
            Forgot password?
          </a>
        </p>
      </div>
    </div>
  );
}
