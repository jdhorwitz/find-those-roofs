import _ from 'lodash';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Search, Grid, Header } from 'semantic-ui-react';
import { format } from 'date-fns';

class SearchComponent extends Component {
  componentWillMount() {
    this.resetComponent();
  }

  resetComponent = () =>
    this.setState({ isLoading: false, results: [], value: '' });

  handleResultSelect = (e, { result }) => {
    console.log(result);
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
        results: _.filter(this.props.geo.response.results, isMatch),
      });
    }, 300);
  };

  render() {
    const { isLoading, value, results } = this.state;
    const { geo } = this.props;

    return (
      <Grid>
        <Grid.Column width={8}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true,
            })}
            results={results}
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
