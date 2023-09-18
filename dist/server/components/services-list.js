exports.ids = [5];
exports.modules = {

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ServicesList.vue?vue&type=template&id=7c7a200a&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container"
  }, [_vm._ssrNode("<div class=\"title\" data-v-7c7a200a><h1 data-v-7c7a200a>" + _vm._ssrEscape(" \n        " + _vm._s(_vm.splitTitle.firstHalf) + " ") + "</h1> <br data-v-7c7a200a> <br data-v-7c7a200a> <h1 data-v-7c7a200a>" + _vm._ssrEscape("\n        " + _vm._s(_vm.splitTitle.secondHalf) + " ") + "</h1></div> <div id=\"top\" data-v-7c7a200a>" + (_vm.linesVisible ? "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\" xmnls:xlink=\"http://www.w3.org/1999/xlink\"" + _vm._ssrClass(null, {
    'animate': _vm.isAnimated
  }) + " data-v-7c7a200a><line x1=\"-40\" y1=\"100\" x2=\"170\" y2=\"0\" class=\"line\" style=\" stroke: rgb(61, 0, 61); stroke-width: 5px; fill: none;\" data-v-7c7a200a></line></svg>" : "<!---->") + "</div> <div id=\"middle\" data-v-7c7a200a>" + (_vm.linesVisible ? "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\" xmnls:xlink=\"http://www.w3.org/1999/xlink\"" + _vm._ssrClass(null, {
    'animate': _vm.isAnimated
  }) + " data-v-7c7a200a><line x1=\"-45\" y1=\"50\" x2=\"200\" y2=\"50\" class=\"line\" style=\" stroke: rgb(61, 0, 61); stroke-width: 5px; fill: none;\" data-v-7c7a200a></line></svg>" : "<!---->") + "</div> <div id=\"bottom\" data-v-7c7a200a>" + (_vm.linesVisible ? "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\" xmnls:xlink=\"http://www.w3.org/1999/xlink\"" + _vm._ssrClass(null, {
    'animate': _vm.isAnimated
  }) + " data-v-7c7a200a><line x1=\"-40\" y1=\"0\" x2=\"300\" y2=\"150\" class=\"line\" style=\" stroke: rgb(61, 0, 61); stroke-width: 5px; fill: none;\" data-v-7c7a200a></line></svg>" : "<!---->") + "</div> <div class=\"first-bullet\" data-v-7c7a200a><h2 id=\"first-title\" data-aos=\"fade-left\" data-aos-duration=\"1500\" data-aos-offset=\"500\" data-aos-delay=\"1500\" data-aos-easing=\"ease-in-cubic\" data-v-7c7a200a>" + _vm._ssrEscape(" " + _vm._s(_vm.firstBullet)) + "</h2> <ul class=\"first-detail\" data-v-7c7a200a>" + _vm._ssrList(_vm.firstDetails, function (detail, index) {
    return "<li data-aos=\"fade-down\" data-aos-easing=\"ease-in-cubic\" data-aos-duration=\"1200\" data-aos-delay=\"2000\" data-v-7c7a200a>" + _vm._ssrEscape(" " + _vm._s(detail)) + "</li>";
  }) + "</ul></div> <div class=\"second-bullet\" data-v-7c7a200a><h2 id=\"second-title\" data-aos=\"fade-left\" data-aos-duration=\"1500\" data-aos-offset=\"500\" data-aos-delay=\"1500\" data-aos-easing=\"ease-in-cubic\" data-v-7c7a200a>" + _vm._ssrEscape(" " + _vm._s(_vm.secondBullet)) + "</h2> <ul class=\"second-detail\" data-v-7c7a200a>" + _vm._ssrList(_vm.secondDetails, function (detail, index) {
    return "<li data-aos=\"fade-down\" data-aos-easing=\"ease-in-cubic\" data-aos-duration=\"1200\" data-aos-delay=\"2000\" data-v-7c7a200a>" + _vm._ssrEscape(" " + _vm._s(detail) + " ") + "</li>";
  }) + "</ul></div> <div class=\"third-bullet\" data-v-7c7a200a><h2 id=\"third-title\" data-aos=\"fade-left\" data-aos-duration=\"1500\" data-aos-delay=\"1500\" data-aos-easing=\"ease-in-cubic\" data-v-7c7a200a>" + _vm._ssrEscape(" " + _vm._s(_vm.thirdBullet)) + "</h2></div> <ul class=\"third-detail\" data-v-7c7a200a>" + _vm._ssrList(_vm.thirdDetails, function (detail, index) {
    return "<li data-aos=\"fade-down\" data-aos-duration=\"1200\" data-aos-easing=\"ease-in-cubic\" data-aos-delay=\"2000\" data-v-7c7a200a>" + _vm._ssrEscape(" " + _vm._s(detail)) + "</li>";
  }) + "</ul>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ServicesList.vue?vue&type=template&id=7c7a200a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ServicesList.vue?vue&type=script&lang=js&
/* harmony default export */ var ServicesListvue_type_script_lang_js_ = ({
  name: 'ServicesList',
  mounted() {
    const options = {
      threshold: 0
    };
    const observer = new IntersectionObserver(this.handleIntersection, options);
    observer.observe(this.$refs.linesContainer);
  },
  data() {
    return {
      // showLine: false
      isAnimated: false,
      linesVisible: false
    };
  },
  props: {
    title: {
      type: String,
      required: true
    },
    firstBullet: {
      type: String,
      required: true
    },
    secondBullet: {
      type: String,
      required: true
    },
    thirdBullet: {
      type: String,
      required: true
    },
    firstDetails: {
      type: Array
    },
    secondDetails: {
      type: Array
    },
    thirdDetails: {
      type: Array
    }
  },
  computed: {
    splitTitle() {
      const words = this.title.split(' ');
      const middleIndex = Math.floor(words.length / 2);
      const firstHalf = words.slice(0, 2).join(' ');
      const secondHalf = words.slice(2).join(' ');
      return {
        firstHalf,
        secondHalf
      };
    }
  },
  methods: {
    handleIntersection(entries) {
      if (entries[0].isIntersecting) {
        this.isAnimated = true;
        this.linesVisible = true;
      } else if (!entries[0].isIntersecting) {
        this.isAnimated = false;
        this.linesVisible = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/ServicesList.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ServicesListvue_type_script_lang_js_ = (ServicesListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/ServicesList.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(96)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ServicesListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7c7a200a",
  "29b6b716"
  
)

/* harmony default export */ var ServicesList = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(97);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("3b58f4c6", content, true, context)
};

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ServicesList_vue_vue_type_style_index_0_id_7c7a200a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ServicesList_vue_vue_type_style_index_0_id_7c7a200a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ServicesList_vue_vue_type_style_index_0_id_7c7a200a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ServicesList_vue_vue_type_style_index_0_id_7c7a200a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ServicesList_vue_vue_type_style_index_0_id_7c7a200a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container[data-v-7c7a200a]{background-color:gray;border-bottom:2px double #211f1f;display:grid;grid-template-columns:10% 30% 25% 25% 10%;grid-template-rows:repeat(5,20%);height:100vh}.title[data-v-7c7a200a]{color:#f5f5f5;grid-column-end:4;grid-column-start:1;grid-row-end:5;grid-row-start:2;margin:auto}h1[data-v-7c7a200a]{font-size:5em;margin-left:2vw}.animate[data-v-7c7a200a]{stroke-dasharray:500;stroke-dashoffset:500;animation:top-line-7c7a200a 3s linear forwards;animation-delay:.8s}h2[data-v-7c7a200a]{font-size:2.5rem;font-weight:500;text-align:center}#top[data-v-7c7a200a]{grid-row-end:3;grid-row-start:2}#middle[data-v-7c7a200a],#top[data-v-7c7a200a]{grid-column-end:4;grid-column-start:3}#middle[data-v-7c7a200a]{grid-row-end:4;grid-row-start:3}#bottom[data-v-7c7a200a]{grid-column-end:4;grid-column-start:3;grid-row-end:5;grid-row-start:4}.title[data-v-7c7a200a]{margin-left:5vw}.first-bullet[data-v-7c7a200a]{display:grid;grid-column-end:5;grid-column-start:4;grid-row-end:2;grid-row-start:1;grid-template-rows:10% 20% 10% 60%}#first-title[data-v-7c7a200a]{grid-row-start:2;margin-top:10px}.first-detail[data-v-7c7a200a]{grid-row-start:4;margin-top:20px}.second-bullet[data-v-7c7a200a]{display:grid;grid-column-end:5;grid-column-start:4;grid-row-end:4;grid-row-start:3;grid-template-rows:repeat(4,1fr)}.second-detail[data-v-7c7a200a]{margin-top:20px}.third-bullet[data-v-7c7a200a]{display:grid;grid-column-end:5;grid-column-start:4;grid-row-end:5;grid-template-rows:repeat(4,1fr)}#third-title[data-v-7c7a200a],.third-bullet[data-v-7c7a200a]{grid-row-start:4}#second-title[data-v-7c7a200a]{margin-left:10px}.third-detail[data-v-7c7a200a]{grid-column-end:5;grid-column-start:4;grid-row-start:5;margin-top:20px}@keyframes top-line-7c7a200a{to{stroke-dashoffset:0}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=services-list.js.map