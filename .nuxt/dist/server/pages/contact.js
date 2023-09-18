exports.ids = [10,2];
exports.modules = {

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ContactForm.vue?vue&type=template&id=1fdfd630&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "contact-form"
  }, [_vm._ssrNode("<form data-v-1fdfd630><div id=\"name\" class=\"text-input\" data-v-1fdfd630><label data-v-1fdfd630>Name: </label> <input type=\"text\" required=\"required\"" + _vm._ssrAttr("value", _vm.name) + " data-v-1fdfd630></div> <div class=\"btn\" data-v-1fdfd630><label style=\"font-size: 2.5rem;\" data-v-1fdfd630>Best way to contact you</label> <br data-v-1fdfd630> <input type=\"radio\" id=\"phone\" value=\"phone\"" + _vm._ssrAttr("checked", _vm._q(_vm.contactMethod, "phone")) + " data-v-1fdfd630> <label for=\"phone\" style=\"font-size: 2rem;\" data-v-1fdfd630> Phone Number</label> <br data-v-1fdfd630> <input type=\"radio\" id=\"email\" value=\"email\"" + _vm._ssrAttr("checked", _vm._q(_vm.contactMethod, "email")) + " data-v-1fdfd630> <label for=\"email\" style=\"font-size: 2rem\" data-v-1fdfd630> Email</label></div> " + (_vm.contactMethod === 'phone' ? "<div class=\"text-input\" data-v-1fdfd630><label data-v-1fdfd630>Phone: </label> <input type=\"tel\" required=\"required\"" + _vm._ssrAttr("value", _vm.phone) + " data-v-1fdfd630></div>" : "<!---->") + " " + (_vm.contactMethod === 'email' ? "<div class=\"text-input\" data-v-1fdfd630><label data-v-1fdfd630>Email: </label> <input type=\"email\" required=\"required\"" + _vm._ssrAttr("value", _vm.email) + " data-v-1fdfd630></div>" : "<!---->") + " <div class=\"text-input\" data-v-1fdfd630><label data-v-1fdfd630>what it do </label> <input type=\"text\" required=\"required\"" + _vm._ssrAttr("value", _vm.message) + " data-v-1fdfd630></div> <button id=\"submit-btn\" type=\"submit\" data-v-1fdfd630>Submit</button></form>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ContactForm.vue?vue&type=template&id=1fdfd630&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ContactForm.vue?vue&type=script&lang=js&
/* harmony default export */ var ContactFormvue_type_script_lang_js_ = ({
  name: 'ContactForm',
  data() {
    return {
      name: '',
      contactMethod: '',
      email: '',
      phone: '',
      message: ''
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch('https://gracer.vercel.app/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.name,
            message: this.message,
            email: this.email,
            phone: this.phone
          })
        });
        const data = await response.json();
        if (data.success) {
          alert('Message sent!');
        } else {
          alert('Error sending message.');
        }
      } catch (error) {
        alert('Failed to send message.');
      }
    }
  }
});
// CONCATENATED MODULE: ./components/ContactForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ContactFormvue_type_script_lang_js_ = (ContactFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/ContactForm.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(89)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ContactFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1fdfd630",
  "4f45160c"
  
)

/* harmony default export */ var ContactForm = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(129);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("ba5b9b7c", content, true, context)
};

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_fd795c62_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(106);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_fd795c62_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_fd795c62_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_fd795c62_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_fd795c62_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "h1[data-v-fd795c62]{font-size:5rem;margin-top:10vh;text-align:center}h2[data-v-fd795c62]{left:25%;position:absolute}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VGrid/_grid.sass
var _grid = __webpack_require__(15);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VGrid/grid.js
// Types

function VGrid(name) {
  /* @vue/component */
  return external_vue_default.a.extend({
    name: `v-${name}`,
    functional: true,
    props: {
      id: String,
      tag: {
        type: String,
        default: 'div'
      }
    },
    render(h, {
      props,
      data,
      children
    }) {
      data.staticClass = `${name} ${data.staticClass || ''}`.trim();
      const {
        attrs
      } = data;
      if (attrs) {
        // reset attrs to extract utility clases like pa-3
        data.attrs = {};
        const classes = Object.keys(attrs).filter(key => {
          // TODO: Remove once resolved
          // https://github.com/vuejs/vue/issues/7841
          if (key === 'slot') return false;
          const value = attrs[key]; // add back data attributes like data-test="foo" but do not
          // add them as classes

          if (key.startsWith('data-')) {
            data.attrs[key] = value;
            return false;
          }
          return value || typeof value === 'string';
        });
        if (classes.length) data.staticClass += ` ${classes.join(' ')}`;
      }
      if (props.id) {
        data.domProps = data.domProps || {};
        data.domProps.id = props.id;
      }
      return h(props.tag, data, children);
    }
  });
}
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VGrid/VFlex.js


/* harmony default export */ var VFlex = (VGrid('flex'));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VGrid/VLayout.js


/* harmony default export */ var VLayout = (VGrid('layout'));
// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact.vue?vue&type=template&id=fd795c62&scoped=true&



var contactvue_type_template_id_fd795c62_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "contact"
  }, [_vm._ssrNode("<h1 data-v-fd795c62>Want to work together?</h1> "), _c(VLayout, {
    attrs: {
      "row": ""
    }
  }, [_c(VFlex, {
    staticClass: "services",
    attrs: {
      "xs6": ""
    }
  }, [_c('h2', [_vm._v(" list of services")])]), _vm._v(" "), _c(VFlex, {
    attrs: {
      "xs6": ""
    }
  }, [_c('ContactForm')], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/contact.vue?vue&type=template&id=fd795c62&scoped=true&

// EXTERNAL MODULE: ./components/ContactForm.vue + 4 modules
var ContactForm = __webpack_require__(100);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact.vue?vue&type=script&lang=js&

/* harmony default export */ var contactvue_type_script_lang_js_ = ({
  name: 'ContactView',
  components: {
    ContactForm: ContactForm["default"]
  }
});
// CONCATENATED MODULE: ./pages/contact.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_contactvue_type_script_lang_js_ = (contactvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./pages/contact.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(128)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_contactvue_type_script_lang_js_,
  contactvue_type_template_id_fd795c62_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "fd795c62",
  "6fa71696"
  
)

/* harmony default export */ var contact = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ContactForm: __webpack_require__(100).default})


/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(90);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("5b557db4", content, true, context)
};

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactForm_vue_vue_type_style_index_0_id_1fdfd630_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactForm_vue_vue_type_style_index_0_id_1fdfd630_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactForm_vue_vue_type_style_index_0_id_1fdfd630_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactForm_vue_vue_type_style_index_0_id_1fdfd630_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactForm_vue_vue_type_style_index_0_id_1fdfd630_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".contact-form[data-v-1fdfd630]{background-color:hsla(0,0%,50%,.7);display:grid;font-size:3rem;grid-template-rows:repeat(5,1fr);height:65vh;margin:auto;overflow-y:scroll;padding:15px;width:30vw}form[data-v-1fdfd630]{float:center;padding-top:5%}input[data-v-1fdfd630]{background-color:#f0f8ff;font-size:1rem;height:3vh;padding-left:20px;position:relative;top:50%}.text-input[data-v-1fdfd630]{width:20vw}label[data-v-1fdfd630]{padding-bottom:-10%}#submit-btn[data-v-1fdfd630]{margin-left:35%;padding-top:3%;position:relative}#name[data-v-1fdfd630]{grid-row-start:1;grid-row-start:2}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=contact.js.map