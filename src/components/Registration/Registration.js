import React from "react";

import cc1 from './../../assets/cc1.png';
import cc2 from './../../assets/cc2.png';

import "./styles.css";

const Registration = () => {
   return (
      <div className="body">
         <div className="d1">
            <section className="q1">  <span className="ss">Vaccination</span> " <del className="x1">Prevention</del>  is the best cure "</section>
            <br />
            <br />
            <aside className="aside">  We have all had a tough year. Billions of people all around the world hope to live normally again. <span className="span aero"> Vaccination </span> against <span className="span aero"> <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" className="a">COVID-19</a> </span> is the best way to do so. </aside>
         </div>

         <br />
         <header className="header">
            <strong className="strong"> COVID-19   Vaccination Camp Registration </strong>
         </header>
         <br />
         <p className="p">There are many strict protections in place to help ensure that COVID-19 vaccines will be safe. Like all vaccines, COVID-19 vaccines are going through a rigorous, multi-stage testing process, including large (phase III) trials that involve tens of thousands of people. These trials, which include people at high risk for COVID-19, are specifically designed to identify any common side effects or other safety concerns.</p>

         <div className="pict1">
            <img src={cc1} height="380px" width="400px" />
            <br />
         </div>
         <div className="pict2" >
            <img src={cc2} height="380px" width="400px" />
            <br />
         </div>

         <article className="article">
            <form className="form f1">
               <p className="kaam"> KINDLY FILL IN YOUR DETAILS</p>
               <label className="label" for="todo" />Name :
               <input className="input" type="text" id="todo" placeholder="Your name goes like...." required />
               <br /> <br /> <br />
               <label className="label" for="age" />Age :
               <input className="input" type="text" id="age" placeholder=" How old are you ?" required />
               <br /> <br /> <br />
               <label className="label" for="gender" />Select you gender : <br />
               <section className="gender" style={{ display: "flex", alignItems: "center" }}>
                  <input type="radio" size="10px" name="gender" />Male
                  <input type="radio" name="gender" style={{ marginLeft: '3rem' }} /> Female
               </section>
               <br /> <br />
               <label className="label" for="phone" />Contact Number :
               <input className="input" type="text" id="phone" placeholder="Enter your contact number here" required />
               <br /> <br /> <br />
               <label className="label" for="email" />E-Mail ID :
               <input className="input" type="email" id="email" placeholder=" We can mail you @ " required />
               <br /> <br /> <br />
               <label className="label" for="City" class="city" />City :
               <select className="select" name="city" id="city">
                  <option value="Blank"></option>
                  <option value="Ahmedabad">Ahmedabad</option>
                  <option value="Bangaluru">Bengaluru</option>
                  <option value="Bhubaneshwar">Bhubaneshwar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Goa">Goa</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Indore">Indore</option>
                  <option value="Jaipur">Jaipur</option>
                  <option value="Kochi">Kochi</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Nagpur">Nagpur</option>
                  <option value="Prayagraj">Prayagraj</option>
               </select>
               <br /> <br /> <br />
               <label className="label" for="aadhar" />Aadhar Number :
               <input className="input" type="text" id="aadhar" placeholder="Enter your Aadhar number here" required />
               <br /> <br /> <br />
               <label className="label" for="photo" id="plabel" />Select photo to upload :
               <input className="input" type="file" id="photo" required />
               <br /> <br />
               <section className="section">
                  <input className="input" type="submit" name="submit" value="SUBMIT" class="submit" />
               </section>
            </form>
         </article>
      </div>

   );
}

export default Registration
