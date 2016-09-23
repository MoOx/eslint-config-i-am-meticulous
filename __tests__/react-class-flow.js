// @flow

/* eslint-disable import/no-unresolved, import/no-extraneous-dependencies */
import React, { Component } from "react"

type Callback = () => void
type EventCallback = (event: SyntheticEvent) => void

type Props = {
  onMount?: Callback,
}

type State = {
  clicked: boolean,
}

class ReactClass extends Component<void, Props, State> {
  props: Props;

  state: State = {
    clicked: false,
  };

  constructor(props: Props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.onMount) {
      this.props.onMount()
    }
  }

  handleClick: EventCallback = (event: SyntheticEvent) => {
    event.preventDefault()

    this.setState({ clicked: true })
  };

  render(): React$Element<*> {
    return (
      <div
        onClick={ this.handleClick }
        style={{ color: "blue" }}
      >
        {
          !this.state.clicked
          ? "Hi"
          : "Hey"
        }
        {
          this.state.clicked &&
            <div />
        }
      </div>
    )
  }
}

export default ReactClass
