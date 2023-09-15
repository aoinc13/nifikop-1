"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[60381],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},39798:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(27378),a=r(38944);const o="tabItem_wHwb";function l(e){var t=e.children,r=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},23930:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(25773),a=r(27378),o=r(38944),l=r(83457),s=r(35331),i=r(30654),u=r(70784),c=r(71819);function p(e){return function(e){var t,r;return null!=(t=null==(r=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,r=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(r);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId,o=(0,s.k6)(),l=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:n});return[(0,i._X)(l),(0,a.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function g(e){var t,r,n,o,l=e.defaultValue,s=e.queryString,i=void 0!==s&&s,u=e.groupId,p=d(e),g=(0,a.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:p})})),k=g[0],b=g[1],h=f({queryString:i,groupId:u}),v=h[0],y=h[1],_=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),r=(0,c.Nk)(t),n=r[0],o=r[1],[n,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),w=_[0],N=_[1],O=function(){var e=null!=v?v:w;return m({value:e,tabValues:p})?e:null}();return(0,a.useLayoutEffect)((function(){O&&b(O)}),[O]),{selectedValue:k,selectValue:(0,a.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),N(e)}),[y,N,p]),tabValues:p}}var k=r(76457);const b="tabList_J5MA",h="tabItem_l0OV";function v(e){var t=e.className,r=e.block,s=e.selectedValue,i=e.selectValue,u=e.tabValues,c=[],p=(0,l.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,r=c.indexOf(t),n=u[r].value;n!==s&&(p(t),i(n))},m=function(e){var t,r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var n,a=c.indexOf(e.currentTarget)+1;r=null!=(n=c[a])?n:c[0];break;case"ArrowLeft":var o,l=c.indexOf(e.currentTarget)-1;r=null!=(o=c[l])?o:c[c.length-1]}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((function(e){var t=e.value,r=e.label,l=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",h,null==l?void 0:l.className,{"tabs__item--active":s===t})}),null!=r?r:t)})))}function y(e){var t=e.lazy,r=e.children,n=e.selectedValue,o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){var l=o.find((function(e){return e.props.value===n}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function _(e){var t=g(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b)},a.createElement(v,(0,n.Z)({},e,t)),a.createElement(y,(0,n.Z)({},e,t)))}function w(e){var t=(0,k.Z)();return a.createElement(_,(0,n.Z)({key:String(t)},e))}},86431:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=r(25773),a=r(30808),o=(r(27378),r(35318)),l=(r(23930),r(39798),["components"]),s={id:"1_quick_start",title:"Quick start",sidebar_label:"Quick start"},i=void 0,u={unversionedId:"3_manage_nifi/1_manage_clusters/1_deploy_cluster/1_quick_start",id:"3_manage_nifi/1_manage_clusters/1_deploy_cluster/1_quick_start",title:"Quick start",description:"Create custom storage class",source:"@site/../docs/3_manage_nifi/1_manage_clusters/1_deploy_cluster/1_quick_start.md",sourceDirName:"3_manage_nifi/1_manage_clusters/1_deploy_cluster",slug:"/3_manage_nifi/1_manage_clusters/1_deploy_cluster/1_quick_start",permalink:"/nifikop/docs/next/3_manage_nifi/1_manage_clusters/1_deploy_cluster/1_quick_start",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/../docs/3_manage_nifi/1_manage_clusters/1_deploy_cluster/1_quick_start.md",tags:[],version:"current",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1694775175,formattedLastUpdatedAt:"Sep 15, 2023",frontMatter:{id:"1_quick_start",title:"Quick start",sidebar_label:"Quick start"},sidebar:"docs",previous:{title:"Design Principles",permalink:"/nifikop/docs/next/3_manage_nifi/1_manage_clusters/0_design_principles"},next:{title:"Nodes configuration",permalink:"/nifikop/docs/next/3_manage_nifi/1_manage_clusters/1_deploy_cluster/2_nodes_configuration"}},c={},p=[{value:"Create custom storage class",id:"create-custom-storage-class",level:2},{value:"Install Zookeeper",id:"install-zookeeper",level:2},{value:"Deploy NiFi cluster",id:"deploy-nifi-cluster",level:2},{value:"On OpenShift",id:"on-openshift",level:3},{value:"Install Zookeeper",id:"install-zookeeper-1",level:4},{value:"Deploy NiFi cluster",id:"deploy-nifi-cluster-1",level:4}],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"create-custom-storage-class"},"Create custom storage class"),(0,o.kt)("p",null,"We recommend to use a ",(0,o.kt)("strong",{parentName:"p"},"custom StorageClass")," to leverage the volume binding mode ",(0,o.kt)("inlineCode",{parentName:"p"},"WaitForFirstConsumer")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"apiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: exampleStorageclass\nparameters:\n  type: pd-standard\nprovisioner: kubernetes.io/gce-pd\nreclaimPolicy: Delete\nvolumeBindingMode: WaitForFirstConsumer\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Remember to set your NiFiCluster CR properly to use the newly created StorageClass.")),(0,o.kt)("p",null,"As a pre-requisite NiFi requires Zookeeper so you need to first have a Zookeeper cluster if you don't already have one."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We believe in the ",(0,o.kt)("inlineCode",{parentName:"p"},"separation of concerns")," principle, thus the NiFi operator does not install nor manage Zookeeper.")),(0,o.kt)("h2",{id:"install-zookeeper"},"Install Zookeeper"),(0,o.kt)("p",null,"To install Zookeeper we recommend using the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bitnami/charts/tree/master/bitnami/zookeeper"},"Bitnami's Zookeeper chart"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add bitnami https://charts.bitnami.com/bitnami\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm install zookeeper bitnami/zookeeper \\\n    --namespace=zookeeper \\\n    --set resources.requests.memory=256Mi \\\n    --set resources.requests.cpu=250m \\\n    --set resources.limits.memory=256Mi \\\n    --set resources.limits.cpu=250m \\\n    --set global.storageClass=standard \\\n    --set networkPolicy.enabled=true \\\n    --set replicaCount=3 \\\n    --create-namespace\n")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"storageClass")," parameter value with your own.")),(0,o.kt)("h2",{id:"deploy-nifi-cluster"},"Deploy NiFi cluster"),(0,o.kt)("p",null,"And after you can deploy a simple NiFi cluster."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Add your zookeeper svc name to the configuration\nkubectl create -n nifi -f config/samples/simplenificluster.yaml\n")),(0,o.kt)("h3",{id:"on-openshift"},"On OpenShift"),(0,o.kt)("h4",{id:"install-zookeeper-1"},"Install Zookeeper"),(0,o.kt)("p",null,"We need to get the uid/gid for the RunAsUser and the fsGroup for the namespace we deploy zookeeper in."),(0,o.kt)("p",null,"Get the zookeeper allowed uid/gid."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"zookeper_uid=$(kubectl get namespace zookeeper -o=jsonpath='{.metadata.annotations.openshift\\.io/sa\\.scc\\.supplemental-groups}' | sed 's/\\/10000$//' | tr -d '[:space:]')\n")),(0,o.kt)("p",null,"Specify the runAsUser and fsGroup Parameter on install of zookeeper."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm install zookeeper bitnami/zookeeper \\\n    --set resources.requests.memory=256Mi \\\n    --set resources.requests.cpu=250m \\\n    --set resources.limits.memory=256Mi \\\n    --set resources.limits.cpu=250m \\\n    --set global.storageClass=standard \\\n    --set networkPolicy.enabled=true \\\n    --set replicaCount=3 \\\n    --set containerSecurityContext.runAsUser=$zookeper_uid \\\n    --set podSecurityContext.fsGroup=$zookeper_uid\n")),(0,o.kt)("h4",{id:"deploy-nifi-cluster-1"},"Deploy NiFi cluster"),(0,o.kt)("p",null,"And after you can deploy a simple NiFi cluster."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Add your zookeeper svc name to the configuration\nkubectl create -n nifi -f config/samples/simplenificluster.yaml\n### On OpenShift\n\nWe need to get the uid/gid for the RunAsUser and the fsGroup for the namespace we deploy our nificluster in.\n\n```bash\nuid=$(kubectl get namespace nifi -o=jsonpath='{.metadata.annotations.openshift\\.io/sa\\.scc\\.supplemental-groups}' | sed 's/\\/10000$//' | tr -d '[:space:]')\n")),(0,o.kt)("p",null,"Then update the config/samples/openshift file with our uid value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'sed -i "s/1000690000/$uid/g" config/samples/openshift.yaml\n')),(0,o.kt)("p",null,"And after you can deploy a simple NiFi cluster."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create -n nifi -f config/samples/openshift.yaml\n")))}m.isMDXComponent=!0}}]);