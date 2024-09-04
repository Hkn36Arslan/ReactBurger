import { Link } from "react-router-dom";
import burgerLogo from "../../assets/images/burgerLogo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "red" }}>
      <div className="container-fluid">
        <img
          src={burgerLogo}
          alt="Logo"
          className="d-inline-block align-text-top logo"
        />
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white textNav " to="/">
                Anasayfa
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white textNav " to="/menu">
                Menü
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white textNav " to="/about">
                Hakkımızda
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white textNav" to="/contact">
                İletişim
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
