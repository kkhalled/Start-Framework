
import './NavBar.css';
import { Link,NavLink } from "react-router";
export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg py-4 position-fixed start-0 end-0 z-3  ">
        <div className="container ">
          <NavLink className="navbar-brand no-active fs-2 fw-bold text-uppercase" to="/">
            Start Framework

          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-4 gap-2 fw-semibold">
              <li className="nav-item">
                <NavLink className="nav-link  " aria-current="page"  to="/about">
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink  className="nav-link"  to="/portfolio">
                  PORTFOLIO
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  CONTACT
                </NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
