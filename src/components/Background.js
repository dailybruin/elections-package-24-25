import styled from "styled-components";
import FlagRight from "../images/FlagRight.svg";
import FlagLeft from "../images/FlagRight.svg";


const Flags = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1; 
    background-color: #94ccee;
    background-size: 25% 15%; 
    background-repeat: repeat-y;
    background-image: 
    url(${FlagRight}), 
    url(${FlagLeft});
    background-position: left 0, right 0;
`;

const Background = ({ props }) => {
    return (
      <>
        <Flags/>
      </>
    );
  };
  

export default Background;
  