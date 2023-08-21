"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[59317],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39798:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(27378),r=n(38944);const l="tabItem_wHwb";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},23930:(e,t,n)=>{n.d(t,{Z:()=>C});var a=n(25773),r=n(27378),l=n(38944),i=n(83457),o=n(35331),s=n(30654),u=n(70784),p=n(71819);function c(e){return function(e){var t,n;return null!=(t=null==(n=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:c(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,l=(0,o.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(l.location.search);t.set(i,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[i,l])]}function k(e){var t,n,a,l,i=e.defaultValue,o=e.queryString,s=void 0!==o&&o,u=e.groupId,c=m(e),k=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:c})})),h=k[0],b=k[1],g=f({queryString:s,groupId:u}),y=g[0],v=g[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,p.Nk)(t),a=n[0],l=n[1],[a,(0,r.useCallback)((function(e){t&&l.set(e)}),[t,l])]),C=N[0],w=N[1],_=function(){var e=null!=y?y:C;return d({value:e,tabValues:c})?e:null}();return(0,r.useLayoutEffect)((function(){_&&b(_)}),[_]),{selectedValue:h,selectValue:(0,r.useCallback)((function(e){if(!d({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);b(e),v(e),w(e)}),[v,w,c]),tabValues:c}}var h=n(76457);const b="tabList_J5MA",g="tabItem_l0OV";function y(e){var t=e.className,n=e.block,o=e.selectedValue,s=e.selectValue,u=e.tabValues,p=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==o&&(c(t),s(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var a,r=p.indexOf(e.currentTarget)+1;n=null!=(a=p[r])?a:p[0];break;case"ArrowLeft":var l,i=p.indexOf(e.currentTarget)-1;n=null!=(l=p[i])?l:p[p.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return p.push(e)},onKeyDown:d,onClick:m},i,{className:(0,l.Z)("tabs__item",g,null==i?void 0:i.className,{"tabs__item--active":o===t})}),null!=n?n:t)})))}function v(e){var t=e.lazy,n=e.children,a=e.selectedValue,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=l.find((function(e){return e.props.value===a}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function N(e){var t=k(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",b)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function C(e){var t=(0,h.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},17233:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>k,frontMatter:()=>u,metadata:()=>c,toc:()=>d});var a=n(25773),r=n(30808),l=(n(27378),n(35318)),i=n(23930),o=n(39798),s=["components"],u={id:"1_customizable_install_with_helm",title:"Customizable install with Helm",sidebar_label:"Customizable install with Helm"},p=void 0,c={unversionedId:"2_setup/3_install/1_customizable_install_with_helm",id:"version-v0.13.0/2_setup/3_install/1_customizable_install_with_helm",title:"Customizable install with Helm",description:"Prerequisites",source:"@site/versioned_docs/version-v0.13.0/2_setup/3_install/1_customizable_install_with_helm.md",sourceDirName:"2_setup/3_install",slug:"/2_setup/3_install/1_customizable_install_with_helm",permalink:"/nifikop/docs/v0.13.0/2_setup/3_install/1_customizable_install_with_helm",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.13.0/2_setup/3_install/1_customizable_install_with_helm.md",tags:[],version:"v0.13.0",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1660941078,formattedLastUpdatedAt:"Aug 19, 2022",frontMatter:{id:"1_customizable_install_with_helm",title:"Customizable install with Helm",sidebar_label:"Customizable install with Helm"},sidebar:"version-v0.13.0/docs",previous:{title:"K3D",permalink:"/nifikop/docs/v0.13.0/2_setup/2_platform_setup/2_k3d"},next:{title:"Cluster Scaling",permalink:"/nifikop/docs/v0.13.0/3_tasks/1_nifi_cluster/2_cluster_scaling"}},m={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Installing the Chart",id:"installing-the-chart",level:3},{value:"Listing deployed charts",id:"listing-deployed-charts",level:3},{value:"Get Status for the helm deployment",id:"get-status-for-the-helm-deployment",level:3},{value:"Uninstaling the Charts",id:"uninstaling-the-charts",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Install of the CRD",id:"install-of-the-crd",level:3}],f={toc:d};function k(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Perform any necessary ",(0,l.kt)("a",{parentName:"li",href:"/nifikop/docs/v0.13.0/2_setup/2_platform_setup/1_gke"},"plateform-specific setup")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/helm/helm#install"},"Install a Helm client")," with a version higher than 3")),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"This Helm chart install NiFiKop the Nifi Kubernetes operator to create/configure/manage NiFi\nclusters in a Kubernetes Namespace."),(0,l.kt)("p",null,"It will use Custom Ressources Definition CRDs:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nificlusters.nifi.konpyutaika.com"),","),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nifiusers.nifi.konpyutaika.com"),","),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nifiusergroups.nifi.konpyutaika.com"),","),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nifiregistryclients.nifi.konpyutaika.com"),","),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nifiparametercontexts.nifi.konpyutaika.com"),","),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nifidataflows.nifi.konpyutaika.com"),",")),(0,l.kt)("h3",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,"The following tables lists the configurable parameters of the NiFi Operator Helm chart and their default values.\n| Parameter                        | Description                                                                                                                                                                          | Default                                     |\n|----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------|\n| ",(0,l.kt)("inlineCode",{parentName:"p"},"image.repository"),"               | Image                                                                                                                                                                                | ",(0,l.kt)("inlineCode",{parentName:"p"},"ghcr.io/konpyutaika/docker-images/nifikop")," |\n| ",(0,l.kt)("inlineCode",{parentName:"p"},"image.tag"),"                      | Image tag                                                                                                                                                                            | ",(0,l.kt)("inlineCode",{parentName:"p"},"v0.13.0-release"),"                           |\n| ",(0,l.kt)("inlineCode",{parentName:"p"},"image.pullPolicy"),"               | Image pull policy                                                                                                                                                                    | ",(0,l.kt)("inlineCode",{parentName:"p"},"Always"),"                                    |\n| ",(0,l.kt)("inlineCode",{parentName:"p"},"image.imagePullSecrets.enabled")," | Enable tue use of secret for docker image                                                                                                                                            | ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"                                     |\n| ",(0,l.kt)("inlineCode",{parentName:"p"},"image.imagePullSecrets.name"),"    | Name of the secret to connect to docker registry                                                                                                                                     | -                                           |\n| ",(0,l.kt)("inlineCode",{parentName:"p"},"certManager.enabled"),"            | Enable cert-manager integration                                                                                                                                                      | ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"                                      |\n| ",(0,l.kt)("inlineCode",{parentName:"p"},"rbacEnable"),"                     | If true, create & use RBAC resources                                                                                                                                                 | ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"                                      |\n| ",(0,l.kt)("inlineCode",{parentName:"p"},"resources"),"                      | Pod resource requests & limits                                                                                                                                                       | ",(0,l.kt)("inlineCode",{parentName:"p"},"{}"),"                                        |\n| ",(0,l.kt)("inlineCode",{parentName:"p"},"metrics.enabled"),"                | deploy service for metrics                                                                                                                                                           | ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"                                     |\n| ",(0,l.kt)("inlineCode",{parentName:"p"},"metrics.port"),"                   | Set port for operator metrics                                                                                                                                                        | ",(0,l.kt)("inlineCode",{parentName:"p"},"8081"),"                                      |\n| ",(0,l.kt)("inlineCode",{parentName:"p"},"logLevel"),"                       | Log level to output                                                                                                                                                                  | ",(0,l.kt)("inlineCode",{parentName:"p"},"Info"),"                                      |\n| ",(0,l.kt)("inlineCode",{parentName:"p"},"logEncoding"),"                    | Log encoding to use. Either ",(0,l.kt)("inlineCode",{parentName:"p"},"json")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"console"),"                                                                                                                                      | ",(0,l.kt)("inlineCode",{parentName:"p"},"json"),"                                      |\n| ",(0,l.kt)("inlineCode",{parentName:"p"},"certManager.clusterScoped"),"      | If true setup cluster scoped resources                                                                                                                                               | ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"                                     |\n| ",(0,l.kt)("inlineCode",{parentName:"p"},"namespaces"),"                     | List of namespaces where Operator watches for custom resources. Make sure the operator ServiceAccount is granted ",(0,l.kt)("inlineCode",{parentName:"p"},"get")," permissions on this ",(0,l.kt)("inlineCode",{parentName:"p"},"Node")," resource when using limited RBACs. | ",(0,l.kt)("inlineCode",{parentName:"p"},'""')," i.e. all namespaces                    |\n| ",(0,l.kt)("inlineCode",{parentName:"p"},"nodeSelector"),"                   | Node selector configuration for operator pod                                                                                                                                         | ",(0,l.kt)("inlineCode",{parentName:"p"},"{}"),"                                        |\n| ",(0,l.kt)("inlineCode",{parentName:"p"},"affinity"),"                       | Node affinity configuration for operator pod                                                                                                                                         | ",(0,l.kt)("inlineCode",{parentName:"p"},"{}"),"                                        |\n| ",(0,l.kt)("inlineCode",{parentName:"p"},"tolerations"),"                    | Toleration configuration for operator pod                                                                                                                                            | ",(0,l.kt)("inlineCode",{parentName:"p"},"{}"),"                                        |\n| ",(0,l.kt)("inlineCode",{parentName:"p"},"serviceAccount.create"),"          | Whether the SA creation is delegated to the chart or not                                                                                                                             | ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"                                      |\n| ",(0,l.kt)("inlineCode",{parentName:"p"},"serviceAccount.name"),"            | Name of the SA used for NiFiKop deployment                                                                                                                                           | release name                                |"),(0,l.kt)("p",null,"Specify each parameter using the ",(0,l.kt)("inlineCode",{parentName:"p"},"--set key=value[,key=value]")," argument to ",(0,l.kt)("inlineCode",{parentName:"p"},"helm install"),". For example,"),(0,l.kt)("p",null,"Alternatively, a YAML file that specifies the values for the above parameters can be provided while installing the chart. For example,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"$ helm install nifikop \\\n      konpyutaika/nifikop \\\n      -f values.yaml\n")),(0,l.kt)("h3",{id:"installing-the-chart"},"Installing the Chart"),(0,l.kt)("admonition",{title:"Skip CRDs",type:"important"},(0,l.kt)("p",{parentName:"admonition"},"In the case where you don't want to deploy the crds using helm (",(0,l.kt)("inlineCode",{parentName:"p"},"--skip-crds"),") you need to deploy manually the crds beforehand:"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nificlusters.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiusers.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiusergroups.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifidataflows.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiparametercontexts.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiregistryclients.yaml\n"))),(0,l.kt)(i.Z,{defaultValue:"dryrun",values:[{label:"dry run",value:"dryrun"},{label:"release name",value:"rn"},{label:"set parameters",value:"set-params"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"dryrun",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'helm install nifikop konpyutaika/nifikop \\\n    --dry-run \\\n    --set logLevel=Debug \\\n    --set namespaces={"nifikop"}\n'))),(0,l.kt)(o.Z,{value:"rn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm install <release name> konpyutaika/nifikop\n"))),(0,l.kt)(o.Z,{value:"set-params",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'helm install nifikop konpyutaika/nifikop --set namespaces={"nifikop"}\n')))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"the ",(0,l.kt)("inlineCode",{parentName:"p"},"--replace")," flag allow you to reuses a charts release name")),(0,l.kt)("h3",{id:"listing-deployed-charts"},"Listing deployed charts"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm list\n")),(0,l.kt)("h3",{id:"get-status-for-the-helm-deployment"},"Get Status for the helm deployment"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm status nifikop\n")),(0,l.kt)("h2",{id:"uninstaling-the-charts"},"Uninstaling the Charts"),(0,l.kt)("p",null,"If you want to delete the operator from your Kubernetes cluster, the operator deployment\nshould be deleted."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm del nifikop\n")),(0,l.kt)("p",null,"The command removes all the Kubernetes components associated with the chart and deletes the helm release."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"The CRD created by the chart are not removed by default and should be manually cleaned up (if required)")),(0,l.kt)("p",null,"Manually delete the CRD:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete crd nificlusters.nifi.konpyutaika.com\nkubectl delete crd nifiusers.nifi.konpyutaika.com\nkubectl delete crd nifiusergroups.nifi.konpyutaika.com\nkubectl delete crd nifiregistryclients.nifi.konpyutaika.com\nkubectl delete crd nifiparametercontexts.nifi.konpyutaika.com\nkubectl delete crd nifidataflows.nifi.konpyutaika.com\n")),(0,l.kt)("admonition",{type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"If you delete the CRD then\nIt will delete ",(0,l.kt)("strong",{parentName:"p"},"ALL")," Clusters that has been created using this CRD!!!\nPlease never delete a CRD without very good care")),(0,l.kt)("p",null,"Helm always keeps records of what releases happened. Need to see the deleted releases ?"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm list --deleted\n")),(0,l.kt)("p",null,"Need to see all of the releases (deleted and currently deployed, as well as releases that\nfailed) ?"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm list --all\n")),(0,l.kt)("p",null,"Because Helm keeps records of deleted releases, a release name cannot be re-used. (If you really need to re-use a\nrelease name, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--replace")," flag, but it will simply re-use the existing release and replace its\nresources.)"),(0,l.kt)("p",null,"Note that because releases are preserved in this way, you can rollback a deleted resource, and have it re-activate."),(0,l.kt)("p",null,"To purge a release"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm delete --purge nifikop\n")),(0,l.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,l.kt)("h3",{id:"install-of-the-crd"},"Install of the CRD"),(0,l.kt)("p",null,"By default, the chart will install the CRDs, but this installation is global for the whole\ncluster, and you may want to not modify the already deployed CRDs."),(0,l.kt)("p",null,"In this case there is a parameter to say to not install the CRDs :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'$ helm install --name nifikop ./helm/nifikop --set namespaces={"nifikop"} --skip-crds\n')))}k.isMDXComponent=!0}}]);