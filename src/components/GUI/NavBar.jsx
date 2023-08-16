import { Link } from "react-router-dom";
import "../../styles/gui-styles/Navbar.scss";
import mapLogo from "../../assets/MAphotography2.svg";

function NavBar() {
  return <header className="header">
    <nav>
        <div className="logo-container">
            <img src={mapLogo} alt="" />
            <Link className="logo" to="/"><h4>MAP Photography</h4></Link>
        </div>
        <ul className="list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/portfolio">Gallery</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><button>Login</button></li>
        </ul>
    </nav>
  </header>;
}
export default NavBar;
