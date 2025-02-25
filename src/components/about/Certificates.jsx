import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { TfiClose } from "react-icons/tfi"; // Import Close icon
import { GoArrowRight } from "react-icons/go";
import { PiPlant } from "react-icons/pi";


const SwiperComponent = () => {
  const [data, setData] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null); // Track selected certificate

  useEffect(() => {
    fetch("/data/certificates.json")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  useEffect(() => {
    if (data) {
      new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  }, [data]);

  if (!data) return <p>Loading...</p>;

  const handleClickSlide = (certificate) => {
    setSelectedCertificate(certificate); // Set the selected certificate when clicked
  };

  const handleCloseModal = () => {
    setSelectedCertificate(null); // Close the modal by resetting the selected certificate
  };

  return (
    <div className="w-full certificate flex justify-center flex-col items-center">
      <div className="w-[90%] text-center">
        <h2 className="certificate-title text-[40px]">
          Our <strong>commitments</strong> for quality and environmental
          performance
        </h2>
      </div>

      <div className="swiper mySwiper mt-[50px]">
        <div className="swiper-wrapper flex justify-center w-[80%] overflow-hidden overflow-x-auto">
          {/* Slide Content with updated class names */}
          {data.certificates.map((certificate, index) => (
            <div
              key={index}
              className="swiper-slide-certificate w-full my-[20px] flex justify-center relative"
              style={{ width: "350px", height: "180px", margin: "0 30px" , padding:'0'}}
              onClick={() => handleClickSlide(certificate)} // Handle click to show modal
            >
              {/* Add the SVG Icon at the top-left corner */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="102"
                height="97"
                fill="none"
                className="absolute bottom-[-8px] right-[-9px] m-2"
              >
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M28.619 68.794C28.619 83.612 15.806 97 0 97h102V0c0 14.818-12.813 26.83-28.619 26.83h-27.15c-9.727 0-17.612 7.392-17.612 16.51z"
                  clipRule="evenodd"
                />
              </svg>
              
              <GoArrowRight
                style={{ position: "absolute", bottom: "25px", right: "25px" }}
              />



              {/* data:image/svg+xml;charset=utf-8, */}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="97"
                fill="none"
                className="svg-rotate absolute top-[-8px] right-[240px] m-2"
              >
                <path
                  fill="#fff"
                  fill-rule="evenodd"
                  d="M28.619 68.794C28.619 83.612 15.806 97 0 97h102V0c0 14.818-12.813 26.83-28.619 26.83h-27.15c-9.727 0-17.612 7.392-17.612 16.51z"
                  clip-rule="evenodd"
                />
                <text
                  x="10"
                  y="50"
                  fill="black"
                  font-size="16"
                  font-family="Arial"
                >
                  <GoArrowRight />
                </text>
                
           </svg>
           <PiPlant 
style={{ position: "absolute", top: "25px", left: "25px" }}

/>
   

              {/* Certificate Image */}
              <Image
                width={100}
                height={100}
                src={certificate.images}
                alt={`Certificate ${index}`}
                className="mx-auto object-contain "
                style={{ height: "100px", width: "100px", margin: "auto" }}
              />
            </div>
          ))}
        </div>

        {/* Default Swiper Pagination */}
        <div className="swiper-pagination"></div>
      </div>

      {/* Modal Overlay and Modal Content */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleCloseModal}
        ></div>
      )}

      {selectedCertificate && (
        <div className="certificate-modal-right fixed inset-0 z-50 flex justify-end items-center transition-all duration-500">
          <div className="bg-white p-8 rounded-lg relative max-w-lg w-[400px]">
            <button
              className="absolute top-0 left-0 p-4"
              onClick={handleCloseModal} // Close modal on button click
            >
              {/* Hexagon Close Icon */}
              <svg
                className="hexagon-close"
                width="54"
                height="58"
                viewBox="0 0 54 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.83519 12.6681L20.1797 4.07869C23.8753 1.86581 28.4734 1.80341 32.2277 3.91519L47.8832 12.7214C51.6617 14.8468 54 18.845 54 23.1803V38.173C54 42.4131 51.7624 46.3384 48.1139 48.4987L32.4657 57.7641C28.5923 60.0576 23.7612 59.9904 19.9531 57.5901L5.60131 48.5441C2.11485 46.3465 0 42.5136 0 38.3924V22.9635C0 18.7445 2.21554 14.8355 5.83519 12.6681Z"
                  fill="#A3FFA7"
                />
              </svg>
            </button>

            <div className="flex flex-col items-center">
              <Image
                src={selectedCertificate.images}
                width={300}
                height={252}
                alt={`Certificate ${selectedCertificate.text}`}
              />
              <h3 className="mt-4 text-xl font-bold">
                {selectedCertificate.text}
              </h3>
              <p className="text-gray-700 mt-2">
                {selectedCertificate.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default dynamic(() => Promise.resolve(SwiperComponent), { ssr: false });
