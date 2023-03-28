"use strict";(self.webpackChunkdocs_v_3=self.webpackChunkdocs_v_3||[]).push([[3935],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9503:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={id:"connect.AwaitMessagesOptions",title:"Interface: AwaitMessagesOptions",sidebar_label:"AwaitMessagesOptions",custom_edit_url:null},a=void 0,l={unversionedId:"api/interfaces/connect.AwaitMessagesOptions",id:"api/interfaces/connect.AwaitMessagesOptions",title:"Interface: AwaitMessagesOptions",description:"connect.AwaitMessagesOptions",source:"@site/docs/api/interfaces/connect.AwaitMessagesOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/connect.AwaitMessagesOptions",permalink:"/docs/api/interfaces/connect.AwaitMessagesOptions",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"connect.AwaitMessagesOptions",title:"Interface: AwaitMessagesOptions",sidebar_label:"AwaitMessagesOptions",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"SessionInfo",permalink:"/docs/api/interfaces/api_model_sessionInfo.SessionInfo"},next:{title:"CollectorOptions",permalink:"/docs/api/interfaces/connect.CollectorOptions"}},s={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"dispose",id:"dispose",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"errors",id:"errors",level:3},{value:"idle",id:"idle",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"max",id:"max",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"maxProcessed",id:"maxprocessed",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"time",id:"time",level:3},{value:"Inherited from",id:"inherited-from-4",level:4}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/connect"},"connect"),".AwaitMessagesOptions"),(0,i.kt)("p",null,"Options to be applied to the collector."),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/connect.CollectorOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"CollectorOptions"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"AwaitMessagesOptions"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"dispose"},"dispose"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"dispose"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Whether to dispose data when it's deleted"),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/connect.CollectorOptions"},"CollectorOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/connect.CollectorOptions#dispose-6"},"dispose")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"errors"},"errors"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"errors"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("p",null,'An array of "reasons" that would result in the awaitMessages command to throw an error.'),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"idle"},"idle"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"idle"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Max time allowed idle"),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/connect.CollectorOptions"},"CollectorOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/connect.CollectorOptions#idle-6"},"idle")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"max"},"max"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"max"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"The maximum amount of items to collect"),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/connect.CollectorOptions"},"CollectorOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/connect.CollectorOptions#max-6"},"max")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"maxprocessed"},"maxProcessed"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"maxProcessed"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"The maximum amount of items to process"),(0,i.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/connect.CollectorOptions"},"CollectorOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/connect.CollectorOptions#maxprocessed-6"},"maxProcessed")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"time"},"time"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"time"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Max time to wait for items in milliseconds"),(0,i.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/connect.CollectorOptions"},"CollectorOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/connect.CollectorOptions#time-6"},"time")))}d.isMDXComponent=!0}}]);