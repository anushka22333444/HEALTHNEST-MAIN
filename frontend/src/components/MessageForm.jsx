import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const MessageForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:4000/api/v1/message/send",
          { firstName, lastName, email, phone, message },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setMessage("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="container mx-auto p-3 md:p-12 bg-gradient-to-r from-sky-200 to-sky-300 rounded-lg  max-w-8xl">
      <h2 className="text-4xl font-bold text-sky-900 mb-10 text-center tracking-wide">
        Send Us A Message
      </h2>
      <form onSubmit={handleMessage} className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="input-field"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="input-field"
          />
        </div>
        <textarea
          rows={5}
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="input-field w-full"
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-sky-900 to-sky-700 text-white py-3 px-8 rounded-lg shadow-xl hover:bg-blue-700 transform transition duration-300 ease-in-out hover:scale-105 focus:ring-4 focus:ring-blue-500"
          >
            Send Message
          </button>
        </div>
      </form>
    

      {/* Custom Styles for Form */}
      <style jsx>{`
        .input-field {
          width: 100%;
          padding: 16px;
          font-size: 1.125rem;
          border: 2px white #d1d5db;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease-in-out;
          background-color: #fff;
          outline: none;
        }

        .input-field::placeholder {
          color: #aaa;
          font-style: italic;
          font-size: 1.1rem;
          font-weight: 300;
          transition: all 0.3s ease-in-out;
        }

        .input-field:focus {
          border-color: blue;
          outline: none;
          box-shadow: 0 0 0 3px rgba(21, 193, 241, 0.3);
        }

        .input-field:focus::placeholder {
          color: rgb(44, 155, 192);
          font-size: 1.2rem;
          font-weight: 500;
        }

        .input-field:focus,
        .input-field:active {
          background-color: #f0f9f4;
        }

        /* Input Focus Effects */
        .input-field:focus {
          border-color:rgb(19, 194, 210);
          box-shadow: 0px 0px 5px rgba(24, 92, 220, 0.4);
          background-color: #f0f9f4;
        }

        /* Larger Textarea Styling */
        textarea:focus {
          border-color:rgb(39, 176, 234);
          box-shadow: 0px 0px 5px rgba(30, 88, 203, 0.4);
          background-color: white;
        }
      `}</style>
    </div>
  );
};

export default MessageForm;
