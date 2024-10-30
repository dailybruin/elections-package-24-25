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
  height: auto;
  margin-bottom: 0;
  min-height: 600px;

  @media (max-width: 768px) {
    background-size: 150% auto; /* Increase background coverage on smaller screens */
    min-height: 400px; 
  }
`;

const FooterBox = styled.div`
  background-image: url(${footerbox});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  max-width: 1200px;
  height: 600px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 0;

  @media (max-width: 768px) {
    height: 400px; /* Reduced height on smaller screens */
  }
  @media (max-width: 480px) {
    height: 300px; /* Further reduction for smaller devices */
  }
`;

const GoldPlate = styled.div`
  background-image: url(${footergoldplate});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 55%;
  height: 140px;
  position: absolute;
  top: 48%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 1.5rem;
    color: black;
    margin: 0;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    width: 65%;
    height: 100px;
    h1 {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 480px) {
    width: 75%;
    height: 90px;
    h1 {
      font-size: 1rem;
    }
  }
`;

const Socials = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px; /* Reduce gap on smaller screens */
  margin-top: 25px;

  img {
    width: 24px;
    height: 24px;
  }

  /* Responsive icon sizing */
  @media (max-width: 768px) {
    img {
      width: 20px;
      height: 20px;
    }
  }
  @media (max-width: 480px) {
    img {
      width: 16px;
      height: 16px;
    }
  }
`;

const SuzyText = styled.p`
  position: absolute;
  bottom: 120px;
  font-size: 14px;
  color: white;
  text-align: center;

  ${mediaQueries.mobile} {
    font-size: 12px;
    bottom: 70px;
  }
`;

const Footer = () => {
  return (
    <Container>
      <FooterBox>
        <GoldPlate>
          <Socials>
            <a href="https://www.instagram.com/dailybruin" target="_blank" rel="noreferrer"><img src={insta} alt="Instagram"/></a>
            <a href="https://www.facebook.com/dailybruin" target="_blank" rel="noreferrer"><img src={fb} alt="Facebook"/></a>
            <a href="https://www.twitter.com/dailybruin" target="_blank" rel="noreferrer"><img src={twitter} alt="Twitter"/></a>
            <a href="https://www.tiktok.com/@dailybruin" target="_blank" rel="noreferrer"><img src={tiktok} alt="TikTok"/></a>
            <a href="http://eepurl.com/cFEiZX" target="_blank" rel="noreferrer"><img src={email} alt="Email"/></a>
          </Socials>
        </GoldPlate>
        <SuzyText>Built with Suzy’s ♥ in Kerckhoff 118 by [developers]. Designed by [designers].</SuzyText>
      </FooterBox>
    </Container>
  );
}

export default Footer;






