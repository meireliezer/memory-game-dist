(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"header\">\n  <div class=\"header__section level\">Level<div class=\"value\">{{level}}</div></div>\n  <div class=\"header__section score\"> Score <div class=\"value\">{{totalScore}}</div></div>\n  <div class=\"header__section current_score\"\n        [ngClass]=\"currentClass()\"\n        > Current <div class=\"value\">{{current}}</div></div>\n  <div class=\"header__section timer\">Timer<div class=\"value\">{{timer}} sec</div></div>\n  <div class=\"header__section lives\">Lives<div class=\"value heart\">{{lives}}&#x2764;</div></div>\n</header>\n<main>    \n\n\n  <ng-container *ngFor=\"let data of getData(); index as idx \">  \n    <app-card class=\"app-card\" \n              [data]=\"data\"\n              [ngStyle]=\"getCardLevelDimension()\"\n              [cardIndex] = \"idx\"\n\n              (cardClicked)=onCardClicked($event)\n              >\n    </app-card>\n  </ng-container>\n  \n\n  \n</main>\n<footer class=\"actions\">\n  <div class=\"action\" \n      [ngClass]=\"{disabled: (level === 1)}\"\n      (click)=\"onPrevLevel()\"\n      title=\"Back\"\n      >&larr;</div>\n  <div class=\"action \"\n    (click)=\"onRun()\">\n    <div *ngIf=\"(gameState === 0)\"  title=\"Run\">&#9658;</div> <!-- play -->\n    <div *ngIf=\"(gameState !== 0 )\" title=\"Refresh\">&#8635;</div> <!-- refresh -->\n  </div>\n  <div *ngIf=\"(lives === 0)\" \n        class=\"action\" \n        (click)=\"onReset()\"\n        title=\"Reset\">&#8676;</div>\n  <div class=\"action\" \n      [ngClass]=\"{disabled: (level === userMaxLevel)}\"\n      (click)=\"onNextLevel()\"\n      title=\"Next\"\n   >&rarr;</div> \n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/memory/card/card/card.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/memory/card/card/card.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n    <div class=\"card__internal\"        \n        (click)=\"onClick()\">\n        <div class=\"card__internal-content\"\n            [style.backgroundColor]=\"(isActive()? data.data: '')\"\n        >\n\n        <!--\n            {{data | json}}\n        -->\n\n        </div>        \n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
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


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_memory_game_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/memory-game-manager.service */ "./src/app/core/memory-game-manager.service.ts");
/* harmony import */ var _core_memory_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/memory-data.service */ "./src/app/core/memory-data.service.ts");
/* harmony import */ var _memory_card_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./memory/card/card/card.component */ "./src/app/memory/card/card/card.component.ts");





