import { useState } from "react";
import { Redirect } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import style from "./topTenArtistsDetails.module.css";
const TopTenArtistsDetails = ({ topTenArtistsDetails }) => {
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
   <h2 className={style.artistName}>{topTenArtistsDetails[0].name}</h2>
      <img className={style.imgDetails} src={topTenArtistsDetails[0].image} />
      </div>
      <div className={style.allInfo}>
      <h2>Date: {topTenArtistsDetails[0].dateTime}</h2>
      <h2>City: {topTenArtistsDetails[0].city}</h2>
      <h2><a className={style.ticketsDetails} href={topTenArtistsDetails[0].url}>For Tickets Click Her</a></h2>
      <p>Genre:{topTenArtistsDetails[0].genre}</p>
      <p>Place:{topTenArtistsDetails[0].place}</p>
      <p>Country:{topTenArtistsDetails[0].country}</p>
      <p>State:{topTenArtistsDetails[0].state}</p>
      <p>PostalCode:{topTenArtistsDetails[0].postalCode}</p>
      <p>Local-Time:{topTenArtistsDetails[0].localTime}</p>
      <p>Time-Zone:{topTenArtistsDetails[0].timezone}</p>
      <p>Currency:{topTenArtistsDetails[0].currency}</p>
      <p>price:{topTenArtistsDetails[0].min}-{topTenArtistsDetails[0].max}</p>
      <p>Longitude:{topTenArtistsDetails[0].longitude}</p>
      <p>Latitude:{topTenArtistsDetails[0].latitude}</p>
      <p>Info:{topTenArtistsDetails[0].info}</p>
      <p>PleaseNote:{topTenArtistsDetails[0].pleaseNote}</p>
      <p>TicketLimit:{topTenArtistsDetails[0].ticketLimit}</p>
      <p>Address:{topTenArtistsDetails[0].address}</p>
      <p>PhoneNumberDetail:{topTenArtistsDetails[0].phoneNumberDetail}</p>
      <p>OpenHoursDetail:{topTenArtistsDetails[0].openHoursDetail}</p>
      <p>AcceptedPaymentDetail:{topTenArtistsDetails[0].acceptedPaymentDetail}</p>
      <p>WillCallDetail:{topTenArtistsDetails[0].willCallDetail}</p>
      <p>ParkingDetail:{topTenArtistsDetails[0].parkingDetail}</p>
      <p>GeneralRule:{topTenArtistsDetails[0].generalRule}</p>
      <p>ChildRule:{topTenArtistsDetails[0].childRule}</p>
      <p>UpcomingEvents:{topTenArtistsDetails[0].upcomingEvents}</p>
      <iframe
        width="100%"
        height="461"
        src={topTenArtistsDetails[0].video}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>      
      </div>
     <br/>
      <button onClick={() => setRedirect(true)}>
        <TiArrowBack />
      </button>
    </div>
  );
};
export default TopTenArtistsDetails;