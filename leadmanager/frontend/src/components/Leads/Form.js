import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLead } from "../../actions/leads";

class Form extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  };
  static propTypes = {
    addLead: PropTypes.func.isRequired,
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const lead = { name, email, message };
    this.props.addLead(lead);
  };
  render() {
    const { name, email, message } = this.state;

    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add LEad Form</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <br />
            <textarea
              className="form-control"
              type="text"
              name="message"
              onChange={this.onChange}
              value={message}
            />
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-primary" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addLead })(Form);