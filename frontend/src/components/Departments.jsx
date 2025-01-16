import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Departments = () => {
  const departmentsArray = [
    {
      name: "Nausea",
      imageUrl: "/public/nausea.png",
    },
    {
      name: "Severe headache",
      imageUrl: "/public/headache.png",
    },
    {
      name: "Stomachache",
      imageUrl: "/public/stomach.png",
    },
    {
      name: "Skin Problems",
      imageUrl: "/public/skin.png",
    },
    {
      name: "Periods Issues",
      imageUrl: "/public/period.png",
    },
    {
      name: " Fever and Cold  ",
      imageUrl: "/public/fever.png",
    },
   
  ];

  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1,
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidesToSlide: 1,
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidesToSlide: 1,
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="container mx-auto py-12 px-6">
      <h2 className="text-4xl font-extrabold text-center text-sky-900 mb-12">Our Services</h2>
      <h2 className="text-2xl font-extrabold text-center text-sky-700 mb-12">Our doctors give consultancy on various problems faced by students in their daily lives</h2>
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        className="space-x-6"
      >
        {departmentsArray.map((depart, index) => {
          return (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:rotate-1">
              <div className="relative">
                <img
                  src={depart.imageUrl}
                  alt={depart.name}
                  className="w-full h-56 object-cover rounded-t-lg transition-all duration-300 ease-in-out hover:opacity-90"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4">
                  <h3 className="text-2xl font-semibold text-white uppercase tracking-wider">{depart.name}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Departments;
