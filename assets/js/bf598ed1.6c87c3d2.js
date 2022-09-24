"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[9937],{5318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var i=a(7378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),u=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return a?i.createElement(f,o(o({ref:t},c),{},{components:a})):i.createElement(f,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<r;u++)o[u]=a[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5370:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var i=a(5773),n=a(808),r=(a(7378),a(5318)),o=["components"],s={id:"3_features",title:"Features",sidebar_label:"Features"},l=void 0,u={unversionedId:"1_concepts/3_features",id:"version-v0.14.0/1_concepts/3_features",title:"Features",description:"To highligt some of the features we needed and were not possible with the operators available, please keep reading",source:"@site/versioned_docs/version-v0.14.0/1_concepts/3_features.md",sourceDirName:"1_concepts",slug:"/1_concepts/3_features",permalink:"/nifikop/docs/v0.14.0/1_concepts/3_features",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.14.0/1_concepts/3_features.md",tags:[],version:"v0.14.0",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1661532850,formattedLastUpdatedAt:"Aug 26, 2022",frontMatter:{id:"3_features",title:"Features",sidebar_label:"Features"},sidebar:"version-v0.14.0/docs",previous:{title:"Design Principes",permalink:"/nifikop/docs/v0.14.0/1_concepts/2_design_principes"},next:{title:"Roadmap",permalink:"/nifikop/docs/v0.14.0/1_concepts/4_roadmap"}},c={},p=[{value:"Fine Grained Node Config Support",id:"fine-grained-node-config-support",level:2},{value:"Graceful NiFi Cluster Scaling",id:"graceful-nifi-cluster-scaling",level:2},{value:"Graceful Rolling Upgrade",id:"graceful-rolling-upgrade",level:2},{value:"Dynamic Configuration Support",id:"dynamic-configuration-support",level:2},{value:"Dataflow lifecycle management via CRD",id:"dataflow-lifecycle-management-via-crd",level:2},{value:"Users and access policies management",id:"users-and-access-policies-management",level:2},{value:"Automatic horizontal NiFi cluster scaling via CRD",id:"automatic-horizontal-nifi-cluster-scaling-via-crd",level:2}],d={toc:p};function m(e){var t=e.components,a=(0,n.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To highligt some of the features we needed and were not possible with the operators available, please keep reading "),(0,r.kt)("h2",{id:"fine-grained-node-config-support"},"Fine Grained Node Config Support"),(0,r.kt)("p",null,"We needed to be able to react to events in a fine-grained way for each Node - and not in the limited way StatefulSet does (which, for example, removes the most recently created Nodes). Some of the available solutions try to overcome these deficits by placing scripts inside the container to generate configs at runtime (a good example is our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Orange-OpenSource/casskop"},"Cassandra Operator"),"), whereas the Orange NiFi operator's configurations are deterministically placed in specific Configmaps."),(0,r.kt)("h2",{id:"graceful-nifi-cluster-scaling"},"Graceful NiFi Cluster Scaling"),(0,r.kt)("p",null,"Apache NiFi is a good candidate to create an operator, because everything is made to orchestrate it through REST Api calls. With this comes automation of actions such as scaling, following all required steps : ",(0,r.kt)("a",{parentName:"p",href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#decommission-nodes"},"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#decommission-nodes"),"."),(0,r.kt)("h2",{id:"graceful-rolling-upgrade"},"Graceful Rolling Upgrade"),(0,r.kt)("p",null,"Operator supports graceful rolling upgrade. It means the operator will check if the cluster is healthy."),(0,r.kt)("h2",{id:"dynamic-configuration-support"},"Dynamic Configuration Support"),(0,r.kt)("p",null,"NiFi operates with two type of configs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Read-only"),(0,r.kt)("li",{parentName:"ul"},"PerNode")),(0,r.kt)("p",null,"Read only config requires node restart to update all the others may be updated dynamically.\nOperator CRD distinguishes these fields, and proceed with the right action. It can be a rolling upgrade, or\na dynamic reconfiguration."),(0,r.kt)("h2",{id:"dataflow-lifecycle-management-via-crd"},"Dataflow lifecycle management via CRD"),(0,r.kt)("p",null,"In a cloud native approach, we are looking for important management features, which we have applied to NiFi Dataflow : "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Automated deployment :")," Based on the NiFi registry, you can describe your ",(0,r.kt)("inlineCode",{parentName:"li"},"NiFiDataflow")," resource that will be deployed and run on the targeted NiFi cluster."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Portability :")," On kubernetes everything is a yaml file, so with NiFiKop we give you the ability to describe your clusters but also the ",(0,r.kt)("inlineCode",{parentName:"li"},"registry clients"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"parameter contexts")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"dataflows")," of your NiFi application, so that you can redeploy the same thing in a different namespace or cluster."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"State management :")," With NiFiKop resources, you can describe what you want, and the operator deals with the NiFi Rest API to make sure the resource stays in sync (even if someone manually makes changes directly on NiFi cluster)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Configurations :")," Based on the ",(0,r.kt)("inlineCode",{parentName:"li"},"Parameter Contexts"),", NiFiKop allows you to associate to your ",(0,r.kt)("inlineCode",{parentName:"li"},"Dataflow")," (= your applications) with a different configuration depending on the environment !")),(0,r.kt)("h2",{id:"users-and-access-policies-management"},"Users and access policies management"),(0,r.kt)("p",null,"Without the management of users and access policies associated, it was not possible to have a fully automated NiFi cluster setup due to : "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Node scaling :")," when a new node joins the cluster it needs to have some roles like ",(0,r.kt)("inlineCode",{parentName:"li"},"proxy user request"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"view data")," etc., by managing users and access policies we can easily create a user for this node with the right accesses."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Operator admin rights :")," For the operator to manage efficiently the cluster it needs a lot of rights as ",(0,r.kt)("inlineCode",{parentName:"li"},"deploying process groups"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"empty the queues")," etc., these rights are not available by default when you set a user as ",(0,r.kt)("a",{parentName:"li",href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#initial-admin-identity"},"InitialAdmin"),". Once again by giving the ability to define users and access policies we go through this."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"User's access :")," as seen just below we need to define the operator as ",(0,r.kt)("inlineCode",{parentName:"li"},"InitialAdmin"),", in this situation there is no more users that can access to the web UI to manually give access to other users. That's why we extend the ",(0,r.kt)("inlineCode",{parentName:"li"},"InitialAdmin")," concept into the operator, giving the ability to define a list of users as admins.")),(0,r.kt)("p",null,"In addition to these requirements to have a fully automated and managed cluster, we introduced some useful features : "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"User management :")," using ",(0,r.kt)("inlineCode",{parentName:"li"},"NifiUser")," resource, you are able to create (or bind an existing) user in NiFi cluster and apply some access policies that will be managed and continuously synced by the operator."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Group management :")," using ",(0,r.kt)("inlineCode",{parentName:"li"},"NifiUserGroup")," resource, you can create groups in NiFi cluster and apply access policies and a list of ",(0,r.kt)("inlineCode",{parentName:"li"},"NifiUser")," that will be managed and continuously synced by the operator."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default group :")," As the definition of ",(0,r.kt)("inlineCode",{parentName:"li"},"NifiUser")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"NifiUserGroup")," resources could be heavy for some simple use cases, we also decided to define two default groups that you can feed with a list of users that will be created and managed by the operator (no kubernetes resources to create) : ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Admins :")," a group giving access to everything on the NiFi Cluster,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Readers :")," a group giving access as viewer on the NiFi Cluster.")))),(0,r.kt)("p",null,"By introducing this feature we are giving you the ability to fully automate your deployment, from the NiFi Cluster to your managed NiFi Dataflow."),(0,r.kt)("h2",{id:"automatic-horizontal-nifi-cluster-scaling-via-crd"},"Automatic horizontal NiFi cluster scaling via CRD"),(0,r.kt)("p",null,"NiFiKop supports automatically horizontally scaling ",(0,r.kt)("inlineCode",{parentName:"p"},"NifiCluster")," node groups with a ",(0,r.kt)("inlineCode",{parentName:"p"},"NifiNodeGroupAutoscaler")," custom resource. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Kubernetes native :")," The ",(0,r.kt)("inlineCode",{parentName:"li"},"NifiNodeGroupAutoscaler")," controller implements the ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/#scale-subresource"},"Kubernetes scale subresource")," and creates a Kubernetes ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/"},(0,r.kt)("inlineCode",{parentName:"a"},"HorizontalPodAutoscaler"))," to automatically scale the pods that NiFiKop creates for ",(0,r.kt)("inlineCode",{parentName:"li"},"NifiCluster")," deployments."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Metrics-driven autoscaling :")," The ",(0,r.kt)("inlineCode",{parentName:"li"},"HorizontalPodAutoscaler")," can be driven by pod usage metrics (e.g. RAM, CPU) or through NiFi application metrics scraped by Prometheus."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Flexible NifiCluster node group autoscaling :")," The ",(0,r.kt)("inlineCode",{parentName:"li"},"NifiNodeGroupAutoscaler")," scales specific node groups in your ",(0,r.kt)("inlineCode",{parentName:"li"},"NifiCluster")," and you may have as many autoscalers as you like per ",(0,r.kt)("inlineCode",{parentName:"li"},"NifiCluster")," deployment. For example, a ",(0,r.kt)("inlineCode",{parentName:"li"},"NifiNodeGroupAutoscaler")," may manage high-memory or high-cpu sets of nodes for volume burst scenarios or it may manage every node in your cluster.")),(0,r.kt)("p",null,"Through this set of features, you may elect to have NiFiKop configure automatic horizontal autoscaling for any subset of nodes in your ",(0,r.kt)("inlineCode",{parentName:"p"},"NifiCluster")," deployment."))}m.isMDXComponent=!0}}]);