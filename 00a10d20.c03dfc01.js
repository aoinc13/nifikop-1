(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{455:function(e,t,a){"use strict";a.d(t,"a",(function(){return f})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},f=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=p(a),d=n,m=f["".concat(o,".").concat(d)]||f[d]||b[d]||r;return a?i.a.createElement(m,c(c({ref:t},l),{},{components:a})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<r;l++)o[l]=a[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},63:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(2),i=a(6),r=(a(0),a(455)),o={id:"3_nifi_dataflow",title:"Provisioning NiFi Dataflows",sidebar_label:"NiFi Dataflows"},c={unversionedId:"3_tasks/3_nifi_dataflow",id:"version-v0.7.6/3_tasks/3_nifi_dataflow",isDocsHomePage:!1,title:"Provisioning NiFi Dataflows",description:"You can create NiFi dataflows either :",source:"@site/versioned_docs/version-v0.7.6/3_tasks/3_nifi_dataflow.md",slug:"/3_tasks/3_nifi_dataflow",permalink:"/nifikop/docs/v0.7.6/3_tasks/3_nifi_dataflow",editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.7.6/3_tasks/3_nifi_dataflow.md",version:"v0.7.6",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1646600121,sidebar_label:"NiFi Dataflows",sidebar:"version-v0.7.6/docs",previous:{title:"OpenId Connect",permalink:"/nifikop/docs/v0.7.6/3_tasks/2_security/2_authentication/1_oidc"},next:{title:"Provisioning NiFi Users and Groups",permalink:"/nifikop/docs/v0.7.6/3_tasks/4_nifi_user_group"}},s=[],l={rightToc:s};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"You can create NiFi dataflows either :"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"directly against the cluster through its REST API (using UI or some home made scripts), or"),Object(r.b)("li",{parentName:"ul"},"via the ",Object(r.b)("inlineCode",{parentName:"li"},"NifiDataflow")," CRD.")),Object(r.b)("p",null,"If you want more details about the design, just have a look on the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/nifikop/docs/v0.7.6/1_concepts/2_design_principes#dataflow-lifecycle-management"}),"design page")),Object(r.b)("p",null,"To deploy a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/nifikop/docs/v0.7.6/5_references/5_nifi_dataflow"}),"NifiDataflow")," you have to start by deploying a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/nifikop/docs/v0.7.6/5_references/3_nifi_registry_client"}),"NifiRegistryClient")," because ",Object(r.b)("strong",{parentName:"p"},"NiFiKop")," manages dataflow using the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://nifi.apache.org/registry"}),"NiFi Registry feature"),"."),Object(r.b)("p",null,"Below is an example of ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/nifikop/docs/v0.7.6/5_references/3_nifi_registry_client"}),"NifiRegistryClient")," :"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: nifi.orange.com/v1alpha1\nkind: NifiRegistryClient\nmetadata:\n  name: registry-client-example\n  namespace: nifikop\nspec:\n  clusterRef:\n    name: nc\n    namespace: nifikop\n  description: 'Registry client managed by NiFiKop'\n  uri: 'http://nifi.hostname.com:18080'\n")),Object(r.b)("p",null,"Once you have deployed your ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/nifikop/docs/v0.7.6/5_references/3_nifi_registry_client"}),"NifiRegistryClient"),", you have the possibility of defining a configuration that you will apply to your ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/nifikop/docs/v0.7.6/5_references/5_nifi_dataflow"}),"NifiDataflow"),"."),Object(r.b)("p",null,"This configuration is defined using the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/nifikop/docs/v0.7.6/5_references/4_nifi_parameter_context"}),"NifiParameterContext")," CRD, which NiFiKop will convert into a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://nifi.apache.org/docs/nifi-docs/html/user-guide.html#parameter-contexts"}),"Parameter context"),"."),Object(r.b)("p",null,"Below is an example of ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/nifikop/docs/v0.7.6/5_references/4_nifi_parameter_context"}),"NifiParameterContext")," :"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: nifi.orange.com/v1alpha1\nkind: NifiParameterContext\nmetadata:\n  name: dataflow-lifecycle\n  namespace: demo\nspec:\n  description: 'It is a test'\n  clusterRef:\n    name: nc\n    namespace: nifikop\n  secretRefs:\n    - name: secret-params\n      namespace: nifikop\n  parameters:\n    - name: test\n      value: toto\n      description: tutu\n    - name: test2\n      value: toto\n      description: toto\n")),Object(r.b)("p",null,"As you can see, in the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/nifikop/docs/v0.7.6/5_references/4_nifi_parameter_context"}),"NifiParameterContext")," you can refer to some secrets that will be converted into ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://nifi.apache.org/docs/nifi-docs/html/user-guide.html#using-parameters-with-sensitive-properties"}),"sensitive parameter"),"."),Object(r.b)("p",null,"Here is an example of secret that you can create that will be used by the configuration above :"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-console"}),"kubectl create secret generic secret-params \\\n    --from-literal=secret1=yop \\\n    --from-literal=secret2=yep \\\n    -n nifikop\n")),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"As a sensitive value cannot be retrieved through the Rest API, to update the value of a sensitive parameter, you have to :"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"remove it from the secret"),Object(r.b)("li",{parentName:"ul"},"wait for the next loop"),Object(r.b)("li",{parentName:"ul"},"insert the parameter with the new value inside the secret")),Object(r.b)("p",{parentName:"div"},"or you can simply create a new ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/nifikop/docs/v0.7.6/5_references/4_nifi_parameter_context"}),"NifiParameterContext")," and refer it into your ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/nifikop/docs/v0.7.6/5_references/5_nifi_dataflow"}),"NifiDataflow"),"."))),Object(r.b)("p",null,"You can now deploy your ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/nifikop/docs/v0.7.6/5_references/5_nifi_dataflow"}),"NifiDataflow")," by referencing the previous objects :"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: nifi.orange.com/v1alpha1\nkind: NifiDataflow\nmetadata:\n  name: dataflow-lifecycle\nspec:\n  parentProcessGroupID: '16cfd2ec-0174-1000-0000-00004b9b35cc'\n  bucketId: '01ced6cc-0378-4893-9403-f6c70d080d4f'\n  flowId: '9b2fb465-fb45-49e7-94fe-45b16b642ac9'\n  flowVersion: 2\n  syncMode: always\n  skipInvalidControllerService: true\n  skipInvalidComponent: true\n  clusterRef:\n    name: nc\n    namespace: nifikop\n  registryClientRef:\n    name: registry-client-example\n    namespace: nifikop\n  parameterContextRef:\n    name: dataflow-lifecycle\n    namespace: demo\n  updateStrategy: drain\n")),Object(r.b)("p",null,"To find details about the versioned flow information required check the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://nifi.apache.org/docs/nifi-registry-docs/index.html"}),"official documentation")),Object(r.b)("p",null,"You have two modes of control from your dataflow by the operator :"),Object(r.b)("p",null,"1 - ",Object(r.b)("inlineCode",{parentName:"p"},"Spec.SyncMode == never")," : The operator will deploy the dataflow as described in the resource, and never control it (unless you change the field to ",Object(r.b)("inlineCode",{parentName:"p"},"always"),"). It is useful when you want to deploy your dataflow without starting it."),Object(r.b)("p",null,"2 - ",Object(r.b)("inlineCode",{parentName:"p"},"Spec.SyncMode == once")," : The operator will deploy the dataflow as described in the resource, run it once, and never control it again (unless you change the field to ",Object(r.b)("inlineCode",{parentName:"p"},"always"),"). It is useful when you want to deploy your dataflow in a dev environment, and you want to update the dataflow."),Object(r.b)("p",null,"3 - ",Object(r.b)("inlineCode",{parentName:"p"},"Spec.SyncMode == always")," : The operator will deploy and ensure the dataflow lifecycle, it will avoid all manual modification directly from the Cluster (e.g remove the process group, remove the versioning, update the parent process group, make some local changes ...). If you want to perform update, rollback or stuff like this, you have to simply update the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/nifikop/docs/v0.7.6/5_references/5_nifi_dataflow"}),"NifiDataflow")," resource."),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"More information about ",Object(r.b)("inlineCode",{parentName:"p"},"Spec.UpdateStrategy")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/nifikop/docs/v0.7.6/5_references/5_nifi_dataflow#dataflowupdatestrategy"}),"here")))))}p.isMDXComponent=!0}}]);