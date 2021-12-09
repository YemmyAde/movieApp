import React, { useState } from "react";
import { Background, Box, Login, Logo, Space } from "./styles.js";
import logo from "../assets/logo.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { register } from "../services/httpRequest"

const SignUp = () => {

  const [ signup, setSignup ] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const inputHandler = (e) =>{
    const { name, value } = e.target;
    setSignup((input) => {
      return {...input, [name]: value }
    })
    
  }
  const submitHandler = async (e) =>{
    e.preventDefault();
    register(signup.firstName, signup.lastName, signup.userName, signup.email, signup.password, signup.confirmPassword)
  }
  return (
    <Background>
      <Link to="/">
        <Logo src={logo} alt="" />
      </Link>
      <Box>
        <Login> Sign Up</Login>
        <form>
        <Space>
          <TextField
            fullWidth
            label="First Name"
            id="fullWidth"
            variant="filled"
            color="secondary"
            name="firstName"
            value={signup.firstName}
            onChange={inputHandler}
          />{" "}
        </Space>
        <Space>
          <TextField fullWidth label="Last Name" id="fullWidth" 
            name="lastName"
            value={signup.lastName}
            onChange={inputHandler}/>
        </Space>
        <Space>
          <TextField fullWidth label="User Name" id="fullWidth" 
            name="userName"
            value={signup.userName}
            onChange={inputHandler}/>
        </Space>
        <Space>
          <TextField fullWidth label="Email" id="fullWidth" 
            name="email"
            value={signup.email}
            onChange={inputHandler}/>
        </Space>
        <Space>
          <TextField fullWidth label="Password" id="fullWidth" name="password"
            value={signup.password}
            onChange={inputHandler}/>
        </Space>
        <Space>
          <TextField fullWidth label="Confirm Password" id="fullWidth" name="confirmPassword"
            value={signup.confirmPassword}
            onChange={inputHandler}/>
        </Space>
        <Button variant="contained" type="submit" onClick={submitHandler}> Sign up</Button>
        </form>
      </Box>
    </Background>
  );
}

export default SignUp;