var GAME_STATE;
(function (GAME_STATE) {
    GAME_STATE[GAME_STATE["INIT"] = 0] = "INIT";
    GAME_STATE[GAME_STATE["RUN"] = 1] = "RUN";
    GAME_STATE[GAME_STATE["COMPLETE"] = 2] = "COMPLETE";
    GAME_STATE[GAME_STATE["FAILED"] = 3] = "FAILED";
    GAME_STATE[GAME_STATE["FAILED_COMPLETE"] = 4] = "FAILED_COMPLETE";
})(GAME_STATE || (GAME_STATE = {}));
let AppComponent = class AppComponent {
    constructor(memoryGameManagerService, memoryDataService) {
        this.memoryGameManagerService = memoryGameManagerService;
        this.memoryDataService = memoryDataService;
        this.init();
    }
    get level() {
        return this.memoryGameManagerService.getCurrentLevel();
    }
    get userMaxLevel() {
        return this.memoryGameManagerService.getUserMaxLevel();
    }
    get gameState() {
        return this._gameState;
    }
    get totalScore() {
        return this.memoryGameManagerService.getTotalScore();
    }
    onNextLevel() {
        this.setNewLevel(true);
    }
    onPrevLevel() {
        this.setNewLevel(false);
    }
    getLevelMetadata() {
        return this._levelMetadata;
    }
    getCardLevelDimension() {
        let style = {
            width: this._levelMetadata.width,
            height: this._levelMetadata.height
        };
        return style;
    }
    currentClass() {
        let currentClass = '';
        switch (this._gameState) {
            case GAME_STATE.COMPLETE:
                currentClass = 'complete';
                break;
            case GAME_STATE.FAILED:
                currentClass = 'failed';
                break;
            case GAME_STATE.FAILED_COMPLETE:
                currentClass = 'failed--complete';
                break;
            default:
                if (this.current < 10) {
                    currentClass = 'warnning';
                }
                break;
        }
        return currentClass;
    }
    getData() {
        return this._levelMetadata.data;
    }
    // reduce lifes
    onCardClicked(cardClicked) {
        if (this._gameState === GAME_STATE.INIT) {
            this.onRun();
        }
        // First pair Click
        if (!this._firstCardClicked) {
            this._firstCardClicked = cardClicked;
        }
        // Second pair click
        else {
            // Same cards
            if (this._firstCardClicked.data.id === cardClicked.data.id) {
                ++this._totalPairs;
                this._cardComponents.forEach(cardComponent => {
                    if (cardComponent.data.id === cardClicked.data.id) {
                        cardComponent.pair();
                    }
                });
                this._firstCardClicked = null;
                navigator.vibrate(200);
                // ---------------------------------------------
                // Complete game
                // ---------------------------------------------
                if (this.isComplete()) {
                    // Stop timer
                    clearInterval(this._intervalHandler);
                    this._intervalHandler = null;
                    // Game Complete state
                    this._gameState = (this.current > 0) ? GAME_STATE.COMPLETE : GAME_STATE.FAILED_COMPLETE;
                    // Store data
                    this.memoryGameManagerService.completeLevel(this.isFailedStatus(), this.timer, this.current);
                    navigator.vibrate([300, 300, 300]);
                }
            }
            // Diffrent cards
            else {
                navigator.vibrate(2000);
                setTimeout(() => {
                    this._cardComponents.forEach(cardComponent => {
                        if ((cardComponent.data.id === cardClicked.data.id) || (cardComponent.data.id === this._firstCardClicked.data.id)) {
                            cardComponent.reset();
                        }
                    });
                    this._firstCardClicked = null;
                }, 250);
            }
        }
    }
    // Run Button
    onRun() {
        // Refresh
        if (this._gameState !== GAME_STATE.INIT) {
            this.setNewLevel();
            return;
        }
        this._gameState = GAME_STATE.RUN;
        this._intervalHandler = setInterval(() => {
            // Timer
            ++this.timer;
            // Score
            if (this.current > 0) {
                --this.current;
            }
            // Failed
            if (this.current === 0) {
                if (this.isComplete()) {
                    this._gameState = GAME_STATE.FAILED_COMPLETE;
                }
                else {
                    // Reduce lives
                    if (this._gameState !== GAME_STATE.FAILED) {
                        // Only if it is  user max level
                        if (this.level === this.memoryGameManagerService.getUserMaxLevel()) {
                            this.changeLives(-1);
                        }
                    }
                    this._gameState = GAME_STATE.FAILED;
                }
            }
        }, 1000);
    }
    onReset() {
        this.memoryGameManagerService.reset();
        this.init();
    }
    init() {
        this.lives = this.memoryGameManagerService.getLives();
        this.setNewLevel();
    }
    //next:  true-next level, false, prev level, undefine refresh current level
    setNewLevel(next) {
        if (next === true) {
            this.memoryGameManagerService.nextLevel();
        }
        else if (next === false) {
            this.memoryGameManagerService.prevLevel();
        }
        this._levelMetadata = this.memoryGameManagerService.getLevelMetadata();
        this._levelMetadata.data = this.memoryDataService.getRandomPairs(this._levelMetadata.cards / 2);
        this._totalPairs = 0;
        this._gameState = GAME_STATE.INIT;
        this.timer = 0;
        this.current = this._levelMetadata.score;
        if (this._intervalHandler) {
            clearInterval(this._intervalHandler);
            this._intervalHandler = null;
        }
    }
    changeLives(lives) {
        this.lives += lives;
        if (this.lives < 0) {
            this.lives = 0;
        }
        this.memoryGameManagerService.changeLive(lives);
    }
    isFailedStatus() {
        return (this._gameState === GAME_STATE.FAILED) || (this._gameState === GAME_STATE.FAILED_COMPLETE);
    }
    isComplete() {
        return (this._totalPairs === (this._levelMetadata.cards / 2));
    }
};
AppComponent.ctorParameters = () => [
    { type: _core_memory_game_manager_service__WEBPACK_IMPORTED_MODULE_2__["MemoryGameManagerService"] },
    { type: _core_memory_data_service__WEBPACK_IMPORTED_MODULE_3__["MemoryDataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_memory_card_card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"])
], AppComponent.prototype, "_cardComponents", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _memory_card_card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./memory/card/card/card.component */ "./src/app/memory/card/card/card.component.ts");






