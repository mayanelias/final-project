import { useState } from "react";
import axios from "axios";
import fireBaseApi from "../../logic/key";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./register.css";
const Register = ({ setAuth, USERֹֹ_INFORMATIOM, setFlag }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorFromServer, setErrorFromServer] = useState("");
  const [disabled, setDisabled] = useState(false);
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [messageErrorPassword, setMessageErrorPassword] = useState("");
  // const [formValidation, setformValidation] = useState("");
  const registerForm = () => {
    setLoading(true);
    axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${fireBaseApi}`,
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
    <div className="show active">
      <div className="login-form">
        <div className="form-box">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (formValidation()) {
                registerForm();
              }
            }}
          >
            <h1 className="login-text">Register</h1>
            <label>Email</label>
            <br></br>
            <input
              autoComplete="on"
              type="email"
              name="email"
              className="login-box"
              onChange={(e) => {
                setEmail(e.target.value);
                setDisabled(formValidation());
              }}
            />
            <label>Password</label>
            <br></br>
            <input
              autoComplete="on"
              type="password"
              name="password"
              className="login-box"
              onChange={(e) => {
                setPassword(e.target.value);
                setDisabled(formValidation());
              }}
            />
            <p>
              Already have an account?
              <a
                onClick={() => setFlag({ register: false, login: true })}
                href="#"
              >
                Sign-In
              </a>
            </p>
            {loading ? (
              <p>
                <Spinner animation="border" variant="primarey" />
              </p>
            ) : (
              <input
                autoComplete="on"
                disabled={!disabled}
                type="submit"
                value="REGISTER"
                className="login-btn"
              />
            )}
          </form>
          <h5 style={{ color: "red" }}>
            {errorFromServer ? "error from server" : ""}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Register;
