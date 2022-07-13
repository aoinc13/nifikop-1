(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),l=(n(0),n(563)),i=["components"],c={id:"6_listeners_config",title:"Listeners Config",sidebar_label:"Listeners Config"},b={unversionedId:"5_references/1_nifi_cluster/6_listeners_config",id:"version-v0.7.0/5_references/1_nifi_cluster/6_listeners_config",isDocsHomePage:!1,title:"Listeners Config",description:"ListenersConfig defines the Nifi listener types :",source:"@site/versioned_docs/version-v0.7.0/5_references/1_nifi_cluster/6_listeners_config.md",slug:"/5_references/1_nifi_cluster/6_listeners_config",permalink:"/nifikop/docs/v0.7.0/5_references/1_nifi_cluster/6_listeners_config",editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.7.0/5_references/1_nifi_cluster/6_listeners_config.md",version:"v0.7.0",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1646600121,sidebar_label:"Listeners Config",sidebar:"version-v0.7.0/docs",previous:{title:"Node state",permalink:"/nifikop/docs/v0.7.0/5_references/1_nifi_cluster/5_node_state"},next:{title:"External Service Config",permalink:"/nifikop/docs/v0.7.0/5_references/1_nifi_cluster/7_external_service_config"}},s=[{value:"ListenersConfig",id:"listenersconfig",children:[]},{value:"InternalListener",id:"internallistener",children:[]},{value:"SSLSecrets",id:"sslsecrets",children:[]}],o={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,i);return Object(l.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"ListenersConfig defines the Nifi listener types :"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"listenersConfig:\n  internalListeners:\n    - type: 'https'\n      name: 'https'\n      containerPort: 8443\n    - type: 'cluster'\n      name: 'cluster'\n      containerPort: 6007\n    - type: 's2s'\n      name: 's2s'\n      containerPort: 10000\n    - type: 'prometheus'\n      name: 'prometheus'\n      containerPort: 9090\n  sslSecrets:\n    tlsSecretName: 'test-nifikop'\n    create: true\n")),Object(l.b)("h2",{id:"listenersconfig"},"ListenersConfig"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"internalListeners"),Object(l.b)("td",{parentName:"tr",align:null},"["," ","]",Object(l.b)("a",{parentName:"td",href:"#internallistener"},"InternalListener")),Object(l.b)("td",{parentName:"tr",align:null},"specifies settings required to access nifi internally."),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"sslSecrets"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#sslsecrets"},"SSLSecrets")),Object(l.b)("td",{parentName:"tr",align:null},"contains information about ssl related kubernetes secrets if one of the listener setting type set to ssl these fields must be populated to."),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"nil")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"clusterDomain"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},'allow to override the default cluster domain which is "cluster.local".'),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"cluster.local"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"useExternalDNS"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"allow to manage externalDNS usage by limiting the DNS names associated to each nodes and load balancer: ",Object(l.b)("inlineCode",{parentName:"td"},"<cluster-name>-node-<node Id>.<cluster-name>.<service name>.<cluster domain>")),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"false")))),Object(l.b)("h2",{id:"internallistener"},"InternalListener"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"type"),Object(l.b)("td",{parentName:"tr",align:null},'enum{ "cluster", "http", "https", "s2s", "prometheus"}'),Object(l.b)("td",{parentName:"tr",align:null},"allow to specify if we are in a specific nifi listener it's allowing to define some required information such as Cluster Port, Http Port, Https Port, S2S or Prometheus port"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"name"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"an identifier for the port which will be configured."),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"containerPort"),Object(l.b)("td",{parentName:"tr",align:null},"int32"),Object(l.b)("td",{parentName:"tr",align:null},"the containerPort."),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"-")))),Object(l.b)("h2",{id:"sslsecrets"},"SSLSecrets"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"tlsSecretName"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"should contain all ssl certs required by nifi including: caCert, caKey, clientCert, clientKey serverCert, serverKey, peerCert, peerKey."),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"create"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"tells the installed cert manager to create the required certs keys."),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"clusterScoped"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"defines if the Issuer created is cluster or namespace scoped."),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"issuerRef"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://docs.cert-manager.io/en/release-0.9/reference/api-docs/index.html#objectreference-v1alpha1"},"ObjectReference")),Object(l.b)("td",{parentName:"tr",align:null},"cIssuerRef allow to use an existing issuer to act as CA: ",Object(l.b)("a",{parentName:"td",href:"https://cert-manager.io/docs/concepts/issuer/"},"https://cert-manager.io/docs/concepts/issuer/")),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"pkiBackend"),Object(l.b)("td",{parentName:"tr",align:null},'enum{"cert-manager"}'),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"-")))))}p.isMDXComponent=!0},563:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),o=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=o(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),p=o(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||l;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<l;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);