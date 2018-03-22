import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import queryString from "query-string";
import * as actions from "../actions";

// Components
import SearchItem from "./SearchItem";

// Assets
import './css/items.css';
import loading from '../assets/loading.png';

class Items extends Component {
  componentDidMount() {
    this.doSearch(this.props.location);
  }

  componentWillReceiveProps(nextProps) {
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

  renderItems() {
    return _.map(this.props.items, (item, key) => {
      return (
        <div className="items-list" key={key}>
          <SearchItem item={item} />
          <hr />
        </div>
      );
    });
  }

  render() {
    if (this.props.items === null && this.props.categories === null) {
      return <img src={loading} alt="loading" className="loading"/>;
    }

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 offset-1">
            <div className="bc f14">{this.props.categories.name}</div>
            <div className="box">{this.renderItems()}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { items: state.items.items, categories: state.items.categories };
};

export default connect(mapStateToProps, actions)(Items);
