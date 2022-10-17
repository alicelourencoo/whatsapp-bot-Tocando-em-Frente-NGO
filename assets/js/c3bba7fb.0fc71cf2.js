"use strict";(self.webpackChunkdocs_v_3=self.webpackChunkdocs_v_3||[]).push([[3583],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=l.createContext({}),s=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return l.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,k=c["".concat(i,".").concat(m)]||c[m]||u[m]||a;return n?l.createElement(k,o(o({ref:t},d),{},{components:n})):l.createElement(k,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=c;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<a;s++)o[s]=n[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5485:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var l=n(7462),r=(n(7294),n(3905));const a={id:"connect.SimpleListener",title:"Enumeration: SimpleListener",sidebar_label:"SimpleListener",custom_edit_url:null},o=void 0,p={unversionedId:"api/enums/connect.SimpleListener",id:"api/enums/connect.SimpleListener",title:"Enumeration: SimpleListener",description:"connect.SimpleListener",source:"@site/docs/api/enums/connect.SimpleListener.md",sourceDirName:"api/enums",slug:"/api/enums/connect.SimpleListener",permalink:"/docs/api/enums/connect.SimpleListener",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"connect.SimpleListener",title:"Enumeration: SimpleListener",sidebar_label:"SimpleListener",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"MessageTypes",permalink:"/docs/api/enums/api_model_message.MessageTypes"},next:{title:"ValidationType",permalink:"/docs/api/enums/structures_Dialog.ValidationType"}},i={},s=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"Ack",id:"ack",level:3},{value:"AddedToGroup",id:"addedtogroup",level:3},{value:"AnyMessage",id:"anymessage",level:3},{value:"Battery",id:"battery",level:3},{value:"Button",id:"button",level:3},{value:"ChatDeleted",id:"chatdeleted",level:3},{value:"ChatOpened",id:"chatopened",level:3},{value:"ChatState",id:"chatstate",level:3},{value:"ContactAdded",id:"contactadded",level:3},{value:"GlobalParticipantsChanged",id:"globalparticipantschanged",level:3},{value:"IncomingCall",id:"incomingcall",level:3},{value:"Logout",id:"logout",level:3},{value:"Message",id:"message",level:3},{value:"MessageDeleted",id:"messagedeleted",level:3},{value:"Order",id:"order",level:3},{value:"Plugged",id:"plugged",level:3},{value:"RemovedFromGroup",id:"removedfromgroup",level:3},{value:"StateChanged",id:"statechanged",level:3},{value:"Story",id:"story",level:3}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/modules/connect"},"connect"),".SimpleListener"),(0,r.kt)("p",null,'An enum of all the "simple listeners". A simple listener is a listener that just takes one parameter which is the callback function to handle the event.'),(0,r.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,r.kt)("h3",{id:"ack"},"Ack"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"Ack")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"onAck"')),(0,r.kt)("p",null,"Represents onAck"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"addedtogroup"},"AddedToGroup"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"AddedToGroup")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"onAddedToGroup"')),(0,r.kt)("p",null,"Represents onAddedToGroup"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"anymessage"},"AnyMessage"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"AnyMessage")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"onAnyMessage"')),(0,r.kt)("p",null,"Represents onAnyMessage"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"battery"},"Battery"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"Battery")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"onBattery"')),(0,r.kt)("p",null,"Represents onBattery"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"button"},"Button"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"Button")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"onButton"')),(0,r.kt)("p",null,"Represents onButton"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"chatdeleted"},"ChatDeleted"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"ChatDeleted")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"onChatDeleted"')),(0,r.kt)("p",null,"Represents onChatDeleted"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"chatopened"},"ChatOpened"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"ChatOpened")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"onChatOpened"')),(0,r.kt)("p",null,"Represents onChatOpened"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"chatstate"},"ChatState"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"ChatState")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"onChatState"')),(0,r.kt)("p",null,"Represents onChatState"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"contactadded"},"ContactAdded"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"ContactAdded")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"onContactAdded"')),(0,r.kt)("p",null,"Requires licence\nRepresents onContactAdded"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"globalparticipantschanged"},"GlobalParticipantsChanged"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"GlobalParticipantsChanged")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"onGlobalParticipantsChanged"')),(0,r.kt)("p",null,"Represents onGlobalParticipantsChanged"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"incomingcall"},"IncomingCall"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"IncomingCall")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"onIncomingCall"')),(0,r.kt)("p",null,"Represents onIncomingCall"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"logout"},"Logout"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"Logout")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"onLogout"')),(0,r.kt)("p",null,"Represents onLogout"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"message"},"Message"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"Message")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"onMessage"')),(0,r.kt)("p",null,"Represents onMessage"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"messagedeleted"},"MessageDeleted"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"MessageDeleted")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"onMessageDeleted"')),(0,r.kt)("p",null,"Represents onMessageDeleted"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"order"},"Order"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"Order")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"onOrder"')),(0,r.kt)("p",null,"Requires licence\nRepresents onContactAdded"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"plugged"},"Plugged"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"Plugged")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"onPlugged"')),(0,r.kt)("p",null,"Represents onPlugged"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"removedfromgroup"},"RemovedFromGroup"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"RemovedFromGroup")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"onRemovedFromGroup"')),(0,r.kt)("p",null,"Requires licence\nRepresents onRemovedFromGroup"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"statechanged"},"StateChanged"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"StateChanged")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"onStateChanged"')),(0,r.kt)("p",null,"Represents onStateChanged"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"story"},"Story"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"Story")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"onStory"')),(0,r.kt)("p",null,"Requires licence\nRepresents onStory"))}u.isMDXComponent=!0}}]);