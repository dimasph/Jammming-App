(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[207],{"6lR+":function(e,r,t){"use strict";t.d(r,"a",(function(){return te}));var o,n=t("mwIZ"),i=t.n(n),s=t("gZmR"),a=t("q1tI"),u=t.n(a),l=t("/MKj"),c=t("F5JB"),p=t("OM6p"),d=t("n3n2"),y=t("cdKJ"),m=t("2oex"),v=t("yy36"),h=t("rePB");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){Object(h.a)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var f="grid",C="one_pane",T="two_pane_col",P="two_pane_row",b="three_pane_col",O="three_pane_col_right",A="three_pane_row",S="CodeEditor",g="ExpoCodeEditor",E="ExpoPreview",N="Narrative",q="OutputTerminal",k="SandboxOutputTerminal",j="Preview",w="ReadOnlyCodeEditor",R="ReplTerminal",_="SandboxCodeEditor",L="SQLPreview",x="Terminal",B="Visual",V="PersistentCodeEditor",W="Brief",D="WebBrowser",Q="Image",Y="Video",K=(o={},Object(h.a)(o,V,S),Object(h.a)(o,W,N),Object(h.a)(o,D,j),Object(h.a)(o,Q,B),Object(h.a)(o,Y,B),o),I={"CodeEditor--Narrative--Preview--ReadOnlyCodeEditor":{layoutType:f,layoutProps:{gridType:A,narrativeComp:N,firstComp:S,secondComp:w,thirdComp:j}},"CodeEditor--Narrative--OutputTerminal--ReadOnlyCodeEditor":{layoutType:f,layoutProps:{gridType:A,narrativeComp:N,firstComp:S,secondComp:w,thirdComp:q}},"CodeEditor--Narrative--ReadOnlyCodeEditor--Terminal":{layoutType:f,layoutProps:{gridType:A,narrativeComp:N,firstComp:S,secondComp:w,thirdComp:x}},"CodeEditor--Narrative--OutputTerminal--Preview":{layoutType:f,layoutProps:{gridType:b,narrativeComp:N,firstComp:S,secondComp:q,thirdComp:j}},"CodeEditor--Narrative--Preview--Terminal":{layoutType:f,layoutProps:{gridType:b,narrativeComp:N,firstComp:S,secondComp:x,thirdComp:j}},"CodeEditor--Narrative--OutputTerminal--Terminal":{layoutType:f,layoutProps:{gridType:O,narrativeComp:N,firstComp:S,secondComp:q,thirdComp:x}},"CodeEditor--Narrative--OutputTerminal--Visual":{layoutType:f,layoutProps:{gridType:b,narrativeComp:N,firstComp:S,secondComp:q,thirdComp:B}},"CodeEditor--Narrative--Terminal--Visual":{layoutType:f,layoutProps:{gridType:b,narrativeComp:N,firstComp:S,secondComp:x,thirdComp:B}},"CodeEditor--Narrative--ReadOnlyCodeEditor":{layoutType:f,layoutProps:{gridType:T,narrativeComp:N,firstComp:S,secondComp:w}},"CodeEditor--Narrative--Preview":{layoutType:f,layoutProps:{gridType:T,narrativeComp:N,firstComp:S,secondComp:j}},"CodeEditor--Narrative--Visual":{layoutType:f,layoutProps:{gridType:T,narrativeComp:N,firstComp:S,secondComp:B}},"CodeEditor--Narrative--OutputTerminal":{layoutType:f,layoutProps:{gridType:T,narrativeComp:N,firstComp:S,secondComp:q}},"CodeEditor--Narrative--Terminal":{layoutType:f,layoutProps:{gridType:T,narrativeComp:N,firstComp:S,secondComp:x}},"CodeEditor--Narrative--SQLPreview":{layoutType:f,layoutProps:{gridType:T,narrativeComp:N,firstComp:S,secondComp:L}},"Narrative--Preview--Visual":{layoutType:f,layoutProps:{gridType:T,narrativeComp:N,firstComp:j,secondComp:B}},"Narrative--OutputTerminal--Preview":{layoutType:f,layoutProps:{gridType:T,narrativeComp:N,firstComp:q,secondComp:j}},"Narrative--Preview--Terminal":{layoutType:f,layoutProps:{gridType:T,narrativeComp:N,firstComp:x,secondComp:j}},"Narrative--OutputTerminal--Visual":{layoutType:f,layoutProps:{gridType:P,narrativeComp:N,firstComp:B,secondComp:q}},"Narrative--Terminal--Visual":{layoutType:f,layoutProps:{gridType:P,narrativeComp:N,firstComp:B,secondComp:x}},"CodeEditor--Narrative":{layoutType:f,layoutProps:{gridType:C,narrativeComp:N,firstComp:S}},"Narrative--Preview":{layoutType:f,layoutProps:{gridType:C,narrativeComp:N,firstComp:j}},"Narrative--OutputTerminal":{layoutType:f,layoutProps:{gridType:C,narrativeComp:N,firstComp:q}},"Narrative--Terminal":{layoutType:f,layoutProps:{gridType:C,narrativeComp:N,firstComp:x}},"Narrative--Visual":{layoutType:f,layoutProps:{gridType:C,narrativeComp:N,firstComp:B}},"Narrative--SQLPreview":{layoutType:f,layoutProps:{gridType:C,narrativeComp:N,firstComp:L}},"ExpoCodeEditor--ExpoPreview--Narrative":{layoutType:f,layoutProps:{gridType:T,narrativeComp:N,firstComp:g,secondComp:E}},Preview:{layoutType:f,layoutProps:{gridType:C,firstComp:j}},"Preview--SandboxCodeEditor":{layoutType:f,layoutProps:{gridType:T,firstComp:_,secondComp:j}},"ReplTerminal--SandboxCodeEditor":{layoutType:f,layoutProps:{gridType:T,firstComp:_,secondComp:R}},"SandboxCodeEditor--SandboxOutputTerminal":{layoutType:f,layoutProps:{gridType:T,firstComp:_,secondComp:k}},"SandboxCodeEditor--Terminal":{layoutType:f,layoutProps:{gridType:T,firstComp:_,secondComp:x}},"SandboxCodeEditor--SandboxOutputTerminal--Terminal":{layoutType:f,layoutProps:{gridType:O,firstComp:_,secondComp:k,thirdComp:x}},"ReplTerminal--SandboxCodeEditor--SandboxOutputTerminal":{layoutType:f,layoutProps:{gridType:O,firstComp:_,secondComp:k,thirdComp:R}},default:{layoutType:f,layoutProps:{gridType:C,narrativeComp:N,firstComp:null}}};function mapComponentsToLayoutConfig(e){var r=Object.keys(e),t=function buildCompString(e){return e.map((function(e){return K[e]||e})).sort().join("--")}(r);return function reverseConfigAliases(e,r){var t=Object.keys(e.layoutProps),o=Object.values(e.layoutProps),n=_objectSpread(_objectSpread({},e),{},{layoutProps:_objectSpread({},e.layoutProps)});return r.filter((function(e){return!o.includes(e)})).forEach((function(e){var r=K[e],i=o.indexOf(r),s=t[i];n.layoutProps[s]=e})),n}(I[t]||I.default,r)}var G=t("R/ly"),M=t("V9qV"),X=t("z9go"),Z=t("R/8o"),z=t("QiT0"),F=t("/mqS"),H=t("jY6L"),J=t("6jKE"),U=function LearningComponentBuilder(e){var r=e.availableComponents,t=e.slotPath,o=e.name,n=e.shouldShowCheckWorkButton,i=e.shouldPreventCheckpointsOnTerminalCommand,s=e.showErrors,c=Object(Z.b)().receiveActiveSlotPath,p=Object(l.useSelector)(H.c),d=Object(a.useCallback)((function(){c(t),Object(X.c)({target:"toggle_le_fullscreen",slug:t.toString(),page_name:p})}),[t,p,c]),y=r[o];if(null==y||!y.type)return null;var m=z.a[y.type];return u.a.createElement(J.a,{componentName:o,slotPath:t},u.a.createElement(m,{shouldShowCheckWorkButton:Boolean(n),config:y,shouldPreventCheckpointsOnTerminalCommand:Boolean(i),toggleFullScreen:d}),s&&u.a.createElement(F.a,null))},$=function GridManager(e){var r=e.layoutProps,t=r.gridType,o=r.narrativeComp,n=r.firstComp,i=r.secondComp,s=r.thirdComp,a=e.components,l=e.shouldShowCheckWorkButton,c=e.shouldPreventCheckpointsOnTerminalCommand,p=e.hideErrors,d=void 0!==p&&p,y=function buildLearningComponent(e,r){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return u.a.createElement(U,{availableComponents:a,slotPath:e,name:r,shouldShowCheckWorkButton:l,shouldPreventCheckpointsOnTerminalCommand:c,showErrors:t})};return u.a.createElement(M.a,{gridType:t,narrativePane:o&&y([G.a.narrative],o),firstPane:function firstPane(e){return y(e,n,!d)},secondPane:function secondPane(e){return y(e,i)},slotPath:[G.a.root],thirdPane:function thirdPane(e){return y(e,s)}})},ee=function LayoutManager(e){var r=e.components,t=e.shouldShowCheckWorkButton,o=e.shouldPreventCheckpointsOnTerminalCommand,n=e.hideErrors,i=void 0!==n&&n,s=mapComponentsToLayoutConfig(r),a=s.layoutType,l=s.layoutProps;return"grid"!==a?null:u.a.createElement($,{layoutProps:l,components:r,shouldShowCheckWorkButton:t,shouldPreventCheckpointsOnTerminalCommand:o,hideErrors:i})},re="componentGrid__29fptvG6AAmYFk12IG1e55",te=function LearningEnvironmentMain(e){var r=e.components,t=e.hideErrors,o=void 0!==t&&t,n=e.title,a=function shouldPreventCheckpointsOnTerminalCommand(){return!0===i()(r.Terminal,"prevent_checkpoint_run")};return function useAuthoringShortcuts(){var e=Object(l.useDispatch)(),r=Object(l.useSelector)(m.l),t=Object(l.useSelector)(m.x),o=Object(l.useSelector)(v.y);Object(p.a)("ctrl+space",(function(){o&&Object(c.a)(r)})),Object(p.a)("ctrl+m",(function(){o&&e(Object(d.c)())})),Object(p.a)("ctrl+s",(function(){t&&o&&e(Object(y.c)())}))}(),u.a.createElement("div",{className:re},n&&u.a.createElement(s.a,{as:"h1"},n),u.a.createElement(ee,{components:r,shouldShowCheckWorkButton:function shouldShowCheckWorkButton(){return a()&&(!r.PersistentCodeEditor||!0===i()(r.PersistentCodeEditor,"no_run_button"))}(),shouldPreventCheckpointsOnTerminalCommand:a(),hideErrors:o}))}},QiT0:function(e,r,t){"use strict";t.d(r,"a",(function(){return i}));var o=t("MKeS"),n=Object(o.a)({resolved:{},chunkName:function chunkName(){return"LayoutComponents-PersistentCodeEditor"},isReady:function isReady(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!t.m[r]},importAsync:function importAsync(){return Promise.all([t.e(51),t.e(66),t.e(76),t.e(89),t.e(50),t.e(74),t.e(88),t.e(314),t.e(334)]).then(t.bind(null,"8nqx"))},requireAsync:function requireAsync(e){var r=this,t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((function(e){return r.resolved[t]=!0,e}))},requireSync:function requireSync(e){var r=this.resolve(e);return t(r)},resolve:function resolve(){return"8nqx"}}),i={Brief:Object(o.a)({resolved:{},chunkName:function chunkName(){return"LayoutComponents-ProjectBrief"},isReady:function isReady(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!t.m[r]},importAsync:function importAsync(){return Promise.all([t.e(10),t.e(33),t.e(138),t.e(141),t.e(43),t.e(275),t.e(335)]).then(t.bind(null,"8YOW"))},requireAsync:function requireAsync(e){var r=this,t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((function(e){return r.resolved[t]=!0,e}))},requireSync:function requireSync(e){var r=this.resolve(e);return t(r)},resolve:function resolve(){return"8YOW"}}),ExpoCodeEditor:n,ExpoPreview:Object(o.a)({resolved:{},chunkName:function chunkName(){return"LayoutComponents-ExpoReactNativePreview"},isReady:function isReady(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!t.m[r]},importAsync:function importAsync(){return Promise.all([t.e(479),t.e(50),t.e(70),t.e(331)]).then(t.bind(null,"kIVY"))},requireAsync:function requireAsync(e){var r=this,t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((function(e){return r.resolved[t]=!0,e}))},requireSync:function requireSync(e){var r=this.resolve(e);return t(r)},resolve:function resolve(){return"kIVY"}}),Image:Object(o.a)({resolved:{},chunkName:function chunkName(){return"LayoutComponents-Image"},isReady:function isReady(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!t.m[r]},importAsync:function importAsync(){return Promise.all([t.e(279),t.e(332)]).then(t.bind(null,"D4LY"))},requireAsync:function requireAsync(e){var r=this,t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((function(e){return r.resolved[t]=!0,e}))},requireSync:function requireSync(e){var r=this.resolve(e);return t(r)},resolve:function resolve(){return"D4LY"}}),Narrative:Object(o.a)({resolved:{},chunkName:function chunkName(){return"ExerciseNarrative"},isReady:function isReady(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!t.m[r]},importAsync:function importAsync(){return t.e(326).then(t.bind(null,"TQgb"))},requireAsync:function requireAsync(e){var r=this,t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((function(e){return r.resolved[t]=!0,e}))},requireSync:function requireSync(e){var r=this.resolve(e);return t(r)},resolve:function resolve(){return"TQgb"}}),OutputTerminal:Object(o.a)({resolved:{},chunkName:function chunkName(){return"LayoutComponents-OutputTerminal"},isReady:function isReady(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!t.m[r]},importAsync:function importAsync(){return Promise.all([t.e(50),t.e(69),t.e(82)]).then(t.bind(null,"zrGY"))},requireAsync:function requireAsync(e){var r=this,t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((function(e){return r.resolved[t]=!0,e}))},requireSync:function requireSync(e){var r=this.resolve(e);return t(r)},resolve:function resolve(){return"zrGY"}}),PersistentCodeEditor:n,ReadOnlyCodeEditor:Object(o.a)({resolved:{},chunkName:function chunkName(){return"LayoutComponents-ReadOnlyCodeEditor"},isReady:function isReady(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!t.m[r]},importAsync:function importAsync(){return t.e(336).then(t.bind(null,"Vy33"))},requireAsync:function requireAsync(e){var r=this,t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((function(e){return r.resolved[t]=!0,e}))},requireSync:function requireSync(e){var r=this.resolve(e);return t(r)},resolve:function resolve(){return"Vy33"}}),ReplTerminal:Object(o.a)({resolved:{},chunkName:function chunkName(){return"LayoutComponents-ReplTerminal"},isReady:function isReady(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!t.m[r]},importAsync:function importAsync(){return Promise.all([t.e(62),t.e(75),t.e(337)]).then(t.bind(null,"XAD/"))},requireAsync:function requireAsync(e){var r=this,t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((function(e){return r.resolved[t]=!0,e}))},requireSync:function requireSync(e){var r=this.resolve(e);return t(r)},resolve:function resolve(){return"XAD/"}}),SandboxCodeEditor:Object(o.a)({resolved:{},chunkName:function chunkName(){return"LayoutComponents-SandboxCodeEditor"},isReady:function isReady(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!t.m[r]},importAsync:function importAsync(){return Promise.all([t.e(129),t.e(194),t.e(250)]).then(t.bind(null,"5T2n"))},requireAsync:function requireAsync(e){var r=this,t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((function(e){return r.resolved[t]=!0,e}))},requireSync:function requireSync(e){var r=this.resolve(e);return t(r)},resolve:function resolve(){return"5T2n"}}),SandboxOutputTerminal:Object(o.a)({resolved:{},chunkName:function chunkName(){return"LayoutComponents-OutputTerminal-SandboxOutputTerminal"},isReady:function isReady(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!t.m[r]},importAsync:function importAsync(){return Promise.all([t.e(50),t.e(69),t.e(333)]).then(t.bind(null,"f8lt"))},requireAsync:function requireAsync(e){var r=this,t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((function(e){return r.resolved[t]=!0,e}))},requireSync:function requireSync(e){var r=this.resolve(e);return t(r)},resolve:function resolve(){return"f8lt"}}),SQLPreview:Object(o.a)({resolved:{},chunkName:function chunkName(){return"LayoutComponents-SQLPreview"},isReady:function isReady(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!t.m[r]},importAsync:function importAsync(){return Promise.all([t.e(50),t.e(70),t.e(83)]).then(t.bind(null,"vQS+"))},requireAsync:function requireAsync(e){var r=this,t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((function(e){return r.resolved[t]=!0,e}))},requireSync:function requireSync(e){var r=this.resolve(e);return t(r)},resolve:function resolve(){return"vQS+"}}),Terminal:Object(o.a)({resolved:{},chunkName:function chunkName(){return"Terminal-TerminalContainer"},isReady:function isReady(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!t.m[r]},importAsync:function importAsync(){return Promise.all([t.e(62),t.e(75),t.e(80),t.e(84)]).then(t.bind(null,"exLW"))},requireAsync:function requireAsync(e){var r=this,t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((function(e){return r.resolved[t]=!0,e}))},requireSync:function requireSync(e){var r=this.resolve(e);return t(r)},resolve:function resolve(){return"exLW"}}),Video:Object(o.a)({resolved:{},chunkName:function chunkName(){return"LayoutComponents-Video"},isReady:function isReady(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!t.m[r]},importAsync:function importAsync(){return t.e(338).then(t.bind(null,"ZX/S"))},requireAsync:function requireAsync(e){var r=this,t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((function(e){return r.resolved[t]=!0,e}))},requireSync:function requireSync(e){var r=this.resolve(e);return t(r)},resolve:function resolve(){return"ZX/S"}}),WebBrowser:Object(o.a)({resolved:{},chunkName:function chunkName(){return"platform-components-WebBrowser-WebBrowserContainer"},isReady:function isReady(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!t.m[r]},importAsync:function importAsync(){return Promise.all([t.e(1),t.e(51),t.e(62),t.e(66),t.e(76),t.e(511),t.e(70),t.e(74),t.e(80),t.e(314),t.e(373)]).then(t.bind(null,"mf31"))},requireAsync:function requireAsync(e){var r=this,t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((function(e){return r.resolved[t]=!0,e}))},requireSync:function requireSync(e){var r=this.resolve(e);return t(r)},resolve:function resolve(){return"mf31"}})}}}]);
//# sourceMappingURL=207.034186816cf9576c0ed9.chunk.js.map