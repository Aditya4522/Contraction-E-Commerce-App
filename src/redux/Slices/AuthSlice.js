import { createSlice } from "@reduxjs/toolkit";

const getStoredRole = () => localStorage.getItem("role") || "";
const getStoredUser = () => {
  try {
    return JSON.parse(localStorage.getItem("user")) || {};
  } catch {
    return {};
  }
};
const getAuthStatus = () => !!localStorage.getItem("token");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    role: getStoredRole(),
    user: getStoredUser(),
    isAuthenticated: getAuthStatus(),
  },
  reducers: {
    setUserLogin: (state, { payload }) => {
      // Destructure payload
      const { user, token } = payload;
      
      // Update state
      state.role = user.role;
      state.user = user;
      state.isAuthenticated = true;

      // Update localStorage
      localStorage.setItem("role", user.role);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
    },
    SetUserLogOut: (state) => {
      // Reset state
      state.role = "";
      state.user = {};
      state.isAuthenticated = false;

      // Clear storage
      localStorage.removeItem("role");
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
});

export const {  setUserLogin, SetUserLogOut } = authSlice.actions;
export default authSlice.reducer;