"use strict";(self.webpackChunkrema_docs=self.webpackChunkrema_docs||[]).push([[286],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return k}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),u=o(a),k=r,s=u["".concat(p,".").concat(k)]||u[k]||c[k]||i;return a?n.createElement(s,l(l({ref:t},m),{},{components:a})):n.createElement(s,l({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var o=2;o<i;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},334:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return d},metadata:function(){return o},toc:function(){return c}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],d={sidebar_position:1},p="Certificates",o={unversionedId:"certificates/certificates",id:"certificates/certificates",title:"Certificates",description:"A certificate is an entity that extends an existing template by",source:"@site/docs/certificates/certificates.md",sourceDirName:"certificates",slug:"/certificates/",permalink:"/docs/certificates/",editUrl:"https://github.com/paramsiddharth/rema-docs/edit/main/docs/certificates/certificates.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Template API",permalink:"/docs/templates/template-api"},next:{title:"Certificate API",permalink:"/docs/certificates/certificate-api"}},m={},c=[{value:"Certificate Schema",id:"certificate-schema",level:2},{value:"<code>uid</code>",id:"uid",level:3},{value:"<code>title</code>",id:"title",level:3},{value:"<code>template</code>",id:"template",level:3},{value:"<code>values</code>",id:"values",level:3},{value:"<code>date</code>",id:"date",level:3},{value:"Value Schema",id:"value-schema",level:2},{value:"<code>name</code>",id:"name",level:3},{value:"<code>value</code>",id:"value",level:3},{value:"<code>visible</code>",id:"visible",level:3}],u={toc:c};function k(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"certificates"},"Certificates"),(0,i.kt)("p",null,"A certificate is an entity that extends an existing template by\nspecifying the values for or hiding certain individual fields."),(0,i.kt)("p",null,"It comprises on the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The template it extends."),(0,i.kt)("li",{parentName:"ul"},"A title for the certificate."),(0,i.kt)("li",{parentName:"ul"},"Values for all mandatory and chosen optional fields."),(0,i.kt)("li",{parentName:"ul"},"Whether or not some field(s) should be hidden.")),(0,i.kt)("p",null,"A certificate is exactly what is supposed to be served to the end-user\nby Rema."),(0,i.kt)("h2",{id:"certificate-schema"},"Certificate Schema"),(0,i.kt)("p",null,"Just like templates, certificates exist as a JSON-compliant documents in the\ndatabase. Assuming them to be JavaScript objects, below is a detailed description\nof the valid properties available in any certificate."),(0,i.kt)("p",null,"Properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uid")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"title")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"template")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"values")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"date"))),(0,i.kt)("h3",{id:"uid"},(0,i.kt)("inlineCode",{parentName:"h3"},"uid")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("td",{parentName:"tr",align:null},"String (UUID v4)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("td",{parentName:"tr",align:null},"Cannot be set, always generated")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Description"),(0,i.kt)("td",{parentName:"tr",align:null},"The unique identifier for each certificate.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Default"),(0,i.kt)("td",{parentName:"tr",align:null},"A unique generated identifier.")))),(0,i.kt)("h3",{id:"title"},(0,i.kt)("inlineCode",{parentName:"h3"},"title")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("td",{parentName:"tr",align:null},"String")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Description"),(0,i.kt)("td",{parentName:"tr",align:null},"The title of the certificate.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Default"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Certificate"))))),(0,i.kt)("h3",{id:"template"},(0,i.kt)("inlineCode",{parentName:"h3"},"template")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("td",{parentName:"tr",align:null},"String")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Description"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the corresponding template.")))),(0,i.kt)("h3",{id:"values"},(0,i.kt)("inlineCode",{parentName:"h3"},"values")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("td",{parentName:"tr",align:null},"An array of values")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes, at least an empty array")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Description"),(0,i.kt)("td",{parentName:"tr",align:null},"A list of all values. See ",(0,i.kt)("a",{parentName:"td",href:"#value-schema"},"value schema")," for details.")))),(0,i.kt)("h3",{id:"date"},(0,i.kt)("inlineCode",{parentName:"h3"},"date")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("td",{parentName:"tr",align:null},"Date")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("td",{parentName:"tr",align:null},"Cannot be set, always generated")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Description"),(0,i.kt)("td",{parentName:"tr",align:null},"The date the certificate was created.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Default"),(0,i.kt)("td",{parentName:"tr",align:null},"The date the certificate was created as an ISO string.")))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"value-schema"},"Value Schema"),(0,i.kt)("p",null,"Values are individual entries corresponding to the respective\nfields in the parent template."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Required (",(0,i.kt)("inlineCode",{parentName:"li"},"required: true"),") fields\nwithout a value or a default value (",(0,i.kt)("inlineCode",{parentName:"li"},"defaultValue"),") defined\nwithin the template must be provided in the certificate values."),(0,i.kt)("li",{parentName:"ul"},"Fields whose values are provided with ",(0,i.kt)("inlineCode",{parentName:"li"},"visible: false")," are not\nrendered in the final certificate.")),(0,i.kt)("p",null,"Properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"visible"))),(0,i.kt)("h3",{id:"name"},(0,i.kt)("inlineCode",{parentName:"h3"},"name")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("td",{parentName:"tr",align:null},"String")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Description"),(0,i.kt)("td",{parentName:"tr",align:null},"The unique identifier for the corresponding field in the certificate's parent template.")))),(0,i.kt)("h3",{id:"value"},(0,i.kt)("inlineCode",{parentName:"h3"},"value")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("td",{parentName:"tr",align:null},"Depends on the ",(0,i.kt)("inlineCode",{parentName:"td"},"type")," or the corresponding field")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("td",{parentName:"tr",align:null},"Depends, see ",(0,i.kt)("a",{parentName:"td",href:"#value-schema"},"value schema"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Description"),(0,i.kt)("td",{parentName:"tr",align:null},"A value for the corresponding field.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Default"),(0,i.kt)("td",{parentName:"tr",align:null},"Depends on the default value or value of the corresponding field, could be empty")))),(0,i.kt)("h3",{id:"visible"},(0,i.kt)("inlineCode",{parentName:"h3"},"visible")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Description"),(0,i.kt)("td",{parentName:"tr",align:null},"If ",(0,i.kt)("inlineCode",{parentName:"td"},"false"),", the corresponding field won't be rendered.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Default"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true"))))))}k.isMDXComponent=!0}}]);