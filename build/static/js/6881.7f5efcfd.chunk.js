"use strict";(self.webpackChunkadminto_react=self.webpackChunkadminto_react||[]).push([[6881],{13966:function(e,n,r){var a=r(29439),t=r(72791),s=r(39193),c=r(80184),i={display:"block",margin:"0 auto",borderColor:"red"};n.Z=function(e){var n=(0,t.useState)("#0351AA"),r=(0,a.Z)(n,1)[0];return(0,c.jsx)("div",{className:"container-loading",hidden:!e.loading,children:(0,c.jsx)(s.Z,{color:r,loading:e.loading,cssOverride:i,size:15})})}},9189:function(e,n,r){r.d(n,{Z:function(){return x}});var a=r(93433),t=r(1413),s=r(45987),c=r(29439),i=r(72791),l=r(71358),o=r(81694),u=r.n(o),d=r(23922),p=r(80184),f=function(e){var n=e.tableProps,r=e.sizePerPageList,a=(0,i.useState)(n.pageCount),t=(0,c.Z)(a,2),s=t[0],l=t[1],o=(0,i.useState)(n.state.pageIndex),f=(0,c.Z)(o,2),m=f[0],g=f[1];(0,i.useEffect)((function(){l(n.pageCount),g(n.state.pageIndex)}),[n.pageCount,n.state.pageIndex]);var h=(0,i.useCallback)((function(e,n){return e.filter((function(e){return e<=s}))}),[s]),x=(0,i.useCallback)((function(e,n){return n<7?h([1,2,3,4,5,6],n):e%5>=0&&e>4&&e+2<n?[1,e-1,e,e+1,n]:e%5>=0&&e>4&&e+2>=n?[1,n-3,n-2,n-1,n]:[1,2,3,4,5,n]}),[h]),b=function(e){if(e!==m+1){var r=x(e,s);N(h(r,s)),n.gotoPage(e-1)}};(0,i.useEffect)((function(){var e=x(null,s);N(e)}),[s,x]);var v=(0,i.useState)(x(null,s)),j=(0,c.Z)(v,2),Z=j[0],N=j[1],y=m+1;return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:"d-lg-flex align-items-center text-center pb-1",children:[r.length>0&&(0,p.jsxs)("div",{className:"d-inline-block me-3",children:[(0,p.jsx)("label",{className:"me-1",children:"Mostrando :"}),(0,p.jsx)("select",{value:n.state.pageSize,onChange:function(e){n.setPageSize(Number(e.currentTarget.value))},className:"form-select d-inline-block w-auto",children:(r||[]).map((function(e,n){return(0,p.jsx)("option",{value:e.value,children:e.text},n.toString())}))})]}),(0,p.jsxs)("span",{className:"me-3",children:["P\xe1gina"," ",(0,p.jsxs)("strong",{children:[m+1," de ",n.pageOptions.length]})," "]}),(0,p.jsxs)("span",{className:"d-inline-block align-items-center text-sm-start text-center my-sm-0 my-2",children:[(0,p.jsx)("label",{className:"form-label",children:"Ir a la p\xe1gina: "}),(0,p.jsx)("input",{type:"number",value:m+1,min:"1",onChange:function(e){var r=e.currentTarget.value?Number(e.currentTarget.value)-1:0;n.gotoPage(r),g(n.state.pageIndex)},className:"form-control w-25 ms-1 d-inline-block"})]}),(0,p.jsxs)("ul",{className:"pagination pagination-rounded d-inline-flex ms-auto align-item-center mb-0",children:[(0,p.jsx)("li",{className:u()("page-item","paginate_button","previous",{disabled:1===y}),onClick:function(){1!==y&&b(y-1)},children:(0,p.jsx)(d.rU,{to:"#",className:"page-link",children:(0,p.jsx)("i",{className:"mdi mdi-chevron-left"})})},"prevpage"),(Z||[]).map((function(e,n,r){return r[n-1]+1<e?(0,p.jsxs)(i.Fragment,{children:[(0,p.jsx)("li",{className:"page-item disabled d-none d-xl-inline-block",children:(0,p.jsx)(d.rU,{to:"#",className:"page-link",children:"..."})}),(0,p.jsx)("li",{className:u()("page-item","d-none","d-xl-inline-block",{active:y===e}),onClick:function(n){return b(e)},children:(0,p.jsx)(d.rU,{to:"#",className:"page-link",children:e})})]},e):(0,p.jsx)("li",{className:u()("page-item","d-none","d-xl-inline-block",{active:y===e}),onClick:function(n){return b(e)},children:(0,p.jsx)(d.rU,{to:"#",className:"page-link",children:e})},e)})),(0,p.jsx)("li",{className:u()("page-item","paginate_button","next",{disabled:y===n.pageCount}),onClick:function(){y!==n.pageCount&&b(y+1)},children:(0,p.jsx)(d.rU,{to:"#",className:"page-link",children:(0,p.jsx)("i",{className:"mdi mdi-chevron-right"})})},"nextpage")]})]})})},m=["indeterminate"],g=function(e){var n=e.preGlobalFilteredRows,r=e.globalFilter,a=e.setGlobalFilter,t=e.searchBoxClass,s=n.length,o=(0,i.useState)(r),d=(0,c.Z)(o,2),f=d[0],m=d[1],g=(0,l.useAsyncDebounce)((function(e){a(e||void 0)}),200);return(0,p.jsx)("div",{className:u()(t),children:(0,p.jsxs)("span",{className:"d-flex align-items-center",children:["Buscar :"," ",(0,p.jsx)("input",{type:"search",value:f||"",onChange:function(e){m(e.target.value),g(e.target.value)},placeholder:"".concat(s," registros..."),className:"form-control w-auto ms-1"})]})})},h=(0,i.forwardRef)((function(e,n){var r=e.indeterminate,a=(0,s.Z)(e,m),c=(0,i.useRef)(),l=n||c;return(0,i.useEffect)((function(){l.current.indeterminate=r}),[l,r]),(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:"form-check",children:[(0,p.jsx)("input",(0,t.Z)({type:"checkbox",className:"form-check-input",ref:l},a)),(0,p.jsx)("label",{htmlFor:"form-check-input",className:"form-check-label"})]})})})),x=function(e){var n=e.isSearchable||!1,r=e.isSortable||!1,s=e.pagination||!1,c=e.isSelectable||!1,i=e.isExpandable||!1,o=e.sizePerPageList||[],d={};n&&(d.useGlobalFilter=l.useGlobalFilter),r&&(d.useSortBy=l.useSortBy),i&&(d.useExpanded=l.useExpanded),s&&(d.usePagination=l.usePagination),c&&(d.useRowSelect=l.useRowSelect);var m=(0,l.useTable)({columns:e.columns,data:e.data,initialState:{pageSize:e.pageSize||10}},d.hasOwnProperty("useGlobalFilter")&&d.useGlobalFilter,d.hasOwnProperty("useSortBy")&&d.useSortBy,d.hasOwnProperty("useExpanded")&&d.useExpanded,d.hasOwnProperty("usePagination")&&d.usePagination,d.hasOwnProperty("useRowSelect")&&d.useRowSelect,(function(e){c&&e.visibleColumns.push((function(e){return[{id:"selection",Header:function(e){var n=e.getToggleAllPageRowsSelectedProps;return(0,p.jsx)("div",{children:(0,p.jsx)(h,(0,t.Z)({},n()))})},Cell:function(e){var n=e.row;return(0,p.jsx)("div",{children:(0,p.jsx)(h,(0,t.Z)({},n.getToggleRowSelectedProps()))})}}].concat((0,a.Z)(e))})),i&&e.visibleColumns.push((function(e){return[{id:"expander",Header:function(e){var n=e.getToggleAllRowsExpandedProps,r=e.isAllRowsExpanded;return(0,p.jsx)("span",(0,t.Z)((0,t.Z)({},n()),{},{children:r?"-":"+"}))},Cell:function(e){var n=e.row;return n.canExpand?(0,p.jsx)("span",(0,t.Z)((0,t.Z)({},n.getToggleRowExpandedProps({style:{paddingLeft:"".concat(2*n.depth,"rem")}})),{},{children:n.isExpanded?"-":"+"})):null}}].concat((0,a.Z)(e))}))})),x=s?m.page:m.rows;return(0,p.jsxs)(p.Fragment,{children:[n&&(0,p.jsx)(g,{preGlobalFilteredRows:m.preGlobalFilteredRows,globalFilter:m.state.globalFilter,setGlobalFilter:m.setGlobalFilter,searchBoxClass:e.searchBoxClass}),(0,p.jsx)("div",{className:"table-responsive",children:(0,p.jsxs)("table",(0,t.Z)((0,t.Z)({},m.getTableProps()),{},{className:u()("table table-centered react-table",e.tableClass),children:[(0,p.jsx)("thead",{className:e.theadClass,children:(m.headerGroups||[]).map((function(e){return(0,p.jsx)("tr",(0,t.Z)((0,t.Z)({},e.getHeaderGroupProps()),{},{children:(e.headers||[]).map((function(e){return(0,p.jsx)("th",(0,t.Z)((0,t.Z)({},e.getHeaderProps(e.sort&&e.getSortByToggleProps())),{},{className:u()({sorting_desc:!0===e.isSortedDesc,sorting_asc:!1===e.isSortedDesc,sortable:!0===e.sort}),children:e.render("Header")}))}))}))}))}),(0,p.jsx)("tbody",(0,t.Z)((0,t.Z)({},m.getTableBodyProps()),{},{children:(x||[]).map((function(e,n){return m.prepareRow(e),(0,p.jsx)("tr",(0,t.Z)((0,t.Z)({},e.getRowProps()),{},{children:(e.cells||[]).map((function(e){return(0,p.jsx)("td",(0,t.Z)((0,t.Z)({},e.getCellProps([{className:e.column.className}])),{},{children:e.render("Cell")}))}))}))}))}))]}))}),s&&(0,p.jsx)(f,{tableProps:m,sizePerPageList:o})]})}},9823:function(e,n,r){var a=r(1413),t=r(29439),s=r(45987),c=r(72791),i=r(99410),l=r(21827),o=r(81694),u=r.n(o),d=r(80184),p=["name","placeholder","refCallback","errors","control","register","className"],f=["type","name","placeholder","endIcon","register","errors","comp","rows","className","refCallback"],m=["type","label","name","placeholder","register","errors","comp","rows","className","refCallback"],g=["type","label","name","placeholder","register","errors","comp","className","children","refCallback"],h=["label","type","name","placeholder","endIcon","register","errors","control","className","labelClassName","containerClass","refCallback","children","action","rows"],x=function(e){var n=e.name,r=e.placeholder,o=e.refCallback,f=e.errors,m=(e.control,e.register),g=e.className,h=(0,s.Z)(e,p),x=(0,c.useState)(!1),b=(0,t.Z)(x,2),v=b[0],j=b[1];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(i.Z,{className:"mb-0",children:[(0,d.jsx)(l.Z.Control,(0,a.Z)((0,a.Z)({type:v?"text":"password",placeholder:r,name:n,id:n,as:"input",ref:function(e){o&&o(e)},className:g,isInvalid:!(!f||!f[n])},m?m(n):{}),{},{autoComplete:n},h)),(0,d.jsx)("div",{className:u()("input-group-text","input-group-password",{"show-password":v}),"data-password":v?"true":"false",children:(0,d.jsx)("span",{className:"password-eye",onClick:function(){j(!v)}})})]}),f&&f[n]?(0,d.jsx)(l.Z.Control.Feedback,{type:"invalid",className:"d-block",children:f[n].message}):null]})},b=function(e){var n=e.type,r=e.name,t=e.placeholder,c=e.endIcon,i=e.register,o=e.errors,u=e.comp,p=e.rows,m=e.className,g=e.refCallback,h=(0,s.Z)(e,f);return(0,d.jsx)(d.Fragment,{children:"password"===n&&c?(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(x,(0,a.Z)({name:r,placeholder:t,refCallback:g,errors:o,register:i,className:m},h))}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l.Z.Control,(0,a.Z)((0,a.Z)({type:n,placeholder:t,name:r,as:u,id:r,ref:function(e){g&&g(e)},className:m,isInvalid:!(!o||!o[r])},i?i(r):{}),{},{rows:p},h)),o&&o[r]?(0,d.jsx)(l.Z.Control.Feedback,{type:"invalid",className:"d-block",children:o[r].message}):null]})})},v=function(e){var n=e.type,r=e.label,t=e.name,c=(e.placeholder,e.register),i=e.errors,o=(e.comp,e.rows,e.className),u=e.refCallback,p=(0,s.Z)(e,m);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l.Z.Check,(0,a.Z)((0,a.Z)({type:n,label:r,name:t,id:t,ref:function(e){u&&u(e)},className:o,isInvalid:!(!i||!i[t])},c?c(t):{}),p)),i&&i[t]?(0,d.jsx)(l.Z.Control.Feedback,{type:"invalid",className:"d-block",children:i[t].message}):null]})},j=function(e){var n=e.type,r=e.label,t=e.name,c=(e.placeholder,e.register),i=e.errors,o=(e.comp,e.className),u=e.children,p=e.refCallback,f=(0,s.Z)(e,g);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l.Z.Select,(0,a.Z)((0,a.Z)({type:n,label:r,name:t,id:t,ref:function(e){p&&p(e)},children:u,className:o,isInvalid:!(!i||!i[t])},c?c(t):{}),f)),i&&i[t]?(0,d.jsx)(l.Z.Control.Feedback,{type:"invalid",children:i[t].message}):null]})};n.Z=function(e){var n=e.label,r=e.type,t=e.name,c=e.placeholder,i=e.endIcon,o=e.register,u=e.errors,p=(e.control,e.className),f=e.labelClassName,m=e.containerClass,g=e.refCallback,x=e.children,Z=e.action,N=e.rows,y=(0,s.Z)(e,h),C="textarea"===r?"textarea":"select"===r?"select":"input",k=void 0===i||i;return(0,d.jsx)(d.Fragment,{children:"hidden"===r?(0,d.jsx)("input",(0,a.Z)((0,a.Z)({type:r,name:t},o?o(t):{}),y)):(0,d.jsx)(d.Fragment,{children:"select"===r?(0,d.jsxs)(l.Z.Group,{className:m,children:[n?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l.Z.Label,{className:f,children:n}),Z&&Z]}):null,(0,d.jsx)(j,(0,a.Z)({type:r,name:t,placeholder:c,refCallback:g,errors:u,register:o,comp:C,className:p,children:x},y))]}):(0,d.jsx)(d.Fragment,{children:"checkbox"===r||"radio"===r?(0,d.jsx)(l.Z.Group,{className:m,children:(0,d.jsx)(v,(0,a.Z)({type:r,label:n,name:t,placeholder:c,refCallback:g,errors:u,register:o,comp:C,className:p,rows:N},y))}):(0,d.jsxs)(l.Z.Group,{className:m,children:[n?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l.Z.Label,{className:f,children:n}),Z&&Z]}):null,(0,d.jsx)(b,(0,a.Z)({type:r,name:t,placeholder:c,endIcon:k,refCallback:g,errors:u,register:o,comp:C,className:p,rows:N},y))]})})})})}},95262:function(e,n,r){r.d(n,{y:function(){return l.Z},J:function(){return i}});var a=r(1413),t=r(72791),s=r(61134),c=r(80184),i=function(e){var n=e.defaultValues,r=e.resolver,i=e.children,l=e.onSubmit,o=e.formClass,u=(0,s.cI)({defaultValues:n,resolver:r}),d=u.handleSubmit,p=u.register,f=u.control,m=u.formState.errors;return(0,c.jsx)("form",{onSubmit:d(l),className:o,noValidate:!0,children:Array.isArray(i)?i.map((function(e){return e.props&&e.props.name?t.createElement(e.type,(0,a.Z)({},(0,a.Z)((0,a.Z)({},e.props),{},{register:p,key:e.props.name,errors:m,control:f}))):e})):i})},l=r(9823)},70751:function(e,n,r){r.d(n,{Bd:function(){return h},Z$:function(){return x},iI:function(){return f},p_:function(){return m},f9:function(){return g},qL:function(){return t},m5:function(){return s},h0:function(){return c},QS:function(){return l},MZ:function(){return o},ap:function(){return u},gB:function(){return d},fS:function(){return i},hm:function(){return p}});var a=new(r(42738).u);function t(e){return a.get("".concat("/invoices"),e)}function s(e){var n="/invoicesById/"+e;return a.get("".concat(n),{})}function c(e){return a.create("".concat("/invoices/validate"),e)}function i(e){return a.create("".concat("/invoices/cancel"),e)}function l(){return a.get("".concat("/getAllSarSetting"),{})}function o(){return a.get("".concat("/branches"),{})}function u(e){return a.create("".concat("/createBranch"),e)}function d(e){return a.create("".concat("/createSarSetting"),e)}function p(e){return a.create("".concat("/invoices/addExoneration"),e)}function f(e){return a.create("".concat("/invoices/addLine"),e)}function m(e){return a.create("".concat("/invoices/editLine"),e)}function g(e){return a.create("".concat("/invoices/removeLine"),e)}function h(e){return a.create("".concat("/invoices/sendEmail"),e)}function x(e){return a.create("".concat("/invoices/create"),e)}},37893:function(e,n,r){r.d(n,{Ae:function(){return t},T$:function(){return s},c3:function(){return c},Mx:function(){return i},o_:function(){return l},cV:function(){return o},dI:function(){return u},Ug:function(){return d},lv:function(){return p},XU:function(){return f},Uy:function(){return m},Vg:function(){return g},kj:function(){return h},cn:function(){return x},Nq:function(){return b},Rf:function(){return v},eR:function(){return j},_y:function(){return Z},kZ:function(){return N},EW:function(){return y}});var a=new(r(42738).u);function t(e){return a.create("".concat("/vehicleType/create"),e)}function s(e){return a.updatePatch("".concat("/vehicleType/update"),e)}function c(e){return a.get("".concat("/vehicleTypes"),e)}function i(e){return a.updatePatch("".concat("/updateSarSetting"),e)}function l(e){return a.create("".concat("/updateBranch"),e)}function o(e){return a.get("".concat("/vehicleFields"),e)}function u(e){return a.get("".concat("/getVehicleTypeById"),e)}function d(e){return a.updatePatch("".concat("/evaluationItem/update"),e)}function p(e){return a.create("".concat("/evaluationItem/create"),e)}function f(e){return a.create("".concat("/evaluationList/create"),e)}function m(e){return a.updatePatch("".concat("/inspectionItem/update"),e)}function g(e){return a.create("".concat("/inspectionItem/create"),e)}function h(e){return a.create("".concat("/inspectionList/create"),e)}function x(e){return a.create("".concat("/user/create"),e)}function b(e){return a.updatePatch("".concat("/user/update"),e)}function v(){return a.get("".concat("/users"),{})}function j(){return a.get("".concat("/userTypes"),{})}function Z(e){return a.create("".concat("/insurer/create"),e)}function N(e){return a.updatePatch("".concat("/insurer/update"),e)}function y(){return a.get("".concat("/insurers"),{})}},36881:function(e,n,r){r.r(n),r.d(n,{default:function(){return _}});var a=r(15861),t=r(29439),s=r(64687),c=r.n(s),i=r(89743),l=r(2677),o=r(9140),u=r(9189),d=r(51649),p=r(72791),f=r(1413),m=r(95316),g=r(43360),h=r(95262),x=r(61265),b=r(76863),v=r(70751),j=r(37893),Z=r(21830),N=r.n(Z),y=r(80184),C=function(e){var n=e.sarSetting,r=e.toggle,t=e.modal,s=e.action,i=(0,x.X)(b.Ry().shape({cai:b.Z_().required("Por favor ingrese el cai"),prefix:b.Z_().required("Por favor ingrese el prefijo"),start_range:b.Z_().required("Por favor ingrese el rango inicial"),end_range:b.Z_().required("Por favor ingrese el rango final"),expiration_date:b.Z_().required("Por favor ingrese la fecha de expiracion")})),l=function(){return"edit"===s?"Editar":"Agregar"};return(0,y.jsxs)(m.Z,{show:t,onHide:r,centered:!0,children:[(0,y.jsx)(m.Z.Header,{closeButton:!0,children:(0,y.jsxs)(m.Z.Title,{as:"h4",children:[l()," rango de facturaci\xf3n"]})}),(0,y.jsx)(m.Z.Body,{children:(0,y.jsxs)(h.J,{onSubmit:function(){var e=(0,a.Z)(c().mark((function e(n){var a,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a={cai:n.cai,prefix:n.prefix,startRange:n.start_range,endRange:n.end_range,nextNumber:n.start_range,expirationDate:n.expiration_date},"edit"!==s){e.next=8;break}return a.sarSettingId=n.sar_setting_id,e.next=5,(0,j.Mx)(a);case 5:t=e.sent,e.next=11;break;case 8:return e.next=10,(0,v.gB)(a);case 10:t=e.sent;case 11:200===t.data.meta.code?r():N().fire("Error",t.data.data.error.message,"error");case 12:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),resolver:i,defaultValues:(0,f.Z)({},n),children:[(0,y.jsx)(h.y,{label:"Cai",type:"text",name:"cai",placeholder:"Ingrese el cai",containerClass:"mb-3"}),(0,y.jsx)(h.y,{label:"Prefijo",type:"text",name:"prefix",placeholder:"Ingrese el prefijo",containerClass:"mb-3"}),(0,y.jsx)(h.y,{label:"Rango inicial",type:"text",name:"start_range",placeholder:"Ingrese el rango inicial",containerClass:"mb-3"}),(0,y.jsx)(h.y,{label:"Rango final",type:"text",name:"end_range",placeholder:"Ingrese el rango final",containerClass:"mb-3"}),(0,y.jsx)(h.y,{label:"Fecha de expiracion",type:"date",name:"expiration_date",placeholder:"Ingrese la fecha de expiracion",containerClass:"mb-3"}),(0,y.jsx)(g.Z,{variant:"primary",className:"waves-effect waves-light me-1",type:"submit",children:l()}),(0,y.jsx)(g.Z,{variant:"light",className:"waves-effect waves-light",onClick:r,children:"Cancelar"})]})})]})},k={sar_setting_id:0,cai:"",prefix:"",start_range:0,end_range:0,next_number:0,expiration_date:new Date,created_date:new Date},w=r(23922),S=r(13966),P=[{text:"5",value:5},{text:"10",value:10},{text:"25",value:25}],_=function(){var e=(0,p.useState)(!1),n=(0,t.Z)(e,2),r=n[0],s=n[1],f=(0,p.useState)("create"),m=(0,t.Z)(f,2),g=m[0],h=m[1],x=(0,p.useState)([]),b=(0,t.Z)(x,2),j=b[0],Z=b[1],N=(0,p.useState)(k),_=(0,t.Z)(N,2),F=_[0],I=_[1],R=(0,p.useState)(!1),B=(0,t.Z)(R,2),E=B[0],T=B[1],G=function(){r&&(I(k),A()),s(!r)},H=[{Header:"ID",accessor:"sar_setting_id",sort:!0},{Header:"Cai",accessor:"cai",sort:!0},{Header:"Prefijo",accessor:"prefix",sort:!1},{Header:"Rango Inicial",accessor:"start_range",sort:!0},{Header:"Rango Final",accessor:"end_range",sort:!1},{Header:"Siguiente n\xfamero",accessor:"next_number",sort:!1},{Header:"Fecha de expiration",accessor:"expiration_date",sort:!1},{Header:"Acciones",id:"edit",accessor:"id",Cell:function(e){var n=e.row.original;return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)("button",{className:"btn btn-blue ml-2",onClick:function(){L(n.sar_setting_id)},children:(0,y.jsx)("i",{className:"mdi mdi-lead-pencil"})})})}}],L=function(){var e=(0,a.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=j.find((function(e){return e.sar_setting_id===n})),I(r),h("edit"),G();case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();(0,d.Tt)({title:"Sar",breadCrumbItems:[{path:"/settings/sar",label:"Configuraci\xf3n"},{path:"/settings/sar",label:"Sar",active:!0}]});var A=function(){var e=(0,a.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T(!0),e.next=3,(0,v.QS)();case 3:n=e.sent,Z(n.data.data),T(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,p.useEffect)((function(){A()}),[]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(i.Z,{children:(0,y.jsx)(l.Z,{sm:4,children:(0,y.jsxs)(w.rU,{to:"#",onClick:G,className:"btn btn-blue rounded-pill w-md waves-effect waves-light mb-3",children:[(0,y.jsx)("i",{className:"mdi mdi-plus me-1"}),"Agregar"]})})}),(0,y.jsx)(i.Z,{children:(0,y.jsx)(l.Z,{children:(0,y.jsx)(o.Z,{children:(0,y.jsxs)(o.Z.Body,{children:[(0,y.jsx)("h4",{className:"header-title",children:"Lista de rangos de facturacion"}),(0,y.jsx)(u.Z,{columns:H,data:j,pageSize:5,sizePerPageList:P,isSortable:!0,pagination:!0})]})})})}),(0,y.jsx)(S.Z,{loading:E}),(0,y.jsx)(C,{sarSetting:F,toggle:G,action:g,modal:r})]})}}}]);
//# sourceMappingURL=6881.7f5efcfd.chunk.js.map