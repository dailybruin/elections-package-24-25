import styled from "styled-components";

const ArticleContainer = styled("div")`
  display: flex;
  flex-direction: row;
  text-align: left;
  gap: 5%;
  color: #000;
  font-family: Poppins;
  font-style: normal;
  margin: 2%;
  background: white;
`;

const TitleContainer = styled("div")`
  margin-top: 1em;
  font-size: 33px;
  font-weight: 500;
  line-height: 43px; /* 130.303% */
  &:hover {
    text-decoration: underline;
  }
`;

const ImgContainer = styled("div")`
  border: 2px solid #000;
  background: #949494;
  width: 400.361px;
  height: 300px;
  display: flex;
  flex-shrink: 0;
`;

const ArticleCard = ({ props }) => {
  return (
    <ArticleContainer>
      <ImgContainer>
        <img
          src={props.article_image}
          alt="Article"
          style={{ width: "100%", height: "100%" }}
        ></img>
      </ImgContainer>
      <div>
      <TitleContainer>{props.article_title}</TitleContainer>
        <div style={{ fontSize: "28px", fontWeight: 300, lineHeight: "34px" }}>
        {props.article_byline}
        </div>
      </div>
    </ArticleContainer>
  );
};

export default ArticleCard;
