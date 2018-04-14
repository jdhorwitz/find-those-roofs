import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Header } from 'semantic-ui-react';

const Landing = () => {
  return (
    <div style={{ textAlign: 'center', paddingTop: '10rem' }}>
      <Header>LET'S SEE THOSE ROOFTOPS!</Header>
      <Button>
        <Link to="/list">List</Link>
      </Button>
      <Button>
        <Link to="/map">Map</Link>
      </Button>
    </div>
  );
};

export default Landing;
