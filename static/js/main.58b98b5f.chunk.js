(window.webpackJsonptranslate=window.webpackJsonptranslate||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),l=n.n(c),u=n(1),o=n(2),i=n(4),s=n(3),m=n(5),g=r.a.createContext("dutch"),f=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e="english"===this.context?"Name":"Naam";return r.a.createElement("div",{className:"ui field"},r.a.createElement("label",null,e),r.a.createElement("input",null))}}]),t}(r.a.Component);f.contextType=g;var h=f,v=r.a.createContext(),b=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"renderButton",value:function(e){return r.a.createElement("button",{className:"ui button ".concat(e)},r.a.createElement(g.Consumer,null,function(e){return"english"===e?"Submit":"Voorleggen"}))}},{key:"render",value:function(){var e=this;return r.a.createElement(v.Consumer,null,function(t){return e.renderButton(t)})}}]),t}(r.a.Component);b.contextType=g;var d=b,p=function(){return r.a.createElement("div",{className:"ui form"},r.a.createElement(h,null),r.a.createElement(d,null))},E=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={},n.onLanguageChange=function(e){n.setState({language:e})},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ui container"},r.a.createElement("div",null,"Select language:",r.a.createElement("i",{className:"flag us",onClick:function(){return e.onLanguageChange("english")}}),r.a.createElement("i",{className:"flag nl",onClick:function(){return e.onLanguageChange("dutch")}})),r.a.createElement(v.Provider,{value:"red"},r.a.createElement(g.Provider,{value:this.state.language},r.a.createElement(p,null))))}}]),t}(r.a.Component);l.a.render(r.a.createElement(E,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.58b98b5f.chunk.js.map