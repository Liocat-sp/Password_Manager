(this["webpackJsonppassword-manager"]=this["webpackJsonppassword-manager"]||[]).push([[11],{67:function(e,a,t){},96:function(e,a,t){"use strict";t.r(a);var n=t(37),r=t.n(n),l=t(38),s=t(7),o=t(0),c=t.n(o),i=t(61),u=t(46),p=t(47),m=t(41),d=t(36),E=(t(67),t(1)),v=t(44),b=t(45);a.default=function(){var e=Object(o.useState)(null),a=Object(s.a)(e,2),t=a[0],n=a[1],h=Object(E.f)(),g=Object(p.a)({name:{value:"",isVallid:!1},email:{value:"",isValid:!1},password:{value:"",isValid:!1}},!1),O=g.state,f=g.onInputChange,w=function(){var e=Object(l.a)(r.a.mark((function e(a){var t,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_BACKEND,"/user/signup"),{method:"POST",body:JSON.stringify({name:O.inputs.name.value,email:O.inputs.email.value,password:O.inputs.password.value}),headers:{"Content-Type":"application/json"}});case 4:return t=e.sent,e.next=7,t.json();case 7:if(l=e.sent,t.ok){e.next=10;break}throw new Error(l.message);case 10:h.replace("/auth/login"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),n(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(a){return e.apply(this,arguments)}}(),S=function(){n(null)};return c.a.createElement(c.a.Fragment,null,t&&c.a.createElement(c.a.Fragment,null,c.a.createElement(v.a,{onClose:S}),c.a.createElement(b.a,{title:"Error Occured",message:t,onClose:S})),c.a.createElement(i.a,null,c.a.createElement("h1",{className:"Auth-Login__pg"},"Signup"),c.a.createElement("form",{className:"Auth-Signup"},c.a.createElement(u.a,{id:"name",element:"input",type:"text",label:"Name",validators:[Object(m.c)()],onInput:f,placeholder:"Your Name",errorText:"Please enter your Name."}),c.a.createElement(u.a,{id:"email",element:"input",type:"text",label:"Email",validators:[Object(m.c)(),Object(m.a)()],onInput:f,placeholder:"Your Email",errorText:"Please enter valid Email."}),c.a.createElement(u.a,{id:"password",element:"input",type:"password",label:"Password",see:!0,validators:[Object(m.b)(8)],onInput:f,placeholder:"Your Password",errorText:"Please enter valid Password(length>=8)."})),c.a.createElement("div",{className:"Auth-signup-button"},c.a.createElement(d.a,{disabled:!O.isValid,onClick:w},"Signup"),c.a.createElement(d.a,{to:"/auth/login",border:!0},"Have An Account"))))}}}]);
//# sourceMappingURL=11.4ca114aa.chunk.js.map