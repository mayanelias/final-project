import React from "react";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import { GrSearch } from "react-icons/gr";
import { GrClose } from "react-icons/gr";
import Artists from "../../videos/artists.mp4";
import Contact from "../../components/contact/Contact";
import style from "./artists.module.css";
const Destinations = ({ data, placeholder, setDetails }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [visible, setVisible] = useState(9);
  if (redirect) {
    return <Redirect to="/Details" />;
  }
  let filteredElements = data.filter(
    (ele, ind) => ind === data.findIndex((elem) => elem.name === ele.name)
  );
  console.log(filteredElements);
  function handleFilter(e) {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  }
  function showMoreArtists() {
    setVisible((prevValue) => prevValue + 9);
  }
  function showConcertsByArtist(id) {
    const tempArray = [...data].filter((artist) => artist._id === id);
    setDetails(tempArray);
    setRedirect(true);
  }
  function clearInput() {
    setFilteredData([]);
    setWordEntered("");
  }
  console.log(data);
  let elements = filteredElements.slice(0, visible).map((artist) => {
    let random = Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "")
      .substr(0, 5);
    return (
      <div className={style.card} key={random}>
        <div className={style.cardBody}>
          <img
            className={style.cardImg}
            onClick={() => {
              showConcertsByArtist(artist._id);
            }}
            src={artist.image}
          />
          <div className={style.details}>
            <h4 className={style.name}>{artist.name}</h4>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <video className={style.artists} src={Artists} autoPlay loop muted />
      <div className={style.search}>
        <div className={style.searchInputs}>
          <input
            type="text"
            value={wordEntered}
            placeholder={placeholder}
            onChange={handleFilter}
          />
          <div className={style.searchIcon}>
            {filteredData.length == 0 ? (
              <GrSearch />
            ) : (
              <GrClose onClick={clearInput} id={style.clearBtn} />
            )}
          </div>
        </div>
        {filteredData.length != 0 && (
          <div className={style.dataResult}>
            {filteredData.slice(0, 8).map((artist) => {
              let random = Math.random()
                .toString(36)
                .replace(/[^a-z]+/g, "")
                .substr(0, 5);
              return (
                <div
                  key={random}
                  href=""
                  className={style.dataItem}
                  target={"_blank"}
                ></div>
              );
            })}
          </div>
        )}
        <div className={style.info}>{elements}</div>
        <br/><br/>
        <button className={style.showMoreArtists} onClick={showMoreArtists}>
          Load For More Artists
        </button>
      </div>
      <Contact/>
    </>
  );
};
export default Destinations;
