import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span className="title">Sign in with you email and password. </span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={email}
            required
            handleChange={this.handleChange}
            label="Email"
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            required
            handleChange={this.handleChange}
            label="Password"
          />
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
