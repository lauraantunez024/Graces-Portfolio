exports.ids = [13];
exports.modules = {

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(132);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("92a2a506", content, true, context)
};

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_videos_vue_vue_type_style_index_0_id_c4a82728_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(108);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_videos_vue_vue_type_style_index_0_id_c4a82728_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_videos_vue_vue_type_style_index_0_id_c4a82728_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_videos_vue_vue_type_style_index_0_id_c4a82728_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_videos_vue_vue_type_style_index_0_id_c4a82728_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container[data-v-c4a82728]{grid-template-columns:repeat(5,1fr);height:100vh}.container[data-v-c4a82728],.content[data-v-c4a82728]{display:grid;grid-template-rows:repeat(5,1fr);width:100vw}.content[data-v-c4a82728]{grid-row-end:6;grid-row-start:2;grid-template-columns:10% 70% 10% 10%;height:80vh}.video-container[data-v-c4a82728]{display:flex;grid-row-end:5;grid-row-start:2;justify-content:center}.title-container[data-v-c4a82728],.video-container[data-v-c4a82728]{grid-column-end:3;grid-column-start:2}.title-container[data-v-c4a82728]{grid-row-end:2;grid-row-start:1;margin:auto;text-align:center}h1[data-v-c4a82728]{font-size:5vw}video[data-v-c4a82728]{height:100%}.btn[data-v-c4a82728]{font-size:2vw;height:5vh;margin:auto;top:50%;width:6vw}button[data-v-c4a82728]:hover{background-color:bisque}.btn-prev[data-v-c4a82728]{left:10%;position:absolute}.btn-next[data-v-c4a82728]{position:absolute;right:10%}#caption[data-v-c4a82728]{font-size:1.5vw;grid-column-end:3;grid-column-start:2;grid-row-end:6;grid-row-start:5;margin:auto;text-align:center}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/videos.vue?vue&type=template&id=c4a82728&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container"
  }, [_vm._ssrNode("<div class=\"content\" data-v-c4a82728><div class=\"title-container\" data-v-c4a82728><h1 data-v-c4a82728>" + _vm._ssrEscape(" " + _vm._s(_vm.currentTitle)) + "</h1></div> <button class=\"btn-prev btn\" data-v-c4a82728>prev</button> <div class=\"video-container\" data-v-c4a82728><video controls=\"controls\" data-v-c4a82728><source" + _vm._ssrAttr("src", _vm.currentVideo) + " type=\"video/mp4\" data-v-c4a82728>\n                Your browser does not support the video tag.\n            </video></div> <span id=\"caption\" data-v-c4a82728><p data-v-c4a82728>" + _vm._ssrEscape(" " + _vm._s(_vm.currentCaption)) + "</p></span> <button class=\"btn-next btn\" data-v-c4a82728>next</button></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/videos.vue?vue&type=template&id=c4a82728&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/videos.vue?vue&type=script&lang=js&
// import '../assets/sass/style.scss'

/* harmony default export */ var videosvue_type_script_lang_js_ = ({
  name: 'VideoView',
  data() {
    return {
      videos: [{
        name: 'First Video',
        path: '../assets/dmmy-vidoe.mp4',
        caption: 'This is the first video weeeeeee',
        titleImage: '',
        style: ''
      }, {
        name: 'Second Video',
        path: '../assets/video_preview_h264.mp4',
        caption: 'Second Video RAAAAAAAAH',
        titleImage: '',
        style: ''
      }],
      currentSlideIndex: 0
    };
  },
  methods: {
    changeVideo(action) {
      if (action === 'prev') {
        this.currentSlideIndex = (this.currentSlideIndex - 1 + this.videos.length) % this.videos.length;
      } else if (action === 'next') {
        this.currentSlideIndex = (this.currentSlideIndex + 1) % this.videos.length;
      }
    }
  },
  computed: {
    currentVideo() {
      return this.videos[this.currentSlideIndex].path;
    },
    currentTitle() {
      return this.videos[this.currentSlideIndex].name;
    },
    currentCaption() {
      return this.videos[this.currentSlideIndex].caption;
    },
    currentTitleImage() {
      return this.videos[this.currentSlideIndex].titleImage;
    }
  }
});
// CONCATENATED MODULE: ./pages/videos.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_videosvue_type_script_lang_js_ = (videosvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./pages/videos.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(131)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_videosvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c4a82728",
  "072afe52"
  
)

/* harmony default export */ var videos = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=videos.js.map