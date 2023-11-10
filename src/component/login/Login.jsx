import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { server } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../../redux/action/user";
// const loginHandler = () => {
//   window.open(`${server}/auth/google`, "_self");
// };
const Login = () => {
  const dispatch = useDispatch();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [regName, setRegName] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regEmail, setRegEmail] = useState("");

  const [hide, setHide] = useState(false);
  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };
  const registerSubmit = () => {
    dispatch(register(regName, regEmail, regPassword));
  };
  return (
    <>
      {!hide ? (
        <section className="login">
          {/* <motion.button
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        onClick={loginHandler}
      >
        Login with Google
        <FcGoogle />
      </motion.button> */}
          <h1>Login</h1>
          <input
            type="email"
            placeholder="Enter email"
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password"
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <button onClick={loginSubmit}>Submit</button>
          <span onClick={(e) => setHide(true)}>are you register?</span>
        </section>
      ) : (
        <section className="login">
          {/* <motion.button
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        onClick={loginHandler}
      >
        Login with Google
        <FcGoogle />
      </motion.button> */}
          <h1>Register</h1>
          <input
            type="text"
            placeholder="Enter name"
            onChange={(e) => setRegName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter email"
            onChange={(e) => setRegEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password"
            onChange={(e) => setRegPassword(e.target.value)}
          />
          <button onClick={registerSubmit}>Submit</button>
          <span
            onClick={(e) => {
              setHide(false);
            }}
          >
            are you already register?
          </span>
        </section>
      )}
    </>
  );
};

export default Login;
