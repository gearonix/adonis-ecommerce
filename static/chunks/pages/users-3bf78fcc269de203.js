(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2892],{37219:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users",function(){return t(27476)}])},66515:function(e,s,t){"use strict";t.d(s,{GR:function(){return l},dn:function(){return a},lD:function(){return c}});var n=t(21229),r=t.n(n);let a=r()(()=>t.e(2145).then(t.bind(t,22145)),{loadableGenerated:{webpack:()=>[22145]}}),l=r()(()=>t.e(4264).then(t.bind(t,94264)),{loadableGenerated:{webpack:()=>[94264]}}),c=r()(()=>t.e(5659).then(t.bind(t,45659)),{loadableGenerated:{webpack:()=>[45659]}})},27476:function(e,s,t){"use strict";t.r(s),t.d(s,{UsersWithReducer:function(){return es},default:function(){return et}});var n=t(97458),r=t(52983),a=t(98429),l=t(14012),c=t(77808);let i=(0,l.HF)({selectId:e=>e.userId,sortComparer:(e,s)=>e.email.localeCompare(s.email)}),o=(0,l.oM)({name:"users",initialState:i.getInitialState({ids:[],entities:{},count:0,page:0,isLoading:!1}),reducers:{setUsers(e,s){let{payload:t}=s;i.setAll(e,t.data),e.count=t.count},changePage(e,s){let{payload:t}=s;e.page=t}},extraReducers:e=>{(0,c.VT)(e,h)}}),u=o.actions,d=i.getSelectors(e=>e.users),_=o.reducer,h=(0,a.L3)("profile/getUsers",async(e,s)=>{let{dispatch:t,extra:n,rejectWithValue:r}=s,a=await n.api.profile.getUsers(e);if((0,c.VZ)(a))return r("Failed to find profile");t(u.setUsers(a.data))});var x=t(68062),j=t(579),m=t(65593),p=t.n(m),f=t(24612),v=t(98362);let g=e=>{let{form:s,reg:t}=e,{t:r}=(0,v.$G)(),a=(e,t)=>{s.setValue("role",t?j.vX.SALESMAN:null)};return(0,n.jsxs)("article",{className:p().header,children:[(0,n.jsx)("div",{className:p().search,children:(0,n.jsx)(x.Mj,{values:t("search")})}),(0,n.jsx)("div",{className:p().controls_buttons,children:(0,n.jsxs)("div",{children:[(0,n.jsx)(f.Z,{onChange:a,title:"In stock",value:!0}),(0,n.jsx)("span",{children:r("Only Salesman")})]})})]})};var N=t(73122),w=t.n(N),I=t(40406),y=t(51719),b=t(785);let V=(e,s)=>s||e?[e,s].join(", "):(0,b.t)("Not indicated");var k=t(87608),C=t.n(k),S=t(19766),E=t(20595),A=t(73670),M=t(27318),P=t(94445),L=t(6031),U=t.n(L),D=t(51922);let O=e=>{let{user:s,isMe:t}=e,r=new c.ZH,{t:a}=(0,v.$G)(),l=s.role===j.vX.SALESMAN;return(0,n.jsxs)(A.xM,{className:w().user,children:[(0,n.jsx)(R,{userId:s.userId,children:(0,n.jsx)("div",{className:w().avatar,children:(0,n.jsx)(I.oH,{src:s.avatar,def:y.h9.AVATAR})})}),(0,n.jsxs)("div",{className:w().info,children:[(0,n.jsxs)(R,{userId:s.userId,children:[(0,n.jsxs)("h2",{className:C()(w().user_name,{[w().salesman]:l}),children:[(0,n.jsxs)(A.fV,{where:l,children:[(0,n.jsx)(S.IkM,{}),(0,n.jsx)(E.TAt,{})]}),r.toNormalName(s)]}),(0,n.jsx)("h3",{className:w().email,children:s.email})]}),(0,n.jsxs)("h3",{className:w().location,children:[(0,n.jsx)(M.v2c,{})," ",a("Location"),": ",V(s.country,s.city)]}),(0,n.jsxs)("h3",{className:w().location,children:[(0,n.jsx)(P.s$k,{})," ",a("Role_s"),": ",a(r.toNormalRole(s.role))]}),(0,n.jsx)("p",{className:w().description,children:s.description||a("No description.")}),(0,n.jsx)(R,{userId:s.userId,children:(0,n.jsx)(I.sJ,{className:w().view_details,children:a("View_details")})})]}),(0,n.jsx)(A.sS,{when:!t,children:(0,n.jsx)(I.nD,{targetId:s.userId,className:w().write_message})}),(0,n.jsx)("span",{className:w().date,children:r.reformatMysqlDate(s.registration_date)})]})},R=e=>{let{userId:s,children:t}=e;return(0,n.jsx)(U(),{href:"".concat(D._.USERS,"/").concat(s),children:t})};var X=t(37455),G=t.n(X),T=t(13865),W=t(32925);let F=(0,r.memo)(()=>{let e=(0,a.v9)(d.selectAll),s=(0,a.v9)(Z.count),t=(0,a.v9)(Z.page),l=(0,a.v9)(Z.isLoading),c=(0,a.v9)(W.ce.userId),i=(0,a.I0)();(0,r.useEffect)(()=>{i(h({page:t}))},[t]);let o=e=>{i(u.changePage(e))};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:G().users,children:(0,n.jsx)(I.uQ,{when:!e.length,title:"Users",Icon:T.WY8,loading:l,Preloader:x.al,count:6,NotFound:()=>(0,n.jsx)(I.TX,{title:"Users",Icon:T.WY8,w:100}),children:e.map(e=>(0,n.jsx)(O,{user:e,isMe:c===e.userId},e.userId))})}),(0,n.jsx)(x.tl,{count:s/j.pg,onChange:o,page:t})]})});var H=t(83021);let J=()=>({selectValues:{role:Object.values(j.vX)}}),Y=(0,r.memo)(()=>{let{watch:e,reg:s,getValues:t,form:l}=(0,H.cI)(null,J()),c=(0,a.I0)(),i=(0,a.v9)(Z.page),o=()=>{c(h(t()))};return(0,r.useEffect)(()=>{let s=e(o);return()=>s.unsubscribe()},[]),(0,r.useEffect)(()=>{l.setValue("search","")},[i]),(0,n.jsx)(g,{form:l,reg:s})});var Z={count:e=>{let{users:s}=e;return s.count},page:e=>{let{users:s}=e;return s.page},isLoading:e=>{let{users:s}=e;return s.isLoading}},$=t(39140),z=t(66515),B=t(49896),K=t(56147),q=t(5630),Q=t(33414);let ee=()=>(0,n.jsxs)(A.xM,{children:[(0,n.jsxs)("div",{className:"users",children:[(0,n.jsx)(Y,{}),(0,n.jsx)(F,{})]}),(0,n.jsx)(K.PN,{}),(0,n.jsx)($.Vp,{Component:z.lD,type:B.V7[4]}),(0,n.jsx)($.Vp,{Component:z.lD,type:B.V7[3]}),(0,n.jsx)(K.PW,{Form:(0,n.jsx)(q.ZN,{Component:Q.Pc})}),(0,n.jsx)($.Vp,{Component:z.dn})]}),es=()=>(0,n.jsx)(A.Wp,{name:"users",reducer:_,children:(0,n.jsx)(ee,{})});var et=es},73122:function(e){e.exports={user:"style_user__DIP0c",avatar:"style_avatar__B84Sh",info:"style_info__O4uJg",user_name:"style_user_name__sD1o_",salesman:"style_salesman__CUub2",location:"style_location__ahxt9",email:"style_email__PkjCJ",description:"style_description__2KOb9",write_message:"style_write_message__vwew7",date:"style_date__L8xHK"}},65593:function(e){e.exports={header:"style_header__otj6J",search:"style_search__zeOYz",controls_buttons:"style_controls_buttons__MBYak"}},37455:function(e){e.exports={users:"style_users__hWuXD"}}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=37219)}),_N_E=e.O()}]);