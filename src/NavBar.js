import { NavLink } from "react-router-dom";
import "./NavBar.css"

function NavBar() {
    return (
        <div className="navbar">
            <h1>Woof (logo)</h1>
            <div className="nav-links">
                <NavLink to="/">Register</NavLink>
                <NavLink to="/">Login</NavLink>
            </div>
           
        </div>
      )}
export default NavBar