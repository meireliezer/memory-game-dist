(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n:root {\n  --clr-primary: rgba(128, 128, 128, 0.603);\n  --clr-accent: rgba(128, 128, 128, 0.781);\n}\n*, *::after, *::before {\n  box-sizing: inherit;\n}\nbody {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n}\nbody {\n  height: 100vh;\n  -webkit-clip-path: polygon(0 0, 100vw 0, 100vw 100vh, 0 100vh);\n          clip-path: polygon(0 0, 100vw 0, 100vw 100vh, 0 100vh);\n}\napp-root {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.disabled {\n  pointer-events: none;\n  cursor: initial;\n  background-color: rgba(0, 0, 0, 0.315);\n}\nmain {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n}\n.screen {\n  display: none;\n}\n.screen--display {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.192);\n  width: 100%;\n  height: 100%;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.screen__timer, .screen__title {\n  color: rgba(255, 255, 255, 0.719);\n  font-size: 7em;\n  font-weight: bold;\n  text-shadow: 5px 5px 5px black;\n  text-align: center;\n}\n.screen__title {\n  font-size: 3em;\n}\nheader {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  background-color: var(--clr-primary);\n  -webkit-transition: background-color linear 500ms;\n  transition: background-color linear 500ms;\n  padding-top: 0.3em;\n  padding-bottom: 0.3em;\n}\nheader .header__section {\n  font-weight: bold;\n  padding: 0.3em;\n}\nheader .header__section--left {\n  margin-left: 1em;\n}\nheader .header__section--center {\n  text-align: center;\n}\nheader .header__section--right {\n  margin-right: 1em;\n}\nheader .value {\n  font-weight: normal;\n  display: inline-block;\n}\n.game-warning {\n  background-color: #eeee09;\n}\n.game-alert {\n  background-color: #ff4400;\n}\n.game-failed {\n  background-color: red;\n}\n.header__section_menu {\n  width: 3em;\n  height: 100%;\n  background-color: var(--clr-primary);\n  border: 1px solid black;\n  border-radius: 0.5em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  cursor: pointer;\n}\n.header__section_menu:hover {\n  background-color: rgba(0, 0, 0, 0.548);\n}\n.header__section_menu .menu {\n  --menu-height: 3px;\n  --menu-color: black;\n  position: relative;\n  background-color: var(--menu-color);\n  height: var(--menu-height);\n  width: 80%;\n}\n.header__section_menu .menu::before {\n  content: \"\";\n  position: absolute;\n  background-color: var(--menu-color);\n  height: var(--menu-height);\n  width: 100%;\n  top: -0.5em;\n}\n.header__section_menu .menu::after {\n  content: \"\";\n  position: absolute;\n  background-color: var(--menu-color);\n  height: var(--menu-height);\n  width: 100%;\n  top: 0.5em;\n}\n.actions {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  background-color: var(--clr-primary);\n  padding-bottom: 0.3em;\n  padding-top: 0.3em;\n  border: 1px solid black;\n  border-radius: 5px;\n  font-size: 1.2em;\n  font-weight: bold;\n}\n.action {\n  background-color: lightgray;\n  padding: 0.5em;\n  border-radius: 25%;\n  cursor: pointer;\n}\n.action:hover {\n  background-color: var(--clr-accent);\n}\n.app-card {\n  width: 25%;\n  height: 25%;\n}\n.card {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n}\n.card__internal {\n  margin: 0.2em;\n  width: 100%;\n  border: 1px solid black;\n  border-radius: 5px;\n  box-shadow: 5px 5px 5px gray;\n  background-color: rgba(173, 216, 230, 0.493);\n  cursor: pointer;\n}\n.card__internal:hover {\n  background-color: rgba(173, 216, 230, 0.712);\n}\n.card__internal-content {\n  height: 100%;\n}\n.card__internal--symbol {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 3rem;\n}\n.main-page {\n  position: absolute;\n  background-color: rgba(27, 30, 36, 0.438);\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.main-page-content {\n  background-color: rgba(0, 0, 0, 0.63);\n  color: white;\n  width: 80%;\n  height: 80%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  border-radius: 5px;\n}\n.main-page-content .title {\n  font-size: 3rem;\n  text-align: center;\n}\n.main-page-content .game-actions {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n  text-align: center;\n  font-size: 1rem;\n  margin: 1em;\n}\n.main-page-content .game-actions .game-action {\n  border: 2px solid white;\n  border-radius: 5px;\n  padding: 0.5em 1.5em;\n  cursor: pointer;\n  margin-bottom: 1em;\n}\n.main-page-content .game-actions .game-action:hover {\n  background-color: #6b6767;\n}\n@media (min-width: 1200px) {\n  .main-page-content {\n    max-width: 1000px;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DOlxcTWVpclxcSW50ZXJ2aWV3XFxwb3JqZWN0c1xcbWVtb3J5LWdhbWUvc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9DOlxcTWVpclxcSW50ZXJ2aWV3XFxwb3JqZWN0c1xcbWVtb3J5LWdhbWUvc3JjXFxzdHlsZVxcdHlwb2dyYXBoeS5zY3NzIiwic3JjL3N0eWxlcy5zY3NzIiwic3JjL0M6XFxNZWlyXFxJbnRlcnZpZXdcXHBvcmplY3RzXFxtZW1vcnktZ2FtZS9zcmNcXHN0eWxlXFxtYWluLnNjc3MiLCJzcmMvQzpcXE1laXJcXEludGVydmlld1xccG9yamVjdHNcXG1lbW9yeS1nYW1lL3NyY1xcc3R5bGVcXGhlYWRlci5zY3NzIiwic3JjL0M6XFxNZWlyXFxJbnRlcnZpZXdcXHBvcmplY3RzXFxtZW1vcnktZ2FtZS9zcmNcXHN0eWxlXFxmb290ZXIuc2NzcyIsInNyYy9DOlxcTWVpclxcSW50ZXJ2aWV3XFxwb3JqZWN0c1xcbWVtb3J5LWdhbWUvc3JjXFxzdHlsZVxcY2FyZC5zY3NzIiwic3JjL0M6XFxNZWlyXFxJbnRlcnZpZXdcXHBvcmplY3RzXFxtZW1vcnktZ2FtZS9zcmNcXHN0eWxlXFxtYWluLXBhZ2UtdG9wLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNBQTtFQUNJLHlDQUFBO0VBQ0Esd0NBQUE7QUNFSjtBREVBO0VBQ0ksbUJBQUE7QUNDSjtBREVBO0VBQ0ksc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDQ0o7QURFQTtFQUNJLGFBQUE7RUFDQSw4REFBQTtVQUFBLHNEQUFBO0FDQ0o7QURFQTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDQ0o7QURFQTtFQUNJLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0FDQ0o7QUNoQ0E7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FEbUNKO0FDaENBO0VBQ0ksYUFBQTtBRG1DSjtBQ2pDSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FEbUNSO0FDaENJO0VBRUksaUNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FEaUNSO0FDOUJJO0VBQ0ksY0FBQTtBRGdDUjtBRWhFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLGlEQUFBO0VBQUEseUNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FGbUVKO0FFakVJO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FGbUVSO0FFaEVJO0VBQ0ksZ0JBQUE7QUZrRVI7QUVoRUk7RUFDSSxrQkFBQTtBRmtFUjtBRWhFSTtFQUNJLGlCQUFBO0FGa0VSO0FFL0RJO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtBRmlFUjtBRTdEQTtFQUNJLHlCQUFBO0FGZ0VKO0FFN0RBO0VBQ0kseUJBQUE7QUZnRUo7QUU3REE7RUFDSSxxQkFBQTtBRmdFSjtBRTdEQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxlQUFBO0FGZ0VKO0FFOURJO0VBQ0ksc0NBQUE7QUZnRVI7QUU5REk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtBRmdFUjtBRTVEUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBRjhEWjtBRTNEUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBRjZEWjtBRzdJQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUhnSko7QUc3SUE7RUFDSSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUhnSko7QUc5SUk7RUFDSSxtQ0FBQTtBSGdKUjtBSWxLQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FKcUtKO0FJbEtBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUpxS0o7QUluS0E7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLDRDQUFBO0VBQ0EsZUFBQTtBSnNLSjtBSXBLSTtFQUVJLDRDQUFBO0FKcUtSO0FJaktBO0VBQ0ksWUFBQTtBSm9LSjtBSWpLQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7QUpvS0o7QUt2TUE7RUFDSSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBTDBNSjtBS3RNSTtFQUNJLHFDQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBRUEsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGtCQUFBO0FMdU1SO0FLbk1RO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FMcU1aO0FLbE1RO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsOEJBQUE7VUFBQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUxvTVo7QUtsTVk7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUxvTWhCO0FLak1nQjtFQUNJLHlCQUFBO0FMbU1wQjtBSzVMQTtFQUVRO0lBQ0ksaUJBQUE7SUFDQSx5QkFBQTtZQUFBLG1CQUFBO0VMOExWO0FBQ0YiLCJmaWxlIjoic3JjL3N0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG5cbkBpbXBvcnQgJ3N0eWxlL3R5cG9ncmFwaHknO1xuQGltcG9ydCAnc3R5bGUvbWFpbi5zY3NzJztcbkBpbXBvcnQgJ3N0eWxlL2hlYWRlci5zY3NzJztcbkBpbXBvcnQgJ3N0eWxlL2Zvb3Rlci5zY3NzJztcbkBpbXBvcnQgJ3N0eWxlL2NhcmQuc2Nzcyc7XG5AaW1wb3J0ICdzdHlsZS9tYWluLXBhZ2UtdG9wLnNjc3MnOyIsIjpyb290IHtcclxuICAgIC0tY2xyLXByaW1hcnk6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC42MDMpO1xyXG4gICAgLS1jbHItYWNjZW50OiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNzgxKTtcclxufVxyXG5cclxuXHJcbiosICo6OmFmdGVyLCAqOjpiZWZvcmUge1xyXG4gICAgYm94LXNpemluZzogaW5oZXJpdDsgICAgICAgICBcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47IFxyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGhlaWdodDogMTAwdmg7ICAgICBcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMHZ3IDAsIDEwMHZ3IDEwMHZoLCAwIDEwMHZoKTsgICAvLyBpbiBtb2JpbGUgeW91IG1heSBnZXQgbW9yZSB0aGVuIDEwMFxyXG59XHJcblxyXG5hcHAtcm9vdCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmRpc2FibGVkIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgY3Vyc29yOiBpbml0aWFsO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMxNSk7XHJcbn1cclxuXHJcbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbjpyb290IHtcbiAgLS1jbHItcHJpbWFyeTogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjYwMyk7XG4gIC0tY2xyLWFjY2VudDogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjc4MSk7XG59XG5cbiosICo6OmFmdGVyLCAqOjpiZWZvcmUge1xuICBib3gtc2l6aW5nOiBpbmhlcml0O1xufVxuXG5ib2R5IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwdncgMCwgMTAwdncgMTAwdmgsIDAgMTAwdmgpO1xufVxuXG5hcHAtcm9vdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZGlzYWJsZWQge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgY3Vyc29yOiBpbml0aWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzE1KTtcbn1cblxubWFpbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zY3JlZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnNjcmVlbi0tZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE5Mik7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNjcmVlbl9fdGltZXIsIC5zY3JlZW5fX3RpdGxlIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43MTkpO1xuICBmb250LXNpemU6IDdlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtc2hhZG93OiA1cHggNXB4IDVweCBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNjcmVlbl9fdGl0bGUge1xuICBmb250LXNpemU6IDNlbTtcbn1cblxuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgbGluZWFyIDUwMG1zO1xuICBwYWRkaW5nLXRvcDogMC4zZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjNlbTtcbn1cbmhlYWRlciAuaGVhZGVyX19zZWN0aW9uIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDAuM2VtO1xufVxuaGVhZGVyIC5oZWFkZXJfX3NlY3Rpb24tLWxlZnQge1xuICBtYXJnaW4tbGVmdDogMWVtO1xufVxuaGVhZGVyIC5oZWFkZXJfX3NlY3Rpb24tLWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmhlYWRlciAuaGVhZGVyX19zZWN0aW9uLS1yaWdodCB7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufVxuaGVhZGVyIC52YWx1ZSB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmdhbWUtd2FybmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlMDk7XG59XG5cbi5nYW1lLWFsZXJ0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDQwMDtcbn1cblxuLmdhbWUtZmFpbGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4uaGVhZGVyX19zZWN0aW9uX21lbnUge1xuICB3aWR0aDogM2VtO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmhlYWRlcl9fc2VjdGlvbl9tZW51OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0OCk7XG59XG4uaGVhZGVyX19zZWN0aW9uX21lbnUgLm1lbnUge1xuICAtLW1lbnUtaGVpZ2h0OiAzcHg7XG4gIC0tbWVudS1jb2xvcjogYmxhY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVudS1jb2xvcik7XG4gIGhlaWdodDogdmFyKC0tbWVudS1oZWlnaHQpO1xuICB3aWR0aDogODAlO1xufVxuLmhlYWRlcl9fc2VjdGlvbl9tZW51IC5tZW51OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lbnUtY29sb3IpO1xuICBoZWlnaHQ6IHZhcigtLW1lbnUtaGVpZ2h0KTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogLTAuNWVtO1xufVxuLmhlYWRlcl9fc2VjdGlvbl9tZW51IC5tZW51OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVudS1jb2xvcik7XG4gIGhlaWdodDogdmFyKC0tbWVudS1oZWlnaHQpO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwLjVlbTtcbn1cblxuLmFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xuICBwYWRkaW5nLWJvdHRvbTogMC4zZW07XG4gIHBhZGRpbmctdG9wOiAwLjNlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5hY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBib3JkZXItcmFkaXVzOiAyNSU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hY3Rpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50KTtcbn1cblxuLmFwcC1jYXJkIHtcbiAgd2lkdGg6IDI1JTtcbiAgaGVpZ2h0OiAyNSU7XG59XG5cbi5jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmNhcmRfX2ludGVybmFsIHtcbiAgbWFyZ2luOiAwLjJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IGdyYXk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTczLCAyMTYsIDIzMCwgMC40OTMpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2FyZF9faW50ZXJuYWw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3MywgMjE2LCAyMzAsIDAuNzEyKTtcbn1cblxuLmNhcmRfX2ludGVybmFsLWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jYXJkX19pbnRlcm5hbC0tc3ltYm9sIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzcmVtO1xufVxuXG4ubWFpbi1wYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI3LCAzMCwgMzYsIDAuNDM4KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbi1wYWdlLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjMpO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogODAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLm1haW4tcGFnZS1jb250ZW50IC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1haW4tcGFnZS1jb250ZW50IC5nYW1lLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbjogMWVtO1xufVxuLm1haW4tcGFnZS1jb250ZW50IC5nYW1lLWFjdGlvbnMgLmdhbWUtYWN0aW9uIHtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMC41ZW0gMS41ZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuLm1haW4tcGFnZS1jb250ZW50IC5nYW1lLWFjdGlvbnMgLmdhbWUtYWN0aW9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZiNjc2Nztcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAubWFpbi1wYWdlLWNvbnRlbnQge1xuICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn0iLCJcclxubWFpbnsgICAgXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc2NyZWVuIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gICAgJi0tZGlzcGxheSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTkyKTtcclxuICAgICAgICB3aWR0aDogMTAwJTsgICAgICAgIFxyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgICAgICAgIFxyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGltZXIsXHJcbiAgICAmX190aXRsZSB7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43MTkpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogN2VtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHRleHQtc2hhZG93OiA1cHggNXB4IDVweCBibGFjazsgICAgICAgIFxyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAmX190aXRsZXtcclxuICAgICAgICBmb250LXNpemU6IDNlbTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiIsImhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI3t2YXIoLS1jbHItcHJpbWFyeSl9O1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciBsaW5lYXIgNTAwbXMgO1xyXG4gICAgcGFkZGluZy10b3A6IDAuM2VtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuM2VtO1xyXG5cclxuICAgIC5oZWFkZXJfX3NlY3Rpb24gIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgcGFkZGluZzogMC4zZW07ICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGVyX19zZWN0aW9uLS1sZWZ0IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMWVtOyAgICAgICAgICAgICAgICBcclxuICAgIH1cclxuICAgIC5oZWFkZXJfX3NlY3Rpb24tLWNlbnRlcntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgIFxyXG4gICAgfVxyXG4gICAgLmhlYWRlcl9fc2VjdGlvbi0tcmlnaHQge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLnZhbHVlIHsgICAgICAgIFxyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7ICAgIFxyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbi5nYW1lLXdhcm5pbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMjM4LCA5KTsgICBcclxufVxyXG5cclxuLmdhbWUtYWxlcnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNjgsIDApO1xyXG59XHJcblxyXG4uZ2FtZS1mYWlsZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XHJcbn1cclxuXHJcbi5oZWFkZXJfX3NlY3Rpb25fbWVudXsgICAgXHJcbiAgICB3aWR0aDogM2VtO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTsgICAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQ4KTtcclxuICAgIH1cclxuICAgIC5tZW51IHtcclxuICAgICAgICAtLW1lbnUtaGVpZ2h0OiAzcHg7XHJcbiAgICAgICAgLS1tZW51LWNvbG9yOiBibGFjaztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7ICAgICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZW51LWNvbG9yKTtcclxuICAgICAgICBoZWlnaHQ6IHZhcigtLW1lbnUtaGVpZ2h0KTtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZW51LWNvbG9yKTtcclxuICAgICAgICAgICAgaGVpZ2h0OiB2YXIoLS1tZW51LWhlaWdodCk7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB0b3A6IC0wLjVlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVudS1jb2xvcik7XHJcbiAgICAgICAgICAgIGhlaWdodDogdmFyKC0tbWVudS1oZWlnaHQpO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgdG9wOiAwLjVlbTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG4iLCIuYWN0aW9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAje3ZhcigtLWNsci1wcmltYXJ5KX07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4zZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMC4zZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmFjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7ICAgIFxyXG4gICAgcGFkZGluZzogMC41ZW07ICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAyNSU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI3t2YXIoLS1jbHItYWNjZW50KX07XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiXHJcbi5hcHAtY2FyZCB7XHJcbiAgICB3aWR0aDogMjUlOyAgICAgICAgICAgIFxyXG4gICAgaGVpZ2h0OiAyNSU7ICAgICAgIFxyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTsgICAgICAgICAgICBcclxuICAgIGhlaWdodDogMTAwJTsgICAgIFxyXG4gICAgZGlzcGxheTogZmxleDsgICAgXHJcbn1cclxuLmNhcmRfX2ludGVybmFsIHsgICBcclxuICAgIG1hcmdpbjogMC4yZW07IFxyXG4gICAgd2lkdGg6IDEwMCU7ICAgIFxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCBncmF5OyAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTczLCAyMTYsIDIzMCwgMC40OTMpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzMsIDIxNiwgMjMwLCAwLjcxMik7XHJcbiAgICB9ICAgXHJcbn1cclxuXHJcbi5jYXJkX19pbnRlcm5hbC1jb250ZW50IHsgICAgXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXJkX19pbnRlcm5hbC0tc3ltYm9sIHsgICAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgXHJcbn0iLCIubWFpbi1wYWdlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjcsIDMwLCAzNiwgMC40MzgpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7ICAgICAgICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG5cclxuXHJcbiAgICAmLWNvbnRlbnR7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYzKTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBoZWlnaHQ6IDgwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgLnRpdGxlIHsgICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtOyAgICAgICAgIFxyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5nYW1lLWFjdGlvbnN7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7ICAgICBcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgICAgICAgXHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTsgICAgICAgICBcclxuICAgICAgICAgICAgbWFyZ2luOiAxZW07XHJcblxyXG4gICAgICAgICAgICAuZ2FtZS1hY3Rpb257XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtIDEuNWVtO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNywgMTAzLCAxMDMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KXtcclxuICAgIC5tYWluLXBhZ2Uge1xyXG4gICAgICAgICYtY29udGVudHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIC5nYW1lLWFjdGlvbnMge1xyXG4gICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--15-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Meir\Interview\porjects\memory-game\src\styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map