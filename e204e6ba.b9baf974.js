(window.webpackJsonp=window.webpackJsonp||[]).push([[426],{492:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(6),o=(n(0),n(563)),r=["components"],s={id:"2_cluster_scaling",title:"Cluster Scaling",sidebar_label:"Cluster Scaling"},l={unversionedId:"3_tasks/1_nifi_cluster/2_cluster_scaling",id:"3_tasks/1_nifi_cluster/2_cluster_scaling",isDocsHomePage:!1,title:"Cluster Scaling",description:"This tasks shows you how to perform a gracefull cluster scale up and scale down.",source:"@site/../docs/3_tasks/1_nifi_cluster/2_cluster_scaling.md",slug:"/3_tasks/1_nifi_cluster/2_cluster_scaling",permalink:"/nifikop/docs/next/3_tasks/1_nifi_cluster/2_cluster_scaling",editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/../docs/3_tasks/1_nifi_cluster/2_cluster_scaling.md",version:"current",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1646502846,sidebar_label:"Cluster Scaling",sidebar:"docs",previous:{title:"Customizable install with Helm",permalink:"/nifikop/docs/next/2_setup/3_install/1_customizable_install_with_helm"},next:{title:"External cluster",permalink:"/nifikop/docs/next/3_tasks/1_nifi_cluster/4_external_cluster"}},c=[{value:"Before you begin",id:"before-you-begin",children:[]},{value:"About this task",id:"about-this-task",children:[]},{value:"Scale up : Add a new node",id:"scale-up--add-a-new-node",children:[]},{value:"Scaledown : Gracefully remove node",id:"scaledown--gracefully-remove-node",children:[]}],d={rightToc:c};function p(e){var t=e.components,s=Object(i.a)(e,r);return Object(o.b)("wrapper",Object(a.a)({},d,s,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This tasks shows you how to perform a gracefull cluster scale up and scale down."),Object(o.b)("h2",{id:"before-you-begin"},"Before you begin"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Setup NiFiKop by following the instructions in the ",Object(o.b)("a",{parentName:"li",href:"/nifikop/docs/next/2_setup/1_getting_started"},"Installation guide"),"."),Object(o.b)("li",{parentName:"ul"},"Deploy the ",Object(o.b)("a",{parentName:"li",href:"/nifikop/docs/next/2_setup/1_getting_started#easy-way-installing-with-helm"},"Simple NiFi")," sample cluster."),Object(o.b)("li",{parentName:"ul"},"Review the ",Object(o.b)("a",{parentName:"li",href:"/nifikop/docs/next/5_references/1_nifi_cluster/4_node"},"Node")," references doc. ")),Object(o.b)("h2",{id:"about-this-task"},"About this task"),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"/nifikop/docs/next/2_setup/1_getting_started#easy-way-installing-with-helm"},"Simple NiFi")," example consists of a three nodes NiFi cluster.\nA node decommission must follow a strict procedure, described in the ",Object(o.b)("a",{parentName:"p",href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#decommission-nodes"},"NiFi documentation")," : "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Disconnect the node"),Object(o.b)("li",{parentName:"ol"},"Once disconnect completes, offload the node."),Object(o.b)("li",{parentName:"ol"},"Once offload completes, delete the node."),Object(o.b)("li",{parentName:"ol"},"Once the delete request has finished, stop/remove the NiFi service on the host.")),Object(o.b)("p",null,"For the moment, we have implemented it as follows in the operator :"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Disconnect the node"),Object(o.b)("li",{parentName:"ol"},"Once disconnect completes, offload the node."),Object(o.b)("li",{parentName:"ol"},"Once offload completes, delete the pod."),Object(o.b)("li",{parentName:"ol"},"Once the pod deletion completes, delete the node."),Object(o.b)("li",{parentName:"ol"},"Once the delete request has finished, remove the node from the NifiCluster status.")),Object(o.b)("p",null,"In addition, we have a regular check that ensure that all nodes have been removed."),Object(o.b)("p",null,"In this task, you will first perform a scale up, in adding an new node. Then, you will remove another node that the one created, and observe the decommission's steps."),Object(o.b)("h2",{id:"scale-up--add-a-new-node"},"Scale up : Add a new node"),Object(o.b)("p",null,"For this task, we will simply add a node with the same configuration than the other ones, if you want to know more about how to add a node with an other configuration let's have a look to the ",Object(o.b)("a",{parentName:"p",href:"/nifikop/docs/next/3_tasks/1_nifi_cluster/1_nodes_configuration"},"Node configuration")," documentation page."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Add and run a dataflow as the example : ")),Object(o.b)("p",null,Object(o.b)("img",{alt:"Scaling dataflow",src:n(569).default})),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Add a new node to the list of ",Object(o.b)("inlineCode",{parentName:"li"},"NifiCluster.Spec.Nodes")," field, by following the ",Object(o.b)("a",{parentName:"li",href:"/nifikop/docs/next/5_references/1_nifi_cluster/4_node"},"Node object definition")," documentation:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: nifi.konpyutaika.com/v1alpha1\nkind: NifiCluster\nmetadata:\n  name: simplenifi\nspec:\n  service:\n    headlessEnabled: true\n  zkAddress: "zookeepercluster-client.zookeeper:2181"\n  zkPath: "/simplenifi"\n  clusterImage: "apache/nifi:1.12.1"\n  oneNifiNodePerNode: false\n  nodeConfigGroups:\n    default_group:\n      isNode: true\n      storageConfigs:\n        - mountPath: "/opt/nifi/nifi-current/logs"\n          name: logs\n          pvcSpec:\n            accessModes:\n              - ReadWriteOnce\n            storageClassName: "standard"\n            resources:\n              requests:\n                storage: 10Gi\n      serviceAccountName: "default"\n      resourcesRequirements:\n        limits:\n          cpu: "2"\n          memory: 3Gi\n        requests:\n          cpu: "1"\n          memory: 1Gi\n  nodes:\n    - id: 0\n      nodeConfigGroup: "default_group"\n    - id: 1\n      nodeConfigGroup: "default_group"\n    - id: 2\n      nodeConfigGroup: "default_group"\n# >>>> START: The new node\n    - id: 25\n      nodeConfigGroup: "default_group"\n# <<<< END\n  propagateLabels: true\n  nifiClusterTaskSpec:\n    retryDurationMinutes: 10\n  listenersConfig:\n    internalListeners:\n      - type: "http"\n        name: "http"\n        containerPort: 8080\n      - type: "cluster"\n        name: "cluster"\n        containerPort: 6007\n      - type: "s2s"\n        name: "s2s"\n        containerPort: 10000\n')),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},Object(o.b)("strong",{parentName:"p"},"Note :")," The ",Object(o.b)("inlineCode",{parentName:"p"},"Node.Id")," field must be unique in the ",Object(o.b)("inlineCode",{parentName:"p"},"NifiCluster.Spec.Nodes")," list."))),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Apply the new ",Object(o.b)("inlineCode",{parentName:"li"},"NifiCluster")," configuration : ")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"kubectl -n nifi apply -f config/samples/simplenificluster.yaml\n")),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"You should now have the following resources into kubernetes : ")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-console"},"kubectl get pods,configmap,pvc -l nodeId=25\nNAME                          READY   STATUS    RESTARTS   AGE\npod/simplenifi-25-nodem5jh4   1/1     Running   0          11m\n\nNAME                             DATA   AGE\nconfigmap/simplenifi-config-25   7      11m\n\nNAME                                               STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   AGE\npersistentvolumeclaim/simplenifi-25-storagehwn24   Bound    pvc-7da86076-728e-11ea-846d-42010a8400f2   10Gi       RWO            standard       11m\n")),Object(o.b)("p",null,"And if you go on the NiFi UI, in the cluster administration page : "),Object(o.b)("p",null,Object(o.b)("img",{alt:"Scale up, cluster list",src:n(570).default})),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"You now have data on the new node : ")),Object(o.b)("p",null,Object(o.b)("img",{alt:"Scale up, cluster distribution",src:n(571).default})),Object(o.b)("h2",{id:"scaledown--gracefully-remove-node"},"Scaledown : Gracefully remove node"),Object(o.b)("p",null,"For this task, we will simply remove a node and look at that the decommission's steps."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Remove the node from the list of ",Object(o.b)("inlineCode",{parentName:"li"},"NifiCluster.Spec.Nodes")," field :")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: nifi.konpyutaika.com/v1alpha1\nkind: NifiCluster\nmetadata:\n  name: simplenifi\nspec:\n  headlessServiceEnabled: true\n  zkAddresse: "zookeepercluster-client.zookeeper:2181"\n  zkPath: "/simplenifi"\n  clusterImage: "apache/nifi:1.11.3"\n  oneNifiNodePerNode: false\n  nodeConfigGroups:\n    default_group:\n      isNode: true\n      storageConfigs:\n        - mountPath: "/opt/nifi/nifi-current/logs"\n          name: logs\n          pvcSpec:\n            accessModes:\n              - ReadWriteOnce\n            storageClassName: "standard"\n            resources:\n              requests:\n                storage: 10Gi\n      serviceAccountName: "default"\n      resourcesRequirements:\n        limits:\n          cpu: "2"\n          memory: 3Gi\n        requests:\n          cpu: "1"\n          memory: 1Gi\n  nodes:\n    - id: 0\n      nodeConfigGroup: "default_group"\n    - id: 1\n      nodeConfigGroup: "default_group"\n# >>>> START: node removed\n#    - id: 2\n#      nodeConfigGroup: "default_group"\n# <<<< END\n    - id: 25\n      nodeConfigGroup: "default_group"\n  propagateLabels: true\n  nifiClusterTaskSpec:\n    retryDurationMinutes: 10\n  listenersConfig:\n    internalListeners:\n      - type: "http"\n        name: "http"\n        containerPort: 8080\n      - type: "cluster"\n        name: "cluster"\n        containerPort: 6007\n      - type: "s2s"\n        name: "s2s"\n        containerPort: 10000\n')),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Apply the new ",Object(o.b)("inlineCode",{parentName:"li"},"NifiCluster")," configuration : ")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"kubectl -n nifi apply -f config/samples/simplenificluster.yaml\n")),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"You can follow the node's action step status in the ",Object(o.b)("inlineCode",{parentName:"li"},"NifiCluster.Status")," description : ")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-console"},"kubectl describe nificluster simplenifi\n\n...\nStatus:\n  Nodes State:\n    ...\n    2:\n      Configuration State:  ConfigInSync\n      Graceful Action State:\n        Action State:   GracefulDownscaleRequired\n        Error Message:\n    ...\n...\n")),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The list of decommision's step and their corresponding value for the ",Object(o.b)("inlineCode",{parentName:"p"},"Nifi Cluster.Status.Node State.Graceful ActionState.ActionStep")," field is described into the ",Object(o.b)("a",{parentName:"p",href:"/nifikop/docs/next/5_references/1_nifi_cluster/5_node_state#actionstep"},"Node State page")))),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Once the scaledown successfully performed, you should have the data offloaded on the other nodes, and the node state removed from the ",Object(o.b)("inlineCode",{parentName:"li"},"NifiCluster.Status.NodesState")," list :")),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Keep in mind that the ",Object(o.b)("a",{parentName:"p",href:"/nifikop/docs/next/5_references/1_nifi_cluster/1_nifi_cluster#nificlustertaskspec"},Object(o.b)("inlineCode",{parentName:"a"},"NifiCluster.Spec.nifiClusterTaskSpec.retryDurationMinutes"))," should be long enough to perform the whole procedure, or you will have some rollback and retry loop."))))}p.isMDXComponent=!0},563:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),d=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),b=a,m=p["".concat(r,".").concat(b)]||p[b]||u[b]||o;return n?i.a.createElement(m,s(s({ref:t},c),{},{components:n})):i.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},569:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/scaling_dataflow-5966160565dedb1d2c691ae255bae15c.png"},570:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/scaleup_cluster_list-35ad91fb8c072c4235a969eb9acfcdae.png"},571:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/scaleup_distribution-e8a1d9e0e4ce70f4fe16965ebeee7a32.png"}}]);