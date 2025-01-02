import React from "react";
import styled from "styled-components";
import { NavLink, Switch, Route } from "react-router-dom";

const Section = styled.section`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0)),
    url(${({ image }) => image && image}) 60% 33% / cover no-repeat fixed;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: -60px;
`;

const Container = styled.div`
  color: #fff;
  padding: 2rem;
  backdrop-filter: blur(5px);
  background: rgba(0, 0, 0, 0.4);
  margin: 2rem;
  border-radius: 10px;

  h1 {
    font-size: clamp(2rem, 8vw, 5rem);
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: clamp(1rem, 6vw, 2.5rem);
    margin-bottom: 1rem;
  }

  .button {
    font-size: clamp(0.8rem, 4vw, 1.2rem);
    padding: 0.8rem 2rem;
    color: #000;
    background: #ccc;
    background: linear-gradient(to bottom, #ccc, #333);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
  }
`;

const Hero = ({ image, title, desc }) => {
  return (
    <Section image={image}>
      <Container>
        <h1>{title}</h1>
        <h2>{desc}</h2>
        <NavLink to={`/slider?title=${title}`} className="button">
          Zobacz więcej
        </NavLink>
      </Container>
    </Section>
  );
};

export default Hero;
