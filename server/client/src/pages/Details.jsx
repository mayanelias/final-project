import { useState } from "react";
import { Redirect } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
const Details = ({ details }) => {
  const [redirect, setRedirect] = useState(false);
  if (redirect) {
    return <Redirect to="/"/>;
  }
let random=Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
  return (
      <div key={random}>
    <h1 style={{ textAlign: "center" }}>Details-Page </h1>
      <img style={{width:"600px",height:"600px"}} src={details[0].image} />
      <h2>{details[0].name}</h2>
      <h2>{details[0].dateTime}</h2>
      <h2>{details[0].country}</h2>
      <a href={details[0].url}>For Tickets Click Her</a>
      <p>{details[0].genre}</p>
      <p>{details[0].place}</p>
      <p>{details[0].city}</p>
      <p>{details[0].state}</p>
      <p>{details[0].postalCode}</p>
      <p>{details[0].locaTime}</p>
      <p>{details[0].timeZone}</p>
      <p>{details[0].currency}</p>
      <p>{details[0].info}</p>
      <p>{details[0].pleaseNote}</p>
      <p>{details[0].ticketLimit}</p>
      <p>{details[0].address}</p>
      <p>{details[0].phoneNumberDetail}</p>
      <p>{details[0].openHoursDetail}</p>      
      <p>{details[0].acceptedPaymentDetail}</p>
      <p>{details[0].willCallDetail}</p>
      <p>{details[0].parkingDetail}</p>
      <p>{details[0].generalRule}</p>
      <p>{details[0].childRule}</p>
      <p>{details[0].upcomingEvents}</p>
      <button onClick={() => setRedirect(true)}><TiArrowBack/></button>
    </div>
  );
};
export default Details;