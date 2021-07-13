/*! For license information please see 3c578ddb.f058bb9f.js.LICENSE.txt */
(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[9678],{8173:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0;return function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(t,{Z:function(){return i}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),g=i,h=d["".concat(l,".").concat(g)]||d[g]||p[g]||a;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6679:function(e){e.exports={mainSidebar:["about",{"Beginner's Guide":["beginner","beginner/card-layout",{"The Chop":["beginner/chop","beginner/chop-question-1","beginner/chop-question-2","beginner/chop-question-3","beginner/chop-question-4"]},"beginner/two-types-of-clues",{"1 - Play Clues":["beginner/play-clues","beginner/play-clues-question-1","beginner/play-clues-question-2","beginner/delayed-play-clues","beginner/delayed-play-clues-question-1","beginner/delayed-play-clues-question-2","beginner/delayed-play-clues-question-3"]},{"2 - Save Clues":["beginner/save-clues","beginner/5-save","beginner/5-save-question-1","beginner/5-save-question-2","beginner/2-save","beginner/2-save-question-1","beginner/2-save-question-2","beginner/2-save-question-3","beginner/critical-save","beginner/critical-save-question-1","beginner/critical-save-question-2","beginner/critical-save-question-3","beginner/critical-save-question-4"]},{"Clue Interpretation":["beginner/single-card-focus","beginner/single-card-focus-question-1","beginner/single-card-focus-question-2","beginner/single-card-focus-question-3","beginner/single-card-focus-question-4","beginner/clue-interpretation","beginner/clue-interpretation-question-1","beginner/clue-interpretation-question-2","beginner/clue-interpretation-question-3","beginner/clue-interpretation-question-4"]},"beginner/three-main-principles",{"1 - Good Touch Principle":["beginner/good-touch-principle","beginner/good-touch-principle-question-1","beginner/good-touch-principle-question-2","beginner/good-touch-principle-question-3","beginner/good-touch-principle-question-4"]},{"2 - Save Principle":["beginner/save-principle","beginner/save-principle-question-1","beginner/save-principle-question-2"]},{"3 - Minimum Clue Value Principle":["beginner/minimum-clue-value-principle","beginner/minimum-clue-value-principle-question-1"]},{"The Early Game":["beginner/early-game","beginner/early-game-question-1","beginner/early-game-question-2","beginner/early-game-question-3","beginner/early-game-question-4"]},"beginner/other-general-strategy",{"Special Moves":["beginner/special-moves","beginner/prompt","beginner/prompt-question-1","beginner/prompt-question-2","beginner/prompt-question-3","beginner/finesse","beginner/finesse-question-1","beginner/finesse-question-2"]},"beginner/next-steps"]},"how-to-join","learning-path",{"Basic Strategies":["reference","first-principles","level-1","level-2","level-3","level-4","level-5","level-6","level-7","level-8","level-9","level-10","level-11","level-12","level-13","level-14","level-15","level-16","level-17","level-18","level-19","level-20","level-21","level-22","level-23"]},{"Advanced Strategies":["extras","extras/play-clues","extras/save-clues","extras/fix-clues","extras/discards-misplays","extras/chop-moves","extras/special-finesses","extras/special-bluffs","extras/suboptimal-moves","extras/pushes-pulls","extras/signal-shifting","extras/ejections","extras/discharges","extras/charms","extras/ejection-extensions","extras/miscellaneous"]},{"Variant Specific":["variant-specific","variant-specific/3-suits","variant-specific/black","variant-specific/black-rainbow","variant-specific/brown","variant-specific/clue-starved","variant-specific/color-blind","variant-specific/cow-pig","variant-specific/dark-null","variant-specific/dark-omni-gray-pink","variant-specific/dark-pink","variant-specific/dark-prism","variant-specific/dark-rainbow","variant-specific/deceptive-fives","variant-specific/dual-color-3-suits","variant-specific/dual-color-6-suits","variant-specific/dual-color","variant-specific/duck","variant-specific/extremely-ambiguous","variant-specific/muddy-rainbow-cocoa-rainbow","variant-specific/null","variant-specific/number-blind","variant-specific/number-mute","variant-specific/omni","variant-specific/pink","variant-specific/pink-omni","variant-specific/pink-ones","variant-specific/prism","variant-specific/rainbow","variant-specific/rainbow-muddy-rainbow","variant-specific/rainbow-ones-rainbow-fives","variant-specific/reversed","variant-specific/special-fives","variant-specific/throw-it-in-a-hole","variant-specific/totally-blind","variant-specific/up-or-down","variant-specific/white","variant-specific/no-positive-clues"]},"convention-attribution"]}},1961:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(8173),i=n(7294),a=n(5774),o=n(6679),s=o.mainSidebar.find((function(e){return e["Beginner's Guide"]}))["Beginner's Guide"],l=[];!function e(t,n){for(var i,a=(0,r.Z)(n);!(i=a()).done;){var o=i.value;"string"==typeof o?t.push(o):e(t,Object.values(o)[0])}}(l,s),"beginner"===l[0]&&l.shift();var c=l.length;function u(e){var t=e.id,n=l.findIndex((function(e){return"beginner/"+t===e}));if(-1===n)throw new Error("page id not found in sidebar");var r=Math.round((n+1)/c*100);return(0,i.useEffect)((function(){document.querySelector("main > div > div > div:nth-child(2)").append(document.querySelector("#percent")),document.querySelector("#percent").style.display=null})),i.createElement("div",{id:"percent",style:{position:"fixed",display:"none",width:"8em",height:"8em"}},i.createElement(a.Ip,{value:r,text:r+"%"}))}},2863:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return g}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o=n(1961),s=["components"],l={id:"other-general-strategy",title:"Other General Strategy"},c=void 0,u={unversionedId:"beginner/other-general-strategy",id:"beginner/other-general-strategy",isDocsHomePage:!1,title:"Other General Strategy",description:"- In general, players can use the three main principles to guide their actions:",source:"@site/docs/beginner/other-general-strategy.md",sourceDirName:"beginner",slug:"/beginner/other-general-strategy",permalink:"/docs/beginner/other-general-strategy",editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/beginner/other-general-strategy.md",version:"current",frontMatter:{id:"other-general-strategy",title:"Other General Strategy"},sidebar:"mainSidebar",previous:{title:"The Early Game (Question 4)",permalink:"/docs/beginner/early-game-question-4"},next:{title:"Special Moves",permalink:"/docs/beginner/special-moves"}},p=[{value:"Check Team Chops",id:"check-team-chops",children:[]},{value:"Give <em>Play Clues</em> Over <em>Save Clues</em>",id:"give-play-clues-over-save-clues",children:[]},{value:"Prefer Color Clues",id:"prefer-color-clues",children:[]},{value:"Discard Without Fear",id:"discard-without-fear",children:[]}],d={toc:p};function g(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{id:"other-general-strategy",mdxType:"BeginnersGuideProgress"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In general, players can use the three main principles to guide their actions:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Good Touch Principle")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Save Principle")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Minimum Clue Value Principle")))),(0,a.kt)("li",{parentName:"ul"},"But besides that, here are some other things that you should get in the habit of thinking about.")),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"check-team-chops"},"Check Team Chops"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The first thing you should do on your turn is to ",(0,a.kt)("strong",{parentName:"li"},"look at the chop cards of everyone on the team"),"."),(0,a.kt)("li",{parentName:"ul"},"Are there any cards on chop that need to be saved (or ",(0,a.kt)("em",{parentName:"li"},"Play Clued"),")? If so, do you have to do it, or can someone else do it?",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If no-one else can do it, then you need to give the ",(0,a.kt)("em",{parentName:"li"},"Save Clue")," (or ",(0,a.kt)("em",{parentName:"li"},"Play Clue"),"), even if you have a card to play."),(0,a.kt)("li",{parentName:"ul"},"If someone else can do it, would it be better for you to save the card, or for them? If they have a card to play and you do not have a card to play, then it is better teamwork for you to save the card.")))),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"give-play-clues-over-save-clues"},"Give ",(0,a.kt)("em",{parentName:"h3"},"Play Clues")," Over ",(0,a.kt)("em",{parentName:"h3"},"Save Clues")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If a player could be given a ",(0,a.kt)("em",{parentName:"li"},"Play Clue")," ",(0,a.kt)("strong",{parentName:"li"},"or")," a ",(0,a.kt)("em",{parentName:"li"},"Save Clue"),", then just give them a ",(0,a.kt)("em",{parentName:"li"},"Play Clue"),"."),(0,a.kt)("li",{parentName:"ul"},"There's no need to save a card now if you can preoccupy the player with playing a card!")),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"prefer-color-clues"},"Prefer Color Clues"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In general, if you have a choice, ",(0,a.kt)("strong",{parentName:"li"},"color clues should be given over number clues"),". This is because color clues are usually more specific, telling the player the exact identity of the card."),(0,a.kt)("li",{parentName:"ul"},'Of course, don\'t be afraid to disregard this advice and use number clues if it helps to "fill in" other cards in the hand.')),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"discard-without-fear"},"Discard Without Fear"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Don't be afraid of discarding"),". If you discard something important, it won't be your fault - it is your teammates' responsibility to save any important cards.")))}g.isMDXComponent=!0},5774:function(e,t,n){"use strict";n.d(t,{Ip:function(){return l}});var r=n(7294),i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function a(e){var t=e.className,n=e.counterClockwise,i=e.dashRatio,a=e.pathRadius,l=e.strokeWidth,c=e.style;return(0,r.createElement)("path",{className:t,style:Object.assign({},c,s({pathRadius:a,dashRatio:i,counterClockwise:n})),d:o({pathRadius:a,counterClockwise:n}),strokeWidth:l,fillOpacity:0})}function o(e){var t=e.pathRadius,n=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+n+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+n+" 1 1 0,-"+2*t+"\n    "}function s(e){var t=e.counterClockwise,n=e.dashRatio,r=e.pathRadius,i=2*Math.PI*r,a=(1-n)*i;return{strokeDasharray:i+"px "+i+"px",strokeDashoffset:(t?-a:a)+"px"}}var l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,n=e.minValue,r=e.maxValue;return(Math.min(Math.max(t,n),r)-n)/(r-n)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,n=e.className,i=e.classes,o=e.counterClockwise,s=e.styles,l=e.strokeWidth,c=e.text,u=this.getPathRadius(),p=this.getPathRatio();return(0,r.createElement)("svg",{className:i.root+" "+n,style:s.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,r.createElement)("circle",{className:i.background,style:s.background,cx:50,cy:50,r:50}):null,(0,r.createElement)(a,{className:i.trail,counterClockwise:o,dashRatio:t,pathRadius:u,strokeWidth:l,style:s.trail}),(0,r.createElement)(a,{className:i.path,counterClockwise:o,dashRatio:p*t,pathRadius:u,strokeWidth:l,style:s.path}),c?(0,r.createElement)("text",{className:i.text,style:s.text,x:50,y:50},c):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(r.Component)}}]);