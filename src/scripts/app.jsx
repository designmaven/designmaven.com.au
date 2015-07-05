import React from "react/addons";
import {Navbar} from "./navbar";
import {Header} from "./header";
import {Content} from "./content";

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Navbar />
        <Header />
        <Content />
      </div>
    );
  }
}

React.render(<App />, document.getElementById("react"));
