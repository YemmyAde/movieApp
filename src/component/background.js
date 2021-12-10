import React from "react";
import {
  Body,
  Background2,
  Logo,
  Flex,
  Margin,
  Div,
  Div2,
  Paragraph,
  Section,
  Divider,
  Radius,
  Video1,
  SectionDiv
} from "./styles.js";
import logo from "../assets/logo.png";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "../css/style.css";
import image from "../assets/image.jpg"
import vid2 from "../assets/210105.gif"
import PopularMovies from "./popularMovies"
import MovieTypes from "./movieTypes.js";
import TopRated from "./topRated.js";
import Upcoming from "./upcoming.js";

function BackgroundLayout() {
  return (
    <Body>
      <Background2>
        <Flex>
          <Link to="/">
            <Logo src={logo} alt="" />
          </Link>
          <Margin>
            <Link to="/signin" style={{ textDecoration: "none" }}>
              {" "}
              <Button variant="contained" className="color">
                {" "}
                Sign In{" "}
              </Button>
            </Link>{" "}
          </Margin>
        </Flex>
        <Div>
          <Div2>
            View trending movies, rate movies and leave comment
            <Paragraph> Lorem ipsum dolor sit amet</Paragraph>
            <Link to="/register" style={{ textDecoration: "none" }}>
            <Button variant="contained" className="button">
              {" "}
              Sign Up{" "}
            </Button>
            </Link>
          </Div2>
        </Div>
      </Background2>
      <Divider> </Divider>

      <Section>
        <SectionDiv>
          <Div2>
            View trending movies, rate movies and leave comment
            <Paragraph> Lorem ipsum dolor sit amet</Paragraph>
          </Div2>
        </SectionDiv>
      <Radius>
      <Video1 src={vid2} alt="" />
      </Radius>
      </Section>

      <Divider> </Divider>
      <Section>
      <Radius>
      <Video1 src={image} alt="" />
      </Radius>
        <SectionDiv>
          <Div2>
            View trending movies, rate movies and leave comment
            <Paragraph> Lorem ipsum dolor sit amet</Paragraph>
          </Div2>
        </SectionDiv>
      </Section>
      <Divider> </Divider>
      <MovieTypes />
      <PopularMovies />
      <TopRated />
      <Upcoming />
    </Body>
  );
}

export default BackgroundLayout;
