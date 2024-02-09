"use strict";(self.webpackChunkadminto_react=self.webpackChunkadminto_react||[]).push([[255],{9823:function(e,r,s){var a=s(1413),l=s(29439),n=s(45987),t=s(72791),c=s(99410),o=s(21827),i=s(81694),d=s.n(i),m=s(80184),h=["name","placeholder","refCallback","errors","control","register","className"],x=["type","name","placeholder","endIcon","register","errors","comp","rows","className","refCallback"],u=["type","label","name","placeholder","register","errors","comp","rows","className","refCallback"],p=["type","label","name","placeholder","register","errors","comp","className","children","refCallback"],j=["label","type","name","placeholder","endIcon","register","errors","control","className","labelClassName","containerClass","refCallback","children","action","rows"],b=function(e){var r=e.name,s=e.placeholder,i=e.refCallback,x=e.errors,u=(e.control,e.register),p=e.className,j=(0,n.Z)(e,h),b=(0,t.useState)(!1),Z=(0,l.Z)(b,2),f=Z[0],g=Z[1];return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(c.Z,{className:"mb-0",children:[(0,m.jsx)(o.Z.Control,(0,a.Z)((0,a.Z)({type:f?"text":"password",placeholder:s,name:r,id:r,as:"input",ref:function(e){i&&i(e)},className:p,isInvalid:!(!x||!x[r])},u?u(r):{}),{},{autoComplete:r},j)),(0,m.jsx)("div",{className:d()("input-group-text","input-group-password",{"show-password":f}),"data-password":f?"true":"false",children:(0,m.jsx)("span",{className:"password-eye",onClick:function(){g(!f)}})})]}),x&&x[r]?(0,m.jsx)(o.Z.Control.Feedback,{type:"invalid",className:"d-block",children:x[r].message}):null]})},Z=function(e){var r=e.type,s=e.name,l=e.placeholder,t=e.endIcon,c=e.register,i=e.errors,d=e.comp,h=e.rows,u=e.className,p=e.refCallback,j=(0,n.Z)(e,x);return(0,m.jsx)(m.Fragment,{children:"password"===r&&t?(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(b,(0,a.Z)({name:s,placeholder:l,refCallback:p,errors:i,register:c,className:u},j))}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o.Z.Control,(0,a.Z)((0,a.Z)({type:r,placeholder:l,name:s,as:d,id:s,ref:function(e){p&&p(e)},className:u,isInvalid:!(!i||!i[s])},c?c(s):{}),{},{rows:h},j)),i&&i[s]?(0,m.jsx)(o.Z.Control.Feedback,{type:"invalid",className:"d-block",children:i[s].message}):null]})})},f=function(e){var r=e.type,s=e.label,l=e.name,t=(e.placeholder,e.register),c=e.errors,i=(e.comp,e.rows,e.className),d=e.refCallback,h=(0,n.Z)(e,u);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o.Z.Check,(0,a.Z)((0,a.Z)({type:r,label:s,name:l,id:l,ref:function(e){d&&d(e)},className:i,isInvalid:!(!c||!c[l])},t?t(l):{}),h)),c&&c[l]?(0,m.jsx)(o.Z.Control.Feedback,{type:"invalid",className:"d-block",children:c[l].message}):null]})},g=function(e){var r=e.type,s=e.label,l=e.name,t=(e.placeholder,e.register),c=e.errors,i=(e.comp,e.className),d=e.children,h=e.refCallback,x=(0,n.Z)(e,p);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o.Z.Select,(0,a.Z)((0,a.Z)({type:r,label:s,name:l,id:l,ref:function(e){h&&h(e)},children:d,className:i,isInvalid:!(!c||!c[l])},t?t(l):{}),x)),c&&c[l]?(0,m.jsx)(o.Z.Control.Feedback,{type:"invalid",children:c[l].message}):null]})};r.Z=function(e){var r=e.label,s=e.type,l=e.name,t=e.placeholder,c=e.endIcon,i=e.register,d=e.errors,h=(e.control,e.className),x=e.labelClassName,u=e.containerClass,p=e.refCallback,b=e.children,y=e.action,v=e.rows,C=(0,n.Z)(e,j),N="textarea"===s?"textarea":"select"===s?"select":"input",k=void 0===c||c;return(0,m.jsx)(m.Fragment,{children:"hidden"===s?(0,m.jsx)("input",(0,a.Z)((0,a.Z)({type:s,name:l},i?i(l):{}),C)):(0,m.jsx)(m.Fragment,{children:"select"===s?(0,m.jsxs)(o.Z.Group,{className:u,children:[r?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o.Z.Label,{className:x,children:r}),y&&y]}):null,(0,m.jsx)(g,(0,a.Z)({type:s,name:l,placeholder:t,refCallback:p,errors:d,register:i,comp:N,className:h,children:b},C))]}):(0,m.jsx)(m.Fragment,{children:"checkbox"===s||"radio"===s?(0,m.jsx)(o.Z.Group,{className:u,children:(0,m.jsx)(f,(0,a.Z)({type:s,label:r,name:l,placeholder:t,refCallback:p,errors:d,register:i,comp:N,className:h,rows:v},C))}):(0,m.jsxs)(o.Z.Group,{className:u,children:[r?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o.Z.Label,{className:x,children:r}),y&&y]}):null,(0,m.jsx)(Z,(0,a.Z)({type:s,name:l,placeholder:t,endIcon:k,refCallback:p,errors:d,register:i,comp:N,className:h,rows:v},C))]})})})})}},95262:function(e,r,s){s.d(r,{y:function(){return o.Z},J:function(){return c}});var a=s(1413),l=s(72791),n=s(61134),t=s(80184),c=function(e){var r=e.defaultValues,s=e.resolver,c=e.children,o=e.onSubmit,i=e.formClass,d=(0,n.cI)({defaultValues:r,resolver:s}),m=d.handleSubmit,h=d.register,x=d.control,u=d.formState.errors;return(0,t.jsx)("form",{onSubmit:m(o),className:i,noValidate:!0,children:Array.isArray(c)?c.map((function(e){return e.props&&e.props.name?l.createElement(e.type,(0,a.Z)({},(0,a.Z)((0,a.Z)({},e.props),{},{register:h,key:e.props.name,errors:u,control:x}))):e})):c})},o=s(9823)},11596:function(e,r,s){s.r(r),s.d(r,{default:function(){return K}});var a=s(29439),l=s(61134),n=s(1413),t=s(45987),c=s(72791),o=s(52007),i=s.n(o),d=s(55353),m=s(5107),h=s(20070),x=i().oneOf(["start","end"]),u=i().oneOfType([x,i().shape({sm:x}),i().shape({md:x}),i().shape({lg:x}),i().shape({xl:x}),i().shape({xxl:x})]),p=s(80184),j=["title","children","bsPrefix","rootCloseEvent","variant","size","menuRole","renderMenuOnMount","disabled","href","id","menuVariant"],b={id:i().string,href:i().string,onClick:i().func,title:i().node.isRequired,disabled:i().bool,align:u,menuRole:i().string,renderMenuOnMount:i().bool,rootCloseEvent:i().string,menuVariant:i().oneOf(["dark"]),bsPrefix:i().string,variant:i().string,size:i().string},Z=c.forwardRef((function(e,r){var s=e.title,a=e.children,l=e.bsPrefix,c=e.rootCloseEvent,o=e.variant,i=e.size,x=e.menuRole,u=e.renderMenuOnMount,b=e.disabled,Z=e.href,f=e.id,g=e.menuVariant,y=(0,t.Z)(e,j);return(0,p.jsxs)(d.Z,(0,n.Z)((0,n.Z)({ref:r},y),{},{children:[(0,p.jsx)(m.Z,{id:f,href:Z,size:i,variant:o,disabled:b,childBsPrefix:l,children:s}),(0,p.jsx)(h.Z,{role:x,renderOnMount:u,rootCloseEvent:c,variant:g,children:a})]}))}));Z.displayName="DropdownButton",Z.propTypes=b;var f=Z,g=s(9140),y=s(89743),v=s(2677),C=s(21827),N=s(73053),k=s(99410),w=s(43360),F=s(81694),S=s.n(F),G=s(51649),P=s(95262),I=s(97637),L=function(){var e=(0,l.cI)({defaultValues:{password:"12345",statictext:"email@example.com",color:"#35b8e0"}}),r=e.handleSubmit,s=e.register,a=e.control,n=e.formState.errors;return(0,p.jsx)(g.Z,{children:(0,p.jsxs)(g.Z.Body,{children:[(0,p.jsx)("h4",{className:"header-title",children:"Input Types"}),(0,p.jsxs)("p",{className:"sub-header",children:["Most common form control, text-based input fields. Includes support for all HTML5 types:"," ",(0,p.jsx)("code",{children:"text"}),", ",(0,p.jsx)("code",{children:"password"}),", ",(0,p.jsx)("code",{children:"datetime"}),", ",(0,p.jsx)("code",{children:"datetime-local"}),","," ",(0,p.jsx)("code",{children:"date"}),", ",(0,p.jsx)("code",{children:"month"}),", ",(0,p.jsx)("code",{children:"time"}),", ",(0,p.jsx)("code",{children:"week"}),", ",(0,p.jsx)("code",{children:"number"}),","," ",(0,p.jsx)("code",{children:"email"}),", ",(0,p.jsx)("code",{children:"url"}),", ",(0,p.jsx)("code",{children:"search"}),", ",(0,p.jsx)("code",{children:"tel"}),", and ",(0,p.jsx)("code",{children:"color"}),"."]}),(0,p.jsxs)(y.Z,{children:[(0,p.jsx)(v.Z,{lg:6,children:(0,p.jsxs)("form",{onSubmit:r((function(){})),children:[(0,p.jsx)(P.y,{label:"Text",type:"text",name:"text",containerClass:"mb-3",register:s,errors:n,control:a},"text"),(0,p.jsx)(P.y,{label:"Email",type:"email",name:"email",placeholder:"Email",containerClass:"mb-3",register:s,errors:n,control:a},"email"),(0,p.jsx)(P.y,{label:"Show/Hide Password",type:"password",name:"password",placeholder:"password placeholder",containerClass:"mb-3",register:s,errors:n,control:a},"password"),(0,p.jsx)(P.y,{label:"Placeholder",type:"text",name:"placeholder",placeholder:"placeholder",containerClass:"mb-3",register:s,errors:n,control:a},"placeholder"),(0,p.jsx)(P.y,{label:"Text Area",type:"textarea",name:"textarea",rows:5,containerClass:"mb-3",register:s,errors:n,control:a},"textarea"),(0,p.jsx)(P.y,{label:"Read only",type:"text",name:"text1",id:"text1",placeholder:"Readonly value",readOnly:!0,containerClass:"mb-3",register:s,errors:n,control:a},"text1"),(0,p.jsx)(P.y,{label:"Disabled",type:"text",name:"text2",id:"text2",placeholder:"Disabled value",disabled:!0,containerClass:"mb-3",register:s,errors:n,control:a},"text2"),(0,p.jsx)(P.y,{label:"Static control",type:"text",name:"statictext",placeholder:"Disabled",readOnly:!0,containerClass:"mb-3",register:s,errors:n,control:a},"statictext"),(0,p.jsxs)(C.Z.Group,{className:"mb-3",children:[(0,p.jsx)(C.Z.Label,{htmlFor:"text3",className:"form-label",children:"Helping text"}),(0,p.jsx)(C.Z.Control,{type:"text",name:"text",id:"text3",placeholder:"Helping text"}),(0,p.jsx)(C.Z.Text,{children:"A block of help text that breaks onto a new line and may extend beyond one line."})]})]})}),(0,p.jsx)(v.Z,{lg:6,children:(0,p.jsxs)("form",{onSubmit:r((function(){})),children:[(0,p.jsxs)(P.y,{name:"select",label:"Input Select",type:"select",containerClass:"mb-3",className:"form-select",register:s,errors:n,control:a,children:[(0,p.jsx)("option",{children:"1"}),(0,p.jsx)("option",{children:"2"}),(0,p.jsx)("option",{children:"3"}),(0,p.jsx)("option",{children:"4"}),(0,p.jsx)("option",{children:"5"})]},"select"),(0,p.jsxs)(P.y,{name:"selectMulti",label:"Multiple Select",type:"select",multiple:!0,containerClass:"mb-3",className:"form-select",register:s,errors:n,control:a,children:[(0,p.jsx)("option",{children:"1"}),(0,p.jsx)("option",{children:"2"}),(0,p.jsx)("option",{children:"3"}),(0,p.jsx)("option",{children:"4"}),(0,p.jsx)("option",{children:"5"})]},"selectMulti"),(0,p.jsx)(P.y,{label:"Default file input",type:"file",name:"file",containerClass:"mb-3",register:s,errors:n,control:a},"file"),(0,p.jsx)(P.y,{label:"Date",type:"date",name:"date",containerClass:"mb-3",register:s,errors:n,control:a},"date"),(0,p.jsx)(P.y,{label:"Month",type:"month",name:"month",containerClass:"mb-3",register:s,errors:n,control:a},"month"),(0,p.jsx)(P.y,{label:"Time",type:"time",name:"time",containerClass:"mb-3",register:s,errors:n,control:a},"time"),(0,p.jsx)(P.y,{label:"Week",type:"week",name:"week",containerClass:"mb-3",register:s,errors:n,control:a},"week"),(0,p.jsx)(P.y,{label:"Number",type:"number",name:"number",placeholder:"number placeholder",containerClass:"mb-3",register:s,errors:n,control:a},"number"),(0,p.jsx)(P.y,{label:"Color",type:"color",name:"color",className:"w-100",placeholder:"color placeholder",containerClass:"mb-3",register:s,errors:n,control:a},"color"),(0,p.jsxs)(C.Z.Group,{className:"mb-0",children:[(0,p.jsx)(C.Z.Label,{htmlFor:"exampleRange",className:"form-label",children:"Range"}),(0,p.jsx)(C.Z.Range,{})]})]})})]})]})})},E=function(){return(0,p.jsx)(g.Z,{children:(0,p.jsxs)(g.Z.Body,{children:[(0,p.jsx)("h4",{className:"header-title",children:"Floating labels"}),(0,p.jsxs)("p",{className:"sub-header",children:["Wrap a ",(0,p.jsx)("code",{children:"<Form.Control>"})," element in ",(0,p.jsx)("code",{children:"<FloatingLabel>"}),"to enable floating labels with Bootstrap\u2019s textual form fields. A ",(0,p.jsx)("code",{children:"placeholder"}),"is required on each ",(0,p.jsx)("code",{children:"<Form.Control>"})," as our method of CSS-only floating labels uses the ",(0,p.jsx)("code",{children:":placeholder-shown"})," pseudo-element."]}),(0,p.jsxs)(y.Z,{children:[(0,p.jsxs)(v.Z,{lg:6,children:[(0,p.jsx)("h5",{className:"mb-3",children:"Floating Example"}),(0,p.jsx)(N.Z,{controlId:"floatingInput",label:"Email address",className:"mb-3",children:(0,p.jsx)(C.Z.Control,{type:"email",placeholder:"name@example.com"})}),(0,p.jsx)(N.Z,{controlId:"floatingPassword",label:"Password",className:"mb-3",children:(0,p.jsx)(C.Z.Control,{type:"password",placeholder:"Password"})}),(0,p.jsx)(N.Z,{controlId:"floatingTextarea2",label:"Comments",children:(0,p.jsx)(C.Z.Control,{as:"textarea",placeholder:"Leave a comment here",style:{height:"100px"}})})]}),(0,p.jsxs)(v.Z,{lg:6,children:[(0,p.jsx)("h5",{className:"mb-3",children:"Selects"}),(0,p.jsx)(N.Z,{controlId:"floatingSelect",label:"Works with selects",className:"mb-3",children:(0,p.jsxs)(C.Z.Select,{"aria-label":"Floating label select example",children:[(0,p.jsx)("option",{children:"Open this select menu"}),(0,p.jsx)("option",{value:"1",children:"One"}),(0,p.jsx)("option",{value:"2",children:"Two"}),(0,p.jsx)("option",{value:"3",children:"Three"})]})}),(0,p.jsxs)(y.Z,{className:"g-2",children:[(0,p.jsx)(v.Z,{md:!0,children:(0,p.jsx)(N.Z,{controlId:"floatingInputGrid",label:"Email address",children:(0,p.jsx)(C.Z.Control,{type:"email",placeholder:"name@example.com",defaultValue:"name@example.com"})})}),(0,p.jsx)(v.Z,{md:!0,children:(0,p.jsx)(N.Z,{controlId:"floatingSelectGrid",label:"Works with selects",children:(0,p.jsxs)(C.Z.Select,{"aria-label":"Floating label select example",children:[(0,p.jsx)("option",{children:"Open this select menu"}),(0,p.jsx)("option",{value:"1",children:"One"}),(0,p.jsx)("option",{value:"2",children:"Two"}),(0,p.jsx)("option",{value:"3",children:"Three"})]})})})]})]})]})]})})},B=function(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h4",{className:"header-title",children:"Select menu"}),(0,p.jsxs)("p",{className:"sub-header",children:["Custom ",(0,p.jsx)("code",{children:"<select>"})," menus need only a custom class, ",(0,p.jsx)("code",{children:".custom-select"})," to trigger the custom styles."]}),(0,p.jsx)(C.Z.Group,{children:(0,p.jsxs)(C.Z.Select,{className:"mt-3","aria-label":"Default select example",children:[(0,p.jsx)("option",{defaultValue:"0",children:"Open this select menu"}),(0,p.jsx)("option",{value:"1",children:"One"}),(0,p.jsx)("option",{value:"2",children:"Two"}),(0,p.jsx)("option",{value:"3",children:"Three"})]})})]})},T=function(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h4",{className:"header-title mt-4",children:"Switches"}),(0,p.jsxs)("p",{className:"text-muted",children:["A switch has the markup of a custom checkbox but uses the ",(0,p.jsx)("code",{children:".custom-switch"})," class to render a toggle switch. Switches also support the ",(0,p.jsx)("code",{children:"disabled"})," attribute."]}),(0,p.jsxs)(C.Z,{children:[(0,p.jsx)(C.Z.Check,{type:"switch",id:"custom-switch",label:"Toggle this switch element"}),(0,p.jsx)(C.Z.Check,{disabled:!0,type:"switch",label:"Disabled switch element",id:"disabled-custom-switch",className:"mt-1"})]})]})},D=function(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(C.Z.Check,{type:"checkbox",id:"default-checkbox1",label:"Check this custom checkbox"}),(0,p.jsx)(C.Z.Check,{type:"checkbox",id:"default-checkbox2",label:"Check this custom checkbox"})]})},O=function(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(C.Z.Check,{type:"radio",id:"default-radio1",name:"customRadio",label:"Toggle this custom radio"}),(0,p.jsx)(C.Z.Check,{type:"radio",id:"default-radio2",name:"customRadio",label:"Or toggle this other custom radio"})]})},M=function(){return(0,p.jsx)(g.Z,{children:(0,p.jsxs)(g.Z.Body,{children:[(0,p.jsx)("h4",{className:"header-title",children:"Input Sizes"}),(0,p.jsxs)("p",{className:"sub-header",children:["Use size on ",(0,p.jsx)("code",{children:"<FormControl>"})," and ",(0,p.jsx)("code",{children:"<FormLabel>"})," to change the size of inputs and labels respectively."]}),(0,p.jsxs)(C.Z,{children:[(0,p.jsxs)(C.Z.Group,{className:"mb-3",children:[(0,p.jsx)(C.Z.Label,{htmlFor:"small",children:"Small"}),(0,p.jsx)(C.Z.Control,{type:"text",name:"small",id:"small",placeholder:"Small",size:"sm"})]}),(0,p.jsxs)(C.Z.Group,{className:"mb-3",children:[(0,p.jsx)(C.Z.Label,{htmlFor:"Normal",children:"Normal"}),(0,p.jsx)(C.Z.Control,{type:"text",name:"Normal",id:"Normal",placeholder:"Normal"})]}),(0,p.jsxs)(C.Z.Group,{className:"mb-3",children:[(0,p.jsx)(C.Z.Label,{htmlFor:"Large",children:"Large"}),(0,p.jsx)(C.Z.Control,{type:"text",name:"Large",id:"Large",placeholder:"Large",size:"lg"})]}),(0,p.jsxs)(C.Z.Group,{className:"mb-0",children:[(0,p.jsx)(C.Z.Label,{htmlFor:"grid",children:"Grid Sizes"}),(0,p.jsx)(y.Z,{children:(0,p.jsx)(v.Z,{sm:4,children:(0,p.jsx)(C.Z.Control,{type:"text",name:"grid",id:"grid",placeholder:".col-sm-4"})})})]})]})]})})},R=function(){var e=(0,c.useState)([]),r=(0,a.Z)(e,2),s=r[0],l=r[1],n=[{id:1,value:1,label:"Jaime Fonseca | 9999-9999"},{id:2,value:2,label:"Gabriel Sosa | 3232-3232"},{id:3,value:3,label:"Otra Persona | 8181-8181"}],t=function(e){l(e)};return(0,p.jsx)(g.Z,{children:(0,p.jsxs)(g.Z.Body,{children:[(0,p.jsx)("h4",{className:"header-title",children:"Input Group"}),(0,p.jsx)("p",{className:"sub-header",children:"Easily extend form conrols by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs"}),(0,p.jsxs)(C.Z,{children:[(0,p.jsxs)(C.Z.Group,{children:[(0,p.jsx)(C.Z.Label,{htmlFor:"Static",children:"Static"}),(0,p.jsxs)(k.Z,{className:"mb-3",children:[(0,p.jsx)(k.Z.Text,{id:"basic-addon1",children:"@"}),(0,p.jsx)(I.pY,{id:"customer",labelKey:"label",multiple:!1,onChange:t,options:n,placeholder:"Escoge un cliente...",selected:s})]})]}),(0,p.jsxs)(C.Z.Group,{children:[(0,p.jsx)(C.Z.Label,{htmlFor:"Dropdown",children:"Dropdown"}),(0,p.jsxs)(k.Z,{className:"mb-3",children:[(0,p.jsxs)(f,{variant:"primary",title:"Dropdown",id:"input-group-dropdown-1",children:[(0,p.jsx)(d.Z.Item,{href:"#",children:"Action"}),(0,p.jsx)(d.Z.Item,{href:"#",children:"Another action"}),(0,p.jsx)(d.Z.Item,{href:"#",children:"Something else here"}),(0,p.jsx)(d.Z.Divider,{}),(0,p.jsx)(d.Z.Item,{href:"#",children:"Separated link"})]}),(0,p.jsx)(C.Z.Control,{"aria-label":"Text input with dropdown button"})]})]}),(0,p.jsxs)(C.Z.Group,{children:[(0,p.jsx)(C.Z.Label,{htmlFor:"Button",children:"Button"}),(0,p.jsxs)(k.Z,{className:"mb-3",children:[(0,p.jsx)(I.pY,{id:"customer",labelKey:"label",multiple:!1,onChange:t,options:n,placeholder:"Escoge un cliente...",selected:s}),(0,p.jsx)(w.Z,{variant:"dark",id:"button-addon2",children:"Button"})]})]}),(0,p.jsxs)(y.Z,{className:"g-2",children:[(0,p.jsx)(v.Z,{sm:6,children:(0,p.jsxs)(C.Z.Group,{children:[(0,p.jsx)(C.Z.Label,{htmlFor:"file",children:"Default file input"}),(0,p.jsx)(C.Z.Control,{type:"file"})]})}),(0,p.jsx)(v.Z,{sm:6,children:(0,p.jsxs)(C.Z.Group,{children:[(0,p.jsx)(C.Z.Label,{htmlFor:"formFileMultiple01",children:"Multiple files input"}),(0,p.jsx)(C.Z.Control,{type:"file",multiple:!0})]})})]})]})]})})},z=function(){return(0,p.jsx)(g.Z,{children:(0,p.jsxs)(g.Z.Body,{children:[(0,p.jsx)("h4",{className:"mb-3 header-title",children:"Basic Example"}),(0,p.jsxs)(C.Z,{children:[(0,p.jsxs)(C.Z.Group,{className:"mb-3",children:[(0,p.jsx)(C.Z.Label,{htmlFor:"exampleEmail2",children:"Email"}),(0,p.jsx)(C.Z.Control,{type:"email",name:"email",id:"exampleEmail2",placeholder:"Enter your email"}),(0,p.jsx)(C.Z.Text,{children:"We'll never share your email with anyone else."})]}),(0,p.jsxs)(C.Z.Group,{className:"mb-3",children:[(0,p.jsx)(C.Z.Label,{htmlFor:"examplePassword2",children:"Password"}),(0,p.jsx)(C.Z.Control,{type:"password",name:"password",id:"examplePassword2",placeholder:"password placeholder"})]}),(0,p.jsx)(C.Z.Group,{className:"mb-3",id:"formGridCheckbox",children:(0,p.jsx)(C.Z.Check,{type:"checkbox",id:"formGridCheckbox",label:"Check me out"})}),(0,p.jsx)(w.Z,{type:"submit",children:"Submit"})]})]})})},A=function(){return(0,p.jsx)(g.Z,{children:(0,p.jsxs)(g.Z.Body,{children:[(0,p.jsx)("h4",{className:"mb-3 header-title",children:"Horizontal Form"}),(0,p.jsxs)(C.Z,{children:[(0,p.jsxs)(C.Z.Group,{as:y.Z,className:"mb-3",children:[(0,p.jsx)(C.Z.Label,{htmlFor:"exampleEmail3",column:!0,sm:3,children:"Email"}),(0,p.jsx)(v.Z,{sm:9,children:(0,p.jsx)(C.Z.Control,{type:"email",name:"email",id:"exampleEmail3",placeholder:"Email"})})]}),(0,p.jsxs)(C.Z.Group,{as:y.Z,className:"mb-3",children:[(0,p.jsx)(C.Z.Label,{htmlFor:"examplePassword3",column:!0,sm:3,children:"Password"}),(0,p.jsx)(v.Z,{sm:9,children:(0,p.jsx)(C.Z.Control,{type:"password",name:"password",id:"examplePassword3",placeholder:"Password"})})]}),(0,p.jsxs)(C.Z.Group,{as:y.Z,className:"mb-3",children:[(0,p.jsx)(C.Z.Label,{htmlFor:"examplePassword4",column:!0,sm:3,children:"Re-Password"}),(0,p.jsx)(v.Z,{sm:9,children:(0,p.jsx)(C.Z.Control,{type:"password",name:"password",id:"examplePassword4",placeholder:"Retype Password"})})]}),(0,p.jsx)(C.Z.Group,{as:y.Z,className:"mb-3",controlId:"formHorizontalCheck",children:(0,p.jsx)(v.Z,{sm:{span:9,offset:3},children:(0,p.jsx)(C.Z.Check,{label:"Check me out !",id:"checkmeout"})})}),(0,p.jsx)(C.Z.Group,{as:y.Z,className:"mb-0",controlId:"formHorizontalCheck",children:(0,p.jsx)(v.Z,{sm:{span:9,offset:3},children:(0,p.jsx)(w.Z,{variant:"info",type:"submit",children:"Sign in"})})})]})]})})},H=function(){return(0,p.jsx)(g.Z,{children:(0,p.jsxs)(g.Z.Body,{children:[(0,p.jsx)("h4",{className:"header-title",children:"Column sizing"}),(0,p.jsxs)("p",{className:"sub-header",children:["As shown in the previous examples, our grid system allows you to place any number of"," ",(0,p.jsx)("code",{children:".col"}),"s within a ",(0,p.jsx)("code",{children:".row"}),"."]}),(0,p.jsxs)(C.Z,{className:"row row-cols-lg-auto g-3 align-items-center",children:[(0,p.jsx)("div",{className:"col-12",children:(0,p.jsx)(C.Z.Group,{className:"mb-2 me-sm-2 mb-sm-0",children:(0,p.jsx)(C.Z.Control,{readOnly:!0,type:"email",name:"email",id:"exampleEmail4",bsPrefix:"form-control-plaintext",placeholder:"email@example.com"})})}),(0,p.jsx)("div",{className:"col-12",children:(0,p.jsx)(C.Z.Group,{className:"mb-2 me-sm-2 mb-sm-0",children:(0,p.jsx)(C.Z.Control,{type:"password",name:"password",id:"examplePassword5",placeholder:"Password"})})}),(0,p.jsx)("div",{className:"col-12",children:(0,p.jsx)(w.Z,{color:"primary",type:"submit",children:"Confirm identity"})})]}),(0,p.jsx)("h6",{className:"font-13 mt-3",children:"Auto-sizing"}),(0,p.jsx)(C.Z,{children:(0,p.jsxs)(y.Z,{className:"align-items-center",children:[(0,p.jsxs)(v.Z,{xs:"auto",children:[(0,p.jsx)(C.Z.Label,{htmlFor:"inlineFormInput",visuallyHidden:!0,children:"Name"}),(0,p.jsx)(C.Z.Control,{className:"mb-2",id:"inlineFormInput",placeholder:"Jane Doe"})]}),(0,p.jsxs)(v.Z,{xs:"auto",children:[(0,p.jsx)(C.Z.Label,{htmlFor:"inlineFormInputGroup",visuallyHidden:!0,children:"Username"}),(0,p.jsxs)(k.Z,{className:"mb-2",children:[(0,p.jsx)(k.Z.Text,{children:"@"}),(0,p.jsx)(C.Z.Control,{id:"inlineFormInputGroup",placeholder:"Username"})]})]}),(0,p.jsx)(v.Z,{xs:"auto",children:(0,p.jsx)(C.Z.Check,{type:"checkbox",id:"autoSizingCheck",className:"mb-2",label:"Remember me"})}),(0,p.jsx)(v.Z,{xs:"auto",children:(0,p.jsx)(w.Z,{type:"submit",className:"mb-2",children:"Submit"})})]})})]})})},V=function(){return(0,p.jsx)(g.Z,{children:(0,p.jsxs)(g.Z.Body,{children:[(0,p.jsx)("h4",{className:"header-title",children:"Gutters"}),(0,p.jsx)("p",{className:"text-muted font-13",children:"More complex layouts can also be created with the grid system."}),(0,p.jsxs)(C.Z,{children:[(0,p.jsxs)(y.Z,{className:"mb-3",children:[(0,p.jsxs)(C.Z.Group,{as:v.Z,controlId:"formGridEmail",children:[(0,p.jsx)(C.Z.Label,{children:"Email"}),(0,p.jsx)(C.Z.Control,{type:"email",placeholder:"Email"})]}),(0,p.jsxs)(C.Z.Group,{as:v.Z,controlId:"formGridPassword",children:[(0,p.jsx)(C.Z.Label,{children:"Password"}),(0,p.jsx)(C.Z.Control,{type:"password",placeholder:"Password"})]})]}),(0,p.jsxs)(C.Z.Group,{className:"mb-3",controlId:"formGridAddress1",children:[(0,p.jsx)(C.Z.Label,{children:"Address"}),(0,p.jsx)(C.Z.Control,{placeholder:"1234 Main St"})]}),(0,p.jsxs)(C.Z.Group,{className:"mb-3",controlId:"formGridAddress2",children:[(0,p.jsx)(C.Z.Label,{children:"Address 2"}),(0,p.jsx)(C.Z.Control,{placeholder:"Apartment, studio, or floor"})]}),(0,p.jsxs)(y.Z,{className:"mb-3",children:[(0,p.jsxs)(C.Z.Group,{as:v.Z,md:6,controlId:"formGridCity",children:[(0,p.jsx)(C.Z.Label,{children:"City"}),(0,p.jsx)(C.Z.Control,{})]}),(0,p.jsxs)(C.Z.Group,{as:v.Z,md:4,controlId:"formGridState",children:[(0,p.jsx)(C.Z.Label,{children:"State"}),(0,p.jsxs)(C.Z.Select,{defaultValue:"Choose...",children:[(0,p.jsx)("option",{children:"Choose..."}),(0,p.jsx)("option",{children:"Option 1"}),(0,p.jsx)("option",{children:"Option 2"}),(0,p.jsx)("option",{children:"Option 3"})]})]}),(0,p.jsxs)(C.Z.Group,{as:v.Z,md:2,controlId:"formGridZip",children:[(0,p.jsx)(C.Z.Label,{children:"Zip"}),(0,p.jsx)(C.Z.Control,{})]})]}),(0,p.jsx)(C.Z.Group,{className:"mb-3",id:"formGridCheckbox2",children:(0,p.jsx)(C.Z.Check,{type:"checkbox",label:"Check this custom checkbox",id:"formGridCheckbox2"})}),(0,p.jsx)(w.Z,{type:"submit",className:"waves-effect waves-light",children:"Sign in"})]})]})})},_=function(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h4",{className:"header-title",children:"Custom checkbox - Basic"}),(0,p.jsxs)("p",{className:"sub-header",children:["Supports bootstrap brand colors: ",(0,p.jsx)("code",{children:".form-check"}),",",(0,p.jsx)("code",{children:".form-check-*"})," etc."]}),([{variant:"primary",name:"Primary"},{variant:"success",name:"Success"},{variant:"danger",name:"Danger"},{variant:"warning",name:"Warning"},{variant:"pink",name:"Pink"},{variant:"info",name:"Info"},{variant:"dark",name:"Dark"}]||[]).map((function(e,r){return(0,p.jsx)(C.Z.Check,{label:e.name,type:"checkbox",id:"basic-checkbox-".concat(r),className:S()("mb-2","form-check-"+e.variant),"aria-label":"option 1",defaultChecked:r%2===0},r.toString())}))]})},W=function(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h4",{className:"header-title",children:"Custom checkbox - Circled"}),(0,p.jsxs)("p",{className:"sub-header",children:[(0,p.jsx)("code",{children:".rounded-circle"})," for roundness."]}),([{variant:"primary",name:"Primary"},{variant:"success",name:"Success"},{variant:"danger",name:"Danger"},{variant:"warning",name:"Warning"},{variant:"pink",name:"Pink"},{variant:"info",name:"Info"},{variant:"dark",name:"Dark"}]||[]).map((function(e,r){return(0,p.jsxs)(C.Z.Check,{id:"circle-checkbox-".concat(r),className:S()("mb-2","form-check","form-check-"+e.variant),children:[(0,p.jsx)(C.Z.Check.Input,{type:"checkbox",className:"rounded-circle",defaultChecked:r%3===0}),(0,p.jsxs)(C.Z.Check.Label,{children:[e.name," "]})]},r.toString())}))]})},U=function(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h4",{className:"header-title",children:"Custom radio - Circled"}),(0,p.jsxs)("p",{className:"sub-header",children:[(0,p.jsx)("code",{children:".rounded-circle"})," for roundness."]}),([{variant:"primary",name:"Primary"},{variant:"success",name:"Success"},{variant:"danger",name:"Danger"},{variant:"warning",name:"Warning"},{variant:"pink",name:"Pink"}]||[]).map((function(e,r){return(0,p.jsx)(C.Z.Check,{label:e.name,id:"circled-radio-".concat(r),type:"radio",className:S()("mb-2","form-check-"+e.variant),"aria-label":"option 1",disabled:!0,defaultChecked:r%3===0},r.toString())}))]})},q=function(){var e=[{variant:"primary",name:"Primary"},{variant:"success",name:"Success"},{variant:"danger",name:"Danger"},{variant:"warning",name:"Warning"},{variant:"pink",name:"Pink"},{variant:"info",name:"Info"},{variant:"dark",name:"Dark"}];return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h4",{className:"header-title",children:"Custom radio - Basic"}),(0,p.jsxs)("p",{className:"sub-header",children:["Supports bootstrap brand colors: ",(0,p.jsx)("code",{children:".form-check"}),",",(0,p.jsx)("code",{children:".form-check-*"})," etc."]}),(0,p.jsxs)(y.Z,{children:[(0,p.jsx)(v.Z,{sm:6,children:(e||[]).map((function(e,r){return(0,p.jsx)(C.Z.Check,{type:"radio",id:"basic-radio-".concat(r),label:e.name,className:S()("mb-2","form-check-"+e.variant),"aria-label":"option 1",name:"customradio1",defaultChecked:2===r},r.toString())}))}),(0,p.jsx)(v.Z,{sm:6,children:(e||[]).map((function(e,r){return(0,p.jsx)(C.Z.Check,{type:"radio",id:"basic-radio2-".concat(r),label:e.name,className:S()("mb-2","form-check-"+e.variant),"aria-label":"option 1",defaultChecked:r%3===0},r.toString())}))})]})]})},J=function(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h4",{className:"header-title",children:"Custom checkbox - Circled"}),(0,p.jsxs)("p",{className:"sub-header",children:[(0,p.jsx)("code",{children:".rounded-circle"})," for roundness."]}),([{variant:"danger",name:"Danger"},{variant:"dark",name:"Dark"},{variant:"blue",name:"Blue"},{variant:"pink",name:"Pink"}]||[]).map((function(e,r){return(0,p.jsx)(C.Z.Check,{id:"custom-checkbox-"+e.variant,type:"radio",label:e.name,className:S()("mb-2","form-check-"+e.variant),"aria-label":"option 1",disabled:!0,defaultChecked:!0},r.toString())}))]})},K=function(){return(0,G.Tt)({title:"Form Components",breadCrumbItems:[{path:"/forms/basic",label:"Forms"},{path:"/forms/basic",label:"Form Components",active:!0}]}),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(y.Z,{children:(0,p.jsx)(v.Z,{children:(0,p.jsx)(L,{})})}),(0,p.jsx)(y.Z,{children:(0,p.jsx)(v.Z,{children:(0,p.jsx)(g.Z,{children:(0,p.jsx)(g.Z.Body,{children:(0,p.jsxs)(y.Z,{children:[(0,p.jsxs)(v.Z,{md:6,children:[(0,p.jsx)(B,{}),(0,p.jsx)(T,{})]}),(0,p.jsxs)(v.Z,{md:6,children:[(0,p.jsx)("h4",{className:"header-title mt-5 mt-sm-0",children:"Checkboxes and radios"}),(0,p.jsx)("div",{className:"mt-3",children:(0,p.jsx)(D,{})}),(0,p.jsx)("div",{className:"mt-3",children:(0,p.jsx)(O,{})})]})]})})})})}),(0,p.jsx)(y.Z,{children:(0,p.jsx)(v.Z,{children:(0,p.jsx)(E,{})})}),(0,p.jsxs)(y.Z,{children:[(0,p.jsx)(v.Z,{lg:6,children:(0,p.jsx)(M,{})}),(0,p.jsx)(v.Z,{lg:6,children:(0,p.jsx)(R,{})})]}),(0,p.jsxs)(y.Z,{children:[(0,p.jsx)(v.Z,{lg:6,children:(0,p.jsx)(z,{})}),(0,p.jsx)(v.Z,{lg:6,children:(0,p.jsx)(A,{})})]}),(0,p.jsx)(y.Z,{children:(0,p.jsx)(v.Z,{children:(0,p.jsx)(H,{})})}),(0,p.jsx)(y.Z,{children:(0,p.jsx)(v.Z,{children:(0,p.jsx)(V,{})})}),(0,p.jsx)(y.Z,{children:(0,p.jsx)(v.Z,{children:(0,p.jsx)(g.Z,{children:(0,p.jsx)(g.Z.Body,{children:(0,p.jsxs)(y.Z,{children:[(0,p.jsx)(v.Z,{md:4,children:(0,p.jsx)(_,{})}),(0,p.jsx)(v.Z,{md:4,children:(0,p.jsx)(W,{})}),(0,p.jsx)(v.Z,{md:4,children:(0,p.jsx)(U,{})})]})})})})}),(0,p.jsx)(y.Z,{children:(0,p.jsx)(v.Z,{children:(0,p.jsx)(g.Z,{children:(0,p.jsx)(g.Z.Body,{children:(0,p.jsxs)(y.Z,{children:[(0,p.jsx)(v.Z,{md:4,children:(0,p.jsx)(q,{})}),(0,p.jsx)(v.Z,{md:4,children:(0,p.jsx)(J,{})})]})})})})})]})}},73201:function(e,r,s){var a=s(72791),l=function(e){return e&&"function"!==typeof e?function(r){e.current=r}:e};r.Z=function(e,r){return(0,a.useMemo)((function(){return function(e,r){var s=l(e),a=l(r);return function(e){s&&s(e),a&&a(e)}}(e,r)}),[e,r])}},71306:function(e,r,s){s.d(r,{PB:function(){return a},$F:function(){return l}});function a(e){return"".concat("data-rr-ui-").concat(e)}function l(e){return"".concat("rrUi").concat(e)}},58865:function(e,r,s){s.d(r,{Z:function(){return t}});var a=s(72791),l=s(97357),n=(0,a.createContext)(l.Z?window:void 0);n.Provider;function t(){return(0,a.useContext)(n)}},3070:function(e,r,s){var a=s(97357),l=!1,n=!1;try{var t={get passive(){return l=!0},get once(){return n=l=!0}};a.Z&&(window.addEventListener("test",t,t),window.removeEventListener("test",t,!0))}catch(c){}r.ZP=function(e,r,s,a){if(a&&"boolean"!==typeof a&&!n){var t=a.once,c=a.capture,o=s;!n&&t&&(o=s.__once||function e(a){this.removeEventListener(r,e,c),s.call(this,a)},s.__once=o),e.addEventListener(r,o,l?a:c)}e.addEventListener(r,s,a)}},97357:function(e,r){r.Z=!("undefined"===typeof window||!window.document||!window.document.createElement)},92899:function(e,r,s){var a=s(3070),l=s(36382);r.Z=function(e,r,s,n){return(0,a.ZP)(e,r,s,n),function(){(0,l.Z)(e,r,s,n)}}},78376:function(e,r,s){function a(e){return e&&e.ownerDocument||document}s.d(r,{Z:function(){return a}})},13808:function(e,r,s){s.d(r,{Z:function(){return l}});var a=Function.prototype.bind.call(Function.prototype.call,[].slice);function l(e,r){return a(e.querySelectorAll(r))}},36382:function(e,r){r.Z=function(e,r,s,a){var l=a&&"boolean"!==typeof a?a.capture:a;e.removeEventListener(r,s,l),s.__once&&e.removeEventListener(r,s.__once,l)}},43360:function(e,r,s){var a=s(1413),l=s(29439),n=s(45987),t=s(81694),c=s.n(t),o=s(72791),i=s(15341),d=s(10162),m=s(80184),h=["as","bsPrefix","variant","size","active","className"],x=o.forwardRef((function(e,r){var s=e.as,t=e.bsPrefix,o=e.variant,x=e.size,u=e.active,p=e.className,j=(0,n.Z)(e,h),b=(0,d.vE)(t,"btn"),Z=(0,i.FT)((0,a.Z)({tagName:s},j)),f=(0,l.Z)(Z,2),g=f[0],y=f[1].tagName;return(0,m.jsx)(y,(0,a.Z)((0,a.Z)((0,a.Z)({},j),g),{},{ref:r,className:c()(p,b,u&&"active",o&&"".concat(b,"-").concat(o),x&&"".concat(b,"-").concat(x),j.href&&j.disabled&&"disabled")}))}));x.displayName="Button",x.defaultProps={variant:"primary",active:!1,disabled:!1},r.Z=x},9140:function(e,r,s){s.d(r,{Z:function(){return P}});var a=s(1413),l=s(45987),n=s(81694),t=s.n(n),c=s(72791),o=s(10162),i=s(66543),d=s(27472),m=s(80184),h=["bsPrefix","className","variant","as"],x=c.forwardRef((function(e,r){var s=e.bsPrefix,n=e.className,c=e.variant,i=e.as,d=void 0===i?"img":i,x=(0,l.Z)(e,h),u=(0,o.vE)(s,"card-img");return(0,m.jsx)(d,(0,a.Z)({ref:r,className:t()(c?"".concat(u,"-").concat(c):u,n)},x))}));x.displayName="CardImg";var u=x,p=s(96040),j=["bsPrefix","className","as"],b=c.forwardRef((function(e,r){var s=e.bsPrefix,n=e.className,i=e.as,d=void 0===i?"div":i,h=(0,l.Z)(e,j),x=(0,o.vE)(s,"card-header"),u=(0,c.useMemo)((function(){return{cardHeaderBsPrefix:x}}),[x]);return(0,m.jsx)(p.Z.Provider,{value:u,children:(0,m.jsx)(d,(0,a.Z)((0,a.Z)({ref:r},h),{},{className:t()(n,x)}))})}));b.displayName="CardHeader";var Z=b,f=["bsPrefix","className","bg","text","border","body","children","as"],g=(0,d.Z)("h5"),y=(0,d.Z)("h6"),v=(0,i.Z)("card-body"),C=(0,i.Z)("card-title",{Component:g}),N=(0,i.Z)("card-subtitle",{Component:y}),k=(0,i.Z)("card-link",{Component:"a"}),w=(0,i.Z)("card-text",{Component:"p"}),F=(0,i.Z)("card-footer"),S=(0,i.Z)("card-img-overlay"),G=c.forwardRef((function(e,r){var s=e.bsPrefix,n=e.className,c=e.bg,i=e.text,d=e.border,h=e.body,x=e.children,u=e.as,p=void 0===u?"div":u,j=(0,l.Z)(e,f),b=(0,o.vE)(s,"card");return(0,m.jsx)(p,(0,a.Z)((0,a.Z)({ref:r},j),{},{className:t()(n,b,c&&"bg-".concat(c),i&&"text-".concat(i),d&&"border-".concat(d)),children:h?(0,m.jsx)(v,{children:x}):x}))}));G.displayName="Card",G.defaultProps={body:!1};var P=Object.assign(G,{Img:u,Title:C,Subtitle:N,Body:v,Link:k,Text:w,Header:Z,Footer:F,ImgOverlay:S})},96040:function(e,r,s){var a=s(72791).createContext(null);a.displayName="CardHeaderContext",r.Z=a}}]);
//# sourceMappingURL=255.6368dd20.chunk.js.map