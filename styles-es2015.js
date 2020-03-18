(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n:root {\n  --clr-primary: rgba(128, 128, 128, 0.603);\n  --clr-accent: rgba(128, 128, 128, 0.781);\n}\n*, *::after, *::before {\n  box-sizing: inherit;\n}\nbody {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nbody {\n  height: 100vh;\n  padding-bottom: 2.3em;\n}\napp-root {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\nmain {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\nheader {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  background-color: var(--clr-primary);\n}\nheader .header__section {\n  width: 25%;\n  text-align: center;\n  font-weight: bold;\n  padding: 0.3em;\n  border: 1px solid black;\n  border-radius: 5px;\n}\nheader .value {\n  text-align: center;\n  font-weight: normal;\n}\nheader .heart {\n  color: red;\n}\nheader .current_score {\n  -webkit-transition: all ease-in-out 500ms;\n  transition: all ease-in-out 500ms;\n}\nheader .current_score.complete {\n  background-color: green;\n}\nheader .current_score.warnning {\n  background-color: yellow;\n}\nheader .current_score.failed {\n  background-color: red;\n}\nheader .current_score.failed--complete {\n  background-color: red;\n  outline: 5px solid green;\n  outline-offset: -5px;\n}\n.actions {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  background-color: var(--clr-primary);\n  padding-bottom: 0.3em;\n  padding-top: 0.3em;\n  border: 1px solid black;\n  border-radius: 5px;\n}\n.action {\n  background-color: lightgray;\n  padding: 0.5em;\n  border-radius: 25%;\n  cursor: pointer;\n}\n.action:hover {\n  background-color: var(--clr-accent);\n}\n.disabled {\n  pointer-events: none;\n  cursor: initial;\n  background-color: rgba(0, 0, 0, 0.315);\n}\n.app-card {\n  width: 25%;\n  height: 25%;\n}\n.card {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n}\n.card__internal {\n  margin: 0.2em;\n  width: 100%;\n  border: 1px solid black;\n  border-radius: 5px;\n  box-shadow: 5px 5px 5px gray;\n  background-color: rgba(173, 216, 230, 0.493);\n  cursor: pointer;\n}\n.card__internal:hover {\n  background-color: rgba(173, 216, 230, 0.712);\n}\n.card__internal-content {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DOlxcTWVpclxcSW50ZXJ2aWV3XFxwb3JqZWN0c1xcbWVtb3J5LWdhbWUvc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9DOlxcTWVpclxcSW50ZXJ2aWV3XFxwb3JqZWN0c1xcbWVtb3J5LWdhbWUvc3JjXFxzdHlsZVxcdHlwb2dyYXBoeS5zY3NzIiwic3JjL3N0eWxlcy5zY3NzIiwic3JjL0M6XFxNZWlyXFxJbnRlcnZpZXdcXHBvcmplY3RzXFxtZW1vcnktZ2FtZS9zcmNcXHN0eWxlXFxoZWFkZXIuc2NzcyIsInNyYy9DOlxcTWVpclxcSW50ZXJ2aWV3XFxwb3JqZWN0c1xcbWVtb3J5LWdhbWUvc3JjXFxzdHlsZVxcZm9vdGVyLnNjc3MiLCJzcmMvQzpcXE1laXJcXEludGVydmlld1xccG9yamVjdHNcXG1lbW9yeS1nYW1lL3NyY1xcc3R5bGVcXGNhcmQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0FBO0VBQ0kseUNBQUE7RUFDQSx3Q0FBQTtBQ0VKO0FERUE7RUFDSSxtQkFBQTtBQ0NKO0FERUE7RUFDSSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDQ0o7QURHQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtBQ0FKO0FER0E7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ0FKO0FER0E7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtBQ0FKO0FDaENBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLG9DQUFBO0FEbUNKO0FDakNJO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBRG1DUjtBQ2hDSTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QURrQ1I7QUMvQkk7RUFDSSxVQUFBO0FEaUNSO0FDOUJJO0VBQ0kseUNBQUE7RUFBQSxpQ0FBQTtBRGdDUjtBQzlCUTtFQUNJLHVCQUFBO0FEZ0NaO0FDOUJRO0VBQ0ksd0JBQUE7QURnQ1o7QUM5QlE7RUFDSSxxQkFBQTtBRGdDWjtBQzlCUTtFQUNJLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtBRGdDWjtBRXRFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBRnlFSjtBRXJFQTtFQUNJLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBRndFSjtBRXRFSTtFQUNJLG1DQUFBO0FGd0VSO0FFcEVBO0VBQ0ksb0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0NBQUE7QUZ1RUo7QUcvRkE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBSGtHSjtBRy9GQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FIa0dKO0FHaEdBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0Q0FBQTtFQUNBLGVBQUE7QUhtR0o7QUdqR0k7RUFFSSw0Q0FBQTtBSGtHUjtBRzlGQTtFQUNJLFlBQUE7QUhpR0oiLCJmaWxlIjoic3JjL3N0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG5cbkBpbXBvcnQnc3R5bGUvdHlwb2dyYXBoeSc7XG5AaW1wb3J0ICdzdHlsZS9oZWFkZXIuc2Nzcyc7XG5AaW1wb3J0ICdzdHlsZS9mb290ZXIuc2Nzcyc7XG5AaW1wb3J0ICdzdHlsZS9jYXJkLnNjc3MnOyIsIjpyb290IHtcclxuICAgIC0tY2xyLXByaW1hcnk6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC42MDMpO1xyXG4gICAgLS1jbHItYWNjZW50OiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNzgxKTtcclxufVxyXG5cclxuXHJcbiosICo6OmFmdGVyLCAqOjpiZWZvcmUge1xyXG4gICAgYm94LXNpemluZzogaW5oZXJpdDsgICAgICAgICBcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuIFxyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGhlaWdodDogMTAwdmg7ICAgIFxyXG4gICAgcGFkZGluZy1ib3R0b206IDIuM2VtO1xyXG59XHJcblxyXG5hcHAtcm9vdCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxubWFpbnsgICAgXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbjpyb290IHtcbiAgLS1jbHItcHJpbWFyeTogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjYwMyk7XG4gIC0tY2xyLWFjY2VudDogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjc4MSk7XG59XG5cbiosICo6OmFmdGVyLCAqOjpiZWZvcmUge1xuICBib3gtc2l6aW5nOiBpbmhlcml0O1xufVxuXG5ib2R5IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZy1ib3R0b206IDIuM2VtO1xufVxuXG5hcHAtcm9vdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5tYWluIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xufVxuaGVhZGVyIC5oZWFkZXJfX3NlY3Rpb24ge1xuICB3aWR0aDogMjUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAwLjNlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbmhlYWRlciAudmFsdWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5oZWFkZXIgLmhlYXJ0IHtcbiAgY29sb3I6IHJlZDtcbn1cbmhlYWRlciAuY3VycmVudF9zY29yZSB7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCA1MDBtcztcbn1cbmhlYWRlciAuY3VycmVudF9zY29yZS5jb21wbGV0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuaGVhZGVyIC5jdXJyZW50X3Njb3JlLndhcm5uaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xufVxuaGVhZGVyIC5jdXJyZW50X3Njb3JlLmZhaWxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cbmhlYWRlciAuY3VycmVudF9zY29yZS5mYWlsZWQtLWNvbXBsZXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBvdXRsaW5lOiA1cHggc29saWQgZ3JlZW47XG4gIG91dGxpbmUtb2Zmc2V0OiAtNXB4O1xufVxuXG4uYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XG4gIHBhZGRpbmctYm90dG9tOiAwLjNlbTtcbiAgcGFkZGluZy10b3A6IDAuM2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogMjUlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYWN0aW9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudCk7XG59XG5cbi5kaXNhYmxlZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjdXJzb3I6IGluaXRpYWw7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMTUpO1xufVxuXG4uYXBwLWNhcmQge1xuICB3aWR0aDogMjUlO1xuICBoZWlnaHQ6IDI1JTtcbn1cblxuLmNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY2FyZF9faW50ZXJuYWwge1xuICBtYXJnaW46IDAuMmVtO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggZ3JheTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzMsIDIxNiwgMjMwLCAwLjQ5Myk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jYXJkX19pbnRlcm5hbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTczLCAyMTYsIDIzMCwgMC43MTIpO1xufVxuXG4uY2FyZF9faW50ZXJuYWwtY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbn0iLCJoZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICN7dmFyKC0tY2xyLXByaW1hcnkpfTtcclxuXHJcbiAgICAuaGVhZGVyX19zZWN0aW9uICB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBwYWRkaW5nOiAwLjNlbTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAudmFsdWUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsOyAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLmhlYXJ0IHtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG5cclxuICAgIC5jdXJyZW50X3Njb3JlIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgNTAwbXM7XHJcblxyXG4gICAgICAgICYuY29tcGxldGUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi53YXJubmluZyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5mYWlsZWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuZmFpbGVkLS1jb21wbGV0ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgb3V0bGluZTogNXB4IHNvbGlkIGdyZWVuO1xyXG4gICAgICAgICAgICBvdXRsaW5lLW9mZnNldDogLTVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIi5hY3Rpb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICN7dmFyKC0tY2xyLXByaW1hcnkpfTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjNlbTtcclxuICAgIHBhZGRpbmctdG9wOiAwLjNlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxufVxyXG5cclxuLmFjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICBwYWRkaW5nOiAwLjVlbTsgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1JTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAje3ZhcigtLWNsci1hY2NlbnQpfTtcclxuICAgIH1cclxufVxyXG5cclxuLmRpc2FibGVkIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgY3Vyc29yOiBpbml0aWFsO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMxNSk7XHJcbn1cclxuXHJcbiIsIlxyXG4uYXBwLWNhcmQge1xyXG4gICAgd2lkdGg6IDI1JTsgICAgICAgICAgICBcclxuICAgIGhlaWdodDogMjUlOyAgICAgICBcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgd2lkdGg6IDEwMCU7ICAgICAgICAgICAgXHJcbiAgICBoZWlnaHQ6IDEwMCU7ICAgICBcclxuICAgIGRpc3BsYXk6IGZsZXg7ICAgIFxyXG59XHJcbi5jYXJkX19pbnRlcm5hbCB7ICAgXHJcbiAgICBtYXJnaW46IDAuMmVtOyBcclxuICAgIHdpZHRoOiAxMDAlOyAgICBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggZ3JheTsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3MywgMjE2LCAyMzAsIDAuNDkzKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuIFxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTczLCAyMTYsIDIzMCwgMC43MTIpO1xyXG4gICAgfSAgIFxyXG59XHJcblxyXG4uY2FyZF9faW50ZXJuYWwtY29udGVudCB7ICAgIFxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59Il19 */", '', '']]

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