import React from "react";
import "./home.css";
import Covid from "../images/covid.jpeg";
import Dropdown from "../Components/dropdown";
import TestimonialSlider1 from "../Components/tss";
import Carousel from "../Components/carousel";
import Footer from "../Components/footer";
import { Navigation } from "../Components/navbar";

const Home = () => {
  return (
    <>
      <Navigation />
      <Dropdown />
      <div className="banner">
        <img
          src="https://s3.ap-southeast-1.amazonaws.com/www.practostatic.com/consumer-home/desktop/images/1597423628/chronic_consumer_banner_dweb.png"
          alt="banner"
        />
      </div>
      <div className="cards-top">
        <div className="card-top">
          <div className="card-image-1">
            <img
              src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_instant_video_consulation.png"
              alt="doctor"
              className="img-top"
            ></img>
          </div>
          <div className="card-info">
            <div className="card-heading">Instant Video Consultation</div>
            <div className="card-subheading">Connect withinn 60 secs</div>
          </div>
        </div>

        <div className="card-top">
          <div className="card-image-2">
            <img
              src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_find_doctors.png"
              alt="doctor"
              className="img-top"
            ></img>
          </div>
          <div className="card-info">
            <div className="card-heading">Find Doctors Near You</div>
            <div className="card-subheading">Confirmed Appointments</div>
          </div>
        </div>

        <div className="card-top">
          <div className="card-image-3">
            <img
              src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_medicines.png"
              alt="doctor"
              className="img-top"
            ></img>
          </div>
          <div className="card-info">
            <div className="card-heading">Medicines</div>
            <div className="card-subheading">Essentials at your Doorstep</div>
          </div>
        </div>

        <div className="card-top">
          <div className="card-image-4">
            <img
              src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_lab_tests.png"
              alt="doctor"
              className="img-top"
            ></img>
          </div>
          <div className="card-info">
            <div className="card-heading">Lab Tests</div>
            <div className="card-subheading">Sample pickup at your home</div>
          </div>
        </div>

        <div className="card-top">
          <div className="card-image-5">
            <img
              src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_surgeries.png"
              alt="doctor"
              className="img-top"
            ></img>
          </div>
          <div className="card-info">
            <div className="card-heading">Surgeries</div>
            <div className="card-subheading">
              Safe and trusted surgery centers
            </div>
          </div>
        </div>
      </div>
      <div className="Consult">
        <div className="content">
          <div className="u-margin-15">
            <h2 className="head">
              Consult Top Doctors Online For Any Health Concern
            </h2>
            <div className="body">
              Private online consultations with verified doctors in all
              specialists
            </div>
            <button type="button" className="btn">
              View All Specialities
            </button>
          </div>
        </div>
      </div>
      <div className="consult-cards">
        <div className="card-c">
          <div className="cardi">
            <img
              src="https://www.practostatic.com/consult/consult-home/symptoms_icon/irregular-painful+period.png"
              alt="period doubts or pregnancy"
            ></img>
          </div>
          <div className="card-in">
            <div className="card-head">Period doubts or Pregnancy</div>
            <div className="card-sub">CONSULT NOW</div>
          </div>
        </div>

        <div className="card-c">
          <div className="cardi">
            <img
              src="https://www.practostatic.com/consult/consult-home/symptoms_icon/Acne.png"
              alt="skin issues"
            ></img>
          </div>
          <div className="card-in">
            <div className="card-head">Acne, pimple or skin issue</div>
            <div className="card-sub">CONSULT NOW</div>
          </div>
        </div>

        <div className="card-c">
          <div className="cardi">
            <img
              src="https://www.practo.com/consult/static/images/top-speciality-sexology.svg"
              alt="performance issues in bed"
            ></img>
          </div>
          <div className="card-in">
            <div className="card-head">Performance issues in bed</div>
            <div className="card-sub">CONSULT NOW</div>
          </div>
        </div>

        <div className="card-c">
          <div className="cardi">
            <img
              src="https://www.practo.com/consult/static/images/top-speciality-pediatric.svg "
              alt="child not feeling well"
            ></img>
          </div>
          <div className="card-in">
            <div className="card-head">Child not feeling well</div>
            <div className="card-sub">CONSULT NOW</div>
          </div>
        </div>

        <div className="card-c">
          <div className="cardi">
            <img
              src="https://www.practostatic.com/consult/consult-home/symptoms_icon/coughing.png"
              alt="cough, cold or fever"
            ></img>
          </div>
          <div className="card-in">
            <div className="card-head">
              Cold, cough or <br />
              fever
            </div>
            <div className="card-sub">CONSULT NOW</div>
          </div>
        </div>

        <div className="card-c">
          <div className="cardi">
            <img
              src="https://www.practostatic.com/acred/search-assets/2/12-mental-wellness.png"
              alt="depression or anxiety"
            ></img>
          </div>
          <div className="card-in">
            <div className="card-head">Depression or anxiety</div>
            <div className="card-sub">CONSULT NOW</div>
          </div>
        </div>
      </div>

      <div className="carousel-head">
        <h2>Book an appointment for in-clinic consultation</h2>
        <p>Find experienced doctors across all specialties</p>
      </div>
      <Carousel />
      <div className="margin_top_60">
        <div className="static">
          <div className="content-1">
            <div className="margins_section">
              <div className="card-one">
                <div className="card-content">
                  <h3 className="card-content-head">
                    Read Top Articles from Health Experts
                  </h3>
                  <div className="card_sub">
                    Health articles that keep you informed about good health
                    practices and achieve your goals.
                  </div>
                  <button className="buttn">See all articles</button>
                </div>
              </div>

              <div className="card-two">
                <div className="card-content">
                  <div className="card-img">
                    <img src={Covid} alt="coronavirus article"></img>
                  </div>
                  <div className="up-head">CORONAVIRUS</div>
                  <div className="head-2">
                    <b>
                      12 Coronavirus Myths and Facts That You Should Be Aware Of
                    </b>
                  </div>
                  <div className="head-3">Dr. Diana Borgio</div>
                </div>
              </div>

              <div className="card-two">
                <div className="card-content">
                  <div className="card-img">
                    <img
                      src="https://www.practostatic.com/fit/bade52edc7fb158bf627216bf96c2b881a97f30c"
                      alt="Vitamins and Supplements"
                    ></img>
                  </div>
                  <div className="up-head">Vitamins and supplements</div>
                  <div className="head-2">
                    <b>
                      Eating Right to Build Immunity Against Cold and Viral
                      Infections
                    </b>
                  </div>
                  <div className="head-3">Dr. Diana Borgio</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="test-head">What Our Users Have To Say</div>
      <TestimonialSlider1 />
      <div className="appbanner">
        <div className="appbanner-content">
          <div className="pos">
            <span className="poster">
              <img
                src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/footer-img.png"
                className="poster-pos"
              ></img>
            </span>
          </div>

          <div className="pos-2">
            <div className="pos-v-center">
              <h3 className="pos-head">Download the Practo APP</h3>
              <p className="pos-sub">
                Access video consultation with India's top doctors on the Practo
                app. Connect with doctors online, available 24/7, from the
                comfort of your home.
              </p>
              <p className="pos-link">Get the Link to Download the App</p>
            </div>

            <div className="applink">
              <div className="applink-input">
                <div className="appflex">
                  <div className="countryCode">+91</div>
                  <input
                    type="tel"
                    className="phone"
                    placeholder="Enter Phone Number"
                  ></input>
                </div>
                <button type="button" className="appbtn">
                  Send SMS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
