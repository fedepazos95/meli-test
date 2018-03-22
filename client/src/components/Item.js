import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

// Assets
import './css/item.css';
import loading from '../assets/loading.png';

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
      return <img src={loading} alt="loading" className="loading"/>;
    }

    const { item } = this.props;
    return (
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-10 offset-1">
            <div className="bc f14">{item.title}</div>
            <div className="box">
              <div className="d-flex flex-row">
                <img src={item.picture} alt="item-img" className="item-img col-7" />
                <div className="d-flex flex-column details-box col-3">
                  <div className="item-condition f14">
                    {item.condition + " - " + item.sold_quantity + " vendidos"}
                  </div>
                  <div className="f24">{item.title}</div>
                  <div className="item-price f46">$ {item.price.amount}</div>
                  <button className="btn btn-primary btn-comprar">Comprar</button>
                </div>
              </div>
              <div className="d-flex flex-row">
                <div className="item-desc f28 col-7">Descripción del producto</div>
              </div>
              <div className="d-flex flex-row">
                <div className="item-info f16 col-7">{item.description}</div>
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
