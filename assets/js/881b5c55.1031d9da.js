"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6025],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(r),h=o,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return r?n.createElement(f,u(u({ref:t},l),{},{components:r})):n.createElement(f,u({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var c=2;c<a;c++)u[c]=r[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9258:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return l},toc:function(){return p},default:function(){return h}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),u=["components"],i={slug:"2020-09-22-better-security-for-cloud-iot-and-the-edge-enarx-2",title:"Better security for Cloud, IoT, and the Edge: Enarx",authors:["mike","nathaniel"],tags:["Event"]},s=void 0,c={permalink:"/resources/2020-09-22-better-security-for-cloud-iot-and-the-edge-enarx-2",source:"@site/resources/2020-09-22-better-security-for-cloud-iot-and-the-edge-enarx-2.md",title:"Better security for Cloud, IoT, and the Edge: Enarx",description:'Deploying applications to the Cloud (or IoT, or the Edge) is all very well ... until you start running sensitive workloads. Can you trust the OS? The hypervisor? The stack? The cloud provider? The host owner? We all know that the answer to all of these is not always "yes": Enarx is a project using the hardware-based secuirty of TEEs (Trusted Execution Environments), to reduce the number of components and parties you need to trust. Find out how it works, why it uses WebAssembly for your runtime, and how to contribute.',date:"2020-09-22T00:00:00.000Z",formattedDate:"September 22, 2020",tags:[{label:"Event",permalink:"/resources/tags/event"}],truncated:!1,authors:[{name:"Mike Bursell",title:"Co-founder of Enarx",url:"https://github.com/MikeCamel",imageURL:"https://github.com/MikeCamel.png",key:"mike"},{name:"Nathaniel McCallum",title:"Co-founder of Enarx",url:"https://github.com/npmccallum",imageURL:"https://github.com/npmccallum.png",key:"nathaniel"}],frontMatter:{slug:"2020-09-22-better-security-for-cloud-iot-and-the-edge-enarx-2",title:"Better security for Cloud, IoT, and the Edge: Enarx",authors:["mike","nathaniel"],tags:["Event"]},prevItem:{title:"2020-09-29 Outreach Meeting",permalink:"/resources/2020/09/29/outreach-meeting"},nextItem:{title:"Better security for Cloud, IoT, and the Edge: Enarx",permalink:"/resources/2020-09-22-better-security-for-cloud-iot-and-the-edge-enarx"}},l={authorsImageUrls:[void 0,void 0]},p=[],d={toc:p};function h(e){var t=e.components,r=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Deploying applications to the Cloud (or IoT, or the Edge) is all very well ... until you start running sensitive workloads. Can you trust the OS? The hypervisor? The stack? The cloud provider? The host owner? We all know that the answer to all of these is not always "yes": Enarx is a project using the hardware-based secuirty of TEEs (Trusted Execution Environments), to reduce the number of components and parties you need to trust. Find out how it works, why it uses WebAssembly for your runtime, and how to contribute.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Source"),": DevConf 2020"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Link"),": ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=y_eDNTIkBBE"},"https://www.youtube.com/watch?v=y_eDNTIkBBE")))}h.isMDXComponent=!0}}]);