import React from "react";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import { GrSearch } from "react-icons/gr";
import { GrClose } from "react-icons/gr";
import Destination from "../../../src/videos/destionations.mp4";
import Contact from "../../components/contact/Contact";
import style from "./destinations.module.css";
const Destinations = ({ data,placeholder,setConcertsDetails}) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [redirect, setRedirect] = useState(false);
  if (redirect) {
    return <Redirect to="/ConcertsDetails" />;
  }
  let filteredElements = data.filter(
    (ele, ind) =>
      ind === data.findIndex((elem) => elem.destination === ele.destination)
  );
  console.log(filteredElements);
  function handleFilter(e) {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.city.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  }
  function showConcertsByDestination(city) {
    const tempArray = [...data].filter(
      (name) => name.city === city
    )
    setConcertsDetails(tempArray);
    setRedirect(true);
  }
  function clearInput() {
    setFilteredData([]);
    setWordEntered("");
  }
  console.log(data);
  let elements = filteredElements.map((destination) => {
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
              showConcertsByDestination(destination.city);
            }}
            src={destination.destination}
          />
          <div className={style.details}>
            <h4 className={style.country}>
            {destination.city}
            </h4>
          </div>
        </div>
      </div>
    )
  })
  return (
    <>
      <video
        className={style.destinations}
        src={Destination}
        autoPlay
        loop
        muted
      />
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
            {filteredData.slice(0, 8).map((destination) => {
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
                >
                  <a
                    id={style.showDetailsArtist}
                    href="#"
                    onClick={() => {
                      showConcertsByDestination(destination.city);
                    }}
                  >
                    {destination.name}
                  </a>
                </div>
              )
            })}
          </div>
        )}
        <div className={style.info}>{elements}</div>
      </div>
      <Contact/>
    </>
  )
}
export default Destinations;
