import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
const Landing = () => <h2>Landing</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const Maps = () => <h2>Maps</h2>;
const List = () => <h2>List</h2>;

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route path="/list" component={List} />
          <Route path="/map" component={Maps} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
