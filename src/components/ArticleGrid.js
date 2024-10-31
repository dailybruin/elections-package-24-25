import React from 'react';
import styled from 'styled-components';
import ArticleCard from "../components/ArticleCard.js";

const Container = styled.div`
    width: 60%;
    margin: 0 auto;
    justify-content: center;
    padding: 1em;
    background: white;
`;

const TitleContainer = styled.div`
    gap: 0px;
    width: 62.5%;
    margin: 0 auto;
    justify-content: center;
    opacity: 0px;
    background: #265CA9;
`
const Title = styled.div`
    font-family: BruinBlock;
    font-size: 75px;
    font-weight: 900;
    line-height: 90px;
    text-align: center;
    color: #FBFBFB;
    
`

const WhiteStripe = styled.div`
    width: 62.5%;
    height: 1em;
    margin: 0 auto;
    background: #FFFFFF;
`;

const RedStripe= styled.div`
    width: 62.5%;
    height: 1em;
    margin: 0 auto;
    background: #CD2027;
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