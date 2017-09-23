import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Content from "./content";

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Header />
        <Content />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("react"));
