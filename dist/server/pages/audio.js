exports.ids = [9];
exports.modules = {

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(127);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("1b15ded2", content, true, context)
};

/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/podcast-thumbnail.201d364.png";

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cover-to-cover.8cb3053.png";

/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Cowboy_Bebop.svg.ae7c12e.png";

/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Spencer_(film)_Logo.f99ba59.png";

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sweet_thing_temp.f50ca9e.png";

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(118);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("56fe1acc", content, true)

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(119);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(120);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(121);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(122);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(123);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"bookman-bold\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}@font-face{font-family:\"cheltenham-condensed-bold\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\")}@font-face{font-family:\"Futura-Heavy\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\")}@font-face{font-family:\"Bauer-Bodoni\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\")}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Bookman-Bold.8b00745.ttf";

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Cheltenham-Condensed-Bold.7e490a0.ttf";

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Futura-Heavy.3ea9695.ttf";

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Bauer-Bodoni-Regular.3121676.otf";

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ninaLacour.1d20d2e.png";

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/time-war-header.45c7e75.jpeg";

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_audio_vue_vue_type_style_index_0_id_700db567_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(105);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_audio_vue_vue_type_style_index_0_id_700db567_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_audio_vue_vue_type_style_index_0_id_700db567_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_audio_vue_vue_type_style_index_0_id_700db567_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_audio_vue_vue_type_style_index_0_id_700db567_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container[data-v-700db567]{display:grid;grid-template-rows:repeat(5,1fr);height:100vh}.container[data-v-700db567],.content[data-v-700db567]{width:100vw!important}.content[data-v-700db567]{display:grid;grid-row-end:6;grid-row-start:2;grid-template-columns:1% 45% 5% 40% 9%;grid-template-rows:repeat(10,1fr)}h1[data-v-700db567]{font-size:5rem;text-align:center}.photo-container img[data-v-700db567]{height:100%;margin-left:15%}#sweet-thing[data-v-700db567]{margin:auto}button[data-v-700db567]:hover{background-color:#5f9ea0}.title-text[data-v-700db567]{justify-content:center;margin-bottom:15px;-webkit-transform:skew(50deg);transform:skew(50deg)}.title-container h2[data-v-700db567]{display:flex;font-family:\"Cheltenham Condensed\";font-size:1.5rem;grid-column-end:5;grid-column-start:3;margin-left:10%;max-height:100%;text-align:center;transform:skew(50deg);-webkit-transform:skew(50deg)}.desc-container p[data-v-700db567]{font-size:1.5rem;margin-top:10%;text-align:center}.photo-container[data-v-700db567]{border-radius:2%;grid-column-end:3;grid-column-start:2;grid-row-end:7;grid-row-start:2}.podcast-buttons[data-v-700db567],.soundscape-buttons[data-v-700db567]{display:flex;flex-wrap:none;grid-column-end:3;grid-column-start:2;grid-row-end:10;grid-row-start:9;justify-content:space-between;width:100%}.title-container[data-v-700db567]{background-color:#ffebcd;grid-row-end:4;grid-row-start:2;height:65%;overflow:hidden;transform:skew(-50deg);width:80%}.desc-container[data-v-700db567],.title-container[data-v-700db567]{grid-column-end:5;grid-column-start:3}.desc-container[data-v-700db567]{grid-row-end:7;grid-row-start:4}.audio-container[data-v-700db567]{grid-column-end:5;grid-column-start:2;grid-row-end:9;grid-row-start:8}audio[data-v-700db567]{color:red;margin-left:5%;width:90%}button[data-v-700db567]{border-radius:50%;height:100%}.button-area[data-v-700db567]{align-content:space-between;display:flex;gap:20px;grid-column-end:5;grid-column-start:2;grid-row-end:10;grid-row-start:9}button[data-v-700db567]{background-color:#6495ed;border:none;color:#000;cursor:pointer;font-size:1.5rem;margin:auto;max-width:20%;min-width:10%;padding:10px 20px}audio[data-v-700db567]::-webkit-media-controls-panel{background-color:gray}audio[data-v-700db567]::-webkit-media-controls-timeline{background-color:#b1d4e0;border-radius:25px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/audio.vue?vue&type=template&id=700db567&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container"
  }, [_vm._ssrNode("<div class=\"content\" data-v-700db567><div class=\"title-container\" data-v-700db567><span class=\"title-text\" data-v-700db567><h2" + _vm._ssrStyle(null, _vm.currentData.titleStyle, null) + " data-v-700db567>" + _vm._ssrEscape(" " + _vm._s(_vm.currentData.title) + " ") + "</h2></span></div> <div class=\"desc-container\" data-v-700db567><p data-v-700db567>" + _vm._ssrEscape("\n                " + _vm._s(_vm.currentData.description) + "\n            ") + "</p></div> <div class=\"photo-container\" data-v-700db567>" + (_vm.currentData.type === 'Podcasts' ? "<img" + _vm._ssrAttr("src", __webpack_require__(112)) + " data-v-700db567>" : "<!---->") + " " + (_vm.currentData.type === 'Soundscapes' ? "<img" + _vm._ssrAttr("src", __webpack_require__(113)) + " data-v-700db567>" : "<!---->") + "</div> <div class=\"audio-container\" data-v-700db567><audio" + _vm._ssrAttr("src", _vm.currentData.path) + " type=\"audio/mpeg\" controls=\"controls\" data-v-700db567>\n                Your browser not cool enough for this audio file :(\n            </audio></div> <div class=\"button-area\" data-v-700db567>" + (_vm.currentData.type !== 'Podcasts' ? "<div class=\"soundscape-buttons\" data-v-700db567>" + (_vm.currentData.name !== 'This is How You Lose the Time War' ? "<button id=\"time-war\" data-v-700db567> Time War\n                </button>" : "<!---->") + " " + (_vm.currentData.name !== 'We Are Okay' ? "<button id=\"we-are-okay\" data-v-700db567> We Are Okay </button>" : "<!---->") + " " + (_vm.currentData.type !== 'Podcasts' ? "<button data-v-700db567>Podcasts</button>" : "<!---->") + "</div>" : "<!---->") + " " + (_vm.currentData.type !== 'Soundscapes' ? "<div class=\"podcast-buttons\" data-v-700db567>" + (_vm.currentData.name !== 'Cowboy Bebop' ? "<button id=\"cowboy-bebop\" data-v-700db567>Cowboy Bebop</button>" : "<!---->") + " " + (_vm.currentData.type !== 'Soundscapes' ? "<button data-v-700db567>Soundscapes</button>" : "<!---->") + " " + (_vm.currentData.name !== 'Sweet Thing' ? "<button id=\"sweet-thing\" data-v-700db567>Sweet Thing</button>" : "<!---->") + " " + (_vm.currentData.name !== 'Spencer' ? "<button id=\"spencer\" data-v-700db567>Spencer</button>" : "<!---->") + "</div>" : "<!---->") + "</div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/audio.vue?vue&type=template&id=700db567&scoped=true&

// EXTERNAL MODULE: ./assets/Cowboy_Bebop.svg.png
var Cowboy_Bebop_svg = __webpack_require__(114);
var Cowboy_Bebop_svg_default = /*#__PURE__*/__webpack_require__.n(Cowboy_Bebop_svg);

// CONCATENATED MODULE: ./assets/spencer-audio.mp3
/* harmony default export */ var spencer_audio = (__webpack_require__.p + "spencer-audio.mp3");
// EXTERNAL MODULE: ./assets/Spencer_(film)_Logo.png
var Spencer_film_Logo = __webpack_require__(115);
var Spencer_film_Logo_default = /*#__PURE__*/__webpack_require__.n(Spencer_film_Logo);

// EXTERNAL MODULE: ./assets/sweet_thing_temp.png
var sweet_thing_temp = __webpack_require__(116);
var sweet_thing_temp_default = /*#__PURE__*/__webpack_require__.n(sweet_thing_temp);

// EXTERNAL MODULE: ./assets/sass/style.scss
var style = __webpack_require__(117);

// CONCATENATED MODULE: ./assets/cowboy-bebop-podcast.mp3
/* harmony default export */ var cowboy_bebop_podcast = (__webpack_require__.p + "cowboy-bebop-podcast.mp3");
// CONCATENATED MODULE: ./assets/sweet-thing-audio.mp3
/* harmony default export */ var sweet_thing_audio = (__webpack_require__.p + "sweet-thing-audio.mp3");
// EXTERNAL MODULE: ./assets/ninaLacour.png
var ninaLacour = __webpack_require__(124);
var ninaLacour_default = /*#__PURE__*/__webpack_require__.n(ninaLacour);

// CONCATENATED MODULE: ./assets/nina-audio.mp3
/* harmony default export */ var nina_audio = (__webpack_require__.p + "nina-audio.mp3");
// CONCATENATED MODULE: ./assets/timewar-audio.mp3
/* harmony default export */ var timewar_audio = (__webpack_require__.p + "timewar-audio.mp3");
// EXTERNAL MODULE: ./assets/time-war-header.jpeg
var time_war_header = __webpack_require__(125);
var time_war_header_default = /*#__PURE__*/__webpack_require__.n(time_war_header);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/audio.vue?vue&type=script&lang=js&











/* harmony default export */ var audiovue_type_script_lang_js_ = ({
  name: 'AudioView',
  data() {
    return {
      currentData: {
        name: 'Cowboy Bebop',
        title: "COWBOY BEBOP FT. KAYLAN | AUG MEDIA PRODUCTION CLUB PODCAST EP.2",
        type: 'Podcasts',
        titleStyle: "font-family: 'Cheltenham Condensed'; font-size: 1.75rem;",
        description: "Grace and guest Kaylan talk about Cowboy Bebop's lasting legacy in preparation for Netflix's live action spin on the show.",
        path: cowboy_bebop_podcast,
        titleImage: Cowboy_Bebop_svg_default.a
      }
    };
  },
  methods: {
    chooseData(name) {
      if (name === 'sweet-thing') {
        this.currentData = {
          name: 'Sweet Thing',
          title: "Alexandre Rockwell's Sweet Thing | AUG Media Production Club Podcast Ep. 3",
          type: 'Podcasts',
          titleStyle: "font-family: 'Morgen'; font-size: 1.75rem",
          description: "Grace and Sarah discuss Alexandre Rockwell's most recent film, Sweet Thing, screening at the AUG Cinema Series at the Maxwell Theatre on 11/18. Mild spoilers may be discussed.",
          path: sweet_thing_audio,
          titleImage: sweet_thing_temp_default.a
        };
      } else if (name === 'cowboy-bebop') {
        this.currentData = {
          name: 'Cowboy Bebop',
          title: "COWBOY BEBOP FT. KAYLAN | AUG MEDIA PRODUCTION CLUB PODCAST EP.2",
          type: 'Podcasts',
          titleStyle: "font-family: 'Cheltenham Condensed'; font-size: 1.75rem;",
          description: "Grace and guest Kaylan talk about Cowboy Bebop's lasting legacy in preparation for Netflix's live action spin on the show.",
          path: cowboy_bebop_podcast,
          titleImage: Cowboy_Bebop_svg_default.a
        };
      } else if (name === 'spencer') {
        this.currentData = {
          name: 'Spencer',
          title: "Pablo Larrain's Spencer | AUG Media Production Club Podcast Ep. 4",
          type: 'Podcasts',
          titleStyle: "font-family: 'Aviano Flare'; font-size: 1.4rem;",
          description: "Grace and Sarah discuss Alexandre Rockwell's most recent film, Sweet Thing, screening at the AUG Cinema Series at the Maxwell Theatre on 11/18. Mild spoilers may be discussed.",
          path: spencer_audio,
          titleImage: Spencer_film_Logo_default.a
        };
      } else if (name === 'we-are-okay') {
        this.currentData = {
          name: 'We Are Okay',
          title: "Cover to Cover Ep. 1 - WE ARE OKAY by Nina LaCour",
          type: 'Soundscapes',
          titleStyle: "font-family: 'Futura'; font-size: 2rem;",
          description: "Cover to Cover is a soundscape podcast about books. This is a sample episode covering (hehe) We Are Okay by Nina LaCour.",
          path: nina_audio,
          titleImage: ninaLacour_default.a
        };
      } else if (name === 'time-war') {
        this.currentData = {
          name: 'This is How You Lose the Time War',
          title: "Cover to Cover Ep. 2 - This is How You Lose the Time War by Amal El-Mohtar and Max Gladstone",
          type: 'Soundscapes',
          titleStyle: "font-family: 'Bauer'",
          description: "Cover to Cover is a soundscape podcast about books. This is a sample episode covering (hehe) This is How You Lose the Time War by Amal El-Mohtar and Max Gladstone.",
          path: timewar_audio,
          titleImage: time_war_header_default.a
        };
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/audio.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_audiovue_type_script_lang_js_ = (audiovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./pages/audio.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(126)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_audiovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "700db567",
  "a945ba68"
  
)

/* harmony default export */ var audio = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=audio.js.map