(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1774],{94866:function(e,s,t){"use strict";t.d(s,{Q:function(){return c},Z:function(){return I}});var r=t(97458),u=t(52983),n=t(20595);let a=(0,u.memo)(()=>(0,r.jsx)("div",{children:(0,r.jsx)(n.RB5,{color:"#8B96A5",size:"24px"})}));var c=a,l=t(11229),o=t(43967),i=t(64425),d=t(2410),_=t(95810),f=t.n(_);let m=(0,u.memo)(()=>{let{reg:e,watch:s,getValues:t}=(0,o.cI)(null),n=(0,i.I0)(),a=(0,u.useCallback)(()=>{let e=t().search;n(d._I.changeRoomsFilter(e))},[]);return(0,u.useEffect)(()=>{let e=s(a);return()=>e.unsubscribe()},[]),(0,r.jsx)("div",{className:f().input,children:(0,r.jsx)(l.Mj,{values:e("search")})})});var I=m},55301:function(e,s,t){"use strict";t.d(s,{_:function(){return l},A:function(){return c}});var r=t(64425),u=t(63069),n=t(2410),a=t(19625);let c=(0,r.L3)("messenger/GET_ROOMS",async(e,s)=>{let{dispatch:t,extra:r,getState:c,rejectWithValue:l}=s,o=a.ce.userId(c()),i=await r.api.messenger.getRooms(o);if((0,u.VZ)(i))return l("An error occurred.");t(n._I.setRooms(i.data))}),l=(0,r.L3)("messenger/SELECT_ROOM",async(e,s)=>{let{roomId:t,page:r=0}=e,{dispatch:c,extra:l,getState:o}=s,i=a.ce.userId(o()),d=await l.api.messenger.selectRoom(t,i,r);(0,u.VZ)(d)||c(n._I.setMessages(d.data))})},91774:function(e,s,t){"use strict";t.r(s);var r=t(97458),u=t(52983),n=t(21611),a=t(94866),c=t(10314),l=t(43967),o=t(85927),i=t(64425),d=t(55301),_=t(2410),f=t(75678),m=t(18212);let I=(0,u.memo)(()=>{let e=(0,i.v9)(_.oA),s=(0,i.v9)(_._5.selectedId),t=(0,i.v9)(_._5.userStatus),I=(0,c.useRouter)(),h=I.query.targetId,{actions:v,subscribes:p}=(0,o._)(),g=(0,f.s)(),b=(0,i.I0)();return(0,l.El)(()=>{p.onAddGroup(e=>{b(_._I.addRoom(e))}),v.startChat(h)},[h]),(0,u.useEffect)(()=>{g.actions.subscribeToStatus(null==e?void 0:e.userId)},[s,e]),(0,u.useEffect)(()=>(b((0,d.A)()),g.subscribes.onStatusChanged(e=>{b(_._I.changeUserStatus(e))}),()=>{b(_._I.clearMessenger())}),[]),(0,r.jsx)(m.sS,{when:null==e?void 0:e.userId,children:(0,r.jsx)(n.zZ,{Search:a.Q,user:e,label:t})})});s.default=I},95810:function(e){e.exports={input:"style_input___vpzN"}}}]);