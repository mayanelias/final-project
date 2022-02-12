import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home";
import About from "./pages/about/About";
import Artists from "./pages/artists/Artists";
import Concerts from "./pages/concerts/Concerts";
import Destinations from "./pages/destinations/Destinations";
import Details from "./pages/details/Details";
import LandingPage from "./pages/landingPage/LandingPage";
import WishList from "./pages/wishList/WishList";
import NavBar from "./components/navBar/NavBar";
import ConcertsDetails from "./pages/concertsDetails/ConcertsDetails";
import TopTenArtistsDetails from "./pages/topTenArtistsDetails/TopTenArtistsDetails";
import Footer from "./components/footer/Footer";
import "./App.css";
function App() {
  const [auth, setAuth] = useState(null);
  const [data, setData] = useState([]);
  const [details, setDetails] = useState("");
  const [wishList, setWishList] = useState([]);
  const [concertsDetails, setConcertsDetails] = useState("");
  const [user, setUser] = useState("");
  const [topTenArtistsDetails, setTopTenArtistsDetails] = useState("");
  const [loading, setLoading] = useState(false);
  const USERֹֹ_INFORMATIOM = "userInformation";
  useEffect(() => {
    setAuth(
      JSON.parse(localStorage.getItem(USERֹֹ_INFORMATIOM))
        ? JSON.parse(localStorage.getItem(USERֹֹ_INFORMATIOM))
        : null
    );
  }, []);
  const localId = JSON.parse(localStorage.getItem(USERֹֹ_INFORMATIOM));
  useEffect(() => {
    if (!localId) return;
    axios
      .get(`/users/${localId.localId}`)
      .then(function (res) {
        console.log(res);
        console.log(localId.localId);
        setWishList(res.data.wishList);
        console.log(res.data.wishList);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  useEffect(getData, []);
  function getData() {
    //   const apiKeySeatGeek = `7c152e7a21513a177cd7cad068363cd6b4d6fa2a017f83b536d800df2f4cb95a`;
    //   const apiKey1Predict = `HgDB9QbBQXfQ5KoyHtYH_G2r_Zl5bOUXW6gV-bY3kSnWBTS5_7S-9A`;
    //   const clientIdPredict = `TFjfh_SDY7w`;
    //   const clientIdSeatGeek = `MjU0MDAwOTJ8MTY0MjUxODExNC40NDU2MDU`;
    //   const ticketMasterConsumerKey = `vGPI5pR0DFdQ8P1Y2GIMqGiLsFl4WFyA`;
    //   const ticketMasterConsumerSecretKey = `ZgqiW9vZlZj974Cg`;
    //   const idBooking = "7917661";
    //   const liveStreamApiKey = "AIzaSyAnKhrDIF_YpsxEqZpfJp6FCRYVn4HCVXE";
    //   const liveStreamApiKeyClientId =
    //     "156865070382-effdmnalvkrj2bm2or6lrr0gbimhof27.apps.googleusercontent.com";
    //   const liveStreamApiKeySecretClientId = "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";
    //   const AccessTokenID = "a4e6999e-68ec-4c65-b08e-6773f663db0d";
    //   const SecretKey =
    //     "Aow7X8my8bfu3yBGTZ5ihjxmfXY6zt7DQHrwbk+/mjcAXh3daOVOBLlurEq/JszvaY82ugKjsCE";
    setLoading(true);
    axios
      .get(
        "/concerts"
        // `https://api.seatgeek.com/2/events?taxonomies.name=concert&client_id=${clientId}&per_page=200`
        // `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${ticketMasterConsumerKey}`
        // `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey${ticketMasterConsumerKey}`
        // `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=UK&apikey=${ticketMasterConsumerKey}&per_page=50`
        //`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=FA&classificationName=music&apikey=${ticketMasterConsumerKey}&size=200`
        // `https://app.ticketmaster.com/discovery/v2/events.json?attractionId=K8vZ917Gku7&countryCode=US&apikey=${ticketMasterConsumerKey}`
      )
      .then(function (response) {
        setTimeout(() => {
          setLoading(false);
          setData(response.data);
        });
      }, 2000)
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <BrowserRouter>
      <div className="App">
        {auth ? (
          <>
            <NavBar
              auth={auth}
              setAuth={setAuth}
              USERֹֹ_INFORMATIOM={USERֹֹ_INFORMATIOM}
              setWishList={setWishList}
            />
            <Switch>
              <Route
                exact
                path="/LandingPage"
                render={() => <Redirect to={"/"} />}
              />
              <Route
                exact
                path="/"
                render={() => (
                  <Home
                    data={data}
                    setData={setData}
                    details={details}
                    setDetails={setDetails}
                    wishList={wishList}
                    setWishList={setWishList}
                    placeholder={"Search Artist..."}
                    user={user}
                    setUser={setUser}
                    auth={auth}
                    topTenArtistsDetails={topTenArtistsDetails}
                    setTopTenArtistsDetails={setTopTenArtistsDetails}
                  />
                )}
              />
              <Route exact path="/About" render={() => <About />} />
              <Route
                exact
                path="/Artists"
                render={() => (
                  <Artists
                    data={data}
                    setData={setData}
                    details={details}
                    setDetails={setDetails}
                    placeholder={"Search Artist..."}
                  />
                )}
              />
              <Route
                exact
                path="/Concerts"
                render={() => (
                  <Concerts
                    data={data}
                    setData={setData}
                    details={details}
                    setDetails={setDetails}
                    wishList={wishList}
                    setWishList={setWishList}
                    placeholder={"Search Artist..."}
                    user={user}
                    setUser={setUser}
                    auth={auth}
                  />
                )}
              />
              <Route
                exact
                path="/WishList"
                render={() => (
                  <WishList
                    auth={auth}
                    setData={setData}
                    setAuth={setAuth}
                    USERֹֹ_INFORMATIOM={USERֹֹ_INFORMATIOM}
                    data={data}
                    wishList={wishList}
                    setWishList={setWishList}
                    setDetails={setDetails}
                  />
                )}
              />
              <Route
                exact
                path="/Destinations"
                render={() => (
                  <Destinations
                    data={data}
                    setData={setData}
                    details={details}
                    setDetails={setDetails}
                    placeholder={"Search City..."}
                    concertsDetails={concertsDetails}
                    setConcertsDetails={setConcertsDetails}
                  />
                )}
              />
              <Route
                exact
                path="/Details"
                render={() => (
                  <Details details={details} setDetails={setDetails} />
                )}
              />
              <Route
                exact
                path="/TopTenArtistsDetails"
                render={() => (
                  <TopTenArtistsDetails
                    topTenArtistsDetails={topTenArtistsDetails}
                    setTopTenArtistsDetails={setTopTenArtistsDetails}
                  />
                )}
              />
              <Route
                exact
                path="/ConcertsDetails"
                render={() => (
                  <ConcertsDetails
                    concertsDetails={concertsDetails}
                    setConcertsDetails={setConcertsDetails}
                  />
                )}
              />
            </Switch>
          </>
        ) : (
          <LandingPage
            auth={auth}
            setAuth={setAuth}
            USERֹֹ_INFORMATIOM={USERֹֹ_INFORMATIOM}
            user={user}
            setUser={setUser}
            wishList={wishList}
            setWishList={setWishList}
          />
        )}
      </div>
      {loading ? (
        <p>
          <Spinner animation="border" variant="danger" />
        </p>
      ) : (
        ""
      )}
      <Footer/>
    </BrowserRouter>
  );
}
export default App;
