function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/add-new-papers/add-new-papers.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/add-new-papers/add-new-papers.component.ts ***!
    \************************************************************/

  /*! exports provided: AddNewPapersComponent */

  /***/
  function srcAppAddNewPapersAddNewPapersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddNewPapersComponent", function () {
      return AddNewPapersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/keycodes.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/button.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/radio.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/divider.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/core.js");

    function AddNewPapersComponent_option_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var topic_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", topic_r3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](topic_r3);
      }
    }

    function AddNewPapersComponent_div_44_mat_option_46_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var technique_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", technique_r8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](technique_r8);
      }
    }

    function AddNewPapersComponent_div_44_mat_option_54_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var technique_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", technique_r9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](technique_r9);
      }
    }

    function AddNewPapersComponent_div_44_mat_option_70_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var technique_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", technique_r10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](technique_r10);
      }
    }

    function AddNewPapersComponent_div_44_mat_option_78_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var technique_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", technique_r11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](technique_r11);
      }
    }

    function AddNewPapersComponent_div_44_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Explainability Questionnaire ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Local vs. Global");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Explanation: A local explanation provides information or jus-tification for the model\u2019s prediction on a specificsingle input, while a global provides that justification by revealing how the model\u2019s predictive process works, independently of any particular input.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-radio-group", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-radio-button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Local Explanation");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-radio-button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Global Explanation");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-radio-button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Both");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Self-explaining vs. Post-hoc processing");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Explanation: Self-explaining means the explanation is generated as part of the prediction, whereas\\ post-hoc processing means the explanation is generated as a separate step after the prediction is made.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-radio-group", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-radio-button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Self-explaining");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-radio-button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Post-hoc processing");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Explainability Techniques");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Explanation: Techniques that used to generate the raw mathematical justifications of explanation. Note that it is different from visualization techniques.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "table", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "All Explainability techniques that apply:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-select", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function AddNewPapersComponent_div_44_Template_mat_select_valueChange_45_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.selected_exp = $event;
        })("selectionChange", function AddNewPapersComponent_div_44_Template_mat_select_selectionChange_45_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.update_exp($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, AddNewPapersComponent_div_44_mat_option_46_Template, 2, 2, "mat-option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " \xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Main Explainability (only one):");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-select", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function AddNewPapersComponent_div_44_Template_mat_select_valueChange_53_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.main_exp = $event;
        })("selectionChange", function AddNewPapersComponent_div_44_Template_mat_select_selectionChange_53_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.update_main_exp($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, AddNewPapersComponent_div_44_mat_option_54_Template, 2, 2, "mat-option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Visualization Techniques");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Explanation: Techniques that used to visually present the raw mathematical justifications of explanation generated by specific explainability technique.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "table", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "All Visualization techniques that apply:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-select", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function AddNewPapersComponent_div_44_Template_mat_select_valueChange_69_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.selected_viz = $event;
        })("selectionChange", function AddNewPapersComponent_div_44_Template_mat_select_selectionChange_69_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.update_viz($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, AddNewPapersComponent_div_44_mat_option_70_Template, 2, 2, "mat-option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " \xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Main Visualization (only one):");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-select", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function AddNewPapersComponent_div_44_Template_mat_select_valueChange_77_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.main_exp = $event;
        })("selectionChange", function AddNewPapersComponent_div_44_Template_mat_select_selectionChange_77_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.update_main_viz($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, AddNewPapersComponent_div_44_mat_option_78_Template, 2, 2, "mat-option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.selected_exp)("formControl", ctx_r1.expControl);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.exp_techniques);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.main_exp)("formControl", ctx_r1.main_expControl);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.exp_techniques);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.selected_viz)("formControl", ctx_r1.vizControl);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.viz_techniques);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.main_exp)("formControl", ctx_r1.main_vizControl);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.viz_techniques);
      }
    }

    function AddNewPapersComponent_div_45_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Contact Info ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Your Name:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Email:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AddNewPapersComponent = /*#__PURE__*/function () {
      function AddNewPapersComponent(_formBuilder, _snackBar) {
        _classCallCheck(this, AddNewPapersComponent);

        this._formBuilder = _formBuilder;
        this._snackBar = _snackBar;
        this.nlp_topics = ["Cognitive Modeling and Psycholinguistics", "Computational Social Science and Social Media", "Dialogue and Interactive Systems", "Discourse and Pragmatics", "Ethics and NLP", "Generation", "Information Extraction", "Information Retrieval and Text Mining", "Interpretability and Analysis of Models for NLP", "Language Grounding to Vision, Robotics and Beyond", "Theory and Formalism in NLP (Linguistic and Mathematical)", "Machine Learning for NLP", "Machine Translation", "NLP Applications", "Phonology, Morphology and Word Segmentation", "Question Answering", "Resources and Evaluation", "Semantics: Lexical", "Semantics: Sentence Level", "Semantics: Textual Inference and Other Areas of Semantics", "Sentiment Analysis, Stylistic Analysis, and Argument Mining", "Speech and Multimodality", "Summarization", "Syntax: Tagging, Chunking and Parsing", "Theme"];
        this.selected_exp = [];
        this.main_exp = "";
        this.selected_viz = [];
        this.main_viz = "";
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["COMMA"]];
        this.isEditable = false;
        this.expControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.main_expControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.vizControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.main_vizControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.exp_techniques = ['Feature Importance', "Rule Induction", "Surrogate Models", "Program Induction", "Tree Induction", "Provenance", "others"];
        this.viz_techniques = ['Saliency', "Natural Language", "Raw Rules", "Raw Trees", "Raw Programs", "Raw Examples", "others"];
      }

      _createClass(AddNewPapersComponent, [{
        key: "openSnackBar",
        value: function openSnackBar(message, action) {
          this._snackBar.open(message, action, {
            duration: 2000,
            horizontalPosition: "center",
            verticalPosition: "top"
          });
        }
      }, {
        key: "update_exp",
        value: function update_exp(selected) {
          console.log(this.selected_exp);
          this.selected_exp = selected;
        }
      }, {
        key: "update_main_exp",
        value: function update_main_exp(selected) {
          this.main_exp = selected;
        }
      }, {
        key: "update_viz",
        value: function update_viz(selected) {
          this.selected_viz = selected;
        }
      }, {
        key: "update_main_viz",
        value: function update_main_viz(selected) {
          this.main_viz = selected;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }]);

      return AddNewPapersComponent;
    }();

    AddNewPapersComponent.ɵfac = function AddNewPapersComponent_Factory(t) {
      return new (t || AddNewPapersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]));
    };

    AddNewPapersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddNewPapersComponent,
      selectors: [["app-add-new-papers"]],
      decls: 50,
      vars: 3,
      consts: [[1, "w3-margin-top", "w3-round", "w3-content", "w3-padding", 2, "background-color", "#f5f5f5", "width", "90%"], [1, "w3-margin-top", "w3-margin-bottom", "w3-padding"], [1, "w3-margin-top", "w3-medium"], [1, "w3-small"], [1, "w3-margin-top"], ["type", "text", 1, "w3-input"], ["width", "100%"], ["width", "50%"], ["name", "option", 1, "w3-select"], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "w3-margin-top", 4, "ngIf"], [1, "w3-content", "w3-center", "example-button-row", "w3-margin", "w3-padding"], ["mat-raised-button", "", "color", "primary", 1, "w3-margin-right", 3, "click"], [3, "value"], [1, "w3-margin-top", "w3-card-2", "w3-round", "w3-white"], [1, "w3-blue-grey", "w3-padding", "w3-medium", 2, "border-top-left-radius", "4px", "border-top-right-radius", "4px"], [1, "w3-margin-top", "w3-padding"], [1, "w3-medium"], [1, "w3-text-indigo", "w3-small"], ["aria-label", "Select an option"], ["value", "local"], ["value", "global", 1, "w3-margin-left"], ["value", "both", 1, "w3-margin-left"], ["width", "50%", 1, "w3-padding", "w3-light-grey"], [1, "w3-margin-right"], ["multiple", "", 3, "value", "formControl", "valueChange", "selectionChange"], [1, "w3-padding", "w3-light-grey"], [3, "value", "formControl", "valueChange", "selectionChange"]],
      template: function AddNewPapersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "To add a new paper to the repository, please fill in the following form:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Authors (separate author names with comma):");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Url to paper:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Publication Year:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Publication Venue:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "NLP Topic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "select", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Choose your topic (from ACL call for papers)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AddNewPapersComponent_option_35_Template, 2, 2, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Specific NLP task (Your own description of the topic of the paper, optional)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, AddNewPapersComponent_div_44_Template, 81, 12, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, AddNewPapersComponent_div_45_Template, 18, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddNewPapersComponent_Template_button_click_47_listener() {
            return ctx.openSnackBar("Request submitted for review", "OK");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Submit for Review");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.nlp_topics);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", true);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioButton"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDivider"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1uZXctcGFwZXJzL2FkZC1uZXctcGFwZXJzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddNewPapersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-new-papers',
          templateUrl: './add-new-papers.component.html',
          styleUrls: ['./add-new-papers.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _definitions_definitions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./definitions/definitions.component */
    "./src/app/definitions/definitions.component.ts");
    /* harmony import */


    var _tree_tree_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./tree/tree.component */
    "./src/app/tree/tree.component.ts");
    /* harmony import */


    var _add_new_papers_add_new_papers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-new-papers/add-new-papers.component */
    "./src/app/add-new-papers/add-new-papers.component.ts");

    var routes = [{
      path: 'definitions',
      component: _definitions_definitions_component__WEBPACK_IMPORTED_MODULE_3__["DefinitionsComponent"]
    }, {
      path: 'tree',
      component: _tree_tree_component__WEBPACK_IMPORTED_MODULE_4__["TreeComponent"]
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'newpapers',
      component: _add_new_papers_add_new_papers_component__WEBPACK_IMPORTED_MODULE_5__["AddNewPapersComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'xai-web';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 13,
      vars: 0,
      consts: [["color", "primary", 1, "fixed-header"], ["mat-button", "", "routerLink", "/home", "routerLinkActive", "active", 1, "w3-hover-white"], ["mat-button", "", "routerLink", "/definitions", 1, "w3-hover-white"], ["mat-button", "", "routerLink", "/tree", 1, "w3-hover-white"], ["mat-button", "", "routerLink", "/newpapers", 1, "w3-hover-white"], [1, "main"], [2, "margin-top", "80px"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "XAI-NLP Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Definitions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "XAI Publications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Add New Papers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "main", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "router-outlet", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: [".main[_ngcontent-%COMP%]{\n  font-size           : 14.0px;\n  font-family         : \"Helvetica-Light\", Helvetica, Arial, serif;\n  overflow: auto;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBNEI7RUFDNUIsZ0VBQWdFO0VBQ2hFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztBQUNYIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbntcbiAgZm9udC1zaXplICAgICAgICAgICA6IDE0LjBweDtcbiAgZm9udC1mYW1pbHkgICAgICAgICA6IFwiSGVsdmV0aWNhLUxpZ2h0XCIsIEhlbHZldGljYSwgQXJpYWwsIHNlcmlmO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDY0cHg7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _definitions_definitions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./definitions/definitions.component */
    "./src/app/definitions/definitions.component.ts");
    /* harmony import */


    var _tree_tree_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tree/tree.component */
    "./src/app/tree/tree.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/button.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/card.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");
    /* harmony import */


    var _paper_dialog_paper_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./paper-dialog/paper-dialog.component */
    "./src/app/paper-dialog/paper-dialog.component.ts");
    /* harmony import */


    var _definition_dialog_definition_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./definition-dialog/definition-dialog.component */
    "./src/app/definition-dialog/definition-dialog.component.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/table.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/sort.js");
    /* harmony import */


    var _add_new_papers_add_new_papers_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./add-new-papers/add-new-papers.component */
    "./src/app/add-new-papers/add-new-papers.component.ts");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/stepper.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/form-field.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/divider.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/select.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/chips.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/icon.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/snack-bar.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__["MatDividerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _definitions_definitions_component__WEBPACK_IMPORTED_MODULE_5__["DefinitionsComponent"], _tree_tree_component__WEBPACK_IMPORTED_MODULE_6__["TreeComponent"], _paper_dialog_paper_dialog_component__WEBPACK_IMPORTED_MODULE_13__["PaperDialogComponent"], _definition_dialog_definition_dialog_component__WEBPACK_IMPORTED_MODULE_14__["DefinitionDialogComponent"], _add_new_papers_add_new_papers_component__WEBPACK_IMPORTED_MODULE_17__["AddNewPapersComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__["MatDividerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _definitions_definitions_component__WEBPACK_IMPORTED_MODULE_5__["DefinitionsComponent"], _tree_tree_component__WEBPACK_IMPORTED_MODULE_6__["TreeComponent"], _paper_dialog_paper_dialog_component__WEBPACK_IMPORTED_MODULE_13__["PaperDialogComponent"], _definition_dialog_definition_dialog_component__WEBPACK_IMPORTED_MODULE_14__["DefinitionDialogComponent"], _add_new_papers_add_new_papers_component__WEBPACK_IMPORTED_MODULE_17__["AddNewPapersComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__["MatDividerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"]],
          entryComponents: [_paper_dialog_paper_dialog_component__WEBPACK_IMPORTED_MODULE_13__["PaperDialogComponent"], _definition_dialog_definition_dialog_component__WEBPACK_IMPORTED_MODULE_14__["DefinitionDialogComponent"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/definition-dialog/definition-dialog.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/definition-dialog/definition-dialog.component.ts ***!
    \******************************************************************/

  /*! exports provided: DefinitionDialogComponent */

  /***/
  function srcAppDefinitionDialogDefinitionDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefinitionDialogComponent", function () {
      return DefinitionDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DefinitionDialogComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "definition of example-driven methods");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var DefinitionDialogComponent = /*#__PURE__*/function () {
      function DefinitionDialogComponent(data) {
        _classCallCheck(this, DefinitionDialogComponent);

        this.data = data;
      }

      _createClass(DefinitionDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DefinitionDialogComponent;
    }();

    DefinitionDialogComponent.ɵfac = function DefinitionDialogComponent_Factory(t) {
      return new (t || DefinitionDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    DefinitionDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DefinitionDialogComponent,
      selectors: [["definition-view-dialog"]],
      decls: 7,
      vars: 2,
      consts: [[1, "w3-padding"], ["mat-dialog-title", ""], [1, "w3-text-indigo"], [4, "ngIf"]],
      template: function DefinitionDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Definition ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DefinitionDialogComponent_div_6_Template, 2, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.name == "example-driven");
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefinitionDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'definition-view-dialog',
          templateUrl: './definition-dialog.component.html'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/definitions/definitions.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/definitions/definitions.component.ts ***!
    \******************************************************/

  /*! exports provided: DefinitionsComponent */

  /***/
  function srcAppDefinitionsDefinitionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefinitionsComponent", function () {
      return DefinitionsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/card.js");

    var DefinitionsComponent = /*#__PURE__*/function () {
      function DefinitionsComponent() {
        _classCallCheck(this, DefinitionsComponent);
      }

      _createClass(DefinitionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DefinitionsComponent;
    }();

    DefinitionsComponent.ɵfac = function DefinitionsComponent_Factory(t) {
      return new (t || DefinitionsComponent)();
    };

    DefinitionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DefinitionsComponent,
      selectors: [["app-definitions"]],
      decls: 157,
      vars: 0,
      consts: [[1, "w3-light-grey"], [1, "w3-content", "w3-padding", "w3-light-grey", "def-container"], [1, "w3-margin", "def-section"], [1, "w3-content", "w3-center", "w3-white", "w3-margin-top", "w3-margin-bottom", "def-card"], ["src", "assets/img/taxonomy.svg"], ["fxLayout", "row wrap", 1, "w3-padding"], [1, "def-card"], [1, "title"], [1, "text"], [1, "w3-padding"], ["fxLayout", "column", 2, "display", "flex"], ["width", "280px", "src", "assets/img/saliency-heatmap-word-alignment.png", 2, "margin-right", "50px", "margin-left", "8px"], [1, "cite"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://arxiv.org/pdf/1409.0473.pdf"], [2, "display", "flex", "align-items", "center"], ["width", "320px", "src", "assets/img/saliency-highlighting.png", 2, "margin", "8px"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://www.aclweb.org/anthology/N18-1100/"], ["width", "320px", "src", "assets/img/raw-declarative-rules.png", 2, "margin", "8px"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://arxiv.org/pdf/1905.00563"], ["width", "320px", "src", "assets/img/raw-declarative-program.png", 2, "margin", "8px"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://doi.org/10.18653/v1/N19-1245"], [2, "display", "flex", "align-items", "top"], ["width", "320px", "src", "assets/img/natural-language-QUINT.png", 2, "margin", "8px"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://www.aclweb.org/anthology/D17-2011"], ["width", "320px", "src", "assets/img/raw-examples.png", 2, "margin", "8px"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://doi.org/10.18653/v1/D19-1415"]],
      template: function DefinitionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Taxonomy ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Explainability Techniques ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-header", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Feature Importance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Prediction explanations are derived from the importance scores of different features used in the NLP model to output the final prediction. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card-header", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Surrogate Model");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Explains model predictions by learning a second model, which is usually more explainable than the original model, as a proxy. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-card-header", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Example-Driven");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " A particular prediction of an input instance is explained by identifying and presenting other instances, usually from available labeled data, that are semantically similar to the input instance. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-card-header", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Provenance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " The explanation is an illustration of the entire prediction derivation process, which is an intuitive and effective explainability technique when the final prediction consists of a series of reasoning steps. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-card-header", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Induction");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Explanations are generated by inducing human-readable representations, such as rules, trees and programs. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Visualization Techniques ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-card-header", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Saliency - Heatmap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-card-content", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " (Bahdanau et al.,2015)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Saliency has been primarily used to visualize the importance scores of different types of elements in XAI learning systems, such as showing input-output word alignment. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-card-header", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Saliency - Highlighting");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-card-content", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " (Mullenbach et al., 2018)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Saliency has been primarily used to visualize the importance scores of different types of elements in XAI learning systems, such as highlighting words in input text. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-card-header", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Raw Declarative Representation - Rules");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-card-content", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " (Pezeshkpour et al., 2019)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " This visualization technique directly presents the learned declarative representations, such as logic rules. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "mat-card-header", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Raw Declarative Representation - Programs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "mat-card-content", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " (Amini et al., 2019)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " This visualization technique directly presents the learned declarative representations, such as programs. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "mat-card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "mat-card-header", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Natural Language");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "mat-card-content", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " (Abujabal et al., 2017)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " The explanation is verbalized in human-comprehensible natural language, which can be generated, for example, by using simple template-based approaches. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "mat-card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "mat-card-header", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Raw Examples");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "mat-card-content", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " (Croce et al., 2019)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " This visualization technique presents raw examples, usually from the training data, to motivate the explanation. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " Evaluation Metrics ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "mat-card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "mat-card-header", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Informal Examination");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " A presentation of no more than a few generated explanations, usually accompanied by a high-level discussion on how they align with human intuition. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "mat-card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "mat-card-header", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Comparison to Ground Truth");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " Compare generated explanations to ground truth data in an effort to quantify the performance of explainability techniques. Employed metrics vary based on task and explainability technique. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "mat-card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "mat-card-header", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Human Evaluation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " Humans directly evaluate the effectiveness of the generated explanations via one or more user studies. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"]],
      styles: [".def-container[_ngcontent-%COMP%]{\n  width: 90%;\n  min-width: 730px;\n}\n\n.def-section[_ngcontent-%COMP%]{\n  background-color: rgba(230, 230, 230, 1.0);\n  box-shadow: none !important;\n}\n\n.title[_ngcontent-%COMP%]{\n  display: flex;\n  justify-content: left;\n  align-items: left;\n  color: black;\n  margin-left: -10px;\n}\n\n.def-card[_ngcontent-%COMP%]{\n  \n  \n  padding: 6px;\n  margin: 6px;\n  margin: 1rem;\n  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n}\n\n.def-card[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{\n  margin-left: 6px;\n  margin-right: 6px;\n  font-size               : 16px;\n  color               : rgba(109, 114, 120, 1.0);\n}\n\n.def-card[_ngcontent-%COMP%]   .cite[_ngcontent-%COMP%]{\n  font-size               : 14px;\n  font-style: italic;\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVmaW5pdGlvbnMvZGVmaW5pdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0VBQWtFO0FBQ3BFOztBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQiw4QkFBOEI7RUFDOUIsOENBQThDO0FBQ2hEOztBQUdBO0VBQ0UsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvZGVmaW5pdGlvbnMvZGVmaW5pdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZWYtY29udGFpbmVye1xuICB3aWR0aDogOTAlO1xuICBtaW4td2lkdGg6IDczMHB4O1xufVxuXG4uZGVmLXNlY3Rpb257XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMwLCAyMzAsIDIzMCwgMS4wKTtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4udGl0bGV7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgYWxpZ24taXRlbXM6IGxlZnQ7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuXG4uZGVmLWNhcmR7XG4gIC8qIHdpZHRoOiAyNTBweDsgKi9cbiAgLyogaGVpZ2h0OiA0MDBweDsgKi9cbiAgcGFkZGluZzogNnB4O1xuICBtYXJnaW46IDZweDtcbiAgbWFyZ2luOiAxcmVtO1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yMyk7XG59XG5cblxuLmRlZi1jYXJkIC50ZXh0e1xuICBtYXJnaW4tbGVmdDogNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgZm9udC1zaXplICAgICAgICAgICAgICAgOiAxNnB4O1xuICBjb2xvciAgICAgICAgICAgICAgIDogcmdiYSgxMDksIDExNCwgMTIwLCAxLjApO1xufVxuXG5cbi5kZWYtY2FyZCAuY2l0ZXtcbiAgZm9udC1zaXplICAgICAgICAgICAgICAgOiAxNHB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefinitionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-definitions',
          templateUrl: './definitions.component.html',
          styleUrls: ['./definitions.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 116,
      vars: 0,
      consts: [[1, "w3-margin-top", "w3-round", "w3-content", "w3-padding", 2, "width", "90%"], [1, "w3-margin-top", "w3-large"], [1, "w3-margin-top", "w3-sand", "w3-padding-16"], [1, "w3-padding"], [1, "w3-border", "w3-margin-top"], [1, "w3-padding-small", "w3-dark-grey", "w3-text-white"], ["routerLink", "/definitions"], ["routerLink", "/tree"], [1, "w3-row"], [1, "w3-col", "s6", "w3-center"], [1, "w3-margin", "w3-content", "w3-border", "w3-small"], [1, "w3-content", "w3-center", "table", "table-striped"], ["colspan", "3", "scope", "col", 1, "w3-grey"], [1, "w3-margin", "w3-border", "w3-content", "w3-small"], ["href", "mailto:xainlp2020@gmail.com"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome, this is a companion website of the following survey paper that is currently under review");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\"A Survey of the State of Explainable AI for Natural Language Processing.\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Anonymous authors from anonymous affliations.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "venue ??. Pages ??-??");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Structure of the website");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Core concepts are introduced in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Definitions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " and XAI papers are listed ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "XAI Publications.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Literature Review");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Goal:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " This survey aims to demonstrate the recent advances of XAI research in NLP, rather than to provide an exhaustive list of XAI papers in the NLP community. To this end, we identified relevant papers published in major NLP conferences (ACL, NAACL, EMNLP, and COLING) between 2013 and 2019 (papers after 2019 are also in our pipeline). ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Search criteria for XAI papers for NLP:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " We filtered for titles containing (lemma-tized) terms related to XAI, such as \u201Cexplainability\u201D, \u201Cinterpretability\u201D, \u201Ctransparent\u201D, etc. While this may ignore some related papers, we argue that representative papers are more likely to include such terms in their titles. In particular, we assume that if authors consider explainability to be a majorcomponent of their work, they are more likely touse related keywords in the title of their work.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Our search criteria yielded a set of 107 papers. During the paper review process we first verified whether each paper truly fell within the scope of the survey. This process excluded 56 papers, leaving us with a total of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "51");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " papers (by the end of 2019). The following tables reveals the top 3 NLP topics that these papers study and top 3 conference venues that they were published.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "table", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Top 3 NLP Topics");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Question Answering");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Computational Social Science & Social Media");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Syntax: Tagging, Chunking & Parsing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "9 papers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "6 papers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "6 papers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "table", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Top 3 Conferences");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "EMNLP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "ACL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "NAACL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "22 papers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "11 papers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "9 papers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Reviewing methodology:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " Each paper was then classified across four major aspects: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "explainability");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "operations to enable explainability");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "visualization");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, ", and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "evaluation metrics");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, ". To ensure a consistent classification, each paper was individually reviewed by at least two reviewers, consulting additional reviewers in the case of disagreement. For simplicity of presentation, we labe leach paper with its main applicable category for each aspect. However, some papers may span multiple categories within an aspect, though usually with varying degrees of emphasis. We include all relevant categories for every paper in website, with the goal of enablingthe readers of this survey to discover interesting explainability techniques and ideas, even if they have not been fully developed in the respective publications. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "As we mentioned in our literature review, our goal is not to provide an exhaustive list of XAI papers in the NLP community, and our search criteria may ignore certain XAI papers in NLP.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " If you know papers that we missed but should be included in the survey and this website, please contact us at ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "xainlp2020@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/paper-dialog/paper-dialog.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/paper-dialog/paper-dialog.component.ts ***!
    \********************************************************/

  /*! exports provided: PaperDialogComponent */

  /***/
  function srcAppPaperDialogPaperDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaperDialogComponent", function () {
      return PaperDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");

    var PaperDialogComponent = function PaperDialogComponent(data) {
      _classCallCheck(this, PaperDialogComponent);

      this.data = data;
    };

    PaperDialogComponent.ɵfac = function PaperDialogComponent_Factory(t) {
      return new (t || PaperDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    PaperDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PaperDialogComponent,
      selectors: [["paper-view-dialog"]],
      decls: 82,
      vars: 12,
      consts: [["mat-dialog-title", ""], ["mat-dialog-content", "", 1, "w3-small", "w3-margin-top"], [1, "w3-margin-top", "w3-margin-bottom"], [1, "w3-margin-left"], ["target", "_blank", 1, "w3-margin-left", 3, "href"], [2, "min-width", "100px"], [1, "w3-text-red", 2, "min-width", "100px"]],
      template: function PaperDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Paper Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Explanation Type:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Title:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Paper link:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Authors:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Year:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Venue:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "tr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Type of paper:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "tr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Citations:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "tr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Main NLP task:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "tr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Operations:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "tr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Evaluation Metrics:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.xai_type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.data.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.link);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.authors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.year);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.venue);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.citation);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.nlp_task_1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.operations);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.evaluation_metrics);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaperDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'paper-view-dialog',
          templateUrl: 'paper-dialog.component.html'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/tree/tree.component.ts":
  /*!****************************************!*\
    !*** ./src/app/tree/tree.component.ts ***!
    \****************************************/

  /*! exports provided: TreeComponent */

  /***/
  function srcAppTreeTreeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TreeComponent", function () {
      return TreeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _assets_data_xaipapers_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../assets/data/xaipapers.json */
    "./src/assets/data/xaipapers.json");

    var _assets_data_xaipapers_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../../assets/data/xaipapers.json */
    "./src/assets/data/xaipapers.json", 1);
    /* harmony import */


    var _paper_dialog_paper_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../paper-dialog/paper-dialog.component */
    "./src/app/paper-dialog/paper-dialog.component.ts");
    /* harmony import */


    var _definition_dialog_definition_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../definition-dialog/definition-dialog.component */
    "./src/app/definition-dialog/definition-dialog.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/sort.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TreeComponent_ng_template_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Local Post-Hoc");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TreeComponent_ng_template_12_tr_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeComponent_ng_template_12_tr_19_Template_td_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var paper_r9 = ctx.$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r11.viewPaper(paper_r9, "Local Post-explaining");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeComponent_ng_template_12_tr_19_Template_td_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var paper_r9 = ctx.$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r13.viewDefinition(paper_r9.main_explainability);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "view");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeComponent_ng_template_12_tr_19_Template_td_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var paper_r9 = ctx.$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r14.viewPaper(paper_r9, "Local post-hoc");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Details");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var paper_r9 = ctx.$implicit;

        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](paper_r9.year);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 9, paper_r9.title));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("ngbPopover", ctx_r8.getPlainDefinition("explainability", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 11, paper_r9.main_explainability)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("popoverTitle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 13, paper_r9.main_explainability));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 15, paper_r9.main_explainability));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 17, paper_r9.main_visualization), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](paper_r9.citation);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 19, paper_r9.venue));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", paper_r9.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function TreeComponent_ng_template_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matSortChange", function TreeComponent_ng_template_12_Template_table_matSortChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.sortData_local_posthoc($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Year");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Main Explainability");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Main Visualization");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Quotes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Venue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Link");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Details");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TreeComponent_ng_template_12_tr_19_Template, 26, 21, "tr", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.local_posthoc_sorted);
      }
    }

    function TreeComponent_ng_template_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Local Self-Explaining");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TreeComponent_ng_template_15_tr_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeComponent_ng_template_15_tr_20_Template_td_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var paper_r18 = ctx.$implicit;

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r20.viewPaper(paper_r18, "Local Post-explaining");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeComponent_ng_template_15_tr_20_Template_td_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var paper_r18 = ctx.$implicit;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r22.viewDefinition(paper_r18.main_explainability);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "view");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeComponent_ng_template_15_tr_20_Template_td_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var paper_r18 = ctx.$implicit;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r23.viewPaper(paper_r18, "Local post-hoc");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Details");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var paper_r18 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](paper_r18.year);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 7, paper_r18.title));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 9, paper_r18.main_explainability));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 11, paper_r18.main_visualization));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](paper_r18.citation);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 13, paper_r18.venue));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", paper_r18.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function TreeComponent_ng_template_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matSortChange", function TreeComponent_ng_template_15_Template_table_matSortChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.sortData_local_self($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Year");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Main Explainability");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Main Visualization");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Quotes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Venue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Link");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Details");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TreeComponent_ng_template_15_tr_20_Template, 23, 15, "tr", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.local_self_sorted);
      }
    }

    function TreeComponent_ng_template_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Global Post-Hoc");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TreeComponent_ng_template_18_tr_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeComponent_ng_template_18_tr_20_Template_td_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var paper_r27 = ctx.$implicit;

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r29.viewPaper(paper_r27, "Local Post-explaining");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeComponent_ng_template_18_tr_20_Template_td_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var paper_r27 = ctx.$implicit;

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r31.viewDefinition(paper_r27.main_explainability);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "view");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeComponent_ng_template_18_tr_20_Template_td_click_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var paper_r27 = ctx.$implicit;

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r32.viewPaper(paper_r27, "Local post-hoc");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Details");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var paper_r27 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](paper_r27.year);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 9, paper_r27.title)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 11, paper_r27.main_explainability));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 13, paper_r27.main_visualization));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](paper_r27.citation);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 15, paper_r27.venue));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", paper_r27.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function TreeComponent_ng_template_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matSortChange", function TreeComponent_ng_template_18_Template_table_matSortChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r33.sortData_global_posthoc($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Year");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Main Explainability");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Main Visualization");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Quotes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Venue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Link");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Details");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TreeComponent_ng_template_18_tr_20_Template, 24, 17, "tr", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.global_posthoc_sorted);
      }
    }

    function TreeComponent_ng_template_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Global Self-Explaining");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TreeComponent_ng_template_21_tr_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeComponent_ng_template_21_tr_20_Template_td_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

          var paper_r36 = ctx.$implicit;

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r38.viewPaper(paper_r36, "Local Post-explaining");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeComponent_ng_template_21_tr_20_Template_td_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

          var paper_r36 = ctx.$implicit;

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r40.viewDefinition(paper_r36.main_explainability);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "view");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeComponent_ng_template_21_tr_20_Template_td_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

          var paper_r36 = ctx.$implicit;

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r41.viewPaper(paper_r36, "Local post-hoc");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Details");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var paper_r36 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](paper_r36.year);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 7, paper_r36.title));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 9, paper_r36.main_explainability));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 11, paper_r36.main_visualization));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](paper_r36.citation);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 13, paper_r36.venue));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", paper_r36.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function TreeComponent_ng_template_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matSortChange", function TreeComponent_ng_template_21_Template_table_matSortChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r42.sortData_global_self($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Year");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Main Explainability");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Main Visualization");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Quotes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Venue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Link");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Details");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TreeComponent_ng_template_21_tr_20_Template, 23, 15, "tr", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.global_self_sorted);
      }
    }

    var TreeComponent = /*#__PURE__*/function () {
      function TreeComponent(dialog) {
        var _this = this;

        _classCallCheck(this, TreeComponent);

        this.dialog = dialog;
        this.papers = _assets_data_xaipapers_json__WEBPACK_IMPORTED_MODULE_1__;
        this.local_posthoc = [];
        this.local_self = [];
        this.global_posthoc = [];
        this.global_self = [];
        this.explainability_def = {
          "Feature Importance": 'Prediction explanations are derived from the \
                          importance scores of different features used in the NLP model to output the final prediction.',
          "Surrogate Model": "Explains model predictions by learning a second model, which is usually more \
                          explainable than the original model, as a proxy.",
          "Example-driven": 'A particular prediction of an input instance is explained by identifying and presenting \
                      other instances, usually from available labeled data, that are semantically similar to the input instance.',
          "Provenance": 'The explanation is an illustration of the entire prediction derivation process, which is an intuitive \
                  and effective explainability technique when the final prediction consists of a series of reasoning steps. ',
          "Induction": 'Explanations are generated by inducing human-readable representations, such as rules, trees and programs.'
        };
        this.visualization_def = {
          "Saliency": "Saliency has been primarily used to visualize the importance scores of different types of elements in XAI learning systems."
        };

        this._transformer = function (level) {// return {
          //   expandable: !!node.children && node.children.length > 0,
          //   name: node.name,
          //   level: level,
          //   image: node.image,
          //   text: node.text
          // };
        }; // this.dataSource.data = TREE_DATA;


        console.log(_assets_data_xaipapers_json__WEBPACK_IMPORTED_MODULE_1__);
        var local_posthoc_tmp = _assets_data_xaipapers_json__WEBPACK_IMPORTED_MODULE_1__['local-post-hoc'];
        var local_self_tmp = _assets_data_xaipapers_json__WEBPACK_IMPORTED_MODULE_1__['local-self'];
        var global_posthoc_tmp = _assets_data_xaipapers_json__WEBPACK_IMPORTED_MODULE_1__['global-post-hoc'];
        var global_self_tmp = _assets_data_xaipapers_json__WEBPACK_IMPORTED_MODULE_1__['global-self'];
        this.massage_data(this.local_posthoc, local_posthoc_tmp);
        this.massage_data(this.local_self, local_self_tmp);
        this.massage_data(this.global_posthoc, global_posthoc_tmp);
        this.massage_data(this.global_self, global_self_tmp);
        console.log("TESTING");
        console.log(this.local_posthoc);
        console.log(this.local_self);
        console.log(this.global_posthoc);
        console.log(this.global_self);
        this.local_posthoc_sorted = this.local_posthoc.slice();
        this.local_self_sorted = this.local_self.slice();
        this.global_posthoc_sorted = this.global_posthoc.slice();
        this.global_self_sorted = this.global_self.slice();
        this.local_posthoc_sorted = this.local_posthoc.sort(function (a, b) {
          return _this.compare(a.year, b.year, false);
        });
        this.local_self_sorted = this.local_self.sort(function (a, b) {
          return _this.compare(a.year, b.year, false);
        });
        this.global_posthoc_sorted = this.global_posthoc.sort(function (a, b) {
          return _this.compare(a.year, b.year, false);
        });
        this.global_self_sorted = this.global_self.sort(function (a, b) {
          return _this.compare(a.year, b.year, false);
        }); // for(let i = 0; i < local_posthoc_tmp.length; i++)
        // {
        //    var paper = {
        //     "title": local_posthoc_tmp["title"],
        //     "authors": local_posthoc_tmp["authors"],
        //     "year": local_posthoc_tmp["year"],
        //     "venue": local_posthoc_tmp["venue"],
        //     "main_explainability": local_posthoc_tmp["main_explainability"],
        //     "main_visualization": local_posthoc_tmp["main_visualization"],
        //     "citation": Number(local_posthoc_tmp["citation"]),
        //     "link": local_posthoc_tmp["link"],
        //     "placement": local_posthoc_tmp["placement"],
        //     "xai_type": local_posthoc_tmp["xai_type"],
        //     "nlp_task_1": local_posthoc_tmp["nlp_task_1"],
        //     "parts_covered": local_posthoc_tmp["parts_covered"],
        //     "type": local_posthoc_tmp["type"],
        //     "evaluation_metrics": local_posthoc_tmp["evaluation_metrics"],
        //     "operations": local_posthoc_tmp["operations"]
        //    }
        //    this.local_posthoc.push(paper)
        // }
        // for(let i = 0; i < local_self_tmp.length; i++)
        // {
        //   var record = local_self_tmp[i];
        //    var paper = {
        //     "title": record["title"],
        //     "authors": record["authors"],
        //     "year": record["year"],
        //     "venue": record["venue"],
        //     "main_explainability": record["main_explainability"],
        //     "main_visualization": record["main_visualization"],
        //     "citation": Number(local_self_tmp["citation"]),
        //     "link": local_self_tmp["link"],
        //     "placement": local_self_tmp["placement"],
        //     "xai_type": local_self_tmp["xai_type"],
        //     "nlp_task_1": local_self_tmp["nlp_task_1"],
        //     "parts_covered": local_self_tmp["parts_covered"],
        //     "type": local_self_tmp["type"],
        //     "evaluation_metrics": local_posthoc_tmp["evaluation_metrics"],
        //     "operations": local_posthoc_tmp["operations"]
        //    }
        //    this.local_posthoc.push(paper)
        // }
      }

      _createClass(TreeComponent, [{
        key: "massage_data",
        value: function massage_data(target_records, records) {
          for (var i = 0; i < records.length; i++) {
            var record = records[i];
            var paper = {
              "title": record["title"],
              "authors": record["authors"],
              "year": Number(record["year"]),
              "venue": record["venue"],
              "main_explainability": record["main_explainability"],
              "main_visualization": record["main_visualization"],
              "citation": Number(record["citation"]),
              "link": record["link"],
              "placement": record["placement"],
              "xai_type": record["xai_type"],
              "nlp_task_1": record["nlp_task_1"],
              "parts_covered": record["parts_covered"],
              "type": record["type"],
              "evaluation_metrics": record["evaluation_metrics"],
              "operations": record["operations"]
            };
            target_records.push(paper);
          }
        }
      }, {
        key: "compare",
        value: function compare(a, b, isAsc) {
          return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
        }
      }, {
        key: "sortData_local_posthoc",
        value: function sortData_local_posthoc(sort) {
          var _this2 = this;

          var data = this.local_posthoc.slice();

          if (!sort.active || sort.direction === '') {
            this.local_posthoc_sorted = data;
            return;
          }

          this.local_posthoc_sorted = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';

            switch (sort.active) {
              case 'year':
                return _this2.compare(a.year, b.year, isAsc);

              case 'main_explainability':
                return _this2.compare(a.main_explainability, b.main_explainability, isAsc);

              case 'main_visualization':
                return _this2.compare(a.main_visualization, b.main_visualization, isAsc);

              case 'citation':
                return _this2.compare(a.citation, b.citation, isAsc);

              case 'venue':
                return _this2.compare(a.venue, b.venue, isAsc);

              default:
                return 0;
            }
          });
        }
      }, {
        key: "sortData_local_self",
        value: function sortData_local_self(sort) {
          var _this3 = this;

          var data = this.local_self.slice();

          if (!sort.active || sort.direction === '') {
            this.local_self_sorted = data;
            return;
          }

          this.local_self_sorted = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';

            switch (sort.active) {
              case 'year':
                return _this3.compare(a.year, b.year, isAsc);

              case 'main_explainability':
                return _this3.compare(a.main_explainability, b.main_explainability, isAsc);

              case 'main_visualization':
                return _this3.compare(a.main_visualization, b.main_visualization, isAsc);

              case 'citation':
                return _this3.compare(a.citation, b.citation, isAsc);

              case 'venue':
                return _this3.compare(a.venue, b.venue, isAsc);

              default:
                return 0;
            }
          });
        }
      }, {
        key: "sortData_global_posthoc",
        value: function sortData_global_posthoc(sort) {
          var _this4 = this;

          var data = this.global_posthoc.slice();

          if (!sort.active || sort.direction === '') {
            this.global_posthoc_sorted = data;
            return;
          }

          this.global_posthoc_sorted = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';

            switch (sort.active) {
              case 'year':
                return _this4.compare(a.year, b.year, isAsc);

              case 'main_explainability':
                return _this4.compare(a.main_explainability, b.main_explainability, isAsc);

              case 'main_visualization':
                return _this4.compare(a.main_visualization, b.main_visualization, isAsc);

              case 'citation':
                return _this4.compare(a.citation, b.citation, isAsc);

              case 'venue':
                return _this4.compare(a.venue, b.venue, isAsc);

              default:
                return 0;
            }
          });
        }
      }, {
        key: "sortData_global_self",
        value: function sortData_global_self(sort) {
          var _this5 = this;

          var data = this.global_self.slice();

          if (!sort.active || sort.direction === '') {
            this.global_self_sorted = data;
            return;
          }

          this.global_self_sorted = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';

            switch (sort.active) {
              case 'year':
                return _this5.compare(a.year, b.year, isAsc);

              case 'main_explainability':
                return _this5.compare(a.main_explainability, b.main_explainability, isAsc);

              case 'main_visualization':
                return _this5.compare(a.main_visualization, b.main_visualization, isAsc);

              case 'citation':
                return _this5.compare(a.citation, b.citation, isAsc);

              case 'venue':
                return _this5.compare(a.venue, b.venue, isAsc);

              default:
                return 0;
            }
          });
        }
      }, {
        key: "getPlainDefinition",
        value: function getPlainDefinition(technique_type, name) {
          if (technique_type === "explainability") {
            return this.explainability_def[name];
          } else {
            return this.visualization_def[name];
          }
        }
      }, {
        key: "viewDefinition",
        value: function viewDefinition(technique) {
          var tech = {
            'name': technique
          };
          this.dialog.open(_definition_dialog_definition_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DefinitionDialogComponent"], {
            data: tech
          });
        }
      }, {
        key: "viewPaper",
        value: function viewPaper(selectedPaper, xai_type) {
          selectedPaper["xai_type"] = xai_type;
          console.log("xai_type " + xai_type);
          this.dialog.open(_paper_dialog_paper_dialog_component__WEBPACK_IMPORTED_MODULE_2__["PaperDialogComponent"], {
            data: selectedPaper
          });
        }
      }]);

      return TreeComponent;
    }();

    TreeComponent.ɵfac = function TreeComponent_Factory(t) {
      return new (t || TreeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]));
    };

    TreeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TreeComponent,
      selectors: [["app-tree"]],
      decls: 22,
      vars: 1,
      consts: [[1, "w3-margin", "w3-padding"], [1, "w3-text-blue-grey"], [1, "w3-small", "w3-margin-top"], [3, "destroyOnHide"], ["ngbTabTitle", "", "class", "w3-blue"], ["ngbTabContent", ""], ["ngbTabTitle", ""], [1, "w3-text-indigo", "w3-hover-grayscale", 2, "font-size", "14px"], [1, "w3-padding", "w3-light-grey"], ["matSort", "", 1, "w3-table", "table-striped", 3, "matSortChange"], ["mat-sort-header", "year"], ["mat-sort-header", "main_explainability"], ["mat-sort-header", "main_visualization"], ["mat-sort-header", "citation"], ["mat-sort-header", "venue"], ["class", "w3-hover-grey", "style", "cursor:pointer", 4, "ngFor", "ngForOf"], [1, "w3-hover-grey", 2, "cursor", "pointer"], [3, "click"], ["triggers", "mouseenter:mouseleave", 1, "w3-hover-text-white", 3, "ngbPopover", "popoverTitle"], [1, "w3-hover-text-white"], ["target", "_blank", 1, "w3-hover-text-white", 3, "href"], [1, "w3-small", "w3-text-blue", "w3-hover-text-white"], [1, "w3-hover-text-white", 3, "click"]],
      template: function TreeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Publications are grouped into four different tabs based on the type of their explanation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Remark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, ": the number of citations of each paper was obtained in May 2020. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ngb-tabset", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ngb-tab");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TreeComponent_ng_template_11_Template, 2, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TreeComponent_ng_template_12_Template, 20, 1, "ng-template", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ngb-tab");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TreeComponent_ng_template_14_Template, 2, 0, "ng-template", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TreeComponent_ng_template_15_Template, 21, 1, "ng-template", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ngb-tab");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TreeComponent_ng_template_17_Template, 2, 0, "ng-template", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TreeComponent_ng_template_18_Template, 21, 1, "ng-template", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ngb-tab");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TreeComponent_ng_template_20_Template, 2, 0, "ng-template", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TreeComponent_ng_template_21_Template, 21, 1, "ng-template", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("destroyOnHide", false);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTabTitle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTabContent"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPopover"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["UpperCasePipe"]],
      styles: [".mat-sort-header-container:not(.mat-sort-header-sorted) .mat-sort-header-arrow {\n  opacity: 0.54 !important;\n  transform: translateY(0px) !important;\n}\n\n.popover-content[_ngcontent-%COMP%] {\n  color: red !important;\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJlZS90cmVlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC90cmVlL3RyZWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubWF0LXNvcnQtaGVhZGVyLWNvbnRhaW5lcjpub3QoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQpIC5tYXQtc29ydC1oZWFkZXItYXJyb3cge1xuICBvcGFjaXR5OiAwLjU0ICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpICFpbXBvcnRhbnQ7XG59XG5cbi5wb3BvdmVyLWNvbnRlbnQge1xuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tree',
          templateUrl: './tree.component.html',
          styleUrls: ['./tree.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/assets/data/xaipapers.json":
  /*!****************************************!*\
    !*** ./src/assets/data/xaipapers.json ***!
    \****************************************/

  /*! exports provided: local-post-hoc, local-self, global-post-hoc, global-self, default */

  /***/
  function srcAssetsDataXaipapersJson(module) {
    module.exports = JSON.parse("{\"local-post-hoc\":[{\"authors\":\"Danilo Croce, Daniele Rossini, Roberto Basili\",\"title\":\"Explaining non-linear Classifier Decisions within Kernel-based Deep Architectures\",\"link\":\"https://www.aclweb.org/anthology/W18-5403.pdf\",\"year\":\"2018\",\"venue\":\"EMNLP\",\"type\":\"workshop\",\"citation\":\"5\",\"nlp_task_1\":\"Semantics: Sentence Level\",\"explainability\":\"Example-driven, Provenance, Feature Importance\",\"visualization\":\"Natural Language, Raw Examples\",\"main_explainability\":\"example-driven\",\"main_visualization\":\"raw examples\",\"placement\":\"1\",\"operations\":\"Layerwise Relevance Propagation\",\"evaluation_metrics\":\"Human Evaluation + Informal Examination\",\"parts_covered\":\"\"},{\"authors\":\"Eric Wallace, Shi Feng, Jordan Boyd-Graber\",\"title\":\"Interpreting  Neural  Networks with  Nearest  Neighbors.\",\"link\":\"https://www.aclweb.org/anthology/W18-5416.pdf\",\"year\":\"2018\",\"venue\":\"EMNLP\",\"type\":\"workshop\",\"citation\":\"10\",\"nlp_task_1\":\"\",\"explainability\":\"Feature Importance\",\"visualization\":\"Saliency\",\"main_explainability\":\"feature importance\",\"main_visualization\":\"saliency\",\"placement\":\"1\",\"operations\":\"first derivative saliency\",\"evaluation_metrics\":\"none\",\"parts_covered\":\"medium\"},{\"authors\":\"Andrew Slavin Ross, Michael C. Hughes, Finale Doshi-Velez\",\"title\":\"Right  for  the  Right  Reasons: Training  Differentiable  Models  by  Constraining  Their Explanations\",\"link\":\"https://www.ijcai.org/Proceedings/2017/0371.pdf\",\"year\":\"2017\",\"venue\":\"IJCAI\",\"type\":\"full\",\"citation\":\"117\",\"nlp_task_1\":\"\",\"explainability\":\"Feature Importance\",\"visualization\":\"Saliency\",\"main_explainability\":\"feature importance\",\"main_visualization\":\"saliency\",\"placement\":\"1\",\"operations\":\"Input gradient explanations\",\"evaluation_metrics\":\"Informal Examination\",\"parts_covered\":\"\"},{\"authors\":\"Pankaj Gupta, Hinrich Schutze\",\"title\":\"LISA:   Explaining Recurrent  Neural  Network  Judgments  via  Layer-wIse Semantic Accumulation  and Example    to Pattern Transformation.\",\"link\":\"https://www.aclweb.org/anthology/W18-5418.pdf\",\"year\":\"2018\",\"venue\":\"EMNLP\",\"type\":\"workshop\",\"citation\":\"5\",\"nlp_task_1\":\"Information Extraction\",\"explainability\":\"Feature Importance\",\"visualization\":\"Saliency\",\"main_explainability\":\"feature importance\",\"main_visualization\":\"saliency\",\"placement\":\"1\",\"operations\":\"Layerwise Semantic Accumulation\",\"evaluation_metrics\":\"none\",\"parts_covered\":\"medium-high\"},{\"authors\":\"Robert Schwarzenberg, David Harbecke, Vivien Macketanz, Eleftherios Avramidis, Sebastian MÃ¶ller\",\"title\":\"Train, Sort, Explain: Learning to Diagnose Translation Models.\",\"link\":\"https://www.aclweb.org/anthology/N19-4006.pdf\",\"year\":\"2019\",\"venue\":\"NAACL\",\"type\":\"short\",\"citation\":\"3\",\"nlp_task_1\":\"Interpretability and Analysis of Models for NLP\",\"explainability\":\"Feature Importance\",\"visualization\":\"Saliency\",\"main_explainability\":\"feature importance\",\"main_visualization\":\"saliency\",\"placement\":\"1\",\"operations\":\"neuron activation\",\"evaluation_metrics\":\"Informal Examination\",\"parts_covered\":\"medium\"},{\"authors\":\"David Harbecke, Robert Schwarzenberg, Christoph Alt\",\"title\":\"Learning  Explanations  from Language Data.\",\"link\":\"https://www.aclweb.org/anthology/W18-5434.pdf\",\"year\":\"2018\",\"venue\":\"EMNLP\",\"type\":\"workshop\",\"citation\":\"1\",\"nlp_task_1\":\"Sentiment Analysis, Stylistic Analysis, and Argument Mining\",\"explainability\":\"Feature Importance\",\"visualization\":\"Saliency\",\"main_explainability\":\"feature importance\",\"main_visualization\":\"saliency\",\"placement\":\"1\",\"operations\":\"computes saliency but with new metrics borrowed from vision\",\"evaluation_metrics\":\"none\",\"parts_covered\":\"applies feature saliency using untested metrics from vision (largely untested for NLP)\"},{\"authors\":\"David Alvarez-Melis and Tommi S. Jaakkola\",\"title\":\"A  causal framework  for  explaining  the  predictions  of  black-box sequence-to-sequence  models.\",\"link\":\"https://www.aclweb.org/anthology/D17-1042.pdf\",\"year\":\"2017\",\"venue\":\"EMNLP\",\"type\":\"full\",\"citation\":\"66\",\"nlp_task_1\":\"Machine Translation\",\"explainability\":\"Surrogate Model\",\"visualization\":\"Saliency\",\"main_explainability\":\"surrogate model\",\"main_visualization\":\"saliency\",\"placement\":\"1\",\"operations\":\"input perturbation\",\"evaluation_metrics\":\"none\",\"parts_covered\":\"medium-high\"},{\"authors\":\"Nina Poerner, Hinrich SchÃ¼tze, Benjamin Roth\",\"title\":\"Evaluating neural network explanation methods using hybrid documents and morphosyntactic agreement.\",\"link\":\"https://www.aclweb.org/anthology/P18-1032/\",\"year\":\"2018\",\"venue\":\"ACL\",\"type\":\"full\",\"citation\":\"16\",\"nlp_task_1\":\"Sentiment Analysis, Stylistic Analysis, and Argument Mining\",\"explainability\":\"Surrogate Model, Feature Importance\",\"visualization\":\"Saliency\",\"main_explainability\":\"surrogate model\",\"main_visualization\":\"saliency\",\"placement\":\"1\",\"operations\":\"pointing game paradigm + creation of hybrid documents\",\"evaluation_metrics\":\"Comparison to ground truth\",\"parts_covered\":\"medium-high\"},{\"authors\":\"Marco Tulio Ribeiro, Sameer Singh, Carlos Guestrin\",\"title\":\"\\\"Why  Should  I  Trust  You?\\\": Explaining the Predictions of Any Classifier.\",\"link\":\"https://www.kdd.org/kdd2016/papers/files/rfp0573-ribeiroA.pdf\",\"year\":\"2016\",\"venue\":\"KDD\",\"type\":\"full\",\"citation\":\"2701\",\"nlp_task_1\":\"Sentiment Analysis, Stylistic Analysis, and Argument Mining\",\"explainability\":\"Surrogate Model, Feature Importance\",\"visualization\":\"Saliency\",\"main_explainability\":\"surrogate model\",\"main_visualization\":\"saliency\",\"placement\":\"1\",\"operations\":\"Sampling, Word-level Feature Importance and Saliency,\",\"evaluation_metrics\":\"\\\"Comprehensive evaluation with simulated and human subjects, where we measure the impact of explanations on\\ntrust and associated tasks. \\\"\\n\\n* measure faithfulness of explanations,  For  each prediction on the test set, we generate explanations and\\ncompute the fraction of these gold features that are recovered\\nby the explanations. We report this recall averaged over all\\nthe test instances\",\"parts_covered\":\"Very High\"},{\"authors\":\"Nikos Voskarides, Edgar Meij, Manos Tsagkias, Maarten de Rijke, and Wouter Weerkamp\",\"title\":\"Learning  to  Explain  Entity Relationships  in  Knowledge  Graphs.\",\"link\":\"https://www.aclweb.org/anthology/P15-1055/\",\"year\":\"2015\",\"venue\":\"ACL\",\"type\":\"full\",\"citation\":\"44\",\"nlp_task_1\":\"Information Retrieval and Text Mining\",\"explainability\":\"Tree Induction, Surrogate Model, Feature Importance\",\"visualization\":\"Natural Language\",\"main_explainability\":\"surrogate model\",\"main_visualization\":\"raw examples\",\"placement\":\"1\",\"operations\":\"Information Retrieval-base, it cast the problem as a ranking problem. Given two entities, they search for sentences that mention the two entities, then rank the sentences using some features.\",\"evaluation_metrics\":\"none\",\"parts_covered\":\"high\"},{\"authors\":\"Alexander Panchenko, Fide Marten, Eugen Ruppert, Stefano Faralli,\\nDmitry Ustalov, Simone Paolo Ponzetto, and Chris Biemann\",\"title\":\"Unsupervised,  Knowledge- Free,   and   Interpretable   Word   Sense   Disambiguation.\",\"link\":\"https://www.aclweb.org/anthology/D17-2016.pdf\",\"year\":\"2017\",\"venue\":\"EMNLP\",\"type\":\"demo\",\"citation\":\"9\",\"nlp_task_1\":\"Semantics: Lexical\",\"explainability\":\"Example-driven, Feature Importance\",\"visualization\":\"Raw Examples, Saliency, Other Visualization Techniques\",\"main_explainability\":\"Example-driven\",\"main_visualization\":\"raw examples\",\"placement\":\"1\",\"operations\":\"Clustering based on several word features (embeddings, common hypernyms, distributional similarity scores, â¦)\\n\\nWord-based Saliency\",\"evaluation_metrics\":\"No evaluation\",\"parts_covered\":\"argues that a user-interface that provides visualization and supporting word sense disambiguation with additional word features (e.g. hypernyms, related sense, ..)\"}],\"local-self\":[{\"authors\":\"Danilo Croce, Daniele Rossini, Roberto Basili\",\"title\":\"Auditing Deep Learning processes through Kernel-based Explanatory Models.\",\"link\":\"https://www.aclweb.org/anthology/D19-1415.pdf\",\"year\":\"2019\",\"venue\":\"EMNLP\",\"type\":\"full\",\"citation\":\"0\",\"nlp_task_1\":\"Syntax: Tagging, Chunking and Parsing\",\"explainability\":\"Example-driven\",\"visualization\":\"Raw Examples\",\"main_explainability\":\"example-driven\",\"main_visualization\":\"raw examples\",\"placement\":\"2\",\"operations\":\"layer-wise relevance propagation, surrogate model\",\"evaluation_metrics\":\"F1\",\"parts_covered\":\"saliency via layer-wise relevance propagation\"},{\"authors\":\"James Mullenbach, Sarah Wiegreffe, Jon Duke, Jimeng Sun, Jacob Eisenstein\",\"title\":\"Explainable  Prediction  of Medical  Codes  from  Clinical  Text.\",\"link\":\"https://www.aclweb.org/anthology/N18-1100.pdf\",\"year\":\"2018\",\"venue\":\"NAACL\",\"type\":\"full\",\"citation\":\"61\",\"nlp_task_1\":\"\",\"explainability\":\"Feature Importance\",\"visualization\":\"Saliency\",\"main_explainability\":\"Feature Importance\",\"main_visualization\":\"Saliency\",\"placement\":\"2\",\"operations\":\"attention\",\"evaluation_metrics\":\"Human Evaluation\",\"parts_covered\":\"medium\"},{\"authors\":\"Qizhe Xie, Xuezhe Ma, Zihang Dai, Eduard Hovy\",\"title\":\"An Interpretable Knowledge Transfer Model for Knowledge Base Completion.\",\"link\":\"https://www.aclweb.org/anthology/P17-1088.pdf\",\"year\":\"2017\",\"venue\":\"ACL\",\"type\":\"full\",\"citation\":\"33\",\"nlp_task_1\":\"\",\"explainability\":\"Feature Importance\",\"visualization\":\"Saliency\",\"main_explainability\":\"Feature Importance\",\"main_visualization\":\"Saliency\",\"placement\":\"2\",\"operations\":\"attention\",\"evaluation_metrics\":\"Informal Examination\",\"parts_covered\":\"medium\"},{\"authors\":\"FrÃ©deric Godin, Kris Demuynck, Joni Dambre, Wesley De Neve, Thomas Demeester\",\"title\":\"Explaining Character-Aware Neural Networks for Word-Level Prediction: Do They Discover Linguistic Rules?\",\"link\":\"https://www.aclweb.org/anthology/D18-1365.pdf\",\"year\":\"2018\",\"venue\":\"EMNLP\",\"type\":\"full\",\"citation\":\"8\",\"nlp_task_1\":\"Syntax: Tagging, Chunking and Parsing\",\"explainability\":\"Feature Importance\",\"visualization\":\"Saliency\",\"main_explainability\":\"Feature Importance\",\"main_visualization\":\"Saliency\",\"placement\":\"2\",\"operations\":\"attention\",\"evaluation_metrics\":\"compare to ground truth\",\"parts_covered\":\"medium-high\"},{\"authors\":\"Malika Aubakirova, Mohit Bansal\",\"title\":\"Interpreting Neural Networks to Improve Politeness Comprehension.\",\"link\":\"https://pdfs.semanticscholar.org/331b/2dcd5f6250bd28c6f46cab09b474dce6e9a6.pdf\",\"year\":\"2016\",\"venue\":\"EMNLP\",\"type\":\"short\",\"citation\":\"22\",\"nlp_task_1\":\"Computational Social Science and Social Media\",\"explainability\":\"Feature Importance\",\"visualization\":\"Saliency\",\"main_explainability\":\"Feature Importance\",\"main_visualization\":\"Saliency\",\"placement\":\"2\",\"operations\":\"first derivative saliency (plus maybe, though leaning towards not adding activation cluster as an operation)\",\"evaluation_metrics\":\"none\",\"parts_covered\":\"small (heatmap on important words)\"},{\"authors\":\"Reza Ghaeini, Xiaoli Z. Fern, Prasad Tadepalli\",\"title\":\"Interpreting Recurrent and Attention-Based Neural Models: a Case Study on Natural Language Inference\",\"link\":\"https://www.aclweb.org/anthology/D18-1537.pdf\",\"year\":\"2018\",\"venue\":\"EMNLP\",\"type\":\"short\",\"citation\":\"19\",\"nlp_task_1\":\"Semantics: Textual Inference and Other Areas of Semantics\",\"explainability\":\"Feature Importance\",\"visualization\":\"Saliency\",\"main_explainability\":\"Feature Importance\",\"main_visualization\":\"Saliency\",\"placement\":\"2\",\"operations\":\"(a) attention saliency\\n(b) LSTM gating signals\",\"evaluation_metrics\":\"Informal Examination\",\"parts_covered\":\"\"},{\"authors\":\"Sweta Karlekar, Tong Niu, Mohit Bansal\",\"title\":\"Detecting Linguistic Characteristics of Alzheimerâs Dementia by Interpreting Neural Models.\",\"link\":\"https://www.aclweb.org/anthology/N18-2110.pdf\",\"year\":\"2018\",\"venue\":\"NAACL\",\"type\":\"full\",\"citation\":\"16\",\"nlp_task_1\":\"NLP Applications\",\"explainability\":\"Feature Importance\",\"visualization\":\"Saliency\",\"main_explainability\":\"Feature Importance\",\"main_visualization\":\"Saliency\",\"placement\":\"2\",\"operations\":\"first derivative saliency\",\"evaluation_metrics\":\"Informal Examination\",\"parts_covered\":\"medium\"},{\"authors\":\"Qiuchi Li, Benyou Wang, Massimo Melucci\",\"title\":\"CNM:  An  Interpretable  Complex- valued  Network  for  Matching.\",\"link\":\"https://www.aclweb.org/anthology/N19-1420.pdf\",\"year\":\"2019\",\"venue\":\"NAACL\",\"type\":\"full\",\"citation\":\"7\",\"nlp_task_1\":\"Question Answering\",\"explainability\":\"Feature Importance\",\"visualization\":\"Saliency\",\"main_explainability\":\"Feature Importance\",\"main_visualization\":\"Saliency\",\"placement\":\"2\",\"operations\":\"none\",\"evaluation_metrics\":\"no\",\"parts_covered\":\"medium (could be good if someone else reviews it)\"},{\"authors\":\"James Thorne, Andreas Vlachos, Christos Christodoulopoulos, Arpit Mittal\",\"title\":\"Generating Token-Level Explanations      for Natural Language Inference\",\"link\":\"https://www.aclweb.org/anthology/N19-1101.pdf\",\"year\":\"2019\",\"venue\":\"NAAcl\",\"type\":\"short\",\"citation\":\"1\",\"nlp_task_1\":\"Semantics: Textual Inference and Other Areas of Semantics\",\"explainability\":\"Feature Importance\",\"visualization\":\"Raw Trees, Saliency\",\"main_explainability\":\"Feature Importance\",\"main_visualization\":\"Saliency\",\"placement\":\"2\",\"operations\":\"(a) multiple instance learning (uses thresholded attention to make token-level predictions)\\n(b) input perturbation (LIME and Anchor Explanations)\",\"evaluation_metrics\":\"Comparison to ground truth\",\"parts_covered\":\"\"},{\"authors\":\"Samuel Carton, Qiaozhu Mei, Paul Resnick\",\"title\":\"Extractive Adversarial Networks: High-Recall Explanations for Identifying    Personal Attacks in Social Media Posts\",\"link\":\"https://www.aclweb.org/anthology/D18-1386.pdf\",\"year\":\"2018\",\"venue\":\"EMNLP\",\"type\":\"full\",\"citation\":\"1\",\"nlp_task_1\":\"Computational Social Science and Social Media\",\"explainability\":\"Feature Importance\",\"visualization\":\"Saliency\",\"main_explainability\":\"Feature Importance\",\"main_visualization\":\"Saliency\",\"placement\":\"2\",\"operations\":\"adversarial layer on top of attention\",\"evaluation_metrics\":\"Comparison to ground truth\",\"parts_covered\":\"\"},{\"authors\":\"Ling Luo, Xiang Ao, Feiyang Pan, Jin Wang, Tong Zhao, Ningzi Yu, Qing He\",\"title\":\"Beyond Polarity: Interpretable Financial  Sentiment Analysis with Hierarchical  Query- driven Attention.\",\"link\":\"https://www.ijcai.org/Proceedings/2018/0590.pdf\",\"year\":\"2018\",\"venue\":\"IJCAI\",\"type\":\"full\",\"citation\":\"16\",\"nlp_task_1\":\"Sentiment Analysis, Stylistic Analysis, and Argument Mining\",\"explainability\":\"Feature Importance\",\"visualization\":\"Saliency\",\"main_explainability\":\"Feature Importance\",\"main_visualization\":\"Saliency\",\"placement\":\"2\",\"operations\":\"query-driven attention mechanism, \\n\\nhierarchical query-driven attention\",\"evaluation_metrics\":\"our model is able to discover spotlights beyond the polarity of a document according to different usersâ requirements, Thus, compared with previous studies, our proposed method is more flexible and explainable\",\"parts_covered\":\"medium\"},{\"authors\":\"Francesco Barbieri, Luis Espinosa-Anke, Jose Camacho-Collados, Steven Schockaert, Horacio Saggion\",\"title\":\"Interpretable Emoji Prediction via Label-Wise  Attention  LSTMs.\",\"link\":\"https://www.aclweb.org/anthology/D18-1508.pdf\",\"year\":\"2018\",\"venue\":\"EMNLP\",\"type\":\"short\",\"citation\":\"8\",\"nlp_task_1\":\"Computational Social Science and Social Media\",\"explainability\":\"Feature Importance\",\"visualization\":\"Saliency\",\"main_explainability\":\"Feature Importance\",\"main_visualization\":\"Saliency\",\"placement\":\"2\",\"operations\":\"attention mechanisms\",\"evaluation_metrics\":\"mostly based on accuracy metrics -- two interesting metrics are discussed, Accuracy @k and Coverage Error\",\"parts_covered\":\"medium\"},{\"authors\":\"Yichen Jiang, Mohit Bansal\",\"title\":\"Self-Assembling Modular Networks for Interpretable Multi-Hop Reasoning.\",\"link\":\"https://www.aclweb.org/anthology/D19-1455.pdf\",\"year\":\"2019\",\"venue\":\"EMNLP\",\"type\":\"full\",\"citation\":\"7\",\"nlp_task_1\":\"Question Answering\",\"explainability\":\"Feature Importance\",\"visualization\":\"Saliency\",\"main_explainability\":\"Feature Importance\",\"main_visualization\":\"Saliency\",\"placement\":\"2\",\"operations\":\"Attention, NN-based Controller, Neural Modular Networks\",\"evaluation_metrics\":\"Very basic visual inspection of 10 randomly chosen examples\",\"parts_covered\":\"medium-high\"},{\"authors\":\"Shiou Tian Hsu, Changsung Moon, Paul Jones, Nagiza F. Samatova\",\"title\":\"An   Interpretable   Generative Adversarial  Approach  to  Classification  of  Latent  Entity Relations in Unstructured Sentences.\",\"link\":\"https://www.aaai.org/ocs/index.php/AAAI/AAAI18/paper/view/16629/16066\",\"year\":\"2018\",\"venue\":\"AAAI\",\"type\":\"full\",\"citation\":\"3\",\"nlp_task_1\":\"Information Extraction\",\"explainability\":\"Feature Importance\",\"visualization\":\"Saliency\",\"main_explainability\":\"Feature Importance\",\"main_visualization\":\"Saliency\",\"placement\":\"2\",\"operations\":\"Encoder for vector representations and used for reward generation as feedback/labels for a semi-supervised approach to rationale generation and selection.Â\",\"evaluation_metrics\":\"While the quality of interpretability is difficult to measure without human evaluation, we make the assumption that rationales that lead to better F1 scores are more interpretable than those that lead to lower scores. \\n\\nWe treat the Encoder as a proxy human reader. Based on this assumption, we evaluated the quality of our rationales by treating attention models as proxy rationale generating models, where rationales are the highest-scoring consecutive ngrams in the attention model. Compared to the proxy rationale models, experiments using rationales generated from our model show a 1.7â¼5.0% improvement in F1 score\",\"parts_covered\":\"medium\"},{\"authors\":\"Yang Yang, Deyu Zhou, Yulan He, Meng Zhang\",\"title\":\"Interpretable Relevant Emotion Ranking with Event-Driven Attention.\",\"link\":\"https://www.aclweb.org/anthology/D19-1017.pdf\",\"year\":\"2019\",\"venue\":\"EMNLP\",\"type\":\"full\",\"citation\":\"0\",\"nlp_task_1\":\"Syntax: Tagging, Chunking and Parsing\",\"explainability\":\"Feature Importance\",\"visualization\":\"Saliency\",\"main_explainability\":\"Feature Importance\",\"main_visualization\":\"Saliency\",\"placement\":\"2\",\"operations\":\"Corpus-level and Document-level  Event-Driven attention, \\n\\nVector products and Matrix Multiplication, SoftmaxÂ  -- various attention mechanisms\",\"evaluation_metrics\":\"several accuracy-based metrics + visual assessment\",\"parts_covered\":\"medium\"},{\"authors\":\"AmirAli Bagher Zadeh, Paul Pu Liang, Soujanya Poria, Erik Cambria, Louis-Philippe Morency\",\"title\":\"Multimodal Language Analysis in the Wild: CMU-MOSEI Dataset and Interpretable Dynamic Fusion Graph\",\"link\":\"https://www.aclweb.org/anthology/P18-1208/\",\"year\":\"2018\",\"venue\":\"ACL\",\"type\":\"full\",\"citation\":\"48\",\"nlp_task_1\":\"Language Grounding to Vision, Robotics and Beyond\",\"explainability\":\"Feature Importance\",\"visualization\":\"Saliency\",\"main_explainability\":\"Feature Importance\",\"main_visualization\":\"Saliency\",\"placement\":\"2\",\"operations\":\"Feature importance where the features are the variables modeling the pair-wise interactions between modalities\",\"evaluation_metrics\":\"Informal Examination\",\"parts_covered\":\"\"},{\"authors\":\"Nikolaos Pappas, Andrei Popescu-Belis\",\"title\":\"Explaining  the Stars:  Weighted  Multiple-Instance  Learning  for  Aspect- Based   Sentiment   Analysis.\",\"link\":\"https://www.aclweb.org/anthology/D14-1052.pdf\",\"year\":\"2014\",\"venue\":\"EMNLP\",\"type\":\"full\",\"citation\":\"32\",\"nlp_task_1\":\"Sentiment Analysis, Stylistic Analysis, and Argument Mining\",\"explainability\":\"Feature Importance\",\"visualization\":\"Saliency\",\"main_explainability\":\"Feature Importance\",\"main_visualization\":\"Saliency\",\"placement\":\"2\",\"operations\":\"none\",\"evaluation_metrics\":\"no\",\"parts_covered\":\"small\"},{\"authors\":\"Dongyeop Kang, Varun Gangal, Ang Lu, Zheng Chen, and Eduard Hovy\",\"title\":\"Detecting  and  Explaining  Causes From Text For a Time Series Event.\",\"link\":\"http://www.cs.cmu.edu/~dongyeok/papers/emnlp17_explain.pdf\",\"year\":\"2017\",\"venue\":\"EMNLP\",\"type\":\"full\",\"citation\":\"11\",\"nlp_task_1\":\"NLP Applications\",\"explainability\":\"Feature Importance\",\"visualization\":\"Saliency\",\"main_explainability\":\"Feature Importance\",\"main_visualization\":\"Saliency\",\"placement\":\"2\",\"operations\":\"attention\",\"evaluation_metrics\":\"Human Evaluation\",\"parts_covered\":\"medium\"},{\"authors\":\"Mantong Zhou, Minlie Huang, Xiaoyan Zhu\",\"title\":\"Interpretable Reasoning Network for Multi-Relation Question Answering.\",\"link\":\"https://www.aclweb.org/anthology/C18-1171.pdf\",\"year\":\"2018\",\"venue\":\"COLING\",\"type\":\"full\",\"citation\":\"11\",\"nlp_task_1\":\"Question Answering\",\"explainability\":\"Feature Importance\",\"visualization\":\"Saliency\",\"main_explainability\":\"Feature Importance\",\"main_visualization\":\"Saliency\",\"placement\":\"2\",\"operations\":\"provenance derivation\",\"evaluation_metrics\":\"none\",\"parts_covered\":\"small (last mile, exactly the same as MathQA)\"},{\"authors\":\"Martin Tutek and Jan Snajder\",\"title\":\"Iterative Recursive Attention Model for Interpretable Sequence Classification\",\"link\":\"https://www.aclweb.org/anthology/W18-5427/\",\"year\":\"2018\",\"venue\":\"EMNLP\",\"type\":\"workshop\",\"citation\":\"3\",\"nlp_task_1\":\"Sentiment Analysis, Stylistic Analysis, and Argument Mining\",\"explainability\":\"Feature Importance - Extracted Features\",\"visualization\":\"Saliency\",\"main_explainability\":\"Feature Importance\",\"main_visualization\":\"Saliency\",\"placement\":\"2\",\"operations\":\"attention\",\"evaluation_metrics\":\"none\",\"parts_covered\":\"medium-high\"},{\"authors\":\"Nicolas Garneau, Jean-Samuel Leboeuf, Luc Lamontagne\",\"title\":\"Predicting   and   interpreting embeddings  for  out  of  vocabulary words  in downstream tasks.\",\"link\":\"https://www.aclweb.org/anthology/W18-5439.pdf\",\"year\":\"2018\",\"venue\":\"EMNLP\",\"type\":\"workshop\",\"citation\":\"2\",\"nlp_task_1\":\"Syntax: Tagging, Chunking and Parsing\",\"explainability\":\"Feature Importance\",\"visualization\":\"Saliency\",\"main_explainability\":\"Feature Importance\",\"main_visualization\":\"Saliency\",\"placement\":\"2\",\"operations\":\"attention (on words)\",\"evaluation_metrics\":\"surrogate prediction quality\",\"parts_covered\":\"\"},{\"authors\":\"Shun Kiyono, Sho Takase, Jun Suzuki, Naoaki Okazaki, Kentaro Inui, Masaaki Nagata\",\"title\":\"Unsupervised Token-wise Alignment to Improve Interpretation of Encoder-Decoder Models.\",\"link\":\"https://www.aclweb.org/anthology/W18-5410.pdf\",\"year\":\"2018\",\"venue\":\"EMNLP\",\"type\":\"workshop\",\"citation\":\"2\",\"nlp_task_1\":\"Summarization\",\"explainability\":\"Feature Importance\",\"visualization\":\"Saliency\",\"main_explainability\":\"Feature Importance\",\"main_visualization\":\"Saliency\",\"placement\":\"2\",\"operations\":\"explainability-aware architecture\",\"evaluation_metrics\":\"none\",\"parts_covered\":\"medium\"},{\"authors\":\"Junyu Lu, Chenbin Zhang, Zeying Xie, Guang Ling, Tom Chao Zhou, Zenglin Xu\",\"title\":\"Constructing Interpretive Spatio-Temporal Features for Multi-Turn Responses Selection.\",\"link\":\"https://www.aclweb.org/anthology/P19-1006.pdf\",\"year\":\"2019\",\"venue\":\"ACL\",\"type\":\"short\",\"citation\":\"1\",\"nlp_task_1\":\"Dialogue and Interactive Systems\",\"explainability\":\"Feature Importance\",\"visualization\":\"Saliency\",\"main_explainability\":\"Feature Importance\",\"main_visualization\":\"Saliency\",\"placement\":\"2\",\"operations\":\"attention\",\"evaluation_metrics\":\"none\",\"parts_covered\":\"medium\"},{\"authors\":\"Wang Ling, Dani Yogatama, Chris Dyer, Phil Blunsom\",\"title\":\"Program  Induction  by  Rationale Generation:  Learning  to  Solve  and  Explain  Algebraic Word Problems\",\"link\":\"https://www.aclweb.org/anthology/P17-1015.pdf\",\"year\":\"2017\",\"venue\":\"ACL\",\"type\":\"full\",\"citation\":\"44\",\"nlp_task_1\":\"Question Answering\",\"explainability\":\"Rule Induction\",\"visualization\":\"Natural Language, Raw program\",\"main_explainability\":\"induction\",\"main_visualization\":\"raw symbolic\",\"placement\":\"2\",\"operations\":\"explainability-aware architecture (??)\",\"evaluation_metrics\":\"BLEU, perplexity, accuracy\",\"parts_covered\":\"generates natural language explanations\"},{\"authors\":\"Yue Dong, Zichao Li, Mehdi Rezagholizadeh, Jackie Chi Kit Cheung\",\"title\":\"EditNTS: An Neural Programmer-Interpreter Model for Sentence Simplification through Explicit Editing.\",\"link\":\"https://www.aclweb.org/anthology/P19-1331/\",\"year\":\"2019\",\"venue\":\"ACL\",\"type\":\"full\",\"citation\":\"5\",\"nlp_task_1\":\"Summarization\",\"explainability\":\"Program Induction\",\"visualization\":\"Raw program\",\"main_explainability\":\"induction\",\"main_visualization\":\"raw symbolic\",\"placement\":\"2\",\"operations\":\"explainability-aware architecture\",\"evaluation_metrics\":\"Human Evaluation\",\"parts_covered\":\"generates an explanation and produces prediction from it\"},{\"authors\":\"Aida Amini, Saadia Gabriel, Shanchuan Lin, Rik Koncel-Kedziorski, Yejin Choi, Hannaneh Hajishirzi\",\"title\":\"MathQA: Towards Interpretable Math Word Problem Solving with Operation-Based Formalisms.\",\"link\":\"https://www.aclweb.org/anthology/N19-1245.pdf\",\"year\":\"2019\",\"venue\":\"NAACL\",\"type\":\"full\",\"citation\":\"3\",\"nlp_task_1\":\"Semantics: Textual Inference and Other Areas of Semantics\",\"explainability\":\"Program Induction\",\"visualization\":\"Raw program\",\"main_explainability\":\"induction\",\"main_visualization\":\"raw symbolic\",\"placement\":\"2\",\"operations\":\"provenance, \\\"explainability-aware architecture\\\"\",\"evaluation_metrics\":\"Informal Examination\",\"parts_covered\":\"small (\\\"last mile\\\")\"},{\"authors\":\"Pouya Pezeshkpour, Yifan Tian, Sameer Singh\",\"title\":\"Investigating Robustness and Interpretability of Link Prediction via Adversarial Modifications.\",\"link\":\"https://www.aclweb.org/anthology/N19-1337/\",\"year\":\"2019\",\"venue\":\"NAACL\",\"type\":\"full\",\"citation\":\"2\",\"nlp_task_1\":\"Information Extraction\",\"explainability\":\"Rule Induction\",\"visualization\":\"Raw Rules\",\"main_explainability\":\"induction\",\"main_visualization\":\"raw symbolic\",\"placement\":\"2\",\"operations\":\"adversarial modification (identifies the fact that when removed from the KG changes the prediction for a target fact)\",\"evaluation_metrics\":\"not really, just qualitative examination of the output\",\"parts_covered\":\"medium\"},{\"authors\":\"Tiancheng Zhao, Kyusong Lee, Maxine Eskenazi\",\"title\":\"Unsupervised  Discrete  Sentence Representation  Learning  for  Interpretable  Neural  Dialog Generation.\",\"link\":\"https://www.aclweb.org/anthology/P18-1101.pdf\",\"year\":\"2017\",\"venue\":\"ACL\",\"type\":\"full\",\"citation\":\"43\",\"nlp_task_1\":\"Dialogue and Interactive Systems\",\"explainability\":\"\",\"visualization\":\"Other Visualization Techniques\",\"main_explainability\":\"induction\",\"main_visualization\":\"raw symbolic\",\"placement\":\"2\",\"operations\":\"\",\"evaluation_metrics\":\"\",\"parts_covered\":\"\"},{\"authors\":\"Chao-Chun Liang, Shih-Hong Tsai, Ting-Yun Chang, Yi-Chung Lin, Keh-Yih Su\",\"title\":\"A Meaning-based English Math Word  Problem  Solver  with  Understanding,  Reasoning and Explanation.\",\"link\":\"https://www.aclweb.org/anthology/C16-2032.pdf\",\"year\":\"2016\",\"venue\":\"COLING\",\"type\":\"demo\",\"citation\":\"7\",\"nlp_task_1\":\"Question Answering\",\"explainability\":\"Program Induction, Template-based\",\"visualization\":\"Natural Language, Raw program\",\"main_explainability\":\"induction\",\"main_visualization\":\"raw symbolic\",\"placement\":\"2\",\"operations\":\"annotates with POS tags\",\"evaluation_metrics\":\"surrogate prediction quality\",\"parts_covered\":\"builds AST\"},{\"authors\":\"Yichen Jiang, Nitish Joshi, Yen-Chun Chen, Mohit Bansal\",\"title\":\"Explore, Propose, and Assemble: An Interpretable Model for Multi-Hop Reading Comprehension.\",\"link\":\"https://www.aclweb.org/anthology/P19-1261.pdf\",\"year\":\"2019\",\"venue\":\"ACL\",\"type\":\"full\",\"citation\":\"4\",\"nlp_task_1\":\"Question Answering\",\"explainability\":\"Tree Induction, Provenance\",\"visualization\":\"Raw Trees, Saliency\",\"main_explainability\":\"induction\",\"main_visualization\":\"raw symbolic\",\"placement\":\"2\",\"operations\":\"explainability-aware architecture (??)\",\"evaluation_metrics\":\"none\",\"parts_covered\":\"small (last mile?)\"},{\"authors\":\"Abdalghani Abujabal, Rishiraj Saha Roy, Mohamed Yahya, Gerhard Weikum\",\"title\":\"QUINT: Interpretable Question Answering  over  Knowledge  Bases.\",\"link\":\"https://www.aclweb.org/anthology/D17-2011.pdf\",\"year\":\"2017\",\"venue\":\"EMNLP\",\"type\":\"demo\",\"citation\":\"15\",\"nlp_task_1\":\"Question Answering\",\"explainability\":\"Template-based, Provenance, Example-driven\",\"visualization\":\"Natural Language, other visualization techniques, Raw Examples\",\"main_explainability\":\"provenance\",\"main_visualization\":\"natural Language\",\"placement\":\"2\",\"operations\":\"template-based, generates query\",\"evaluation_metrics\":\"none\",\"parts_covered\":\"template-based, generates query\"},{\"authors\":\"An T. Nguyen, Aditya Kharosekar, Matthew Lease, Byron C. Wallace\",\"title\":\"Interpretable Joint Graphical Model for   Fact-Checking From Crowds.\",\"link\":\"https://www.aaai.org/ocs/index.php/AAAI/AAAI18/paper/view/16673/15848\",\"year\":\"2018\",\"venue\":\"AAAI\",\"type\":\"full\",\"citation\":\"17\",\"nlp_task_1\":\"\",\"explainability\":\"Provenance\",\"visualization\":\"Other Visualization Techniques\",\"main_explainability\":\"Provenance\",\"main_visualization\":\"other\",\"placement\":\"2\",\"operations\":\"provenance, \\\"explainability-aware architecture\\\"\",\"evaluation_metrics\":\"Performed user study. The study showed that the explanations improved user satisfaction and trust\",\"parts_covered\":\"entire process\"},{\"authors\":\"Seungwhan Moon, Pararth Shah, Anuj Kumar, Rajen Subba\",\"title\":\"OpenDialKG: Explainable Conversational Reasoning with Attention-based Walks over Knowledge Graphs\",\"link\":\"https://www.aclweb.org/anthology/P19-1081.pdf\",\"year\":\"2019\",\"venue\":\"ACL\",\"type\":\"full\",\"citation\":\"10\",\"nlp_task_1\":\"Dialogue and Interactive Systems\",\"explainability\":\"Provenance\",\"visualization\":\"Other Visualization Techniques\",\"main_explainability\":\"provenance\",\"main_visualization\":\"other\",\"placement\":\"2\",\"operations\":\"attention\",\"evaluation_metrics\":\"Human Evaluation + Comparison to ground truth\",\"parts_covered\":\"small\"},{\"authors\":\"Nazneen Fatema Rajani, Bryan McCann, Caiming Xiong, Richard Socher\",\"title\":\"Explain Yourself! Leveraging Language Models for Commonsense Reasoning\",\"link\":\"https://www.aclweb.org/anthology/P19-1487.pdf\",\"year\":\"2019\",\"venue\":\"ACL\",\"type\":\"full\",\"citation\":\"12\",\"nlp_task_1\":\"Question Answering\",\"explainability\":\"Surrogate Model\",\"visualization\":\"Natural Language\",\"main_explainability\":\"Surrogate Model\",\"main_visualization\":\"Natural Language\",\"placement\":\"2\",\"operations\":\"Use pretrained language model  that is finetuned on human-provided explanations\",\"evaluation_metrics\":\"Human Evaluation + Comparison to ground truth + Informal Examination\",\"parts_covered\":\"\"},{\"authors\":\"Hui Liu, Qingyu Yin, William Yang Wang\",\"title\":\"Towards Explainable NLP: A Generative Explanation Framework for Text Classification.\",\"link\":\"https://www.aclweb.org/anthology/P19-1560.pdf\",\"year\":\"2019\",\"venue\":\"ACL\",\"type\":\"full\",\"citation\":\"9\",\"nlp_task_1\":\"\",\"explainability\":\"Surrogate Model\",\"visualization\":\"Natural Language\",\"main_explainability\":\"Surrogate Model\",\"main_visualization\":\"Natural Language\",\"placement\":\"2\",\"operations\":\"explainability-aware architecture (??)\",\"evaluation_metrics\":\"BLEU, human evaluation\",\"parts_covered\":\"generates prediction from generated explanation\"},{\"authors\":\"Alona Sydorova, Nina Porner, Benjamin Roth\",\"title\":\"Interpretable Question Answering on Knowledge Bases and Text.\",\"link\":\"https://www.aclweb.org/anthology/P19-1488.pdf\",\"year\":\"2019\",\"venue\":\"ACL\",\"type\":\"full\",\"citation\":\"1\",\"nlp_task_1\":\"Question Answering\",\"explainability\":\"Surrogate Model, Feature Importance\",\"visualization\":\"Saliency\",\"main_explainability\":\"surrogate model\",\"main_visualization\":\"saliency\",\"placement\":\"2\",\"operations\":\"attention, input perturbation\",\"evaluation_metrics\":\"Human Evaluation\",\"parts_covered\":\"medium\"}],\"global-post-hoc\":[{\"authors\":\"Reid Pryzant, Sugato Basu, Kazoo Sone\",\"title\":\"Interpretable Neural Architectures for Attributing an Adâs Performance to its Writing Style.\",\"link\":\"https://www.aclweb.org/anthology/W18-5415/\",\"year\":\"2018\",\"venue\":\"EMNLP\",\"type\":\"workshop\",\"citation\":\"4\",\"nlp_task_1\":\"Computational Social Science and Social Media\",\"explainability\":\"Feature Importance\",\"visualization\":\"Saliency\",\"main_explainability\":\"feature importance\",\"main_visualization\":\"saliency\",\"placement\":\"3\",\"operations\":\"class activation mapping + select top k n-grams\",\"evaluation_metrics\":\"Informal examination\",\"parts_covered\":\"medium\"},{\"authors\":\"Reid Pryzant, Kelly Shen, Dan Jurafsky, Stefan Wager\",\"title\":\"Deconfounded Lexicon Induction for Interpretable Social Science.\",\"link\":\"https://nlp.stanford.edu/pubs/pryzant2018lexicon.pdf\",\"year\":\"2018\",\"venue\":\"NAACL\",\"type\":\"full\",\"citation\":\"6\",\"nlp_task_1\":\"Computational Social Science and Social Media\",\"explainability\":\"Feature Importance\",\"visualization\":\"Saliency\",\"main_explainability\":\"feature importance\",\"main_visualization\":\"saliency\",\"placement\":\"3\",\"operations\":\"attention\",\"evaluation_metrics\":\"none\",\"parts_covered\":\"medium-high\"},{\"authors\":\"Ninghao Liu, Xiao Huang, Jundong Li, Xia Hu\",\"title\":\"On   Interpretation   of   Network Embedding via Taxonomy Induction\",\"link\":\"https://dl.acm.org/doi/pdf/10.1145/3219819.3220001\",\"year\":\"2018\",\"venue\":\"KDD\",\"type\":\"full\",\"citation\":\"8\",\"nlp_task_1\":\"Computational Social Science and Social Media\",\"explainability\":\"Surrogate Model\",\"visualization\":\"Other Visualization Techniques\",\"main_explainability\":\"surrogate model\",\"main_visualization\":\"other\",\"placement\":\"3\",\"operations\":\"hierarchical clustering on embeddings to infer taxonomy\",\"evaluation_metrics\":\"Comparison to ground truth\",\"parts_covered\":\"\"}],\"global-self\":[{\"authors\":\"Nicolas Prollochs, Stefan Feuerriegel, Dirk Neumann\",\"title\":\"Learning Interpretable Negation Rules via Weak Supervision at Document   Level: A Reinforcement Learning Approach.\",\"link\":\"https://www.aclweb.org/anthology/N19-1038.pdf\",\"year\":\"2019\",\"venue\":\"NAACL\",\"type\":\"short\",\"citation\":\"4\",\"nlp_task_1\":\"Sentiment Analysis, Stylistic Analysis, and Argument Mining\",\"explainability\":\"Rule Induction\",\"visualization\":\"Raw Rules\",\"main_explainability\":\"induction\",\"main_visualization\":\"symbolic rep\",\"placement\":\"4\",\"operations\":\"none\",\"evaluation_metrics\":\"human evaluation\",\"parts_covered\":\"learns DFA rules\"}]}");
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/mdanile@us.ibm.com/git/xainlp/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map