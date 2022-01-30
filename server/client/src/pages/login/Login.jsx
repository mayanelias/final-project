import { useState } from "react";
import axios from "axios";
import fireBaseApi from "../../logic/key";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
const Login = ({ setAuth, USERֹֹ_INFORMATIOM, setFlag }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorFromServer, setErrorFromServer] = useState(false);
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
        setErrorFromServer(true);
        setLoading(false);
      });
  };
  const formValidation = () => {
    return email.length && password.length;
  };
  return (
    <div className="BoxContainer">
        <div className="form-box">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (formValidation()) {
                loginForm();
              }
            }}
          >
          <div className="FormContainer">
            <h1>Sign-In</h1>
            <label>Email</label>
            <br></br>
            <input className="Input"
              autoComplete="on"
              type="email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
                setDisabled(formValidation());
              }}
            />
            <label>Password</label>
            <br></br>
            <input className="Input"
              autoComplete="on"
              type="password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
                setDisabled(formValidation());
              }}
            />
              </div>
            <p>
              Don't have an account?
              <a id="BoldLink"
                onClick={() => setFlag({ register: true, login: false })}
                href="#"
              >
                Register
              </a>
            </p>
            {loading ? (
              <p>
                <Spinner animation="border" variant="primarey" />
              </p>
            ) : (
              <input className="SubmitButton"
                disabled={!disabled}
                autoComplete="on"
                type="submit"
                value="SiGN-IN"
              />
            )}
          </form>
          <h5 style={{ color: "red" }}>
            {errorFromServer ? "error from server" : ""}
          </h5>
        </div>
      </div>
  );
};
export default Login;
