(()=>{var e={};e.id=918,e.ids=[918],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},9428:e=>{"use strict";e.exports=require("buffer")},5511:e=>{"use strict";e.exports=require("crypto")},4735:e=>{"use strict";e.exports=require("events")},1630:e=>{"use strict";e.exports=require("http")},5591:e=>{"use strict";e.exports=require("https")},1645:e=>{"use strict";e.exports=require("net")},3873:e=>{"use strict";e.exports=require("path")},1997:e=>{"use strict";e.exports=require("punycode")},7910:e=>{"use strict";e.exports=require("stream")},4631:e=>{"use strict";e.exports=require("tls")},9551:e=>{"use strict";e.exports=require("url")},4075:e=>{"use strict";e.exports=require("zlib")},7747:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>o.a,__next_app__:()=>c,pages:()=>u,routeModule:()=>m,tree:()=>d});var a=t(260),s=t(8203),i=t(5155),o=t.n(i),n=t(7292),l={};for(let e in n)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);t.d(r,l);let d=["",{children:["mypage",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,9750)),"/Users/okabemiyukisusumu/works/self-introduction-card/src/app/mypage/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,1354)),"/Users/okabemiyukisusumu/works/self-introduction-card/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(t.t.bind(t,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(t.t.bind(t,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/Users/okabemiyukisusumu/works/self-introduction-card/src/app/mypage/page.tsx"],c={require:t,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:s.RouteKind.APP_PAGE,page:"/mypage/page",pathname:"/mypage",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},8651:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,3219,23)),Promise.resolve().then(t.t.bind(t,4863,23)),Promise.resolve().then(t.t.bind(t,5155,23)),Promise.resolve().then(t.t.bind(t,802,23)),Promise.resolve().then(t.t.bind(t,9350,23)),Promise.resolve().then(t.t.bind(t,8530,23)),Promise.resolve().then(t.t.bind(t,8921,23))},7971:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,6959,23)),Promise.resolve().then(t.t.bind(t,3875,23)),Promise.resolve().then(t.t.bind(t,8903,23)),Promise.resolve().then(t.t.bind(t,7174,23)),Promise.resolve().then(t.t.bind(t,4178,23)),Promise.resolve().then(t.t.bind(t,7190,23)),Promise.resolve().then(t.t.bind(t,1365,23))},921:()=>{},7369:()=>{},1560:(e,r,t)=>{Promise.resolve().then(t.bind(t,9750))},8408:(e,r,t)=>{Promise.resolve().then(t.bind(t,5949))},4439:(e,r,t)=>{"use strict";t.d(r,{A:()=>m});var a=t(5512),s=t(3371),i=t(8531),o=t.n(i),n=t(5103),l=t(8009);function d(){let{theme:e,setTheme:r}=(0,s.D)(),[t,i]=(0,l.useState)(!1);return t?(0,a.jsx)("button",{onClick:()=>r("dark"===e?"light":"dark"),className:"hover:opacity-70 duration-300 absolute right-4 top-1/2 transform -translate-y-1/2",children:"dark"===e?(0,a.jsx)(n.default,{src:"/icon_light_mode.svg",alt:"Light mode icon",width:24,height:24}):(0,a.jsx)(n.default,{src:"/icon_dark_mode.svg",alt:"Dark mode icon",width:24,height:24})}):null}var u=t(9334);function c(){let e=(0,u.usePathname)(),r=(0,u.useRouter)(),[t,s]=(0,l.useState)(!1);return(0,a.jsx)("header",{className:"flex justify-between p-4 bg-gray-100 dark:bg-gray-900 dark:text-white transition-colors relative",children:(0,a.jsxs)("nav",{className:"flex justify-between items-center w-4/5 md:w-11/12 mx-auto",children:["/"===e&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{children:"TOP"}),(0,a.jsxs)(o(),{href:"/mypage/",onClick:e=>{t&&(e.preventDefault(),r.push("/login"))},className:"bg-blue-500 text-white p-2 rounded hover:opacity-70 flex items-center",children:[t&&(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 mr-1",viewBox:"0 0 20 20",fill:"currentColor",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",clipRule:"evenodd"})}),"マイページへ"]})]}),"/mypage"===e&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{children:"マイページ"}),(0,a.jsx)(o(),{href:"/",className:"bg-blue-500 text-white p-2 rounded hover:opacity-70",children:"← 戻る"})]}),(0,a.jsx)(d,{})]})})}function m({children:e}){return(0,a.jsx)(s.N,{attribute:"class",children:(0,a.jsxs)("div",{className:"min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors",children:[(0,a.jsx)(c,{}),e]})})}},3077:(e,r,t)=>{"use strict";t.d(r,{J:()=>a});let a=(0,t(6201).UU)("https://lzvnckwdxfuwtajakqrr.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6dm5ja3dkeGZ1d3RhamFrcXJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAxOTEyMDksImV4cCI6MjA1NTc2NzIwOX0.VU2ZAscyO3YjtuvKldoa93eOWD7LIbKCZMyCVyIzKpU")},5949:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>l});var a=t(5512),s=t(8009),i=t(5103),o=t(4439),n=t(3077);function l(){let[e,r]=(0,s.useState)({name:"",job:"",language:"",hobby:"",bio:"",x_link:"",github_link:"",icon_url:""}),[t,l]=(0,s.useState)(null),[d,u]=(0,s.useState)(!1),c=n.J,m=t=>{r({...e,[t.target.name]:t.target.value})},b=async()=>{u(!0);let{data:{user:a}}=await c.auth.getUser();if(!a){alert("ログインしてください"),u(!1);return}let s=e.icon_url;if(t){let e=t.name.split(".").pop(),r=`${a.id}/icon.${e}`,{error:i}=await c.storage.from("icons").upload(r,t,{upsert:!0});if(i){console.error("アップロードエラー:",i.message),alert("アイコンのアップロードに失敗しました"),u(!1);return}s=`https://lzvnckwdxfuwtajakqrr.supabase.co/storage/v1/object/public/icons/${r}`}let{error:i}=await c.from("users").upsert({id:a.id,...e,icon_url:s},{onConflict:"id"});i?(console.error("更新エラー:",i.message),alert("データ更新に失敗しました")):(alert("データを保存しました！"),r(e=>({...e,icon_url:s}))),u(!1)};return(0,a.jsx)(o.A,{children:(0,a.jsxs)("div",{className:"container mx-auto px-4 py-8",children:[(0,a.jsx)("h1",{className:"text-3xl font-bold mb-8 text-center",children:"マイプロフィール編集"}),(0,a.jsxs)("div",{className:"max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700",children:[(0,a.jsx)("div",{className:"p-4 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700",children:(0,a.jsx)("div",{className:"flex items-center justify-center",children:e.icon_url?(0,a.jsx)(i.default,{src:e.icon_url,width:100,height:100,alt:"プロフィール画像",className:"rounded-full border-4 border-white dark:border-gray-800 object-cover h-24 w-24"}):(0,a.jsx)("div",{className:"rounded-full bg-gray-300 dark:bg-gray-600 h-24 w-24 flex items-center justify-center",children:(0,a.jsx)("span",{className:"text-2xl text-gray-600 dark:text-gray-300",children:e.name?e.name.charAt(0).toUpperCase():"?"})})})}),(0,a.jsxs)("div",{className:"p-6 space-y-6",children:[(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block font-medium text-gray-700 dark:text-gray-300 mb-1",children:"名前"}),(0,a.jsx)("input",{name:"name",value:e.name,onChange:m,className:"w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block font-medium text-gray-700 dark:text-gray-300 mb-1",children:"アイコン"}),(0,a.jsx)("input",{type:"file",onChange:e=>{let r=e.target.files?.[0];r&&l(r)},className:"w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 dark:file:bg-blue-900 dark:file:text-blue-200 hover:file:bg-blue-100 dark:hover:file:bg-blue-800"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block font-medium text-gray-700 dark:text-gray-300 mb-1",children:"職業・職種"}),(0,a.jsx)("input",{name:"job",value:e.job,onChange:m,className:"w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block font-medium text-gray-700 dark:text-gray-300 mb-1",children:"得意な言語"}),(0,a.jsx)("input",{name:"language",value:e.language,onChange:m,className:"w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block font-medium text-gray-700 dark:text-gray-300 mb-1",children:"趣味"}),(0,a.jsx)("input",{name:"hobby",value:e.hobby,onChange:m,className:"w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block font-medium text-gray-700 dark:text-gray-300 mb-1",children:"自己紹介文"}),(0,a.jsx)("textarea",{name:"bio",value:e.bio,onChange:m,className:"w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",rows:3})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("label",{className:"block font-medium text-gray-700 dark:text-gray-300 mb-1",children:"SNSアカウント"}),(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)("svg",{className:"w-6 h-6 text-blue-500",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:(0,a.jsx)("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),(0,a.jsx)("input",{name:"x_link",value:e.x_link,placeholder:"Xのリンク",onChange:m,className:"flex-1 p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"})]}),(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)("svg",{className:"w-6 h-6 text-gray-800 dark:text-gray-200",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})}),(0,a.jsx)("input",{name:"github_link",value:e.github_link,placeholder:"GitHubのリンク",onChange:m,className:"flex-1 p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"})]})]})]}),(0,a.jsx)("div",{className:"flex justify-center pt-4",children:(0,a.jsx)("button",{onClick:b,disabled:d,className:"px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-md shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-md",children:d?"更新中...":"プロフィールを更新"})})]})]})]})})}},1354:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>i,metadata:()=>s});var a=t(2740);t(1135);let s={title:"Create Next App",description:"Generated by create next app"};function i({children:e}){return(0,a.jsx)("html",{lang:"ja",children:(0,a.jsx)("body",{children:e})})}},9750:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>a});let a=(0,t(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/okabemiyukisusumu/works/self-introduction-card/src/app/mypage/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/okabemiyukisusumu/works/self-introduction-card/src/app/mypage/page.tsx","default")},440:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>s});var a=t(8077);let s=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,a.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},1135:()=>{}};var r=require("../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[638,403,380],()=>t(7747));module.exports=a})();