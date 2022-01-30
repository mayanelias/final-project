import { BrowserRouter, Switch, Route, Link} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Artists from "./pages/Artists";
import Concerts from "./pages/Concerts";
import Contact from "./pages/Contact";
import Destinations from "./pages/destinations/Destinations";
import Details from "./pages/Details";
import LandingPage from "./pages/landingPage/LandingPage";
import "./App.css";
function App() {
  const [auth, setAuth] = useState(null);
  const [data, setData] = useState([]);
  const [details, setDetails] = useState("");
  const USERֹֹ_INFORMATIOM = "userInformation";
  useEffect(() => {
    const userInformation = JSON.parse(
      localStorage.getItem(USERֹֹ_INFORMATIOM)
    );
    const userEmail=userInformation ? setAuth(userInformation) : null;
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
    axios
      .get(
        "./data/concerts.json"
        // `https://api.seatgeek.com/2/events?taxonomies.name=concert&client_id=${clientId}&per_page=200`
        // `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${ticketMasterConsumerKey}`
        // `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey${ticketMasterConsumerKey}`
        // `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=UK&apikey=${ticketMasterConsumerKey}&per_page=50`
        //`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=FA&classificationName=music&apikey=${ticketMasterConsumerKey}&size=200`
        // `https://app.ticketmaster.com/discovery/v2/events.json?attractionId=K8vZ917Gku7&countryCode=US&apikey=${ticketMasterConsumerKey}`
      )
      .then(function (response) {
        console.log(response.data.concerts);
        setData(response.data.concerts);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <BrowserRouter>
      <div className="App">
        {auth ? (
          <>
            <button
              className="signOut"
              onClick={() => {
                localStorage.clear();
                setAuth(null);
              }}
            >
              sign out
            </button>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Artists">Artists</Link>
            <Link to="/Concerts">Concerts</Link>
            <Link to="/Destinations">Destinations</Link>
            <Switch>
              {/* <Route
                exact
                path="/LandingPage"
                render={() => <Redirect to={"/"} />}
              /> */}
              <Route
                exact
                path="/"
                render={() => (
                  <Home
                    data={data}
                    setData={setData}
                    details={details}
                    setDetails={setDetails}
                    placeholder={"Search Artist..."}
                  />
                )}
              />
              <Route exact path="/About" render={() => <About />} />
              <Route exact path="/Artists" render={() => <Artists />} />
              <Route exact path="/Concerts" render={() => <Concerts />} />
              <Route exact path="/Contact" render={() => <Contact />} />
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
            </Switch>
          </>
        ) : (
          <LandingPage
            setAuth={setAuth}
            USERֹֹ_INFORMATIOM={USERֹֹ_INFORMATIOM}
          />
        )}
      </div>
    </BrowserRouter>
  );
}
export default App;
