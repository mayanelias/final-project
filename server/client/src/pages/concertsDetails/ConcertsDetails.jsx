import { useState } from "react";
import { Redirect } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import style from "./concertsDetails.module.css";
const ConcertsDetails = ({ concertsDetails }) => {
  const [redirect, setRedirect] = useState(false);
  if (redirect) {
    return <Redirect to="/Destinations" />;
  }
  return (
    <>
      {concertsDetails.map((concert) => {
        return (
          <div className={style.container}>
            <h4 className={style.countryDetails}>{concert.city},{concert.country}</h4>
            <table className={style.styledTable}>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>City</th>
                  <th>Country</th>
                  <th>Date-Time</th>
                  <th>Tickets</th>
                </tr>
              </thead>
              <tbody>
                <tr className={style.activeRow}>
                  <td>
                    <img className={style.artist} src={concert.image} />
                  </td>
                  <td>{concert.name}</td>
                  <td>{concert.city}</td>
                  <td>{concert.country}</td>
                  <td>{concert.dateTime}</td>
                  <td>
                    <a id={style.url} href={concert.url}>
                      For Tickets Click Here
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
      <button onClick={() => setRedirect(true)}>
        <TiArrowBack />
      </button>
    </>
  );
};
export default ConcertsDetails;
