(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[335],{"8YOW":function(t,r,a){"use strict";a.r(r),a.d(r,"ProjectBrief",(function(){return ut}));var c=a("rePB"),o=a("o0o1"),i=a.n(o),l=a("HaE+"),u=a("ODXe"),p=a("q1tI"),d=a.n(p),b=a("/MKj"),k=a("fTi7"),m=a("QHjb"),j=a("lREb"),h=a("swBZ"),O=a("5JLQ"),y=a("CWAm"),v=function useMeaningfulContentLoaded(){var t=Object(b.useDispatch)();Object(p.useEffect)((function(){t&&t(Object(y.d)())}),[t])},g=a("qKzt"),_=a("2oex"),E=a("2Y9M"),C=a("doSx"),w=a("hsD4"),T=a("1OyB"),x=a("vuIU"),S=a("JX7q"),P=a("Ji7U"),I=a("md7G"),D=a("foSv"),B=a("ZX4+"),R=a("yrBZ"),L=a("TSYQ"),A=a.n(L),H=a("OoWH"),N="centeredCheckbox__2QQhtR9gO-52xrQs_8ZEjS",z="narrativeMarkdown__1UywfcBd-60XKky6qUHIYA",K="scrollable___DFOWZAyFa-jr7fZML66U",W=a("kVzq");function _createSuper(t){var r=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function _createSuperInternal(){var a,c=Object(D.a)(t);if(r){var o=Object(D.a)(this).constructor;a=Reflect.construct(c,arguments,o)}else a=c.apply(this,arguments);return Object(I.a)(this,a)}}var M=function(t){Object(P.default)(TaskCheckBox,t);var r=_createSuper(TaskCheckBox);function TaskCheckBox(){var t;Object(T.default)(this,TaskCheckBox);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return t=r.call.apply(r,[this].concat(o)),Object(c.a)(Object(S.a)(t),"onKeyDown",(function(r){13!==r.which&&32!==r.which||(t.props.onToggle(),r.preventDefault())})),t}return Object(x.default)(TaskCheckBox,[{key:"componentDidMount",value:function componentDidMount(){this.props.broadcast("taskItemMounted")}},{key:"render",value:function render(){var t=A()(Object(c.a)({"fcn-task__check":!0,"fcn-task__check--checked":this.props.checked},N,!0));return d.a.createElement("div",{"aria-checked":this.props.checked,"aria-label":this.props.label,className:t,"data-cue":"discovery-checklist",onKeyDown:this.onKeyDown,role:"checkbox",tabIndex:0,"data-testid":"task-".concat(this.props.number,"-checkbox")},this.props.checked&&d.a.createElement(W.a,{"aria-hidden":!0}))}}]),TaskCheckBox}(d.a.PureComponent);function TaskItem_createSuper(t){var r=function TaskItem_isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function _createSuperInternal(){var a,c=Object(D.a)(t);if(r){var o=Object(D.a)(this).constructor;a=Reflect.construct(c,arguments,o)}else a=c.apply(this,arguments);return Object(I.a)(this,a)}}var G=function(t){Object(P.default)(TaskItem,t);var r=TaskItem_createSuper(TaskItem);function TaskItem(){var t;Object(T.default)(this,TaskItem);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return t=r.call.apply(r,[this].concat(o)),Object(c.a)(Object(S.a)(t),"handleClick",(function(){(t.props.hasCourseContentItemAccess||t.props.isFirstTrackInPath)&&t.props.setTask(!t.props.done)})),t}return Object(x.default)(TaskItem,[{key:"render",value:function render(){var t=A()({"fit-full":!0,"fcn-task":!0,"fcn-task--complete":this.props.done});return d.a.createElement("article",{className:t},d.a.createElement(R.b,{p:30,onClick:this.handleClick},d.a.createElement(R.a,null,d.a.createElement(M,{broadcast:this.props.broadcast,checked:this.props.done,label:"Task item ".concat(this.props.number),onToggle:this.handleClick,number:this.props.number})),d.a.createElement(R.a,{minWidth:40,pl:5},d.a.createElement("span",{className:"fcn-task__number","data-testid":"task-".concat(this.props.number)},this.props.number,".")),d.a.createElement(O.a,{text:this.props.text,className:A()(z,K)})),this.props.hint?d.a.createElement(H.a,{hint:this.props.hint}):null)}}]),TaskItem}(p.PureComponent),U=Object(b.connect)((function mapStateToProps(t){return{hasCourseContentItemAccess:Object(_.W)(t),isFirstTrackInPath:Object(B.a)(t)}}))(G);function TaskListHeader_createSuper(t){var r=function TaskListHeader_isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function _createSuperInternal(){var a,c=Object(D.a)(t);if(r){var o=Object(D.a)(this).constructor;a=Reflect.construct(c,arguments,o)}else a=c.apply(this,arguments);return Object(I.a)(this,a)}}var q=function(t){Object(P.default)(TaskListHeader,t);var r=TaskListHeader_createSuper(TaskListHeader);function TaskListHeader(){return Object(T.default)(this,TaskListHeader),r.apply(this,arguments)}return Object(x.default)(TaskListHeader,[{key:"render",value:function render(){return d.a.createElement("h2",{className:"fit-full fcn-task-header"},this.props.heading)}}]),TaskListHeader}(d.a.PureComponent),V="tasks__2zeiH_BHmhuJBXUlJC3X0R",Q="tasksHelp__2gwNuLZ9kdz9gCp9vw39no";function TaskList_createSuper(t){var r=function TaskList_isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function _createSuperInternal(){var a,c=Object(D.a)(t);if(r){var o=Object(D.a)(this).constructor;a=Reflect.construct(c,arguments,o)}else a=c.apply(this,arguments);return Object(I.a)(this,a)}}var Z=function(t){Object(P.default)(TaskList,t);var r=TaskList_createSuper(TaskList);function TaskList(){var t;Object(T.default)(this,TaskList);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return t=r.call.apply(r,[this].concat(o)),Object(c.a)(Object(S.a)(t),"makeTaskItems",(function(r,a,c){var o=r.heading,i=r.tasks,l=[];return i.forEach((function(r,o){var i,u=t.props.progress,p=r.done,b=null==u||null===(i=u.checklist)||void 0===i?void 0:i[r.task_key];l.push(d.a.createElement(U,{text:r.text,number:o+1+a,key:"task-".concat(r.task_key),hint:r.hint,done:p||Boolean("string"==typeof b?"true"===b:b),broadcast:t.props.broadcast,setTask:function setTask(r){t.props.setTask(c,o,r)}}))})),d.a.createElement("div",{key:"task-criteria-".concat(o)},l)})),t}return Object(x.default)(TaskList,[{key:"render",value:function render(){var t=this,r=[],a=0;return this.props.taskGroups.forEach((function(c,o){c.heading&&c.heading.length>0&&r.push(d.a.createElement(q,{key:"task-heading-".concat(c.heading),heading:c.heading})),r.push(t.makeTaskItems(c,a,o)),a+=c.tasks.length})),d.a.createElement("div",{className:V},d.a.createElement("span",{className:Q},"Mark the tasks as complete by checking them off"),r)}}]),TaskList}(d.a.Component),Y=a("45Gz"),J=a("DZdY"),X=a("QqFe"),$=a("630U"),ee=a("Xxlx"),te=a("z9go"),ne="group__LspoGf1Fw0-ac_AUnuvRV";function ownKeys(t,r){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);r&&(c=c.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),a.push.apply(a,c)}return a}var re=Object(J.a)(X.b,{target:"ehu8l140",label:"YellowButton"})(Object($.i)({bg:"yellow",color:"black"}),""),ae=Object(b.connect)((function mapStateToProps(t){return{contentIds:Object(_.j)(t)}}))((function ButtonGroupComponent(t){var r=t.contentIds,a=t.project,o=t.hasNoProgress,i=t.onStart,l=Object(b.useSelector)(_.W),u=Object(b.useSelector)(B.a)||l,p=a.slug,k=a.title,m=a.projectInformation.download_path,j=function trackStart(t){m&&Object(te.b)("user","email_trigger",function _objectSpread(t){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(a),!0).forEach((function(r){Object(c.a)(t,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):ownKeys(Object(a)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(a,r))}))}return t}({content_item_name:k,content_item_id:p},t))};return d.a.createElement("div",{className:ne},m&&d.a.createElement(ee.a,{data:{content_ids:r,target:"ipp_start_download"},href:m,"data-testid":"download-btn",onClick:function onClick(){return j({type:"ipp_start_download"})}},d.a.createElement(re,{onClick:o?i:void 0,disabled:!u},"Download")),o&&d.a.createElement(ee.a,{data:{content_ids:r,target:"ipp_start_platform"},disableTracking:!m,onClick:function onClick(){return j({type:"ipp_start_platform"})}},d.a.createElement(re,{onClick:i,"data-testid":"start-btn",disabled:!u},"Start")))}));function useTaskChecklist(t,r){var a=Object(b.useDispatch)(),c=Object(p.useMemo)((function(){if("project"===(null==r?void 0:r.type)&&null!=r&&r.checklist){var t=Object.values(r.checklist);return{total:t.length,complete:t.filter((function(t){return t})).length}}}),[r]);return Object(p.useEffect)((function(){a&&a(Object(g.a)(t))}),[a,t]),{count:c}}var ce={taskHeading:"taskHeading__1JEaVBblmeZBvqgNSR70QO",taskListCounter:"taskListCounter__1ntH11Ojh2_05E78kaz98u"},oe=function Brief(t){var r=t.broadcast,a=t.presenter,c=a.project,o=a.contentItemTitle,i=a.contentParentTitle,l=a.progress,u=t.modifiers.assessments,k=Object(b.useDispatch)(),y=Object(b.useSelector)(_.P),T=useTaskChecklist(c,l).count;v();var x=Object(p.useCallback)((function(){r("start"),k(Object(g.c)(c))}),[r,k,c]),S=i||(null==y?void 0:y.title),P=o||(null==c?void 0:c.title),I={heading:d.a.createElement(w.a,{as:"div",icon:m.a},h.components.brief.objective),content:d.a.createElement(E.a,{contentParentTitle:S,contentItemTitle:P},d.a.createElement(O.a,{text:c.projectInformation.objective}),d.a.createElement(ae,{hasNoProgress:!l.started,onStart:x,project:c})),key:"objective"},D={hidden:!l.started,heading:d.a.createElement(w.a,{icon:j.a,notes:T&&d.a.createElement(Y.a,{classNames:{normal:ce.taskCounter},total:T.total,complete:T.complete})},h.components.brief.tasks),content:d.a.createElement(Z,{taskGroups:u,setTask:function setTask(t,r,a){var o=u[t].tasks[r];k(Object(g.d)(c,o.task_key,a))},broadcast:r,progress:l}),key:"selfAssessments"};return d.a.createElement(C.a,{content:[I,D]})},ie=a("wx14"),le=a("jY6L");function tracking_ownKeys(t,r){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);r&&(c=c.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),a.push.apply(a,c)}return a}function tracking_objectSpread(t){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?tracking_ownKeys(Object(a),!0).forEach((function(r){Object(c.a)(t,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):tracking_ownKeys(Object(a)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(a,r))}))}return t}var se="resources",ue="objective",pe="project",de=function useProjectTracking(){var t=Object(b.useSelector)(le.d),r=Object(p.useCallback)((function(r,a){var c=tracking_objectSpread(tracking_objectSpread({},t),{},{context:r,target:a});return Object(te.c)(c)}),[t]),a=Object(p.useCallback)((function(r,a){var c=tracking_objectSpread(tracking_objectSpread({},t),{},{context:r,target:a});return Object(te.d)(c)}),[t]);return{trackDownloadCodeImpression:Object(p.useCallback)((function(){return a(se,"download_code")}),[a]),trackWalkthroughVideoImpression:Object(p.useCallback)((function(){return a(se,"walkthrough_play")}),[a]),trackExpandAllTasksClick:Object(p.useCallback)((function(){return r(ue,"expand_all_tasks")}),[r]),trackCollapseAllTasksClick:Object(p.useCallback)((function(){return r(ue,"collapse_all_tasks")}),[r]),trackTaskCompletionClick:Object(p.useCallback)((function(t){return r(ue,t)}),[r]),trackWalkthroughVideoPlayClick:Object(p.useCallback)((function(){return r(se,"walkthrough_play")}),[r]),trackWalkthroughVideoNewTabClick:Object(p.useCallback)((function(){return r(se,"walkthrough_window")}),[r]),trackDownloadCodeClick:Object(p.useCallback)((function(){return r(se,"download_code")}),[r]),trackForumLinkClick:Object(p.useCallback)((function(){return r(se,"forum")}),[r]),trackCheatsheetClick:Object(p.useCallback)((function(){return r(se,"cheatsheet")}),[r]),trackResetProjectClick:Object(p.useCallback)((function(){return r(se,"reset")}),[r]),trackReportBugClick:Object(p.useCallback)((function(){return r(se,"report_bug")}),[r]),trackGeneralFAQClick:Object(p.useCallback)((function(){return r(se,"general_faq")}),[r]),trackObjectiveTabClick:Object(p.useCallback)((function(){return r(pe,"objective_tab")}),[r]),trackResourcesTabClick:Object(p.useCallback)((function(){return r(pe,"resources_tab")}),[r])}},fe=a("OEGx"),be=a("m4dF"),ke=[{icon:m.a,text:"Objective"},{icon:be.a,text:"Resources"}],me=function TabbedNarrative(t){var r=t.children,a=t.tabTitles,c=void 0===a?ke:a,o=t.onTabChange;return d.a.createElement(fe.e,{height:"100%",variant:"block",onChange:function handleTabChange(t){null==o||o(t)}},d.a.createElement(fe.b,null,c.map((function(t){var r=t.icon,a=t.text;return d.a.createElement(fe.a,{key:a},d.a.createElement(r,{"aria-hidden":!0,mr:12}),a)}))),d.a.createElement(fe.d,{overflowY:"auto",maxHeight:"calc(100% - 64px)"},r))},je=a("uQrA"),he=function TabbedNarrativePanel(t){var r=t.contentTitle,a=t.children;return d.a.createElement(fe.c,{overflowY:"auto"},r?d.a.createElement(je.a,{fontSize:14,fontWeight:"bold",mt:0,mx:24,textTransform:"uppercase"},r):null,a)},Oe=Object(p.forwardRef)((function NarrativeSection(t,r){var a=t.children,c=t.sectionTitle,o=t.sectionDescription,i=t.descriptionIsMarkdown;return d.a.createElement(R.a,{mx:24,ref:r},d.a.createElement(je.a,{my:16,as:"h2",fontSize:"xx-large"},c),i&&o?d.a.createElement(O.a,{text:o}):d.a.createElement(je.a,{mb:16,width:"100%"},o),a)})),ye=a("owCg"),ve=a("Ey5D"),ge=a("5u8U"),_e=a("Fx1f"),Ee=a("BalV"),Ce=a("nJaN"),we=a("UIq1"),Te=a("3tXg"),xe=function TaskHint(t){var r=t.hint,a=Object(p.useState)(!1),c=Object(u.a)(a,2),o=c[0],i=c[1];return r?d.a.createElement(ve.a,{variant:"plain"},d.a.createElement(Pe,{expanded:o,renderExpanded:function renderExpanded(){return d.a.createElement(Se,null,d.a.createElement(O.a,{text:r}))}},d.a.createElement(R.a,{py:24},o?d.a.createElement(d.a.Fragment,null,d.a.createElement(ye.a,{variant:"inline",onClick:function onClick(){return i(!1)}},"Hide hint")):d.a.createElement(d.a.Fragment,null,d.a.createElement(je.a,null,"Need some extra help?"),d.a.createElement(ye.a,{variant:"inline",onClick:function onClick(){return i(!0)},ml:8},"Show a hint"))))):null},Se=Object(J.a)(Te.a.div,{target:"eye0br11",label:"ExpandableHint"})(we.a,""),Pe=Object(J.a)(ve.d,{target:"eye0br10",label:"HintListRow"})($.z.css({mt:16,borderTop:1,borderColor:"background-hover"}),""),Ie=function TaskBody(t){var r=t.task,a=t.setIsComplete;return d.a.createElement(R.a,{width:"calc(100% - 48px)",bg:"background",overflow:"hidden",mx:24,mt:16},d.a.createElement(O.a,{text:r.text}),r.done?d.a.createElement(X.b,{my:16,size:"small",onClick:function onClick(){return a(!1,"incomplete_task_button")}},d.a.createElement(R.b,{alignItems:"center",p:0},d.a.createElement(W.a,{size:16}),d.a.createElement(je.a,{fontSize:"medium",ml:4},"Completed"))):d.a.createElement(X.e,{size:"small",my:16,variant:"secondary",border:1,borderColor:"white",onClick:function onClick(){return a(!0,"complete_task_button")}},d.a.createElement(je.a,{fontSize:"medium"},"Mark complete")),d.a.createElement(xe,{hint:r.hint}))},De=function ObjectiveTask(t){var r=t.task,a=t.index,c=t.isExpanded,o=t.setIsExpanded,i=t.setIsComplete;return d.a.createElement(Be,{expanded:c,renderExpanded:function renderExpanded(){return d.a.createElement(Ie,{task:r,setIsComplete:i})}},d.a.createElement(R.b,{alignItems:"center",px:24,width:"100%"},d.a.createElement(Ae,{onClick:function onClick(){i(!r.done,r.done?"incomplete_task_circle":"complete_task_circle")}},d.a.createElement(d.a.Fragment,null,d.a.createElement(je.a,{screenreader:!0},r.done?"Mark Task ".concat(a," as incomplete"):"Mark Task ".concat(a," as complete")),r.done?d.a.createElement(_e.a,{"data-testid":"chk_icon",color:"primary",size:16}):d.a.createElement(Re,{"data-testid":"circle_icon",size:16,borderColor:"secondary"}))),d.a.createElement(Le,{"aria-expanded":!!c,onClick:function onClick(){return o(!c)}},d.a.createElement(je.a,{ml:8,fontFamily:"accent"},"Task ".concat(a)),d.a.createElement(R.a,{flexGrow:1}),c?d.a.createElement(Ee.a,{size:16}):d.a.createElement(Ce.a,{size:16}))))},Be=Object(J.a)(ve.d,{target:"emcmdy13",label:"TaskListRow"})($.z.css({bg:"background-primary",borderTop:1,borderColor:"background-hover"}),""),Re=Object(J.a)(R.a,{target:"emcmdy12",label:"Circle"})((function(t){return $.z.css({borderRadius:"1000px",width:t.size,height:t.size,boxSizing:"border-box",border:1})}),""),Le=Object(J.a)(ge.a,{target:"emcmdy11",label:"FullWidthButton"})($.z.css({width:"100%",display:"flex",alignItems:"center",py:8,"&:focus-visible":{outline:"0.3rem auto ".concat($.A.colors.white)}}),""),Ae=Object(J.a)(ge.a,{target:"emcmdy10",label:"IconButton"})($.z.css({display:"flex",alignItems:"center",p:4,justifyContent:"center","&:focus-visible":{outline:"0.3rem auto ".concat($.A.colors.white)}}),"");function TaskGroup_ownKeys(t,r){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);r&&(c=c.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),a.push.apply(a,c)}return a}function TaskGroup_objectSpread(t){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?TaskGroup_ownKeys(Object(a),!0).forEach((function(r){Object(c.a)(t,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):TaskGroup_ownKeys(Object(a)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(a,r))}))}return t}var He=function TaskGroup(t){var r=t.completeOrIncompleteTask,a=t.expandOrCollapseTask,c=t.expandedTasks,o=t.progress,i=t.projectTaskIndices,l=t.taskGroup;return d.a.createElement(d.a.Fragment,null,l.heading&&d.a.createElement(je.a,{as:"h3",mx:24,my:16,fontSize:22,fontWeight:"bold"},l.heading),l.tasks.map((function(t){var l=i[t.task_key];return d.a.createElement(De,{key:t.task_key,task:TaskGroup_objectSpread(TaskGroup_objectSpread({},t),{},{done:!!o.checklist[t.task_key]}),index:l+1,isExpanded:c[t.task_key],setIsExpanded:function setIsExpanded(r){return a(t.task_key,r)},setIsComplete:function setIsComplete(a,c){return r({taskKey:t.task_key,taskIndex:l,isComplete:a,trackingTarget:c})}})})))};function _createForOfIteratorHelper(t,r){var a="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!a){if(Array.isArray(t)||(a=function _unsupportedIterableToArray(t,r){if(!t)return;if("string"==typeof t)return _arrayLikeToArray(t,r);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return _arrayLikeToArray(t,r)}(t))||r&&t&&"number"==typeof t.length){a&&(t=a);var c=0,o=function F(){};return{s:o,n:function n(){return c>=t.length?{done:!0}:{done:!1,value:t[c++]}},e:function e(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,u=!1;return{s:function s(){a=a.call(t)},n:function n(){var t=a.next();return l=t.done,t},e:function e(t){u=!0,i=t},f:function f(){try{l||null==a.return||a.return()}finally{if(u)throw i}}}}function _arrayLikeToArray(t,r){(null==r||r>t.length)&&(r=t.length);for(var a=0,c=new Array(r);a<r;a++)c[a]=t[a];return c}function ObjectivePanel_ownKeys(t,r){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);r&&(c=c.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),a.push.apply(a,c)}return a}function ObjectivePanel_objectSpread(t){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?ObjectivePanel_ownKeys(Object(a),!0).forEach((function(r){Object(c.a)(t,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):ObjectivePanel_ownKeys(Object(a)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(a,r))}))}return t}var Ne=function getNextIncompleteTask(t,r){for(var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,c=a;c<t.length;c+=1){var o=t[c];if(!r.checklist[o.task_key])return o.task_key}},ze=function ObjectivePanel(t){var r=t.presenter,a=t.broadcast,o=r.project,i=r.contentParentTitle,l=r.progress,k=Object(p.useState)({}),m=Object(u.a)(k,2),j=m[0],h=m[1],O=Object(p.useState)(!1),y=Object(u.a)(O,2),v=y[0],_=y[1],E=Object(p.useState)(""),C=Object(u.a)(E,2),w=C[0],T=C[1],x=useTaskChecklist(o,l).count,S=de(),P=S.trackExpandAllTasksClick,I=S.trackCollapseAllTasksClick,D=S.trackTaskCompletionClick,B=Object(b.useDispatch)(),R=o.projectInformation.self_assessments.flatMap((function(t){return t.tasks})),L=Object(p.useMemo)((function(){return R.reduce((function(t,r,a){return t[r.task_key]=a,t}),{})}),[R]);Object(p.useEffect)((function(){if("project"===(null==l?void 0:l.type)&&null!=l&&l.checklist&&!w){var t=Ne(R,l);t&&(T(t),h((function(r){return ObjectivePanel_objectSpread(ObjectivePanel_objectSpread({},r),{},Object(c.a)({},t,!0))})))}}),[l,R,w,x]);var A=Object(p.useCallback)((function(t,r){h((function(a){return ObjectivePanel_objectSpread(ObjectivePanel_objectSpread({},a),{},Object(c.a)({},t,r))}))}),[]),H=Object(p.useCallback)((function(t){var r=t.taskKey,i=t.taskIndex,u=t.isComplete,p=t.trackingTarget;if(B(Object(g.d)(o,r,u,{context:"objective"})),D(p),u){((null==x?void 0:x.complete)||0)<1&&(a("start"),B(Object(g.c)(o)));var d=Object(c.a)({},r,!1),b=Ne(R,l,i+1);b&&(d[b]=!0,T(b)),h((function(t){return ObjectivePanel_objectSpread(ObjectivePanel_objectSpread({},t),d)}))}}),[o,l,B,R,null==x?void 0:x.complete,a,D]),N=Object(p.useCallback)((function(t){var r,a={},c=_createForOfIteratorHelper(R);try{for(c.s();!(r=c.n()).done;){a[r.value.task_key]=t}}catch(t){c.e(t)}finally{c.f()}h(a),_(t),t?P():I()}),[R,P,I]);return d.a.createElement(he,{contentTitle:i},d.a.createElement(Oe,{sectionTitle:o.title,sectionDescription:r.project.projectInformation.objective,descriptionIsMarkdown:!0},d.a.createElement(ye.a,{variant:"inline",onClick:function onClick(){return N(!v)},my:16},v?"Collapse all tasks":"Expand all tasks")),d.a.createElement(ve.a,{variant:"plain"},o.projectInformation.self_assessments.map((function(t){return d.a.createElement(He,{completeOrIncompleteTask:H,expandOrCollapseTask:A,expandedTasks:j,key:"".concat(t.tasks[0].task_key,"-group"),taskGroup:t,progress:l,projectTaskIndices:L})}))))},Ke=a("PGlZ"),We=a("qvL1"),Fe=function DownloadButton(t){var r=t.project,a=Object(b.useSelector)(_.W),c=de().trackDownloadCodeClick,o=r.slug,i=r.title,l=r.projectInformation.download_path;return d.a.createElement(X.b,{href:l,onClick:function trackDownload(){Object(te.b)("user","email_trigger",{content_item_name:i,content_item_id:o,type:"ipp_start_download"}),c()},"data-testid":"download-btn",disabled:!a},"Download")},Me=function DownloadSection(t){var r=t.project,a=Object(Ke.a)(),c=a.inView,o=a.ref,i=de().trackDownloadCodeImpression;return Object(p.useEffect)((function(){c&&i()}),[i,c]),d.a.createElement(Oe,{sectionTitle:We.download_section.title,sectionDescription:We.download_section.description,ref:o},d.a.createElement(Fe,{project:r}))},Ge=a("xskg"),Ue=a("DUW3"),qe=a("DRny"),Ve=a("b0K7"),Qe=a("dcaa"),Ze=a("c2gB"),Ye=a("qwNl"),Je=a("Ff2n"),Xe=["isExpanded","renderExpanded"],$e=function MoreHelpItemWrapper(t){var r=t.isExpanded,a=t.renderExpanded,c=Object(Je.a)(t,Xe);return a?d.a.createElement(ve.d,Object(ie.a)({expanded:Boolean(r),renderExpanded:a},c)):d.a.createElement(ve.d,c)},et=function MoreHelpItem(t){var r=t.IconComponent,a=t.problemText,c=t.linkText,o=t.linkHref,i=t.onClick,l=t.openInNewWindow,b=t.renderExpanded,k=Object(p.useState)(!1),m=Object(u.a)(k,2),j=m[0],h=m[1];return d.a.createElement($e,{isExpanded:j,renderExpanded:b},d.a.createElement(ve.b,{size:"xl",fill:!0},d.a.createElement(r,{"aria-hidden":!0,mr:12})," ",d.a.createElement(je.a,{mr:8},a),d.a.createElement(ye.a,{display:"flex",href:o,onClick:b?function(){return h(!j)}:i,target:l?"_blank":"_self"},"".concat(c," "),l&&d.a.createElement(Ye.a,{alignSelf:"flex-start",size:18,ml:12}))))},tt=function MoreHelpSection(){var t=Object(b.useSelector)(_.K),r=Object(b.useSelector)(_.P),a=Object(b.useSelector)(_.E),c=de(),o=c.trackForumLinkClick,i=c.trackCheatsheetClick,l=c.trackGeneralFAQClick,k=Object(p.useState)(!1),m=Object(u.a)(k,2),j=m[0],h=m[1],O=Object(Ze.b)(),y=Object(u.a)(O,2),v=y[0],g=y[1].resetWorkspace,E=[{IconComponent:Ge.a,problemText:"Can't find your question here?",linkText:"Check the Forums",linkHref:Ve.db,onClick:function onClick(){o()},openInNewWindow:!0,key:"forums"},{IconComponent:Ue.a,problemText:"Cheatsheet:",linkText:"".concat(null==r?void 0:r.title,": ").concat(null==a?void 0:a.title),linkHref:t,onClick:function onClick(){i()},openInNewWindow:!0,key:"cheatsheet"},{IconComponent:qe.a,problemText:"Have general questions?",linkText:"See our FAQ",linkHref:Ve.jb,onClick:function onClick(){l()},openInNewWindow:!0,key:"faq"}];return d.a.createElement(Oe,{sectionTitle:"More help",sectionDescription:"Still stuck? Explore some resources that may help."},d.a.createElement(ve.a,{variant:"plain"},E.map((function(t){return d.a.createElement(et,t)}))),d.a.createElement(Qe.a,{isOpen:j,handleClose:function handleClose(){return h(!1)},handleReset:function handleReset(){return v?g():null}}))},nt=a("eC1V"),rt=Object(J.a)(nt.a,{target:"e1u1h47t0",label:"WalkthroughVideo"})(Object($.i)({width:"100%"}),""),at=function WalkthroughSection(t){var r=t.videoUrl,a=de(),c=a.trackWalkthroughVideoImpression,o=a.trackWalkthroughVideoPlayClick,i=a.trackWalkthroughVideoNewTabClick,l=Object(Ke.a)(),u=l.inView,b=l.ref;return Object(p.useEffect)((function(){u&&c()}),[c,u]),d.a.createElement(Oe,{sectionTitle:We.walkthrough_section.title,sectionDescription:We.walkthrough_section.description,ref:b},d.a.createElement(rt,{videoUrl:r,videoTitle:We.walkthrough_section.title,onPlay:function onPlay(){return o()}}),d.a.createElement(ye.a,{target:"_blank",display:"flex",href:r,mt:16,onClick:function onClick(){return i()}},"Open video in separate window"," ",d.a.createElement(Ye.a,{alignSelf:"flex-start",size:18,ml:12})))},ct=function ResourcePadding(t){var r=t.children;return r?d.a.createElement(R.a,{mb:16},r):null},ot=function ResourcesPanel(t){var r=t.presenter,a=r.project,c=r.contentParentTitle,o=r.contentItemTitle,i=a.projectInformation,l=i.video_url,u=i.download_path,p=o||c;return d.a.createElement(he,{contentTitle:p},d.a.createElement(ct,null,l&&d.a.createElement(at,{videoUrl:l})),d.a.createElement(ct,null,u&&d.a.createElement(Me,{project:a})),d.a.createElement(tt,null))},it=function ProjectNarrative(t){var r=Object(ie.a)({},t);v();var a=de(),c=a.trackObjectiveTabClick,o=a.trackResourcesTabClick;return d.a.createElement(me,{onTabChange:function onTabChange(t){0===t&&c(),1===t&&o()}},d.a.createElement(ze,r),d.a.createElement(ot,r))},lt=a("yy36"),st=a("w1aO");function ProjectBrief_ownKeys(t,r){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);r&&(c=c.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),a.push.apply(a,c)}return a}function ProjectBrief_objectSpread(t){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?ProjectBrief_ownKeys(Object(a),!0).forEach((function(r){Object(c.a)(t,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):ProjectBrief_ownKeys(Object(a)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(a,r))}))}return t}var ut=function ProjectBrief(t){var r=t.config,a=Object(b.useSelector)(_.v),c=Object(b.useSelector)(_.L),o=Object(b.useSelector)(_.P),m=Object(b.useSelector)(lt.bb),j=Object(b.useSelector)(lt.ab),h=Object(p.useState)(m),O=Object(u.a)(h,2),y=O[0],v=O[1],g=Object(p.useState)(!0),E=Object(u.a)(g,2),C=E[0],w=E[1];Object(p.useEffect)((function(){!y&&j?function(){var t=Object(l.a)(i.a.mark((function _callee(){var t;return i.a.wrap((function _callee$(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(k.a)(st.a.ProjectRedesign);case 2:t=r.sent,v(t),w(!1);case 5:case"end":return r.stop()}}),_callee)})));return function fetchVariant(){return t.apply(this,arguments)}}()():w(!1)}),[w,j,y]);var T=Object(p.useMemo)((function(){var t,i;return{presenter:ProjectBrief_objectSpread(ProjectBrief_objectSpread({},r),{},{contentParentTitle:c?c.title:null==o?void 0:o.title,progress:a}),broadcast:function broadcast(){},modifiers:{assessments:null==r||null===(t=r.project)||void 0===t||null===(i=t.projectInformation)||void 0===i?void 0:i.self_assessments}}}),[r,a,c,o]);return C?null:"variant"===y?d.a.createElement(it,T):d.a.createElement(oe,T)};r.default=ut},qvL1:function(t){t.exports=JSON.parse('{"download_section":{"title":"Download Code","description":"If you choose to do this project on your computer instead of Codecademy, you can download what you’ll need by clicking the“Download” button below."},"walkthrough_section":{"title":"Project Walkthrough","description":"If you get stuck during this project or would like to see an experienced developer work through the project, watch the following project walkthrough video."}}')}}]);
//# sourceMappingURL=LayoutComponents-ProjectBrief~1448bf7c.ca91f0e65198fd59139a.chunk.js.map