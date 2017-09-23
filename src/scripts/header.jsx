import React from "react";

export default class extends React.Component {
  render() {
    return (
      <div id="header">
        <div className="top">
          <a href="https://facebook.com/sarahdesignmaven" target="_blank">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="https://instagram.com/design.maven" target="_blank">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="mailto:sarahdesignmaven@gmail.com" target="_blank">
            <i className="fa fa-envelope-square"></i>
          </a>
        </div>

        <div className="middle">
          <span className="weak">design</span><span className="strong">maven.</span>
        </div>

        <div className="bottom">
          <div className="mouse">
            <div className="scrollwheel">
            </div>
          </div>
        </div>
      </div>
    );
  }
}
