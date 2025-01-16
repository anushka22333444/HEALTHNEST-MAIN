import React from "react";
import Hero from "../Components/Hero";

const AboutUs = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Sejal Singh",
      college: "GAC Rewa , 4th year",
      image: "sejal2.jpeg",
    },
    {
      id: 2,
      name: "Dr. Rimjhim",
      college: "GAC Rewa, 4th year",
      image: "rim2.jpeg",
    },
    {
      id: 3,
      name: "Dr. Divya Singh",
      college: "GAC Rewa, 4th year",
      image: "divya2.jpeg",
    },
    {
      id: 4,
      name: "Dr. Preeti",
      college: "GAC Rewa, 4th year",
      image: "WhatsApp Image 2025-01-15 at 23.14.58.jpeg",
    },
  ];

  return (
    <>
     
    <div className="bg-gradient-to-b from-sky-100 to-sky-200 py-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <h1 className="text-5xl font-extrabold text-center text-sky-900 mb-10">
          Our Doctors
        </h1>
        <p className="text-center text-sky-800 mb-12 text-2xl leading-relaxed">
          Meet our talented and experienced team of doctors, dedicated to
          providing exceptional healthcare services to our valued patients.
        </p>
        
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-9">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="relative bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl group"
            >
              {/* Image with Hover Effect */}
              <div className="relative mt-4"> {/* Added margin-top to move the image downward */}
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-65 object-cover mx-auto"
                />
                <div className="absolute inset-0 bg-sky-700 bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                  <p className="text-white text-md font-medium">
                    Compassionate & Skilled
                  </p>
                </div>
              </div>
              
              {/* Doctor Info */}
              <div className="p-4 text-center">
                <h2 className="text-2xl font-semibold text-sky-800">
                  {doctor.name}
                </h2>
                <p className="text-sm text-gray-600">{doctor.college}</p>
                <p className="text-gray-700 mt-2 italic">
                  "Committed to excellence in patient care."
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutUs;