import styled from "styled-components";
import { useEffect, useState } from "react";
import Cloud001 from "../images/cloud01.svg";

const CloudLayer = styled.div`
  position: fixed;
  top: ${({ top }) => top || "0%"};
  left: 0;
  width: 100%;
  height: 200%; /* Making it taller to cover the screen smoothly */
  background-image: url(${Cloud001});
  background-repeat: repeat;
  background-size: ${({ cloudSize }) => cloudSize || "50%"};
  transform: translate(
    ${({ offsetX }) => offsetX || "0"}px,
    ${({ offsetY }) => offsetY || "0"}px
  );
  opacity: ${({ opacity }) => opacity || 0.5};
  transition: transform 0.5s ease-out;
`;

const Clouds = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getCloudOffset = (layerOffset) => -(scrollPosition * layerOffset);

  return (
    <>
      <CloudLayer 
        top="10%" 
        cloudSize="40%" 
        offsetY={getCloudOffset(0.2)} 
        opacity="0.7" 
      />
      <CloudLayer 
        top="20%" 
        cloudSize="30%" 
        offsetY={getCloudOffset(0.4)} 
        opacity="0.5" 
      />
      <CloudLayer 
        top="30%" 
        cloudSize="20%" 
        offsetY={getCloudOffset(0.6)} 
        opacity="0.3" 
      />
    </>
  );
};

export default Clouds;
