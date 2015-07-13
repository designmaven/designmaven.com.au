import React from "react/addons";
import {Navbar} from "./navbar";
import {Header} from "./header";
import {Content} from "./content";
import {Curtains} from "./curtains";

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Navbar />
        <Header />
        <Content />
        <Curtains />
      </div>
    );
  }
}

React.render(<App />, document.getElementById("react"));
