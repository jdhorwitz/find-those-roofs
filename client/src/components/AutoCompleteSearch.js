import React, { Component } from 'react';
import { connect } from 'react-redux';
import Autocomplete from 'react-autocomplete';

class AutoCompleteSearch extends Component {
  state = {
    value: '',
  };
  render() {
    const data = this.props.geo.response.results;
    console.log(data);
    return (
      <Autocomplete
        getItemValue={item => item.formatted_address}
        items={data}
        renderItem={(item, isHighlighted) => (
          <div
            key={item.place_id}
            style={{ background: isHighlighted ? 'lightgray' : 'white' }}
          >
            {item.formatted_address}
          </div>
        )}
        value={this.state.value}
        onChange={e => this.setState({ value: e.target.value })}
        onSelect={value => this.setState({ value })}
      />
    );
  }
}

function mapStateToProps({ geo }) {
  return { geo };
}

export default connect(mapStateToProps, null)(AutoCompleteSearch);
