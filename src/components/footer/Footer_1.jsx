import React from "react";
import { FaInstagram, FaTelegram, FaLinkedin, FaBehance } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="title">
        <h1>Mickias Girma</h1>
      </div>

      <div className="social">
        <a href="https://www.instagram.com/micky_grma/">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/girmaMicky">
          <FaXTwitter />
        </a>
        <a href="https://t.me/micky_grma">
          <FaTelegram />
        </a>

        <a href="https://www.linkedin.com/in/micky23grma/">
          <FaLinkedin />
        </a>
        <a href="https://www.behance.net/mickiasgirma">
          <FaBehance />
        </a>
      </div>
      <p>© Copyright 2023 All Rights Reserved</p>
      <p>Designed by Natan</p>
    </section>
  );
};

export default Footer;
