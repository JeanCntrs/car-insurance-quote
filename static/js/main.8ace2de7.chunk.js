(this["webpackJsonpcar-insurance-quote"]=this["webpackJsonpcar-insurance-quote"]||[]).push([[0],{10:function(e,a,t){e.exports=t(17)},15:function(e,a,t){},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(6),c=t.n(l),o=(t(15),t(1)),s=t(2),m=t(4);function i(){var e=Object(s.a)(["\n    font-size: 2rem;\n    font-family: 'Slabo 27px', serif;\n"]);return i=function(){return e},e}var u=m.a.h3(i()),d=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement(u,{className:"my-3 mx-auto"},"Cotizador de Seguros")))},b=t(3),E=t(9),p=function(e){var a=e.message;return r.a.createElement("div",{className:"alert alert-dismissible alert-danger col-sm-6"},r.a.createElement("strong",null,a))};function f(){var e=Object(s.a)(["\n    width: 100%;\n    text-transform: uppercase;\n    font-weight: bold;\n    transition: background-image .3s ease;\n\n    &:hover {\n        background-image: linear-gradient(#f89558, #e27e3e 60%, #c77846) !important;\n    }\n"]);return f=function(){return e},e}var v=m.a.button(f()),g=function(e){var a=e.setSummary,t=e.setLoading,l=function(){for(var e=(new Date).getFullYear(),a=[],t=0;t<9;t++)a.push(e-t);return a}(),c=Object(n.useState)({brand:"",year:"",plan:""}),s=Object(o.a)(c,2),m=s[0],i=s[1],u=m.brand,d=m.year,f=m.plan,g=function(e){i(Object(E.a)({},m,Object(b.a)({},e.target.name,e.target.value)))},N=Object(n.useState)(!1),h=Object(o.a)(N,2),y=h[0],C=h[1];return r.a.createElement("form",{className:"mt-5 offset-sm-4",onSubmit:function(e){if(e.preventDefault(),""===u.trim()||""===d.trim()||""===f.trim())C(!0);else{C(!1);var n=25590;n-=3*function(e){return(new Date).getFullYear()-e}(d)*n/100;var r=function(e){var a;switch(e){case"americano":a=1.3;break;case"europeo":a=1.15;break;case"asi\xe1tico":a=1.05;break;default:a=1}return a}(u)*n,l=function(e){return"b\xe1sico"===e?1.2:1.5}(f),c=parseFloat(l*r).toFixed(2);t(!0),setTimeout((function(){t(!1),a({totalPlan:Number(c),data:m})}),3e3)}}},y?r.a.createElement(p,{message:"Todos los campos son obligatorios."}):null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"slcCarBrand"},"Marca:"),r.a.createElement("select",{id:"slcCarBrand",className:"form-control col-sm-6",name:"brand",value:u,onChange:g},r.a.createElement("option",{value:""},"Seleccione"),r.a.createElement("option",{value:"americano"},"Americano"),r.a.createElement("option",{value:"europeo"},"Europeo"),r.a.createElement("option",{value:"asi\xe1tico"},"Asi\xe1tico"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"slcCarYear"},"A\xf1o:"),r.a.createElement("select",{id:"slcCarYear",className:"form-control col-sm-6",name:"year",value:d,onChange:g},r.a.createElement("option",{value:""},"Seleccione"),l.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Plan:"),r.a.createElement("div",{className:"custom-control custom-radio"},r.a.createElement("input",{type:"radio",id:"rdbBasic",name:"plan",className:"custom-control-input",value:"b\xe1sico",checked:"b\xe1sico"===f,onChange:g}),r.a.createElement("label",{className:"custom-control-label",htmlFor:"rdbBasic"},"B\xe1sico")),r.a.createElement("div",{className:"custom-control custom-radio"},r.a.createElement("input",{type:"radio",id:"rdbComplete",name:"plan",className:"custom-control-input",value:"completo",checked:"completo"===f,onChange:g}),r.a.createElement("label",{className:"custom-control-label",htmlFor:"rdbComplete"},"Completo"))),r.a.createElement("div",{className:"col-sm-6 text-center"},r.a.createElement(v,{className:"btn btn-warning",type:"submit"},"Cotizar")))},N=function(e){var a=e.data,t=a.brand,n=a.year,l=a.plan;return r.a.createElement("div",{className:"alert alert-dismissible alert-primary offset-sm-3 col-sm-6 mt-4"},r.a.createElement("div",{className:"offset-sm-4"},r.a.createElement("strong",{className:"text-center offset-sm-2"},"Resumen"),r.a.createElement("ul",{className:"mt-2"},r.a.createElement("li",null,r.a.createElement("strong",null,"A\xf1o: "),n),r.a.createElement("li",{className:"text-capitalize"},r.a.createElement("strong",null,"Marca: "),t),r.a.createElement("li",{className:"text-capitalize"},r.a.createElement("strong",null,"Plan: "),l))))},h=function(e){var a=e.totalPlan;return r.a.createElement("div",{className:"alert alert-dismissible alert-success text-center offset-sm-3 col-sm-6 mt-4"},r.a.createElement("strong",null,"El total del plan es: $ "),a)},y=(t(16),function(){return r.a.createElement("div",{className:"spinner"},r.a.createElement("div",{className:"bounce1"}),r.a.createElement("div",{className:"bounce2"}),r.a.createElement("div",{className:"bounce3"}))}),C=function(){var e=Object(n.useState)({}),a=Object(o.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!1),s=Object(o.a)(c,2),m=s[0],i=s[1],u=t.totalPlan,b=t.data;return r.a.createElement(n.Fragment,null,r.a.createElement(d,null),r.a.createElement("div",{className:"container"},r.a.createElement(g,{setSummary:l,setLoading:i}),m?r.a.createElement(y,null):null,!m&&b?r.a.createElement(N,{data:b}):null,!m&&u?r.a.createElement(h,{totalPlan:u}):null))};c.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.8ace2de7.chunk.js.map