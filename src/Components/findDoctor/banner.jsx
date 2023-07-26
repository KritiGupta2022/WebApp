import Dropdown from "../dropdown";
import { Link } from "react-router-dom";
import message from "../../images/message-icon.png";
import cart from "../../images/cart-icon.png";
import record from "../../images/record-icon.png";
import lab from "../../images/lab-icon.png";
import article from "../../images/article-icon.png";
import bag from "../../images/bag-icon.png";

import "./banner.css";

const Banner = () => {
  return (
    <>
      <div className="finddoc-banner">
        <div>
          <h1 className="title">Your home for health</h1>
          <h2 className="subtitle">Find and Book</h2>
          <div className="dropdown-box">
            <Dropdown />
          </div>
        </div>
        <div className="categories">
          <p>
            <span className="under-text">Popular Searches : </span>
            <Link to="https://www.google.com/">
              <span className="under-text links">Cetgory 1</span>
            </Link>
            <Link to="https://www.google.com/">
              <span className="under-text  links">Cetgory 2</span>
            </Link>
            <Link to="https://www.google.com">
              <span className="under-text links">Cetgory 3</span>
            </Link>
            <Link to="https://www.google.com/">
              <span className="under-text links">Other</span>
            </Link>
          </p>
        </div>
        <div className="other-options">
          <Link to="./">
            <div className="box border">
              <img src={message} alt="" />
              <p>Consult with a doctor</p>
            </div>
          </Link>
          <Link to="./">
            <div className="box border">
              <img src={cart} alt="" />
              <p>Order Medcine</p>
            </div>
          </Link>
          <Link to="./">
            <div className="box border">
              <img src={record} alt="" />
              <p>View Medical Records</p>
            </div>
          </Link>
          <Link to="./">
            <div className="box border">
              <img src={lab} alt="" />
              <p>Book Test</p>
            </div>
          </Link>
          <Link to="./">
            <div className="box border">
              <img src={article} alt="" />
              <p>Read Article</p>
            </div>
          </Link>
          <Link to="./">
            <div className="box">
              <img src={bag} alt="" />
              <p>For healthcare providers</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Banner;
