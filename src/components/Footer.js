import React from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SecurityIcon from "@material-ui/icons/Security";
// import { Button } from "../components/Button";
// import Logo from "../images/1.jpg";
// import { Marginer } from "../marginer";
import { theme } from "./theme";
import {
  faTwitter,
  faGoogle,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";
// import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";
import FooterElements from "./FooterElements.css";

const FooterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #000;
  align-items: center;
  position: relative;

  @media screen and (max-width: 480px) {
    height: 5rem;
  }
`;
const MotivationalText = styled.h1`
  font-size: 25px;
  font-weight: 400;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.588);
  margin: 0;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
const Line = styled.span`
  min-width: 100%;
  min-height: 1px;
  margin-bottom: 2em;
  background: ${theme.primary};
  display: flex;
`;
const AccessibilityContainer = styled.div`
  display: flex;
  width: 80%;
  border-top: 1px solid ${theme.primary};
  padding: 2rem;
  color: ${theme.primary};
  justify-content: space-between;
  border-top: 0;

  @media screen and (max-width: 480px) {
    width: 90%;
    padding-left: 8px;
    padding-right: 8px;
  }
`;
const PrivacyContainer = styled.div`
  display: flex;
`;
const SocialContainer = styled.div`
  display: flex;

  @media screen and (max-width: 480px) {
    position: absolute;
    bottom: 0.6rem;
    left: 50%;
    transform: translateX(-50%);
  }
`;
const SocialIcon = styled.div`
  color: ${theme.primary};
  font-size: 20px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-right: 11px;

    @media screen and (max-width: 480px) {
      margin-right: 20px;
    }
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
  &:hover {
    color: ${theme.third};
  }
`;
const LinkExt = styled(Link)`
  color: ${theme.primary};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  font-size: 1.4rem;

  &:not(:last-of-type) {
    margin-right: 11px;

    @media screen and (max-width: 480px) {
      margin-right: 9px;
    }
  }
  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
  &:hover {
    color: ${theme.third};
  }
`;
const RightsReserved = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${theme.primary};
  font-size: 1.2rem;

  @media screen and (max-width: 480px) {
    top: 1.2rem;
  }
`;
const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${theme.sixth};
  padding: 50px;
  z-index: 1000;
  width: 50%;
  height: 50%;
  transition: all 0.3s ease-in-out;
  box-shadow: 0.05rem 0.05rem 0.05rem rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    color: ${theme.secondary};
    text-align: center;
  }
`;
const Skills = styled.div`
  color: ${theme.secondary};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(90px, auto));
  margin-top: 1rem;
  margin-bottom: 3rem;
  width: 100%;

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(50px, auto));
    margin-top: clamp(0.5rem, 2.5vw, 1rem);
  }
`;

const SpanSkill = styled.div`
  text-align: center;
  font-size: 2.5rem;

  @media screen and (max-width: 480px) {
    font-size: clamp(1rem, 2.5vw, 1.5rem);
  }
`;

const Modal = styled.div`
  font-size: 12px;
  color: rgb(233, 233, 233);

  button {
    background: ${theme.secondary};
    transition: all 0.3s ease-in-out;
    outline: none;

    :hover {
      background: ${theme.fourth};
      color: ${theme.primary};
    }
  }
`;

const Header = styled.div`
  width: 100%;
  border-bottom: 1px solid rgb(233, 233, 233);
  font-size: 18px;
  text-align: center;
  padding: 5px;
`;

const Content = styled.div`
  width: 100%;
  padding: 10px 5px;
`;

const Actions = styled.div`
  width: 100%;
  padding: 10px 5px;
  margin: auto;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const SpanText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  background: rgba(0, 0, 0, 0.582);
  color: rgba(255, 255, 255, 0.588);
  text-align: center;
  width: 70%;
  height: 200px;
  margin: 0 auto;
`;

function Footer(proops) {
  const scrollToAbout = () => {
    scroller.scrollTo("about", { smooth: true, duration: 1500 });
  };
  return (
    <>
      <FooterContainer name="footer">
        <AccessibilityContainer>
          <PrivacyContainer></PrivacyContainer>
          <SocialContainer>
            <SocialIcon>
              <LinkExt
                to="//www.facebook.com/jacek.nagrodzki"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Odwiedź mnie na Facebooku"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </LinkExt>
            </SocialIcon>
            <SocialIcon>
              <LinkExt
                to="//twitter.com"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Zobacz na Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </LinkExt>
            </SocialIcon>
            <SocialIcon>
              <LinkExt
                to="//google.com"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Przejdź do Google"
              >
                <FontAwesomeIcon icon={faGoogle} />
              </LinkExt>
            </SocialIcon>
          </SocialContainer>
        </AccessibilityContainer>
        <LinkExt
          to="//a-g.netlify.app"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Wejdź na stronę autora"
        >
          <RightsReserved>ag 2020 - {new Date().getFullYear()}.</RightsReserved>
        </LinkExt>
      </FooterContainer>
    </>
  );
}

export default Footer;
