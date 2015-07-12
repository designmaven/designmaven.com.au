import React from "react/addons";

export class Navbar extends React.Component {
  render() {
    return (
      <div id="navbar">
        <a href="//facebook.com/sarahdesignmaven" target="_blank">
          <i className="fa fa-facebook-square"></i>
        </a>
        <a href="//instagram.com/design.maven" target="_blank">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="mailto:sarahdesignmaven@gmail.com" target="_blank">
          <i className="fa fa-envelope-square"></i>
        </a>
      </div>
    );
  }
}
