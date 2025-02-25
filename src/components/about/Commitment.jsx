import React from "react";
import Image from "next/image";

const Commitment = () => {
  return (
    <div className="commitment-wrapper container mx-auto px-4 lg:px-16 py-20 flex flex-col lg:flex-row gap-10">
      
      {/* Left Section - Info */}
      <div className="commitment-left-info flex-1 flex flex-col gap-6">
        <h2 className="commitment-title">
          Water, our <span className="italics">commitment</span>
        </h2>
        <p className="commitment-description text-lg text-gray-700 leading-relaxed">
          Since 2018, InovaYa has been working every day to reinvent the world of water by promoting sobriety and sustainability. With an innovative approach, <strong> we aim to enable decentralized, local water management by adapting our solutions according to the source used and the desired use. </strong> To achieve this, we work closely with our customers and partners to bring high value-added projects to life.
        </p>
        <p className="commitment-description text-lg text-gray-700 leading-relaxed">
          As both <strong> a Young Innovative Company and a Social Solidarity Company, </strong> the quest for ever greater positive impact permeates everything we do.
        </p>
      </div>

      {/* Right Section -  Image */}
      <div className="commitment-right-image flex-1 relative">
        {/* Wrapper div for Image */}
        <div className="sticky top-10 relative">
          {/* The image */}
          <Image 
            width={504}
            height={369}
            src="/images/commitment.jpg" 
            alt="Commitment" 
            className="w-full rounded-lg"
            style={{borderRadius:'30px', width:'500px', height:"350px",  marginRight:'30px'}}

          />
          {/* The SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="113"
            height="116"
            fill="none"
            className="absolute top-[-9px] left-[-8px] m-2"
          >
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M113 0C95.49 0 81.295 16.01 81.295 33.73v30.44c0 10.905-8.735 19.745-19.51 19.745h-30.08C14.195 83.915 0 98.28 0 116V0zM25.057 2.575 6.837 13.48A12 12 0 0 0 1 23.776v19.682a12 12 0 0 0 5.604 10.153L24.83 65.094a12 12 0 0 0 12.507.174l19.774-11.702A12 12 0 0 0 63 43.239V23.993a12 12 0 0 0-6.12-10.46L37.1 2.412a12 12 0 0 0-12.043.163"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

    </div>
  );
};

export default Commitment;
