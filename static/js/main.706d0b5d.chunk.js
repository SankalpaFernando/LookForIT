(this.webpackJsonpitbook=this.webpackJsonpitbook||[]).push([[0],{107:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),s=c(10),i=c.n(s),a=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,108)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),s(e),i(e)}))},o=c(3),j=(c(84),c(9)),l=c(46),b=c(12),x=c(4),d=c(5),u=c.n(d),h=c(11),C=c(2),O=(c(86),c(1));var L=function(e){var t=e.image,c=e.title,n=e.price,r=e.onMoreInfo;return Object(O.jsxs)("div",{className:"card",children:[Object(O.jsxs)("div",{className:"book-img",children:[Object(O.jsx)("img",{onClick:r,src:"".concat(t)}),Object(O.jsx)("div",{className:"white"})]}),Object(O.jsx)(o.Text,{textColor:"black400",textAlign:"center",textSize:"title",children:c}),Object(O.jsx)(o.Text,{textColor:"gray600",textAlign:"center",textSize:"subheader",children:n})]})},p=c(29),f=c.n(p),g="https://api.itbook.store/1.0/",v=function(){var e=Object(h.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("".concat(g,"new"));case 3:return t=e.sent,e.next=6,t.data.books;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(h.a)(u.a.mark((function e(t){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("".concat(g,"search/").concat(t));case 3:return c=e.sent,e.next=6,c.data.books;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(h.a)(u.a.mark((function e(t){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("".concat(g,"books/").concat(t));case 3:return c=e.sent,e.next=6,c.data;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),k=Object(b.b)({key:"books",default:[]}),M=Object(b.b)({key:"loading",default:!1});var Z=function(){var e=Object(b.c)(k),t=Object(C.a)(e,2),c=(t[0],t[1]),r=Object(n.useState)(""),s=Object(C.a)(r,2),i=s[0],a=s[1],j=Object(b.c)(M),l=Object(C.a)(j,2),x=(l[0],l[1]),d=function(e){a(e)};return Object(n.useEffect)(Object(h.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x(!0),""!=i){e.next=9;break}return e.t0=c,e.next=5,v();case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=14;break;case 9:return e.t2=c,e.next=12,m(i);case 12:e.t3=e.sent,(0,e.t2)(e.t3);case 14:x(!1);case 15:case"end":return e.stop()}}),e)}))),[i]),Object(O.jsxs)(o.Row,{m:{y:"2rem"},children:[Object(O.jsx)(o.Col,{size:{xs:12,lg:4}}),Object(O.jsx)(o.Col,{size:{xs:12,lg:4},children:Object(O.jsx)(o.Input,{placeholder:"Author/ISBN/Title",h:"3rem",onChange:function(e){return d(e.target.value)},suffix:Object(O.jsx)(o.Button,{pos:"absolute",bg:"transparent",w:"3rem",h:"3rem",top:"0",right:"0",rounded:{r:"md"},onClick:function(){return d(i)},children:Object(O.jsx)(o.Icon,{name:"Search",size:"20px",color:"black",cursor:"pointer"})})})}),Object(O.jsx)(o.Col,{size:{xs:12,lg:4}})]})};var y=function(e){var t=e.title,c=e.authors,n=e.isbn10,r=e.pages,s=e.image,i=(e.price,e.desc),a=e.year,j=e.onClose;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(o.Icon,{name:"Cross",pos:"absolute",top:"1rem",right:"1rem",size:"16px",onClick:j,cursor:"pointer"}),Object(O.jsxs)(o.Row,{children:[Object(O.jsx)(o.Col,{children:Object(O.jsx)("img",{src:"".concat(s)})}),Object(O.jsxs)(o.Col,{children:[Object(O.jsx)(o.Text,{textAlign:"center",textSize:"display1",children:t}),Object(O.jsx)(o.Text,{m:"1rem",textAlign:"justify",textColor:"black200",children:i}),Object(O.jsxs)("table",{style:{width:"90%",margin:"0 auto"},children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsx)(o.Text,{textWeight:"600",children:"ISBN"})}),Object(O.jsx)("td",{children:Object(O.jsx)(o.Text,{textWeight:"300",children:n})})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsx)(o.Text,{textWeight:"600",children:"Author(s)"})}),Object(O.jsx)("td",{children:Object(O.jsx)(o.Text,{textWeight:"300",children:c})})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsx)(o.Text,{textWeight:"600",children:"Published Year"})}),Object(O.jsx)("td",{children:Object(O.jsx)(o.Text,{textWeight:"300",children:a})})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsx)(o.Text,{textWeight:"600",children:"Pages"})}),Object(O.jsx)("td",{children:Object(O.jsx)(o.Text,{textWeight:"300",children:r})})]})]}),Object(O.jsx)("div",{style:{marginTop:"1rem",display:"flex",float:"right"},children:Object(O.jsx)(o.Button,{prefix:Object(O.jsx)(o.Icon,{name:"Bag",size:"16px",color:"white",m:{r:"0.5rem"}}),bg:"success700",hoverBg:"success800",rounded:"circle",p:{r:"1.5rem",l:"1rem"},shadow:"3",hoverShadow:"4",onClick:function(){window.open("https://www.amazon.com/s?k=".concat(n))},children:"Buy Now"})})]})]})]})};c(44);var B=function(){return Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"center",marginTop:"2rem"},children:[Object(O.jsxs)("div",{class:"loader",children:[Object(O.jsx)("div",{children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)("svg",{viewBox:"0 0 90 120",fill:"currentColor",children:Object(O.jsx)("path",{d:"M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"})})}),Object(O.jsx)("li",{children:Object(O.jsx)("svg",{viewBox:"0 0 90 120",fill:"currentColor",children:Object(O.jsx)("path",{d:"M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"})})}),Object(O.jsx)("li",{children:Object(O.jsx)("svg",{viewBox:"0 0 90 120",fill:"currentColor",children:Object(O.jsx)("path",{d:"M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"})})}),Object(O.jsx)("li",{children:Object(O.jsx)("svg",{viewBox:"0 0 90 120",fill:"currentColor",children:Object(O.jsx)("path",{d:"M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"})})}),Object(O.jsx)("li",{children:Object(O.jsx)("svg",{viewBox:"0 0 90 120",fill:"currentColor",children:Object(O.jsx)("path",{d:"M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"})})}),Object(O.jsx)("li",{children:Object(O.jsx)("svg",{viewBox:"0 0 90 120",fill:"currentColor",children:Object(O.jsx)("path",{d:"M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"})})})]})}),Object(O.jsx)("span",{children:"Looking For Some Books"})]}),Object(O.jsx)("a",{class:"dribbble",href:"https://dribbble.com/shots/7425055-Book-Loader",target:"_blank",children:Object(O.jsx)("img",{src:"https://dribbble.com/assets/logo-small-2x-9fe74d2ad7b25fba0f50168523c15fda4c35534f9ea0b1011179275383035439.png"})})]})};var T=function(){return Object(O.jsx)("div",{className:"footer",children:"Made with \u2764\ufe0f By Sankalpa Fernando \xa9 2020"})};var S=function(){var e=Object(n.useState)(!1),t=Object(C.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(null),i=Object(C.a)(s,2),a=i[0],j=i[1],l=Object(b.c)(k),d=Object(C.a)(l,2),p=d[0],f=d[1],g=Object(b.c)(M),m=Object(C.a)(g,2),S=m[0],z=m[1];return Object(n.useEffect)(Object(h.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return z(!0),e.t0=f,e.next=4,v();case 4:e.t1=e.sent,(0,e.t0)(e.t1),z(!1);case 7:case"end":return e.stop()}}),e)}))),[]),Object(O.jsxs)("div",{children:[Object(O.jsx)(o.Modal,{isOpen:c,onClose:function(){r(!1)},rounded:"md",maxW:"48rem",children:Object(O.jsx)(y,Object(x.a)({onClose:function(){return r(!1)}},a))}),Object(O.jsx)(Z,{}),Object(O.jsx)("div",{className:"card-holder",children:S?Object(O.jsx)(B,{}):0===(null===p||void 0===p?void 0:p.length)?Object(O.jsx)(o.Text,{textSize:"title",textColor:"black200",m:"3rem",textAlign:"center",children:"No Results Found..."}):null===p||void 0===p?void 0:p.map((function(e){return Object(O.jsx)(L,Object(x.a)({onMoreInfo:Object(h.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(!0),t.t0=j,t.next=4,w(e.isbn13);case 4:t.t1=t.sent,(0,t.t0)(t.t1);case 6:case"end":return t.stop()}}),t)})))},e),e.id)}))}),Object(O.jsx)(T,{})]})},z=new l.a;i.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsxs)(j.Provider,{value:z,debug:undefined,debugAfterHydration:!0,children:[Object(O.jsx)(o.StyleReset,{}),Object(O.jsx)(b.a,{children:Object(O.jsx)(S,{})})]})}),document.getElementById("root")),a()},44:function(e,t,c){},84:function(e,t,c){},86:function(e,t,c){}},[[107,1,2]]]);
//# sourceMappingURL=main.706d0b5d.chunk.js.map