import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

// Assets
import shipping from "../assets/ic_shipping.png";

class Item extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchItem(id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.fetchItem(nextProps.match.params.id);
    }
  }

  render() {
    if (!this.props.item) {
      return null;
    }

    const { item } = this.props;
    return (
      <div className="container">
        <div className="row align-items-center">
          <div className="col-10 offset-1">
            <div className="bc">{item.id}</div>
            <div className="item-box">
              <div className="d-flex flex-row">
                <img src={item.picture} alt="item-img" className="item-img" />
                <div className="d-flex flex-column">
                  <div className="item-condition">
                    {(item.condition === "new" ? "Nuevo" : null) +
                      " - " +
                      item.sold_quantity +
                      " vendidos"}
                  </div>
                  <div className="item-title">{item.title}</div>
                  <div className="item-price">$ {item.price.amount}</div>
                </div>
              </div>
              <div className="d-flex flex-row">
                <div className="item-desc">Descripción del producto</div>
              </div>
              <div className="d-flex flex-row">
                <div className="item-info">{item.description}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ items }) => {
  return { item: items.item };
};

export default connect(mapStateToProps, actions)(Item);
