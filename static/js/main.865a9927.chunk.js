(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{10:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a(4),s=a(2),c=a(5),o=a(6),r=a(9),l=a(8),u=a(1),d=a.n(u),h=a(7),b=a.n(h),j=(a(16),function(t){Object(r.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(c.a)(this,a),(n=e.call(this,t)).state={newItem:"",list:[]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.hydrateStateWithLocalStorage(),window.addEventListener("beforeunload",this.saveStateToLocalStorage.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("beforeunload",this.saveStateToLocalStorage.bind(this)),this.saveStateToLocalStorage()}},{key:"hydrateStateWithLocalStorage",value:function(){for(var t in this.state)if(localStorage.hasOwnProperty(t)){var e=localStorage.getItem(t);try{e=JSON.parse(e),this.setState(Object(s.a)({},t,e))}catch(a){this.setState(Object(s.a)({},t,e))}}}},{key:"saveStateToLocalStorage",value:function(){for(var t in this.state)localStorage.setItem(t,JSON.stringify(this.state[t]))}},{key:"updateInput",value:function(t,e){this.setState(Object(s.a)({},t,e))}},{key:"addItem",value:function(){var t={id:1+Math.random(),value:this.state.newItem.slice()},e=Object(i.a)(this.state.list);e.push(t),this.setState({list:e,newItem:""})}},{key:"deleteItem",value:function(t){var e=Object(i.a)(this.state.list).filter((function(e){return e.id!==t}));this.setState({list:e})}},{key:"render",value:function(){var t=this;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"app-title",children:"MY LIST"}),Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{style:{padding:30,textAlign:"left",maxWidth:500,margin:"auto"},children:["Add an Item...",Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",placeholder:"Type item here",value:this.state.newItem,onChange:function(e){return t.updateInput("newItem",e.target.value)}}),Object(n.jsx)("button",{className:"add-btn btn-floating",onClick:function(){return t.addItem()},disabled:!this.state.newItem.length,children:Object(n.jsx)("i",{class:"material-icons",children:" + "})}),Object(n.jsx)("br",{})," ",Object(n.jsx)("br",{}),Object(n.jsx)("ul",{children:this.state.list.map((function(e){return Object(n.jsxs)("li",{children:[e.value,Object(n.jsx)("button",{className:"btn btn-floating",onClick:function(){return t.deleteItem(e.id)},children:Object(n.jsx)("i",{class:"material-icons",children:"x"})})]},e.id)}))})]})})]})}}]),a}(d.a.Component));b.a.render(Object(n.jsx)(j,{}),document.getElementById("root"))},16:function(t,e,a){}},[[10,1,2]]]);
//# sourceMappingURL=main.865a9927.chunk.js.map