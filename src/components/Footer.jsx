'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full footer-wrapper bg-white text-gray-900 mt-8 text-center border-b border-blue-300 p-6">
      <div className="container mx-auto flex flex-col gap-8">

        {/* Column 1: Logo & Description (Full width) */}


        {/* Remaining 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-5 gap-8 w-full">

    {/* Column 1: Logo & Description (Full width) */}
    <div className="footer-col flex flex-col items-center lg:items-start">
          <Image src="/images/header-title.svg" alt="InovaYa Logo" width={120} height={60} />
          <p className="mt-4 text-sm text-gray-600 text-center lg:text-left">
            InovaYa is a company with a positive impact that develops innovative filtration and water treatment technologies.
          </p>
        </div>


          {/* Column 2: Your Needs */}
          <div className="footer-col text-center sm:text-left sm:items-center">
            <h3 className="font-bold mb-4 xs:text-center">Your Needs</h3>
            <ul className="space-y-2 xs:text-center">
              <li><Link href="/ngo">NGO</Link></li>
              <li><Link href="/local-authorities">Local Authorities</Link></li>
              <li><Link href="/industries">Industries</Link></li>
              <li><Link href="/building">Building</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Solutions */}
          <div className="footer-col text-center sm:text-left">
            <h3 className="font-bold mb-4 xs:text-center">Our Solutions</h3>
            <ul className="space-y-2 xs:text-center">
              <li><Link href="/complete-offer">Our Complete Offer</Link></li>
              <li><Link href="/treatment-units">Treatment Units</Link></li>
              <li><Link href="/safety-units">Safety Units</Link></li>
              <li><Link href="/pilot-units">Pilot Units</Link></li>
            </ul>
          </div>

          {/* Column 4: Quick Access */}
          <div className="footer-col text-center sm:text-left">
            <h3 className="font-bold mb-4 xs:text-center">Quick Access</h3>
            <ul className="space-y-2 xs:text-center">
              <li><Link href="/projects">Our Projects</Link></li>
              <li><Link href="/news">Our News</Link></li>
              <li><Link href="/press-room">Press Room</Link></li>
              <li><Link href="/join-us">Join Us ❤️</Link></li>
            </ul>
          </div>

          {/* Column 5: Social Networking */}
          <div className="footer-col text-center sm:text-left">
            <h3 className="font-bold mb-4 xs:text-center">Social Networking</h3>
            <ul className="space-y-2 xs:text-center">
              <li><Link href="https://www.linkedin.com">LinkedIn</Link></li>
              <li><Link href="https://www.facebook.com">Facebook</Link></li>
              <li><Link href="https://www.youtube.com">YouTube</Link></li>
              <li><Link href="https://twitter.com">X (Twitter)</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center">
        <p>&copy; {new Date().getFullYear()} InovaYa Clone. All rights reserved.</p>
      </div>
    </footer>
  );
}
