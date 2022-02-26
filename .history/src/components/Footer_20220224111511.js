import React from "react";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="text-center text-white bg-gray-700">
      <div className="pt-6">
        <div class="flex justify-center items-center lg:justify-between b-2">
          <div class="mr-12 hidden lg:block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div className="flex justify-center items-center space-x-5">
            <a href="#">
              <BsFacebook className="text-xl" />
            </a>
            <a href="#">
              <BsTwitter className="text-xl" />
            </a>
            <a href="#">
              <BsInstagram className="text-xl" />
            </a>
          </div>
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
