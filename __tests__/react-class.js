/* eslint-disable import/no-unresolved, import/no-extraneous-dependencies */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Stylesheet } from "react-native";
import type { SyntheticEvent } from "react-native/Libraries/Types/CoreEventTypes.js";

class ReactClass extends Component {
  static propTypes = {
    onMount: PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  state = {
    clicked: false,
  };

  componentDidMount() {
    if (this.props.onMount) {
      this.props.onMount();
    }
  }

  handleClick = (event: SyntheticEvent<*>) => {
    event.preventDefault();

    this.setState({ clicked: true });
  };

  render() {
    return (
      <div onClick={this.handleClick} style={{ color: "blue" }}>
        {!this.state.clicked ? "Hi" : "Hey"}
        {this.state.clicked && <div style={styles.test} />}
      </div>
    );
  }
}

export default ReactClass;

const styles = Stylesheet.create({
  test: {
    margin: 10,
  },
});
