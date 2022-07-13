(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{314:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return o}));var r=n(2),i=n(6),a=(n(0),n(563)),l=["components"],c={id:"3_nifi_registry_client",title:"NiFi Registry Client",sidebar_label:"NiFi Registry Client"},b={unversionedId:"5_references/3_nifi_registry_client",id:"version-v0.7.0/5_references/3_nifi_registry_client",isDocsHomePage:!1,title:"NiFi Registry Client",description:"NifiRegistryClient is the Schema for the NiFi registry client API.",source:"@site/versioned_docs/version-v0.7.0/5_references/3_nifi_registry_client.md",slug:"/5_references/3_nifi_registry_client",permalink:"/nifikop/docs/v0.7.0/5_references/3_nifi_registry_client",editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.7.0/5_references/3_nifi_registry_client.md",version:"v0.7.0",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1646600121,sidebar_label:"NiFi Registry Client",sidebar:"version-v0.7.0/docs",previous:{title:"NiFi User",permalink:"/nifikop/docs/v0.7.0/5_references/2_nifi_user"},next:{title:"NiFi Parameter Context",permalink:"/nifikop/docs/v0.7.0/5_references/4_nifi_parameter_context"}},s=[{value:"NifiRegistryClient",id:"nifiregistryclient",children:[]},{value:"NifiRegistryClientsSpec",id:"nifiregistryclientsspec",children:[]},{value:"NifiRegistryClientStatus",id:"nifiregistryclientstatus",children:[]}],p={rightToc:s};function o(e){var t=e.components,n=Object(i.a)(e,l);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"NifiRegistryClient")," is the Schema for the NiFi registry client API."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: nifi.orange.com/v1alpha1\nkind: NifiRegistryClient\nmetadata:\n  name: squidflow\nspec:\n  clusterRef:\n    name: nc\n    namespace: nifikop\n  description: 'Squidflow demo'\n  uri: 'http://nifi-registry:18080'\n")),Object(a.b)("h2",{id:"nifiregistryclient"},"NifiRegistryClient"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Field"),Object(a.b)("th",{parentName:"tr",align:null},"Type"),Object(a.b)("th",{parentName:"tr",align:null},"Description"),Object(a.b)("th",{parentName:"tr",align:null},"Required"),Object(a.b)("th",{parentName:"tr",align:null},"Default"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"metadata"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#ObjectMeta"},"ObjectMetadata")),Object(a.b)("td",{parentName:"tr",align:null},"is metadata that all persisted resources must have, which includes all objects registry clients must create."),Object(a.b)("td",{parentName:"tr",align:null},"No"),Object(a.b)("td",{parentName:"tr",align:null},"nil")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"spec"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"#nifiregistryclientspec"},"NifiRegistryClientSpec")),Object(a.b)("td",{parentName:"tr",align:null},"defines the desired state of NifiRegistryClient."),Object(a.b)("td",{parentName:"tr",align:null},"No"),Object(a.b)("td",{parentName:"tr",align:null},"nil")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"status"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"#nifiregistryclientstatus"},"NifiRegistryClientStatus")),Object(a.b)("td",{parentName:"tr",align:null},"defines the observed state of NifiRegistryClient."),Object(a.b)("td",{parentName:"tr",align:null},"No"),Object(a.b)("td",{parentName:"tr",align:null},"nil")))),Object(a.b)("h2",{id:"nifiregistryclientsspec"},"NifiRegistryClientsSpec"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Field"),Object(a.b)("th",{parentName:"tr",align:null},"Type"),Object(a.b)("th",{parentName:"tr",align:null},"Description"),Object(a.b)("th",{parentName:"tr",align:null},"Required"),Object(a.b)("th",{parentName:"tr",align:null},"Default"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"description"),Object(a.b)("td",{parentName:"tr",align:null},"string"),Object(a.b)("td",{parentName:"tr",align:null},"describes the Registry client."),Object(a.b)("td",{parentName:"tr",align:null},"No"),Object(a.b)("td",{parentName:"tr",align:null},"-")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"uri"),Object(a.b)("td",{parentName:"tr",align:null},"string"),Object(a.b)("td",{parentName:"tr",align:null},"URI of the NiFi registry that should be used for pulling the flow."),Object(a.b)("td",{parentName:"tr",align:null},"Yes"),Object(a.b)("td",{parentName:"tr",align:null},"-")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"clusterRef"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"/nifikop/docs/v0.7.0/5_references/2_nifi_user#clusterreference"},"ClusterReference")),Object(a.b)("td",{parentName:"tr",align:null},"contains the reference to the NifiCluster with the one the user is linked."),Object(a.b)("td",{parentName:"tr",align:null},"Yes"),Object(a.b)("td",{parentName:"tr",align:null},"-")))),Object(a.b)("h2",{id:"nifiregistryclientstatus"},"NifiRegistryClientStatus"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Field"),Object(a.b)("th",{parentName:"tr",align:null},"Type"),Object(a.b)("th",{parentName:"tr",align:null},"Description"),Object(a.b)("th",{parentName:"tr",align:null},"Required"),Object(a.b)("th",{parentName:"tr",align:null},"Default"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"id"),Object(a.b)("td",{parentName:"tr",align:null},"string"),Object(a.b)("td",{parentName:"tr",align:null},"nifi registry client's id."),Object(a.b)("td",{parentName:"tr",align:null},"Yes"),Object(a.b)("td",{parentName:"tr",align:null},"-")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"version"),Object(a.b)("td",{parentName:"tr",align:null},"int64"),Object(a.b)("td",{parentName:"tr",align:null},"the last nifi registry client revision version catched."),Object(a.b)("td",{parentName:"tr",align:null},"Yes"),Object(a.b)("td",{parentName:"tr",align:null},"-")))))}o.isMDXComponent=!0},563:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},o=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),o=p(n),d=r,m=o["".concat(l,".").concat(d)]||o[d]||u[d]||a;return n?i.a.createElement(m,c(c({ref:t},s),{},{components:n})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);