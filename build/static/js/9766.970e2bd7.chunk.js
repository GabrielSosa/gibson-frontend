(self.webpackChunkadminto_react=self.webpackChunkadminto_react||[]).push([[9766],{89766:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return I}});var i=t(89743),r=t(2677),a=t(51649),s=t(9140),o=t(74342),l=t(69532),c=t(23922),u=t(80184),d=function(e){var n=e.tabContents;return(0,u.jsx)(s.Z,{children:(0,u.jsxs)(s.Z.Body,{children:[(0,u.jsx)("h4",{className:"header-title mb-4",children:"Default Tabs"}),(0,u.jsxs)(o.Z.Container,{defaultActiveKey:"Profile",children:[(0,u.jsx)(l.Z,{as:"ul",variant:"tabs",children:(n||[]).map((function(e,n){return(0,u.jsx)(l.Z.Item,{as:"li",children:(0,u.jsx)(l.Z.Link,{as:c.rU,to:"#",eventKey:e.title,className:"cursor-pointer",children:e.title})},n.toString())}))}),(0,u.jsx)(o.Z.Content,{children:(n||[]).map((function(e,n){return(0,u.jsx)(o.Z.Pane,{eventKey:e.title,id:String(e.id),children:(0,u.jsx)("p",{children:e.text})},n.toString())}))})]})]})})},h=function(e){var n=e.tabContents;return(0,u.jsx)(s.Z,{children:(0,u.jsxs)(s.Z.Body,{children:[(0,u.jsx)("h4",{className:"header-title mb-4",children:"Tabs Justified"}),(0,u.jsxs)(o.Z.Container,{defaultActiveKey:"Profile",children:[(0,u.jsx)(l.Z,{as:"ul",variant:"pills",justify:!0,className:"navtab-bg",children:(n||[]).map((function(e,n){return(0,u.jsx)(l.Z.Item,{as:"li",children:(0,u.jsx)(l.Z.Link,{as:c.rU,to:"#",className:"cursor-pointer",eventKey:e.title,children:e.title})},n.toString())}))}),(0,u.jsx)(o.Z.Content,{children:(n||[]).map((function(e,n){return(0,u.jsx)(o.Z.Pane,{eventKey:e.title,id:String(e.id),children:(0,u.jsx)("p",{children:e.text})},n.toString())}))})]})]})})},f=function(e){var n=e.tabContents;return(0,u.jsx)(s.Z,{children:(0,u.jsxs)(s.Z.Body,{children:[(0,u.jsx)("h4",{className:"header-title mb-4",children:"Tabs Vertical Left"}),(0,u.jsx)(i.Z,{children:(0,u.jsxs)(o.Z.Container,{defaultActiveKey:"Home",children:[(0,u.jsx)(r.Z,{sm:3,children:(0,u.jsx)(l.Z,{as:"ul",variant:"pills",className:"flex-column",children:(n||[]).map((function(e,n){return(0,u.jsx)(l.Z.Item,{as:"li",children:(0,u.jsx)(l.Z.Link,{as:c.rU,to:"#",className:"cursor-pointer",eventKey:e.title,children:e.title})},n.toString())}))})}),(0,u.jsx)(r.Z,{sm:9,children:(0,u.jsx)(o.Z.Content,{className:"pt-0",children:(n||[]).map((function(e,n){return(0,u.jsx)(o.Z.Pane,{eventKey:e.title,id:String(e.id),children:(0,u.jsx)("p",{children:e.text})},n.toString())}))})})]})})]})})},m=function(e){var n=e.tabContents;return(0,u.jsx)(s.Z,{children:(0,u.jsxs)(s.Z.Body,{children:[(0,u.jsx)("h4",{className:"header-title mb-4",children:"Tabs Vertical Right"}),(0,u.jsx)(i.Z,{children:(0,u.jsxs)(o.Z.Container,{defaultActiveKey:"Home",children:[(0,u.jsx)(r.Z,{sm:9,children:(0,u.jsx)(o.Z.Content,{className:"pt-0",children:(n||[]).map((function(e,n){return(0,u.jsx)(o.Z.Pane,{eventKey:e.title,id:String(e.id),children:(0,u.jsx)("p",{children:e.text})},n.toString())}))})}),(0,u.jsx)(r.Z,{sm:3,children:(0,u.jsx)(l.Z,{as:"ul",variant:"pills",className:"flex-column",children:(n||[]).map((function(e,n){return(0,u.jsx)(l.Z.Item,{as:"li",children:(0,u.jsx)(l.Z.Link,{as:c.rU,to:"#",className:"cursor-pointer",eventKey:e.title,children:e.title})},n.toString())}))})})]})})]})})},v=function(e){var n=e.tabContents,t=e.justify;return(0,u.jsx)(s.Z,{children:(0,u.jsxs)(s.Z.Body,{children:[(0,u.jsx)("h4",{className:"header-title mb-4",children:"Tabs Bordered"}),(0,u.jsxs)(o.Z.Container,{defaultActiveKey:"Profile",children:[(0,u.jsx)(l.Z,{as:"ul",variant:"tabs",justify:t,className:"nav-bordered",children:(n||[]).map((function(e,n){return(0,u.jsx)(l.Z.Item,{as:"li",children:(0,u.jsx)(l.Z.Link,{as:c.rU,to:"#",eventKey:e.title,className:"cursor-pointer",children:e.title})},n.toString())}))}),(0,u.jsx)(o.Z.Content,{children:(n||[]).map((function(e,n){return(0,u.jsx)(o.Z.Pane,{eventKey:e.title,id:String(e.id),children:(0,u.jsx)("p",{children:e.text})},n.toString())}))})]})]})})},x=t(72791),p=t(5912),b=t(87333),y=t(65695),Z=t(81694),j=t.n(Z),g=function(e){var n=e.children,t=e.eventKey,i=e.containerClass,r=e.linkClass,a=e.callback,s=(0,x.useContext)(p.Z).activeEventKey,o=(0,b.k)(t,(function(){return a&&a(t)})),l=s===t;return(0,u.jsx)("h5",{className:i,children:(0,u.jsx)(c.rU,{to:"#",className:j()(r,{collapsed:!l}),onClick:o,children:n})})},C=function(e){var n=e.accordionContent;return(0,u.jsx)(y.Z,{defaultActiveKey:"0",id:"accordion",className:"mb-3",children:(n||[]).map((function(e,n){return(0,u.jsxs)(s.Z,{className:"mb-1",children:[(0,u.jsx)(s.Z.Header,{children:(0,u.jsxs)(g,{eventKey:String(n),containerClass:"m-0",linkClass:"text-dark",children:[(0,u.jsx)("i",{className:"mdi mdi-help-circle me-1 text-primary"}),e.title]})}),(0,u.jsx)(y.Z.Collapse,{eventKey:String(n),children:(0,u.jsx)(s.Z.Body,{children:e.text})})]},n.toString())}))})},E=function(e){var n=e.children,t=e.eventKey,i=e.containerClass,r=e.linkClass,a=e.callback,s=(0,x.useContext)(p.Z).activeEventKey,o=(0,b.k)(t,(function(){return a&&a(t)})),l=s===t;return(0,u.jsx)("h5",{className:i,children:(0,u.jsx)(c.rU,{to:"#",className:j()(r,{collapsed:!l}),onClick:o,children:n})})},w=function(e){var n=e.accordionContent;return(0,u.jsx)(y.Z,{className:"custom-accordion mb-3",defaultActiveKey:"0",id:"accordion",children:(n||[]).map((function(e,n){return(0,u.jsxs)(s.Z,{className:"mb-0",children:[(0,u.jsx)(s.Z.Header,{children:(0,u.jsxs)(E,{eventKey:String(n),containerClass:"m-0 position-relative",linkClass:"custom-accordion-title text-reset d-block",children:["Q. ",e.title,(0,u.jsx)("i",{className:"mdi mdi-chevron-down accordion-arrow"})]})}),(0,u.jsx)(y.Z.Collapse,{eventKey:String(n),children:(0,u.jsx)(s.Z.Body,{children:e.text})})]},n.toString())}))})},N=t(29439),k=t(43360),O=t(17858),K=function(){var e=(0,x.useState)(!0),n=(0,N.Z)(e,2),t=n[0],i=n[1],r=function(){return i(!t)};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("p",{children:[(0,u.jsx)(c.rU,{to:"#",className:"btn btn-primary waves-effect waves-light",onClick:r,children:"Link with href"}),(0,u.jsx)(k.Z,{color:"primary",className:"waves-effect waves-light ms-1",onClick:r,children:"Button with data-bs-target"})]}),(0,u.jsx)(O.Z,{in:t,children:(0,u.jsx)("div",{children:(0,u.jsx)(s.Z,{children:(0,u.jsx)(s.Z.Body,{children:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident."})})})})]})},P=function(){var e=(0,x.useState)(!1),n=(0,N.Z)(e,2),t=n[0],i=n[1];return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("p",{children:(0,u.jsx)(k.Z,{onClick:function(){return i(!t)},"aria-controls":"example-collapse-text","aria-expanded":t,children:"Toggle width collapse"})}),(0,u.jsx)(O.Z,{in:t,dimension:"width",children:(0,u.jsx)("div",{children:(0,u.jsx)(s.Z,{as:s.Z.Body,className:"mb-0",style:{width:"450px"},children:"This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered."})})})]})},q=[{id:1,title:"Home",text:"Home - Food truck quinoa dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."},{id:2,title:"Profile",text:"Profile - Food truck quinoa dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."},{id:3,title:"Messages",text:"Messages - Food truck quinoa dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."}],A=[{id:1,title:"What is Vakal text here?",text:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."},{id:2,title:"Why use Vakal text here?",text:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."},{id:3,title:"How many variations exist?",text:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."},{id:4,title:"What is Vakal text here?",text:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."}],S=[{id:1,title:"Can I use this template for my client?",text:" Yup, the marketplace license allows you to use this theme in any end products. For more information on licenses, please refere"},{id:2,title:"Can this theme work with Wordpress?",text:"No. This is a HTML template. It won't directly with wordpress, though you can convert this into wordpress compatible theme"},{id:3,title:"How do I get help with the theme?",text:"   Use our dedicated support email (support@coderthemes.com) to send your issues or feedback. We are here to help anytime"},{id:4,title:"Will you regularly give updates of Adminto ?",text:"Yes, We will update the Adminto regularly. All the future updates would be available without any cost"}],I=function(){return(0,a.Tt)({title:"Tabs & Accordions",breadCrumbItems:[{path:"/base-ui/tabs-accordions",label:"Base UI"},{path:"/base-ui/tabs-accordions",label:"Tabs & Accordions",active:!0}]}),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(i.Z,{children:[(0,u.jsx)(r.Z,{xl:6,children:(0,u.jsx)(d,{tabContents:q})}),(0,u.jsx)(r.Z,{xl:6,children:(0,u.jsx)(h,{tabContents:q})})]}),(0,u.jsxs)(i.Z,{children:[(0,u.jsx)(r.Z,{xl:6,children:(0,u.jsx)(f,{tabContents:q})}),(0,u.jsx)(r.Z,{xl:6,children:(0,u.jsx)(m,{tabContents:q})})]}),(0,u.jsxs)(i.Z,{children:[(0,u.jsx)(r.Z,{xl:6,children:(0,u.jsx)(v,{tabContents:q})}),(0,u.jsx)(r.Z,{xl:6,children:(0,u.jsx)(v,{tabContents:q,justify:!0})})]}),(0,u.jsxs)(i.Z,{children:[(0,u.jsx)(r.Z,{xl:6,children:(0,u.jsx)(C,{accordionContent:A})}),(0,u.jsx)(r.Z,{xl:6,children:(0,u.jsx)(w,{accordionContent:S})}),(0,u.jsx)(r.Z,{xl:6,children:(0,u.jsx)(K,{})}),(0,u.jsx)(r.Z,{xl:6,children:(0,u.jsx)(P,{})})]})]})}},53649:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var i=t(72791);function r(){return(0,i.useReducer)((function(e){return!e}),!1)[1]}},71306:function(e,n,t){"use strict";t.d(n,{PB:function(){return i},$F:function(){return r}});function i(e){return"".concat("data-rr-ui-").concat(e)}function r(e){return"".concat("rrUi").concat(e)}},41337:function(e,n,t){"use strict";var i=t(13808),r=t(72791),a=t(53649),s=t(73201),o=t(74784),l=t(78633),c=t(90165),u=t(71306),d=t(24787),h=t(80184),f=["as","onSelect","activeKey","role","onKeyDown"];var m=function(){},v=(0,u.PB)("event-key"),x=r.forwardRef((function(e,n){var t,d,x=e.as,p=void 0===x?"div":x,b=e.onSelect,y=e.activeKey,Z=e.role,j=e.onKeyDown,g=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,f),C=(0,a.Z)(),E=(0,r.useRef)(!1),w=(0,r.useContext)(l.Z),N=(0,r.useContext)(c.Z);N&&(Z=Z||"tablist",y=N.activeKey,t=N.getControlledId,d=N.getControllerId);var k=(0,r.useRef)(null),O=function(e){var n=k.current;if(!n)return null;var t=(0,i.Z)(n,"[".concat(v,"]:not([aria-disabled=true])")),r=n.querySelector("[aria-selected=true]");if(!r)return null;var a=t.indexOf(r);if(-1===a)return null;var s=a+e;return s>=t.length&&(s=0),s<0&&(s=t.length-1),t[s]},K=function(e,n){null!=e&&(null==b||b(e,n),null==w||w(e,n))};(0,r.useEffect)((function(){if(k.current&&E.current){var e=k.current.querySelector("[".concat(v,"][aria-selected=true]"));null==e||e.focus()}E.current=!1}));var P=(0,s.Z)(n,k);return(0,h.jsx)(l.Z.Provider,{value:K,children:(0,h.jsx)(o.Z.Provider,{value:{role:Z,activeKey:(0,l.h)(y),getControlledId:t||m,getControllerId:d||m},children:(0,h.jsx)(p,Object.assign({},g,{onKeyDown:function(e){if(null==j||j(e),N){var n;switch(e.key){case"ArrowLeft":case"ArrowUp":n=O(-1);break;case"ArrowRight":case"ArrowDown":n=O(1);break;default:return}n&&(e.preventDefault(),K(n.dataset[(0,u.$F)("EventKey")]||null,e),E.current=!0,C())}},ref:P,role:Z}))})})}));x.displayName="Nav",n.Z=Object.assign(x,{Item:d.Z})},74784:function(e,n,t){"use strict";var i=t(72791).createContext(null);i.displayName="NavContext",n.Z=i},24787:function(e,n,t){"use strict";t.d(n,{v:function(){return h}});var i=t(29439),r=t(72791),a=t(39007),s=t(74784),o=t(78633),l=t(15341),c=t(71306),u=t(80184),d=["as","active","eventKey"];function h(e){var n=e.key,t=e.onClick,i=e.active,l=e.id,u=e.role,d=e.disabled,h=(0,r.useContext)(o.Z),f=(0,r.useContext)(s.Z),m=i,v={role:u};if(f){u||"tablist"!==f.role||(v.role="tab");var x=f.getControllerId(null!=n?n:null),p=f.getControlledId(null!=n?n:null);v[(0,c.PB)("event-key")]=n,v.id=x||l,v["aria-controls"]=p,m=null==i&&null!=n?f.activeKey===n:i}return"tab"===v.role&&(d&&(v.tabIndex=-1,v["aria-disabled"]=!0),m?v["aria-selected"]=m:v.tabIndex=-1),v.onClick=(0,a.Z)((function(e){d||(null==t||t(e),null!=n&&h&&!e.isPropagationStopped()&&h(n,e))})),[v,{isActive:m}]}var f=r.forwardRef((function(e,n){var t=e.as,r=void 0===t?l.ZP:t,a=e.active,s=e.eventKey,f=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,d),m=h(Object.assign({key:(0,o.h)(s,f.href),active:a},f)),v=(0,i.Z)(m,2),x=v[0],p=v[1];return x[(0,c.PB)("active")]=p.isActive,(0,u.jsx)(r,Object.assign({},f,x,{ref:n}))}));f.displayName="NavItem",n.Z=f},90165:function(e,n,t){"use strict";var i=t(72791).createContext(null);n.Z=i},13808:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var i=Function.prototype.bind.call(Function.prototype.call,[].slice);function r(e,n){return i(e.querySelectorAll(n))}},33573:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];function i(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];var r=null;return n.forEach((function(e){if(null==r){var n=e.apply(void 0,t);null!=n&&(r=n)}})),r}return(0,a.default)(i)};var i,r=t(46054),a=(i=r)&&i.__esModule?i:{default:i};e.exports=n.default},46054:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){function n(n,t,i,r,a,s){var o=r||"<<anonymous>>",l=s||i;if(null==t[i])return n?new Error("Required "+a+" `"+l+"` was not specified in `"+o+"`."):null;for(var c=arguments.length,u=Array(c>6?c-6:0),d=6;d<c;d++)u[d-6]=arguments[d];return e.apply(void 0,[t,i,o,a,l].concat(u))}var t=n.bind(null,!1);return t.isRequired=n.bind(null,!0),t},e.exports=n.default},80888:function(e,n,t){"use strict";var i=t(79047);function r(){}function a(){}a.resetWarningCache=r,e.exports=function(){function e(e,n,t,r,a,s){if(s!==i){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:a,resetWarningCache:r};return t.PropTypes=t,t}},52007:function(e,n,t){e.exports=t(80888)()},79047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},72709:function(e,n,t){"use strict";var i,r=t(1413),a=t(45987),s=t(4942),o=t(81694),l=t.n(o),c=t(72791),u=t(27726),d=t(71380),h=t(67202),f=t(85007),m=t(80184),v=["className","children","transitionClasses"],x=(i={},(0,s.Z)(i,u.d0,"show"),(0,s.Z)(i,u.cn,"show"),i),p=c.forwardRef((function(e,n){var t=e.className,i=e.children,s=e.transitionClasses,o=void 0===s?{}:s,u=(0,a.Z)(e,v),p=(0,c.useCallback)((function(e,n){(0,h.Z)(e),null==u.onEnter||u.onEnter(e,n)}),[u]);return(0,m.jsx)(f.Z,(0,r.Z)((0,r.Z)({ref:n,addEndListener:d.Z},u),{},{onEnter:p,childRef:i.ref,children:function(e,n){return c.cloneElement(i,(0,r.Z)((0,r.Z)({},n),{},{className:l()("fade",t,i.props.className,x[e],o[e])}))}}))}));p.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},p.displayName="Fade",n.Z=p},69532:function(e,n,t){"use strict";t.d(n,{Z:function(){return w}});var i=t(4942),r=t(1413),a=t(45987),s=t(81694),o=t.n(s),l=(t(33573),t(72791)),c=t(32592),u=t(41337),d=t(10162),h=t(5715),f=t(96040),m=(0,t(66543).Z)("nav-item"),v=t(29439),x=t(16445),p=t(24787),b=t(78633),y=t(80184),Z=["bsPrefix","className","as","active","eventKey"],j=l.forwardRef((function(e,n){var t=e.bsPrefix,i=e.className,s=e.as,l=void 0===s?x.Z:s,c=e.active,u=e.eventKey,h=(0,a.Z)(e,Z);t=(0,d.vE)(t,"nav-link");var f=(0,p.v)((0,r.Z)({key:(0,b.h)(u,h.href),active:c},h)),m=(0,v.Z)(f,2),j=m[0],g=m[1];return(0,y.jsx)(l,(0,r.Z)((0,r.Z)((0,r.Z)({},h),j),{},{ref:n,className:o()(i,t,h.disabled&&"disabled",g.isActive&&"active")}))}));j.displayName="NavLink",j.defaultProps={disabled:!1};var g=j,C=["as","bsPrefix","variant","fill","justify","navbar","navbarScroll","className","activeKey"],E=l.forwardRef((function(e,n){var t,s,m,v=(0,c.Ch)(e,{activeKey:"onSelect"}),x=v.as,p=void 0===x?"div":x,b=v.bsPrefix,Z=v.variant,j=v.fill,g=v.justify,E=v.navbar,w=v.navbarScroll,N=v.className,k=v.activeKey,O=(0,a.Z)(v,C),K=(0,d.vE)(b,"nav"),P=!1,q=(0,l.useContext)(h.Z),A=(0,l.useContext)(f.Z);return q?(s=q.bsPrefix,P=null==E||E):A&&(m=A.cardHeaderBsPrefix),(0,y.jsx)(u.Z,(0,r.Z)({as:p,ref:n,activeKey:k,className:o()(N,(t={},(0,i.Z)(t,K,!P),(0,i.Z)(t,"".concat(s,"-nav"),P),(0,i.Z)(t,"".concat(s,"-nav-scroll"),P&&w),(0,i.Z)(t,"".concat(m,"-").concat(Z),!!m),(0,i.Z)(t,"".concat(K,"-").concat(Z),!!Z),(0,i.Z)(t,"".concat(K,"-fill"),j),(0,i.Z)(t,"".concat(K,"-justified"),g),t))},O))}));E.displayName="Nav",E.defaultProps={justify:!1,fill:!1};var w=Object.assign(E,{Item:m,Link:g})},5715:function(e,n,t){"use strict";var i=t(72791).createContext(null);i.displayName="NavbarContext",n.Z=i},74342:function(e,n,t){"use strict";t.d(n,{Z:function(){return F}});var i=t(52007),r=t.n(i),a=t(72791),s=t(1413),o=t(45987),l=t(29439),c=t(32592),u=t(22021),d=t(90165),h=t(78633);var f=function(e){var n=e.children,t=e.in,i=e.mountOnEnter,r=e.unmountOnExit,s=(0,a.useRef)(t);return(0,a.useEffect)((function(){t&&(s.current=!0)}),[t]),t?n:r||!s.current&&i?null:n},m=t(80184),v=["active","eventKey","mountOnEnter","transition","unmountOnExit"],x=["activeKey","getControlledId","getControllerId"],p=["as"];function b(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}function y(e){var n=e.active,t=e.eventKey,i=e.mountOnEnter,r=e.transition,s=e.unmountOnExit,o=b(e,v),l=(0,a.useContext)(d.Z);if(!l)return[o,{eventKey:t,isActive:n,mountOnEnter:i,transition:r,unmountOnExit:s}];var c=l.activeKey,u=l.getControlledId,f=l.getControllerId,m=b(l,x),p=(0,h.h)(t);return[Object.assign({},o,{id:u(t),"aria-labelledby":f(t)}),{eventKey:t,isActive:null==n&&null!=p?(0,h.h)(c)===p:n,transition:r||m.transition,mountOnEnter:null!=i?i:m.mountOnEnter,unmountOnExit:null!=s?s:m.unmountOnExit}]}var Z=a.forwardRef((function(e,n){var t=e.as,i=void 0===t?"div":t,r=y(b(e,p)),a=(0,l.Z)(r,2),s=a[0],o=a[1],c=o.isActive,u=o.onEnter,v=o.onEntering,x=o.onEntered,Z=o.onExit,j=o.onExiting,g=o.onExited,C=o.mountOnEnter,E=o.unmountOnExit,w=o.transition,N=void 0===w?f:w;return(0,m.jsx)(d.Z.Provider,{value:null,children:(0,m.jsx)(h.Z.Provider,{value:null,children:(0,m.jsx)(N,{in:c,onEnter:u,onEntering:v,onEntered:x,onExit:Z,onExiting:j,onExited:g,mountOnEnter:C,unmountOnExit:E,children:(0,m.jsx)(i,Object.assign({},s,{ref:n,role:"tabpanel",hidden:!c,"aria-hidden":!c}))})})})}));Z.displayName="TabPanel";var j=function(e){var n=e.id,t=e.generateChildId,i=e.onSelect,r=e.activeKey,s=e.defaultActiveKey,o=e.transition,f=e.mountOnEnter,v=e.unmountOnExit,x=e.children,p=(0,c.$c)(r,s,i),b=(0,l.Z)(p,2),y=b[0],Z=b[1],j=(0,u.gP)(n),g=(0,a.useMemo)((function(){return t||function(e,n){return j?"".concat(j,"-").concat(n,"-").concat(e):null}}),[j,t]),C=(0,a.useMemo)((function(){return{onSelect:Z,activeKey:y,transition:o,mountOnEnter:f||!1,unmountOnExit:v||!1,getControlledId:function(e){return g(e,"tabpane")},getControllerId:function(e){return g(e,"tab")}}}),[Z,y,o,f,v,g]);return(0,m.jsx)(d.Z.Provider,{value:C,children:(0,m.jsx)(h.Z.Provider,{value:Z||null,children:x})})};j.Panel=Z;var g=j,C=t(72709);function E(e){return"boolean"===typeof e?e?C.Z:void 0:e}var w=["transition"],N=function(e){var n=e.transition,t=(0,o.Z)(e,w);return(0,m.jsx)(g,(0,s.Z)((0,s.Z)({},t),{},{transition:E(n)}))};N.displayName="TabContainer";var k=N,O=(0,t(66543).Z)("tab-content"),K=t(81694),P=t.n(K),q=t(10162),A=["bsPrefix","transition"],S=["className","as"],I=a.forwardRef((function(e,n){var t=e.bsPrefix,i=e.transition,r=(0,o.Z)(e,A),a=y((0,s.Z)((0,s.Z)({},r),{},{transition:E(i)})),c=(0,l.Z)(a,2),u=c[0],v=u.className,x=u.as,p=void 0===x?"div":x,b=(0,o.Z)(u,S),Z=c[1],j=Z.isActive,g=Z.onEnter,C=Z.onEntering,w=Z.onEntered,N=Z.onExit,k=Z.onExiting,O=Z.onExited,K=Z.mountOnEnter,I=Z.unmountOnExit,T=Z.transition,B=void 0===T?f:T,R=(0,q.vE)(t,"tab-pane");return(0,m.jsx)(d.Z.Provider,{value:null,children:(0,m.jsx)(h.Z.Provider,{value:null,children:(0,m.jsx)(B,{in:j,onEnter:g,onEntering:C,onEntered:w,onExit:N,onExiting:k,onExited:O,mountOnEnter:K,unmountOnExit:I,children:(0,m.jsx)(p,(0,s.Z)((0,s.Z)({},b),{},{ref:n,className:P()(v,R,j&&"active")}))})})})}));I.displayName="TabPane";var T=I,B={eventKey:r().oneOfType([r().string,r().number]),title:r().node.isRequired,disabled:r().bool,tabClassName:r().string},R=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};R.propTypes=B;var F=Object.assign(R,{Container:k,Content:O,Pane:T})}}]);
//# sourceMappingURL=9766.970e2bd7.chunk.js.map