import React from "react";
import Image from "next/image";
const images = [

  "/images/allies2.png",
  "/images/allies3.png",
  "/images/allies4.jpg",
  "/images/allies5.jpg",
  "/images/allies6.png",
  "/images/allies7.png",
  "/images/allies8.png",
  "/images/allies9.png",
  "/images/allies10.png",
  "/images/allies11.png",
  "/images/allies12.png",
  "/images/allies1.jpg",
  "/images/allies13.png",
  "/images/allies14.png",
  "/images/allies15.jpg",
  "/images/allies16.jpg",
  "/images/allies17.png",
  "/images/allies4.jpg",
  "/images/allies5.jpg",
  "/images/allies6.png",
  "/images/allies7.png",
  "/images/allies8.png",
  "/images/allies9.png",
  "/images/allies10.png",
  "/images/allies11.png",
 
];

const Allies = () => {
  return (
    <div className="allies-wrapper container mx-auto px-6 py-10">
      
      <div>
        <h2 className="allies-title ">
        The &nbsp; <strong> solid allies </strong> &nbsp; of our adventure
        </h2>
      </div>
      {/* Allies Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className=" allies-grid-box relative h-[209px] border border-primary  backdrop-blur-[10px] rounded-3xl flex items-center justify-center"
          >
            <Image
            width={100}
            height={100}
              src={src}
              alt={`Allies ${index + 1}`}
              className="w-[80%] h-auto object-contain sm:h-[80%]  "
              style={{width:'80%', objectFit:'contain'}}
            />
          </div>
        ))}
      </div>

    </div>
  );
};

export default Allies;
