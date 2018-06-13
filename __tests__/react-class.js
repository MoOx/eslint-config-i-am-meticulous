/* eslint-disable import/no-unresolved, import/no-extraneous-dependencies */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Stylesheet } from "react-native";

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
      // eslint-disable-next-line react-native/no-inline-styles
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
