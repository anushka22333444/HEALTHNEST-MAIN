import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const hours = [
    { id: 1, day: "Monday",  },
    { id: 2, day: "Tuesday",   },
    { id: 3, day: "Wednesday",  },
    { id: 4, day: "Thursday",  },
    { id: 5, day: "Friday",  },
    { id: 6, day: "Saturday"},
  ];

  return (
    <footer className="bg-sky-100 text-sky-900 py-8">
      <div className="container mx-auto px-6 md:px-12">
        <hr className="border-gray-600 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="flex justify-center md:justify-start">
            <img 
              src="/Screenshot_2025-01-12_180604-removebg-preview (1).png" 
              alt="logo" 
              className="w-72" 
              width="50" // specify width here
              height="50" // specify height here
            />
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sky-800 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/appointment" className="text-sky-800 hover:text-white transition">
                  Appointment
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sky-800 hover:text-white transition">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Days Available</h4>
            <ul className="space-y-2">
              {hours.map((element) => (
                <li key={element.id} className="flex justify-between">
                  <span className="text-sky-800">{element.day}</span>
                  <span>{element.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sky-800">
                <FaPhone />
                <span>8103789536, 9149369637</span>
              </div>
              <div className="flex items-center space-x-2 text-sky-800">
                <MdEmail />
                <span>HealthNest@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sky-800">
                <MdEmail />
                <span>ayushjha32526@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sky-800">
                <MdEmail />
                <span>singhanushka21170@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sky-800">
                <FaLocationArrow />
                <span>Agra,UP</span>
                
              </div>
              <div className="flex items-center space-x-2 text-sky-800">
                <FaLocationArrow />
                <span>Ayush , Anushka</span>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
