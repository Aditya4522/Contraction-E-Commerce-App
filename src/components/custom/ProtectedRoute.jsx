import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const location = useLocation();
  const { isAuthenticated, role } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  if (
    isAuthenticated &&
    role === "admin" &&
    location.pathname === "/admin/login"
  ) {
    return <Navigate to="/admin/dashboard" replace />;
  }
  if (isAuthenticated && role === "user" && location.pathname === "/admin/login") {
    return <Navigate to="/" replace />;
  }
  

  if (
    isAuthenticated &&
    role === "user" &&
    location.pathname.startsWith("/admin/dashboard")
  ) {
    return <Navigate to="/" replace />;
  }

  // Prevent users from accessing any admin pages
  if (
    isAuthenticated &&
    role === "user" &&
    location.pathname.startsWith("/admin/dashboard")
  ) {
    return <Navigate to="/" replace />;
  }

  if (!isAuthenticated && location.pathname.startsWith("/admin/dashboard")) {
    return <Navigate to="/admin/login" replace />;
  }
  // Prevent non-authenticated users from accessing orders
  if (!isAuthenticated && location.pathname === "/orders") {
    return <Navigate to="/login" replace />;
  }

  if (!isAuthenticated && location.pathname === "/checkout") {
    return <Navigate to="/login" replace />;
  }

  if (
    isAuthenticated &&
    role === "user" &&
    cartItems?.length === 0 &&
    location.pathname === "/checkout"
  ) {
    return <Navigate to="/" replace />;
  }

  if (
    isAuthenticated &&
    (location.pathname === "/signup" || location.pathname === "/login")
  ) {
    return <Navigate to="/" replace />;
  }

  return children;
}
