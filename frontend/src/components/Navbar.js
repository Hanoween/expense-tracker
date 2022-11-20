import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="topnav">
                <Link to="/" className="active" >Home</Link>
                <Link to="/Summary">Summary</Link>
                <a href="#Wants">Logout</a>
            </div>
        </div>
    )
}

export default Navbar;