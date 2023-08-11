import { Link } from "react-router-dom";
import medImage from "../../images/medImage.svg";
import radar from "../../images/radar.gif";
import "./medicines.css";

const medicines = () => {
  return (
    <div className="med">
      <div className="medicines">
        <div className="medicinesText">
          <p className="topText">Get all your medicines.</p>
          <p className="bottomText">Everytime. On time.</p>

          <p className="checkBox">
            <span> ✔ </span>
            Guaranteed availability
          </p>
          <p className="checkBox">
            <span> ✔ </span> Over <span className="doBold">130,000+</span>
            genuine medicines
          </p>
          <p className="checkBox">
            <span> ✔ </span> Home delivery in
            <span className="doBold"> 24hrs</span>
          </p>

          <div className="onlineMed">
            <Link to="./">
              <button>Order Medicines</button>
            </Link>
            <div>
              <img src={radar} alt="" />
            </div>
            <div className="smallText">
              <p>
                Last order delivered <span>2 mins</span> ago
              </p>
              <p>in Sector 122, Noida</p>
            </div>
          </div>
        </div>
        <img src={medImage} alt="" className="medImage" />
      </div>
    </div>
  );
};
export default medicines;
