"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[35273],{35318:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var i=t(27378);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),c=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=c(e.components);return i.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(t),m=a,u=f["".concat(p,".").concat(m)]||f[m]||d[m]||o;return t?i.createElement(u,r(r({ref:n},s),{},{components:t})):i.createElement(u,r({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=f;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=t[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8773:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var i=t(25773),a=t(30808),o=(t(27378),t(35318)),r=["components"],l={id:"1_deploy_connection",title:"Deploy connection",sidebar_label:"Deploy connection"},p=void 0,c={unversionedId:"3_manage_nifi/4_manage_connections/1_deploy_connection",id:"3_manage_nifi/4_manage_connections/1_deploy_connection",title:"Deploy connection",description:"You can create NiFi connections either :",source:"@site/../docs/3_manage_nifi/4_manage_connections/1_deploy_connection.md",sourceDirName:"3_manage_nifi/4_manage_connections",slug:"/3_manage_nifi/4_manage_connections/1_deploy_connection",permalink:"/nifikop/docs/next/3_manage_nifi/4_manage_connections/1_deploy_connection",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/../docs/3_manage_nifi/4_manage_connections/1_deploy_connection.md",tags:[],version:"current",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1693341953,formattedLastUpdatedAt:"Aug 29, 2023",frontMatter:{id:"1_deploy_connection",title:"Deploy connection",sidebar_label:"Deploy connection"},sidebar:"docs",previous:{title:"Deploy dataflow",permalink:"/nifikop/docs/next/3_manage_nifi/3_manage_dataflows/1_deploy_dataflow"},next:{title:"Compatibility versions",permalink:"/nifikop/docs/next/4_compatibility_versions"}},s={},d=[],f={toc:d};function m(e){var n=e.components,l=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},f,l,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can create NiFi connections either :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"directly against the cluster through its REST API (using UI or some home made scripts), or"),(0,o.kt)("li",{parentName:"ul"},"via the ",(0,o.kt)("inlineCode",{parentName:"li"},"NifiConnection")," CRD.")),(0,o.kt)("p",null,"To deploy a ",(0,o.kt)("a",{parentName:"p",href:"../../5_references/8_nifi_connection"},"NifiConnection")," you have to start by deploying at least 2 ",(0,o.kt)("a",{parentName:"p",href:"../../5_references/5_nifi_dataflow"},"NifiDataflows")," because ",(0,o.kt)("strong",{parentName:"p"},"NiFiKop")," manages connection between 2 ",(0,o.kt)("a",{parentName:"p",href:"../../5_references/5_nifi_dataflow"},"NifiDataflows"),"."),(0,o.kt)("p",null,"If you want more details about how to deploy ",(0,o.kt)("a",{parentName:"p",href:"../../5_references/5_nifi_dataflow"},"NifiDataflow"),", just have a look on the ",(0,o.kt)("a",{parentName:"p",href:"../3_manage_dataflows/1_deploy_dataflow"},"how to deploy dataflow page"),"."),(0,o.kt)("p",null,"Below is an example of 2 ",(0,o.kt)("a",{parentName:"p",href:"../../5_references/5_nifi_dataflow"},"NifiDataflows")," named respectively ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"output"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: nifi.konpyutaika.com/v1alpha1\nkind: NifiDataflow\nmetadata:\n  name: input\n  namespace: nifikop\nspec:\n  clusterRef:\n    name: nc\n    namespace: nifikop\n  bucketId: deedb9f6-65a4-44e9-a1c9-722008fcd0ba\n  flowId: ab95431d-980d-41bd-904a-fac4bd864ba6\n  flowVersion: 1\n  registryClientRef:\n    name: registry-client-example\n    namespace: nifikop\n  skipInvalidComponent: true\n  skipInvalidControllerService: true\n  syncMode: always\n  updateStrategy: drain\n  flowPosition:\n    posX: 0\n    posY: 0\n---\napiVersion: nifi.konpyutaika.com/v1alpha1\nkind: NifiDataflow\nmetadata:\n  name: output\n  namespace: nifikop\nspec:\n  clusterRef:\n    name: nc\n    namespace: nifikop\n  bucketId: deedb9f6-65a4-44e9-a1c9-722008fcd0ba\n  flowId: fc5363eb-801e-432f-aa94-488838674d07\n  flowVersion: 2\n  registryClientRef:\n    name: registry-client-example\n    namespace: nifikop\n  skipInvalidComponent: true\n  skipInvalidControllerService: true\n  syncMode: always\n  updateStrategy: drain\n  flowPosition:\n    posX: 750\n    posY: 0\n")),(0,o.kt)("p",null,"We will obtain the following initial setup:\n",(0,o.kt)("img",{alt:"Initial setup",src:t(4787).Z,width:"1920",height:"1080"})),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," dataflow must have an ",(0,o.kt)("inlineCode",{parentName:"p"},"output port")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"output")," dataflow must have an ",(0,o.kt)("inlineCode",{parentName:"p"},"input port"),".")),(0,o.kt)("p",null,"Now that we have 2 ",(0,o.kt)("a",{parentName:"p",href:"../../5_references/5_nifi_dataflow"},"NifiDataflows"),", we can connect them with a ",(0,o.kt)("a",{parentName:"p",href:"../../5_references/8_nifi_connection"},"NifiConnection"),"."),(0,o.kt)("p",null,"Below is an example of a ",(0,o.kt)("a",{parentName:"p",href:"../../5_references/8_nifi_connection"},"NifiConnection")," named ",(0,o.kt)("inlineCode",{parentName:"p"},"connection")," between the 2 previously deployed dataflows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: nifi.konpyutaika.com/v1alpha1\nkind: NifiConnection\nmetadata:\n  name: connection\n  namespace: nifikop\nspec:\n  source:\n    name: input\n    namespace: nifikop\n    subName: output\n    type: dataflow\n  destination:\n    name: output\n    namespace: nifikop\n    subName: input\n    type: dataflow\n  configuration:\n    backPressureDataSizeThreshold: 100 GB\n    backPressureObjectThreshold: 10000\n    flowFileExpiration: 1 hour\n    labelIndex: 0\n    bends:\n      - posX: 550\n        posY: 550\n      - posX: 550\n        posY: 440\n      - posX: 550\n        posY: 88\n  updateStrategy: drain\n")),(0,o.kt)("p",null,"You will obtain the following setup:\n",(0,o.kt)("img",{alt:"Connection setup",src:t(17179).Z,width:"1920",height:"1080"})),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"prioritizers")," field takes a list of prioritizers, and the order of the list matters in NiFi so it matters in the resource."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"prioriters=[NewestFlowFileFirstPrioritizer, FirstInFirstOutPrioritizer, OldestFlowFileFirstPrioritizer]")," ",(0,o.kt)("img",{alt:"Connection prioritizers 0",src:t(54273).Z,width:"765",height:"565"})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"prioriters=[FirstInFirstOutPrioritizer, NewestFlowFileFirstPrioritizer, OldestFlowFileFirstPrioritizer]")," ",(0,o.kt)("img",{alt:"Connection prioritizers 1",src:t(54273).Z,width:"765",height:"565"})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"prioriters=[PriorityAttributePrioritizer]")," ",(0,o.kt)("img",{alt:"Connection prioritizers 2",src:t(54273).Z,width:"765",height:"565"}))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"labelIndex")," field will place the label of the connection according to the bends.\nIf we take the previous bending configuration, you will get this setup for these labelIndex:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"labelIndex=0"),": ",(0,o.kt)("img",{alt:"Connection labelIndex 0",src:t(84497).Z,width:"1151",height:"618"})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"labelIndex=1"),": ",(0,o.kt)("img",{alt:"Connection labelIndex 1",src:t(12185).Z,width:"1146",height:"573"})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"labelIndex=2"),": ",(0,o.kt)("img",{alt:"Connection labelIndex 2",src:t(26156).Z,width:"1145",height:"573"}))))}m.isMDXComponent=!0},84497:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/connection_labelindex_0-07fb0edf03edc921949b6d14d5402e1f.jpg"},12185:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/connection_labelindex_1-b947dbfc65c542ca46c88cd371796733.jpg"},26156:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/connection_labelindex_2-62f934b9f3a0152740bf20fa7561bb01.jpg"},54273:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/connection_prioritizers_0-1b3c7812874fc86c2da5ca0af680d6bc.jpg"},17179:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/connection_setup-183be5ff2aa9c3f25f20c5b9f5574309.jpg"},4787:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/initial_setup-eeb6837667edb2f8f755d2f35f2f3482.jpg"}}]);