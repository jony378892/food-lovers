"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import Link from "next/link";
import GoogleSignInButton from "./GoogleSignInButton";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [submitError, setSubmitError] = useState("");
  const password = watch("password");

  const onSubmit = async (data) => {
    setIsLoading(true);
    setSuccessMessage("");
    setSubmitError("");

    try {
      // Log form data to console
      console.log("📝 Signup Form Data:", {
        fullName: data.fullName,
        email: data.email,
        password: data.password,
        agreeToTerms: data.agreeToTerms,
        timestamp: new Date().toISOString(),
      });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSuccessMessage(
        "Account created successfully! Redirecting to login...",
      );
      reset();

      // Simulate redirect after 2 seconds
      setTimeout(() => {
        console.log("🔄 Redirecting to login...");
      }, 2000);
    } catch (error) {
      console.error("✗ Signup Error:", error);
      setSubmitError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      {/* Success Message */}
      {successMessage && (
        <div className="mb-4 p-4 bg-green-50 border border-green-300 text-green-800 rounded-lg text-sm flex items-start gap-2">
          <span className="text-lg">✓</span>
          <span>{successMessage}</span>
        </div>
      )}

      {/* Full Name Field */}
      <div className="mb-5">
        <label className="block text-sm font-semibold text-gray-800 mb-2">
          Full Name
        </label>
        <input
          type="text"
          placeholder="John Doe"
          disabled={isLoading}
          {...register("fullName", {
            required: "Full name is required",
            minLength: {
              value: 2,
              message: "Full name must be at least 2 characters",
            },
          })}
          className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition ${
            errors.fullName
              ? "border-red-500 focus:ring-red-200"
              : "border-gray-300 focus:ring-amber-200 focus:border-amber-500"
          }`}
        />
        {errors.fullName && (
          <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
            <span>⚠</span> {errors.fullName.message}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div className="mb-5">
        <label className="block text-sm font-semibold text-gray-800 mb-2">
          Email Address
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          disabled={isLoading}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Enter a valid email address",
            },
          })}
          className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition ${
            errors.email
              ? "border-red-500 focus:ring-red-200"
              : "border-gray-300 focus:ring-amber-200 focus:border-amber-500"
          }`}
        />
        {errors.email && (
          <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
            <span>⚠</span> {errors.email.message}
          </p>
        )}
      </div>

      {/* Password Field */}
      <div className="mb-5">
        <label className="block text-sm font-semibold text-gray-800 mb-2">
          Password
        </label>
        <input
          type="password"
          placeholder="••••••••"
          disabled={isLoading}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
            pattern: {
              value: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
              message:
                "Password must include uppercase, lowercase, and numbers",
            },
          })}
          className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition ${
            errors.password
              ? "border-red-500 focus:ring-red-200"
              : "border-gray-300 focus:ring-amber-200 focus:border-amber-500"
          }`}
        />
        {errors.password && (
          <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
            <span>⚠</span> {errors.password.message}
          </p>
        )}
        <p className="mt-1 text-xs text-gray-500">
          At least 8 characters with uppercase, lowercase, and numbers
        </p>
      </div>

      {/* Confirm Password Field */}
      <div className="mb-5">
        <label className="block text-sm font-semibold text-gray-800 mb-2">
          Confirm Password
        </label>
        <input
          type="password"
          placeholder="••••••••"
          disabled={isLoading}
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) => value === password || "Passwords do not match",
          })}
          className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition ${
            errors.confirmPassword
              ? "border-red-500 focus:ring-red-200"
              : "border-gray-300 focus:ring-amber-200 focus:border-amber-500"
          }`}
        />
        {errors.confirmPassword && (
          <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
            <span>⚠</span> {errors.confirmPassword.message}
          </p>
        )}
      </div>

      {/* Terms and Conditions Checkbox */}
      <div className="mb-6">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-4 accent-amber-600 rounded cursor-pointer"
            disabled={isLoading}
            {...register("agreeToTerms", {
              required: "You must agree to the terms and conditions",
            })}
          />
          <span className="ml-2 text-sm text-gray-700">
            I agree to the{" "}
            <Link
              href="/terms"
              className="text-amber-600 hover:text-amber-700 font-medium"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="text-amber-600 hover:text-amber-700 font-medium"
            >
              Privacy Policy
            </Link>
          </span>
        </label>
        {errors.agreeToTerms && (
          <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
            <span>⚠</span> {errors.agreeToTerms.message}
          </p>
        )}
      </div>

      {/* Submit Error */}
      {submitError && (
        <div className="mb-4 p-4 bg-red-50 border border-red-300 text-red-800 rounded-lg text-sm flex items-start gap-2">
          <span>✕</span>
          <span>{submitError}</span>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-amber-400 text-white font-semibold py-3 px-4 rounded-lg transition shadow-md hover:shadow-lg"
      >
        {isLoading ? (
          <span className="flex items-center justify-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Creating Account...
          </span>
        ) : (
          "Sign Up"
        )}
      </button>

      {/* Divider */}
      <div className="my-6 flex items-center">
        <div className="flex-1 border-t border-gray-300"></div>
        <div className="px-3 text-sm text-gray-500">or</div>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>

      {/* Google Sign In */}
      <GoogleSignInButton />

      {/* Login Link */}
      <div className="text-center mt-6">
        <p className="text-sm text-gray-700">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-amber-600 hover:text-amber-700 font-semibold transition duration-200"
          >
            Sign in
          </Link>
        </p>
      </div>
    </form>
  );
}
