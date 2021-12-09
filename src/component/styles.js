import styled from 'styled-components'
import img from "../assets/background.jpg"
import img2 from "../assets/background2.jpg"


export const Body = styled.body`
background-color: black;
color: white;
`

export const Background = styled.div`
color: white;
background-color: black;
background-image: url(${img});
background-size:cover;
background-repeat: no-repeat;
height: 120vh;
width:100%;
box-shadow:inset  0 0 0 2000px rgba(0,0,0, 0.3);
@media (max-width:780px){
    background-image: url(${img2});
}
`
export const Background2 = styled.div`
color: white;
background-color: black;
background-image: url(${img});
background-size:cover;
background-repeat: no-repeat;
height: 100vh;
width:100%;
box-shadow:inset  0 0 0 2000px rgba(0, 0, 0, 0.3);
@media (max-width:780px){
    background-image: url(${img2});
}
`
export const Paragraph = styled.p`
color: white;
font-size: 2vw;
font-weight: 400;

@media (max-width:780px){
    font-size: 20px;
}
`
export const Box = styled.div`
width: 35%;
background-color: rgba(255,255,255,0.7);
margin: 0 auto 30px;
padding: 20px 40px;
border-radius: 5px;
box-sizing: border-box;
@media (max-width:1200px){
    width: 60%;
}
@media (max-width:780px){
    width: 90%;
    padding: 20px 10px;
}
`
export const Login = styled.div`
text-align: left;
font-size: 30px;
`
export const DefaultStyle = styled.a`
text-decoration: none;
`

export const Logo = styled.img`
height: 150px;

@media (max-width: 790px){
    height: 100px;
}
`
export const Space= styled.div`
margin: 20px 0;
`
export const Flex= styled.div`
display: flex;
justify-content: space-between;
`
export const Margin= styled.div`
margin: 40px;
`
export const Div = styled.div`
padding: 8vh 25%;

@media (max-width: 790px){
    padding: 10vh 5%;
}
@media (max-width: 400px){
    padding: 10vh 2%;
}
`
export const SectionDiv = styled.div`
width: 50%;
text-align: left;

@media (max-width: 950px){
    width: 100%;
}
@media (max-width: 400px){
    padding: 10vh 2%;
}
`
export const Div2 = styled.div`
font-family: "poppins", sans-serif;
font-size: 40px;
font-weight: 600;
text-align: center;

@media (max-width: 790px){
    padding: 10vh 10%;
    font-size: 25px;   
    font-weight: 600;
}
@media (max-width: 500px){
    padding: 5vh 5%;
}
`
export const Section= styled.div`
padding: 70px 10%;
display: flex;
justify-content: space-between;
@media (max-width: 750px){
    display: block;
}
`
export const Divider= styled.div`
width: 100%;
height: 6px;
background-color: #C1C1C1;
`
export const Radius = styled.div`
padding: 20px;
text-align: center;
width: 40%;
border-radius: 10px;
border: 2px solid #C1C1C1;
display: block;
@media (max-width: 950px){
    width: 100%;
}
`
export const Video1 = styled.img`
margin: 10px auto;
height: 40vh;
width: 100%;
margin: 0 auto;
`