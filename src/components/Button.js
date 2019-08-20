import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  /*
=> Create a context object (In our app we have LanguageContext object).
=> Define context type in the nested component(child component).
=> Thats it. You will get the this.context.
*/
  /*
By using Consumer function: In order to get the value out of the context object, we are going to pass a single function
as a 'child'; that child would be called with whatever value inside our 'pipe'.
*/
  static contextType = LanguageContext;

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {value => (value === "english" ? "Submit" : "Voorleggen")}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
