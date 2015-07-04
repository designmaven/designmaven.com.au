import React from "react/addons";
import {Navbar} from "./navbar";
import {Section1} from "./section1";
import {Section2} from "./section2";

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Navbar />
        <Section1 />
        <Section2 />
      </div>
    );
  }
}

React.render(<App />, document.getElementById("react"));
