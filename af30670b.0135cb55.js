(window.webpackJsonp=window.webpackJsonp||[]).push([[331],{397:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(6),a=(r(0),r(563)),i=["components"],c={id:"1_gke",title:"Google Kubernetes Engine",sidebar_label:"Google Kubernetes Engine"},s={unversionedId:"2_setup/2_platform_setup/1_gke",id:"version-v0.6.1/2_setup/2_platform_setup/1_gke",isDocsHomePage:!1,title:"Google Kubernetes Engine",description:"Follow these instructions to prepare a GKE cluster for NiFiKop",source:"@site/versioned_docs/version-v0.6.1/2_setup/2_platform_setup/1_gke.md",slug:"/2_setup/2_platform_setup/1_gke",permalink:"/nifikop/docs/v0.6.1/2_setup/2_platform_setup/1_gke",editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.6.1/2_setup/2_platform_setup/1_gke.md",version:"v0.6.1",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1621194888,sidebar_label:"Google Kubernetes Engine",sidebar:"version-v0.6.1/docs",previous:{title:"Getting Started",permalink:"/nifikop/docs/v0.6.1/2_setup/1_getting_started"},next:{title:"MiniKube",permalink:"/nifikop/docs/v0.6.1/2_setup/2_platform_setup/2_minikube"}},l=[],u={rightToc:l};function p(e){var t=e.components,r=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Follow these instructions to prepare a GKE cluster for NiFiKop"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Setup environment variables.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"export GCP_PROJECT=<project_id>\nexport GCP_ZONE=<zone>\nexport CLUSTER_NAME=<cluster-name>\n")),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Create a new cluster.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"gcloud container clusters create $CLUSTER_NAME \\\n  --cluster-version latest \\\n  --machine-type=n1-standard-1 \\\n  --num-nodes 4 \\\n  --zone $GCP_ZONE \\\n  --project $GCP_PROJECT\n")),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"Retrieve your credentials for ",Object(a.b)("inlineCode",{parentName:"li"},"kubectl"),".")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"cloud container clusters get-credentials $CLUSTER_NAME \\\n    --zone $GCP_ZONE \\\n    --project $GCP_PROJECT\n")),Object(a.b)("ol",{start:4},Object(a.b)("li",{parentName:"ol"},"Grant cluster administrator (admin) permissions to the current user. To create the necessary RBAC rules for NiFiKop, the current user requires admin permissions.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"kubectl create clusterrolebinding cluster-admin-binding \\\n    --clusterrole=cluster-admin \\\n    --user=$(gcloud config get-value core/account)\n")))}p.isMDXComponent=!0},563:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return r?o.a.createElement(m,c(c({ref:t},l),{},{components:r})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);