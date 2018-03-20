import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// Assets
import ic_search from '../assets/ic_Search.png';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push(`/items?search=${this.state.query}`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group">
          <input
            name="query"
            type="text"
            className="form-control"
            style={{ fontSize: '18px' }}
            placeholder="Nunca dejes de buscar"
            value={this.state.query}
            onChange={this.handleInputChange}
          />
          <div className="input-group-append">
            <button className="btn input-group-text" type="submit">
              <img src={ic_search} alt="logo" />
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default withRouter(SearchBox);
