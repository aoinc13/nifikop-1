(window.webpackJsonp=window.webpackJsonp||[]).push([[303],{367:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),c=(n(0),n(455)),i={id:"3_node_config",title:"Node configuration",sidebar_label:"Node configuration"},o={unversionedId:"5_references/1_nifi_cluster/3_node_config",id:"version-v0.8.0/5_references/1_nifi_cluster/3_node_config",isDocsHomePage:!1,title:"Node configuration",description:"NodeConfig defines the node configuration",source:"@site/versioned_docs/version-v0.8.0/5_references/1_nifi_cluster/3_node_config.md",slug:"/5_references/1_nifi_cluster/3_node_config",permalink:"/nifikop/docs/5_references/1_nifi_cluster/3_node_config",editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.8.0/5_references/1_nifi_cluster/3_node_config.md",version:"v0.8.0",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1646600121,sidebar_label:"Node configuration",sidebar:"version-v0.8.0/docs",previous:{title:"Read only configurations",permalink:"/nifikop/docs/5_references/1_nifi_cluster/2_read_only_config"},next:{title:"Node",permalink:"/nifikop/docs/5_references/1_nifi_cluster/4_node"}},l=[{value:"NodeConfig",id:"nodeconfig",children:[]},{value:"StorageConfig",id:"storageconfig",children:[]}],b={rightToc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"NodeConfig defines the node configuration"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'   default_group:\n      # provenanceStorage allow to specify the maximum amount of data provenance information to store at a time\n      # https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#write-ahead-provenance-repository-properties\n      provenanceStorage: "10 GB"\n      #RunAsUser define the id of the user to run in the Nifi image\n      # +kubebuilder:validation:Minimum=1\n      runAsUser: 1000\n      # Set this to true if the instance is a node in a cluster.\n      # https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#basic-cluster-setup\n      isNode: true\n      # Docker image used by the operator to create the node associated\n      # https://hub.docker.com/r/apache/nifi/\n#      image: "apache/nifi:1.11.2"\n      # nodeAffinity can be specified, operator populates this value if new pvc added later to node\n      # https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#node-affinity\n#      nodeAffinity:\n      # imagePullPolicy define the pull policy for NiFi cluster docker image\n      imagePullPolicy: IfNotPresent\n      # storageConfigs specifies the node related configs\n      storageConfigs:\n        # Name of the storage config, used to name PV to reuse into sidecars for example.\n        - name: provenance-repository\n          # Path where the volume will be mount into the main nifi container inside the pod.\n          mountPath: "/opt/nifi/provenance_repository"\n          # Kubernetes PVC spec\n          # https://kubernetes.io/docs/tasks/configure-pod-container/configure-persistent-volume-storage/#create-a-persistentvolumeclaim\n          pvcSpec:\n            accessModes:\n              - ReadWriteOnce\n            storageClassName: "standard"\n            resources:\n              requests:\n                storage: 10Gi\n        - mountPath: "/opt/nifi/nifi-current/logs"\n          name: logs\n          pvcSpec:\n            accessModes:\n              - ReadWriteOnce\n            storageClassName: "standard"\n            resources:\n              requests:\n                storage: 10Gi\n')),Object(c.b)("h2",{id:"nodeconfig"},"NodeConfig"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Field"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"provenanceStorage"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"provenanceStorage allow to specify the maximum amount of data provenance information to store at a time: ",Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#write-ahead-provenance-repository-properties"}),"write-ahead-provenance-repository-properties")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'"8 GB"')),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"runAsUser"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"int64"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"define the id of the user to run in the Nifi image"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1000")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"fsGroup"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"int64"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"define the id of the group for each volumes in Nifi image"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1000")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"isNode"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Set this to true if the instance is a node in a cluster: ",Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#basic-cluster-setup"}),"basic-cluster-setup")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"image"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Docker image used by the operator to create the node associated. ",Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"https://hub.docker.com/r/apache/nifi/"}),"Nifi docker registry")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'""')),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"imagePullPolicy"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"https://godoc.org/k8s.io/api/core/v1#PullPolicy"}),"PullPolicy")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"define the pull policy for NiFi cluster docker image.)"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'""')),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"nodeAffinity"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"operator populates this value if new pvc added later to node ",Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#node-affinity"}),"node-affinity")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"nil")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"storageConfigs"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"[","  ","]",Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"#storageconfig"}),"StorageConfig")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"specifies the node related configs."),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"nil")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"serviceAccountName"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"specifies the serviceAccount used for this specific node."),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'"default"')),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"resourcesRequirements"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"https://godoc.org/k8s.io/api/core/v1#ResourceRequirements"}),"ResourceRequirements")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"works exactly like Container resources, the user can specify the limit and the requests through this property ",Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/"}),"manage-compute-resources-container"),"."),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"nil")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"imagePullSecrets"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"[","  ","]",Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"https://godoc.org/k8s.io/api/core/v1#TypedLocalObjectReference"}),"LocalObjectReference")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"specifies the secret to use when using private registry."),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"nil")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"nodeSelector"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"map","[","string","]","string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"nodeSelector can be specified, which set the pod to fit on a node ",Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#nodeselector"}),"nodeselector")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"nil")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"tolerations"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"[","  ","]",Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"https://godoc.org/k8s.io/api/core/v1#Toleration"}),"Toleration")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"tolerations can be specified, which set the pod's tolerations ",Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/#concepts"}),"taint-and-toleration"),"."),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"nil")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"nodeAnnotations"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"map","[","string","]","string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Additionnal annotation to attach to the pod associated ",Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/#syntax-and-character-set"}),"annotations"),"."),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"nil")))),Object(c.b)("h2",{id:"storageconfig"},"StorageConfig"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Field"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"name"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Name of the storage config, used to name PV to reuse into sidecars for example."),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"mountPath"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Path where the volume will be mount into the main nifi container inside the pod."),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"pvcSpec"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"https://godoc.org/k8s.io/api/core/v1#PersistentVolumeClaimSpec"}),"PersistentVolumeClaimSpec")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Kubernetes PVC spec. ",Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-persistent-volume-storage/#create-a-persistentvolumeclaim"}),"create-a-persistentvolumeclaim"),"."),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")))))}s.isMDXComponent=!0},455:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,O=p["".concat(i,".").concat(u)]||p[u]||d[u]||c;return n?r.a.createElement(O,o(o({ref:t},b),{},{components:n})):r.a.createElement(O,o({ref:t},b))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var b=2;b<c;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);