import { Link } from "react-router-dom";
import "../../styles/services-styles/service-nav.scss";

function ServicesNavigation() {
  return (
    
      <nav>
        <ul className={"product-list-nav"}>
          <li>
            <Link
              to="/services"
            >
              Back to services
            </Link>
          </li>
        </ul>
      </nav>

  );
}

export default ServicesNavigation;
