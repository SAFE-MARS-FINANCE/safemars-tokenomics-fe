(this["webpackJsonpsafemars-presale-fe"]=this["webpackJsonpsafemars-presale-fe"]||[]).push([[0],{118:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),c=Object(a.createContext)({topAppMenu:0,topMenuChageHandler:function(){}})},126:function(e,t,n){"use strict";var a=n(0),c=n.n(a),o=n(71),r=n(1),i=c.a.forwardRef((function(e,t){var n=e.className,a=e.href,c=e.hrefAs,i=e.children,s=e.prefetch;return Object(r.jsx)(o.b,{className:n,to:a,as:c,prefetch:s,ref:t,children:i})}));t.a=i},145:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var a=function(e){return void 0===e||null===e||"object"===typeof e&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length},c=function(e){return new Promise((function(t){return setTimeout(t,e)}))}},156:function(e,t,n){"use strict";var a=n(14),c=n(22),o=n(0),r=n.n(o),i=n(161),s=n(8),l=n(66),d=n(1),b=Object(i.a)((function(e){return{root:{borderRadius:20}}})),j=r.a.forwardRef((function(e,t){var n=e.className,o=Object(c.a)(e,["className"]),r=b();return Object(d.jsx)(l.a,Object(a.a)({className:Object(s.a)(r.root,n),ref:t},o))}));t.a=j},313:function(e,t,n){"use strict";n(0);var a=n(8),c=(n(419),n(1));t.a=function(e){var t=e.wholeOverlay,n=e.classes,o=void 0===n?{}:n;return Object(c.jsx)("div",{className:Object(a.a)(t?"loading-backdrop":"loading",o.root),children:Object(c.jsx)("div",{className:Object(a.a)("lds-dual-ring",o.loading)})})}},419:function(e,t,n){},420:function(e,t,n){},421:function(e,t){},434:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(26),o=n.n(c),r=n(71),i=n(49),s=n(470),l=n(34),d=(n(358),n(161)),b=n(121),j=n(320),u=n(83),g=n(321),p={1:"https://mainnet.infura.io/v3/4aaf5b5c3d5540f3a3b13459cf748ec8",4:"https://rinkeby.infura.io/v3/4aaf5b5c3d5540f3a3b13459cf748ec8"},h=new b.b({rpc:{1:{1:p[1],4:p[4]},bridge:"https://bridge.walletconnect.org"},bridge:"https://bridge.walletconnect.org",qrcode:!0,pollingInterval:12e3}),f=new g.BscConnector({supportedChainIds:[56]}),O=new u.a({supportedChainIds:[56]}),m=new j.a({apiKey:"pk_test_D58C7F46E173BEDB",chainId:4,pollingInterval:15e3}),x=n(21),v=n(469),w=n(468),y=n(322),k=n(103),C=n(327),N=n.n(C),I=n(472),D=n(335),L=Object(I.a)(Object(D.a)({palette:{primary:{light:"#292C41",main:"#141720",dark:"#161A29",contrastText:"#fff",darkLight:"#292C41"},secondary:{light:"#555e6c",main:"#A20F3C",dark:"#1e2532",contrastText:"#6B76A1"},error:{light:"#E32C30",main:"#E32C30",dark:"#860029",contrastText:"#fff"},background:{default:"#151C29",main:"#232637",sideDrawer:"#0f1118",selectedMenu:"#292C4130",overlay:"#00000099"},text:{primary:"#fff",secondary:"#6B76A1",notification:"#8D9BD4",inactiveSubMenu:"#92959e",hoverText:"rgb(65, 243, 211)"}},custom:{palette:{green:"#4caf50",blueGrey:"#5c739c",lightGrey:"#D8D8D8",darkRed:"#ba1a48",grey:"#99A5D3",lightBlue:"#1f2334",gold:"#D8A42D",darkYellow:"#FFA000"},layout:{topAppBarHeight:47,footerHeight:77}}})),B=n(6),A=n(462),S=n(463),F=n(8),R=n(65),T=n(459),z=n(436),M=n(25),E=n(72),W=n(14),H=n(22),_=n(1),G=Object(d.a)((function(){return{picture:{display:"flex"}}})),P=function(e){var t=e.sources,n=e.width,a=e.height,c=e.className,o=Object(H.a)(e,["sources","width","height","className"]),r=G();return Object(_.jsxs)("picture",Object(W.a)(Object(W.a)({},o),{},{className:Object(F.a)(r.picture,c),children:[t.map((function(e){return Object(_.jsx)("source",{srcSet:e.srcSet,type:e.type},e.srcSet)})),Object(_.jsx)("img",{width:n,height:a,src:"/assets/images/placeholder.gif",alt:"MARS"})]}))},Y=[{srcSet:"/assets/logo/logo.png 600w, /assets/logo/logo.png 960w, /assets/logo/logo.png 1280w",type:"image/png"},{srcSet:"/assets/logo/logo.png 600w, /assets/logo/logo.png 960w, /assets/logo/logo.png",type:"image/png"}],V=function(e){return Object(_.jsx)(P,Object(W.a)(Object(W.a)({},e),{},{width:44,height:44,sources:Y}))},U={title:"home",url:"/"},$=Object(d.a)((function(e){var t;return{root:(t={},Object(B.a)(t,e.breakpoints.down("sm"),{paddingLeft:e.spacing(1)}),Object(B.a)(t,"display","flex"),Object(B.a)(t,"alignItems","center"),Object(B.a)(t,"&:hover",{cursor:"pointer"}),t),height:{height:"100%"}}})),q=Object(x.f)((function(e){var t=e.history,n=(e.titleVariant,e.className),a=$(),c=Object(R.a)(),o=Object(z.a)(c.breakpoints.up("md"),{defaultMatches:!0});return Object(_.jsxs)("div",{className:Object(F.a)(a.root,n),children:[Object(_.jsx)(E.a,{style:{display:"flex",backgroundColor:"#292C40",marginRight:30},onClick:function(){t.push(U.url)},icon:Object(_.jsx)(V,{height:45,width:45})}),Object(_.jsx)(T.a,{color:"textPrimary",style:{fontFamily:"LULO",color:M.a.deepOrange[500]},variant:"body1",children:o&&"SAFE MARS . FINANCE"})]})})),J=Object(d.a)((function(e){return{root:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},margin:{margin:"".concat(e.spacing(0)," !important")},height:{paddingLeft:e.spacing(1.5)}}})),X=function(e){var t=e.setOpen,n=J();return Object(_.jsx)("div",{className:n.root,children:Object(_.jsx)(q,{setOpen:t,titleVariant:"h6",className:n.margin})})},K=n(82),Z=n(334),Q=n(118),ee=n(328),te=n.n(ee),ne=n(156),ae=n(145),ce=Object(d.a)((function(e){var t;return{root:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row"},avatarContainer:(t={},Object(B.a)(t,e.breakpoints.down("sm"),{margin:e.spacing(0,1.5,0,1.5)}),Object(B.a)(t,"display","flex"),Object(B.a)(t,"justifyContent","center"),Object(B.a)(t,"alignItems","center"),t),avatarList:{display:"flex",justifyContent:"center",alignItems:"center",height:"64px"},avatar:{cursor:"pointer",marginRight:e.spacing(1)},backgroundColor:{backgroundColor:"".concat(e.palette.error.hoverText," !important")},borderColor:{borderTop:"0.5px solid  ".concat(e.palette.text.hoverText," !important")}}})),oe=function(e){var t=e.isMobileMenu,n=Object(a.useContext)(Q.a),c=n.account,o=n.setIsWalletDialog,r=ce({}),i=Object(R.a)();return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("div",{className:r.root,children:Object(_.jsx)("div",{className:Object(F.a)(r.avatarList,null),children:Object(_.jsx)(K.a,{colors:["#FF2929","#FF7A29","#FAD02E","#91FA49","#36D8B7","#3B8AFF","#991EF9","#FF5DCD"],children:Object(ae.b)(c)?Object(_.jsx)(_.Fragment,{children:!t&&Object(_.jsx)(ne.a,{style:{backgroundColor:i.palette.error.light},onClick:function(){Object(ae.b)(c)?o(!0):o(!1)},children:"Connect Wallet"})}):Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)(ne.a,{variant:"outlined",onClick:function(){return o(!0)},children:[Object(_.jsx)(Z.a,{size:"28",className:r.avatar,round:!0,src:te()(c),name:"Bonecoin"}),Object(_.jsx)(T.a,{variant:"body1",children:(null===c||void 0===c?void 0:c.slice(0,4))+"..."+(null===c||void 0===c?void 0:c.slice((null===c||void 0===c?void 0:c.length)-4,null===c||void 0===c?void 0:c.length))})]})})})})})})},re=n(460),ie=n(437),se=n(339),le=n(126),de=Object(d.a)((function(e){return{root:{textTransform:"none"},loadingSpin:{position:"absolute"}}})),be=function(e){var t=e.className,n=e.color,a=e.variant,c=e.href,o=e.children,r=e.loading,i=e.disable,s=Object(H.a)(e,["className","color","variant","href","children","loading","disable"]),l=de();return Object(_.jsxs)(ie.a,Object(W.a)(Object(W.a)({component:c?le.a:"button",href:c,className:Object(F.a)(t,l.root),disabled:r||i,color:n,variant:a||"outlined"},s),{},{children:[o,r&&Object(_.jsx)(se.a,{className:l.loadingSpin,color:"primary"===n?"secondary":"primary",size:20})]}))},je=Object(d.a)((function(e){return{menuItem:{flexDirection:"row",width:"fit-content",minHeight:"100%",padding:0}}})),ue=function(){var e=je(),t=Object(R.a)(),n=Object(z.a)(t.breakpoints.up("md"),{defaultMatches:!0}),a=function(e){window.open(e,"_blank")};return Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)(re.a,{className:e.menuItem,children:[Object(_.jsx)(be,{onClick:function(){return a("https://safe-mars.gitbook.io/safemars/")},style:{border:"none"},children:Object(_.jsx)(T.a,{variant:"body2",style:{fontFamily:"LULO"},children:"ABOUT"})}),n&&Object(_.jsx)(be,{onClick:function(){return a("https://safe-mars.gitbook.io/safemars/")},style:{border:"none"},children:Object(_.jsx)(T.a,{variant:"body2",style:{fontFamily:"LULO"},children:"DOCS"})})]})})},ge=Object(a.memo)(ue),pe=Object(d.a)((function(e){return{height:{height:"100%"},LogoContainer:{display:"flex",flexDirection:"row",alignItems:"center"}}})),he=function(){var e=pe(),t=Object(a.useState)(!1),n=Object(l.a)(t,2),c=n[0],o=n[1];return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(X,{open:c,setOpen:o}),Object(_.jsxs)("div",{className:e.LogoContainer,children:[Object(_.jsx)(ge,{}),Object(_.jsx)(oe,{})]})]})},fe=(n(461),Object(d.a)((function(e){var t;return{responsiveWidth:(t={},Object(B.a)(t,e.breakpoints.up("sm"),{width:"auto"}),Object(B.a)(t,"width","100%"),t),flex:{display:"flex"},rowDirection:{flexDirection:"row"},columnDirection:{flexDirection:"column"},centerAlign:{alignItems:"center"},textCenter:{textAlign:"center"},textRight:{textAlign:"right"}}}))),Oe=(new Set(["xl","lg","md","sm","xs"]),Object(d.a)((function(e){var t;return{appBar:function(t){var n;return n={},Object(B.a)(n,e.breakpoints.down("md"),{paddingLeft:e.spacing(2),paddingRight:e.spacing(2)}),Object(B.a)(n,e.breakpoints.down("sm"),{backgroundColor:"rgb(71 13 6)",paddingRight:0,paddingLeft:0}),Object(B.a)(n,e.breakpoints.down(340),{padding:0}),Object(B.a)(n,"boxShadow","none"),Object(B.a)(n,"display","flex"),Object(B.a)(n,"flexDirection","row"),Object(B.a)(n,"flexWrap","wrap"),Object(B.a)(n,"justifyContent","space-between"),Object(B.a)(n,"zIndex",e.zIndex.drawer+3),Object(B.a)(n,"padding",e.spacing(0,4,0,4)),Object(B.a)(n,"backgroundColor","rgb(71 13 6)"),Object(B.a)(n,"minHeight",e.spacing(4.5)),Object(B.a)(n,"maxWidth",e.spacing(163)),Object(B.a)(n,"marginLeft","auto"),Object(B.a)(n,"marginRight","auto"),Object(B.a)(n,"borderBottom","none"),n},flex:(t={},Object(B.a)(t,e.breakpoints.up("sm"),{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}),Object(B.a)(t,e.breakpoints.down("sm"),{display:"contents"}),Object(B.a)(t,"backgroundColor","transparent"),Object(B.a)(t,"width","100%"),Object(B.a)(t,"paddingLeft",e.spacing(1)),Object(B.a)(t,"paddingRight",e.spacing(1)),Object(B.a)(t,"display","flex"),Object(B.a)(t,"flexDirection","column-reverse"),t),horizontalFlex:{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"},menuIcon:Object(B.a)({},e.breakpoints.up("sm"),{position:"fixed",left:e.spacing(3),top:e.spacing(.5)}),height:{height:"100%"}}}))),me=function(e){var t=e.layout,n=Oe({layout:t}),a=fe();return Object(_.jsx)(A.a,{position:"sticky",className:n.appBar,children:Object(_.jsx)(S.a,{className:n.flex,children:Object(_.jsx)("div",{className:Object(F.a)(n.horizontalFlex,a.responsiveWidth,n.height),children:Object(_.jsx)(he,{})})})})},xe=n(338),ve=Object(d.a)((function(e){return{root:{color:M.a.deepOrange[500]}}})),we=function(e){var t=e.className,n=(e.viewBox,e.color,Object(H.a)(e,["className","viewBox","color"])),a=ve();return Object(_.jsx)(xe.a,Object(W.a)(Object(W.a)({viewBox:"36.692 82.464 327.122 235.331"},n),{},{className:Object(F.a)(a.root,t),children:Object(_.jsx)("g",{children:Object(_.jsx)("path",{d:"M217 83c-6 1.5-165.3 81.5-169.3 85-7.5 6.5-11.2 16.6-11 30 .1 12.8 4 24.3 11.7 34.7 5.2 7.1 8 9.2 20.6 15.6 5.2 2.7 14.9 7.7 21.5 11.2 16.9 8.8 50.8 26.3 58.2 29.9 5.2 2.6 6.2 3.6 6.6 6.2.8 4.6 6.5 13.2 10.9 16.4 12 8.7 28.2 7.5 38.2-2.9 4.6-4.8 7.3-9.9 8.1-15.4.5-3.1 1.4-5.1 2.9-6 1.9-1.3 18.8-10.5 35.1-19.2 13.8-7.4 21.6-11.6 32.3-17.4 6.1-3.3 16.2-8.8 22.3-12.1l11.1-6 3.5 2.1c8.3 5.1 19.3 5.4 28.3.9 5.2-2.7 12-10.4 14.1-16.3 6.8-18.6-7.5-38.7-27.5-38.7-8.3 0-14.4 2.6-20.7 8.9-4.7 4.8-5.8 6.6-7.4 12.3-1.6 6.2-1.6 11.7 0 16 .3.8-1.4 2.3-4.7 4.1-19.5 10.5-47.2 25.3-59 31.5-5.4 2.9-14.2 7.5-19.5 10.4-5.4 2.8-10.2 5.4-10.8 5.8-3.1 2.1-4.6 1.8-7.7-1.5-8-8.8-22.9-11.6-33.4-6.3-4.3 2.3-12.4 9.2-12.4 10.8 0 .3-.4 1.1-.9 1.9-.7 1.1-2.6.4-9.2-3.1-9.7-5.2-22.7-12.1-38.4-20.3-6-3.2-13.2-7-16-8.5-2.7-1.5-10-5.3-16-8.4-11.8-6-14.8-8.2-18.4-13.4-5.7-8.1-8.6-24-6.1-33.1 1.3-4.8 6-10.1 9.1-10.1 2.5 0 13 5.2 42.4 21 9.2 4.9 23 12.2 59.8 31.4 6.6 3.4 12 5.6 14 5.6 3.1 0 13.3-4.8 40.7-19.2 10.6-5.6 27.8-14.6 51-26.6 6.9-3.5 19-9.8 27-14 8-4.2 22.2-11.5 31.5-16.3 9.4-4.8 18-9.7 19.3-10.7 2.6-2.4 2.8-5.2.5-8-1-1.2-13-7.3-26.8-13.8-13.7-6.4-31-14.5-38.4-18-7.3-3.5-13.5-6.4-13.7-6.4-.2 0-9.5-4.4-20.6-9.9C228.9 83 223.7 81.4 217 83zm124.1 119.9c3.8 3.9 4 9.7.5 13.8-2 2.3-3.2 2.8-7.1 2.8-3.9 0-5.1-.5-7.1-2.8-5.5-6.4-1.1-16.7 7.1-16.7 2.7 0 4.4.8 6.6 2.9zm-148.9 80.6c3.8 6-.1 14-7.3 15.1-3 .5-4.2.1-7.2-2.6-3.2-2.7-3.7-3.8-3.7-7.4 0-9.8 13-13.5 18.2-5.1z"})})}))},ye=Object(d.a)((function(e){return{root:{color:M.a.deepOrange[500]}}})),ke=function(e){var t=e.className,n=(e.viewBox,e.color,Object(H.a)(e,["className","viewBox","color"])),a=ye();return Object(_.jsx)(xe.a,Object(W.a)(Object(W.a)({height:"512",viewBox:"0 0 24 24"},n),{},{className:Object(F.a)(a.root,t),children:Object(_.jsx)("path",{d:"m12 24c6.629 0 12-5.371 12-12s-5.371-12-12-12-12 5.371-12 12 5.371 12 12 12zm-6.509-12.26 11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z"})}))},Ce=Object(d.a)((function(e){return{root:{color:M.a.deepOrange[500]}}})),Ne=function(e){var t=e.className,n=(e.viewBox,e.color,Object(H.a)(e,["className","viewBox","color"])),a=Ce();return Object(_.jsx)(xe.a,Object(W.a)(Object(W.a)({viewBox:"0 0 512 512"},n),{},{className:Object(F.a)(a.root,t),children:Object(_.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",d:"m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm116.886719 199.601562c.113281 2.519532.167969 5.050782.167969 7.59375 0 77.644532-59.101563 167.179688-167.183594 167.183594h.003906-.003906c-33.183594 0-64.0625-9.726562-90.066406-26.394531 4.597656.542969 9.277343.8125 14.015624.8125 27.53125 0 52.867188-9.390625 72.980469-25.152344-25.722656-.476562-47.410156-17.464843-54.894531-40.8125 3.582031.6875 7.265625 1.0625 11.042969 1.0625 5.363281 0 10.558593-.722656 15.496093-2.070312-26.886718-5.382813-47.140624-29.144531-47.140624-57.597657 0-.265624 0-.503906.007812-.75 7.917969 4.402344 16.972656 7.050782 26.613281 7.347657-15.777343-10.527344-26.148437-28.523438-26.148437-48.910157 0-10.765624 2.910156-20.851562 7.957031-29.535156 28.976563 35.554688 72.28125 58.9375 121.117187 61.394532-1.007812-4.304688-1.527343-8.789063-1.527343-13.398438 0-32.4375 26.316406-58.753906 58.765625-58.753906 16.902344 0 32.167968 7.144531 42.890625 18.566406 13.386719-2.640625 25.957031-7.53125 37.3125-14.261719-4.394531 13.714844-13.707031 25.222657-25.839844 32.5 11.886719-1.421875 23.214844-4.574219 33.742187-9.253906-7.863281 11.785156-17.835937 22.136719-29.308593 30.429687zm0 0"})}))},Ie=Object(d.a)((function(e){return{root:{color:M.a.deepOrange[500]}}})),De=function(e){var t=e.className,n=(e.viewBox,e.color,Object(H.a)(e,["className","viewBox","color"])),a=Ie();return Object(_.jsx)(xe.a,Object(W.a)(Object(W.a)({viewBox:"0 76 512 360"},n),{},{className:Object(F.a)(a.root,t),children:Object(_.jsxs)("g",{children:[Object(_.jsx)("path",{d:"M507.49 101.721L352.211 256 507.49 410.279c2.807-5.867 4.51-12.353 4.51-19.279V121c0-6.927-1.703-13.412-4.51-19.279z"}),Object(_.jsx)("path",{d:"M467 76H45c-6.927 0-13.412 1.703-19.279 4.51l198.463 197.463c17.548 17.548 46.084 17.548 63.632 0L486.279 80.51C480.412 77.703 473.927 76 467 76z"}),Object(_.jsx)("path",{d:"M4.51 101.721C1.703 107.588 0 114.073 0 121v270c0 6.927 1.703 13.413 4.51 19.279L159.789 256 4.51 101.721z"}),Object(_.jsx)("path",{d:"M331 277.211l-21.973 21.973c-29.239 29.239-76.816 29.239-106.055 0L181 277.211 25.721 431.49C31.588 434.297 38.073 436 45 436h422c6.927 0 13.412-1.703 19.279-4.51L331 277.211z"})]})}))},Le=[{id:"gitbook",icon:Object(_.jsx)(we,{}),url:"https://safe-mars.gitbook.io/safemars/"},{id:"twitter",icon:Object(_.jsx)(Ne,{}),url:"https://twitter.com/SafemarsF"},{id:"email",icon:Object(_.jsx)(De,{}),url:"mailto:info@safe-mars-finance.com"},{id:"telegram",icon:Object(_.jsx)(ke,{}),url:"https://t.me/Safe_Mars_Finance"}],Be=Object(d.a)((function(e){var t;return{root:(t={},Object(B.a)(t,e.breakpoints.down("md"),{flexDirection:"column"}),Object(B.a)(t,e.breakpoints.down("xs"),{paddingLeft:e.spacing(2),paddingRight:e.spacing(2)}),Object(B.a)(t,e.breakpoints.down(360),{flexDirection:"column"}),Object(B.a)(t,"minHeight",e.custom.layout.footerHeight),Object(B.a)(t,"maxWidth",e.custom.layout.topBarMaxWidth),Object(B.a)(t,"display","flex"),Object(B.a)(t,"flexFlow","row wrap"),Object(B.a)(t,"justifyContent","space-between"),Object(B.a)(t,"width","100%"),Object(B.a)(t,"backgroundColor","rgb(71 13 6)"),Object(B.a)(t,"zIndex",e.zIndex.drawer+1),Object(B.a)(t,"marginLeft","auto"),Object(B.a)(t,"marginRight","auto"),t),logo:{justifyContent:"center"},logowith:{display:"flex",alignItems:"center",margin:"auto"},color:{color:e.palette.text.darkLight,marginLeft:e.spacing(1),marginRight:e.spacing(1.5)},styledCircleButton:{display:"flex",marginRight:8,backgroundColor:"rgb(82 57 57 / 50%)",padding:e.spacing(2.5),"&:hover":{boxShadow:"none",backgroundColor:"transparent",transitionDelay:"0.25s","&::after":{animation:"$shine 0.75s cubic-bezier(0.01, 0.56, 1, 1)"}}}}})),Ae=function(){var e=Be(),t=Object(R.a)(),n=Object(z.a)(t.breakpoints.up("md"),{defaultMatches:!0});return Object(_.jsx)("footer",{className:e.root,children:Object(_.jsxs)("div",{className:e.logowith,children:[Object(_.jsx)(V,{className:e.logo}),Object(_.jsx)(T.a,{className:e.color,variant:"subtitle1",children:n&&"\xa9 2021 Safe Mars Token Finance"}),Le.map((function(t,n){return Object(_.jsx)(E.a,{className:e.styledCircleButton,onClick:function(){return e=t.url,void window.open(e,"_blank");var e},icon:t.icon},n)}))]})})},Se=(n(347),n(346),Object(d.a)((function(e){var t;return{root:{display:"flex",flexDirection:"column",marginLeft:"auto",marginRight:"auto"},main:(t={},Object(B.a)(t,e.breakpoints.down("md"),{padding:e.spacing(0,0,0,0)}),Object(B.a)(t,"flexGrow",1),Object(B.a)(t,"minHeight","calc(100vh - ".concat(e.custom.layout.topAppBarHeight+e.custom.layout.footerHeight,"px)")),Object(B.a)(t,"width","100%"),t)}}))),Fe=function(e){var t=e.children,n=e.layout,a=(e.account,Se({}));return Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)("div",{className:a.root,children:[Object(_.jsx)("div",{style:{width:"100%",backgroundColor:"rgb(71 13 6)"},children:Object(_.jsx)(me,{layout:n})}),Object(_.jsx)("main",{className:a.main,children:t}),Object(_.jsx)(Ae,{})]})})},Re=Object(a.memo)(Fe),Te=n(4),ze=n.n(Te),Me=n(310),Ee=n(331),We=n(467),He=n(464),_e=n(312),Ge=n.n(_e),Pe=n(311),Ye=n.n(Pe),Ve={LOADING_LAYER:1e3,DIALOG_OVERLAY:2e3,DIALOG_MAIN:2500},Ue=Object(d.a)((function(e){var t;return{overlay:{position:"fixed",left:0,top:0,width:"100vw",height:"100vh",backgroundColor:e.palette.background.overlay,zIndex:Ve.DIALOG_OVERLAY},rect:function(t){var n;return n={},Object(B.a)(n,e.breakpoints.down("sm"),{padding:"".concat(e.spacing(3.5),"px ").concat(e.spacing(1.5),"px")}),Object(B.a)(n,"position","fixed"),Object(B.a)(n,"transform","translate(-50%, -50%)"),Object(B.a)(n,"left","50%"),Object(B.a)(n,"top","50%"),Object(B.a)(n,"width","calc(100% - ".concat(e.spacing(4),"px)")),Object(B.a)(n,"padding","".concat(e.spacing(3.5),"px ").concat(e.spacing(3),"px")),Object(B.a)(n,"backgroundImage","url(/assets/images/homeBackground.jpeg)"),Object(B.a)(n,"border","solid 0.5px ".concat(M.a.deepOrange[500])),Object(B.a)(n,"boxShadow",e.shadows[10]),Object(B.a)(n,"borderRadius",e.spacing(1.5)),Object(B.a)(n,e.breakpoints.up("sm"),{width:t.width?t.width:660}),Object(B.a)(n,"zIndex",Ve.DIALOG_MAIN),n},smallRect:Object(B.a)({},e.breakpoints.up("sm"),{width:"500"}),closeIcon:(t={},Object(B.a)(t,e.breakpoints.down("sm"),{right:e.spacing(0)}),Object(B.a)(t,"cursor","pointer"),Object(B.a)(t,"position","absolute"),Object(B.a)(t,"top",e.spacing(2)),Object(B.a)(t,"right",e.spacing(2)),t)}})),$e=Object(d.a)((function(e){return{root:{display:"flex",flexDirection:"column"},center:{alignItems:"center",textAlign:"center"}}})),qe=function(e){var t=e.open,n=e.onClose,c=e.smallWidth,o=e.width,r=e.isCheckIcon,i=e.children,s=Ue({width:o});return Object(a.useEffect)((function(){document.body.style.overflow=t?"hidden":"unset"}),[t]),t?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("div",{className:Object(F.a)(s.overlay,"animated fadeIn"),onClick:n}),Object(_.jsxs)("div",{className:Object(F.a)(s.rect,c&&s.smallRect),children:[i,Object(_.jsx)(E.a,{className:s.closeIcon,onClick:n,style:{display:"flex",backgroundColor:r?"#4caf50":"transparent"},icon:r?Object(_.jsx)(Ye.a,{style:{color:"#fff"},fontSize:"default"}):Object(_.jsx)(Ge.a,{style:{color:"#fff"},fontSize:"default"})})]})]}):null},Je=n(12),Xe=n(465),Ke=n(466);function Ze(e){var t=e.color,n=Object(H.a)(e,["color"]);return Object(_.jsx)("svg",Object(W.a)(Object(W.a)({width:"38",height:"38",viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",stroke:t},n),{},{children:Object(_.jsx)("g",{fill:"none",fillRule:"evenodd",children:Object(_.jsxs)("g",{transform:"translate(1 1)",strokeWidth:"2",children:[Object(_.jsx)("circle",{strokeOpacity:".5",cx:"18",cy:"18",r:"18"}),Object(_.jsx)("path",{d:"M36 18c0-9.94-8.06-18-18-18",children:Object(_.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})})]})})}))}var Qe=Object(Je.a)((function(e){return{root:{},card:{backgroundColor:e.palette.background.main,display:"flex",width:"100%",flexDirection:"column",justifyContent:"space-between",cursor:"pointer","&:hover":{transform:"translateY(-5px)",transition:"ease-out 0.4s ",opacity:"100%"},transition:"ease-out 0.4s",borderRadius:"15px"},cardContent:{display:"flex",flexDirection:"row",alignItems:"center",height:"50%",paddingBottom:"16px !important"},iconContainer:{width:"23%"},titleContainer:{display:"flex",flexDirection:"column",justifyContent:"space-evenly",paddingBottom:0,width:"77%"},subtitle:{color:e.palette.subForeColor4},cardAction:{display:"flex",height:"50%",justifyContent:"center"},cardActionButton:{width:130,height:50,borderRadius:25,border:"none",backgroundColor:e.palette.buttonColor6,textTransform:"capitalize"},cardDisibleButton:{width:130,height:50,borderRadius:25,border:"none",backgroundColor:e.palette.text.primary,textTransform:"capitalize"},noDecorationLink:{textDecoration:"none"},selected:{border:"0.5px solid ".concat(e.palette.text.hoverText)}}}),{withTheme:!0})((function(e){var t=e.classes,n=Object(R.a)(),a=Object(z.a)(n.breakpoints.down("sm"),{defaultMatches:!0});return Object(_.jsx)(He.a,{onClick:function(){return e.onClick()},item:!0,xs:12,sm:6,md:6,lg:6,children:Object(_.jsx)(Xe.a,{className:Object(F.a)(t.card,e.connected&&t.selected),children:Object(_.jsxs)(Ke.a,{className:t.cardContent,children:[Object(_.jsx)("div",{className:t.iconContainer,children:Object(_.jsx)("img",{style:{width:a?"28px":"40px",height:a?"28px":"40px"},src:"../../assets/images/".concat(e.name,".png"),alt:"Logo"})}),Object(_.jsx)("div",{className:t.titleContainer,children:Object(_.jsx)(T.a,{variant:"h6",noWrap:!0,children:e.name})}),e.activating&&Object(_.jsx)(Ze,{color:"white",style:{height:"25%",marginLeft:"1rem"}})]})})})})),et=n(66),tt=Object(d.a)((function(e){var t,n;return{actionButton:{backgroundColor:e.custom.palette.darkRed,minWidth:e.spacing(1),border:"none"},dialogActions:{display:"flex",justifyContent:"flex-end",marginTop:e.spacing(3),marginRight:-e.spacing(2/8)},titleLine:{marginBottom:e.spacing(2.5)},fileDropZone:{height:96,minHeight:"unset"},dialogContent:(t={},Object(B.a)(t,e.breakpoints.down(360),{maxHeight:"200px",padding:e.spacing(.5)}),Object(B.a)(t,e.breakpoints.down("xs"),{maxHeight:"382px",padding:e.spacing(1,0,1,.5)}),Object(B.a)(t,"display","flex"),Object(B.a)(t,"justifyContent","center"),Object(B.a)(t,"padding",e.spacing(1)),Object(B.a)(t,"maxHeight","460px"),Object(B.a)(t,"width","auto"),Object(B.a)(t,"overflowX","unset"),Object(B.a)(t,"overflowY","scroll"),Object(B.a)(t,"&::-webkit-scrollbar-track",{borderRadius:2,backgroundColor:"transparent"}),Object(B.a)(t,"&::-webkit-scrollbar",{width:5,backgroundColor:"transparent"}),t),container:(n={},Object(B.a)(n,e.breakpoints.down("sm"),{padding:0}),Object(B.a)(n,"display","flex"),Object(B.a)(n,"padding","2px 8px 8px 8px"),Object(B.a)(n,"margin",0),Object(B.a)(n,"flexGrow",1),n)}})),nt=function(e){var t=e.open,n=e.onClose,c=e.headerTitle,o=e.activatingConnector,r=e.setActivatingConnector,s=e.triedEager,d=e.context,j=tt(),g=$e(),p=Object(a.useState)(!1),x=Object(l.a)(p,2),v=x[0],w=x[1],y={WalletConnect:h,MetaMask:O,Fortmatic:m,Binance:f},k=d.connector,C=d.activate,N=d.deactivate,I=d.active,D=d.error,L=function(){var e=Object(Me.a)(ze.a.mark((function e(t){return ze.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(_.jsx)(qe,{open:t,onClose:n,children:Object(_.jsx)("form",{onSubmit:L,children:Object(_.jsxs)("div",{className:g.root,children:[Object(_.jsx)(T.a,{variant:"h6",className:j.titleLine,children:c}),Object(_.jsx)(We.a,{dividers:!0,className:j.dialogContent,children:Object(_.jsxs)(He.a,{container:!0,spacing:2,className:j.container,children:[Object.keys(y).filter((function(e,t){return t<(v?Object.keys(y).length:4)})).map((function(e){var t=y[e],n=t===o,a=t===k,c=!s||!!o||a||!!D;return Object(_.jsxs)(Qe,{connected:a,disabled:c,name:e,logoType:e,activating:n,onClick:function(){return function(e){r(e),C(e)}(t)},children:[Object(_.jsx)("div",{style:{position:"absolute",top:"0",left:"0",height:"100%",display:"flex",alignItems:"center",color:"black",margin:"0 0 0 1rem"},children:n&&Object(_.jsx)(Ze,{color:"black",style:{height:"25%",marginLeft:"-1rem"}})}),e]},e)})),Object(_.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[D instanceof u.b&&Object(_.jsx)(et.a,{style:{height:"3rem",marginTop:"2rem",borderRadius:"1rem",cursor:"pointer"},variant:"outlined",onClick:function(){window.open("https://metamask.io/download","_blank")},children:"Install Metamask"}),!!D&&Object(_.jsx)("h4",{style:{marginTop:"1rem",marginBottom:"0",color:"#16ACE2"},children:function(e){return e instanceof u.b?"No Binance browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.":e instanceof i.a?"You're connected to an unsupported network. Please change network as Binance smart chain":e instanceof u.c||e instanceof b.a||e instanceof Ee.a?"Please authorize this website to access your Ethereum account.":(console.error(e),"An unknown error occurred. Check the console for more details.")}(D)})]})]})}),Object(_.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:(I||D)&&Object(_.jsx)(et.a,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"2.5rem",marginTop:"1rem",borderRadius:"1rem",borderColor:"red",cursor:"pointer",color:"textSecondary",backgroundColor:M.a.deepOrange[500]},onClick:function(){N()},children:"Disconnect"})}),y.length>4?Object(_.jsx)("div",{className:j.dialogActions,children:Object(_.jsx)(et.a,{style:{borderRadius:"1rem",cursor:"pointer"},variant:"outlined",onClick:function(){w(!v)},children:v?"Show less":"Show more"})}):null]})})})},at=n(313),ct=function(e){var t=e.notifications,n=e.notificationType,c=Object(k.b)().enqueueSnackbar;return Object(a.useEffect)((function(){if(t&&Object.values(t).length)for(var e=0,a=Object.values(t);e<a.length;e++){var o=a[e];o?c(o,{variant:n}):console.log("[notifications] notification => ",o)}}),[t,c,n]),Object(_.jsx)(_.Fragment,{})},ot=Object(y.a)((function(){return N()(Promise.all([n.e(4),n.e(6)]).then(n.bind(null,982)),100)})),rt=Object(d.a)((function(){return{primaryTextColor:{color:"#fff"}}})),it=Object(x.f)((function(){var e=rt(),t=Object(i.c)(),n=t.connector,c=t.library,o=t.chainId,r=t.account,s=t.deactivate,d=t.active,b=Object(a.useState)(),j=Object(l.a)(b,2),u=j[0],g=j[1],p=Object(a.useState)(),h=Object(l.a)(p,2),f=h[0],m=h[1],y=Object(a.useState)(),C=Object(l.a)(y,2),N=C[0],I=C[1];Object(a.useEffect)((function(){f&&f===n&&m(void 0)}),[f,n]),Object(a.useEffect)((function(){if(r&&c){var e=!1;return c.getBalance(r).then((function(t){e||I(t)})).catch((function(){e||I(null)})),function(){e=!0,I(void 0)}}}),[r,c,o]);var D=function(){var e=Object(i.c)(),t=e.activate,n=e.active,c=Object(a.useState)(!1),o=Object(l.a)(c,2),r=o[0],s=o[1];return Object(a.useEffect)((function(){O.isAuthorized().then((function(e){e?t(O,void 0,!0).catch((function(){s(!0)})):s(!0)}))}),[t]),Object(a.useEffect)((function(){!r&&n&&s(!0)}),[r,n]),r}();!function(e){var t=Object(i.c)(),n=t.active,c=t.error,o=t.activate,r=t.deactivate;Object(a.useEffect)((function(){var t=window.ethereum;if(t&&t.on&&!n&&!c&&!e){var a=function(){console.log("Handling 'connect' event"),o(O)},i=function(e){console.log("Handling 'chainChanged' event with payload",e),o(O)},s=function(e){console.log("Handling 'accountsChanged' event with payload",e),e.length>0&&o(O)},l=function(e){console.log("Handling 'networkChanged' event with payload",e),o(O)},d=function(){console.log("Handling 'disconnect' event"),r(O)};return t.on("connect",a),t.on("chainChanged",i),t.on("accountsChanged",s),t.on("networkChanged",l),t.on("disconnect",d),function(){t.removeListener&&(t.removeListener("connect",a),t.removeListener("chainChanged",i),t.removeListener("accountsChanged",s),t.removeListener("networkChanged",l),t.on("disconnect",d))}}}),[n,c,e,o,r])}(!D||!!f);var B,A=Object(a.useState)(!1),S=Object(l.a)(A,2),F=S[0],R=S[1],T=Object(a.useState)(!1),z=Object(l.a)(T,1)[0];return Object(a.useEffect)((function(){document.body.style.overflow=u?"hidden":"unset"}),[u]),Object(_.jsx)(Q.a.Provider,{value:{loadingInfo:F,library:c,active:d,setLoadingInfo:R,setIsWalletDialog:g,account:r,chainId:o,deactivate:s,balance:N},children:Object(_.jsx)(w.a,{theme:L,children:Object(_.jsxs)(k.a,{classes:{variantSuccess:e.primaryTextColor,variantError:e.primaryTextColor,variantWarning:e.primaryTextColor,variantInfo:e.primaryTextColor},anchorOrigin:{vertical:"bottom",horizontal:"left"},maxSnack:3,children:[Object(_.jsx)(v.a,{}),Object(_.jsx)(ct,{notifications:"",notificationType:"success"}),Object(_.jsx)(a.Suspense,{fallback:Object(_.jsx)(at.a,{wholeOverlay:!0}),children:Object(_.jsxs)(Re,{layout:z,account:r,children:[u&&Object(_.jsx)(nt,{headerTitle:"Select a Wallet",open:!0,onClose:(B=!1,function(){g(B)}),setActivatingConnector:m,activatingConnector:f,triedEager:D,context:t}),Object(_.jsx)(x.c,{children:Object(_.jsx)(x.a,{render:function(){return Object(_.jsx)(x.c,{children:Object(_.jsx)(x.a,{exact:!0,path:U.url,component:ot})})}})})]})})]})})})}));n(420),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var st=Object(_.jsx)(r.a,{children:Object(_.jsx)(i.b,{getLibrary:function(e){var t=new s.a(e);return t.pollingInterval=12e3,t},children:Object(_.jsx)(it,{})})});o.a.render(st,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},66:function(e,t,n){"use strict";var a=n(14),c=n(22),o=(n(0),n(161)),r=n(437),i=n(339),s=n(8),l=n(1),d=Object(o.a)((function(e){return{wrapper:function(e){return{position:"relative",width:e.fullWidth?"100%":null}},root:{margin:e.spacing(3/8),boxShadow:"none",textTransform:"none",backgroundColor:e.palette.secondary.main,color:e.palette.primary.contrastText,minWidth:e.spacing(5),position:"relative",overflow:"hidden","&::after":{content:'""',position:"absolute",top:0,left:"150%",width:"200%",height:"100%",transform:"skewX(-20deg)",transition:"background 0.4s ease 0s",backgroundImage:"linear-gradient(to right, transparent, rgba(255,255,255,0.20), transparent)"},"&:hover":{boxShadow:"none",backgroundColor:e.palette.background.main,transitionDelay:"0.25s","&::after":{animation:"$shine 0.75s cubic-bezier(0.01, 0.56, 1, 1)"}},"&:disabled":{color:e.palette.text.secondary,border:"none"}},outlined:{borderColor:e.palette.text.secondary,backgroundColor:"transparent","&:hover":{backgroundColor:"transparent",borderColor:e.palette.secondary.contrastText},"&:disabled":{color:e.palette.text.secondary}},buttonProgress:{color:e.palette.secondary.main,position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},"@keyframes shine":{"0%":{left:"200%"},"100%":{left:"-200%"}}}}));t.a=function(e){var t=e.className,n=e.type,o=e.color,b=e.variant,j=void 0===b?"contained":b,u=(e.disabled,e.loading),g=e.children,p=e.fullWidth,h=e.disable,f=Object(c.a)(e,["className","type","color","variant","disabled","loading","children","fullWidth","disable"]),O=d({fullWidth:p});return Object(l.jsxs)("div",{className:O.wrapper,children:[Object(l.jsx)(r.a,Object(a.a)(Object(a.a)({className:Object(s.a)(t,O.root,"outlined"===j&&O.outlined),color:o,variant:j,type:n,disabled:u||h},f),{},{children:g})),u&&Object(l.jsx)(i.a,{size:24,className:O.buttonProgress})]})}},72:function(e,t,n){"use strict";var a=n(14),c=n(22),o=n(435),r=n(161),i=n(8),s=n(339),l=n(126),d=n(1),b=Object(r.a)((function(e){return{root:{position:"relative",boxShadow:"none",width:e.spacing(5.2),height:e.spacing(5.2),minHeight:e.spacing(4.5)},loadingSpin:{position:"absolute"}}}));t.a=function(e){var t=e.className,n=e.icon,r=e.href,j=e.loading,u=e.disabled,g=e.color,p=Object(c.a)(e,["className","icon","href","loading","disabled","color"]),h=b();return Object(d.jsxs)(o.a,Object(a.a)(Object(a.a)({component:r?l.a:"button",href:r,className:Object(i.a)(h.root,t),disabled:j||u,color:g},p),{},{children:[n,j&&Object(d.jsx)(s.a,{className:h.loadingSpin,color:"primary"===g?"secondary":"primary",size:16})]}))}}},[[434,1,3]]]);
//# sourceMappingURL=main.b5e755e4.chunk.js.map