import React from "react";
import Image from "next/image";

const Commitment = () => {
  return (
    <div className="commitment-wrapper container mx-auto px-4 lg:px-16 py-20 flex flex-col lg:flex-row gap-10">
      
      {/* Left Section - Info */}
      
      {/* Right Section -  Image */}
      <div className="commitment-right-image flex-1 relative">
        {/* Wrapper div for Image */}
        <div className="sticky top-10 relative">
          {/* The image */}
          <Image 
            width={351}
            height={369}
            src="/images/csr.jpg" 
            alt="Commitment" 
            className="w-full rounded-lg"
            style={{borderRadius:'30px', width:'500px', height:"350px",  marginLeft:'30px'}}
          />
          {/* The SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="113"
            height="116"
            fill="none"
            className="absolute top-[-9px] right-[9px] m-2"
          >
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M0 0c17.51 0 31.705 16.01 31.705 33.73v30.44c0 10.905 8.735 19.745 19.51 19.745h30.08C98.805 83.915 113 98.28 113 116V0zm87.943 2.575 18.219 10.904A12 12 0 0 1 112 23.776v19.682a12 12 0 0 1-5.604 10.153L88.17 65.094a12 12 0 0 1-12.508.174L55.888 53.566A12 12 0 0 1 50 43.239V23.993a12 12 0 0 1 6.12-10.46L75.9 2.412a12 12 0 0 1 12.043.163"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      <div className="commitment-left-info flex-1 flex flex-col gap-6">
        <h2 className="commitment-title">
          Our CSR policy <span className="italics">CSR</span>
        </h2>
        <p className="commitment-description text-lg text-gray-700 leading-relaxed">
          Aware of our key role as a responsible player,
          <strong> we are committed to reducing our water footprint and that of our customers, and to facilitating access to drinking water for all, worldwide. While promoting sobriety and efficiency,</strong>  our team is doing its utmost to become a benchmark in sustainable and optimized water treatment for small and medium-sized volumes.
          Since 2018, InovaYa has been working every day to reinvent the world of water by promoting sobriety and sustainability. With an innovative approach,
          To achieve this, we work closely with our customers and partners to bring high value-added projects to life.
        </p>
        <p className="commitment-description text-lg text-gray-700 leading-relaxed">
          Furthermore, as an ESUS, <strong> InovaYa places social and environmental impact at the heart of its activity</strong> Inclusion and diversity are also an integral part of our HR approach and our DNA. They encourage us to constantly question ourselves and to innovate through our different talents.
        </p>
      </div>

    </div>
  );
};

export default Commitment;
