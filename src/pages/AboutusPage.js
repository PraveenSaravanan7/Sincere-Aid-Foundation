import React, { useState } from 'react'
import { Header } from "../components/Header";
import userpic from "../assets/image/user.svg"
import vision from "../assets/image/visionary.svg"
import mission from "../assets/image/mission.svg"
import target from "../assets/image/target.svg"
export const AboutusPage = () => {
    var [aboutus,setaboutus]=useState(false)
    
    return (
        <div>
            <Header home={false} ></Header>
            <div data-aos="fade-up"  >
             <h2 className="mt-4 font-weight-bold subtitle" >About Us</h2>
            <div className="row mt-2" >
              <div className="col-md-4" >  <iframe  src="https://www.youtube.com/embed/YL7d-Trpp2s" frameborder="0" className="youtube-video shadow-sm"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></div>
              <div className="col-md-5" >
              <p className="mt-2 text-small" >

              Sincere Aid Foundation was established on 28 February 2019 to uplift the unprivileged of our society. We strive to provide basic amenities to those who have been struck with poverty irrespective of caste, culture and race.
<br/> <br/>
Over the span of few years, we have provided monthly groceries, rental aid and medical fund to  individuals and families from below poverty line.
{!aboutus &&  <span onClick={()=>{setaboutus(true)}} className="text-primary font-weight-bold" > Read More</span>}
{aboutus && <>
              <br/><br/>
We raise emergency funds for chemotherapy, dialysis and crucial medical procedures.
<br/> <br/>
We work towards the betterment of the community by donating hospital beds, wheelchairs, building toilets, installing borewells, providing aid to orphanages and old age homes, planting trees etc.
<br/> <br/>
Standing true to our tagline Your Charity, Our Responsibility we endeavour to ensure that your donation reaches the right and deserving hands.
<br/> <br/>
We are a non Profit organization in true sense as we do not charge any commission and operate solely as a voluntary relief service.  {aboutus &&  <span onClick={()=>{setaboutus(false)}} className="text-primary font-weight-bold" > Read Less</span>}

</>}

           
            </p> 
              </div>
            </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="100" >
            <h2 className="mt-4 font-weight-bold subtitle" >Our Statements</h2>
            <div className="row mt-2" >
                <div className="col-md-4 mt-3 text-center" >
                        <img className="img-fluid-icon mb-4" src={vision} />
                        <h4><b>Vision</b></h4>
                        <p className="text-muted text-small" >To build a community that is united and strive towards alleviating poverty by reaching out and assisting those in need.</p>
                </div>
                <div className="col-md-4 mt-3 text-center" >
                        <img className="img-fluid-icon mb-4" src={mission} />
                        <h4><b>Mission</b></h4>
                        <p className="text-muted text-small" >To serve the community by providing lifesaving essentials to enable the impoverished to survive, grow and build a better future with dignity.</p>
                </div>
                <div className="col-md-4 mt-3 text-center" >
                        <img className="img-fluid-icon mb-4" src={target} />
                        <h4><b>Goals</b></h4>
                        <p className="text-muted text-small" >To build trust, inspire and encourage people to share their wealth and provide equal opportunities to the needy.</p>
                </div>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="100" >
            <h2 className="mt-4 font-weight-bold subtitle" >Testimonial</h2>
            <div className="row mt-2" >
                <div className="col-md-4 mt-3 rounded-lg py-2 mb-2 shadow-sm" >
                        <span className="text-small" >
                        <i>I am truly impressed with your organization. Words might not be enough to make you believe what kind of an amazing work the entire team is doing day by day. May Allah (SWT) reward each one who worked behind this for a good cause. Because at the end of the day, People are going to sleep in peace. <br/>
                        My best wishes to the entire Team.<br/>
                        Lots of Love and will keep Supporting ❤️</i><br/>
                         <b>-Ranaa Fathima</b>
                        </span>
                </div>
                <div className="col-md-4 mt-3 rounded-lg py-2 mb-2 shadow-sm" >
                        <span className="text-small" >
                        <i>Alhamdulillah, SAF had a very humble beginning...<br/>
                        Sisters coming together to help the needy and providing the essential help in times of  adversities be it the floods in Chennai or Hyderabad or  bearing the winter in Kashmir...or the migrant labourers.<br/>
                        Hence the donation process seems very convenient to Donors...who want to get involved in charitable deeds and gain rewards....</i><br/>
                         <b>-Aatifa</b>
                        </span>
                </div>
                <div className="col-md-4 mt-3 rounded-lg py-2 mb-2 shadow-sm" >
                        <span className="text-small" >
                        <i>MashaAllah for all your works and efforts, may Allah bless your team and accepts all ur good deeds,
                        sincere aid foundation  your team doing good job plz keep going high and high🤝🏻👍🏻</i><br/>
                         <b>-Mehaboobi. S (psychologist)</b>
                        </span>
                </div>
                <div className="col-md-4 mt-3 rounded-lg py-2 mb-2 shadow-sm" >
                        <span className="text-small" >
                        <i>WaAlaikumsalam <br/>Your organisation is doing very good  activities 
                        May I Almighty Allah bless you all with long life, peace, prosperity, happiness and good Health.</i><br/>
                         <b>-Nayeemur Rahaman (Director of M.G.R Educational Trust)</b>
                        </span>
                </div>
                <div className="col-md-4 mt-3 rounded-lg py-2 mb-2 shadow-sm" >
                        <span className="text-small" >
                        <i>Alhamdulillah <br/>
                        I'm impressed <br/>
                        Very good front for me to increase in my book of good deeds </i><br/>
                         <b>-Navidha</b>
                        </span>
                </div>
                
                </div>
                </div>   
         <div data-aos="fade-up" data-aos-delay="100" >
            <h2 className="mt-4 font-weight-bold subtitle" >Our Team</h2>
            <div className="row mt-2" >
                <div className="col-md-4 mt-3 text-center" >
                        <img className="img-fluid-icon mb-2" src={userpic} />
                        <h5>Husna Fathima. S</h5>
                        <span className="text-small" ><b>PRESIDENT</b></span>
                        <p className="text-muted text-small" >B.sc Nutrition and dietetics (WCC), Islamic studies (TTIS - AHI academy t.nagar Chennai)</p>
                </div>
                <div className="col-md-4 mt-3 text-center" >
                        <img className="img-fluid-icon mb-2" src={userpic} />
                        <h5>Sanaa Sheriff</h5>
                        <span className="text-small" ><b>SECRETARY</b></span>
                        <p className="text-muted text-small" >BA Islamic studies (Preston International College, Alwarpet.) MA Islamic Studies (IOU)</p>
                </div>
                <div className="col-md-4 mt-3 text-center" >
                        <img className="img-fluid-icon mb-2" src={userpic} />
                        <h5>Akif Adnan</h5>
                        <span className="text-small" ><b>TREASURER</b></span>
                        <p className="text-muted text-small" >B.E Computer science (BSA Cresent engineering college)</p>
                </div>
                <div className="col-md-4 mt-3 text-center" >
                        <img className="img-fluid-icon mb-2" src={userpic} />
                        <h5>N Almas Fathima</h5>
                        <span className="text-small" ><b>TRUSTEE</b></span>
                        <p className="text-muted text-small" >P.U.C 1st year</p>
                </div>
                <div className="col-md-4 mt-3 text-center" >
                        <img className="img-fluid-icon mb-2" src={userpic} />
                        <h5>Yasmeen H</h5>
                        <span className="text-small" ><b>TRUSTEE</b></span>
                        <p className="text-muted text-small" >BBA Islamic studies (TTIS - AHI academy t.nagar chennai )
                        </p>
                </div>
                <div className="col-md-4 mt-3 text-center" >
                        <img className="img-fluid-icon mb-2" src={userpic} />
                        <h5>K.A. Sheerin Farzana</h5>
                        <span className="text-small" ><b>TRUSTEE</b></span>
                        <p className="text-muted text-small" >B.E Computer Science (BSA Crescent Engineering College) BA Islamic Studies (Preston International College)
                        </p>
                </div>
                <div className="col-md-4 mt-3 text-center" >
                        <img className="img-fluid-icon mb-2" src={userpic} />
                        <h5>Asma.J</h5>
                        <span className="text-small" ><b>TRUSTEE</b></span>
                        <p className="text-muted text-small" >B.Com(cs) (madras university) Islamic studies (TTIS - AHI academy t.nagar chennai )
                        </p>
                </div>
                <div className="col-md-4 mt-3 text-center" >
                        <img className="img-fluid-icon mb-2" src={userpic} />
                        <h5>Sadique Ahmed R</h5>
                        <span className="text-small" ><b>TRUSTEE</b></span>
                        <p className="text-muted text-small" >B.COM( The New College) M.COM( Madras University) M.A ECONOMICS ( The New College)
                        </p>
                </div>
                <div className="col-md-4 mt-3 text-center" >
                        <img className="img-fluid-icon mb-2" src={userpic} />
                        <h5>Shalima K</h5>
                        <span className="text-small" ><b>TRUSTEE</b></span>
                        <p className="text-muted text-small" >B.E Computer science(Alpha Engineering College)
                        </p>
                </div>
            </div>
          </div>
            
            <div className="text-center mt-5 mb-3" >
            <h6 className="text-muted" >© Copyright Sincere Aid Foundation. All Rights Reserved.</h6>
          </div>
        </div>
    )
}
