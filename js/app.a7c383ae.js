(function(e){function t(t){for(var n,c,i=t[0],a=t[1],l=t[2],f=0,h=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&h.push(o[c][0]),o[c]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);u&&u(t);while(h.length)h.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,i=1;i<r.length;i++){var a=r[i];0!==o[a]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={app:0},s=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/twemoji-search/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=a;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"263b":function(e,t,r){const n=r("2515");async function o(){let e=await n.get("https://api.github.com/repos/twitter/twemoji/git/trees/fc6688975af4c908eae5a144f6df6e71bdb8a428"),t=[];for(let r of e.data.tree)t.push(r.path.substring(0,r.path.length-4));return t}async function s(){let e=await o();const t=await n.get("https://unpkg.com/emoji.json@13.1.0/emoji.json");let r=t.data;for(let n of r)n.name=n.name.replace(/:?\s/g,"_"),n.codes=n.codes.toLowerCase().replace(/\s/g,"-");return r=r.filter((function(t){return e.includes(t.codes)})),r}e.exports={fetchEmojiInfo:s,getEmojiCodes:o}},"2c8d":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("aef5");const o=Object(n["e"])("h1",null,"Twemoji Search!",-1),s={class:"res"},c={class:"footer"},i=Object(n["d"])(" Made with "),a=Object(n["d"])(" (and "),l=Object(n["e"])("a",{href:"https://v3.vuejs.org/",style:{"text-decoration-color":"#42b883"}},"Vue.js",-1),u=Object(n["d"])(") by "),f=Object(n["e"])("a",{href:"https://github.com/Makiyu-py"},"Makiyu",-1);function h(e,t,r,h,p,b){return Object(n["f"])(),Object(n["c"])(n["a"],null,[o,Object(n["e"])("form",{onSubmit:t[3]||(t[3]=Object(n["l"])((...e)=>b.findSearch&&b.findSearch(...e),["prevent"]))},[Object(n["k"])(Object(n["e"])("input",{style:{"text-align":"center"},type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>p.searchQuery=e),placeholder:"smile",onKeyup:t[2]||(t[2]=(...e)=>b.findSearch&&b.findSearch(...e))},null,544),[[n["i"],p.searchQuery]])],32),Object(n["k"])(Object(n["e"])("ul",s,[(Object(n["f"])(!0),Object(n["c"])(n["a"],null,Object(n["g"])(p.queriedEmojis,e=>(Object(n["f"])(),Object(n["c"])("li",{key:e},[Object(n["e"])("a",{href:e.url.png,download:""},[Object(n["d"])(Object(n["h"])(e.name)+" ",1),Object(n["e"])("img",{src:e.url.png,class:"emoji"},null,8,["src"])],8,["href"])]))),128))],512),[[n["j"],p.hasResults]]),Object(n["k"])(Object(n["e"])("h3",null,"Welp, no results!",512),[[n["j"],!p.hasResults]]),Object(n["e"])("footer",c,[i,Object(n["e"])("img",{src:e.emojiMap["blue_heart"].url.png,class:"emoji"},null,8,["src"]),a,l,u,f])],64)}const p=function(e){const t=e.needle,r=e.haystack;if(""===t)return[];let n,o=r.length,s=t.length;if("undefined"===typeof r||!o)return[];let c,i,a=r.length-1,l=0;while(l<=a){n=Math.floor((l+a)/2);let e=r[n].substr(0,s);if(e>t)a=n-1;else{if(!(e<t)){n=n;break}l=n+1}}if("undefined"===typeof n&&(n=-1),-1===n)return[];for(let f=n;f>-1;f--){let e=r[f].substr(0,s);if(e!=t){c=f+1;break}c=0}for(let f=n;f<o;f++){let e=r[f].substr(0,s);if(e!=t){i=f;break}i=o-1}let u=[];for(let f=c;f<i;f++)u.push(r[f]);return u};var b=p,d={name:"App",methods:{findSearch(){if(0===this.searchQuery.length)return this.queriedEmojis=[],void(this.hasResults=!1);let e=(" "+this.searchQuery).slice(1);e=e.toLowerCase().replaceAll(/[^a-z\s]/g,"").replaceAll(/\s/g,"_");let t=b({needle:e,haystack:Object.keys(this.emojiMap).sort()});if(0===t.length)return this.queriedEmojis=[],void(this.hasResults=!1);t.length>10&&(t=t.slice(0,10)),this.queriedEmojis=t.map(e=>this.emojiMap[e]),this.hasResults=!0}},data(){return{hasResults:!1,queriedEmojis:[],searchQuery:""}}};r("87ce");d.render=h;var j=d,m=r("263b");const g=Object(n["b"])(j);Object(m["fetchEmojiInfo"])().then(e=>{let t=r("b12b").emoji,n={};Object.keys(t).forEach(r=>{let o=e.find(e=>e.char===t[r]);void 0!==o&&(o=o.codes,n[r]={name:r.replaceAll("_"," "),emoji:t[r],url:{png:`https://twemoji.maxcdn.com/v/latest/72x72/${o}.png`,svg:`https://twemoji.maxcdn.com/v/latest/svg/${o}.svg`},cp:o})}),g.config.globalProperties.emojiMap=n,g.config.globalProperties.charInfos=e,g.mount("#app")})},"87ce":function(e,t,r){"use strict";r("2c8d")}});
//# sourceMappingURL=app.a7c383ae.js.map