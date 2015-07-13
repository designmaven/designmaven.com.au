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
    // Load the header's huge background image first, so that when
    // the curtains are opened completely, it's not still loading.
    let headerImage = new Image();
    headerImage.src = "images/sarah2.jpg";
    headerImage.onload = () => setTimeout(() => this.setState({ opened: true }), 2000);
  }
}
