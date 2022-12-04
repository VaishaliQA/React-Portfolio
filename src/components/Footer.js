import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

// footer section
function Footer() {
  return (
    <div className="footer-div">
      <footer>
        <ul>
          <a href="https://github.com/VaishaliQA" target="blank">
            <li>
              <FaGithub />
            </li>
          </a>
          <a href="https://www.linkedin.com" target="blank">
            <li>
              <FaLinkedin />
            </li>
          </a>
          <a href="https://www.twitter.com" target="blank">
            <li>
              <FaTwitter />
            </li>
          </a>
          <a href="https://www.instagram.com" target="blank">
            <li>
              <FaInstagram />
            </li>
          </a>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
