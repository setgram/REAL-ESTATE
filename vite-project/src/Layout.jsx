import React from "react";
import { Outlet } from "react-router-dom";
import Header from "/src/Header";
import Footer from "/src/Footer";

export default function Layout() {
  return (
    <div className="site-wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
