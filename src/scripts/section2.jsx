import React from "react";

export class Section2 extends React.Component {
  render() {
    return (
      <div id="section2">
        <div className="column">
          <div className="heading">ABOUT <b>ME.</b></div>
          <p>My name is Sarah and I’m a freelance Graphic Designer based in Melbourne.</p>
          <p>I describe my design style as minimalist and aesthetically pleasing.</p>
          <p>In additional to being at the mercy of coffee, working in the Marketing Department of a national corporation gets me out of bed in the mornings.</p>
          <p>When I’m not in the creative zone, I’m most likely off on an adventure somewhere with my future wife.</p>
          <p>Let’s chat?</p>
        </div>

        <div className="column">
          <div className="heading">FACE TO A <b>NAME.</b></div>
          <img src="images/sarah1.jpg" />
        </div>

        <div className="column">
          <div className="heading">YES TO ALL <b>CAPABILITIES.</b></div>
          <img src="images/pen-tool.png" />
          <img src="images/swatch.png" />
          <img src="images/pencil.png" />
          <p><b>Brand Identity</b></p>
          <p>(Including, but not limited to, logo design & business cards)</p>
          <p><b>Wedding and Social Invitations</b></p>
          <p>(Including, but not limited to, foil press & embossing)</p>
          <p><b>Brochures</b></p>
          <p><b>Signage</b></p>
          <p><b>Customised Artwork</b></p>
        </div>

        <div className="column">
          <div className="heading">COFFEE <b>LOVER.</b></div>
          <img src="images/coffee1.png" />
          <img src="images/coffee2.png" />
        </div>

        <div className="column">
          <div className="heading">NIKE <b>LOVER.</b></div>
          <img src="images/nike.png" />
        </div>

        <div className="column">
          <div className="heading">WORDS OF <b>WISDOM.</b></div>
          <p>Creativity is intelligence having fun.</p>
          <p>Albert Einstein</p>
          <p>Make it simple. But significant.</p>
          <p>Don Draper</p>
          <p>Good design is as little design as possible.</p>
          <p>Dieter Rams</p>
          <p>The first draft of anything is shit.</p>
          <p>Ernest Hemingway</p>
        </div>
      </div>
    );
  }
}
