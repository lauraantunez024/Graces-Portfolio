(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{428:function(t,e,n){var content=n(457);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("92a2a506",content,!0,{sourceMap:!1})},456:function(t,e,n){"use strict";n(428)},457:function(t,e,n){var r=n(22)((function(i){return i[1]}));r.push([t.i,".container[data-v-c4a82728]{grid-template-columns:repeat(5,1fr);height:100vh}.container[data-v-c4a82728],.content[data-v-c4a82728]{display:grid;grid-template-rows:repeat(5,1fr);width:100vw}.content[data-v-c4a82728]{grid-row-end:6;grid-row-start:2;grid-template-columns:10% 70% 10% 10%;height:80vh}.video-container[data-v-c4a82728]{display:flex;grid-row-end:5;grid-row-start:2;justify-content:center}.title-container[data-v-c4a82728],.video-container[data-v-c4a82728]{grid-column-end:3;grid-column-start:2}.title-container[data-v-c4a82728]{grid-row-end:2;grid-row-start:1;margin:auto;text-align:center}h1[data-v-c4a82728]{font-size:5vw}video[data-v-c4a82728]{height:100%}.btn[data-v-c4a82728]{font-size:2vw;height:5vh;margin:auto;top:50%;width:6vw}button[data-v-c4a82728]:hover{background-color:bisque}.btn-prev[data-v-c4a82728]{left:10%;position:absolute}.btn-next[data-v-c4a82728]{position:absolute;right:10%}#caption[data-v-c4a82728]{font-size:1.5vw;grid-column-end:3;grid-column-start:2;grid-row-end:6;grid-row-start:5;margin:auto;text-align:center}",""]),r.locals={},t.exports=r},469:function(t,e,n){"use strict";n.r(e);n(36);var r={name:"VideoView",data:function(){return{videos:[{name:"First Video",path:"../assets/dmmy-vidoe.mp4",caption:"This is the first video weeeeeee",titleImage:"",style:""},{name:"Second Video",path:"../assets/video_preview_h264.mp4",caption:"Second Video RAAAAAAAAH",titleImage:"",style:""}],currentSlideIndex:0}},methods:{changeVideo:function(t){"prev"===t?this.currentSlideIndex=(this.currentSlideIndex-1+this.videos.length)%this.videos.length:"next"===t&&(this.currentSlideIndex=(this.currentSlideIndex+1)%this.videos.length)}},computed:{currentVideo:function(){return this.videos[this.currentSlideIndex].path},currentTitle:function(){return this.videos[this.currentSlideIndex].name},currentCaption:function(){return this.videos[this.currentSlideIndex].caption},currentTitleImage:function(){return this.videos[this.currentSlideIndex].titleImage}}},o=(n(456),n(86)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"content"},[e("div",{staticClass:"title-container"},[e("h1",[t._v(" "+t._s(t.currentTitle))])]),t._v(" "),e("button",{staticClass:"btn-prev btn",on:{click:function(e){return t.changeVideo("prev")}}},[t._v("prev")]),t._v(" "),e("div",{staticClass:"video-container"},[e("video",{attrs:{controls:""}},[e("source",{attrs:{src:t.currentVideo,type:"video/mp4"}}),t._v("\n                Your browser does not support the video tag.\n            ")])]),t._v(" "),e("span",{attrs:{id:"caption"}},[e("p",[t._v(" "+t._s(t.currentCaption))])]),t._v(" "),e("button",{staticClass:"btn-next btn",on:{click:function(e){return t.changeVideo("next")}}},[t._v("next")])])])}),[],!1,null,"c4a82728",null);e.default=component.exports}}]);