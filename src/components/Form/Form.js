import React, { Component } from "react";
import { Input } from "../Input/Input";
import { FormContainer } from "./Form.styles";

const initialState = {
  name: "",
  number: "",
  email: "",
  createGroup: false,
  createFaculties: false,
  editTutorprofile: false,
};

export class Form extends Component {
  state = { ...initialState };

  reset = () => {
    this.setState(initialState);
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    console.log("event", name, "-------", value);
    this.setState({ [name]: value });
  };

  hundleSubmit = (event) => {
    event.preventDefault();
    console.log("submith", this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };

  render() {
    const { name, number, email } = this.state;
    return (
      <FormContainer onSubmit={this.hundleSubmit}>
        <Input
          label="enter name"
          name="name"
          value={name}
          handleChange={this.handleChange}
        />
        <Input
          type="number"
          label="enter number"
          name="number"
          value={number}
          handleChange={this.handleChange}
        />
        <Input
          type="email"
          label="enter email"
          name="email"
          value={email}
          handleChange={this.handleChange}
        />
        <button type="submit">Отправить</button>
      </FormContainer>
    );
  }
}
