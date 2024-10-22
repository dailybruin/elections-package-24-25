// import the card
import React from 'react';
import Container from 'react-bootstrap/Container'; // for React Bootstrap

import ArticleCard from "../ArticleCard"
import styles from "./articlegrid";

const ArticleGrid = ({ articles }) => {
    return (
        <Container className = {styles.container}>
            {articles.map((article) => {
                return <ArticleCard props={article} />;
            })}
        </Container>
    );
};

export default ArticleGrid;
