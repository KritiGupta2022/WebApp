import { Link } from "react-router-dom";
import recordImage from "../../images/record_image.svg";
import "./record.css";

const record = () => {
  return (
    <div className="recordBox">
      <div className="record">
        <div className="recordImageBox">
          <img src={recordImage} alt="recordImage" className="recordImage" />
        </div>
        <div className="recordText">
          <p className="topText">All your medicines records</p>
          <p className="bottomText">In one secure app.</p>

          <p className="checkBox">
            <span> ✔ </span> 256-bit end to end encrytion
          </p>
          <p className="checkBox">
            <span> ✔ </span> Records are accessible only by you
          </p>
          <p className="checkBox">
            <span> ✔ </span> Access you records across{" "}
            <span className="doBold"> 8000+</span> centers
          </p>

          <Link to="./">
            <button>Find out more</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default record;
