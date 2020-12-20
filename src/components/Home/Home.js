import React from 'react'

import vacinneImg from './../../assets/vaccine.jpg';
import govLogo from './../../assets/gov-logo.png';

import './Home.css';

const Home = () => {
   const buttonHandler = () => {

   }
   return (
      <body>
         <div className="hero-bg">
            <section style={{ paddingTop: "40px", paddingBottom: "40px" }}>
               <h1><span> A Remedy</span> To The <aside className="pan" >Pandemic</aside> </h1>
               <p className="quote" style={{ marginTop: "-7%", fontStyle: "italic" }}>It is time to return to our normal lifestyles. Now get the COVID-19 vaccines at your nearest vaccination center.</p>
               <div className="form-container" style={{ marginTop: "3em" }}>
                  <form action="" >
                     <div className="form-left">
                        <div style={{ textAlign: "justify", lineHeight: "15px", paddingTop: '-100px' }}>
                           <h3 style={{ textAlign: 'center', color: "black", fontSize: "20px", lineHeight: "20px" }}>
                              Government of India <br /> Ministry of Health and Family Welfare <br /> (Initial phase of COVID-19 vaccinations) <br />
                           </h3>
                           <aside className="todo" >
                              <p style={{ fontStyle: "italic", lineHeight: "17px" }}>
                                 The COVID-19 vaccine trials are under different stages of
                                 finalization. Based on the potential availability of vaccines the
                                 Government of India has decided that initial phase of the vaccines will
                           be carried out in handful of cities only. <br /><br />
                           Safety and efficacy of vaccine will be ensured through various
                           phases of vaccine trials and only then a vaccine will be
                           introduced. The COVID 19 vaccine will be safe and effective
                           but may have minor side effects like fever, pain, etc. at the
                           injection site. These effects are common post vaccine. Find more info from...<br /> <br />
                                 <a href="https://www.mohfw.gov.in/pdf/FAQsonCOVID19VaccineDecember2020.pdf">https://www.mohfw.gov.in/pdf/FAQsonCOVID19VaccineDecember2020.pdf</a>
                              </p>
                           </aside>
                        </div>
                     </div>
                     <div>
                        <img src={govLogo} alt="Logo of Government of India" className="xyz" />
                     </div>
                  </form>
               </div>
            </section>
         </div>

         <section className="important">
            <div className="rightcol">
               <h2>Important Instructions.</h2>
               <p>  A COVID‑19 vaccine is any of several different vaccine technologies intended to provide acquired immunity against coronavirus disease 2019 (COVID‑19).Previous work to develop a vaccine against the coronavirus diseases SARS and MERS established knowledge about the structure and function of coronaviruses, which accelerated development during early 2020 of varied technology platforms for a COVID‑19 vaccine.  </p>

            </div>
            <img src={vacinneImg} alt="picture of covid" />
         </section>
      </body>

   )
}

export default Home;