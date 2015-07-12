import React from "react/addons";

export class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <div className="brand">
          <div className="brand-name">
            design<span className="emphasised">maven.</span>
          </div>
          <div className="brand-description">
            MELBOURNE-BASED GRAPHIC DESIGNER
          </div>
        </div>

        <div className="see-more">
          <div className="mouse">
            // TODO
          </div>
        </div>
      </div>
    );
  }
}
