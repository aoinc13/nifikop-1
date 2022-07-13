(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{245:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),l=(n(0),n(563)),c=["components"],i={id:"2_nifi_user",title:"NiFi User",sidebar_label:"NiFi User"},b={unversionedId:"5_references/2_nifi_user",id:"5_references/2_nifi_user",isDocsHomePage:!1,title:"NiFi User",description:"NifiUser is the Schema for the nifi users API.",source:"@site/../docs/5_references/2_nifi_user.md",slug:"/5_references/2_nifi_user",permalink:"/nifikop/docs/next/5_references/2_nifi_user",editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/../docs/5_references/2_nifi_user.md",version:"current",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1646502846,sidebar_label:"NiFi User",sidebar:"docs",previous:{title:"External Service Config",permalink:"/nifikop/docs/next/5_references/1_nifi_cluster/7_external_service_config"},next:{title:"NiFi Registry Client",permalink:"/nifikop/docs/next/5_references/3_nifi_registry_client"}},o=[{value:"NifiUser",id:"nifiuser",children:[]},{value:"NifiUserSpec",id:"nifiuserspec",children:[]},{value:"NifiUserStatus",id:"nifiuserstatus",children:[]},{value:"ClusterReference",id:"clusterreference",children:[]},{value:"AccessPolicy",id:"accesspolicy",children:[]},{value:"AccessPolicyType",id:"accesspolicytype",children:[]},{value:"AccessPolicyAction",id:"accesspolicyaction",children:[]},{value:"AccessPolicyResource",id:"accesspolicyresource",children:[]}],s={rightToc:o};function p(e){var t=e.components,n=Object(r.a)(e,c);return Object(l.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"NifiUser")," is the Schema for the nifi users API."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: nifi.konpyutaika.com/v1alpha1\nkind: NifiUser\nmetadata:\n  name: aguitton\nspec:\n  identity: alexandre.guitton@orange.com\n  clusterRef:\n    name: nc\n    namespace: nifikop\n  createCert: false\n")),Object(l.b)("h2",{id:"nifiuser"},"NifiUser"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"metadata"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#ObjectMeta"},"ObjectMetadata")),Object(l.b)("td",{parentName:"tr",align:null},"is metadata that all persisted resources must have, which includes all objects users must create."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"nil")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"spec"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#nifiuserspec"},"NifiUserSpec")),Object(l.b)("td",{parentName:"tr",align:null},"defines the desired state of NifiUser."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"nil")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"status"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#nifiuserstatus"},"NifiUserStatus")),Object(l.b)("td",{parentName:"tr",align:null},"defines the observed state of NifiUser."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"nil")))),Object(l.b)("h2",{id:"nifiuserspec"},"NifiUserSpec"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"identity"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"used to define the user identity on NiFi cluster side, when the user's name doesn't suit with Kubernetes resource name."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"secretName"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"name of the secret where all cert resources will be stored."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"clusterRef"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#clusterreference"},"ClusterReference")),Object(l.b)("td",{parentName:"tr",align:null},"contains the reference to the NifiCluster with the one the user is linked."),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"DNSNames"),Object(l.b)("td",{parentName:"tr",align:null},"["," ","]","string"),Object(l.b)("td",{parentName:"tr",align:null},"list of DNSNames that the user will used to request the NifiCluster (allowing to create the right certificates associated)."),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"includeJKS"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"whether or not the the operator also include a Java keystore format (JKS) with you secret."),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"createCert"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"whether or not a certificate will be created for this user."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"accessPolicies"),Object(l.b)("td",{parentName:"tr",align:null},"["," ","]",Object(l.b)("a",{parentName:"td",href:"#accesspolicy"},"AccessPolicy")),Object(l.b)("td",{parentName:"tr",align:null},"defines the list of access policies that will be granted to the group."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"[]")))),Object(l.b)("h2",{id:"nifiuserstatus"},"NifiUserStatus"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"id"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"the nifi user's node id."),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"version"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"the last nifi  user's node revision version catched."),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"-")))),Object(l.b)("h2",{id:"clusterreference"},"ClusterReference"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"name"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"name of the NifiCluster."),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"namespace"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"the NifiCluster namespace location."),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"-")))),Object(l.b)("h2",{id:"accesspolicy"},"AccessPolicy"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"type"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#accesspolicytype"},"AccessPolicyType")),Object(l.b)("td",{parentName:"tr",align:null},'defines the kind of access policy, could be "global" or "component".'),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"action"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#accesspolicyaction"},"AccessPolicyAction")),Object(l.b)("td",{parentName:"tr",align:null},'defines the kind of action that will be granted, could be "read" or "write".'),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"resource"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#accesspolicyresource"},"AccessPolicyResource")),Object(l.b)("td",{parentName:"tr",align:null},"defines the kind of resource targeted by this access policies, please refer to the following page : ",Object(l.b)("a",{parentName:"td",href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#access-policies"},"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#access-policies")),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"componentType"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},'used if the type is "component", it allows to define the kind of component on which is the access policy.'),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"componentId"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},'used if the type is "component", it allows to define the id of the component on which is the access policy.'),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"-")))),Object(l.b)("h2",{id:"accesspolicytype"},"AccessPolicyType"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Value"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"GlobalAccessPolicyType"),Object(l.b)("td",{parentName:"tr",align:null},"global"),Object(l.b)("td",{parentName:"tr",align:null},"Global access policies govern the following system level authorizations")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ComponentAccessPolicyType"),Object(l.b)("td",{parentName:"tr",align:null},"component"),Object(l.b)("td",{parentName:"tr",align:null},"Component level access policies govern the following component level authorizations")))),Object(l.b)("h2",{id:"accesspolicyaction"},"AccessPolicyAction"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Value"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ReadAccessPolicyAction"),Object(l.b)("td",{parentName:"tr",align:null},"read"),Object(l.b)("td",{parentName:"tr",align:null},"Allows users to view")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"WriteAccessPolicyAction"),Object(l.b)("td",{parentName:"tr",align:null},"write"),Object(l.b)("td",{parentName:"tr",align:null},"Allows users to modify")))),Object(l.b)("h2",{id:"accesspolicyresource"},"AccessPolicyResource"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Value"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"FlowAccessPolicyResource"),Object(l.b)("td",{parentName:"tr",align:null},"/flow"),Object(l.b)("td",{parentName:"tr",align:null},"About the UI")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ControllerAccessPolicyResource"),Object(l.b)("td",{parentName:"tr",align:null},"/controller"),Object(l.b)("td",{parentName:"tr",align:null},"about the controller including Reporting Tasks, Controller Services, Parameter Contexts and Nodes in the Cluster")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ParameterContextAccessPolicyResource"),Object(l.b)("td",{parentName:"tr",align:null},"/parameter-context"),Object(l.b)("td",{parentName:"tr",align:null},'About the Parameter Contexts. Access to Parameter Contexts are inherited from the "access the controller" policies unless overridden.')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ProvenanceAccessPolicyResource"),Object(l.b)("td",{parentName:"tr",align:null},"/provenance"),Object(l.b)("td",{parentName:"tr",align:null},"Allows users to submit a Provenance Search and request Event Lineage")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"RestrictedComponentsAccessPolicyResource"),Object(l.b)("td",{parentName:"tr",align:null},"/restricted-components"),Object(l.b)("td",{parentName:"tr",align:null},"About the restricted components assuming other permissions are sufficient. The restricted components may indicate which specific permissions are required. Permissions can be granted for specific restrictions or be granted regardless of restrictions. If permission is granted regardless of restrictions, the user can create/modify all restricted components.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"PoliciesAccessPolicyResource"),Object(l.b)("td",{parentName:"tr",align:null},"/policies"),Object(l.b)("td",{parentName:"tr",align:null},"About the policies for all components")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"TenantsAccessPolicyResource"),Object(l.b)("td",{parentName:"tr",align:null},"/tenants"),Object(l.b)("td",{parentName:"tr",align:null},"About the users and user groups")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"SiteToSiteAccessPolicyResource"),Object(l.b)("td",{parentName:"tr",align:null},"/site-to-site"),Object(l.b)("td",{parentName:"tr",align:null},"Allows other NiFi instances to retrieve Site-To-Site details")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"SystemAccessPolicyResource"),Object(l.b)("td",{parentName:"tr",align:null},"/system"),Object(l.b)("td",{parentName:"tr",align:null},"Allows users to view System Diagnostics")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ProxyAccessPolicyResource"),Object(l.b)("td",{parentName:"tr",align:null},"/proxy"),Object(l.b)("td",{parentName:"tr",align:null},"Allows proxy machines to send requests on the behalf of others")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"CountersAccessPolicyResource"),Object(l.b)("td",{parentName:"tr",align:null},"/counters"),Object(l.b)("td",{parentName:"tr",align:null},"About counters")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ComponentsAccessPolicyResource"),Object(l.b)("td",{parentName:"tr",align:null},"/"),Object(l.b)("td",{parentName:"tr",align:null},"About the component configuration details")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"OperationAccessPolicyResource"),Object(l.b)("td",{parentName:"tr",align:null},"/operation"),Object(l.b)("td",{parentName:"tr",align:null},"to operate components by changing component run status (start/stop/enable/disable), remote port transmission status, or terminating processor threads")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ProvenanceDataAccessPolicyResource"),Object(l.b)("td",{parentName:"tr",align:null},"/provenance-data"),Object(l.b)("td",{parentName:"tr",align:null},"to view provenance events generated by this component")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"DataAccessPolicyResource"),Object(l.b)("td",{parentName:"tr",align:null},"/data"),Object(l.b)("td",{parentName:"tr",align:null},"About metadata and content for this component in flowfile queues in outbound connections and through provenance events")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"PoliciesComponentAccessPolicyResource"),Object(l.b)("td",{parentName:"tr",align:null},"/policies"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"DataTransferAccessPolicyResource"),Object(l.b)("td",{parentName:"tr",align:null},"/data-transfer"),Object(l.b)("td",{parentName:"tr",align:null},"Allows a port to receive data from NiFi instances")))))}p.isMDXComponent=!0},563:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||l;return n?r.a.createElement(m,i(i({ref:t},o),{},{components:n})):r.a.createElement(m,i({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=d;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var o=2;o<l;o++)c[o]=n[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);