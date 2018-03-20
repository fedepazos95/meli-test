import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import queryString from 'query-string';
import * as actions from '../actions';

// Components
import SearchItem from './SearchItem';

class Items extends Component {
  renderItems() {
    return _.map(this.props.items.items, (item, key) => {
      return (
        <SearchItem key={key} item={item} />
      );
    });
  }

  componentDidMount(){
    this.doSearch(this.props.location);
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props.location.search, nextProps.location.search);
    if (this.props.location.search !== nextProps.location.search) {
      this.doSearch(nextProps.location);
    }
  }

  doSearch(location) {
    const qs = queryString.parse(location.search);
    if (qs.search) {
      this.props.fetchItems(qs.search);
    }
  }

  render() {
    if (this.props.items === null) {
      return null;
    }

    return (
      <div className="container">
        <div className="bc">{this.props.items.categories.name}</div>
        <ul className="list-group">{this.renderItems()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { items: state.items };
};

export default connect(mapStateToProps, actions)(Items);
