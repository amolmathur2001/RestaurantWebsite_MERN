import React from "react";
import { Link} from "react-router-dom";
export default function NavbarNew() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            <h4>Barbeque City</h4>
          </Link>
          <h3 style={{color : "white"}}>Payment Gateway</h3>
        </div>
      </nav>
    </div>
  );
}
