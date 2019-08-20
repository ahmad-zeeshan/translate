import React from "react";

export default React.createContext("dutch");

//NOTES
// Any type of valid Js can be passed into createConext object.

/* Default value  ==> this.context ; cant change the value of context object 
becauase we intialize it with default value.
*/

/*
if you want to change the value inside the context object we have to create a component
that is going to act as a source of an information. That is App component bcz state knows
the language selected.
*/

/*
App copmonent render that context.provider function <LanguageContext.Provider>, the value prop
given will be used to update the context object. Value is coming from state in our case.
*/

/*
Context object has both provider and consumer property
*/

/*
this.context OR consumer ::: We use consumer if we want to get information out of 'multiple'
context objects inside of a single component &&&

using this.context in conjunction with contextType property is only used anytime we are accessing
single context object inside of a component.

*/
