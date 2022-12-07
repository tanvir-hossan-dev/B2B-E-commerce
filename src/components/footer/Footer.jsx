import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_bg">
      <div className="w-[1140px] mx-auto">
        <div className="grid grid-cols-4">
          <div>
            <h3 className="cursor-pointer pb-4 text-xl font-bold">Services</h3>
            <ul>
              <li className="text-white cursor-pointer font-sans text-base">Email Marketing</li>
              <li className="text-white cursor-pointer font-sans text-base">Campains</li>
              <li className="text-white cursor-pointer font-sans text-base">Branding</li>
              <li className="text-white cursor-pointer font-sans text-base">Offline</li>
            </ul>
          </div>
          <div>
            <h3 className="cursor-pointer pb-4 text-xl font-bold">Services</h3>
            <ul>
              <li className="text-white cursor-pointer font-sans text-base">Email Marketing</li>
              <li className="text-white cursor-pointer font-sans text-base">Campains</li>
              <li className="text-white cursor-pointer font-sans text-base">Branding</li>
              <li className="text-white cursor-pointer font-sans text-base">Offline</li>
            </ul>
          </div>
          <div>
            <h3 className="cursor-pointer pb-4 text-xl font-bold">Services</h3>
            <ul>
              <li className="text-white cursor-pointer font-sans text-base">Email Marketing</li>
              <li className="text-white cursor-pointer font-sans text-base">Campains</li>
              <li className="text-white cursor-pointer font-sans text-base">Branding</li>
              <li className="text-white cursor-pointer font-sans text-base">Offline</li>
            </ul>
          </div>
          <div className="pt-4">
            <h3 className="text-black cursor-pointer font-bold text-[32px]">B2B ECOMMERCE</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
