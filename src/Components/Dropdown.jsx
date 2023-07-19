import React, { useState } from "react";
import "./Dropdown.css";
import Select from "react-select";
import plus from "../images/plus.webp";

const cssProp = {
  placeholder: (baseStyles, state) => ({
    ...baseStyles,
    color: "gray",
  }),
  control: (baseStyles) => ({
    ...baseStyles,
    borderRadius: "0",
  }),
};

const Dropdown = () => {
  const [city, setCity] = useState(null);
  const [doctor, setDoctor] = useState(null);

  const optionsCity = [
    { value: "demo1", label: "demo1" },
    { value: "demo2", label: "demo2" },
    { value: "demo3", label: "demo3" },
    { value: "demo4", label: "demo4" },
    { value: "demo5", label: "demo5" },
    { value: "demo6", label: "demo6" },
  ];
  const optionsDoc = [
    { value: "doc1", label: "doc1" },
    { value: "doc2", label: "doc2" },
    { value: "doc3", label: "doc3" },
    { value: "doc4", label: "doc4" },
    { value: "doc5", label: "doc5" },
    { value: "doc6", label: "doc6" },
  ];
  return (
    <div>
      <div className="dropdown-container">
        <div className="city-dropdown">
          <Select
            options={optionsCity}
            defaultValue={city}
            placeholder={"--Select City--"}
            onChange={setCity}
            isSearchable
            styles={cssProp}
          />
        </div>
        <div className="doc-dropdown">
          <Select
            options={optionsDoc}
            defaultValue={doctor}
            placeholder={""}
            onChange={setDoctor}
            isSearchable
            styles={cssProp}
          />
        </div>
        <div className="plus-image">
          <a href="#">
            <img src={plus} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
