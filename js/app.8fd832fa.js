(function(e){function t(t){for(var n,s,i=t[0],a=t[1],l=t[2],f=0,p=[];f<i.length;f++)s=i[f],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);u&&u(t);while(p.length)p.shift()();return c.push.apply(c,l||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,i=1;i<r.length;i++){var a=r[i];0!==o[a]&&(n=!1)}n&&(c.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={app:0},c=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/twemoji-search/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=a;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"263b":function(e,t,r){const n=r("2515");async function o(){let e=await n.get("https://api.github.com/repos/twitter/twemoji/git/trees/fc6688975af4c908eae5a144f6df6e71bdb8a428"),t=[];for(let r of e.data.tree)t.push(r.path.substring(0,r.path.length-4));return t}async function c(){let e=await o();const t=await n.get("https://unpkg.com/emoji.json@13.1.0/emoji.json");let r=t.data;for(let n of r)n.name=n.name.replace(/:?\s/g,"_"),n.codes=n.codes.toLowerCase().replace(/\s/g,"-");return r=r.filter((function(t){return e.includes(t.codes)})),r}e.exports={fetchEmojiInfo:c,getEmojiCodes:o}},"56b3":function(e,t,r){"use strict";r("9221")},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("aef5");const o=Object(n["e"])("h1",null,"Twemoji Search!",-1),c={class:"res"},s={class:"footer"},i=Object(n["d"])(" Made with "),a=Object(n["d"])(" (and "),l=Object(n["e"])("a",{href:"https://v3.vuejs.org/",style:{"text-decoration-color":"#42b883"}},"Vue.js",-1),u=Object(n["d"])(") by "),f=Object(n["e"])("a",{href:"https://github.com/Makiyu-py"},"Makiyu",-1);function p(e,t,r,p,h,j){return Object(n["f"])(),Object(n["c"])(n["a"],null,[o,Object(n["e"])("form",{onSubmit:t[3]||(t[3]=Object(n["l"])((...e)=>j.findSearch&&j.findSearch(...e),["prevent"]))},[Object(n["k"])(Object(n["e"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>h.searchQuery=e),placeholder:"smile",onKeyup:t[2]||(t[2]=(...e)=>j.findSearch&&j.findSearch(...e))},null,544),[[n["i"],h.searchQuery]])],32),Object(n["k"])(Object(n["e"])("ul",c,[(Object(n["f"])(!0),Object(n["c"])(n["a"],null,Object(n["g"])(h.queriedEmojis,e=>(Object(n["f"])(),Object(n["c"])("li",{key:e},[Object(n["e"])("a",{href:e.url.png,download:""},[Object(n["d"])(Object(n["h"])(e.name)+" ",1),Object(n["e"])("img",{src:e.url.png,class:"emoji"},null,8,["src"])],8,["href"])]))),128))],512),[[n["j"],h.hasResults]]),Object(n["k"])(Object(n["e"])("h3",null,"Welp, no results!",512),[[n["j"],!h.hasResults]]),Object(n["e"])("footer",s,[i,Object(n["e"])("img",{src:e.emojiMap["blue_heart"].url.png,class:"emoji"},null,8,["src"]),a,l,u,f])],64)}var h={name:"App",methods:{findSearch(){if(0===this.searchQuery.length)return this.queriedEmojis=[],void(this.hasResults=!1);let e=(" "+this.searchQuery).slice(1);e=e.toLowerCase().replaceAll(/[^a-z\s]/g,"").replaceAll(/\s/g,"_");let t=Object.keys(this.emojiMap).filter((function(t){return t.includes(e)}));if(0===t.length)return this.queriedEmojis=[],void(this.hasResults=!1);t.length>10&&(t=t.slice(0,10)),this.queriedEmojis=t.map(e=>this.emojiMap[e]),this.hasResults=!0}},data(){return{hasResults:!1,queriedEmojis:[],searchQuery:""}}};r("56b3");h.render=p;var j=h,b=r("263b");const d=Object(n["b"])(j);Object(b["fetchEmojiInfo"])().then(e=>{let t=r("b12b").emoji,n={};Object.keys(t).forEach(r=>{let o=e.find(e=>e.char===t[r]);void 0!==o&&(o=o.codes,n[r]={name:r.replaceAll("_"," "),emoji:t[r],url:{png:`https://twemoji.maxcdn.com/v/latest/72x72/${o}.png`,svg:`https://twemoji.maxcdn.com/v/latest/svg/${o}.svg`},cp:o})}),d.config.globalProperties.emojiMap=n,d.config.globalProperties.charInfos=e,d.mount("#app")})},9221:function(e,t,r){}});
//# sourceMappingURL=app.8fd832fa.js.map