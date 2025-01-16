import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const handleLogout = async () => {
    await axios
      .get("http://localhost:4000/api/v1/user/patient/logout", {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const navigateTo = useNavigate();

  const goToLogin = () => {
    navigateTo("/login");
  };

  return (
    
    <nav className=" mx-auto p-0 flex items-center bg-gradient-to-r from-sky-100 to-sky-200  ">
      {/* Logo Section */}
      <div className="logo flex items-center space-x-6">
        <img
          src="/Screenshot_2025-01-12_180604-removebg-preview (1).png"
          alt="logo"
          className="h-15 w-60 object-cover"
        />
        <span className="text-2xl font-sans font-bold text-gray-900"></span>
      </div>

      {/* Centered Navigation Links */}
      <div className="flex-1 flex justify-center">
        <div className="flex items-center space-x-16 font-sans font-bold">
          <Link
            to="/"
            className="text-2xl text-gray-900 hover:text-sky-600 transition duration-300 ease-in-out transform hover:scale-110"
          >
            Home
          </Link>
          <Link
            to="/appointment"
            className="text-2xl text-gray-900 hover:text-sky-600 transition duration-300 ease-in-out transform hover:scale-110"
          >
            Appointment
          </Link>
          <Link
            to="/about"
            className="text-2xl text-gray-900 hover:text-sky-600 transition duration-300 ease-in-out transform hover:scale-110"
          >
            About Us
          </Link>
        </div>
      </div>

      {/* Authentication Buttons */}
      <div className="flex items-center space-x-6">
        {isAuthenticated ? (
          <button
           className="bg-red-600 text-white text-lg py-3 px-8 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-110 border border-red-800"
            onClick={handleLogout}
          >
            LOGOUT
          </button>
        ) : (
          <button
            className="bg-gradient-to-r from-sky-900 to-sky-700 text-white text-bold text-lg py-3 px-8 rounded-lg hover:from-sky-600 hover:to-sky-500 transition duration-300 ease-in-out transform hover:scale-110 border border-blue-800"
            onClick={goToLogin}
          >
            LOGIN
          </button>
        )}
      </div>

      {/* Hamburger Icon */}
      <div
        className="md:hidden text-3xl text-gray-900 cursor-pointer"
        onClick={() => setShow(!show)}
        aria-label="Toggle navigation"
      >
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;