(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{266:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),l=(a(0),a(563)),i=["components"],b={id:"4_roadmap",title:"Roadmap",sidebar_label:"Roadmap"},c={unversionedId:"1_concepts/4_roadmap",id:"version-v0.6.2/1_concepts/4_roadmap",isDocsHomePage:!1,title:"Roadmap",description:"Available",source:"@site/versioned_docs/version-v0.6.2/1_concepts/4_roadmap.md",slug:"/1_concepts/4_roadmap",permalink:"/nifikop/docs/v0.6.2/1_concepts/4_roadmap",editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.6.2/1_concepts/4_roadmap.md",version:"v0.6.2",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1623245134,sidebar_label:"Roadmap",sidebar:"version-v0.6.2/docs",previous:{title:"Features",permalink:"/nifikop/docs/v0.6.2/1_concepts/3_features"},next:{title:"Getting Started",permalink:"/nifikop/docs/v0.6.2/2_setup/1_getting_started"}},o=[{value:"Available",id:"available",children:[{value:"NiFi cluster installation",id:"nifi-cluster-installation",children:[]},{value:"Graceful NiFi Cluster Scaling",id:"graceful-nifi-cluster-scaling",children:[]},{value:"Communication via SSL",id:"communication-via-ssl",children:[]},{value:"Dataflow lifecycle management via CRD",id:"dataflow-lifecycle-management-via-crd",children:[]},{value:"Users &amp; access policies management",id:"users--access-policies-management",children:[]}]},{value:"Backlog",id:"backlog",children:[{value:"Monitoring via Prometheus",id:"monitoring-via-prometheus",children:[]},{value:"Reacting on Alerts",id:"reacting-on-alerts",children:[]},{value:"Seamless Istio mesh support",id:"seamless-istio-mesh-support",children:[]}]}],p={rightToc:o};function d(e){var t=e.components,a=Object(r.a)(e,i);return Object(l.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"available"},"Available"),Object(l.b)("h3",{id:"nifi-cluster-installation"},"NiFi cluster installation"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null}),Object(l.b)("th",{parentName:"tr",align:null}))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Status"),Object(l.b)("td",{parentName:"tr",align:null},"Done")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Priority"),Object(l.b)("td",{parentName:"tr",align:null},"High")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Targeted Start date"),Object(l.b)("td",{parentName:"tr",align:null},"Jan 2020")))),Object(l.b)("h3",{id:"graceful-nifi-cluster-scaling"},"Graceful NiFi Cluster Scaling"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null}),Object(l.b)("th",{parentName:"tr",align:null}))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Status"),Object(l.b)("td",{parentName:"tr",align:null},"Done")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Priority"),Object(l.b)("td",{parentName:"tr",align:null},"High")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Targeted Start date"),Object(l.b)("td",{parentName:"tr",align:null},"Jan 2020")))),Object(l.b)("p",null,"Apache NiFi is a good candidate to create an operator, because everything is made to orchestrate it through REST Api calls. With this comes automation of actions such as scaling, following all required steps : ",Object(l.b)("a",{parentName:"p",href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#decommission-nodes"},"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#decommission-nodes"),"."),Object(l.b)("h3",{id:"communication-via-ssl"},"Communication via SSL"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null}),Object(l.b)("th",{parentName:"tr",align:null}))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Status"),Object(l.b)("td",{parentName:"tr",align:null},"Done")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Priority"),Object(l.b)("td",{parentName:"tr",align:null},"High")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Targeted Start date"),Object(l.b)("td",{parentName:"tr",align:null},"May 2020")))),Object(l.b)("p",null,"The operator fully automates NiFi's SSL support.\nThe operator can provision the required secrets and certificates for you, or you can provide your own."),Object(l.b)("h3",{id:"dataflow-lifecycle-management-via-crd"},"Dataflow lifecycle management via CRD"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null}),Object(l.b)("th",{parentName:"tr",align:null}))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Status"),Object(l.b)("td",{parentName:"tr",align:null},"Done")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Priority"),Object(l.b)("td",{parentName:"tr",align:null},"High")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Targeted Start date"),Object(l.b)("td",{parentName:"tr",align:null},"Aug 2020")))),Object(l.b)("h3",{id:"users--access-policies-management"},"Users & access policies management"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null}),Object(l.b)("th",{parentName:"tr",align:null}))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Status"),Object(l.b)("td",{parentName:"tr",align:null},"Done")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Priority"),Object(l.b)("td",{parentName:"tr",align:null},"High")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Targeted Start date"),Object(l.b)("td",{parentName:"tr",align:null},"November 2020")))),Object(l.b)("p",null,"The operator fully automates NiFi's user and access policies management."),Object(l.b)("h2",{id:"backlog"},"Backlog"),Object(l.b)("h3",{id:"monitoring-via-prometheus"},"Monitoring via Prometheus"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null}),Object(l.b)("th",{parentName:"tr",align:null}))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Status"),Object(l.b)("td",{parentName:"tr",align:null},"To Do")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Priority"),Object(l.b)("td",{parentName:"tr",align:null},"High")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Targeted Start date"),Object(l.b)("td",{parentName:"tr",align:null},"Oct 2020")))),Object(l.b)("p",null,"The NiFi operator exposes NiFi JMX metrics to Prometheus."),Object(l.b)("h3",{id:"reacting-on-alerts"},"Reacting on Alerts"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null}),Object(l.b)("th",{parentName:"tr",align:null}))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Status"),Object(l.b)("td",{parentName:"tr",align:null},"To Do")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Priority"),Object(l.b)("td",{parentName:"tr",align:null},"Low")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Targeted Start date"),Object(l.b)("td",{parentName:"tr",align:null},"-")))),Object(l.b)("p",null,"The NiFi Operator acts as a ",Object(l.b)("strong",{parentName:"p"},"Prometheus Alert Manager"),". It receives alerts defined in Prometheus, and creates actions based on Prometheus alert annotations."),Object(l.b)("p",null,"Currently, there are three actions expected :"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"upscale cluster (add a new Node)"),Object(l.b)("li",{parentName:"ul"},"downscale cluster (remove a Node)"),Object(l.b)("li",{parentName:"ul"},"add additional disk to a Node")),Object(l.b)("h3",{id:"seamless-istio-mesh-support"},"Seamless Istio mesh support"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null}),Object(l.b)("th",{parentName:"tr",align:null}))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Status"),Object(l.b)("td",{parentName:"tr",align:null},"To Do")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Priority"),Object(l.b)("td",{parentName:"tr",align:null},"Low")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Targeted Start date"),Object(l.b)("td",{parentName:"tr",align:null},"-")))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Operator allows to use ClusterIP services instead of Headless, which still works better in case of Service meshes."),Object(l.b)("li",{parentName:"ul"},"To avoid too early nifi initialization, which might lead to unready sidecar container. The operator will use a small script to\nmitigate this behaviour. All NiFi image can be used the only one requirement is an available ",Object(l.b)("strong",{parentName:"li"},"wget")," command."),Object(l.b)("li",{parentName:"ul"},"To access a NiFi cluster which runs inside the mesh. Operator will supports creating Istio ingress gateways.")))}d.isMDXComponent=!0},563:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,u=d["".concat(i,".").concat(m)]||d[m]||s[m]||l;return a?r.a.createElement(u,b(b({ref:t},o),{},{components:a})):r.a.createElement(u,b({ref:t},o))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var o=2;o<l;o++)i[o]=a[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);