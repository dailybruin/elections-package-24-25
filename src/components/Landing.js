import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  margin: auto;
  display: flex;
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
            <iframe src="https://public.flourish.studio/visualisation/20011174/embed" 
        width="100%" 
        height="600px" 
        frameborder="0" 
        scrolling="no" 
        allowfullscreen>
        </iframe>
            </Container>
        </>
    );
}
export default Landing;
