import React, { useState } from 'react'
import { Header } from "../components/Header";
import FeatherIcon from "feather-icons-react";
import family from "../assets/image/family.svg"
import groceries from "../assets/image/groceries.svg"
import house from "../assets/image/house.svg"
import medicine from "../assets/image/medicine.svg"
import datacollection from "../assets/image/data-collection.svg"
import datacampaign from "../assets/image/digital-campaign.svg"
import heart from "../assets/image/heart.svg"
import like from "../assets/image/like.svg"
import verified from "../assets/image/verified.svg"
import bill from "../assets/image/bill.svg"
import { Link } from 'react-router-dom';

export const HomePage = () => {
    function scrolltocontact(){
      var element = document.querySelector("#contactus");
     element.scrollIntoView({ behavior: 'smooth'})
    }
    return (
        <div>
          <Header home={true}></Header>
          <button onClick={()=>{scrolltocontact()}}  className="btn btn-primary shadow contactbtn d-block d-sm-none" > Contact Us </button>
          <div className="pt-3"  >
          <div className="row" >
              <div className="col pb-2" data-aos="fade-right" > 
            <h1 className="logo" >SINCERE AID FOUNDATION</h1>
            <h5 className="font-weight-light " ><i> Your Charity, Our Responsibility</i> </h5>
            <p className="text-smaller mt-3 text-muted" >Sincere Aid Foundation was established on 28 February 2019 to uplift the unprivileged of our society. We strive to provide basic amenities to the ones who are struck with poverty, irrespective of caste, culture and race. <Link to={"/aboutus"} > <span className="text-primary" >Know more</span> </Link> </p>
            <div className="mt-3" >
              <a type="button" target="blank" href="http://wa.me/919500155612?text= I'm willing to *DONATE* to your foundation." className="btn btn-primary " >Donate</a>

              <a type="button" target="blank" href="https://docs.google.com/forms/d/e/1FAIpQLSceawaK8-O6MMcZLP4KhmaHdIZL5KRw26U1xiF5F6ID8emcQw/viewform" className="btn btn-outline-primary ml-2 " >Request for Help</a>
              
            </div>
          </div>
          <div className="col-md-5 d-none d-sm-block" data-aos="fade-left" >
          <h2 className=" font-weight-bold mt-2 subtitle" >Contact Us</h2>
          <div className="row mt-3 " >
              
                <div className="col-1" ><FeatherIcon icon="phone" color="#4f00e0" className="mr-1" size={20} > </FeatherIcon></div>
                <div className="col-10  text-small" >
                <a href="tel:  +91 95001 55612" className=" text-black" >  +91 95001 55612</a>
                </div>
               
                </div>
                <div className="row mt-2" >
                <div className="col-1" > <FeatherIcon color="#4f00e0"  icon="mail" className="mr-1" size={20} > </FeatherIcon></div>
                <div className="col-10  text-small" >
                <a href="mailto:contact@sincereaid.org"  className="text-black" > contact@sincereaid.org
                </a>
                </div>
                </div>
                <div className="row mt-2" >
                <div className="col-1" > <FeatherIcon color="#4f00e0"  icon="facebook" className="mr-1" size={20} strokewidth={1} > </FeatherIcon></div>
                <div className="col-10  text-small" >
                <a href="https://www.facebook.com/sincereaidfoundation.sincereaidfoundation" target="blank" className="text-black" > sincereaidfoundation
                </a>
                </div>
                </div>
               
                <div className="row mt-2" >
                <div className="col-1" > <FeatherIcon icon="instagram" className="mr-1" size={20} color="#4f00e0" > </FeatherIcon></div>
                <div className="col-10  text-small" >
                <a target="blank" className="text-black" target="blank" href="https://instagram.com/sincereaid"> @sincereaid
                </a>
                </div>
                </div>
                <div className="row mt-2" >
                <div className="col-1" > <FeatherIcon icon="youtube" className="mr-1" size={20} color="#4f00e0" > </FeatherIcon></div>
                <div className="col-10  text-small" >
                <a target="blank" className="text-black" href="https://www.youtube.com/channel/UCW70tvFi1a142FybOl-3R2g/featured"> Sincere Aid Foundation
                </a>
                </div>
                </div>
              <div className="row mt-2" >
                <div className="col-1" > <FeatherIcon icon="map-pin" className="mr-1" size={20} color="#4f00e0" > </FeatherIcon></div>
                <div className="col-10  text-small" >
                Sincere Aid Foundation
                #37, Kumaraswamy Nagar,
                Villivakkam, Chennai,
                Tamil Nadu,
                India - 600049. (Reg No : Villivakkam Book 4 - 133/2020)
                </div>
              </div>
         
          </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="100" >
          <h2 className="mt-4 font-weight-bold subtitle"  >Our Services</h2>
          <div className="row mt-3" >
              <div className="col-md-6 " >
                <div className="row " >
                <div className="col-4" >  <img src={family} className="img-fluid-icon" /></div>
                <div className="col-8" >     <h4 >Poorest Of The Poor</h4>
                <p className="text-small font-weight-light" >We focus on helping those who are eligible for Zakah and Sadaqah  and below poverty line or those who require emergency fund.</p>
                </div>
               </div>
            
              </div>
              <div className="col-md-6 "  >
                <div className="row " >
                <div className="col-4" >  <img src={groceries} className="img-fluid-icon" /></div>
                <div className="col-8" >     <h4 >Grocery And Essentials</h4>
                <p className="text-small font-weight-light" >The amount allotted for groceries ranges from Rs. 2,000 to Rs. 3,000 per month based on the number of family members.</p>
                </div>
               </div>
              </div>
              <div className="col-md-6 "  >
                <div className="row " >
                <div className="col-4" >  <img src={house} className="img-fluid-icon" /></div>
                <div className="col-8" >     <h4 >Rental Fund Assistance</h4>
                <p className="text-small font-weight-light" >The amount allotted for rental aid is capped at Rs.3,000 with preference given to those who have nowhere else to go.</p>
                </div>
               </div>
              </div>
              <div className="col-md-6 "  >
                <div className="row " >
                <div className="col-4" >  <img src={medicine} className="img-fluid-icon" /></div>
                <div className="col-8" >     <h4 >Medical Fund Assistance</h4>
                <p className="text-small font-weight-light" >All medical requests require reports, bills and doctor's written statement about the patient's condition and the treatment given.</p>
                </div>
               </div>
              </div>
            </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="100" >
            <h2 className="mt-4 font-weight-bold subtitle" >How We Work?</h2>
            <h5>THE SIX STEP PROCESS</h5>
          <div className="row mt-3" >
              <div className="col-md-4 " >
                <div className="row " >
                <div className="col-3" >  <img src={datacollection} className="img-fluid-icon" /></div>
                <div className="col-9" >     <h5>1. Request And Data Collection</h5>
                <p className="text-small font-weight-light" >Admins receive the requests and gather relevant information such as names, contact details, background, purpose of their requirements etc.</p>
                </div>
               </div>
            
              </div>
              <div className="col-md-4 " >
                <div className="row " >
                <div className="col-3" >  <img src={verified} className="img-fluid-icon" /></div>
                <div className="col-9" >     <h5 >2. Verification</h5>
                <p className="text-small font-weight-light" >Admins contact the concerned persons, collect proof of requirement (for e.g: bills, pictures and prescriptions), visit location if necessary, use local sources to anonymously enquire and assess genuineness before accepting or rejecting a case. Final decision regarding the amount is taken and a Shaykh may be consulted for religious guidance.</p>
                </div>
               </div>
              </div>
              <div className="col-md-4 " >
                <div className="row " >
                <div className="col-3" >  <img src={datacampaign} className="img-fluid-icon" /></div>
                <div className="col-9" >     <h5 >3. Drafting Request And Use Of Social Media</h5>
                <p className="text-small font-weight-light" >Once the request is accepted, members design content and based on priority spread the word on social media platforms such as Whatsapp Donor groups, instagram etc to reach out to contributors. </p>
                </div>
               </div>
              </div>
              <div className="col-md-4 " >
                <div className="row " >
                <div className="col-3" >  <img src={heart} className="img-fluid-icon" /></div>
                <div className="col-9" >     <h5>4. Collection And Distribution Of Funds</h5>
                <p className="text-small font-weight-light" >Admins collect the received funds over a period of allotted days and transfer the fund directly to the beneficiary.</p>
                </div>
               </div>
              </div>
              <div className="col-md-4 " >
                <div className="row " >
                <div className="col-3" >  <img src={bill} className="img-fluid-icon" /></div>
                <div className="col-9" >     <h5>5. Collection Of Receipts</h5>
                <p className="text-small font-weight-light" >Once funds are transfered, beneficiaries are asked to send receipts, bills etc required to show that the funds have been utilized for the intended purpose.</p>
                </div>
               </div>
              </div>
              <div className="col-md-4 " >
                <div className="row " >
                <div className="col-3" >  <img src={like} className="img-fluid-icon" /></div>
                <div className="col-9" >     <h5>6. Weekly Review</h5>
                <p className="text-small font-weight-light" >All case details are recorded and saved in Excel sheets with proofs, receipts and then presented promptly to donors every week.</p>
                </div>
               </div>
              </div>
            </div>
         </div>
         <div data-aos="fade-up" data-aos-delay="100" className="row" >
            <div className="col-md-6	" >
          <h2 className=" font-weight-bold mt-2 subtitle" >Donate Via</h2>
          <div className="mt-3 " >
            <h4>Account Details:</h4>
            <p>Sincere Aid Foundation<br/>
            A/C No: 50200053833450<br/>
            IFSC: HDFC0000687<br/>
            Branch: Anna Nagar 3rd Avenue
            </p>
             </div>
             <div className="mt-3 " >
            <h4>Gpay/Phonepe/Bhim:</h4>
            <p>
            +91 95001 55612
            </p>
            </div>
             </div>
             </div>
         <div data-aos="fade-up" data-aos-delay="100" className="row  d-block d-sm-none" id="contactus" >
            <div className="col-md-6	" >
          <h2 className=" font-weight-bold mt-2 subtitle" >Contact Us</h2>
          <div className="row mt-3 " >
              
                <div className="col-1" ><FeatherIcon icon="phone" color="#4f00e0" className="mr-1" size={20} > </FeatherIcon></div>
                <div className="col-10  text-small" >
                <a href="tel:  +91 95001 55612" className=" text-black" >  +91 95001 55612</a>
                </div>
               
                </div>
                <div className="row mt-2" >
                <div className="col-1" > <FeatherIcon color="#4f00e0"  icon="mail" className="mr-1" size={20} > </FeatherIcon></div>
                <div className="col-10  text-small" >
                <a href="mailto:contact@sincereaid.org" className="text-black" > contact@sincereaid.org
                </a>
                </div>
                </div>
                <div className="row mt-2" >
                <div className="col-1" > <FeatherIcon color="#4f00e0"  icon="facebook" className="mr-1" size={20} strokewidth={1} > </FeatherIcon></div>
                <div className="col-10  text-small" >
                <a href="https://www.facebook.com/sincereaidfoundation.sincereaidfoundation" target="blank" className="text-black" > sincereaidfoundation
                </a>
                </div>
                </div>
                <div className="row mt-2" >
                <div className="col-1" > <FeatherIcon icon="instagram" className="mr-1" size={20} color="#4f00e0" > </FeatherIcon></div>
                <div className="col-10  text-small" >
                <a target="blank" className="text-black" href="https://instagram.com/sincereaid"> @sincereaid
                </a>
                </div>
                </div>
                <div className="row mt-2" >
                <div className="col-1" > <FeatherIcon icon="youtube" className="mr-1" size={20} color="#4f00e0" > </FeatherIcon></div>
                <div className="col-10  text-small" >
                <a target="blank" className="text-black" href="https://www.youtube.com/channel/UCW70tvFi1a142FybOl-3R2g/featured"> Sincere Aid Foundation
                </a>
                </div>
                </div>
              <div className="row mt-2" >
                <div className="col-1" > <FeatherIcon icon="map-pin" className="mr-1" size={20} color="#4f00e0" > </FeatherIcon></div>
                <div className="col-10  text-small" >
                Sincere Aid Foundation
                #37, Kumaraswamy Nagar, 
                Villivakkam, Chennai,
                Tamil Nadu,
                India - 600049. (Reg No : Villivakkam Book 4 - 133/2020)
                </div>
              </div>
         
          </div>
        
      </div>
          <div className="text-center mt-5 mb-3" >
            <h6 className="text-muted" >© Copyright Sincere Aid Foundation. All Rights Reserved.</h6>
          </div>
             </div>
            
        </div>
    )
}
