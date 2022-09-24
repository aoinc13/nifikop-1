"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[9183],{5318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,m=d["".concat(l,".").concat(u)]||d[u]||f[u]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8968:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>f});var a=n(5773),i=n(808),r=(n(7378),n(5318)),o=["components"],s={id:"3_nifi_dataflow",title:"Provisioning NiFi Dataflows",sidebar_label:"NiFi Dataflows"},l=void 0,p={unversionedId:"3_tasks/3_nifi_dataflow",id:"version-v0.13.0/3_tasks/3_nifi_dataflow",title:"Provisioning NiFi Dataflows",description:"You can create NiFi dataflows either :",source:"@site/versioned_docs/version-v0.13.0/3_tasks/3_nifi_dataflow.md",sourceDirName:"3_tasks",slug:"/3_tasks/3_nifi_dataflow",permalink:"/nifikop/docs/v0.13.0/3_tasks/3_nifi_dataflow",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.13.0/3_tasks/3_nifi_dataflow.md",tags:[],version:"v0.13.0",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1660941078,formattedLastUpdatedAt:"Aug 19, 2022",frontMatter:{id:"3_nifi_dataflow",title:"Provisioning NiFi Dataflows",sidebar_label:"NiFi Dataflows"},sidebar:"version-v0.13.0/docs",previous:{title:"Custom Authorizers",permalink:"/nifikop/docs/v0.13.0/3_tasks/2_security/2_authorization/1_authorizer"},next:{title:"NiFi Users and Groups",permalink:"/nifikop/docs/v0.13.0/3_tasks/4_nifi_user_group"}},c={},f=[],d={toc:f};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can create NiFi dataflows either :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"directly against the cluster through its REST API (using UI or some home made scripts), or"),(0,r.kt)("li",{parentName:"ul"},"via the ",(0,r.kt)("inlineCode",{parentName:"li"},"NifiDataflow")," CRD.")),(0,r.kt)("p",null,"If you want more details about the design, just have a look on the ",(0,r.kt)("a",{parentName:"p",href:"/nifikop/docs/v0.13.0/1_concepts/2_design_principes#dataflow-lifecycle-management"},"design page")),(0,r.kt)("p",null,"To deploy a ",(0,r.kt)("a",{parentName:"p",href:"/nifikop/docs/v0.13.0/5_references/5_nifi_dataflow"},"NifiDataflow")," you have to start by deploying a ",(0,r.kt)("a",{parentName:"p",href:"/nifikop/docs/v0.13.0/5_references/3_nifi_registry_client"},"NifiRegistryClient")," because ",(0,r.kt)("strong",{parentName:"p"},"NiFiKop")," manages dataflow using the ",(0,r.kt)("a",{parentName:"p",href:"https://nifi.apache.org/registry"},"NiFi Registry feature"),"."),(0,r.kt)("p",null,"Below is an example of ",(0,r.kt)("a",{parentName:"p",href:"/nifikop/docs/v0.13.0/5_references/3_nifi_registry_client"},"NifiRegistryClient")," : "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: nifi.konpyutaika.com/v1alpha1\nkind: NifiRegistryClient\nmetadata:\n  name: registry-client-example\n  namespace: nifikop\nspec:\n  clusterRef:\n    name: nc\n    namespace: nifikop\n  description: "Registry client managed by NiFiKop"\n  uri: "http://nifi.hostname.com:18080"\n')),(0,r.kt)("p",null,"Once you have deployed your ",(0,r.kt)("a",{parentName:"p",href:"/nifikop/docs/v0.13.0/5_references/3_nifi_registry_client"},"NifiRegistryClient"),", you have the possibility of defining a configuration that you will apply to your ",(0,r.kt)("a",{parentName:"p",href:"/nifikop/docs/v0.13.0/5_references/5_nifi_dataflow"},"NifiDataflow"),"."),(0,r.kt)("p",null,"This configuration is defined using the ",(0,r.kt)("a",{parentName:"p",href:"/nifikop/docs/v0.13.0/5_references/4_nifi_parameter_context"},"NifiParameterContext")," CRD, which NiFiKop will convert into a ",(0,r.kt)("a",{parentName:"p",href:"https://nifi.apache.org/docs/nifi-docs/html/user-guide.html#parameter-contexts"},"Parameter context"),"."),(0,r.kt)("p",null,"Below is an example of ",(0,r.kt)("a",{parentName:"p",href:"/nifikop/docs/v0.13.0/5_references/4_nifi_parameter_context"},"NifiParameterContext")," : "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: nifi.konpyutaika.com/v1alpha1\nkind: NifiParameterContext\nmetadata:\n  name: dataflow-lifecycle\n  namespace: demo\nspec:\n  description: "It is a test"\n  clusterRef:\n    name: nc\n    namespace: nifikop\n  secretRefs:\n    - name: secret-params\n      namespace: nifikop\n  parameters:\n    - name: test\n      value: toto\n      description: tutu\n    - name: test2\n      value: toto\n      description: toto\n')),(0,r.kt)("p",null,"As you can see, in the ",(0,r.kt)("a",{parentName:"p",href:"/nifikop/docs/v0.13.0/5_references/4_nifi_parameter_context"},"NifiParameterContext")," you can refer to some secrets that will be converted into ",(0,r.kt)("a",{parentName:"p",href:"https://nifi.apache.org/docs/nifi-docs/html/user-guide.html#using-parameters-with-sensitive-properties"},"sensitive parameter"),"."),(0,r.kt)("p",null,"Here is an example of secret that you can create that will be used by the configuration above : "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"kubectl create secret generic secret-params \\\n    --from-literal=secret1=yop \\\n    --from-literal=secret2=yep \\\n    -n nifikop\n")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"As a sensitive value cannot be retrieved through the Rest API, to update the value of a sensitive parameter, you have to : "),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"remove it from the secret "),(0,r.kt)("li",{parentName:"ul"},"wait for the next loop"),(0,r.kt)("li",{parentName:"ul"},"insert the parameter with the new value inside the secret")),(0,r.kt)("p",{parentName:"admonition"},"or you can simply create a new ",(0,r.kt)("a",{parentName:"p",href:"/nifikop/docs/v0.13.0/5_references/4_nifi_parameter_context"},"NifiParameterContext")," and refer it into your ",(0,r.kt)("a",{parentName:"p",href:"/nifikop/docs/v0.13.0/5_references/5_nifi_dataflow"},"NifiDataflow"),".")),(0,r.kt)("p",null,"You can now deploy your ",(0,r.kt)("a",{parentName:"p",href:"/nifikop/docs/v0.13.0/5_references/5_nifi_dataflow"},"NifiDataflow")," by referencing the previous objects : "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: nifi.konpyutaika.com/v1alpha1\nkind: NifiDataflow\nmetadata:\n  name: dataflow-lifecycle\nspec:\n  parentProcessGroupID: "16cfd2ec-0174-1000-0000-00004b9b35cc"\n  bucketId: "01ced6cc-0378-4893-9403-f6c70d080d4f"\n  flowId: "9b2fb465-fb45-49e7-94fe-45b16b642ac9"\n  flowVersion: 2\n  syncMode: always\n  skipInvalidControllerService: true\n  skipInvalidComponent: true\n  clusterRef:\n    name: nc\n    namespace: nifikop\n  registryClientRef:\n    name: registry-client-example\n    namespace: nifikop\n  parameterContextRef:\n    name: dataflow-lifecycle\n    namespace: demo\n  updateStrategy: drain\n')),(0,r.kt)("p",null,"To find details about the versioned flow information required check the ",(0,r.kt)("a",{parentName:"p",href:"https://nifi.apache.org/docs/nifi-registry-docs/index.html"},"official documentation")),(0,r.kt)("p",null,"You have two modes of control from your dataflow by the operator : "),(0,r.kt)("p",null,"1 - ",(0,r.kt)("inlineCode",{parentName:"p"},"Spec.SyncMode == never")," : The operator will deploy the dataflow as described in the resource, and never control it (unless you change the field to ",(0,r.kt)("inlineCode",{parentName:"p"},"always"),"). It is useful when you want to deploy your dataflow without starting it."),(0,r.kt)("p",null,"2 - ",(0,r.kt)("inlineCode",{parentName:"p"},"Spec.SyncMode == once")," : The operator will deploy the dataflow as described in the resource, run it once, and never control it again (unless you change the field to ",(0,r.kt)("inlineCode",{parentName:"p"},"always"),"). It is useful when you want to deploy your dataflow in a dev environment, and you want to update the dataflow."),(0,r.kt)("p",null,"3 - ",(0,r.kt)("inlineCode",{parentName:"p"},"Spec.SyncMode == always")," : The operator will deploy and ensure the dataflow lifecycle, it will avoid all manual modification directly from the Cluster (e.g remove the process group, remove the versioning, update the parent process group, make some local changes ...). If you want to perform update, rollback or stuff like this, you have to simply update the ",(0,r.kt)("a",{parentName:"p",href:"/nifikop/docs/v0.13.0/5_references/5_nifi_dataflow"},"NifiDataflow")," resource."),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"More information about ",(0,r.kt)("inlineCode",{parentName:"p"},"Spec.UpdateStrategy")," ",(0,r.kt)("a",{parentName:"p",href:"/nifikop/docs/v0.13.0/5_references/5_nifi_dataflow#dataflowupdatestrategy"},"here"))))}u.isMDXComponent=!0}}]);