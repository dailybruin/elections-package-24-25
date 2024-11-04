import React from "react";
import styled from "styled-components";
import ArticleCard from "../components/ArticleCard.js";


const Container = styled.div`
    position: relative;
    width: 55%;
    margin: 0 auto;
    justify-content: center;
    padding: 1em;
    background: white;
    z-index: 10;

    /* Only apply the negative margin if isLast is true */
    margin-bottom: ${({ isLast }) => (isLast ? '-62px' : '0')};

    @media (max-width: 768px) {
      margin-bottom: ${({ isLast }) => (isLast ? '-70px' : '0')};
    }

    @media (max-width: 480px) {
      margin-bottom: ${({ isLast }) => (isLast ? '-80px' : '0')};
    }
`;

const TitleContainer = styled.div`
  gap: 0px;
  width: 57.3%;
  margin: 0 auto;
  justify-content: center;
  opacity: 0px;
  background: #265ca9;
  position: relative;
  z-index: 1;
`;
const Title = styled.div`
    color: #FBFBFB;
    text-align: center;
    font-family: Moul;
    font-size: clamp(25px, 5vw, 70px);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    
`

const WhiteStripe = styled.div`
  width: 57.3%;
  height: 1em;
  margin: 0 auto;
  background: #ffffff;
  position: relative;
  z-index: 1;
`;

const RedStripe = styled.div`
  width: 57.3%;
  height: 1em;
  margin: 0 auto;
  background: #cd2027;
  position: relative;
  z-index: 1;
`;

const ArticleGrid = ({ articles, title, isLast }) => {
  return (
    <>
      <TitleContainer>
        <Title>★ {title} ★</Title>
      </TitleContainer>
      <WhiteStripe />
      <RedStripe />
      <Container isLast={isLast}>
        {articles.map((article) => {
          return <ArticleCard props={article} />;
        })}
      </Container>
    </>
  );
};

export default ArticleGrid;