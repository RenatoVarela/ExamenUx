(this.webpackJsonpnote_taking_app=this.webpackJsonpnote_taking_app||[]).push([[0],{135:function(e,t,a){e.exports=a(283)},140:function(e,t,a){},263:function(e,t){},283:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),l=a.n(r),i=(a(140),a(10)),c=a(44),s=a(321),u=a(284),m=a(15),g={get:function(e){return localStorage.getItem(e)},set:function(e,t){return localStorage.setItem(e,t)},remove:function(e){return localStorage.removeItem(e)},getNotes:function(){return g.get("notes")},getNotebooks:function(e){return g.get(e)},setNotes:function(e){g.set("notes",e)},rmNotes:function(){g.remove("notes")},rmNoteBook:function(e){g.remove(e)},note:function(e){return null!==g.getNotes()?JSON.parse(g.getNotes())[e]:[]},rowExists:function(e){var t=JSON.parse(g.getNotes());return null!==t&&t.length>0?t.filter((function(t){return e.id===t.id})):[]},rowExistsIn:function(e,t){var a=JSON.parse(localStorage.getItem(e));return null!==a&&a.length>0?a.filter((function(e){return t.id===e.id})):[]},getAllNotes:function(){var e=g.getNotebooks("Lenguajes Prog."),t=g.getNotebooks("Experiencia Usuario"),a=g.getNotebooks("Diseno S.Logicos"),n=g.getNotebooks("notes");return e=null!==e?JSON.parse(e):[],t=null!==t?JSON.parse(t):[],a=null!==a?JSON.parse(a):[],n=null!==n?JSON.parse(n):[],[].concat(Object(m.a)(e),Object(m.a)(t),Object(m.a)(a),Object(m.a)(n))},findId:function(e){var t=g.getAllNotes();return null!==t&&t.length>0?t.filter((function(t){return e===t.id})):[]},updateId:function(e,t){var a=JSON.parse(g.getNotebooks(""===t.notebook?"notes":t.notebook)),n=t.notebook;if(null!==a&&a.length>0){var o=a.filter((function(a){if(e===a.id){var n=t.title,o=t.message,r=t.category;a.title=n,a.message=o,a.category=r}return a}));return g.set(""===n?"notes":n,JSON.stringify(o)),!0}return!1}},d=g,p=a(17),f=Object(n.createContext)(),E=function(e){var t=e.reducer,a=e.initialState,r=e.children;return o.a.createElement(f.Provider,{value:Object(n.useReducer)(t,a)},r)},b=function(){return Object(n.useContext)(f)},v={notes:[],modal:!1,edit:null,show:null,showModal:!1},N=function(e,t){switch(t.type){case"newNote":return Object(p.a)(Object(p.a)({},e),{},{notes:t.notes});case"openModal":return Object(p.a)(Object(p.a)({},e),{},{modal:t.modal,edit:t.edit});case"showMessage":return Object(p.a)(Object(p.a)({},e),{},{showModal:t.showModal,show:t.show});default:return e}},h=a(325),O=a(324),j=a(323),k=a(318),y=Object(k.a)((function(e){return{paper:{backgroundColor:"#F7F2E0",padding:2*e.spacing(2),color:e.palette.text.secondary,marginBottom:10},button:{position:"relative",top:"10px"},title:{wordBreak:"break-all",paddingBottom:10}}})),w=Object(k.a)((function(e){return{root:{flexGrow:1},paper:{padding:2*e.spacing(2),color:e.palette.text.secondary,marginBottom:10},margin:{marginTop:8},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1)},formControl:{marginTop:e.spacing(1)+"px !important",marginBottom:e.spacing(1)+"px !important",width:"100% !important"},moveToSelect:{backgroundColor:"#ccc !important",color:"#333 !important"}}}));var S=function(e){var t=e.item,a=e.row,n=t.id,r=t.title,l=(t.category,y()),c=b(),m=Object(i.a)(c,2)[1];return o.a.createElement(s.a,{className:l.paper},o.a.createElement(j.a,{container:!0},o.a.createElement("div",{className:r},a+1,"- ",r)),o.a.createElement(O.a,{variant:"middle"}),o.a.createElement(j.a,{container:!0},o.a.createElement(h.a,{color:"primary","aria-label":"outlined primary button group",className:l.button},o.a.createElement(u.a,{variant:"outlined",color:"secondary",onClick:function(){var e=t.notebook,a=JSON.parse(d.getNotebooks(e));null===a&&(a=JSON.parse(d.getNotes()));var n=a.filter((function(e){return e.id!==t.id}));d.rmNoteBook(""===e?"notes":e),d.set(""===e?"notes":e,JSON.stringify(n)),m({type:"newNote",notes:n})}},"Eliminar"),o.a.createElement(u.a,{variant:"outlined",color:"primary",onClick:function(){m({type:"showMessage",showModal:!0,show:n})}},"Leer Nota"))))},x=a(342),C=a(118),L=a.n(C),F=a(331);var J=function(){var e=w(),t=b(),a=Object(i.a)(t,2),r=a[0].notes,l=(a[1],Object(n.useState)([])),s=Object(i.a)(l,2),u=s[0],m=s[1],g=Object(n.useState)(""),d=Object(i.a)(g,2),p=d[0],f=d[1],E=Object(n.useState)(""),v=Object(i.a)(E,2),N=(v[0],v[1],Object(n.useState)("")),h=Object(i.a)(N,2),O=(h[0],h[1]);return o.a.useEffect((function(){m(r)}),[r]),o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{variant:"h5",align:"center",color:"primary",gutterBottom:!0,noWrap:!0},"Notes"),o.a.createElement(x.a,{value:p,id:"outlined-textarea",label:"Buscar por Etiqueta",placeholder:"Etiqueta1, Etiqueta2 ...",className:e.textField,margin:"normal",variant:"outlined",fullWidth:!0,onChange:function(e){return function(e){var t=e.target.value;f(t),O("");var a=function(e,t,a){var n=e.toLowerCase();return a.filter((function(e){return void 0!==e[t]&&e[t].toLowerCase().includes(n)}))}(t,"title",r);a.length>0&&m(a),0===t.length&&m(r)}(e)},InputProps:{endAdornment:o.a.createElement(F.a,{position:"end"},o.a.createElement(L.a,null))}}),o.a.createElement("div",{className:e.margin},u.length>0&&u.map((function(e,t){return o.a.createElement(S,{row:t,item:e,key:e.id})}))))},B=Object(k.a)((function(e){return{noteBooksContainer:{backgroundColor:"#E6E6E6",minHeight:"100%"},noteBookList:{cursor:"pointer"},active:{backgroundColor:"#ccc"}}})),W=a(330),P=a(332),D=a(333),I=a(334),M=a(344),U=a(50),T=a.n(U);var q=function(){var e=B(),t=Object(n.useState)("all"),a=Object(i.a)(t,2),r=a[0],l=a[1],s=b(),u=Object(i.a)(s,2)[1];function g(e){var t,a,n=d.getNotebooks("Lenguajes Prog."),o=d.getNotebooks("Experiencia Usuario"),r=d.getNotebooks("Diseno S.Logicos"),i=d.getNotebooks("notes");(l(e),"all"===e)?(n=null!==n?JSON.parse(n):[],o=null!==o?JSON.parse(o):[],r=null!==r?JSON.parse(r):[],i=null!==i?JSON.parse(i):[],(t=[].concat(Object(m.a)(n),Object(m.a)(o),Object(m.a)(r),Object(m.a)(i))).length>0&&u({type:"newNote",notes:t})):("Lenguajes Prog."===e&&(a=n),"Experiencia Usuario"===e&&(a=o),"Diseno S.Logicos"===e&&(a=r),a=null!==a?JSON.parse(a):[],u({type:"newNote",notes:a}))}return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{variant:"h5",align:"center",color:"primary",gutterBottom:!0,noWrap:!0},"Clases"),o.a.createElement("div",{className:e.noteBooksContainer},o.a.createElement("div",{className:e.demo},o.a.createElement(W.a,{dense:!1},o.a.createElement(P.a,{className:[e.noteBookList,"all"===r&&e.active].join(" "),onClick:function(){return g("all")}},o.a.createElement(D.a,null,o.a.createElement(M.a,null,o.a.createElement(T.a,null))),o.a.createElement(I.a,{primary:"Ver Todo"})),o.a.createElement(P.a,{className:[e.noteBookList,"Lenguajes Prog."===r&&e.active].join(" "),onClick:function(){return g("Lenguajes Prog.")}},o.a.createElement(D.a,null,o.a.createElement(M.a,null,o.a.createElement(T.a,null))),o.a.createElement(I.a,{primary:"Lenguajes Prog."})),o.a.createElement(P.a,{className:[e.noteBookList,"Experiencia Usuario"===r&&e.active].join(" "),onClick:function(){return g("Experiencia Usuario")}},o.a.createElement(D.a,null,o.a.createElement(M.a,null,o.a.createElement(T.a,null))),o.a.createElement(I.a,{primary:"Experiencia Usuario"})),o.a.createElement(P.a,{className:[e.noteBookList,"Diseno S.Logicos"===r&&e.active].join(" "),onClick:function(){return g("Diseno S.Logicos")}},o.a.createElement(D.a,null,o.a.createElement(M.a,null,o.a.createElement(T.a,null))),o.a.createElement(I.a,{primary:"Diseno S.Logicos"}))))))},A=a(34),R=a(343),_=a(328),H=a(338),G=Object(k.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},button:{margin:e.spacing(1)},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1)},dense:{marginTop:e.spacing(2)},menu:{width:200},formControl:{margin:e.spacing(1),width:"100%"}}})),z=Object(k.a)((function(e){return{close:{padding:e.spacing(.5)}}})),V=a(341),Y=a(335),$=a(119),K=a.n($);function Q(e){var t=z(),a=e.setClose,n=e.open,r=o.a.useState(),l=Object(i.a)(r,2),c=l[0],s=l[1];o.a.useEffect((function(){s(n)}),[n]);var u=function(e,t){"clickaway"!==t&&(s(!1),a())};return o.a.createElement("div",null,o.a.createElement(V.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:c,autoHideDuration:6e3,onClose:u,ContentProps:{"aria-describedby":"message-id"},message:o.a.createElement("span",{id:"message-id"},"Note with this id exists"),action:[o.a.createElement(Y.a,{key:"close","aria-label":"close",color:"inherit",className:t.close,onClick:u},o.a.createElement(K.a,null))]}))}var X=function(){var e=G(),t=o.a.useState({id:0,category:"",notebook:"",message:"",title:""}),a=Object(i.a)(t,2),n=a[0],r=a[1],l=o.a.useRef(null),s=o.a.useState(0),g=Object(i.a)(s,2),f=g[0],E=g[1],v=o.a.useState(!1),N=Object(i.a)(v,2),h=N[0],O=N[1],j=b(),k=Object(i.a)(j,2)[1];function y(e,t){var a;r(Object(p.a)(Object(p.a)({},n),{},(a={},Object(A.a)(a,e,t.target.value),Object(A.a)(a,"id",(new Date).getTime()),a)))}return o.a.useEffect((function(){E(l.current.offsetWidth)}),[]),o.a.useEffect((function(){var e,t=d.getNotebooks("Lenguajes Prog."),a=d.getNotebooks("Experiencia Usuario"),n=d.getNotebooks("Diseno S.Logicos"),o=d.getNotebooks("notes");t=null!==t?JSON.parse(t):[],a=null!==a?JSON.parse(a):[],n=null!==n?JSON.parse(n):[],o=null!==o?JSON.parse(o):[],(e=[].concat(Object(m.a)(t),Object(m.a)(a),Object(m.a)(n),Object(m.a)(o))).length>0&&k({type:"newNote",notes:e})}),[k]),o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{variant:"h5",align:"center",color:"primary",gutterBottom:!0,noWrap:!0},"A\xf1adir Una nota"),o.a.createElement(x.a,{id:"outlined-textarea",label:"Escribe tu mensaje",placeholder:"Apunte...",multiline:!0,className:e.textField,margin:"normal",variant:"outlined",onChange:function(e){return y("message",e)},rows:10,fullWidth:!0}),o.a.createElement(x.a,{id:"outlined-textarea",label:"Etiquetas",placeholder:"Etiqueta1, Etiqueta2, Etiqueta3 ...",className:e.textField,margin:"normal",variant:"outlined",fullWidth:!0,onChange:function(e){return y("title",e)}}),o.a.createElement(_.a,{variant:"outlined",className:e.formControl},o.a.createElement(R.a,{ref:l,htmlFor:"outlined-notebook-native-simple"},"Lista de Cursos"),o.a.createElement(H.a,{native:!0,value:n.notebook,onChange:function(e){return y("notebook",e)},labelWidth:f,inputProps:{name:"notebook",id:"outlined-notebook-native-simple"}},o.a.createElement("option",{value:""}),o.a.createElement("option",{value:"Lenguajes Prog."},"Lenguajes Prog."),o.a.createElement("option",{value:"Experiencia Usuario"},"Experiencia Usuario"),o.a.createElement("option",{value:"Diseno S.Logicos"},"Diseno S.Logicos"))),o.a.createElement(u.a,{variant:"outlined",color:"primary",className:e.button,onClick:function(){if(""===n.notebook){var e=d.getNotes(),t=null!==e?JSON.parse(e):[];0===d.rowExists(n).length?(O(!1),0===t.length?t=[n]:t.push(n),d.setNotes(JSON.stringify(t)),k({type:"newNote",notes:t})):O(!0)}else{var a=d.getNotebooks(n.notebook),o=null!==a?JSON.parse(a):[];0===d.rowExists(n).length?(O(!1),0===o.length?o=[n]:o.push(n),d.set(n.notebook,JSON.stringify(o)),k({type:"newNote",notes:o})):O(!0)}}},"Guardar Nota"),o.a.createElement(Q,{open:h,setClose:function(){return O(!1)}}))},Z=a(340),ee=a(336),te=a(337),ae=Object(k.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},button:{margin:e.spacing(1)},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1)},dense:{marginTop:e.spacing(2)},menu:{width:200},formControl:{margin:e.spacing(1),width:"100%"}}}));function ne(){var e=b(),t=Object(i.a)(e,2),a=t[0],n=a.modal,r=a.edit,l=t[1],c=o.a.useRef(null),s=o.a.useState(0),m=Object(i.a)(s,1)[0],g=ae(),f=o.a.useState({category:"",message:"",title:""}),E=Object(i.a)(f,2),v=E[0],N=E[1],h=function(){l({type:"openModal",modal:!1})};function O(e,t){N(Object(p.a)(Object(p.a)({},v),{},Object(A.a)({},e,t.target.value)))}return o.a.useEffect((function(){if(null!==r){var e=d.findId(r);e.length>0&&N(e[0])}}),[r]),o.a.useEffect((function(){return function(){N({category:"",message:"",title:""})}}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(Z.a,{label:!0,open:n,onClose:h,"aria-labelledby":"form-dialog-title"},o.a.createElement(ee.a,{id:"form-dialog-title"},"Edit Note"),o.a.createElement(te.a,null,o.a.createElement(x.a,{value:void 0!==v&&v.title,id:"outlined-textarea",label:"Title",placeholder:"Write your title",className:g.textField,margin:"normal",variant:"outlined",fullWidth:!0,onChange:function(e){return O("title",e)}}),o.a.createElement(_.a,{variant:"outlined",className:g.formControl},o.a.createElement(R.a,{ref:c,htmlFor:"outlined-age-native-simple"},"Categoriasdsada"),o.a.createElement(H.a,{native:!0,value:void 0!==v&&v.category,onChange:function(e){return O("category",e)},labelWidth:m,inputProps:{name:"age",id:"outlined-age-native-simple"}},o.a.createElement("option",{value:""}),o.a.createElement("option",{value:"Family"},"Family"),o.a.createElement("option",{value:"Work"},"Work"),o.a.createElement("option",{value:"Friends"},"Friends"))),o.a.createElement(x.a,{value:void 0!==v&&v.message,id:"outlined-textarea",label:"Write your Message",placeholder:"Write your note",multiline:!0,className:g.textField,margin:"normal",variant:"outlined",onChange:function(e){return O("message",e)},rows:10,fullWidth:!0}),o.a.createElement(u.a,{variant:"outlined",color:"primary",className:g.button,onClick:function(){if(d.updateId(r,v)){l({type:"newNote",notes:[]});var e=d.findId(r)[0],t=JSON.parse(d.getNotebooks(""===e.notebook?"notes":e.notebook));l({type:"newNote",notes:t}),h()}}},"Edit Note"))))}var oe=a(120),re=a.n(oe);function le(){var e=b(),t=Object(i.a)(e,2),a=t[0],n=a.showModal,r=a.show,l=t[1],s=o.a.useState({category:"",message:"",title:""}),u=Object(i.a)(s,2),m=u[0],g=u[1],p=new Date,f=p.getFullYear()+"-"+(p.getMonth()+1)+"-"+p.getDate();return o.a.useEffect((function(){var e=d.findId(r);e.length>0&&g(e[0])}),[r]),o.a.useEffect((function(){return function(){g({category:"",message:"",title:""})}}),[r]),o.a.createElement(o.a.Fragment,null,void 0!==m&&o.a.createElement(Z.a,{fullWidth:!0,open:n,onClose:function(){l({type:"showMessage",showModal:!1})},"aria-labelledby":"form-dialog-title"},o.a.createElement(ee.a,{id:"form-dialog-title"},m.title),o.a.createElement(te.a,null,o.a.createElement(c.a,{color:"primary",variant:"caption"},"Fecha : ",f),o.a.createElement(O.a,null),o.a.createElement(re.a,{source:m.message,escapeHtml:!1}))))}var ie=Object(k.a)((function(e){return{root:{backgroundColor:"#EFF8FB",padding:e.spacing(3,2),width:"90%",margin:"0 auto",marginTop:100}}}));var ce=function(){var e=ie();return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{className:e.root},o.a.createElement(j.a,{container:!0,spacing:3},o.a.createElement(E,{initialState:v,reducer:N},o.a.createElement(o.a.Fragment,null,o.a.createElement(ne,null),o.a.createElement(le,null),o.a.createElement(j.a,{item:!0,xs:2},o.a.createElement(q,null)),o.a.createElement(j.a,{item:!0,xs:5},o.a.createElement(J,null)),o.a.createElement(j.a,{item:!0,xs:5},o.a.createElement(X,null)))))))};var se=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(ce,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[135,1,2]]]);
//# sourceMappingURL=main.25019860.chunk.js.map