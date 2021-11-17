import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {

  render() {
    const { user } = this.props;
    const { email } = user;
    return (
      <header>
        <p>
          Email:
          <span>{ email }</span>
        </p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.myReducer,
});

export default connect(mapStateToProps)(Header);
