import React from 'react'
import './footerstyle.css'
import practo_footer2 from "../images/practo-footer2.png";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_section'>
            <div className='footer-links'>
                <div className='footer-links_div'>
                    <h4>Practo</h4>
                    <a href='#'>
                        <p>About</p>
                    </a>
                    <a href='#'>
                        <p>Blog</p>
                    </a>
                    <a href='#'>
                        <p>Careers</p>
                    </a>
                    <a href='#'>
                        <p>Press</p>
                    </a>
                    <a href='#'>
                        <p>Contact Us</p>
                    </a>
                </div>


                  <div className='footer-links_div'>
                    <h4>For Patients</h4>
                    <a href='#'>
                        <p>Search For Doctors</p>
                    </a>
                    <a href='#'>
                        <p>Search For Clinics</p>
                    </a>
                    <a href='#'>
                        <p>Search for Hospitals</p>
                    </a>
                    <a href='#'>
                        <p>Book Diagnostic Tests</p>
                    </a>
                    <a href='#'>
                        <p>Book Full Body Checkups</p>
                    </a>
                    <a href='#'>
                        <p>Practo Plus</p>
                    </a>
                    <a href='#'>
                        <p>Covid Hospital Listing</p>
                    </a>
                    <a href='#'>
                        <p>Practo Care Clinics</p>
                    </a>
                    <a href='#'>
                        <p>Read Health Articles</p>
                    </a>
                    <a href='#'>
                        <p>Read About Medicines</p>
                    </a>
                    <a href='#'>
                        <p>Practo Drive</p>
                    </a>
                    <a href='#'>
                        <p>Health app</p>
                    </a>
                    <a href='#'>
                        <p>Practo Plus Infinity</p>
                    </a>
                </div>

                <div className='footer-links_div'>
                    <h4>For Doctors</h4>
                    <a href='#'>
                        <p>Practo Profile</p>
                    </a>

                    <h4>For Clinics</h4>
                    <a href='#'>
                        <p>Ray By Practo</p>
                    </a>
                    <a href='#'>
                        <p>Practo Reach</p>
                    </a>
                    <a href='#'>
                        <p>Ray Tab</p>
                    </a>
                    <a href='#'>
                        <p>Practo Pro</p>
                    </a>
                </div>


                <div className='footer-links_div'>
                    <h4>For Hospitals</h4>
                    <a href='#'>
                        <p>Insta By Practo</p>
                    </a>
                    <a href='#'>
                        <p>Qikwell by Practo</p>
                    </a>
                    <a href='#'>
                        <p>Practo Profile</p>
                    </a>
                    <a href='#'>
                        <p>Practo Reach</p>
                    </a>
                    <a href='#'>
                        <p>Practo Drive</p>
                    </a>

                    <h4>For Corporates</h4>
                    <a href='#'>
                        <p>Wellness Plans</p>
                    </a>
                </div>


                <div className='footer-links_div'>
                    <h4>More</h4>
                    <a href='#'>
                        <p>Help</p>
                    </a>
                    <a href='#'>
                        <p>Developers</p>
                    </a>
                    <a href='#'>
                        <p>Privacy Policy</p>
                    </a>
                    <a href='#'>
                        <p>Terms & Conditions</p>
                    </a>
                    <a href='#'>
                        <p>PCS T&C</p>
                    </a>
                    <a href='#'>
                        <p>Healthcare Directory</p>
                    </a>
                    <a href="#">
                        <p>Practo Health Wiki</p>
                    </a>
                </div>

                <div className='footer-links_div'>
                    <h4>Social</h4>
                    <a href='#'>
                        <p>Facebook</p>
                    </a>
                    <a href='#'>
                        <p>Twitter</p>
                    </a>
                    <a href='#'>
                        <p>LinkedIn</p>
                    </a>
                    <a href='#'>
                        <p>Youtube</p>
                    </a>
                    <a href='#'>
                        <p>Github</p>
                    </a>
                </div>

               
            </div>
             <div className='footer-below'>
             <div className='footer-logo'>
                    <img src={practo_footer2} alt='logo'/>
                </div>
                
                <h5>Copyright © 2017, Practo. All rights reserved.</h5>
                </div>
        </div>
    </div>
  )
}

export default Footer