import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-danger text-white py-3 d-flex flex-column justify-content-center align-items-center">
      <div className="container d-flex justify-content-center">
        <a href="https://www.instagram.com" className="text-white mx-3 icon-link icon-link-hover link-dark">
          <FaInstagram size={50} />
        </a>
        <a href="https://www.facebook.com" className="text-white mx-3 icon-link icon-link-hover link-dark">
          <FaFacebook size={50} />
        </a>
        <a href="https://www.twitter.com" className="text-white mx-3 icon-link icon-link-hover link-dark">
          <FaTwitter size={50} />
        </a>
      </div>
      <p className="mt-3">Tüm hakları saklıdır | BurgerYiyelim</p>
    </footer>
  );
};

export default Footer;
