(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[779],{7779:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Z}});var r,a,s=t(2791),o=t(9434),i=t(4270),c=function(e){return e.contacts.items},l=function(e){return e.contacts.isLoading},u=function(e){return e.filter},d=t(208),h=t(184),f=function(e){var n=e.contact,t=(0,o.I0)();return(0,h.jsxs)("div",{children:[(0,h.jsx)("button",{type:"button",onClick:function(){return t((0,d.deleteContact)(n.id))},children:"Delete"}),(0,h.jsxs)("span",{children:[n.name,": ",n.number]})]})},m=t(168),x=t(6444),p=x.ZP.li(r||(r=(0,m.Z)(["\n  font-size: 24px;\n  width: 500px;\n  display: flex;\n  justify-content: space-between;\n"]))),b=function(){var e=(0,o.v9)(c),n=(0,o.v9)(u),t=e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return console.log("contacts: ",e),console.log("filter: ",n),console.log("visibleContacts: ",t),(0,h.jsx)("div",{children:(0,h.jsx)("ul",{children:t.map((function(e){return(0,h.jsx)(p,{children:(0,h.jsx)(f,{contact:e})},e.id)}))})})},j=t(7762),v=x.ZP.button(a||(a=(0,m.Z)(["\n  /* margin-left: 30px; */\n  font-size: 16px;\n"]))),g=t(3634),y=function(){var e=(0,o.I0)(),n=(0,o.v9)(c);return(0,h.jsxs)("form",{onSubmit:function(t){t.preventDefault();var r,a=t.target,s=a.elements.name.value,o=a.elements.number.value,i=(0,j.Z)(n);try{for(i.s();!(r=i.n()).done;){if(r.value.name===s)return void console.log("This contact exist in your list")}}catch(c){i.e(c)}finally{i.f()}e((0,g.uK)({name:s,number:o})),a.reset()},children:[(0,h.jsxs)("label",{htmlFor:"",children:["Name",(0,h.jsx)("br",{}),(0,h.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,h.jsx)("br",{}),(0,h.jsxs)("label",{htmlFor:"",children:["Number",(0,h.jsx)("br",{}),(0,h.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,h.jsx)("br",{}),(0,h.jsx)(v,{type:"submit",children:"Add contact"})]})},C=t(1273),A=function(e){var n=e.value,t=(0,o.I0)();return(0,h.jsxs)("label",{htmlFor:"",children:["Find contacts by name",(0,h.jsx)("br",{}),(0,h.jsx)("input",{type:"text",name:"filterContacts",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(e){var n=e.currentTarget.value;t((0,C.M)(n)),console.log("filter: ",n)}})]})};function Z(){var e=(0,o.I0)(),n=(0,o.v9)(l);return(0,s.useEffect)((function(){e((0,g.yF)())}),[e]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i.q,{children:(0,h.jsx)("title",{children:"Your contacts"})}),(0,h.jsx)(y,{}),(0,h.jsx)("div",{children:n&&"Request in progress..."}),(0,h.jsx)(A,{}),(0,h.jsx)(b,{})]})}},208:function(){}}]);
//# sourceMappingURL=779.ce15bbce.chunk.js.map