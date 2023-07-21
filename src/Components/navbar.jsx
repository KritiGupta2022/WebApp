import "./Navbar.css";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import logo from "../images/practo.svg";
export const Navigation = () => {
  return (
    <div className="navbar-area">
      <nav className="nav-container">
        <div className="div-nav-left">
          <Link to="/">
            <img src={logo} alt="practo-logo" className="nav-logo" />
          </Link>
        </div>
        <div className="div-nav-middle">
          <div className="div-nav-middle-item">
            <Link to="/finddoc">
              <div>Find Doctors</div>{" "}
            </Link>
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
          <Menu>
            <MenuButton className="nav-dropdown">
              For Providers {<ChevronDownIcon />}
            </MenuButton>
            <MenuList>
              <MenuItem className="nav-dropdown-item">Practo Prime</MenuItem>
              <MenuItem className="nav-dropdown-item">
                Software for providers
              </MenuItem>
              <MenuItem className="nav-dropdown-item">
                List your practice for Free
              </MenuItem>
              <MenuItem className="nav-dropdown-item">
                Corporate wellness
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton className="nav-dropdown">
              Security & help {<ChevronDownIcon />}
            </MenuButton>
            <MenuList>
              <MenuItem className="nav-dropdown-item">Data security</MenuItem>
              <MenuItem className="nav-dropdown-item">Help</MenuItem>
            </MenuList>
          </Menu>
        </div>
        {/* yaha par band kiya hai div */}
        <div className="div-nav-right">
          <Link to="/Auth">
            <button className="btn-login">Login / Signup</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};
