import { Link } from "react-router-dom";

export default function HeaderComponent() {
  return (
    <header style={{ fontFamily: "Roboto Mono" }}>
      <nav className="navbar navbar-light navbar-expand-md">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ color: "white" }}>
            Edwin Christie
          </Link>
          <button
            data-toggle="collapse"
            className="navbar-toggler"
            data-target="#navcol-1"
            style={{ color: "white", background: "white" }}
          >
            <span className="sr-only" style={{ color: "white" }}>
              Toggle navigation
            </span>
            <span className="navbar-toggler-icon" style={{ color: "white" }} />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navcol-1"
          >
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/"
                  style={{ color: "white" }}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/projects"
                  style={{ color: "white" }}
                >
                  Work
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/contactMe"
                  style={{ color: "white" }}
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
