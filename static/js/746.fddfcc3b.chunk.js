(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[746],{9746:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Z}});var r,a,s=t(2791),o=t(9434),i=t(4270),c=t(6351),l=t(208),u=t(184),d=function(e){var n=e.contact,t=(0,o.I0)();return(0,u.jsxs)("div",{children:[(0,u.jsx)("button",{type:"button",onClick:function(){return t((0,l.deleteContact)(n.id))},children:"Delete"}),(0,u.jsxs)("span",{children:[n.name,": ",n.number]})]})},h=t(168),f=t(6444),m=f.ZP.li(r||(r=(0,h.Z)(["\n  font-size: 24px;\n  width: 500px;\n  display: flex;\n  justify-content: space-between;\n"]))),x=function(){var e=(0,o.v9)(c.selectContacts),n=(0,o.v9)(c.selectFilter),t=e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return console.log("contacts: ",e),console.log("filter: ",n),console.log("visibleContacts: ",t),(0,u.jsx)("div",{children:(0,u.jsx)("ul",{children:t.map((function(e){return(0,u.jsx)(m,{children:(0,u.jsx)(d,{contact:e})},e.id)}))})})},p=t(7762),b=f.ZP.button(a||(a=(0,h.Z)(["\n  /* margin-left: 30px; */\n  font-size: 16px;\n"]))),j=t(3634),v=function(e){return e.contacts.items},g=function(e){return e.contacts.isLoading},y=function(){var e=(0,o.I0)(),n=(0,o.v9)(v);return(0,u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var r,a=t.target,s=a.elements.name.value,o=a.elements.number.value,i=(0,p.Z)(n);try{for(i.s();!(r=i.n()).done;){if(r.value.name===s)return void console.log("This contact exist in your list")}}catch(c){i.e(c)}finally{i.f()}e((0,j.uK)({name:s,number:o})),a.reset()},children:[(0,u.jsxs)("label",{htmlFor:"",children:["Name",(0,u.jsx)("br",{}),(0,u.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,u.jsx)("br",{}),(0,u.jsxs)("label",{htmlFor:"",children:["Number",(0,u.jsx)("br",{}),(0,u.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,u.jsx)("br",{}),(0,u.jsx)(b,{type:"submit",children:"Add contact"})]})},C=t(6895),A=function(e){var n=e.value,t=(0,o.I0)();return(0,u.jsxs)("label",{htmlFor:"",children:["Find contacts by name",(0,u.jsx)("br",{}),(0,u.jsx)("input",{type:"text",name:"filterContacts",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(e){var n=e.currentTarget.value;t((0,C.changeFilter)(n)),console.log("filter: ",n)}})]})};function Z(){var e=(0,o.I0)(),n=(0,o.v9)(g);return(0,s.useEffect)((function(){e((0,j.yF)())}),[e]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i.q,{children:(0,u.jsx)("title",{children:"Your contacts"})}),(0,u.jsx)(y,{}),(0,u.jsx)("div",{children:n&&"Request in progress..."}),(0,u.jsx)(A,{}),(0,u.jsx)(x,{})]})}},6895:function(){},208:function(){},6351:function(){}}]);
//# sourceMappingURL=746.fddfcc3b.chunk.js.map