import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import UserGreeting from "../components/UserGreeting";

const RouteLayout = () => {
  return (
    <div className="dark:bg-gray-200">
      <Navbar />
      <UserGreeting isLoggedIn={true} username="Rosa Balanca" />
      <Outlet />
    </div>
  );
};

export default RouteLayout;
