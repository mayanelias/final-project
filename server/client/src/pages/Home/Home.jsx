import React from "react";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import { GrSearch } from "react-icons/gr";
import { GrClose } from "react-icons/gr";
import { GoCalendar } from "react-icons/go";
import "./home.css";
const Home = ({ data, setDetails, placeholder }) => {
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
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  }
  function showAllInformationAboutTheConcert(id) {
    const tempArray = [...data].filter((concert) => concert.id === id);
    setDetails(tempArray);
    setRedirect(true);
  }
  function show(name) {
    const tempArray = [...data].filter((concert) => concert.name === name);
    setDetails(tempArray);
    setRedirect(true);
  }
  function clearInput() {
    setFilteredData([]);
    setWordEntered("");
  }
  let elements = data.map((concert) => {
    let random = Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "")
      .substr(0, 5);
    return (
      <div className="card" key={random}>
        <img
          className="cardImg"
          onClick={() => {
            showAllInformationAboutTheConcert(concert.id);
          }}
          src={concert.image}
        />
        <div className="cardBody">
          <h3 className="name">{concert.name}</h3>
          <h3 className="dateTime">
            <GoCalendar /> {concert.dateTime}
          </h3>
          <h4 className="country">{concert.country}</h4>
          <p>
            <a id="ticket" href={concert.url}>
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
          {filteredData.slice(0, 8).map((concert) => {
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
                    show(concert.name);
                  }}
                >
                  {concert.name}
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

export default Home;
