(this["webpackJsonpmult-table"]=this["webpackJsonpmult-table"]||[]).push([[0],[,,function(e,t,a){e.exports={display:"Display_display__1fcWn",status_panel:"Display_status_panel__3SD93",status_item:"Display_status_item__2cddK",status_item_none:"Display_status_item_none__1GiBT",status_item_ok:"Display_status_item_ok__c_9wv",status_item_failed:"Display_status_item_failed__INNj4",battery_count:"Display_battery_count__2D8cL",main_panel:"Display_main_panel__28tqZ",main_panel_button:"Display_main_panel_button__2rFAY"}},function(e,t,a){e.exports={wrapper:"BatteryPanel_wrapper__Y0HB4",top_panel:"BatteryPanel_top_panel__1PMSi",battery_icon:"BatteryPanel_battery_icon__j4KuA",body:"BatteryPanel_body__dPvCu",charged_battery:"BatteryPanel_charged_battery__HxiJ1",charged_battery__charged_element:"BatteryPanel_charged_battery__charged_element__C1vzq",charged_battery__empty_element:"BatteryPanel_charged_battery__empty_element__244i0"}},function(e,t,a){e.exports={page:"MultTableApp_page__23eUV",header:"MultTableApp_header__2ibU3",content:"MultTableApp_content__1ohzG",profile:"MultTableApp_profile__20P06",footer:"MultTableApp_footer__2gv8o"}},function(e,t,a){e.exports={wrapper:"InputPanel_wrapper__1M7tG",left_panel:"InputPanel_left_panel__1X2je",right_panel:"InputPanel_right_panel__2fxxV",center_panel:"InputPanel_center_panel__34aGZ"}},function(e,t,a){e.exports={wrapper:"AnswersDisplay_wrapper__H-unZ",title:"AnswersDisplay_title__2WjH-",body:"AnswersDisplay_body__OtlX-",body_wrong:"AnswersDisplay_body_wrong__3j8__"}},function(e,t,a){e.exports={wrapper:"KeyBoard_wrapper__1GzAe",button:"KeyBoard_button__3dzeH"}},,,,function(e,t,a){e.exports=a.p+"static/media/battery.bfda37f0.png"},function(e,t,a){e.exports={wrapper:"AnswersPannel_wrapper__2N5jD"}},function(e,t,a){e.exports=a.p+"static/media/robot.8a24d45a.png"},,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),c=a.n(l),s=(a(20),a(21),a(1)),o=a(8),i=a(14),_=a(5),u=a.n(_),m=a(7),p=a.n(m),b=function(e){var t=e.onKeyClicked,a=function(e){var a=e.target.value;t(a)},n=["1","2","3","4","5","6","7","8","9","del","0","Ok"].map((function(e){return r.a.createElement("button",{key:e,className:p.a.button,onClick:a,value:e},e)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:p.a.wrapper},n))},d=a(11),f=a.n(d),y=a(3),v=a.n(y),g=function(e){var t=e.batteryCharge;return r.a.createElement("div",{className:v.a.charged_battery},function(){for(var e=[],a=90;a>=0;a-=10)a<t?e.push(r.a.createElement("div",{key:a,className:v.a.charged_battery__charged_element},"+")):e.push(r.a.createElement("div",{key:a,className:v.a.charged_battery__empty_element},"-"));return e}())},E=function(e){var t=e.batteryCount,a=e.batteryCharge;return r.a.createElement("div",{className:v.a.wrapper},r.a.createElement("div",{className:v.a.top_panel},t,r.a.createElement("img",{className:v.a.battery_icon,src:f.a})),r.a.createElement("div",{className:v.a.body},r.a.createElement(g,{batteryCharge:a})))},w=a(6),A=a.n(w),C=function(e){var t=e.title,a=e.answers,n=e.isWrong,l=a.map((function(e,t){return r.a.createElement("div",{key:t},e)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:A.a.wrapper},r.a.createElement("div",{className:A.a.title},t),r.a.createElement("div",{className:n?A.a.body_wrong:A.a.body},l)))},h=a(12),O=a.n(h),j=function(e){var t=e.wrongAnswers,a=e.goodAnswers;return r.a.createElement("div",{className:O.a.wrapper},r.a.createElement(C,{title:"\u041e\u0448\u0438\u0431\u043e\u0447\u043d\u044b\u0435 \u043e\u0442\u0432\u0435\u0442\u044b:",answers:t,isWrong:!0}),r.a.createElement(C,{title:"\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0435 \u043e\u0442\u0432\u0435\u0442\u044b:",answers:a,isWrong:!1}))},N=function(e){var t=e.wrongAnswers,a=e.goodAnswers,n=e.batteryCount,l=e.batteryCharge,c=e.onKeyClicked;return r.a.createElement("div",{className:u.a.wrapper},r.a.createElement("div",{className:u.a.left_panel},r.a.createElement(j,{wrongAnswers:t,goodAnswers:a})),r.a.createElement("div",{className:u.a.center_panel},r.a.createElement(b,{onKeyClicked:c})),r.a.createElement("div",{className:u.a.right_panel},r.a.createElement(E,{batteryCount:n,batteryCharge:l})))},B=a(2),S=a.n(B),k=function(e){var t=e.gameActive,a=e.startGame,n=e.a,l=e.b,c=e.result,s=e.answers,o=e.batteryCount,i=Object.keys(s).map((function(e){return r.a.createElement("div",{key:e,className:S.a.status_item+" "+(null===s[e].isCorrect?S.a.status_item_none:s[e].isCorrect?S.a.status_item_ok:S.a.status_item_failed)},e)}));return r.a.createElement("div",{className:S.a.display},r.a.createElement("div",{className:S.a.status_panel},i),r.a.createElement("div",{className:S.a.battery_count},o),r.a.createElement("div",{className:S.a.main_panel}," ",t?"".concat(n,"x").concat(l,"=").concat(c):r.a.createElement("button",{className:S.a.main_panel_button,onClick:a},"\u041d\u0430\u0447\u0430\u0442\u044c!")," "))},D=function(){var e=JSON.parse(localStorage.getItem("profile"));return null===e&&(e={profileData:{batteryCount:1,level:0}}),e},x=function(e,t){localStorage.setItem("profile",JSON.stringify({profileData:{batteryCount:e,level:t}}))},P=function(e){var t=K();G(t,e),M(t)},I=function(){for(var e=K(),t=[],a=0,n=0;a<10;){var r=e[n];n++,r.CorrectAnswers<2&&(t.push({A:r.A,B:r.B}),a++)}return t},M=function(e){localStorage.setItem("questionsStats",JSON.stringify(e))},K=function(){var e=JSON.parse(localStorage.getItem("questionsStats"));return null===e&&(e=J(),M(e)),e},G=function(e,t){e.forEach((function(e){for(var a=1;a<=10;a++){var n=t[a];e.A==n.A&&e.B==n.B&&n.isCorrect&&e.CorrectAnswers++}}))},J=function(){for(var e=[],t=2;t<=9;t++)for(var a=t;a<=9;a++)e.push({A:t,B:a,CorrectAnswers:0});return e},W=function(e){e.difficultyLevel;var t=e.batteryCount,a=e.incBatteryCount,l=Object(n.useState)([]),c=Object(s.a)(l,2),_=c[0],u=c[1],m=Object(n.useState)(2),p=Object(s.a)(m,2),b=p[0],d=p[1],f=Object(n.useState)(4),y=Object(s.a)(f,2),v=y[0],g=y[1],E=Object(n.useState)(8),w=Object(s.a)(E,2),A=w[0],C=w[1],h={1:{A:2,B:2,isCorrect:null},2:{A:2,B:2,isCorrect:null},3:{A:2,B:2,isCorrect:null},4:{A:2,B:2,isCorrect:null},5:{A:2,B:2,isCorrect:null},6:{A:2,B:2,isCorrect:null},7:{A:2,B:2,isCorrect:null},8:{A:2,B:2,isCorrect:null},9:{A:2,B:2,isCorrect:null},10:{A:2,B:2,isCorrect:null}},O=Object(n.useState)(h),j=Object(s.a)(O,2),B=j[0],S=j[1],D=Object(n.useState)(1),x=Object(s.a)(D,2),M=x[0],K=x[1],G=Object(n.useState)(!1),J=Object(s.a)(G,2),W=J[0],T=J[1],H=Object(n.useState)([]),q=Object(s.a)(H,2),z=q[0],F=q[1],L=Object(n.useState)([]),Z=Object(s.a)(L,2),U=Z[0],V=Z[1],X=Object(n.useState)(0),Y=Object(s.a)(X,2),$=Y[0],Q=Y[1];Object(n.useEffect)((function(){W||(null!=B[10].isCorrect&&P(B),u(I()))}),[W,B]);var R=function(e){var t="".concat(b,"x").concat(v,"=").concat(A),n=Object(i.a)({},B);n[M]={A:b,B:v,isCorrect:e},S(n);var r=M+1;e?(F([].concat(Object(o.a)(z),[t])),$+10===100?(a(),Q(0)):Q($+10)):(V([].concat(Object(o.a)(U),[t])),Q(0)),K(r),10==M?T(!1):e&&ee(r)},ee=function(e){var t,a;t=0,a=1,Math.round(Math.random()*(a-t)+t)?(d(_[e-1].A),g(_[e-1].B)):(d(_[e-1].B),g(_[e-1].A))};return r.a.createElement("div",{className:"mult-table"},r.a.createElement(k,{gameActive:W,startGame:function(){K(1),ee(1),S(h),C(""),T(!0),V([]),F([])},a:b,b:v,result:A,answers:B,batteryCount:t}),r.a.createElement(N,{wrongAnswers:U,goodAnswers:z,batteryCount:t,batteryCharge:$,onKeyClicked:function(e){if(W)switch(e){case"Ok":R(b*v==A),C("");break;case"del":C("");break;default:C(A+e)}}}))},T=a(4),H=a.n(T),q=function(){return r.a.createElement("header",null,"\u0422\u0440\u0435\u043d\u0430\u0436\u0435\u0440 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0443\u043c\u043d\u043e\u0436\u0435\u043d\u0438\u044f")},z=function(){return r.a.createElement("footer",null,"\u0423 \u0442\u0435\u0431\u044f \u0432\u0441\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0441\u044f!")},F=a(13),L=a.n(F),Z=function(e){var t=e.level;return r.a.createElement("div",null,r.a.createElement("div",null,"\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c: ",t),r.a.createElement("img",{className:"profile__img",src:L.a}))},U=function(){var e=Object(n.useState)(0),t=Object(s.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(0),o=Object(s.a)(c,2),i=o[0],_=o[1],u=Object(n.useState)(1),m=Object(s.a)(u,2),p=m[0],b=m[1];Object(n.useEffect)((function(){var e=D();_(e.profileData.batteryCount),b(e.profileData.level),l(1)}),[]);return r.a.createElement("div",{className:H.a.page},r.a.createElement("div",{className:H.a.header},r.a.createElement(q,null)),r.a.createElement("div",{className:H.a.content},r.a.createElement(W,{difficultyLevel:a,batteryCount:i,incBatteryCount:function(){var e=i+1;_(e),x(e,p)}})),r.a.createElement("div",{className:H.a.profile},r.a.createElement(Z,{level:p})),r.a.createElement("div",{className:H.a.footer},r.a.createElement(z,null)))};var V=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(U,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[15,1,2]]]);
//# sourceMappingURL=main.2f5aadb1.chunk.js.map