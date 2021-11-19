(this["webpackJsonpgoit-react-hw-07-phonebook-"]=this["webpackJsonpgoit-react-hw-07-phonebook-"]||[]).push([[0],{13:function(t,e,n){t.exports={listItem:"ContactListItem_listItem__2yqNO",listItemText:"ContactListItem_listItemText__1y59s",button:"ContactListItem_button__qpOuc"}},23:function(t,e,n){t.exports={filterLabel:"Filter_filterLabel__2ZNSx",filterInput:"Filter_filterInput__AdX91"}},34:function(t,e,n){t.exports={list:"ContactList_list__2cE9S"}},75:function(t,e,n){},77:function(t,e,n){},78:function(t,e,n){"use strict";n.r(e);var r=n(18),a=function(t){return t.contacts},c=Object(r.a)([a,function(t){return t.filter}],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)||t.phone.includes(e)}))})),u=n(5),s=n.n(u),i=n(8),o=n(12),l=n.n(o);function b(t){return f.apply(this,arguments)}function f(){return(f=Object(i.a)(s.a.mark((function t(e){var n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.post("/contacts",e);case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function j(){return d.apply(this,arguments)}function d(){return(d=Object(i.a)(s.a.mark((function t(){var e,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.get("/contacts");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return O.apply(this,arguments)}function O(){return(O=Object(i.a)(s.a.mark((function t(e){var n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.delete("/contacts/".concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}l.a.defaults.baseURL="https://61957e7e74c1bd00176c6d8c.mockapi.io";var m=n(4),h=Object(m.c)("contact/fetchContacts",Object(i.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j();case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))),x=Object(m.c)("contact/addContacts",function(){var t=Object(i.a)(s.a.mark((function t(e){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),v=Object(m.c)("contact/deleteContacts",function(){var t=Object(i.a)(s.a.mark((function t(e){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(e);case 2:return t.abrupt("return",e);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),_=n(13),y=n.n(_),g=n(7),C=n(1);function w(t){var e=t.id,n=t.name,r=t.number,a=Object(g.b)();return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)("li",{className:y.a.listItem,children:[Object(C.jsx)("span",{className:y.a.listItemText,children:n}),Object(C.jsx)("span",{className:y.a.listItemText,children:r}),Object(C.jsx)("button",{className:y.a.button,type:"button",onClick:function(){return a(v(e))},children:"Delete"})]})})}var N=n(34),k=n.n(N),I=n(0),L=n.n(I);function A(){var t=Object(g.c)(c),e=Object(g.b)();return Object(I.useEffect)((function(){e(h())}),[e]),Object(C.jsxs)("ul",{className:k.a.list,children:[" ",t.map((function(t){var e=t.id,n=t.name,r=t.number;return Object(C.jsx)(w,{id:e,name:n,number:r},e)}))]})}var T=n(24),F=n(9),S=n.n(F);function z(){var t=Object(I.useState)(""),e=Object(T.a)(t,2),n=e[0],r=e[1],c=Object(I.useState)(""),u=Object(T.a)(c,2),s=u[0],i=u[1],o=Object(g.b)(),l=Object(g.c)((function(t){return a(t)})),b=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":r(a);break;case"number":i(a);break;default:return}};return Object(C.jsx)("div",{className:S.a.form,children:Object(C.jsxs)("form",{onSubmit:function(t){(t.preventDefault(),l.map((function(t){return t.name})).includes(n))?alert("Sorry,  ".concat(n," is already in contacs.")):(o(x({name:n,number:s})),r(""),i(""))},children:[Object(C.jsxs)("label",{className:S.a.label,children:["Name",Object(C.jsx)("input",{className:S.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:n,onChange:b})]}),Object(C.jsxs)("label",{className:S.a.label,children:["Number",Object(C.jsx)("input",{className:S.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:s,onChange:b})]}),Object(C.jsx)("button",{className:S.a.button,type:"submit",children:Object(C.jsx)("span",{className:S.a.btnText,children:"Add contact"})})]})})}var q=Object(m.b)("contact-filter"),E=n(23),Z=n.n(E),B=n(35),J=n.n(B);function M(){var t=Object(g.c)((function(t){return t.filter})),e=Object(g.b)(),n=J.a.generate();return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)("label",{htmlFor:n,className:Z.a.filterLabel,children:[Object(C.jsx)("h3",{children:"Find contacts by name"}),Object(C.jsx)("input",{type:"text",id:n,value:t,onChange:function(t){return e(q(t.target.value))},className:Z.a.filterInput})]})})}n(75);function D(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("h1",{children:"Phonebook"}),Object(C.jsx)(z,{}),Object(C.jsx)("h2",{children:"Contacts"}),Object(C.jsx)(M,{}),Object(C.jsx)(A,{})]})}var U,P,R=n(20),X=n(2),$=n(3),G=Object(m.d)([],(U={},Object(X.a)(U,x.fulfilled,(function(t,e){var n=e.payload;return[].concat(Object(R.a)(t),[n])})),Object(X.a)(U,v.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),Object(X.a)(U,h.fulfilled,(function(t,e){return e.payload})),U)),H=Object(m.d)("",Object(X.a)({},q,(function(t,e){return e.payload}))),K=Object(m.d)(!1,(P={},Object(X.a)(P,x.pending,(function(){return!0})),Object(X.a)(P,x.rejected,(function(){return!1})),Object(X.a)(P,x.fulfilled,(function(){return!1})),Object(X.a)(P,v.pending,(function(){return!0})),Object(X.a)(P,v.rejected,(function(){return!1})),Object(X.a)(P,v.fulfilled,(function(){return!1})),Object(X.a)(P,h.pending,(function(){return!0})),Object(X.a)(P,h.rejected,(function(){return!1})),Object(X.a)(P,h.fulfilled,(function(){return!1})),P)),Q=Object($.b)({contacts:G,filter:H,loading:K}),V=n(36),W=n(10),Y=[].concat(Object(R.a)(Object(m.e)({serializableCheck:{ignoredActions:[W.a,W.f,W.b,W.c,W.d,W.e]}})),[V.logger]),tt=Object(m.a)({reducer:Q,middleware:Y,devTools:!1}),et=n(17),nt=n.n(et);n(77);nt.a.render(Object(C.jsx)(L.a.StrictMode,{children:Object(C.jsx)(g.a,{store:tt,children:Object(C.jsx)(D,{})})}),document.getElementById("root"))},9:function(t,e,n){t.exports={form:"Contacts_form__2hfAr",label:"Contacts_label__LzAMT",input:"Contacts_input__1poBn",button:"Contacts_button__3NsEU"}}},[[78,1,2]]]);
//# sourceMappingURL=main.1413bcd0.chunk.js.map