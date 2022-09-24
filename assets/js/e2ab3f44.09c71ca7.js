"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[1576],{5318:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>N});var a=n(7378);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),d=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=d(t.components);return a.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),m=d(n),N=r,g=m["".concat(o,".").concat(N)]||m[N]||u[N]||l;return n?a.createElement(g,i(i({ref:e},s),{},{components:n})):a.createElement(g,i({ref:e},s))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},699:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>N,frontMatter:()=>p,metadata:()=>d,toc:()=>u});var a=n(5773),r=n(808),l=(n(7378),n(5318)),i=["components"],p={id:"1_nifi_cluster",title:"NiFi cluster",sidebar_label:"NiFi cluster"},o=void 0,d={unversionedId:"5_references/1_nifi_cluster/1_nifi_cluster",id:"5_references/1_nifi_cluster/1_nifi_cluster",title:"NiFi cluster",description:"NifiCluster describes the desired state of the NiFi cluster we want to setup through the operator.",source:"@site/../docs/5_references/1_nifi_cluster/1_nifi_cluster.md",sourceDirName:"5_references/1_nifi_cluster",slug:"/5_references/1_nifi_cluster/",permalink:"/nifikop/docs/next/5_references/1_nifi_cluster/",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/../docs/5_references/1_nifi_cluster/1_nifi_cluster.md",tags:[],version:"current",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1664046775,formattedLastUpdatedAt:"Sep 24, 2022",frontMatter:{id:"1_nifi_cluster",title:"NiFi cluster",sidebar_label:"NiFi cluster"},sidebar:"docs",previous:{title:"Compatibility versions",permalink:"/nifikop/docs/next/4_compatibility_versions"},next:{title:"Read only configurations",permalink:"/nifikop/docs/next/5_references/1_nifi_cluster/2_read_only_config"}},s={},u=[{value:"NifiCluster",id:"nificluster",level:2},{value:"NifiClusterSpec",id:"nificlusterspec",level:2},{value:"NifiClusterStatus",id:"nificlusterstatus",level:2},{value:"ServicePolicy",id:"servicepolicy",level:2},{value:"PodPolicy",id:"podpolicy",level:2},{value:"ManagedUsers",id:"managedusers",level:2},{value:"DisruptionBudget",id:"disruptionbudget",level:2},{value:"LdapConfiguration",id:"ldapconfiguration",level:2},{value:"NifiClusterTaskSpec",id:"nificlustertaskspec",level:2},{value:"ClusterState",id:"clusterstate",level:2}],m={toc:u};function N(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"NifiCluster")," describes the desired state of the NiFi cluster we want to setup through the operator."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: nifi.konpyutaika.com/v1alpha1\nkind: NifiCluster\nmetadata:\n  name: simplenifi\nspec:\n  service:\n    headlessEnabled: true\n    annotations:\n      tyty: ytyt\n    labels:\n      tete: titi  \n  pod:\n    annotations:\n      toto: tata\n    labels:\n      titi: tutu\n  zkAddress: 'zookeepercluster-client.zookeeper:2181'\n  zkPath: '/simplenifi'\n  clusterImage: 'apache/nifi:1.11.3'\n  oneNifiNodePerNode: false\n  nodeConfigGroups:\n    default_group:\n      isNode: true\n      podMetadata:\n        annotations:\n          node-annotation: \"node-annotation-value\"\n        labels:\n          node-label: \"node-label-value\"\n      externalVolumeConfigs:\n        - name: example-volume\n          mountPath: \"/opt/nifi/example\"\n          secret:\n            secretName: \"raw-controller\"\n      storageConfigs:\n        - mountPath: '/opt/nifi/nifi-current/logs'\n          name: logs\n          pvcSpec:\n            accessModes:\n              - ReadWriteOnce\n            storageClassName: 'standard'\n            resources:\n              requests:\n                storage: 10Gi\n      serviceAccountName: 'default'\n      resourcesRequirements:\n        limits:\n          cpu: '2'\n          memory: 3Gi\n        requests:\n          cpu: '1'\n          memory: 1Gi\n  nodes:\n    - id: 1\n      nodeConfigGroup: 'default_group'\n    - id: 2\n      nodeConfigGroup: 'default_group'\n  propagateLabels: true\n  nifiClusterTaskSpec:\n    retryDurationMinutes: 10\n  listenersConfig:\n    internalListeners:\n      - type: 'http'\n        name: 'http'\n        containerPort: 8080\n      - type: 'cluster'\n        name: 'cluster'\n        containerPort: 6007\n      - type: 's2s'\n        name: 's2s'\n        containerPort: 10000\n  externalServices:\n    - name: 'clusterip'\n      spec:\n        type: ClusterIP\n        portConfigs:\n          - port: 8080\n            internalListenerName: 'http'\n      metadata:\n        annotations:\n          toto: tata\n        labels:\n          titi: tutu\n")),(0,l.kt)("h2",{id:"nificluster"},"NifiCluster"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"metadata"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#ObjectMeta"},"ObjectMetadata")),(0,l.kt)("td",{parentName:"tr",align:null},"is metadata that all persisted resources must have, which includes all objects users must create."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"nil")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spec"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#nificlusterspec"},"NifiClusterSpec")),(0,l.kt)("td",{parentName:"tr",align:null},"defines the desired state of NifiCluster."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"nil")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#nificlusterstatus"},"NifiClusterStatus")),(0,l.kt)("td",{parentName:"tr",align:null},"defines the observed state of NifiCluster."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"nil")))),(0,l.kt)("h2",{id:"nificlusterspec"},"NifiClusterSpec"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clientType"),(0,l.kt)("td",{parentName:"tr",align:null},'Enum={"tls","basic"}'),(0,l.kt)("td",{parentName:"tr",align:null},"defines if the operator will use basic or tls authentication to query the NiFi cluster."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tls"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},'Enum={"external","internal"}'),(0,l.kt)("td",{parentName:"tr",align:null},"defines if the cluster is internal (i.e manager by the operator) or external."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"internal"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nodeURITemplate"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"used to dynamically compute node uri."),(0,l.kt)("td",{parentName:"tr",align:null},"if external type"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nifiURI"),(0,l.kt)("td",{parentName:"tr",align:null},"stringused access through a LB uri."),(0,l.kt)("td",{parentName:"tr",align:null},"if external type"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rootProcessGroupId"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"contains the uuid of the root process group for this cluster."),(0,l.kt)("td",{parentName:"tr",align:null},"if external type"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"secretRef"),(0,l.kt)("td",{parentName:"tr",align:null},"["," ","]",(0,l.kt)("a",{parentName:"td",href:"../4_nifi_parameter_context#secretreference"},"SecretReference")),(0,l.kt)("td",{parentName:"tr",align:null},"reference the secret containing the informations required to authentiticate to the cluster."),(0,l.kt)("td",{parentName:"tr",align:null},"if external type"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"proxyUrl"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"defines the proxy required to query the NiFi cluster."),(0,l.kt)("td",{parentName:"tr",align:null},"if external type"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"service"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#servicepolicy"},"ServicePolicy")),(0,l.kt)("td",{parentName:"tr",align:null},"defines the policy for services owned by NiFiKop operator."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pod"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#podpolicy"},"PodPolicy")),(0,l.kt)("td",{parentName:"tr",align:null},"defines the policy for pod owned by NiFiKop operator."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"zkAddress"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"specifies the ZooKeeper connection string in the form hostname:port where host and port are those of a Zookeeper server."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},'""')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"zkPath"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"specifies the Zookeeper chroot path as part of its Zookeeper connection string which puts its data under same path in the global ZooKeeper namespace."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},'"/"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"initContainerImage"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"can override the default image used into the init container to check if ZoooKeeper server is reachable.."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},'"busybox"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"initContainers"),(0,l.kt)("td",{parentName:"tr",align:null},"["," ","]","string"),(0,l.kt)("td",{parentName:"tr",align:null},"defines additional initContainers configurations."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"["," ","]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clusterImage"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"can specify the whole nificluster image in one place."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},'""')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"oneNifiNodePerNode"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"if set to true every nifi node is started on a new node, if there is not enough node to do that it will stay in pending state. If set to false the operator also tries to schedule the nifi node to a unique node but if the node number is insufficient the nifi node will be scheduled to a node where a nifi node is already running."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"nil")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"propagateLabels"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"managedAdminUsers"),(0,l.kt)("td",{parentName:"tr",align:null},"["," ","]",(0,l.kt)("a",{parentName:"td",href:"#managedusers"},"ManagedUser")),(0,l.kt)("td",{parentName:"tr",align:null},"contains the list of users that will be added to the managed admin group (with all rights)."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"[]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"managedReaderUsers"),(0,l.kt)("td",{parentName:"tr",align:null},"["," ","]",(0,l.kt)("a",{parentName:"td",href:"#managedusers"},"ManagedUser")),(0,l.kt)("td",{parentName:"tr",align:null},"contains the list of users that will be added to the managed admin group (with all rights)."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"[]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"readOnlyConfig"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"./2_read_only_config"},"ReadOnlyConfig")),(0,l.kt)("td",{parentName:"tr",align:null},"specifies the read-only type Nifi config cluster wide, all theses will be merged with node specified readOnly configurations, so it can be overwritten per node."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"nil")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nodeUserIdentityTemplate"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"specifies the template to be used when naming the node user identity (e.g. node-%d-mysuffix)"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},'"node-%d-\\<cluster-name',">",'"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nodeConfigGroups"),(0,l.kt)("td",{parentName:"tr",align:null},"map","[","string","]",(0,l.kt)("a",{parentName:"td",href:"./3_node_config"},"NodeConfig")),(0,l.kt)("td",{parentName:"tr",align:null},"specifies multiple node configs with unique name"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"nil")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"["," ","]",(0,l.kt)("a",{parentName:"td",href:"./3_node_config"},"Node")),(0,l.kt)("td",{parentName:"tr",align:null},"specifies the list of cluster nodes, all node requires an image, unique id, and storageConfigs settings"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"nil")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disruptionBudget"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#disruptionbudget"},"DisruptionBudget")),(0,l.kt)("td",{parentName:"tr",align:null},"defines the configuration for PodDisruptionBudget."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"nil")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldapConfiguration"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#ldapconfiguration"},"LdapConfiguration")),(0,l.kt)("td",{parentName:"tr",align:null},"specifies the configuration if you want to use LDAP."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"nil")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nifiClusterTaskSpec"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#nificlustertaskspec"},"NifiClusterTaskSpec")),(0,l.kt)("td",{parentName:"tr",align:null},"specifies the configuration of the nifi cluster Tasks."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"nil")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"listenersConfig"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"./6_listeners_config"},"ListenersConfig")),(0,l.kt)("td",{parentName:"tr",align:null},"specifies nifi's listener specifig configs."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sidecarConfigs"),(0,l.kt)("td",{parentName:"tr",align:null},"["," ","]",(0,l.kt)("a",{parentName:"td",href:"https://godoc.org/k8s.io/api/core/v1#Container"},"Container")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines additional sidecar configurations. ","[Check documentation for more informations]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"externalServices"),(0,l.kt)("td",{parentName:"tr",align:null},"["," ","]",(0,l.kt)("a",{parentName:"td",href:"./7_external_service_config"},"ExternalServiceConfigs")),(0,l.kt)("td",{parentName:"tr",align:null},"specifies settings required to access nifi externally."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"topologySpreadConstraints"),(0,l.kt)("td",{parentName:"tr",align:null},"["," ","]",(0,l.kt)("a",{parentName:"td",href:"https://godoc.org/k8s.io/api/core/v1#TopologySpreadConstraint"},"TopologySpreadConstraint")),(0,l.kt)("td",{parentName:"tr",align:null},"specifies any TopologySpreadConstraint objects to be applied to all nodes."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"nil")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nifiControllerTemplate"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"NifiControllerTemplate specifies the template to be used when naming the node controller (e.g. %s-mysuffix) ",(0,l.kt)("strong",{parentName:"td"},"Warning: once defined don't change this value either the operator will no longer be able to manage the cluster")),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},'"%s-controller"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"controllerUserIdentity"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"ControllerUserIdentity specifies what to call the static admin user's identity ",(0,l.kt)("strong",{parentName:"td"},"Warning: once defined don't change this value either the operator will no longer be able to manage the cluster")),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("h2",{id:"nificlusterstatus"},"NifiClusterStatus"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nodesState"),(0,l.kt)("td",{parentName:"tr",align:null},"map","[","string","]",(0,l.kt)("a",{parentName:"td",href:"./5_node_state"},"NodeState")),(0,l.kt)("td",{parentName:"tr",align:null},"Store the state of each nifi node."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"State"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#clusterstate"},"ClusterState")),(0,l.kt)("td",{parentName:"tr",align:null},"Store the state of each nifi node."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rootProcessGroupId"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"contains the uuid of the root process group for this cluster."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h2",{id:"servicepolicy"},"ServicePolicy"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"headlessEnabled"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"specifies if the cluster should use headlessService for Nifi or individual services using service per nodes may come an handy case of service mesh."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"serviceTemplate"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"specifies the template to be used when naming the service."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},'If headlessEnabled = true ? "%s-headless" = "%s-all-node"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"annotations"),(0,l.kt)("td",{parentName:"tr",align:null},"map","[","string","]","string"),(0,l.kt)("td",{parentName:"tr",align:null},"Annotations specifies the annotations to attach to services the NiFiKop operator creates"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"labels"),(0,l.kt)("td",{parentName:"tr",align:null},"map","[","string","]","string"),(0,l.kt)("td",{parentName:"tr",align:null},"Labels specifies the labels to attach to services the NiFiKop operator creates"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h2",{id:"podpolicy"},"PodPolicy"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"annotations"),(0,l.kt)("td",{parentName:"tr",align:null},"map","[","string","]","string"),(0,l.kt)("td",{parentName:"tr",align:null},"Annotations specifies the annotations to attach to pods the NiFiKop operator creates"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"labels"),(0,l.kt)("td",{parentName:"tr",align:null},"map","[","string","]","string"),(0,l.kt)("td",{parentName:"tr",align:null},"Labels specifies the Labels to attach to pods the NiFiKop operator creates"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hostAliases"),(0,l.kt)("td",{parentName:"tr",align:null},"[","]",(0,l.kt)("a",{parentName:"td",href:"https://pkg.go.dev/k8s.io/api/core/v1#HostAlias"},"HostAlias")),(0,l.kt)("td",{parentName:"tr",align:null},"A list of host aliases to include in every pod's /etc/hosts configuration in the scenario where DNS is not available."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"[","]")))),(0,l.kt)("h2",{id:"managedusers"},"ManagedUsers"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"identity"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"identity field is use to define the user identity on NiFi cluster side, it use full when the user's name doesn't suite with Kubernetes resource name."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"name field is use to name the NifiUser resource, if not identity is provided it will be used to name the user on NiFi cluster side."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h2",{id:"disruptionbudget"},"DisruptionBudget"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"create"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"if set to true, will create a podDisruptionBudget."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"budget"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"the budget to set for the PDB, can either be static number or a percentage."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h2",{id:"ldapconfiguration"},"LdapConfiguration"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"if set to true, we will enable ldap usage into nifi.properties configuration."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"space-separated list of URLs of the LDAP servers (i.e. ldap://${hostname}:${port})."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},'""')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"searchBase"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"base DN for searching for users (i.e. CN=Users,DC=example,DC=com)."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},'""')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"searchFilter"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Filter for searching for users against the 'User Search Base'. (i.e. sAMAccountName={0}). The user specified name is inserted into '{0}'."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},'""')))),(0,l.kt)("h2",{id:"nificlustertaskspec"},"NifiClusterTaskSpec"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"retryDurationMinutes"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"describes the amount of time the Operator waits for the task."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"5")))),(0,l.kt)("h2",{id:"clusterstate"},"ClusterState"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NifiClusterInitializing"),(0,l.kt)("td",{parentName:"tr",align:null},"ClusterInitializing"),(0,l.kt)("td",{parentName:"tr",align:null},"states that the cluster is still in initializing stage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NifiClusterInitialized"),(0,l.kt)("td",{parentName:"tr",align:null},"ClusterInitialized"),(0,l.kt)("td",{parentName:"tr",align:null},"states that the cluster is initialized")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NifiClusterReconciling"),(0,l.kt)("td",{parentName:"tr",align:null},"ClusterReconciling"),(0,l.kt)("td",{parentName:"tr",align:null},"states that the cluster is still in reconciling stage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NifiClusterRollingUpgrading"),(0,l.kt)("td",{parentName:"tr",align:null},"ClusterRollingUpgrading"),(0,l.kt)("td",{parentName:"tr",align:null},"states that the cluster is rolling upgrading")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NifiClusterRunning"),(0,l.kt)("td",{parentName:"tr",align:null},"ClusterRunning"),(0,l.kt)("td",{parentName:"tr",align:null},"states that the cluster is in running state")))))}N.isMDXComponent=!0}}]);