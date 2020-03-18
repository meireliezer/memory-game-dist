function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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


    __webpack_exports__["default"] = "\r\n<app-game1 [scoreTableTpl1]=\"scoreTable1\" [scoreTableTpl2]=\"scoreTable2\" >\r\n\r\n    <div class=\"name\">Meir Eliezer</div>\r\n    <div class=\"person-title\">The King</div>\r\n    <div>test</div>\r\n    <div>{{title}}</div>\r\n    <!-- content projection example -->\r\n    <app-timer class=\"timer1\" (tick)=\"tick1($event)\"></app-timer>\r\n\r\n    <!-- tempate as content projection -->\r\n    <ng-template class=\"templateAsContentProjection\" \r\n                 #templateAsContentProjection \r\n                 let-nameTpl=\"name\"> \r\n        Hi {{nameTpl}}\r\n    </ng-template>\r\n\r\n</app-game1>\r\n\r\n\r\n<!-- Template injection 1 (score table)-->\r\n<ng-template #scoreTable1 let-tplBetTime=\"bestTime\" let-tplMissed=\"missed\">\r\n    <div class=\"scoreTable\" (click)=\"clickFromTemplate()\">\r\n        <div class=\"best-time\">Best Time: {{tplBetTime}}</div>\r\n        <div class=\"missed\">Missed: {{tplMissed}}</div>\r\n    </div>    \r\n</ng-template>\r\n\r\n<!-- Template injection 2 (score table)-->\r\n<ng-template #scoreTable2 let-tplBetTime=\"bestTime\" let-tplMissed=\"missed\" >\r\n    <div class=\"scoreTable2\">\r\n        <table>\r\n            <thead>\r\n                <th>Best Time</th>\r\n                <th>Missed</th>\r\n            </thead>\r\n            <tbody>\r\n                <tr>\r\n                    <td>{{tplBetTime}}</td>\r\n                    <td>{{tplMissed}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>    \r\n</ng-template>\r\n\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/games/game1/game1.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/games/game1/game1.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGamesGame1Game1ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content\" [ngClass]=\"{match: match, no_match:noMatch}\">\n    <div class=\"title\">Select Pairs</div>\n    <div class=\"game-content\" >\n        <div class=\"items\">        \n            <div *ngFor=\"let pair of (pairs$ | async) as pairs\" class=\"item item--a\" [ngClass]=\"{selected: isItemASelected(pair.id), no_visible:pair.match}\" #itemA (click)=\"handleA(pair)\">{{pair.a}}</div>                \n        </div>\n        <div class=\"items\">\n            <div *ngFor=\"let pair of (pairs$ | async | random) as pairs\" class=\"item item--b\" [ngClass]=\"{selected: isItemBSelected(pair.id), no_visible:pair.match}\" #itemB (click)=\"handleB(pair)\">{{pair.b}}</div>\n        </div>\n    </div>\n    <!-- Content Projection:\n            The entier content of this line (ng-content) will be replaced by the contenet\n            nothing that will be add to this line will be add to the DOM.\n            both timer2 class and tick2 event will not happend \n            [input]='val'\n    --> \n    <ng-content class=\"timer2\" select=\"'app-timer'\" (tick)=\"tick2($event)\"></ng-content>\n   \n    <!--  template injection  as content Projection with @ContentChild -->\n<!--    <ng-container   [ngTemplateOutlet]=\"templateAsContentProjectionTplRef\"\n                    [ngTemplateOutletContext]=\"{name:'Meir'}\" >\n    </ng-container>        \n-->\n\n    <!-- Tempalte Injection by input\n    -->\n    <ng-container *ngIf=\"tableScore%2 === 0\">\n        <ng-container   [ngTemplateOutlet]=\"scoreTableTpl1\"\n                        [ngTemplateOutletContext]=\"{bestTime:bestTime, missed: missed}\" >\n        </ng-container>        \n    </ng-container>\n    <ng-container *ngIf=\"tableScore%2 === 1\">\n        <ng-container   [ngTemplateOutlet]=\"scoreTableTpl2\"\n                        [ngTemplateOutletContext]=\"{bestTime:bestTime, missed: missed}\" >\n        </ng-container>        \n    </ng-container>\n    <div class=\"toggle-score\" (click)=\"toggleScore()\"></div>\n\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/share/timer/timer/timer.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/share/timer/timer/timer.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShareTimerTimerTimerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"elapsed\">Elapsed: {{elapsed}} sec  </div>\n\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

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
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
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
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
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
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
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


    __webpack_exports__["default"] = ".scoreTable {\r\n    display: -webkit-box;\r\n    display: flex;    \r\n}\r\n\r\n.best-time, .missed {\r\n    font-size: smaller;\r\n}\r\n\r\n.best-time {\r\n    margin-right: 1em;\r\n}\r\n\r\n.scoreTable2 table, .scoreTable2 th, .scoreTable2 td {\r\n    border: 1px solid black;    \r\n  }\r\n\r\n.scoreTable2 td{\r\n    text-align: center;\r\n}\r\n\r\n.scoreTable2 th, .scoreTable2 td{     \r\n    font-size: smaller;    \r\n    font-weight: 300;\r\n    padding: 0.2em 0.6em;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBSUE7SUFDSSx1QkFBdUI7RUFDekI7O0FBRUY7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjb3JlVGFibGUge1xyXG4gICAgZGlzcGxheTogZmxleDsgICAgXHJcbn1cclxuXHJcbi5iZXN0LXRpbWUsIC5taXNzZWQge1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG59XHJcblxyXG4uYmVzdC10aW1lIHtcclxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG59XHJcblxyXG5cclxuXHJcbi5zY29yZVRhYmxlMiB0YWJsZSwgLnNjb3JlVGFibGUyIHRoLCAuc2NvcmVUYWJsZTIgdGQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICAgIFxyXG4gIH1cclxuXHJcbi5zY29yZVRhYmxlMiB0ZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc2NvcmVUYWJsZTIgdGgsIC5zY29yZVRhYmxlMiB0ZHsgICAgIFxyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyOyAgICBcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBwYWRkaW5nOiAwLjJlbSAwLjZlbTtcclxufVxyXG5cclxuIl19 */";
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

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);
      }

      _createClass(AppComponent, [{
        key: "tick1",
        value: function tick1(tick) {//console.log(`[app] tick from app-timer`, tick);
        }
      }, {
        key: "clickFromTemplate",
        value: function clickFromTemplate() {
          console.log('[app] clickFromTemplate');
        }
      }, {
        key: "mouseEvent",
        value: function mouseEvent(event) {
          console.log('[app] mouseEvent from testDirective', event);
        }
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
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


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _games_game1_game1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./games/game1/game1.component */
    "./src/app/games/game1/game1.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _share_random_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./share/random.pipe */
    "./src/app/share/random.pipe.ts");
    /* harmony import */


    var _share_timer_timer_timer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./share/timer/timer/timer.component */
    "./src/app/share/timer/timer/timer.component.ts");
    /* harmony import */


    var _share_test_test_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./share/test/test.directive */
    "./src/app/share/test/test.directive.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _games_game1_game1_component__WEBPACK_IMPORTED_MODULE_4__["Game1Component"], _share_random_pipe__WEBPACK_IMPORTED_MODULE_6__["RandomPipe"], _share_timer_timer_timer_component__WEBPACK_IMPORTED_MODULE_7__["TimerComponent"], _share_test_test_directive__WEBPACK_IMPORTED_MODULE_8__["TestDirective"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/common/data.service.ts":
  /*!****************************************!*\
    !*** ./src/app/common/data.service.ts ***!
    \****************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppCommonDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var DataService =
    /*#__PURE__*/
    function () {
      function DataService() {
        _classCallCheck(this, DataService);

        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._level = 0;
        this.next();
      }

      _createClass(DataService, [{
        key: "generateData2",
        value: function generateData2(level) {
          var _data = [];
          var multi = level < 3 ? 10 : 10 * (level - 2);

          var _loop = function _loop(_idx) {
            var a = Math.trunc(Math.random() * multi);
            var b = Math.trunc(Math.random() * multi);
            var op = Math.trunc(Math.random() * (level + 1)) % 3;
            var newPair = void 0;

            if (op === 0) {
              newPair = {
                id: _idx,
                a: "".concat(a, "+").concat(b),
                b: "".concat(a + b),
                match: false
              };
            } else if (op === 1) {
              newPair = {
                id: _idx,
                a: "".concat(a, "-").concat(b),
                b: "".concat(a - b),
                match: false
              };
            } else if (op === 2) {
              newPair = {
                id: _idx,
                a: "".concat(a, "*").concat(b),
                b: "".concat(a * b),
                match: false
              };
            } else {
              console.log("EEEEEEE");
            } // Result alrady exist, retry


            if (_data.find(function (pair) {
              return pair.b === newPair.b;
            })) {
              --_idx;
            } else {
              _data.push(newPair);
            }

            idx = _idx;
          };

          for (var idx = 0; idx < 5; ++idx) {
            _loop(idx);
          }

          this.subject.next([].concat(_data));
        }
      }, {
        key: "next",
        value: function next() {
          this.generateData2(this._level);
          this._level++;
        }
      }, {
        key: "observable$",
        get: function get() {
          return this.subject.asObservable();
        }
      }, {
        key: "level",
        get: function get() {
          return this._level + 1;
        }
      }]);

      return DataService;
    }();

    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DataService);
    /***/
  },

  /***/
  "./src/app/games/game1/game1.component.css":
  /*!*************************************************!*\
    !*** ./src/app/games/game1/game1.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGamesGame1Game1ComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".content {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.title{\r\n    text-align: center;\r\n    font-size: 3rem;\r\n}\r\n\r\n.game-content {   \r\n    -webkit-transition: background-color ease-in-out 100ms;   \r\n    transition: background-color ease-in-out 100ms;    \r\n    display: -webkit-box;    \r\n    display: flex;\r\n}\r\n\r\n.items {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n}\r\n\r\n.match {\r\n    background-color: rgba(100, 237, 173, 0.411);\r\n}\r\n\r\n.no_match {\r\n    background-color:rgba(220, 20, 60, 0.63);\r\n}\r\n\r\n.item{\r\n    display: inline-block;\r\n    padding: 0.5em 1.5em;\r\n    border-radius: 10px;\r\n    margin-top: 0.5em;\r\n    cursor: pointer;\r\n    opacity: 1;\r\n    -webkit-transition:     background-color ease-in-out 250ms,\r\n                    opacity  ease-in-out 750ms;\r\n    transition:     background-color ease-in-out 250ms,\r\n                    opacity  ease-in-out 750ms;\r\n}\r\n\r\n.item--a{\r\n    background-color: aqua;\r\n    margin-right: 1em;\r\n\r\n}\r\n\r\n.item--b{\r\n    background-color: bisque;\r\n   \r\n}\r\n\r\n.item:hover {\r\n    background-color: rgba(202, 15, 15, 0.589);\r\n\r\n}\r\n\r\n.selected {\r\n    background-color: rgba(255, 0, 119, 0.308);\r\n    box-shadow: 2px 2px 2px black;\r\n}\r\n\r\n.no_visible {\r\n    opacity: 0;\r\n    pointer-events: none;\r\n}\r\n\r\n.elapsed {\r\n    margin: 0.5em 1.5em;\r\n}\r\n\r\n.toggle-score {\r\n    background-color: gray;\r\n    width: 10px;\r\n    height: 10px;\r\n    margin-top: 0.5em;\r\n    border-radius: 50%;\r\n    cursor:pointer\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMvZ2FtZTEvZ2FtZTEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLHlCQUFtQjtZQUFuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNEQUE4QztJQUE5Qyw4Q0FBOEM7SUFDOUMsb0JBQWE7SUFBYixhQUFhO0FBQ2pCOztBQUdBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7QUFDMUI7O0FBR0E7SUFDSSw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFVBQVU7SUFDVjs4Q0FDMEM7SUFEMUM7OENBQzBDO0FBQzlDOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjs7QUFFckI7O0FBRUE7SUFDSSx3QkFBd0I7O0FBRTVCOztBQUVBO0lBQ0ksMENBQTBDOztBQUU5Qzs7QUFFQTtJQUNJLDBDQUEwQztJQUMxQyw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZ2FtZXMvZ2FtZTEvZ2FtZTEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG59XHJcblxyXG4uZ2FtZS1jb250ZW50IHsgICBcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgZWFzZS1pbi1vdXQgMTAwbXM7ICAgIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuXHJcbi5pdGVtcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuXHJcbi5tYXRjaCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMCwgMjM3LCAxNzMsIDAuNDExKTtcclxufVxyXG5cclxuLm5vX21hdGNoIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyMjAsIDIwLCA2MCwgMC42Myk7XHJcbn1cclxuXHJcbi5pdGVte1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMC41ZW0gMS41ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMC41ZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNpdGlvbjogICAgIGJhY2tncm91bmQtY29sb3IgZWFzZS1pbi1vdXQgMjUwbXMsXHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eSAgZWFzZS1pbi1vdXQgNzUwbXM7XHJcbn1cclxuXHJcbi5pdGVtLS1he1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcclxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG5cclxufVxyXG5cclxuLml0ZW0tLWJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XHJcbiAgIFxyXG59XHJcblxyXG4uaXRlbTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMiwgMTUsIDE1LCAwLjU4OSk7XHJcblxyXG59XHJcblxyXG4uc2VsZWN0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDExOSwgMC4zMDgpO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbi5ub192aXNpYmxlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLmVsYXBzZWQge1xyXG4gICAgbWFyZ2luOiAwLjVlbSAxLjVlbTtcclxufVxyXG5cclxuLnRvZ2dsZS1zY29yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGN1cnNvcjpwb2ludGVyXHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/games/game1/game1.component.ts":
  /*!************************************************!*\
    !*** ./src/app/games/game1/game1.component.ts ***!
    \************************************************/

  /*! exports provided: Game1Component */

  /***/
  function srcAppGamesGame1Game1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Game1Component", function () {
      return Game1Component;
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


    var src_app_common_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/common/data.service */
    "./src/app/common/data.service.ts");
    /* harmony import */


    var src_app_share_timer_timer_timer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/share/timer/timer/timer.component */
    "./src/app/share/timer/timer/timer.component.ts");

    var Game1Component =
    /*#__PURE__*/
    function () {
      function Game1Component(dataService) {
        _classCallCheck(this, Game1Component);

        this.dataService = dataService;
        this._aId = -1;
        this._bId = -1;
        this._match = false;
        this._noMatch = false;
        this._matchsCnt = 0;
        this.bestTime = 0;
        this.missed = 0;
        this.context = {
          bestTime: this.bestTime,
          missed: this.missed
        };
        this.tableScore = 0;
      }

      _createClass(Game1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.pairs$ = this.dataService.observable$;
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._tickSubscription.unsubscribe();
        }
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          // ---------------------------------------------------------------------
          // Manually Register to event from content projection
          // ---------------------------------------------------------------------
          this._tickSubscription = this.appTimer.tickEvent$.subscribe(function (tick) {//console.log(`[game1 (subscription to EventEmtiter)] tick from content`, tick); 
          }); // ---------------------------------------------------------------------
          // API of the content projection
          // ---------------------------------------------------------------------

          this.appTimer.start(true);
        }
      }, {
        key: "clickFromTemplate",
        value: function clickFromTemplate() {
          console.log('[game1] clickFromTemplate');
        }
      }, {
        key: "toggleScore",
        value: function toggleScore() {
          ++this.tableScore;
        }
      }, {
        key: "handleA",
        value: function handleA(pair) {
          this.handleClick(pair);
        }
      }, {
        key: "handleB",
        value: function handleB(pair) {
          this.handleClick(undefined, pair);
        }
      }, {
        key: "isItemASelected",
        value: function isItemASelected(id) {
          return this._aId === id;
        }
      }, {
        key: "isItemBSelected",
        value: function isItemBSelected(id) {
          return this._bId === id;
        }
      }, {
        key: "handleClick",
        value: function handleClick() {
          var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
          var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

          if (a) {
            if (this._aId === -1 || this._aId !== a.id) {
              this._aId = a.id;
            } else {
              this._aId = -1;
            }
          }

          if (b) {
            if (this._bId === -1 || this._bId !== b.id) {
              this._bId = b.id;
            } else {
              this._bId = -1;
            }
          }

          this.checkMatch(a || b);
        }
      }, {
        key: "checkMatch",
        value: function checkMatch(pair) {
          var _this = this;

          // Match
          if (this._aId !== -1 && this._aId === this._bId) {
            pair.match = true;
            this._match = true;
            setTimeout(function () {
              return _this._match = false;
            }, 250);
            this._aId = -1;
            this._bId = -1;
            this._matchsCnt++;

            if (this._matchsCnt === 5) {
              this.appTimer.stop();

              if (this.bestTime === 0) {
                this.bestTime = this.appTimer.elapsed;
              }

              this.bestTime = Math.min(this.bestTime, this.appTimer.elapsed);
              setTimeout(function (_) {
                _this.dataService.next();

                _this._matchsCnt = 0;

                _this.appTimer.start(true);
              }, 3000);
            } // Missed

          } else if (this._aId !== -1 && this._bId !== -1 && this._aId !== this._bId) {
            this._noMatch = true;
            setTimeout(function () {
              return _this._noMatch = false;
            }, 250);
            this._aId = -1;
            this._bId = -1;
            this.missed++;
          }
        }
      }, {
        key: "tick2",
        value: function tick2(tick) {
          console.log("[timer] tick from content", tick); // We don't get it
        }
      }, {
        key: "match",
        get: function get() {
          return this._match;
        }
      }, {
        key: "noMatch",
        get: function get() {
          return this._noMatch;
        }
      }]);

      return Game1Component;
    }();

    Game1Component.ctorParameters = function () {
      return [{
        type: src_app_common_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('scoreTableTpl1')], Game1Component.prototype, "scoreTableTpl1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('scoreTableTpl2')], Game1Component.prototype, "scoreTableTpl2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])('templateAsContentProjection', {
      static: false
    })], Game1Component.prototype, "templateAsContentProjectionTplRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(src_app_share_timer_timer_timer_component__WEBPACK_IMPORTED_MODULE_3__["TimerComponent"], {
      static: false
    })], Game1Component.prototype, "appTimer", void 0);
    Game1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-game1',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./game1.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/games/game1/game1.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./game1.component.css */
      "./src/app/games/game1/game1.component.css")).default]
    })], Game1Component);
    /***/
  },

  /***/
  "./src/app/share/random.pipe.ts":
  /*!**************************************!*\
    !*** ./src/app/share/random.pipe.ts ***!
    \**************************************/

  /*! exports provided: RandomPipe */

  /***/
  function srcAppShareRandomPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RandomPipe", function () {
      return RandomPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /*
     * Raise the value exponentially
     * Takes an exponent argument that defaults to 1.
     * Usage:
     *   value | exponentialStrength:exponent
     * Example:
     *   {{ 2 | exponentialStrength:10 }}
     *   formats to: 1024
    */


    var RandomPipe =
    /*#__PURE__*/
    function () {
      function RandomPipe() {
        _classCallCheck(this, RandomPipe);
      }

      _createClass(RandomPipe, [{
        key: "transform",
        value: function transform(value, exponent) {
          //console.log('random (before): ', value);
          value = _toConsumableArray(value);
          value = this.shuffle(value); //console.log('pipe (after): ', value);

          return value;
        }
      }, {
        key: "shuffle",
        value: function shuffle(arra1) {
          var ctr = arra1.length;
          var temp;
          var index; // While there are elements in the array

          while (ctr > 0) {
            // Pick a random index
            index = Math.floor(Math.random() * ctr); // Decrease ctr by 1

            ctr--; // And swap the last element with it

            temp = arra1[ctr];
            arra1[ctr] = arra1[index];
            arra1[index] = temp;
          }

          return arra1;
        }
      }]);

      return RandomPipe;
    }();

    RandomPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'random'
    })], RandomPipe);
    /***/
  },

  /***/
  "./src/app/share/test/test.directive.ts":
  /*!**********************************************!*\
    !*** ./src/app/share/test/test.directive.ts ***!
    \**********************************************/

  /*! exports provided: TestDirective */

  /***/
  function srcAppShareTestTestDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestDirective", function () {
      return TestDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TestDirective =
    /*#__PURE__*/
    function () {
      function TestDirective(el
      /*reference to the host DOM element*/
      ) {
        _classCallCheck(this, TestDirective);

        this.el = el;
        this.myContent = 'myContent'; // Send data to where component that the html belong to (the host)
        // Will not work on ng-template

        this.mouseEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        console.log('appTest', el);
      } // Listen to host events 


      _createClass(TestDirective, [{
        key: "onMouseEnter",
        value: function onMouseEnter(event) {
          this.highlight('yellow');
          this.mouseEventEmitter.emit(event);
        }
      }, {
        key: "onMouseLeave",
        value: function onMouseLeave(event) {
          this.highlight(null);
          this.mouseEventEmitter.emit(event);
        }
      }, {
        key: "highlight",
        value: function highlight(color) {
          this.el.nativeElement.style.backgroundColor = color;
        }
      }]);

      return TestDirective;
    }();

    TestDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        /*reference to the host DOM element*/

      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('mouseEvent')], TestDirective.prototype, "mouseEventEmitter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter', ['$event'])], TestDirective.prototype, "onMouseEnter", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave'['$event'])], TestDirective.prototype, "onMouseLeave", null);
    TestDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appTest]'
    })], TestDirective);
    /***/
  },

  /***/
  "./src/app/share/timer/timer/timer.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/share/timer/timer/timer.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppShareTimerTimerTimerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".elapsed {    \r\n    margin-top: 0.5em;\r\n    margin-bottom: 1em;\r\n    border: 1px solid gray;\r\n    padding: 0.5em 1.5em;\r\n    border-radius: 20px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmUvdGltZXIvdGltZXIvdGltZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZS90aW1lci90aW1lci90aW1lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVsYXBzZWQgeyAgICBcclxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgIHBhZGRpbmc6IDAuNWVtIDEuNWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/share/timer/timer/timer.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/share/timer/timer/timer.component.ts ***!
    \******************************************************/

  /*! exports provided: TimerComponent */

  /***/
  function srcAppShareTimerTimerTimerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimerComponent", function () {
      return TimerComponent;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _test_test_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../test/test.directive */
    "./src/app/share/test/test.directive.ts");

    var TimerComponent =
    /*#__PURE__*/
    function () {
      function TimerComponent() {
        _classCallCheck(this, TimerComponent);

        this.tickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // Simple Angular event register in HTML

        this._elapsed = 0;
        this._tickSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
      }

      _createClass(TimerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          console.log('[timer] ngAfterViewInit:testDirective', this.testDirective);
        }
      }, {
        key: "start",
        value: function start(reset) {
          var _this2 = this;

          if (!this._setIntervalHandler) {
            if (reset) {
              this.reset();
            }

            this._setIntervalHandler = setInterval(function () {
              ++_this2._elapsed;

              _this2.setElapsed(_this2._elapsed);
            }, 1000);
          }
        }
      }, {
        key: "stop",
        value: function stop() {
          if (this._setIntervalHandler) {
            clearInterval(this._setIntervalHandler);
            this._setIntervalHandler = null;
          }
        }
      }, {
        key: "reset",
        value: function reset() {
          this.setElapsed(0);
        }
      }, {
        key: "setElapsed",
        value: function setElapsed(val) {
          this._elapsed = val;
          this.tickEvent.next(val); // Simple Angular event 

          this._tickSubject.next(val); // for compoent host to get the event

        }
      }, {
        key: "elapsed",
        get: function get() {
          return this._elapsed;
        }
      }, {
        key: "tick$",
        get: function get() {
          return this._tickSubject.asObservable(); // for compoent host to get the event
        }
      }, {
        key: "tickEvent$",
        get: function get() {
          return this.tickEvent.asObservable(); // Communication from timer to the component hosting the ng-content
        }
      }]);

      return TimerComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('tick')], TimerComponent.prototype, "tickEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_test_test_directive__WEBPACK_IMPORTED_MODULE_3__["TestDirective"], {
      static: false
    })], TimerComponent.prototype, "testDirective", void 0);
    TimerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-timer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./timer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/share/timer/timer/timer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./timer.component.css */
      "./src/app/share/timer/timer/timer.component.css")).default]
    })], TimerComponent);
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

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
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
    /*! C:\Meir\Interview\porjects\card-matching-game\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map