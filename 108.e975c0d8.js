(window.webpackJsonp=window.webpackJsonp||[]).push([[108,111],{167:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(179),c=n(22),l=n(26),i=n(188),s=n(3),u=n(7),p=n(181),m=n(180),d=n(203),b=n(209),f=n(210),y=n(208),h=n(183),g=n(190),v=n(219),k=function(e){return r.a.createElement("svg",Object(s.a)({width:"20",height:"20",role:"img"},e),r.a.createElement("g",{fill:"#7a7a7a"},r.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},j=n(211),O=n(71),E=n.n(O);var N=function e(t,n){return"link"===t.type?Object(m.isSamePath)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))};function C(e){var t,n,o,c=e.item,l=e.onItemClick,i=e.collapsible,m=e.activePath,d=Object(u.a)(e,["item","onItemClick","collapsible","activePath"]),b=c.items,f=c.label,y=N(c,m),h=(n=y,o=Object(a.useRef)(n),Object(a.useEffect)((function(){o.current=n}),[n]),o.current),g=Object(a.useState)((function(){return!!i&&(!y&&c.collapsed)})),v=g[0],k=g[1],j=Object(a.useRef)(null),O=Object(a.useState)(void 0),C=O[0],x=O[1],w=function(e){var t;void 0===e&&(e=!0),x(e?(null===(t=j.current)||void 0===t?void 0:t.scrollHeight)+"px":void 0)};Object(a.useEffect)((function(){y&&!h&&v&&k(!1)}),[y,h,v]);var T=Object(a.useCallback)((function(e){e.preventDefault(),C||w(),setTimeout((function(){return k((function(e){return!e}))}),100)}),[C]);return 0===b.length?null:r.a.createElement("li",{className:Object(p.a)("menu__list-item",{"menu__list-item--collapsed":v}),key:f},r.a.createElement("a",Object(s.a)({className:Object(p.a)("menu__link",(t={"menu__link--sublist":i,"menu__link--active":i&&y},t[E.a.menuLinkText]=!i,t)),onClick:i?T:void 0,href:i?"#!":void 0},d),f),r.a.createElement("ul",{className:"menu__list",ref:j,style:{height:C},onTransitionEnd:function(){v||w(!1)}},b.map((function(e){return r.a.createElement(P,{tabIndex:v?"-1":"0",key:e.label,item:e,onItemClick:l,collapsible:i,activePath:m})}))))}function x(e){var t=e.item,n=e.onItemClick,a=e.activePath,o=(e.collapsible,Object(u.a)(e,["item","onItemClick","activePath","collapsible"])),c=t.href,l=t.label,i=N(t,a);return r.a.createElement("li",{className:"menu__list-item",key:l},r.a.createElement(h.a,Object(s.a)({className:Object(p.a)("menu__link",{"menu__link--active":i}),to:c},Object(g.a)(c)?{isNavLink:!0,exact:!0,onClick:n}:{target:"_blank",rel:"noreferrer noopener"},o),l))}function P(e){switch(e.item.type){case"category":return r.a.createElement(C,e);case"link":default:return r.a.createElement(x,e)}}var w=function(e){var t,n,o=e.path,c=e.sidebar,l=e.sidebarCollapsible,i=void 0===l||l,s=e.onCollapse,u=e.isHidden,h=Object(a.useState)(!1),g=h[0],O=h[1],N=Object(m.useThemeConfig)(),C=N.navbar.hideOnScroll,x=N.hideableSidebar,w=Object(d.a)().isAnnouncementBarClosed,T=Object(y.a)().scrollY;Object(b.a)(g);var S=Object(f.a)();return Object(a.useEffect)((function(){S===f.b.desktop&&O(!1)}),[S]),r.a.createElement("div",{className:Object(p.a)(E.a.sidebar,(t={},t[E.a.sidebarWithHideableNavbar]=C,t[E.a.sidebarHidden]=u,t))},C&&r.a.createElement(v.a,{tabIndex:-1,className:E.a.sidebarLogo}),r.a.createElement("div",{className:Object(p.a)("menu","menu--responsive","thin-scrollbar",E.a.menu,(n={"menu--show":g},n[E.a.menuWithAnnouncementBar]=!w&&0===T,n))},r.a.createElement("button",{"aria-label":g?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){O(!g)}},g?r.a.createElement("span",{className:Object(p.a)(E.a.sidebarMenuIcon,E.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement(j.a,{className:E.a.sidebarMenuIcon,height:24,width:24})),r.a.createElement("ul",{className:"menu__list"},c.map((function(e){return r.a.createElement(P,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),O(!1)},collapsible:i,activePath:o})})))),x&&r.a.createElement("button",{type:"button",title:"Collapse sidebar","aria-label":"Collapse sidebar",className:Object(p.a)("button button--secondary button--outline",E.a.collapseSidebarButton),onClick:s},r.a.createElement(k,{className:E.a.collapseSidebarButtonIcon})))},T=n(237),S=n(199),_=n(184),I=n(76),D=n.n(I);function L(e){var t,n,l,s,u=e.currentDocRoute,d=e.versionMetadata,b=e.children,f=Object(c.default)(),y=f.siteConfig,h=f.isClient,g=d.pluginId,v=d.permalinkToSidebar,j=d.docsSidebars,O=d.version,E=v[u.path],N=j[E],C=Object(a.useState)(!1),x=C[0],P=C[1],S=Object(a.useState)(!1),_=S[0],I=S[1],L=Object(a.useCallback)((function(){_&&I(!1),P(!x)}),[_]);return r.a.createElement(i.a,{key:h,searchMetadatas:{version:O,tag:Object(m.docVersionSearchTag)(g,O)}},r.a.createElement("div",{className:D.a.docPage},N&&r.a.createElement("div",{className:Object(p.a)(D.a.docSidebarContainer,(t={},t[D.a.docSidebarContainerHidden]=x,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(D.a.docSidebarContainer)&&x&&I(!0)},role:"complementary"},r.a.createElement(w,{key:E,sidebar:N,path:u.path,sidebarCollapsible:null===(n=null===(l=y.themeConfig)||void 0===l?void 0:l.sidebarCollapsible)||void 0===n||n,onCollapse:L,isHidden:_}),_&&r.a.createElement("div",{className:D.a.collapsedDocSidebar,title:"Expand sidebar","aria-label":"Expand sidebar",tabIndex:0,role:"button",onKeyDown:L,onClick:L},r.a.createElement(k,null))),r.a.createElement("main",{className:D.a.docMainContainer},r.a.createElement("div",{className:Object(p.a)("container padding-vert--lg",D.a.docItemWrapper,(s={},s[D.a.docItemWrapperEnhanced]=x,s))},r.a.createElement(o.a,{components:T.a},b)))))}t.default=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,o=t.find((function(e){return Object(_.matchPath)(a.pathname,e)}));return o?r.a.createElement(L,{currentDocRoute:o,versionMetadata:n},Object(l.a)(t)):r.a.createElement(S.default,e)}},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,b=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?r.a.createElement(b,l(l({ref:t},s),{},{components:n})):r.a.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},198:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var a=n(23),r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},o=n(0),c={Prism:a.a,theme:r};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},m=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=i({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=i({},n,{backgroundColor:null}),r};function d(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var b=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?m(e.theme,e.language):void 0;return t.themeDict=n})),l(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=i({},d(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(o.style=c.plain),void 0!==r&&(o.style=void 0!==o.style?i({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),l(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var c=a?{display:"inline-block"}:{},l=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[c].concat(l))}})),l(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,c=i({},d(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(c.style=void 0!==c.style?i({},c.style,r):r),void 0!==n&&(c.key=n),a&&(c.className+=" "+a),c})),l(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),c=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,c=0,l=[],i=[l];c>-1;){for(;(o=a[c]++)<r[c];){var m=void 0,d=t[c],b=n[c][o];if("string"==typeof b?(d=c>0?d:["plain"],m=b):(d=p(d,b.type),b.alias&&(d=p(d,b.alias)),m=b.content),"string"==typeof m){var f=m.split(s),y=f.length;l.push({types:d,content:f[0]});for(var h=1;h<y;h++)u(l),i.push(l=[]),l.push({types:d,content:f[h]})}else c++,t.push(d),n.push(m),a.push(0),r.push(m.length)}c--,t.pop(),n.pop(),a.pop(),r.pop()}return u(l),i}(void 0!==c?this.tokenize(t,a,c,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);t.a=b},199:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(188);t.default=function(){return r.a.createElement(o.a,{title:"Page Not Found"},r.a.createElement("main",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},238:function(e,t,n){"use strict";const a=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch(l){}return n.remove(),o&&(r.removeAllRanges(),r.addRange(o)),a&&a.focus(),c};e.exports=a,e.exports.default=a},239:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,o]=t;if(a&&o){a=parseInt(a),o=parseInt(o);const e=a<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=a;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},240:function(e,t,n){"use strict";var a=n(7),r=n(0),o=n.n(r),c=n(181),l=n(180),i=(n(73),n(74)),s=n.n(i);t.a=function(e){return function(t){var n,r=t.id,i=Object(a.a)(t,["id"]),u=Object(l.useThemeConfig)().navbar.hideOnScroll;return r?o.a.createElement(e,i,o.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(c.a)("anchor",(n={},n[s.a.enhancedAnchor]=!u,n)),id:r}),i.children,o.a.createElement("a",{className:"hash-link",href:"#"+r,title:"Direct link to heading"},"#")):o.a.createElement(e,i)}}},271:function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r),c=n(181),l=n(198),i=n(238),s=n.n(i),u=n(239),p=n.n(u),m={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},d=n(194),b=n(180),f=function(){var e=Object(b.useThemeConfig)().prism,t=Object(d.a)().isDarkTheme,n=e.theme||m,a=e.darkTheme||n;return t?a:n},y=n(72),h=n.n(y),g=/{([\d,-]+)}/,v=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")},k=/(?:title=")(.*)(?:")/;t.a=function(e){var t=e.children,n=e.className,i=e.metastring,u=Object(b.useThemeConfig)().prism,m=Object(r.useState)(!1),d=m[0],y=m[1],j=Object(r.useState)(!1),O=j[0],E=j[1];Object(r.useEffect)((function(){E(!0)}),[]);var N=Object(r.useRef)(null),C=[],x="",P=f(),w=Array.isArray(t)?t.join(""):t;if(i&&g.test(i)){var T=i.match(g)[1];C=p()(T).filter((function(e){return e>0}))}i&&k.test(i)&&(x=i.match(k)[1]);var S=n&&n.replace(/language-/,"");!S&&u.defaultLanguage&&(S=u.defaultLanguage);var _=w.replace(/\n$/,"");if(0===C.length&&void 0!==S){for(var I,D="",L=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return v(["js","jsBlock"]);case"jsx":case"tsx":return v(["js","jsBlock","jsx"]);case"html":return v(["js","jsBlock","html"]);case"python":case"py":return v(["python"]);default:return v()}}(S),B=w.replace(/\n$/,"").split("\n"),M=0;M<B.length;){var R=M+1,A=B[M].match(L);if(null!==A){switch(A.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":D+=R+",";break;case"highlight-start":I=R;break;case"highlight-end":D+=I+"-"+(R-1)+","}B.splice(M,1)}else M+=1}C=p()(D),_=B.join("\n")}var z=function(){s()(_),y(!0),setTimeout((function(){return y(!1)}),2e3)};return o.a.createElement(l.a,Object(a.a)({},l.b,{key:String(O),theme:P,code:_,language:S}),(function(e){var t,n=e.className,r=e.style,l=e.tokens,i=e.getLineProps,s=e.getTokenProps;return o.a.createElement(o.a.Fragment,null,x&&o.a.createElement("div",{style:r,className:h.a.codeBlockTitle},x),o.a.createElement("div",{className:h.a.codeBlockContent},o.a.createElement("div",{tabIndex:0,className:Object(c.a)(n,h.a.codeBlock,"thin-scrollbar",(t={},t[h.a.codeBlockWithTitle]=x,t))},o.a.createElement("div",{className:h.a.codeBlockLines,style:r},l.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=i({line:e,key:t});return C.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),o.a.createElement("div",Object(a.a)({key:t},n),e.map((function(e,t){return o.a.createElement("span",Object(a.a)({key:t},s({token:e,key:t})))})))})))),o.a.createElement("button",{ref:N,type:"button","aria-label":"Copy code to clipboard",className:Object(c.a)(h.a.copyButton),onClick:z},d?"Copied":"Copy")))}))}}}]);