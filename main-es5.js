function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header>\n    <div class=\"container\">\n        <h1>POC Mask Designer</h1>\n    </div>\n</header>\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n<footer>\n\n</footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-app/edit-app.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-app/edit-app.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditAppEditAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"model && !report\" class=\"padding20 white-bg\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"btn-cont\">\n            <button style='display: none;' (click)=\"initReport()\" class=\"btn btn-primary pull-left\">Response</button>\n            <button style='display: none;' (click)=\"updateForm()\" class=\"btn btn-primary pull-right\">Update</button>\n            <button style='display: none;' routerLink=\"/application/{{model._id}}\" class=\"btn btn-primary pull-right\" >View <i class=\"fa fa-external-link\"></i></button>\n        </div>\n    </div>\n  </div>\n  <div class=\"spacer30\"></div>\n  <div class=\"row\">\n    <div class=\"col-4\">\n\n        <div style='display: none;' class=\"row\">\n        <label class=\"col-8\">Background Color</label>\n        <input class=\"colorpick col-4\" type=\"color\" name=\"bgColor\" [(ngModel)]=\"model.theme.bgColor\" >    \n        </div>\n        <div style='display: none;' class=\"row\">\n        <label class=\"col-8\">Text Color</label>\n        <input class=\"colorpick col-4\" type=\"color\" name=\"textColor\" [(ngModel)]=\"model.theme.textColor\">    \n        </div>\n\n      <h4 style='display: none;' (click)=\"test()\">Select Fields</h4>\n      <p style='display: none;'>Customize your form by drag and drop below fields to the form area.</p>\n      <!--a draggable element-->\n      <div class=\"fields\" *ngFor=\"let item of fieldModels\">\n        <div class=\"field pointer shadow-bg\" [dndDraggable]=\"item\"\n        [dndEffectAllowed]=\"'copy'\" \n        (dndEnd)=\"onDragEnd($event)\">\n          <i [ngClass]=\"item.icon\" class=\"fa pull-left\"></i>\n          <h5>{{item.label}}</h5>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"col-8\">\n\n      <div  class=\"form-group\"\n      style=\"display:none;margin-bottom: 0px !important; padding: 30px 60px 5px 60px;\"\n      [style.backgroundColor]=\"model.theme.bgColor\"\n      [style.color]=\"model.theme.textColor\">\n      <h2><input class=\"form-control\" type=\"text\" [(ngModel)]=\"model.name\" /></h2>\n      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"model.description\" />\n      </div>\n\n      <!--a dropzone-->\n      <!--to allow dropping content that is not [dndDraggable] set dndAllowExternal to true-->\n      <section dndDropzone\n      (dndDragover)=\"onDragover($event)\"\n      (dndDrop)=\"onDrop($event,model.attributes)\" class=\"dndDropArea\"\n      [ngClass]=\"{'empty':model.attributes.length == 0}\"\n      [style.backgroundColor]=\"model.theme.bgColor\"\n      [style.color]=\"model.theme.textColor\"> \n\n      <div class=\"field\" *ngFor=\"let item of model.attributes;let i= index;\" \n        (dndStart)=\"onDragStart($event)\"\n        (dndCanceled)=\"onDragCanceled($event)\"\n        (dndMoved)=\"onDragged(item, model.attributes, 'move')\"\n        [dndEffectAllowed]=\"'all'\" \n        [dndDraggable]=\"item\">\n        <div class=\"row form-group\">\n          <div class=\"col-1\"><i class=\"fa fa-ellipsis-v dndHandle\" dndHandle></i></div>\n          <div class=\"col-7\">\n            <!-- <i [ngClass]=\"item.icon\" class=\"fa pull-left\"></i>\n            <h5>{{item.label}}\n            <span *ngIf=\"item.required\" class=\"red\">*</span></h5> -->\n                  <div *ngIf=\"item.type=='text'\">\n                    <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                    <input type=\"text\" [style.width]= \"item.width\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\" >\n                  </div>\n                  <div *ngIf=\"item.type=='email'\">\n                    <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                    <input type=\"email\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\" >\n                  </div>\n                  <div *ngIf=\"item.type=='phone'\">\n                    <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                    <input type=\"text\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\" >\n                  </div>\n                  <div *ngIf=\"item.type=='number'\">\n                      <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                      <input type=\"number\" class=\"form-control\" id=\"{{item.name}}\" min=\"{{item.min}}\" max=\"{{item.max}}\" placeholder=\"{{item.placeholder}}\" >\n                    </div>\n                  <div *ngIf=\"item.type=='date'\">\n                    <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                    <input type=\"date\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\" >\n                  </div>\n                  <div *ngIf=\"item.type=='datetime-local'\">\n                    <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                    <input type=\"datetime-local\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\" >\n                  </div>\n                  <div *ngIf=\"item.type=='textarea'\">\n                      <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                      <textarea class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\" >\n                      </textarea>\n                    </div>\n                  <div *ngIf=\"item.type=='file'\">\n                    <label>{{item.label}} (File can't be uploaded right now)</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                    <input type=\"file\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\" >\n                    <small class=\"form-text text-danger\">(File can't be uploaded right now)</small>\n                  </div>\n                  <div *ngIf=\"item.type=='paragraph'\">\n                    <p class=\"form-text\">{{item.placeholder}}</p>\n                  </div>\n                  <div *ngIf=\"item.type=='autocomplete'\">\n                    <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                    <select class=\"form-control\" id=\"{{item.name}}\" >\n                      <option *ngFor=\"let v of item.values\" [value]=\"v.value\">{{v.label}}</option>  \n                    </select>\n                    <!-- <small class=\"form-text text-muted\">{{item.description}}</small> -->\n                  </div>\n                  <div *ngIf=\"item.type=='checkbox'\">\n                    <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                    <div *ngFor=\"let v of item.values\" class=\"inline-form-group\">\n                        <label class=\"cust-check-bx\">\n                          <input type=\"checkbox\" [value]=\"v.value\" name=\"{{item.name}}\" (click)=\"toggleValue(v)\"> {{v.label}}\n                          <span class=\"checkmark\"></span>\n                        </label>\n                      </div>\n                  </div>\n                  <div *ngIf=\"item.type=='radio'\">\n                      <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                      <div *ngFor=\"let v of item.values\" class=\"inline-form-group\">\n                          <label class=\"cust-check-bx\">\n                            <input type=\"radio\" [value]=\"v.value\" name=\"{{item.name}}\" > {{v.label}}\n                            <span class=\"checkmark\"></span>\n                          </label>\n                        </div>\n                    </div>\n                  <div *ngIf=\"item.type=='button'\" class=\"btn-cont\">\n                    <input type=\"{{item.subtype}}\" (click)=\"submit()\" value=\"{{item.label}}\" class=\"btn btn-primary\" id=\"{{item.name}}\" >\n                  </div>\n          </div>\n          <div class=\"col-4\">\n            <i *ngIf=\"item.toggle\" (click)=\"item.toggle=false\" class=\"fa fa-chevron-up pull-right\"></i>\n            <i *ngIf=\"!item.toggle\" (click)=\"item.toggle=true\" class=\"fa fa-chevron-down pull-right\"></i>\n            <i style=\"display: none;\" (click)=\"removeField(i)\" class=\"fa fa-trash pull-right\"></i>\n          </div>\n        </div>\n        <div *ngIf=\"item.toggle\" class=\"toggle-Wrapper\">\n          <div style=\"display: none;\" class=\"form-group\">\n              <label>Required</label>\n              <i *ngIf=\"item.required\" (click)=\"item.required=false\" class=\"fa fa-toggle-on red\"></i>\n              <i *ngIf=\"!item.required\" (click)=\"item.required=true\" class=\"fa fa-toggle-off\"></i>\n              <span class=\"pull-right ucfirst\">{{item.type}}</span>\n          </div>\n        \n          <div   class=\"form-group\">\n            <label>Width</label>\n            <input class=\"form-control\" type=\"range\" min=\"30\" max=\"100\" [(ngModel)]=\"item.width\" />\n          </div>\n          <div style=\"display: none;\" *ngIf=\"item.regex\" class=\"form-group\">\n            <label>Error text</label>\n            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"item.errorText\" />\n          </div>\n          \n          <!-- number -->\n          <div *ngIf=\"item.type=='number'\" class=\"row\">\n            <div class=\"col-6\">\n                <div class=\"form-group\">\n                    <label>Min</label>\n                    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"item.min\" />\n                </div>\n            </div>\n            <div class=\"col-6\">\n                <div class=\"form-group\">\n                    <label>Max</label>\n                    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"item.max\" />\n                </div>\n            </div>\n          </div>\n\n          <!-- radio || checkbox || autocomplete -->\n          <div *ngIf=\"item.type=='radio'|| item.type=='checkbox' || item.type=='autocomplete'\" >\n              <div class=\"row\">\n                  <div class=\"col-5\">\n                      <div class=\"form-group\">\n                          <label>Label</label>\n                      </div>\n                  </div>\n                  <div class=\"col-5\">\n                      <div class=\"form-group\">\n                          <label>Value</label>\n                      </div>\n                  </div>\n                  <div class=\"col-2\">\n                      <div class=\"form-group\">\n                          <label>Action</label>\n                      </div>\n                  </div>\n                </div>\n              <div *ngFor=\"let i of item.values; let valueIndex=index;\" class=\"row\">\n              <div class=\"col-5\">\n                  <div class=\"form-group\">\n                      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"i.label\" />\n                  </div>\n              </div>\n              <div class=\"col-5\">\n                  <div class=\"form-group\">\n                      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"i.value\" />\n                  </div>\n              </div>\n              <div class=\"col-2\">\n                  <div class=\"form-group\">\n                      <label (click)=\"item.values.splice(valueIndex,1)\">remove</label>\n                  </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-5\">\n                  <div class=\"form-group\">\n                      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"value.label\" />\n                  </div>\n              </div>\n              <div class=\"col-5\">\n                  <div class=\"form-group\">\n                      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"value.value\" />\n                  </div>\n              </div>\n              <div class=\"col-2\">\n                  <div class=\"form-group\">\n                      <label (click)=\"addValue(item.values)\">Add</label>\n                  </div>\n              </div>\n            </div>\n          </div>\n          \n\n\n        \n        </div>\n      </div>\n      <!--optional placeholder element for dropzone-->\n      <!--will be removed from DOM on init-->\n      <div class=\"dndPlaceholder\" dndPlaceholderRef>\n      </div>\n      </section>\n\n    </div>\n  </div>\n</div>\n\n \n\n<div *ngIf=\"report\" class=\"padding20 white-bg\">\n    <div class=\"row\">\n        <div class=\"col-12 btn-cont\">\n            <button (click)=\"report=false\" class=\"btn btn-primary\"><< Back</button>\n        </div>\n        <div class=\"col-12 spacer30\"></div>\n        <!-- if records found -->\n        <div  *ngIf=\"reports?.length > 0\" class=\"col-12\">\n            <div *ngFor=\"let records of reports\" class=\"report-block\">\n                <div *ngFor=\"let record of records.attributes\">\n                    <div *ngIf=\"record.type !='button' && record.type !='paragraph'\" class=\"row\">\n                     <div class=\"col-4\">{{record.label}}</div>\n                        <div class=\"col-8\">{{record.value}}</div>\n                    </div>\n                </div>\n            </div>\n            <!-- <pre>{{reports|json}}</pre> -->\n        </div> \n        <!-- if no records found -->\n        <div *ngIf=\"reports?.length == 0\" class=\"col-12 btn-cont\">\n            No response found\n        </div>\n\n    </div>\n\n</div>\n\n<!-- <pre *ngIf=\"model\">{{model|json}}</pre> -->\n\n\n<div *ngIf=\"model\" \nclass=\"container marginT60  marginB30\" \nstyle=\"max-width:500px;\"\n>\n\n<div class=\"row\"\nstyle=\"padding:30px;\"\n[style.backgroundColor]=\"model.theme.bgColor\"\n[style.color]=\"model.theme.textColor\">\n  <div style=\"display: none;\"  class=\"col-12\">\n    <h2>{{model.name}}</h2>  \n  </div>\n  <div  style=\"display: none;\" class=\"col-12\">\n    <p>{{model.description}}</p>  \n  </div>\n  <div style=\"display: none;\" *ngIf=\"success\" class=\"col-12\">\n    <div class=\"form-group\">\n    <label>Your form has been submitted.</label>\n    </div>\n  </div>\n  <form >\n  <div *ngIf=\"!success\" class=\"col-12\">\n    <div style.width= \"{{item.width +'%'}}\" style=\"display: inline-block;padding:5px\" *ngFor=\"let item of model.attributes\" >\n          \n       <input *ngIf=\"item.type=='text'\" style=\"width: 100%;\" type=\"text\"  class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\" [(ngModel)]=\"item.value\" [required]=\"item.required\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n    \n\n      <div *ngIf=\"item.type=='text1'\">\n        <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n        <input type=\"text\" [style.width]= \"item.width\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\" [(ngModel)]=\"item.value\" [required]=\"item.required\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n      </div>\n      <div *ngIf=\"item.type=='email'\">\n        <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n        <input type=\"email\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\" [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n      </div>\n      <div *ngIf=\"item.type=='phone'\">\n        <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n        <input type=\"email\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\" [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n      </div>\n      <div *ngIf=\"item.type=='number'\">\n          <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n          <input type=\"number\" class=\"form-control\" id=\"{{item.name}}\" min=\"{{item.min}}\" max=\"{{item.max}}\" placeholder=\"{{item.placeholder}}\" [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n        </div>\n      <div *ngIf=\"item.type=='date'\">\n        <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n        <input type=\"date\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\" [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n      </div>\n      <div *ngIf=\"item.type=='datetime-local'\">\n        <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n        <input type=\"datetime-local\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\" [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n      </div>\n      <div *ngIf=\"item.type=='textarea'\">\n          <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n          <textarea class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\" [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n          </textarea>\n        </div>\n      <div *ngIf=\"item.type=='file'\">\n        <label>{{item.label}} (File can't be uploaded right now)</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n        <input type=\"file\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\" [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n        <small class=\"form-text text-danger\">(File can't be uploaded right now)</small>\n      </div>\n      <div *ngIf=\"item.type=='paragraph'\">\n        <p class=\"form-text\">{{item.placeholder}}</p>\n      </div>\n      <div *ngIf=\"item.type=='autocomplete'\">\n        <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n        <select class=\"form-control\" id=\"{{item.name}}\" [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\">\n          <option *ngFor=\"let v of item.values\" [value]=\"v.value\">{{v.label}}</option>  \n        </select>\n        <!-- <small class=\"form-text text-muted\">{{item.description}}</small> -->\n      </div>\n      <div *ngIf=\"item.type=='checkbox'\">\n        <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n        <div *ngFor=\"let v of item.values\" class=\"inline-form-group\">\n            <label class=\"cust-check-bx\">\n              <input type=\"checkbox\" [value]=\"v.value\" name=\"{{item.name}}\" (click)=\"toggleValue(v)\"> {{v.label}}\n              <span class=\"checkmark\"></span>\n            </label>\n          </div>\n      </div>\n      <div *ngIf=\"item.type=='radio'\">\n          <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n          <div *ngFor=\"let v of item.values\" class=\"inline-form-group\">\n              <label class=\"cust-check-bx\">\n                <input type=\"radio\" [value]=\"v.value\" name=\"{{item.name}}\" [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\"> {{v.label}}\n                <span class=\"checkmark\"></span>\n              </label>\n            </div>\n        </div>\n      <div *ngIf=\"item.type=='button'\" class=\"btn-cont\">\n        <input type=\"{{item.subtype}}\" (click)=\"submit()\" value=\"{{item.label}}\" class=\"btn btn-primary\" id=\"{{item.name}}\" >\n      </div>\n    </div>\n\n    <p style=\"display:none\" (click)=\"show=1\" class=\"marginT60 pointer\">Show developer data</p>\n\n  </div>\n  </form>\n</div>\n</div>\n\n<pre *ngIf=\"show==1 && model\">\n    {{model|json}}\n</pre>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'formbuilder';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _edit_app_edit_app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./edit-app/edit-app.component */
    "./src/app/edit-app/edit-app.component.ts");
    /* harmony import */


    var ngx_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-drag-drop */
    "./node_modules/ngx-drag-drop/ngx-drag-drop.js");
    /* harmony import */


    var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @toverux/ngx-sweetalert2 */
    "./node_modules/@toverux/ngx-sweetalert2/@toverux/ngx-sweetalert2.js");

    var appRoutes = [{
      path: '',
      component: _edit_app_edit_app_component__WEBPACK_IMPORTED_MODULE_7__["EditAppComponent"]
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _edit_app_edit_app_component__WEBPACK_IMPORTED_MODULE_7__["EditAppComponent"]],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes), _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_9__["SweetAlert2Module"].forRoot(), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], ngx_drag_drop__WEBPACK_IMPORTED_MODULE_8__["DndModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/edit-app/edit-app.component.css":
  /*!*************************************************!*\
    !*** ./src/app/edit-app/edit-app.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditAppEditAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtYXBwL2VkaXQtYXBwLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/edit-app/edit-app.component.ts":
  /*!************************************************!*\
    !*** ./src/app/edit-app/edit-app.component.ts ***!
    \************************************************/

  /*! exports provided: EditAppComponent */

  /***/
  function srcAppEditAppEditAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditAppComponent", function () {
      return EditAppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);

    var EditAppComponent = /*#__PURE__*/function () {
      function EditAppComponent(route) {
        _classCallCheck(this, EditAppComponent);

        this.route = route;
        this.value = {
          label: "",
          value: ""
        };
        this.success = false;
        this.fieldModels = [{
          "type": "text",
          "name": "Name",
          "icon": "",
          "label": "Text",
          "description": "Enter desc",
          "placeholder": "Enter placeholder",
          "className": "form-control",
          "subtype": "text",
          "regex": "",
          "handle": true,
          "width": "70"
        }];
        this.fieldModels1 = [{
          "type": "text",
          "icon": "fa-font",
          "label": "Text",
          "description": "Enter your name",
          "placeholder": "Enter your name",
          "className": "form-control",
          "subtype": "text",
          "regex": "",
          "handle": true
        }, {
          "type": "email",
          "icon": "fa-envelope",
          "required": true,
          "label": "Email",
          "description": "Enter your email",
          "placeholder": "Enter your email",
          "className": "form-control",
          "subtype": "text",
          "regex": "^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+)\.([a-zA-Z]{2,5})$",
          "errorText": "Please enter a valid email",
          "handle": true
        }, {
          "type": "phone",
          "icon": "fa-phone",
          "label": "Phone",
          "description": "Enter your phone",
          "placeholder": "Enter your phone",
          "className": "form-control",
          "subtype": "text",
          "regex": "^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$",
          "errorText": "Please enter a valid phone number",
          "handle": true
        }, {
          "type": "number",
          "label": "Number",
          "icon": "fa-html5",
          "description": "Age",
          "placeholder": "Enter your age",
          "className": "form-control",
          "value": "20",
          "min": 12,
          "max": 90
        }, {
          "type": "date",
          "icon": "fa-calendar",
          "label": "Date",
          "placeholder": "Date",
          "className": "form-control"
        }, {
          "type": "datetime-local",
          "icon": "fa-calendar",
          "label": "DateTime",
          "placeholder": "Date Time",
          "className": "form-control"
        }, {
          "type": "textarea",
          "icon": "fa-text-width",
          "label": "Textarea"
        }, {
          "type": "paragraph",
          "icon": "fa-paragraph",
          "label": "Paragraph",
          "placeholder": "Type your text to display here only"
        }, {
          "type": "checkbox",
          "required": true,
          "label": "Checkbox",
          "icon": "fa-list",
          "description": "Checkbox",
          "inline": true,
          "values": [{
            "label": "Option 1",
            "value": "option-1"
          }, {
            "label": "Option 2",
            "value": "option-2"
          }]
        }, {
          "type": "radio",
          "icon": "fa-list-ul",
          "label": "Radio",
          "description": "Radio boxes",
          "values": [{
            "label": "Option 1",
            "value": "option-1"
          }, {
            "label": "Option 2",
            "value": "option-2"
          }]
        }, {
          "type": "autocomplete",
          "icon": "fa-bars",
          "label": "Select",
          "description": "Select",
          "placeholder": "Select",
          "className": "form-control",
          "values": [{
            "label": "Option 1",
            "value": "option-1"
          }, {
            "label": "Option 2",
            "value": "option-2"
          }, {
            "label": "Option 3",
            "value": "option-3"
          }]
        }, {
          "type": "file",
          "icon": "fa-file",
          "label": "File Upload",
          "className": "form-control",
          "subtype": "file"
        }, {
          "type": "button",
          "icon": "fa-paper-plane",
          "subtype": "submit",
          "label": "Submit"
        }];
        this.modelFields = [];
        this.model = {
          name: 'App name...',
          description: 'App Description...',
          theme: {
            bgColor: "ffffff",
            textColor: "555555",
            bannerImage: ""
          },
          attributes: this.modelFields
        };
        this.report = false;
        this.reports = [];
      }

      _createClass(EditAppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.route.params.subscribe( params =>{
          //   console.log(params);
          //   this.us.getDataApi('/admin/getFormById',{id:params.id}).subscribe(r=>{
          //     console.log(r);
          //     this.model = r['data'];
          //   });
          // });
          // this.model = this.cs.data; 
          // console.log(this.model.data);
        }
      }, {
        key: "onDragStart",
        value: function onDragStart(event) {
          console.log("drag started", JSON.stringify(event, null, 2));
        }
      }, {
        key: "onDragEnd",
        value: function onDragEnd(event) {
          console.log("drag ended", JSON.stringify(event, null, 2));
        }
      }, {
        key: "onDraggableCopied",
        value: function onDraggableCopied(event) {
          console.log("draggable copied", JSON.stringify(event, null, 2));
        }
      }, {
        key: "onDraggableLinked",
        value: function onDraggableLinked(event) {
          console.log("draggable linked", JSON.stringify(event, null, 2));
        }
      }, {
        key: "onDragged",
        value: function onDragged(item, list, effect) {
          if (effect === "move") {
            var index = list.indexOf(item);
            list.splice(index, 1);
          }
        }
      }, {
        key: "onDragCanceled",
        value: function onDragCanceled(event) {
          console.log("drag cancelled", JSON.stringify(event, null, 2));
        }
      }, {
        key: "onDragover",
        value: function onDragover(event) {
          console.log("dragover", JSON.stringify(event, null, 2));
        }
      }, {
        key: "onDrop",
        value: function onDrop(event, list) {
          if (list && (event.dropEffect === "copy" || event.dropEffect === "move")) {
            if (event.dropEffect === "copy") event.data.name = event.data.type + '-' + new Date().getTime();
            var index = event.index;

            if (typeof index === "undefined") {
              index = list.length;
            }

            list.splice(index, 0, event.data);
          }
        }
      }, {
        key: "addValue",
        value: function addValue(values) {
          values.push(this.value);
          this.value = {
            label: "",
            value: ""
          };
        }
      }, {
        key: "removeField",
        value: function removeField(i) {
          var _this = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
            title: 'Are you sure?',
            text: "Do you want to remove this field?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#00B96F',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, remove!'
          }).then(function (result) {
            if (result.value) {
              _this.model.attributes.splice(i, 1);
            }
          });
        }
      }, {
        key: "updateForm",
        value: function updateForm() {
          var input = new FormData();
          input.append('id', this.model._id);
          input.append('name', this.model.name);
          input.append('description', this.model.description);
          input.append('bannerImage', this.model.theme.bannerImage);
          input.append('bgColor', this.model.theme.bgColor);
          input.append('textColor', this.model.theme.textColor);
          input.append('attributes', JSON.stringify(this.model.attributes)); // this.us.putDataApi('/admin/updateForm',input).subscribe(r=>{
          //   console.log(r);
          //   swal('Success','App updated successfully','success');
          // });
        }
      }, {
        key: "initReport",
        value: function initReport() {
          this.report = true;
          var input = {
            id: this.model._id
          }; // this.us.getDataApi('/admin/allFilledForms',input).subscribe(r=>{
          //   this.reports = r.data;
          //   console.log('reports',this.reports);
          //   this.reports.map(records=>{
          //     return records.attributes.map(record=>{
          //       if(record.type=='checkbox'){
          //         record.value = record.values.filter(r=>r.selected).map(i=>i.value).join(',');
          //       }
          //     })
          //   });
          // });
        }
      }, {
        key: "toggleValue",
        value: function toggleValue(item) {
          item.selected = !item.selected;
        }
      }, {
        key: "submit",
        value: function submit() {
          var valid = true;
          var validationArray = JSON.parse(JSON.stringify(this.model.attributes));
          validationArray.reverse().forEach(function (field) {
            console.log(field.label + '=>' + field.required + "=>" + field.value);

            if (field.required && !field.value && field.type != 'checkbox') {
              sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('Error', 'Please enter ' + field.label, 'error');
              valid = false;
              return false;
            }

            if (field.required && field.regex) {
              var regex = new RegExp(field.regex);

              if (regex.test(field.value) == false) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('Error', field.errorText, 'error');
                valid = false;
                return false;
              }
            }

            if (field.required && field.type == 'checkbox') {
              if (field.values.filter(function (r) {
                return r.selected;
              }).length == 0) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('Error', 'Please enterrr ' + field.label, 'error');
                valid = false;
                return false;
              }
            }
          });

          if (!valid) {
            return false;
          }

          console.log('Save', this.model);
          var input = new FormData();
          input.append('formId', this.model._id);
          input.append('attributes', JSON.stringify(this.model.attributes)); // this.us.postDataApi('/user/formFill',input).subscribe(r=>{
          //   console.log(r);
          //   swal('Success','You have contact sucessfully','success');
          //   this.success = true;
          // },error=>{
          //   swal('Error',error.message,'error');
          // });
        }
      }]);

      return EditAppComponent;
    }();

    EditAppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    EditAppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-app',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-app/edit-app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-app.component.css */
      "./src/app/edit-app/edit-app.component.css"))["default"]]
    })], EditAppComponent);
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
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
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
    /*! D:\MyStuff\Expert\POC-Form-Mask\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map