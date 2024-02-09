"use strict";(self.webpackChunkadminto_react=self.webpackChunkadminto_react||[]).push([[5042],{79333:function(e,n,t){var r=t(81694),a=t.n(r),s=t(9140),i=t(80184);n.Z=function(e){var n=e.variant,t=e.avatar,r=e.name,c=e.emailId,o=e.position;return(0,i.jsx)(s.Z,{children:(0,i.jsx)(s.Z.Body,{className:"widget-user",style:{padding:"10px"},children:(0,i.jsxs)("div",{className:"d-flex align-items-center",children:[(0,i.jsx)("div",{className:"flex-shrink-0 avatar-lg me-3",children:(0,i.jsx)("img",{src:t,className:"img-fluid rounded-circle",alt:"user"})}),(0,i.jsxs)("div",{className:"flex-grow-1 overflow-hidden",children:[(0,i.jsx)("h5",{className:"mt-0 mb-1",children:r}),(0,i.jsx)("p",{className:"text-muted mb-2 font-13 text-truncate",children:c}),(0,i.jsx)("small",{className:a()("text-"+n),children:(0,i.jsx)("b",{children:o})})]})]})})})}},61545:function(e,n,t){t.d(n,{Zw:function(){return s},n7:function(){return m},DE:function(){return i},GT:function(){return a},_u:function(){return c},Zz:function(){return o},xd:function(){return l},F5:function(){return d},Pu:function(){return h},Pr:function(){return u}});var r=new(t(42738).u);function a(e){return r.get("".concat("/getInspectionTemplate"),e)}function s(e){return r.create("".concat("/startInspection"),e)}function i(e){return r.create("".concat("/endInspection"),e)}function c(e){return r.create("".concat("/saveInspection"),e)}function o(e){return r.get("".concat("/certs"),e)}function l(e){return r.create("".concat("/getCertPDF"),e)}function d(e){return r.create("".concat("/cert/cancel"),e)}function u(e){return r.create("".concat("/cert/validate"),e)}function h(e){return r.create("".concat("/cert/save"),e)}function m(e){return r.create("".concat("/cert/sendEmail"),e)}},5042:function(e,n,t){t.r(n);var r=t(15861),a=t(1413),s=t(29439),i=t(64687),c=t.n(i),o=t(89743),l=t(2677),d=t(9140),u=t(21827),h=t(17858),m=t(99410),p=t(51649),f=t(72791),x=t(13966),v=t(97637),Z=t(3911),j=t(37893),g=t(90260),w=t(21830),b=t.n(w),_=t(11796),y=t(85066),C=t(23922),k=t(76821),N=t(61545),E=t(51691),I=t(51276),A=t.n(I),R=t(68586),S=t(79333),B=t(95262),L=t(80184);n.default=function(){var e,n=(0,y.UO)(),t=(0,f.useState)(!1),i=(0,s.Z)(t,2),w=i[0],I=i[1],O=(0,f.useState)(!1),D=(0,s.Z)(O,2),G=D[0],P=D[1],T=(0,f.useState)(!1),U=(0,s.Z)(T,2),M=U[0],F=U[1],V=(0,f.useState)(!1),q=(0,s.Z)(V,2),z=q[0],Y=q[1],K=(0,f.useState)(!1),J=(0,s.Z)(K,2),Q=J[0],H=J[1],W=(0,f.useState)({}),X=(0,s.Z)(W,2),$=X[0],ee=X[1],ne=(0,f.useState)([]),te=(0,s.Z)(ne,2),re=te[0],ae=te[1],se=(0,f.useState)([]),ie=(0,s.Z)(se,2),ce=ie[0],oe=ie[1],le=(0,f.useState)([]),de=(0,s.Z)(le,2),ue=de[0],he=de[1],me=(0,f.useState)([]),pe=(0,s.Z)(me,2),fe=pe[0],xe=pe[1],ve=(0,f.useState)([]),Ze=(0,s.Z)(ve,2),je=Ze[0],ge=Ze[1],we=(0,f.useState)([]),be=(0,s.Z)(we,2),_e=be[0],ye=be[1],Ce=(0,f.useState)([]),ke=(0,s.Z)(Ce,2),Ne=ke[0],Ee=ke[1],Ie=(0,f.useState)([]),Ae=(0,s.Z)(Ie,2),Re=Ae[0],Se=Ae[1],Be=(0,p.aF)(),Le=(0,s.Z)(Be,1)[0],Oe=(0,f.useState)([]),De=(0,s.Z)(Oe,2),Ge=De[0],Pe=De[1],Te=(0,f.useState)(0),Ue=(0,s.Z)(Te,2),Me=Ue[0],Fe=Ue[1],Ve=(0,f.useState)(!1),qe=(0,s.Z)(Ve,2),ze=qe[0],Ye=qe[1],Ke=(0,y.s0)(),Je=(0,f.useState)({}),Qe=(0,s.Z)(Je,2),He=Qe[0],We=Qe[1],Xe=(0,f.useRef)(),$e=(0,f.useCallback)((function(e,n){Pe(n),Fe(e),Ye(!0)}),[]),en=function(){Fe(0),Ye(!1)};(0,p.Tt)({title:"Detalle de inspecci\xf3n para certificado",breadCrumbItems:[{path:"/appraisal/inspection",label:"Certificado"},{path:"/appraisal/inspection",label:"Certificado",active:!0}]});var nn=function(e){e.length>0?(xe(e),ee((0,a.Z)((0,a.Z)({},$),{},{vehicle:(0,a.Z)((0,a.Z)({},$.vehicle),{},{brand:e[0].Make_Name})})),an(e[0].Make_ID),ye([])):xe([])},tn=function(e){e.length>0?(ye(e),ee((0,a.Z)((0,a.Z)({},$),{},{vehicle:(0,a.Z)((0,a.Z)({},$.vehicle),{},{model:e[0].Model_Name})}))):ye([])},rn=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,Z.v)({});case 2:n=e.sent,he(n.data.Results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),an=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,Z.U)(n);case 2:t=e.sent,ge(t.data.Results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),sn=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,j.cV)({vehicleTypeId:n});case 2:t=e.sent,Ee(t.data.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),cn=function(e){e.length>0?(sn(e[0].vehicle_type_id),oe(e),ee((0,a.Z)((0,a.Z)({},$),{},{vehicle_type:(0,a.Z)((0,a.Z)({},$.vehicle_type),{},{vector:e[0].vector}),vehicle:(0,a.Z)((0,a.Z)({},$.vehicle),{},{vehicle_type_id:e[0].vehicle_type_id})}))):oe([])},on=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n);case 2:return t=e.sent,e.next=5,t.blob();case 5:return r=e.sent,e.abrupt("return",new Promise((function(e){var n=new FileReader;n.readAsDataURL(r),n.onloadend=function(){var t=n.result;e(t)}})));case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),ln=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I(!0),e.next=3,hn();case 3:return e.next=5,dn();case 5:return e.next=7,rn();case 7:return Xe.current.clear(),e.next=10,(0,N.GT)({appraisalId:n});case 10:return 200===(t=e.sent).data.meta.code?Se(t.data.data):b().fire("Error",t.data.data.error.message,"error"),e.next=14,(0,_.kO)({appraisalId:n});case 14:if(200!==(r=e.sent).data.meta.code){e.next=24;break}return cn([r.data.data.vehicle_type]),nn([{Make_ID:99999,Make_Name:r.data.data.vehicle.brand}]),tn([{Model_ID:99999,Model_Name:r.data.data.vehicle.model}]),ee(r.data.data),e.next=22,on(r.data.data.sign_url_2);case 22:a=e.sent,Xe&&Xe.current.fromDataURL(a,{ratio:1,width:500,height:200,xOffset:0,yOffset:0});case 24:I(!1);case 25:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),dn=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,j.c3)({});case 2:n=e.sent,ae(n.data.data.map((function(e){return(0,a.Z)((0,a.Z)({},e),{},{status_color:"success"})})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,f.useEffect)((function(){ln(n.appraisalId)}),[]);var un=function(e){for(var n=atob(e.split(",")[1]),t=e.split(",")[0].split(":")[1].split(";")[0],r=new ArrayBuffer(n.length),a=new Uint8Array(r),s=0;s<n.length;s++)a[s]=n.charCodeAt(s);return new Blob([r],{type:t})},hn=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,N.Zz)({});case 2:t=e.sent,We(t.data.data.find((function(e){return e.cert_id===parseInt(n.id||"0")})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),mn=function(){if($.status){if($.inspected_for_one===Le.user_id)return!0;if($.inspected_for_two===Le.user_id)return!0}return!1},pn=function(){var e=(0,r.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b().fire({title:"\xbfEstas seguro de anular el certificado?",text:"",icon:"warning",showCancelButton:!0,confirmButtonColor:"#28bb4b",cancelButtonColor:"#f34e4e",confirmButtonText:"Si, Anular!"}).then(function(){var e=(0,r.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConfirmed){e.next=7;break}return I(!0),e.next=4,(0,N.F5)({cert_id:n.id});case 4:r=e.sent,I(!1),200===r.data.meta.code?Ke("/appraisal/certs",{replace:!0}):b().fire("Error",r.data.data.error.message,"error");case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),fn=function(){var e=(0,r.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b().fire({title:"\xbfEstas seguro de validar el certificado?",text:"",icon:"warning",showCancelButton:!0,confirmButtonColor:"#28bb4b",cancelButtonColor:"#f34e4e",confirmButtonText:"Si, Validar!"}).then(function(){var e=(0,r.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConfirmed){e.next=7;break}return I(!0),e.next=4,(0,N.Pr)({cert_id:n.id});case 4:r=e.sent,I(!1),200===r.data.meta.code?Ke("/appraisal/certs",{replace:!0}):b().fire("Error",r.data.data.error.message,"error");case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),xn=function(){var e=(0,r.Z)(c().mark((function e(){var t,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I(!0),t=Xe.current.toDataURL(),e.next=4,(0,g.DB)({file:un(t),description:"Firma de cliente 2",name:Date.now()+".png"});case 4:return r=e.sent,e.next=7,(0,N.Pu)({cert_id:He.cert_id,purpose:He.purpose,price:He.estimated_price,vinDoc:He.vin_doc,motorDoc:He.motor_doc,motorVeh:He.motor_veh,signUrl:r.data.data.url,attachs:$.attacheds});case 7:a=e.sent,console.log(a.data),200===a.data.meta.code?ln(n.appraisalId):b().fire("Error",a.data.data.error.message,"error"),I(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,L.jsxs)(L.Fragment,{children:[$.status&&(0,L.jsxs)(o.Z,{style:{marginTop:"70px"},hidden:"Recepcionado"===$.status,children:[(0,L.jsx)("h4",{className:"header-title",children:" Encargados de la inspecci\xf3n"}),$.inspectors.map((function(e){return(0,L.jsx)(l.Z,{xl:4,md:4,children:(0,L.jsx)(S.Z,{variant:"warning",avatar:e.profile_picture_url,name:e.name,emailId:e.email,position:e.user_type_name})})}))]}),(0,L.jsx)(o.Z,{children:(0,L.jsx)(l.Z,{lg:12,children:(0,L.jsx)(d.Z,{children:(0,L.jsxs)(d.Z.Body,{children:[(0,L.jsx)("h4",{className:"header-title",children:"Datos del certificado"}),(0,L.jsxs)(o.Z,{children:[(0,L.jsx)(l.Z,{lg:3,children:(0,L.jsxs)(u.Z.Group,{className:"mb-3",controlId:"validationCustom01",children:[(0,L.jsx)(u.Z.Label,{children:"Precio Final "}),(0,L.jsx)(u.Z.Control,{disabled:"Borrador"!==(He||{}).status,value:(He||{}).estimated_price||"",type:"text",onChange:function(){var e=(0,r.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:We((0,a.Z)((0,a.Z)({},He),{},{estimated_price:n.target.value}));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()})]})}),(0,L.jsx)(l.Z,{lg:9,children:(0,L.jsxs)(B.y,{label:"Proposito de certificado",type:"select",name:"motor_potency",containerClass:"mb-3",className:"form-select",value:(He||{}).purpose||"",onChange:function(){var e=(0,r.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:We((0,a.Z)((0,a.Z)({},He),{},{purpose:n.target.value}));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),children:[(0,L.jsx)("option",{value:"0",children:"Selecciona uno"}),(0,L.jsx)("option",{value:"VALOR SUGERIDO PARA DISTRIBUIDORA, YA REBAJADOS LOS GASTOS DE REPARACI\xd3N",children:"VALOR SUGERIDO PARA DISTRIBUIDORA, YA REBAJADOS LOS GASTOS DE REPARACI\xd3N"}),(0,L.jsx)("option",{value:"VALOR SUGERIDO PARA VENTA O COMPRA, YA REBAJADOS LOS GASTOS DE REPARACI\xd3N",children:"VALOR SUGERIDO PARA VENTA O COMPRA, YA REBAJADOS LOS GASTOS DE REPARACI\xd3N"})]},"select0")}),(0,L.jsx)(l.Z,{lg:3,children:(0,L.jsxs)(u.Z.Group,{className:"mb-3",controlId:"validationCustom01",children:[(0,L.jsx)(u.Z.Label,{children:"# Vin en documento "}),(0,L.jsx)(u.Z.Control,{disabled:"Borrador"!==(He||{}).status,value:(He||{}).vin_doc||"",type:"text",onChange:function(){var e=(0,r.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:We((0,a.Z)((0,a.Z)({},He),{},{vin_doc:n.target.value}));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()})]})}),(0,L.jsx)(l.Z,{lg:3,children:(0,L.jsxs)(u.Z.Group,{className:"mb-3",controlId:"validationCustom01",children:[(0,L.jsx)(u.Z.Label,{children:"# Motor en documento "}),(0,L.jsx)(u.Z.Control,{disabled:"Borrador"!==(He||{}).status,value:(He||{}).motor_doc||"",type:"text",onChange:function(){var e=(0,r.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:We((0,a.Z)((0,a.Z)({},He),{},{motor_doc:n.target.value}));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()})]})}),(0,L.jsx)(l.Z,{lg:3,children:(0,L.jsxs)(u.Z.Group,{className:"mb-3",controlId:"validationCustom01",children:[(0,L.jsx)(u.Z.Label,{children:"# Motor en vehiculo "}),(0,L.jsx)(u.Z.Control,{disabled:"Borrador"!==(He||{}).status,value:(He||{}).motor_veh||"",type:"text",onChange:function(){var e=(0,r.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:We((0,a.Z)((0,a.Z)({},He),{},{motor_veh:n.target.value}));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()})]})})]})]})})})}),(0,L.jsx)(o.Z,{children:(0,L.jsx)(l.Z,{lg:12,children:(0,L.jsx)(d.Z,{children:(0,L.jsxs)(d.Z.Body,{children:[(0,L.jsxs)("h4",{className:"header-title",onClick:function(){return H(!Q)},children:[" ",(0,L.jsx)("i",{className:Q?"mdi mdi-chevron-down me-1":"mdi mdi-chevron-right me-1"})," Fotos para el certificado"]}),(0,L.jsx)(h.Z,{in:Q,children:(0,L.jsx)("div",{children:(0,L.jsx)(o.Z,{children:$.attacheds&&$.attacheds.map((function(e,n){return(0,L.jsx)(l.Z,{lg:4,children:(0,L.jsxs)("div",{className:"img-container",children:[(0,L.jsx)("div",{className:"check-icon",children:(0,L.jsx)("i",{className:e.selected?"mdi mdi-check-circle-outline":"mdi mdi-checkbox-blank-circle-outline"})}),(0,L.jsx)("img",{className:"avatar rounded",src:e.url,onClick:function(){var t=(0,a.Z)({},$);t.attacheds[n]=(0,a.Z)((0,a.Z)({},e),{},{selected:!e.selected}),ee(t)},width:"100%",height:"300px",style:{margin:"2px"},alt:e.description},e.attached_id)]})})}))})})})]})})})}),(0,L.jsx)(o.Z,{style:{marginTop:"Recepcionado"===$.status?"70px":"0px"},children:(0,L.jsx)(l.Z,{lg:12,children:(0,L.jsx)(d.Z,{children:(0,L.jsxs)(d.Z.Body,{children:[(0,L.jsxs)("h4",{className:"header-title",onClick:function(){return P(!G)},children:[" ",(0,L.jsx)("i",{className:G?"mdi mdi-chevron-down me-1":"mdi mdi-chevron-right me-1"})," Informacion del vehiculo"]}),(0,L.jsx)(h.Z,{in:G,children:(0,L.jsx)("div",{children:(0,L.jsxs)(o.Z,{children:[(0,L.jsx)(l.Z,{lg:3,children:(0,L.jsxs)(u.Z.Group,{className:"mb-3",controlId:"validationCustom01",children:[(0,L.jsx)(u.Z.Label,{children:"Tipo de vehiculo"}),(0,L.jsx)(v.pY,{id:"vehicleType",labelKey:"name",multiple:!1,maxResults:4,onChange:cn,options:re,placeholder:"Escoge un tipo de vehiculo",selected:ce,disabled:"En inspecci\xf3n"!==$.status||!mn()})]})}),(0,L.jsx)(l.Z,{lg:3,children:(0,L.jsxs)(u.Z.Group,{className:"mb-3",controlId:"validationCustom01",children:[(0,L.jsx)(u.Z.Label,{children:"miles"===($.vehicle||{}).miles_type?"Millaje":"Kilometraje"}),(0,L.jsxs)(m.Z,{className:"mb-2",children:[(0,L.jsx)(m.Z.Text,{onClick:function(){"En inspecci\xf3n"===$.status&&mn()&&ee((0,a.Z)((0,a.Z)({},$),{},{vehicle:(0,a.Z)((0,a.Z)({},$.vehicle),{},{miles_type:"miles"===($.vehicle||{}).miles_type?"km":"miles"})}))},children:"miles"===($.vehicle||{}).miles_type?"Mi":"Km"}),(0,L.jsx)(u.Z.Control,{disabled:"En inspecci\xf3n"!==$.status||!mn(),value:($.vehicle||{}).miles||"",type:"text",onChange:function(){var e=(0,r.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ee((0,a.Z)((0,a.Z)({},$),{},{vehicle:(0,a.Z)((0,a.Z)({},$.vehicle),{},{miles:n.target.value})}));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()})]})]})}),(0,L.jsx)(l.Z,{lg:3,children:(0,L.jsxs)(u.Z.Group,{className:"mb-3",controlId:"validationCustom01",children:[(0,L.jsx)(u.Z.Label,{children:"Placa"}),(0,L.jsx)(u.Z.Control,{disabled:"En inspecci\xf3n"!==$.status||!mn(),value:($.vehicle||{}).plate||"",type:"text",onChange:function(){var e=(0,r.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ee((0,a.Z)((0,a.Z)({},$),{},{vehicle:(0,a.Z)((0,a.Z)({},$.vehicle),{},{plate:n.target.value})}));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()})]})}),(0,L.jsx)(l.Z,{lg:3,children:(0,L.jsxs)(u.Z.Group,{className:"mb-3",controlId:"validationCustom01",children:[(0,L.jsx)(u.Z.Label,{children:"VIN"}),(0,L.jsx)(u.Z.Control,{disabled:"En inspecci\xf3n"!==$.status||!mn(),value:($.vehicle||{}).vin||"",type:"text",onChange:function(){var e=(0,r.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ee((0,a.Z)((0,a.Z)({},$),{},{vehicle:(0,a.Z)((0,a.Z)({},$.vehicle),{},{vin:n.target.value})}));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),onBlur:function(){var e=(0,r.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,g.Sb)({vin:$.vehicle.vin});case 2:if(!e.sent.data.data.vehicle_id){e.next=6;break}return e.next=6,b().fire({title:"Ya existe un vehiculo con esta vin",icon:"info",showCancelButton:!0,confirmButtonColor:"#28bb4b",cancelButtonColor:"#f34e4e",confirmButtonText:"Entendido"});case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()})]})}),(0,L.jsx)(l.Z,{lg:3,children:(0,L.jsxs)(u.Z.Group,{className:"mb-3",controlId:"validationCustom01",children:[(0,L.jsx)(u.Z.Label,{children:"Marca"}),(0,L.jsx)(v.pY,{id:"brand",labelKey:"Make_Name",multiple:!1,maxResults:4,options:ue,allowNew:!0,onChange:nn,placeholder:"Escoge una marca...",selected:fe,disabled:"En inspecci\xf3n"!==$.status||!mn()})]})}),(0,L.jsx)(l.Z,{lg:3,children:(0,L.jsxs)(u.Z.Group,{className:"mb-3",controlId:"validationCustom01",children:[(0,L.jsx)(u.Z.Label,{children:"Modelo"}),(0,L.jsx)(v.pY,{id:"model",labelKey:"Model_Name",multiple:!1,maxResults:4,options:je,allowNew:!0,onChange:tn,selected:_e,placeholder:"Escoge un modelo...",disabled:"En inspecci\xf3n"!==$.status||!mn()})]})}),(0,L.jsx)(l.Z,{lg:3,children:(0,L.jsxs)(u.Z.Group,{className:"mb-3",controlId:"validationCustom01",children:[(0,L.jsx)(u.Z.Label,{children:"Motor"}),(0,L.jsx)(u.Z.Control,{disabled:"En inspecci\xf3n"!==$.status||!mn(),value:($.vehicle||{}).motor||"",type:"text",onChange:function(){var e=(0,r.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ee((0,a.Z)((0,a.Z)({},$),{},{vehicle:(0,a.Z)((0,a.Z)({},$.vehicle),{},{motor:n.target.value})}));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()})]})}),(0,L.jsx)(l.Z,{lg:3,children:(0,L.jsxs)(u.Z.Group,{className:"mb-3",controlId:"validationCustom01",children:[(0,L.jsx)(u.Z.Label,{children:"A\xf1o"}),(0,L.jsx)(u.Z.Control,{disabled:"En inspecci\xf3n"!==$.status||!mn(),value:($.vehicle||{}).year||"",type:"text",onChange:function(){var e=(0,r.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ee((0,a.Z)((0,a.Z)({},$),{},{vehicle:(0,a.Z)((0,a.Z)({},$.vehicle),{},{year:n.target.value})}));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()})]})}),(0,L.jsx)(l.Z,{lg:3,children:(0,L.jsxs)(u.Z.Group,{className:"mb-3",controlId:"validationCustom01",children:[(0,L.jsx)(u.Z.Label,{children:"Rines"}),(0,L.jsx)(u.Z.Control,{disabled:"En inspecci\xf3n"!==$.status||!mn(),value:($.vehicle||{}).wheels||"",type:"text",onChange:function(){var e=(0,r.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ee((0,a.Z)((0,a.Z)({},$),{},{vehicle:(0,a.Z)((0,a.Z)({},$.vehicle),{},{wheels:n.target.value})}));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()})]})}),(0,L.jsx)(l.Z,{lg:3,children:(0,L.jsxs)(u.Z.Group,{className:"mb-3",controlId:"validationCustom01",children:[(0,L.jsx)(u.Z.Label,{children:"Equipo de sonido"}),(0,L.jsx)(u.Z.Control,{disabled:"En inspecci\xf3n"!==$.status||!mn(),value:($.vehicle||{}).eq_sound||"",type:"text",onChange:function(){var e=(0,r.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ee((0,a.Z)((0,a.Z)({},$),{},{vehicle:(0,a.Z)((0,a.Z)({},$.vehicle),{},{eq_sound:n.target.value})}));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()})]})}),Ne.map((function(e,n){return(0,L.jsx)(l.Z,{lg:3,children:(0,L.jsxs)(u.Z.Group,{className:"mb-3",controlId:"validationCustom01",children:[(0,L.jsx)(u.Z.Label,{children:e.name}),(0,L.jsx)(u.Z.Control,{disabled:"En inspecci\xf3n"!==$.status||!mn(),value:((($.vehicle||{}).fields||{})[e.name]||{}).value||"",type:"text",onChange:function(){var n=(0,r.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(r=(0,a.Z)((0,a.Z)({},$),{},{vehicle:(0,a.Z)({},$.vehicle)})).vehicle.fields[e.name]?r.vehicle.fields[e.name].value=t.target.value:r.vehicle.fields[e.name]={value:t.target.value},ee(r);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()})]})},n)}))]})})})]})})})}),(0,L.jsx)(o.Z,{children:(0,L.jsx)(l.Z,{lg:12,children:(0,L.jsx)(d.Z,{children:(0,L.jsxs)(d.Z.Body,{children:[(0,L.jsxs)("h4",{className:"header-title",onClick:function(){return F(!M)},children:[" ",(0,L.jsx)("i",{className:M?"mdi mdi-chevron-down me-1":"mdi mdi-chevron-right me-1"})," Inspecci\xf3n mecanica"]}),(0,L.jsx)(h.Z,{in:M,children:(0,L.jsx)("div",{children:(0,L.jsx)(o.Z,{children:(0,L.jsx)(l.Z,{lg:12,children:(0,L.jsx)("div",{className:"inspection-sections",children:Object.keys(Re).map((function(e){return(0,L.jsxs)("div",{className:"inspection-section",children:[(0,L.jsx)("h3",{children:e}),(0,L.jsxs)("table",{className:"inspection-list col-12 text-center",children:[(0,L.jsx)("thead",{children:(0,L.jsxs)("tr",{children:[(0,L.jsx)("th",{className:"col-3 text-start",children:"Descripci\xf3n"}),(0,L.jsx)("th",{children:"Bueno"}),(0,L.jsx)("th",{children:"Da\xf1ado"}),(0,L.jsx)("th",{children:"Precio"}),(0,L.jsx)("th",{children:"Notas"}),(0,L.jsx)("th",{children:"Fotos"})]})}),(0,L.jsx)("tbody",{children:Re[e].map((function(n,t){return(0,L.jsxs)("tr",{children:[(0,L.jsx)("td",{className:"text-start",children:n.name}),(0,L.jsx)("td",{children:(0,L.jsx)(u.Z.Group,{className:"mb-1 ms-2",children:(0,L.jsx)(u.Z.Check,{checked:n.good||!1,disabled:"En inspecci\xf3n"!==$.status||!mn(),type:"checkbox",id:"1",name:"customRadio1",onChange:function(n){var r=(0,a.Z)({},Re);r[e]=Re[e].map((function(e,r){return r===t?(0,a.Z)((0,a.Z)({},e),{},{good:n.target.checked,damaged:(!n.target.checked||!e.damaged)&&e.damaged}):e})),Se(r)}})})}),(0,L.jsx)("td",{children:(0,L.jsx)(u.Z.Group,{className:"mb-1 ms-2",children:(0,L.jsx)(u.Z.Check,{checked:n.damaged||!1,disabled:"En inspecci\xf3n"!==$.status||!mn(),type:"checkbox",id:"2",name:"customRadio2",onChange:function(n){var r=(0,a.Z)({},Re);r[e]=Re[e].map((function(e,r){return r===t?(0,a.Z)((0,a.Z)({},e),{},{damaged:n.target.checked,good:(!n.target.checked||!e.good)&&e.good}):e})),Se(r)}})})}),(0,L.jsx)("td",{className:"col-1",children:(0,L.jsx)(u.Z.Group,{children:(0,L.jsx)(u.Z.Control,{value:n.price||0,isInvalid:n.damaged&&n.price<=0,disabled:"En inspecci\xf3n"!==$.status||!mn(),type:"text",id:"3",name:"customRadio3",onChange:function(n){var r=(0,a.Z)({},Re);r[e]=Re[e].map((function(e,r){return r===t?(0,a.Z)((0,a.Z)({},e),{},{price:parseFloat(n.target.value)}):e})),Se(r)}})})}),(0,L.jsx)("td",{children:(0,L.jsx)(u.Z.Group,{children:(0,L.jsx)(u.Z.Control,{value:n.notes||"",isInvalid:n.damaged&&(""===n.notes||!n.notes),disabled:"En inspecci\xf3n"!==$.status||!mn(),type:"text",id:"4",name:"customRadio4",onChange:function(n){var r=(0,a.Z)({},Re);r[e]=Re[e].map((function(e,r){return r===t?(0,a.Z)((0,a.Z)({},e),{},{notes:n.target.value}):e})),Se(r)}})})}),(0,L.jsxs)("td",{className:"col-3 display-flex",children:[(0,L.jsxs)("div",{className:"uploadImage",hidden:"En inspecci\xf3n"!==$.status||!mn(),children:[(0,L.jsx)("label",{htmlFor:"file-input"+e+"-"+t,children:(0,L.jsx)("img",{className:"avatar-md rounded",src:R,style:{pointerEvents:"none"},alt:""})}),(0,L.jsx)("input",{id:"file-input"+e+"-"+t,type:"file",onChange:function(n){var r=new FileReader;r.onload=function(n){var r=n.target.result;if(r){var s=(0,a.Z)({},Re);s[e]=Re[e].map((function(e,n){return n===t?(0,a.Z)((0,a.Z)({},e),{},{images:(e.images||[]).concat(r)}):e})),Se(s)}},n.target.files&&n.target.files.length>0&&r.readAsDataURL(n.target.files[0])}})]}),(n.images||[]).map((function(e,t){return(0,L.jsx)("img",{className:"avatar-md rounded",src:e,onClick:function(){return $e(t,n.images||[])},width:"300",style:{margin:"2px"},alt:""},t)})),ze&&(0,L.jsx)(k.Z,{src:Ge||[],currentIndex:Me,disableScroll:!0,closeOnClickOutside:!0,onClose:en})]})]},e+t)}))})]})]},e)}))})})})})})]})})})}),(0,L.jsx)(o.Z,{children:(0,L.jsx)(l.Z,{lg:12,children:(0,L.jsx)(d.Z,{children:(0,L.jsxs)(d.Z.Body,{children:[(0,L.jsxs)("h4",{className:"header-title",onClick:function(){return Y(!z)},children:[" ",(0,L.jsx)("i",{className:z?"mdi mdi-chevron-down me-1":"mdi mdi-chevron-right me-1"})," Inspeccion Fisica"]}),(0,L.jsx)(h.Z,{in:z,children:(0,L.jsx)("div",{children:$.appraisal_id&&(0,L.jsx)(E.Z,{allowPrices:!0,allowEdit:"En inspecci\xf3n"===$.status&&mn(),appraisalId:$.appraisal_id,status:$.status,vehicleType:null===(e=$.vehicle_type)||void 0===e?void 0:e.vector})})})]})})})}),(0,L.jsx)(o.Z,{hidden:"Por recepcionar"===$.status,children:(0,L.jsx)(l.Z,{lg:12,children:(0,L.jsx)(d.Z,{children:(0,L.jsxs)(d.Z.Body,{children:[(0,L.jsxs)("div",{className:"d-flex justify-content-center align-items-center mb-2",children:[(0,L.jsx)("h4",{className:"header-title",children:"Firma del cliente"}),(0,L.jsxs)(C.rU,{hidden:"Borrador"!==He.status,to:"",className:"btn btn-blue rounded-pill w-md waves-effect waves-light ms-2",onClick:(0,r.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Xe.current.clear();case 1:case"end":return e.stop()}}),e)}))),children:[(0,L.jsx)("i",{className:"mdi mdi-eraser me-1"}),"Limpiar"]})]}),(0,L.jsx)("div",{className:" d-flex justify-content-center",children:(0,L.jsx)(A(),{ref:Xe,penColor:"Borrador"!==He.status?"white":"black",canvasProps:{width:500,height:200,className:"sigCanvas d-flex justify-content-center"}})})]})})})}),(0,L.jsx)(o.Z,{className:"sticky-buttons",children:(0,L.jsxs)(l.Z,{children:[(0,L.jsxs)(C.rU,{to:"#",className:"btn btn-blue rounded-pill w-md waves-effect waves-light mb-3",onClick:(0,r.Z)(c().mark((function e(){var t,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I(!0),e.next=3,(0,N.xd)({certId:n.id});case 3:t=e.sent,console.log(t.data),r=new Blob([un(t.data.data)],{type:"application/pdf"}),a=URL.createObjectURL(r),window.open(a,"blank"),I(!1);case 9:case"end":return e.stop()}}),e)}))),children:[(0,L.jsx)("i",{className:"mdi mdi-eye me-1"}),"Vista Previa"]}),(0,L.jsxs)(C.rU,{hidden:"Borrador"!==(He||{}).status,to:"#",onClick:function(){xn()},className:"btn btn-blue rounded-pill w-md waves-effect waves-light mb-3 ms-3",children:[(0,L.jsx)("i",{className:"mdi mdi-content-save me-1"}),"Guardar"]}),(0,L.jsxs)(C.rU,{hidden:"Borrador"!==(He||{}).status,to:"#",onClick:function(){fn()},className:"btn btn-success rounded-pill w-md waves-effect waves-light mb-3 ms-3",children:[(0,L.jsx)("i",{className:"mdi mdi-check me-1"}),"Validar"]}),(0,L.jsxs)(C.rU,{hidden:"Validado"!==(He||{}).status,to:"#",onClick:(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I(!0),e.next=3,(0,N.n7)({certId:He.cert_id});case 3:n=e.sent,I(!1),200===n.data.meta.code?b().fire("Correo enviado","Se envio un correo con el certificado","success"):b().fire("Error al enviar correo",n.data.meta.message,"error");case 6:case"end":return e.stop()}}),e)}))),className:"btn btn-blue rounded-pill w-md waves-effect waves-light mb-3 ms-3",children:[(0,L.jsx)("i",{className:"mdi mdi-email-send me-1"}),"Enviar correo"]}),(0,L.jsxs)(C.rU,{hidden:"Validado"!==(He||{}).status,to:"#",onClick:function(){pn()},className:"btn btn-danger rounded-pill w-md waves-effect waves-light mb-3 ms-3",children:[(0,L.jsx)("i",{className:"mdi mdi-close me-1"}),"Anular"]})]})}),(0,L.jsx)(x.Z,{loading:w})]})}},76821:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(29439),a=t(72791);var s="styles-module_wrapper__1I_qj",i="styles-module_content__2jwZj",c="styles-module_slide__1zrfk",o="styles-module_image__2hdkJ",l="styles-module_close__2I1sI",d="styles-module_navigation__1pqAE",u="styles-module_prev__KqFRp",h="styles-module_next__1uQwZ";!function(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!==typeof document){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===t&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".styles-module_wrapper__1I_qj {\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  position: fixed;\n  padding: 0px 60px 0px 60px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  box-sizing: border-box;\n}\n\n.styles-module_content__2jwZj {\n  margin: auto;\n  padding: 0;\n  width: 90%;\n  height: 100%;\n  max-height: 100%;\n  text-align: center;\n}\n\n.styles-module_slide__1zrfk {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.styles-module_image__2hdkJ {\n  max-height: 100%;\n  max-width: 100%;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n}\n\n.styles-module_close__2I1sI {\n  color: white;\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  font-size: 40px;\n  font-weight: bold;\n  opacity: 0.2;\n  cursor: pointer;\n}\n\n.styles-module_close__2I1sI:hover {\n  opacity: 1;\n}\n\n.styles-module_navigation__1pqAE {\n  height: 80%;\n  color: white;\n  cursor: pointer;\n  position: absolute;\n  font-size: 60px;\n  line-height: 60px;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  opacity: 0.2;\n  padding: 0 15px;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n}\n\n.styles-module_navigation__1pqAE:hover {\n  opacity: 1;\n}\n\n@media (hover: none) {\n  .styles-module_navigation__1pqAE:hover {\n    opacity: 0.2;\n  }\n}\n\n.styles-module_prev__KqFRp {\n  left: 0;\n}\n\n.styles-module_next__1uQwZ {\n  right: 0;\n}\n\n@media (max-width: 900px) {\n  .styles-module_wrapper__1I_qj {\n    padding: 0;\n  }\n}\n");var m=function(e){var n,t=(0,a.useState)(null!==(n=e.currentIndex)&&void 0!==n?n:0),m=(0,r.Z)(t,2),p=m[0],f=m[1],x=(0,a.useCallback)((function(n){var t=(p+n)%e.src.length;t<0&&(t=e.src.length-1),f(t)}),[p]),v=(0,a.useCallback)((function(n){var t;if(n.target&&e.closeOnClickOutside){var r="ReactSimpleImageViewer"===n.target.id,a=n.target.classList.contains("react-simple-image-viewer__slide");(r||a)&&(n.stopPropagation(),null===(t=e.onClose)||void 0===t||t.call(e))}}),[e.onClose]),Z=(0,a.useCallback)((function(n){var t;"Escape"===n.key&&(null===(t=e.onClose)||void 0===t||t.call(e)),["ArrowLeft","h"].includes(n.key)&&x(-1),["ArrowRight","l"].includes(n.key)&&x(1)}),[e.onClose,x]),j=(0,a.useCallback)((function(e){e.wheelDeltaY>0?x(-1):x(1)}),[x]);return(0,a.useEffect)((function(){return document.addEventListener("keydown",Z),e.disableScroll||document.addEventListener("wheel",j),function(){document.removeEventListener("keydown",Z),e.disableScroll||document.removeEventListener("wheel",j)}}),[Z,j]),a.createElement("div",{id:"ReactSimpleImageViewer",className:"".concat(s," react-simple-image-viewer__modal"),onKeyDown:Z,onClick:v,style:e.backgroundStyle},a.createElement("span",{className:"".concat(l," react-simple-image-viewer__close"),onClick:function(){var n;return null===(n=e.onClose)||void 0===n?void 0:n.call(e)}},e.closeComponent||"\xd7"),e.src.length>1&&a.createElement("span",{className:"".concat(d," ").concat(u," react-simple-image-viewer__previous"),onClick:function(){return x(-1)}},e.leftArrowComponent||"\u276e"),e.src.length>1&&a.createElement("span",{className:"".concat(d," ").concat(h," react-simple-image-viewer__next"),onClick:function(){return x(1)}},e.rightArrowComponent||"\u276f"),a.createElement("div",{className:"".concat(i," react-simple-image-viewer__modal-content"),onClick:v},a.createElement("div",{className:"".concat(c," react-simple-image-viewer__slide")},a.createElement("img",{className:o,src:e.src[p],alt:""}))))}},68586:function(e,n,t){e.exports=t.p+"static/media/photo.734f28e026e4a03eba5f.png"}}]);
//# sourceMappingURL=5042.521f1f37.chunk.js.map