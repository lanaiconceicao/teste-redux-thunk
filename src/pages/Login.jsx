import React from 'react';
import { connect } from 'react-redux';
import { inputEmail } from '../redux/actions';


class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClick() {
    const { email } = this.state;
    const { changeInputValue, history } = this.props;
    changeInputValue(email);
    history.push('./home');
  }

  render() {
    return (
      <>
        <label htmlFor="email-login-page">
          Email:
          <input
            type="text"
            value={ this.state.email }
            name="email"
            onChange={ this.handleChange }
            id="email-login-page"
          />
        </label>
        <label htmlFor="password-login-page">
          Senha:
          <input
            type="password"
            value={ this.state.password }
            name="password"
            onChange={ this.handleChange }
            id="password-login-page"
          />
        </label>
        <button
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeInputValue: (state) => dispatch(inputEmail(state)) });

// connect(ler,escrever)
export default connect(null, mapDispatchToProps)(Login);
