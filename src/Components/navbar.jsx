import "./Navbar.css";
import { Link } from 'react-router-dom'
import logo from "../images/practo.svg"
export const Navigation = () => {
    return <div className="navbar-area">
        <nav className="nav-container">
            <div className="div-nav-left">
                <Link to="/"><img src={logo} alt="practo-logo" className='nav-logo' /></Link>
            </div>
            <div className="div-nav-middle">
                <div className="div-nav-middle-item">
                    <div>Find Doctors</div>
                </div>

                <div className="div-nav-middle-item">
                    <div>Video Consult</div>
                </div>
                
                    <div className="div-nav-middle-item">
                        <div>Medicines</div>
                    </div>
                
                
                    <div className="div-nav-middle-item">
                        <div>Lab Tests</div>
                    </div>
               
                
                <div className="div-nav-middle-item">
                    <div>Surgeries</div>
                </div>
                
                </div>
            <div className="div-nav-right">
                <Link to="/Auth">
                    <button className="btn-login">
                        Login / Signup
                    </button>
                </Link>
            </div>
        </nav>
    </div>
}