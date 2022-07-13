(window.webpackJsonp=window.webpackJsonp||[]).push([[366],{432:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var i=n(2),a=n(6),r=(n(0),n(563)),o=["components"],c={id:"4_external_cluster",title:"External cluster",sidebar_label:"External cluster"},l={unversionedId:"3_tasks/1_nifi_cluster/4_external_cluster",id:"3_tasks/1_nifi_cluster/4_external_cluster",isDocsHomePage:!1,title:"External cluster",description:"This task shows you how to configure an external cluster.",source:"@site/../docs/3_tasks/1_nifi_cluster/4_external_cluster.md",slug:"/3_tasks/1_nifi_cluster/4_external_cluster",permalink:"/nifikop/docs/next/3_tasks/1_nifi_cluster/4_external_cluster",editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/../docs/3_tasks/1_nifi_cluster/4_external_cluster.md",version:"current",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1646502846,sidebar_label:"External cluster",sidebar:"docs",previous:{title:"Cluster Scaling",permalink:"/nifikop/docs/next/3_tasks/1_nifi_cluster/2_cluster_scaling"},next:{title:"Securing NiFi with SSL",permalink:"/nifikop/docs/next/3_tasks/2_security/1_ssl"}},s=[{value:"Common configuration",id:"common-configuration",children:[]},{value:"Secret configuration for Basic authentication",id:"secret-configuration-for-basic-authentication",children:[]},{value:"Secret configuration for TLS authentication",id:"secret-configuration-for-tls-authentication",children:[]}],u={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,o);return Object(r.b)("wrapper",Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This task shows you how to configure an external cluster."),Object(r.b)("h2",{id:"common-configuration"},"Common configuration"),Object(r.b)("p",null,"The operator allows you to manage the Dataflow lifecycle for internal (i.e cluster managed by the operator) and external NiFi cluster.\nA NiFi cluster is considered as external as soon as the ",Object(r.b)("inlineCode",{parentName:"p"},"NifiCluster")," resource used as reference in other NiFi resource explicitly detailed the way to comunicate with the cluster."),Object(r.b)("p",null,"This feature allows you :"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"To automate your Dataflow CI/CD using yaml"),Object(r.b)("li",{parentName:"ul"},"To manage the same way your Dataflow management wherever your cluster is, on bare metal, VMs, k8s, on-premise or on cloud.")),Object(r.b)("p",null,"To deploy different resources (",Object(r.b)("inlineCode",{parentName:"p"},"NifiRegistryClient"),", ",Object(r.b)("inlineCode",{parentName:"p"},"NifiUser"),", ",Object(r.b)("inlineCode",{parentName:"p"},"NifiUserGroup"),", ",Object(r.b)("inlineCode",{parentName:"p"},"NifiParameterContext"),", ",Object(r.b)("inlineCode",{parentName:"p"},"NifiDataflow"),") you simply have to declare a ",Object(r.b)("inlineCode",{parentName:"p"},"NifiCluster")," resource explaining how to discuss with the external cluster, and refer to this resource as usual using the ",Object(r.b)("inlineCode",{parentName:"p"},"Spec.ClusterRef")," field."),Object(r.b)("p",null,"To declare an external cluster you have to follow this kind of configuration :"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: nifi.konpyutaika.com/v1alpha1\nkind: NifiCluster\nmetadata:\n  name: externalcluster\nspec:\n  # rootProcessGroupId contains the uuid of the root process group for this cluster.\n  rootProcessGroupId: 'd37bee03-017a-1000-cff7-4eaaa82266b7'\n  # nodeURITemplate used to dynamically compute node uri.\n  nodeURITemplate: 'nifi0%d.integ.mapreduce.m0.p.fti.net:9090'\n  # all node requiresunique id\n  nodes:\n    - id: 1\n    - id: 2\n    - id: 3\n  # type defines if the cluster is internal (i.e manager by the operator) or external.\n  # :Enum={\"external\",\"internal\"}\n  type: 'external'\n  # clientType defines if the operator will use basic or tls authentication to query the NiFi cluster.\n  # Enum={\"tls\",\"basic\"}\n  clientType: 'basic'\n  # secretRef reference the secret containing the informations required to authenticate to the cluster.\n  secretRef:\n    name: nifikop-credentials\n    namespace: nifikop-nifi\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"Spec.RootProcessGroupId")," field is required to give the ability to the operator of managing root level policy and default deployment and policy."),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"Spec.NodeURITemplate")," field, defines the hostname template of your NiFi cluster nodes, the operator will use this information and the list of id specified in ",Object(r.b)("inlineCode",{parentName:"li"},"Spec.Nodes")," field to generate the hostname of the nodes (in the configuration above you will have : ",Object(r.b)("inlineCode",{parentName:"li"},"nifi01.integ.mapreduce.m0.p.fti.net:9090"),", ",Object(r.b)("inlineCode",{parentName:"li"},"nifi02.integ.mapreduce.m0.p.fti.net:9090"),", ",Object(r.b)("inlineCode",{parentName:"li"},"nifi03.integ.mapreduce.m0.p.fti.net:9090"),")."),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"Spec.Type")," field defines the type of cluster that this resource is refering to, by default it is ",Object(r.b)("inlineCode",{parentName:"li"},"internal"),", in our case here we just want to use this resource to reference an existing NiFi cluster, so we set this field to ",Object(r.b)("inlineCode",{parentName:"li"},"external"),"."),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"Spec.ClientType")," field defines how we want to authenticate to the NiFi cluster API, for now we are supporting two modes :",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"tls")," : using client TLS certificate."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"basic")," : using a username and a password to get an access token."))),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"Spec.SecretRef")," defines a reference to a secret which contains the sensitive values that will be used by the operator to authenticate to the NiFi cluster API (ie in basic mode it will contain the password and username).")),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"The id of node only support ",Object(r.b)("inlineCode",{parentName:"p"},"int32")," as type, so if the hostname of your nodes doesn't match with this, you can't use this feature."))),Object(r.b)("h2",{id:"secret-configuration-for-basic-authentication"},"Secret configuration for Basic authentication"),Object(r.b)("p",null,"When you are using the basic authentication, you have to pass some informations into the secret that is referenced into the ",Object(r.b)("inlineCode",{parentName:"p"},"NifiCluster")," resource:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"username")," : the username associated to the user that will be used by the operator to request the REST API."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"password")," : the password associated to the user that will be used by the operator to request the REST API."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ca.crt (optional)"),": the certificate authority to trust the server certificate if needed")),Object(r.b)("p",null,"The following command shows how you can create this secret :"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-console"},"kubectl create secret generic nifikop-credentials \\\n  --from-file=username=./secrets/username\\\n  --from-file=password=./secrets/password\\\n  --from-file=ca.crt=./secrets/ca.crt\\\n  -n nifikop-nifi\n")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"When you use the basic authentication, the operator will create a secret ",Object(r.b)("inlineCode",{parentName:"p"},"<cluster name>-basic-secret")," containing for each node an access token that will be maintained by the operator."))),Object(r.b)("h2",{id:"secret-configuration-for-tls-authentication"},"Secret configuration for TLS authentication"),Object(r.b)("p",null,"When you are using the tls authentication, you have to pass some information into the secret that is referenced into the ",Object(r.b)("inlineCode",{parentName:"p"},"NifiCluster")," resource:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"tls.key")," : The user private key."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"tls.crt")," : The user certificate."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"password")," : the password associated to the user that will be used by the operator to request the REST API."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ca.crt"),": The CA certificate"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"truststore.jks"),":"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"keystore.jks"),":")))}p.isMDXComponent=!0},563:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||r;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);