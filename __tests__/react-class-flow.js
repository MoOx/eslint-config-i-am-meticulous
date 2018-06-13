// @flow

/* eslint-disable import/no-unresolved, import/no-extraneous-dependencies */
import React, { Component } from "react";

type callback = () => void;
type eventCallback = (event: SyntheticEvent<*>) => void;

type props = {|
  onMount?: callback,
|};

type state = {|
  clicked: boolean,
|};

class ReactClass extends Component<props, state> {
  state: state = {
    clicked: false,
  };

  componentDidMount() {
    if (this.props.onMount) {
      this.props.onMount();
    }
  }

  someInternalThing: boolean;
  someOtherInternalThing = true;

  handleClick: eventCallback = (event: SyntheticEvent<*>) => {
    event.preventDefault();

    this.setState({ clicked: true });
  };

  render(): React$Element<*> {
    return (
      <div onClick={this.handleClick} style={{ color: "blue" }}>
        {!this.state.clicked ? "Hi" : "Hey"}
        {this.state.clicked && <div />}
      </div>
    );
  }
}

export default ReactClass;
