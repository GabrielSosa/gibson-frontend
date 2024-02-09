"use strict";(self.webpackChunkadminto_react=self.webpackChunkadminto_react||[]).push([[8766],{13966:function(e,n,t){var a=t(29439),r=t(72791),s=t(39193),i=t(80184),o={display:"block",margin:"0 auto",borderColor:"red"};n.Z=function(e){var n=(0,r.useState)("#0351AA"),t=(0,a.Z)(n,1)[0];return(0,i.jsx)("div",{className:"container-loading",hidden:!e.loading,children:(0,i.jsx)(s.Z,{color:t,loading:e.loading,cssOverride:o,size:15})})}},9189:function(e,n,t){t.d(n,{Z:function(){return v}});var a=t(93433),r=t(1413),s=t(45987),i=t(29439),o=t(72791),c=t(71358),l=t(81694),u=t.n(l),d=t(23922),p=t(80184),m=function(e){var n=e.tableProps,t=e.sizePerPageList,a=(0,o.useState)(n.pageCount),r=(0,i.Z)(a,2),s=r[0],c=r[1],l=(0,o.useState)(n.state.pageIndex),m=(0,i.Z)(l,2),f=m[0],g=m[1];(0,o.useEffect)((function(){c(n.pageCount),g(n.state.pageIndex)}),[n.pageCount,n.state.pageIndex]);var h=(0,o.useCallback)((function(e,n){return e.filter((function(e){return e<=s}))}),[s]),v=(0,o.useCallback)((function(e,n){return n<7?h([1,2,3,4,5,6],n):e%5>=0&&e>4&&e+2<n?[1,e-1,e,e+1,n]:e%5>=0&&e>4&&e+2>=n?[1,n-3,n-2,n-1,n]:[1,2,3,4,5,n]}),[h]),x=function(e){if(e!==f+1){var t=v(e,s);Z(h(t,s)),n.gotoPage(e-1)}};(0,o.useEffect)((function(){var e=v(null,s);Z(e)}),[s,v]);var b=(0,o.useState)(v(null,s)),j=(0,i.Z)(b,2),y=j[0],Z=j[1],w=f+1;return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:"d-lg-flex align-items-center text-center pb-1",children:[t.length>0&&(0,p.jsxs)("div",{className:"d-inline-block me-3",children:[(0,p.jsx)("label",{className:"me-1",children:"Mostrando :"}),(0,p.jsx)("select",{value:n.state.pageSize,onChange:function(e){n.setPageSize(Number(e.currentTarget.value))},className:"form-select d-inline-block w-auto",children:(t||[]).map((function(e,n){return(0,p.jsx)("option",{value:e.value,children:e.text},n.toString())}))})]}),(0,p.jsxs)("span",{className:"me-3",children:["P\xe1gina"," ",(0,p.jsxs)("strong",{children:[f+1," de ",n.pageOptions.length]})," "]}),(0,p.jsxs)("span",{className:"d-inline-block align-items-center text-sm-start text-center my-sm-0 my-2",children:[(0,p.jsx)("label",{className:"form-label",children:"Ir a la p\xe1gina: "}),(0,p.jsx)("input",{type:"number",value:f+1,min:"1",onChange:function(e){var t=e.currentTarget.value?Number(e.currentTarget.value)-1:0;n.gotoPage(t),g(n.state.pageIndex)},className:"form-control w-25 ms-1 d-inline-block"})]}),(0,p.jsxs)("ul",{className:"pagination pagination-rounded d-inline-flex ms-auto align-item-center mb-0",children:[(0,p.jsx)("li",{className:u()("page-item","paginate_button","previous",{disabled:1===w}),onClick:function(){1!==w&&x(w-1)},children:(0,p.jsx)(d.rU,{to:"#",className:"page-link",children:(0,p.jsx)("i",{className:"mdi mdi-chevron-left"})})},"prevpage"),(y||[]).map((function(e,n,t){return t[n-1]+1<e?(0,p.jsxs)(o.Fragment,{children:[(0,p.jsx)("li",{className:"page-item disabled d-none d-xl-inline-block",children:(0,p.jsx)(d.rU,{to:"#",className:"page-link",children:"..."})}),(0,p.jsx)("li",{className:u()("page-item","d-none","d-xl-inline-block",{active:w===e}),onClick:function(n){return x(e)},children:(0,p.jsx)(d.rU,{to:"#",className:"page-link",children:e})})]},e):(0,p.jsx)("li",{className:u()("page-item","d-none","d-xl-inline-block",{active:w===e}),onClick:function(n){return x(e)},children:(0,p.jsx)(d.rU,{to:"#",className:"page-link",children:e})},e)})),(0,p.jsx)("li",{className:u()("page-item","paginate_button","next",{disabled:w===n.pageCount}),onClick:function(){w!==n.pageCount&&x(w+1)},children:(0,p.jsx)(d.rU,{to:"#",className:"page-link",children:(0,p.jsx)("i",{className:"mdi mdi-chevron-right"})})},"nextpage")]})]})})},f=["indeterminate"],g=function(e){var n=e.preGlobalFilteredRows,t=e.globalFilter,a=e.setGlobalFilter,r=e.searchBoxClass,s=n.length,l=(0,o.useState)(t),d=(0,i.Z)(l,2),m=d[0],f=d[1],g=(0,c.useAsyncDebounce)((function(e){a(e||void 0)}),200);return(0,p.jsx)("div",{className:u()(r),children:(0,p.jsxs)("span",{className:"d-flex align-items-center",children:["Buscar :"," ",(0,p.jsx)("input",{type:"search",value:m||"",onChange:function(e){f(e.target.value),g(e.target.value)},placeholder:"".concat(s," registros..."),className:"form-control w-auto ms-1"})]})})},h=(0,o.forwardRef)((function(e,n){var t=e.indeterminate,a=(0,s.Z)(e,f),i=(0,o.useRef)(),c=n||i;return(0,o.useEffect)((function(){c.current.indeterminate=t}),[c,t]),(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:"form-check",children:[(0,p.jsx)("input",(0,r.Z)({type:"checkbox",className:"form-check-input",ref:c},a)),(0,p.jsx)("label",{htmlFor:"form-check-input",className:"form-check-label"})]})})})),v=function(e){var n=e.isSearchable||!1,t=e.isSortable||!1,s=e.pagination||!1,i=e.isSelectable||!1,o=e.isExpandable||!1,l=e.sizePerPageList||[],d={};n&&(d.useGlobalFilter=c.useGlobalFilter),t&&(d.useSortBy=c.useSortBy),o&&(d.useExpanded=c.useExpanded),s&&(d.usePagination=c.usePagination),i&&(d.useRowSelect=c.useRowSelect);var f=(0,c.useTable)({columns:e.columns,data:e.data,initialState:{pageSize:e.pageSize||10}},d.hasOwnProperty("useGlobalFilter")&&d.useGlobalFilter,d.hasOwnProperty("useSortBy")&&d.useSortBy,d.hasOwnProperty("useExpanded")&&d.useExpanded,d.hasOwnProperty("usePagination")&&d.usePagination,d.hasOwnProperty("useRowSelect")&&d.useRowSelect,(function(e){i&&e.visibleColumns.push((function(e){return[{id:"selection",Header:function(e){var n=e.getToggleAllPageRowsSelectedProps;return(0,p.jsx)("div",{children:(0,p.jsx)(h,(0,r.Z)({},n()))})},Cell:function(e){var n=e.row;return(0,p.jsx)("div",{children:(0,p.jsx)(h,(0,r.Z)({},n.getToggleRowSelectedProps()))})}}].concat((0,a.Z)(e))})),o&&e.visibleColumns.push((function(e){return[{id:"expander",Header:function(e){var n=e.getToggleAllRowsExpandedProps,t=e.isAllRowsExpanded;return(0,p.jsx)("span",(0,r.Z)((0,r.Z)({},n()),{},{children:t?"-":"+"}))},Cell:function(e){var n=e.row;return n.canExpand?(0,p.jsx)("span",(0,r.Z)((0,r.Z)({},n.getToggleRowExpandedProps({style:{paddingLeft:"".concat(2*n.depth,"rem")}})),{},{children:n.isExpanded?"-":"+"})):null}}].concat((0,a.Z)(e))}))})),v=s?f.page:f.rows;return(0,p.jsxs)(p.Fragment,{children:[n&&(0,p.jsx)(g,{preGlobalFilteredRows:f.preGlobalFilteredRows,globalFilter:f.state.globalFilter,setGlobalFilter:f.setGlobalFilter,searchBoxClass:e.searchBoxClass}),(0,p.jsx)("div",{className:"table-responsive",children:(0,p.jsxs)("table",(0,r.Z)((0,r.Z)({},f.getTableProps()),{},{className:u()("table table-centered react-table",e.tableClass),children:[(0,p.jsx)("thead",{className:e.theadClass,children:(f.headerGroups||[]).map((function(e){return(0,p.jsx)("tr",(0,r.Z)((0,r.Z)({},e.getHeaderGroupProps()),{},{children:(e.headers||[]).map((function(e){return(0,p.jsx)("th",(0,r.Z)((0,r.Z)({},e.getHeaderProps(e.sort&&e.getSortByToggleProps())),{},{className:u()({sorting_desc:!0===e.isSortedDesc,sorting_asc:!1===e.isSortedDesc,sortable:!0===e.sort}),children:e.render("Header")}))}))}))}))}),(0,p.jsx)("tbody",(0,r.Z)((0,r.Z)({},f.getTableBodyProps()),{},{children:(v||[]).map((function(e,n){return f.prepareRow(e),(0,p.jsx)("tr",(0,r.Z)((0,r.Z)({},e.getRowProps()),{},{children:(e.cells||[]).map((function(e){return(0,p.jsx)("td",(0,r.Z)((0,r.Z)({},e.getCellProps([{className:e.column.className}])),{},{children:e.render("Cell")}))}))}))}))}))]}))}),s&&(0,p.jsx)(m,{tableProps:f,sizePerPageList:l})]})}},90260:function(e,n,t){t.d(n,{wK:function(){return r},JL:function(){return i},sx:function(){return u},eb:function(){return o},DB:function(){return d},uG:function(){return s},qs:function(){return c},Sb:function(){return l}});var a=new(t(42738).u);function r(e){return a.create("".concat("/createCustomer"),e)}function s(e){return a.updatePatch("".concat("/updateCustomer"),e)}function i(e){return a.get("".concat("/getAllCustomers"),e)}function o(e){return a.get("".concat("/getAllAppraisal"),e)}function c(e){var n="/getByPlate/"+e.plate;return a.get("".concat(n),{})}function l(e){var n="/getByVin/"+e.vin;return a.get("".concat(n),{})}function u(e){return a.create("".concat("/reception"),e)}function d(e){return a.createWithFile("".concat("/uploadFile"),e)}},52464:function(e,n,t){t.r(n);var a=t(1413),r=t(15861),s=t(29439),i=t(64687),o=t.n(i),c=t(9189),l=t(45736),u=t(89743),d=t(2677),p=t(9140),m=t(51649),f=t(23922),g=t(72791),h=t(90260),v=t(13966),x=t(80184),b=[{text:"5",value:5},{text:"10",value:10},{text:"25",value:25}];n.default=function(){var e=(0,g.useState)([]),n=(0,s.Z)(e,2),t=n[0],i=n[1],j=(0,g.useState)(!1),y=(0,s.Z)(j,2),Z=y[0],w=y[1],P={insurance:"Seguro",buysell:"Compra/Venta",agency:"Agencia",guaranty:"Garantia",repair:"Reparaci\xf2n"};(0,m.Tt)({title:"Inspecci\xf3n",breadCrumbItems:[{path:"/appraisal/inspection",label:"Inspecci\xf3n"},{path:"/appraisal/inspection",label:"Inspecci\xf3n",active:!0}]});var N=[{Header:"ID",accessor:"appraisal_id",sort:!0},{Header:"Cliente",accessor:"customer_name",sort:!0},{Header:"Vehiculo",accessor:"vehicle_name",sort:!1},{Header:"Propositos",accessor:"purposes",sort:!1},{Header:"Proceso",id:"process_name",sort:!0,accessor:"process_name",Cell:function(e){var n=e.row.original;return(0,x.jsx)("div",{className:"d-flex justify-content-start",children:(0,x.jsx)(l.Z,{bg:n.process_color,className:"float-end",children:n.process_name})})}},{Header:"Acciones",id:"edit",accessor:"customer_id",Cell:function(e){var n=e.row.original;return(0,x.jsx)(f.rU,{to:"/appraisal/inspection-detail/"+n.appraisal_id,children:(0,x.jsx)("button",{className:"btn btn-blue mr-2",children:(0,x.jsx)("i",{className:"mdi mdi-book-edit"})})})}}],S=function(){var e=(0,r.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.next=3,(0,h.eb)({});case 3:n=e.sent,i(n.data.data.filter((function(e){return"Recepcionado"===e.status||"En inspecci\xf3n"===e.status||"Inspeccionado"===e.status})).map((function(e){return(0,a.Z)((0,a.Z)({},e),{},{purposes:e.purposes.split(",").map((function(e){return P[e]})).join(", "),vehicle_name:e.brand+" "+e.model,process_name:e.status,process_color:"Recepcionado"===e.status?"danger":e.status_color})}))),w(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,g.useEffect)((function(){S()}),[]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(u.Z,{children:(0,x.jsx)(d.Z,{children:(0,x.jsx)(p.Z,{children:(0,x.jsxs)(p.Z.Body,{children:[(0,x.jsx)("h4",{className:"header-title",children:"Lista de inspecci\xf3n"}),(0,x.jsx)(c.Z,{columns:N,data:t,pageSize:5,sizePerPageList:b,isSortable:!0,pagination:!0,isSearchable:!0})]})})})}),(0,x.jsx)(v.Z,{loading:Z})]})}},45736:function(e,n,t){var a=t(1413),r=t(45987),s=t(81694),i=t.n(s),o=t(72791),c=t(10162),l=t(80184),u=["bsPrefix","bg","pill","text","className","as"],d=o.forwardRef((function(e,n){var t=e.bsPrefix,s=e.bg,o=e.pill,d=e.text,p=e.className,m=e.as,f=void 0===m?"span":m,g=(0,r.Z)(e,u),h=(0,c.vE)(t,"badge");return(0,l.jsx)(f,(0,a.Z)((0,a.Z)({ref:n},g),{},{className:i()(p,h,o&&"rounded-pill",d&&"text-".concat(d),s&&"bg-".concat(s))}))}));d.displayName="Badge",d.defaultProps={bg:"primary",pill:!1},n.Z=d},66543:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(1413),r=t(45987),s=t(81694),i=t.n(s),o=/-(.)/g;var c=t(72791),l=t(10162),u=t(80184),d=["className","bsPrefix","as"],p=function(e){return e[0].toUpperCase()+(n=e,n.replace(o,(function(e,n){return n.toUpperCase()}))).slice(1);var n};function m(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.displayName,s=void 0===t?p(e):t,o=n.Component,m=n.defaultProps,f=c.forwardRef((function(n,t){var s=n.className,c=n.bsPrefix,p=n.as,m=void 0===p?o||"div":p,f=(0,r.Z)(n,d),g=(0,l.vE)(c,e);return(0,u.jsx)(m,(0,a.Z)({ref:t,className:i()(s,g)},f))}));return f.defaultProps=m,f.displayName=s,f}},27472:function(e,n,t){var a=t(1413),r=t(72791),s=t(81694),i=t.n(s),o=t(80184);n.Z=function(e){return r.forwardRef((function(n,t){return(0,o.jsx)("div",(0,a.Z)((0,a.Z)({},n),{},{ref:t,className:i()(n.className,e)}))}))}},39193:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(72791),r={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function s(e){if("number"===typeof e)return{value:e,unit:"px"};var n,t=(e.match(/^[0-9.]*/)||"").toString();n=t.includes(".")?parseFloat(t):parseInt(t,10);var a=(e.match(/[^0-9]*$/)||"").toString();return r[a]?{value:n,unit:a}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(n,"px.")),{value:n,unit:"px"})}function i(e){var n=s(e);return"".concat(n.value).concat(n.unit)}var o=function(){return o=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},o.apply(this,arguments)},c=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},l=function(e,n,t){var a="react-spinners-".concat(e,"-").concat(t);if("undefined"==typeof window||!window.document)return a;var r=document.createElement("style");document.head.appendChild(r);var s=r.sheet,i="\n    @keyframes ".concat(a," {\n      ").concat(n,"\n    }\n  ");return s&&s.insertRule(i,0),a}("GridLoader","0% {transform: scale(1)} 50% {transform: scale(0.5); opacity: 0.7} 100% {transform: scale(1); opacity: 1}","grid"),u=function(e){return Math.random()*e};var d=function(e){var n=e.loading,t=void 0===n||n,r=e.color,d=void 0===r?"#000000":r,p=e.speedMultiplier,m=void 0===p?1:p,f=e.cssOverride,g=void 0===f?{}:f,h=e.size,v=void 0===h?15:h,x=e.margin,b=void 0===x?2:x,j=c(e,["loading","color","speedMultiplier","cssOverride","size","margin"]),y=s(v),Z=s(b),w=3*parseFloat(y.value.toString())+6*parseFloat(Z.value.toString()),P=o({width:"".concat(w).concat(y.unit),fontSize:0,display:"inline-block"},g),N=function(e){return{display:"inline-block",backgroundColor:d,width:"".concat(i(v)),height:"".concat(i(v)),margin:i(b),borderRadius:"100%",animationFillMode:"both",animation:"".concat(l," ").concat((e/100+.6)/m,"s ").concat(e/100-.2,"s infinite ease")}};return t?a.createElement("span",o({style:P},j,{ref:function(e){e&&e.style.setProperty("width","".concat(w).concat(y.unit),"important")}}),a.createElement("span",{style:N(u(100))}),a.createElement("span",{style:N(u(100))}),a.createElement("span",{style:N(u(100))}),a.createElement("span",{style:N(u(100))}),a.createElement("span",{style:N(u(100))}),a.createElement("span",{style:N(u(100))}),a.createElement("span",{style:N(u(100))}),a.createElement("span",{style:N(u(100))}),a.createElement("span",{style:N(u(100))})):null}},15861:function(e,n,t){function a(e,n,t,a,r,s,i){try{var o=e[s](i),c=o.value}catch(l){return void t(l)}o.done?n(c):Promise.resolve(c).then(a,r)}function r(e){return function(){var n=this,t=arguments;return new Promise((function(r,s){var i=e.apply(n,t);function o(e){a(i,r,s,o,c,"next",e)}function c(e){a(i,r,s,o,c,"throw",e)}o(void 0)}))}}t.d(n,{Z:function(){return r}})},93433:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(30907);var r=t(59199),s=t(40181);function i(e){return function(e){if(Array.isArray(e))return(0,a.Z)(e)}(e)||(0,r.Z)(e)||(0,s.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=8766.41b89f87.chunk.js.map