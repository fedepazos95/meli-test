import React, { Component } from "react";
import { withRouter } from "react-router-dom";

// Assets
import shipping from "../assets/ic_shipping.png";

class SearchItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.props.history.push(`/items/${id}`);
  }

  render() {
    return (
      <div className="d-flex flex-row search-item">
        <img
          src={this.props.item.picture}
          alt="search-item-img"
          className="search-item-img"
          onClick={() => this.handleClick(this.props.item.id)}
        />
        <div className="d-flex flex-column">
          <div
            className="search-item-price"
            onClick={() => this.handleClick(this.props.item.id)}
          >
            $ {this.props.item.price}
            {this.props.item.free_shipping && (
              <img
                className="shipping-icon align-items-center"
                src={shipping}
                alt="shipping"
              />
            )}
          </div>
          <div className="search-item-title">{this.props.item.title}</div>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchItem);
