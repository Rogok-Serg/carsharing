"use strict";(self.webpackChunkcarsharing=self.webpackChunkcarsharing||[]).push([[691],{664:function(n,e,t){t.r(e),t.d(e,{default:function(){return Q}});var i,r,o,s,a,c,l,d,p,x,f,h,u,g,b,m=t(439),y=t(168),j=t(444),Z=j.ZP.div(i||(i=(0,y.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 200;\n  width: 100%;\n  height: 100%;\n  background: rgba(46, 47, 66, 0.4);\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);\n"]))),k=j.ZP.div(r||(r=(0,y.Z)(["\n  position: absolute;\n  width: 541px;\n  height: 752px;\n  top: 50%;\n  left: 50%;\n  padding: 15px 40px 40px 40px;\n  transform: translate(-50%, -50%);\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.2),\n    0px 1px 1px rgba(0, 0, 0, 0.14);\n  border-radius: 24px;\n  background: #fff;\n"]))),v=j.ZP.button(o||(o=(0,y.Z)(["\n  border: none;\n  background: none;\n  color: #3470ff;\n  margin-bottom: 100px;\n  font-family: Manrope;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px; /* 150% */\n  text-decoration-line: underline;\n  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    color: #0b44cd;\n  }\n"]))),w=j.ZP.button(s||(s=(0,y.Z)(["\n  position: absolute;\n  border: none;\n  background: none;\n  top: 16px;\n  right: 16px;\n  font-size: 24px;\n  transition: background 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    background: rgba(18, 20, 23, 0.1);\n  }\n"]))),P=j.ZP.div(a||(a=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  // flex-wrap: wrap;\n  justify-content: center;\n"]))),z=j.ZP.div(c||(c=(0,y.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n"]))),C=j.ZP.span(l||(l=(0,y.Z)(["\n  color: #3470ff;\n"]))),S=j.ZP.div(d||(d=(0,y.Z)(["\nheight: 40px;\ndisplay: flex:\njustify-content: center;\ncolor: rgba(18, 20, 23, 0.50);\n// font-family: Manrope;\nfont-size: 12px;\nfont-style: normal;\nfont-weight: 400;\nline-height: 18px;\n"]))),L=t(791),E=t(184),I=function(n){var e=n.onClick;return(0,E.jsx)("div",{style:{textAlign:"center"},children:(0,E.jsxs)(v,{onClick:e,type:"button",children:[" ","Load more"]})})},M=t(37),N=j.ZP.ul(p||(p=(0,y.Z)(["\n  display: flex;\n  justify-content: center;\n  list-style-type: none;\n  flex-wrap: wrap;\n  column-gap: 29px;\n"]))),A=j.ZP.li(x||(x=(0,y.Z)(["\n  max-width: 264px;\n  margin-bottom: 50px;\n  object-fit: cover;\n"]))),B=j.ZP.img(f||(f=(0,y.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 14px;\n"]))),R=j.ZP.div(h||(h=(0,y.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n  margin-bottom: 8px;\n"]))),q=j.ZP.span(u||(u=(0,y.Z)(["\n  color: #3470ff;\n"]))),D=j.ZP.div(g||(g=(0,y.Z)(["\nheight: 40px;\ndisplay: flex:\njustify-content: center;\ncolor: rgba(18, 20, 23, 0.50);\n// font-family: Manrope;\nfont-size: 12px;\nfont-style: normal;\nfont-weight: 400;\nline-height: 18px;\n"]))),F=j.ZP.button(b||(b=(0,y.Z)(["\n  color: #fff;\n  display: flex;\n  width: 274px;\n  height: 44px;\n  padding: 12px 99px;\n  margin-top: 28px;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  border-radius: 12px;\n  background: #3470ff;\n  border: #fff;\n  transition: background 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    background: #0b44cd;\n  }\n"]))),G=function(n){var e=n.data,t=n.onClick;return document.addEventListener("keydown",(function(n){"Escape"===n.key&&t()})),(0,E.jsx)(Z,{children:(0,E.jsxs)(k,{children:[(0,E.jsx)(w,{onClick:t,children:"\xd7"}),(0,E.jsxs)(P,{children:[(0,E.jsx)("img",{src:e.img,alt:"",width:461}),(0,E.jsx)(z,{children:(0,E.jsxs)("p",{style:{margin:0,fontSize:13},children:[e.make," ",(0,E.jsx)(C,{children:e.model}),", ",e.year]})}),(0,E.jsx)(S,{children:(0,E.jsxs)("p",{style:{margin:0},children:[e.address.split(" ").slice(3,5)," | ",e.rentalCompany," |"," ",e.type," | ",e.make," | ",e.mileage.toLocaleString("en-IN")," ","| ",e.accessories[2]]})})]})]})})},H=function(n){var e=n.data,t=(0,L.useState)(!1),i=(0,m.Z)(t,2),r=i[0],o=i[1],s=(0,L.useState)(null),a=(0,m.Z)(s,2),c=a[0],l=a[1];return(0,E.jsxs)("div",{children:[r&&(0,E.jsx)(G,{onClick:function(){o(!1)},data:c}),(0,E.jsx)(N,{children:e.map((function(n){var e=n.address.split(" ").slice(3,5),t=(0,M.x0)();return(0,E.jsxs)(A,{children:[(0,E.jsx)("div",{style:{width:274,height:268,marginBottom:14},children:(0,E.jsx)(B,{src:n.img,alt:"",style:{backgroundSize:"cover"}})}),(0,E.jsxs)(R,{children:[(0,E.jsxs)("p",{style:{margin:0,fontSize:13},children:[n.make," ",(0,E.jsx)(q,{children:n.model}),", ",n.year]}),(0,E.jsx)("p",{style:{margin:0},children:n.rentalPrice})]}),(0,E.jsx)(D,{children:(0,E.jsxs)("p",{style:{margin:0},children:[e," | ",n.rentalCompany," | ",n.type," | ",n.make," |"," ",n.mileage.toLocaleString("en-IN")," | ",n.accessories[2]]})}),(0,E.jsx)(F,{onClick:function(){return function(n){l(n),o(!0)}(n)},type:"button",children:"Learn more"})]},t)}))})]})},J=t(434),K=t(97),O=function(n){return n.catalogStorage.catalog.items},Q=function(){var n=(0,J.v9)(O),e=(0,L.useState)(2),t=(0,m.Z)(e,2),i=t[0],r=t[1],o=(0,J.I0)();(0,L.useEffect)((function(){o((0,K.R)())}),[o]);return(0,E.jsxs)("div",{children:[(0,E.jsx)(H,{data:n}),(0,E.jsx)(I,{onClick:function(){r(i+1),function(n){o((0,K.t)(n))}(i)}})]})}}}]);
//# sourceMappingURL=691.54c7e9b4.chunk.js.map