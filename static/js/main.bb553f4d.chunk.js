(this["webpackJsonpmy-first-react"]=this["webpackJsonpmy-first-react"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),l=a.n(c),s=(a(13),a(14),a(3)),o=a(4),i=a(6),u=a(5),h=a(7),m=function(e){var t=e.name,a=e.email;return r.a.createElement("div",{className:"bg-light-green dib ma2 br3 pa3 grow bw2 shadow-5 w5"},r.a.createElement("img",{alt:"robot",src:"https://robohash.org/".concat(t)}),r.a.createElement("div",null,r.a.createElement("h3",null,t),r.a.createElement("p",null,a)))},d=function(e){var t=e.robots;return r.a.createElement("div",{className:"flex justify-center flex-wrap"},t.map((function(e,a){return r.a.createElement(m,{key:a,id:t[a].id,name:t[a].name,email:t[a].email})})))},f=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green",type:"search",onChange:t,placeholder:"Filter Robots"}))},b=(a(15),function(e){return r.a.createElement("div",{className:"scroll"},e.children)}),p=(a(16),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://cors-anywhere.herokuapp.com/https://luxuriant-football-juqyhav2re.glitch.me/").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchField.toLowerCase())}));return 0===this.state.robots.length?r.a.createElement("div",{className:"flex justify-center flex-column",style:{height:"100vh"}},r.a.createElement("div",{className:"lds-dual-ring tc"}),r.a.createElement("h2",{className:"white tc"},"Loading")):r.a.createElement("div",{className:"tc"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Robot Friends"),r.a.createElement(f,{searchChange:this.onSearchChange})),r.a.createElement(b,null,r.a.createElement(d,{robots:t})))}}]),t}(n.Component));l.a.render(r.a.createElement(p,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.bb553f4d.chunk.js.map