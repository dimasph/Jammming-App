(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[390],{pW1L:function(e,t,n){"use strict";n.r(t);var r=n("KQm4"),o=n("rePB"),a=n("q1tI"),c=n.n(a),s=n("/MKj"),l=n("VJ3r"),i=n("b0K7"),u=n("g0r0"),p=n("45Gz"),f=n("ROfi"),b=n("QtoC"),m=n("/fvN"),j={taskCounter:"taskCounter__1h4Y1FbZGOq0plWuqXiYYo"},d=function LEProjectFooter(e){var t=e.isContainerless,n=e.onProjectComplete,r=e.tasksDoneStatuses,o=Object(s.useSelector)(b.a),l=function getAssessmentCount(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e?r.filter((function(e){return e})).length:r.length},d=Object(a.useMemo)((function(){return 0===r.filter((function(e){return!e})).length}),[r]),O=Object(a.useCallback)((function(){return o||d}),[o,d]),g=t?"Finish":"Next",_=d?void 0:u.disabledStatus.completeAllTasks;return c.a.createElement(f.a,{customNavigation:c.a.createElement(m.a,{next:function projectComplete(){t?window.location.assign(Object(i.pb)()):O()&&n()},nextDisabled:!O(),nextButtonText:g,nextDisabledHelpText:_}),customProgressIndicator:c.a.createElement(p.a,{classNames:{completed:j.taskCounterCompleted,normal:j.taskCounter},total:l(),complete:l(!0),centered:!0})})},O=n("c2gB"),g=n("6lR+"),_=n("K7ZU"),v=n("J6xm"),S=n("XUH+"),k=n("t3Qs"),w=n("SdBd");function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function ProjectScene(e){var t=e.currentContentItem,n=e.currentProjectProgress,o=e.disabled,i=e.onProjectComplete,u=t.projectInformation,p={type:"Brief",project:t},f=_objectSpread(_objectSpread({},u.components),{},{Brief:p}),b=t.projectInformation.self_assessments;Object(k.a)();var m=Object(s.useSelector)(w.b),j=Object(a.useMemo)((function(){return b.map((function(e){return _objectSpread(_objectSpread({},e),{},{tasks:e.tasks.map((function(e){var t;return{done:!(null==n||null===(t=n.checklist)||void 0===t||!t[e.task_key])}}))})})).reduce((function(e,t){var n=t.tasks;return[].concat(Object(r.a)(e),Object(r.a)(n))}),[]).map((function(e){return!!e.done}))}),[n,b]),C=null==u?void 0:u.video_url,y=u.workspace;if(!y)return null;var h=Object(v.c)(Object.values(f));return c.a.createElement(O.a,{defaultFiles:h,readOnly:!1,workspaceSlug:y.slug,workspaceCheckpointSlug:t.slug,initialSavepointSlug:"".concat(t.slug,"-initial"),finalSavepointSlug:"".concat(t.slug,"-final"),einConfig:u.ein_config},c.a.createElement(S.a,{customHeader:c.a.createElement(l.b,{hideHelpMenu:o,showTools:!0,statusDisplay:c.a.createElement(_.a,null),walkthroughVideoUrl:C}),customFooter:c.a.createElement(d,{isContainerless:m,onProjectComplete:i,tasksDoneStatuses:j})},c.a.createElement(g.a,{components:f,title:t.title})))}}}]);
//# sourceMappingURL=platform-scenes-project-project~c8e19dca.6a9f5f1f635fc37334fe.chunk.js.map