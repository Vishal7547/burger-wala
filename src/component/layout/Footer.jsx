import React from "react";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
function Footer() {
  return (
    <footer>
      <div>
        <h2>Baba Pani Puri</h2>
        <p>We are trying to give you the best test possible.</p>
        <br />
        <em>We give attention to genuine feedback.</em>
        <strong>All right recived @babapanipuri</strong>
      </div>
      <aside>
        <h4>Follow us</h4>
        <a href="https://youtube.com">
          <AiFillGithub />
        </a>
        <a href="https://youtube.com">
          <AiFillLinkedin />
        </a>
        <a href="https://youtube.com">
          <AiFillInstagram />
        </a>
      </aside>
    </footer>
  );
}

export default Footer;
