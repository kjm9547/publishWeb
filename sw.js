if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const c=e=>n(e,t),d={module:{uri:t},exports:o,require:c};i[t]=Promise.all(s.map((e=>d[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-B94JJNeX.js",revision:null},{url:"assets/index-DiwrgTda.css",revision:null},{url:"index.html",revision:"8c42753fbbe0fb7b62e25491ace27a00"},{url:"registerSW.js",revision:"6886fad3216873b9033e90f9dbd44eb6"},{url:"favicon_16x16.png",revision:"884197fce4c9fae7a3cd57e73736aba5"},{url:"favicon_32x32.png",revision:"c658bb1145fc7957892190f836749caa"},{url:"manifest.webmanifest",revision:"2d4d1b321d49fcd65f5a3a2456680da8"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
