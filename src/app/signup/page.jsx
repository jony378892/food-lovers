"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const password = watch("password");

  const onSubmit = async (data) => {
    setIsLoading(true);
    setSuccessMessage("");

    try {
      // simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Signup Form Data:", data);

      setSuccessMessage("Account created successfully!");
      reset();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      {/* Success Message */}
      {successMessage && (
        <div className="mb-4 p-4 bg-green-50 border border-green-300 text-green-800 rounded-lg text-sm flex items-start gap-2">
          <span>✓</span>
          <span>{successMessage}</span>
        </div>
      )}

      {/* Full Name */}
      <div className="mb-5">
        <label className="block text-sm font-semibold text-gray-800 mb-2">
          Full Name
        </label>
        <input
          type="text"
          placeholder="John Doe"
          disabled={isLoading}
          {...register("name", {
            required: "Full name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters",
            },
          })}
          className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition duration-200 ${
            errors.name
              ? "border-red-500 focus:ring-red-200"
              : "border-gray-300 focus:ring-amber-200 focus:border-amber-500"
          }`}
        />
        {errors.name && (
          <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
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
          className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition duration-200 ${
            errors.email
              ? "border-red-500 focus:ring-red-200"
              : "border-gray-300 focus:ring-amber-200 focus:border-amber-500"
          }`}
        />
        {errors.email && (
          <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      {/* Password */}
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
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition duration-200 ${
            errors.password
              ? "border-red-500 focus:ring-red-200"
              : "border-gray-300 focus:ring-amber-200 focus:border-amber-500"
          }`}
        />
        {errors.password && (
          <p className="mt-2 text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>

      {/* Confirm Password */}
      <div className="mb-6">
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
          className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition duration-200 ${
            errors.confirmPassword
              ? "border-red-500 focus:ring-red-200"
              : "border-gray-300 focus:ring-amber-200 focus:border-amber-500"
          }`}
        />
        {errors.confirmPassword && (
          <p className="mt-2 text-sm text-red-600">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-amber-400 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
      >
        {isLoading ? "Creating account..." : "Create Account"}
      </button>
    </form>
  );
}
