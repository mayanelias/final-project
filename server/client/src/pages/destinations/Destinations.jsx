import React from "react";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import { GrSearch } from "react-icons/gr";
import { GrClose } from "react-icons/gr";
import { GoCalendar } from "react-icons/go";
import "./destinations.css";
const Destinations = ({ data, setDetails, placeholder }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [redirect, setRedirect] = useState(false);
  if (redirect) {
    return <Redirect to="/Details" />;
  }
  function handleFilter(e) {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.destination.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  }
  function showAllInformationAboutTheDestination(id) {
    const tempArray = [...data].filter((destination) => destination.id === id);
    setDetails(tempArray);
    setRedirect(true);
  }
  function showDestination(name) {
    const tempArray = [...data].filter(
      (destination) => destination.name === name
    );
    setDetails(tempArray);
    setRedirect(true);
  }
  function clearInput() {
    setFilteredData([]);
    setWordEntered("");
  }
  console.log(data);
  let elements = data.map((destination) => {
    let random = Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "")
      .substr(0, 5);
    return (
      <div className="card" key={random}>
        <img
          className="cardImg"
          onClick={() => {
            showAllInformationAboutTheDestination(destination.id);
          }}
          src={destination.destination}
        />
        <div className="cardBody">
          <h3 className="name">{destination.name}</h3>
          <h3 className="dateTime">
            <GoCalendar /> {destination.dateTime}
          </h3>
          <h4 className="country">{destination.country}, {destination.city}</h4>
          <p>
            <a id="ticket" href={destination.url}>
              For Tickets Click Here
            </a>
          </p>
        </div>
      </div>
    );
  });
  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          value={wordEntered}
          placeholder={placeholder}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length == 0 ? (
            <GrSearch />
          ) : (
            <GrClose onClick={clearInput} id="clearBtn" />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 8).map((city) => {
            let random = Math.random()
              .toString(36)
              .replace(/[^a-z]+/g, "")
              .substr(0, 5);
            return (
              <div key={random} href="" className="dataItem" target={"_blank"}>
                <a
                  id="showDetailsArtist"
                  href="#"
                  onClick={() => {
                    showDestination(city.name);
                  }}
                >
                  {city.name}
                </a>
              </div>
            );
          })}
        </div>
      )}
      <div className="info">{elements};</div>
    </div>
  );
};
export default Destinations;
