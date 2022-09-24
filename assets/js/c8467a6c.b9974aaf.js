"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[2878],{5318:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>s});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),g=d(n),s=r,c=g["".concat(p,".").concat(s)]||g[s]||u[s]||i;return n?a.createElement(c,l(l({ref:t},m),{},{components:n})):a.createElement(c,l({ref:t},m))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9667:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var a=n(5773),r=n(808),i=(n(7378),n(5318)),l=["components"],o={id:"2_read_only_config",title:"Read only configurations",sidebar_label:"Read only configurations"},p=void 0,d={unversionedId:"5_references/1_nifi_cluster/2_read_only_config",id:"version-v0.12.0/5_references/1_nifi_cluster/2_read_only_config",title:"Read only configurations",description:"ReadOnlyConfig object specifies the read-only type Nifi config cluster wide, all theses will be merged with node specified readOnly configurations, so it can be overwritten per node.",source:"@site/versioned_docs/version-v0.12.0/5_references/1_nifi_cluster/2_read_only_config.md",sourceDirName:"5_references/1_nifi_cluster",slug:"/5_references/1_nifi_cluster/2_read_only_config",permalink:"/nifikop/docs/v0.12.0/5_references/1_nifi_cluster/2_read_only_config",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.12.0/5_references/1_nifi_cluster/2_read_only_config.md",tags:[],version:"v0.12.0",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1660940064,formattedLastUpdatedAt:"Aug 19, 2022",frontMatter:{id:"2_read_only_config",title:"Read only configurations",sidebar_label:"Read only configurations"},sidebar:"version-v0.12.0/docs",previous:{title:"NiFi cluster",permalink:"/nifikop/docs/v0.12.0/5_references/1_nifi_cluster/"},next:{title:"Node configuration",permalink:"/nifikop/docs/v0.12.0/5_references/1_nifi_cluster/3_node_config"}},m={},u=[{value:"ReadOnlyConfig",id:"readonlyconfig",level:2},{value:"NifiProperties",id:"nifiproperties",level:2},{value:"ZookeeperProperties",id:"zookeeperproperties",level:2},{value:"BootstrapProperties",id:"bootstrapproperties",level:2},{value:"LogbackConfig",id:"logbackconfig",level:2},{value:"AuthorizerConfig",id:"authorizerconfig",level:2},{value:"BootstrapNotificationServicesConfig",id:"bootstrapnotificationservicesconfig",level:2},{value:"ConfigmapReference",id:"configmapreference",level:2},{value:"SecretConfigReference",id:"secretconfigreference",level:2}],g={toc:u};function s(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ReadOnlyConfig object specifies the read-only type Nifi config cluster wide, all theses will be merged with node specified readOnly configurations, so it can be overwritten per node."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'readOnlyConfig:\n  # MaximumTimerDrivenThreadCount define the maximum number of threads for timer driven processors available to the system.\n  maximumTimerDrivenThreadCount: 30\n  # MaximumEventDrivenThreadCount define the maximum number of threads for event driven processors available to the system.\n  maximumEventDrivenThreadCount: 10\n  # Logback configuration that will be applied to the node\n  logbackConfig:\n    # logback.xml configuration that will replace the one produced based on template\n    replaceConfigMap:\n      # The key of the value,in data content, that we want use.\n      data: logback.xml\n      # Name of the configmap that we want to refer.\n      name: raw\n      # Namespace where is located the secret that we want to refer.\n      namespace: nifikop\n    # logback.xml configuration that will replace the one produced based on template and overrideConfigMap\n    replaceSecretConfig:\n      # The key of the value,in data content, that we want use.\n      data: logback.xml\n      # Name of the configmap that we want to refer.\n      name: raw\n      # Namespace where is located the secret that we want to refer.\n      namespace: nifikop\n  # Authorizer configuration that will be applied to the node\n  authorizerConfig:\n    # An authorizers.xml configuration template that will replace the default template seen in authorizers.go\n    replaceTemplateConfigMap:\n      # The key of the value, in data content, that we want use.\n      data: authorizers.xml\n      # Name of the configmap that we want to refer.\n      name: raw\n      # Namespace where is located the secret that we want to refer.\n      namespace: nifikop\n    # An authorizers.xml configuration template that will replace the default template seen in authorizers.go and the replaceTemplateConfigMap\n    replaceTemplateSecretConfig:\n      # The key of the value,in data content, that we want use.\n      data: authorizers.xml\n      # Name of the configmap that we want to refer.\n      name: raw\n      # Namespace where is located the secret that we want to refer.\n      namespace: nifikop\n  # NifiProperties configuration that will be applied to the node.\n  nifiProperties:\n    # Additionnals nifi.properties configuration that will override the one produced based on template and\n    # configuration\n    overrideConfigMap:\n      # The key of the value,in data content, that we want use.\n      data: nifi.properties\n      # Name of the configmap that we want to refer.\n      name: raw\n      # Namespace where is located the secret that we want to refer.\n      namespace: nifikop.\n    # Additionnals nifi.properties configuration that will override the one produced based\n    #   on template, configurations, overrideConfigMap and overrideConfigs.\n    overrideSecretConfig:\n      # The key of the value,in data content, that we want use.\n      data: nifi.properties\n      # Name of the configmap that we want to refer.\n      name: raw\n      # Namespace where is located the secret that we want to refer.\n      namespace: nifikop\n    # Additionnals nifi.properties configuration that will override the one produced based\n    #   on template, configurations and overrideConfigMap\n    overrideConfigs: |\n      nifi.ui.banner.text=NiFiKop\n    # A comma separated list of allowed HTTP Host header values to consider when NiFi\n    # is running securely and will be receiving requests to a different host[:port] than it is bound to.\n    # https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#web-properties\n    #      webProxyHosts:\n    # Nifi security client auth\n    needClientAuth: false\n    # Indicates which of the configured authorizers in the authorizers.xml file to use\n    # https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#authorizer-configuration\n  #      authorizer:\n  # ZookeeperProperties configuration that will be applied to the node.\n  zookeeperProperties:\n    #      # Additionnals zookeeeper.properties configuration that will override the one produced based on template and\n    #      # configuration\n    #      overrideConfigMap:\n    #        # The key of the value,in data content, that we want use.\n    #        data: zookeeeper.properties\n    #        # Name of the configmap that we want to refer.\n    #        name: raw\n    #        # Namespace where is located the secret that we want to refer.\n    #        namespace: nifikop.\n    #      # Additionnals zookeeeper.properties configuration that will override the one produced based\n    #      #    on template, configurations, overrideConfigMap and overrideConfigs.\n    #      overrideSecretConfig:\n    #        # The key of the value,in data content, that we want use.\n    #        data: zookeeeper.properties\n    #        # Name of the configmap that we want to refer.\n    #        name: raw\n    #        # Namespace where is located the secret that we want to refer.\n    #        namespace: nifikop\n    # Additionnals zookeeper.properties configuration that will override the one produced based\n    # on template and configurations.\n    overrideConfigs: |\n      initLimit=15\n      autopurge.purgeInterval=24\n      syncLimit=5\n      tickTime=2000\n      dataDir=./state/zookeeper\n      autopurge.snapRetainCount=30\n  # BootstrapProperties configuration that will be applied to the node.\n  bootstrapProperties:\n    #      # Additionnals bootstrap.properties configuration that will override the one produced based on template and\n    #      # configuration\n    #      overrideConfigMap:\n    #        # The key of the value,in data content, that we want use.\n    #        data: bootstrap.properties\n    #        # Name of the configmap that we want to refer.\n    #        name: raw\n    #        # Namespace where is located the secret that we want to refer.\n    #        namespace: nifikop.\n    #      # Additionnals bootstrap.properties configuration that will override the one produced based\n    #      #    on template, configurations, overrideConfigMap and overrideConfigs.\n    #      overrideSecretConfig:\n    #        # The key of the value,in data content, that we want use.\n    #        data: bootstrap.properties\n    #        # Name of the configmap that we want to refer.\n    #        name: raw\n    #        # Namespace where is located the secret that we want to refer.\n    #        namespace: nifikop\n    # JVM memory settings\n    nifiJvmMemory: "512m"\n    # Additionnals bootstrap.properties configuration that will override the one produced based\n    # on template and configurations.\n    # https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#bootstrap_properties\n    overrideConfigs: |\n      # java.arg.4=-Djava.net.preferIPv4Stack=true\n')),(0,i.kt)("h2",{id:"readonlyconfig"},"ReadOnlyConfig"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"maximumTimerDrivenThreadCount"),(0,i.kt)("td",{parentName:"tr",align:null},"int32"),(0,i.kt)("td",{parentName:"tr",align:null},"define the maximum number of threads for timer driven processors available to the system."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"10")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"maximumEventDrivenThreadCount"),(0,i.kt)("td",{parentName:"tr",align:null},"int32"),(0,i.kt)("td",{parentName:"tr",align:null},"define the maximum number of threads for event driven processors available to the system."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"additionalSharedEnvs"),(0,i.kt)("td",{parentName:"tr",align:null},"["," ","]",(0,i.kt)("a",{parentName:"td",href:"https://pkg.go.dev/k8s.io/api/core/v1#EnvVar"},"corev1.EnvVar")),(0,i.kt)("td",{parentName:"tr",align:null},"define a set of additional env variables that will shared between all init containers and ontainers in the pod.."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"["," ","]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"nifiProperties"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#nifiproperties"},"NifiProperties")),(0,i.kt)("td",{parentName:"tr",align:null},"nifi.properties configuration that will be applied to the node."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"nil")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"zookeeperProperties"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#zookeeperproperties"},"ZookeeperProperties")),(0,i.kt)("td",{parentName:"tr",align:null},"zookeeper.properties configuration that will be applied to the node."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"nil")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bootstrapProperties"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#bootstrapproperties"},"BootstrapProperties")),(0,i.kt)("td",{parentName:"tr",align:null},"bootstrap.conf configuration that will be applied to the node."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"nil")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"logbackConfig"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#logbackconfig"},"LogbackConfig")),(0,i.kt)("td",{parentName:"tr",align:null},"logback.xml configuration that will be applied to the node."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"nil")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"authorizerConfig"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#authorizerconfig"},"AuthorizerConfig")),(0,i.kt)("td",{parentName:"tr",align:null},"authorizers.xml configuration template that will be applied to the node."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"nil")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bootstrapNotificationServicesConfig"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#bootstrapnotificationservices"},"BootstrapNotificationServices")),(0,i.kt)("td",{parentName:"tr",align:null},"bootstrap_notification_services.xml configuration that will be applied to the node."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"nil")))),(0,i.kt)("h2",{id:"nifiproperties"},"NifiProperties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"overrideConfigMap"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#configmapreference"},"ConfigmapReference")),(0,i.kt)("td",{parentName:"tr",align:null},"Additionnals nifi.properties configuration that will override the one produced based on template and configuration."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"nil")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"overrideConfigs"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Additionnals nifi.properties configuration that will override the one produced based on template, configurations and overrideConfigMap."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},'""')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"overrideSecretConfig"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#secretconfigreference"},"SecretConfigReference")),(0,i.kt)("td",{parentName:"tr",align:null},"Additionnals nifi.properties configuration that will override the one produced based on template, configurations, overrideConfigMap and overrideConfigs."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"nil")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"webProxyHosts"),(0,i.kt)("td",{parentName:"tr",align:null},"["," ","]","string"),(0,i.kt)("td",{parentName:"tr",align:null},"A list of allowed HTTP Host header values to consider when NiFi is running securely and will be receiving requests to a different host","[:port]"," than it is bound to. ",(0,i.kt)("a",{parentName:"td",href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#web-properties"},"web-properties")),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},'""')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"needClientAuth"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Nifi security client auth."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"authorizer"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates which of the configured authorizers in the authorizers.xml file to use ",(0,i.kt)("a",{parentName:"td",href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#authorizer-configuration"},"authorizer-configuration")),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},'"managed-authorizer"')))),(0,i.kt)("h2",{id:"zookeeperproperties"},"ZookeeperProperties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"overrideConfigMap"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#configmapreference"},"ConfigmapReference")),(0,i.kt)("td",{parentName:"tr",align:null},"Additionnals zookeeper.properties configuration that will override the one produced based on template and configuration."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"nil")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"overrideConfigs"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Additionnals zookeeper.properties configuration that will override the one produced based on template, configurations and overrideConfigMap."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},'""')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"overrideSecretConfig"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#secretconfigreference"},"SecretConfigReference")),(0,i.kt)("td",{parentName:"tr",align:null},"Additionnals zookeeper.properties configuration that will override the one produced based on template, configurations, overrideConfigMap and overrideConfigs."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"nil")))),(0,i.kt)("h2",{id:"bootstrapproperties"},"BootstrapProperties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"overrideConfigMap"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#configmapreference"},"ConfigmapReference")),(0,i.kt)("td",{parentName:"tr",align:null},"Additionnals bootstrap.properties configuration that will override the one produced based on template and configuration."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"nil")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"overrideConfigs"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Additionnals bootstrap.properties configuration that will override the one produced based on template, configurations and overrideConfigMap."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},'""')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"overrideSecretConfig"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#secretconfigreference"},"SecretConfigReference")),(0,i.kt)("td",{parentName:"tr",align:null},"Additionnals bootstrap.properties configuration that will override the one produced based on template, configurations, overrideConfigMap and overrideConfigs."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"nil")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"NifiJvmMemory"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"JVM memory settings."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},'"512m"')))),(0,i.kt)("h2",{id:"logbackconfig"},"LogbackConfig"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"replaceConfigMap"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#configmapreference"},"ConfigmapReference")),(0,i.kt)("td",{parentName:"tr",align:null},"logback.xml configuration that will replace the one produced based on template."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"nil")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"replaceSecretConfig"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#secretconfigreference"},"SecretConfigReference")),(0,i.kt)("td",{parentName:"tr",align:null},"logback.xml configuration that will replace the one produced based on template and overrideConfigMap."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"nil")))),(0,i.kt)("h2",{id:"authorizerconfig"},"AuthorizerConfig"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"replaceTemplateConfigMap"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#configmapreference"},"ConfigmapReference")),(0,i.kt)("td",{parentName:"tr",align:null},"authorizers.xml configuration template that will replace the default template."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"nil")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"replaceTemplateSecretConfig"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#secretconfigreference"},"SecretConfigReference")),(0,i.kt)("td",{parentName:"tr",align:null},"authorizers.xml configuration that will replace the default template and the replaceTemplateConfigMap."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"nil")))),(0,i.kt)("h2",{id:"bootstrapnotificationservicesconfig"},"BootstrapNotificationServicesConfig"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"replaceConfigMap"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#configmapreference"},"ConfigmapReference")),(0,i.kt)("td",{parentName:"tr",align:null},"bootstrap_notifications_services.xml configuration that will replace the one produced based on template."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"nil")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"replaceSecretConfig"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#secretconfigreference"},"SecretConfigReference")),(0,i.kt)("td",{parentName:"tr",align:null},"bootstrap_notifications_services.xml configuration that will replace the one produced based on template and overrideConfigMap."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"nil")))),(0,i.kt)("h2",{id:"configmapreference"},"ConfigmapReference"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the configmap that we want to refer."),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},'""')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"namespace"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Namespace where is located the configmap that we want to refer."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},'""')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"data"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The key of the value,in data content, that we want use."),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},'""')))),(0,i.kt)("h2",{id:"secretconfigreference"},"SecretConfigReference"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the secret that we want to refer."),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},'""')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"namespace"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Namespace where is located the secret that we want to refer."),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},'""')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"data"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The key of the value,in data content, that we want use."),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},'""')))))}s.isMDXComponent=!0}}]);