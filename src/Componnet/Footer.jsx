import React from "react";
import x from "../assets/x.png";
import lind from "../assets/in.png";
import face from "../assets/facebook.png";
import mas from "../assets/Vector.png";

const Footer = () => {
  return (
    <div className="mt-4">
      <footer className="footer sm:footer-horizontal bg-black text-white p-10">
        <aside>
          <p className="text-2xl">CS — Ticket System</p>
          <p>
            Lorem Ipsum is simply dummy text of the <br /> printing and
            typesetting industry. Lorem <br /> Ipsum has been the industry's
            standard <br /> dummy text ever since the 1500s, when an <br />{" "}
            unknown printer took a galley of type and <br /> scrambled it to
            make a type specimen book.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Contact Saled</a>
        </nav>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Products & Services</a>
          <a className="link link-hover">Customer Stories</a>
          <a className="link link-hover">Download Apps</a>
        </nav>
        <nav>
          <h6 className="footer-title">Information</h6>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Terms of Conditions</a>

          <a className="link link-hover">Join Us</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social Links</h6>
          <div className=" flex gap-2 ">
            <img src={x} alt="" />
            <a className="link link-hover">@CS-Ticket System</a>
          </div>
          <div className=" flex gap-2 ">
            <img src={lind} alt="" />
            <a className="link link-hover">@CS-Ticket System</a>
          </div>
          <div className=" flex gap-2 ">
            <img src={face} alt="" />
            <a className="link link-hover">@CS-Ticket System</a>
          </div>
          <div className=" flex gap-2 ">
            <img src={mas} alt="" />
            <a className="link link-hover">support@cst.com</a>
          </div>
        </nav>
      </footer>
      <div className="bg-black ">
        <footer className="  text-white footer footer-horizontal footer-center p-4 border-t-2 border-gray-700  max-w-[1200px] mx-auto">
          <aside>
            <p>© 2025 CS — Ticket System. All rights reserved.</p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
