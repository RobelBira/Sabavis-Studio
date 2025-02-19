import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background: url('/path-to-hero-image.jpg') center/cover no-repeat;
  color: #fff;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subheading = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Home = () => (
  <>
    <HeroSection>
      <Heading>We create digital experiences</Heading>
      <Subheading>
        We’re a bunch of experienced creatives who bring CGI, interactive, and software under one digital roof.
      </Subheading>
      <Button>Explore Our Services</Button>
    </HeroSection>
    {/* Add more sections as needed */}
  </>
);

export default Home;
