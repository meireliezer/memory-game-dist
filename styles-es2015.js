(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n:root {\n  --clr-primary: rgba(128, 128, 128, 0.603);\n  --clr-accent: rgba(128, 128, 128, 0.781);\n}\n*, *::after, *::before {\n  box-sizing: inherit;\n}\nbody {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nbody {\n  height: 100vh;\n}\napp-root {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\nmain {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\nheader {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  background-color: var(--clr-primary);\n}\nheader .header__section {\n  width: 25%;\n  text-align: center;\n  font-weight: bold;\n  padding: 0.3em;\n  border: 1px solid black;\n  border-radius: 5px;\n}\nheader .value {\n  text-align: center;\n  font-weight: normal;\n}\nheader .heart {\n  color: red;\n}\nheader .current_score {\n  -webkit-transition: all ease-in-out 500ms;\n  transition: all ease-in-out 500ms;\n}\nheader .current_score.complete {\n  background-color: green;\n}\nheader .current_score.warnning {\n  background-color: yellow;\n}\nheader .current_score.failed {\n  background-color: red;\n}\nheader .current_score.failed--complete {\n  background-color: red;\n  outline: 5px solid green;\n  outline-offset: -5px;\n}\n.actions {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  background-color: var(--clr-primary);\n  padding-bottom: 0.3em;\n  padding-top: 0.3em;\n  border: 1px solid black;\n  border-radius: 5px;\n}\n.action {\n  background-color: lightgray;\n  padding: 0.5em;\n  border-radius: 25%;\n  cursor: pointer;\n}\n.action:hover {\n  background-color: var(--clr-accent);\n}\n.disabled {\n  pointer-events: none;\n  cursor: initial;\n  background-color: rgba(0, 0, 0, 0.315);\n}\n.app-card {\n  width: 25%;\n  height: 25%;\n}\n.card {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n}\n.card__internal {\n  margin: 0.2em;\n  width: 100%;\n  border: 1px solid black;\n  border-radius: 5px;\n  box-shadow: 5px 5px 5px gray;\n  background-color: rgba(173, 216, 230, 0.493);\n  cursor: pointer;\n}\n.card__internal:hover {\n  background-color: rgba(173, 216, 230, 0.712);\n}\n.card__internal-content {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DOlxcTWVpclxcSW50ZXJ2aWV3XFxwb3JqZWN0c1xcbWVtb3J5LWdhbWUvc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9DOlxcTWVpclxcSW50ZXJ2aWV3XFxwb3JqZWN0c1xcbWVtb3J5LWdhbWUvc3JjXFxzdHlsZVxcdHlwb2dyYXBoeS5zY3NzIiwic3JjL3N0eWxlcy5zY3NzIiwic3JjL0M6XFxNZWlyXFxJbnRlcnZpZXdcXHBvcmplY3RzXFxtZW1vcnktZ2FtZS9zcmNcXHN0eWxlXFxoZWFkZXIuc2NzcyIsInNyYy9DOlxcTWVpclxcSW50ZXJ2aWV3XFxwb3JqZWN0c1xcbWVtb3J5LWdhbWUvc3JjXFxzdHlsZVxcZm9vdGVyLnNjc3MiLCJzcmMvQzpcXE1laXJcXEludGVydmlld1xccG9yamVjdHNcXG1lbW9yeS1nYW1lL3NyY1xcc3R5bGVcXGNhcmQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0FBO0VBQ0kseUNBQUE7RUFDQSx3Q0FBQTtBQ0VKO0FERUE7RUFDSSxtQkFBQTtBQ0NKO0FERUE7RUFDSSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDQ0o7QURHQTtFQUNJLGFBQUE7QUNBSjtBREdBO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNBSjtBREdBO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7QUNBSjtBQy9CQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxvQ0FBQTtBRGtDSjtBQ2hDSTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QURrQ1I7QUMvQkk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FEaUNSO0FDOUJJO0VBQ0ksVUFBQTtBRGdDUjtBQzdCSTtFQUNJLHlDQUFBO0VBQUEsaUNBQUE7QUQrQlI7QUM3QlE7RUFDSSx1QkFBQTtBRCtCWjtBQzdCUTtFQUNJLHdCQUFBO0FEK0JaO0FDN0JRO0VBQ0kscUJBQUE7QUQrQlo7QUM3QlE7RUFDSSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7QUQrQlo7QUVyRUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUZ3RUo7QUVwRUE7RUFDSSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUZ1RUo7QUVyRUk7RUFDSSxtQ0FBQTtBRnVFUjtBRW5FQTtFQUNJLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0FGc0VKO0FHOUZBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUhpR0o7QUc5RkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBSGlHSjtBRy9GQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNENBQUE7RUFDQSxlQUFBO0FIa0dKO0FHaEdJO0VBRUksNENBQUE7QUhpR1I7QUc3RkE7RUFDSSxZQUFBO0FIZ0dKIiwiZmlsZSI6InNyYy9zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuXG5AaW1wb3J0J3N0eWxlL3R5cG9ncmFwaHknO1xuQGltcG9ydCAnc3R5bGUvaGVhZGVyLnNjc3MnO1xuQGltcG9ydCAnc3R5bGUvZm9vdGVyLnNjc3MnO1xuQGltcG9ydCAnc3R5bGUvY2FyZC5zY3NzJzsiLCI6cm9vdCB7XHJcbiAgICAtLWNsci1wcmltYXJ5OiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNjAzKTtcclxuICAgIC0tY2xyLWFjY2VudDogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjc4MSk7XHJcbn1cclxuXHJcblxyXG4qLCAqOjphZnRlciwgKjo6YmVmb3JlIHtcclxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7ICAgICAgICAgXHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiBcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoOyAgICBcclxufVxyXG5cclxuYXBwLXJvb3Qge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbm1haW57ICAgIFxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG46cm9vdCB7XG4gIC0tY2xyLXByaW1hcnk6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC42MDMpO1xuICAtLWNsci1hY2NlbnQ6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC43ODEpO1xufVxuXG4qLCAqOjphZnRlciwgKjo6YmVmb3JlIHtcbiAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxuYm9keSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbmFwcC1yb290IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbm1haW4ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XG59XG5oZWFkZXIgLmhlYWRlcl9fc2VjdGlvbiB7XG4gIHdpZHRoOiAyNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDAuM2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuaGVhZGVyIC52YWx1ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbmhlYWRlciAuaGVhcnQge1xuICBjb2xvcjogcmVkO1xufVxuaGVhZGVyIC5jdXJyZW50X3Njb3JlIHtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDUwMG1zO1xufVxuaGVhZGVyIC5jdXJyZW50X3Njb3JlLmNvbXBsZXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG5oZWFkZXIgLmN1cnJlbnRfc2NvcmUud2Fybm5pbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG59XG5oZWFkZXIgLmN1cnJlbnRfc2NvcmUuZmFpbGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuaGVhZGVyIC5jdXJyZW50X3Njb3JlLmZhaWxlZC0tY29tcGxldGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIG91dGxpbmU6IDVweCBzb2xpZCBncmVlbjtcbiAgb3V0bGluZS1vZmZzZXQ6IC01cHg7XG59XG5cbi5hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcbiAgcGFkZGluZy1ib3R0b206IDAuM2VtO1xuICBwYWRkaW5nLXRvcDogMC4zZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5hY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBib3JkZXItcmFkaXVzOiAyNSU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hY3Rpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50KTtcbn1cblxuLmRpc2FibGVkIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGN1cnNvcjogaW5pdGlhbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMxNSk7XG59XG5cbi5hcHAtY2FyZCB7XG4gIHdpZHRoOiAyNSU7XG4gIGhlaWdodDogMjUlO1xufVxuXG4uY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jYXJkX19pbnRlcm5hbCB7XG4gIG1hcmdpbjogMC4yZW07XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCBncmF5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3MywgMjE2LCAyMzAsIDAuNDkzKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNhcmRfX2ludGVybmFsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzMsIDIxNiwgMjMwLCAwLjcxMik7XG59XG5cbi5jYXJkX19pbnRlcm5hbC1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xufSIsImhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI3t2YXIoLS1jbHItcHJpbWFyeSl9O1xyXG5cclxuICAgIC5oZWFkZXJfX3NlY3Rpb24gIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHBhZGRpbmc6IDAuM2VtO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC52YWx1ZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAuaGVhcnQge1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmN1cnJlbnRfc2NvcmUge1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCA1MDBtcztcclxuXHJcbiAgICAgICAgJi5jb21wbGV0ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLndhcm5uaW5nIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmZhaWxlZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5mYWlsZWQtLWNvbXBsZXRlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiA1cHggc29saWQgZ3JlZW47XHJcbiAgICAgICAgICAgIG91dGxpbmUtb2Zmc2V0OiAtNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwiLmFjdGlvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI3t2YXIoLS1jbHItcHJpbWFyeSl9O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuM2VtO1xyXG4gICAgcGFkZGluZy10b3A6IDAuM2VtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG59XHJcblxyXG4uYWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgIHBhZGRpbmc6IDAuNWVtOyAgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogMjUlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICN7dmFyKC0tY2xyLWFjY2VudCl9O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZGlzYWJsZWQge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBjdXJzb3I6IGluaXRpYWw7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzE1KTtcclxufVxyXG5cclxuIiwiXHJcbi5hcHAtY2FyZCB7XHJcbiAgICB3aWR0aDogMjUlOyAgICAgICAgICAgIFxyXG4gICAgaGVpZ2h0OiAyNSU7ICAgICAgIFxyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTsgICAgICAgICAgICBcclxuICAgIGhlaWdodDogMTAwJTsgICAgIFxyXG4gICAgZGlzcGxheTogZmxleDsgICAgXHJcbn1cclxuLmNhcmRfX2ludGVybmFsIHsgICBcclxuICAgIG1hcmdpbjogMC4yZW07IFxyXG4gICAgd2lkdGg6IDEwMCU7ICAgIFxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCBncmF5OyAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTczLCAyMTYsIDIzMCwgMC40OTMpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzMsIDIxNiwgMjMwLCAwLjcxMik7XHJcbiAgICB9ICAgXHJcbn1cclxuXHJcbi5jYXJkX19pbnRlcm5hbC1jb250ZW50IHsgICAgXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn0iXX0= */", '', '']]

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