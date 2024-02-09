"use strict";(self.webpackChunkadminto_react=self.webpackChunkadminto_react||[]).push([[1195],{13966:function(e,n,r){var a=r(29439),t=r(72791),s=r(39193),c=r(80184),l={display:"block",margin:"0 auto",borderColor:"red"};n.Z=function(e){var n=(0,t.useState)("#0351AA"),r=(0,a.Z)(n,1)[0];return(0,c.jsx)("div",{className:"container-loading",hidden:!e.loading,children:(0,c.jsx)(s.Z,{color:r,loading:e.loading,cssOverride:l,size:15})})}},9189:function(e,n,r){r.d(n,{Z:function(){return x}});var a=r(93433),t=r(1413),s=r(45987),c=r(29439),l=r(72791),i=r(71358),o=r(81694),u=r.n(o),d=r(23922),m=r(80184),f=function(e){var n=e.tableProps,r=e.sizePerPageList,a=(0,l.useState)(n.pageCount),t=(0,c.Z)(a,2),s=t[0],i=t[1],o=(0,l.useState)(n.state.pageIndex),f=(0,c.Z)(o,2),p=f[0],h=f[1];(0,l.useEffect)((function(){i(n.pageCount),h(n.state.pageIndex)}),[n.pageCount,n.state.pageIndex]);var g=(0,l.useCallback)((function(e,n){return e.filter((function(e){return e<=s}))}),[s]),x=(0,l.useCallback)((function(e,n){return n<7?g([1,2,3,4,5,6],n):e%5>=0&&e>4&&e+2<n?[1,e-1,e,e+1,n]:e%5>=0&&e>4&&e+2>=n?[1,n-3,n-2,n-1,n]:[1,2,3,4,5,n]}),[g]),v=function(e){if(e!==p+1){var r=x(e,s);N(g(r,s)),n.gotoPage(e-1)}};(0,l.useEffect)((function(){var e=x(null,s);N(e)}),[s,x]);var b=(0,l.useState)(x(null,s)),j=(0,c.Z)(b,2),Z=j[0],N=j[1],y=p+1;return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{className:"d-lg-flex align-items-center text-center pb-1",children:[r.length>0&&(0,m.jsxs)("div",{className:"d-inline-block me-3",children:[(0,m.jsx)("label",{className:"me-1",children:"Mostrando :"}),(0,m.jsx)("select",{value:n.state.pageSize,onChange:function(e){n.setPageSize(Number(e.currentTarget.value))},className:"form-select d-inline-block w-auto",children:(r||[]).map((function(e,n){return(0,m.jsx)("option",{value:e.value,children:e.text},n.toString())}))})]}),(0,m.jsxs)("span",{className:"me-3",children:["P\xe1gina"," ",(0,m.jsxs)("strong",{children:[p+1," de ",n.pageOptions.length]})," "]}),(0,m.jsxs)("span",{className:"d-inline-block align-items-center text-sm-start text-center my-sm-0 my-2",children:[(0,m.jsx)("label",{className:"form-label",children:"Ir a la p\xe1gina: "}),(0,m.jsx)("input",{type:"number",value:p+1,min:"1",onChange:function(e){var r=e.currentTarget.value?Number(e.currentTarget.value)-1:0;n.gotoPage(r),h(n.state.pageIndex)},className:"form-control w-25 ms-1 d-inline-block"})]}),(0,m.jsxs)("ul",{className:"pagination pagination-rounded d-inline-flex ms-auto align-item-center mb-0",children:[(0,m.jsx)("li",{className:u()("page-item","paginate_button","previous",{disabled:1===y}),onClick:function(){1!==y&&v(y-1)},children:(0,m.jsx)(d.rU,{to:"#",className:"page-link",children:(0,m.jsx)("i",{className:"mdi mdi-chevron-left"})})},"prevpage"),(Z||[]).map((function(e,n,r){return r[n-1]+1<e?(0,m.jsxs)(l.Fragment,{children:[(0,m.jsx)("li",{className:"page-item disabled d-none d-xl-inline-block",children:(0,m.jsx)(d.rU,{to:"#",className:"page-link",children:"..."})}),(0,m.jsx)("li",{className:u()("page-item","d-none","d-xl-inline-block",{active:y===e}),onClick:function(n){return v(e)},children:(0,m.jsx)(d.rU,{to:"#",className:"page-link",children:e})})]},e):(0,m.jsx)("li",{className:u()("page-item","d-none","d-xl-inline-block",{active:y===e}),onClick:function(n){return v(e)},children:(0,m.jsx)(d.rU,{to:"#",className:"page-link",children:e})},e)})),(0,m.jsx)("li",{className:u()("page-item","paginate_button","next",{disabled:y===n.pageCount}),onClick:function(){y!==n.pageCount&&v(y+1)},children:(0,m.jsx)(d.rU,{to:"#",className:"page-link",children:(0,m.jsx)("i",{className:"mdi mdi-chevron-right"})})},"nextpage")]})]})})},p=["indeterminate"],h=function(e){var n=e.preGlobalFilteredRows,r=e.globalFilter,a=e.setGlobalFilter,t=e.searchBoxClass,s=n.length,o=(0,l.useState)(r),d=(0,c.Z)(o,2),f=d[0],p=d[1],h=(0,i.useAsyncDebounce)((function(e){a(e||void 0)}),200);return(0,m.jsx)("div",{className:u()(t),children:(0,m.jsxs)("span",{className:"d-flex align-items-center",children:["Buscar :"," ",(0,m.jsx)("input",{type:"search",value:f||"",onChange:function(e){p(e.target.value),h(e.target.value)},placeholder:"".concat(s," registros..."),className:"form-control w-auto ms-1"})]})})},g=(0,l.forwardRef)((function(e,n){var r=e.indeterminate,a=(0,s.Z)(e,p),c=(0,l.useRef)(),i=n||c;return(0,l.useEffect)((function(){i.current.indeterminate=r}),[i,r]),(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{className:"form-check",children:[(0,m.jsx)("input",(0,t.Z)({type:"checkbox",className:"form-check-input",ref:i},a)),(0,m.jsx)("label",{htmlFor:"form-check-input",className:"form-check-label"})]})})})),x=function(e){var n=e.isSearchable||!1,r=e.isSortable||!1,s=e.pagination||!1,c=e.isSelectable||!1,l=e.isExpandable||!1,o=e.sizePerPageList||[],d={};n&&(d.useGlobalFilter=i.useGlobalFilter),r&&(d.useSortBy=i.useSortBy),l&&(d.useExpanded=i.useExpanded),s&&(d.usePagination=i.usePagination),c&&(d.useRowSelect=i.useRowSelect);var p=(0,i.useTable)({columns:e.columns,data:e.data,initialState:{pageSize:e.pageSize||10}},d.hasOwnProperty("useGlobalFilter")&&d.useGlobalFilter,d.hasOwnProperty("useSortBy")&&d.useSortBy,d.hasOwnProperty("useExpanded")&&d.useExpanded,d.hasOwnProperty("usePagination")&&d.usePagination,d.hasOwnProperty("useRowSelect")&&d.useRowSelect,(function(e){c&&e.visibleColumns.push((function(e){return[{id:"selection",Header:function(e){var n=e.getToggleAllPageRowsSelectedProps;return(0,m.jsx)("div",{children:(0,m.jsx)(g,(0,t.Z)({},n()))})},Cell:function(e){var n=e.row;return(0,m.jsx)("div",{children:(0,m.jsx)(g,(0,t.Z)({},n.getToggleRowSelectedProps()))})}}].concat((0,a.Z)(e))})),l&&e.visibleColumns.push((function(e){return[{id:"expander",Header:function(e){var n=e.getToggleAllRowsExpandedProps,r=e.isAllRowsExpanded;return(0,m.jsx)("span",(0,t.Z)((0,t.Z)({},n()),{},{children:r?"-":"+"}))},Cell:function(e){var n=e.row;return n.canExpand?(0,m.jsx)("span",(0,t.Z)((0,t.Z)({},n.getToggleRowExpandedProps({style:{paddingLeft:"".concat(2*n.depth,"rem")}})),{},{children:n.isExpanded?"-":"+"})):null}}].concat((0,a.Z)(e))}))})),x=s?p.page:p.rows;return(0,m.jsxs)(m.Fragment,{children:[n&&(0,m.jsx)(h,{preGlobalFilteredRows:p.preGlobalFilteredRows,globalFilter:p.state.globalFilter,setGlobalFilter:p.setGlobalFilter,searchBoxClass:e.searchBoxClass}),(0,m.jsx)("div",{className:"table-responsive",children:(0,m.jsxs)("table",(0,t.Z)((0,t.Z)({},p.getTableProps()),{},{className:u()("table table-centered react-table",e.tableClass),children:[(0,m.jsx)("thead",{className:e.theadClass,children:(p.headerGroups||[]).map((function(e){return(0,m.jsx)("tr",(0,t.Z)((0,t.Z)({},e.getHeaderGroupProps()),{},{children:(e.headers||[]).map((function(e){return(0,m.jsx)("th",(0,t.Z)((0,t.Z)({},e.getHeaderProps(e.sort&&e.getSortByToggleProps())),{},{className:u()({sorting_desc:!0===e.isSortedDesc,sorting_asc:!1===e.isSortedDesc,sortable:!0===e.sort}),children:e.render("Header")}))}))}))}))}),(0,m.jsx)("tbody",(0,t.Z)((0,t.Z)({},p.getTableBodyProps()),{},{children:(x||[]).map((function(e,n){return p.prepareRow(e),(0,m.jsx)("tr",(0,t.Z)((0,t.Z)({},e.getRowProps()),{},{children:(e.cells||[]).map((function(e){return(0,m.jsx)("td",(0,t.Z)((0,t.Z)({},e.getCellProps([{className:e.column.className}])),{},{children:e.render("Cell")}))}))}))}))}))]}))}),s&&(0,m.jsx)(f,{tableProps:p,sizePerPageList:o})]})}},9823:function(e,n,r){var a=r(1413),t=r(29439),s=r(45987),c=r(72791),l=r(99410),i=r(21827),o=r(81694),u=r.n(o),d=r(80184),m=["name","placeholder","refCallback","errors","control","register","className"],f=["type","name","placeholder","endIcon","register","errors","comp","rows","className","refCallback"],p=["type","label","name","placeholder","register","errors","comp","rows","className","refCallback"],h=["type","label","name","placeholder","register","errors","comp","className","children","refCallback"],g=["label","type","name","placeholder","endIcon","register","errors","control","className","labelClassName","containerClass","refCallback","children","action","rows"],x=function(e){var n=e.name,r=e.placeholder,o=e.refCallback,f=e.errors,p=(e.control,e.register),h=e.className,g=(0,s.Z)(e,m),x=(0,c.useState)(!1),v=(0,t.Z)(x,2),b=v[0],j=v[1];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(l.Z,{className:"mb-0",children:[(0,d.jsx)(i.Z.Control,(0,a.Z)((0,a.Z)({type:b?"text":"password",placeholder:r,name:n,id:n,as:"input",ref:function(e){o&&o(e)},className:h,isInvalid:!(!f||!f[n])},p?p(n):{}),{},{autoComplete:n},g)),(0,d.jsx)("div",{className:u()("input-group-text","input-group-password",{"show-password":b}),"data-password":b?"true":"false",children:(0,d.jsx)("span",{className:"password-eye",onClick:function(){j(!b)}})})]}),f&&f[n]?(0,d.jsx)(i.Z.Control.Feedback,{type:"invalid",className:"d-block",children:f[n].message}):null]})},v=function(e){var n=e.type,r=e.name,t=e.placeholder,c=e.endIcon,l=e.register,o=e.errors,u=e.comp,m=e.rows,p=e.className,h=e.refCallback,g=(0,s.Z)(e,f);return(0,d.jsx)(d.Fragment,{children:"password"===n&&c?(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(x,(0,a.Z)({name:r,placeholder:t,refCallback:h,errors:o,register:l,className:p},g))}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.Z.Control,(0,a.Z)((0,a.Z)({type:n,placeholder:t,name:r,as:u,id:r,ref:function(e){h&&h(e)},className:p,isInvalid:!(!o||!o[r])},l?l(r):{}),{},{rows:m},g)),o&&o[r]?(0,d.jsx)(i.Z.Control.Feedback,{type:"invalid",className:"d-block",children:o[r].message}):null]})})},b=function(e){var n=e.type,r=e.label,t=e.name,c=(e.placeholder,e.register),l=e.errors,o=(e.comp,e.rows,e.className),u=e.refCallback,m=(0,s.Z)(e,p);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.Z.Check,(0,a.Z)((0,a.Z)({type:n,label:r,name:t,id:t,ref:function(e){u&&u(e)},className:o,isInvalid:!(!l||!l[t])},c?c(t):{}),m)),l&&l[t]?(0,d.jsx)(i.Z.Control.Feedback,{type:"invalid",className:"d-block",children:l[t].message}):null]})},j=function(e){var n=e.type,r=e.label,t=e.name,c=(e.placeholder,e.register),l=e.errors,o=(e.comp,e.className),u=e.children,m=e.refCallback,f=(0,s.Z)(e,h);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.Z.Select,(0,a.Z)((0,a.Z)({type:n,label:r,name:t,id:t,ref:function(e){m&&m(e)},children:u,className:o,isInvalid:!(!l||!l[t])},c?c(t):{}),f)),l&&l[t]?(0,d.jsx)(i.Z.Control.Feedback,{type:"invalid",children:l[t].message}):null]})};n.Z=function(e){var n=e.label,r=e.type,t=e.name,c=e.placeholder,l=e.endIcon,o=e.register,u=e.errors,m=(e.control,e.className),f=e.labelClassName,p=e.containerClass,h=e.refCallback,x=e.children,Z=e.action,N=e.rows,y=(0,s.Z)(e,g),C="textarea"===r?"textarea":"select"===r?"select":"input",w=void 0===l||l;return(0,d.jsx)(d.Fragment,{children:"hidden"===r?(0,d.jsx)("input",(0,a.Z)((0,a.Z)({type:r,name:t},o?o(t):{}),y)):(0,d.jsx)(d.Fragment,{children:"select"===r?(0,d.jsxs)(i.Z.Group,{className:p,children:[n?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.Z.Label,{className:f,children:n}),Z&&Z]}):null,(0,d.jsx)(j,(0,a.Z)({type:r,name:t,placeholder:c,refCallback:h,errors:u,register:o,comp:C,className:m,children:x},y))]}):(0,d.jsx)(d.Fragment,{children:"checkbox"===r||"radio"===r?(0,d.jsx)(i.Z.Group,{className:p,children:(0,d.jsx)(b,(0,a.Z)({type:r,label:n,name:t,placeholder:c,refCallback:h,errors:u,register:o,comp:C,className:m,rows:N},y))}):(0,d.jsxs)(i.Z.Group,{className:p,children:[n?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.Z.Label,{className:f,children:n}),Z&&Z]}):null,(0,d.jsx)(v,(0,a.Z)({type:r,name:t,placeholder:c,endIcon:w,refCallback:h,errors:u,register:o,comp:C,className:m,rows:N},y))]})})})})}},95262:function(e,n,r){r.d(n,{y:function(){return i.Z},J:function(){return l}});var a=r(1413),t=r(72791),s=r(61134),c=r(80184),l=function(e){var n=e.defaultValues,r=e.resolver,l=e.children,i=e.onSubmit,o=e.formClass,u=(0,s.cI)({defaultValues:n,resolver:r}),d=u.handleSubmit,m=u.register,f=u.control,p=u.formState.errors;return(0,c.jsx)("form",{onSubmit:d(i),className:o,noValidate:!0,children:Array.isArray(l)?l.map((function(e){return e.props&&e.props.name?t.createElement(e.type,(0,a.Z)({},(0,a.Z)((0,a.Z)({},e.props),{},{register:m,key:e.props.name,errors:p,control:f}))):e})):l})},i=r(9823)},70751:function(e,n,r){r.d(n,{Bd:function(){return g},Z$:function(){return x},iI:function(){return f},p_:function(){return p},f9:function(){return h},qL:function(){return t},m5:function(){return s},h0:function(){return c},QS:function(){return i},MZ:function(){return o},ap:function(){return u},gB:function(){return d},fS:function(){return l},hm:function(){return m}});var a=new(r(42738).u);function t(e){return a.get("".concat("/invoices"),e)}function s(e){var n="/invoicesById/"+e;return a.get("".concat(n),{})}function c(e){return a.create("".concat("/invoices/validate"),e)}function l(e){return a.create("".concat("/invoices/cancel"),e)}function i(){return a.get("".concat("/getAllSarSetting"),{})}function o(){return a.get("".concat("/branches"),{})}function u(e){return a.create("".concat("/createBranch"),e)}function d(e){return a.create("".concat("/createSarSetting"),e)}function m(e){return a.create("".concat("/invoices/addExoneration"),e)}function f(e){return a.create("".concat("/invoices/addLine"),e)}function p(e){return a.create("".concat("/invoices/editLine"),e)}function h(e){return a.create("".concat("/invoices/removeLine"),e)}function g(e){return a.create("".concat("/invoices/sendEmail"),e)}function x(e){return a.create("".concat("/invoices/create"),e)}},90260:function(e,n,r){r.d(n,{wK:function(){return t},JL:function(){return c},sx:function(){return u},eb:function(){return l},DB:function(){return d},uG:function(){return s},qs:function(){return i},Sb:function(){return o}});var a=new(r(42738).u);function t(e){return a.create("".concat("/createCustomer"),e)}function s(e){return a.updatePatch("".concat("/updateCustomer"),e)}function c(e){return a.get("".concat("/getAllCustomers"),e)}function l(e){return a.get("".concat("/getAllAppraisal"),e)}function i(e){var n="/getByPlate/"+e.plate;return a.get("".concat(n),{})}function o(e){var n="/getByVin/"+e.vin;return a.get("".concat(n),{})}function u(e){return a.create("".concat("/reception"),e)}function d(e){return a.createWithFile("".concat("/uploadFile"),e)}},80018:function(e,n,r){r.r(n),r.d(n,{default:function(){return _}});var a=r(1413),t=r(15861),s=r(29439),c=r(64687),l=r.n(c),i=r(9189),o=r(45736),u=r(89743),d=r(2677),m=r(9140),f=r(51649),p=r(23922),h=r(72791),g=r(70751),x=r(72426),v=r.n(x),b=r(95316),j=r(21827),Z=r(43360),N=r(95262),y=r(97637),C=r(90260),w=r(21830),k=r.n(w),S=r(80184),P=function(e){var n=e.toggle,r=e.modal,a=(0,h.useState)([]),c=(0,s.Z)(a,2),i=c[0],o=c[1],u=(0,h.useState)([]),d=(0,s.Z)(u,2),m=d[0],f=d[1],p=function(){var e=(0,t.Z)(l().mark((function e(){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,C.JL)({});case 2:n=e.sent,f(n.data.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,h.useEffect)((function(){p()}),[]),(0,S.jsxs)(b.Z,{show:r,onHide:n,centered:!0,children:[(0,S.jsx)(b.Z.Header,{closeButton:!0,children:(0,S.jsx)(b.Z.Title,{as:"h4",children:"Agregar sucursal"})}),(0,S.jsx)(b.Z.Body,{children:(0,S.jsxs)(N.J,{onSubmit:function(){var e=(0,t.Z)(l().mark((function e(r){var a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i[0]){e.next=4;break}k().fire("Error!","Por favor selecciona un cliente para crear la factura","error"),e.next=8;break;case 4:return e.next=6,(0,g.Z$)({customerId:i[0].customer_id,paymentMethod:r.payment_method});case 6:200===(a=e.sent).data.meta.code?n({invoice_id:a.data.data.invoiceId}):k().fire("Error",a.data.data.error.message,"error");case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),children:[(0,S.jsxs)(j.Z.Group,{className:"mb-3",controlId:"validationCustom01",children:[(0,S.jsx)(j.Z.Label,{children:"Cliente"}),(0,S.jsx)(y.pY,{id:"sarId",labelKey:"name",multiple:!1,isValid:!!i[0],maxResults:4,onChange:function(e){e.length>0&&o(e)},options:m,allowNew:!1,placeholder:"Escoge un cliente...",selected:i})]}),(0,S.jsxs)(N.y,{label:"Metodo de pago",type:"select",name:"payment_method",containerClass:"mb-3",className:"form-select",children:[(0,S.jsx)("option",{value:"cash",children:"Efectivo"}),(0,S.jsx)("option",{value:"card",children:"Tarjeta"}),(0,S.jsx)("option",{value:"credit",children:"Cr\xe9dito"})]},"select"),(0,S.jsx)(Z.Z,{variant:"primary",className:"waves-effect waves-light me-1 rounded-pill",type:"submit",children:"Agregar"}),(0,S.jsx)(Z.Z,{variant:"light",className:"waves-effect waves-light rounded-pill",onClick:n,children:"Cancelar"})]})})]})},F=r(85066),R=r(13966),E=[{text:"5",value:5},{text:"10",value:10},{text:"25",value:25}],_=function(){var e=(0,h.useState)(!1),n=(0,s.Z)(e,2),r=n[0],c=n[1],x=(0,h.useState)([]),b=(0,s.Z)(x,2),j=b[0],Z=b[1],N=(0,F.s0)(),y=(0,f.aF)(),C=(0,s.Z)(y,1)[0],w=(0,h.useState)(!1),_=(0,s.Z)(w,2),B=_[0],I=_[1],A={draft:{name:"Proforma",color:"secondary"},valid:{name:"Valida",color:"success"},deleted:{name:"Anulada",color:"danger"}};(0,f.Tt)({title:"Facturas",breadCrumbItems:[{path:"/appraisal/invoices",label:"Avaluos"},{path:"/appraisal/invoices",label:"Avaluos",active:!0}]});var G=[{Header:"ID",accessor:"invoice_id",sort:!0},{Header:"Cliente",accessor:"customer_name",sort:!0},{Header:"Descripcion",accessor:"description",sort:!0},{Header:"Numero de fatura",accessor:"invoice_number",sort:!1},{Header:"Fecha",accessor:"date",sort:!1},{Header:"Estado",id:"status_name",accessor:"status_name",Cell:function(e){var n=e.row.original;return(0,S.jsx)("div",{className:"d-flex justify-content-start",children:(0,S.jsx)(o.Z,{bg:n.status_color,className:"float-end",children:n.status_name})})}},{Header:"Acciones",id:"edit",accessor:"invoice_id",Cell:function(e){var n=e.row.original;return(0,S.jsx)(p.rU,{to:"/appraisal/invoice-detail/"+n.invoice_id,children:(0,S.jsx)("button",{className:"btn btn-blue mr-2",children:(0,S.jsx)("i",{className:"mdi mdi-eye"})})})}}],L=function(){var e=(0,t.Z)(l().mark((function e(){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I(!0),e.next=3,(0,g.qL)({});case 3:n=e.sent,Z(n.data.data.map((function(e){return(0,a.Z)((0,a.Z)({},e),{},{date:v()(e.date).format("L"),status_name:A[e.status].name,status_color:A[e.status].color})}))),I(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,h.useEffect)((function(){L()}),[]),(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(u.Z,{children:(0,S.jsx)(d.Z,{sm:4,children:(0,S.jsxs)(p.rU,{to:"#",hidden:"Admin"!==C.role&&"Invoice"!==C.role,onClick:function(){c(!0)},className:"btn btn-blue rounded-pill w-md waves-effect waves-light mb-3",children:[(0,S.jsx)("i",{className:"mdi mdi-plus me-1"}),"Agregar"]})})}),(0,S.jsx)(u.Z,{children:(0,S.jsx)(d.Z,{children:(0,S.jsx)(m.Z,{children:(0,S.jsxs)(m.Z.Body,{children:[(0,S.jsx)("h4",{className:"header-title",children:"Lista de facturas"}),(0,S.jsx)(i.Z,{columns:G,data:j,pageSize:5,sizePerPageList:E,isSortable:!0,pagination:!0,isSearchable:!0})]})})})}),(0,S.jsx)(R.Z,{loading:B}),(0,S.jsx)(P,{toggle:function(e){c(!r),e.invoice_id&&k().fire("Creado!","Se creo una factura para el cliente con identificador: "+e.invoice_id,"success").then((function(){N("/appraisal/invoice-detail/"+e.invoice_id,{replace:!0})}))},modal:r})]})}},53649:function(e,n,r){r.d(n,{Z:function(){return t}});var a=r(72791);function t(){return(0,a.useReducer)((function(e){return!e}),!1)[1]}},45736:function(e,n,r){var a=r(1413),t=r(45987),s=r(81694),c=r.n(s),l=r(72791),i=r(10162),o=r(80184),u=["bsPrefix","bg","pill","text","className","as"],d=l.forwardRef((function(e,n){var r=e.bsPrefix,s=e.bg,l=e.pill,d=e.text,m=e.className,f=e.as,p=void 0===f?"span":f,h=(0,t.Z)(e,u),g=(0,i.vE)(r,"badge");return(0,o.jsx)(p,(0,a.Z)((0,a.Z)({ref:n},h),{},{className:c()(m,g,l&&"rounded-pill",d&&"text-".concat(d),s&&"bg-".concat(s))}))}));d.displayName="Badge",d.defaultProps={bg:"primary",pill:!1},n.Z=d},43360:function(e,n,r){var a=r(1413),t=r(29439),s=r(45987),c=r(81694),l=r.n(c),i=r(72791),o=r(15341),u=r(10162),d=r(80184),m=["as","bsPrefix","variant","size","active","className"],f=i.forwardRef((function(e,n){var r=e.as,c=e.bsPrefix,i=e.variant,f=e.size,p=e.active,h=e.className,g=(0,s.Z)(e,m),x=(0,u.vE)(c,"btn"),v=(0,o.FT)((0,a.Z)({tagName:r},g)),b=(0,t.Z)(v,2),j=b[0],Z=b[1].tagName;return(0,d.jsx)(Z,(0,a.Z)((0,a.Z)((0,a.Z)({},g),j),{},{ref:n,className:l()(h,x,p&&"active",i&&"".concat(x,"-").concat(i),f&&"".concat(x,"-").concat(f),g.href&&g.disabled&&"disabled")}))}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1},n.Z=f},29388:function(e,n,r){r.d(n,{Z:function(){return c}});var a=r(61120),t=r(78814),s=r(82963);function c(e){var n=(0,t.Z)();return function(){var r,t=(0,a.Z)(e);if(n){var c=(0,a.Z)(this).constructor;r=Reflect.construct(t,arguments,c)}else r=t.apply(this,arguments);return(0,s.Z)(this,r)}}},11752:function(e,n,r){r.d(n,{Z:function(){return s}});var a=r(61120);function t(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=(0,a.Z)(e)););return e}function s(){return s="undefined"!==typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,n,r){var a=t(e,n);if(a){var s=Object.getOwnPropertyDescriptor(a,n);return s.get?s.get.call(arguments.length<3?e:r):s.value}},s.apply(this,arguments)}},78814:function(e,n,r){function a(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}r.d(n,{Z:function(){return a}})}}]);
//# sourceMappingURL=1195.5ea6fc21.chunk.js.map