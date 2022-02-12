import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import style from "./topTenArtists.module.css";
const TopTenArtists = ({ data, setTopTenArtistsDetails }) => {
  const [redricet, setRedriect] = useState(false);
  function showTopTenArtistInformation(id) {
    const tempArray = [...data].filter((artist) => artist._id === id);
    setTopTenArtistsDetails(tempArray);
    setRedriect(true);
  }
  if (redricet) {
    return <Redirect to="/TopTenArtistsDetails" />;
  }
  return (
    <div className={style.row}>
        <h4 className={style.Title}>
          <b style={{ color: "red" }}>TOP-TEN </b>ARTISTS
        </h4>
      <div className={style.rowPosters}>
        {data.map((artists) => {
          if (artists.topTen === "true") {
            return (
              <>
                <img
                  onClick={() => showTopTenArtistInformation(artists._id)}
                  key={artists.id}
                  className={style.rowPoster}
                  src={artists.image}
                />
              </>
            );
          }
        })}
      </div>
    // </div>
  );
};
export default TopTenArtists;
