"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5444],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8364:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return f}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],s={slug:"2022-02-05-fosdem-wasm-cc",title:"WebAssembly + Confidential Computing",authors:["nick"],tags:["Event","Webinar"]},l=void 0,c={permalink:"/resources/2022-02-05-fosdem-wasm-cc",source:"@site/resources/2022-02-05-fosdem-wasm-cc.md",title:"WebAssembly + Confidential Computing",description:"Title: WebAssembly + Confidential Computing",date:"2022-02-05T00:00:00.000Z",formattedDate:"February 5, 2022",tags:[{label:"Event",permalink:"/resources/tags/event"},{label:"Webinar",permalink:"/resources/tags/webinar"}],truncated:!1,authors:[{name:"Nick Vidal",title:"Community Manager",url:"https://github.com/nickvidal",imageURL:"https://github.com/nickvidal.png",key:"nick"}],frontMatter:{slug:"2022-02-05-fosdem-wasm-cc",title:"WebAssembly + Confidential Computing",authors:["nick"],tags:["Event","Webinar"]},prevItem:{title:"Logging, debugging and error management in Confidential Computing",permalink:"/resources/2022-02-05-fosdem-logging"},nextItem:{title:"2022-01-19 Community Meeting",permalink:"/resources/2022/01/19/community-meeting"}},u={authorsImageUrls:[void 0]},p=[],m={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Title"),": WebAssembly + Confidential Computing",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Author"),": Nick Vidal",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Date"),": Saturday, February 5, 2022, 10:55 AM - 11:20 AM  "),(0,o.kt)("p",null,"The Enarx project reached a huge milestone: its first official release, featuring WebAssembly runtime. WebAssembly and Confidential Computing are a great match because WebAssembly offers developers a wide range of language choices, it works across silicon architectures, and it provides a sandboxed environment. This presentation will highlight the benefits of WebAssembly to Confidential Computing and showcase some demos."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Full Abstract")),(0,o.kt)("p",null,"After 3 years since its inception, the Enarx project finally had its first official release, bringing WebAssembly to Confidential Computing."),(0,o.kt)("p",null,"Enarx is a deployment framework for running applications in TEE instances \u2013 which we refer to as \u201cKeeps\u201d \u2013 without the need to trust lots of dependencies, without the need to rewrite the application, and without the need to implement attestation separately."),(0,o.kt)("p",null,"The WebAssembly runtime, based on wasmtime, offers developers a wide range of language choices for implementation, including Rust, C, and C++. It is designed to work across silicon architectures transparently to the user so that the application can run equally simple on Intel platforms (SGX or the recently-announced TDX), AMD platforms (SEV) or forthcoming platforms such as Arms\u2019 Realms and IBM\u2019s PEF - all without having to recompile the application code. WebAssembly's sandbox model offers an extra layer of protection, isolating the application from the host."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Source"),": FOSDEM 2022"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Link"),": ",(0,o.kt)("a",{parentName:"p",href:"https://fosdem.org/2022/schedule/track/hardware_aided_trusted_computing/"},"https://fosdem.org/2022/schedule/track/hardware_aided_trusted_computing/")))}f.isMDXComponent=!0}}]);