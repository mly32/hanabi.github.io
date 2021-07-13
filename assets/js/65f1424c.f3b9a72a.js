/*! For license information please see 65f1424c.f3b9a72a.js.LICENSE.txt */
(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[2437,5429,9108,5212,5247,7484,6143,7830,4704,8084,6263,5567,3580,6485,6184,6551,4090,8359,5193,7087],{8173:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0;return function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}r.d(t,{Z:function(){return i}})},3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),o=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=o(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=o(r),d=i,g=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var o=2;o<a;o++)l[o]=r[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8215:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:i},t)}},5064:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(7294),i=r(9443);var a=function(){var e=(0,n.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=r(6010),s="tabItem_1uMI",c="tabItemActive_2DSg";var o=37,u=39;var m=function(e){var t=e.lazy,r=e.block,i=e.defaultValue,m=e.values,p=e.groupId,d=e.className,g=a(),h=g.tabGroupChoices,f=g.setTabGroupChoices,b=(0,n.useState)(i),y=b[0],v=b[1],x=n.Children.toArray(e.children),w=[];if(null!=p){var E=h[p];null!=E&&E!==y&&m.some((function(e){return e.value===E}))&&v(E)}var k=function(e){var t=e.currentTarget,r=w.indexOf(t),n=m[r].value;v(n),null!=p&&(f(p,n),setTimeout((function(){var e,r,n,i,a,l,s,o;(e=t.getBoundingClientRect(),r=e.top,n=e.left,i=e.bottom,a=e.right,l=window,s=l.innerHeight,o=l.innerWidth,r>=0&&a<=o&&i<=s&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},q=function(e){var t,r;switch(e.keyCode){case u:var n=w.indexOf(e.target)+1;r=w[n]||w[0];break;case o:var i=w.indexOf(e.target)-1;r=w[i]||w[w.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},d)},m.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,l.Z)("tabs__item",s,{"tabs__item--active":y===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:q,onFocus:k,onClick:k},r)}))),t?(0,n.cloneElement)(x.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},x.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},9443:function(e,t,r){"use strict";var n=(0,r(7294).createContext)(void 0);t.Z=n},6679:function(e){e.exports={mainSidebar:["about",{"Beginner's Guide":["beginner","beginner/card-layout",{"The Chop":["beginner/chop","beginner/chop-question-1","beginner/chop-question-2","beginner/chop-question-3","beginner/chop-question-4"]},"beginner/two-types-of-clues",{"1 - Play Clues":["beginner/play-clues","beginner/play-clues-question-1","beginner/play-clues-question-2","beginner/delayed-play-clues","beginner/delayed-play-clues-question-1","beginner/delayed-play-clues-question-2","beginner/delayed-play-clues-question-3"]},{"2 - Save Clues":["beginner/save-clues","beginner/5-save","beginner/5-save-question-1","beginner/5-save-question-2","beginner/2-save","beginner/2-save-question-1","beginner/2-save-question-2","beginner/2-save-question-3","beginner/critical-save","beginner/critical-save-question-1","beginner/critical-save-question-2","beginner/critical-save-question-3","beginner/critical-save-question-4"]},{"Clue Interpretation":["beginner/single-card-focus","beginner/single-card-focus-question-1","beginner/single-card-focus-question-2","beginner/single-card-focus-question-3","beginner/single-card-focus-question-4","beginner/clue-interpretation","beginner/clue-interpretation-question-1","beginner/clue-interpretation-question-2","beginner/clue-interpretation-question-3","beginner/clue-interpretation-question-4"]},"beginner/three-main-principles",{"1 - Good Touch Principle":["beginner/good-touch-principle","beginner/good-touch-principle-question-1","beginner/good-touch-principle-question-2","beginner/good-touch-principle-question-3","beginner/good-touch-principle-question-4"]},{"2 - Save Principle":["beginner/save-principle","beginner/save-principle-question-1","beginner/save-principle-question-2"]},{"3 - Minimum Clue Value Principle":["beginner/minimum-clue-value-principle","beginner/minimum-clue-value-principle-question-1"]},{"The Early Game":["beginner/early-game","beginner/early-game-question-1","beginner/early-game-question-2","beginner/early-game-question-3","beginner/early-game-question-4"]},"beginner/other-general-strategy",{"Special Moves":["beginner/special-moves","beginner/prompt","beginner/prompt-question-1","beginner/prompt-question-2","beginner/prompt-question-3","beginner/finesse","beginner/finesse-question-1","beginner/finesse-question-2"]},"beginner/next-steps"]},"how-to-join","learning-path",{"Basic Strategies":["reference","first-principles","level-1","level-2","level-3","level-4","level-5","level-6","level-7","level-8","level-9","level-10","level-11","level-12","level-13","level-14","level-15","level-16","level-17","level-18","level-19","level-20","level-21","level-22","level-23"]},{"Advanced Strategies":["extras","extras/play-clues","extras/save-clues","extras/fix-clues","extras/discards-misplays","extras/chop-moves","extras/special-finesses","extras/special-bluffs","extras/suboptimal-moves","extras/pushes-pulls","extras/signal-shifting","extras/ejections","extras/discharges","extras/charms","extras/ejection-extensions","extras/miscellaneous"]},{"Variant Specific":["variant-specific","variant-specific/3-suits","variant-specific/black","variant-specific/black-rainbow","variant-specific/brown","variant-specific/clue-starved","variant-specific/color-blind","variant-specific/cow-pig","variant-specific/dark-null","variant-specific/dark-omni-gray-pink","variant-specific/dark-pink","variant-specific/dark-prism","variant-specific/dark-rainbow","variant-specific/deceptive-fives","variant-specific/dual-color-3-suits","variant-specific/dual-color-6-suits","variant-specific/dual-color","variant-specific/duck","variant-specific/extremely-ambiguous","variant-specific/muddy-rainbow-cocoa-rainbow","variant-specific/null","variant-specific/number-blind","variant-specific/number-mute","variant-specific/omni","variant-specific/pink","variant-specific/pink-omni","variant-specific/pink-ones","variant-specific/prism","variant-specific/rainbow","variant-specific/rainbow-muddy-rainbow","variant-specific/rainbow-ones-rainbow-fives","variant-specific/reversed","variant-specific/special-fives","variant-specific/throw-it-in-a-hole","variant-specific/totally-blind","variant-specific/up-or-down","variant-specific/white","variant-specific/no-positive-clues"]},"convention-attribution"]}},1961:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(8173),i=r(7294),a=r(5774),l=r(6679),s=l.mainSidebar.find((function(e){return e["Beginner's Guide"]}))["Beginner's Guide"],c=[];!function e(t,r){for(var i,a=(0,n.Z)(r);!(i=a()).done;){var l=i.value;"string"==typeof l?t.push(l):e(t,Object.values(l)[0])}}(c,s),"beginner"===c[0]&&c.shift();var o=c.length;function u(e){var t=e.id,r=c.findIndex((function(e){return"beginner/"+t===e}));if(-1===r)throw new Error("page id not found in sidebar");var n=Math.round((r+1)/o*100);return(0,i.useEffect)((function(){document.querySelector("main > div > div > div:nth-child(2)").append(document.querySelector("#percent")),document.querySelector("#percent").style.display=null})),i.createElement("div",{id:"percent",style:{position:"fixed",display:"none",width:"8em",height:"8em"}},i.createElement(a.Ip,{value:n,text:n+"%"}))}},841:function(e,t,r){"use strict";r.r(t),r.d(t,{contentTitle:function(){return F},default:function(){return J},frontMatter:function(){return X},metadata:function(){return U},toc:function(){return K}});var n,i,a,l,s,c,o,u,m,p,d,g,h,f,b,y,v,x,w,E,k,q,O,N,C,P,j,T,S,_,I,R,G=r(2122),B=r(9756),Z=r(7294),M=r(3905),A=r(1961),D=r(5064),H=r(8215),V=["title","titleId"];function W(){return(W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Q(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var z=function(e){var t=e.title,r=e.titleId,G=Q(e,V);return Z.createElement("svg",W({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:375,viewBox:"0 0 944 375",width:944,className:"example","aria-labelledby":r},G),t?Z.createElement("title",{id:r},t):null,n||(n=Z.createElement("defs",null,Z.createElement("filter",{x:0,y:0,width:1,height:1,id:"early-game-question-1_yml__a"},Z.createElement("feFlood",{floodColor:"#0ff"})))),i||(i=Z.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red0.svg"})),a||(a=Z.createElement("image",{height:100,width:70,x:78,xlinkHref:"/img/pieces/cards/yellow0.svg"})),l||(l=Z.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/green0.svg"})),s||(s=Z.createElement("image",{height:100,width:70,x:234,xlinkHref:"/img/pieces/cards/blue0.svg"})),c||(c=Z.createElement("image",{height:100,width:70,x:312,xlinkHref:"/img/pieces/cards/purple0.svg"})),Z.createElement("svg",W({height:100,width:90,x:464,className:"example","aria-labelledby":r},G),t?Z.createElement("title",{id:r},t):null,o||(o=Z.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Alice"))),Z.createElement("svg",W({height:100,width:70,x:554,className:"example","aria-labelledby":r},G),t?Z.createElement("title",{id:r},t):null,u||(u=Z.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),Z.createElement("svg",W({height:100,width:70,x:632,className:"example","aria-labelledby":r},G),t?Z.createElement("title",{id:r},t):null,m||(m=Z.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),Z.createElement("svg",W({height:100,width:70,x:710,className:"example","aria-labelledby":r},G),t?Z.createElement("title",{id:r},t):null,p||(p=Z.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),Z.createElement("svg",W({height:100,width:70,x:788,className:"example","aria-labelledby":r},G),t?Z.createElement("title",{id:r},t):null,d||(d=Z.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),Z.createElement("svg",W({height:100,width:70,x:866,className:"example","aria-labelledby":r},G),t?Z.createElement("title",{id:r},t):null,g||(g=Z.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),Z.createElement("svg",W({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":r},G),t?Z.createElement("title",{id:r},t):null,h||(h=Z.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Bob"))),Z.createElement("svg",W({height:100,width:70,x:554,y:125,className:"example","aria-labelledby":r},G),t?Z.createElement("title",{id:r},t):null,f||(f=Z.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),Z.createElement("svg",W({height:100,width:70,x:632,y:125,className:"example","aria-labelledby":r},G),t?Z.createElement("title",{id:r},t):null,b||(b=Z.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),Z.createElement("svg",W({height:100,width:70,x:710,y:125,className:"example","aria-labelledby":r},G),t?Z.createElement("title",{id:r},t):null,y||(y=Z.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),Z.createElement("svg",W({height:100,width:70,x:788,y:125,className:"example","aria-labelledby":r},G),t?Z.createElement("title",{id:r},t):null,v||(v=Z.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),Z.createElement("svg",W({height:100,width:70,x:866,y:125,className:"example","aria-labelledby":r},G),t?Z.createElement("title",{id:r},t):null,x||(x=Z.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),Z.createElement("svg",W({height:100,width:90,x:464,y:250,className:"example","aria-labelledby":r},G),t?Z.createElement("title",{id:r},t):null,w||(w=Z.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Cathy")),E||(E=Z.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#early-game-question-1_yml__a)",x:"0%",y:"50%"},"Clue Giver")),k||(k=Z.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),q||(q=Z.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:551,y:247})),O||(O=Z.createElement("image",{height:100,width:70,x:554,xlinkHref:"/img/pieces/cards/blue1.svg",y:250})),N||(N=Z.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:629,y:247})),C||(C=Z.createElement("image",{height:100,width:70,x:632,xlinkHref:"/img/pieces/cards/green1.svg",y:250})),P||(P=Z.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:707,y:247})),j||(j=Z.createElement("image",{height:100,width:70,x:710,xlinkHref:"/img/pieces/cards/red1.svg",y:250})),Z.createElement("svg",W({height:100,width:70,x:788,y:250,className:"example","aria-labelledby":r},G),t?Z.createElement("title",{id:r},t):null,T||(T=Z.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),Z.createElement("svg",W({height:100,width:70,x:866,y:250,className:"example","aria-labelledby":r},G),t?Z.createElement("title",{id:r},t):null,S||(S=Z.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),_||(_=Z.createElement("image",{height:200,opacity:.2,width:200,x:91,xlinkHref:"/img/pieces/trashcan.png",y:120})),I||(I=Z.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/red1.svg",y:170})),R||(R=Z.createElement("rect",{fill:"none",height:200,rx:10,ry:10,stroke:"#006400",strokeWidth:2,width:200,x:91,y:120})))},L=["components"],X={id:"early-game-question-1",title:"The Early Game (Question 1)"},F=void 0,U={unversionedId:"beginner/early-game-question-1",id:"beginner/early-game-question-1",isDocsHomePage:!1,title:"The Early Game (Question 1)",description:"<Tabs",source:"@site/docs/beginner/early-game-question-1.md",sourceDirName:"beginner",slug:"/beginner/early-game-question-1",permalink:"/docs/beginner/early-game-question-1",editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/beginner/early-game-question-1.md",version:"current",frontMatter:{id:"early-game-question-1",title:"The Early Game (Question 1)"},sidebar:"mainSidebar",previous:{title:"The Early Game",permalink:"/docs/beginner/early-game"},next:{title:"The Early Game (Question 2)",permalink:"/docs/beginner/early-game-question-2"}},K=[],$={toc:K};function J(e){var t=e.components,r=(0,B.Z)(e,L);return(0,M.kt)("wrapper",(0,G.Z)({},$,r,{components:t,mdxType:"MDXLayout"}),(0,M.kt)(A.Z,{id:"early-game-question-1",mdxType:"BeginnersGuideProgress"}),(0,M.kt)(D.Z,{defaultValue:"question",values:[{label:"Question",value:"question"},{label:"Solution",value:"solution"}],mdxType:"Tabs"},(0,M.kt)(H.Z,{value:"question",mdxType:"TabItem"},(0,M.kt)("ul",null,(0,M.kt)("li",{parentName:"ul"},"On the first turn of the game, Alice clues number 1 to Cathy, touching three cards."),(0,M.kt)("li",{parentName:"ul"},"Bob discards a red 1."),(0,M.kt)("li",{parentName:"ul"},"Is it now the ",(0,M.kt)("em",{parentName:"li"},"Early Game")," or the ",(0,M.kt)("em",{parentName:"li"},"Mid-Game"),"?"))),(0,M.kt)(H.Z,{value:"solution",mdxType:"TabItem"},(0,M.kt)("ul",null,(0,M.kt)("li",{parentName:"ul"},"It is the ",(0,M.kt)("em",{parentName:"li"},"Mid-Game")," because Bob discarded.")))),(0,M.kt)(z,{mdxType:"EarlyGameQuestion1"}))}J.isMDXComponent=!0},6010:function(e,t,r){"use strict";function n(e){var t,r,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(i&&(i+=" "),i+=r);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,r=0,i="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}r.d(t,{Z:function(){return i}})},5774:function(e,t,r){"use strict";r.d(t,{Ip:function(){return c}});var n=r(7294),i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function a(e){var t=e.className,r=e.counterClockwise,i=e.dashRatio,a=e.pathRadius,c=e.strokeWidth,o=e.style;return(0,n.createElement)("path",{className:t,style:Object.assign({},o,s({pathRadius:a,dashRatio:i,counterClockwise:r})),d:l({pathRadius:a,counterClockwise:r}),strokeWidth:c,fillOpacity:0})}function l(e){var t=e.pathRadius,r=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+r+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+r+" 1 1 0,-"+2*t+"\n    "}function s(e){var t=e.counterClockwise,r=e.dashRatio,n=e.pathRadius,i=2*Math.PI*n,a=(1-r)*i;return{strokeDasharray:i+"px "+i+"px",strokeDashoffset:(t?-a:a)+"px"}}var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,r=e.minValue,n=e.maxValue;return(Math.min(Math.max(t,r),n)-r)/(n-r)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,r=e.className,i=e.classes,l=e.counterClockwise,s=e.styles,c=e.strokeWidth,o=e.text,u=this.getPathRadius(),m=this.getPathRatio();return(0,n.createElement)("svg",{className:i.root+" "+r,style:s.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,n.createElement)("circle",{className:i.background,style:s.background,cx:50,cy:50,r:50}):null,(0,n.createElement)(a,{className:i.trail,counterClockwise:l,dashRatio:t,pathRadius:u,strokeWidth:c,style:s.trail}),(0,n.createElement)(a,{className:i.path,counterClockwise:l,dashRatio:m*t,pathRadius:u,strokeWidth:c,style:s.path}),o?(0,n.createElement)("text",{className:i.text,style:s.text,x:50,y:50},o):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(n.Component)}}]);