"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7226],{67226:function(e,s,t){t.r(s),t.d(s,{Posts:function(){return g},PostsWithReducer:function(){return m}});var n=t(97458),r=t(52983),u=t(17418),c=t(93225),o=t(59479),a=t(36418),l=t(66026),h=t(58045),i=t(44796),p=t(14009),d=t(20595),f=t(49319);let g=()=>{let e=(0,u.v9)(a.Um.posts),s=(0,u.v9)(a.Um.isLoading),t=(0,u.I0)(),i=(0,u.v9)(a.Um.page),g=(0,u.v9)(a.Um.count),m=(0,u.v9)(f.G0.userId);(0,r.useEffect)(()=>{t((0,c.w)(i))},[i,m]),(0,r.useEffect)(()=>()=>{t(a.rZ.clearPosts())},[]);let j=(0,r.useCallback)(e=>{t(a.rZ.setPage(e))},[]);return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(p.uQ,{when:!e.length,title:"Posts_n",Icon:d.Ehc,loading:s,children:[e.map(e=>(0,n.jsx)(o.SO,{post:e},e.postId)),(0,n.jsx)(l.tl,{count:g/h.pg,onChange:j,page:i})]})})},m=()=>(0,n.jsx)(i.Wp,{name:"posts",reducer:a.h2,children:(0,n.jsx)(g,{})});s.default=m}}]);