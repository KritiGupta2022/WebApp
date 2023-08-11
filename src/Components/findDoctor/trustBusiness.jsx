import { Link } from "react-router-dom";
import buisnessImage from "../../images/buisness.webp";
import demoIcon from "../../images/demoicon.png";
import "./trustBusiness.css";

const trustBuisness = () => {
  return (
    <div className="businessBox">
      <div className="business">
        <div className="businessText">
          <p className="topText">Leading Healtcare Providers.</p>
          <p className="bottomText">Trust us for Business</p>

          <p className="checkBox">
            <span> ✔ </span> Get seen by <span className="doBold">25M+</span>
            patient on Practo.com
          </p>
          <p className="checkBox">
            <span> ✔ </span> The most advanced software clinics and hospitals
          </p>
          <p className="checkBox">
            <span> ✔ </span>
            State of the art business analytics for enterprises
          </p>

          <div className="onlineMed">
            <Link to="./">
              <button>Lean More</button>
            </Link>
          </div>
        </div>
        <img src={buisnessImage} alt="" className="buisnessImage" />
      </div>
      <div className="icons">
        <div className="icon">
          <img src={demoIcon} alt="" />
        </div>
        <div className="icon">
          <img src={demoIcon} alt="" />
        </div>
        <div className="icon">
          <img src={demoIcon} alt="" />
        </div>
        <div className="icon">
          <img src={demoIcon} alt="" />
        </div>
      </div>
    </div>
  );
};
export default trustBuisness;
