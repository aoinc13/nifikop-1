(window.webpackJsonp=window.webpackJsonp||[]).push([[469],{536:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return f}));var a=n(2),i=n(6),r=(n(0),n(563)),o=["components"],c={id:"3_nifi_dataflow",title:"Provisioning NiFi Dataflows",sidebar_label:"NiFi Dataflows"},s={unversionedId:"3_tasks/3_nifi_dataflow",id:"version-v0.7.5/3_tasks/3_nifi_dataflow",isDocsHomePage:!1,title:"Provisioning NiFi Dataflows",description:"You can create NiFi dataflows either :",source:"@site/versioned_docs/version-v0.7.5/3_tasks/3_nifi_dataflow.md",slug:"/3_tasks/3_nifi_dataflow",permalink:"/nifikop/docs/v0.7.5/3_tasks/3_nifi_dataflow",editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.7.5/3_tasks/3_nifi_dataflow.md",version:"v0.7.5",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1637577530,sidebar_label:"NiFi Dataflows",sidebar:"version-v0.7.5/docs",previous:{title:"OpenId Connect",permalink:"/nifikop/docs/v0.7.5/3_tasks/2_security/2_authentication/1_oidc"},next:{title:"Provisioning NiFi Users and Groups",permalink:"/nifikop/docs/v0.7.5/3_tasks/4_nifi_user_group"}},l=[],p={rightToc:l};function f(e){var t=e.components,n=Object(i.a)(e,o);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"You can create NiFi dataflows either :"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"directly against the cluster through its REST API (using UI or some home made scripts), or"),Object(r.b)("li",{parentName:"ul"},"via the ",Object(r.b)("inlineCode",{parentName:"li"},"NifiDataflow")," CRD.")),Object(r.b)("p",null,"If you want more details about the design, just have a look on the ",Object(r.b)("a",{parentName:"p",href:"/nifikop/docs/v0.7.5/1_concepts/2_design_principes#dataflow-lifecycle-management"},"design page")),Object(r.b)("p",null,"To deploy a ",Object(r.b)("a",{parentName:"p",href:"/nifikop/docs/v0.7.5/5_references/5_nifi_dataflow"},"NifiDataflow")," you have to start by deploying a ",Object(r.b)("a",{parentName:"p",href:"/nifikop/docs/v0.7.5/5_references/3_nifi_registry_client"},"NifiRegistryClient")," because ",Object(r.b)("strong",{parentName:"p"},"NiFiKop")," manages dataflow using the ",Object(r.b)("a",{parentName:"p",href:"https://nifi.apache.org/registry"},"NiFi Registry feature"),"."),Object(r.b)("p",null,"Below is an example of ",Object(r.b)("a",{parentName:"p",href:"/nifikop/docs/v0.7.5/5_references/3_nifi_registry_client"},"NifiRegistryClient")," : "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: nifi.orange.com/v1alpha1\nkind: NifiRegistryClient\nmetadata:\n  name: registry-client-example\n  namespace: nifikop\nspec:\n  clusterRef:\n    name: nc\n    namespace: nifikop\n  description: "Registry client managed by NiFiKop"\n  uri: "http://nifi.hostname.com:18080"\n')),Object(r.b)("p",null,"Once you have deployed your ",Object(r.b)("a",{parentName:"p",href:"/nifikop/docs/v0.7.5/5_references/3_nifi_registry_client"},"NifiRegistryClient"),", you have the possibility of defining a configuration that you will apply to your ",Object(r.b)("a",{parentName:"p",href:"/nifikop/docs/v0.7.5/5_references/5_nifi_dataflow"},"NifiDataflow"),"."),Object(r.b)("p",null,"This configuration is defined using the ",Object(r.b)("a",{parentName:"p",href:"/nifikop/docs/v0.7.5/5_references/4_nifi_parameter_context"},"NifiParameterContext")," CRD, which NiFiKop will convert into a ",Object(r.b)("a",{parentName:"p",href:"https://nifi.apache.org/docs/nifi-docs/html/user-guide.html#parameter-contexts"},"Parameter context"),"."),Object(r.b)("p",null,"Below is an example of ",Object(r.b)("a",{parentName:"p",href:"/nifikop/docs/v0.7.5/5_references/4_nifi_parameter_context"},"NifiParameterContext")," : "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: nifi.orange.com/v1alpha1\nkind: NifiParameterContext\nmetadata:\n  name: dataflow-lifecycle\n  namespace: demo\nspec:\n  description: "It is a test"\n  clusterRef:\n    name: nc\n    namespace: nifikop\n  secretRefs:\n    - name: secret-params\n      namespace: nifikop\n  parameters:\n    - name: test\n      value: toto\n      description: tutu\n    - name: test2\n      value: toto\n      description: toto\n')),Object(r.b)("p",null,"As you can see, in the ",Object(r.b)("a",{parentName:"p",href:"/nifikop/docs/v0.7.5/5_references/4_nifi_parameter_context"},"NifiParameterContext")," you can refer to some secrets that will be converted into ",Object(r.b)("a",{parentName:"p",href:"https://nifi.apache.org/docs/nifi-docs/html/user-guide.html#using-parameters-with-sensitive-properties"},"sensitive parameter"),"."),Object(r.b)("p",null,"Here is an example of secret that you can create that will be used by the configuration above : "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-console"},"kubectl create secret generic secret-params \\\n    --from-literal=secret1=yop \\\n    --from-literal=secret2=yep \\\n    -n nifikop\n")),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"As a sensitive value cannot be retrieved through the Rest API, to update the value of a sensitive parameter, you have to : "),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"remove it from the secret "),Object(r.b)("li",{parentName:"ul"},"wait for the next loop"),Object(r.b)("li",{parentName:"ul"},"insert the parameter with the new value inside the secret")),Object(r.b)("p",{parentName:"div"},"or you can simply create a new ",Object(r.b)("a",{parentName:"p",href:"/nifikop/docs/v0.7.5/5_references/4_nifi_parameter_context"},"NifiParameterContext")," and refer it into your ",Object(r.b)("a",{parentName:"p",href:"/nifikop/docs/v0.7.5/5_references/5_nifi_dataflow"},"NifiDataflow"),"."))),Object(r.b)("p",null,"You can now deploy your ",Object(r.b)("a",{parentName:"p",href:"/nifikop/docs/v0.7.5/5_references/5_nifi_dataflow"},"NifiDataflow")," by referencing the previous objects : "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: nifi.orange.com/v1alpha1\nkind: NifiDataflow\nmetadata:\n  name: dataflow-lifecycle\nspec:\n  parentProcessGroupID: "16cfd2ec-0174-1000-0000-00004b9b35cc"\n  bucketId: "01ced6cc-0378-4893-9403-f6c70d080d4f"\n  flowId: "9b2fb465-fb45-49e7-94fe-45b16b642ac9"\n  flowVersion: 2\n  syncMode: always\n  skipInvalidControllerService: true\n  skipInvalidComponent: true\n  clusterRef:\n    name: nc\n    namespace: nifikop\n  registryClientRef:\n    name: registry-client-example\n    namespace: nifikop\n  parameterContextRef:\n    name: dataflow-lifecycle\n    namespace: demo\n  updateStrategy: drain\n')),Object(r.b)("p",null,"To find details about the versioned flow information required check the ",Object(r.b)("a",{parentName:"p",href:"https://nifi.apache.org/docs/nifi-registry-docs/index.html"},"official documentation")),Object(r.b)("p",null,"You have two modes of control from your dataflow by the operator : "),Object(r.b)("p",null,"1 - ",Object(r.b)("inlineCode",{parentName:"p"},"Spec.SyncMode == never")," : The operator will deploy the dataflow as described in the resource, and never control it (unless you change the field to ",Object(r.b)("inlineCode",{parentName:"p"},"always"),"). It is useful when you want to deploy your dataflow without starting it."),Object(r.b)("p",null,"2 - ",Object(r.b)("inlineCode",{parentName:"p"},"Spec.SyncMode == once")," : The operator will deploy the dataflow as described in the resource, run it once, and never control it again (unless you change the field to ",Object(r.b)("inlineCode",{parentName:"p"},"always"),"). It is useful when you want to deploy your dataflow in a dev environment, and you want to update the dataflow."),Object(r.b)("p",null,"3 - ",Object(r.b)("inlineCode",{parentName:"p"},"Spec.SyncMode == always")," : The operator will deploy and ensure the dataflow lifecycle, it will avoid all manual modification directly from the Cluster (e.g remove the process group, remove the versioning, update the parent process group, make some local changes ...). If you want to perform update, rollback or stuff like this, you have to simply update the ",Object(r.b)("a",{parentName:"p",href:"/nifikop/docs/v0.7.5/5_references/5_nifi_dataflow"},"NifiDataflow")," resource."),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"More information about ",Object(r.b)("inlineCode",{parentName:"p"},"Spec.UpdateStrategy")," ",Object(r.b)("a",{parentName:"p",href:"/nifikop/docs/v0.7.5/5_references/5_nifi_dataflow#dataflowupdatestrategy"},"here")))))}f.isMDXComponent=!0},563:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=p(n),b=a,m=f["".concat(o,".").concat(b)]||f[b]||d[b]||r;return n?i.a.createElement(m,c(c({ref:t},l),{},{components:n})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);