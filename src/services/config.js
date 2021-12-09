import dotenv from "dotenv";

dotenv.config();

export const config = ({
    baseURL: process.env.REACT_APP_HOST,
    movieURL: process.env.REACT_APP_TMDB_URL,
    apiKEY: process.env.REACT_APP_TMDB_KEY,
    movieIMG: process.env.REACT_APP_TMDB_IMAGE_CONFIG
  });
  