import { Link } from "react-router-dom";
import findRD from "../../images/findRd.webm";
import fortune from "../../images/fortune-logo.png";
import techCrunch from "../../images/tech-crunch.png";
import forbes from "../../images/Forbes_logo.png";
import theEC from "../../images/The_Economic_Times_logo.png";
import wsj from "../../images/wsj-logo-transparent.png";
import toe from "../../images/times-of-india.png";
import "./findRD.css";

const FindRD = () => {
  return (
    <div className="find">
      <div className="findRD">
        <div className="findRDText">
          <p className="topText">Instant appointment with</p>
          <p className="bottomText">
            doctors. <span>Gauranteed.</span>
          </p>

          <p className="checkBox">
            <span> ✔ </span>
            <span className="doBold">100,000</span> Verified Doctors
          </p>
          <p className="checkBox">
            <span> ✔ </span> <span className="doBold">3M+</span>Patient
            recommendations
          </p>
          <p className="checkBox">
            <span> ✔ </span> <span className="doBold">25M</span> Patients/year
          </p>

          <div className="onlineDoc">
            <Link to="./">
              <button>Find the right doctor</button>
            </Link>
          </div>
        </div>
        <video
          src={findRD}
          width="400"
          height="480"
          style={{ marginTop: "60px", marginLeft: "250px" }}
          autoPlay
          muted
          loop
        />
      </div>
      <div className="icons">
        <Link to="./">
          <img
            src={fortune}
            alt=""
            style={{ height: "20px", width: "100px" }}
          />
        </Link>
        <Link to="./">
          <img
            src={techCrunch}
            alt=""
            style={{ height: "40px", width: "160px", marginTop: "15px" }}
          />
        </Link>
        <Link to="./">
          <img src={forbes} alt="" style={{ height: "20px", width: "100px" }} />
        </Link>
        <Link to="./">
          <img
            src={theEC}
            alt=""
            style={{ height: "80px", width: "200px", marginTop: "2px" }}
          />
        </Link>
        <Link to="./">
          <img
            src={wsj}
            alt=""
            style={{ height: "20px", width: "180px", marginTop: "35px" }}
          />
        </Link>
        <Link to="./">
          <img
            src={toe}
            alt=""
            style={{ height: "60px", width: "100px", marginTop: "5px" }}
          />
        </Link>
      </div>
    </div>
  );
};
export default FindRD;