let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _memory_card_card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/game-metadata.const.ts":
/*!*********************************************!*\
  !*** ./src/app/core/game-metadata.const.ts ***!
  \*********************************************/
/*! exports provided: GAME_METADATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_METADATA", function() { return GAME_METADATA; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

;
const GAME_METADATA = [
    {
        level: 1,
        cards: 4,
        time: 4 * 2,
        score: 4 * 2,
        width: '50%',
        height: '50%',
    },
    {
        level: 2,
        cards: 6,
        time: 6 * 2,
        score: 6 * 2,
        width: '50%',
        height: '33%'
    },
    {
        level: 3,
        cards: 8,
        time: 8 * 2,
        score: 8 * 2,
        width: '50%',
        height: '25%'
    },
    {
        level: 4,
        cards: 10,
        time: 10 * 2,
        score: 10 * 2,
        width: '50%',
        height: '20%'
    },
    {
        level: 5,
        cards: 12,
        time: 12 * 2,
        score: 12 * 2,
        width: '25%',
        height: '33%'
    },
    {
        level: 6,
        cards: 14,
        time: 14 * 2,
        score: 14 * 2,
        width: '25%',
        height: '25%'
    },
    {
        level: 7,
        cards: 16,
        time: 16 * 2,
        score: 16 * 2,
        width: '25%',
        height: '25%'
    },
    {
        level: 8,
        cards: 18,
        time: 18 * 2,
        score: 18 * 2,
        width: '25%',
        height: '20%'
    },
    {
        level: 9,
        cards: 20,
        time: 20 * 2,
        score: 20 * 2,
        width: '25%',
        height: '20%'
    }
];


/***/ }),

/***/ "./src/app/core/memory-data.service.ts":
/*!*********************************************!*\
  !*** ./src/app/core/memory-data.service.ts ***!
  \*********************************************/
/*! exports provided: MemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryDataService", function() { return MemoryDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MemoryDataService = class MemoryDataService {
    constructor() {
        this._colorList = [
            '#000000',
            '#000080',
            '#008000',
            '#00BFFF',
            '#00FA9A',
            '#00FF00',
            '#2F4F4F',
            '#4B0082',
            '#800000',
            '#800080',
            '#8B4513',
            '#DAA520',
            '#FF00FF',
            '#FFD700'
        ];
    }
    getRandomPairs(num) {
        let randomColors = this.randomize(this._colorList);
        randomColors.length = num;
        let pairs = [];
        randomColors.map((color, index) => {
            pairs.push({ id: index, data: color });
            pairs.push({ id: index, data: color });
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
MemoryDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MemoryDataService);



/***/ }),

/***/ "./src/app/core/memory-game-manager.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/memory-game-manager.service.ts ***!
  \*****************************************************/
/*! exports provided: MemoryGameManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryGameManagerService", function() { return MemoryGameManagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _game_metadata_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-metadata.const */ "./src/app/core/game-metadata.const.ts");
/* harmony import */ var _user_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-data.service */ "./src/app/core/user-data.service.ts");




