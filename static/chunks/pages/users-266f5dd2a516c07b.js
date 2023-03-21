(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2892],{13592:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users",function(){return t(61603)}])},10791:function(e,s,t){"use strict";t.d(s,{GR:function(){return l},dn:function(){return a},lD:function(){return c}});var n=t(46571),r=t.n(n);let a=r()(()=>t.e(1901).then(t.bind(t,71901)),{loadableGenerated:{webpack:()=>[71901]}}),l=r()(()=>t.e(5537).then(t.bind(t,65537)),{loadableGenerated:{webpack:()=>[65537]}}),c=r()(()=>t.e(3827).then(t.bind(t,13827)),{loadableGenerated:{webpack:()=>[13827]}})},61603:function(e,s,t){"use strict";t.r(s),t.d(s,{UsersWithReducer:function(){return ee},default:function(){return es}});var n=t(97458),r=t(52983),a=t(17418),l=t(10596),c=t(43);let i=(0,l.HF)({selectId:e=>e.userId,sortComparer:(e,s)=>e.email.localeCompare(s.email)}),o=(0,l.oM)({name:"users",initialState:i.getInitialState({ids:[],entities:{},count:0,page:0,isLoading:!1}),reducers:{setUsers(e,s){let{payload:t}=s;i.setAll(e,t.data),e.count=t.count},changePage(e,s){let{payload:t}=s;e.page=t}},extraReducers:e=>{(0,c.VT)(e,h)}}),u=o.actions,d=i.getSelectors(e=>e.users),_=o.reducer,h=(0,a.L3)("profile/getUsers",async(e,s)=>{let{dispatch:t,extra:n,rejectWithValue:r}=s,a=await n.api.profile.getUsers(e);if((0,c.VZ)(a))return r("Failed to find profile");t(u.setUsers(a.data))});var x=t(73492),j=t(58045),m=t(86955),p=t.n(m),f=t(50395),v=t(98362);let g=e=>{let{form:s,reg:t}=e,{t:r}=(0,v.$G)(),a=(e,t)=>{s.setValue("role",t?j.vX.SALESMAN:null)};return(0,n.jsxs)("article",{className:p().header,children:[(0,n.jsx)("div",{className:p().search,children:(0,n.jsx)(x.Mj,{values:t("search")})}),(0,n.jsx)("div",{className:p().controls_buttons,children:(0,n.jsxs)("div",{children:[(0,n.jsx)(f.Z,{onChange:a,title:"In stock",value:!0}),(0,n.jsx)("span",{children:r("Only Salesman")})]})})]})};var N=t(37959),w=t.n(N),y=t(1791),I=t(567),b=t(785);let V=(e,s)=>s||e?[e,s].join(", "):(0,b.t)("Not indicated");var k=t(87608),C=t.n(k),E=t(19766),S=t(20595),A=t(44796),P=t(27318),L=t(94445),M=t(20926),U=t.n(M),D=t(13048);let O=e=>{let{user:s}=e,t=new c.ZH,{t:r}=(0,v.$G)(),a=s.role===j.vX.SALESMAN;return(0,n.jsxs)(A.xM,{className:w().user,children:[(0,n.jsx)(R,{userId:s.userId,children:(0,n.jsx)("div",{className:w().avatar,children:(0,n.jsx)(y.oH,{src:s.avatar,def:I.h9.AVATAR})})}),(0,n.jsxs)("div",{className:w().info,children:[(0,n.jsxs)(R,{userId:s.userId,children:[(0,n.jsxs)("h2",{className:C()(w().user_name,{[w().salesman]:a}),children:[(0,n.jsxs)(A.fV,{where:a,children:[(0,n.jsx)(E.IkM,{}),(0,n.jsx)(S.TAt,{})]}),t.toNormalName(s)]}),(0,n.jsx)("h3",{className:w().email,children:s.email})]}),(0,n.jsxs)("h3",{className:w().location,children:[(0,n.jsx)(P.v2c,{})," ",r("Location"),": ",V(s.country,s.city)]}),(0,n.jsxs)("h3",{className:w().location,children:[(0,n.jsx)(L.s$k,{})," ",r("Role_s"),": ",r(t.toNormalRole(s.role))]}),(0,n.jsx)("p",{className:w().description,children:s.description||r("No description.")}),(0,n.jsx)(R,{userId:s.userId,children:(0,n.jsx)(y.sJ,{className:w().view_details,children:r("View_details")})})]}),(0,n.jsx)(y.nD,{targetId:s.userId,className:w().write_message}),(0,n.jsx)("span",{className:w().date,children:t.reformatMysqlDate(s.registration_date)})]})},R=e=>{let{userId:s,children:t}=e;return(0,n.jsx)(U(),{href:"".concat(D._.USERS,"/").concat(s),children:t})};var X=t(10166),G=t.n(X),T=t(13865);let W=(0,r.memo)(()=>{let e=(0,a.v9)(d.selectAll),s=(0,a.v9)(Y.count),t=(0,a.v9)(Y.page),l=(0,a.v9)(Y.isLoading),c=(0,a.I0)();(0,r.useEffect)(()=>{c(h({page:t}))},[t]);let i=e=>{c(u.changePage(e))};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:G().users,children:(0,n.jsx)(y.uQ,{when:!e.length,title:"Users",Icon:T.WY8,loading:l,Preloader:x.al,count:6,NotFound:()=>(0,n.jsx)(y.TX,{title:"Users",Icon:T.WY8,w:100}),children:e.map(e=>(0,n.jsx)(O,{user:e},e.userId))})}),(0,n.jsx)(x.tl,{count:s/j.pg,onChange:i,page:t})]})});var F=t(26503);let H=()=>({selectValues:{role:Object.values(j.vX)}}),J=(0,r.memo)(()=>{let{watch:e,reg:s,getValues:t,form:l}=(0,F.cI)(null,H()),c=(0,a.I0)(),i=(0,a.v9)(Y.page),o=()=>{c(h(t()))};return(0,r.useEffect)(()=>{let s=e(o);return()=>s.unsubscribe()},[]),(0,r.useEffect)(()=>{l.setValue("search","")},[i]),(0,n.jsx)(g,{form:l,reg:s})});var Y={count:e=>{let{users:s}=e;return s.count},page:e=>{let{users:s}=e;return s.page},isLoading:e=>{let{users:s}=e;return s.isLoading}},Z=t(96188),$=t(10791),z=t(11788),B=t(52866),K=t(53679),q=t(95333);let Q=()=>(0,n.jsxs)(A.xM,{children:[(0,n.jsxs)("div",{className:"users",children:[(0,n.jsx)(J,{}),(0,n.jsx)(W,{})]}),(0,n.jsx)(B.PN,{}),(0,n.jsx)(Z.Vp,{Component:$.lD,type:z.V7[4]}),(0,n.jsx)(Z.Vp,{Component:$.lD,type:z.V7[3]}),(0,n.jsx)(B.PW,{Form:(0,n.jsx)(K.ZN,{Component:q.Pc})}),(0,n.jsx)(Z.Vp,{Component:$.dn})]}),ee=()=>(0,n.jsx)(A.Wp,{name:"users",reducer:_,children:(0,n.jsx)(Q,{})});var es=ee},37959:function(e){e.exports={user:"style_user__DIP0c",avatar:"style_avatar__B84Sh",info:"style_info__O4uJg",user_name:"style_user_name__sD1o_",salesman:"style_salesman__CUub2",location:"style_location__ahxt9",email:"style_email__PkjCJ",description:"style_description__2KOb9",write_message:"style_write_message__vwew7",date:"style_date__L8xHK"}},86955:function(e){e.exports={header:"style_header__otj6J",search:"style_search__zeOYz",controls_buttons:"style_controls_buttons__MBYak"}},10166:function(e){e.exports={users:"style_users__hWuXD"}}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=13592)}),_N_E=e.O()}]);