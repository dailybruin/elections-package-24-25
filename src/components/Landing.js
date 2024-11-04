import React from "react";
import styled from "styled-components";
import Video from "../images/landing.gif";


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

const Image = styled.img`
  width: 100vw;
  height: auto;
  object-fit: cover;
`;

const Landing = ({landing}) => {
    
    return (
        <>
            <Container>
                <Image src={Video} alt="Landing image" />
                <p>landing credits</p> {/*landing.landing_credits*/}
            </Container>
        </>
    );
}
export default Landing;
