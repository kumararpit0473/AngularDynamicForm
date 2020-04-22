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


    __webpack_exports__["default"] = "<header>\n    <div class=\"container\">\n        <h1>POC Mask Designer</h1>\n    </div>\n</header>\n<div class=\"container\">\n    <router-outlet></router-outlet>\n";
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


    __webpack_exports__["default"] = "<div *ngIf=\"model\" class=\"padding20 white-bg\"> \n  <div class=\"row\">\n    <div class=\"col-4\">   \n      <!-- Left Section Of Draggable Index Fields -->\n      <div class=\"fields\" *ngFor=\"let item of fieldModels\">\n        <div class=\"field pointer shadow-bg\" [dndDraggable]=\"item\"\n        [dndEffectAllowed]=\"'copy'\" \n      >         \n          <h5>{{item.indexFieldName}}</h5>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-8\">    \n      \n        <div>\n       <label>Apply Column Mode</label>\n      <input style=\"margin-left: 25px;display: inline;\" type=\"checkbox\"   [(ngModel)]=\"columnmode\" />\n    </div>\n    <div>\n      <label>Number of Columns</label>\n      <input class=\"form-control\" style=\"width:100px;display: inline-block;margin-left: 10px;\" type=\"text\" [(ngModel)]=\"column\">\n    </div>\n      \n      <!--a dropzone-->\n      <!--to allow dropping content that is not [dndDraggable] set dndAllowExternal to true-->\n      <section dndDropzone  (dndDrop)=\"onDrop($event,model.attributes)\" class=\"dndDropArea\"  [ngClass]=\"{'empty':1}\"\n      [style.backgroundColor]=\"model.theme.bgColor\"\n      [style.color]=\"model.theme.textColor\"> \n      <div class=\"dottedText\" *ngIf=\" model.attributes.length==0\" style=\"font-style:initial;\">Drag Here</div>\n\n      <div    class=\"field\" *ngFor=\"let item of model.attributes;let i= index;\" \n       \n        (dndMoved)=\"onDragged(item, model.attributes, 'move')\"\n        [dndEffectAllowed]=\"'all'\" \n        [dndDraggable]=\"item\">\n        <div class=\"row form-group\">\n          <div class=\"col-1\"><i class=\"fa fa-ellipsis-v dndHandle\" dndHandle></i></div>\n          <div class=\"col-7\">\n            <!-- <i [ngClass]=\"item.icon\" class=\"fa pull-left\"></i>\n            <h5>{{item.label}}\n            <span *ngIf=\"item.required\" class=\"red\">*</span></h5> -->\n                  <div *ngIf=\"item.type=='text'\">\n                    <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                    <input type=\"text\" [style.width]= \"item.width\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\" >\n                  </div>\n                 \n                \n                 \n                  <div *ngIf=\"item.type=='number'\">\n                      <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                      <input type=\"number\" class=\"form-control\" id=\"{{item.name}}\" min=\"{{item.min}}\" max=\"{{item.max}}\" placeholder=\"{{item.placeholder}}\" >\n                    </div>\n                  <div *ngIf=\"item.type=='date'\">\n                    <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                    <input type=\"date\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\" >\n                  </div>\n                 \n                  <div *ngIf=\"item.type=='select'\">\n                    <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                    <select class=\"form-control\" id=\"{{item.name}}\" >\n                      <option *ngFor=\"let v of item.values\" [value]=\"v.value\">{{v.label}}</option>  \n                    </select>\n                    <!-- <small class=\"form-text text-muted\">{{item.description}}</small> -->\n                  </div>\n                  <section *ngIf=\"item.type=='group'\" dndDropzone  (dndDrop)=\"onDrop1($event,item.childs)\" class=\"dndDropArea\"  [ngClass]=\"{'group':1}\"\n                  [style.backgroundColor]=\"model.theme.bgColor\"\n                  [style.color]=\"model.theme.textColor\"> \n                  <div class=\"dottedText\" *ngIf=\"item.childs.length==0\" style=\"font-style:initial;\">Drag Here</div>\n\n                  <div    class=\"field\" *ngFor=\"let item1 of item.childs;let i= index;\" \n       \n      \n        [dndEffectAllowed]=\"'all'\" \n        [dndDraggable]=\"item\">\n        <div class=\"row form-group\">\n          <div class=\"col-1\"><i class=\"fa fa-ellipsis-v dndHandle\" dndHandle></i></div>\n          <div class=\"col-7\">\n            <!-- <i [ngClass]=\"item.icon\" class=\"fa pull-left\"></i>\n            <h5>{{item.label}}\n            <span *ngIf=\"item.required\" class=\"red\">*</span></h5> -->\n                  <div *ngIf=\"item1.type=='text'\">\n                    <label>{{item1.label}}</label> <label *ngIf=\"item1.required\" class=\"text-danger\">*</label>\n                    <input type=\"text\" [style.width]= \"item1.width\" class=\"form-control\" id=\"{{item1.name}}\" placeholder=\"{{item1.placeholder}}\" >\n                  </div>\n                 \n                \n                 \n                  <div *ngIf=\"item1.type=='number'\">\n                      <label>{{item1.label}}</label> <label *ngIf=\"item1.required\" class=\"text-danger\">*</label>\n                      <input type=\"number\" class=\"form-control\" id=\"{{item1.name}}\" min=\"{{item1.min}}\" max=\"{{item1.max}}\" placeholder=\"{{item1.placeholder}}\" >\n                    </div>\n                  <div *ngIf=\"item1.type=='date'\">\n                    <label>{{item1.label}}</label> <label *ngIf=\"item1.required\" class=\"text-danger\">*</label>\n                    <input type=\"date\" class=\"form-control\" id=\"{{item1.name}}\" placeholder=\"{{item1.placeholder}}\" >\n                  </div>\n                 \n                  <div *ngIf=\"item1.type=='select'\">\n                    <label>{{item1.label}}</label> <label *ngIf=\"item1.required\" class=\"text-danger\">*</label>\n                    <select class=\"form-control\" id=\"{{item.name}}\" >\n                      <option *ngFor=\"let v of item1.values\" [value]=\"v.value\">{{v.label}}</option>  \n                    </select>\n                    <!-- <small class=\"form-text text-muted\">{{item.description}}</small> -->\n                  </div>\n          </div>\n        </div>\n                  </div>\n                  </section>\n\n                \n          </div>\n          <div class=\"col-4\">\n            <i *ngIf=\"item.toggle\" (click)=\"item.toggle=false\" class=\"fa fa-chevron-up pull-right\"></i>\n            <i *ngIf=\"!item.toggle\" (click)=\"item.toggle=true\" class=\"fa fa-chevron-down pull-right\"></i>\n            <i style=\"display: none;\" (click)=\"removeField(i)\" class=\"fa fa-trash pull-right\"></i>\n          </div>\n        </div>\n        <div *ngIf=\"item.toggle\" style=\"position: relative;\" class=\"toggle-Wrapper\">\n          <div style=\"display: none;\" class=\"form-group\">\n              <label>Required</label>\n              <i *ngIf=\"item.required\" (click)=\"item.required=false\" class=\"fa fa-toggle-on red\"></i>\n              <i *ngIf=\"!item.required\" (click)=\"item.required=true\" class=\"fa fa-toggle-off\"></i>\n              <span class=\"pull-right ucfirst\">{{item.type}}</span>\n          </div>\n        \n          <div   class=\"form-group\">\n            <label>Width</label>\n            <input class=\"form-control\" type=\"range\"   min=\"10\" max=\"100\" [(ngModel)]=\"item.width\" />\n           \n            <output  id=\"output\">{{item.width}}</output>%\n\n            \n          </div>\n          <div   class=\"form-group\">\n            <label>Full Width Container</label>\n            \n\n            <input style=\"margin-left: 10px;\" type=\"checkbox\" [(ngModel)]=\"item.newLine\"  />\n          </div>\n          <div style=\"display: none;\" *ngIf=\"item.regex\" class=\"form-group\">\n            <label>Error text</label>\n            <input style=\"margin-left: 10px;\" type=\"text\" [(ngModel)]=\"item.errorText\" />\n          </div>\n          \n          <!-- number -->\n          <div *ngIf=\"item.type=='number'\" class=\"row\">\n            <div class=\"col-6\">\n                <div class=\"form-group\">\n                    <label>Min</label>\n                    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"item.min\" />\n                </div>\n            </div>\n            <div class=\"col-6\">\n                <div class=\"form-group\">\n                    <label>Max</label>\n                    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"item.max\" />\n                </div>\n            </div>\n          </div>\n\n          <!-- radio || checkbox || select -->\n          <div *ngIf=\"item.type=='radio'|| item.type=='checkbox' || item.type=='select'\" >\n              <div class=\"row\">\n                  <div class=\"col-5\">\n                      <div class=\"form-group\">\n                          <label>Label</label>\n                      </div>\n                  </div>\n                  <div class=\"col-5\">\n                      <div class=\"form-group\">\n                          <label>Value</label>\n                      </div>\n                  </div>\n                  <div class=\"col-2\">\n                      <div class=\"form-group\">\n                          <label>Action</label>\n                      </div>\n                  </div>\n                </div>\n              <div *ngFor=\"let i of item.values; let valueIndex=index;\" class=\"row\">\n              <div class=\"col-5\">\n                  <div class=\"form-group\">\n                      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"i.label\" />\n                  </div>\n              </div>\n              <div class=\"col-5\">\n                  <div class=\"form-group\">\n                      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"i.value\" />\n                  </div>\n              </div>\n              <div class=\"col-2\">\n                  <div class=\"form-group\">\n                      <label (click)=\"item.values.splice(valueIndex,1)\">remove</label>\n                  </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-5\">\n                  <div class=\"form-group\">\n                      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"value.label\" />\n                  </div>\n              </div>\n              <div class=\"col-5\">\n                  <div class=\"form-group\">\n                      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"value.value\" />\n                  </div>\n              </div>\n              <div class=\"col-2\">\n                  <div class=\"form-group\">\n                      <label (click)=\"addValue(item.values)\">Add</label>\n                  </div>\n              </div>\n            </div>\n          </div>\n          \n\n\n        \n        </div>\n      </div>\n      <!--optional placeholder element for dropzone-->\n      <!--will be removed from DOM on init-->\n      <div class=\"dndPlaceholder\" dndPlaceholderRef>\n      </div>\n      </section>\n\n    </div>\n  </div>\n</div>\n\n \n\n\n\n<!-- Preview & Json -->\n\n\n<div *ngIf=\"model\" class=\"container marginT60  marginB30 box1\" >\n  <h6>Preview</h6>\n<hr>\n  <form >  \n    <ng-container *ngFor=\"let item of model.attributes\">      \n      <span *ngIf=\"item.newLine\" class=\"br\"></span>  \n      <div *ngIf=\"item.type=='text'\" style.width= \"{{item.width +'%'}}\"  style=\"padding:5px;display:inline-block;\"  >\n          \n        <input   style=\"width: 100%;\" type=\"text\"  class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\" [(ngModel)]=\"item.value\" [required]=\"item.required\" [ngModelOptions]=\"{standalone: true}\" select=\"off\">\n      </div>\n\n      <div *ngIf=\"item.type=='select'\" style=\"padding:5px;display:inline-block;\"  style.width= \"{{item.width +'%'}}\">\n        <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n        <select matInput  style=\"width: 100%;\" class=\"form-control\" id=\"{{item.name}}\" [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\">\n          <option *ngFor=\"let v of item.values\" [value]=\"v.value\">{{v.label}}</option>  \n        </select>\n        <!-- <small class=\"form-text text-muted\">{{item.description}}</small> -->\n      </div>\n\n      <div *ngIf=\"item.type=='date'\" style=\"padding:5px; display:inline-block;\"  style.width= \"{{item.width +'%'}}\">\n        <input   style=\"width: 100%;\" type=\"date\"  class=\"form-control\" select=\"off\">\n        <!-- <small class=\"form-text text-muted\">{{item.description}}</small> -->\n      </div>\n      <div *ngIf=\"item.type=='group'\" style=\"display:inline-block;border: 1px dashed grey;\"  style.width= \"{{item.width +'%'}}\">\n      <ng-container  *ngFor=\"let item1 of item.childs\"> \n        <div *ngIf=\"item1.type=='text'\" style.width= \"{{item1.width +'%'}}\"  style=\"padding:5px;display:inline-block;\"  >\n          \n          <input   style=\"width: 100%;\" type=\"text\"  class=\"form-control\" id=\"{{item1.name}}\" placeholder=\"{{item.placeholder}}\" [(ngModel)]=\"item1.value\" [required]=\"item.required\" [ngModelOptions]=\"{standalone: true}\" select=\"off\">\n        </div>\n  \n        <div *ngIf=\"item1.type=='select'\" style=\"padding:5px;display:inline-block;\"  style.width= \"{{item1.width +'%'}}\">\n          <label>{{item1.label}}</label> \n          <select matInput  style=\"width: 100%;\" class=\"form-control\" id=\"{{item1.name}}\" [(ngModel)]=\"item1.value\" [ngModelOptions]=\"{standalone: true}\">\n            <option *ngFor=\"let v of item1.values\" [value]=\"v.value\">{{v.label}}</option>  \n          </select>\n          <!-- <small class=\"form-text text-muted\">{{item.description}}</small> -->\n        </div>\n  \n        <div *ngIf=\"item1.type=='date'\" style=\"padding:5px;display:inline-block;\"  style.width= \"{{item1.width +'%'}}\">\n          <input   style=\"width: 100%;\" type=\"date\"  class=\"form-control\" select=\"off\">\n          <!-- <small class=\"form-text text-muted\">{{item.description}}</small> -->\n        </div>\n      </ng-container>\n      </div>\n      <span *ngIf=\"item.newLine\" class=\"br\"></span>  \n    </ng-container>\n    \n  </form>\n</div>\n\n<div class=\"container marginT60  marginB30 box2\">\n  <h6>JSON </h6>\n<hr>\n<pre *ngIf=\"model && model.attributes && model.attributes.length>0\">\n    {{model.attributes|json}}\n</pre>\n</div>";
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
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./material.module */
    "./src/app/material.module.ts");

    var appRoutes = [{
      path: '',
      component: _edit_app_edit_app_component__WEBPACK_IMPORTED_MODULE_7__["EditAppComponent"]
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _edit_app_edit_app_component__WEBPACK_IMPORTED_MODULE_7__["EditAppComponent"]],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes), _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_9__["SweetAlert2Module"].forRoot(), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], ngx_drag_drop__WEBPACK_IMPORTED_MODULE_8__["DndModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"]],
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


    __webpack_exports__["default"] = ".br { \r\n    display: block; \r\n    margin-bottom: 0em; \r\n} \r\n.box1\r\n{\r\n    min-height: 100px;\r\n    float: right;\r\n    padding-bottom: 50px;\r\n   \r\n    border:1px dashed grey;\r\n} \r\n.box2\r\n{\r\n    min-height: 100px;\r\n    float: left;\r\n    width: 400px;\r\n   \r\n    border:1px dashed black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1hcHAvZWRpdC1hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFDQTs7SUFFSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG9CQUFvQjs7SUFFcEIsc0JBQXNCO0FBQzFCO0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZOztJQUVaLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtYXBwL2VkaXQtYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnIgeyBcclxuICAgIGRpc3BsYXk6IGJsb2NrOyBcclxuICAgIG1hcmdpbi1ib3R0b206IDBlbTsgXHJcbn0gXHJcbi5ib3gxXHJcbntcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgIFxyXG4gICAgYm9yZGVyOjFweCBkYXNoZWQgZ3JleTtcclxufVxyXG5cclxuLmJveDJcclxue1xyXG4gICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgXHJcbiAgICBib3JkZXI6MXB4IGRhc2hlZCBibGFjaztcclxufVxyXG4iXX0= */";
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

    var EditAppComponent = /*#__PURE__*/function () {
      function EditAppComponent(route) {
        _classCallCheck(this, EditAppComponent);

        this.route = route;
        this.columnmode = false;
        this.column = 3;
        this.value = {
          label: "",
          value: ""
        };
        this.success = false;
        this.fieldModels = [{
          "type": "text",
          "name": "Name",
          "label": "Text",
          "indexFieldName": "TextControl",
          "indexField": 1,
          "placeholder": "Enter placeholder",
          "className": "form-control",
          "width": "100",
          "newLine": true
        }, {
          "type": "select",
          "name": "Name2",
          "indexField": 1,
          "indexFieldName": "DropdownControl",
          "width": "100",
          "label": "Select",
          "description": "Select",
          "placeholder": "Select",
          "newLine": true,
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
          "type": "date",
          "icon": "fa-calendar",
          "indexFieldName": "DateControl",
          "indexField": 1,
          "label": "Date",
          "placeholder": "Date",
          "className": "form-control",
          "width": "100",
          "newLine": true
        }, {
          "type": "group",
          "indexFieldName": "Group",
          "indexField": 1,
          "label": "Group",
          "placeholder": "Date",
          "className": "form-control",
          "width": "100",
          "newLine": true,
          "childs": []
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
      }

      _createClass(EditAppComponent, [{
        key: "onDragged",
        value: function onDragged(item, list, effect) {
          if (effect === "move") {
            var index = list.indexOf(item);
            list.splice(index, 1);
          }
        }
      }, {
        key: "onDrop",
        value: function onDrop(event, list) {
          if (list && (event.dropEffect === "copy" || event.dropEffect === "move")) {
            if (event.dropEffect === "copy") event.data.name = event.data.type + '-' + new Date().getTime();
            event.data.indexField = event.index + 1;

            if (this.columnmode) {
              if (this.column && event.dropEffect === "copy") event.data.width = 100 / this.column;
              event.data.newLine = false;
            }

            var index = event.index;

            if (typeof index === "undefined") {
              index = list.length;
            }

            list.splice(index, 0, event.data);
          }
        }
      }, {
        key: "onDrop1",
        value: function onDrop1(event, list) {
          if (list && (event.dropEffect === "copy" || event.dropEffect === "move")) {
            if (event.dropEffect === "copy") event.data.name = event.data.type + '-' + new Date().getTime();
            event.data.indexField = event.index + 1;

            if (this.columnmode) {
              if (this.column && event.dropEffect === "copy") event.data.width = 100 / this.column;
              event.data.newLine = false;
            }

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
        key: "toggleValue",
        value: function toggleValue(item) {
          item.selected = !item.selected;
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
  "./src/app/material.module.ts":
  /*!************************************!*\
    !*** ./src/app/material.module.ts ***!
    \************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
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


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/esm2015/drag-drop.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/esm2015/stepper.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/esm2015/table.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/esm2015/tree.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/esm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/esm2015/badge.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/esm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/esm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/esm2015/chips.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/esm2015/stepper.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/esm2015/divider.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/esm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/esm2015/slider.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/esm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/esm2015/tree.js");

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]],
      providers: [{
        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MAT_LABEL_GLOBAL_OPTIONS"],
        useValue: {
          "float": 'never'
        }
      }]
    })], MaterialModule);
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


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
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
    /*! D:\POCs\POC-Form-Mask\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map