let MemoryGameManagerService = class MemoryGameManagerService {
    constructor(userDataService) {
        this.userDataService = userDataService;
        this.initFromUserData();
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
    getTotalScore() {
        let total = 0;
        total = this.userDataService.getLevelHistory()
            .map(item => item.score)
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return total;
    }
    changeLive(lives) {
        this._lives += lives;
        this.userDataService.setLives(this._lives);
    }
    getLevelMetadata() {
        return _game_metadata_const__WEBPACK_IMPORTED_MODULE_2__["GAME_METADATA"][this._currentLevel - 1];
    }
    nextLevel() {
        if (this._currentLevel === _game_metadata_const__WEBPACK_IMPORTED_MODULE_2__["GAME_METADATA"].length) {
            return this._currentLevel;
        }
        ++this._currentLevel;
        this.userDataService.setCurrentLevel(this._currentLevel);
        if (this._userMaxLevel < this._currentLevel) {
            this._userMaxLevel = this._currentLevel;
            this.userDataService.setUserMaxLevel(this._userMaxLevel);
        }
        return this._currentLevel;
    }
    prevLevel() {
        if (this._currentLevel > 1) {
            --this._currentLevel;
            this.userDataService.setCurrentLevel(this._currentLevel);
        }
        return this._currentLevel;
    }
    completeLevel(failed, time, score) {
        // Save data;
        this.userDataService.setLevelData(this._currentLevel, score, time);
        // Should enable next level
        if (!failed && (this._currentLevel === this._userMaxLevel) && (this._lives > 0)) {
            ++this._userMaxLevel;
            // Save data;
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
    }
};
MemoryGameManagerService.ctorParameters = () => [
    { type: _user_data_service__WEBPACK_IMPORTED_MODULE_3__["UserDataService"] }
];
MemoryGameManagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MemoryGameManagerService);



/***/ }),

/***/ "./src/app/core/user-data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/user-data.service.ts ***!
  \*******************************************/
/*! exports provided: UserDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataService", function() { return UserDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const INIT_USER_MAX_LEVLE = 1;
const INIT_CURRENT_MAX_LEVEL = 1;
const INIT_LIVES = 5;
let UserDataService = class UserDataService {
    constructor() {
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
        }
        else {
            levelData = { level, time, score };
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
            lives: INIT_LIVES
        };
    }
    loadData() {
        let userData = localStorage.getItem('userData');
        if (userData) {
            let userDataObj = JSON.parse(userData);
            this._userData = userDataObj;
        }
        else {
            this.reset();
        }
    }
    saveData() {
        let data = JSON.stringify(this._userData);
        localStorage.setItem('userData', data);
    }
};
UserDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserDataService);



/***/ }),

/***/ "./src/app/memory/card/card/card.component.scss":
/*!******************************************************!*\
  !*** ./src/app/memory/card/card/card.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbW9yeS9jYXJkL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/memory/card/card/card.component.ts":
/*!****************************************************!*\
  !*** ./src/app/memory/card/card/card.component.ts ***!
  \****************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CardComponent = class CardComponent {
    constructor(elmRef, render) {
        this.elmRef = elmRef;
        this.render = render;
        this._isClick = false;
        this._backgroundColor = '';
        this._isPair = false;
        this.cardClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this._backgroundColor = this.elmRef.nativeElement;
    }
    isActive() {
        return this._isClick;
    }
    // "You touch you go"
    onClick() {
        if (this._isClick == false) {
            this._isClick = !this._isClick;
            this.cardClicked.emit({ cardIndex: this.cardIndex, data: this.data });
        }
    }
    // API
    pair() {
        this._isPair = true;
    }
    reset() {
        this._isClick = false;
    }
};
CardComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "data", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "cardIndex", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CardComponent.prototype, "cardClicked", void 0);
CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/memory/card/card/card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./card.component.scss */ "./src/app/memory/card/card/card.component.scss")).default]
    })
], CardComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Meir\Interview\porjects\memory-game\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map