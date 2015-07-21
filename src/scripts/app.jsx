import React from "react/addons";
import {Header} from "./header";
import {Content} from "./content";
import {Curtains} from "./curtains";

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Curtains />
        <Header />
        <Content />
      </div>
    );
  }
}

React.render(<App />, document.getElementById("react"));
