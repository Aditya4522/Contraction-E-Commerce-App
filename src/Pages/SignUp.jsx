import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="min-h-fit py-12 px-5 flex items-center justify-center bg-gray-50  dark:bg-gray-900 transition-colors duration-200">
      <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Create an account
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Sign up to get started with our service
          </p>
        </div>

        <form className="space-y-4">
          <div className="space-y-4">
            <input
              placeholder="Full name"
              type="text"
              name="name"
              className="w-full h-11 px-4 rounded-lg border border-gray-200 dark:border-gray-600 
                bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                placeholder-gray-500 dark:placeholder-gray-400"
              required
            />

            <input
              placeholder="Email address"
              type="email"
              name="email"
              className="w-full h-11 px-4 rounded-lg border border-gray-200 dark:border-gray-600 
                bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                placeholder-gray-500 dark:placeholder-gray-400"
              required
            />

            <input
              placeholder="Phone number"
              type="tel"
              name="tel"
              className="w-full h-11 px-4 rounded-lg border border-gray-200 dark:border-gray-600 
                bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                placeholder-gray-500 dark:placeholder-gray-400"
              required
            />

            <input
              placeholder="Password"
              type="password"
              name="password"
              className="w-full h-11 px-4 rounded-lg border border-gray-200 dark:border-gray-600 
                bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                placeholder-gray-500 dark:placeholder-gray-400"
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="terms"
              onChange={(e) => setEnabled(e.target.checked)}
              className="rounded border-gray-300 dark:border-gray-600 text-blue-600 
                focus:ring-blue-500 dark:bg-gray-700"
            />
            <label
              htmlFor="terms"
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 
                dark:hover:text-gray-100 cursor-pointer"
            >
              I agree to the terms and conditions
            </label>
          </div>

          <Button
            type="submit"
            disabled={!enabled}
            className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-medium 
              rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed
              dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Create Account
          </Button>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 
                dark:hover:text-blue-300 transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
