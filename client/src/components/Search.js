import _ from 'lodash';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Search, Grid } from 'semantic-ui-react';

class SearchComponent extends Component {
  state = {
    isLoading: false,
    results: [],
    value: '',
  };

  componentWillMount() {
    this.resetComponent();
  }

  resetComponent = () =>
    this.setState({ isLoading: false, results: [], value: '' });

  handleResultSelect = (e, { result }) => {
    this.setState({ value: result.formatted_address });
  };

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const isMatch = result => re.test(result.formatted_address);

      this.setState({
        isLoading: false,
        results: _.filter(_.flatten(this.props.geo.response), isMatch),
      });
    }, 300);
  };

  render() {
    const { isLoading, value, results } = this.state;

    return (
      <Grid>
        <Grid.Column width={8}>
          <Search
            dispatch={true}
            type="text"
            size="big"
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true,
            })}
            results={results}
            partial_match="true"
            resultRenderer={props => {
              return (
                <h4 style={{ paddingRight: '10rem' }}>
                  {props.formatted_address}
                </h4>
              );
            }}
            value={value}
            {...this.props}
          />
        </Grid.Column>
      </Grid>
    );
  }
}

function mapStateToProps({ geo }) {
  return { geo };
}

export default connect(mapStateToProps, null)(SearchComponent);
