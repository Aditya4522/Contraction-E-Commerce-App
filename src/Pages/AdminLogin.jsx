import { Button } from "@/components/ui/button";
import { setUserLogin } from "@/redux/Slices/AuthSlice";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "sonner";

export default function AdminLogin() {
  const [enabled, setEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateUsername = (username) => {
    return /^[a-zA-Z0-9._-]{3,20}$/.test(username);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = e.target.elements.username.value.trim();
    const password = e.target.elements.password.value.trim();

    if (!username || !password) {
      toast.error("Username and Password are required.");
      return;
    }

    if (!validateUsername(username)) {
      toast.error(
        "Invalid username format. Use 3-20 letters, numbers, dots, or underscores."
      );
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    if (!enabled) {
      toast.warning("You must accept the terms and conditions.");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/admin-login`, 
        { username, password },
        { withCredentials: true } // if using cookies
      );

      const { token, user } = res.data;

      dispatch(setUserLogin({ token, user }));

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      toast.success("Login successful!");
      navigate("/admin/dashboard");
    } catch (error) {
      console.error("Login error:", error.response || error); // ✅ Debug log

      const errorMessage =
        error.response?.data?.message || "Login failed. Please try again.";

      if (errorMessage.includes("username")) {
        toast.error("Username not found. Please check your username.");
      } else if (errorMessage.includes("password")) {
        toast.error("Incorrect password. Try again.");
      } else {
        toast.error(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-fit py-12 px-5 flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Admin Login
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Sign in to access the admin dashboard.
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <label
              htmlFor="username"
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              placeholder="Enter username..."
              type="text"
              className="w-full h-11 px-4 rounded-lg border border-gray-300 dark:border-gray-600 
                bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                placeholder-gray-500 dark:placeholder-gray-400"
              required
            />

            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              placeholder="Enter password..."
              type="password"
              className="w-full h-11 px-4 rounded-lg border border-gray-300 dark:border-gray-600 
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
            disabled={!enabled || loading}
            className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-medium 
              rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed
              dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            {loading ? "Logging in..." : "Login"}
          </Button>

          <p className="text-sm text-gray-600 dark:text-gray-300">
            Create a new account?{" "}
            <Link
              to={"/admin/signup"}
              className="font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 
                dark:hover:text-blue-300 transition-colors"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
