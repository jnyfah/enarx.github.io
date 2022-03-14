"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4466],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,b=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(b,o(o({ref:t},s),{},{components:n})):r.createElement(b,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7412:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return s},toc:function(){return m},default:function(){return d}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],l={},c="WebAssembly with C",u={unversionedId:"WebAssembly/C",id:"WebAssembly/C",title:"WebAssembly with C",description:"C WebAssembly",source:"@site/docs/WebAssembly/C.md",sourceDirName:"WebAssembly",slug:"/WebAssembly/C",permalink:"/docs/WebAssembly/C",editUrl:"https://github.com/enarx/enarx.github.io/blob/main/docs/WebAssembly/C.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WebAssembly with C++",permalink:"/docs/WebAssembly/C++"},next:{title:"WebAssembly with Golang",permalink:"/docs/WebAssembly/Golang"}},s={},m=[{value:"Environment Setup",id:"environment-setup",level:2},{value:"C++",id:"c",level:3},{value:"Wasmer",id:"wasmer",level:3},{value:"Wasienv",id:"wasienv",level:4},{value:"Wasmtime",id:"wasmtime",level:3},{value:"C Code Snippet",id:"c-code-snippet",level:2},{value:"Compiling the C Code",id:"compiling-the-c-code",level:2}],p={toc:m};function d(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"webassembly-with-c"},"WebAssembly with C"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"C WebAssembly",src:n(6215).Z,width:"315",height:"160"})),(0,i.kt)("h2",{id:"environment-setup"},"Environment Setup"),(0,i.kt)("p",null,"To compile this demo, you must install the following:"),(0,i.kt)("h3",{id:"c"},"C++"),(0,i.kt)("p",null,"Go to ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/cpp/build/vscpp-step-0-installation?view=msvc-170"},"C and C++ Installation")," and follow the instructions."),(0,i.kt)("h3",{id:"wasmer"},"Wasmer"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.wasmer.io/"},"Wasmer")," is an open-source runtime for executing WebAssembly on the Server."),(0,i.kt)("h4",{id:"wasienv"},"Wasienv"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/wasienv/wasienv"},"Wasienv")," is a tool to compile different programming languages to WebAssembly, so you can run your programs on the Browser, or in the Server."),(0,i.kt)("h3",{id:"wasmtime"},"Wasmtime"),(0,i.kt)("p",null,"You will find wasmtime at ",(0,i.kt)("a",{parentName:"p",href:"https://wasmtime.dev/"},"wasmtime.dev")),(0,i.kt)("h2",{id:"c-code-snippet"},"C Code Snippet"),(0,i.kt)("p",null,"We will create a Simple C Program that will return us the fibonacci sequence of an Integer Input."),(0,i.kt)("p",null,'Create a folder "C-to-WASM":'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir C-to-WASM\ncd C-to-WASM\n")),(0,i.kt)("p",null,"Create a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"FibonacciSequence.c"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-C"},'// Simple Program to calculate Fibonacci Sequence of an integer input\n#include<stdio.h>\n\nint FibonacciSequence(int num) {\n    if(num <= 1) {\n        return num ;\n    }\n    return FibonacciSequence(num-1) + FibonacciSequence(num-2);\n}\nint main(){\n    printf("Enter the Number\\n");\n    int n ;\n    scanf("%d",&n);\n    \n    printf("Fibonacci Sequence term at %d is %d " , n , FibonacciSequence(n));\n}\n')),(0,i.kt)("h2",{id:"compiling-the-c-code"},"Compiling the C Code"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Compiling Using ",(0,i.kt)("inlineCode",{parentName:"li"},"gcc"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"gcc FibonacciSequence.c\n")),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"C Screenshot1",src:n(5325).Z,width:"963",height:"384"})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Compile to WASM Binary using the following command:")),(0,i.kt)("p",null,"Since the Code has been written in C, we need to figure out a way to generate a WebAssembly Binary. That's why we will be using ",(0,i.kt)("inlineCode",{parentName:"p"},"wasienv")," in order to generate a ",(0,i.kt)("inlineCode",{parentName:"p"},".wasm")," binary from this ",(0,i.kt)("inlineCode",{parentName:"p"},"c")," file."),(0,i.kt)("p",null,"When you have your ",(0,i.kt)("inlineCode",{parentName:"p"},"c")," file created, you can execute ",(0,i.kt)("inlineCode",{parentName:"p"},"wasicc")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," wasicc Fibonacci.c -o FibonacciBinary.wasm\n")),(0,i.kt)("p",null,"Note that while executing this command, it might generate some warnings but you can ignore them."),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now, you will have a new ",(0,i.kt)("inlineCode",{parentName:"p"},"FibonacciBinary.wasm")," file ready in your Directory")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Executing it using WASM Runtime"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wasmtime FibonacciBinary.wasm\n")),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"C Screenshot2",src:n(7243).Z,width:"960",height:"361"})))}d.isMDXComponent=!0},5325:function(e,t,n){t.Z=n.p+"assets/images/CExecutionScreenshot-2cec57917155c9f318c4e9f7f8d6bee0.png"},6215:function(e,t){t.Z="data:image/png;base64,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"},7243:function(e,t,n){t.Z=n.p+"assets/images/CWasmScreenshot-a20adba6af71fb36f24aa2f6386278a7.png"}}]);