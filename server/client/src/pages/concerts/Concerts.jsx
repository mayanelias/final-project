import React from "react";
import axios from "axios";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import { GrSearch } from "react-icons/gr";
import { GrClose } from "react-icons/gr";
import { GoCalendar } from "react-icons/go";
import { RiHeartAddFill } from "react-icons/ri";
import ReactTooltip from "react-tooltip";
import swal from "sweetalert";
import style from "./concerts.module.css";
import ConcertsVideo from "../../videos/concerts.mp4";
import Contact from "../../components/contact/Contact";
const Concerts = ({
  data,
  setDetails,
  placeholder,
  setWishList,
  wishList,
  auth,
}) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [redirect, setRedirect] = useState(false);
//   const [concertsRedirect, setConcertsRedirect] = useState(false);
  const [visible, setVisible] = useState(9);
  console.log(wishList);
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
    const tempArray = [...data].filter((concert) => concert._id === id);
    setDetails(tempArray);
    setRedirect(true);
  }
  function addConcertToWishListById(tempConcertWishList) {
    axios
    .patch(`/users/${auth.localId}`, {
      wishList: tempConcertWishList,
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  function addConcertToTheWishList(id) {
    const tempArray = [...data];
    const tempConcertWishList = [...wishList];
    let foundConcert = tempArray.find((concert) => concert._id == id);
    console.log(foundConcert);
    let checkConcertWishList = tempConcertWishList.find(
      (concert) => concert._id == id
      );
      if (checkConcertWishList == undefined) {
        tempConcertWishList.push(foundConcert);
        addConcertToWishListById(tempConcertWishList);
        setWishList(tempConcertWishList);
        swal({
          text: "The Concert Has Been Added",
          icon: "success",
          timer: 2000,
        });
      } else {
        swal({
          text: "The Concert Is Already Added",
          icon: "warning",
          button: "Accept",
          timer: 2000,
        }); 
      }
    }
    function showAllArtistInformation(name) {
      const tempArray = [...data].filter((concert) => concert.name === name);
      setDetails(tempArray);
      setRedirect(true);
    }
    function showMoreConcerts() {
      setVisible((prevValue) => prevValue + 9);
  }
  function clearInput() {
    setFilteredData([]);
    setWordEntered("");
  }
  let filteredElements = data.filter(
    (ele, ind) => ind === data.findIndex((elem) => elem.image === ele.image)
    );
    let elements = filteredElements.slice(0, visible).map((concert) => {
      let random = Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "")
      .substr(0, 5);
      
      if (redirect) {
        return <Redirect to="/Details" />;
      }
    return (
      <div className={style.card} key={random}>
        <div className={style.cardBody}>
          <img
            className={style.cardImg}
            onClick={() => {
              showAllInformationAboutTheConcert(concert._id);
            }}
            src={concert.image}
          />
          <div className={style.details}>
          <h3 className={style.name}>{concert.name}</h3>
          <h3 className={style.dateTime}>
            <GoCalendar /> {concert.dateTime}
          </h3>
          <h4 className={style.country}>{concert.country}</h4>
          <p>
            <a id={style.ticket} href={concert.url}>
              For Tickets Click Here
            </a>
          </p>
          <button
            className={style.add}
            onClick={() => addConcertToTheWishList(concert._id)}
          >
            <RiHeartAddFill />
            <ReactTooltip id="Add To WishList" place="top" effect="solid">
              Add To WishList
            </ReactTooltip>
          </button>
          </div>
        </div>
      </div>
    );
  });
  return (
        <>
        <video className={style.ConcertsVideo} src={ConcertsVideo} autoPlay loop muted />
        <div className={style.search}>
      <div className={style.searchInputs}>
        <input
          type="text"
          value={wordEntered}
          placeholder={placeholder}
          onChange={handleFilter} />
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
          {filteredData.slice(0, 8).map((concert) => {
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
                    showAllArtistInformation(concert.name);
                  } }
                >
                  {concert.name}
                </a>
              </div>
            );
          })}
        </div>
      )}
      <div className={style.info}>{elements}</div>
      <br />
      <button className={style.showMoreConcerts} onClick={showMoreConcerts}>
      Load For More Concerts
    </button>
      <br />
      <br />
    </div>
    <Contact/>
    </>
  );
};

export default Concerts;