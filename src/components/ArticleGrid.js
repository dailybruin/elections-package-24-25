import React from "react";
import styled from "styled-components";
import ArticleCard from "../components/ArticleCard.js";


const Container = styled.div`
    position: relative;
    width: 60%;
    margin: 0 auto;
    justify-content: center;
    padding: 1em;
    background: white;
    z-index: 10;
`;

const TitleContainer = styled.div`
  gap: 0px;
  width: 62.5%;
  margin: 0 auto;
  justify-content: center;
  opacity: 0px;
  background: #265ca9;
  position: relative;
  z-index: 1;
`;
const Title = styled.div`
    font-family: BruinBlock;
    font-size: clamp(40px, 5vw, 70px);
    font-weight: 900;
    line-height: 90px;
    text-align: center;
    color: #FBFBFB;
    
`

const WhiteStripe = styled.div`
  width: 62.5%;
  height: 1em;
  margin: 0 auto;
  background: #ffffff;
  position: relative;
  z-index: 1;
`;

const RedStripe = styled.div`
  width: 62.5%;
  height: 1em;
  margin: 0 auto;
  background: #cd2027;
  position: relative;
  z-index: 1;
`;

const ArticleGrid = ({ articles, title }) => {
  return (
    <>
      <TitleContainer>
        <Title>★{title}★</Title>
      </TitleContainer>
      <WhiteStripe />
      <RedStripe />
      <Container>
        {articles.map((article) => {
          return <ArticleCard props={article} />;
        })}
      </Container>
    </>
  );
};

export default ArticleGrid;
