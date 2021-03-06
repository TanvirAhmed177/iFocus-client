import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGooglePlusG,
  faTwitter,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarker,
  faPhone,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";

import Logo from "../../../images/BB.png";

const Footer = () => {
  return (
    // <footer className="footer ftco-section">
    //   <div className="container">
    //     <div className="row mb-5">
    //       <div className="col-md-6 col-lg">
    //         <div className=" mb-4">
    //           <h2 className=" text-brand logo">
    //             <a
    //               href="/home"
    //               className="text-brand"
    //               style={{ textDecoration: "none" }}
    //             >
    //               iFocus<span>.</span>
    //             </a>
    //           </h2>
    //           <p>
    //             Far far away, behind the word mountains, far from the countries
    //             Vokalia and Consonantia, there live the blind texts.
    //           </p>
    //           <ul className="list-unstyled float-md-left float-lft mt-4">
    //             <li className="list-inline-item">
    //               <a
    //                 href="//facebook.com"
    //                 style={{
    //                   fontSize: "30px",
    //                 }}
    //               >
    //                 <FontAwesomeIcon
    //                   className="icon active-icon mr-2"
    //                   icon={faFacebookF}
    //                 />
    //               </a>
    //             </li>

    //             <li className="list-inline-item">
    //               <a
    //                 href="//google.com"
    //                 style={{
    //                   fontSize: "30px",
    //                 }}
    //               >
    //                 <FontAwesomeIcon
    //                   className="icon mr-2"
    //                   icon={faGooglePlusG}
    //                 />
    //               </a>
    //             </li>

    //             <li className="list-inline-item">
    //               <a
    //                 href="//instagram.com"
    //                 style={{
    //                   fontSize: "30px",
    //                 }}
    //               >
    //                 <FontAwesomeIcon className="icon mr-2" icon={faInstagram} />
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //       <div className="col-md-6 col-lg">
    //         <div className=" mb-4 ml-md-5">
    //           <h2 className=" text-brand ">Services</h2>
    //           <ul className="list-unstyled">
    //             <li>
    //               <a href="/home" className="py-1 d-block text-decoration-none">
    //                 <span className="fa fa-check mr-3"> </span>
    //                 Food and Beverage
    //               </a>
    //             </li>
    //             <li>
    //               <a href="/home" className="py-1 d-block text-decoration-none">
    //                 <span className="fa fa-check mr-3"></span>Commercial Product
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 href="/home"
    //                 className="py-1 d-block text-decoration-none list-style-none"
    //               >
    //                 <span className="fa fa-check mr-3"></span>Architecture and
    //                 Interior
    //               </a>
    //             </li>
    //             <li>
    //               <a href="/home" className="py-1 d-block text-decoration-none">
    //                 <span className="fa fa-check mr-3"></span>Portrait
    //                 photography
    //               </a>
    //             </li>
    //             <li>
    //               <a href="/home" className="py-1 d-block text-decoration-none">
    //                 <span className="fa fa-check mr-3"></span>General Lifestyle
    //                 photography
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //       <div className="col-md-6 col-lg">
    //         <div className=" mb-4">
    //           <h2 className=" text-brand ">Contact information</h2>
    //           <div className="block-23 mb-3">
    //             <ul className="list-unstyled">
    //               <li>
    //                 <FontAwesomeIcon icon={faMapMarker} className="mr-2" />
    //                 <span className="text">
    //                   203 Fake St. Mountain View, San Francisco, California, USA
    //                 </span>
    //               </li>
    //               <li>
    //                 <FontAwesomeIcon icon={faPhone} className="mr-2" />
    //                 <span className="text">+2 392 3929 210</span>
    //               </li>
    //               <li>
    //                 <FontAwesomeIcon icon={faMailBulk} className="mr-2" />
    //                 <span className="text">info@yourdomain.com</span>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-md-6 col-lg">
    //         <div className=" mb-4">
    //           <h2 className=" text-brand ">Business Hours</h2>
    //           <div className="opening-hours">
    //             <h4>Opening Days:</h4>
    //             <p className="pl-3">
    //               <span>Monday ??? Friday : 9am to 20 pm</span>
    //               <span>Saturday : 9am to 17 pm</span>
    //             </p>
    //             <h4>Vacations:</h4>
    //             <p className="pl-3">
    //               <span>All Sunday Days</span>
    //               <span>All Official Holidays</span>
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="row">
    //       <div className="col-md-12 text-center">
    //         <p>Copyright ??{new Date().getFullYear()} All rights reserved.</p>
    //       </div>
    //     </div>
    //   </div>
    // </footer>

    <div class="footer-dark">
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-3 item">
              <h3>Photography Services</h3>
              <ul>
                <li>
                  <a href="#">Food and Beverage</a>
                </li>
                <li>
                  <a href="#">Commercial Product and Lifestyle </a>
                </li>
                <li>
                  <a href="#">Architecture and Interior </a>
                </li>
                <li>
                  <a href="#">Portrait </a>
                </li>
                <li>
                  <a href="#">General Lifestyle </a>
                </li>
                <li>
                  <a href="#">Conceptual </a>
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="#">Company</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div class="col-md-6 item text">
              <img
                src={Logo}
                height="45px"
                width="90"
                alt=""
                className="mb-2"
                style={{ marginLeft: "-10px" }}
              />
              <p>
                iFocus is a company deals with some photography services with
                secure online payment option. We take pictures to record our
                personal vision of the world.
              </p>
            </div>
            <div class="col item social">
              <a href="//facebook.com">
                <FontAwesomeIcon
                  className="icon ion-social-facebook"
                  icon={faFacebookF}
                />
              </a>

              <a href="//google.com">
                <FontAwesomeIcon
                  className="icon ion-social-google"
                  icon={faGoogle}
                />
              </a>

              <a href="//instagram.com">
                <FontAwesomeIcon
                  className="icon ion-social-instagram"
                  icon={faInstagram}
                />
              </a>
              <a href="//twitter.com">
                <FontAwesomeIcon
                  className="icon ion-social-instagram"
                  icon={faTwitter}
                />
              </a>
            </div>
          </div>
          <p class="copyright">iFocus ?? 20121</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
