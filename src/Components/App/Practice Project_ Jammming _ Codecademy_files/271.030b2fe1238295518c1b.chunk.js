(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[271],{FsEs:function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var c=n("ODXe"),i=n("q1tI"),a=n.n(i),r=n("/MKj"),u=n("ubkB"),l=n("b0K7"),s=n("lzsc"),o=n("ZX4+"),d=n("2oex"),b=n("yy36"),_=n("hu42"),O=n("Rab/"),f=n("w1aO"),j=n("ZtC1"),S=function ContentInterstitialManager(){var e=Object(r.useSelector)(O.j),t=Object(l.J)(e),n=Object(r.useSelector)(d.hb),S=Object(r.useSelector)(d.kb),h=Object(r.useSelector)(b.P),v=Object(r.useSelector)(b.L),m=Object(r.useSelector)(b.u),w=Object(r.useSelector)(b.x),C=f.a.GoalBasedInterstitials,g=Object.keys(j.b).some((function(e){return e===m})),A=Object(r.useSelector)(o.a),E=Object(_.a)(C,!!v&&!!m&&g&&1===w),k=E.experimentAssignment,D=E.loading,L={id:C,assignment:k,loaded:!D},x=Object(u.useSelectorWith)(s.a,L),I=Object(i.useState)(null),p=Object(c.a)(I,2),H=p[0],K=p[1];Object(i.useEffect)((function(){D||null!==H||K(x)}),[D,x,H]),Object(i.useEffect)((function(){if(null!==H&&0===H.length){var e=(h||A?n:S)||t;window.location.assign(e)}}),[H,h,n,S,t,A]);var N=null==H?void 0:H[0];if(!N)return null;var B=j.f[N],y=Object(l.Hb)("school"===m?{planId:"proAnnualStudentV1a_7trial"}:{});return a.a.createElement(B,{trialCheckoutPath:y,handleNextClick:function handleNextClick(){K((null==H?void 0:H.slice(1))||[])},interstitialName:N})}},wMKF:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n("aCH8"),i=n.n(c),a=["assessment_id","content_item_id","exercise_id","learning_standard_id","module_id","path_id","review_card_id","track_id"],r=function getHashedContentId(e){if(e){var t=a.reduce((function concatenateIds(t,n){var c=e[n];return c&&(t+=c),t}),"");return i()(t)}}}}]);
//# sourceMappingURL=271.030b2fe1238295518c1b.chunk.js.map