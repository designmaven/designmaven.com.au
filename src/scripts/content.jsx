import React from "react/addons";

const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

export class Content extends React.Component {
  static QUOTES = [{
    text: "Creativity is intelligence having fun.",
    credit: "Albert Einstein"
  }, {
    text: "Make it simple. But significant.",
    credit: "Don Draper"
  }, {
    text: "Good design is as little design as possible.",
    credit: "Dieter Rams"
  }, {
    text: "The first draft of anything is shit.",
    credit: "Ernest Hemingway"
  }]

  constructor(props) {
    super(props);

    this.state = { quoteIndex: 0, quoteChangeEnabled: true };
  }

  render() {
    return (
      <div id="content">
        <div className="pure-g">
          <div className="pure-u-1 pure-u-md-14-24">
            <div className="heading">ABOUT <b>ME.</b></div>
            <p>My name is Sarah and I’m a freelance Graphic Designer based in Melbourne.</p>
            <p>I describe my design style as minimalist and aesthetically pleasing.</p>
            <p>In additional to being at the mercy of coffee, working in the Marketing Department of a national corporation gets me out of bed in the mornings.</p>
            <p>When I’m not in the creative zone, I’m most likely off on an adventure somewhere with my future wife.</p>
            <p>Let’s chat?</p>
          </div>

          <div className="pure-u-1 pure-u-md-2-24">
          </div>

          <div className="pure-u-1 pure-u-md-8-24">
            <div className="heading">FACE TO A <b>NAME.</b></div>
            <img src="images/sarah1.jpg" className="face" />
          </div>
        </div>

        <div className="pure-g">
          <div className="pure-u-1 pure-u-md-14-24">
            <div className="heading">YES TO ALL <b>CAPABILITIES.</b></div>
            <div className="pure-g">
              <div className="pure-u-1 pure-u-md-1-3">
                <img src="images/pen-tool.png" className="vector" />
              </div>
              <div className="pure-u-1 pure-u-md-1-3">
                <img src="images/swatch.png" className="vector" />
              </div>
              <div className="pure-u-1 pure-u-md-1-3">
                <img src="images/pencil.png" className="vector" />
              </div>
            </div>
            <br />
            <p><b>Brand Identity</b></p>
            <p>(Including, but not limited to, logo design & business cards)</p>
            <p><b>Wedding and Social Invitations</b></p>
            <p>(Including, but not limited to, foil press & embossing)</p>
            <p><b>Brochures</b></p>
            <p><b>Signage</b></p>
            <p><b>Customised Artwork</b></p>
          </div>

          <div className="pure-u-1 pure-u-md-2-24">
          </div>

          <div className="pure-u-1 pure-u-md-8-24 pure-g">
            <div className="pure-u-1">
              <div className="heading">COFFEE <b>LOVER.</b></div>
              <div className="pure-g">
                <div className="pure-u-1 pure-u-md-1-2">
                  <img src="images/coffee1.png" className="vector" />
                </div>
                <div className="pure-u-1 pure-u-md-1-2">
                  <img src="images/coffee2.png" className="vector" />
                </div>
              </div>
            </div>

            <div className="pure-u-1">
              <div className="heading">NIKE <b>LOVER.</b></div>
              <img src="images/nike.png" className="vector" />
            </div>
          </div>
        </div>

        <div className="pure-g quotes">
          <div className="pure-u-1 pure-u-md-4-24">
          </div>

          <div className="pure-u-1 pure-u-md-16-24">
            <div className="heading">WORDS OF <b>WISDOM.</b></div>
            <div className="pure-g">
              <div className="pure-u-1 pure-u-md-4-24">
                <p><a href="" onClick={this.handleQuoteChange.bind(this, "previous")}>&lt;</a></p>
              </div>

              <div className="pure-u-1 pure-u-md-16-24">
                <ReactCSSTransitionGroup transitionName="quote" transitionLeave={false}>
                  <div key={this.state.quoteIndex}>
                    <p>{Content.QUOTES[this.state.quoteIndex].text}</p>
                    <p>{Content.QUOTES[this.state.quoteIndex].credit}</p>
                  </div>
                </ReactCSSTransitionGroup>
              </div>

              <div className="pure-u-1 pure-u-md-4-24">
                <p><a href="" onClick={this.handleQuoteChange.bind(this, "next")}>&gt;</a></p>
              </div>
            </div>
          </div>

          <div className="pure-u-1 pure-u-md-4-24">
          </div>
        </div>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.state.quoteChangeEnabled) {
      // Let the quote's "fade-in" CSS animation complete first.
      setTimeout(() => this.setState({ quoteChangeEnabled: true }), 500);
    }
  }

  handleQuoteChange(type, evt) {
    evt.preventDefault(); // Don't follow link.

    if (!this.state.quoteChangeEnabled) {
      return;
    }

    let quoteIndex = (() => {
      switch (type) {
        case "previous": return this.state.quoteIndex > 0 ? this.state.quoteIndex - 1 : Content.QUOTES.length - 1;
        case "next": return this.state.quoteIndex < Content.QUOTES.length - 1 ? this.state.quoteIndex + 1 : 0;
      }
    })();

    this.setState({ quoteIndex, quoteChangeEnabled: false });
  }
}
