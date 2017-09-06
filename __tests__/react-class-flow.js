// @flow

/* eslint-disable import/no-unresolved, import/no-extraneous-dependencies */
import React, { Component } from "react";

type CallbackType = () => void;
type EventCallbackType = (event: SyntheticEvent<*>) => void;

type PropsType = {
  onMount?: CallbackType,
};

type StateType = {
  clicked: boolean,
};

class ReactClass extends Component<PropsType, StateType> {
  props: PropsType;

  state: StateType = {
    clicked: false,
  };

  constructor(props: PropsType) {
    super(props);
  }

  componentDidMount() {
    if (this.props.onMount) {
      this.props.onMount();
    }
  }

  handleClick: EventCallbackType = (event: SyntheticEvent<*>) => {
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
