import { Navigation } from "../Components/navbar";
import Banner from "../Components/findDoctor/banner";
import SectionOne from "../Components/findDoctor/sectionOne";
import "./findDoctor.css";

const findDoctor = () => {
  return (
    <>
      <Navigation />
      <Banner />
      <SectionOne />
    </>
  );
};

export default findDoctor;
