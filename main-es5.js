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


    __webpack_exports__["default"] = "<!-- -->\r\n  <app-openning-screen #openning></app-openning-screen>\r\n\r\n<app-menu></app-menu>\r\n\r\n\r\n<style>\r\n\r\n</style>\r\n<header class=\"header\" [ngClass]=\"getBackgroundColor()\">\r\n  <div class=\"header__section header__section--left\">\r\n    <div class=\"level\">Level:<div class=\"value\">{{level}}</div></div>\r\n    <div class=\"score\">Score: <div class=\"value\">{{totalScore}}</div></div>    \r\n  </div>\r\n  <div class=\"header__section header__section--center\">\r\n    <div class=\"current_score\">Timer: <div class=\"value\">{{current}}</div></div>\r\n    <div class=\"lives\">&#x2764;:<div class=\"value\">{{lives}}</div></div>  \r\n  \r\n  </div>\r\n  <div class=\"header__section header__section--right header__section_menu \" (click)=\"onMenu()\">\r\n    <div class=\"menu\"></div>\r\n  </div>\r\n</header>\r\n\r\n\r\n\r\n<main [ngClass]=\"{'disabled': (menuService.open$ | async)} \">    \r\n  <ng-container #mainTopScreen></ng-container>\r\n  \r\n  <ng-container *ngFor=\"let data of getData(); index as idx \">  \r\n    <app-card class=\"app-card\" \r\n              [data]=\"data\"\r\n              [ngStyle]=\"getCardLevelDimension()\"\r\n              [cardIndex] = \"idx\"\r\n              [disableBackground]=\"isBackgroundDisabled()\"\r\n              [discover]=\"isDiscoverCardOnInit()\"\r\n              (cardClicked)=onCardClicked($event)\r\n              >\r\n    </app-card>\r\n  </ng-container>  \r\n</main>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/count-down/count-down.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/count-down/count-down.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainCountDownCountDownComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"main-page\" (click)=\"onRun()\">\n    <div class=\"title\">Memorize</div>\n    <div class=\"counter\">{{data}}</div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/game-complete/game-complete.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/game-complete/game-complete.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainGameCompleteGameCompleteComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-page\">\n \n    <div class=\"main-page-content\">\n        <div class=\"title\">Game Complete</div>\n        <div class=\"game-actions\">\n            <div class=\"game-action\" (click)=\"retry()\">Try Again</div>            \n            <div class=\"game-action\" (click)=\"restart()\">Restart</div>\n            <div class=\"game-action\" (click)=\"home()\">Home</div>                \n        </div>    \n    </div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/game-over/game-over.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/game-over/game-over.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainGameOverGameOverComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-page\">\n \n    <div class=\"main-page-content\">\n        <div class=\"title\">Game Over</div>\n        <div class=\"game-actions\">\n            <div class=\"game-action\" (click)=\"retry()\">Try Again</div>\n            <div class=\"game-action\" (click)=\"continue()\" *ngIf=\"data\">Continue (just for fun)</div>            \n            <div class=\"game-action\" (click)=\"restart()\">Restart</div>\n            <div class=\"game-action\" (click)=\"home()\">Home</div>                \n        </div>    \n    </div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/level-failed/level-failed.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/level-failed/level-failed.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainLevelFailedLevelFailedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-page\">\n \n    <div class=\"main-page-content\">\n        <div class=\"title\">Failed</div>\n        <div class=\"game-actions\">\n            <div class=\"game-action\" (click)=\"retry()\">Try Again</div>\n            <div class=\"game-action\" (click)=\"continue()\" *ngIf=\"data\">Continue (just for fun)</div>            \n            <div class=\"game-action\" (click)=\"restart()\">Restart</div>\n            <div class=\"game-action\" (click)=\"home()\">Home</div>                \n        </div>    \n    </div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/memory/card/card/card.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/memory/card/card/card.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMemoryCardCardCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\">\n    <div class=\"card__internal\"        \n        (click)=\"onClick()\">\n        <div class=\"card__internal-content\"\n            [style.backgroundColor]=\"displayBackground()\"         \n    >\n            <div class=\"card__internal--symbol\" [innerHTML]=\"dispaySymbol()\">                    \n            </div>\n            \n        </div>        \n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMenuMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"menu-page\" [ngClass]=\"{'open': (menuService.open$|async)}\">\n    <div class=\"menu-page--content\">\n        <div class=\"menu-page--header\">\n            <div class=\"menu-page--title\">Menu <small> (Version: 1.1) </small></div>\n            <div class=\"menu-page--close\" (click)=\"onClose()\">X</div>\n        </div>\n        <div class=\"menu-page--section\">\n            <div class=\"menu-section--title\">Settings:</div>\n\n            <div class=\"setting-items\">\n                <div class=\"setting-item\">\n                    <div class=\"setting-item--title \">Sound:</div>\n                    <div class=\"setting-item--btn\" \n                            [ngClass]=\"{'crossed': (isSoundDisabled() || isIOS), 'disabled': isIOS }\"\n                            (click)=\"toggleSound()\" >♫</div>\n                </div>\n                <div class=\"setting-item\">\n                    <div class=\"setting-item--title\">Vibration:</div>\n                    <div class=\"setting-item--btn crossed\"\n                            [ngClass]=\"{'crossed': (isVibrateDisabled() || isIOS), 'disabled': isIOS }\"\n                            (click)=\"toggleVibrate()\">↭</div>\n                </div>\n                <div class=\"setting-item\">\n                    <div class=\"setting-item--title\">Backgound:</div>\n                    <div class=\"setting-item--btn \" \n                            [ngClass]=\"{'crossed': isBackgroundDisabled()}\"\n                            (click)=\"onBackgroundToggle()\">bg</div>\n                </div>\n            </div>\n        </div>\n        <div class=\"menu-page--section\">\n            <div class=\"menu-section--title\">Results:</div>\n            <div class=\"mini-cards\" >\n                <div class=\"mini-card\" \n                    *ngFor=\"let level of memoryGameManagerService.getGameMetadat()\" \n                    [ngClass]=\"{'mini-card--disabled':(level.level >memoryGameManagerService.getUserMaxLevel())}\"\n                    (click)=\"onSelectLevel(level)\">\n                    <div class=\"mini-card--level\">Level: {{level.level}}</div>\n                    <div class=\"mini-card--paris\">cards: 2x{{level.cards/2}}</div>\n                    <div class=\"mini-card--score\">\n                        <div *ngIf=\"memoryGameManagerService.getLevelHistory(level.level) as levelData; else elseScore \">\n                                score: {{levelData.score}}\n                        </div>                        \n                        <ng-template #elseScore>\n                            score: -\n                        </ng-template>\n                </div>\n            </div>\n        </div>            \n    </div>\n    <div class=\"menu-page--section\">\n        <div class=\"menu-section--title\">Go To:</div>\n        <div class=\"menu-btn\" (click)=\"onHome()\">Home</div>\n        <div class=\"menu-btn\" (click)=\"onRestart()\">Restart</div>\n    </div>\n    \n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/openning-screen/openning-screen.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/openning-screen/openning-screen.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOpenningScreenOpenningScreenComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"openning-screen\" *ngIf=\"openningScreenService.display$ | async\">\n\n    <div class=\"os-title\">Memory Match</div>\n    <div class=\"os-cards\">\n        <div class=\"os-card\" (click)=\"go(0)\">\n            <div>Game</div>\n            <div>1</div>\n        </div>\n        <div class=\"os-card\" (click)=\"go(1)\">\n            <div>Game</div>\n            <div>2</div>\n        </div> \n\n    </div>\n</div>\n";
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
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
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

        while (_) try {
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

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
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
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
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
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

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
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
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

    const routes = [];
    let AppRoutingModule = class AppRoutingModule {};
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
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
    /* harmony import */


    var _core_memory_game_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./core/memory-game-manager.service */
    "./src/app/core/memory-game-manager.service.ts");
    /* harmony import */


    var _core_memory_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./core/memory-data.service */
    "./src/app/core/memory-data.service.ts");
    /* harmony import */


    var _memory_card_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./memory/card/card/card.component */
    "./src/app/memory/card/card/card.component.ts");
    /* harmony import */


    var _core_windows_sound_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./core/windows/sound.service */
    "./src/app/core/windows/sound.service.ts");
    /* harmony import */


    var _core_windows_vibrate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./core/windows/vibrate.service */
    "./src/app/core/windows/vibrate.service.ts");
    /* harmony import */


    var _core_windows_full_screen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./core/windows/full-screen.service */
    "./src/app/core/windows/full-screen.service.ts");
    /* harmony import */


    var _core_windows_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./core/windows/utils */
    "./src/app/core/windows/utils.ts");
    /* harmony import */


    var _main_level_failed_level_failed_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./main/level-failed/level-failed.component */
    "./src/app/main/level-failed/level-failed.component.ts");
    /* harmony import */


    var _openning_screen_openning_screen_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./openning-screen/openning-screen.service */
    "./src/app/openning-screen/openning-screen.service.ts");
    /* harmony import */


    var _main_game_over_game_over_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./main/game-over/game-over.component */
    "./src/app/main/game-over/game-over.component.ts");
    /* harmony import */


    var _main_game_complete_game_complete_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./main/game-complete/game-complete.component */
    "./src/app/main/game-complete/game-complete.component.ts");
    /* harmony import */


    var _main_count_down_count_down_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./main/count-down/count-down.component */
    "./src/app/main/count-down/count-down.component.ts");
    /* harmony import */


    var _menu_menu_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./menu/menu.service */
    "./src/app/menu/menu.service.ts");

    var GAME_STATE;

    (function (GAME_STATE) {
      GAME_STATE[GAME_STATE["INIT"] = 0] = "INIT";
      GAME_STATE[GAME_STATE["RUN"] = 1] = "RUN";
      GAME_STATE[GAME_STATE["COMPLETE"] = 2] = "COMPLETE";
      GAME_STATE[GAME_STATE["FAILED"] = 3] = "FAILED";
      GAME_STATE[GAME_STATE["CONTINUE"] = 4] = "CONTINUE";
      GAME_STATE[GAME_STATE["FAILED_COMPLETE"] = 5] = "FAILED_COMPLETE";
    })(GAME_STATE || (GAME_STATE = {}));

    let AppComponent = class AppComponent {
      constructor(memoryGameManagerService, memoryDataService, soundService, vibrateService, fullscreenService, cfr, injector, openningScreenService, menuService) {
        this.memoryGameManagerService = memoryGameManagerService;
        this.memoryDataService = memoryDataService;
        this.soundService = soundService;
        this.vibrateService = vibrateService;
        this.fullscreenService = fullscreenService;
        this.cfr = cfr;
        this.injector = injector;
        this.openningScreenService = openningScreenService;
        this.menuService = menuService;
      }

      ngOnInit() {
        this.init();
        this.isIOS = Object(_core_windows_utils__WEBPACK_IMPORTED_MODULE_8__["iOS"])();
        this._gameChangedSubscription = this.memoryGameManagerService.gameChanged$.subscribe(game => {
          this.init();
        });
        this._levelSubscrption = this.memoryGameManagerService.levelChanged$.subscribe(level => {
          this.initLevel();
        });
        this._menuActionSubscription = this.menuService.action$.subscribe(command => {
          switch (command) {
            case 'HOME':
              this.removeMainTopScreen();
              setTimeout(() => {
                this.openningScreenService.display();
              }, 750);
              break;

            case 'RESTART':
              this.removeMainTopScreen();
              this.onReset();
              break;

            case 'CLOSE':
              if (this._isPause && !(this._gameState === GAME_STATE.COMPLETE || this._gameState === GAME_STATE.FAILED_COMPLETE || this._gameState === GAME_STATE.FAILED)) {
                this.mainInterval();
              }

              this._isPause = false;
              break;
          }
        });
      }

      ngOnDestroy() {
        this.fullscreenService.exitFullscreen();

        this._levelSubscrption.unsubscribe();

        this._gameChangedSubscription.unsubscribe();

        this._menuActionSubscription.unsubscribe();
      }

      get level() {
        return this.memoryGameManagerService.getCurrentLevel();
      }

      get totalScore() {
        return this.memoryGameManagerService.getTotalScore();
      }

      isDiscoverCardOnInit() {
        return this.memoryGameManagerService.getGame() === _core_memory_game_manager_service__WEBPACK_IMPORTED_MODULE_2__["GAME"].REVERSE;
      }

      onNextLevel() {
        this.setLevel(true);
      }

      onPrevLevel() {
        this.setLevel(false);
      }

      getCardLevelDimension() {
        let style = {
          width: this._levelMetadata.width,
          height: this._levelMetadata.height
        };
        return style;
      }

      getData() {
        return this._levelMetadata.data;
      }

      isMainDisabled() {}

      onMenu() {
        this._isPause = true;
        this.clearMainInterval();
        this.menuService.open(); //this.openningScreenService.display();  
      } // reduce lifes


      onCardClicked(cardClicked) {
        if (this._gameState === GAME_STATE.INIT) {
          this.onRun();
        }

        this.soundService.beepCard(cardClicked.data.id); // -----------------------------------------
        // First pair Click
        // -----------------------------------------

        if (!this._firstCardClicked) {
          this._firstCardClicked = cardClicked;
          return;
        } // -----------------------------------------
        // Second pair click
        // -----------------------------------------
        // -----------------------------------------
        //        Same cards
        // -----------------------------------------


        if (this._firstCardClicked.data.id === cardClicked.data.id) {
          ++this._totalPairs;

          this._cardComponents.forEach(cardComponent => {
            if (cardComponent.data.id === cardClicked.data.id) {
              cardComponent.pair();
            }
          });

          this._firstCardClicked = null; // Complete level      

          if (this.isComplete()) {
            // Stop timer
            this.clearMainInterval(); // Game Complete state
            // If it was part of "continue state", then end here (no next level)
            // TODO:: title ("Succeed, but failed")

            if (this._gameState === GAME_STATE.CONTINUE || this.lives === 0) {
              let comp = this.lives === 0 ? _main_game_over_game_over_component__WEBPACK_IMPORTED_MODULE_11__["GameOverComponent"] : _main_level_failed_level_failed_component__WEBPACK_IMPORTED_MODULE_9__["LevelFailedComponent"];
              this.displayMainTopComponent(comp, false);
              return;
            } // Complete on time


            this._gameState = GAME_STATE.COMPLETE;
            this.vibrateService.complete();
            this.soundService.complete(); // Store data

            this.memoryGameManagerService.completeLevel(this.isFailedStatus(), 0, this.current); // Finish the game

            if (this.level === this.memoryGameManagerService.getEndLevel()) {
              this.displayMainTopComponent(_main_game_complete_game_complete_component__WEBPACK_IMPORTED_MODULE_12__["GameCompleteComponent"], null);
              return;
            } // Change to next level


            if (this.lives > 0) {
              setTimeout(() => {
                this.setLevel(true); // TODO:: check if game finished
              }, 1000);
            }
          }
        } // -----------------------------------------
        // Diffrent cards
        // -----------------------------------------
        else {
            this.vibrateService.pairMissMatch();
            this.soundService.pairMissMatch();
            setTimeout(() => {
              this._cardComponents.forEach(cardComponent => {
                if (cardComponent.data.id === cardClicked.data.id || cardComponent.data.id === this._firstCardClicked.data.id) {
                  cardComponent.reset();
                }
              });

              this._firstCardClicked = null;

              if (this.memoryGameManagerService.getGame() == _core_memory_game_manager_service__WEBPACK_IMPORTED_MODULE_2__["GAME"].REVERSE) {
                this.discoverAll();
                this.clearMainInterval();
                this.changeLives(-1);
                let comp = this.lives === 0 ? _main_game_over_game_over_component__WEBPACK_IMPORTED_MODULE_11__["GameOverComponent"] : _main_level_failed_level_failed_component__WEBPACK_IMPORTED_MODULE_9__["LevelFailedComponent"];
                this.displayMainTopComponent(comp, false);
              }
            }, 250);
          }
      } // --------------------------------------------------------
      // Run Button (The Timer)
      // --------------------------------------------------------


      onRun() {
        // Refresh
        if (this._gameState !== GAME_STATE.INIT) {
          this.setLevel();
          return;
        }

        this._gameState = GAME_STATE.RUN;
        this.mainInterval();
      }

      mainInterval() {
        /*    if(this._intervalHandler){
              debugger;
            }
        */
        this.clearMainInterval();
        this._intervalHandler = setInterval(() => {
          // Score
          if (this.current > 0) {
            --this.current;
          } // ----------------------------------------------
          // Time out
          // ----------------------------------------------


          if (this.current === 0) {
            // End interval
            this.clearMainInterval();
            this._gameState = GAME_STATE.FAILED;
            this.soundService.failed(); // Reduce life only        

            this.changeLives(-1); // Life End: - Game Over, alow contine        

            let isRegularGame = this.memoryGameManagerService.getGame() === _core_memory_game_manager_service__WEBPACK_IMPORTED_MODULE_2__["GAME"].REGULAR;

            let comp = this.lives === 0 ? _main_game_over_game_over_component__WEBPACK_IMPORTED_MODULE_11__["GameOverComponent"] : _main_level_failed_level_failed_component__WEBPACK_IMPORTED_MODULE_9__["LevelFailedComponent"];
            this.displayMainTopComponent(comp, isRegularGame);
          }
        }, 1000);
      }

      onReset() {
        this.memoryGameManagerService.reset();
        this.init();
      }

      getBackgroundColor() {
        let gameStateColor = '';

        if (this.current < this._levelMetadata.time * 0.75) {
          gameStateColor = 'game-warning';
        }

        if (this.current < this._levelMetadata.time * 0.50) {
          gameStateColor = 'game-alert';
        }

        if (this.current === 0) {
          gameStateColor = 'game-failed';
        }

        if (this._gameState === GAME_STATE.COMPLETE) {
          gameStateColor = '';
        } // 'game-warning'
        // 'game-alert'
        // 'game-failed'


        return gameStateColor;
      }

      init() {
        this.lives = this.memoryGameManagerService.getLives();
        this.setLevel();
      } //next:  true-next level, 
      //       false-prev level,
      //       undefine refresh current level


      setLevel(next) {
        if (next === true) {
          this.memoryGameManagerService.nextLevel();
        } else if (next === false) {
          this.memoryGameManagerService.prevLevel();
        }

        this.initLevel();
      }

      initLevel() {
        this.removeMainTopScreen();
        this._firstCardClicked = null;
        this._levelMetadata = this.memoryGameManagerService.getLevelMetadata();
        this._levelMetadata.data = this.memoryDataService.getRandomPairs(this._levelMetadata.cards / 2);
        this._totalPairs = 0;
        this._gameState = GAME_STATE.INIT;
        this.current = this._levelMetadata.score;
        this._isPause = false;
        this.clearMainInterval();

        if (this.memoryGameManagerService.getGame() === _core_memory_game_manager_service__WEBPACK_IMPORTED_MODULE_2__["GAME"].REVERSE) {
          this.displayMainTopComponent(_main_count_down_count_down_component__WEBPACK_IMPORTED_MODULE_13__["CountDownComponent"], this._levelMetadata.showTimer);
        }
      }

      changeLives(deltaLives) {
        // Don't change life if this is not the max level
        if (this.level !== this.memoryGameManagerService.getUserMaxLevel()) {
          return;
        }

        this.lives += deltaLives;

        if (this.lives < 0) {
          this.lives = 0;
        } else {
          this.memoryGameManagerService.changeLive(deltaLives);
        }
      }

      isFailedStatus() {
        return this._gameState === GAME_STATE.FAILED || this._gameState === GAME_STATE.FAILED_COMPLETE || this._gameState === GAME_STATE.CONTINUE;
      }

      isComplete() {
        return this._totalPairs === this._levelMetadata.cards / 2;
      }

      isBackgroundDisabled() {
        return !this.memoryGameManagerService.getBackground();
      }

      discoverAll() {
        this._cardComponents.forEach(card => {
          card.discover();
        });
      }

      hideAll() {
        this._cardComponents.forEach(card => {
          card.hide();
        });
      }

      clearMainInterval() {
        clearInterval(this._intervalHandler);
        this._intervalHandler = null;
      }

      displayMainTopComponent(comp, data) {
        let componentFactory = this.cfr.resolveComponentFactory(comp);
        let component = componentFactory.create(this.injector);
        let componentInstace = component.instance;
        componentInstace.data = data;
        this._mainTopScreenSubscription = componentInstace.output.subscribe(action => {
          console.log(action);
          this.removeMainTopScreen();

          switch (action.action) {
            case 'RETRY':
              this.onRun();
              break;

            case 'CONTINUE':
              this._gameState = GAME_STATE.CONTINUE;
              break;

            case 'RESTART':
              this.onReset();
              break;

            case 'HOME':
              this.openningScreenService.display();
              break;

            case 'REVERSE_RUN':
              this.hideAll();
              this.onRun();
              break;
          }
        });
        this.mainTopScreen.insert(component.hostView);
      }

      removeMainTopScreen() {
        if (this._mainTopScreenSubscription) {
          this._mainTopScreenSubscription.unsubscribe();

          this._mainTopScreenSubscription = null;
        }

        this.mainTopScreen.remove();
      }

    };

    AppComponent.ctorParameters = () => [{
      type: _core_memory_game_manager_service__WEBPACK_IMPORTED_MODULE_2__["MemoryGameManagerService"]
    }, {
      type: _core_memory_data_service__WEBPACK_IMPORTED_MODULE_3__["MemoryDataService"]
    }, {
      type: _core_windows_sound_service__WEBPACK_IMPORTED_MODULE_5__["SoundService"]
    }, {
      type: _core_windows_vibrate_service__WEBPACK_IMPORTED_MODULE_6__["VibrateService"]
    }, {
      type: _core_windows_full_screen_service__WEBPACK_IMPORTED_MODULE_7__["FullScreenService"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
    }, {
      type: _openning_screen_openning_screen_service__WEBPACK_IMPORTED_MODULE_10__["OpenningScreenService"]
    }, {
      type: _menu_menu_service__WEBPACK_IMPORTED_MODULE_14__["MenuService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_memory_card_card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"])], AppComponent.prototype, "_cardComponents", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mainTopScreen', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
      static: true
    })], AppComponent.prototype, "mainTopScreen", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
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


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _memory_card_card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./memory/card/card/card.component */
    "./src/app/memory/card/card/card.component.ts");
    /* harmony import */


    var _openning_screen_openning_screen_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./openning-screen/openning-screen.component */
    "./src/app/openning-screen/openning-screen.component.ts");
    /* harmony import */


    var _main_level_failed_level_failed_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./main/level-failed/level-failed.component */
    "./src/app/main/level-failed/level-failed.component.ts");
    /* harmony import */


    var _main_game_over_game_over_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./main/game-over/game-over.component */
    "./src/app/main/game-over/game-over.component.ts");
    /* harmony import */


    var _main_game_complete_game_complete_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./main/game-complete/game-complete.component */
    "./src/app/main/game-complete/game-complete.component.ts");
    /* harmony import */


    var _main_count_down_count_down_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./main/count-down/count-down.component */
    "./src/app/main/count-down/count-down.component.ts");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/menu/menu.component.ts");

    let AppModule = class AppModule {};
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _memory_card_card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"], _openning_screen_openning_screen_component__WEBPACK_IMPORTED_MODULE_6__["OpenningScreenComponent"], _main_level_failed_level_failed_component__WEBPACK_IMPORTED_MODULE_7__["LevelFailedComponent"], _main_game_over_game_over_component__WEBPACK_IMPORTED_MODULE_8__["GameOverComponent"], _main_game_complete_game_complete_component__WEBPACK_IMPORTED_MODULE_9__["GameCompleteComponent"], _main_count_down_count_down_component__WEBPACK_IMPORTED_MODULE_10__["CountDownComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_11__["MenuComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], //ServiceWorkerModule.register('./memory-game-dist/ngsw-worker.js', { enabled: environment.production }),
      _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      entryComponents: [_main_level_failed_level_failed_component__WEBPACK_IMPORTED_MODULE_7__["LevelFailedComponent"], _main_game_over_game_over_component__WEBPACK_IMPORTED_MODULE_8__["GameOverComponent"], _main_game_complete_game_complete_component__WEBPACK_IMPORTED_MODULE_9__["GameCompleteComponent"], _main_count_down_count_down_component__WEBPACK_IMPORTED_MODULE_10__["CountDownComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/core/game-metadata.const.ts":
  /*!*********************************************!*\
    !*** ./src/app/core/game-metadata.const.ts ***!
    \*********************************************/

  /*! exports provided: GAME_METADATA */

  /***/
  function srcAppCoreGameMetadataConstTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GAME_METADATA", function () {
      return GAME_METADATA;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    ;
    const GAME_METADATA = [{
      level: 1,
      cards: 4,
      time: 4 * 2,
      score: 4 * 2,
      width: '50%',
      height: '50%',
      showTimer: 6
    }, {
      level: 2,
      cards: 6,
      time: 6 * 2,
      score: 6 * 2,
      width: '50%',
      height: '33%',
      showTimer: 10
    }, {
      level: 3,
      cards: 8,
      time: 8 * 2,
      score: 8 * 2,
      width: '50%',
      height: '25%',
      showTimer: 15
    }, {
      level: 4,
      cards: 10,
      time: 10 * 2,
      score: 10 * 2,
      width: '50%',
      height: '20%',
      showTimer: 25
    }, {
      level: 5,
      cards: 12,
      time: 12 * 2,
      score: 12 * 2,
      width: '25%',
      height: '33%',
      showTimer: 35
    }, {
      level: 6,
      cards: 14,
      time: 14 * 2,
      score: 14 * 2,
      width: '25%',
      height: '25%',
      showTimer: 45
    }, {
      level: 7,
      cards: 16,
      time: 16 * 2,
      score: 16 * 2,
      width: '25%',
      height: '25%',
      showTimer: 45
    }, {
      level: 8,
      cards: 18,
      time: 18 * 2,
      score: 18 * 2,
      width: '25%',
      height: '20%',
      showTimer: 60
    }, {
      level: 9,
      cards: 20,
      time: 20 * 2,
      score: 20 * 2,
      width: '25%',
      height: '20%',
      showTimer: 60
    }, {
      level: 10,
      cards: 22,
      time: 22 * 2,
      score: 22 * 2,
      width: '20%',
      height: '20%',
      showTimer: 60
    }, {
      level: 11,
      cards: 24,
      time: 24 * 2,
      score: 24 * 2,
      width: '20%',
      height: '20%',
      showTimer: 60
    }];
    /***/
  },

  /***/
  "./src/app/core/memory-data.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/core/memory-data.service.ts ***!
    \*********************************************/

  /*! exports provided: MemoryDataService */

  /***/
  function srcAppCoreMemoryDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MemoryDataService", function () {
      return MemoryDataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let MemoryDataService = class MemoryDataService {
      constructor() {
        this._dataList = [{
          color: '#222222',
          symbol: '&#9728;'
        }, {
          color: '#FF0000',
          symbol: '&#9730;'
        }, {
          color: '#ff9933',
          symbol: '&#9734;'
        }, {
          color: '#FFFF00',
          symbol: '&#9742;'
        }, {
          color: '#33ff33',
          symbol: '&#9762;'
        }, {
          color: '#009800',
          symbol: '&#9774;'
        }, {
          color: '#33ffff',
          symbol: '&#9775;'
        }, {
          color: '#1292ff',
          symbol: '&#9786;'
        }, {
          color: '#0000FF',
          symbol: '&#9788;'
        }, {
          color: '#9933ff',
          symbol: '&#9819;'
        }, {
          color: '#ff00ff',
          symbol: '&#9832;'
        }, {
          color: '#ff3366',
          symbol: '&#9851;'
        }, {
          color: '#fceabf',
          symbol: '&#9863;'
        }];
      }

      getRandomPairs(num) {
        let randomData = this.randomize(this._dataList);
        randomData.length = num;
        let pairs = [];
        randomData.map((data, index) => {
          pairs.push({
            id: index,
            data: data
          });
          pairs.push({
            id: index,
            data: data
          });
        });
        let randomPairs = this.randomize(pairs);
        return randomPairs;
      }

      randomize(list) {
        let newList = [...list];
        let len = newList.length;

        for (let i = 0; i < len; ++i) {
          let rnd = Math.floor(Math.random() * len);
          let tmp = newList[i];
          newList[i] = newList[rnd];
          newList[rnd] = tmp;
        }

        return newList;
      }

    };
    MemoryDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MemoryDataService);
    /***/
  },

  /***/
  "./src/app/core/memory-game-manager.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/core/memory-game-manager.service.ts ***!
    \*****************************************************/

  /*! exports provided: GAME, MemoryGameManagerService */

  /***/
  function srcAppCoreMemoryGameManagerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GAME", function () {
      return GAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MemoryGameManagerService", function () {
      return MemoryGameManagerService;
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


    var _game_metadata_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./game-metadata.const */
    "./src/app/core/game-metadata.const.ts");
    /* harmony import */


    var _windows_user_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./windows/user-data.service */
    "./src/app/core/windows/user-data.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var GAME;

    (function (GAME) {
      GAME[GAME["REGULAR"] = 0] = "REGULAR";
      GAME[GAME["REVERSE"] = 1] = "REVERSE";
    })(GAME || (GAME = {}));

    let MemoryGameManagerService = class MemoryGameManagerService {
      constructor(userDataService) {
        this.userDataService = userDataService;
        this._gameChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._levelChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._game = GAME.REGULAR;
        this.initFromUserData();
      }

      setGame(game) {
        this._game = game;
        this.userDataService.setGame(game);
        this.initFromUserData();

        this._gameChanged.next(this._game);
      }

      getGame() {
        return this._game;
      }

      get gameChanged$() {
        return this._gameChanged.asObservable();
      }

      get levelChanged$() {
        return this._levelChanged.asObservable();
      }

      getCurrentLevel() {
        return this._currentLevel;
      }

      getUserMaxLevel() {
        return this._userMaxLevel;
      }

      getEndLevel() {
        _game_metadata_const__WEBPACK_IMPORTED_MODULE_2__["GAME_METADATA"].length;
      }

      getLives() {
        return this._lives;
      }

      getBackground() {
        return this._background;
      }

      toggleBackground() {
        this._background = !this._background;
        this.userDataService.setBackground(this._background);
      }

      getTotalScore() {
        let total = 0;
        total = this.userDataService.getLevelHistory().map(item => item.score).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return total;
      }

      changeLive(lives) {
        this._lives += lives;
        this.userDataService.setLives(this._lives);
      }

      getLevelMetadata() {
        return _game_metadata_const__WEBPACK_IMPORTED_MODULE_2__["GAME_METADATA"][this._currentLevel - 1];
      }

      getHistory() {
        return this.userDataService.getLevelHistory();
      }

      getLevelHistory(level) {
        return this.userDataService.getLevelHistory().find(item => item.level === level);
      }

      getGameMetadat() {
        return _game_metadata_const__WEBPACK_IMPORTED_MODULE_2__["GAME_METADATA"];
      }

      nextLevel() {
        if (this._currentLevel === _game_metadata_const__WEBPACK_IMPORTED_MODULE_2__["GAME_METADATA"].length) {
          return this._currentLevel;
        }

        this.setLevel(this._currentLevel + 1);

        if (this._userMaxLevel < this._currentLevel) {
          this._userMaxLevel = this._currentLevel;
          this.userDataService.setUserMaxLevel(this._userMaxLevel);
        }

        return this._currentLevel;
      }

      prevLevel() {
        if (this._currentLevel > 1) {
          this.setLevel(this._currentLevel - 1);
        }

        return this._currentLevel;
      }

      setLevel(level) {
        this._currentLevel = level;
        this.userDataService.setCurrentLevel(this._currentLevel);

        this._levelChanged.next(this._currentLevel);
      }

      completeLevel(failed, time, score) {
        // Save data;
        this.userDataService.setLevelData(this._currentLevel, score, time); // Should enable next level

        if (!failed && this._currentLevel === this._userMaxLevel && this._lives > 0) {
          ++this._userMaxLevel; // Save data;

          this.userDataService.setUserMaxLevel(this._userMaxLevel);
        }
      }

      reset() {
        this.userDataService.reset();
        this.initFromUserData();
      }

      initFromUserData() {
        this._lives = this.userDataService.getLives();
        this._currentLevel = this.userDataService.getCurrentLevel();
        this._userMaxLevel = this.userDataService.getUserMaxLevel();
        this._background = this.userDataService.getBackground();
      }

    };

    MemoryGameManagerService.ctorParameters = () => [{
      type: _windows_user_data_service__WEBPACK_IMPORTED_MODULE_3__["UserDataService"]
    }];

    MemoryGameManagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MemoryGameManagerService);
    /***/
  },

  /***/
  "./src/app/core/windows/full-screen.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/core/windows/full-screen.service.ts ***!
    \*****************************************************/

  /*! exports provided: FullScreenService */

  /***/
  function srcAppCoreWindowsFullScreenServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FullScreenService", function () {
      return FullScreenService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let FullScreenService = class FullScreenService {
      constructor() {}

      requestFullscreen() {
        var docElm = document.documentElement;

        if (docElm.requestFullscreen) {
          docElm.requestFullscreen();
        } else if (docElm.mozRequestFullScreen) {
          docElm.mozRequestFullScreen();
        } else if (docElm.webkitRequestFullScreen) {
          docElm.webkitRequestFullScreen();
        } else if (docElm.msRequestFullscreen) {
          docElm.msRequestFullscreen();
        }
      }

      exitFullscreen() {
        let doc = document;

        if (doc.exitFullscreen) {
          doc.exitFullscreen();
        } else if (doc.mozCancelFullScreen) {
          doc.mozCancelFullScreen();
        } else if (doc.webkitCancelFullScreen) {
          doc.webkitCancelFullScreen();
        } else if (doc.msExitFullscreen) {
          doc.msExitFullscreen();
        }
      }

    };
    FullScreenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], FullScreenService);
    /***/
  },

  /***/
  "./src/app/core/windows/sound.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/core/windows/sound.service.ts ***!
    \***********************************************/

  /*! exports provided: SoundService */

  /***/
  function srcAppCoreWindowsSoundServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SoundService", function () {
      return SoundService;
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


    var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./utils */
    "./src/app/core/windows/utils.ts");
    /* harmony import */


    var _user_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user-data.service */
    "./src/app/core/windows/user-data.service.ts");

    let SoundService = class SoundService {
      constructor(userDataService) {
        this.userDataService = userDataService;
        this._randomInervals = []; // browsers limit the number of concurrent audio contexts, so you better re-use'em    

        this._enabled = this.userDataService.getSound();

        if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["iOS"])()) {
          this._enabled = false;
        }

        this._volume = 5;
      }

      isEnable() {
        return this._enabled;
      }

      pairMissMatch() {
        this.beep(500, 300);
        this.beep(210, 300);
        this.beep(100, 300);
      }

      complete() {
        this.beep(100, 100);
        setTimeout(() => this.beep(300, 100), 100);
        setTimeout(() => this.beep(500, 100), 200);
        setTimeout(() => this.beep(900, 100), 300);
      }

      failed() {
        this.beep(80, 600);
        this.beep(800, 700);
        this.beep(600, 600);
      }

      beepCard(cardId) {
        this.beep((cardId + 1) * 100, 100);
      }

      beep(freq, duration) {
        if (this._enabled === false) {
          return;
        }

        if (!this.audioContext) {
          this.audioContext = new AudioContext();
        }

        let oscillator = this.audioContext.createOscillator();
        let gain = this.audioContext.createGain();
        oscillator.connect(gain);
        oscillator.frequency.value = freq;
        oscillator.type = "square";
        gain.connect(this.audioContext.destination);
        gain.gain.value = this._volume * 0.01;
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + duration * 0.001);
      }

      toggleSound() {
        this._enabled = !this._enabled;
        this.userDataService.setSound(this._enabled);
      }

      randomStart() {
        for (let i = 0; i < 4; ++i) {
          let interval = setInterval(() => {
            this.beep(Math.random() * 1000, Math.random() * 500);
          }, Math.random() * 2000);

          this._randomInervals.push(interval);
        }
      }

      randomStop() {
        this._randomInervals.forEach(intrevalHandler => {
          clearInterval(intrevalHandler);
        });

        this._randomInervals = [];
      }

    };

    SoundService.ctorParameters = () => [{
      type: _user_data_service__WEBPACK_IMPORTED_MODULE_3__["UserDataService"]
    }];

    SoundService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SoundService);
    /***/
  },

  /***/
  "./src/app/core/windows/user-data.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/core/windows/user-data.service.ts ***!
    \***************************************************/

  /*! exports provided: UserDataService */

  /***/
  function srcAppCoreWindowsUserDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDataService", function () {
      return UserDataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    const PRODUCTION_VERSION = 1;
    const INIT_USER_MAX_LEVLE = 1;
    const INIT_CURRENT_MAX_LEVEL = 1;
    const INIT_LIVES = 5;
    let UserDataService = class UserDataService {
      constructor() {
        this._userDataKey = "userData_".concat(this._game);
        this.loadData();
      }

      setGame(game) {
        this._game = game;
        this._userDataKey = "userData_".concat(this._game);
        this.loadData();
      }

      getUserData() {
        return Object.assign({}, this);
      }

      getLives() {
        return this._userData.lives;
      }

      setLives(lives) {
        this._userData.lives = lives;
        this.saveData();
      }

      getCurrentLevel() {
        return this._userData.currentLevel;
      }

      setCurrentLevel(level) {
        this._userData.currentLevel = level;
        this.saveData();
      }

      getUserMaxLevel() {
        return this._userData.userMaxLevel;
      }

      setUserMaxLevel(level) {
        this._userData.userMaxLevel = level;
        this.saveData();
      }

      getVibrate() {
        return this._userData.vibrate;
      }

      setVibriate(flag) {
        this._userData.vibrate = flag;
        this.saveData();
      }

      getSound() {
        return this._userData.sound;
      }

      setSound(flag) {
        this._userData.sound = flag;
        this.saveData();
      }

      getBackground() {
        return this._userData.background;
      }

      setBackground(flag) {
        this._userData.background = flag;
        this.saveData();
      }

      getLevelHistory() {
        return this._userData.levels;
      }

      setLevelData(level, score, time) {
        let levelData = this._userData.levels.find(levelData => {
          return levelData.level === level;
        });

        if (levelData) {
          if (levelData.score < score) {
            levelData.score = score;
          }

          if (levelData.time > time) {
            levelData.time = time;
          }
        } else {
          levelData = {
            level,
            time,
            score
          };

          this._userData.levels.push(levelData);
        }

        this.saveData();
      }

      reset() {
        localStorage.removeItem('userData');
        this._userData = {
          levels: [],
          userMaxLevel: INIT_USER_MAX_LEVLE,
          currentLevel: INIT_CURRENT_MAX_LEVEL,
          lives: INIT_LIVES,
          vibrate: true,
          sound: true,
          background: true
        };
      }

      loadData() {
        let userData = localStorage.getItem(this._userDataKey);

        if (userData) {
          let userDataObj = JSON.parse(userData);
          this._userData = userDataObj;
          this._userData.vibrate = this._userData.vibrate === undefined ? true : this._userData.vibrate;
          this._userData.sound = this._userData.sound === undefined ? true : this._userData.sound;
          this._userData.background = this._userData.background === undefined ? true : this._userData.background;
        } else {
          this.reset();
        }
      }

      saveData() {
        let data = JSON.stringify(this._userData);
        localStorage.setItem(this._userDataKey, data);
      }

    };
    UserDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserDataService);
    /***/
  },

  /***/
  "./src/app/core/windows/utils.ts":
  /*!***************************************!*\
    !*** ./src/app/core/windows/utils.ts ***!
    \***************************************/

  /*! exports provided: iOS */

  /***/
  function srcAppCoreWindowsUtilsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "iOS", function () {
      return iOS;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    function iOS() {
      var iDevices = ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'];

      if (!!navigator.platform) {
        return !!iDevices.find(device => device === navigator.platform);
      }

      return false;
    }
    /***/

  },

  /***/
  "./src/app/core/windows/vibrate.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/core/windows/vibrate.service.ts ***!
    \*************************************************/

  /*! exports provided: VibrateService */

  /***/
  function srcAppCoreWindowsVibrateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VibrateService", function () {
      return VibrateService;
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


    var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./utils */
    "./src/app/core/windows/utils.ts");
    /* harmony import */


    var _user_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user-data.service */
    "./src/app/core/windows/user-data.service.ts");

    let VibrateService = class VibrateService {
      constructor(userDataService) {
        this.userDataService = userDataService;
        this._enabled = this.userDataService.getVibrate();

        if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["iOS"])()) {
          this._enabled = false;
        }
      }

      isEnable() {
        return this._enabled;
      }

      levelFailed() {
        this.vibrate(50);
      }

      complete() {
        this.vibrate([300, 300, 300]);
      }

      pairMatch() {
        this.vibrate(50);
      }

      pairMissMatch() {
        this.vibrate(250);
      }

      toggleSound() {
        this._enabled = !this._enabled;
        this.userDataService.setVibriate(this._enabled);
      }

      vibrate(arg) {
        if (!this._enabled) {
          return;
        }

        navigator.vibrate(arg);
      }

    };

    VibrateService.ctorParameters = () => [{
      type: _user_data_service__WEBPACK_IMPORTED_MODULE_3__["UserDataService"]
    }];

    VibrateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], VibrateService);
    /***/
  },

  /***/
  "./src/app/main/count-down/count-down.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/main/count-down/count-down.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainCountDownCountDownComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-page {\n  background-color: rgba(0, 0, 0, 0.123);\n  color: black;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  font-size: 4rem;\n  font-weight: bold;\n}\n.main-page .counter {\n  margin-top: 0.2em;\n  font-size: 8rem;\n  background-color: rgba(255, 255, 255, 0.5);\n  border-radius: 100vmax;\n  padding: 0.25em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb3VudC1kb3duL0M6XFxNZWlyXFxJbnRlcnZpZXdcXHBvcmplY3RzXFxtZW1vcnktZ2FtZS9zcmNcXGFwcFxcbWFpblxcY291bnQtZG93blxcY291bnQtZG93bi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9jb3VudC1kb3duL2NvdW50LWRvd24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQ0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFFQSxlQUFBO0VBQ0EsaUJBQUE7QUNBSjtBREVJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL21haW4vY291bnQtZG93bi9jb3VudC1kb3duLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tcGFnZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjEyMyk7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbiAgICAuY291bnRlciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMC4yZW07XHJcbiAgICAgICAgZm9udC1zaXplOiA4cmVtO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDB2bWF4O1xyXG4gICAgICAgIHBhZGRpbmc6MC4yNWVtIDtcclxuICAgIH1cclxufVxyXG4iLCIubWFpbi1wYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyMyk7XG4gIGNvbG9yOiBibGFjaztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tYWluLXBhZ2UgLmNvdW50ZXIge1xuICBtYXJnaW4tdG9wOiAwLjJlbTtcbiAgZm9udC1zaXplOiA4cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHZtYXg7XG4gIHBhZGRpbmc6IDAuMjVlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/main/count-down/count-down.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/main/count-down/count-down.component.ts ***!
    \*********************************************************/

  /*! exports provided: CountDownComponent */

  /***/
  function srcAppMainCountDownCountDownComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountDownComponent", function () {
      return CountDownComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let CountDownComponent = class CountDownComponent {
      constructor() {
        this.output = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      ngOnInit() {
        this._intervaleHandler = setInterval(() => {
          --this.data;

          if (this.data === 0) {
            this.onRun();
          }
        }, 1000);
      }

      onRun() {
        clearInterval(this._intervaleHandler);
        this.output.emit({
          action: 'REVERSE_RUN'
        });
      }

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CountDownComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CountDownComponent.prototype, "output", void 0);
    CountDownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-count-down',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./count-down.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/count-down/count-down.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./count-down.component.scss */
      "./src/app/main/count-down/count-down.component.scss")).default]
    })], CountDownComponent);
    /***/
  },

  /***/
  "./src/app/main/game-complete/game-complete.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/main/game-complete/game-complete.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainGameCompleteGameCompleteComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vZ2FtZS1jb21wbGV0ZS9nYW1lLWNvbXBsZXRlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/main/game-complete/game-complete.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/main/game-complete/game-complete.component.ts ***!
    \***************************************************************/

  /*! exports provided: GameCompleteComponent */

  /***/
  function srcAppMainGameCompleteGameCompleteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameCompleteComponent", function () {
      return GameCompleteComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let GameCompleteComponent = class GameCompleteComponent {
      constructor() {
        this.output = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      retry() {
        this.output.emit({
          action: 'RETRY'
        });
      }

      restart() {
        this.output.emit({
          action: 'RESTART'
        });
      }

      home() {
        this.output.emit({
          action: 'HOME'
        });
      }

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], GameCompleteComponent.prototype, "output", void 0);
    GameCompleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-game-complete',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./game-complete.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/game-complete/game-complete.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./game-complete.component.scss */
      "./src/app/main/game-complete/game-complete.component.scss")).default]
    })], GameCompleteComponent);
    /***/
  },

  /***/
  "./src/app/main/game-over/game-over.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/main/game-over/game-over.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainGameOverGameOverComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vZ2FtZS1vdmVyL2dhbWUtb3Zlci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/main/game-over/game-over.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/main/game-over/game-over.component.ts ***!
    \*******************************************************/

  /*! exports provided: GameOverComponent */

  /***/
  function srcAppMainGameOverGameOverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameOverComponent", function () {
      return GameOverComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let GameOverComponent = class GameOverComponent {
      constructor() {
        this.output = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.data = true;
      }

      retry() {
        this.output.emit({
          action: 'RETRY'
        });
      }

      continue() {
        this.output.emit({
          action: 'CONTINUE'
        });
      }

      restart() {
        this.output.emit({
          action: 'RESTART'
        });
      }

      home() {
        this.output.emit({
          action: 'HOME'
        });
      }

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GameOverComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], GameOverComponent.prototype, "output", void 0);
    GameOverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-game-over',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./game-over.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/game-over/game-over.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./game-over.component.scss */
      "./src/app/main/game-over/game-over.component.scss")).default]
    })], GameOverComponent);
    /***/
  },

  /***/
  "./src/app/main/level-failed/level-failed.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/main/level-failed/level-failed.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainLevelFailedLevelFailedComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbGV2ZWwtZmFpbGVkL2xldmVsLWZhaWxlZC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/main/level-failed/level-failed.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/main/level-failed/level-failed.component.ts ***!
    \*************************************************************/

  /*! exports provided: LevelFailedComponent */

  /***/
  function srcAppMainLevelFailedLevelFailedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LevelFailedComponent", function () {
      return LevelFailedComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let LevelFailedComponent = class LevelFailedComponent {
      constructor() {
        this.output = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.data = true;
      }

      retry() {
        this.output.emit({
          action: 'RETRY'
        });
      }

      continue() {
        this.output.emit({
          action: 'CONTINUE'
        });
      }

      restart() {
        this.output.emit({
          action: 'RESTART'
        });
      }

      home() {
        this.output.emit({
          action: 'HOME'
        });
      }

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LevelFailedComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], LevelFailedComponent.prototype, "output", void 0);
    LevelFailedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-level-failed',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./level-failed.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/level-failed/level-failed.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./level-failed.component.scss */
      "./src/app/main/level-failed/level-failed.component.scss")).default]
    })], LevelFailedComponent);
    /***/
  },

  /***/
  "./src/app/memory/card/card/card.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/memory/card/card/card.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMemoryCardCardCardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbW9yeS9jYXJkL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/memory/card/card/card.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/memory/card/card/card.component.ts ***!
    \****************************************************/

  /*! exports provided: CardComponent */

  /***/
  function srcAppMemoryCardCardCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
      return CardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let CardComponent = class CardComponent {
      constructor(elmRef) {
        this.elmRef = elmRef;
        this.cardClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._isClick = false;
        this._discover = false;
      }

      ngOnInit() {}

      isActive() {
        return this._isClick;
      }

      isDiscover() {
        return this._discover;
      }

      dispaySymbol() {
        if (this.isActive() || this.isDiscover()) {
          return this.data.data.symbol;
        }

        return '';
      }

      displayBackground() {
        if (this.disableBackground === true) {
          return '';
        }

        if (this.isActive() || this.isDiscover()) {
          return this.data.data.color;
        }

        return '';
      } // "You touch you go"


      onClick() {
        if (this._isClick == false) {
          this._isClick = !this._isClick;
          this.cardClicked.emit({
            cardIndex: this.cardIndex,
            data: this.data
          });
        }
      } // -----------------------------------------
      // API
      // -----------------------------------------


      pair() {}

      reset() {
        this._isClick = false;
      }

      discover() {
        this._discover = true;
      }

      hide() {
        this._discover = false;
      }

    };

    CardComponent.ctorParameters = () => [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "cardIndex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "disableBackground", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('discover')], CardComponent.prototype, "_discover", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CardComponent.prototype, "cardClicked", void 0);
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/memory/card/card/card.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./card.component.scss */
      "./src/app/memory/card/card/card.component.scss")).default]
    })], CardComponent);
    /***/
  },

  /***/
  "./src/app/menu/menu.component.scss":
  /*!******************************************!*\
    !*** ./src/app/menu/menu.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppMenuMenuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".menu-page {\n  --bb: 5px solid rgb(196, 188, 188);\n  --clr-bg: rgba(0, 0, 0, 0.863);\n  z-index: 1000;\n  background-color: var(--clr-bg);\n  color: white;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  -webkit-transform: translatex(100%);\n          transform: translatex(100%);\n  -webkit-transition: -webkit-transform ease-in 500ms;\n  transition: -webkit-transform ease-in 500ms;\n  transition: transform ease-in 500ms;\n  transition: transform ease-in 500ms, -webkit-transform ease-in 500ms;\n}\n.menu-page.open {\n  -webkit-transform: translatex(40%);\n          transform: translatex(40%);\n}\n.menu-page--content {\n  margin: 0.5em 1em 0.5em;\n}\n.menu-page--header {\n  width: 100%;\n  padding-bottom: 0.5em;\n  border-bottom: var(--bb);\n}\n.menu-page--title {\n  display: inline-block;\n  font-size: 2rem;\n  font-weight: 900;\n  width: 90%;\n  position: relative;\n}\n.menu-page--close {\n  background-color: var(--clr-bg);\n  display: inline-block;\n  font-size: 1.5rem;\n  font-weight: 900;\n  padding: 0.2em 0.2em;\n  border-radius: 0.2em;\n  position: absolute;\n  right: 0;\n  -webkit-transition: right ease-in-out 750ms;\n  transition: right ease-in-out 750ms;\n  cursor: pointer;\n}\n.menu-page--close:hover {\n  background-color: grey;\n}\n.menu-page.open .menu-page--close {\n  right: 100%;\n}\n.menu-page--section:not(:last-of-type) {\n  border-bottom: var(--bb);\n  padding-bottom: 0.5em;\n  padding-top: 0.5em;\n}\n.menu-section--title {\n  font-size: 1.5rem;\n  font-weight: 900;\n  margin-bottom: 0.5em;\n}\n.setting-item {\n  display: -webkit-box;\n  display: flex;\n  font-size: 1.2srem;\n  margin-bottom: 0.5em;\n}\n.setting-item--title {\n  width: 100px;\n}\n.setting-item--btn {\n  background-color: rgba(240, 255, 240, 0.096);\n  border: 1px solid white;\n  border-radius: 5px;\n  height: 1.5em;\n  width: 1.5em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  cursor: pointer;\n}\n.setting-item--btn:hover {\n  background-color: rgba(126, 110, 110, 0.685);\n}\n.crossed {\n  position: relative;\n}\n.crossed:before {\n  content: \"\";\n  position: absolute;\n  background-color: black;\n  height: 2px;\n  width: 100%;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.crossed:after {\n  content: \"\";\n  position: absolute;\n  background-color: black;\n  height: 2px;\n  width: 100%;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n.mini-cards {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  width: max(60%, 200px);\n}\n.mini-card {\n  border: 1px solid white;\n  border-radius: 5px;\n  margin: 0.1em;\n  padding: 0.3em;\n  cursor: pointer;\n  text-align: center;\n}\n.mini-card:hover {\n  background-color: rgba(214, 211, 211, 0.26);\n}\n.disabled, .mini-card--disabled {\n  pointer-events: none;\n  cursor: initial;\n  background-color: rgba(0, 0, 0, 0.315);\n}\n.mini-card--disabled {\n  background-color: grey;\n}\n.menu-btn {\n  display: inline-block;\n  padding: 0.3em 0.9em;\n  border: 1px solid white;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.menu-btn:hover {\n  background-color: rgba(214, 211, 211, 0.26);\n}\n@media (max-width: 1045px) {\n  .menu-page.open {\n    -webkit-transform: translatex(20%);\n            transform: translatex(20%);\n  }\n}\n@media (max-width: 580px) {\n  .mini-card--paris {\n    display: none;\n  }\n\n  .menu-page--title {\n    font-size: 1.5rem;\n  }\n\n  .menu-section--title {\n    font-size: 1rem;\n  }\n\n  .mini-card {\n    font-size: smaller;\n  }\n}\n.menu-btn {\n  margin-right: 0.3em;\n}\n@media (max-height: 550px) {\n  .menu-page {\n    --bb: 1px solid rgb(196, 188, 188);\n  }\n\n  .menu-page--title {\n    font-size: 1.2rem;\n  }\n\n  .menu-page--section:not(:last-of-type) {\n    margin: 0;\n    padding: 0;\n  }\n\n  .menu-section--title {\n    margin-bottom: 0;\n  }\n\n  .setting-items {\n    display: -webkit-box;\n    display: flex;\n  }\n\n  .setting-item {\n    border-right: 2px solid white;\n  }\n  .setting-item--title {\n    width: initial;\n    margin-right: 0.3em;\n    margin-left: 0.3em;\n    padding-bottom: 0;\n    margin-bottom: 0;\n  }\n  .setting-item--btn {\n    margin-right: 0.5em;\n  }\n\n  .setting-item:last-of-type {\n    border-right: 0;\n  }\n\n  .mini-card--paris {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9DOlxcTWVpclxcSW50ZXJ2aWV3XFxwb3JqZWN0c1xcbWVtb3J5LWdhbWUvc3JjXFxhcHBcXG1lbnVcXG1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVJLGtDQUFBO0VBQ0EsOEJBQUE7RUFHQSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLG1EQUFBO0VBQUEsMkNBQUE7RUFBQSxtQ0FBQTtFQUFBLG9FQUFBO0FDSEo7QURLSTtFQUNJLGtDQUFBO1VBQUEsMEJBQUE7QUNIUjtBRE1BO0VBQ0ksdUJBQUE7QUNISjtBRE1BO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7QUNISjtBREtBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNGSjtBRE1BO0VBQ0ksK0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkNBQUE7RUFBQSxtQ0FBQTtFQUVBLGVBQUE7QUNKSjtBREtJO0VBQ0ksc0JBQUE7QUNIUjtBRE9BO0VBQ0ksV0FBQTtBQ0pKO0FET0E7RUFDSSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNKSjtBRE9BO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDSko7QURPQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNKSjtBRE1JO0VBQ0ksWUFBQTtBQ0pSO0FET0k7RUFDSSw0Q0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZUFBQTtBQ0xSO0FET1E7RUFDSSw0Q0FBQTtBQ0xaO0FEVUE7RUFDSSxrQkFBQTtBQ1BKO0FEVUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtBQ1BKO0FEV0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7VUFBQSx5QkFBQTtBQ1JKO0FEV0E7RUFDSSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxzQkFBQTtBQ1JKO0FEV0E7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNSSjtBRFVJO0VBQ0ksMkNBQUE7QUNSUjtBRGFBO0VBQ0ksb0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0NBQUE7QUNWSjtBRGNBO0VBR0ksc0JBQUE7QUNiSjtBRGlCQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ2RKO0FEZ0JJO0VBQ0ksMkNBQUE7QUNkUjtBRHFCQTtFQUNJO0lBQ0ksa0NBQUE7WUFBQSwwQkFBQTtFQ2xCTjtBQUNGO0FEc0JBO0VBQ0k7SUFDSSxhQUFBO0VDcEJOOztFRHNCRTtJQUNJLGlCQUFBO0VDbkJOOztFRHNCRTtJQUNJLGVBQUE7RUNuQk47O0VEcUJFO0lBQ0ksa0JBQUE7RUNsQk47QUFDRjtBRHFCQTtFQUNJLG1CQUFBO0FDbkJKO0FEc0JBO0VBQ0k7SUFDSSxrQ0FBQTtFQ25CTjs7RURxQkU7SUFDSSxpQkFBQTtFQ2xCTjs7RURxQkU7SUFDSSxTQUFBO0lBQ0EsVUFBQTtFQ2xCTjs7RURzQkU7SUFDSSxnQkFBQTtFQ25CTjs7RURzQkU7SUFDSSxvQkFBQTtJQUFBLGFBQUE7RUNuQk47O0VEc0JFO0lBQ0ksNkJBQUE7RUNuQk47RURxQk07SUFDSSxjQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7RUNuQlY7RURzQk07SUFDSSxtQkFBQTtFQ3BCVjs7RUR5QkU7SUFDSSxlQUFBO0VDdEJOOztFRHdCRTtJQUNJLGFBQUE7RUNyQk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubWVudS1wYWdleyAgICBcclxuICBcclxuICAgIC0tYmI6IDVweCBzb2xpZCByZ2IoMTk2LCAxODgsIDE4OCk7ICAgIFxyXG4gICAgLS1jbHItYmc6IHJnYmEoMCwgMCwgMCwgMC44NjMpO1xyXG4gIFxyXG5cclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNsci1iZyk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6MDtcclxuICAgIGJvdHRvbTowO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwOyAgIFxyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV4KDEwMCUpO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2UtaW4gNTAwbXM7XHJcblxyXG4gICAgJi5vcGVuIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXgoNDAlKTtcclxuICAgIH1cclxufVxyXG4ubWVudS1wYWdlLS1jb250ZW50e1xyXG4gICAgbWFyZ2luOiAwLjVlbSAxZW0gMC41ZW07XHJcbn1cclxuXHJcbi5tZW51LXBhZ2UtLWhlYWRlciB7XHJcbiAgICB3aWR0aDogMTAwJTsgICAgXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XHJcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1iYik7ICAgICAgXHJcbn1cclxuLm1lbnUtcGFnZS0tdGl0bGV7ICAgICAgIFxyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAgICBcclxuICAgIGZvbnQtc2l6ZTogMnJlbTsgXHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgd2lkdGg6IDkwJTsgICAgICBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIFxyXG59XHJcblxyXG4ubWVudS1wYWdlLS1jbG9zZSB7ICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWJnKTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgICAgICAgICAgICBcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtOyBcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7ICAgICAgXHJcbiAgICBwYWRkaW5nOiAwLjJlbSAwLjJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMmVtOyAgIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiByaWdodCBlYXNlLWluLW91dCA3NTBtcztcclxuICAgIFxyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAmOmhvdmVye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tZW51LXBhZ2Uub3BlbiAgLm1lbnUtcGFnZS0tY2xvc2Uge1xyXG4gICAgcmlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5tZW51LXBhZ2UtLXNlY3Rpb246bm90KDpsYXN0LW9mLXR5cGUpIHtcclxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLWJiKTsgIFxyXG4gICAgcGFkZGluZy1ib3R0b206IDAuNWVtOyAgICAgIFxyXG4gICAgcGFkZGluZy10b3A6IDAuNWVtOyAgXHJcbn1cclxuXHJcbi5tZW51LXNlY3Rpb24tLXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07IFxyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDsgICAgIFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbn1cclxuXHJcbi5zZXR0aW5nLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtc2l6ZTogMS4yc3JlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gICAgXHJcbiAgICAmLS10aXRsZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgfSAgICBcclxuXHJcbiAgICAmLS1idG57XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDI1NSwgMjQwLCAwLjA5Nik7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4OyAgICAgICAgXHJcbiAgICAgICAgaGVpZ2h0OiAxLjVlbTtcclxuICAgICAgICB3aWR0aDogMS41ZW07XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI2LCAxMTAsIDExMCwgMC42ODUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNyb3NzZWQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY3Jvc3NlZDpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGhlaWdodDogMnB4OyAgICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgXHJcbn1cclxuXHJcbi5jcm9zc2VkOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBoZWlnaHQ6IDJweDsgICAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbn1cclxuXHJcbi5taW5pLWNhcmRzIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG4gICAgd2lkdGg6IG1heCg2MCUsIDIwMHB4KTtcclxufVxyXG5cclxuLm1pbmktY2FyZCB7ICAgIFxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW46IDAuMWVtO1xyXG4gICAgcGFkZGluZzogMC4zZW07XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxNCwgMjExLCAyMTEsIDAuMjYpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmRpc2FibGVkIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgY3Vyc29yOiBpbml0aWFsO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMxNSk7XHJcbn1cclxuXHJcblxyXG4ubWluaS1jYXJkLS1kaXNhYmxlZCB7XHJcbiAgICBAZXh0ZW5kIC5kaXNhYmxlZDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG59XHJcblxyXG5cclxuLm1lbnUtYnRuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDAuM2VtIDAuOWVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7ICAgIFxyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE0LCAyMTEsIDIxMSwgMC4yNik7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjEwNDVweCl7XHJcbiAgICAubWVudS1wYWdlLm9wZW4gIHsgXHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV4KDIwJSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo1ODBweCl7XHJcbiAgICAubWluaS1jYXJkLS1wYXJpcyB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5tZW51LXBhZ2UtLXRpdGxleyBcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAubWVudS1zZWN0aW9uLS10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgLm1pbmktY2FyZCB7XHJcbiAgICAgICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWVudS1idG4ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjNlbTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtaGVpZ2h0OiA1NTBweCkge1xyXG4gICAgLm1lbnUtcGFnZSB7XHJcbiAgICAgICAgLS1iYjogMXB4IHNvbGlkIHJnYigxOTYsIDE4OCwgMTg4KTsgIFxyXG4gICAgfVxyXG4gICAgLm1lbnUtcGFnZS0tdGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLm1lbnUtcGFnZS0tc2VjdGlvbjpub3QoOmxhc3Qtb2YtdHlwZSkgeyAgICAgXHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7ICAgICAgICAgICAgICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgLm1lbnUtc2VjdGlvbi0tdGl0bGV7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuXHJcbiAgICAuc2V0dGluZy1pdGVtcyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5zZXR0aW5nLWl0ZW17XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgd2hpdGU7XHJcblxyXG4gICAgICAgICYtLXRpdGxlIHtcclxuICAgICAgICAgICAgd2lkdGg6IGluaXRpYWw7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC4zZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjNlbTtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAmLS1idG4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNldHRpbmctaXRlbTpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgIGJvcmRlci1yaWdodDowXHJcbiAgICB9XHJcbiAgICAubWluaS1jYXJkLS1wYXJpcyB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG4gICBcclxuIiwiLm1lbnUtcGFnZSB7XG4gIC0tYmI6IDVweCBzb2xpZCByZ2IoMTk2LCAxODgsIDE4OCk7XG4gIC0tY2xyLWJnOiByZ2JhKDAsIDAsIDAsIDAuODYzKTtcbiAgei1pbmRleDogMTAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWJnKTtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGV4KDEwMCUpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gZWFzZS1pbiA1MDBtcztcbn1cbi5tZW51LXBhZ2Uub3BlbiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRleCg0MCUpO1xufVxuXG4ubWVudS1wYWdlLS1jb250ZW50IHtcbiAgbWFyZ2luOiAwLjVlbSAxZW0gMC41ZW07XG59XG5cbi5tZW51LXBhZ2UtLWhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XG4gIGJvcmRlci1ib3R0b206IHZhcigtLWJiKTtcbn1cblxuLm1lbnUtcGFnZS0tdGl0bGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgd2lkdGg6IDkwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubWVudS1wYWdlLS1jbG9zZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1iZyk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIHBhZGRpbmc6IDAuMmVtIDAuMmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdHJhbnNpdGlvbjogcmlnaHQgZWFzZS1pbi1vdXQgNzUwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tZW51LXBhZ2UtLWNsb3NlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbn1cblxuLm1lbnUtcGFnZS5vcGVuIC5tZW51LXBhZ2UtLWNsb3NlIHtcbiAgcmlnaHQ6IDEwMCU7XG59XG5cbi5tZW51LXBhZ2UtLXNlY3Rpb246bm90KDpsYXN0LW9mLXR5cGUpIHtcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYmIpO1xuICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XG4gIHBhZGRpbmctdG9wOiAwLjVlbTtcbn1cblxuLm1lbnUtc2VjdGlvbi0tdGl0bGUge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG59XG5cbi5zZXR0aW5nLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDEuMnNyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xufVxuLnNldHRpbmctaXRlbS0tdGl0bGUge1xuICB3aWR0aDogMTAwcHg7XG59XG4uc2V0dGluZy1pdGVtLS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjU1LCAyNDAsIDAuMDk2KTtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgaGVpZ2h0OiAxLjVlbTtcbiAgd2lkdGg6IDEuNWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNldHRpbmctaXRlbS0tYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjYsIDExMCwgMTEwLCAwLjY4NSk7XG59XG5cbi5jcm9zc2VkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY3Jvc3NlZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBoZWlnaHQ6IDJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuLmNyb3NzZWQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBoZWlnaHQ6IDJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG5cbi5taW5pLWNhcmRzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgd2lkdGg6IG1heCg2MCUsIDIwMHB4KTtcbn1cblxuLm1pbmktY2FyZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogMC4xZW07XG4gIHBhZGRpbmc6IDAuM2VtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5taW5pLWNhcmQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxNCwgMjExLCAyMTEsIDAuMjYpO1xufVxuXG4uZGlzYWJsZWQsIC5taW5pLWNhcmQtLWRpc2FibGVkIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGN1cnNvcjogaW5pdGlhbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMxNSk7XG59XG5cbi5taW5pLWNhcmQtLWRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbn1cblxuLm1lbnUtYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwLjNlbSAwLjllbTtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm1lbnUtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTQsIDIxMSwgMjExLCAwLjI2KTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwNDVweCkge1xuICAubWVudS1wYWdlLm9wZW4ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleCgyMCUpO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgLm1pbmktY2FyZC0tcGFyaXMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubWVudS1wYWdlLS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cblxuICAubWVudS1zZWN0aW9uLS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG5cbiAgLm1pbmktY2FyZCB7XG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xuICB9XG59XG4ubWVudS1idG4ge1xuICBtYXJnaW4tcmlnaHQ6IDAuM2VtO1xufVxuXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDU1MHB4KSB7XG4gIC5tZW51LXBhZ2Uge1xuICAgIC0tYmI6IDFweCBzb2xpZCByZ2IoMTk2LCAxODgsIDE4OCk7XG4gIH1cblxuICAubWVudS1wYWdlLS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cblxuICAubWVudS1wYWdlLS1zZWN0aW9uOm5vdCg6bGFzdC1vZi10eXBlKSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAubWVudS1zZWN0aW9uLS10aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuXG4gIC5zZXR0aW5nLWl0ZW1zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgLnNldHRpbmctaXRlbSB7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgd2hpdGU7XG4gIH1cbiAgLnNldHRpbmctaXRlbS0tdGl0bGUge1xuICAgIHdpZHRoOiBpbml0aWFsO1xuICAgIG1hcmdpbi1yaWdodDogMC4zZW07XG4gICAgbWFyZ2luLWxlZnQ6IDAuM2VtO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgLnNldHRpbmctaXRlbS0tYnRuIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xuICB9XG5cbiAgLnNldHRpbmctaXRlbTpsYXN0LW9mLXR5cGUge1xuICAgIGJvcmRlci1yaWdodDogMDtcbiAgfVxuXG4gIC5taW5pLWNhcmQtLXBhcmlzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/menu/menu.component.ts":
  /*!****************************************!*\
    !*** ./src/app/menu/menu.component.ts ***!
    \****************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
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


    var _menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./menu.service */
    "./src/app/menu/menu.service.ts");
    /* harmony import */


    var _core_windows_sound_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../core/windows/sound.service */
    "./src/app/core/windows/sound.service.ts");
    /* harmony import */


    var _core_windows_vibrate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../core/windows/vibrate.service */
    "./src/app/core/windows/vibrate.service.ts");
    /* harmony import */


    var _core_memory_game_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../core/memory-game-manager.service */
    "./src/app/core/memory-game-manager.service.ts");
    /* harmony import */


    var _core_windows_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../core/windows/utils */
    "./src/app/core/windows/utils.ts");

    let MenuComponent = class MenuComponent {
      constructor(menuService, soundService, vibrateService, memoryGameManagerService) {
        this.menuService = menuService;
        this.soundService = soundService;
        this.vibrateService = vibrateService;
        this.memoryGameManagerService = memoryGameManagerService;
      }

      ngOnInit() {
        this.isIOS = Object(_core_windows_utils__WEBPACK_IMPORTED_MODULE_6__["iOS"])();
        console.log(this.memoryGameManagerService.getHistory());
        console.log(this.memoryGameManagerService.getGameMetadat());
        console.log(this.memoryGameManagerService.getUserMaxLevel());
      }

      toggleSound() {
        this.soundService.toggleSound();
      }

      isSoundDisabled() {
        return !this.soundService.isEnable();
      }

      toggleVibrate() {
        this.vibrateService.toggleSound();
      }

      isVibrateDisabled() {
        return !this.vibrateService.isEnable();
      }

      onBackgroundToggle() {
        this.memoryGameManagerService.toggleBackground();
      }

      isBackgroundDisabled() {
        return !this.memoryGameManagerService.getBackground();
      }

      onClose() {
        this.menuService.close();
      }

      onSelectLevel(level) {
        this.memoryGameManagerService.setLevel(level.level);
        this.menuService.close();
      }

      onHome() {
        this.menuService.close();
        this.menuService.action('HOME');
      }

      onRestart() {
        this.menuService.close();
        this.menuService.action('RESTART');
      }

    };

    MenuComponent.ctorParameters = () => [{
      type: _menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]
    }, {
      type: _core_windows_sound_service__WEBPACK_IMPORTED_MODULE_3__["SoundService"]
    }, {
      type: _core_windows_vibrate_service__WEBPACK_IMPORTED_MODULE_4__["VibrateService"]
    }, {
      type: _core_memory_game_manager_service__WEBPACK_IMPORTED_MODULE_5__["MemoryGameManagerService"]
    }];

    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./menu.component.scss */
      "./src/app/menu/menu.component.scss")).default]
    })], MenuComponent);
    /***/
  },

  /***/
  "./src/app/menu/menu.service.ts":
  /*!**************************************!*\
    !*** ./src/app/menu/menu.service.ts ***!
    \**************************************/

  /*! exports provided: MenuService */

  /***/
  function srcAppMenuMenuServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuService", function () {
      return MenuService;
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

    let MenuService = class MenuService {
      constructor() {
        this._open = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this._action = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      get open$() {
        return this._open.asObservable();
      }

      get action$() {
        return this._action.asObservable();
      }

      open() {
        this._open.next(true);
      }

      close() {
        this._open.next(false);

        this._action.next('CLOSE');
      }

      action(commnad) {
        this._action.next(commnad);
      }

    };
    MenuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MenuService);
    /***/
  },

  /***/
  "./src/app/openning-screen/openning-screen.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/openning-screen/openning-screen.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOpenningScreenOpenningScreenComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".openning-screen {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  z-index: 2;\n  background-color: rgba(0, 0, 0, 0.753);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.openning-screen .os-title {\n  font-size: 1.7em;\n  text-align: center;\n  color: chartreuse;\n  text-transform: uppercase;\n  letter-spacing: 1em;\n  line-height: 2em;\n  text-shadow: 5px 5px 5px rgba(128, 255, 0, 0.288);\n}\n.openning-screen .os-cards {\n  display: -webkit-box;\n  display: flex;\n}\n.openning-screen .os-card {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 1em;\n  height: 7em;\n  width: 5em;\n  margin: 2em;\n  background-color: chocolate;\n  border: 2px solid black;\n  border-radius: 5px;\n  box-shadow: 5px 5px 5px rgba(210, 105, 30, 0.24);\n  -webkit-animation-name: rotate;\n          animation-name: rotate;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  cursor: pointer;\n}\n.openning-screen .os-card:first-of-type {\n  background-color: blue;\n  -webkit-transform: rotate(-20deg);\n          transform: rotate(-20deg);\n  -webkit-animation-direction: normal;\n          animation-direction: normal;\n}\n.openning-screen .os-card:last-of-type {\n  background-color: blueviolet;\n  -webkit-transform: rotate(20deg);\n          transform: rotate(20deg);\n  animation-direction: reverse;\n}\n.openning-screen .os-btn {\n  padding: 1em 3em;\n  background-color: chartreuse;\n  border-radius: 5px;\n  box-shadow: 5px 5px 5px rgba(128, 255, 0, 0.288);\n  cursor: pointer;\n}\n.openning-screen .os-btn:hover {\n  background-color: rgba(128, 255, 0, 0.514);\n}\n@-webkit-keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  25% {\n    -webkit-transform: rotate(10deg);\n            transform: rotate(10deg);\n  }\n  50% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  75% {\n    -webkit-transform: rotate(-10deg);\n            transform: rotate(-10deg);\n  }\n  100% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n}\n@keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  25% {\n    -webkit-transform: rotate(10deg);\n            transform: rotate(10deg);\n  }\n  50% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  75% {\n    -webkit-transform: rotate(-10deg);\n            transform: rotate(-10deg);\n  }\n  100% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n}\n@-webkit-keyframes example {\n  from {\n    background-color: red;\n  }\n  to {\n    background-color: yellow;\n  }\n}\n@keyframes example {\n  from {\n    background-color: red;\n  }\n  to {\n    background-color: yellow;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3Blbm5pbmctc2NyZWVuL0M6XFxNZWlyXFxJbnRlcnZpZXdcXHBvcmplY3RzXFxtZW1vcnktZ2FtZS9zcmNcXGFwcFxcb3Blbm5pbmctc2NyZWVuXFxvcGVubmluZy1zY3JlZW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL29wZW5uaW5nLXNjcmVlbi9vcGVubmluZy1zY3JlZW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLHNDQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDSjtBRENJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaURBQUE7QUNDUjtBREVJO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0FDQVI7QURHSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdEQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0VBQ0EseUNBQUE7VUFBQSxpQ0FBQTtFQUNBLGVBQUE7QUNEUjtBREdRO0VBQ0ksc0JBQUE7RUFDQSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQ0RaO0FES1E7RUFDSSw0QkFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSw0QkFBQTtBQ0haO0FEUUk7RUFDSSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnREFBQTtFQUNBLGVBQUE7QUNOUjtBRFFRO0VBQ0ksMENBQUE7QUNOWjtBRFdJO0VBQ0k7SUFDSSw0QkFBQTtZQUFBLG9CQUFBO0VDVFY7RURZTTtJQUNJLGdDQUFBO1lBQUEsd0JBQUE7RUNWVjtFRGFNO0lBQ0ksNEJBQUE7WUFBQSxvQkFBQTtFQ1hWO0VEY007SUFDSSxpQ0FBQTtZQUFBLHlCQUFBO0VDWlY7RURjTTtJQUNJLDRCQUFBO1lBQUEsb0JBQUE7RUNaVjtBQUNGO0FETkk7RUFDSTtJQUNJLDRCQUFBO1lBQUEsb0JBQUE7RUNUVjtFRFlNO0lBQ0ksZ0NBQUE7WUFBQSx3QkFBQTtFQ1ZWO0VEYU07SUFDSSw0QkFBQTtZQUFBLG9CQUFBO0VDWFY7RURjTTtJQUNJLGlDQUFBO1lBQUEseUJBQUE7RUNaVjtFRGNNO0lBQ0ksNEJBQUE7WUFBQSxvQkFBQTtFQ1pWO0FBQ0Y7QURpQkk7RUFDSTtJQUFNLHFCQUFBO0VDZFo7RURlTTtJQUFJLHdCQUFBO0VDWlY7QUFDRjtBRFNJO0VBQ0k7SUFBTSxxQkFBQTtFQ2RaO0VEZU07SUFBSSx3QkFBQTtFQ1pWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9vcGVubmluZy1zY3JlZW4vb3Blbm5pbmctc2NyZWVuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9wZW5uaW5nLXNjcmVlbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NTMpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIC5vcy10aXRsZXtcclxuICAgICAgICBmb250LXNpemU6IDEuN2VtOyAgICBcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IGNoYXJ0cmV1c2U7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMWVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyZW07ICAgICAgICBcclxuICAgICAgICB0ZXh0LXNoYWRvdzogNXB4IDVweCA1cHggIHJnYmEoMTI4LCAyNTUsIDAsIDAuMjg4KTtcclxuICAgIH1cclxuXHJcbiAgICAub3MtY2FyZHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcblxyXG4gICAgLm9zLWNhcmQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgIGhlaWdodDogN2VtO1xyXG4gICAgICAgIHdpZHRoOiA1ZW07ICAgICAgICBcclxuICAgICAgICBtYXJnaW46IDJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjaG9jb2xhdGU7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMjEwLCAxMDUsIDMwLCAwLjI0KTtcclxuICAgICAgICBhbmltYXRpb24tbmFtZTogcm90YXRlO1xyXG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgJjpmaXJzdC1vZi10eXBle1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpsYXN0LW9mLXR5cGV7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDIwZGVnKTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogcmV2ZXJzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLm9zLWJ0biB7XHJcbiAgICAgICAgcGFkZGluZzogMWVtIDNlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjaGFydHJldXNlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCByZ2JhKDEyOCwgMjU1LCAwLCAwLjI4OCk7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMjU1LCAwLCAwLjUxNCk7O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgQGtleWZyYW1lcyByb3RhdGV7XHJcbiAgICAgICAgMCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDI1JSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgNTAlICB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gICAgICAgIH0gICAgXHJcblxyXG4gICAgICAgIDc1JSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBAa2V5ZnJhbWVzIGV4YW1wbGUge1xyXG4gICAgICAgIGZyb20ge2JhY2tncm91bmQtY29sb3I6IHJlZDt9XHJcbiAgICAgICAgdG8ge2JhY2tncm91bmQtY29sb3I6IHllbGxvdzt9XHJcbiAgICAgIH1cclxuXHJcbn0iLCIub3Blbm5pbmctc2NyZWVuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIHotaW5kZXg6IDI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NTMpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5vcGVubmluZy1zY3JlZW4gLm9zLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjdlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogY2hhcnRyZXVzZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFlbTtcbiAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgdGV4dC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMTI4LCAyNTUsIDAsIDAuMjg4KTtcbn1cbi5vcGVubmluZy1zY3JlZW4gLm9zLWNhcmRzIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5vcGVubmluZy1zY3JlZW4gLm9zLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxZW07XG4gIGhlaWdodDogN2VtO1xuICB3aWR0aDogNWVtO1xuICBtYXJnaW46IDJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogY2hvY29sYXRlO1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCByZ2JhKDIxMCwgMTA1LCAzMCwgMC4yNCk7XG4gIGFuaW1hdGlvbi1uYW1lOiByb3RhdGU7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5vcGVubmluZy1zY3JlZW4gLm9zLWNhcmQ6Zmlyc3Qtb2YtdHlwZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0yMGRlZyk7XG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IG5vcm1hbDtcbn1cbi5vcGVubmluZy1zY3JlZW4gLm9zLWNhcmQ6bGFzdC1vZi10eXBlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjBkZWcpO1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiByZXZlcnNlO1xufVxuLm9wZW5uaW5nLXNjcmVlbiAub3MtYnRuIHtcbiAgcGFkZGluZzogMWVtIDNlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogY2hhcnRyZXVzZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCByZ2JhKDEyOCwgMjU1LCAwLCAwLjI4OCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5vcGVubmluZy1zY3JlZW4gLm9zLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAyNTUsIDAsIDAuNTE0KTtcbn1cbkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIH1cbiAgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGV4YW1wbGUge1xuICBmcm9tIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIH1cbiAgdG8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/openning-screen/openning-screen.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/openning-screen/openning-screen.component.ts ***!
    \**************************************************************/

  /*! exports provided: OpenningScreenComponent */

  /***/
  function srcAppOpenningScreenOpenningScreenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OpenningScreenComponent", function () {
      return OpenningScreenComponent;
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


    var _core_windows_full_screen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../core/windows/full-screen.service */
    "./src/app/core/windows/full-screen.service.ts");
    /* harmony import */


    var _core_memory_game_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../core/memory-game-manager.service */
    "./src/app/core/memory-game-manager.service.ts");
    /* harmony import */


    var _openning_screen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./openning-screen.service */
    "./src/app/openning-screen/openning-screen.service.ts");

    let OpenningScreenComponent = class OpenningScreenComponent {
      constructor(fullscreenService, memoryGameManagerService, openningScreenService) {
        this.fullscreenService = fullscreenService;
        this.memoryGameManagerService = memoryGameManagerService;
        this.openningScreenService = openningScreenService;
        this.first = true;
      }

      ngOnInit() {}

      go(game) {
        this.openningScreenService.hide();

        if (this.first) {
          this.fullscreenService.requestFullscreen();
          this.first = false;
        }

        this.memoryGameManagerService.setGame(game);
      }

      isIOS() {
        let agent = window.navigator.userAgent;
        let start = agent.indexOf("OS ");
        return (agent.indexOf("iPhone") > -1 || agent.indexOf("iPad") > -1) && start > -1;
      }

    };

    OpenningScreenComponent.ctorParameters = () => [{
      type: _core_windows_full_screen_service__WEBPACK_IMPORTED_MODULE_2__["FullScreenService"]
    }, {
      type: _core_memory_game_manager_service__WEBPACK_IMPORTED_MODULE_3__["MemoryGameManagerService"]
    }, {
      type: _openning_screen_service__WEBPACK_IMPORTED_MODULE_4__["OpenningScreenService"]
    }];

    OpenningScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-openning-screen',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./openning-screen.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/openning-screen/openning-screen.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./openning-screen.component.scss */
      "./src/app/openning-screen/openning-screen.component.scss")).default]
    })], OpenningScreenComponent);
    /***/
  },

  /***/
  "./src/app/openning-screen/openning-screen.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/openning-screen/openning-screen.service.ts ***!
    \************************************************************/

  /*! exports provided: OpenningScreenService */

  /***/
  function srcAppOpenningScreenOpenningScreenServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OpenningScreenService", function () {
      return OpenningScreenService;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let OpenningScreenService = class OpenningScreenService {
      constructor(rout) {
        this.rout = rout;
        this._display = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        console.log('queryParams', this.rout.snapshot.queryParams);
        this.rout.queryParamMap.subscribe(params => {
          console.log('params', params);

          if (params.get('debug')) {
            this._display.next(false);
          }
        });
      }

      get display$() {
        return this._display.asObservable();
      }

      display() {
        this._display.next(true);
      }

      hide() {
        this._display.next(false);
      }

    };

    OpenningScreenService.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }];

    OpenningScreenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], OpenningScreenService);
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


    const environment = {
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

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(err => console.error(err));
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
    /*! C:\Meir\Interview\porjects\memory-game\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map