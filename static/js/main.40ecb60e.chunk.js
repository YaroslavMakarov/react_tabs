(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(2),i=n.n(r),o=n(3),l=n(4),u=n(7),s=n(6),b=(n(13),n(5)),d=n.n(b),m=(n(14),function(t){var e=t.tabs,n=t.index,a=t.callback,r=n;return c.a.createElement(c.a.Fragment,null,e.map((function(t){return c.a.createElement("button",{key:t.id,type:"button",onClick:function(){return a(t.id)},className:d()("tabButton",{tabButton__active:t.id===n})},t.title)})),c.a.createElement("p",{className:"tab-text"},e[r].id===r?e[r].content:""))}),f=[{title:"Tab 1",content:"Some text 1",id:0},{title:"Tab 2",content:"Some text 2",id:1},{title:"Tab 3",content:"Some text 3",id:2}],p=function(t){Object(u.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={index:0},t.changeIndex=function(e){return t.setState({index:e})},t}return Object(l.a)(n,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"React tabs"),c.a.createElement(m,{tabs:f,index:this.state.index,callback:this.changeIndex}))}}]),n}(c.a.Component);i.a.render(c.a.createElement(p,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.40ecb60e.chunk.js.map