import React from "react";
import {
  FaLocationDot,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

import { IoLogoFacebook } from "react-icons/io5";

import { HeaderContactsBox } from "./HeaderContacts.styles";

export default function HeaderContacts() {
  return (
    <HeaderContactsBox>
      <section>
        <div className="header-contacts-box-1">
          <div className="header-contacts-box-1-item">
            <IoMdMail />
            <span>contact@result-agency.com</span>
          </div>
          <div className="header-contacts-box-1-item">
            <FaPhoneAlt />
            <span>+351 910 774 611</span>
          </div>
          <div className="header-contacts-box-1-item">
            <FaLocationDot />
            <span>Rua do Pinheiro, 701 - Ermesinde</span>
          </div>
        </div>
        <div className="fake-image">
          <div className="float-social-network">
            <div className="circular-icon">
              <IoLogoFacebook />
            </div>
            <div className="circular-icon">
              <FaXTwitter />
            </div>
            <div className="circular-icon">
              <FaInstagram />
            </div>
            <div className="circular-icon">
              <FaYoutube />
            </div>
          </div>
        </div>
      </section>
    </HeaderContactsBox>
  );
}
