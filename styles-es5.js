(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
  /***/
  "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
  /*!**********************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles.scss ***!
    \**********************************************************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularDevkitBuildAngularSrcAngularCliFilesPluginsRawCssLoaderJsNode_modulesPostcssLoaderSrcIndexJsNode_modulesSassLoaderLibLoaderJsSrcStylesScss(module, exports) {
    module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n:root {\n  --clr-primary: rgba(128, 128, 128, 0.603);\n  --clr-accent: rgba(128, 128, 128, 0.781);\n}\n*, *::after, *::before {\n  box-sizing: inherit;\n}\nbody {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n}\nbody {\n  height: 100vh;\n}\napp-root {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.disabled {\n  pointer-events: none;\n  cursor: initial;\n  background-color: rgba(0, 0, 0, 0.315);\n}\nmain {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n}\n.screen {\n  display: none;\n}\n.screen--display {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.192);\n  width: 100%;\n  height: 100%;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.screen__timer, .screen__title {\n  color: rgba(255, 255, 255, 0.719);\n  font-size: 7em;\n  font-weight: bold;\n  text-shadow: 5px 5px 5px black;\n  text-align: center;\n}\n.screen__title {\n  font-size: 3em;\n}\nheader {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  background-color: var(--clr-primary);\n  -webkit-transition: background-color linear 500ms;\n  transition: background-color linear 500ms;\n  padding-top: 0.3em;\n  padding-bottom: 0.3em;\n}\nheader .header__section {\n  font-weight: bold;\n  padding: 0.3em;\n}\nheader .header__section--left {\n  margin-left: 1em;\n}\nheader .header__section--center {\n  text-align: center;\n}\nheader .header__section--right {\n  margin-right: 1em;\n}\nheader .value {\n  font-weight: normal;\n  display: inline-block;\n}\n.game-warning {\n  background-color: #eeee09;\n}\n.game-alert {\n  background-color: #ff4400;\n}\n.game-failed {\n  background-color: red;\n}\n.header__section_menu {\n  width: 3em;\n  height: 100%;\n  background-color: var(--clr-primary);\n  border: 1px solid black;\n  border-radius: 0.5em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  cursor: pointer;\n}\n.header__section_menu:hover {\n  background-color: rgba(0, 0, 0, 0.548);\n}\n.header__section_menu .menu {\n  --menu-height: 3px;\n  --menu-color: black;\n  position: relative;\n  background-color: var(--menu-color);\n  height: var(--menu-height);\n  width: 80%;\n}\n.header__section_menu .menu::before {\n  content: \"\";\n  position: absolute;\n  background-color: var(--menu-color);\n  height: var(--menu-height);\n  width: 100%;\n  top: -0.5em;\n}\n.header__section_menu .menu::after {\n  content: \"\";\n  position: absolute;\n  background-color: var(--menu-color);\n  height: var(--menu-height);\n  width: 100%;\n  top: 0.5em;\n}\n.actions {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  background-color: var(--clr-primary);\n  padding-bottom: 0.3em;\n  padding-top: 0.3em;\n  border: 1px solid black;\n  border-radius: 5px;\n  font-size: 1.2em;\n  font-weight: bold;\n}\n.action {\n  background-color: lightgray;\n  padding: 0.5em;\n  border-radius: 25%;\n  cursor: pointer;\n}\n.action:hover {\n  background-color: var(--clr-accent);\n}\n.app-card {\n  width: 25%;\n  height: 25%;\n}\n.card {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n}\n.card__internal {\n  margin: 0.2em;\n  width: 100%;\n  border: 1px solid black;\n  border-radius: 5px;\n  box-shadow: 5px 5px 5px gray;\n  background-color: rgba(173, 216, 230, 0.493);\n  cursor: pointer;\n}\n.card__internal:hover {\n  background-color: rgba(173, 216, 230, 0.712);\n}\n.card__internal-content {\n  height: 100%;\n}\n.card__internal--symbol {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 3rem;\n}\n.main-page {\n  position: absolute;\n  background-color: rgba(27, 30, 36, 0.438);\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.main-page-content {\n  background-color: rgba(0, 0, 0, 0.63);\n  color: white;\n  width: 80%;\n  height: 80%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  border-radius: 5px;\n}\n.main-page-content .title {\n  font-size: 3rem;\n  text-align: center;\n}\n.main-page-content .game-actions {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n  text-align: center;\n  font-size: 1rem;\n  margin: 1em;\n}\n.main-page-content .game-actions .game-action {\n  border: 2px solid white;\n  border-radius: 5px;\n  padding: 0.5em 1.5em;\n  cursor: pointer;\n  margin-bottom: 1em;\n}\n.main-page-content .game-actions .game-action:hover {\n  background-color: #6b6767;\n}\n@media (min-width: 1200px) {\n  .main-page-content {\n    max-width: 1000px;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DOlxcTWVpclxcSW50ZXJ2aWV3XFxwb3JqZWN0c1xcbWVtb3J5LWdhbWUvc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9DOlxcTWVpclxcSW50ZXJ2aWV3XFxwb3JqZWN0c1xcbWVtb3J5LWdhbWUvc3JjXFxzdHlsZVxcdHlwb2dyYXBoeS5zY3NzIiwic3JjL3N0eWxlcy5zY3NzIiwic3JjL0M6XFxNZWlyXFxJbnRlcnZpZXdcXHBvcmplY3RzXFxtZW1vcnktZ2FtZS9zcmNcXHN0eWxlXFxtYWluLnNjc3MiLCJzcmMvQzpcXE1laXJcXEludGVydmlld1xccG9yamVjdHNcXG1lbW9yeS1nYW1lL3NyY1xcc3R5bGVcXGhlYWRlci5zY3NzIiwic3JjL0M6XFxNZWlyXFxJbnRlcnZpZXdcXHBvcmplY3RzXFxtZW1vcnktZ2FtZS9zcmNcXHN0eWxlXFxmb290ZXIuc2NzcyIsInNyYy9DOlxcTWVpclxcSW50ZXJ2aWV3XFxwb3JqZWN0c1xcbWVtb3J5LWdhbWUvc3JjXFxzdHlsZVxcY2FyZC5zY3NzIiwic3JjL0M6XFxNZWlyXFxJbnRlcnZpZXdcXHBvcmplY3RzXFxtZW1vcnktZ2FtZS9zcmNcXHN0eWxlXFxtYWluLXBhZ2UtdG9wLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNBQTtFQUNJLHlDQUFBO0VBQ0Esd0NBQUE7QUNFSjtBREVBO0VBQ0ksbUJBQUE7QUNDSjtBREVBO0VBQ0ksc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDQ0o7QURFQTtFQUNJLGFBQUE7QUNDSjtBREVBO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNDSjtBREVBO0VBQ0ksb0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0NBQUE7QUNDSjtBQy9CQTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0VB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QTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSw4QkFBQTtVQUFBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBTG1NWjtBS2pNWTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBTG1NaEI7QUtoTWdCO0VBQ0kseUJBQUE7QUxrTXBCO0FLM0xBO0VBRVE7SUFDSSxpQkFBQTtJQUNBLHlCQUFBO1lBQUEsbUJBQUE7RUw2TFY7QUFDRiIsImZpbGUiOiJzcmMvc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cblxuQGltcG9ydCAnc3R5bGUvdHlwb2dyYXBoeSc7XG5AaW1wb3J0ICdzdHlsZS9tYWluLnNjc3MnO1xuQGltcG9ydCAnc3R5bGUvaGVhZGVyLnNjc3MnO1xuQGltcG9ydCAnc3R5bGUvZm9vdGVyLnNjc3MnO1xuQGltcG9ydCAnc3R5bGUvY2FyZC5zY3NzJztcbkBpbXBvcnQgJ3N0eWxlL21haW4tcGFnZS10b3Auc2Nzcyc7IiwiOnJvb3Qge1xyXG4gICAgLS1jbHItcHJpbWFyeTogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjYwMyk7XHJcbiAgICAtLWNsci1hY2NlbnQ6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC43ODEpO1xyXG59XHJcblxyXG5cclxuKiwgKjo6YWZ0ZXIsICo6OmJlZm9yZSB7XHJcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0OyAgICAgICAgIFxyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgXHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDsgICAgICAgIFxyXG59XHJcblxyXG5hcHAtcm9vdCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmRpc2FibGVkIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgY3Vyc29yOiBpbml0aWFsO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMxNSk7XHJcbn1cclxuXHJcbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbjpyb290IHtcbiAgLS1jbHItcHJpbWFyeTogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjYwMyk7XG4gIC0tY2xyLWFjY2VudDogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjc4MSk7XG59XG5cbiosICo6OmFmdGVyLCAqOjpiZWZvcmUge1xuICBib3gtc2l6aW5nOiBpbmhlcml0O1xufVxuXG5ib2R5IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuYXBwLXJvb3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmRpc2FibGVkIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGN1cnNvcjogaW5pdGlhbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMxNSk7XG59XG5cbm1haW4ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2NyZWVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zY3JlZW4tLWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xOTIpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zY3JlZW5fX3RpbWVyLCAuc2NyZWVuX190aXRsZSB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzE5KTtcbiAgZm9udC1zaXplOiA3ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXNoYWRvdzogNXB4IDVweCA1cHggYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zY3JlZW5fX3RpdGxlIHtcbiAgZm9udC1zaXplOiAzZW07XG59XG5cbmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIGxpbmVhciA1MDBtcztcbiAgcGFkZGluZy10b3A6IDAuM2VtO1xuICBwYWRkaW5nLWJvdHRvbTogMC4zZW07XG59XG5oZWFkZXIgLmhlYWRlcl9fc2VjdGlvbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAwLjNlbTtcbn1cbmhlYWRlciAuaGVhZGVyX19zZWN0aW9uLS1sZWZ0IHtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbn1cbmhlYWRlciAuaGVhZGVyX19zZWN0aW9uLS1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5oZWFkZXIgLmhlYWRlcl9fc2VjdGlvbi0tcmlnaHQge1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cbmhlYWRlciAudmFsdWUge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5nYW1lLXdhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZTA5O1xufVxuXG4uZ2FtZS1hbGVydCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjQ0MDA7XG59XG5cbi5nYW1lLWZhaWxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLmhlYWRlcl9fc2VjdGlvbl9tZW51IHtcbiAgd2lkdGg6IDNlbTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5oZWFkZXJfX3NlY3Rpb25fbWVudTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NDgpO1xufVxuLmhlYWRlcl9fc2VjdGlvbl9tZW51IC5tZW51IHtcbiAgLS1tZW51LWhlaWdodDogM3B4O1xuICAtLW1lbnUtY29sb3I6IGJsYWNrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lbnUtY29sb3IpO1xuICBoZWlnaHQ6IHZhcigtLW1lbnUtaGVpZ2h0KTtcbiAgd2lkdGg6IDgwJTtcbn1cbi5oZWFkZXJfX3NlY3Rpb25fbWVudSAubWVudTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZW51LWNvbG9yKTtcbiAgaGVpZ2h0OiB2YXIoLS1tZW51LWhlaWdodCk7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IC0wLjVlbTtcbn1cbi5oZWFkZXJfX3NlY3Rpb25fbWVudSAubWVudTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lbnUtY29sb3IpO1xuICBoZWlnaHQ6IHZhcigtLW1lbnUtaGVpZ2h0KTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMC41ZW07XG59XG5cbi5hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcbiAgcGFkZGluZy1ib3R0b206IDAuM2VtO1xuICBwYWRkaW5nLXRvcDogMC4zZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogMjUlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYWN0aW9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudCk7XG59XG5cbi5hcHAtY2FyZCB7XG4gIHdpZHRoOiAyNSU7XG4gIGhlaWdodDogMjUlO1xufVxuXG4uY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jYXJkX19pbnRlcm5hbCB7XG4gIG1hcmdpbjogMC4yZW07XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCBncmF5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3MywgMjE2LCAyMzAsIDAuNDkzKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNhcmRfX2ludGVybmFsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzMsIDIxNiwgMjMwLCAwLjcxMik7XG59XG5cbi5jYXJkX19pbnRlcm5hbC1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2FyZF9faW50ZXJuYWwtLXN5bWJvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuLm1haW4tcGFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNywgMzAsIDM2LCAwLjQzOCk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1haW4tcGFnZS1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYzKTtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDgwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5tYWluLXBhZ2UtY29udGVudCAudGl0bGUge1xuICBmb250LXNpemU6IDNyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYWluLXBhZ2UtY29udGVudCAuZ2FtZS1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBtYXJnaW46IDFlbTtcbn1cbi5tYWluLXBhZ2UtY29udGVudCAuZ2FtZS1hY3Rpb25zIC5nYW1lLWFjdGlvbiB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDAuNWVtIDEuNWVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cbi5tYWluLXBhZ2UtY29udGVudCAuZ2FtZS1hY3Rpb25zIC5nYW1lLWFjdGlvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2YjY3Njc7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLm1haW4tcGFnZS1jb250ZW50IHtcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59IiwiXHJcbm1haW57ICAgIFxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnNjcmVlbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAgICYtLWRpc3BsYXkge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE5Mik7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7ICAgICAgICBcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICAgICAgICBcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RpbWVyLFxyXG4gICAgJl9fdGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzE5KTtcclxuICAgICAgICBmb250LXNpemU6IDdlbTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogNXB4IDVweCA1cHggYmxhY2s7ICAgICAgICBcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAzZW07XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iLCJoZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICN7dmFyKC0tY2xyLXByaW1hcnkpfTtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgbGluZWFyIDUwMG1zIDtcclxuICAgIHBhZGRpbmctdG9wOiAwLjNlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjNlbTtcclxuXHJcbiAgICAuaGVhZGVyX19zZWN0aW9uICB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHBhZGRpbmc6IDAuM2VtOyAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLmhlYWRlcl9fc2VjdGlvbi0tbGVmdCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFlbTsgICAgICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICAuaGVhZGVyX19zZWN0aW9uLS1jZW50ZXJ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICBcclxuICAgIH1cclxuICAgIC5oZWFkZXJfX3NlY3Rpb24tLXJpZ2h0IHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC52YWx1ZSB7ICAgICAgICBcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsOyAgICBcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG4uZ2FtZS13YXJuaW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIzOCwgOSk7ICAgXHJcbn1cclxuXHJcbi5nYW1lLWFsZXJ0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDY4LCAwKTtcclxufVxyXG5cclxuLmdhbWUtZmFpbGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDApO1xyXG59XHJcblxyXG4uaGVhZGVyX19zZWN0aW9uX21lbnV7ICAgIFxyXG4gICAgd2lkdGg6IDNlbTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07ICAgIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0OCk7XHJcbiAgICB9XHJcbiAgICAubWVudSB7XHJcbiAgICAgICAgLS1tZW51LWhlaWdodDogM3B4O1xyXG4gICAgICAgIC0tbWVudS1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyAgICAgICAgXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVudS1jb2xvcik7XHJcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1tZW51LWhlaWdodCk7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVudS1jb2xvcik7XHJcbiAgICAgICAgICAgIGhlaWdodDogdmFyKC0tbWVudS1oZWlnaHQpO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgdG9wOiAtMC41ZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lbnUtY29sb3IpO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IHZhcigtLW1lbnUtaGVpZ2h0KTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHRvcDogMC41ZW07XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuIiwiLmFjdGlvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI3t2YXIoLS1jbHItcHJpbWFyeSl9O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuM2VtO1xyXG4gICAgcGFkZGluZy10b3A6IDAuM2VtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5hY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5OyAgICBcclxuICAgIHBhZGRpbmc6IDAuNWVtOyAgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogMjUlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICN7dmFyKC0tY2xyLWFjY2VudCl9O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbiIsIlxyXG4uYXBwLWNhcmQge1xyXG4gICAgd2lkdGg6IDI1JTsgICAgICAgICAgICBcclxuICAgIGhlaWdodDogMjUlOyAgICAgICBcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgd2lkdGg6IDEwMCU7ICAgICAgICAgICAgXHJcbiAgICBoZWlnaHQ6IDEwMCU7ICAgICBcclxuICAgIGRpc3BsYXk6IGZsZXg7ICAgIFxyXG59XHJcbi5jYXJkX19pbnRlcm5hbCB7ICAgXHJcbiAgICBtYXJnaW46IDAuMmVtOyBcclxuICAgIHdpZHRoOiAxMDAlOyAgICBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggZ3JheTsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3MywgMjE2LCAyMzAsIDAuNDkzKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuIFxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTczLCAyMTYsIDIzMCwgMC43MTIpO1xyXG4gICAgfSAgIFxyXG59XHJcblxyXG4uY2FyZF9faW50ZXJuYWwtY29udGVudCB7ICAgIFxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY2FyZF9faW50ZXJuYWwtLXN5bWJvbCB7ICAgIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIFxyXG59IiwiLm1haW4tcGFnZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI3LCAzMCwgMzYsIDAuNDM4KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlOyAgICAgICAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuXHJcblxyXG4gICAgJi1jb250ZW50e1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42Myk7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA4MCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBcclxuXHJcblxyXG4gICAgICAgIC50aXRsZSB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTsgICAgICAgICBcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZ2FtZS1hY3Rpb25zeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4OyAgICAgXHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAgICAgIFxyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07ICAgICAgICAgXHJcbiAgICAgICAgICAgIG1hcmdpbjogMWVtO1xyXG5cclxuICAgICAgICAgICAgLmdhbWUtYWN0aW9ue1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVlbSAxLjVlbTtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDcsIDEwMywgMTAzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCl7XHJcbiAgICAubWFpbi1wYWdlIHtcclxuICAgICAgICAmLWNvbnRlbnR7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAuZ2FtZS1hY3Rpb25zIHtcclxuICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iXX0= */", '', '']];
    /***/
  },

  /***/
  "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderDistRuntimeInjectStylesIntoStyleTagJs(module, exports, __webpack_require__) {
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
        var nonce = true ? __webpack_require__.nc : undefined;

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
    /***/

  },

  /***/
  "./src/styles.scss":
  /*!*************************!*\
    !*** ./src/styles.scss ***!
    \*************************/

  /*! no static exports found */

  /***/
  function srcStylesScss(module, exports, __webpack_require__) {
    var content = __webpack_require__(
    /*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--15-3!./styles.scss */
    "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    var options = {};
    options.insert = "head";
    options.singleton = false;

    var update = __webpack_require__(
    /*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

    if (content.locals) {
      module.exports = content.locals;
    }
    /***/

  },

  /***/
  3:
  /*!*******************************!*\
    !*** multi ./src/styles.scss ***!
    \*******************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Meir\Interview\porjects\memory-game\src\styles.scss */
    "./src/styles.scss");
    /***/
  }
}, [[3, "runtime"]]]);
//# sourceMappingURL=styles-es5.js.map