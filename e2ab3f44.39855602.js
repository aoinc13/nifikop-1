(window.webpackJsonp=window.webpackJsonp||[]).push([[428],{494:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return o}));var a=n(2),r=n(6),l=(n(0),n(563)),i=["components"],b={id:"1_nifi_cluster",title:"NiFi cluster",sidebar_label:"NiFi cluster"},c={unversionedId:"5_references/1_nifi_cluster/1_nifi_cluster",id:"5_references/1_nifi_cluster/1_nifi_cluster",isDocsHomePage:!1,title:"NiFi cluster",description:"NifiCluster describes the desired state of the NiFi cluster we want to setup through the operator.",source:"@site/../docs/5_references/1_nifi_cluster/1_nifi_cluster.md",slug:"/5_references/1_nifi_cluster/1_nifi_cluster",permalink:"/nifikop/docs/next/5_references/1_nifi_cluster/1_nifi_cluster",editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/../docs/5_references/1_nifi_cluster/1_nifi_cluster.md",version:"current",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1655928289,sidebar_label:"NiFi cluster",sidebar:"docs",previous:{title:"Provisioning NiFi Users and Groups",permalink:"/nifikop/docs/next/3_tasks/4_nifi_user_group"},next:{title:"Read only configurations",permalink:"/nifikop/docs/next/5_references/1_nifi_cluster/2_read_only_config"}},p=[{value:"NifiCluster",id:"nificluster",children:[]},{value:"NifiClusterSpec",id:"nificlusterspec",children:[]},{value:"NifiClusterStatus",id:"nificlusterstatus",children:[]},{value:"ServicePolicy",id:"servicepolicy",children:[]},{value:"PodPolicy",id:"podpolicy",children:[]},{value:"ManagedUsers",id:"managedusers",children:[]},{value:"DisruptionBudget",id:"disruptionbudget",children:[]},{value:"LdapConfiguration",id:"ldapconfiguration",children:[]},{value:"NifiClusterTaskSpec",id:"nificlustertaskspec",children:[]},{value:"ClusterState",id:"clusterstate",children:[]}],d={rightToc:p};function o(e){var t=e.components,n=Object(r.a)(e,i);return Object(l.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"NifiCluster")," describes the desired state of the NiFi cluster we want to setup through the operator."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: nifi.konpyutaika.com/v1alpha1\nkind: NifiCluster\nmetadata:\n  name: simplenifi\nspec:\n  service:\n    headlessEnabled: true\n    annotations:\n      tyty: ytyt\n    labels:\n      tete: titi  \n  pod:\n    annotations:\n      toto: tata\n    labels:\n      titi: tutu\n  zkAddress: 'zookeepercluster-client.zookeeper:2181'\n  zkPath: '/simplenifi'\n  clusterImage: 'apache/nifi:1.11.3'\n  oneNifiNodePerNode: false\n  nodeConfigGroups:\n    default_group:\n      isNode: true\n      podMetadata:\n        annotations:\n          node-annotation: \"node-annotation-value\"\n        labels:\n          node-label: \"node-label-value\"\n      externalVolumeConfigs:\n        - name: example-volume\n          mountPath: \"/opt/nifi/example\"\n          secret:\n            secretName: \"raw-controller\"\n      storageConfigs:\n        - mountPath: '/opt/nifi/nifi-current/logs'\n          name: logs\n          pvcSpec:\n            accessModes:\n              - ReadWriteOnce\n            storageClassName: 'standard'\n            resources:\n              requests:\n                storage: 10Gi\n      serviceAccountName: 'default'\n      resourcesRequirements:\n        limits:\n          cpu: '2'\n          memory: 3Gi\n        requests:\n          cpu: '1'\n          memory: 1Gi\n  nodes:\n    - id: 1\n      nodeConfigGroup: 'default_group'\n    - id: 2\n      nodeConfigGroup: 'default_group'\n  propagateLabels: true\n  nifiClusterTaskSpec:\n    retryDurationMinutes: 10\n  listenersConfig:\n    internalListeners:\n      - type: 'http'\n        name: 'http'\n        containerPort: 8080\n      - type: 'cluster'\n        name: 'cluster'\n        containerPort: 6007\n      - type: 's2s'\n        name: 's2s'\n        containerPort: 10000\n  externalServices:\n    - name: 'clusterip'\n      spec:\n        type: ClusterIP\n        portConfigs:\n          - port: 8080\n            internalListenerName: 'http'\n      metadata:\n        annotations:\n          toto: tata\n        labels:\n          titi: tutu\n")),Object(l.b)("h2",{id:"nificluster"},"NifiCluster"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"metadata"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#ObjectMeta"},"ObjectMetadata")),Object(l.b)("td",{parentName:"tr",align:null},"is metadata that all persisted resources must have, which includes all objects users must create."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"nil")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"spec"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#nificlusterspec"},"NifiClusterSpec")),Object(l.b)("td",{parentName:"tr",align:null},"defines the desired state of NifiCluster."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"nil")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"status"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#nificlusterstatus"},"NifiClusterStatus")),Object(l.b)("td",{parentName:"tr",align:null},"defines the observed state of NifiCluster."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"nil")))),Object(l.b)("h2",{id:"nificlusterspec"},"NifiClusterSpec"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"clientType"),Object(l.b)("td",{parentName:"tr",align:null},'Enum={"tls","basic"}'),Object(l.b)("td",{parentName:"tr",align:null},"defines if the operator will use basic or tls authentication to query the NiFi cluster."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"tls"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"type"),Object(l.b)("td",{parentName:"tr",align:null},'Enum={"external","internal"}'),Object(l.b)("td",{parentName:"tr",align:null},"defines if the cluster is internal (i.e manager by the operator) or external."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"internal"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"nodeURITemplate"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"used to dynamically compute node uri."),Object(l.b)("td",{parentName:"tr",align:null},"if external type"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"nifiURI"),Object(l.b)("td",{parentName:"tr",align:null},"stringused access through a LB uri."),Object(l.b)("td",{parentName:"tr",align:null},"if external type"),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"rootProcessGroupId"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"contains the uuid of the root process group for this cluster."),Object(l.b)("td",{parentName:"tr",align:null},"if external type"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"secretRef"),Object(l.b)("td",{parentName:"tr",align:null},"["," ","]",Object(l.b)("a",{parentName:"td",href:"../4_nifi_parameter_context#secretreference"},"SecretReference")),Object(l.b)("td",{parentName:"tr",align:null},"reference the secret containing the informations required to authentiticate to the cluster."),Object(l.b)("td",{parentName:"tr",align:null},"if external type"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"proxyUrl"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"defines the proxy required to query the NiFi cluster."),Object(l.b)("td",{parentName:"tr",align:null},"if external type"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"service"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#servicepolicy"},"ServicePolicy")),Object(l.b)("td",{parentName:"tr",align:null},"defines the policy for services owned by NiFiKop operator."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"pod"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#podpolicy"},"PodPolicy")),Object(l.b)("td",{parentName:"tr",align:null},"defines the policy for pod owned by NiFiKop operator."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"zkAddress"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"specifies the ZooKeeper connection string in the form hostname:port where host and port are those of a Zookeeper server."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},'""')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"zkPath"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"specifies the Zookeeper chroot path as part of its Zookeeper connection string which puts its data under same path in the global ZooKeeper namespace."),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},'"/"')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"initContainerImage"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"can override the default image used into the init container to check if ZoooKeeper server is reachable.."),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},'"busybox"')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"initContainers"),Object(l.b)("td",{parentName:"tr",align:null},"["," ","]","string"),Object(l.b)("td",{parentName:"tr",align:null},"defines additional initContainers configurations."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"["," ","]")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"clusterImage"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"can specify the whole nificluster image in one place."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},'""')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"oneNifiNodePerNode"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"if set to true every nifi node is started on a new node, if there is not enough node to do that it will stay in pending state. If set to false the operator also tries to schedule the nifi node to a unique node but if the node number is insufficient the nifi node will be scheduled to a node where a nifi node is already running."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"nil")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"propagateLabels"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"false")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"managedAdminUsers"),Object(l.b)("td",{parentName:"tr",align:null},"["," ","]",Object(l.b)("a",{parentName:"td",href:"#managedusers"},"ManagedUser")),Object(l.b)("td",{parentName:"tr",align:null},"contains the list of users that will be added to the managed admin group (with all rights)."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"[]")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"managedReaderUsers"),Object(l.b)("td",{parentName:"tr",align:null},"["," ","]",Object(l.b)("a",{parentName:"td",href:"#managedusers"},"ManagedUser")),Object(l.b)("td",{parentName:"tr",align:null},"contains the list of users that will be added to the managed admin group (with all rights)."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"[]")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"readOnlyConfig"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/nifikop/docs/next/5_references/1_nifi_cluster/2_read_only_config"},"ReadOnlyConfig")),Object(l.b)("td",{parentName:"tr",align:null},"specifies the read-only type Nifi config cluster wide, all theses will be merged with node specified readOnly configurations, so it can be overwritten per node."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"nil")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"nodeUserIdentityTemplate"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"specifies the template to be used when naming the node user identity (e.g. node-%d-mysuffix)"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},'"node-%d-\\<cluster-name',">",'"')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"nodeConfigGroups"),Object(l.b)("td",{parentName:"tr",align:null},"map","[","string","]",Object(l.b)("a",{parentName:"td",href:"/nifikop/docs/next/5_references/1_nifi_cluster/3_node_config"},"NodeConfig")),Object(l.b)("td",{parentName:"tr",align:null},"specifies multiple node configs with unique name"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"nil")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"nodes"),Object(l.b)("td",{parentName:"tr",align:null},"["," ","]",Object(l.b)("a",{parentName:"td",href:"/nifikop/docs/next/5_references/1_nifi_cluster/3_node_config"},"Node")),Object(l.b)("td",{parentName:"tr",align:null},"specifies the list of cluster nodes, all node requires an image, unique id, and storageConfigs settings"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"nil")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"disruptionBudget"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#disruptionbudget"},"DisruptionBudget")),Object(l.b)("td",{parentName:"tr",align:null},"defines the configuration for PodDisruptionBudget."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"nil")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapConfiguration"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#ldapconfiguration"},"LdapConfiguration")),Object(l.b)("td",{parentName:"tr",align:null},"specifies the configuration if you want to use LDAP."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"nil")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"nifiClusterTaskSpec"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#nificlustertaskspec"},"NifiClusterTaskSpec")),Object(l.b)("td",{parentName:"tr",align:null},"specifies the configuration of the nifi cluster Tasks."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"nil")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"listenersConfig"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/nifikop/docs/next/5_references/1_nifi_cluster/6_listeners_config"},"ListenersConfig")),Object(l.b)("td",{parentName:"tr",align:null},"specifies nifi's listener specifig configs."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"sidecarConfigs"),Object(l.b)("td",{parentName:"tr",align:null},"["," ","]",Object(l.b)("a",{parentName:"td",href:"https://godoc.org/k8s.io/api/core/v1#Container"},"Container")),Object(l.b)("td",{parentName:"tr",align:null},"Defines additional sidecar configurations. ","[Check documentation for more informations]"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"externalServices"),Object(l.b)("td",{parentName:"tr",align:null},"["," ","]",Object(l.b)("a",{parentName:"td",href:"/nifikop/docs/next/5_references/1_nifi_cluster/7_external_service_config"},"ExternalServiceConfigs")),Object(l.b)("td",{parentName:"tr",align:null},"specifies settings required to access nifi externally."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"topologySpreadConstraints"),Object(l.b)("td",{parentName:"tr",align:null},"["," ","]",Object(l.b)("a",{parentName:"td",href:"https://godoc.org/k8s.io/api/core/v1#TopologySpreadConstraint"},"TopologySpreadConstraint")),Object(l.b)("td",{parentName:"tr",align:null},"specifies any TopologySpreadConstraint objects to be applied to all nodes."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"nil")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"nifiControllerTemplate"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"NifiControllerTemplate specifies the template to be used when naming the node controller (e.g. %s-mysuffix) ",Object(l.b)("strong",{parentName:"td"},"Warning: once defined don't change this value either the operator will no longer be able to manage the cluster")),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},'"%s-controller"')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"controllerUserIdentity"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"ControllerUserIdentity specifies what to call the static admin user's identity ",Object(l.b)("strong",{parentName:"td"},"Warning: once defined don't change this value either the operator will no longer be able to manage the cluster")),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"false")))),Object(l.b)("h2",{id:"nificlusterstatus"},"NifiClusterStatus"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"nodesState"),Object(l.b)("td",{parentName:"tr",align:null},"map","[","string","]",Object(l.b)("a",{parentName:"td",href:"/nifikop/docs/next/5_references/1_nifi_cluster/5_node_state"},"NodeState")),Object(l.b)("td",{parentName:"tr",align:null},"Store the state of each nifi node."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"State"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#clusterstate"},"ClusterState")),Object(l.b)("td",{parentName:"tr",align:null},"Store the state of each nifi node."),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"rootProcessGroupId"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"contains the uuid of the root process group for this cluster."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"-")))),Object(l.b)("h2",{id:"servicepolicy"},"ServicePolicy"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"headlessEnabled"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"specifies if the cluster should use headlessService for Nifi or individual services using service per nodes may come an handy case of service mesh."),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"false")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"serviceTemplate"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"specifies the template to be used when naming the service."),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},'If headlessEnabled = true ? "%s-headless" = "%s-all-node"')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"annotations"),Object(l.b)("td",{parentName:"tr",align:null},"map","[","string","]","string"),Object(l.b)("td",{parentName:"tr",align:null},"Annotations specifies the annotations to attach to services the NiFiKop operator creates"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"labels"),Object(l.b)("td",{parentName:"tr",align:null},"map","[","string","]","string"),Object(l.b)("td",{parentName:"tr",align:null},"Labels specifies the labels to attach to services the NiFiKop operator creates"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"-")))),Object(l.b)("h2",{id:"podpolicy"},"PodPolicy"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"annotations"),Object(l.b)("td",{parentName:"tr",align:null},"map","[","string","]","string"),Object(l.b)("td",{parentName:"tr",align:null},"Annotations specifies the annotations to attach to pods the NiFiKop operator creates"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"labels"),Object(l.b)("td",{parentName:"tr",align:null},"map","[","string","]","string"),Object(l.b)("td",{parentName:"tr",align:null},"Labels specifies the Labels to attach to pods the NiFiKop operator creates"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"-")))),Object(l.b)("h2",{id:"managedusers"},"ManagedUsers"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"identity"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"identity field is use to define the user identity on NiFi cluster side, it use full when the user's name doesn't suite with Kubernetes resource name."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"name"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"name field is use to name the NifiUser resource, if not identity is provided it will be used to name the user on NiFi cluster side."),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"-")))),Object(l.b)("h2",{id:"disruptionbudget"},"DisruptionBudget"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"create"),Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},"if set to true, will create a podDisruptionBudget."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"budget"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"the budget to set for the PDB, can either be static number or a percentage."),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"-")))),Object(l.b)("h2",{id:"ldapconfiguration"},"LdapConfiguration"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"enabled"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"if set to true, we will enable ldap usage into nifi.properties configuration."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"false")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"url"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"space-separated list of URLs of the LDAP servers (i.e. ldap://${hostname}:${port})."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},'""')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"searchBase"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"base DN for searching for users (i.e. CN=Users,DC=example,DC=com)."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},'""')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"searchFilter"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Filter for searching for users against the 'User Search Base'. (i.e. sAMAccountName={0}). The user specified name is inserted into '{0}'."),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},'""')))),Object(l.b)("h2",{id:"nificlustertaskspec"},"NifiClusterTaskSpec"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"retryDurationMinutes"),Object(l.b)("td",{parentName:"tr",align:null},"int"),Object(l.b)("td",{parentName:"tr",align:null},"describes the amount of time the Operator waits for the task."),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"5")))),Object(l.b)("h2",{id:"clusterstate"},"ClusterState"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Value"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"NifiClusterInitializing"),Object(l.b)("td",{parentName:"tr",align:null},"ClusterInitializing"),Object(l.b)("td",{parentName:"tr",align:null},"states that the cluster is still in initializing stage")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"NifiClusterInitialized"),Object(l.b)("td",{parentName:"tr",align:null},"ClusterInitialized"),Object(l.b)("td",{parentName:"tr",align:null},"states that the cluster is initialized")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"NifiClusterReconciling"),Object(l.b)("td",{parentName:"tr",align:null},"ClusterReconciling"),Object(l.b)("td",{parentName:"tr",align:null},"states that the cluster is still in reconciling stage")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"NifiClusterRollingUpgrading"),Object(l.b)("td",{parentName:"tr",align:null},"ClusterRollingUpgrading"),Object(l.b)("td",{parentName:"tr",align:null},"states that the cluster is rolling upgrading")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"NifiClusterRunning"),Object(l.b)("td",{parentName:"tr",align:null},"ClusterRunning"),Object(l.b)("td",{parentName:"tr",align:null},"states that the cluster is in running state")))))}o.isMDXComponent=!0},563:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),d=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},o=function(e){var t=d(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),o=d(n),s=a,m=o["".concat(i,".").concat(s)]||o[s]||u[s]||l;return n?r.a.createElement(m,b(b({ref:t},p),{},{components:n})):r.a.createElement(m,b({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var p=2;p<l;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);