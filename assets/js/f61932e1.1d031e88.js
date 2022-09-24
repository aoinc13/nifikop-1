"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[5308],{5318:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),o=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=o(r),m=a,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||l;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=c;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var o=2;o<l;o++)i[o]=r[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1453:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>m,frontMatter:()=>p,metadata:()=>o,toc:()=>d});var n=r(5773),a=r(808),l=(r(7378),r(5318)),i=["components"],p={id:"6_nifi_usergroup",title:"NiFi UserGroup",sidebar_label:"NiFi UserGroup"},u=void 0,o={unversionedId:"5_references/6_nifi_usergroup",id:"version-v0.11.0/5_references/6_nifi_usergroup",title:"NiFi UserGroup",description:"NifiUserGroup is the Schema for the nifi user groups API.",source:"@site/versioned_docs/version-v0.11.0/5_references/6_nifi_usergroup.md",sourceDirName:"5_references",slug:"/5_references/6_nifi_usergroup",permalink:"/nifikop/docs/v0.11.0/5_references/6_nifi_usergroup",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.11.0/5_references/6_nifi_usergroup.md",tags:[],version:"v0.11.0",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1655925825,formattedLastUpdatedAt:"Jun 22, 2022",frontMatter:{id:"6_nifi_usergroup",title:"NiFi UserGroup",sidebar_label:"NiFi UserGroup"},sidebar:"version-v0.11.0/docs",previous:{title:"NiFi Dataflow",permalink:"/nifikop/docs/v0.11.0/5_references/5_nifi_dataflow"},next:{title:"Contribution organization",permalink:"/nifikop/docs/v0.11.0/6_contributing/0_contribution_organization"}},s={},d=[{value:"NifiUser",id:"nifiuser",level:2},{value:"NifiUserGroupSpec",id:"nifiusergroupspec",level:2},{value:"NifiUserGroupStatus",id:"nifiusergroupstatus",level:2},{value:"UserReference",id:"userreference",level:2}],c={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"NifiUserGroup")," is the Schema for the nifi user groups API."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: nifi.konpyutaika.com/v1alpha1\nkind: NifiUserGroup\nmetadata:\n  name: group-test\nspec:\n  clusterRef:\n    name: nc\n    namespace: nifikop\n  usersRef:\n    - name: nc-0-node.nc-headless.nifikop.svc.cluster.local\n    - name: nc-controller.nifikop.mgt.cluster.local\n  accessPolicies:\n    - type: global\n      action: read\n      resource: /counters\n")),(0,l.kt)("h2",{id:"nifiuser"},"NifiUser"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"metadata"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#ObjectMeta"},"ObjectMetadata")),(0,l.kt)("td",{parentName:"tr",align:null},"is metadata that all persisted resources must have, which includes all objects usergroups must create."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"nil")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spec"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#nifiusergroupspec"},"NifiUserGroupSpec")),(0,l.kt)("td",{parentName:"tr",align:null},"defines the desired state of NifiUserGroup."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"nil")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#nifiusergroupstatus"},"NifiUserGroupStatus")),(0,l.kt)("td",{parentName:"tr",align:null},"defines the observed state of NifiUserGroup."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"nil")))),(0,l.kt)("h2",{id:"nifiusergroupspec"},"NifiUserGroupSpec"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clusterRef"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/nifikop/docs/v0.11.0/5_references/2_nifi_user#clusterreference"},"ClusterReference")),(0,l.kt)("td",{parentName:"tr",align:null},"contains the reference to the NifiCluster with the one the user is linked."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"usersRef"),(0,l.kt)("td",{parentName:"tr",align:null},"["," ","]",(0,l.kt)("a",{parentName:"td",href:"#userref"},"UserReference")),(0,l.kt)("td",{parentName:"tr",align:null},"contains the list of reference to NifiUsers that are part to the group."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"[]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"accessPolicies"),(0,l.kt)("td",{parentName:"tr",align:null},"["," ","]",(0,l.kt)("a",{parentName:"td",href:"/nifikop/docs/v0.11.0/5_references/2_nifi_user#accesspolicy"},"AccessPolicy")),(0,l.kt)("td",{parentName:"tr",align:null},"defines the list of access policies that will be granted to the group."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"[]")))),(0,l.kt)("h2",{id:"nifiusergroupstatus"},"NifiUserGroupStatus"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"the nifi usergroup's node id."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"version"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"the last nifi usergroup's node revision version catched."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h2",{id:"userreference"},"UserReference"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"name of the NifiUser."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"namespace"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"the NifiUser namespace location."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))))}m.isMDXComponent=!0}}]);