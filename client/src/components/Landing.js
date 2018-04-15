import React from 'react';
import { Link } from 'react-router-dom';
import { Divider, Container, Image, Button, Header } from 'semantic-ui-react';
import roof from '../assets/roof.jpg';

const Landing = () => {
  return (
    <Container text textAlign="center">
      <Divider hidden />
      <Image src={roof} size="huge" centered />
      <Header inverted block as="h2">
        LET'S SEE THOSE ROOFTOPS!
      </Header>
      <Divider hidden />
      <Header as="h2">
        Looking for locations and are just sick and tired of having to search
        through and find the ones with roofs????
      </Header>
      <Header as="h3">So were we! Let us help you</Header>
      <Button size="huge">
        <Link to="/list">List View</Link>
      </Button>
      <Button size="huge">
        <Link to="/map">Map View</Link>
      </Button>
    </Container>
  );
};

export default Landing;
