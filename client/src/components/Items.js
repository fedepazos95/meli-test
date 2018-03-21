import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import queryString from "query-string";
import * as actions from "../actions";

// Components
import SearchItem from "./SearchItem";

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: ""
    };
  }

  componentDidMount() {
    this.doSearch(this.props.location);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ category: nextProps.items.categories.name });
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
    return _.map(this.props.items.items, (item, key) => {
      return (
        <div className="items-list" key={key}>
          <SearchItem item={item} />
          <hr />
        </div>
      );
    });
  }

  render() {
    if (this.props.items === null) {
      return null;
    }

    return (
      <div className="container">
        <div className="row align-items-center">
          <div className="col-10 offset-1">
            <div className="bc">{this.state.category}</div>
            <div className="results-box">{this.renderItems()}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ items }) => {
  return { items: items };
};

export default connect(mapStateToProps, actions)(Items);
