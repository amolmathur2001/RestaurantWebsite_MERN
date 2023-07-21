import React from "react";
import {BsGooglePlay} from "react-icons/bs";
import { FaFacebookSquare,FaLinkedin,FaTwitter} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { DiReact } from "react-icons/di";
const Footer = (props) => {
  return (
    <div>
      <hr />
      <div className=""style={{height : "130px",color : `${props.color}`}}>
        <p>© 2023 Barbeque City</p>
        <BsGooglePlay /> <span className="mx-2"><FaFacebookSquare /></span>
        <span className="mx-2"><FaLinkedin /></span>
        <span className="mx-2"><FaTwitter /></span>
        <span><FaInstagram /></span>
        <br/>
        <br />
        <p>Made by Amol Mathur using <span><DiReact /></span></p>
      </div>
    </div>
  );
};

export default Footer;
