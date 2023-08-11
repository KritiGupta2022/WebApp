import { Link } from "react-router-dom";
import Consultvedio from "../../images/consultVedio.webm";
import "./consult.css";

const consult = () => {
  return (
    <div className="sectionThree">
      <div className="consult">
        <video
          src={Consultvedio}
          width="400
          "
          height="480"
          style={{ marginTop: "60px", marginLeft: "20px" }}
          autoPlay
          muted
          loop
        />
        <div className="consultText">
          <p className="topText">Skip the waiting room.</p>
          <p className="bottomText">Consult with a doctor</p>

          <p className="checkBox">
            <span> ✔ </span> Fee starting at <span className="doBold">₹99</span>
          </p>
          <p className="checkBox">
            <span> ✔ </span> Verified doctors respond in{" "}
            <span className="doBold">5 minutes</span>
          </p>
          <p className="checkBox">
            <span> ✔ </span> <span className="doBold">100%</span> Private and
            confidential
          </p>

          <div className="onlineDoc">
            <Link to="./">
              <button>Consult now</button>
            </Link>
            <div className="pulse"></div>
            <p>
              <span>68072</span>doctors online
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default consult;
