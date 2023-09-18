exports.ids = [3];
exports.modules = {

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MyTestimonials.vue?vue&type=template&id=1e455568&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container"
  }, [_vm._ssrNode("<button class=\"btn-prev btn\" data-v-1e455568>Prev</button> <div class=\"testimonial-container\" data-v-1e455568><div class=\"testimonial-content\" data-v-1e455568><p data-v-1e455568>" + _vm._ssrEscape(" " + _vm._s(_vm.currentTestimonial) + " ") + "</p></div> <img" + _vm._ssrAttr("src", _vm.currentImage) + " alt=\"testimonial headshot\" data-v-1e455568> <div class=\"testimonial-footer\" data-v-1e455568><h1 id=\"name\" data-v-1e455568>" + _vm._ssrEscape(" " + _vm._s(_vm.currentName)) + "</h1> <p data-v-1e455568>" + _vm._ssrEscape(" " + _vm._s(_vm.currentTitle)) + "</p></div></div> <button class=\"btn-next btn\" data-v-1e455568>next</button>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MyTestimonials.vue?vue&type=template&id=1e455568&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MyTestimonials.vue?vue&type=script&lang=js&
/* harmony default export */ var MyTestimonialsvue_type_script_lang_js_ = ({
  name: 'MyTestimonials',
  data() {
    return {
      testimonials: [{
        name: 'Alfred Rolfe',
        coverPhoto: "http://placekitten.com/300/300",
        title: 'Long time coworker',
        testimonialContent: "Prance along on top of the garden fence, annoy the neighbor's dog and make it bark love fish and catching very fast laser pointer but at four in the morning wake up owner meeeeeeooww scratch at legs and beg for food then cry and yowl until they wake up at two pm jump on window and sleep while observing the bootyful cat next door that u really like but who already has a boyfriend end up making babies with her and let her move in so sit in box steal mom's crouton while she is in the bathroom. Hack up furballs play with twist ties in the middle of the night i crawl onto your chest and purr gently to help you sleep but if human is on laptop sit on the keyboard or at four in the morning wake up owner meeeeeeooww scratch at legs and beg for food then cry and yowl until they wake up at two pm jump on window and sleep while observing the bootyful cat next door that u really like but who already has a boyfriend end up making babies with her and let her move in ooooh feather moving feather!."
      }, {
        name: 'Korra Rolfe',
        coverPhoto: "http://placekitten.com/g/300/300",
        title: 'Questionable manager',
        testimonialContent: "Groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked playing with balls of wool run in circles, and the cat was chasing the mouse or lick left leg for ninety minutes, still dirty cats making all the muffins. I love cuddles cough hairball on conveniently placed pants. Slap kitten brother with paw disappear for four days and return home with an expensive injury; bite the vet when in doubt, wash hunt anything that moves. Always ensure to lay down in such a manner that tail can lightly brush human's nose chill on the couch table attempt to leap between furniture but woefully miscalibrate and bellyflop onto the floor; what's your problem? i meant to do that now i shall wash myself intently yet meow whatever, meowwww and meow all night having their mate disturbing sleeping humans. Get away from me stupid dog. Knock dish off table head butt cant eat out of my own dish floof tum, tickle bum, jellybean footies curly toes or toy mouse squeak roll over but chase little red dot someday it will be mine!, and i show my fluffy belly but it's a trap! if you pet it i will tear up your hand. Roll on the floor purring your whiskers off put toy mouse in food bowl run out of litter box at full speed lay on arms while you're using the keyboard."
      }],
      currentSlideIndex: 0
    };
  },
  methods: {
    changeCard(action) {
      if (action === 'prev') {
        this.currentSlideIndex = (this.currentSlideIndex - 1 + this.testimonials.length) % this.testimonials.length;
      } else if (action === 'next') {
        this.currentSlideIndex = (this.currentSlideIndex + 1) % this.testimonials.length;
      }
    }
  },
  computed: {
    currentName() {
      return this.testimonials[this.currentSlideIndex].name;
    },
    currentTitle() {
      return this.testimonials[this.currentSlideIndex].title;
    },
    currentImage() {
      return this.testimonials[this.currentSlideIndex].coverPhoto;
    },
    currentTestimonial() {
      return this.testimonials[this.currentSlideIndex].testimonialContent;
    }
  }
});
// CONCATENATED MODULE: ./components/MyTestimonials.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MyTestimonialsvue_type_script_lang_js_ = (MyTestimonialsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/MyTestimonials.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(94)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MyTestimonialsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1e455568",
  "3444a40c"
  
)

/* harmony default export */ var MyTestimonials = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(95);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("c9d60c1a", content, true, context)
};

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyTestimonials_vue_vue_type_style_index_0_id_1e455568_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyTestimonials_vue_vue_type_style_index_0_id_1e455568_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyTestimonials_vue_vue_type_style_index_0_id_1e455568_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyTestimonials_vue_vue_type_style_index_0_id_1e455568_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyTestimonials_vue_vue_type_style_index_0_id_1e455568_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container[data-v-1e455568]{background-color:#eeeaea;display:grid;grid-template-columns:20% 10% 10% 20% 10% 10% 20%;grid-template-rows:10% 15% 25% 25% 15% 10%;height:100vh;width:100vw}img[data-v-1e455568]{border-radius:50%;display:flex;grid-column-end:3;grid-column-start:2;grid-row-end:4;grid-row-start:3;justify-self:center;max-height:100%}.testimonial-container[data-v-1e455568]{background-color:#fff;border-radius:5%;display:grid;grid-column-end:6;grid-column-start:3;grid-row-end:6;grid-row-start:2;grid-template-columns:15% 70% 15%;grid-template-rows:10% 50% 25% 15%;max-height:100%;max-width:100%;overflow:auto}.testimonial-content[data-v-1e455568]{grid-column-end:3;grid-column-start:2;grid-row-end:3;grid-row-start:2;margin-bottom:30px;overflow-y:scroll}p[data-v-1e455568]{text-align:center}.testimonial-footer[data-v-1e455568]{grid-column-end:3;grid-column-start:2;grid-row-start:4}.btn-prev[data-v-1e455568]{grid-column-end:2;grid-column-start:1;justify-self:right}.btn-next[data-v-1e455568],.btn-prev[data-v-1e455568]{grid-row-end:4;grid-row-start:3;height:40%;margin-top:50%;width:75%}.btn-next[data-v-1e455568]{grid-column-start:7;justify-self:left}.btn[data-v-1e455568]{border-radius:3%;font-size:3vw}button[data-v-1e455568]:hover{background-color:#9370db}#name[data-v-1e455568]{text-align:center}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=my-testimonials.js.map