import React from 'react';
import { Link } from 'react-router-dom';

// Components
import SearchBox from './SearchBox';

// Assets
import logo from '../assets/Logo_ML.png';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-1 offset-1">
            <div className="text-center">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
          </div>
          <div className="col-9">
            <SearchBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
