(self.webpackChunkadminto_react=self.webpackChunkadminto_react||[]).push([[3520],{80888:function(e,a,r){"use strict";var i=r(79047);function t(){}function s(){}s.resetWarningCache=t,e.exports=function(){function e(e,a,r,t,s,n){if(n!==i){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function a(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:s,resetWarningCache:t};return r.PropTypes=r,r}},52007:function(e,a,r){e.exports=r(80888)()},79047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},11701:function(e,a,r){"use strict";r.d(a,{UI:function(){return t},Ed:function(){return s},XW:function(){return n}});var i=r(72791);function t(e,a){var r=0;return i.Children.map(e,(function(e){return i.isValidElement(e)?a(e,r++):e}))}function s(e,a){var r=0;i.Children.forEach(e,(function(e){i.isValidElement(e)&&a(e,r++)}))}function n(e,a){return i.Children.toArray(e).some((function(e){return i.isValidElement(e)&&e.type===a}))}},73053:function(e,a,r){"use strict";var i=r(1413),t=r(45987),s=r(81694),n=r.n(s),o=r(72791),l=r(323),c=r(10162),d=r(80184),f=["bsPrefix","className","children","controlId","label"],u=o.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,o=e.children,u=e.controlId,m=e.label,v=(0,t.Z)(e,f);return r=(0,c.vE)(r,"form-floating"),(0,d.jsxs)(l.Z,(0,i.Z)((0,i.Z)({ref:a,className:n()(s,r),controlId:u},v),{},{children:[o,(0,d.jsx)("label",{htmlFor:u,children:m})]}))}));u.displayName="FloatingLabel",a.Z=u},21827:function(e,a,r){"use strict";r.d(a,{Z:function(){return J}});var i=r(1413),t=r(45987),s=r(81694),n=r.n(s),o=r(52007),l=r.n(o),c=r(72791),d=r(80184),f=["as","className","type","tooltip"],u={type:l().string,tooltip:l().bool,as:l().elementType},m=c.forwardRef((function(e,a){var r=e.as,s=void 0===r?"div":r,o=e.className,l=e.type,c=void 0===l?"valid":l,u=e.tooltip,m=void 0!==u&&u,v=(0,t.Z)(e,f);return(0,d.jsx)(s,(0,i.Z)((0,i.Z)({},v),{},{ref:a,className:n()(o,"".concat(c,"-").concat(m?"tooltip":"feedback"))}))}));m.displayName="Feedback",m.propTypes=u;var v=m,p=r(96882),b=r(84934),x=r(10162),Z=["bsPrefix","className","htmlFor"],y=c.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,o=e.htmlFor,l=(0,t.Z)(e,Z),f=(0,c.useContext)(b.Z).controlId;return r=(0,x.vE)(r,"form-check-label"),(0,d.jsx)("label",(0,i.Z)((0,i.Z)({},l),{},{ref:a,htmlFor:o||f,className:n()(s,r)}))}));y.displayName="FormCheckLabel";var h=y,N=r(11701),P=["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],I=c.forwardRef((function(e,a){var r=e.id,s=e.bsPrefix,o=e.bsSwitchPrefix,l=e.inline,f=void 0!==l&&l,u=e.disabled,m=void 0!==u&&u,Z=e.isValid,y=void 0!==Z&&Z,I=e.isInvalid,j=void 0!==I&&I,w=e.feedbackTooltip,k=void 0!==w&&w,C=e.feedback,F=e.feedbackType,g=e.className,R=e.style,E=e.title,T=void 0===E?"":E,O=e.type,S=void 0===O?"checkbox":O,V=e.label,_=e.children,z=e.as,L=void 0===z?"input":z,U=(0,t.Z)(e,P);s=(0,x.vE)(s,"form-check"),o=(0,x.vE)(o,"form-switch");var W=(0,c.useContext)(b.Z).controlId,H=(0,c.useMemo)((function(){return{controlId:r||W}}),[W,r]),A=!_&&null!=V&&!1!==V||(0,N.XW)(_,h),D=(0,d.jsx)(p.Z,(0,i.Z)((0,i.Z)({},U),{},{type:"switch"===S?"checkbox":S,ref:a,isValid:y,isInvalid:j,disabled:m,as:L}));return(0,d.jsx)(b.Z.Provider,{value:H,children:(0,d.jsx)("div",{style:R,className:n()(g,A&&s,f&&"".concat(s,"-inline"),"switch"===S&&o),children:_||(0,d.jsxs)(d.Fragment,{children:[D,A&&(0,d.jsx)(h,{title:T,children:V}),C&&(0,d.jsx)(v,{type:F,tooltip:k,children:C})]})})})}));I.displayName="FormCheck";var j=Object.assign(I,{Input:p.Z,Label:h}),w=r(4942),k=(r(42391),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),C=c.forwardRef((function(e,a){var r,s,o=e.bsPrefix,l=e.type,f=e.size,u=e.htmlSize,m=e.id,v=e.className,p=e.isValid,Z=void 0!==p&&p,y=e.isInvalid,h=void 0!==y&&y,N=e.plaintext,P=e.readOnly,I=e.as,j=void 0===I?"input":I,C=(0,t.Z)(e,k),F=(0,c.useContext)(b.Z).controlId;(o=(0,x.vE)(o,"form-control"),N)?r=(0,w.Z)({},"".concat(o,"-plaintext"),!0):(s={},(0,w.Z)(s,o,!0),(0,w.Z)(s,"".concat(o,"-").concat(f),f),r=s);return(0,d.jsx)(j,(0,i.Z)((0,i.Z)({},C),{},{type:l,size:u,ref:a,readOnly:P,id:m||F,className:n()(v,r,Z&&"is-valid",h&&"is-invalid","color"===l&&"".concat(o,"-color"))}))}));C.displayName="FormControl";var F=Object.assign(C,{Feedback:v}),g=(0,r(66543).Z)("form-floating"),R=r(323),E=r(2677),T=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],O=c.forwardRef((function(e,a){var r=e.as,s=void 0===r?"label":r,o=e.bsPrefix,l=e.column,f=e.visuallyHidden,u=e.className,m=e.htmlFor,v=(0,t.Z)(e,T),p=(0,c.useContext)(b.Z).controlId;o=(0,x.vE)(o,"form-label");var Z="col-form-label";"string"===typeof l&&(Z="".concat(Z," ").concat(Z,"-").concat(l));var y=n()(u,o,f&&"visually-hidden",l&&Z);return m=m||p,l?(0,d.jsx)(E.Z,(0,i.Z)({ref:a,as:"label",className:y,htmlFor:m},v)):(0,d.jsx)(s,(0,i.Z)({ref:a,className:y,htmlFor:m},v))}));O.displayName="FormLabel",O.defaultProps={column:!1,visuallyHidden:!1};var S=O,V=["bsPrefix","className","id"],_=c.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,o=e.id,l=(0,t.Z)(e,V),f=(0,c.useContext)(b.Z).controlId;return r=(0,x.vE)(r,"form-range"),(0,d.jsx)("input",(0,i.Z)((0,i.Z)({},l),{},{type:"range",ref:a,className:n()(s,r),id:o||f}))}));_.displayName="FormRange";var z=_,L=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],U=c.forwardRef((function(e,a){var r=e.bsPrefix,s=e.size,o=e.htmlSize,l=e.className,f=e.isValid,u=void 0!==f&&f,m=e.isInvalid,v=void 0!==m&&m,p=e.id,Z=(0,t.Z)(e,L),y=(0,c.useContext)(b.Z).controlId;return r=(0,x.vE)(r,"form-select"),(0,d.jsx)("select",(0,i.Z)((0,i.Z)({},Z),{},{size:o,ref:a,className:n()(l,r,s&&"".concat(r,"-").concat(s),u&&"is-valid",v&&"is-invalid"),id:p||y}))}));U.displayName="FormSelect";var W=U,H=["bsPrefix","className","as","muted"],A=c.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,o=e.as,l=void 0===o?"small":o,c=e.muted,f=(0,t.Z)(e,H);return r=(0,x.vE)(r,"form-text"),(0,d.jsx)(l,(0,i.Z)((0,i.Z)({},f),{},{ref:a,className:n()(s,r,c&&"text-muted")}))}));A.displayName="FormText";var D=A,G=c.forwardRef((function(e,a){return(0,d.jsx)(j,(0,i.Z)((0,i.Z)({},e),{},{ref:a,type:"switch"}))}));G.displayName="Switch";var M=Object.assign(G,{Input:j.Input,Label:j.Label}),X=r(73053),q=["className","validated","as"],B={_ref:l().any,validated:l().bool,as:l().elementType},Y=c.forwardRef((function(e,a){var r=e.className,s=e.validated,o=e.as,l=void 0===o?"form":o,c=(0,t.Z)(e,q);return(0,d.jsx)(l,(0,i.Z)((0,i.Z)({},c),{},{ref:a,className:n()(r,s&&"was-validated")}))}));Y.displayName="Form",Y.propTypes=B;var J=Object.assign(Y,{Group:R.Z,Control:F,Floating:g,Check:j,Switch:M,Label:S,Text:D,Range:z,Select:W,FloatingLabel:X.Z})},96882:function(e,a,r){"use strict";var i=r(1413),t=r(45987),s=r(81694),n=r.n(s),o=r(72791),l=r(84934),c=r(10162),d=r(80184),f=["id","bsPrefix","className","type","isValid","isInvalid","as"],u=o.forwardRef((function(e,a){var r=e.id,s=e.bsPrefix,u=e.className,m=e.type,v=void 0===m?"checkbox":m,p=e.isValid,b=void 0!==p&&p,x=e.isInvalid,Z=void 0!==x&&x,y=e.as,h=void 0===y?"input":y,N=(0,t.Z)(e,f),P=(0,o.useContext)(l.Z).controlId;return s=(0,c.vE)(s,"form-check-input"),(0,d.jsx)(h,(0,i.Z)((0,i.Z)({},N),{},{ref:a,type:v,id:r||P,className:n()(u,s,b&&"is-valid",Z&&"is-invalid")}))}));u.displayName="FormCheckInput",a.Z=u},84934:function(e,a,r){"use strict";var i=r(72791).createContext({});a.Z=i},323:function(e,a,r){"use strict";var i=r(1413),t=r(45987),s=r(72791),n=r(84934),o=r(80184),l=["controlId","as"],c=s.forwardRef((function(e,a){var r=e.controlId,c=e.as,d=void 0===c?"div":c,f=(0,t.Z)(e,l),u=(0,s.useMemo)((function(){return{controlId:r}}),[r]);return(0,o.jsx)(n.Z.Provider,{value:u,children:(0,o.jsx)(d,(0,i.Z)((0,i.Z)({},f),{},{ref:a}))})}));c.displayName="FormGroup",a.Z=c},66543:function(e,a,r){"use strict";r.d(a,{Z:function(){return m}});var i=r(1413),t=r(45987),s=r(81694),n=r.n(s),o=/-(.)/g;var l=r(72791),c=r(10162),d=r(80184),f=["className","bsPrefix","as"],u=function(e){return e[0].toUpperCase()+(a=e,a.replace(o,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function m(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=a.displayName,s=void 0===r?u(e):r,o=a.Component,m=a.defaultProps,v=l.forwardRef((function(a,r){var s=a.className,l=a.bsPrefix,u=a.as,m=void 0===u?o||"div":u,v=(0,t.Z)(a,f),p=(0,c.vE)(l,e);return(0,d.jsx)(m,(0,i.Z)({ref:r,className:n()(s,p)},v))}));return v.defaultProps=m,v.displayName=s,v}},27472:function(e,a,r){"use strict";var i=r(1413),t=r(72791),s=r(81694),n=r.n(s),o=r(80184);a.Z=function(e){return t.forwardRef((function(a,r){return(0,o.jsx)("div",(0,i.Z)((0,i.Z)({},a),{},{ref:r,className:n()(a.className,e)}))}))}},42391:function(e){"use strict";var a=function(){};e.exports=a}}]);
//# sourceMappingURL=3520.60fa5357.chunk.js.map