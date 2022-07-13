(window.webpackJsonp=window.webpackJsonp||[]).push([[456],{523:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),l=(n(0),n(563)),i=["components"],c={id:"7_external_service_config",title:"External Service Config",sidebar_label:"External Service Config"},b={unversionedId:"5_references/1_nifi_cluster/7_external_service_config",id:"version-v0.6.3/5_references/1_nifi_cluster/7_external_service_config",isDocsHomePage:!1,title:"External Service Config",description:"ListenersConfig defines the Nifi listener types :",source:"@site/versioned_docs/version-v0.6.3/5_references/1_nifi_cluster/7_external_service_config.md",slug:"/5_references/1_nifi_cluster/7_external_service_config",permalink:"/nifikop/docs/v0.6.3/5_references/1_nifi_cluster/7_external_service_config",editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.6.3/5_references/1_nifi_cluster/7_external_service_config.md",version:"v0.6.3",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1625866397,sidebar_label:"External Service Config",sidebar:"version-v0.6.3/docs",previous:{title:"Listeners Config",permalink:"/nifikop/docs/v0.6.3/5_references/1_nifi_cluster/6_listeners_config"},next:{title:"NiFi User",permalink:"/nifikop/docs/v0.6.3/5_references/2_nifi_user"}},o=[{value:"ExternalServiceConfig",id:"externalserviceconfig",children:[]},{value:"ExternalServiceSpec",id:"externalservicespec",children:[]},{value:"PortConfig",id:"portconfig",children:[]}],p={rightToc:o};function s(e){var t=e.components,n=Object(a.a)(e,i);return Object(l.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"ListenersConfig defines the Nifi listener types :"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},'  externalServices:\n    - name: "clusterip"\n      spec:\n        type: ClusterIP\n        portConfigs:\n          - port: 8080\n            internalListenerName: "http"\n      serviceAnnotations:\n        toto: tata\n')),Object(l.b)("h2",{id:"externalserviceconfig"},"ExternalServiceConfig"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"name"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"must be unique within a namespace. Name is primarily intended for creation idempotence and configuration."),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"serviceAnnotations"),Object(l.b)("td",{parentName:"tr",align:null},"map","[","string","]","string"),Object(l.b)("td",{parentName:"tr",align:null},"Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadat"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"spec"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#externalservicespec"},"ExternalServiceSpec")),Object(l.b)("td",{parentName:"tr",align:null},"defines the behavior of a service."),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null})))),Object(l.b)("h2",{id:"externalservicespec"},"ExternalServiceSpec"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"portConfigs"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"[","  ","]",Object(l.b)("a",{parentName:"td",href:"#portconfig"},"PortConfig")),Object(l.b)("td",{parentName:"tr",align:null},"Contains the list port for the service and the associated listener"),Object(l.b)("td",{parentName:"tr",align:null},"Yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"clusterIP"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"More info: ",Object(l.b)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies"},"https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies")),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"type"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://godoc.org/k8s.io/api/core/v1#ServiceType"},"ServiceType")),Object(l.b)("td",{parentName:"tr",align:null},"type determines how the Service is exposed. Defaults to ClusterIP. Valid options are ExternalName, ClusterIP, NodePort, and LoadBalancer."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"externalIPs"),Object(l.b)("td",{parentName:"tr",align:null},"[","  ","]","string"),Object(l.b)("td",{parentName:"tr",align:null},"externalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service.  These IPs are not managed by Kubernetes"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"loadBalancerIP"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Only applies to Service Type: LoadBalancer. LoadBalancer will get created with the IP specified in this field."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"loadBalancerSourceRanges"),Object(l.b)("td",{parentName:"tr",align:null},"[","  ","]","string"),Object(l.b)("td",{parentName:"tr",align:null},"If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"externalName"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"externalName is the external reference that kubedns or equivalent will return as a CNAME record for this service. No proxying will be involved."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"-")))),Object(l.b)("h2",{id:"portconfig"},"PortConfig"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"port"),Object(l.b)("td",{parentName:"tr",align:null},"int32"),Object(l.b)("td",{parentName:"tr",align:null},"The port that will be exposed by this service."),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"internalListenerName"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"The name of the listener which will be used as target container."),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"-")))))}s.isMDXComponent=!0},563:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),s=p(n),u=r,m=s["".concat(i,".").concat(u)]||s[u]||d[u]||l;return n?a.a.createElement(m,c(c({ref:t},o),{},{components:n})):a.a.createElement(m,c({ref:t},o))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var o=2;o<l;o++)i[o]=n[o];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);