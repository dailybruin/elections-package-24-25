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
    background: #D5E7F2;
    overflow: hidden;
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
                <Image src={landing}/>
            </Container>
        </>
    );
}
export default Landing;

