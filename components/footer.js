import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-dark footer-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <img
                src="images/logo_white.png"
                alt="logo"
                className="footer-logo"
                height="22"
              />
              <p className="about-text mt-4 pt-1">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classNameical Latin literature
                from 45 BC,making it over 2000 years old.
              </p>
            </div>

            <div className="col-lg-2 col-sm-6">
              <h5>Company</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Features</a>
                </li>
                <li>
                  <a href="">FAQ</a>
                </li>
                <li>
                  <a href="">Services</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-sm-6">
              <h5>Support</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="">Help &amp; Support</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4">
              <div>
                <h5>Contact us</h5>
                <ul className="list-unstyled">
                  <li>
                    <strong className="font-secondary font-14">Address:</strong>{" "}
                    795 Folsom Ave, Suite 600 CA 94107
                  </li>
                  <li>
                    <strong className="font-secondary font-14">Phone:</strong>{" "}
                    (123) 456-7890, 123-4567 89{" "}
                  </li>
                  <li>
                    <strong className="font-secondary font-14">Email:</strong>{" "}
                    <a href="mailto:first.last@example.com">
                      first.last@example.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-one-alt">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <p className="font-13 copyright">
                  © 2020 Caxos. Design by Coderthemes
                </p>
              </div>
              <div className="col-sm-6">
                <ul className="list-inline footer-social-one float-right">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="ri-facebook-line"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="ri-twitter-line"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="ri-linkedin-line"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="ri-dribbble-line"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="ri-skype-line"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
