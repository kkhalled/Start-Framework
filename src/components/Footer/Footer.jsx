import "./Footer.css";

export default function Footer() {
  return (
    <footer className="main-footer text-white text-center pt-5">
      <div className="container">
        <div className="row">
          {/* LOCATION */}
          <div className="col-md-4 mb-4">
            <h3 className="footer-title mb-3">LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>

          {/* AROUND THE WEB */}
          <div className="col-md-4 mb-4">
            <h3 className="footer-title mb-3">AROUND THE WEB</h3>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <a className="social-icon" href="#">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a className="social-icon" href="#">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a className="social-icon" href="#">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a className="social-icon" href="#">
                <i className="fa-solid fa-globe"></i>
              </a>
            </div>
          </div>

          {/* ABOUT */}
          <div className="col-md-4 mb-4">
            <h3 className="footer-title mb-3">ABOUT FREELANCER</h3>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created{" "}
              <br />
              by Route
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom bg-dark p-4 ">
        <p>Copyright © Your Website 2024</p>
      </div>
    </footer>
  );
}
