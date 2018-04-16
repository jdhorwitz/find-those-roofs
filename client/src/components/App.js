import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dimmer, Loader } from 'semantic-ui-react';
import _ from 'lodash';
import * as actions from '../actions';

import Header from './Header';
import Maps from './Maps';
import List from './List';
import Landing from './Landing';

class App extends Component {
  componentDidMount() {
    this.props.fetchLocations();
  }

  render() {
    const flattenedGeo = this.props.geo
      ? _.flatten(Array.from(new Set(this.props.geo.response)))
      : undefined;

    return this.props.geo ? (
      <div className="main-app">
        <BrowserRouter>
          <div>
            <Header />
            <Route className="route" exact path="/" component={Landing} />
            <Route
              className="route"
              path="/list"
              render={() => <List data={flattenedGeo} />}
            />
            <Route
              className="route"
              path="/map"
              render={() => <Maps data={flattenedGeo} />}
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
