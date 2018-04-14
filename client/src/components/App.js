import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dimmer, Loader } from 'semantic-ui-react';
import * as actions from '../actions';

import Header from './Header';
import Maps from './Maps';
import List from './List';
import Landing from './Landing';
const Dashboard = () => <h2>Dashboard</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchLocations();
  }

  render() {
    return this.props.geo ? (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route
              path="/list"
              render={() => <List data={this.props.geo.response.results} />}
            />
            <Route
              path="/map"
              render={() => <Maps data={this.props.geo.response.results} />}
            />
          </div>
        </BrowserRouter>
      </div>
    ) : (
      <Dimmer active>
        <Loader />
      </Dimmer>
    );
  }
}

function mapStateToProps({ geo }) {
  return { geo };
}

export default connect(mapStateToProps, actions)(App);
