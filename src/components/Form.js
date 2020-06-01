import React, { Component } from "react";
import { connect } from "react-redux";

import { addEvent } from "../actions/index";

//components

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: "" };
    this.addSubmid = this.addSubmid.bind(this);
  }

  addSubmid(e) {
    e.preventDefault();
    const todo = this.state.todo;
    this.props.addEvent(todo);
  }

  render() {
    return (
      <div>
        <form className="form-container" onSubmit={this.addSubmid}>
          <input
            type="text"
            className="input-field"
            placeholder="Your todo"
            value={this.state.todo}
            name="todo"
            onChange={(e) => this.setState({ todo: e.target.value })}
          />
          <button className="add-btn">ADD</button>
        </form>
        <div className="todo-container">
          {/* {this.props.list.map((list, index) => {
            return <TodoIndex list={list} key={index} />;
          })} */}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = { addEvent };

const mapStateToProps = (state) => ({ todo: state.list });

export default connect(mapStateToProps, mapDispatchToProps)(Form);
