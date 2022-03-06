(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{117:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return r})),a.d(e,"metadata",(function(){return c})),a.d(e,"rightToc",(function(){return i})),a.d(e,"default",(function(){return j}));var n=a(2),b=a(6),l=(a(0),a(455)),r={id:"5_nifi_dataflow",title:"NiFi Dataflow",sidebar_label:"NiFi Dataflow"},c={unversionedId:"5_references/5_nifi_dataflow",id:"version-v0.8.0/5_references/5_nifi_dataflow",isDocsHomePage:!1,title:"NiFi Dataflow",description:"NifiDataflow is the Schema for the NiFi dataflow API.",source:"@site/versioned_docs/version-v0.8.0/5_references/5_nifi_dataflow.md",slug:"/5_references/5_nifi_dataflow",permalink:"/nifikop/docs/5_references/5_nifi_dataflow",editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.8.0/5_references/5_nifi_dataflow.md",version:"v0.8.0",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1646600121,sidebar_label:"NiFi Dataflow",sidebar:"version-v0.8.0/docs",previous:{title:"NiFi Parameter Context",permalink:"/nifikop/docs/5_references/4_nifi_parameter_context"},next:{title:"NiFi UserGroup",permalink:"/nifikop/docs/5_references/6_nifi_usergroup"}},i=[{value:"NifiDataflow",id:"nifidataflow",children:[]},{value:"NifiDataflowsSpec",id:"nifidataflowsspec",children:[]},{value:"NifiDataflowStatus",id:"nifidataflowstatus",children:[]},{value:"DataflowUpdateStrategy",id:"dataflowupdatestrategy",children:[]},{value:"DataflowState",id:"dataflowstate",children:[]},{value:"UpdateRequest",id:"updaterequest",children:[]},{value:"DropRequest",id:"droprequest",children:[]},{value:"DataflowUpdateRequestType",id:"dataflowupdaterequesttype",children:[]},{value:"FlowPosition",id:"flowposition",children:[]}],O={rightToc:i};function j(t){var e=t.components,a=Object(b.a)(t,["components"]);return Object(l.b)("wrapper",Object(n.a)({},O,a,{components:e,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"NifiDataflow")," is the Schema for the NiFi dataflow API."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: nifi.konpyutaika.com/v1alpha1\nkind: NifiDataflow\nmetadata:\n  name: dataflow-lifecycle\nspec:\n  parentProcessGroupID: "16cfd2ec-0174-1000-0000-00004b9b35cc"\n  bucketId: "01ced6cc-0378-4893-9403-f6c70d080d4f"\n  flowId: "9b2fb465-fb45-49e7-94fe-45b16b642ac9"\n  flowVersion: 2\n  flowPosition:\n    posX: 0\n    posY: 0\n  syncMode: always\n  skipInvalidControllerService: true\n  skipInvalidComponent: true\n  clusterRef:\n    name: nc\n    namespace: nifikop\n  registryClientRef:\n    name: squidflow\n    namespace: nifikop\n  parameterContextRef:\n    name: dataflow-lifecycle\n    namespace: nifikop\n  updateStrategy: drain\n')),Object(l.b)("h2",{id:"nifidataflow"},"NifiDataflow"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"metadata"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#ObjectMeta"}),"ObjectMetadata")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"is metadata that all persisted resources must have, which includes all objects dataflows must create."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"spec"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#NifiDataflowspec"}),"NifiDataflowSpec")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"defines the desired state of NifiDataflow."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"status"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#NifiDataflowstatus"}),"NifiDataflowStatus")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"defines the observed state of NifiDataflow."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")))),Object(l.b)("h2",{id:"nifidataflowsspec"},"NifiDataflowsSpec"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"parentProcessGroupID"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the UUID of the parent process group where you want to deploy your dataflow, if not set deploy at root level."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bucketId"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the UUID of the Bucket containing the flow."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"flowId"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the UUID of the flow to run."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"flowVersion"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"*int32"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the version of the flow to run."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"flowPosition"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#flowposition"}),"FlowPosition")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the position of your dataflow in the canvas."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"syncMode"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'Enum={"never","always","once"}'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"if the flow will be synchronized once, continuously or never."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"always")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"skipInvalidControllerService"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"whether the flow is considered as ran if some controller services are still invalid or not."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"skipInvalidComponent"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"whether the flow is considered as ran if some components are still invalid or not."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"updateStrategy"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#dataflowupdatestrategy"}),"DataflowUpdateStrategy")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"describes the way the operator will deal with data when a dataflow will be updated : Drop or Drain"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"drain")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"clusterRef"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/nifikop/docs/5_references/2_nifi_user#clusterreference"}),"ClusterReference")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"contains the reference to the NifiCluster with the one the user is linked."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"parameterContextRef"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/nifikop/docs/5_references/4_nifi_parameter_context#parametercontextreference"}),"ParameterContextReference")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"contains the reference to the ParameterContext with the one the dataflow is linked."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"registryClientRef"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/nifikop/docs/5_references/3_nifi_registry_client#registryclientreference"}),"RegistryClientReference")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"contains the reference to the NifiRegistry with the one the dataflow is linked."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(l.b)("h2",{id:"nifidataflowstatus"},"NifiDataflowStatus"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"processGroupID"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"process Group ID."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"state"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#dataflowstate"}),"DataflowState")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the dataflow current state."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"latestUpdateRequest"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#updaterequest"}),"UpdateRequest")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the latest update request sent."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"latestDropRequest"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#droprequest"}),"DropRequest")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the latest queue drop request sent."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(l.b)("h2",{id:"dataflowupdatestrategy"},"DataflowUpdateStrategy"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DrainStrategy"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"drain"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"leads to shutting down only input components (Input processors, remote input process group) and dropping all flowfiles from the flow.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DropStrategy"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"drop"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"leads to shutting down all components and dropping all flowfiles from the flow.")))),Object(l.b)("h2",{id:"dataflowstate"},"DataflowState"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DataflowStateCreated"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Created"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"describes the status of a NifiDataflow as created.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DataflowStateStarting"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Starting"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"describes the status of a NifiDataflow as starting.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DataflowStateRan"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Ran"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"describes the status of a NifiDataflow as running.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DataflowStateOutOfSync"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OutOfSync"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"describes the status of a NifiDataflow as out of sync.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DataflowStateInSync"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"InSync"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"describes the status of a NifiDataflow as in sync.")))),Object(l.b)("h2",{id:"updaterequest"},"UpdateRequest"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#dataflowupdaterequesttype"}),"DataflowUpdateRequestType")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"defines the type of versioned flow update request."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"id"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the id of the update request."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"uri"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the uri for this request."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"lastUpdated"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the last time this request was updated."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"complete"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"whether or not this request has completed."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"failureReason"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"an explication of why the request failed, or null if this request has not failed."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"percentCompleted"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int32"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the percentage complete of the request, between 0 and 100."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"state"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the state of the request."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(l.b)("h2",{id:"droprequest"},"DropRequest"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"connectionId"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the connection id."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"id"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the id for this drop request."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"uri"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the uri for this request."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"lastUpdated"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the last time this request was updated."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"finished"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"whether the request has finished."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"failureReason"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"an explication of why the request failed, or null if this request has not failed."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"percentCompleted"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int32"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the percentage complete of the request, between 0 and 100."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"currentCount"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int32"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the number of flow files currently queued."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"currentSize"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int64"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the size of flow files currently queued in bytes."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"current"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the count and size of flow files currently queued."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"originalCount"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int32"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the number of flow files to be dropped as a result of this request."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"originalSize"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int64"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the size of flow files to be dropped as a result of this request in bytes."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"original"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the count and size of flow files to be dropped as a result of this request."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"droppedCount"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int32"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the number of flow files that have been dropped thus far."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"droppedSize"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int64"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the size of flow files currently queued in bytes."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Dropped"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the count and size of flow files that have been dropped thus far."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"state"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the state of the request."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(l.b)("h2",{id:"dataflowupdaterequesttype"},"DataflowUpdateRequestType"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"RevertRequestType"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Revert"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"defines a revert changes request.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"UpdateRequestType"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Update"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"defines an update version request.")))),Object(l.b)("h2",{id:"flowposition"},"FlowPosition"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"posX"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int64"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the x coordinate."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"posY"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int64"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the y coordinate."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))))}j.isMDXComponent=!0},455:function(t,e,a){"use strict";a.d(e,"a",(function(){return p})),a.d(e,"b",(function(){return o}));var n=a(0),b=a.n(n);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,b=function(t,e){if(null==t)return{};var a,n,b={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(b[a]=t[a]);return b}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(b[a]=t[a])}return b}var O=b.a.createContext({}),j=function(t){var e=b.a.useContext(O),a=e;return t&&(a="function"==typeof t?t(e):c(c({},e),t)),a},p=function(t){var e=j(t.components);return b.a.createElement(O.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return b.a.createElement(b.a.Fragment,{},e)}},u=b.a.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,r=t.parentName,O=i(t,["components","mdxType","originalType","parentName"]),p=j(a),u=n,o=p["".concat(r,".").concat(u)]||p[u]||d[u]||l;return a?b.a.createElement(o,c(c({ref:e},O),{},{components:a})):b.a.createElement(o,c({ref:e},O))}));function o(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,r=new Array(l);r[0]=u;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:n,r[1]=c;for(var O=2;O<l;O++)r[O]=a[O];return b.a.createElement.apply(null,r)}return b.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);