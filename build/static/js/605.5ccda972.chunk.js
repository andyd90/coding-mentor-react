"use strict";(self.webpackChunkshopee=self.webpackChunkshopee||[]).push([[605],{7605:function(s,e,a){a.r(e);var n=a(4942),l=a(8152),t=a(2791),o=a(1895),c=a(4569),i=a.n(c),r=a(184);e.default=function(){var s=(0,t.useState)(""),e=(0,l.Z)(s,2),a=e[0],c=e[1],d=(0,t.useState)(""),h=(0,l.Z)(d,2),m=h[0],u=h[1],p=(0,t.useState)(),w=(0,l.Z)(p,2),f=w[0],g=w[1],v=(0,t.useState)(""),j=(0,l.Z)(v,2),x=j[0],b=j[1],k=(0,t.useState)(),N=(0,l.Z)(k,2),C=N[0],Z=N[1],S=(0,t.useState)(null),y=(0,l.Z)(S,2),P=y[0],F=y[1];(0,t.useEffect)((function(){g(m.length>=6),Z(m===x)}),[m,x]);return(0,r.jsxs)(r.Fragment,{children:[P&&(0,r.jsx)(o.Z,{title:P.title,message:P.message,onClose:function(){return F(null)}}),(0,r.jsxs)("div",{className:"p-4 bg-white",children:[(0,r.jsx)("h5",{children:"\u0110\u1ed5i m\u1eadt kh\u1ea9u"}),(0,r.jsx)("p",{children:"\u0110\u1ec3 b\u1ea3o m\u1eadt t\xe0i kho\u1ea3n, vui l\xf2ng kh\xf4ng chia s\u1ebb m\u1eadt kh\u1ea9u cho ng\u01b0\u1eddi kh\xe1c"}),(0,r.jsx)("div",{className:"divider mb-3"}),(0,r.jsxs)("div",{className:"mb-3 row",children:[(0,r.jsx)("label",{htmlFor:"name",className:"col-sm-3 col-form-label",children:"M\u1eadt kh\u1ea9u hi\u1ec7n t\u1ea1i"}),(0,r.jsx)("div",{className:"col-sm-9",children:(0,r.jsx)("input",{type:"password",className:"form-control",id:"password",onChange:function(s){return c(s.target.value)}})})]}),(0,r.jsxs)("div",{className:"mb-3 row",children:[(0,r.jsx)("label",{htmlFor:"newPassword",className:"col-sm-3 col-form-label",children:"M\u1eadt kh\u1ea9u m\u1edbi"}),(0,r.jsxs)("div",{className:"col-sm-9",children:[(0,r.jsx)("input",{type:"password",className:"form-control ".concat(f?"is-valid":"is-invalid"),id:"newPassword",onChange:function(s){return u(s.target.value)}}),(0,r.jsx)("div",{className:"invalid-feedback",children:"Password must have at least 6 characters"})]})]}),(0,r.jsxs)("div",{className:"mb-3 row",children:[(0,r.jsx)("label",{htmlFor:"confirmPassword",className:"col-sm-3 col-form-label",children:"X\xe1c nh\u1eadn m\u1eadt kh\u1ea9u"}),(0,r.jsxs)("div",{className:"col-sm-9",children:[(0,r.jsx)("input",{type:"password",className:"form-control ".concat(C?"is-valid":"is-invalid"),id:"confirmPassword",onChange:function(s){return b(s.target.value)}}),(0,r.jsx)("div",{className:"invalid-feedback",children:"Confirm password does not match new password"})]})]}),(0,r.jsx)("div",{className:"mb-3 row justify-content-center",children:(0,r.jsx)("button",{className:"btn bg-primary w-25 text-white",onClick:function(){F(null),i().put("https://shopee-nodejs.herokuapp.com/api/user/change-password",{password:a,newPassword:m},{headers:(0,n.Z)({},"x-auth-token",localStorage.getItem("token"))}).then((function(s){console.log(s),F({title:"Change password successfully",message:"Your password has been changed"})})).catch((function(s){console.log(s),F({title:"Change password failed",message:s.response.data})}))},disabled:!f||!C,children:"X\xe1c nh\u1eadn"})})]})]})}}}]);
//# sourceMappingURL=605.5ccda972.chunk.js.map