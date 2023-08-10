import { Link } from "react-router-dom";
import SecurityImage from "../../images/securityImage.webp";
import encryption from "../../images/encryption.webp";
import iso from "../../images/iso.webp";
import hipaa from "../../images/hipaa.webp";
import dsci from "../../images/dsci.png";

import "./security.css";

const security = () => {
  return (
    <div className="sectionOne">
      <div className="security">
        <div className="securityText">
          <p className="topText">Safety of your data is our</p>
          <p className="bottomText">top priority</p>

          <p className="checkBox">
            <span> ✔ </span> Multi-level security checks
          </p>
          <p className="checkBox">
            <span> ✔ </span> Multiple data backups
          </p>
          <p className="checkBox">
            <span> ✔ </span> Stringent data privacy policies
          </p>

          <Link to="./">
            <button>Read More</button>
          </Link>
        </div>
        <div className="securitImageBox">
          <img
            src={SecurityImage}
            alt="SecurityImage"
            className="securitImage"
          />
        </div>
      </div>
      <div className="icons">
        <div className="box">
          <img src={encryption} alt="" />
          <p>256-bit</p>
          <p>encryption</p>
        </div>
        <div className="box">
          <img src={iso} alt="" />
          <p>ISO 27001</p>
          <p>certified</p>
        </div>
        <div className="box">
          <img src={hipaa} alt="" />
          <p>HIPAA</p>
          <p>complaint data centers</p>
        </div>
        <div className="box">
          <img src={dsci} alt="" />
          <p>DSCI</p>
          <p>member</p>
        </div>
      </div>
    </div>
  );
};

export default security;
