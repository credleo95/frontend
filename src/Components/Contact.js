import React from 'react';
import styled from 'styled-components';
import { Button } from './LandingPageStyles';
const Contact = () => {
  const StyledDiv = styled.div`
    text-align: center;
    margin: 0 auto;
    @media screen and (max-width: 500px) {
      margin-top: 50px;
    }
  `;
  return (
    <StyledDiv>
      <img
        className="contactImage"
        src="https://media.istockphoto.com/photos/phone-and-email-icons-on-wooden-cubes-with-contact-us-text-on-blue-picture-id1271752802?b=1&k=6&m=1271752802&s=170667a&w=0&h=-KKfo7gAMrKoH7QUvPGiBA4h1OfcEGhHpcEH7DTzP7U="
        alt=""
      ></img>

      <h3>PinteReach</h3>
      <p>
        1234 Fantasy Ln
        <br />
        Ba Sing Se, CA 10001
      </p>
      <Button>Contact Us</Button>
    </StyledDiv>
  );
};

export default Contact;
