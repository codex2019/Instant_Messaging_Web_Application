(this["webpackJsonpproject-final"]=this["webpackJsonpproject-final"]||[]).push([[0],{16:function(e,t,_){"use strict";_.d(t,"d",(function(){return r})),_.d(t,"b",(function(){return s})),_.d(t,"a",(function(){return c})),_.d(t,"c",(function(){return o}));var a=_(4),n=_.n(a),r=function(e){return{type:"UPDATE_MESSAGES",messages:e}},s=function(e){return{type:"INSERT_MESSAGE",message:e}},c=function(e){return{type:"UPDATE_TEXT",text:e}},o=function(){return function(e,t){var _={group:t().groupReducer.group._id,message:t().messageReducer.text};n.a.post("/messenger/postMessage",_,{withCredentials:!0}).then((function(){})).catch((function(e){return console.log(e)})),e(c(""))}}},17:function(e,t,_){"use strict";_.d(t,"d",(function(){return r})),_.d(t,"b",(function(){return s})),_.d(t,"a",(function(){return c})),_.d(t,"c",(function(){return o}));var a=_(4),n=_.n(a),r=function(e){return{type:"UPDATE_GROUPS",groups:e}},s=function(e){return{type:"INSERT_GROUP",newGroup:e}},c=function(e){return{type:"UPDATE_GROUP",group:e}},o=function(e){return function(t){n.a.post("/messenger/postGroup",e).then((function(e){t(c(e.data))})).catch((function(e){return console.log(e)}))}}},18:function(e,t,_){},41:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_macx_Desktop_final_project_superteam_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),axios__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),axios__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__),js_cookie__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9),js_cookie__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__),react_redux__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(23),_redux_actions_userActions__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(43),_redux_actions_messageActions__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(16),_redux_actions_groupActions__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(17),_App_css__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(18),_App_css__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_8__),Messenger=function Messenger(_ref){var dispatch=_ref.dispatch,isLoading=_ref.isLoading,text=_ref.text,currentGroup=_ref.currentGroup,groups=_ref.groups,messages=_ref.messages;react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect((function(){axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/users/verify",{withCredentials:!0}).then((function(e){console.log(e)})).catch((function(){window.location="/"})),axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/users/getUsers",{withCredentials:!0}).then((function(e){setUserList(e.data)})).catch((function(e){console.log(e)})),axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/messenger/getMessages",{withCredentials:!0}).then((function(e){dispatch(Object(_redux_actions_messageActions__WEBPACK_IMPORTED_MODULE_6__.d)(e.data))})).catch((function(e){console.log(e)})),axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/messenger/getGroups",{withCredentials:!0}).then((function(e){dispatch(Object(_redux_actions_groupActions__WEBPACK_IMPORTED_MODULE_7__.d)(e.data)),dispatch(Object(_redux_actions_userActions__WEBPACK_IMPORTED_MODULE_5__.a)(!1))})).catch((function(e){console.log(e)}))}),[dispatch]);var _React$useState=react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]),_React$useState2=Object(_Users_macx_Desktop_final_project_superteam_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_React$useState,2),userList=_React$useState2[0],setUserList=_React$useState2[1],_React$useState3=react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]),_React$useState4=Object(_Users_macx_Desktop_final_project_superteam_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_React$useState3,2),users=_React$useState4[0],setUsers=_React$useState4[1],_React$useState5=react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(""),_React$useState6=Object(_Users_macx_Desktop_final_project_superteam_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_React$useState5,2),query=_React$useState6[0],setQuery=_React$useState6[1],logOut=function(){axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/users/logout").then((function(){document.cookie="id=id",document.cookie="username=username",document.cookie="password=password",document.cookie="firstName=firstName",document.cookie="lastName=lastName",window.location="/"})).catch((function(e){console.log(e)}))},search=function search(e){setQuery(e.target.value);var regex="/"+e.target.value.replace(new RegExp("[^a-zA-Z0-9]"),"")+"/",temp=[];if("//"===regex)setUsers([]);else for(var i=0;i<userList.length;i++)userList[i].username.match(eval(regex))&&userList[i].username!==js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get("username")&&temp.push(userList[i]);setUsers(temp)},sendMessage=function(){dispatch(Object(_redux_actions_messageActions__WEBPACK_IMPORTED_MODULE_6__.c)())},createChat=function(e){var t={you:[js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get("username"),js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get("firstName")+" "+js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get("lastName")],them:e};dispatch(Object(_redux_actions_groupActions__WEBPACK_IMPORTED_MODULE_7__.c)(t)),setQuery("")},textChange=function(e){dispatch(Object(_redux_actions_messageActions__WEBPACK_IMPORTED_MODULE_6__.a)(e.target.value))},groupChange=function(e){dispatch(Object(_redux_actions_groupActions__WEBPACK_IMPORTED_MODULE_7__.a)(e))},inGroup=function(e){for(var t=0;t<e.length;t++)if(js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get("username")===e[t][0])return!0;return!1},mainComponent=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"main"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"side-bar"},groups.map((function(e,t){return inGroup(e.members)?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{key:t},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{onClick:function(){return groupChange(e)}},e.members.map((function(e,t){return e[0]!==js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get("username")&&e[1]})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null))):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{key:t})}))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"chat-area"},messages.map((function(e,t){return e.group===currentGroup._id&&e.author===js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get("firstName")+" "+js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get("lastName")?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{key:t,className:"message right"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",null,e.author),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"message-container"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"your-message"},e.message))):e.group===currentGroup._id&&e.author!==js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get("firstName")+" "+js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get("lastName")&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{key:t,className:"message"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",null,e.author),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"message-container"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"other-message"},e.message)))})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"message-field"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input",{placeholder:"Send Message...",value:text,onChange:textChange,onKeyPress:function(e){"Enter"===e.key&&sendMessage()}}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{onClick:sendMessage},"Send"))));return""!==query&&(mainComponent=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,users.map((function(e,t){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{key:t,className:"search-result"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3",null,e.firstName," ",e.surname),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",null,e.username)),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{onClick:function(){return createChat([e.username,e.firstName+" "+e.lastName])}},"Chat"))})))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"messenger"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input",{placeholder:"Search User...",value:query,onChange:search}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{onClick:logOut},"Log Out")),mainComponent)},mapStateToProps=function(e){return{isLoading:e.userReducer.isLoading,text:e.messageReducer.text,currentGroup:e.groupReducer.group,groups:e.groupReducer.groups,messages:e.messageReducer.messages}};__webpack_exports__.a=Object(react_redux__WEBPACK_IMPORTED_MODULE_4__.b)(mapStateToProps)(Messenger)},43:function(e,t,_){"use strict";_.d(t,"a",(function(){return a}));var a=function(e){return{type:"SET_IS_LOADING",isLoading:e}}},45:function(e,t,_){e.exports=_(75)},50:function(e,t,_){},75:function(e,t,_){"use strict";_.r(t);var a=_(0),n=_.n(a),r=_(20),s=_.n(r),c=(_(50),_(15)),o=(_(18),function(){return n.a.createElement("div",{className:"login"},n.a.createElement("div",null,n.a.createElement("h1",null,"Messenger"),n.a.createElement(c.b,{to:"/login"},"Login"),n.a.createElement(c.b,{to:"/register"},"Register")))}),u=_(2),i=_(22),l=_.n(i),E=_(4),m=_.n(E),d=function(){var e=n.a.useState(""),t=Object(u.a)(e,2),_=t[0],a=t[1],r=n.a.useState(""),s=Object(u.a)(r,2),c=s[0],o=s[1],i=n.a.useState(""),E=Object(u.a)(i,2),d=E[0],O=E[1];return n.a.createElement("div",{className:"login"},n.a.createElement("div",{className:"form"},n.a.createElement("h1",null,"Messenger"),n.a.createElement("input",{placeholder:"Username",value:_,onChange:function(e){return a(e.target.value)}}),n.a.createElement("br",null),n.a.createElement("input",{placeholder:"Password",type:"password",value:c,onChange:function(e){return o(e.target.value)}}),n.a.createElement("br",null),n.a.createElement("button",{onClick:function(){var e={username:_,password:l()(c)};m.a.post("/users/login",e,{withCredentials:!0}).then((function(e){e.data?(document.cookie="id=".concat(e.data._id),document.cookie="username=".concat(e.data.username),document.cookie="password=".concat(e.data.password),document.cookie="firstName=".concat(e.data.firstName),document.cookie="lastName=".concat(e.data.lastName),window.location="/messenger"):(document.cookie="id=id",document.cookie="username=username",document.cookie="password=password",document.cookie="firstName=firstName",document.cookie="lastName=lastName",O("Username or password incorrect!"))})).catch(console.log)}},"Login"),n.a.createElement("p",{className:"error"},d)))},O=function(){var e=n.a.useState(""),t=Object(u.a)(e,2),_=t[0],a=t[1],r=n.a.useState(""),s=Object(u.a)(r,2),c=s[0],o=s[1],i=n.a.useState(""),E=Object(u.a)(i,2),d=E[0],O=E[1],p=n.a.useState(""),g=Object(u.a)(p,2),f=g[0],P=g[1],M=n.a.useState(""),D=Object(u.a)(M,2),R=D[0],h=D[1],A=n.a.useState(""),C=Object(u.a)(A,2),U=C[0],T=C[1];return n.a.createElement("div",{className:"login"},n.a.createElement("div",{className:"form"},n.a.createElement("h1",null,"Messenger"),n.a.createElement("input",{placeholder:"First Name",value:_,onChange:function(e){return a(e.target.value)}}),n.a.createElement("br",null),n.a.createElement("input",{placeholder:"Last Name",value:c,onChange:function(e){return o(e.target.value)}}),n.a.createElement("br",null),n.a.createElement("input",{placeholder:"Email",value:d,onChange:function(e){return O(e.target.value)}}),n.a.createElement("br",null),n.a.createElement("input",{placeholder:"Username",value:f,onChange:function(e){return P(e.target.value)}}),n.a.createElement("br",null),n.a.createElement("input",{placeholder:"Password",type:"password",value:R,onChange:function(e){return h(e.target.value)}}),n.a.createElement("br",null),n.a.createElement("button",{onClick:function(){if(""===_||""===c||""===d||""===f||""===R)return T("You forgot to enter some information!");var e={firstName:_,lastName:c,email:d,username:f,password:l()(R)};m.a.post("/users/register",e).then((function(e){console.log(e),window.location="/login"})).catch(console.log)}},"Register"),n.a.createElement("p",{className:"error"},U)))},p=_(41),g=_(13);var f=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(g.c,null,n.a.createElement(g.a,{path:"/messenger",component:p.a}),n.a.createElement(g.a,{path:"/register",component:O}),n.a.createElement(g.a,{path:"/login",component:d}),n.a.createElement(g.a,{path:"/",component:o})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=_(44),M=_(14),D=_(10),R={isLoading:!0},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_IS_LOADING":return Object(D.a)({},e,{isLoading:t.isLoading});default:return e}},A=_(24),C={messages:[],text:""},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_MESSAGES":return Object(D.a)({},e,{messages:t.messages});case"UPDATE_TEXT":return Object(D.a)({},e,{text:t.text});case"INSERT_MESSAGE":return Object(D.a)({},e,{messages:[].concat(Object(A.a)(e.messages),[t.message])});default:return e}},T={groups:[],group:{}},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_GROUPS":return Object(D.a)({},e,{groups:t.groups});case"UPDATE_GROUP":return Object(D.a)({},e,{group:t.group});case"INSERT_GROUP":return Object(D.a)({},e,{groups:[].concat(Object(A.a)(e.groups),[t.newGroup])});default:return e}},b=Object(M.c)({userReducer:h,messageReducer:U,groupReducer:L}),I=_(23),W=_(16),v=_(17),B=Object(M.d)(b,Object(M.a)(P.a));new WebSocket("ws://"+window.location.host.split(":")[0]+(window.location.port&&":".concat(window.location.port))+"/websocket/").onmessage=function(e){var t=JSON.parse(e.data);"messages"===t.channel&&B.dispatch(Object(W.b)(JSON.parse(t.message))),"groups"===t.channel&&B.dispatch(Object(v.b)(JSON.parse(t.message)))},s.a.render(n.a.createElement(I.a,{store:B},n.a.createElement(c.a,null,n.a.createElement(f,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[45,1,2]]]);
//# sourceMappingURL=main.c19a3ce7.chunk.js.map