






import React from "react";

const Dna = () => {
  return (
    <div className="container mt-[50px] flex justify-center mx-auto px-[1rem] group">
      {/* Wrapping the entire section in an <a> tag with group class */}
      <a href="/category/uncategorized/" className="w-full group" aria-label="Learn more about our mission">
        <div className="relative size-full py-[50px] px-[50px] lg:px-[100px] flex flex-col items-center justify-center text-center rounded-3xl min-h-[669px] lg:min-h-[493px] overflow-hidden bg-gradient-to-b from-[#003399] to-[#55c1d9]">
          
          {/* Top Left: Black SVG background */}
          <div className="absolute top-[-1px] left-[-1px] w-[154px] h-[147px] flex items-center justify-center z-10">
            {/* Black SVG */}
            <svg 
              width="155" 
              height="148" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ffffff"
                fillRule="evenodd"
                d="M110.768 42.457C110.768 20.153 130.109 0 153.967 0H0v146.011c0-22.304 19.341-40.386 43.2-40.386h40.983c14.682 0 26.585-11.127 26.585-24.853z"
                clipRule="evenodd"
              />
            </svg>

            {/* Blue Hexagon SVG on top of the black SVG */}
            <svg
              className="absolute top-[-8px] left-[20px] translate-y-full cursor-pointer z-[20] max-md:w-[41px] max-md:h-[46px] -mt-[46px] md:-mt-[54px]"
              width="54" height="62" viewBox="0 0 54 62" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M5.83519 12.6681L20.1797 4.07869C23.8753 1.86581 28.4734 1.80341 32.2277 3.91519L47.8832 12.7214C51.6617 14.8468 54 18.845 54 23.1803V38.173C54 42.4131 51.7624 46.3384 48.1139 48.4987L32.4657 57.7641C28.5923 60.0576 23.7612 59.9904 19.9531 57.5901L5.60131 48.5441C2.11485 46.3465 0 42.5136 0 38.3924V22.9635C0 18.7445 2.21554 14.8355 5.83519 12.6681Z"
                fill="#003399"
              />
              <path
                d="M32.0742 36.2344C31.8633 36.4453 31.4766 36.4453 31.2656 36.2344L26.625 31.5586L21.9492 36.2344C21.7383 36.4453 21.3516 36.4453 21.1406 36.2344C20.9297 36.0234 20.9297 35.6367 21.1406 35.4258L25.8164 30.75L21.1406 26.1094C20.9297 25.8984 20.9297 25.5117 21.1406 25.3008C21.3516 25.0898 21.7383 25.0898 21.9492 25.3008L26.625 29.9766L31.2656 25.3008C31.4766 25.0898 31.8633 25.0898 32.0742 25.3008C32.2852 25.5117 32.2852 25.8984 32.0742 26.1094L27.3984 30.75L32.0742 35.4258C32.2852 35.6367 32.2852 36.0234 32.0742 36.2344Z"
                fill="#003399"
              />
            </svg>
          </div>
          {/* <div className="relative flex flex-col gap-2 max-w-full fade-in z-10">
           
          </div> */}
          {/* Mission Content */}
          <div className="w-full h-full relative items-center flex flex-col justify-center">
          <p className=" px-[40px] w-[80%] mx-auto mission-text text-white font-[Roboto-thin]">
            "Fall in love with your problem, not its solutions"
            </p>
            <p className="  w-[80%] mx-auto font-[Roboto-thin] text-[white] mt-[20px] text-[1.125rem]" style={{lineHeight:'1.75rem'}} >
            
              Guided by this phrase since the very beginnings of InovaYa, we believe that a deep understanding of water challenges is the key to developing sustainable, effective and truly responsive solutions. That's why we're committed to challenging our certainties, pushing back the boundaries of innovation, and working tirelessly to ensure a future where water, a vital resource, is preserved and accessible to all.
            </p>

            {/* Right-Bottom Corner SVG */}
            <svg
              className="absolute right-0 bottom-[-110px] transition-all duration-500 ease-in-out group-hover:w-[263px] group-hover:h-[181]"
              width="300px"
              height="181"
              viewBox="0 0 663 181"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M0 181h662.976L565.604 24.944A53 53 0 0 0 520.592 0L126.868.35a53 53 0 0 0-46.874 28.354z"
                clipRule="evenodd"
              />
               <text x="33%" y="60%" fill="black" font-size="18" font-family="Nunito-thin" style={{fontSize:'40px'}}>• Our DNA
               </text>
            </svg>
          </div>

        </div>
      </a>
    </div>
  );
};

export default Dna;
