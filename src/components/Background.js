import styled from "styled-components";
import FlagRight from "../images/FlagRight.svg";
import FlagLeft from "../images/FlagRight.svg";
import VoteSign from "../images/VoteSign.svg";
import FlagHighLow from "../images/FlagHighLow.svg";
import FlagLowHigh from "../images/FlagLowHigh.svg";

const FlagsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
`;

// Left Flag
const LeftFlag = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 21vw;
  height: 100%;
  background-image: url(${FlagLeft});
  background-repeat: repeat-y;
  background-size: 100% 150em;
  background-position: left 0;
`;

// Right Flag
const RightFlag = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 21vw;
  height: 100%;
  background-image: url(${FlagRight});
  background-repeat: repeat-y;
  background-size: 100% 150em;
  background-position: right 10vh;
  transform: scaleX(-1);
`;

// Left Vote Sign
const LeftVoteSign = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 20vw; 
  height: 100%;
  background-image: url(${VoteSign});
  background-repeat: repeat-y;
  background-size: 100% 150em;
  background-position: left 100em;
  transform: scaleX(-1);
`;

// Right Vote Sign
const RightVoteSign = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 20vw;
  height: 100%;
  background-image: url(${VoteSign});
  background-repeat: repeat-y;
  background-size: 100% 150em;
  background-position: right 200em; 
`;

// Horizontal Flag Strings
const HighLowFlagString = styled.div`
  position: absolute;
  top: 85%; /* Adjust based on where you'd like it placed in the layout */
  left: 0;
  width: 100%;
  height: 5vh; /* Control flag height */
  background-image: url(${FlagHighLow});
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 1;
`;

const LowHighFlagString = styled.div`
  position: absolute;
  top: 90%; /* Position slightly lower than HighLowFlagString */
  left: 0;
  width: 100%;
  height: 5vh;
  background-image: url(${FlagLowHigh});
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 1;
`;

const TestFlagString = styled.div`
  position: absolute;
  top: 85%; /* Adjust based on desired layout placement */
  left: 0;
  width: 100%;
  height: 150vh; /* Adjust to control flag height */
  background-image: url(${FlagHighLow});
  background-repeat: no-repeat;
  background-size: cover; /* Ensure image fills the width */
  background-position: center; /* Center the image within the div */
  z-index: -1;
  background-color: rgba(255, 255, 0, 0.3); /* Yellow tint for visibility */
`;

const Background = () => {
  return (
    <FlagsContainer>
      <LeftFlag />
      <RightFlag />
      <LeftVoteSign />
      <RightVoteSign />
      <TestFlagString /> {/* Use this single test component for debugging */}
    </FlagsContainer>
  );
};



export default Background;

