import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import '../home/Footer.css'

export default function Footer() {
  return (
    <div className="bg-[#04102a]">
      <div className="mt-10 text-white flex flex-col md:flex-row justify-evenly pt-10 md:pt-20 p-5 md:pl-20">
        <div className="w-full md:w-1/4 text-left p-5 mb-10 md:mb-0">
          <h1 className="text-2xl font-bold">About Us</h1>
          <p className="leading-8 text-[#8A99B4] mt-5 text-justify">
            Ombrulla is an AI-driven company providing specialized services like
            AI Visual Inspection, AI People Tracking, AI Defect Detection, AI
            Infrastructure Inspection, and AI Data Analytics. Our tailored
            solutions empower businesses with data-driven decisions, automation,
            and improved bottom lines. PETRAN, our cutting-edge tracking
            solution, utilizes AI and IoT to monitor assets, machinery,
            equipment, people, and facilities, enabling comprehensive
            performance management and environmental sustainability.
          </p>
        </div>
        <div className="w-full md:w-1/4 text-left p-5 mb-10 md:mb-0">
          <h1 className="text-2xl font-bold">Our Services</h1>
          <p className="text-left leading-10 text-[#8A99B4] mt-5">
            AI Infrastructure Inspection <br />
            AI Visual Inspection <br />
            AI Data Analytics <br />
            AI People Tracking
          </p>
        </div>
        <div className="w-full md:w-1/4 text-left p-5 mb-10 md:mb-0">
          <h1 className="text-2xl font-bold">Our Solutions</h1>
          <p className="text-left leading-10 text-[#8A99B4] mt-5">
            Asset Performance Management <br />
            RTLS - Workplace Safety <br />
            Environmental Sustainability
          </p>
        </div>
        <div className="w-full md:w-1/4 text-left p-5">
          <h1 className="text-2xl font-bold">Reach Us</h1>
          <p className="text-left text-[#8A99B4] leading-8 mt-5">
            United Kingdom, 7 Bell Yard <br />
            London, WC2A 2JR <br />
            +44 7879 993892
          </p>
          <p className="text-left leading-8 text-[#8A99B4] mt-5">
            Germany, Schützenstraße 51A <br />
            Lübeck, 23558 <br />
            +49 179 512 5812
          </p>
          <p className="text-left leading-8 text-[#8A99B4] mt-5">
            India, No. 154/20, Royal Space <br />
            Third Floor TI, HSR Layout, <br />
            Bangalore, Karnataka <br />
            560102 <br />
            +91 85900 56435
          </p>
        </div>
      </div>
      <div className="flex justify-center md:justify-start mb-2">
        <p className="text-[#8A99B4] text-xs mt-10 md:mt-0">
          © 2020 Ombrulla, Inc. All rights reserved.
        </p>
      </div>
      <div className="text-white  justify-center items-center text-2xl ftt ">
        <div className="ecter">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedinIn />
          <FaYoutube />
        </div>
      </div>
    </div>
  );
}
