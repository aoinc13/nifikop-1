"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[1440],{5318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7378);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=i,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},779:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=r(5773),i=r(808),a=(r(7378),r(5318)),o=["components"],s={id:"2_k3d",title:"K3D",sidebar_label:"K3D"},l=void 0,p={unversionedId:"2_setup/2_platform_setup/2_k3d",id:"version-v0.12.0/2_setup/2_platform_setup/2_k3d",title:"K3D",description:"Follow these instructions to prepare k3d for NiFiKop installation with sufficient resources to run NiFiKop and some basic applications.",source:"@site/versioned_docs/version-v0.12.0/2_setup/2_platform_setup/2_k3d.md",sourceDirName:"2_setup/2_platform_setup",slug:"/2_setup/2_platform_setup/2_k3d",permalink:"/nifikop/docs/v0.12.0/2_setup/2_platform_setup/2_k3d",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.12.0/2_setup/2_platform_setup/2_k3d.md",tags:[],version:"v0.12.0",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1660940064,formattedLastUpdatedAt:"Aug 19, 2022",frontMatter:{id:"2_k3d",title:"K3D",sidebar_label:"K3D"},sidebar:"version-v0.12.0/docs",previous:{title:"Google Kubernetes Engine",permalink:"/nifikop/docs/v0.12.0/2_setup/2_platform_setup/1_gke"},next:{title:"Customizable install with Helm",permalink:"/nifikop/docs/v0.12.0/2_setup/3_install/1_customizable_install_with_helm"}},u={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation steps",id:"installation-steps",level:2}],d={toc:c};function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Follow these instructions to prepare k3d for NiFiKop installation with sufficient resources to run NiFiKop and some basic applications."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Administrative privileges are required to run k3d.")),(0,a.kt)("h2",{id:"installation-steps"},"Installation steps"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install the latest version of ",(0,a.kt)("a",{parentName:"p",href:"https://k3d.io/v5.3.0/#installation"},"k3d"),", version 5.3.0 or later.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create your Kubernetes cluster. This example uses Kubernetes version 1.21.10. You can change the version to any Kubernetes version supported by NiFiKop by altering the --kubernetes-version value:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"k3d cluster create --image rancher/k3s:v1.21.10-k3s1 --wait\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Expose your NiFi cluster:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'k3d cluster edit k3s-default --port-add "<nifi_cluster_port>:<nifi_cluster_port>@loadbalancer"\n')))))}m.isMDXComponent=!0}}]);