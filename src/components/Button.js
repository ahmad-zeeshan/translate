import React from "react";
import LanguageContext from "../contexts/LanguageContext";

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

  render() {
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {value => (value === "english" ? "Submit" : "Voorleggen")}
        </LanguageContext.Consumer>
      </button>
    );
  }
}

export default Button;
