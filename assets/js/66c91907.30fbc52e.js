"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2022],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=c(n),m=o,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||i;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2844:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return l},toc:function(){return p},default:function(){return m}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],u={},s="RFCs",c={unversionedId:"Contributing/RFCs",id:"Contributing/RFCs",title:"RFCs",description:"The Enarx project welcomes contributions!",source:"@site/docs/Contributing/RFCs.md",sourceDirName:"Contributing",slug:"/Contributing/RFCs",permalink:"/docs/Contributing/RFCs",editUrl:"https://github.com/enarx/enarx.github.io/blob/main/docs/Contributing/RFCs.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Issues",permalink:"/docs/Contributing/Issues"},next:{title:"Docs",permalink:"/docs/Contributing/Docs"}},l={},p=[],f={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rfcs"},"RFCs"),(0,i.kt)("p",null,"The Enarx project welcomes contributions!"),(0,i.kt)("p",null,"Would you like to help with the development of Enarx?"),(0,i.kt)("p",null,"This page will guide you towards submitting your first RFC \u2013 Request for Comment\n\u2013, the process used by the project to formally describe improvements or new\nideas."),(0,i.kt)("p",null,"There are many different skills needed to build Enarx, from low-level assembly\ncode for platform-specific enablement (think SGX, SEV, etc.) to kernel-related\nwork, from WebAssembly to building and maintaining our infrastructure and automated\nintegration and testing (CI/CD), and more, so please don't hesitate to try your\nhand at any of these or to come and talk to us."),(0,i.kt)("p",null,"You will find the list of accepted RFCs\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/enarx/rfcs/blob/main/index.md"},"here")," and the list of those\nopen and currently under review ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/enarx/rfcs/pulls"},"here"),"."),(0,i.kt)("p",null,"Most of the explanations for contributing to the Enarx RFC process is described\non the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/enarx/rfcs"},"RFC repo"),"."))}m.isMDXComponent=!0}}]);