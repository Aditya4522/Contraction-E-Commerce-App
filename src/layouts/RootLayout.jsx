import React from "react";
import Navbar from "../components/custom/Navbar";
import Footer from "../components/custom/Footer";

export default function RootLayouts({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
