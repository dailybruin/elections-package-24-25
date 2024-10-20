import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    text-align: center;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #D5E7F2;
    overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  position: absolute;
  overflow: hidden;

`;

const Box = styled.div`
    width: 50%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    text-align: center;
    font-family: 'Inter';
    font-size: 64px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const Landing = ({landing}) => {
    
    return (
        <>
            <Container>
                <Image src={landing}/>
                <Box />
            </Container>
        </>
    );
}
export default Landing;

