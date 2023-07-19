import React from "react";
import "./App.css";

import Home from "./Components/home";
import Footer from "./Components/footer";
import Carousel from "./Components/carousel";
import Dropdown from "./Components/Dropdown";

function App() {
  return (
    <div>
      <Dropdown />
      <Home />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
