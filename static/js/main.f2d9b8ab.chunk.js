(this["webpackJsonpmult-table"]=this["webpackJsonpmult-table"]||[]).push([[0],{16:function(e,t,a){e.exports={wrapper:"KeyBoard_wrapper__1GzAe",button:"KeyBoard_button__3dzeH"}},26:function(e,t,a){e.exports={wrapper:"AnswersPannel_wrapper__2N5jD"}},3:function(e,t,a){e.exports={display:"Display_display__1fcWn",status_panel:"Display_status_panel__3SD93",status_item:"Display_status_item__2cddK",status_item_none:"Display_status_item_none__1GiBT",status_item_ok:"Display_status_item_ok__c_9wv",status_item_failed:"Display_status_item_failed__INNj4",progress_panel:"Display_progress_panel__2yt0R",progress_panel_left:"Display_progress_panel_left__130TM",progress_panel_right:"Display_progress_panel_right__29y-n",main_panel:"Display_main_panel__28tqZ",main_panel_button:"Display_main_panel_button__2rFAY"}},33:function(e,t,a){e.exports=a.p+"static/media/robot.8a24d45a.png"},35:function(e,t,a){e.exports=a(87)},40:function(e,t,a){},41:function(e,t,a){},5:function(e,t,a){e.exports={page:"MultTableApp_page__23eUV",header:"MultTableApp_header__2ibU3",content:"MultTableApp_content__1ohzG",profile:"MultTableApp_profile__20P06",footer:"MultTableApp_footer__2gv8o"}},6:function(e,t,a){e.exports={wrapper:"InputPanel_wrapper__1M7tG",left_panel:"InputPanel_left_panel__1X2je",right_panel:"InputPanel_right_panel__2fxxV",center_panel:"InputPanel_center_panel__34aGZ"}},7:function(e,t,a){e.exports={wrapper:"AnswersDisplay_wrapper__H-unZ",title:"AnswersDisplay_title__2WjH-",body:"AnswersDisplay_body__OtlX-",body_wrong:"AnswersDisplay_body_wrong__3j8__"}},87:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(25),s=a.n(l),c=(a(40),a(41),a(2)),o=a(17),i=a(34),u=a(6),_=a.n(u),p=a(16),m=a.n(p),f=function(e){var t=e.onKeyClicked,a=function(e){var a=e.target.value;t(a)},n=["1","2","3","4","5","6","7","8","9","del","0","Ok"].map((function(e){return r.a.createElement("button",{key:e,className:m.a.button,onClick:a,value:e},e)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:m.a.wrapper},n))},b=a(7),d=a.n(b),v=function(e){var t=e.title,a=e.answers,n=e.isWrong,l=a.map((function(e,t){return r.a.createElement("div",{key:t},e)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:d.a.wrapper},r.a.createElement("div",{className:d.a.title},t),r.a.createElement("div",{className:n?d.a.body_wrong:d.a.body},l)))},y=a(26),g=a.n(y),w=function(e){var t=e.wrongAnswers,a=e.goodAnswers;return r.a.createElement("div",{className:g.a.wrapper},r.a.createElement(v,{title:"\u041e\u0448\u0438\u0431\u043e\u0447\u043d\u044b\u0435 \u043e\u0442\u0432\u0435\u0442\u044b:",answers:t,isWrong:!0}),r.a.createElement(v,{title:"\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0435 \u043e\u0442\u0432\u0435\u0442\u044b:",answers:a,isWrong:!1}))},E=function(e){var t=e.wrongAnswers,a=e.goodAnswers,n=(e.batteryCount,e.batteryCharge,e.onKeyClicked);return r.a.createElement("div",{className:_.a.wrapper},r.a.createElement("div",{className:_.a.left_panel},r.a.createElement(w,{wrongAnswers:t,goodAnswers:a})),r.a.createElement("div",{className:_.a.center_panel},r.a.createElement(f,{onKeyClicked:n})),r.a.createElement("div",{className:_.a.right_panel}))},A=a(3),C=a.n(A),O=(a(42),a(89)),j=function(e){var t=e.gameActive,a=e.startGame,n=e.a,l=e.b,s=e.result,c=e.answers,o=e.batteryCount,i=e.batteryCharge,u=Object.keys(c).map((function(e){return r.a.createElement("div",{key:e,className:C.a.status_item+" "+(null===c[e].isCorrect?C.a.status_item_none:c[e].isCorrect?C.a.status_item_ok:C.a.status_item_failed)},e)}));return r.a.createElement("div",{className:C.a.display},r.a.createElement("div",{className:C.a.status_panel},u),r.a.createElement("div",{className:C.a.progress_panel},r.a.createElement("div",{className:C.a.progress_panel_left}),r.a.createElement("div",{className:C.a.progress_panel_right},r.a.createElement("span",null,r.a.createElement(O.a,{type:"circle",strokeWidth:15,showInfo:!1,percent:i,width:20})," ",o))),r.a.createElement("div",{className:C.a.main_panel}," ",t?"".concat(n,"x").concat(l,"=").concat(s):r.a.createElement("button",{className:C.a.main_panel_button,onClick:a},"\u041d\u0430\u0447\u0430\u0442\u044c!")," "))},h=function(){var e=JSON.parse(localStorage.getItem("profile"));return null===e&&(e={profileData:{batteryCount:1,level:0}}),e},N=function(e,t){localStorage.setItem("profile",JSON.stringify({profileData:{batteryCount:e,level:t}}))},B=function(e){var t=D();x(t,e),k(t)},S=function(){for(var e=D(),t=[],a=0,n=0;a<10;){var r=e[n];n++,r.CorrectAnswers<2&&(t.push({A:r.A,B:r.B}),a++)}return t},k=function(e){localStorage.setItem("questionsStats",JSON.stringify(e))},D=function(){var e=JSON.parse(localStorage.getItem("questionsStats"));return null===e&&(e=I(),k(e)),e},x=function(e,t){e.forEach((function(e){for(var a=1;a<=10;a++){var n=t[a];e.A==n.A&&e.B==n.B&&n.isCorrect&&e.CorrectAnswers++}}))},I=function(){for(var e=[],t=2;t<=9;t++)for(var a=t;a<=9;a++)e.push({A:t,B:a,CorrectAnswers:0});return e},M=function(e){e.difficultyLevel;var t=e.batteryCount,a=e.incBatteryCount,l=Object(n.useState)([]),s=Object(c.a)(l,2),u=s[0],_=s[1],p=Object(n.useState)(2),m=Object(c.a)(p,2),f=m[0],b=m[1],d=Object(n.useState)(4),v=Object(c.a)(d,2),y=v[0],g=v[1],w=Object(n.useState)(8),A=Object(c.a)(w,2),C=A[0],O=A[1],h={1:{A:2,B:2,isCorrect:null},2:{A:2,B:2,isCorrect:null},3:{A:2,B:2,isCorrect:null},4:{A:2,B:2,isCorrect:null},5:{A:2,B:2,isCorrect:null},6:{A:2,B:2,isCorrect:null},7:{A:2,B:2,isCorrect:null},8:{A:2,B:2,isCorrect:null},9:{A:2,B:2,isCorrect:null},10:{A:2,B:2,isCorrect:null}},N=Object(n.useState)(h),k=Object(c.a)(N,2),D=k[0],x=k[1],I=Object(n.useState)(1),M=Object(c.a)(I,2),W=M[0],G=M[1],K=Object(n.useState)(!1),T=Object(c.a)(K,2),J=T[0],P=T[1],q=Object(n.useState)([]),z=Object(c.a)(q,2),F=z[0],H=z[1],Z=Object(n.useState)([]),L=Object(c.a)(Z,2),U=L[0],V=L[1],X=Object(n.useState)(0),R=Object(c.a)(X,2),Y=R[0],$=R[1];Object(n.useEffect)((function(){J||(null!=D[10].isCorrect&&B(D),_(S()))}),[J,D]);var Q=function(e){var t="".concat(f,"x").concat(y,"=").concat(C),n=Object(i.a)({},D);n[W]={A:f,B:y,isCorrect:e},x(n);var r=W+1;e?(H([].concat(Object(o.a)(F),[t])),Y+10===100?(a(),$(0)):$(Y+10)):(V([].concat(Object(o.a)(U),[t])),$(0)),G(r),10==W?P(!1):e&&ee(r)},ee=function(e){var t,a;t=0,a=1,Math.round(Math.random()*(a-t)+t)?(b(u[e-1].A),g(u[e-1].B)):(b(u[e-1].B),g(u[e-1].A))};return r.a.createElement("div",{className:"mult-table"},r.a.createElement(j,{gameActive:J,startGame:function(){G(1),ee(1),x(h),O(""),P(!0),V([]),H([])},a:f,b:y,result:C,answers:D,batteryCount:t,batteryCharge:Y}),r.a.createElement(E,{wrongAnswers:U,goodAnswers:F,batteryCount:t,batteryCharge:Y,onKeyClicked:function(e){if(J)switch(e){case"Ok":Q(f*y==C),O("");break;case"del":O("");break;default:O(C+e)}}}))},W=a(5),G=a.n(W),K=function(){return r.a.createElement("header",null,"\u0422\u0440\u0435\u043d\u0430\u0436\u0435\u0440 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0443\u043c\u043d\u043e\u0436\u0435\u043d\u0438\u044f")},T=function(){return r.a.createElement("footer",null,"\u0423 \u0442\u0435\u0431\u044f \u0432\u0441\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0441\u044f!")},J=a(33),P=a.n(J),q=function(e){var t=e.level;return r.a.createElement("div",null,r.a.createElement("div",null,"\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c: ",t),r.a.createElement("img",{className:"profile__img",src:P.a}))},z=function(){var e=Object(n.useState)(0),t=Object(c.a)(e,2),a=t[0],l=t[1],s=Object(n.useState)(0),o=Object(c.a)(s,2),i=o[0],u=o[1],_=Object(n.useState)(1),p=Object(c.a)(_,2),m=p[0],f=p[1];Object(n.useEffect)((function(){var e=h();u(e.profileData.batteryCount),f(e.profileData.level),l(1)}),[]);return r.a.createElement("div",{className:G.a.page},r.a.createElement("div",{className:G.a.header},r.a.createElement(K,null)),r.a.createElement("div",{className:G.a.content},r.a.createElement(M,{difficultyLevel:a,batteryCount:i,incBatteryCount:function(){var e=i+1;u(e),N(e,m)}})),r.a.createElement("div",{className:G.a.profile},r.a.createElement(q,{level:m})),r.a.createElement("div",{className:G.a.footer},r.a.createElement(T,null)))};var F=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.f2d9b8ab.chunk.js.map