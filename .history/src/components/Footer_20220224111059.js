import React from "react";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="text-center text-white bg-gray-700">
      <div className="pt-9">
        <div className="flex justify-center items-center space-x-5 mb-9">
          <a href="#">
            <BsFacebook />
          </a>
          <a href="#">
            <BsTwitter />
          </a>
          <a href="#">
            <BsInstagram />
          </a>
        </div>
      </div>

      <div className="w-full text-center bg-gray-800 text-gray-100 p-4">
        © 2021 Copyright: &nbsp;
        <a className="text-gray-200" href="#">
          Campus Hostels
        </a>
      </div>
    </footer>
  );
};

export default Footer;
