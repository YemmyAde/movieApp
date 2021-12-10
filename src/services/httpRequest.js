import axios from "axios";
import { config } from "../services/config.js";
const { baseURL, movieURL, apiKEY, movieIMG } = config;

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${baseURL}/login`, { email, password });
    console.log(response.data.status);
  } catch (err) {
    console.log(err.response.data.message);
  }
};
export const register = async (
  firstName,
  lastName,
  userName,
  email,
  password,
  confirmPassword
) => {
  try {
    const response = await axios.post(`${baseURL}/signup`, {
      firstName,
      lastName,
      userName,
      email,
      password,
      confirmPassword,
    });
    console.log(response.data.status);
    console.log(response.status);
  } catch (err) {
    console.error(err.response.data.message);
  }
};

export const getPopular = async () => {
    try{
        return await axios.get(`${movieURL}/movie/popular?api_key=${apiKEY}`)
    }
    catch(err) {
        console.log(err)
    }
}

export const getUpcoming = async () => {
  try{
      return await axios.get(`${movieURL}/movie/upcoming?api_key=${apiKEY}`)
  }
  catch(err) {
      console.log(err)
  }
}

export const getToprated = async () => {
  try{
      return await axios.get(`${movieURL}/movie/top_rated?api_key=${apiKEY}`)
  }
  catch(err) {
      console.log(err)
  }
}

export const movieImg =({
    url : movieIMG
  })
// https://api.themoviedb.org/3/movie/popular?api_key=a016e75b061b3216a4ad0db893cbae00