import React from "react";

const Hero = () => {
  const fadeInAnimation = {
    opacity: 0,
    transform: "translateY(20px)",
    animation: "fadeIn 1s ease-out forwards",
  };

  const keyframesStyle = `
    @keyframes fadeIn {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes zoomInOut {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
    }
  `;

  return (
    <>
      {/* Injecting Keyframes Animation */}
      <style>{keyframesStyle}</style>

      <div
        className="hero mx-auto px-20 py-6 lg:py-12 flex flex-col lg:flex-row items-center justify-between"
        style={{
          backgroundImage: `url('/top-view-world-heart-day-with-copy-space.jpg')`,
          backgroundSize: "130% auto", // Slightly compress background image
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "600px", // Reduced height for a more compact look
          width: "100%",
        }}
      >
        {/* Text Content */}
        <div
          className="h-full flex flex-col justify-center lg:w-1/2 lg:pl-16 text-left"
          style={fadeInAnimation}
        >
          <h1 className="text-5xl font-bold text-sky-900 mb-4 leading-snug">
            Welcome to HEALTHNEST:<br /> Your Partner in Healthcare
          </h1>
          <p className="text-2xl text-sky-800 leading-relaxed">
          HealthNest offers students expert consultancy by NEET-qualified doctors, providing tailored advice and effective home remedies for instant relief. We prioritize your well-being with accessible and compassionate care.
          </p>
        </div>

        {/* Image Content */}
        <div
          className="flex justify-center items-center lg:w-1/2"
          style={{ animation: "fadeIn 1s ease-out forwards" }}
        >
          <img
            src="/fun-3d-cartoon-illustration-indian-doctor-removebg-preview.png"
            alt="Doctor"
            className="w-full lg:w-auto lg:max-h-[90%] lg:max-w-[90%]"
            style={{
              animation: "zoomInOut 3s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
