(window.webpackJsonp=window.webpackJsonp||[]).push([[472],{539:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(6),a=(n(0),n(563)),i=["components"],c={id:"1_introduction",title:"Introduction",sidebar_label:"Introduction"},l={unversionedId:"1_concepts/1_introduction",id:"version-v0.6.1/1_concepts/1_introduction",isDocsHomePage:!1,title:"Introduction",description:"The Orange NiFi operator is a Kubernetes operator to automate provisioning, management, autoscaling and operations of Apache NiFi clusters deployed to K8s.",source:"@site/versioned_docs/version-v0.6.1/1_concepts/1_introduction.md",slug:"/1_concepts/1_introduction",permalink:"/nifikop/docs/v0.6.1/1_concepts/1_introduction",editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.6.1/1_concepts/1_introduction.md",version:"v0.6.1",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1621194888,sidebar_label:"Introduction",sidebar:"version-v0.6.1/docs",next:{title:"Design Principes",permalink:"/nifikop/docs/v0.6.1/1_concepts/2_design_principes"}},u=[{value:"Overview",id:"overview",children:[]},{value:"Motivation",id:"motivation",children:[]}],p={rightToc:u};function s(e){var t=e.components,n=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The Orange NiFi operator is a Kubernetes operator to automate provisioning, management, autoscaling and operations of ",Object(a.b)("a",{parentName:"p",href:"https://nifi.apache.org/"},"Apache NiFi")," clusters deployed to K8s."),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,"Apache NiFi is an open-source solution that support powerful and scalable directed graphs of data routing, transformation, and system mediation logic.\nSome of the high-level capabilities and objectives of Apache NiFi include, and some of the main features of the ",Object(a.b)("strong",{parentName:"p"},"NiFiKop")," are:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Fine grained")," node configuration support"),Object(a.b)("li",{parentName:"ul"},"Graceful rolling upgrade"),Object(a.b)("li",{parentName:"ul"},"graceful NiFi cluster ",Object(a.b)("strong",{parentName:"li"},"scaling")),Object(a.b)("li",{parentName:"ul"},"Encrypted communication using SSL"),Object(a.b)("li",{parentName:"ul"},"the provisioning of secure NiFi clusters"),Object(a.b)("li",{parentName:"ul"},"Advanced Dataflow and user management via CRD")),Object(a.b)("p",null,"Some of the roadmap features :"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Monitoring via ",Object(a.b)("strong",{parentName:"li"},"Prometheus")),Object(a.b)("li",{parentName:"ul"},"Automatic reaction and self healing based on alerts (plugin system, with meaningful default alert plugins)"),Object(a.b)("li",{parentName:"ul"},"graceful NiFi cluster ",Object(a.b)("strong",{parentName:"li"},"scaling and rebalancing"))),Object(a.b)("h2",{id:"motivation"},"Motivation"),Object(a.b)("p",null,"At ",Object(a.b)("a",{parentName:"p",href:"https://opensource.orange.com/fr/accueil/"},"Orange")," we are building some ",Object(a.b)("a",{parentName:"p",href:"https://github.com/Orange-OpenSource?utf8=%E2%9C%93&q=operator&type=&language="},"Kubernetes operator"),", that operate NiFi and Cassandra clusters (among other types) for our business cases."),Object(a.b)("p",null,"There are already some approaches to operating NiFi on Kubernetes, however, we did not find them appropriate for use in a highly dynamic environment, nor capable of meeting our needs."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/cetic/helm-nifi"},"Helm chart")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://blog.cloudera.com/cloudera-flow-management-goes-cloud-native-with-apache-nifi-on-red-hat-openshift-kubernetes-platform/"},"Cloudera Nifi Operator"))),Object(a.b)("p",null,"Finally, our motivation is to build an open source solution and a community which drives the innovation and features of this operator."))}s.isMDXComponent=!0},563:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,m=s["".concat(i,".").concat(d)]||s[d]||b[d]||a;return n?o.a.createElement(m,c(c({ref:t},u),{},{components:n})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);