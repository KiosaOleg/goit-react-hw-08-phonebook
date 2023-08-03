"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[137],{8137:function(n,e,r){r.r(e),r.d(e,{default:function(){return $}});var t,a,o,i,s=r(2791),l=r(9434),c=r(7490),d=r(9439),u=r(5984),p=r(6916),x=function(n){return n.contacts.items},b=function(n){return n.filter},m=(0,p.P1)([x,b],(function(n,e){return"string"!==typeof e||""===e.trim()?n:n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),g=r(2007),f=r.n(g),h=r(8617),v=r(168),j=r(7686),k=j.Z.label(t||(t=(0,v.Z)(["\n  margin-right: 15px;\n"]))),w=j.Z.input(a||(a=(0,v.Z)(["\n  margin-left: 3px;\n  background-color: transparent;\n  border: none;\n  border-bottom: 2px solid #e8e8e8;\n\n  &:hover,\n  &:focus {\n    background-color: transparent;\n    outline: none;\n    border: none;\n    border-bottom: 2px solid #e8e8e8;\n  }\n"]))),Z=j.Z.button(o||(o=(0,v.Z)(["\n  max-height: 25px;\n  margin-left: 10px;\n  border: 1px solid #a7a7a7ec;\n  border-radius: 5px;\n  transition: all 250ms;\n\n  &:hover {\n    color: #ffffff;\n    background: rgb(255, 111, 174);\n    background: linear-gradient(\n      27deg,\n      rgba(255, 111, 174, 1) 0%,\n      rgba(98, 170, 255, 1) 100%\n    );\n    box-shadow: rgb(255, 254, 254) 0px 0px 3px;\n  }\n"]))),y=r(184);function C(){var n=(0,s.useState)(""),e=(0,d.Z)(n,2),r=e[0],t=e[1],a=(0,s.useState)(""),o=(0,d.Z)(a,2),i=o[0],p=o[1],b=(0,u.x0)(),m=(0,u.x0)(),g=(0,l.v9)(x),f=(0,l.I0)(),v=function(n){var e=n.currentTarget,r=e.name,a=e.value;switch(r){case"name":t(a);break;case"number":p(a);break;default:return}},j=function(){t(""),p("")};return(0,y.jsx)("div",{children:(0,y.jsxs)("form",{action:"",onSubmit:function(n){n.preventDefault();var e={name:r,number:i},t=g.some((function(n){return n.name.toLowerCase()===r.toLowerCase()}));t?alert("".concat(r," is already in contact")):f((0,c.uK)(e)),j()},children:[(0,y.jsxs)(k,{htmlFor:b,children:["Name:",(0,y.jsx)(w,{type:"text",name:"name",pattern:"^[A-Za-z\\u0080-\\uFFFF ']+$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:r,onChange:v,id:b,placeholder:"Please write name"})]}),(0,y.jsxs)("label",{htmlFor:m,children:["Number:",(0,y.jsx)(w,{type:"tel",name:"number",pattern:"^(\\+?[0-9.\\(\\)\\-\\s]*)$",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:i,onChange:v,id:m,placeholder:"Please write number"})]}),(0,y.jsx)(Z,{tupe:"submit",children:(0,y.jsx)(h.VcF,{size:16})})]})})}C.prototypes={name:f().string.isRequired,number:f().string.isRequired,onSubmit:f().func.isRequired};var F=j.Z.input(i||(i=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-left: auto;\n  margin-right: auto;\n\n  background-color: transparent;\n  border: none;\n  border-bottom: 2px solid #e8e8e8;\n  &:hover,\n  &:focus {\n    background-color: transparent;\n    outline: none;\n    border: none;\n    border-bottom: 2px solid #e8e8e8;\n  }\n\n  ::placeholder {\n    color: #000000;\n    font-size: 12px;\n    font-style: italic;\n    text-align: center;\n  }\n"]))),q=r(5638);function z(){var n=(0,l.I0)(),e=(0,l.v9)(b);return(0,y.jsx)("div",{children:(0,y.jsx)(F,{type:"text",name:e,value:e,onChange:function(e){n((0,q.T)(e.target.value))},placeholder:"Please write name"})})}var P,I,L,S,_,A=r(5988),N=j.Z.ul(P||(P=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 30px;\n"]))),R=j.Z.li(I||(I=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  padding: 10px 0;\n  margin: 5px 0;\n  width: 100%;\n  border-radius: 5px;\n  background-color: #ffffff;\n  box-shadow: rgb(0, 0, 0) 0px 1px 5px;\n  transition: all 300ms;\n\n  &:hover {\n    background: rgb(255, 111, 174);\n    background: linear-gradient(\n      27deg,\n      rgba(255, 111, 174, 1) 0%,\n      rgba(98, 170, 255, 1) 100%\n    );\n    scale: 1.05;\n    color: white;\n    box-shadow: rgba(0, 0, 0, 0.885) 0px 7px 10px;\n  }\n  &:hover img {\n    box-shadow: rgba(255, 255, 255, 0.9) 0px 0px 10px;\n  }\n"]))),B=j.Z.img(L||(L=(0,v.Z)(["\n  margin-left: 10px;\n  width: 40px;\n  border-radius: 50px;\n  transition: all 250ms;\n"]))),E=j.Z.p(S||(S=(0,v.Z)(["\n  margin-left: 15px;\n"]))),K=j.Z.button(_||(_=(0,v.Z)(["\n  max-height: 25px;\n  margin-left: auto;\n  margin-right: 5px;\n  margin-right: 15px;\n  border: 1px solid #a7a7a7ec;\n  border-radius: 5px;\n\n  /* background-color: transparent; */\n  transition: all 250ms;\n\n  &:hover {\n    color: #ffffff;\n    background: rgb(255, 111, 174);\n    background: linear-gradient(\n      27deg,\n      rgba(255, 111, 174, 1) 0%,\n      rgba(98, 170, 255, 1) 100%\n    );\n    box-shadow: rgb(255, 254, 254) 0px 0px 3px;\n  }\n"])));function T(){var n=(0,l.v9)(m),e=(0,l.I0)(),r={visible:function(n){return{opacity:1,y:0,transition:{delay:.1*n}}},hidden:{opacity:0,y:-100}};return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(N,{children:n.map((function(n,t){var a=n.id,o=n.name,i=n.number,s=n.avatar;return(0,y.jsx)(A.E.div,{variants:r,initial:"hidden",animate:"visible",custom:t,children:(0,y.jsxs)(R,{children:[(0,y.jsx)(B,{src:s||"https://cdn-icons-png.flaticon.com/512/2922/2922506.png",alt:"avatar"}),(0,y.jsxs)(E,{children:[o,": ",i]}),(0,y.jsx)(K,{type:"button",onClick:function(){return e((0,c.GK)(a))},children:(0,y.jsx)(h.Bhs,{size:20})})]})},a)}))})})}function $(){var n=(0,l.I0)();return(0,s.useEffect)((function(){n((0,c.yF)())}),[n]),(0,y.jsxs)("div",{children:[(0,y.jsx)("title",{children:"Your contacts"}),(0,y.jsx)(C,{}),(0,y.jsx)(z,{}),(0,y.jsx)(T,{})]})}}}]);
//# sourceMappingURL=137.0782954a.chunk.js.map