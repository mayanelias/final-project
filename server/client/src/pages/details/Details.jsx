import { useState } from "react";
import { Redirect } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import style from "./details.module.css";
const Details = ({ details }) => {
  const [redirect, setRedirect] = useState(false);
  if (redirect) {
    return <Redirect to="/" />;
  }
  let random = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(0, 5);
  return (
    <div key={random}>
      <div>
   <h2 className={style.artistName}>{details[0].name}</h2>
      <img className={style.imgDetails} src={details[0].image} />
      </div>
      <div className={style.allInfo}>
      <h2>Date: {details[0].dateTime}</h2>
      <h2>City: {details[0].city}</h2>
      <h2><a className={style.ticketsDetails} href={details[0].url}>For Tickets Click Her</a></h2>
      <p>Genre:{details[0].genre}</p>
      <p>Place:{details[0].place}</p>
      <p>Country:{details[0].country}</p>
      <p>State:{details[0].state}</p>
      <p>PostalCode:{details[0].postalCode}</p>
      <p>Local-Time:{details[0].localTime}</p>
      <p>Time-Zone:{details[0].timezone}</p>
      <p>Currency:{details[0].currency}</p>
      <p>price:{details[0].min}-{details[0].max}</p>
      <p>Longitude:{details[0].longitude}</p>
      <p>Latitude:{details[0].latitude}</p>
      <p>Info:{details[0].info}</p>
      <p>PleaseNote:{details[0].pleaseNote}</p>
      <p>TicketLimit:{details[0].ticketLimit}</p>
      <p>Address:{details[0].address}</p>
      <p>PhoneNumberDetail:{details[0].phoneNumberDetail}</p>
      <p>OpenHoursDetail:{details[0].openHoursDetail}</p>
      <p>AcceptedPaymentDetail:{details[0].acceptedPaymentDetail}</p>
      <p>WillCallDetail:{details[0].willCallDetail}</p>
      <p>ParkingDetail:{details[0].parkingDetail}</p>
      <p>GeneralRule:{details[0].generalRule}</p>
      <p>ChildRule:{details[0].childRule}</p>
      <p>UpcomingEvents:{details[0].upcomingEvents}</p>
      {/* <iframe
        width="642"
        height="361"
        src={details[0].video}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>       */}
      </div>
     <br/>
      <button onClick={() => setRedirect(true)}>
        <TiArrowBack />
      </button>
    </div>
  );
};
export default Details;
