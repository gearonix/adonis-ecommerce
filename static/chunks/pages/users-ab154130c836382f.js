(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[892],{13592:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users",function(){return t(486)}])},486:function(e,s,t){"use strict";t.r(s),t.d(s,{UsersWithReducer:function(){return y},default:function(){return I}});var r=t(97458),n=t(52983),a=t(17418),l=t(10596);let c=(0,l.oM)({name:"users",initialState:{data:[],count:0,page:0},reducers:{setUsers(e,s){let{payload:t}=s;e.data=t.data,e.count=t.count},changePage(e,s){let{payload:t}=s;e.page=t}}}),u=c.actions,o=c.reducer;var i=t(43);let d=(0,a.L3)("profile/getUsers",async(e,s)=>{let{dispatch:t,extra:r,rejectWithValue:n}=s,a=await r.api.profile.getUsers(e);if((0,i.VZ)(a))return n("Failed to find profile");t(u.setUsers(a.data))});var h=t(20926),_=t.n(h),f=t(13048),j=t(66026),p=t(58045);let v=(0,n.memo)(()=>{let e=(0,a.v9)(k.users),s=(0,a.v9)(k.count),t=(0,a.v9)(k.page),l=(0,a.I0)();(0,n.useEffect)(()=>{l(d({page:t}))},[t]);let c=e=>{l(u.changePage(e))};return(0,r.jsxs)(r.Fragment,{children:[e.map((e,s)=>(0,r.jsx)(_(),{href:"".concat(f._.USERS,"/").concat(e.userId),children:(0,r.jsx)("h1",{children:e.email})},s)),(0,r.jsx)(j.tl,{count:s/p.pg,onChange:c,page:t})]})});var g=t(26503);let x=()=>({selectValues:{role:Object.values(p.vX)}});var m=t(86955),E=t.n(m),N=t(87177);let b=e=>{let{form:s,reg:t}=e,n=(e,t)=>{s.setValue("role",t?p.vX.SALESMAN:null)};return(0,r.jsxs)("article",{className:E().header,children:[(0,r.jsx)("div",{className:E().search,children:(0,r.jsx)(j.Mj,{values:t("search")})}),(0,r.jsx)("div",{className:E().controls_buttons,children:(0,r.jsxs)("div",{children:[(0,r.jsx)(N.Z,{onChange:n,title:"In stock",value:!0}),(0,r.jsx)("span",{children:"Only Salesman"})]})})]})},w=(0,n.memo)(()=>{let{watch:e,reg:s,getValues:t,form:l}=(0,g.cI)(null,x()),c=(0,a.I0)(),u=(0,a.v9)(k.page),o=()=>{c(d(t()))};return(0,n.useEffect)(()=>{let s=e(o);return()=>s.unsubscribe()},[]),(0,n.useEffect)(()=>{l.setValue("search","")},[u]),(0,r.jsx)(b,{form:l,reg:s})});var k={users:e=>{let{users:s}=e;return s.data},count:e=>{let{users:s}=e;return s.count},page:e=>{let{users:s}=e;return s.page}},S=t(44796);let U=()=>(0,r.jsxs)("div",{className:"users",children:[(0,r.jsx)(w,{}),(0,r.jsx)(v,{})]}),y=()=>(0,r.jsx)(S.Wp,{name:"users",reducer:o,children:(0,r.jsx)(U,{})});var I=y},86955:function(e){e.exports={header:"style_header__otj6J",search:"style_search__zeOYz",controls_buttons:"style_controls_buttons__MBYak"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=13592)}),_N_E=e.O()}]);