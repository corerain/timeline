(function(t){function i(i){for(var n,o,r=i[0],h=i[1],l=i[2],d=0,u=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&u.push(s[o][0]),s[o]=0;for(n in h)Object.prototype.hasOwnProperty.call(h,n)&&(t[n]=h[n]);c&&c(i);while(u.length)u.shift()();return a.push.apply(a,l||[]),e()}function e(){for(var t,i=0;i<a.length;i++){for(var e=a[i],n=!0,r=1;r<e.length;r++){var h=e[r];0!==s[h]&&(n=!1)}n&&(a.splice(i--,1),t=o(o.s=e[0]))}return t}var n={},s={app:0},a=[];function o(i){if(n[i])return n[i].exports;var e=n[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=n,o.d=function(t,i,e){o.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,i){if(1&i&&(t=o(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var n in t)o.d(e,n,function(i){return t[i]}.bind(null,n));return e},o.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(i,"a",i),i},o.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],h=r.push.bind(r);r.push=i,r=r.slice();for(var l=0;l<r.length;l++)i(r[l]);var c=h;a.push(["e35a","chunk-vendors"]),e()})({a9cd:function(t,i,e){},d678:function(t,i,e){"use strict";var n=e("a9cd"),s=e.n(n);s.a},e35a:function(t,i,e){"use strict";e.r(i);var n=e("2b0e"),s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"time-line-operation"},[e("div",{staticClass:"day-line"},[e("div",{staticClass:"line-title"},[e("svg",{staticClass:"icon",attrs:{t:"1646985285059",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"7394","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"200",height:"200"}},[e("defs"),e("path",{attrs:{d:"M426.666667 137.514667V225.706667A298.666667 298.666667 0 1 0 798.293333 597.333333h88.192A384 384 0 1 1 426.666667 137.514667zM512 85.333333c231.68 0 420.181333 184.618667 426.496 414.72L938.666667 512H512V85.333333z","p-id":"7395"}})]),e("span",[t._v("single day distribution")])]),e("div",{attrs:{id:"day-line"}})]),e("div",{staticClass:"time-line"},[e("div",{staticClass:"line-title"},[e("svg",{staticClass:"icon",attrs:{t:"1646985289323",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"7524","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"200",height:"200"}},[e("defs"),e("path",{attrs:{d:"M597.333333 128a128 128 0 0 1 42.666667 248.704V853.333333h-85.333333V376.746667A128.042667 128.042667 0 0 1 597.333333 128z m-128 298.709333L170.666667 426.666667v256h85.333333v-128h85.333333v128h85.333334v-128h85.333333v213.333333H128a42.666667 42.666667 0 0 1-42.666667-42.666667V384a42.666667 42.666667 0 0 1 42.666667-42.666667h273.749333a214.101333 214.101333 0 0 0 67.626667 85.376zM896 341.333333a42.666667 42.666667 0 0 1 42.666667 42.666667v341.333333a42.666667 42.666667 0 0 1-42.666667 42.666667h-213.333333v-213.333333h85.333333v128h85.333333v-256l-128 0.042666a214.101333 214.101333 0 0 0 67.584-85.333333L896 341.333333z","p-id":"7525"}})]),e("span",[t._v("time line")])]),e("div",{attrs:{id:"time-line"}})])]),e("div",{staticClass:"time-line-button"},[e("div",{staticClass:"time-line-button-block",on:{click:function(i){return t.jumpDay("left")}}},[e("svg",{staticClass:"icon",attrs:{t:"1645407814587",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"7249","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"200",height:"200"}},[e("defs"),e("path",{attrs:{d:"M469.333333 213.333333l64 64L298.666667 512l234.666666 234.666667L469.333333 810.666667l-298.666666-298.666667 298.666666-298.666667z m298.666667 0l64 64L597.333333 512l234.666667 234.666667L768 810.666667l-298.666667-298.666667 298.666667-298.666667z","p-id":"7250"}})]),e("span",[t._v("The day before")])]),e("div",{staticClass:"time-line-button-block right-button",class:[t.buttons.right.disabled?"is-disabled":""],on:{click:function(i){return t.jumpDay("right")}}},[e("span",[t._v("The day after")]),e("svg",{staticClass:"icon",attrs:{t:"1646986146374",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"7784","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"200",height:"200"}},[e("defs"),e("path",{attrs:{d:"M576 213.333333l298.666667 298.666667-298.666667 298.666667-64-64 234.666667-234.666667L512 277.333333 576 213.333333z m-298.666667 0l298.666667 298.666667-298.666667 298.666667L213.333333 746.666667l234.666667-234.666667L213.333333 277.333333 277.333333 213.333333z","p-id":"7785"}})])]),e("div",{staticClass:"time-line-button-middle"},[e("div",{staticClass:"button-middle-block"},[e("svg",{staticClass:"icon",attrs:{t:"1646986190754",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"7914","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"200",height:"200"}},[e("defs"),e("path",{attrs:{d:"M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m0 85.333334a341.333333 341.333333 0 1 0 0 682.666666 341.333333 341.333333 0 0 0 0-682.666666z m42.666667 85.333333v213.333333h170.666666v85.333334h-256V256h85.333334z","p-id":"7915"}})]),e("span",{staticClass:"button-middle-text text-date"},[t._v(t._s(t.textDate))]),e("span",{staticClass:"button-middle-text text-time"},[t._v(t._s(t.textTime))])]),e("div",{staticClass:"back-to-now",on:{click:t.backToNow}},[e("svg",{staticClass:"icon",attrs:{t:"1650795241429",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"7478","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"200",height:"200"}},[e("defs"),e("path",{attrs:{d:"M210.304 89.6l97.28 97.28a384 384 0 1 1-128.170667 517.162667l73.898667-42.666667A298.666667 298.666667 0 1 0 369.92 249.173333l81.749333 81.792-301.696 60.373334L210.304 89.6zM512 384a128 128 0 1 1 0 256 128 128 0 0 1 0-256z","p-id":"7479"}})])])])]),e("div",{staticClass:"callback-data"},[t._v(t._s(t.callbackData))])])},a=[],o=e("5a0c"),r=e.n(o),h=(e("99af"),e("cb29"),e("4de4"),e("4160"),e("caad"),e("b64b"),e("d3b7"),e("159b"),e("96cf"),e("1da1")),l=e("d4ec"),c=e("bee2"),d=function(){function t(i){var e,n,s,a,o,h,c,d,u,v,m,f,g,y,p,k,C,w,x,b,T,P,R,S,D,B,E,A,M,H,L,z,O;Object(l["a"])(this,t),this.config={},this.dayjs=r.a;var W=this.checkOption(i);if(W){this.dayContainer=null,this.dayContainerStyle={backgroundColor:null!==(e=this.config.dayBackgroundColor)&&void 0!==e?e:"rgba(245, 249, 255, 1)",padding:"0 ".concat(null!==(n=this.config.dayBackgroundPadding)&&void 0!==n?n:10,"px")},this.dayCanvas=null,this.dayCtx=null,this.dayCanvasWidth=0,this.dayCanvasHeight=0,this.dayBackground={shape:null!==(s=this.config.dayBackgroundShape)&&void 0!==s?s:"round"},this.dayCanvasStyle={},this.dayRecord={lineHeight:null!==(a=this.config.dayRecordLineHeight)&&void 0!==a?a:2,lineColor:null!==(o=this.config.dayRecordlineColor)&&void 0!==o?o:"rgba(218, 227, 240, 1)",height:null!==(h=this.config.dayRecordHeight)&&void 0!==h?h:12,color:null!==(c=this.config.dayRecordColor)&&void 0!==c?c:"rgba(24, 114, 240, 1)",ratio:.15},this.dayAnimation=null,this.dayAnimationTimer=null!==(d=this.config.dayAnimationTimer)&&void 0!==d?d:1,this.dayAnimationEase=null!==(u=this.config.dayAnimationEase)&&void 0!==u?u:"easeInOutQuart",this.container=null,this.containerStyle={position:"relative",display:"flex","justify-content":"center"},this.canvas=null,this.ctx=null,this.canvasWidth=0,this.canvasHeight=0,this.canvasStyle={"background-color":null!==(v=this.config.backgroundColor)&&void 0!==v?v:"rgba(14, 27, 46, .05)"};var j=[1,2,3,4,5,6,10,12,15,20,30,60];this.SecondPixelRatio=j.includes(this.config.secondPixelRatio)?this.config.secondPixelRatio:1,this.pointer=null,this.pointerStyle={position:"absolute",top:0,width:"1px",height:"calc(100% + 4px)",display:"flex","background-color":null!==(m=this.config.pointerColor)&&void 0!==m?m:"rgba(27, 53, 89, 1)"},this.pointBlock={scope:null!==(f=this.config.pointBlockScope)&&void 0!==f?f:14.5,backgroundColor:null!==(g=this.config.pointBlockBackgroundColor)&&void 0!==g?g:"rgba(255, 58, 51, .1)"},this.timeFormat=null!==(y=this.config.timeFormat)&&void 0!==y?y:"YYYY/MM/DD",this.pointerTime=r()(),this.leftBorderTime=null,this.rightBorderTime=null,this.startTime=null,this.startPixel=0,this.incompletePixel=0,this.short={height:null!==(p=this.config.shortHeight)&&void 0!==p?p:8,color:null!==(k=this.config.shortColor)&&void 0!==k?k:"rgba(200, 202, 204, 1)"},this.middle={height:null!==(C=this.config.middleHeight)&&void 0!==C?C:12,color:null!==(w=this.config.middleColor)&&void 0!==w?w:"rgba(200, 202, 204, 1)"},this.long={height:null!==(x=this.config.longHeight)&&void 0!==x?x:16,color:null!==(b=this.config.longColor)&&void 0!==b?b:"rgba(150, 151, 153, 1)"},this.zero={height:this.long.height+(null!==(T=this.config.zeroBottom)&&void 0!==T?T:6),color:null!==(P=this.config.zeroColor)&&void 0!==P?P:"rgba(14, 27, 46, .65)",angle:null!==(R=this.config.zeroRadian)&&void 0!==R?R:60,fontSize:null!==(S=this.config.fontSize)&&void 0!==S?S:12,fontFamily:null!==(D=this.config.fontFamily)&&void 0!==D?D:"sans-serif",fontWeight:null!==(B=this.config.fontWeight)&&void 0!==B?B:600,format:null!==(E=this.config.zeroFormat)&&void 0!==E?E:"YYYY/MM/DD"},this.usedPixel=0,this.mouseStatus=0,this.mouseInfo={x:0,y:0},this.support="onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll",this.extent=(null!==(A=this.config.extent)&&void 0!==A?A:6)*this.SecondPixelRatio,this.record=null!==(M=this.config.record)&&void 0!==M?M:[],this.recordConfig={top:null!==(H=this.config.recordTop)&&void 0!==H?H:4,radius:null!==(L=this.config.recordRadius)&&void 0!==L?L:3,color:null!==(z=this.config.recordColor)&&void 0!==z?z:"rgba(156, 191, 240, 1)",ratio:.15},this.clock={height:null!==(O=this.config.clockHeight)&&void 0!==O?O:16,color:"rgba(75,76,77,0.1)"},this.clockAnimationFrame=null,this.resize=null,this.dayMouseClick=null,this.mouseDown=null,this.mouseUp=null,this.mouseMove=null,this.mouseEnter=null,this.mouseLeave=null,this.mouseScroll=null,this.init()}}return Object(c["a"])(t,[{key:"checkOption",value:function(t){var i=!0;return t?this.config=t:(console.error("Creating TimeLine object requires passing parameters"),i=!1),i}},{key:"getPointerTimeInfo",value:function(){return{year:this.pointerTime.format("YYYY"),month:this.pointerTime.format("MM"),day:this.pointerTime.format("DD"),hour:this.pointerTime.format("HH"),minute:this.pointerTime.format("mm"),second:this.pointerTime.format("ss")}}},{key:"init",value:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.initDayContainer(),this.initContainer(),this.setInitTime(),t.next=5,this.waitRendered();case 5:this.createDayCanvas(),this.createCanvas(),this.createPointer(),this.setClockAnimation(),this.pointerBlockDataCallback(),this.bindCache(),this.bindEvent();case 12:case"end":return t.stop()}}),t,this)})));function i(){return t.apply(this,arguments)}return i}()},{key:"initDayContainer",value:function(){var t;this.dayContainer=null!==(t=this.config.dayContainer)&&void 0!==t?t:document.createElement("div"),this.setStyle(this.dayContainer,this.dayContainerStyle)}},{key:"initContainer",value:function(){var t;this.container=null!==(t=this.config.container)&&void 0!==t?t:document.createElement("div"),this.setStyle(this.container,this.containerStyle)}},{key:"setInitTime",value:function(){var t=this.config.initTime;if(t){var i=null;if(t.isValid&&t.isValid())i=t;else if(i=r.a.unix(t),!i.isValid||!i.isValid())return void console.error("time is not the correct timestamp");this.pointerTime=t}}},{key:"createDayCanvas",value:function(){var t;switch(this.dayCanvasWidth=this.dayContainer.getBoundingClientRect().width-2*(null!==(t=this.config.dayBackgroundPadding)&&void 0!==t?t:10),this.dayCanvasHeight=this.dayContainer.getBoundingClientRect().height,this.dayCanvas=document.createElement("canvas"),this.dayCtx=this.dayCanvas.getContext("2d"),this.dayCanvas.width=this.dayCanvasWidth,this.dayCanvas.height=this.dayCanvasHeight,this.dayBackground.shape){case"round":this.dayContainer.style["border-radius"]="".concat(this.dayCanvasHeight,"px");break;default:break}this.setStyle(this.dayCanvas,this.dayCanvasStyle),this.dayContainer.appendChild(this.dayCanvas)}},{key:"createCanvas",value:function(){this.canvasWidth=this.container.getBoundingClientRect().width,this.canvasHeight=this.container.getBoundingClientRect().height,this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.canvas.width=this.canvasWidth,this.canvas.height=this.canvasHeight,this.setStyle(this.canvas,this.canvasStyle),this.container.appendChild(this.canvas)}},{key:"createPointer",value:function(){this.pointer=document.createElement("div"),this.setStyle(this.pointer,this.pointerStyle),this.container.appendChild(this.pointer)}},{key:"setStyle",value:function(t,i){var e=Object.keys(i);e.forEach((function(e){t.style[e]=i[e]}))}},{key:"waitRendered",value:function(t){var i=null!==t&&void 0!==t?t:0;return new Promise((function(t){setTimeout((function(){t(!0)}))}),i)}},{key:"setPointerAnimation",value:function(t,i,e,n,s){var a=this,o=e/n,r=s(o),h=i*r,l=h-t;this.setPointerTime(l),this.dayAnimation=requestAnimationFrame((function(t){a.setPointerAnimation(h,i,++e,n,s)})),1===o&&(this.disposeDayAnimation(),this.setClockAnimation(),this.pointerBlockDataCallback())}},{key:"setPointerTime",value:function(t){this.clearCanvas(),this.clearDayCanvas();var i=null!==t&&void 0!==t?t:0,e=60*i/this.SecondPixelRatio;this.pointerTime=this.pointerTime.add(e,"s"),this.pointerTimeCallback(),this.drawPointerBlock(),this.setStartTime()}},{key:"drawDayMiddleLine",value:function(){this.drawFillRect(this.dayCtx,0,(this.dayCanvasHeight-this.dayRecord.lineHeight)/2,this.dayCanvasWidth,this.dayRecord.lineHeight,this.dayRecord.lineColor)}},{key:"drawDayPointer",value:function(){var t,i=this.pointerTime.startOf("d"),e=this.pointerTime.diff(i,"s"),n=this.dayCanvasWidth/86400,s=e*n;this.drawFillRect(this.dayCtx,s,0,1,this.dayCanvasHeight,null!==(t=this.config.pointerColor)&&void 0!==t?t:"rgba(27, 53, 89, 1)")}},{key:"drawPointerBlock",value:function(){var t=(this.canvasWidth-1)/2,i=t-this.pointBlock.scope,e=2*this.pointBlock.scope+1;this.drawFillRect(this.ctx,i,0,e,this.canvasHeight,this.pointBlock.backgroundColor)}},{key:"setStartTime",value:function(){var t=this,i=(this.canvasWidth-1)/2;this.incompletePixel=i%1;var e=60*Math.ceil(i)/this.SecondPixelRatio,n=this.pointerTime.get("s")%(60/this.SecondPixelRatio),s=this.pointerTime.subtract(n,"s");this.leftBorderTime=s.subtract(e,"s"),this.startTime=this.leftBorderTime.startOf("day");var a=60*this.canvasWidth/this.SecondPixelRatio;this.rightBorderTime=this.leftBorderTime.add(a,"s"),this.drawDayMiddleLine(),this.record.forEach((function(i){var e=r.a.unix(i.start);if(e.isValid&&e.isValid()){var n,s=null!==(n=i.duration)&&void 0!==n?n:1,a=e.add(s,"s");t.drawDayRecord(e,a,s),t.drawRecord(e,a,s)}else console.error("".concat(i.start," is not the correct timestamp"))})),this.drawDayPointer(),this.drawTickMarks(),this.drawClockRect()}},{key:"pixelToTime",value:function(t){var i=60*(t-this.startPixel)/this.SecondPixelRatio;return this.startTime.add(i,"s")}},{key:"timeToPixel",value:function(t){var i=t.diff(this.leftBorderTime,"s");return i*this.SecondPixelRatio/60}},{key:"setClockAnimation",value:function(){var t=this;this.setPointerTime(),this.disposeClockAnimation();var i=60/this.SecondPixelRatio*1e3;this.clockAnimationFrame=setInterval((function(){t.setPointerTime()}),i)}},{key:"drawClockRect",value:function(){var t=r()(),i=this.timeToPixel(t);this.drawFillRect(this.ctx,0,this.canvasHeight-this.clock.height,i,this.clock.height,this.clock.color)}},{key:"drawRecord",value:function(t,i){var e=this.timeToPixel(t),n=this.timeToPixel(i),s=n-e,a=360/(60/this.SecondPixelRatio),o=e+3,r=this.recordConfig.top+3;s<=a?this.drawFillArc(this.ctx,o,r,this.recordConfig.radius,this.recordConfig.color):this.drawRoundRect(this.ctx,o,this.recordConfig.top,s,2*this.recordConfig.radius,this.recordConfig.color,this.recordConfig.ratio)}},{key:"drawDayRecord",value:function(t,i){var e=this.pointerTime.startOf("d"),n=t.diff(e,"s"),s=i.diff(e,"s"),a=this.dayCanvasWidth/86400,o=n*a,r=s*a,h=r-o;this.drawRoundRect(this.dayCtx,o,(this.dayCanvasHeight-this.dayRecord.height)/2,h,this.dayRecord.height,this.dayRecord.color,this.dayRecord.ratio)}},{key:"drawTickMarks",value:function(){var t=this.leftBorderTime.diff(this.startTime,"s");this.startPixel=0-this.incompletePixel-t/(60/this.SecondPixelRatio),this.usedPixel=6*this.SecondPixelRatio-1,this.drawLoopTickMarks()}},{key:"drawLoopTickMarks",value:function(){var t=1;while(this.startPixel+this.usedPixel<=this.canvasWidth){var i=t%10,e=1,n=this.startPixel+this.usedPixel;if(0===i){this.drawFillRect(this.ctx,n,this.canvasHeight-this.long.height,e,this.long.height,this.long.color);var s=this.pixelToTime(n),a=23===s.get("h"),o=59===s.get("m"),r=s.get("s")===60-60/this.SecondPixelRatio;a&&o&&r&&this.drawDayZeroTime(n,s)}else 5===i?this.drawFillRect(this.ctx,n,this.canvasHeight-this.middle.height,e,this.middle.height,this.middle.color):this.drawFillRect(this.ctx,n,this.canvasHeight-this.short.height,e,this.short.height,this.short.color);t++,this.usedPixel+=6*this.SecondPixelRatio}}},{key:"drawFillRect",value:function(t,i,e,n,s,a){t.beginPath(),t.fillStyle=a,t.fillRect(i,e,n,s),t.closePath()}},{key:"drawFillArc",value:function(t,i,e,n,s){t.beginPath(),t.arc(i,e,n,0,2*Math.PI),t.fillStyle=s,t.fill(),t.closePath()}},{key:"drawRoundRect",value:function(t,i,e,n,s,a,o){var r=n>=s?(null!==o&&void 0!==o?o:.5)*s:(null!==o&&void 0!==o?o:.5)*n;t.beginPath(),t.moveTo(i+r,e),t.arcTo(i+n,e,i+n,e+s,r),t.arcTo(i+n,e+s,i,e+s,r),t.arcTo(i,e+s,i,e,r),t.arcTo(i,e,i+n,e,r),t.fillStyle=a,t.fill(),t.closePath()}},{key:"drawDayZeroTime",value:function(t,i){var e=this.zero.fontSize-4,n=e*Math.tan(this.zero.angle/2*(Math.PI/180));this.ctx.beginPath(),this.ctx.moveTo(t+.5,this.canvasHeight-this.zero.height),this.ctx.lineTo(t+.5+n,this.canvasHeight-(this.zero.height+e)),this.ctx.lineTo(t+.5-n,this.canvasHeight-(this.zero.height+e)),this.ctx.fillStyle=this.zero.color,this.ctx.fill();var s=t+.5+n+4,a=this.canvasHeight-this.zero.height;this.ctx.font="normal ".concat(this.zero.fontWeight," ").concat(this.zero.fontSize,"px Unknown ").concat(this.zero.fontFamily),this.ctx.fillText(i.add(1,"m").format(this.zero.format),s,a)}},{key:"bindCache",value:function(){this.resize=this.resizeEvent.bind(this),this.dayMouseClick=this.dayMouseClickEvent.bind(this),this.mouseDown=this.mouseDownEvent.bind(this),this.mouseUp=this.mouseUpEvent.bind(this),this.mouseMove=this.mouseMoveEvent.bind(this),this.mouseEnter=this.mouseEnterEvent.bind(this),this.mouseLeave=this.mouseLeaveEvent.bind(this),this.mouseScroll=this.mouseScrollEvent.bind(this)}},{key:"bindEvent",value:function(){window.addEventListener("resize",this.resize),this.dayCanvas.addEventListener("click",this.dayMouseClick),this.canvas.addEventListener("mousedown",this.mouseDown),this.canvas.addEventListener("mouseup",this.mouseUp),this.canvas.addEventListener("mousemove",this.mouseMove),this.container.addEventListener("mouseenter",this.mouseEnter,!1),this.container.addEventListener("mouseleave",this.mouseLeave,!1),this.canvas.addEventListener(this.support,this.mouseScroll,!1)}},{key:"unBindEvent",value:function(){window.removeEventListener("resize",this.resize),this.dayCanvas.removeEventListener("click",this.dayMouseClick),this.canvas.removeEventListener("mousedown",this.mouseDown),this.canvas.removeEventListener("mouseup",this.mouseUp),this.canvas.removeEventListener("mousemove",this.mouseMove),this.container.removeEventListener("mouseenter",this.mouseEnter),this.container.removeEventListener("mouseleave",this.mouseLeave),this.canvas.removeEventListener(this.support,this.mouseScroll)}},{key:"jumpTime",value:function(t){var i=null;if(t.isValid&&t.isValid())i=t;else if(i=r.a.unix(t),!i.isValid||!i.isValid())return void console.error("time is not the correct timestamp");this.disposeDayAnimation(),this.disposeClockAnimation();var e=i.diff(this.pointerTime,"s"),n=e/(60/this.SecondPixelRatio),s=this.dayAnimationTimer,a=60*s,o=this[this.dayAnimationEase];this.setPointerAnimation(0,n,0,a,o)}},{key:"easeInOutQuart",value:function(t){return t<.5?8*t*t*t*t:1-Math.pow(-2*t+2,4)/2}},{key:"resizeEvent",value:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.resetDayCanvasWidthHeight(),this.resetCanvasWidthHeight(),t.next=4,this.waitRendered;case 4:this.setClockAnimation(),this.pointerBlockDataCallback();case 6:case"end":return t.stop()}}),t,this)})));function i(){return t.apply(this,arguments)}return i}()},{key:"dayMouseClickEvent",value:function(t){this.disposeDayAnimation(),this.disposeClockAnimation();var i=this.pointerTime.startOf("d"),e=this.dayCanvasWidth/86400,n=t.offsetX/e,s=i.add(n,"s"),a=s.diff(this.pointerTime,"s"),o=a/(60/this.SecondPixelRatio),r=this.dayAnimationTimer,h=60*r,l=this[this.dayAnimationEase];this.setPointerAnimation(0,o,0,h,l)}},{key:"mouseDownEvent",value:function(t){this.disposeDayAnimation(),this.disposeClockAnimation(),this.mouseStatus=t.buttons,1===this.mouseStatus&&(this.mouseInfo.x=t.offsetX,this.mouseInfo.y=t.offsetY)}},{key:"mouseUpEvent",value:function(t){this.mouseStatus=0,this.setClockAnimation()}},{key:"mouseMoveEvent",value:function(t){if(1===this.mouseStatus){this.disposeClockAnimation();var i=this.mouseInfo.x-t.offsetX;this.setPointerTime(i),this.mouseInfo.x=t.offsetX,this.mouseInfo.y=t.offsetY,this.pointerBlockDataCallback()}}},{key:"mouseEnterEvent",value:function(t){this.mouseStatus=t.buttons,1===this.mouseStatus&&this.disposeClockAnimation()}},{key:"mouseLeaveEvent",value:function(t){this.mouseStatus=0,this.setClockAnimation()}},{key:"mouseScrollEvent",value:function(t){var i=t.wheelDelta||t.detail||t.wheelDeltaY,e=1,n=-1,s=this.extent,a=0;a=i<0?e*s:n*s,this.setPointerTime(a),this.pointerBlockDataCallback()}},{key:"pointerTimeCallback",value:function(){var t=this.config.pointerTimeCallback;t&&t(this.pointerTime)}},{key:"pointerBlockDataCallback",value:function(){var t=this.config.pointerBlockDataCallback;if(t){var i=(this.canvasWidth-1)/2,e=i-this.pointBlock.scope,n=e+2*this.pointBlock.scope,s=this.pixelToTime(e),a=this.pixelToTime(n),o=this.record.filter((function(t){var i=r.a.unix(t.start);if(i.isValid&&i.isValid()){var e,n=null!==(e=t.duration)&&void 0!==e?e:1,o=i.add(n,"s"),h=i.isSame(s)||i.isSame(a)||o.isSame(s)||o.isSame(a),l=i.isAfter(s)&&i.isBefore(a),c=o.isAfter(s)&&o.isBefore(a),d=s.isAfter(i)&&a.isBefore(o);return h||l||c||d}return console.error("".concat(t.start," is not the correct timestamp")),!1}));t(o)}}},{key:"resetDayCanvasWidthHeight",value:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.dayCanvas.width=0,this.dayCanvas.height=0,t.next=4,this.waitRendered;case 4:this.dayCanvasWidth=this.dayContainer.getBoundingClientRect().width-2*(null!==(i=this.config.dayBackgroundPadding)&&void 0!==i?i:10),this.dayCanvasHeight=this.dayContainer.getBoundingClientRect().height,this.dayCanvas.width=this.dayCanvasWidth,this.dayCanvas.height=this.dayCanvasHeight;case 8:case"end":return t.stop()}}),t,this)})));function i(){return t.apply(this,arguments)}return i}()},{key:"resetCanvasWidthHeight",value:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.canvas.width=0,this.canvas.height=0,t.next=4,this.waitRendered;case 4:this.canvasWidth=this.container.getBoundingClientRect().width,this.canvasHeight=this.container.getBoundingClientRect().height,this.canvas.width=this.canvasWidth,this.canvas.height=this.canvasHeight;case 8:case"end":return t.stop()}}),t,this)})));function i(){return t.apply(this,arguments)}return i}()},{key:"clearDayContainer",value:function(){this.dayContainer.innerHTML=""}},{key:"clearContainer",value:function(){this.container.innerHTML=""}},{key:"clearDayCanvas",value:function(){this.dayCtx.clearRect(0,0,this.dayCanvasWidth,this.dayCanvasHeight)}},{key:"clearCanvas",value:function(){this.usedPixel=0,this.ctx.clearRect(0,0,this.canvasWidth,this.canvasHeight)}},{key:"disposeDayAnimation",value:function(){this.dayAnimation&&(cancelAnimationFrame(this.dayAnimation),this.dayAnimation=null)}},{key:"disposeClockAnimation",value:function(){this.clockAnimationFrame&&(clearInterval(this.clockAnimationFrame),this.clockAnimationFrame=null)}},{key:"dispose",value:function(){this.unBindEvent(),this.disposeDayAnimation(),this.disposeClockAnimation(),this.dayContainer&&(this.clearDayContainer(),this.dayContainer=null),this.dayCanvas&&(this.dayCanvas=null),this.dayPointer&&(this.dayPointer=null),this.container&&(this.clearContainer(),this.container=null),this.canvas&&(this.canvas=null),this.pointer&&(this.pointer=null)}}]),t}(),u=d,v={name:"App",components:{},data:function(){return{timeline:null,buttons:{left:{disabled:!1,target:null},right:{disabled:!0,target:null}},textDate:"2012/11/15",textTime:"20:35:24",callbackData:""}},mounted:function(){this.setTimeLine()},methods:{setPointerTime:function(t){this.textDate=t.format("YYYY/MM/DD"),this.textTime=t.format("HH:mm:ss"),this.buttons.left.target=t.subtract(24,"h").startOf("day"),this.buttons.right.target=t.add(24,"h").startOf("day").add(1,"s");var i=r()().startOf("day");this.buttons.right.disabled=i.isSame(t)||i.isBefore(t)},setPointerVideoList:function(t){this.callbackData=JSON.stringify(t)},setTimeLine:function(){var t=Math.floor(Date.now()/1e3),i={container:document.querySelector("#time-line"),dayContainer:document.querySelector("#day-line"),pointerColor:"rgba(255, 58, 51, 1)",record:[{start:t+30,duration:2400,info:"11111"},{start:t+3600,duration:1800,info:"2222"}],pointerTimeCallback:this.setPointerTime,pointerBlockDataCallback:this.setPointerVideoList};this.timeline=new u(i)},backToNow:function(){var t=r()();this.timeline.jumpTime(t)},jumpDay:function(t){var i=this.buttons[t];i.disabled||i.target&&this.timeline.jumpTime(i.target)}}},m=v,f=(e("d678"),e("2877")),g=Object(f["a"])(m,s,a,!1,null,null,null),y=g.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(y)}}).$mount("#app")}});
//# sourceMappingURL=app.bf85e440.js.map