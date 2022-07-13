(window.webpackJsonp=window.webpackJsonp||[]).push([[461],{528:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var i=n(2),a=n(6),r=(n(0),n(563)),c=["components"],o={id:"secured_nifi_cluster_on_gcp",title:"Secured NiFi cluster with NiFiKop on the Google Cloud Platform",author:"Alexandre Guitton",author_title:"Alexandre Guitton",author_url:"https://github.com/erdrix",author_image_url:"https://avatars0.githubusercontent.com/u/10503351?s=460&u=ea08d802388c79c17655c314296be58814391572&v=4",tags:["gke","nifikop","secured","oidc","google cloud platform","google cloud","gcp","kubernetes"]},l={permalink:"/nifikop/blog/2020/05/20/secured_nifi_cluster_on_gcp",source:"@site/blog/2020-05-20-secured_nifi_cluster_on_gcp.md",description:"Credits",date:"2020-05-20T00:00:00.000Z",tags:[{label:"gke",permalink:"/nifikop/blog/tags/gke"},{label:"nifikop",permalink:"/nifikop/blog/tags/nifikop"},{label:"secured",permalink:"/nifikop/blog/tags/secured"},{label:"oidc",permalink:"/nifikop/blog/tags/oidc"},{label:"google cloud platform",permalink:"/nifikop/blog/tags/google-cloud-platform"},{label:"google cloud",permalink:"/nifikop/blog/tags/google-cloud"},{label:"gcp",permalink:"/nifikop/blog/tags/gcp"},{label:"kubernetes",permalink:"/nifikop/blog/tags/kubernetes"}],title:"Secured NiFi cluster with NiFiKop on the Google Cloud Platform",readingTime:5.775,truncated:!1,prevItem:{title:"Secured NiFi cluster with NiFiKop with external dns on the Google Cloud Platform",permalink:"/nifikop/blog/2020/06/30/secured_nifi_cluster_on_gcp_with_external_dns"}},s=[{value:"Credits",id:"credits",children:[]},{value:"Objectives",id:"objectives",children:[]},{value:"Pre-requisites",id:"pre-requisites",children:[{value:"Disclaimer",id:"disclaimer",children:[]},{value:"Create OAuth Credentials",id:"create-oauth-credentials",children:[]},{value:"Create service account",id:"create-service-account",children:[]}]},{value:"Deploy secured cluster",id:"deploy-secured-cluster",children:[{value:"Deploy GKE cluster with Terraform",id:"deploy-gke-cluster-with-terraform",children:[]},{value:"Deploy Secured NiFi cluster",id:"deploy-secured-nifi-cluster",children:[]},{value:"Access to your secured NiFi Cluster",id:"access-to-your-secured-nifi-cluster",children:[]}]},{value:"Cleaning",id:"cleaning",children:[]}],u={rightToc:s};function b(e){var t=e.components,o=Object(a.a)(e,c);return Object(r.b)("wrapper",Object(i.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"credits"},"Credits"),Object(r.b)("p",null,"Before starting, I wanted to mention the fact that this post is an adaptation of the ",Object(r.b)("a",{parentName:"p",href:"https://twitter.com/pvillard31"},"Pierre Villard"),"'s one : ",Object(r.b)("a",{parentName:"p",href:"https://pierrevillard.com/2019/11/22/secured-nifi-cluster-with-terraform-on-the-google-cloud-platform/"},"Secured NiFi cluster with Terraform on the Google Cloud Platform")),Object(r.b)("h2",{id:"objectives"},"Objectives"),Object(r.b)("p",null,"In this article, we'll use ",Object(r.b)("strong",{parentName:"p"},"NiFiKop")," and ",Object(r.b)("strong",{parentName:"p"},"Terraform")," to quickly : "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"deploy ",Object(r.b)("strong",{parentName:"li"},"a GKE cluster")," to host our NiFi cluster,"),Object(r.b)("li",{parentName:"ul"},"deploy ",Object(r.b)("strong",{parentName:"li"},"a ",Object(r.b)("inlineCode",{parentName:"strong"},"cert-manager")," issuer")," as a convenient way to generate TLS certificates,"),Object(r.b)("li",{parentName:"ul"},"deploy ",Object(r.b)("strong",{parentName:"li"},"a zookeeper instance")," to manage cluster coordination and state across the cluster, "),Object(r.b)("li",{parentName:"ul"},"deploy ",Object(r.b)("strong",{parentName:"li"},"X secured NiFi instances in cluster mode")),Object(r.b)("li",{parentName:"ul"},"configure ",Object(r.b)("strong",{parentName:"li"},"NiFi to use OpenId connect")," for authentication"),Object(r.b)("li",{parentName:"ul"},"configure ",Object(r.b)("strong",{parentName:"li"},"HTTPS loadbalancer with Client Ip affinity")," to access to the NiFi cluster"),Object(r.b)("li",{parentName:"ul"},"re-size the cluster dynamically")),Object(r.b)("h2",{id:"pre-requisites"},"Pre-requisites"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You have your own domain (",Object(r.b)("a",{parentName:"li",href:"https://domains.google/"},"you can create on with Google"),") : it will be used to map a domain to the NiFi's web interface. In this post, we will use : ",Object(r.b)("inlineCode",{parentName:"li"},"trycatchlearn.fr"),". ")),Object(r.b)("h3",{id:"disclaimer"},"Disclaimer"),Object(r.b)("p",null,"This article can get you started for a production deployment, but should not used as so. There is still some steps needed such as Zookeeper configuration etc."),Object(r.b)("h3",{id:"create-oauth-credentials"},"Create OAuth Credentials"),Object(r.b)("p",null,"First step is to create the OAuth Credential : "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Go to your GCP project, and in the left bar : ",Object(r.b)("strong",{parentName:"li"},"APIs & Services > Credentials")),Object(r.b)("li",{parentName:"ul"},"Click on ",Object(r.b)("inlineCode",{parentName:"li"},"CREATE CREDENTIALS : OAuth client ID")),Object(r.b)("li",{parentName:"ul"},"Select ",Object(r.b)("inlineCode",{parentName:"li"},"Web Application")),Object(r.b)("li",{parentName:"ul"},"Give a name like ",Object(r.b)("inlineCode",{parentName:"li"},"SecuredNifi"),". "),Object(r.b)("li",{parentName:"ul"},"For ",Object(r.b)("inlineCode",{parentName:"li"},"Authorised JavaScript origins"),", use your own domain. I'm using : ",Object(r.b)("inlineCode",{parentName:"li"},"https://nifisecured.trycatchlearn.fr:8443")),Object(r.b)("li",{parentName:"ul"},"For ",Object(r.b)("inlineCode",{parentName:"li"},"Authorised redirect URIs")," it's your previous URI + ",Object(r.b)("inlineCode",{parentName:"li"},"/nifi-api/access/oidc/callback"),", for me : ",Object(r.b)("inlineCode",{parentName:"li"},"https://nifisecured.trycatchlearn.fr:8443/nifi-api/access/oidc/callback"))),Object(r.b)("p",null,Object(r.b)("img",{alt:"OAuth credentials",src:n(613).default})),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Create the OAuth credentials")),Object(r.b)("p",null,"Once the credentials are created, you will get a client ID and a client secret that you will need in ",Object(r.b)("inlineCode",{parentName:"p"},"NifiCluster")," definition."),Object(r.b)("h3",{id:"create-service-account"},"Create service account"),Object(r.b)("p",null,"For the GKE cluster deployment you need a service account with ",Object(r.b)("inlineCode",{parentName:"p"},"Editor")," role, and ",Object(r.b)("inlineCode",{parentName:"p"},"Kubernetes Engine Admin"),"."),Object(r.b)("h2",{id:"deploy-secured-cluster"},"Deploy secured cluster"),Object(r.b)("p",null,"Once you have completed the above prerequisites, deploying you NiFi cluster will only take three steps and few minutes."),Object(r.b)("p",null,"Open your Google Cloud Console in your GCP project and run : "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/konpyutaika/nifikop/nifikop.git\ncd nifikop/docs/tutorials/secured_nifi_cluster_on_gcp\n")),Object(r.b)("h3",{id:"deploy-gke-cluster-with-terraform"},"Deploy GKE cluster with Terraform"),Object(r.b)("h4",{id:"deployment"},"Deployment"),Object(r.b)("p",null,"You can configure variable before running the deployment in the file ",Object(r.b)("inlineCode",{parentName:"p"},"terraform/env/demo.tfvars")," : "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"project")," : GCP project ID"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"region")," : GCP region"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"zone")," : GCP zone"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"cluster_machines_types")," : defines the machine type for GKE cluster nodes"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"min_node")," : minimum number of nodes in the NodePool. Must be >=0 and <= max_node_count."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"max_node")," : maximum number of nodes in the NodePool. Must be >= min_node_count."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"initial_node_count")," : the number of nodes to create in this cluster's default node pool."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"preemptible")," : true/false using preemptibles nodes."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"nifikop_image_repo")," : NiFiKop's image repository"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"nifikop_image_tag")," : NiFiKop's image tag"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"nifikop_chart_version")," : NiFiKop's helm chart version")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"./start.sh <service account key's path>\n")),Object(r.b)("p",null,"This operation could take 15 minutes (time to the GKE cluster and its nodes to setup)"),Object(r.b)("p",null,"Once the deployment is ready load the GKE configuration : "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-console"},"gcloud container clusters get-credentials nifi-cluster --zone <configured gcp zone> --project <GCP project's id>\n")),Object(r.b)("h4",{id:"explanations"},"Explanations"),Object(r.b)("p",null,"The first step is to deploy a GKE cluster, with the required configuration, you can for example check the nodes configuration : "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-console"},"kubectl get nodes\nNAME                                                  STATUS   ROLES    AGE    VERSION\ngke-nifi-cluster-tracking-ptf20200520-a1aec8fe-2dl3   Ready    <none>   110m   v1.15.9-gke.24\ngke-nifi-cluster-tracking-ptf20200520-a1aec8fe-5bzb   Ready    <none>   110m   v1.15.9-gke.24\ngke-nifi-cluster-tracking-ptf20200520-a1aec8fe-5t3l   Ready    <none>   110m   v1.15.9-gke.24\ngke-nifi-cluster-tracking-ptf20200520-a1aec8fe-w86j   Ready    <none>   110m   v1.15.9-gke.24\n")),Object(r.b)("p",null,"Once the cluster is deployed, we created all the required namespaces : "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-console"},"kubectl get namespaces\nNAME              STATUS   AGE\ncert-manager      Active   106m\ndefault           Active   116m\nkube-node-lease   Active   116m\nkube-public       Active   116m\nkube-system       Active   116m\nnifi              Active   106m\nzookeeper         Active   106m\n")),Object(r.b)("p",null,"In the ",Object(r.b)("inlineCode",{parentName:"p"},"cert-manager")," namespace we deployed a ",Object(r.b)("inlineCode",{parentName:"p"},"cert-manager")," stack in a cluster-wide scope, which will be responsible for all the certificates generation."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"in this post, we will let ",Object(r.b)("inlineCode",{parentName:"p"},"cert-manager")," create a self-signed CA.\nFor more information check ",Object(r.b)("a",{parentName:"p",href:"https://konpyutaika.github.io/nifikop/docs/3_tasks/2_security/1_ssl"},"documentation page")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-console"},"kubectl -n cert-manager get pods\nNAME                                       READY   STATUS    RESTARTS   AGE\ncert-manager-55fff7f85f-74nf5              1/1     Running   0          72m\ncert-manager-cainjector-54c4796c5d-mfbbx   1/1     Running   0          72m\ncert-manager-webhook-77ccf5c8b4-m6ws4      1/1     Running   2          72m\n")),Object(r.b)("p",null,"It will also deploy the Zookeeper cluster based on the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/bitnami/charts/tree/master/bitnami/zookeeper"},"bitnami helm chart")," : "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-console"},"kubectl -n zookeeper get pods\nNAME          READY   STATUS    RESTARTS   AGE\nzookeeper-0   1/1     Running   0          74m\nzookeeper-1   1/1     Running   0          74m\nzookeeper-2   1/1     Running   0          74m\n")),Object(r.b)("p",null,"And finally it deploy the ",Object(r.b)("inlineCode",{parentName:"p"},"NiFiKop")," operator which is ready to create NiFi clusters : "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-console"},"kubectl -n nifi get pods\nNAME          READY   STATUS    RESTARTS   AGE\nnifikop-849fc8548f-ss6w4   1/1     Running   0          74m\n")),Object(r.b)("h3",{id:"deploy-secured-nifi-cluster"},"Deploy Secured NiFi cluster"),Object(r.b)("p",null,"You will now deploy your secured cluster to do so edit the ",Object(r.b)("inlineCode",{parentName:"p"},"kubernetes/nifi/secured_nifi_cluster.yaml")," and set with your own values : "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: nifi.orange.com/v1alpha1\nkind: NifiCluster\nmetadata:\n  name: securednificluster\n  namespace: nifi\nspec:\n  ...\n  initialAdminUser: <your google account email>\n  readOnlyConfig:\n    # NifiProperties configuration that will be applied to the node.\n    nifiProperties:\n      webProxyHosts:\n        - <nifi's hostname>:8443\n      # Additionnals nifi.properties configuration that will override the one produced based\n      # on template and configurations.\n      overrideConfigs: |\n        ...\n        nifi.security.user.oidc.client.id=<oidc client's id>\n        nifi.security.user.oidc.client.secret=<oidc client's secret>\n        ...\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Spec.InitialAdminUser")," : Your GCP account email (this will give you the admin role into the NiFi cluster), in my case ",Object(r.b)("inlineCode",{parentName:"li"},"aguitton.ext@orange.com")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Spec.ReadOnlyConfig.NifiProperties.WebProxyHosts","[","0","]")," : The web hostname configured in the Oauth section, in my case ",Object(r.b)("inlineCode",{parentName:"li"},"nifisecured.trycatchlearn.fr")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Spec.ReadOnlyConfig.NifiProperties.OverrideConfigs")," : you have to set the following properties : ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"nifi.security.user.oidc.client.id")," : OAuth Client ID"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"nifi.security.user.oidc.client.secret")," : OAuth Client secret")))),Object(r.b)("p",null,"Once the configuration is ok, you can deploy the ",Object(r.b)("inlineCode",{parentName:"p"},"NifiCluster")," : "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-console"},"kubectl create -f kubernetes/nifi/secured_nifi_cluster.yaml\n")),Object(r.b)("p",null,"After 5 minutes your cluster should be running : "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-console"},"kubectl get pods -n nifi\nNAME                             READY   STATUS    RESTARTS   AGE\nnifikop-849fc8548f-ss6w4         1/1     Running   0          28h\nsecurednificluster-0-node9tqff   1/1     Running   0          5m52s\nsecurednificluster-1-nodew9tsd   1/1     Running   0          6m30s\nsecurednificluster-2-nodemlxs8   1/1     Running   0          6m28s\nsecurednificluster-3-nodeckw8p   1/1     Running   0          6m26s\nsecurednificluster-4-nodewzjt7   1/1     Running   0          6m24s\n")),Object(r.b)("h3",{id:"access-to-your-secured-nifi-cluster"},"Access to your secured NiFi Cluster"),Object(r.b)("p",null,"To finish you have to get the public IP of the load balancer : "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-console"},"kubectl -n nifi get svc\nNAME                          TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)                                         AGE\nsecurednificluster            LoadBalancer   10.15.248.159   34.78.140.135   8443:30248/TCP,6007:30517/TCP,10000:31985/TCP   27m\nsecurednificluster-headless   ClusterIP      None            <none>          8443/TCP,6007/TCP,10000/TCP                     27m\n")),Object(r.b)("p",null,"In my case it's ",Object(r.b)("inlineCode",{parentName:"p"},"34.78.140.135"),"."),Object(r.b)("p",null,"We can now update the DNS records of your domains to add a DNS record of type A redirecting your hostname (in my case ",Object(r.b)("inlineCode",{parentName:"p"},"nifisecured.trycatchlearn.fr"),") to the load balancer IP."),Object(r.b)("p",null,"I can now access the NiFi cluster using ",Object(r.b)("a",{parentName:"p",href:"https://nifisecured.trycatchlearn.fr:8443/nifi"},"https://nifisecured.trycatchlearn.fr:8443/nifi")," and authenticate on the cluster using the admin account email address I configured in the ",Object(r.b)("inlineCode",{parentName:"p"},"NifiCluster")," resource."),Object(r.b)("p",null,"Here is my 5-nodes secured NiFi cluster up and running : "),Object(r.b)("p",null,Object(r.b)("img",{alt:"6 nodes cluster",src:n(614).default})),Object(r.b)("p",null,"5-nodes secured NiFi cluster : "),Object(r.b)("p",null,Object(r.b)("img",{alt:"5 nodes",src:n(615).default})),Object(r.b)("p",null,"You can now update the authorizations and add additionnal users/groups."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Just have a look on ",Object(r.b)("a",{parentName:"p",href:"https://konpyutaika.github.io/nifikop/docs/3_tasks/2_security/1_ssl#operator-access-policies"},"documentation's page")," to finish cleaning setup."))),Object(r.b)("h2",{id:"cleaning"},"Cleaning"),Object(r.b)("p",null,"To destroy all resources you created, you just need to run : "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-consol"},"kubectl delete nificlusters.nifi.orange.com securednificluster -n nifi\nkubectl delete crds nificlusters.nifi.orange.com\nkubectl delete crds nifiusers.nifi.orange.com\n./destroy.sh <service account key's path>\n")))}b.isMDXComponent=!0},563:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=i,m=b["".concat(c,".").concat(d)]||b[d]||p[d]||r;return n?a.a.createElement(m,o(o({ref:t},s),{},{components:n})):a.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,c=new Array(r);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var s=2;s<r;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},613:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/oauth_credentials-5fc8292d57455fd7b0703ed869fc31a6.png"},614:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/6_nodes_cluster-a7a447412b980b89f1b0c8311eb3c08a.png"},615:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/5_nodes-13c70eaa843b818938eb16931dfc5a34.png"}}]);