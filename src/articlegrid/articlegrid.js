// import the card
import React from 'react';
// adjust this path as necessary from the articlecard team implementation
import { ArticleCard } from "../articlecard/articlecard";
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