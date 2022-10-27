import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <NavLink to="/">
            <a className="btn btn-secondary" href="#" role="button">
              Home
            </a>
          </NavLink>
          <NavLink to="/user">
            <a className="btn btn-secondary" href="#" role="button">
              Add New Restaurant
            </a>
          </NavLink>
          <NavLink to="favorites">
            <a className="btn btn-secondary" href="#" role="button">
              Favorites
            </a>
          </NavLink>
        </div>
    )
}

export default NavBar;