import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="biography mx-auto p-6">
        {/* Biography Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
          {/* Text Section */}
          <div className="flex-1 space-y-8 max-w-3xl">
            <p
              className="text-lg font-semibold text-gray-700 uppercase tracking-wider opacity-0 animation-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
             
            </p>
            <h3
              className="text-5xl font-extrabold text-sky-900 leading-tight mb-6 opacity-0 animation-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              Who We Are
            </h3>

            <p
              className="text-base text-gray-600 leading-relaxed mb-6 opacity-0 animation-fade-in"
              style={{ animationDelay: "0.9s" }}
            >
             Welcome to HealthNest, where innovation meets care. Our mission is to promote wellness by connecting you with experienced doctors for personalized consultations, fostering a healthier and happier community. At HealthNest, your well-being is our priority.

            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xl text-green-500">🌟</span>
                <p
                  className="text-lg text-gray-700 font-semibold opacity-0 animation-fade-in"
                  style={{ animationDelay: "1.2s" }}
                >
                Empowering Health, One Consultation at a Time
                </p>
              </div>
              <p
                className="text-base text-gray-600 leading-relaxed mb-6 opacity-0 animation-fade-in"
                style={{ animationDelay: "1.5s" }}
              >
               
              We are dedicated to making healthcare accessible and seamless through our platform. With HealthNest, you can consult with trusted doctors from the comfort of your home, ensuring convenience and care go hand in hand.
              </p>

              <div className="flex items-center gap-2">
                <span className="text-xl text-green-500">💻</span>
                <p
                  className="text-lg text-gray-700 font-semibold opacity-0 animation-fade-in"
                  style={{ animationDelay: "1.8s" }}
                >
                  Our Vision
                </p>
              </div>
              <p
                className="text-base text-gray-600 leading-relaxed mb-6 opacity-0 animation-fade-in"
                style={{ animationDelay: "2.1s" }}
              >
               At HealthNest, we envision a world where healthcare is accessible, efficient, and tailored to individual needs. By combining technology with expertise, we strive to empower you to take charge of your health.

              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xl text-green-500">🚀</span>
                <p
                  className="text-lg text-gray-700 font-semibold opacity-0 animation-fade-in"
                  style={{ animationDelay: "2.4s" }}
                >
                  Your Partner in Wellness
                </p>
              </div>
              <p
                className="text-base text-gray-600 leading-relaxed opacity-0 animation-fade-in"
                style={{ animationDelay: "2.7s" }}
              >
                Join us in embracing the future of healthcare. With our innovative platform, we’re making expert medical consultations easy, encouraging wellness, and ensuring a healthier tomorrow for everyone.
              </p>
            </div>

            <p
              className="text-lg font-semibold text-gray-700 mt-4 opacity-0 animation-fade-in"
              style={{ animationDelay: "3s" }}
            >
            Health begins with HealthNest!
            </p>
            <p
              className="text-base text-gray-600 leading-relaxed opacity-0 animation-fade-in"
              style={{ animationDelay: "3.3s" }}
            >
            
            </p>
          </div>

          {/* Image Section */}
          <div className="flex-1">
            <img
              src={imageUrl}
              alt="Who We Are"
              className="w-full h-auto rounded-lg shadow-xl transition duration-300 transform hover:scale-105"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
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

        .animation-fade-in {
          animation: fadeIn 1s forwards;
        }
      `}</style>
    </>
  );
};

export default Biography;