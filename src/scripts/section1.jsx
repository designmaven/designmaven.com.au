import React from "react";

export class Section1 extends React.Component {
  render() {
    return (
      <div id="section1">
        <div className="brand">
          <div className="brand-name">
            design<span className="emphasised">maven.</span>
          </div>
          <div className="brand-description">
            MELBOURNE-BASED GRAPHIC DESIGNER
          </div>
          <div className="brand-contact">
            <a href="mailto:sarahdesignmaven@gmail.com">CONTACT ME</a>
          </div>
        </div>
      </div>
    );
  }
}
