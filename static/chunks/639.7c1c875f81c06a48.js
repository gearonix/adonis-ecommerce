(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[639],{29569:function(e,s,t){"use strict";t.d(s,{Q:function(){return c},Z:function(){return I}});var r=t(97458),u=t(52983),n=t(20595);let a=(0,u.memo)(()=>(0,r.jsx)("div",{children:(0,r.jsx)(n.RB5,{color:"#8B96A5",size:"24px"})}));var c=a,l=t(91443),o=t(83021),i=t(98429),d=t(28820),_=t(94846),f=t.n(_);let m=(0,u.memo)(()=>{let{reg:e,watch:s,getValues:t}=(0,o.cI)(null),n=(0,i.I0)(),a=(0,u.useCallback)(()=>{let e=t().search;n(d._I.changeRoomsFilter(e))},[]);return(0,u.useEffect)(()=>{let e=s(a);return()=>e.unsubscribe()},[]),(0,r.jsx)("div",{className:f().input,children:(0,r.jsx)(l.Mj,{values:e("search")})})});var I=m},14769:function(e,s,t){"use strict";t.d(s,{A:function(){return c},c:function(){return l}});var r=t(98429),u=t(77808),n=t(28820),a=t(32925);let c=(0,r.L3)("messenger/GET_ROOMS",async(e,s)=>{let{dispatch:t,extra:r,getState:c,rejectWithValue:l}=s,o=a.ce.userId(c()),i=await r.api.messenger.getRooms(o);if((0,u.VZ)(i))return l("An error occurred.");t(n._I.setRooms(i.data))}),l=(0,r.L3)("messenger/SELECT_ROOM",async(e,s)=>{let{dispatch:t,extra:r,getState:c}=s,l=a.ce.userId(c()),o=await r.api.messenger.selectRoom(e,l);(0,u.VZ)(o)||t(n._I.setMessages(o.data))})},60639:function(e,s,t){"use strict";t.r(s);var r=t(97458),u=t(52983),n=t(76066),a=t(29569),c=t(37849),l=t(83021),o=t(34060),i=t(98429),d=t(14769),_=t(28820),f=t(42522),m=t(73670);let I=(0,u.memo)(()=>{let e=(0,i.v9)(_.oA),s=(0,i.v9)(_._5.selectedId),t=(0,i.v9)(_._5.userStatus),I=(0,c.useRouter)(),h=I.query.targetId,{actions:v,subscribes:p}=(0,o._)(),g=(0,f.s)(),b=(0,i.I0)();return(0,l.El)(()=>{p.onAddGroup(e=>{b(_._I.addRoom(e))}),v.startChat(h)},[h]),(0,u.useEffect)(()=>{g.actions.subscribeToStatus(null==e?void 0:e.userId)},[s,e]),(0,u.useEffect)(()=>(b((0,d.A)()),g.subscribes.onStatusChanged(e=>{b(_._I.changeUserStatus(e))}),()=>{b(_._I.clearMessenger())}),[]),(0,r.jsx)(m.sS,{when:null==e?void 0:e.userId,children:(0,r.jsx)(n.zZ,{Search:a.Q,user:e,label:t})})});s.default=I},94846:function(e){e.exports={input:"style_input___vpzN"}}}]);