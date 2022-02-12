import { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { GoCalendar } from "react-icons/go";
import { MdDeleteForever } from "react-icons/md";
import ReactTooltip from "react-tooltip";
import style from "./wishList.module.css";
import swal from "sweetalert";
const WishList = ({ data, wishList, setWishList, setDetails, auth }) => {
  const [redirect, setRedirect] = useState(false);
  if (redirect) {
    return <Redirect to="/Details" />;
  }
  function showAllInformationAboutTheConcert(id) {
    const tempArray = [...data].filter((concert) => concert._id === id);
    setDetails(tempArray);
    setRedirect(true);
  }
  function removeConcertFromWishListById(objectId) {
    axios
      .patch(`/users/delete/${auth.localId}`, {
        _id: objectId,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function removeConcertFromWishList(id) {
    const tempArray = [...wishList].filter((concert) => concert._id !== id);
    removeConcertFromWishListById(id);
    setWishList(tempArray);
    swal({
      title: "Your concert  has been deleted!",
      icon: "success",
      button: "Accept",
      timer: 2000,
    });
  }
  console.log(wishList);
  let elements = wishList.map((concert) => {
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
              onClick={() => removeConcertFromWishList(concert._id)}
            >
              <MdDeleteForever />
              <ReactTooltip
                id="Delete From To WishList"
                place="top"
                effect="solid"
              >
                Delete From To WishList
              </ReactTooltip>
            </button>
          </div>
        </div>
      </div>
    );
  });
  return <div className={style.info}>{elements}</div>;
};
export default WishList;
