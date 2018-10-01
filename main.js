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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary fixed-top\">\n  <h3 class=\"text-white\">Student</h3>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n</nav>\n\n<div style=\"padding-top: 30px;\">\n  <app-student></app-student>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./student/student.component */ "./src/app/student/student.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _student_student_component__WEBPACK_IMPORTED_MODULE_7__["StudentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["CalendarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["DataTableModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/student.service.ts":
/*!************************************!*\
  !*** ./src/app/student.service.ts ***!
  \************************************/
/*! exports provided: StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return StudentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudentService = /** @class */ (function () {
    function StudentService(httpClient) {
        this.httpClient = httpClient;
    }
    StudentService.prototype.getStudentDetails = function () {
        return this.httpClient.get('assets/studentDetails.json');
    };
    StudentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], StudentService);
    return StudentService;
}());



/***/ }),

/***/ "./src/app/student/student.component.html":
/*!************************************************!*\
  !*** ./src/app/student/student.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-5\">\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n\n\n\n      <div class=\"mt-2 mb-2\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <span>\n              <h5> Class Summary</h5>\n            </span>\n          </div>\n          <div class=\"card-body\">\n            <table class=\"table table-condensed table-light\">\n              <tr>\n                <th>Total Stregth</th>\n                <td> {{ rows.length }}</td>\n              </tr>\n              <tr>\n                <th>A Grade</th>\n                <td> {{ maxGrade }}</td>\n              </tr>\n              <tr>\n                <th>B Grade</th>\n                <td> {{ avgGrade }}</td>\n              </tr>\n              <tr>\n                <th>Fail Grade</th>\n                <td> {{ minGrade }}</td>\n              </tr>\n            </table>\n          </div>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"col-md-9\">\n\n      <div class=\"mb-2\">\n        <button class=\"btn btn-success\" (click)=\"addRecord()\">\n          <i class=\"fa fa-plus\"></i> Add New Record\n        </button>\n      </div>\n\n      <div class=\"card\" *ngIf=\"isNewRecord\">\n        <div class=\"card-body\">\n          <form [formGroup]=\"studentForm\">\n            <div class=\"row\">\n              <div class=\"col-md-3\">\n                <div class=\"form-group\">\n                  <label for=\"studid\">Student Id:</label>\n                  <input type=\"number\" class=\"form-control\" formControlName=\"studentId\" id=\"studid\">\n                </div>\n              </div>\n              <div class=\"col-md-3\">\n                <div class=\"form-group\">\n                  <label for=\"studname\">Student Name:</label>\n                  <input type=\"text\" class=\"form-control\" formControlName=\"studentName\" id=\"studname\">\n                </div>\n              </div>\n              <div class=\"col-md-3\">\n                <div class=\"form-group\">\n                  <label for=\"subject3\">Test Score:</label>\n                  <input type=\"number\" class=\"form-control\" formControlName=\"testScore\" id=\"testScore\" min=\"1\" max=\"100\">\n                </div>\n              </div>\n              \n              <div style=\"margin-top:25px;\">\n              <div class=\"form-group\">\n                <button type=\"submit\" [disabled]=\"!studentForm.valid\" (click)=\"add()\" class=\"btn btn-success m-2\">Add</button>\n                <button type=\"submit\" (click)=\"isNewRecord=false\" class=\"btn btn-default m-2\">Cancel</button>\n              </div>\n            </div>\n            </div>\n          </form>\n        </div>\n      </div>\n\n\n\n\n      <p-dataTable #dt [value]=\"rows\" [editable]=\"true\" [immutable]=\"false\" [rows]=\"10\" [paginator]=\"true\" [pageLinks]=\"3\" [rowsPerPageOptions]=\"[10,20,30]\">\n        <p-column field=\"studentId\" header=\"Student Id\" [style]=\"{'width':'100px'}\"></p-column>\n        <p-column field=\"studentName\" header=\"Student Name\" [style]=\"{'width':'200px'}\">\n          <ng-template let-row=\"rowData\" pTemplate=\"body\">\n            <div *ngIf=\"!row.isEditable\">\n              <span> {{ row.studentName }}</span>\n            </div>\n            <div *ngIf=\"row.isEditable\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"row.studentName\">\n            </div>\n          </ng-template>\n        </p-column>\n        <p-column field=\"testScore\" header=\"Test Score\" [style]=\"{'width':'140px'}\">\n          <ng-template let-row=\"rowData\" pTemplate=\"body\">\n            <div *ngIf=\"!row.isEditable\">\n              {{row.testScore}}\n            </div>\n            <div *ngIf=\"row.isEditable\">\n              <input type=\"number\" (change)=\"testScoreChanged(row)\" class=\"form-control\" [(ngModel)]=\"row.testScore\">\n            </div>\n          </ng-template>\n        </p-column>\n        <p-column field=\"grade\" header=\"Grade\" [style]=\"{'width':'120px'}\">\n          <ng-template let-row=\"rowData\" pTemplate=\"body\">\n            <span class=\"badge\" [ngClass]=\"( row.grade=='FAIL')?'fail':'pass'\"> {{ row.grade }}</span>\n          </ng-template>\n        </p-column>\n\n        <p-column styleClass=\"col-button\" [style]=\"{'width':'120px'}\">\n          <ng-template pTemplate=\"header\">\n            <span>\n              Operations\n            </span>\n          </ng-template>\n          <ng-template let-row=\"rowData\" pTemplate=\"body\" let-i=\"rowIndex\">\n            <div class=\"text-center\">\n              <span style=\"margin: 2px;\">\n                <span *ngIf=\"!row.isEditable\">\n                  <a href=\"javascript:\" (click)=\"editRecord(row)\">\n                    <i class=\"fa fa-edit\" style=\"background-color: green; color:white; padding:5px;\"></i>\n                  </a>\n                </span>\n\n                <span *ngIf=\"isEditable && row.isEditable\">\n                  <a href=\"javascript:\" (click)=\"saveRecord(row)\" style=\"margin: 2px;\">\n                    <i class=\"fa fa-save\" style=\"background-color: green; color:white; padding:5px;\"></i>\n                  </a>\n                  <a href=\"javascript:\" (click)=\"cancelRecord(row)\" style=\"margin: 2px;\">\n                    <i class=\"fa fa-remove\" style=\"background-color: #777; color:white; padding:5px;\"></i>\n                  </a>\n                </span>\n\n              </span>\n              <span style=\"margin: 2px;\" *ngIf=\"!row.isEditable\">\n                <a href=\"javascript:\" (click)=\"deleteRecord(i)\">\n                  <i class=\"fa fa-trash-o\" style=\"background-color: red; color:white; padding: 5px;\"></i>\n                </a>\n              </span>\n            </div>\n          </ng-template>\n        </p-column>\n      </p-dataTable>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/student/student.component.scss":
/*!************************************************!*\
  !*** ./src/app/student/student.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fail {\n  background-color: red;\n  color: white;\n  padding: 5px; }\n\n.pass {\n  background-color: green;\n  color: white;\n  padding: 5px; }\n"

/***/ }),

