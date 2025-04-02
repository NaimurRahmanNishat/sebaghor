import { Link } from "react-router";
import payment from "../../assets/payment.png";
import { Facebook, Github, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <>
      <section className="w-full bg-red-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col text-center items-center justify-center pt-10 md:pb-24 pb-16 text-white/75">
            <p>© 2021 Sebaghar Limited. All Rights Reserved.</p>
            <p>© Sebaghar| Contact us : 8801951900200</p>
            <p>
              B-25, Mannan Plaza, 4th Floor, Khilkhet, Dhaka-1215, Bangladesh |
              Email : support@sebaghar.com
            </p>
            <p>Trade License Number-446204</p>
          </div>
          <div className="flex items-center justify-center pb-4">
            <img src={payment} alt="payment" />
          </div>
        </div>
      </section>
      <div className="bg-red-800 w-full pt-6 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
          <ul className="flex items-center flex-wrap text-white/80 gap-4 md:px-60">
            <li><Link to="/about" className="underline">About Us</Link></li>
            <li><Link to="/contact" className="underline">Contact Us</Link></li>
            <li><Link to="/privacy" className="underline">Privacy policy</Link></li>
            <li><Link to="/terms" className="underline">Terms & Conditions</Link></li>
            <li><Link to="/refund" className="underline">Refund policy</Link></li>
          </ul>
          <div className="flex items-center gap-4 pt-4 text-white">
            <Facebook/>
            <Twitter/>
            <Instagram/>
            <Github/>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
