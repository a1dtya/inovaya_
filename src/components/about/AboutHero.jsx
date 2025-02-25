import React from "react";
import Image from "next/image";
import ImageLogo from '../../assets/images/logo-inovaya-horizontal.png';

const AboutHero = () => {
  return (
    <div className="about-banner w-screen h-screen min-h-screen relative flex items-center justify-center">
      {/* Gradient Overlay */}
      <div className="about-banner-gradient-bg absolute inset-0 bg-gradient-to-r from-[#039] to-[#55c1d9] opacity-80"></div>
      
      {/* Logo Container */}
      <div className="about-banner-logo relative z-10">
        {/* <div className="image-wrapper mask">
          <Image
            width={200}
            height={100}
            alt="image"
            src={ImageLogo}
            loading="lazy"
          />
        </div> */}
      </div>

      {/* Centered Masked SVG */}
      <div className="absolute inset-0 flex justify-center items-center z-1">
        <div
          className="mask-svg-overlay flex justify-center items-center"
          style={{
            position: "absolute",
            bottom:'-30px',
            right:'180px',
            zIndex: 1 , 
            width: "463px",
            height: "181px",
            background: "url('data:image/svg+xml;charset=utf-8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22663%22 height=%22181%22 fill=%22none%22 preserveAspectRatio=%22none%22><path fill=%22%23fff%22 fill-rule=%22evenodd%22 d=%22M0 181h662.976L565.604 24.944A53 53 0 0 0 520.592 0L126.868.35a53 53 0 0 0-46.874 28.354z%22 clip-rule=%22evenodd%22/></svg>') no-repeat center/contain",
          }}
        >

<div className="image-wrapper mask z-[3]">
          <Image
            width={200}
            height={100}
            alt="image"
            src={ImageLogo}
            loading="lazy"
          />
        </div>



        </div>
      </div>

      {/* Content */}
      <div className="relative z-[10] flex justify-start items-center w-full px-[1rem]">
        <div className="w-1/2">
          <h2 className="about-banner-text text-white">
            InovaYa, a <span>committed impact</span> company
          </h2>
          <div className="mt-[30px] flex-row flex gap-[1rem]">
            <div>
              <a className="btn-primary" href="/en/blog/">
                Our news
              </a>
            </div>
            <div>
              <a className="btn-reverse" href="/en/blog/">
                Join us ❤️
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;





