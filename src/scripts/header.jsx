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
          <div className="brand-contact">
            <a href="mailto:sarahdesignmaven@gmail.com">CONTACT ME</a>
          </div>
        </div>

        <div className="see-more">
          <div className="mouse">
            <div className="wheel">
            </div>
            <div className="scroll scroll1">
            </div>
            <div className="scroll scroll2">
            </div>
            <div className="scroll scroll3">
            </div>
          </div>
          <div className="text">
          </div>
        </div>
      </div>
    );
  }
}
