(this.webpackJsonpotg=this.webpackJsonpotg||[]).push([[0],{32:function(e,t,a){e.exports=a(45)},37:function(e,t,a){},38:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(26),s=a.n(l),i=(a(37),a(38),a(8)),c=a(13),h=a(15),u=a(14),o=a(9),m=a(16),d=a(53),p=a(47),E=a(48),f=a(20),g=a(19),b=a(49),v=a(50),y=a(51),x=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={width:1,height:1},a.handleInput=a.handleInput.bind(Object(o.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleInput",value:function(e){var t=e.target,a=t.name,n=t.value;n=n||1,this.setState(Object(g.a)({},a,n)),this.props.handleSizeChange(Object(f.a)({},this.state,Object(g.a)({},a,n)))}},{key:"render",value:function(){return r.a.createElement(p.a,{className:"text-left"},r.a.createElement(E.a,{xs:{size:12},md:{size:"auto"}},r.a.createElement("h2",null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0440\u0430\u0437\u043c\u0435\u0440\u044b \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0438\u0433\u0440\u044b:")),r.a.createElement(E.a,{xs:11,md:3,className:"mt-1"},r.a.createElement(b.a,null,r.a.createElement(v.a,{row:!0},r.a.createElement(E.a,null,r.a.createElement(y.a,{type:"number",placeholder:0,name:"height",value:this.state.height,onChange:this.handleInput,min:1})),r.a.createElement("span",{className:"cross"},"X"),r.a.createElement(E.a,null,r.a.createElement(y.a,{type:"number",placeholder:0,name:"width",value:this.state.width,onChange:this.handleInput,min:1}))))))}}]),t}(n.Component),N=a(52),w=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).handleInput=function(e,t){return function(n){for(var r=n.target.value,l=a.state.values,s=[],i=0;i<a.state.height;i++){s.push([]);for(var c=0;c<a.state.width;c++)l[i]?s[i].push(l[i][c]||0):s[i].push(0)}s[e][t]=Number(r),a.props.handleMatrixChange(s),a.setState(Object(f.a)({},a.state,{values:s}))}},a.state={width:a.props.width||1,height:a.props.height||1,values:[],saddle:{x:-1,y:-1}};for(var n=0;n<a.state.height;n++){a.state.values.push([]);for(var r=0;r<a.state.width;r++)a.state.values[n].push(0)}return a.handleInput=a.handleInput.bind(Object(o.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleResize",value:function(e){var t=e.width,a=e.height;if(this.state.width!==t||this.state.height!==a){for(var n=this.state.values,r=[],l=0;l<a;l++){r.push([]);for(var s=0;s<t;s++)n[l]?r[l].push(n[l][s]||0):r[l].push(0)}this.setState({width:t,height:a,values:r}),this.props.handleMatrixChange(r)}}},{key:"componentDidUpdate",value:function(e,t,a){this.handleResize(this.props)}},{key:"componentDidMount",value:function(){this.props.handleMatrixChange(this.state.values)}},{key:"renderTable",value:function(){var e=this,t=function(t,a){return e.props.saddle?t===e.props.saddle.y&&a===e.props.saddle.x?"highlight":t===e.props.saddle.y||a===e.props.saddle.x?"semi-highlight":"":""},a=[];a.push(r.a.createElement("tr",{key:"0c"},r.a.createElement("th",{className:"bg-light"},"\u0418\u0433\u0440\u043e\u043a\u0438"),this.state.values[0].map((function(e,t){return r.a.createElement("th",{className:"bg-light",key:"-".concat(t)},"B",r.a.createElement("sub",null,t+1))})),r.a.createElement("th",{className:"bg-light"},"min(A",r.a.createElement("sub",null,"i"),")")));for(var n=[],l=0;l<this.state.height;l++){for(var s=[r.a.createElement("th",{className:"bg-light",key:"min-".concat(l)},"A",r.a.createElement("sub",null,l+1))],i=this.state.values[l][0],c=0;c<this.state.width;c++){var h=this.state.values[l][c];i=Math.min(i,h),(!n[c]||n[c]<h)&&(n[c]=h),s.push(r.a.createElement("td",{key:"".concat(l,"-").concat(c),className:t(l,c)},r.a.createElement("input",{type:"number",value:h||"",placeholder:"0",className:"table-input",onChange:this.handleInput(l,c),key:"".concat(l,"-").concat(c)})))}s.push(r.a.createElement("td",{className:"bg-light",key:"".concat(l,"-min")},i)),a.push(r.a.createElement("tr",{key:l},s))}return a.push(r.a.createElement("tr",{key:"lc"},r.a.createElement("th",{className:"bg-light"},"max(B",r.a.createElement("sub",null,"i"),")"),n.map((function(e,t){return r.a.createElement("td",{className:"bg-light",key:"".concat(t,"-")},e)})))),a}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null,r.a.createElement(E.a,{xs:12,md:"auto"},r.a.createElement(N.a,{bordered:!0,className:"text-center",responsive:!0},r.a.createElement("tbody",null,this.renderTable())))))}}]),t}(n.Component),j=function(e){var t,a=e.saddle;return t=a?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"text-success"},"\u041c\u0430\u0442\u0440\u0438\u0446\u0430 \u0438\u043c\u0435\u0435\u0442 \u0441\u0435\u0434\u043b\u043e\u0432\u0443\u044e \u0442\u043e\u0447\u043a\u0443"),r.a.createElement("h3",null,"\u041a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u044b \u0442\u043e\u0447\u043a\u0438: (",a.x+1,",",a.y+1,")"),r.a.createElement("h3",null,"\u0426\u0435\u043d\u0430 \u0438\u0433\u0440\u044b: ",a.price)):r.a.createElement("h2",{className:"text-warning"},"\u0421\u0435\u0434\u043b\u043e\u0432\u0430\u044f \u0442\u043e\u0447\u043a\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"),r.a.createElement(p.a,{className:"text-left"},r.a.createElement(E.a,{xs:12},r.a.createElement("hr",null),t))},O=a(30),k=a(10),S=a(27),I=a(54),M=function(e){for(var t=e.length||0,a=e?e[0].length:0,n=[],r=0;r<t;r++)n[r]=Math.min.apply(Math,Object(k.a)(e[r]));for(var l=[],s=0;s<a;s++){l[s]=e[0][s];for(var i=1;i<t;i++)e[i][s]>l[s]&&(l[s]=e[i][s])}for(var c=0;c<t;c++)for(var h=0;h<a;h++)if(n[h]===l[c])return{x:c,y:h,price:e[c][h]};return!1},C=function(e){var t=e.length||0,a=e?e[0].length:0;if(t!==a)return{a:[],b:[],s:!1};for(var n=[],r=0;r<t;r++){n.push([]);for(var l=0;l<a;l++)n[r].push(e[r][l]);n[r].push(-1)}n.push([].concat(Object(k.a)(e.map((function(){return 1}))),[0]));var s=[].concat(Object(k.a)(e.map((function(){return 0}))),[1]);try{return{a:n,b:s,s:S.solve(n,s)}}catch(i){return{a:n,b:s,s:!1}}},z=1e-6,_=function e(t,a,n,r){Object(i.a)(this,e),2==arguments.length?(this.a=t,this.b=a,this.x1=0,this.y1=a,this.x2=1,this.y2=t+a):(this.x1=t,this.y1=a,this.x2=n,this.y2=r)},A=function e(t,a,n){var r=Object(O.a)(t,2),l=r[0],s=r[1];Object(i.a)(this,e),this.x=l,this.y=s,this.line1=a,this.line2=n};function F(e,t){return e.b+e.a*t.x+z>=t.y}function R(e,t){return e.b+e.a*t.x-z<=t.y}var T=function(e){if(!e||!e[0]||2!==e.length&&2!==e[0].length)return!1;var t,a,n={matrix:[],bolds:[],superbolds:[],point:null};"h"===(2===e.length?"h":"v")?(n.matrix=Object(I.b)(e),t=e[0].map((function(t,a){return new _(e[1][a]-t,t)})),a=F):(n.matrix=e,t=e.map((function(e){return new _(e[1]-e[0],e[0])})),a=R);for(var r=[],l=[].concat(Object(k.a)(t),[new _(0,Number.MIN_SAFE_INTEGER,0,Number.MAX_SAFE_INTEGER),new _(1,Number.MIN_SAFE_INTEGER,1,Number.MAX_SAFE_INTEGER)]),s=0;s<l.length;s++)for(var i=l[s],c=function(e){var t=l[e],a=Object(I.a)([i.x1,i.y1],[i.x2,i.y2],[t.x1,t.y1],[t.x2,t.y2]);if(!a)return"continue";var n=new A(a,i,t);n&&!~r.findIndex((function(e){return e.x===n.x&&e.y===n.y}))&&r.push(n)},h=s+1;h<l.length;h++)c(h);r=r.filter((function(e){return e.x>=0&&e.x<=1&&t.every((function(t){return a(t,e)}))})).sort((function(e,t){return e.x-t.x})),console.log(r);for(var u=0;u<r.length-1;u++)n.bolds.push(new _(r[u].x,r[u].y,r[u+1].x,r[u+1].y));var o=r.sort((function(e,t){return t.y-e.y}))[0];return o.line1.y1!==Number.MIN_SAFE_INTEGER&&o.line2.y1!==Number.MIN_SAFE_INTEGER&&(n.point=o,n.superbolds.push(o.line1,o.line2)),console.log(n.bolds),n},G=function(e,t,a){return r.a.createElement("div",null,r.a.createElement("h3",null,"\u0421\u0438\u0441\u0442\u0435\u043c\u0430 \u0443\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0439 \u0434\u043b\u044f ",e," \u0438\u0433\u0440\u043e\u043a\u0430"),t.map((function(e,a){return r.a.createElement("p",{key:"a-".concat(a)},e.splice(0,e.length-1).map((function(e,t){return r.a.createElement("span",{key:"a-".concat(a,"-").concat(t)},e>=0&&0!==t?"+".concat(e):e,"p",r.a.createElement("sub",null,t+1))}))," ","= ",a<t.length-1?"y":"1")})),r.a.createElement((function(){return a?r.a.createElement("div",null,r.a.createElement("h4",null,"\u0420\u0435\u0448\u0435\u043d\u0438\u0435:"),r.a.createElement("p",null,"y = ",a[a.length-1].toFixed(2)),a.slice(0,a.length-1).map((function(e,t){return r.a.createElement("p",{key:"s-".concat(t)},"p",r.a.createElement("sub",null,t+1)," = ",e.toFixed(2))}))):r.a.createElement("div",{className:"text-danger"},"\u0421\u0438\u0441\u0442\u0435\u043c\u0430 \u043d\u0435 \u0438\u043c\u0435\u0435\u0442 \u0440\u0435\u0448\u0435\u043d\u0438\u0439")}),null))},B=function(e){var t=e.matrix;if(!t||!t[0]||t.length!==t[0].length)return r.a.createElement("div",null);var a=[C(Object(I.b)(t)),C(t)];return r.a.createElement(p.a,null,r.a.createElement(E.a,{xs:12},r.a.createElement("hr",null),r.a.createElement("h2",{className:"text-success"},"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0438\u043c\u0435\u0435\u0442 \u0432\u0438\u0434 NxN"),G(1,a[0].a,a[0].s),G(2,a[1].a,a[1].s)))},X=a(29),D=a.n(X),J=function(e){var t=e.sol;if(!t)return r.a.createElement("div",null);var a=t.matrix,n=t.bolds,l=t.superbolds,s=t.point,i=a.map((function(e){return{x:[0,1],y:[e[0],e[1]],type:"scatter",mode:"lines",line:{color:"grey",width:2}}}));i.push.apply(i,Object(k.a)(n.map((function(e){return{x:[e.x1,e.x2],y:[e.y1,e.y2],type:"scatter",mode:"lines",line:{color:"orange",width:2}}})))),i.push.apply(i,Object(k.a)(l.map((function(e){return{x:[e.x1,e.x2],y:[e.y1,e.y2],type:"scatter",mode:"lines",line:{color:"green",width:2}}})))),s&&i.push({x:[s.x],y:[s.y],mode:"markers",type:"scatter",marker:{size:5,color:"red"}}),i.push({x:[1,1],y:[0,Math.max.apply(Math,Object(k.a)(a.map((function(e){return Math.max(e[0],e[1])}))))],type:"scatter",mode:"lines",line:{color:"black",width:2}});return r.a.createElement(p.a,null,r.a.createElement(E.a,{xs:12},r.a.createElement("hr",null),r.a.createElement(D.a,{data:i,labels:[],layout:{showlegend:!1},config:{staticPlot:!0},className:"plot"})))},W=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={width:1,height:1,matrix:[[0]],graphSol:!1},a.handleSizeChange=a.handleSizeChange.bind(Object(o.a)(a)),a.handleMatrixChange=a.handleMatrixChange.bind(Object(o.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleSizeChange",value:function(e){var t=e.width,a=e.height;this.setState({width:t,height:a})}},{key:"handleMatrixChange",value:function(e){this.setState({matrix:e,saddle:M(e),graphSol:T(e)})}},{key:"renderSolution",value:function(){if(this.state.matrix)return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{saddle:this.state.saddle}),r.a.createElement(J,{sol:this.state.graphSol}),r.a.createElement(B,{matrix:this.state.matrix}),r.a.createElement(J,{matrix:this.state.matrix}))}},{key:"render",value:function(){return r.a.createElement(d.a,{fluid:!0},r.a.createElement(p.a,null,r.a.createElement(E.a,{xs:{offset:1,size:"10"},className:"mt-2"},r.a.createElement(x,{handleSizeChange:this.handleSizeChange}),r.a.createElement(w,{width:this.state.width,height:this.state.height,handleMatrixChange:this.handleMatrixChange,saddle:this.state.saddle}),this.renderSolution())))}}]),t}(n.Component);a(44);var P=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(W,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.4b4b932a.chunk.js.map