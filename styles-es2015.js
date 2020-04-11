(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n:root {\n  --clr-primary: rgba(128, 128, 128, 0.603);\n  --clr-accent: rgba(128, 128, 128, 0.781);\n}\n*, *::after, *::before {\n  box-sizing: inherit;\n}\nbody {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nbody {\n  height: 100vh;\n}\napp-root {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\nmain {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n}\n.screen {\n  display: none;\n}\n.screen--display {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.192);\n  width: 100%;\n  height: 100%;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.screen__timer, .screen__title {\n  color: rgba(255, 255, 255, 0.719);\n  font-size: 7em;\n  font-weight: bold;\n  text-shadow: 5px 5px 5px black;\n  text-align: center;\n}\n.screen__title {\n  font-size: 3em;\n}\nheader {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  background-color: var(--clr-primary);\n  -webkit-transition: background-color linear 500ms;\n  transition: background-color linear 500ms;\n}\nheader .header__section {\n  width: 25%;\n  text-align: center;\n  font-weight: bold;\n  padding: 0.3em;\n  border: 1px solid black;\n  border-radius: 5px;\n}\nheader .value {\n  text-align: center;\n  font-weight: normal;\n}\nheader .heart {\n  color: red;\n}\n.game-warning {\n  background-color: #eeee09;\n}\n.game-alert {\n  background-color: #ff4400;\n}\n.game-failed {\n  background-color: red;\n}\n.header__section_menu {\n  width: 2em;\n  height: 100%;\n  background-color: var(--clr-primary);\n  border: 1px solid black;\n  border-radius: 5px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  cursor: pointer;\n}\n.header__section_menu:hover {\n  background-color: rgba(0, 0, 0, 0.548);\n}\n.header__section_menu .menu {\n  --menu-height: 3px;\n  --menu-color: black;\n  position: relative;\n  background-color: var(--menu-color);\n  height: var(--menu-height);\n  width: 80%;\n}\n.header__section_menu .menu::before {\n  content: \"\";\n  position: absolute;\n  background-color: var(--menu-color);\n  height: var(--menu-height);\n  width: 100%;\n  top: -0.5em;\n}\n.header__section_menu .menu::after {\n  content: \"\";\n  position: absolute;\n  background-color: var(--menu-color);\n  height: var(--menu-height);\n  width: 100%;\n  top: 0.5em;\n}\n.actions {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  background-color: var(--clr-primary);\n  padding-bottom: 0.3em;\n  padding-top: 0.3em;\n  border: 1px solid black;\n  border-radius: 5px;\n  font-size: 1.2em;\n  font-weight: bold;\n}\n.action {\n  background-color: lightgray;\n  padding: 0.5em;\n  border-radius: 25%;\n  cursor: pointer;\n}\n.action:hover {\n  background-color: var(--clr-accent);\n}\n.disabled {\n  pointer-events: none;\n  cursor: initial;\n  background-color: rgba(0, 0, 0, 0.315);\n}\n.action--center {\n  display: -webkit-box;\n  display: flex;\n}\n.action--center div {\n  border: 1px solid;\n}\n.action--center div + div {\n  margin-left: 0.2em;\n}\n.crossed {\n  position: relative;\n}\n.crossed:before {\n  content: \"\";\n  position: absolute;\n  background-color: black;\n  height: 1px;\n  width: 100%;\n  -webkit-transform: translateX(-25%) translateY(0.7em) rotate(45deg);\n          transform: translateX(-25%) translateY(0.7em) rotate(45deg);\n}\n.crossed:after {\n  content: \"\";\n  position: absolute;\n  background-color: black;\n  height: 1px;\n  width: 100%;\n  -webkit-transform: translateX(-75%) translateY(0.7em) rotate(-45deg);\n          transform: translateX(-75%) translateY(0.7em) rotate(-45deg);\n}\n.app-card {\n  width: 25%;\n  height: 25%;\n}\n.card {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n}\n.card__internal {\n  margin: 0.2em;\n  width: 100%;\n  border: 1px solid black;\n  border-radius: 5px;\n  box-shadow: 5px 5px 5px gray;\n  background-color: rgba(173, 216, 230, 0.493);\n  cursor: pointer;\n}\n.card__internal:hover {\n  background-color: rgba(173, 216, 230, 0.712);\n}\n.card__internal-content {\n  height: 100%;\n}\n.card__internal--symbol {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DOlxcTWVpclxcSW50ZXJ2aWV3XFxwb3JqZWN0c1xcbWVtb3J5LWdhbWUvc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9DOlxcTWVpclxcSW50ZXJ2aWV3XFxwb3JqZWN0c1xcbWVtb3J5LWdhbWUvc3JjXFxzdHlsZVxcdHlwb2dyYXBoeS5zY3NzIiwic3JjL3N0eWxlcy5zY3NzIiwic3JjL0M6XFxNZWlyXFxJbnRlcnZpZXdcXHBvcmplY3RzXFxtZW1vcnktZ2FtZS9zcmNcXHN0eWxlXFxtYWluLnNjc3MiLCJzcmMvQzpcXE1laXJcXEludGVydmlld1xccG9yamVjdHNcXG1lbW9yeS1nYW1lL3NyY1xcc3R5bGVcXGhlYWRlci5zY3NzIiwic3JjL0M6XFxNZWlyXFxJbnRlcnZpZXdcXHBvcmplY3RzXFxtZW1vcnktZ2FtZS9zcmNcXHN0eWxlXFxmb290ZXIuc2NzcyIsInNyYy9DOlxcTWVpclxcSW50ZXJ2aWV3XFxwb3JqZWN0c1xcbWVtb3J5LWdhbWUvc3JjXFxzdHlsZVxcY2FyZC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FDQUE7RUFDSSx5Q0FBQTtFQUNBLHdDQUFBO0FDRUo7QURFQTtFQUNJLG1CQUFBO0FDQ0o7QURFQTtFQUNJLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNDSjtBREdBO0VBQ0ksYUFBQTtBQ0FKO0FER0E7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ0FKO0FDekJBO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBRDRCSjtBQ3pCQTtFQUNJLGFBQUE7QUQ0Qko7QUMxQkk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBRDRCUjtBQ3pCSTtFQUVJLGlDQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBRDBCUjtBQ3ZCSTtFQUNJLGNBQUE7QUR5QlI7QUV4REE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSxpREFBQTtFQUFBLHlDQUFBO0FGMkRKO0FFekRJO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBRjJEUjtBRXhESTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUYwRFI7QUV2REk7RUFDSSxVQUFBO0FGeURSO0FFckRBO0VBQ0kseUJBQUE7QUZ3REo7QUVyREE7RUFDSSx5QkFBQTtBRndESjtBRXJEQTtFQUNJLHFCQUFBO0FGd0RKO0FFckRBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7QUZ3REo7QUV0REk7RUFDSSxzQ0FBQTtBRndEUjtBRXRESTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0FGd0RSO0FFcERRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FGc0RaO0FFbkRRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FGcURaO0FHaklBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBSG9JSjtBR2pJQTtFQUNJLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBSG9JSjtBR2xJSTtFQUNJLG1DQUFBO0FIb0lSO0FHaElBO0VBQ0ksb0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0NBQUE7QUhtSUo7QUdoSUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7QUhtSUo7QUdqSUk7RUFDSSxpQkFBQTtBSG1JUjtBR2hJSTtFQUNJLGtCQUFBO0FIa0lSO0FHOUhBO0VBQ0ksa0JBQUE7QUhpSUo7QUc5SEE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUVBQUE7VUFBQSwyREFBQTtBSGlJSjtBRzNIQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxvRUFBQTtVQUFBLDREQUFBO0FIOEhKO0FJNUxBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUorTEo7QUk1TEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBSitMSjtBSTdMQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNENBQUE7RUFDQSxlQUFBO0FKZ01KO0FJOUxJO0VBRUksNENBQUE7QUorTFI7QUkzTEE7RUFDSSxZQUFBO0FKOExKO0FJM0xBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZUFBQTtBSjhMSiIsImZpbGUiOiJzcmMvc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cblxuQGltcG9ydCAnc3R5bGUvdHlwb2dyYXBoeSc7XG5AaW1wb3J0ICdzdHlsZS9tYWluLnNjc3MnO1xuQGltcG9ydCAnc3R5bGUvaGVhZGVyLnNjc3MnO1xuQGltcG9ydCAnc3R5bGUvZm9vdGVyLnNjc3MnO1xuQGltcG9ydCAnc3R5bGUvY2FyZC5zY3NzJzsiLCI6cm9vdCB7XHJcbiAgICAtLWNsci1wcmltYXJ5OiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNjAzKTtcclxuICAgIC0tY2xyLWFjY2VudDogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjc4MSk7XHJcbn1cclxuXHJcblxyXG4qLCAqOjphZnRlciwgKjo6YmVmb3JlIHtcclxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7ICAgICAgICAgXHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiBcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoOyAgICAgICAgXHJcbn1cclxuXHJcbmFwcC1yb290IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5cclxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuOnJvb3Qge1xuICAtLWNsci1wcmltYXJ5OiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNjAzKTtcbiAgLS1jbHItYWNjZW50OiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNzgxKTtcbn1cblxuKiwgKjo6YWZ0ZXIsICo6OmJlZm9yZSB7XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG59XG5cbmJvZHkge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5hcHAtcm9vdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5tYWluIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNjcmVlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uc2NyZWVuLS1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTkyKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2NyZWVuX190aW1lciwgLnNjcmVlbl9fdGl0bGUge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcxOSk7XG4gIGZvbnQtc2l6ZTogN2VtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1zaGFkb3c6IDVweCA1cHggNXB4IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2NyZWVuX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogM2VtO1xufVxuXG5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciBsaW5lYXIgNTAwbXM7XG59XG5oZWFkZXIgLmhlYWRlcl9fc2VjdGlvbiB7XG4gIHdpZHRoOiAyNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDAuM2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuaGVhZGVyIC52YWx1ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbmhlYWRlciAuaGVhcnQge1xuICBjb2xvcjogcmVkO1xufVxuXG4uZ2FtZS13YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWUwOTtcbn1cblxuLmdhbWUtYWxlcnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0NDAwO1xufVxuXG4uZ2FtZS1mYWlsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5oZWFkZXJfX3NlY3Rpb25fbWVudSB7XG4gIHdpZHRoOiAyZW07XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmhlYWRlcl9fc2VjdGlvbl9tZW51OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0OCk7XG59XG4uaGVhZGVyX19zZWN0aW9uX21lbnUgLm1lbnUge1xuICAtLW1lbnUtaGVpZ2h0OiAzcHg7XG4gIC0tbWVudS1jb2xvcjogYmxhY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVudS1jb2xvcik7XG4gIGhlaWdodDogdmFyKC0tbWVudS1oZWlnaHQpO1xuICB3aWR0aDogODAlO1xufVxuLmhlYWRlcl9fc2VjdGlvbl9tZW51IC5tZW51OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lbnUtY29sb3IpO1xuICBoZWlnaHQ6IHZhcigtLW1lbnUtaGVpZ2h0KTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogLTAuNWVtO1xufVxuLmhlYWRlcl9fc2VjdGlvbl9tZW51IC5tZW51OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVudS1jb2xvcik7XG4gIGhlaWdodDogdmFyKC0tbWVudS1oZWlnaHQpO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwLjVlbTtcbn1cblxuLmFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xuICBwYWRkaW5nLWJvdHRvbTogMC4zZW07XG4gIHBhZGRpbmctdG9wOiAwLjNlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5hY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBib3JkZXItcmFkaXVzOiAyNSU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hY3Rpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50KTtcbn1cblxuLmRpc2FibGVkIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGN1cnNvcjogaW5pdGlhbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMxNSk7XG59XG5cbi5hY3Rpb24tLWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uYWN0aW9uLS1jZW50ZXIgZGl2IHtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG59XG4uYWN0aW9uLS1jZW50ZXIgZGl2ICsgZGl2IHtcbiAgbWFyZ2luLWxlZnQ6IDAuMmVtO1xufVxuXG4uY3Jvc3NlZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNyb3NzZWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1JSkgdHJhbnNsYXRlWSgwLjdlbSkgcm90YXRlKDQ1ZGVnKTtcbn1cblxuLmNyb3NzZWQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNzUlKSB0cmFuc2xhdGVZKDAuN2VtKSByb3RhdGUoLTQ1ZGVnKTtcbn1cblxuLmFwcC1jYXJkIHtcbiAgd2lkdGg6IDI1JTtcbiAgaGVpZ2h0OiAyNSU7XG59XG5cbi5jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmNhcmRfX2ludGVybmFsIHtcbiAgbWFyZ2luOiAwLjJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IGdyYXk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTczLCAyMTYsIDIzMCwgMC40OTMpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2FyZF9faW50ZXJuYWw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3MywgMjE2LCAyMzAsIDAuNzEyKTtcbn1cblxuLmNhcmRfX2ludGVybmFsLWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jYXJkX19pbnRlcm5hbC0tc3ltYm9sIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzcmVtO1xufSIsIm1haW57ICAgIFxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnNjcmVlbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAgICYtLWRpc3BsYXkge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE5Mik7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7ICAgICAgICBcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICAgICAgICBcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RpbWVyLFxyXG4gICAgJl9fdGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzE5KTtcclxuICAgICAgICBmb250LXNpemU6IDdlbTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogNXB4IDVweCA1cHggYmxhY2s7ICAgICAgICBcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAzZW07XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iLCJoZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICN7dmFyKC0tY2xyLXByaW1hcnkpfTtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgbGluZWFyIDUwMG1zIDtcclxuXHJcbiAgICAuaGVhZGVyX19zZWN0aW9uICB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBwYWRkaW5nOiAwLjNlbTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAudmFsdWUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsOyAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLmhlYXJ0IHtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgfSAgIFxyXG59XHJcblxyXG4uZ2FtZS13YXJuaW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIzOCwgOSk7ICAgXHJcbn1cclxuXHJcbi5nYW1lLWFsZXJ0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDY4LCAwKTtcclxufVxyXG5cclxuLmdhbWUtZmFpbGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDApO1xyXG59XHJcblxyXG4uaGVhZGVyX19zZWN0aW9uX21lbnV7XHJcbiAgICB3aWR0aDogMmVtO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7ICAgIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0OCk7XHJcbiAgICB9XHJcbiAgICAubWVudSB7XHJcbiAgICAgICAgLS1tZW51LWhlaWdodDogM3B4O1xyXG4gICAgICAgIC0tbWVudS1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyAgICAgICAgXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVudS1jb2xvcik7XHJcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1tZW51LWhlaWdodCk7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVudS1jb2xvcik7XHJcbiAgICAgICAgICAgIGhlaWdodDogdmFyKC0tbWVudS1oZWlnaHQpO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgdG9wOiAtMC41ZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lbnUtY29sb3IpO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IHZhcigtLW1lbnUtaGVpZ2h0KTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHRvcDogMC41ZW07XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iLCIuYWN0aW9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAje3ZhcigtLWNsci1wcmltYXJ5KX07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4zZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMC4zZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmFjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7ICAgIFxyXG4gICAgcGFkZGluZzogMC41ZW07ICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAyNSU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI3t2YXIoLS1jbHItYWNjZW50KX07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5kaXNhYmxlZCB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGN1cnNvcjogaW5pdGlhbDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMTUpO1xyXG59XHJcblxyXG4uYWN0aW9uLS1jZW50ZXIge1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgXHJcbiAgICBkaXYge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgfVxyXG5cclxuICAgIGRpdiArIGRpdiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuMmVtXHJcbiAgICB9XHJcbn1cclxuXHJcbi5jcm9zc2VkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNyb3NzZWQ6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBoZWlnaHQ6IDFweDsgICAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogIHRyYW5zbGF0ZVgoLTI1JSkgXHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVZKDAuN2VtKVxyXG4gICAgICAgICAgICAgICAgcm90YXRlKDQ1ZGVnKTtcclxuICAgIFxyXG59XHJcblxyXG4uY3Jvc3NlZDphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgaGVpZ2h0OiAxcHg7ICAgIFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06ICB0cmFuc2xhdGVYKC03NSUpIFxyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWSgwLjdlbSlcclxuICAgICAgICAgICAgICAgIHJvdGF0ZSgtNDVkZWcpO1xyXG59XHJcblxyXG4iLCJcclxuLmFwcC1jYXJkIHtcclxuICAgIHdpZHRoOiAyNSU7ICAgICAgICAgICAgXHJcbiAgICBoZWlnaHQ6IDI1JTsgICAgICAgXHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIHdpZHRoOiAxMDAlOyAgICAgICAgICAgIFxyXG4gICAgaGVpZ2h0OiAxMDAlOyAgICAgXHJcbiAgICBkaXNwbGF5OiBmbGV4OyAgICBcclxufVxyXG4uY2FyZF9faW50ZXJuYWwgeyAgIFxyXG4gICAgbWFyZ2luOiAwLjJlbTsgXHJcbiAgICB3aWR0aDogMTAwJTsgICAgXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IGdyYXk7ICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzMsIDIxNiwgMjMwLCAwLjQ5Myk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3MywgMjE2LCAyMzAsIDAuNzEyKTtcclxuICAgIH0gICBcclxufVxyXG5cclxuLmNhcmRfX2ludGVybmFsLWNvbnRlbnQgeyAgICBcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNhcmRfX2ludGVybmFsLS1zeW1ib2wgeyAgICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICBcclxufSJdfQ== */", '', '']]

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