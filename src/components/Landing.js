import React from "react";
import styled from "styled-components";
import Video from "../images/landing.mp4";


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



const Landing = () => {
    
    return (
        <>
            <Container>
                <iframe width="100%" height="600px" src={Video} allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </Container>
        </>
    );
}
export default Landing;
