import styled from "styled-components";
import graphiteUnderline from '../images/ArticleCardGraphite.svg';
import bubble from '../images/ArticleCardBubble.svg';
import bubbleGraphite from '../images/ArticleCardBubbleGraphite.svg';

const GraphiteUnderline = styled("img")`
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: auto;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const BubbleWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 2em;
  bottom: 3em;
  left: 0;

  @media (max-width: 900px) {
    justify-content: center;
    margin-top: 1em;
  }
`;

const Bubble = styled.img`
  position: absolute;
  width: 72px;
  height: 42px;
  flex-shrink: 0;
  left: 0;
  top: 0;

  @media (max-width: 900px) {
    margin: 0;
  }
`;

const BubbleGraphite = styled.img`
  position: absolute;
  width: 70px;
  height: 40px;
  flex-shrink: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
  left: 0;
  top: 0;

  @media (max-width: 900px) {
    margin: 0;
  }
`;

const ArticleContainer = styled("div")`
  position: relative;
  display: flex;
  flex-direction: row;
  text-align: left;
  gap: 5%;
  color: #000;
  font-family: Poppins;
  font-style: normal;
  margin: 2%;
  background: white;
  // flex-wrap: wrap;
  max-width: 100%;
  // padding-bottom: 2em;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  &:hover ${GraphiteUnderline} {
    opacity: 1;
  }

  &:hover ${BubbleGraphite} {
    opacity: 1;
  }
`;

const TitleContainer = styled("div")`
  margin-top: 0.5em;
  font-size: 33px;
  font-weight: 500;
  line-height: 43px; /* 130.303% */
  max-width: 100%;
  position: relative;
  overflow-wrap: break-word;
  word-break: break-word;

  // &:hover {
  //   text-decoration: underline;
  // }
`;

const ImgContainer = styled("div")`
  border: 2px solid #000;
  background: #949494;
  width: 400.361px;
  max-width: 100%;
  max-height: 100%;
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
          style={{ width: "100%", height: "100%"}}
        ></img>
      </ImgContainer>
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <TitleContainer>{props.article_title}
        <GraphiteUnderline src={graphiteUnderline} alt="Graphite Underline"/></TitleContainer>
        <div style={{ marginTop: '10px', fontSize: "28px", fontWeight: 300, lineHeight: "34px" }}>
        {props.article_byline}
        </div>
        <div>
        {/* <br/> prevents the bubble from overlapping with text in different screen size*/}
        <br/>
        <br/>
        <br/>
        <BubbleWrapper>
          <Bubble src={bubble} alt="Bubble" />
          <BubbleGraphite src={bubbleGraphite} alt="Bubble Graphite" />
        </BubbleWrapper>
        </div>
      </div>
    </ArticleContainer>
  );
};

export default ArticleCard;
