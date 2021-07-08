import React from 'react';
import { Link } from 'react-router';
import Error from './commons/Error';

class Main extends React.Component {
  render() {
    const { page } = this.props;
    return (
      <div className="container-fluid">
        <div className="logo-title">
          <h1>
            <Link to="/">
              Gallery App
            </Link>
          </h1>
        </div>
        { page.error ? <Error {...this.props}/> : React.cloneElement({...this.props}.children, {...this.props})}
      </div>
    )
  }
};

export default Main;