/***/ "./src/app/student/student.component.ts":
/*!**********************************************!*\
  !*** ./src/app/student/student.component.ts ***!
  \**********************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../student.service */ "./src/app/student.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StudentComponent = /** @class */ (function () {
    function StudentComponent(fb, studentService) {
        this.fb = fb;
        this.studentService = studentService;
        this.studentDetails = [];
        this.editStudentData = {};
        this.isNewRecord = false;
        this.isEditable = false;
        this.display = false;
        this.isNewTableRecord = false;
        this.editStudent = false;
        this.rows = [];
        this.cols = [
            { field: 'studentId', header: 'Student Id' },
            { field: 'studentName', header: 'Student Name' },
            { field: 'subject1', header: 'Subject1' },
            { field: 'subject2', header: 'Subject2' },
            { field: 'subject3', header: 'Subject3' },
            { field: 'grade', header: 'Grade' },
        ];
    }
    StudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.dt.immutable);
        this.buildForm();
        this.studentService.getStudentDetails().subscribe(function (res) {
            console.log(res);
            _this.rows = res.students;
            _this.rows.forEach(function (row) {
                row['isEditable'] = false;
                _this.calculateGrade(row);
            });
            _this.assignGrade();
        });
    };
    StudentComponent.prototype.addRecord = function () {
        this.isNewRecord = !this.isNewRecord;
    };
    StudentComponent.prototype.assignGrade = function () {
        this.maxGrade = this.filterGrade('A');
        this.avgGrade = this.filterGrade('B');
        this.minGrade = this.filterGrade('FAIL');
        console.log(this.maxGrade, this.avgGrade, this.minGrade);
    };
    StudentComponent.prototype.filterGrade = function (grade) {
        if (grade) {
            return this.rows.filter(function (student) { return student.grade == grade; }).length;
        }
    };
    StudentComponent.prototype.buildForm = function () {
        this.studentForm = this.fb.group({
            'studentId': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'studentName': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            "testScore": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    StudentComponent.prototype.add = function (student) {
        console.log(this.studentForm.value);
        this.rows.push(this.studentForm.value);
        this.calculateGrade(this.studentForm.value);
        this.assignGrade();
        this.studentForm.reset();
        this.isNewRecord = false;
    };
    StudentComponent.prototype.editRecord = function (student) {
        this.editStudentData = student;
        this.isEditable = true;
        this.editStudentData['isEditable'] = true;
        console.log(student);
    };
    StudentComponent.prototype.cancel = function (student) {
        this.editStudentData = student;
        this.editStudent = false;
        this.editStudentData['isEditable'] = false;
    };
    StudentComponent.prototype.saveRecord = function (student) {
        this.editStudentData = student;
        this.isEditable = false;
        this.calculateGrade(this.editStudentData);
        this.editStudentData['isEditable'] = false;
    };
    StudentComponent.prototype.cancelRecord = function (student) {
        this.isEditable = false;
        student.isEditable = false;
    };
    StudentComponent.prototype.deleteRecord = function (index) {
        console.log("Delete");
        this.rows.splice(index, 1);
        this.isNewTableRecord = false;
    };
    StudentComponent.prototype.calculateGrade = function (row) {
        var testScore = row['testScore'];
        var grade = "";
        if (testScore >= 90) {
            grade = "A";
        }
        else if (testScore >= 65 && testScore < 90) {
            grade = "B";
        }
        else if (testScore < 65) {
            grade = "FAIL";
        }
        row['grade'] = grade;
    };
    StudentComponent.prototype.testScoreChanged = function (row) {
        console.log(row);
        this.calculateGrade(row);
        this.assignGrade();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["DataTable"]),
        __metadata("design:type", Object)
    ], StudentComponent.prototype, "dt", void 0);
    StudentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-student',
            template: __webpack_require__(/*! ./student.component.html */ "./src/app/student/student.component.html"),
            styles: [__webpack_require__(/*! ./student.component.scss */ "./src/app/student/student.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"]])
    ], StudentComponent);
    return StudentComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/akhilkumar/Desktop/FarmBExercise/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map