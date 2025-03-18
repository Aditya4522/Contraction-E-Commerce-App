import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import useErrorLogout from "@/hooks/use-error-logout";

export default function Settings() {
  const handleErrorLogout = useErrorLogout();

  // State for password visibility
  const [showPassword, setShowPassword] = useState({
    previousPassword: false,
    newPassword: false,
  });

  // State for loading indicators
  const [loading, setLoading] = useState({
    username: false,
    password: false,
  });

  const togglePasswordVisibility = (field) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const changeUserName = async (e) => {
    e.preventDefault();
    setLoading((prev) => ({ ...prev, username: true }));

    const formData = new FormData(e.target);
    const previousUsername = formData.get("previousUsername");
    const newUsername = formData.get("newUsername");

    if (!previousUsername || !newUsername) {
      toast.error("Please fill in both fields.");
      setLoading((prev) => ({ ...prev, username: false }));
      return;
    }

    try {
      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/change-username`,
        { previousUsername, newUsername },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      localStorage.setItem("user", JSON.stringify(res.data.user));
      e.target.reset();
      toast.success(res.data.message);
    } catch (error) {
      handleErrorLogout(error, "Failed to update username");
    } finally {
      setLoading((prev) => ({ ...prev, username: false }));
    }
  };

  const changePassword = async (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.target);
    const previousPassword = formData.get("previousPassword");
    const newPassword = formData.get("newPassword");
  
    if (!previousPassword || !newPassword) {
      toast.error("Please fill in both password fields.");
      return;
    }
  
    let user;
    try {
      user = JSON.parse(localStorage.getItem("user")) || {};
      console.log("User Object from localStorage:", user); // Debugging log
    } catch (error) {
      console.error("Error parsing user from localStorage:", error);
      user = {};
    }
  
    const userId = user?.id || user?._id;
    console.log(userId);
    
    if (!userId) {
      toast.error("User ID not found. Please re-login.");
      return;
    }
  
    try {
      console.log("Sending User ID:", userId); // Debugging log
      console.log(newPassword);
      console.log(previousPassword);
      
      
      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/change-password`,
        {
          userId,
          previousPassword,
          newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.data
      console.log(data);
      
  
      localStorage.setItem("user", JSON.stringify(res.data.user));
      e.target.reset();
      toast.success(res.data.message);
    } catch (error) {
      console.error("Change Password Error:", error.response?.data);
      handleErrorLogout(error, "Failed to update password");
    }
  };
  
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-screen sm:w-[80vw] sm:justify-start space-y-3 p-4">
      
      {/* Change Username Form */}
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4">Change Username</h1>
        <form onSubmit={changeUserName} className="grid gap-4">
          <Input
            type="text"
            placeholder="Enter previous username"
            name="previousUsername"
            required
          />
          <Input
            type="text"
            placeholder="Enter new username"
            name="newUsername"
            required
          />
          <Button type="submit" className={`hover:bg-red-700 ${loading.username ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={loading.username}>
            {loading.username ? 'Updating...' : 'Change Username'}
          </Button>
        </form>
      </div>

      {/* Change Password Form */}
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4">Change Password</h1>
        <form onSubmit={changePassword} className="grid gap-4">
          <div className="relative">
            <Input
              type={showPassword.previousPassword ? "text" : "password"}
              placeholder="Enter previous password"
              name="previousPassword"
              required
            />
            <span
              className="absolute right-3 top-3 cursor-pointer"
              onClick={() => togglePasswordVisibility("previousPassword")}
              aria-label={showPassword.previousPassword ? "Hide password" : "Show password"}
            >
              {showPassword.previousPassword ? <EyeOff /> : <Eye />}
            </span>
          </div>

          <div className="relative">
            <Input
              type={showPassword.newPassword ? "text" : "password"}
              placeholder="Enter new password"
              name="newPassword"
              required
            />
            <span
              className="absolute right-3 top-3 cursor-pointer"
              onClick={() => togglePasswordVisibility("newPassword")}
              aria-label={showPassword.newPassword ? "Hide password" : "Show password"}
            >
              {showPassword.newPassword ? <EyeOff /> : <Eye />}
            </span>
          </div>

          <Button type="submit" className={`hover:bg-red-700 ${loading.password ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={loading.password}>
            {loading.password ? 'Updating...' : 'Change Password'}
          </Button>
        </form>
      </div>
    </div>
  );
}
