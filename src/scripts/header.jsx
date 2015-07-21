import React from "react/addons";

export class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <div className="top">
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

        <div className="brand">
          <div className="brand-name">
            design<span className="emphasised">maven.</span>
          </div>
          <div className="brand-description">
            MELBOURNE-BASED GRAPHIC DESIGNER
          </div>
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
