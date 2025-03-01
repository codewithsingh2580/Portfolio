import React from "react";

function Footer() {
  return (
    <footer>
      <h3 class="contact-title text-center">📞 Contact Me</h3>
      <div class="contact-container">
        <div class="contact-box">
          <ul class="contact-list">
            <li>
              <i class="fas fa-envelope"></i> <b>Email:</b>{" "}
              singhsonu6200@gmail.com
            </li>
            <li>
              <i class="fas fa-map-marker-alt"></i> <b>Address:</b> Angauta,
              Mirjapur, Siwan, Bihar, India
            </li>
            <li>
              <i class="fas fa-globe"></i> <b>Country:</b> India
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
