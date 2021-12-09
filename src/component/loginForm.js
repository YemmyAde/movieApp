import React, { useState } from "react";
import { Background, Box, Login, Logo, Space } from "./styles.js";
import logo from "../assets/logo.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { login } from "../services/httpRequest.js"

function Signin() {

  const [signin, setSignin] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setSignin((input) => {
      return { ...input, [name]: value };
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    login(signin.email, signin.password)
    setSignin({
      email: "",
      password: "",
    });
  };

  return (
    <Background>
      <Link to="/">
        <Logo src={logo} alt="" />
      </Link>
      <Box>
        <Login> Sign In</Login>
        <form>
          <Space>
            <TextField
              fullWidth
              label="User Name"
              id="fullWidth"
              name="email"
              value={signin.email}
              onChange={inputHandler}
              error
          helperText="Incorrect entry."
            />
          </Space>
          <Space>
            <TextField
              fullWidth
              label="Password"
              id="fullWidth"
              name="password"
              value={signin.password}
              onChange={inputHandler}
            />
          </Space>
          <Button variant="contained" type="submit" onClick={submitHandler}>
            {" "}
            Sign In
          </Button>
          <br />
        </form>
        New to MovieZone?
        <Link to="/register">Sign up now</Link>
      </Box>
    </Background>
  );
}

export default Signin;
