(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");
/* harmony import */ var _parent_parent_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parent/parent.component */ "./src/app/parent/parent.component.ts");









//change Routes according to wireframe.
var routes = [
    { path: 'movies', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: '', pathMatch: 'full', redirectTo: '/movies' },
    { path: 'movies/new', component: _new_new_component__WEBPACK_IMPORTED_MODULE_4__["NewComponent"] },
    { path: 'movies/edit/:id', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"] },
    { path: 'movies/:id/review', component: _details_details_component__WEBPACK_IMPORTED_MODULE_6__["DetailsComponent"] },
    { path: 'movies/:id', component: _view_view_component__WEBPACK_IMPORTED_MODULE_7__["ViewComponent"] },
    { path: 'parent', component: _parent_parent_component__WEBPACK_IMPORTED_MODULE_8__["ParentComponent"] },
    //star routes go at the bottom!
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".topBox{\n    display:block;\n}\nh1{\n    text-align: center;\n}\na{\n    padding-left:20px;\n}\nbutton{\n    float:right;\n    margin-right:20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcEJveHtcbiAgICBkaXNwbGF5OmJsb2NrO1xufVxuaDF7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuYXtcbiAgICBwYWRkaW5nLWxlZnQ6MjBweDtcbn1cbmJ1dHRvbntcbiAgICBmbG9hdDpyaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6MjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- {path:'products', component:HomeComponent},\n  // {path:'', pathMatch:'full', redirectTo:'/products'},\n  {path:'products/new', component:NewComponent},\n  {path:'products/edit/:id', component:EditComponent},\n  {path:'products/:id/details', component:DetailsComponent},\n  {path:'parent', component:ParentComponent}, -->\n<div class=\"topBox\">\n  <h1>Squishy Tomatoes</h1>\n  <a [routerLink]=\"['/movies']\">Go to Movie List</a>\n  <button [routerLink]=\"['/parent']\">Go to Sample Parent</button>\n</div>\n\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'public';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _child_child_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./child/child.component */ "./src/app/child/child.component.ts");
/* harmony import */ var _parent_parent_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./parent/parent.component */ "./src/app/parent/parent.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__["EditComponent"],
                _new_new_component__WEBPACK_IMPORTED_MODULE_10__["NewComponent"],
                _details_details_component__WEBPACK_IMPORTED_MODULE_11__["DetailsComponent"],
                _child_child_component__WEBPACK_IMPORTED_MODULE_12__["ChildComponent"],
                _parent_parent_component__WEBPACK_IMPORTED_MODULE_13__["ParentComponent"],
                _view_view_component__WEBPACK_IMPORTED_MODULE_14__["ViewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/child/child.component.css":
/*!*******************************************!*\
  !*** ./src/app/child/child.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoaWxkL2NoaWxkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/child/child.component.html":
/*!********************************************!*\
  !*** ./src/app/child/child.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>{{childVariable.title}}</p>\n<div *ngFor=\"let x of childVariable.reviews\">\n  <p>{{x.comment}}</p>\n  <p>{{x.rating}}</p>\n</div>\n<button (click)=\"sendBackToParent()\">Go back to parent</button>"

/***/ }),

/***/ "./src/app/child/child.component.ts":
/*!******************************************!*\
  !*** ./src/app/child/child.component.ts ***!
  \******************************************/
/*! exports provided: ChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildComponent", function() { return ChildComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChildComponent = /** @class */ (function () {
    function ChildComponent() {
        this.childOutputVariable = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ChildComponent.prototype.ngOnInit = function () {
    };
    ChildComponent.prototype.sendBackToParent = function () {
        this.childOutputVariable.emit(true);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChildComponent.prototype, "childVariable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChildComponent.prototype, "childOutputVariable", void 0);
    ChildComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-child',
            template: __webpack_require__(/*! ./child.component.html */ "./src/app/child/child.component.html"),
            styles: [__webpack_require__(/*! ./child.component.css */ "./src/app/child/child.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChildComponent);
    return ChildComponent;
}());



/***/ }),

/***/ "./src/app/details/details.component.css":
/*!***********************************************!*\
  !*** ./src/app/details/details.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/details/details.component.html":
/*!************************************************!*\
  !*** ./src/app/details/details.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3> Add a review for {{shownObject.title}}</h3>\n<form (submit)=\"onSubmit()\">\n  <label>Your Name</label>\n  <input type=\"text\" name=\"newReview.user\" [(ngModel)]=\"newReview.user\">\n  <label>Stars</label>\n  <select name=\"newReview.rating\" [(ngModel)]=\"newReview.rating\">\n    <option value=\"5\">5 Stars</option>\n    <option value=\"4\">4 Stars</option>\n    <option value=\"3\">3 Stars</option>\n    <option value=\"2\">2 Stars</option>\n    <option value=\"1\">1 Stars</option>\n  </select>\n  <label>Your Review</label>\n  <textarea name=\"newReview.comment\" [(ngModel)]=\"newReview.comment\"></textarea>\n  <button type=\"submit\">Submit</button>\n</form>\n"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        this.newReview = { user: "", rating: 1, comment: "" };
        this.shownObject = { title: "", reviews: [] };
        this.getShownObject();
    };
    DetailsComponent.prototype.getShownObject = function () {
        var _this = this;
        var observable = this._httpService.getPrimary(this._route.snapshot.params.id);
        observable.subscribe(function (data) {
            _this.shownObject = data['data'];
            //reviews is an array
            var sum = 0;
            for (var i = 0; i < _this.shownObject.reviews.length; i++) {
                sum += _this.shownObject.reviews[i].rating;
            }
            _this.shownObject.average = sum / _this.shownObject.reviews.length;
            _this.shownObject.reviews = _this.shownObject.reviews.sort(_this._httpService.dynamicSort("-rating"));
        });
    };
    DetailsComponent.prototype.onSubmit = function () {
        var _this = this;
        var observable = this._httpService.addSecondary(this._route.snapshot.params.id, this.newReview);
        observable.subscribe(function (data) {
            _this.getShownObject();
        });
    };
    DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/details/details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Editing {{editingObject.title}}</h1>\n<form (submit) = \"onSubmit()\">\n  <label>Title</label>\n  <input type=\"text\" name=\"editingObject.title\" [(ngModel)] = \"editingObject.title\">\n  <label>Url</label>\n  <input type=\"text\" name=\"editingObject.url\" [(ngModel)] = \"editingObject.url\">\n  <button type=\"submit\">Submit</button>\n\n</form>"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var EditComponent = /** @class */ (function () {
    function EditComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    EditComponent.prototype.ngOnInit = function () {
        //this will just avoid error (make sure it is first before the function for getting things);
        this.editingObject = { title: "", url: "", reviews: [] };
        this.getSpecificObject();
    };
    EditComponent.prototype.getSpecificObject = function () {
        var _this = this;
        var observable = this._httpService.getPrimary(this._route.snapshot.params.id);
        observable.subscribe(function (data) {
            _this.editingObject = data['data'];
        });
    };
    EditComponent.prototype.onSubmit = function () {
        var _this = this;
        //when editing double check if the right fields are being updated on the controller.
        var observable = this._httpService.editPrimary(this._route.snapshot.params.id, this.editingObject);
        observable.subscribe(function (data) {
            _this.editingObject = data['data'];
        });
    };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2{\n    text-align: center;\n    margin-left:125px;\n}\ntable{\n    width:1000px;\n    text-align: center;\n    margin-left:340px;\n}\n.mainTable{\n    display:block;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtDQUN0QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OjEyNXB4O1xufVxudGFibGV7XG4gICAgd2lkdGg6MTAwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDozNDBweDtcbn1cbi5tYWluVGFibGV7XG4gICAgZGlzcGxheTpibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainTable\">\n  <h2>\n    Movie List\n  </h2>\n  <button [routerLink]=\"['/movies/new']\">Add a New Movie</button>\n  <div class=\"table-wrapper-scroll-y\">\n    <table class=\"table table-bordered table-striped\">\n      <thead>\n        <tr>\n          <th scope=\"col\">Movie Title</th>\n          <th scope=\"col\">Available Actions</th>\n          <th scope=\"col\">Avg. Rating</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let movie of movies\">\n          <th scope=\"row\">{{movie.title}}</th>\n          <td>\n            <button routerLink=\"/movies/{{movie._id}}\">\n              Read Reviews\n            </button>\n            <button routerLink=\"/movies/{{movie._id}}/review\">\n              Write Reviews\n            </button>\n          </td>\n          <td>\n            {{movie.reviews[0].rating}}\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n<!-- <app-new *ngIf=\"triggerAddingMovie\"></app-new> -->"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.movies = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var observable = this._httpService.getPrimaries();
        observable.subscribe(function (data) {
            _this.movies = data['data'];
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getPrimaries = function () {
        return this._http.get('/objects');
    };
    HttpService.prototype.getPrimary = function (id) {
        return this._http.get('/object/' + id);
    };
    HttpService.prototype.addNew = function (newPrimary) {
        return this._http.post('/newObject', newPrimary);
    };
    HttpService.prototype.addSecondary = function (id, editedSecondary) {
        return this._http.put('/newReview/' + id, editedSecondary);
    };
    HttpService.prototype.editPrimary = function (id, editedPrimary) {
        return this._http.put('/editObject/' + id, editedPrimary);
    };
    HttpService.prototype.deletePrimary = function (id) {
        console.log("made it to http" + id);
        return this._http.delete('/remove/' + id);
    };
    HttpService.prototype.deleteSecondary = function (id, updatedPrimary) {
        return this._http.put('/removeSecondary/' + id, updatedPrimary);
    };
    HttpService.prototype.dynamicSort = function (property) {
        var sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        };
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/new/new.component.css":
/*!***************************************!*\
  !*** ./src/app/new/new.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy9uZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/new/new.component.html":
/*!****************************************!*\
  !*** ./src/app/new/new.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- sample of back end validation from component. make sure variables are defined and the message is keyed correctly on the maincontroller (dictionary key and custom string. if model doesnt contain requirements this will never show) -->\n<!-- <p *ngIf=\"errorMessage.length > 0\">{{errorMessage}}</p> -->\n<!-- sample of front end validation from component (be sure boolean is defined in component and triggered on submit function) -->\n<!-- <p *ngIf=\"errorBoolean == true\">Your title must be at least 3 characters long</p> -->\n<!-- sample of real time validation -->\n<!-- <p *ngIf=\"newObject.title.length >= 1 && newObject.title.length < 3\">Your title must be at least 3 characters</p> -->\n<form (submit)=\"onSubmit()\">\n  <label>Title</label>\n  <input type=\"text\" name=\"newObject.title\" required minlength=\"5\" maxlength=\"25\" [(ngModel)] = \"newObject.title\" #title =\"ngModel\">\n  <p>\n    {{title.errors | json}}\n  </p>\n  <p>\n    {{title.valid|json}}\n  </p>\n  <label>User</label>\n  <input type=\"text\" name=\"newReview.user\" [(ngModel)] = \"newReview.user\">\n\n  <label>Rating</label>\n  <select name=\"newReview.rating\" [(ngModel)]=\"newReview.rating\">\n    <option value=\"5\">5 Stars</option>\n    <option value=\"4\">4 Stars</option>\n    <option value=\"3\">3 Stars</option>\n    <option value=\"2\">2 Stars</option>\n    <option value=\"1\">1 Stars</option>\n  </select>\n  <label>Comment</label>\n  <textarea name=\"newReview.comment\" [(ngModel)]=\"newReview.comment\"></textarea>\n  <button type=\"submit\">Submit</button>\n</form>\n<button [routerLink] = \"['/products']\">Cancel</button>\n"

/***/ }),

/***/ "./src/app/new/new.component.ts":
/*!**************************************!*\
  !*** ./src/app/new/new.component.ts ***!
  \**************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NewComponent = /** @class */ (function () {
    function NewComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.errorBoolean = false;
        this.errorMessage = "";
    }
    NewComponent.prototype.ngOnInit = function () {
        this.newObject = { title: "", reviews: [] };
        this.newReview = { user: "", rating: 1, comment: "" };
    };
    NewComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.newObject.title.length < 3) {
            this.errorBoolean = true;
        }
        else {
            //this will create the object with an initial review
            this.newObject.reviews.push(this.newReview);
            var observable = this._httpService.addNew(this.newObject);
            observable.subscribe(function (data) {
                console.log(data);
                if (data['errorMsg']) {
                    _this.errorMessage = data['errorMsg'];
                }
                else {
                    _this._router.navigate(['/movies']);
                }
            });
        }
    };
    NewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new',
            template: __webpack_require__(/*! ./new.component.html */ "./src/app/new/new.component.html"),
            styles: [__webpack_require__(/*! ./new.component.css */ "./src/app/new/new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NewComponent);
    return NewComponent;
}());



/***/ }),

/***/ "./src/app/parent/parent.component.css":
/*!*********************************************!*\
  !*** ./src/app/parent/parent.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcmVudC9wYXJlbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/parent/parent.component.html":
/*!**********************************************!*\
  !*** ./src/app/parent/parent.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table>\n  <thead>\n    <tr>\n      <th>Object</th>\n      <th>Actions</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor = \"let x of listOfObjects\">\n      <td>{{x.title}}</td>\n      <td>\n        <button (click) = \"onSelectForChild(x)\">Give to Child</button>\n        <button (click) = \"onShow(x)\">Show</button>\n        <button (click) = \"onEdit(x)\">Edit</button>\n        <button (click) = \"onDelete(x)\">Delete</button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n<app-child *ngIf=\"selectedObject != null\" [childVariable] = \"selectedObject\" (childOutputVariable)=\"ReceivedChildMessage($event)\"></app-child>"

/***/ }),

/***/ "./src/app/parent/parent.component.ts":
/*!********************************************!*\
  !*** ./src/app/parent/parent.component.ts ***!
  \********************************************/
/*! exports provided: ParentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentComponent", function() { return ParentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ParentComponent = /** @class */ (function () {
    function ParentComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    ParentComponent.prototype.ngOnInit = function () {
        this.getObjects();
    };
    ParentComponent.prototype.getObjects = function () {
        var _this = this;
        var observable = this._httpService.getPrimaries();
        observable.subscribe(function (data) {
            // this.listOfObjects = data['data']
            _this.listOfObjects = data['data'].sort(_this._httpService.dynamicSort("title"));
        });
    };
    ParentComponent.prototype.onShow = function (x) {
        this._router.navigate(['/products/' + x._id + '/details']);
    };
    ParentComponent.prototype.onEdit = function (x) {
        this._router.navigate(['/products/edit', x._id]);
    };
    ParentComponent.prototype.onDelete = function (x) {
        var _this = this;
        var observable = this._httpService.deletePrimary(x._id);
        observable.subscribe(function (data) {
            _this.getObjects();
        });
    };
    ParentComponent.prototype.onSelectForChild = function (x) {
        this.selectedObject = x;
    };
    ParentComponent.prototype.ReceivedChildMessage = function (event) {
        if (event == true) {
            this.selectedObject = null;
            //you can also run other functions to refresh the parent's lists and whatever
        }
    };
    ParentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-parent',
            template: __webpack_require__(/*! ./parent.component.html */ "./src/app/parent/parent.component.html"),
            styles: [__webpack_require__(/*! ./parent.component.css */ "./src/app/parent/parent.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ParentComponent);
    return ParentComponent;
}());



/***/ }),

/***/ "./src/app/view/view.component.css":
/*!*****************************************!*\
  !*** ./src/app/view/view.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvdmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/view.component.html":
/*!******************************************!*\
  !*** ./src/app/view/view.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a  [routerLink]=\"['/movies']\">\n  <button (click)=\"deleteMovie(movie._id)\">Delete Movie</button>\n</a>\n<h3>\n  Add a Review for {{movie.title}}\n</h3>\n<div class=\"table-wrapper-scroll-y\">\n  <table class=\"table table-bordered table-striped\">\n    <thead>\n      <tr>\n        <th scope=\"col\">Reviewer</th>\n        <th scope=\"col\">Rating</th>\n        <th scope=\"col\">Reviews</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let user of movie.reviews\">\n        <th scope=\"row\">{{user.user}}</th>\n        <td>\n          {{user.rating}}\n        </td>\n        <td>\n          {{user.comment}}\n          <button (click)=\"deleteReview(user._id)\">\n            Delete Review\n          </button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/view/view.component.ts":
/*!****************************************!*\
  !*** ./src/app/view/view.component.ts ***!
  \****************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ViewComponent = /** @class */ (function () {
    function ViewComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.movie = [];
    }
    ViewComponent.prototype.ngOnInit = function () {
        this.getMovie();
    };
    ViewComponent.prototype.getMovie = function () {
        var _this = this;
        var id = this._route.snapshot.paramMap.get('id');
        var observable = this._httpService.getPrimary(id);
        observable.subscribe(function (data) {
            _this.movie = data['data'];
        });
    };
    // deleteReview(x){
    //   console.log(x);
    //   let observable = this._httpService.deleteSecondary(x);
    // }
    ViewComponent.prototype.deleteMovie = function (q) {
        var observable = this._httpService.deletePrimary(q);
        observable.subscribe();
    };
    ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.css */ "./src/app/view/view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ViewComponent);
    return ViewComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Jeff/Desktop/Mean/BeltExamOne/Movies/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map