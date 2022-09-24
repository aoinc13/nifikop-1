"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[3991],{5318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),g=o,b=d["".concat(p,".").concat(g)]||d[g]||c[g]||i;return r?n.createElement(b,a(a({ref:t},u),{},{components:r})):n.createElement(b,a({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},301:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=r(5773),o=r(808),i=(r(7378),r(5318)),a=["components"],s={id:"2_reporting_bugs",title:"Reporting bugs",sidebar_label:"Reporting bugs"},p=void 0,l={unversionedId:"6_contributing/2_reporting_bugs",id:"version-v0.11.0/6_contributing/2_reporting_bugs",title:"Reporting bugs",description:"If any part of the NiFiKop project has bugs or documentation mistakes, please let us know by opening an issue. We treat bugs and mistakes very seriously and believe no issue is too small. Before creating a bug report, please check that an issue reporting the same problem does not already exist.",source:"@site/versioned_docs/version-v0.11.0/6_contributing/2_reporting_bugs.md",sourceDirName:"6_contributing",slug:"/6_contributing/2_reporting_bugs",permalink:"/nifikop/docs/v0.11.0/6_contributing/2_reporting_bugs",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.11.0/6_contributing/2_reporting_bugs.md",tags:[],version:"v0.11.0",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1655925825,formattedLastUpdatedAt:"Jun 22, 2022",frontMatter:{id:"2_reporting_bugs",title:"Reporting bugs",sidebar_label:"Reporting bugs"},sidebar:"version-v0.11.0/docs",previous:{title:"Developer guide",permalink:"/nifikop/docs/v0.11.0/6_contributing/1_developer_guide"},next:{title:"Credits",permalink:"/nifikop/docs/v0.11.0/6_contributing/3_credits"}},u={},c=[],d={toc:c};function g(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If any part of the NiFiKop project has bugs or documentation mistakes, please let us know by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/konpyutaika/nifikop/issues/new"},"opening an issue"),". We treat bugs and mistakes very seriously and believe no issue is too small. Before creating a bug report, please check that an issue reporting the same problem does not already exist."),(0,i.kt)("p",null,"To make the bug report accurate and easy to understand, please try to create bug reports that are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Specific. Include as much details as possible: which version, what environment, what configuration, etc.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Reproducible. Include the steps to reproduce the problem. We understand some issues might be hard to reproduce, please include the steps that might lead to the problem.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Isolated. Please try to isolate and reproduce the bug with minimum dependencies. It would significantly slow down the speed to fix a bug if too many dependencies are involved in a bug report. Debugging external systems that rely on operator-sdk is out of scope, but we are happy to provide guidance in the right direction or help with using operator-sdk itself.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Unique. Do not duplicate existing bug report.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Scoped. One bug per report. Do not follow up with another bug inside one report."))),(0,i.kt)("p",null,"It may be worthwhile to read ",(0,i.kt)("a",{parentName:"p",href:"http://fantasai.inkedblade.net/style/talks/filing-good-bugs/"},"Elika Etemad\u2019s article on filing good bug reports")," before creating a bug report."),(0,i.kt)("p",null,"We might ask for further information to locate a bug. A duplicated bug report will be closed."))}g.isMDXComponent=!0}}]);