(()=>{var e={};e.id=520,e.ids=[520],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},9428:e=>{"use strict";e.exports=require("buffer")},5511:e=>{"use strict";e.exports=require("crypto")},4735:e=>{"use strict";e.exports=require("events")},1630:e=>{"use strict";e.exports=require("http")},5591:e=>{"use strict";e.exports=require("https")},1645:e=>{"use strict";e.exports=require("net")},3873:e=>{"use strict";e.exports=require("path")},1997:e=>{"use strict";e.exports=require("punycode")},7910:e=>{"use strict";e.exports=require("stream")},4631:e=>{"use strict";e.exports=require("tls")},9551:e=>{"use strict";e.exports=require("url")},4075:e=>{"use strict";e.exports=require("zlib")},7815:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d});var s=r(260),a=r(8203),i=r(5155),o=r.n(i),n=r(7292),l={};for(let e in n)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);r.d(t,l);let d=["",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,3751)),"/Users/okabemiyukisusumu/works/self-introduction-card/src/app/login/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,1354)),"/Users/okabemiyukisusumu/works/self-introduction-card/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/okabemiyukisusumu/works/self-introduction-card/src/app/login/page.tsx"],u={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/login/page",pathname:"/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},8651:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3219,23)),Promise.resolve().then(r.t.bind(r,4863,23)),Promise.resolve().then(r.t.bind(r,5155,23)),Promise.resolve().then(r.t.bind(r,802,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,8530,23)),Promise.resolve().then(r.t.bind(r,8921,23))},7971:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6959,23)),Promise.resolve().then(r.t.bind(r,3875,23)),Promise.resolve().then(r.t.bind(r,8903,23)),Promise.resolve().then(r.t.bind(r,7174,23)),Promise.resolve().then(r.t.bind(r,4178,23)),Promise.resolve().then(r.t.bind(r,7190,23)),Promise.resolve().then(r.t.bind(r,1365,23))},921:()=>{},7369:()=>{},5074:(e,t,r)=>{Promise.resolve().then(r.bind(r,3751))},9578:(e,t,r)=>{Promise.resolve().then(r.bind(r,6131))},4439:(e,t,r)=>{"use strict";r.d(t,{A:()=>m});var s=r(5512),a=r(3371),i=r(8531),o=r.n(i),n=r(5103),l=r(8009);function d(){let{theme:e,setTheme:t}=(0,a.D)(),[r,i]=(0,l.useState)(!1);return r?(0,s.jsx)("button",{onClick:()=>t("dark"===e?"light":"dark"),className:"hover:opacity-70 duration-300 absolute right-4 top-1/2 transform -translate-y-1/2",children:"dark"===e?(0,s.jsx)(n.default,{src:"/icon_light_mode.svg",alt:"Light mode icon",width:24,height:24}):(0,s.jsx)(n.default,{src:"/icon_dark_mode.svg",alt:"Dark mode icon",width:24,height:24})}):null}var c=r(9334);function u(){let e=(0,c.usePathname)(),t=(0,c.useRouter)(),[r,a]=(0,l.useState)(!1),[i,u]=(0,l.useState)(!1),m=i?{filter:"invert(1)"}:{};return(0,s.jsx)("header",{className:"flex justify-between p-4 bg-gray-100 dark:bg-gray-900 dark:text-white transition-colors relative",children:(0,s.jsxs)("nav",{className:"flex justify-between items-center w-4/5 md:w-11/12 mx-auto",children:["/"===e&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o(),{href:"/",className:"text-black dark:text-white",children:(0,s.jsx)("div",{className:"h-8 w-auto",children:(0,s.jsx)(n.default,{src:"/images/logo.svg",alt:"Jicoca",width:97,height:19,className:"h-full w-auto",style:m})})}),(0,s.jsxs)(o(),{href:"/mypage/",onClick:e=>{r&&(e.preventDefault(),t.push("/login"))},className:"bg-blue-500 text-white p-2 rounded hover:opacity-70 flex items-center",children:[r&&(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 mr-1",viewBox:"0 0 20 20",fill:"currentColor",children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",clipRule:"evenodd"})}),"マイページへ"]})]}),"/mypage"===e&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o(),{href:"/",className:"text-black dark:text-white",children:(0,s.jsx)("div",{className:"h-8 w-auto",children:(0,s.jsx)(n.default,{src:"/images/logo.svg",alt:"Jicoca",width:97,height:19,className:"h-full w-auto",style:m})})}),(0,s.jsx)(o(),{href:"/",className:"bg-blue-500 text-white p-2 rounded hover:opacity-70",children:"← 戻る"})]}),(0,s.jsx)(d,{})]})})}function m({children:e}){return(0,s.jsx)(a.N,{attribute:"class",children:(0,s.jsxs)("div",{className:"min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors",children:[(0,s.jsx)(u,{}),e]})})}},3077:(e,t,r)=>{"use strict";r.d(t,{J:()=>s});let s=(0,r(6201).UU)("https://lzvnckwdxfuwtajakqrr.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6dm5ja3dkeGZ1d3RhamFrcXJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAxOTEyMDksImV4cCI6MjA1NTc2NzIwOX0.VU2ZAscyO3YjtuvKldoa93eOWD7LIbKCZMyCVyIzKpU")},6131:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var s=r(5512),a=r(8009),i=r(9334),o=r(5103),n=r(3077),l=r(4439);function d(){let e=(0,i.useRouter)(),[t,r]=(0,a.useState)(""),[d,c]=(0,a.useState)(""),[u,m]=(0,a.useState)(!0),[h,p]=(0,a.useState)(!1),[x,g]=(0,a.useState)(""),b=async r=>{if(r.preventDefault(),p(!0),g(""),u){let{error:r}=await n.J.auth.signInWithPassword({email:t,password:d});r?g(r.message):e.push("/mypage")}else{let{error:e}=await n.J.auth.signUp({email:t,password:d});e?g(e.message):alert("確認メールを送信しました！メールを確認してください。")}p(!1)};return(0,s.jsx)(l.A,{children:(0,s.jsx)("div",{className:"container mx-auto px-4 py-8 flex min-h-[calc(100vh-80px)] items-center justify-center",children:(0,s.jsxs)("div",{className:"w-full max-w-md bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700",children:[(0,s.jsxs)("div",{className:"p-4 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700",children:[(0,s.jsx)("div",{className:"flex justify-center mb-2",children:(0,s.jsx)("div",{className:"h-8 w-auto text-white",children:(0,s.jsx)(o.default,{src:"/images/logo.svg",alt:"Jicoca",width:97,height:19,className:"h-full w-auto",style:{filter:"brightness(0) invert(1)"}})})}),(0,s.jsx)("h2",{className:"text-2xl font-bold text-center text-white",children:u?"ログイン":"新規登録"})]}),(0,s.jsxs)("div",{className:"p-6",children:[x&&(0,s.jsx)("div",{className:"mb-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-md text-sm",children:x}),(0,s.jsxs)("form",{onSubmit:b,className:"space-y-4",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block font-medium text-gray-700 dark:text-gray-300 mb-1",children:"メールアドレス"}),(0,s.jsx)("input",{type:"email",placeholder:"example@example.com",value:t,onChange:e=>r(e.target.value),className:"w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",required:!0})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block font-medium text-gray-700 dark:text-gray-300 mb-1",children:"パスワード"}),(0,s.jsx)("input",{type:"password",placeholder:"8文字以上のパスワード",value:d,onChange:e=>c(e.target.value),className:"w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",required:!0})]}),(0,s.jsx)("div",{className:"pt-4",children:(0,s.jsx)("button",{type:"submit",disabled:h,className:"w-full px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-md shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-md",children:h?"処理中...":u?"ログイン":"新規登録"})}),(0,s.jsx)("div",{className:"text-center pt-2",children:(0,s.jsxs)("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:[u?"アカウントがないですか？":"すでにアカウントをお持ちですか？"," ",(0,s.jsx)("button",{type:"button",className:"text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium hover:underline",onClick:()=>m(!u),children:u?"新規登録はこちら":"ログインはこちら"})]})})]}),(0,s.jsxs)("div",{className:"mt-6 pt-6 border-t border-gray-200 dark:border-gray-700",children:[(0,s.jsx)("button",{onClick:()=>{sessionStorage.setItem("guestMode","true"),e.push("/")},className:"w-full px-6 py-2 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-medium rounded-md shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300",children:"ゲストとして閲覧する"}),(0,s.jsx)("p",{className:"text-center text-xs text-gray-500 dark:text-gray-400 mt-2",children:"※ゲストモードではTOPページのみ閲覧できます"})]})]})]})})})}},1354:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i,metadata:()=>a});var s=r(2740);r(1135);let a={title:"Jicoca - エンジニア向け自己紹介カードアプリ",description:"Jicocaはエンジニア向け自己紹介カードアプリです。エンジニアの交流のきっかけになれば嬉しいです。",keywords:["エンジニア","自己紹介","アプリ"],openGraph:{title:"Jicoca - エンジニア向け自己紹介カードアプリ",description:"Jicocaはエンジニア向け自己紹介カードアプリです。エンジニアの交流のきっかけになれば嬉しいです。",type:"website"},twitter:{card:"summary_large_image",title:"Jicoca - エンジニア向け自己紹介カードアプリ",description:"Jicocaはエンジニア向け自己紹介カードアプリです。エンジニアの交流のきっかけになれば嬉しいです。"}};function i({children:e}){return(0,s.jsx)("html",{lang:"ja",children:(0,s.jsx)("body",{children:e})})}},3751:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/okabemiyukisusumu/works/self-introduction-card/src/app/login/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/okabemiyukisusumu/works/self-introduction-card/src/app/login/page.tsx","default")},440:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(8077);let a=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},1135:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,403,380],()=>r(7815));module.exports=s})();