import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <h4>Palo Alto</h4>
      <ul className="menu">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>ARCHIVE</li>
        <li>CONTACT</li>
      </ul>
      <hr />
      <p>
        Sus vitae felis blandit iaculis. Pellentesque at porttitor eros. Fusce
        posuere nunc sed massa rhoncus, at tincidunt justo viverra. Etiam
        finibus est in quam laoreet condimentum non vitae diam. Donec eget velit
        quis ante tempus imperdiet. Etiam sit amet maximus mi, ac tincidunt ex.
        In dui mauris, consequat porttitor felis quis, bibendum consequat felis.
        Morbi maximus, dolor sit amet vulputate laoreet, felis nisi ornare enim.
      </p>
      <hr />
      <p className="copyright">
        @ 2019 - Palo Alto. All rights Reserved. <br /> Designed & Developed by{" "}
        <br />
        <span>PixelBuddha Team</span> <br />
      </p>
      <div className="icons">
        <i className="fab fa-facebook-square" />
        <i className="fab fa-twitter-square" />
        <i className="fab fa-instagram" />
        <i className="fab fa-pinterest" />
      </div>
    </div>
  );
}
