import fb from '../images/socials/fb.svg'
import insta from '../images/socials/insta.svg'
import twitter from '../images/socials/twitter.svg'
import tiktok from '../images/socials/tiktok.svg'
import email from '../images/socials/email.svg'
import footerbox from '../images/socials/footerbox.svg' 
import footergoldplate from '../images/socials/footergoldplate.svg' 
import footerflagbg from '../images/socials/footerflagbg.svg' 

import styled from 'styled-components'
import { mediaQueries } from '../shared/config';

const Container = styled.div`

  background-color: #94CCEF;
  background-image: url(${footerflagbg});
  background-size: 100% auto;
  background-position: center bottom;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  padding: 0;
  height: 400px; /* Set fixed height to control footer size */
  margin: 0;
  z-index: 1; /* Set lower than the article grid */


  @media (max-width: 768px) {
    padding-top: 2.8em;
    background-size: 150% auto;
    height: 175px; /* Adjusted for smaller screens */
  }
`;

const FooterBox = styled.div`

  background-image: url(${footerbox});
  background-size: contain;
  background-position: center bottom;
  background-repeat: no-repeat;
  width: 100%;
  max-width: 1200px;
  height: 100%; /* Make it fill the Container’s height */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  z-index: 2; /* Ensure FooterBox is above Container */
  overflow: hidden; /* Ensure nothing spills out if heights are limited */
  padding-bottom: 1em;
`;


const GoldPlate = styled.div`
  background-image: url(${footergoldplate});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 55%;
  height: 120px;
  position: absolute;
  top: 50%; /* Position within reduced height */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translateY(-5%); /* Ensure it remains vertically centered */

  @media (max-width: 768px) {
    width: 65%;
    height: 70px;
    h1 {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 480px) {
    width: 75%;
    height: 60px;

  }
`;

const Socials = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;




  
  img {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 768px) {
    img {
      width: 15px;
      height: 15px;
    }
  }
  @media (max-width: 480px) {
    img {
      width: 10px;
      height: 10px;
    }
  }
`;

const TextContainer = styled.div`
  display: flex;             
  justify-content: center; 
  align-items: flex-end;    
  width: 100%;                
  height: 100%;               
  padding: 1em;  
`
const SuzyText = styled.p`
  position: absolute;
  bottom: 1em;
  font-size: 1vw;
  color: white;
  text-align: center;
  width: 70%;

  ${mediaQueries.mobile} {
    font-size: 3px;
    bottom: 3px;
  }
`;

const Footer = () => {
  return (
    <Container>
      <FooterBox>
        <GoldPlate>
          <Socials>
            <a href="https://www.instagram.com/dailybruin" target="_blank" rel="noreferrer"  ><img src={insta} alt="Instagram"/></a>
            <a href="https://www.facebook.com/dailybruin" target="_blank" rel="noreferrer" ><img src={fb} alt="Facebook"/></a>
            <a href="https://www.twitter.com/dailybruin" target="_blank" rel="noreferrer" ><img src={twitter} alt="Twitter"/></a>
            <a href="https://www.tiktok.com/@dailybruin" target="_blank" rel="noreferrer" ><img src={tiktok} alt="TikTok"/></a>
            <a href="http://eepurl.com/cFEiZX" target="_blank" rel="noreferrer" ><img src={email} alt="Email"/></a>
          </Socials>
        </GoldPlate>
        <TextContainer><SuzyText>Built with Suzy’s ♥ in Kerckhoff 118 by Henry Nguyen, Max Fukuhara, Emily Zhang, Sahil Sheth, Evelyn Cho, Armaan Bassi, Jennifer Lee, Ritvik Irigireddy, Kirsten Reign Cabalonga, and Sakshi Thoutireddy. Designed by Nhan Nguyen and Lindsey Murto.</SuzyText>
</TextContainer>
      </FooterBox>
    </Container>
  );
};

export default Footer;






