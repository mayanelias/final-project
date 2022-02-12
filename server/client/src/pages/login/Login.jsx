import { useState } from "react";
import axios from "axios";
import fireBaseApi from "../../logic/key";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./login.module.css";
const Login = ({ setAuth, USERֹֹ_INFORMATIOM, setFlag,setWishList }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const loginForm = () => {
    setLoading(true);
    axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${fireBaseApi}`,
        {
          email,
          password,
        }
      )
      .then(function (response) {
        axios
        .get(`/users/${response.data.localId}`)
        .then(function (res) {
          console.log(res);
          setWishList(res.data.wishList)
        })
        .catch(function (error) {
          console.log("im here");
          // console.log(error);
        });
        setTimeout(() => {
          setLoading(false);
          console.log(response);
          setAuth(response.data);
          console.log(response.data);
          localStorage.setItem(
            USERֹֹ_INFORMATIOM,
            JSON.stringify(response.data)
          );
        }, 2000);
      })
      .catch(function (error) {
        console.log(error);
        const errorMessage=error.response.data.error.message;
        console.log(errorMessage);
        setErrorMessage(errorMessage)
        setLoading(false);
      });
  };
  const formValidation = () => {
    return email.length && password.length;
  };
  return (
    <div className={style.BoxContainer}>
    <div className={style.container}>
    <form
     onSubmit={(e) => {
                e.preventDefault();
                if (formValidation()) {
                  loginForm();
                }
              }}>
  <img className={style.brandLogo} src="https://i.ibb.co/BGgPSbV/Elias-Music-Live-Shows-logos-transparent.png"/> 
    <p className={style.brandTitle}>EliasMusic&LiveShows</p>
    <div className={style.inputs}>
      <label>EMAIL</label>
      <input className={style.Input}
 type="email" placeholder="example@test.com" onChange={(e) => {
                setEmail(e.target.value);
                setDisabled(formValidation());
              }}/>
      <label>PASSWORD</label>
      <input className={style.Input} type="password" placeholder="Min 6 charaters long" onChange={(e) => {
                setPassword(e.target.value);
                setDisabled(formValidation());
              }} />
      {loading ? (
              <p>
                <Spinner animation="border" variant="danger" />
              </p>
            ) : (
              <input className={style.SubmitButton}
                disabled={!disabled}
                autoComplete="on"
                type="submit"
                value="SiGN-IN"
              />
            )} 
      </div>
      <p style={{ color: "red" }}>
             {errorMessage ? errorMessage : ""}
     </p>
      <p className={style.account}>
      Don't have an account?
            <a id={style.BoldLink}
                onClick={() => setFlag({ register: true, login: false })}
                href="#"
              >
              Register
              </a>
            </p>
    </form>
  </div>
  </div>
  );
};
export default Login;
