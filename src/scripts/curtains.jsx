import React from "react/addons";

export class Curtains extends React.Component {
  constructor(props) {
    super(props);

    this.state = { opened: false };
  }

  render() {
    return (
      <div id="curtains">
        <div className={`curtain curtain-left ${this.state.opened ? "curtain-opened" : ""}`}>
        </div>
        <div className={`curtain curtain-right ${this.state.opened ? "curtain-opened" : ""}`}>
        </div>
      </div>
    );
  }

  componentDidMount() {
    setTimeout(() => this.setState({ opened: true }), 2500);
  }
}
