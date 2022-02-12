import React from "react";
import Contact from "../../components/contact/Contact";
import style from "./about.module.css";
const About = () => {
  return (
    <div>
      <div className={style.about}> About </div>
      <div className={style.containerAbout}>
    <img className={style.backgroundAbout} src="https://i.ibb.co/RBDJZpS/background-About.jpg"/>
  <h5 className={style.summry}>
        EliasMusic&LiveShows is a website leader<br/>
         in ticket management for large-scale
        of concerts and entertainment, 
        specializing in sales, marketing, and
        distribution. As the largest
         ticket marketplace in the world,
        EliasMusic&LiveShows is also the number
         one event search platform trusted by
        billions of live event fans. 
        EliasMusic&LiveShows powers artists, promoters,
        venues, campuses, and more with
         the world's leading enterprise-grade
        ticketing software and services, 
        selling over 500 million tickets
        annually in 30 countries worldwide 
        and partnering with over 12,000
        global clients. EliasMusic&LiveShows's
         portfolio includes Front Gate Tickets,
        TicketWeb, Universe, IOMEDIA, and Elevate.
         Learn more about selling
        tickets, becoming a certified partner, 
        working at EliasMusic&LiveShows, or
         in ticket management for large-scale
        joining the EliasMusic&LiveShows affiliate<br/>
        program at EliasMusic&LiveShows Enterprise.
      </h5>       
      </div>
      <Contact/>
    </div>
  );
};

export default About;
