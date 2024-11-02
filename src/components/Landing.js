import React from "react";
import styled from "styled-components";
import StarIcon from "../images/Star.svg";

const Container = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #d5e7f2;
  overflow: hidden;
  position: relative;
  z-index: 1;
`;

const TitleContainer = styled.div`
  width: 100%;
  justify-content: center;
  background: #265ca9;
  background-position: center;
  display: flex;
`;

const Star = styled.div`
  background-image: url(${StarIcon});
  background-size: contain; 
  background-repeat: no-repeat; 
  background-position: center; 
  z-index: 2;
  width: 3em;
  margin-bottom: 0.75em;
`;

const Title = styled.div`
    width: auto;
    font-family: "Moul";
    font-size: clamp(40px, 5vw, 75px);
    font-weight: 400;
    line-height: normal;
    text-align: center;
    color: #FBFBFB;
    margin: 0 1.25em;
`

const WhiteStripe = styled.div`
  width: 100%;
  height: 1em;
  margin: 0 auto;
  background: #ffffff;
  position: relative;
  z-index: 1;
`;

const RedStripe = styled.div`
  width: 100%;
  height: 1em;
  margin: 0 auto;
  background: #cd2027;
  position: relative;
  z-index: 1;
`;


const Landing = () => {
    
    return (
        <>
            <Container>
            <TitleContainer>
            <Star />
            <Title>POLLING AVERAGES</Title>
            <Star />
            </TitleContainer>
            <WhiteStripe />
            <RedStripe />
            <iframe src="https://public.flourish.studio/visualisation/20011174/embed" 
        width="100%" 
        height="600px" 
        frameborder="0" 
        scrolling="no" 
        allowfullscreen
        title="polling averages">
        </iframe>
            </Container>
        </>
    );
}
export default Landing;
