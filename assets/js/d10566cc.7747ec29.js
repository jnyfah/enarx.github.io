"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8128],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(r),d=i,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3649:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],c={},l="AMD SEV",s={unversionedId:"Technical/AMD-SEV",id:"Technical/AMD-SEV",isDocsHomePage:!1,title:"AMD SEV",description:"Hardware requirements",source:"@site/docs/Technical/AMD-SEV.md",sourceDirName:"Technical",slug:"/Technical/AMD-SEV",permalink:"/docs/Technical/AMD-SEV",editUrl:"https://github.com/enarx/docs/blob/main/docs/Technical/AMD-SEV.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Vulnerabilities and Attacks",permalink:"/docs/Technical/Vulnerabilities-Attacks"},next:{title:"AMD SEV Remote Attestation Protocol",permalink:"/docs/Technical/AMD-SEV-Attestation"}},u=[{value:"Hardware requirements",id:"hardware-requirements",children:[],level:3},{value:"Attestation overview",id:"attestation-overview",children:[],level:3}],p={toc:u};function f(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"amd-sev"},"AMD SEV"),(0,a.kt)("h3",{id:"hardware-requirements"},"Hardware requirements"),(0,a.kt)("p",null,"A system with SEV."),(0,a.kt)("h3",{id:"attestation-overview"},"Attestation overview"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SEV is targetted at secure VMs.  You attest to a signature by AMD, which includes a hash of something they call firmware in this context.  This firmware is basically code injected into the VM. This firmware allows host to have some code within the TEE: that code will form an Enarx Keep."),(0,a.kt)("li",{parentName:"ul"},"Enarx will run as this \u201cfirmware\u201d, which is essentially injected into the VM.  AMD will provide a signature from a key burned into the CPU over a hash of the firmware that it is going to be loaded.")))}f.isMDXComponent=!0}}]);