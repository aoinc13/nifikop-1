(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{265:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),i=(n(0),n(563)),l=["components"],o={id:"2_read_only_config",title:"Read only configurations",sidebar_label:"Read only configurations"},b={unversionedId:"5_references/1_nifi_cluster/2_read_only_config",id:"version-v0.7.0/5_references/1_nifi_cluster/2_read_only_config",isDocsHomePage:!1,title:"Read only configurations",description:"ReadOnlyConfig object specifies the read-only type Nifi config cluster wide, all theses will be merged with node specified readOnly configurations, so it can be overwritten per node.",source:"@site/versioned_docs/version-v0.7.0/5_references/1_nifi_cluster/2_read_only_config.md",slug:"/5_references/1_nifi_cluster/2_read_only_config",permalink:"/nifikop/docs/v0.7.0/5_references/1_nifi_cluster/2_read_only_config",editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.7.0/5_references/1_nifi_cluster/2_read_only_config.md",version:"v0.7.0",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1646600121,sidebar_label:"Read only configurations",sidebar:"version-v0.7.0/docs",previous:{title:"NiFi cluster",permalink:"/nifikop/docs/v0.7.0/5_references/1_nifi_cluster/1_nifi_cluster"},next:{title:"Node configuration",permalink:"/nifikop/docs/v0.7.0/5_references/1_nifi_cluster/3_node_config"}},c=[{value:"ReadOnlyConfig",id:"readonlyconfig",children:[]},{value:"NifiProperties",id:"nifiproperties",children:[]},{value:"ZookeeperProperties",id:"zookeeperproperties",children:[]},{value:"BootstrapProperties",id:"bootstrapproperties",children:[]},{value:"LogbackConfig",id:"logbackconfig",children:[]},{value:"BootstrapNotificationServicesConfig",id:"bootstrapnotificationservicesconfig",children:[]},{value:"ConfigmapReference",id:"configmapreference",children:[]},{value:"SecretConfigReference",id:"secretconfigreference",children:[]}],p={rightToc:c};function d(e){var t=e.components,n=Object(r.a)(e,l);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"ReadOnlyConfig object specifies the read-only type Nifi config cluster wide, all theses will be merged with node specified readOnly configurations, so it can be overwritten per node."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"readOnlyConfig:\n  # MaximumTimerDrivenThreadCount define the maximum number of threads for timer driven processors available to the system.\n  maximumTimerDrivenThreadCount: 30\n  # Logback configuration that will be applied to the node\n  logbackConfig:\n    # logback.xml configuration that will replace the one produced based on template\n    replaceConfigMap:\n      # The key of the value,in data content, that we want use.\n      data: logback.xml\n      # Name of the configmap that we want to refer.\n      name: raw\n      # Namespace where is located the secret that we want to refer.\n      namespace: nifikop\n    # logback.xml configuration that will replace the one produced based on template and overrideConfigMap\n    replaceSecretConfig:\n      # The key of the value,in data content, that we want use.\n      data: logback.xml\n      # Name of the configmap that we want to refer.\n      name: raw\n      # Namespace where is located the secret that we want to refer.\n      namespace: nifikop\n  # NifiProperties configuration that will be applied to the node.\n  nifiProperties:\n    # Additionnals nifi.properties configuration that will override the one produced based on template and\n    # configuration\n    overrideConfigMap:\n      # The key of the value,in data content, that we want use.\n      data: nifi.properties\n      # Name of the configmap that we want to refer.\n      name: raw\n      # Namespace where is located the secret that we want to refer.\n      namespace: nifikop.\n    # Additionnals nifi.properties configuration that will override the one produced based\n    #   on template, configurations, overrideConfigMap and overrideConfigs.\n    overrideSecretConfig:\n      # The key of the value,in data content, that we want use.\n      data: nifi.properties\n      # Name of the configmap that we want to refer.\n      name: raw\n      # Namespace where is located the secret that we want to refer.\n      namespace: nifikop\n    # Additionnals nifi.properties configuration that will override the one produced based\n    #   on template, configurations and overrideConfigMap\n    overrideConfigs: |\n      nifi.ui.banner.text=NiFiKop by Orange\n    # A comma separated list of allowed HTTP Host header values to consider when NiFi\n    # is running securely and will be receiving requests to a different host[:port] than it is bound to.\n    # https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#web-properties\n    #      webProxyHosts:\n    # Nifi security client auth\n    needClientAuth: false\n    # Indicates which of the configured authorizers in the authorizers.xml file to use\n    # https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#authorizer-configuration\n  #      authorizer:\n  # ZookeeperProperties configuration that will be applied to the node.\n  zookeeperProperties:\n    #      # Additionnals zookeeeper.properties configuration that will override the one produced based on template and\n    #      # configuration\n    #      overrideConfigMap:\n    #        # The key of the value,in data content, that we want use.\n    #        data: zookeeeper.properties\n    #        # Name of the configmap that we want to refer.\n    #        name: raw\n    #        # Namespace where is located the secret that we want to refer.\n    #        namespace: nifikop.\n    #      # Additionnals zookeeeper.properties configuration that will override the one produced based\n    #      #    on template, configurations, overrideConfigMap and overrideConfigs.\n    #      overrideSecretConfig:\n    #        # The key of the value,in data content, that we want use.\n    #        data: zookeeeper.properties\n    #        # Name of the configmap that we want to refer.\n    #        name: raw\n    #        # Namespace where is located the secret that we want to refer.\n    #        namespace: nifikop\n    # Additionnals zookeeper.properties configuration that will override the one produced based\n    # on template and configurations.\n    overrideConfigs: |\n      initLimit=15\n      autopurge.purgeInterval=24\n      syncLimit=5\n      tickTime=2000\n      dataDir=./state/zookeeper\n      autopurge.snapRetainCount=30\n  # BootstrapProperties configuration that will be applied to the node.\n  bootstrapProperties:\n    #      # Additionnals bootstrap.properties configuration that will override the one produced based on template and\n    #      # configuration\n    #      overrideConfigMap:\n    #        # The key of the value,in data content, that we want use.\n    #        data: bootstrap.properties\n    #        # Name of the configmap that we want to refer.\n    #        name: raw\n    #        # Namespace where is located the secret that we want to refer.\n    #        namespace: nifikop.\n    #      # Additionnals bootstrap.properties configuration that will override the one produced based\n    #      #    on template, configurations, overrideConfigMap and overrideConfigs.\n    #      overrideSecretConfig:\n    #        # The key of the value,in data content, that we want use.\n    #        data: bootstrap.properties\n    #        # Name of the configmap that we want to refer.\n    #        name: raw\n    #        # Namespace where is located the secret that we want to refer.\n    #        namespace: nifikop\n    # JVM memory settings\n    nifiJvmMemory: '512m'\n    # Additionnals bootstrap.properties configuration that will override the one produced based\n    # on template and configurations.\n    # https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#bootstrap_properties\n    overrideConfigs: |\n      # java.arg.4=-Djava.net.preferIPv4Stack=true\n")),Object(i.b)("h2",{id:"readonlyconfig"},"ReadOnlyConfig"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Field"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:null},"Required"),Object(i.b)("th",{parentName:"tr",align:null},"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"maximumTimerDrivenThreadCount"),Object(i.b)("td",{parentName:"tr",align:null},"int32"),Object(i.b)("td",{parentName:"tr",align:null},"define the maximum number of threads for timer driven processors available to the system."),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"nil")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"additionalSharedEnvs"),Object(i.b)("td",{parentName:"tr",align:null},"["," ","]",Object(i.b)("a",{parentName:"td",href:"https://pkg.go.dev/k8s.io/api/core/v1#EnvVar"},"corev1.EnvVar")),Object(i.b)("td",{parentName:"tr",align:null},"define a set of additional env variables that will shared between all init containers and ontainers in the pod.."),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"["," ","]")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"nifiProperties"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"#nifiproperties"},"NifiProperties")),Object(i.b)("td",{parentName:"tr",align:null},"nifi.properties configuration that will be applied to the node."),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"nil")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"zookeeperProperties"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"#zookeeperproperties"},"ZookeeperProperties")),Object(i.b)("td",{parentName:"tr",align:null},"zookeeper.properties configuration that will be applied to the node."),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"nil")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"bootstrapProperties"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"#bootstrapproperties"},"BootstrapProperties")),Object(i.b)("td",{parentName:"tr",align:null},"bootstrap.conf configuration that will be applied to the node."),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"nil")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"logbackConfig"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"#logbackconfig"},"LogbackConfig")),Object(i.b)("td",{parentName:"tr",align:null},"logback.xml configuration that will be applied to the node."),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"nil")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"bootstrapNotificationServicesConfig"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"#bootstrapnotificationservices"},"BootstrapNotificationServices")),Object(i.b)("td",{parentName:"tr",align:null},"bootstrap_notification_services.xml configuration that will be applied to the node."),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"nil")))),Object(i.b)("h2",{id:"nifiproperties"},"NifiProperties"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Field"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:null},"Required"),Object(i.b)("th",{parentName:"tr",align:null},"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"overrideConfigMap"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"#configmapreference"},"ConfigmapReference")),Object(i.b)("td",{parentName:"tr",align:null},"Additionnals nifi.properties configuration that will override the one produced based on template and configuration."),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"nil")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"overrideConfigs"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"Additionnals nifi.properties configuration that will override the one produced based on template, configurations and overrideConfigMap."),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},'""')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"overrideSecretConfig"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"#secretconfigreference"},"SecretConfigReference")),Object(i.b)("td",{parentName:"tr",align:null},"Additionnals nifi.properties configuration that will override the one produced based on template, configurations, overrideConfigMap and overrideConfigs."),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"nil")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"webProxyHosts"),Object(i.b)("td",{parentName:"tr",align:null},"["," ","]","string"),Object(i.b)("td",{parentName:"tr",align:null},"A list of allowed HTTP Host header values to consider when NiFi is running securely and will be receiving requests to a different host","[:port]"," than it is bound to. ",Object(i.b)("a",{parentName:"td",href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#web-properties"},"web-properties")),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},'""')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"needClientAuth"),Object(i.b)("td",{parentName:"tr",align:null},"boolean"),Object(i.b)("td",{parentName:"tr",align:null},"Nifi security client auth."),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"false")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"authorizer"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"Indicates which of the configured authorizers in the authorizers.xml file to use ",Object(i.b)("a",{parentName:"td",href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#authorizer-configuration"},"authorizer-configuration")),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},'"managed-authorizer"')))),Object(i.b)("h2",{id:"zookeeperproperties"},"ZookeeperProperties"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Field"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:null},"Required"),Object(i.b)("th",{parentName:"tr",align:null},"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"overrideConfigMap"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"#configmapreference"},"ConfigmapReference")),Object(i.b)("td",{parentName:"tr",align:null},"Additionnals zookeeper.properties configuration that will override the one produced based on template and configuration."),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"nil")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"overrideConfigs"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"Additionnals zookeeper.properties configuration that will override the one produced based on template, configurations and overrideConfigMap."),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},'""')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"overrideSecretConfig"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"#secretconfigreference"},"SecretConfigReference")),Object(i.b)("td",{parentName:"tr",align:null},"Additionnals zookeeper.properties configuration that will override the one produced based on template, configurations, overrideConfigMap and overrideConfigs."),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"nil")))),Object(i.b)("h2",{id:"bootstrapproperties"},"BootstrapProperties"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Field"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:null},"Required"),Object(i.b)("th",{parentName:"tr",align:null},"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"overrideConfigMap"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"#configmapreference"},"ConfigmapReference")),Object(i.b)("td",{parentName:"tr",align:null},"Additionnals bootstrap.properties configuration that will override the one produced based on template and configuration."),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"nil")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"overrideConfigs"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"Additionnals bootstrap.properties configuration that will override the one produced based on template, configurations and overrideConfigMap."),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},'""')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"overrideSecretConfig"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"#secretconfigreference"},"SecretConfigReference")),Object(i.b)("td",{parentName:"tr",align:null},"Additionnals bootstrap.properties configuration that will override the one produced based on template, configurations, overrideConfigMap and overrideConfigs."),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"nil")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"NifiJvmMemory"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"JVM memory settings."),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},'"512m"')))),Object(i.b)("h2",{id:"logbackconfig"},"LogbackConfig"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Field"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:null},"Required"),Object(i.b)("th",{parentName:"tr",align:null},"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"replaceConfigMap"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"#configmapreference"},"ConfigmapReference")),Object(i.b)("td",{parentName:"tr",align:null},"logback.xml configuration that will replace the one produced based on template."),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"nil")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"replaceSecretConfig"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"#secretconfigreference"},"SecretConfigReference")),Object(i.b)("td",{parentName:"tr",align:null},"logback.xml configuration that will replace the one produced based on template and overrideConfigMap."),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"nil")))),Object(i.b)("h2",{id:"bootstrapnotificationservicesconfig"},"BootstrapNotificationServicesConfig"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Field"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:null},"Required"),Object(i.b)("th",{parentName:"tr",align:null},"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"replaceConfigMap"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"#configmapreference"},"ConfigmapReference")),Object(i.b)("td",{parentName:"tr",align:null},"bootstrap_notifications_services.xml configuration that will replace the one produced based on template."),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"nil")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"replaceSecretConfig"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"#secretconfigreference"},"SecretConfigReference")),Object(i.b)("td",{parentName:"tr",align:null},"bootstrap_notifications_services.xml configuration that will replace the one produced based on template and overrideConfigMap."),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"nil")))),Object(i.b)("h2",{id:"configmapreference"},"ConfigmapReference"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Field"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:null},"Required"),Object(i.b)("th",{parentName:"tr",align:null},"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"name"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"Name of the configmap that we want to refer."),Object(i.b)("td",{parentName:"tr",align:null},"Yes"),Object(i.b)("td",{parentName:"tr",align:null},'""')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"namespace"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"Namespace where is located the configmap that we want to refer."),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},'""')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"data"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"The key of the value,in data content, that we want use."),Object(i.b)("td",{parentName:"tr",align:null},"Yes"),Object(i.b)("td",{parentName:"tr",align:null},'""')))),Object(i.b)("h2",{id:"secretconfigreference"},"SecretConfigReference"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Field"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:null},"Required"),Object(i.b)("th",{parentName:"tr",align:null},"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"name"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"Name of the secret that we want to refer."),Object(i.b)("td",{parentName:"tr",align:null},"Yes"),Object(i.b)("td",{parentName:"tr",align:null},'""')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"namespace"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"Namespace where is located the secret that we want to refer."),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},'""')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"data"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"The key of the value,in data content, that we want use."),Object(i.b)("td",{parentName:"tr",align:null},"Yes"),Object(i.b)("td",{parentName:"tr",align:null},'""')))))}d.isMDXComponent=!0},563:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return g}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.a.createElement(g,o(o({ref:t},c),{},{components:n})):r.a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);