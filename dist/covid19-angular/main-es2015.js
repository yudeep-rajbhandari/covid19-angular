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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <app-navbar></app-navbar>\r\n    <router-outlet></router-outlet>\r\n    <app-footer></app-footer>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/aqivisualize/aqivisualize.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/aqivisualize/aqivisualize.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"aqiAnchor\">\r\n  <h3>Air Quality Monitor</h3>\r\n<p>Nearly a week after the government imposed a temporary lockdown across the nation to contain the spread of the coronavirus (COVID-19), the Kathmandu Valley and other major cities have started to witness a significant improvement in their Air Quality Index (AQI).</p>\r\n  <div class=\"aqi\"  (window:resize)=\"onResize($event)\">\r\n    <google-chart #chart\r\n                  [title]=\"title\"\r\n                  [type]=\"type\"\r\n                  [data]=\"data\"\r\n                  [columnNames]=\"columnNames\"\r\n                  [options]=\"options\"\r\n               >\r\n    </google-chart>\r\n    <p style=\"font-size: 50%\">History data is from Nepal Goverment(http://pollution.gov.np/) and current data is from airvisual.com</p>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/blackmarketing/blackmarketing.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/blackmarketing/blackmarketing.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"cover\" class=\"min-vh-100\">\r\n  <div id=\"cover-caption\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\" >\r\n        <div class=\"col-xl-5 col-lg-6 col-md-8 col-sm-12 mx-auto text-center form p-4\">\r\n        <form [formGroup]=\"signupForm\" (ngSubmit)=\"signup()\" class=\"form-horizontal form-material\" id=\"loginform\">\r\n          <a href=\"javascript:void(0)\" class=\"text-center db logo-container\">\r\n          </a>\r\n          <h3 class=\"box-title m-t-40 m-b-0\">Report Now</h3>\r\n          <small>Please report here if any black marketing cases are found within your locality.</small>\r\n          <div class=\"form-group m-t-20\">\r\n            <div class=\"col-xs-12\">\r\n              <app-form-error-wrapper [control]=\"signupForm.controls['productName']\" [controlName]=\"'productName'\" [apiErrorType]=\"'productName'\">\r\n                <input class=\"form-control\" type=\"text\" formControlName=\"productName\" placeholder=\"What is the product?\">\r\n              </app-form-error-wrapper>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group \">\r\n            <div class=\"col-xs-12\">\r\n              <app-form-error-wrapper [control]=\"signupForm.controls['location']\" [controlName]=\"'location'\" [apiErrorType]=\"'location'\">\r\n                <input class=\"form-control\" type=\"text\" formControlName=\"location\" placeholder=\"Please provide us your location\">\r\n              </app-form-error-wrapper>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group \">\r\n            <div class=\"col-xs-12\">\r\n              <app-form-error-wrapper [control]=\"signupForm.controls['thenPrice']\" [controlName]=\"'thenPrice'\" [apiErrorType]=\"'thenPrice'\">\r\n                <input class=\"form-control\" type=\"text\" formControlName=\"thenPrice\" placeholder=\"What was the price earlier?\">\r\n              </app-form-error-wrapper>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group \">\r\n            <div class=\"col-xs-12\">\r\n              <app-form-error-wrapper [control]=\"signupForm.controls['nowPrice']\" [controlName]=\"'nowPrice'\" [apiErrorType]=\"'nowPrice'\">\r\n                <input class=\"form-control\" type=\"text\" formControlName=\"nowPrice\" placeholder=\"What was the price now?\">\r\n              </app-form-error-wrapper>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group \">\r\n            <div class=\"col-xs-12\">\r\n              <app-form-error-wrapper [control]=\"signupForm.controls['comments']\" [controlName]=\"'comments'\" [apiErrorType]=\"'comments'\">\r\n                <textarea class=\"form-control\" rows=\"2\" formControlName=\"comments\" placeholder=\"AnyComments?\"></textarea>\r\n              </app-form-error-wrapper>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group text-center m-t-20\">\r\n            <div class=\"col-xs-12\">\r\n              <button class=\"btn btn-info btn-lg btn-block btn-rounded btn-default text-uppercase waves-effect waves-light\" [disabled]=\"signupForm.invalid || isLoading\">\r\n                <app-button-loader [isLoading]=\"isLoading\" [label]=\"'Submit'\"></app-button-loader>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/corona-fear/corona-fear.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/corona-fear/corona-fear.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"cover\" class=\"min-vh-100\">\r\n  <div id=\"cover-caption\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-5 col-lg-6 col-md-8 col-sm-12 mx-auto text-center form p-4\">\r\n          <form [formGroup]=\"signupForm\" (ngSubmit)=\"signup()\" class=\"form-horizontal form-material\" id=\"loginform\">\r\n            <a href=\"javascript:void(0)\" class=\"text-center db logo-container\">\r\n            </a>\r\n            <h3 class=\"box-title m-t-40 m-b-0\">Report Here</h3>\r\n            <small>The CoronaFear cases here means the cases that were caused by discrimination or fear of corona.</small>\r\n            <div class=\"form-group m-t-20\">\r\n              <div class=\"col-xs-12\">\r\n                <app-form-error-wrapper [control]=\"signupForm.controls['location']\" [controlName]=\"'location'\" [apiErrorType]=\"'Location'\">\r\n                  <input type=\"text\"  multiple class=\"form-control\" formControlName=\"location\" placeholder=\"What is your location?\">\r\n\r\n\r\n\r\n                  <!--              <select id=\"multiple-checkboxes\" multiple=\"multiple\" class=\"form-control\" type=\"text\" formControlName=\"symptoms\" placeholder=\"What symptoms are you facing?\">-->\r\n                  <!--                <option value=\"php\">PHP</option>-->\r\n                  <!--                <option value=\"javascript\">JavaScript</option>-->\r\n                  <!--                <option value=\"java\">Java</option>-->\r\n                  <!--                <option value=\"sql\">SQL</option>-->\r\n                  <!--                <option value=\"jquery\">Jquery</option>-->\r\n                  <!--                <option value=\".net\">.Net</option>-->\r\n                  <!--              </select>-->\r\n                </app-form-error-wrapper>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group m-t-20\">\r\n              <div class=\"col-xs-12\">\r\n                <app-form-error-wrapper [control]=\"signupForm.controls['responsibleHospital']\" [controlName]=\"'responsibleHospital'\" [apiErrorType]=\"'responsibleHospital'\">\r\n                  <input   class=\"form-control\" type=\"text\" formControlName=\"responsibleHospital\" placeholder=\"Which hospital was referred?\">\r\n\r\n                </app-form-error-wrapper>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group \">\r\n              <div class=\"col-xs-12\">\r\n                <app-form-error-wrapper [control]=\"signupForm.controls['age']\" [controlName]=\"'age'\" [apiErrorType]=\"'age'\">\r\n                  <input list=\"age\" class=\"form-control\" type=\"text\" formControlName=\"age\" placeholder=\"Please provide us the age\">\r\n                  <datalist id=\"age\">\r\n                    <option value=\"0-10 years\"></option>\r\n                    <option value=\"10- 20 years\"></option>\r\n                    <option value=\"20- 30 years\"></option>\r\n                    <option value=\"30- 40 years\"></option>\r\n                    <option value=\"40- 50 years\"></option>\r\n                    <option value=\"More than 60 years\"></option>\r\n                  </datalist>\r\n                </app-form-error-wrapper>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group \">\r\n              <div class=\"col-xs-12\">\r\n                <app-form-error-wrapper [control]=\"signupForm.controls['gender']\" [controlName]=\"'gender'\" [apiErrorType]=\"'gender'\">\r\n                  <input list=\"gender\" class=\"form-control\" type=\"text\" formControlName=\"gender\" placeholder=\"What is the gender?\">\r\n                  <datalist id=\"gender\">\r\n                    <option value=\"Male\"></option>\r\n                    <option value=\"Female\"></option>\r\n                    <option value=\"Others\"></option>\r\n                  </datalist>\r\n                </app-form-error-wrapper>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group \">\r\n              <div class=\"col-xs-12\">\r\n                <app-form-error-wrapper [control]=\"signupForm.controls['description']\" [controlName]=\"'description'\" [apiErrorType]=\"'description'\">\r\n                  <input  class=\"form-control\" type=\"text\" formControlName=\"description\" placeholder=\"Provide us some description or link\">\r\n                </app-form-error-wrapper>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group \">\r\n              <div class=\"col-xs-12\">\r\n                <app-form-error-wrapper [control]=\"signupForm.controls['statuses']\" [controlName]=\"'statuses'\" [apiErrorType]=\"'statuses'\">\r\n                  <input list=\"Op\" class=\"form-control\" type=\"text\" formControlName=\"statuses\" placeholder=\"What is the status now?\">\r\n                  <datalist id=\"Op\">\r\n                    <option value=\"Dead\"></option>\r\n                    <option value=\"Highly affected\"></option>\r\n                    <option value=\"Affected\"></option>\r\n                    <option value=\"Normal\"></option>\r\n                  </datalist>\r\n                </app-form-error-wrapper>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group text-center m-t-20\">\r\n              <div class=\"col-xs-12\">\r\n                <button class=\"btn btn-info btn-lg btn-block btn-rounded btn-default text-uppercase waves-effect waves-light\" [disabled]=\"signupForm.invalid || isLoading\">\r\n                  <app-button-loader [isLoading]=\"isLoading\" [label]=\"'Submit'\"></app-button-loader>\r\n                </button>\r\n              </div>\r\n            </div>\r\n\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/essentials/essentials.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/essentials/essentials.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"d-flex justify-content-center\">\r\n    <input  class=\"form-control\" list=\"age1\"  style = \"max-width: 400px\" type=\"text\" [(ngModel)]=\"local1\" placeholder=\"Type a Location . . \"/>\r\n    <datalist id=\"age1\">\r\n      <option *ngFor=\"let local of locations1\" [value]=\"local\"> </option>\r\n    </datalist>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-4 col-md-6 col-sm-12\">\r\n\r\n      <div class=\"essentials-container\" *ngIf=\"ready\">\r\n        <h2>Order Grocery Products</h2>\r\n<!--        <input  class=\"form-control\" list=\"age1\"  type=\"email\" [(ngModel)]=\"local1\" placeholder=\"Location . . \"/>-->\r\n\r\n        <div class=\"card\"   *ngFor = \"let prod of grocery | essentialFilter:local1; let i=index\">\r\n          <div class=\"card-body essentials-div\">\r\n            <h6 class=\"card-text text-left essentials-div-title\">Company: <span class=\"essentials-div-text\">{{prod.Company}}</span></h6>\r\n            <h6 class=\"card-text text-left essentials-div-title\">Category: <span class=\"essentials-div-text\">{{prod.Category}}</span></h6>\r\n            <h6 class=\"card-text text-left essentials-div-title\">Minimum Order: <span class=\"essentials-div-text\">{{prod.minimum_order}}</span></h6>\r\n            <h6 class=\"card-text text-left essentials-div-title\">Delivery Locations: <span class=\"essentials-div-text\">{{prod.arraylocation.toString()}}</span></h6>\r\n            <h6 class=\"card-text text-left essentials-div-title\">Link: <a href={{prod.link}} >{{prod.Company}}</a></h6>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-4 col-md-6 col-sm-12\">\r\n      <div class=\"essentials-container\" *ngIf=\"ready\">\r\n        <h2>Order Fruit Products</h2>\r\n<!--        <input class=\"form-control\" list=\"age2\"  type=\"email\"  placeholder=\"Location . .\" [(ngModel)]=\"local2\"/>-->\r\n<!--        <datalist id=\"age2\">-->\r\n<!--          <option *ngFor=\"let local of locations2\" [value]=\"local\" ></option>-->\r\n<!--        </datalist>-->\r\n        <div class=\"card\"   *ngFor = \"let prod of fruits | essentialFilter:local1; let i=index\">\r\n          <div class=\"card-body essentials-div\">\r\n            <h6 class=\"card-text text-left essentials-div-title\">Company: <span class=\"essentials-div-text\">{{prod.Company}}</span></h6>\r\n            <h6 class=\"card-text text-left essentials-div-title\">Category: <span class=\"essentials-div-text\">{{prod.Category}}</span></h6>\r\n            <h6 class=\"card-text text-left essentials-div-title\">Minimum Order: <span class=\"essentials-div-text\">{{prod.minimum_order}}</span></h6>\r\n            <h6 class=\"card-text text-left essentials-div-title\">Delivery Locations: <span class=\"essentials-div-text\">{{prod.arraylocation.toString()}}</span></h6>\r\n            <h6 class=\"card-text text-left essentials-div-title\">Link: <a href={{prod.link}}>{{prod.Company}}</a></h6>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-4 col-md-6 col-sm-12\">\r\n      <div class=\"essentials-container\" *ngIf=\"ready\">\r\n        <h2>Order Medicines</h2>\r\n<!--        <input class=\"form-control\" list=\"age3\"  type=\"email\"  placeholder=\"Location . .\" [(ngModel)]=\"local3\"/>-->\r\n<!--        <datalist id=\"age3\">-->\r\n<!--          <option *ngFor=\"let local of locations3\" [value]=\"local\" ></option>-->\r\n<!--        </datalist>-->\r\n        <div class=\"card\"   *ngFor = \"let prod of medicine |essentialFilter:local1; let i=index\">\r\n          <div class=\"card-body essentials-div\">\r\n            <h6 class=\"card-text text-left essentials-div-title\">Company: <span class=\"essentials-div-text\">{{prod.Company}}</span></h6>\r\n            <h6 class=\"card-text text-left essentials-div-title\">Category: <span class=\"essentials-div-text\">{{prod.Category}}</span></h6>\r\n            <h6 class=\"card-text text-left essentials-div-title\">Minimum Order: <span class=\"essentials-div-text\">{{prod.minimum_order}}</span></h6>\r\n            <h6 class=\"card-text text-left essentials-div-title\">Delivery Locations: <span class=\"essentials-div-text\">{{prod.arraylocation.toString()}}</span></h6>\r\n            <h6 class=\"card-text text-left essentials-div-title\">Link: <a href={{prod.link}} >{{prod.Company}}</a></h6>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"!showstuff\">\r\n    <div class=\"loading\">Loading&#8230;</div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr>\r\n<div class=\"container\">\r\n    <div class=\"footer\">        \r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\" id=\"left\">\r\n                <a href=\"#\">CoronaNepal</a>\r\n                <!-- <a href=\"/hospitalList\">Hospital</a> -->\r\n                <!-- <a href=\"#\">AQI</a> -->\r\n            </div>\r\n            <div class=\"col-md-6\" id=\"right\">\r\n                <a href=\"#\"><p>All Rights Reserved @ 2020 Nepal</p></a>\r\n            </div>\r\n        </div>\r\n        <div class=\"last\">\r\n            <p>Our data source are MOHP Nepal,WOrldometer,DOE Nepal, Airvisual.com\r\n                We are trying to provide as much accurate information as possible, \r\n                if any error is found please report in the chat or\r\n                 mail at admin@thiscovidnepal.com</p>\r\n        </div>\r\n        \r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/getcorona-fear/getcorona-fear.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/getcorona-fear/getcorona-fear.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"head-text\">\r\n    <h3>Corona Fear Cases:</h3>\r\n    <p>The cases mentioned below are those cases which are highly affected due to corona fear.\r\n      Those patients were neglected by the hospital authority for further treatment resulting in even deaths of the victims.</p>\r\n  </div>\r\n  <div class=\"suspected-container\" *ngIf=\"marketing\">\r\n    <div class=\"text-center p-3\"   *ngFor = \"let prod of coronaFeardata; let i=index\">\r\n      <div class=\"card-body suspected-div\">\r\n        <h6 class=\"card-text text-left suspected-div-title\">Location: <span class=\"suspected-div-text\">{{prod.location}}</span></h6>\r\n        <h6 class=\"card-text text-left suspected-div-title\">Age: <span class=\"suspected-div-text\">{{prod.age}}</span></h6>\r\n        <h6 class=\"card-text text-left suspected-div-title\">Gender: <span class=\"suspected-div-text\">{{prod.gender}}</span></h6>\r\n        <h6 class=\"card-text text-left suspected-div-title\">Referred Hospital(s): <span class=\"suspected-div-text\">{{prod.responsibleHospital}}</span></h6>\r\n        <h6 class=\"card-text text-left suspected-div-title\">Description: <span class=\"suspected-div-text\">{{prod.description}}</span></h6>\r\n        <h6 class=\"card-text text-left suspected-div-title\">Status now: <span class=\"suspected-div-text\">{{prod.statuses}}</span></h6>\r\n        <div class=\"footer\">\r\n          <div class=\" text-muted suspected-div-time\">{{prod.created_date}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"!marketing\">\r\n    <div class=\"loading\">Loading&#8230;</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/homepage/homepage.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/homepage/homepage.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container-fluid\"> -->\r\n    <app-landing-page></app-landing-page>\r\n    <app-nepal-map></app-nepal-map>\r\n    <app-hospital-list></app-hospital-list>\r\n    <app-visualizenepal></app-visualizenepal>\r\n    <app-visualize-corona-fear></app-visualize-corona-fear>\r\n    <app-aqivisualize></app-aqivisualize>\r\n<!-- </div> -->\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/hospital-list/hospital-list.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/hospital-list/hospital-list.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h3>Hospital List of Each District</h3>\r\n  <div class=\"d-flex justify-content-center\">\r\n  <input class=\"form-control\" id=\"myInput\" type=\"text\"  style = \"max-width: 1010px; overflow-x:auto; font-weight: lighter;\"[(ngModel)]=\"filtertext\" placeholder=\"Search . . .\">\r\n  </div><br>\r\n    <div class=\"d-flex justify-content-center\">\r\n    <div class=\"table-responsive-md\">\r\n      <table class=\"table table-bordered\">\r\n        <thead class=\"thead-class\">\r\n          <tr class=\"tr-class\">\r\n            <th scope=\"col\">SN</th>\r\n            <th scope=\"col\">Hospital Name</th>\r\n            <th scope=\"col\">District</th>\r\n            <th scope=\"col\">Municipality</th>\r\n            <th scope=\"col\">Contact Number</th>\r\n            <th scope=\"col\">Category</th>\r\n          </tr>\r\n        </thead>\r\n        <ng-container *ngIf=\"databool\" >\r\n          <tbody *ngFor=\"let hos of Hospitals | hospitalFilter:filtertext  ;let i=index\" >\r\n            <tr>\r\n              <th scope=\"row\">{{i+1}}</th>\r\n              <td>{{hos.name}}</td>\r\n              <td>{{hos.district_name}}</td>\r\n              <td>{{hos.municipality_name}}</td>\r\n              <td>{{hos.contact_num=='nan'?'N/A':hos.contact_num}}</td>\r\n              <td>{{hos.category_name}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </ng-container>\r\n        <div *ngIf=\"!databool\">\r\n          <div class=\"loading\">\r\n            Loading&#8230;\r\n          </div>\r\n        </div>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/landing-page/landing-page.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/landing-page/landing-page.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"corona\">\r\n    <h2><strong>The Coronavirus <br>Outbreak in Nepal</strong></h2>\r\n  <div class=\"corona-text\">\r\n    <p>Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered Coronavirus.The Corona pandemic has sickened more than one million people around the globe according\r\n      to the official counts.The global COVID-19 coronavirus pandemic was confirmed to have spread to Nepal when its first case was confirmed in Kathmandu on 24 January 2020.</p>\r\n    <h6>Updated Date: {{this.date}}</h6>\r\n  </div>\r\n  <div class=\"button\">\r\n    <a class=\"map-btn\" (click)=\"gotoMap()\">Map</a>\r\n    <a class=\"country-btn\" (click)=\"gotoVisualize()\">Country</a>\r\n    <a class=\"coronafear-btn\" (click)=\"gotoCoronaFear()\">CoronaFear</a>\r\n    <a class=\"aqi-btn\" (click)=\"gotoAqi()\">AQI</a>\r\n  </div>\r\n\t\t\t\r\n\t\r\n\t\t\r\n    <!-- <img src=\"../../assets/images/map.png\" (click)=\"gotoMap()\">\r\n    <img src=\"../../assets/images/country.png\" (click)=\"gotoVisualize()\">\r\n    <img src=\"../../assets/images/coronafear.png\" (click)=\"gotoCoronaFear()\">\r\n    <img src=\"../../assets/images/aqi.png\" (click)=\"gotoAqi()\"> -->\r\n  </div>\r\n</div>\r\n\r\n<script type=\"text/javascript\" async=\"\" src=\"https://www.google-analytics.com/ga.js\"></script><script type=\"text/javascript\">\r\n  var _gaq = _gaq || [];\r\n  _gaq.push(['_setAccount', 'UA-7243260-2']);\r\n  _gaq.push(['_trackPageview']);\r\n  (function() {\r\n  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;\r\n  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';\r\n  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);\r\n  })();\r\n</script>\r\n\r\n<ng-template #content let-modal style=\"border-radius: 24px;\">\r\n  <div class=\" dialog-body\">\r\n    <div class=\"col text-center\">\r\n      <h4> What do you want to report?</h4>\r\n      <div class=\"btn-group-vertical\">\r\n        <a href=\"/misinformation\"  class=\"button-mis mt-3\" title=\"Report Misinformation\">\r\n\r\n            Misinformation\r\n        </a>\r\n        <a href=\"/blackmarketing\" class=\"button-mis mt-3\" title=\"Report Black Marketing\">\r\n\r\n            Black Marketing\r\n\r\n        </a>\r\n        <a href=\"/suspectedcase\" class=\"button-mis mt-3\" title=\"Report Suspected Cases\">\r\n            Suspected Cases\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #content1 let-modal>\r\n  <div class=\"modal-body dialog-body\">\r\n    <div class=\"col text-center\">\r\n      <h5> What do you want to view?</h5>\r\n      <div class=\"btn-group-vertical\">\r\n        <a href=\"/getmisinformation\"  class=\"button-mis mt-3\" title=\"View Misinformation\">\r\n            Misinformation\r\n        </a>\r\n        <a href=\"/getblackmarketing\" class=\"button-mis mt-3\" title=\"View Black Marketing\">\r\n            Black Marketing\r\n        </a>\r\n        <a href=\"/getsuspectedcase\" class=\"button-mis mt-3\" title=\"View Suspected Cases\">\r\n            Suspected Cases\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/misinformation/misinformation.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/misinformation/misinformation.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"cover\" class=\"min-vh-100\">\r\n  <div id=\"cover-caption\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row justify-content-center align-items-center\">\r\n        <div class=\"col-xl-5 col-lg-6 col-md-8 col-sm-12 mx-auto text-center form p-4\">\r\n        <form [formGroup]=\"signupForm\" (ngSubmit)=\"signup()\" class=\"form-horizontal form-material\" id=\"loginform\">\r\n          <a href=\"javascript:void(0)\" class=\"text-center db logo-container\">\r\n          </a>\r\n          <h3 class=\"box-title\">Report Here</h3>\r\n          <small>Please report here if you know some misinformation about corona in you locality.</small>\r\n          <div></div>\r\n          <div class=\"form-group\">\r\n            <div class=\"col-sm-12\">\r\n              <app-form-error-wrapper [control]=\"signupForm.controls['mInformation']\" [controlName]=\"'mInformation'\" [apiErrorType]=\"'mInformation'\">\r\n                <textarea class=\"form-control\" rows=\"2\" formControlName=\"mInformation\" placeholder=\"What is the information?\"></textarea>\r\n              </app-form-error-wrapper>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group \">\r\n            <div class=\"col-sm-12\">\r\n              <app-form-error-wrapper [control]=\"signupForm.controls['link']\" [controlName]=\"'link'\" [apiErrorType]=\"'link'\">\r\n                <input class=\"form-control\" type=\"text\" formControlName=\"link\" placeholder=\"Please provide us a link for information\">\r\n              </app-form-error-wrapper>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group \">\r\n            <div class=\"col-sm-12\">\r\n              <app-form-error-wrapper [control]=\"signupForm.controls['source']\" [controlName]=\"'source'\" [apiErrorType]=\"'source'\">\r\n                <input class=\"form-control\" type=\"text\" formControlName=\"source\" placeholder=\"What is the source?\">\r\n              </app-form-error-wrapper>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group text-center\">\r\n            <div class=\"col-sm-12\">\r\n              <button class=\"btn btn-info btn-lg btn-block btn-rounded btn-default text-uppercase waves-effect waves-light\" [disabled]=\"signupForm.invalid || isLoading\">\r\n                <app-button-loader [isLoading]=\"isLoading\" [label]=\"'Submit'\"></app-button-loader>\r\n              </button>\r\n            </div>\r\n          </div>\r\n\r\n        </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    </div>\r\n  </section>\r\n\r\n  \r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\r\n  <div id=\"logo\" href=\"#\">\r\n    <img src=\"../../assets/images/coronalogo.png\">\r\n    <label for=\"drop\" class=\"toggle\"><img src=\"../../assets/images/menu.svg\"></label>\r\n  </div>\r\n\r\n \r\n  <input type=\"checkbox\" id=\"drop\" />\r\n      <ul class=\"menu\">\r\n          <li><a href=\"#\">Home</a></li>\r\n                  <!-- Dropdown -->\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbardrop\" data-toggle=\"dropdown\">\r\n            Report\r\n          </a>\r\n          <div class=\"dropdown-menu\">\r\n            <a class=\"dropdown-item\" href=\"/misinformation\">Misinformation</a>\r\n            <a class=\"dropdown-item\" href=\"/blackmarketing\">Blackmarketing</a>\r\n            <a class=\"dropdown-item\" href=\"/coronaCases\">CoronaCases</a>\r\n          </div>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbardrop\" data-toggle=\"dropdown\">\r\n            View\r\n          </a>\r\n          <div class=\"dropdown-menu\">\r\n            <a class=\"dropdown-item\" href=\"/getmisinformation\">Misinformation</a>\r\n            <a class=\"dropdown-item\" href=\"/getblackmarketing\">Blackmarketing</a>\r\n            <a class=\"dropdown-item\" href=\"/getcoronaCases\">CoronaCases</a>\r\n          </div>\r\n        </li>\r\n          <!-- <li><a href=\"/hospitalList\">Hospital List</a></li> -->\r\n          <!-- <li><a href=\"/AQIVisualize\">AQI</a></li> -->\r\n          <li id=\"hoveressentials\"><a href=\"/essentials\" id=\"essentials-btn\">Buy Essentials</a></li>\r\n          <!-- <li><a href=\"#\">About</a></li> -->\r\n      </ul>\r\n  </nav>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/nepal-map/nepal-map.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nepal-map/nepal-map.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"nepalmap-head\">\r\n      <h4><strong>Coronavirus Map:Tracking Nepal</strong></h4>\r\n      <p>Between January and March, a country-wide lockdown came into effect on 24th March, and is scheduled to end as per the health condition of the country.\r\n        <span style=\"  font-family: sans-serif; color: #FB7820; \r\n        font-style: italic;\">Hover over the map for more information</span></p>\r\n      </div>\r\n\r\n<div class=\"nepalmap\" id=\"nepalmapAnchor\" *ngIf=\"showstuff\">\r\n    <svg (mousemove)=\"showProvincedata1(this.$event)\" version=\"1.1\" id=\"Layer_1\" x=\"0px\" y=\"0px\" width=\"90%\" viewBox=\"0 0 1224.992 817.002\"\r\n        enable-background=\"new 0 0 1224.992 817.002\">\r\n\r\n        <g id=\"bg\" transform=\"translate(5240,-472)\">\r\n            <path fill=\"#cccccc\" stroke-width=\"3.31\"\r\n                d=\"M-4969.121,549.386c0.907-1.587,1.502-4.592,3.997-3.997\r\n    c4.507,2.211,9.411,3.288,13.493,6.208c2.012,1.587,3.713,4.507,6.604,3.713c3.487-0.708,6.406,2.013,9.893,2.013\r\n    c3.09-0.313,4.507,2.892,7.086,3.798c2.211,0.907,4.706,0.51,7.001,0.397c1.191,1.502,1.701,4.309,3.997,4.394\r\n    c2.013-0.595,3.798-2.211,6.009-1.587c2.892,0.709,4.989-1.814,7.2-3.203c3.912,2.013,6.69,6.293,6.491,10.687\r\n    c-0.907,3.6-0.907,7.597-3.288,10.602c1.899,1.105,3.713,2.494,4.706,4.507c1.105,2.098,3.401,2.608,5.301,3.713\r\n    c1.304,2.013,2.211,4.195,3.09,6.406c-0.113,2.211-2.608,3.288-3.09,5.414c-0.595,2.296-0.907,4.592-1.304,7.002\r\n    c3.203-0.397,6.407-1.191,9.61-0.907c2.693,0.397,4.791,2.296,6.604,4.195c1.502-0.113,3.005-0.113,4.394-0.113\r\n    c1.304,1.304,2.296,2.891,3.799,3.997c2.211,0.595,4.904,0.397,6.406,2.608c3.486,3.997,9.212,4.989,12.387,9.496\r\n    c2.211-1.105,4.394-3.401,7.001-2.211c2.607,3.09,3.4,7.2,5.896,10.29c1.699,2.892,4.789,4.394,7.512,6.095\r\n    c-0.709,1.701-1.391,3.486-2.098,5.188c2.604-0.595,5.103-1.587,7.396-2.892c3.203,2.211,6.097,4.904,7.086,8.703\r\n    c-2.211,1.701-4.592,3.203-6.89,4.791c2.211,0,4.506-0.114,6.688,0.113c1.899,0.992,2.296,3.203,3.09,4.989\r\n    c0.907,2.807,4.31,2.892,6.604,3.798c0.396,1.389,0.709,2.892,0.992,4.309c4.592,0.793,8.787-2.211,13.295-2.41\r\n    c3.287,0.793,4.192,4.195,4.901,7.001c2.894,0,5.813-0.113,8.504-1.19c3.288,3.487,6.806,6.69,9.81,10.403\r\n    c1.897-0.794,3.713-2.098,5.812-2.495c4.194,1.105,8.192,2.891,12.388,4.309c2.41,2.891,5.813,4.791,9.299,6.208\r\n    c0,1.105,0.112,2.098,0.112,3.09c-1.19,0.396-2.409,0.708-3.601,0.992c0.709,1.701,1.305,3.402,2.211,4.989\r\n    c3.203-0.113,7.711-1.105,9.297,2.693c0.512,3.6,1.813,6.803,3.715,9.893c2.211,0.595,5.103,0.793,6.207,3.203\r\n    c1.39,2.296,0,4.904-0.313,7.313c1.104,1.502,2.495,2.693,3.289,4.394c0.51,2.693-0.513,5.698,0.991,8.107\r\n    c2.495,2.296,5.896,3.487,7.909,6.293c0.794,2.211,1.306,4.507,2.099,6.69c1.898,0.595,4.311,0.595,5.813,2.211\r\n    c2.297,2.806,6.01,3.09,8.9,5.103c0.396-1.701,0.596-3.487,1.305-5.188c2.607-2.098,5.188-4.309,7.71-6.492\r\n    c3.401-1.105,7.002-0.396,10.401-1.304c0.513-3.401,2.211-8.192,6.293-8.192c4.194,0.396,7.397-3.799,11.707-3.09\r\n    c2.496,0.51,5.104,0.113,7.514-0.794c3.4-0.708,5.414,2.807,7.313,4.989c3.912,0.51,7.908,1.389,11.791,2.098\r\n    c3.603,0.595,2.894,5.102,3.603,7.795c3.713,0,7.397,0,11.11,0.113c-0.199,1.701-0.313,3.487-0.709,5.301\r\n    c-0.793,1.701-2.691,2.41-3.996,3.487c0.196,2.693-0.513,5.811,1.305,8.107c0.992,1.389,2.409,2.693,3.005,4.507\r\n    c-0.794,2.891-2.296,5.613-3.288,8.504c3.713-0.313,8.589-0.709,10.006,3.6c0,6.491-2.494,12.699-4.395,18.907\r\n    c-0.51,2.296,2.494,2.692,4.193,2.891c3.4,0,5.188,3.289,8.105,4.195c3.799,0.313,7.908,0.313,11.195,2.495\r\n    c1.503,2.098,3.005,4.31,4.988,6.095c1.104,2.809,1.586,5.813,2.295,8.702c3.485,4.396,9.496,2.607,14.203,3.798\r\n    c3.004,0.599,6.008,0.514,9.015,0.709c5.301,1.814,5.812,9.103,11.509,10.092c0.396,2.299-0.794,5.612,1.813,7.004\r\n    c2.691,2.098,6.207,2.406,9.412,3.398c3.91,0.992,6.688,4.396,10.603,5.415c2.69-0.794,4.987-2.495,7.908-2.692\r\n    c2.808-0.99,5.414,0.906,7.994,1.504c0.905-1.813,1.188-4.312,3.399-5.188c3.713-1.813,5.896-5.499,9.213-7.908\r\n    c2.691-1.104,5.696-0.906,8.59-1.304c2.69-0.511,3.996,2.296,5.695,3.798c1.502,2.211,4.395,1.588,6.604,2.211\r\n    c0.396,1.899,1.104,3.799,1.104,5.813c-0.708,1.304-1.587,2.604-2.211,3.996c0.312,2.69,0.992,5.412,1.304,8.104\r\n    c-2.408,2.297-4.9,4.706-5.498,8.192c-2.211,1.104-4.791,1.896-6.492,3.799c0.599,6.009,1.899,12.104,0.599,18.198\r\n    c3.203,0.709,6.491,1.896,9.81,0.709c3.289-1.308,5.695,2.012,7.795,4.106c2.297,0.597,4.791,0.992,6.096,3.289\r\n    c2.296-0.794,4.395-2.297,6.889-2.013c1.588,0.793,3.004,2.013,4.396,3.09c1.813-2.41,3.484-4.706,5.188-7.002\r\n    c5.696-1.389,11.99-0.992,17.291,1.587c2.691,1.191,5.896,0.992,8.393,2.693c1.104,2.013,1.7,4.309,2.605,6.403\r\n    c2.211-2.013,4.194-4.309,4.988-7.198c1.104-4.109,3.288-7.795,4.988-11.596c1.813,0.313,4.108-0.312,5.498,1.105\r\n    c1.588,4.988,3.289,10.092,3.203,15.308c0.199,2.808,0.709,5.697,1.306,8.394c2.494,4.309,7.71,4.704,11.196,7.795\r\n    c3.09,1.813,3.996,5.499,5.61,8.504c0.992,1.588,2.808,2.807,3.713,4.507c0.313,2.495-0.396,5.104,0.313,7.512\r\n    c1.813,4.791,8.19,5.698,9.895,10.604c-0.198,3.09-1.898,5.812-2.691,8.788c3.912,1.896,7.908,3.713,12.188,4.592\r\n    c2.81-0.992,5.104-3.005,7.795-4.311c-0.903-3.8-2.015-7.598-4.192-10.801c-1.588-2.098-0.313-4.592-0.199-6.889\r\n    c0.396-2.494-0.597-5.103,0.396-7.597c1.813-0.795,3.713-0.907,5.499-1.503c2.809-3.4,5.813-6.806,7.908-10.688\r\n    c0.396-0.113,1.307-0.199,1.813-0.313c2.494,2.893,3.713,6.604,6.207,9.495c1.502,2.297-1.188,4.311-1.813,6.405\r\n    c0,3.005,2.014,5.698,2.014,8.703c-0.111,2.099-0.111,4.31,0.313,6.406c2.894,0.112,6.293-0.992,8.788,1.104\r\n    c4.507,3.288,10.402,3.799,14.797,7.199c1.502,0.992,3.09,2.607,5.104,1.814c1.502-1.307,2.297-3.092,3.485-4.595\r\n    c1.7-1.389,3.713-2.492,5.499-3.91c-0.396-5.696,1.898-11.706,6.688-14.994c0.709-2.101,0.992-4.396,1.504-6.604\r\n    c1.586-0.197,3.399-1.104,5.104-0.511c2.409,1.104,2.211,4.109,3.089,6.095c3.09-0.709,4.593-3.484,6.806-5.414\r\n    c3.484-0.396,7.396-0.312,10.603,1.19c3.005,2.013,2.409,6.208,2.409,9.411c3.484,3.483,8.9,4.592,13.21,2.098\r\n    c3.911,3.6,9.608,4.79,12.5,9.411c3.203,3.997,8.788,1.897,13.099,2.806c5.498,4.195,10.998,9.695,12.304,16.696\r\n    c3.399,0.992,6.491,3.714,10.204,3.203c3.203-0.198,5.301-3.09,7.598-4.903c4.791-1.104,8.59,3.288,13.099,3.09\r\n    c3.798-1.813,7.795-3.399,11.509-5.301c1.189,1.502,2.211,3.089,3.288,4.79c2.69-1.188,5.61-1.897,8.589-2.211\r\n    c3.713,0.198,5.896-4.395,9.809-3.203c3.006,1.701,2.494,5.414,3.912,7.993c2.494-1.587,4.592-4.988,7.994-4.507\r\n    c1.39,0.709,1.502,2.605,2.211,3.911c2.014,0.313,3.912,0.905,5.813,1.588c1.813-2.809,3.09-6.01,5.695-8.191\r\n    c1.701-1.39,1.104-3.997,2.1-5.896c1.588-1.502,3.799-2.408,5.414-3.996c0.709-1.588,0.512-3.401,0.794-5.104h4.592\r\n    c0.709,1.7,1.306,3.486,2.015,5.188c3.287-0.113,6.688-0.512,10.093,0c1.813,0.991,3.288,2.605,4.79,4.107\r\n    c1.813-0.793,3.486-1.698,5.414-2.296c2.807-0.907,5.611,0.907,8.391,1.391c1.814,0.197,3.005,1.699,4.312,3.005\r\n    c1.503-0.512,3.09-1.189,4.706-1.391c3.201,1.105,6.293,2.81,9.298,4.312c2.494,1.304,0.793,4.309,0.396,6.405\r\n    c0.396,5.302-0.313,11.312-4.194,15.191c-1.814,1.701-0.794,4.396-1.105,6.604c0.313,3.996-4.394,6.01-4.394,9.894\r\n    c-0.397,3.912-4.195,6.01-5.499,9.411c-1.588,4.194-1.899,8.702-4.396,12.501c1.701,2.606,4.313,4.988,4.706,8.306\r\n    c-0.511,3.486-4.706,5.813-4.107,9.694c0.99,1.813,2.492,3.288,3.201,5.301c-0.313,3.09-2.211,5.697-3.399,8.504\r\n    c-1.304,2.211-0.511,4.903-1.701,7.086c-1.813,3.487-1.188,7.516-1.502,11.313c-0.596,2.807-2.098,5.414-3.399,7.994\r\n    c1.39,1.389,2.892,2.69,4.193,4.309c0.512,2.692,0.992,5.414,1.7,8.106c2.1,0.111,4.195,0.197,6.293,0.197\r\n    c1.503,3.602,3.8,6.805,7.513,8.307c-0.111,2.211-0.313,4.508-0.511,6.688c1.19,0.794,2.409,1.7,3.486,2.692\r\n    c0.112,1.813,0,3.601,0.396,5.414c0.992,1.813,2.41,3.288,3.402,5.103c1.502,3.203,0.313,6.891,1.587,10.094\r\n    c1.813,5.812,0.313,11.903-1.389,17.402c-0.511,8.901-6.095,16.215-8.901,24.406c-0.904,2.098,1.106,4.109,0.907,6.293\r\n    c-0.198,3.288-1.188,6.406-2.098,9.608c-1.19,3.602-4.988,4.987-7.597,7.313c-1.19,1.588-1.19,3.714-1.814,5.612\r\n    c-2.211,0.113-4.395,0.198-6.604,0.198c-0.709-1.307-1.392-2.692-2.211-3.996c-2.692-1.589-5.896-2.409-8.394-4.593\r\n    c-1.502-2.495-3.005-4.989-3.911-7.798c-0.793,0-1.586,0.113-2.408,0.113c-0.795,2.211-1.701,4.396-3.006,6.406\r\n    c-3.602,0.112-6.404-2.1-8.588-4.79c-0.908,2.493-1.701,4.987-2.691,7.396c-4.109,0.113-8.393,0.598-11.596-2.408\r\n    c-2.211,2.297-4.109,5.414-7.514,6.011c-2.605,0.596-5.188,2.211-7.908,1.7c-3.713-2.809-7.6-5.303-11.596-7.514\r\n    c-5.695-2.408-10.801,2.016-16.412,2.494c-4.791,0.396-3.486,6.293-5.301,9.411c-3.715,2.099-7.396-1.503-11.111-2.211\r\n    c-2.893-0.511-4.107-3.288-5.188-5.612c-4.194,0.512-8.392,0.396-12.612,0.396c-2.099,0.112-3.601-1.589-5.188-2.607\r\n    c-1.896-1.391-4.107-2.495-5.896-4.109c-2.494-6.89-2.692-14.201-3.004-21.4c-1.19,1.898-2.41,3.912-3.601,5.813\r\n    c-1.392,2.809-4.791,3.005-7.397,3.798c-7.711,0.906-11.396,8.788-18.199,11.595c-3.601,2.213-7.795,0.709-10.998-1.502\r\n    c-2.41,2.099-4.791,4.395-7.513,6.209c-3.289-2.409-6.89-4.707-10.914-5.813c-4.194-1.104-6.688-5.103-10.688-6.405\r\n    c-3.996-1.188-4.508-6.604-8.703-7.199c-2.808-0.51-5.414-1.813-7.599-3.485c-2.806-2.296-7-0.906-9.808-3.203\r\n    c-3.289-2.494-7.002-4.108-10.688-5.812c-2.295-0.596-4.592,0.396-6.803,0.709c-3.09,0.197-4.988,3.486-8.107,3.287\r\n    c-2.408,0.313-3.799-2.1-5.414-3.485c-1.813,0.198-3.602,0.511-5.414,0.794c-3.996-4.592-9.895-6.805-15.191-9.608\r\n    c-3.998,2.297-8.787,3.202-12.389,6.293c-4.707,3.601-9.693,7.397-15.789,7.907c-0.111-1.587-0.199-3.203-0.199-4.705\r\n    c-1.813-0.196-3.996,0.511-5.5-0.991c-3.398-2.893-8.307-4.108-10.998-7.907c-3.484-6.689,0.992-14.201-0.905-21.203\r\n    c-0.51-4.312-4.312-7.398-8.192-8.702c-2.099-0.708-3.91-1.899-5.695-3.203c-2.893,3.005-7.396,2.409-10.486,4.989\r\n    c-3.006,2.604-6.405,4.507-9.895,6.095c-2.809,1.502-6.01,0.595-8.9,0.708c-3.797,1.188-6.889,3.799-10.09,5.896\r\n    c-2.809,0.596-5.5-0.709-8.19-0.991c-4.508-0.513-8.787-1.588-13.099-3.006c-2.211-1.898-3.004-4.789-3.912-7.397\r\n    c-1.305-3.09,0.597-6.293,0.992-9.298c-3.483,0.313-7.709-1.104-10.688,1.188c-3.203,2.41-7.711,1.505-11.195,0.198\r\n    c-0.51-1.503-0.992-3.005-1.391-4.508c-1.305-0.793-2.809-1.188-3.713-2.409c-0.709-2.494-0.992-5.103-1.189-7.71\r\n    c-4.592-2.807-10.401-2.013-14.713-5.301c-1.389-1.503-2.211-3.288-3.203-4.989c-1.389,1.19-2.69,2.893-4.592,3.486\r\n    c-1.813-0.708-3.399-2.212-5.498-2.1c-3.912,0.313-7.002-2.493-10.604-3.714c-2.809-1.104-6.207-1.502-7.994-4.309\r\n    c-0.707-1.588-0.396-3.603,0.795-4.904c3.398-3.6,3.912-8.702,4.395-13.407c0.197-3.09,1.39-6.207,1.306-9.298\r\n    c-2.606-5.103-5.188-10.092-7.199-15.506c-9.299-2.892-19.19-3.09-28.291-6.604c-7.199-0.313-14.201-1.814-20.894-3.997\r\n    c-2.014-2.494-2.408-5.813-3.6-8.702c-1.814,0.396-3.604,0.794-5.414,1.304c-0.908-1.389-1.588-2.807-2.496-4.108\r\n    c-2.211-1.189-4.705-1.699-6.604-3.4c-1.189-1.305-1.898-3.005-2.691-4.592c-0.396,0-1.391-0.113-1.813-0.113\r\n    c-1.588,2.409-3.485,4.507-5.612,6.406c-1.699,2.296-2.892,5.498-6.095,6.009c-2.692,1.188-5.104-1.189-7.711-1.189\r\n    c-5.104,0.313-10.203-0.511-15.393-0.112c-0.111,1.104-0.199,2.212-0.396,3.288c1.699,1.188,3.484,2.296,5.301,3.399\r\n    c0.396,4.195-3.09,7.002-6.492,8.59c-1.897-1.104-3.713-2.212-5.301-3.484c-5.414-4.791-12.612-6.491-18.51-10.488\r\n    c-6.209-2.692-11.99-7.71-19.104-7.313c-6.688-0.51-13.295-2.407-20.015-1.698c-1.897,0.709-2.807,2.69-3.6,4.395\r\n    c-0.313,2.296,3.287,4.195,1.699,6.604c-3.09,4.594-6.604,10.688-13.012,10.401c-3.4,1.306-6.604-1.188-8.703-3.799\r\n    c-0.511-1.587-0.709-3.288-1.188-4.901c-0.992-1.813-3.006-2.894-4.594-4.194c-2.494-1.701-3.713-4.593-5.695-6.69\r\n    c-7.002-0.793-13.891,1.393-20.893,0.709c-2.41-0.709-4.705-1.502-7.002-2.409c-3.004-0.989-3.912-4.309-5.611-6.604\r\n    c-3.289,0.113-6.604,0.708-9.895,0.198c-5.697-0.709-11.596,0.794-17.205-1.19c0.707-4.593-0.396-9.298,1.188-13.688\r\n    c0.199-0.992,0.199-1.899-0.313-2.81c-2.099-5.61-4.705-11.311-4.592-17.402c-2.211,0.111-4.31,0-6.49,0\r\n    c-6.69,0.99-13.294,3.714-20.211,3.091c-2.892,0.196-5.414,3.004-8.306,1.896c-5.103-1.699-9.099-5.61-12.501-9.606\r\n    c-3.486-4.11-8.9-5.612-12.813-9.213c-2.891-2.809-6.009-5.303-9.099-7.993c-3.288-2.692-7.512-3.401-11.509-4.396\r\n    c-3.6-2.494-5.811-6.293-8.589-9.606c-3.401-1.504-7.398-1.899-11.197-1.814c-5.103,1.19-6.803,7.002-9.411,10.999\r\n    c-2.211-0.199-4.706,0.51-6.491-0.992c-3.798-2.892-7.71-5.896-12.104-7.994c-4.507-3.005-8.107-7.087-12.104-10.687\r\n    c-3.004-3.09-7.795-2.409-11.197-4.705c-2.891-2.212-6.208-3.799-9.014-6.095c-3.6-2.895-8.192-4.396-11.905-7.087\r\n    c-2.098-1.502-0.596-4.312-0.397-6.293c-2.41-2.298-3.713-5.414-5.103-8.309c-1.814-0.992-3.798-1.188-5.811-1.587\r\n    c-0.397,1.502-0.907,2.894-1.304,4.396c-3.288,1.188-6.888,1.304-10.403,1.304c-0.397-2.013-0.992-3.912-1.502-5.813\r\n    c0.907-0.989,1.899-2.013,2.807-3.005c-2.495-5.812-8.306-9.1-11.311-14.599c-1.304-3.997,0.312-8.504-1.587-12.388\r\n    c-5.102-0.992-9.893-3.005-14.995-3.996c-4.791-0.598-7.909-5.188-12.897-4.904c-0.51-2.296-1.106-4.507-1.701-6.688\r\n    c-1.502,0.51-2.891,1.104-4.309,1.587c-2.211-3.603-6.491-4.195-9.694-6.491c-0.992-1.899-0.992-4.11-1.502-6.208\r\n    c-1.389,0.907-2.806,1.701-4.195,2.605c-3.005-2.605-6.208-5.188-10.006-6.804c-1.814-2.013-3.203-4.309-4.394-6.604\r\n    c-2.608-0.198-5.103-0.514-7.597-1.105c-2.41-3.203-2.807-7.396-4.507-10.913c-2.693,0.198-5.811,1.7-8.107-0.709\r\n    c-2.693-1.502-3.713-4.394-3.912-7.396c-3.203-1.392-6.293-0.396-8.9,1.587c1.105,5.896,2.409,11.903,2.211,17.887\r\n    c-1.105,0.313-2.296,0.511-3.487,0.511c-1.502-1.389-2.693-3.005-4.11-4.394c-2.693-2.211-2.494-6.605-5.811-8.192\r\n    c-2.608-1.701-5.499,0-8.192-0.112c-2.211,0.112-2.806-2.407-4.11-3.602c-1.19-1.897-4.11-2.211-4.507-4.592\r\n    c-0.51-1.502-0.794-3.09-1.105-4.592c-2.296-1.19-4.592-2.495-6.803-3.912v-4.507c-4.592-0.514-7.71-4.11-11.509-6.491\r\n    c-2.013-1.19-3.487-3.09-5.188-4.791c-2.098-3.09-7.398-0.198-8.787-4.11c-1.389-4.107-1.899-8.589-1.587-13.011\r\n    c1.814-3.798,3.713-7.795,7.001-10.488c1.587-1.502,3.798-2.495,4.791-4.507c0.312-3.203-0.199-6.406,0.312-9.609\r\n    c1.814-4.592,5.301-8.306,9.298-11.197c3.401,1.587,7.512,4.195,10.8,0.992c-0.51-4.592-2.891-9.212-1.701-13.89\r\n    c2.211,0,4.309,0.397,6.208,1.389c0.793-3.997,2.608-7.71,3.6-11.708c-1.105-3.089-3.402-5.811-3.912-9.212\r\n    c-0.312-3.005-1.899-5.698-3.288-8.391c-0.51-1.899-0.198-3.997-0.312-6.009c1.814-0.595,3.6-1.19,5.499-1.701\r\n    c0.708-4.706,4.904-7.002,8.306-9.61c2.211-1.19,2.098-3.997,2.494-6.208c5.613-1.304,8.107-7.001,10.091-11.792\r\n    c-1.701-1.899-4.11-3.6-4.394-6.292c-0.708-3.289-1.814-6.492-2.098-9.893c1.389-1.502,2.892-2.892,4.195-4.394\r\n    c1.502-1.899,1.389-5.103,4.11-5.896c4.195-2.693,9.694,2.296,13.408-1.587c2.806-2.693,6.803-4.195,8.107-7.994\r\n    c1.899-3.004,1.899-6.604,3.09-9.808c1.304-2.098,3.402-3.401,5.414-4.791c2.693-0.313,5.5,0.708,8.192,0.312\r\n    c4.11-2.012,7.313-5.499,9.609-9.297c1.899-3.402,5.188-5.613,7.795-8.391c2.693-3.288,7.086-4.394,10.8-6.406\r\n    c-0.198-2.693-1.701-5.896,0.51-8.192c1.814-2.296,2.807-5.102,4.592-7.398c4.309-3.713,10.488-4.11,15.789-2.693\r\n    c3.713,0.397,4.394,4.904,5.499,7.795c-0.312,5.104,5.414,7.909,5.301,12.897c-0.113,2.296,1.502,4.11,2.211,6.095\r\n    c0,2.098-0.992,3.912-1.389,5.896c2.409,4.309,8.192,7.398,12.614,4.11c1.389,0.708,2.807,1.389,4.11,2.013\r\n    c0.794-3.09,3.713-4.394,6.293-5.698c0.198-2.806,0.992-5.499,1.105-8.192c-0.992-1.899-2.296-3.6-3.401-5.301\r\n    c1.502-4.705,7.086-3.6,10.913-3.089c2.495-2.693,5.415-5.103,8.504-7.2c-0.113-4.989,2.41-9.609,3.005-14.513\r\n    c-1.105-4.11-1.701-8.589,0.113-12.501c0-2.495-1.304-6.095,1.899-7.2c4.904-1.19,8.391,3.487,11.395,6.69\r\n    c2.013,0.708,4.11,0.992,6.208,1.587c0.312-3.09,0.708-6.604,3.713-8.306c1.701,0.595,3.402,1.304,5.103,2.013L-4969.121,549.386z\"></path>\r\n        </g>\r\n\r\n        <g id=\"pradesh-1\" (click)=\"showProvincedata(this.$event,1)\" >\r\n                  <g class=\"district\" >\r\n                <path id=\"sunsari\"\r\n                    class=\"mkhover prov1\" d=\"M1038.273,659.396c5.103,2.013,10.4-0.313,15.591,0.312c3.484,0.992,6.688,2.494,10.092,3.713\r\n        c-0.397,4.791-4.396,7.994-6.406,12.189c-0.396,3.288,0.313,6.604,0.198,10.006c0.113,3.289-3.401,5.698-2.494,9.1\r\n        c0.708,3.997-0.199,7.994-0.709,11.905c-1.502,3.005-4.904,4.989-5.301,8.504c-0.396,5.5-0.396,10.914-0.907,16.3\r\n        c-1.502,1.392-3.6,0.793-5.414,0.992c-2.807-0.113-6.01,0.992-8.306-1.104c-2.693-2.212-6.604-3.717-7.6-7.398\r\n        c-1.304-4.791-1.699-9.894-1.699-14.91c0.111-1.813-0.906-3.289-1.586-4.903c-1.105,0.112-2.213,0.197-3.289,0.197\r\n        c-0.991,2.693-1.898,5.414-3.486,7.71c-3.486,2.101-7.599,2.495-11.396,3.091c-0.313-3.005-1.39-6.01-0.511-8.983\r\n        c0.709-3.288,2.211-6.406,3.604-9.411c3.286-7.313,10.091-11.905,15.307-17.688c5.103-6.294,10.913-12.188,14.287-19.588\r\n        L1038.273,659.396z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 1016.1074 696.002)\" > Sunsari</text>\r\n            </g>\r\n               <g class=\"district\" >\r\n                <path id=\"udayapur\"\r\n                    class=\"mkhover prov1\" d=\"M927.979,612.198c1.392,1.104,2.894,2.409,3.401,4.192c1.105,3.203,3.713,5.612,6.604,7.2\r\n        c2.406-0.198,4.9-0.709,7.197-1.588c2.894-1.813,5.188-4.988,8.787-5.301c3.486,0.794,6.806,2.297,10.204,3.203\r\n        c2.495,0.596,3.714,3.005,5.104,4.901c2.098,3.401,4.107,7.002,6.688,10.205c1.105,1.392,2.607,3.006,2.409,4.988\r\n        c-0.113,5.301,0.992,10.488,2.098,15.591c0.598,3.799,5.304,3.912,8.309,4.706c2.891-1.104,5.188-3.601,8.306-3.912\r\n        c3.713-0.511,7.199-1.502,10.913-2.098c1.304,1.188,2.692,2.409,3.997,3.6c7.2-1.389,14.003-4.309,21.005-6.404\r\n        c2.607-0.396,3.486,2.808,4.705,4.395c-4.592,11.793-14.003,20.693-22.791,29.396c-2.607-1.813-4.705-4.395-7.71-5.61\r\n        c-1.899-0.907-3.601-2.296-5.301-3.486c-1.814,4.195-4.705,7.908-8.702,10.204c-1.105-1.105-2.211-2.211-3.288-3.203\r\n        c-3.714,0.709-7.398,1.814-10.913,3.288c-1.105-1.19-2.212-2.494-3.289-3.713c-2.892,1.104-5.414,2.806-7.908,4.507\r\n        c0.113-2.409,0.907-4.791,0.313-7.087c-2.016-3.005-5.499-4.309-8.702-5.697c0.312-7.2-4.989-12.611-7.313-18.991\r\n        c-3.997,0.197-8.104-0.313-12.104-0.196c-5.613,0.595-10.403-3.486-15.987-3.092c-5.698,0.396-11.311,0.796-16.896,1.7\r\n        c2.297-2.297,3.994-5.188,6.604-7.087c3.486-0.906,8.192-0.197,10.204-3.799c0.992-3.005,1.39-6.208,2.495-9.099\r\n        c-1.503-2.016-3.486-3.604-4.312-6.012c0.795-2.893,2.895-5.302,3.603-8.19c0.596-2.494,1.188-5.104,2.296-7.512L927.979,612.198\r\n        L927.979,612.198z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 963.6641 669.001)\" >Udayapur</text>\r\n            </g>\r\n               <g class=\"district\" >\r\n                <path id=\"morang\"  class=\"mkhover prov1\"\r\n                    d=\"M1066.479,664.412c2.895-1.898,5.697-4.109,8.394-6.293c1.813,1.104,3.6,2.605,5.896,2.495\r\n        c3.715-0.198,7.398,1.104,11.196,0.794c3.401,0.11,7.313-0.907,10.29,1.389c3.912,2.211,5.414,6.689,7.994,10.091\r\n        c-2.495,5.613-3.203,11.708-4.791,17.49c-0.794,3.005,0.794,5.812,1.389,8.589c-0.396,2.608-1.896,4.989-1.389,7.597\r\n        c0.907,4.791,0.51,9.812,1.813,14.517c-0.197,2.211-1.104,4.394-0.99,6.688c0.195,1.899,1.104,3.714,1.697,5.499\r\n        c-2.406,0.794-4.787,1.503-7.086,2.297c-3.996-2.69-8.104-5.103-12.188-7.598c-6.604-2.409-12.699,1.588-19.105,2.807\r\n        c-4.703,0.796-4.394,6.604-5.499,10.205c-3.286-1.503-6.803-2.493-10.092-3.911c-4.507-5.695-3.288-13.406-3.288-20.099\r\n        c0-3.997,3.912-6.293,5.499-9.496c0.513-2.689,0.709-5.414,1.308-7.993c0.903-2.807-1.308-5.896,0.51-8.504\r\n        c3.09-4.395,0.992-9.809,1.304-14.712c1.392-3.09,4.11-5.414,5.415-8.589c0.595-1.104,0.708-2.605,1.813-3.289L1066.479,664.412z\">\r\n                </path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 1064.0898 705.1055)\" >Morang</text>\r\n            </g>\r\n               <g class=\"district\" >\r\n                <path id=\"jhapa\"  class=\"mkhover prov1\"\r\n                    d=\"M1174.677,679.408c3.005-3.09,3.997-7.2,4.904-11.313c1.304,0.907,2.607,1.814,3.912,2.607\r\n        c0.198,3.997,0.113,7.909-1.19,11.707c-1.188,3.399-1.188,7.087-2.297,10.487c-2.211,5.5-4.9,10.688-7.086,16.103\r\n        c-1.305,3.004-0.709,6.094,0.313,9.099c-0.396,2.693-0.992,5.499-2.016,8.192c-1.304,3.005-5.103,3.401-7.198,5.697\r\n        c-1.189,1.7-1.391,3.714-1.813,5.61c-0.907,0.113-1.899,0.198-2.807,0.313c-0.709-1.389-1.306-2.808-2.298-3.997\r\n        c-2.407-1.304-5.104-1.899-7.313-3.6c-2.296-3.007-3.799-6.605-5.697-9.812c-1.305,0.199-2.495,0.511-3.714,0.907\r\n        c-3.005,0.313-2.807,4.109-3.997,6.208c-3.483-1.389-5.188-6.01-9.606-5.188c-0.598,2.495-0.992,5.188-2.101,7.6\r\n        c-3.997,1.39-7.313-1.307-10.687-2.809c-1.391,1.307-2.809,2.692-4.11,4.11c-0.794-1.39-1.587-2.807-2.296-4.195\r\n        c0.595-1.7,1.389-3.288,1.899-5.103c0.196-2.409-2.101-4.507-1.504-7.002c0.512-2.809,0-5.612-0.707-8.394\r\n        c-0.796-2.689,1.188-5.102,2.296-7.396c-0.907-1.813-2.016-3.486-2.409-5.499c-0.397-2.494,0.595-4.903,1.304-7.2\r\n        c0.794-2.692,1.104-5.612,1.813-8.305c4.107,0.903,7.513,3.288,10.998,5.499c2.014,1.304,3.399,3.798,6.096,3.997\r\n        c3.09,0.51,5.102,4.191,8.504,3.798c1.813-0.598,3.288-1.502,5.103-2.101c2.212,0.397,4.194,1.307,6.293,2.101\r\n        c0.991-3.09,0.709-6.689,2.809-9.411c1.502,0.198,3.09,0.396,4.592,0.709c2.098-4.195,6.804-5.414,10.604-7.398\r\n        c1.698-1.503,2.493-3.799,3.909-5.609c0.796,3.713,2.101,7.512,5.5,9.606v-0.023L1174.677,679.408L1174.677,679.408z\">\r\n                </path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 1127.8262 707.9814)\" >Jhapa</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"okhaldhunga\"\r\n                    class=\"mkhover prov1\" d=\"M914.088,565.002c2.807-3.005,5.104-6.604,8.787-8.703c4.11,0.992,8.107,2.693,10.488,6.293\r\n        c1.503,3.203,2.807,6.605,4.192,9.896c2.016,0.51,4.396,0.51,6.098,1.896c3.997,3.289,7.197,7.516,10.913,11.112\r\n        c4.593,0.907,9.213-0.313,13.805-1.105c0.114,3.997-0.51,7.993-2.296,11.597c-3.288,1.587-6.406,3.483-9.297,5.811\r\n        c-2.495,2.297-6.492,0.794-8.788,3.288c-4.11,4.195-9.896,6.095-14.995,8.703c-3.09-2.608-6.293-5.104-9.811-7.002\r\n        c-1.896-0.709-2.098-2.895-2.807-4.396c-3.997-0.709-7.597-2.69-11.396-3.995c-2.015,0.396-3.8,1.589-5.611,2.407\r\n        c-0.51-0.991-0.794-2.012-1.105-2.891c0.907-2.013,2.693-3.288,3.912-5.104c0.113-2.606-1.701-4.594-2.41-6.89\r\n        c0.514-7.993,3.997-15.789,10.29-20.891L914.088,565.002z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 906.1445 595.0039)\" >Okhaldunga</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"illam\"  class=\"mkhover prov1\"\r\n                    d=\"M1146.189,622.092c4.106-0.511,8.588-1.896,12.5,0.198c0.511,3.486,1.188,7.001,2.69,10.204\r\n        c2.101,0.113,4.195,0.313,6.293,0.511c1.19,3.401,3.603,6.009,6.803,7.795c-0.51,1.899-1.304,3.912-0.794,6.01\r\n        c1.105,0.992,2.495,1.814,3.801,2.692c0.111,1.814,0,3.601,0.313,5.414c1.105,2.495,4.11,4.195,3.997,7.2\r\n        c0.113,1.39,0.113,2.807,0.113,4.192c-1.814,0.198-4.79,0.198-4.79,2.81c-0.199,3.005-0.992,5.811-3.006,7.993\r\n        c-2.809-3.092-1.7-7.199-1.59-10.913c-3.398,1.503-6.604,3.714-7.709,7.396c-1.188-0.111-2.297-0.312-3.484-0.396\r\n        c-2.41,4.192-7.087,6.403-11.594,7.396c-3.008,1.587-3.288,5.188-3.203,8.192c-1.814-0.597-3.486-1.392-5.414-1.392\r\n        c-2.1,0.513-3.997,1.813-6.096,2.692c-2.692-1.813-5.104-4.109-8.393-4.903c-4.507-3.203-9.213-6.209-14.088-8.787\r\n        c0.198-6.688-5.188-11.51-9.298-16.102c3.005-1.104,6.293-1.305,9.1-3.005c4.109-4.791-1.7-11.792,2.607-16.413\r\n        c1.389-1.898,2.892-3.713,4.791-5.104c2.604-0.709,5.414-0.313,7.795-1.306c2.211-0.709,3.486-2.494,5.104-3.912\r\n        c3.799-3.713,8.104-7.597,13.604-8.504L1146.189,622.092z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 1134.5742 659.3955)\" >Illam</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"dhankuta\"\r\n                    class=\"mkhover prov1\" d=\"M1053.779,609.307c3.714,0.599,7.396,0.514,10.998,0.313c2.212,0.793,3.997,2.409,6.01,3.6\r\n        c-1.7,5.104-2.692,11.313,1.189,15.704c4.193,4.396,3.8,10.8,4.509,16.412c3.398-0.595,7.71-3.996,10.289-0.198\r\n        c1.503,3.487,1.813,7.398,2.807,11.112c2.409,0.595,4.904,1.389,6.888,3.203c-4.988,0.595-9.893-0.397-14.91-0.794\r\n        c-2.494,0.312-4.394-1.588-6.604-2.409c-3.09,1.304-5.414,3.911-8.106,6.009c-3.484-0.992-7.087-2.211-10.485-3.6\r\n        c-5.5-2.101-11.313,1.188-16.813-0.992c-0.794-3.288-2.892-6.491-2.098-10.091c1.304-3.487,3.911-6.407,6.009-9.411\r\n        c-0.793-3.005-1.7-6.01-2.806-9.015c3.005-4.51,7.512-7.398,11.31-11.111c2.41-2.296,1.503-5.813,1.814-8.703L1053.779,609.307\r\n        L1053.779,609.307z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 1039.4102 653.001)\" >Dhankuta</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"khotang\"\r\n                    class=\"mkhover prov1\" d=\"M989.291,571.295c3.601-0.114,7.087,0.113,10.688-0.199c0.513,3.487,1.392,6.892,2.607,10.29\r\n        c2.607,3.005,5.188,6.208,7.2,9.609c-1.39,4.706-6.889,5.188-10.688,6.889c0.396,2.607,1.7,4.988,2.692,7.398\r\n        c1.304,4.985-0.794,10.006-2.211,14.797c-0.992,3.713,3.997,3.911,6.293,5.301c1.104,5.104,0.313,10.289,0.709,15.395\r\n        c0.906,2.807,2.211,5.411,3.089,8.189c-2.806,4.79-8.702,5.188-13.604,5.896c-3.006,0.396-5.304,2.605-8.107,3.289\r\n        c-1.898-0.313-3.713-0.992-5.499-1.591c-0.907-4.791-2.296-9.691-2.409-14.599c-0.199-2.494-0.111-5.188-2.013-7.086\r\n        c-3.288-4.195-5.813-8.901-8.703-13.295c-1.389-2.607-4.507-3.203-7.086-4.11c-3.005-0.904-5.896-2.689-9.213-2.296\r\n        c-3.09,0.198-5.188,2.607-7.512,4.396c-2.101,1.588-4.904,1.588-7.398,2.211c-1.701-1.587-3.401-3.203-5.103-4.79\r\n        c3.2-4.195,9.015-4.904,13.295-7.711c1.502-1.105,2.806-2.494,4.309-3.603c2.891-0.989,6.293-1.104,8.702-3.288\r\n        c2.013-1.813,4.309-3.202,6.803-4.309c2.297-0.907,2.211-3.912,3.005-5.813c1.588-4.9-0.396-9.808,0.198-14.712\r\n        c2.495-0.195,5.103-0.195,7.598-0.396c4.595-0.907,8.106-4.195,12.305-5.896L989.291,571.295z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 955.7363 613.7861)\" >Khotang</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"bhojpur\"\r\n                    class=\"mkhover prov1\" d=\"M1013.074,570.699c6.293-0.198,12.188-3.997,18.51-3.09c-0.113,3.2-0.595,6.403,0.113,9.606\r\n        c2.892,2.013,6.095,3.401,8.589,5.896c0.313,2.013-0.906,3.995-1.304,5.896c1.104,1.393,2.211,2.809,3.09,4.312\r\n        c0.113,2.013-0.596,4.107-0.198,6.095c1.104,2.605,3.912,3.912,5.499,6.208c1.701,2.807,3.714,5.414,5.188,8.306\r\n        c-3.6,5.612-10.202,8.504-13.405,14.516c-0.513,3.005,1.588,5.812,2.41,8.7c-2.608,3.8-5.414,7.71-6.406,12.305\r\n        c-7.313,1.188-14.004,4.593-21.09,6.208c-2.211,0.511-3.289-1.899-4.791-3.006c3.09-3.715,0.511-8.105-0.709-11.904\r\n        c-0.598-5.499,0.396-10.998-1.105-16.3c-2.098-0.991-4.309-2.1-6.491-3.007c2.608-7.087,4.706-15.899-0.195-22.394\r\n        c4.107-1.19,8.787-2.807,10.687-7.087c-1.188-4.592-4.394-8.589-7.512-12.104c-0.907-2.495-1.899-4.988-1.899-7.6\r\n        c0.794-1.813,2.41-3.004,3.799-4.507c2.299,1.104,4.595,2.495,7.2,3.005L1013.074,570.699z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 1006.6504 614.6221)\" >Bhojpur</text>\r\n            </g>\r\n\r\n                  <g class=\"district\" >\r\n                <path id=\"taplejung\"\r\n                    class=\"mkhover prov1\"\r\n                    d=\"M1130.995,487.304c1.188,2.101,2.409,4.312,3.912,6.293c3.005-0.51,6.009-1.304,9.014-0.989\r\n        c2.211,0.904,3.288,3.2,5.414,4.107c2.892,0.511,5.188-1.587,7.796-2.409c2.494,0.598,4.903,1.7,7.598,2.101\r\n        c0.793,1.304,1.589,2.689,2.493,3.997c1.899-0.794,3.604-2.016,5.698-2.3c3.09,0.992,5.896,2.608,9.014,3.802\r\n        c-0.989,1.698-2.013,3.288-3.005,4.986c2.81,2.809,0.907,6.604,0.198,9.896c-0.991,1.701-2.806,2.807-3.6,4.592\r\n        c-0.396,2.495-0.113,4.989-0.313,7.513c-0.794,2.1-2.807,3.486-3.714,5.499c-0.51,1.587-0.708,3.288-1.188,4.903\r\n        c-1.307,2.608-4.11,4.11-4.989,6.889c-1.39,4.705-2.607,9.411-4.79,13.808c1.502,2.098,3.005,4.309,4.507,6.403\r\n        c-2.806,2.81-5.612,5.896-6.491,9.896c-1.304,5.301-3.483,10.8-8.189,14.003c-2.297,2.607-5.813,0.313-8.702,1.39\r\n        c-3.798,1.307-7.908-0.195-11.792,0.992c-5.303,1.7-10.801-0.113-16.214-0.396c-2.895-0.708-4.312,3.799-7.313,2.494\r\n        c-2.892-1.59-6.01-2.809-9.298-2.299c-5.697,0.796-11.509-2.492-13.805-7.71c-1.899-4.107-5.896-7.991-4.396-12.813\r\n        c1.701-7.513,2.494-15.193,4.507-22.592c0.599-3.203,3.912-4.312,5.813-6.406c1.104-4.593,2.211-9.102,3.713-13.606\r\n        c2.409,1.105,5.188,2.81,7.71,1.392c0.511-1.307,0.907-2.692,1.305-3.997c0.991-0.396,2.101-0.793,3.203-1.105\r\n        c0.313-4.986,3.089-9.411,3.288-14.396c1.39-3.912,6.293,1.813,8.306-1.701c2.494-3.203,3.996-7.313,7.908-9.213\r\n        c0-1.587-0.511-3.288,0.113-4.79c1.701-1.305,3.714-2.296,5.698-3.288c0.196-1.701,0.396-3.401,0.708-4.989L1130.995,487.304z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 1100.6211 556.2988)\" >Taplejung</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"sankhuwasabha\"\r\n                    class=\"mkhover prov1\" d=\"M1010.381,489.288c2.013,0,4.11-0.113,6.208,0.113c5.697,3.997,10.913,9.606,12.303,16.608\r\n        c3.997,1.392,7.71,4.195,12.104,3.486c3.601,0.709,5.499-2.806,8.391-4.195c4.396-0.907,7.994,2.895,12.391,3.005\r\n        c3.6-1.896,7.313-3.483,10.91-5.414c-0.511,1.19-0.989,2.409-1.502,3.486c2.494,0.511,5.188,1.899,7.6,0.511\r\n        c3.713-2.098,8.306-0.904,11.594-3.484c1.304-0.708,2.692-2.211,4.195-1.105c0.904,2.297,0.51,5.301,2.604,6.889\r\n        c3.486,1.307,5.697-2.296,8.309-3.994c0.195,3.799,1.587,7.71,0.195,11.311c-0.904,2.296-1.587,4.507-2.604,6.689\r\n        c-1.701,2.211-3.487,4.394-4.989,6.804c-1.897-0.992-3.485-3.005-5.812-2.894c-3.288,4.109-2.809,9.81-4.791,14.515\r\n        c-1.898,2.297-4.988,3.799-5.696,7.002c-2.41,8.589-3.604,17.604-4.989,26.391c0.907,6.293,5.813,11.111,8.393,16.813\r\n        c-3.996,4.309-5.813,9.893-6.806,15.591c-2.604,1.104-5.102,2.409-7.512,3.911c-2.211-1.19-4.11-3.798-6.888-3.486\r\n        c-4.312,0.794-8.702-1.104-12.813,0.907c-1.503-3.005-3.399-5.813-6.095-7.909c-1.899-1.189-1.503-3.486-1.104-5.414\r\n        c0.709-2.606-1.7-4.394-2.606-6.604c0-1.897,0.596-3.91,0.992-5.812c-2.692-2.892-6.012-5.103-9.3-7.313\r\n        c0-2.895,0.198-5.698,0.598-8.506c-2.016-0.794-3.997-2.691-6.293-1.699c-4.11,1.389-8.309,2.407-12.614,3.288\r\n        c-3.09,0.511-5.697-1.587-8.191-2.81c1.813-4.193-0.313-8.701,1.392-12.813c1.502-3.486-1.306-7.199,0.595-10.488\r\n        c1.39-3.203,2.807-6.406,3.288-9.893c0.313-3.288,2.807-5.697,4.396-8.394c-2.691-2.409-5.188-5.414-4.594-9.213\r\n        c1.105-2.296,2.495-4.394,3.801-6.604c-2.409-2.212-3.4-5.413-4.793-8.19c-0.904-3.602-0.396-7.397-0.312-11.112L1010.381,489.288\r\n        z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 1018.2188 524.2002)\" >Sankhuwasabha</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"panchthar\"\r\n                    class=\"mkhover prov1\" d=\"M1157.499,584.504c1.899-3.486,2.409-7.396,3.912-11.111c0.113,2.015-0.198,4.109,0.198,6.097\r\n        c0.794,1.39,2.098,2.605,3.203,3.912c-2.101,4.592-4.705,9.014-5.188,14.088c-1.899,5.414-0.794,11.509-3.401,16.693\r\n        c-0.709,1.701-1.304,3.401-1.701,5.104c-3.09,0.312-6.207,0.709-9.298,1.104c-5.102,0.992-9.212,4.51-12.896,7.908\r\n        c-2.1,1.899-3.996,4.312-6.888,5.104c-2.016,0.312-4.11,0.195-6.098,0.511c-2.689,2.098-5.103,4.592-7.001,7.313\r\n        c-2.807,4.705,1.392,10.204-1.104,14.995c-4.312,0.793-8.504,3.401-13.012,1.898c-2.298-1.304-4.396-2.893-6.89-3.798\r\n        c-0.99-4.396-1.896-9.018-4.593-12.699c1.306-1.304,2.693-2.608,3.912-3.997c1.898-2.296,0.51-6.208,3.288-7.795\r\n        c3.288-2.41,4.987-6.491,8.786-8.192c4.108-2.807,8.505-5.188,13.211-7.002c0.312-1.698,0.51-3.398,0.709-5.102\r\n        c1.698-1.19,3.398-2.41,4.985-3.604c0.199-6.403-7.795-7.086-10.006-12.302c7.2,0.992,14.601,2.211,21.799,0.198\r\n        c5.104,0.198,10.093-0.709,15.108-0.198c3.713-2.211,7.397-4.989,9.015-9.1L1157.499,584.504z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 1100.1777 631.667)\"\r\n>Panchthar</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"terhathum\"\r\n                    class=\"mkhover prov1\" d=\"M1087.087,592.299c3.401,1.503,7.199,2.101,10.998,1.899c2.608-0.198,4.904,1.304,7.398,2.013\r\n        c5.609,1.105,11.109,3.997,14.712,8.504c-1.701,1.19-3.486,2.409-5.414,3.603c-0.113,1.698-0.313,3.399-0.397,5.103\r\n        c-5.413,2.013-10.288,4.904-14.995,8.107c-2.406,2.211-4.394,4.79-7,6.888c-2.606,1.701-1.813,5.301-3.006,7.909\r\n        c-2.892,3.288-7.002,4.986-10.999,6.688c-0.396-3.6-1.104-7.086-1.896-10.602c-1.307-3.203-4.396-5.499-4.989-9.014\r\n        c-0.992-3.401,0.113-7.088,1.392-10.29c1.389-2.607,4.592-2.81,6.688-4.51c1.191-1.813,1.305-3.994,1.899-6.01\r\n        C1082.381,598.677,1084.563,595.389,1087.087,592.299z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 1082.5977 611.3193)\" >Terathum</text>\r\n            </g>\r\n                   <g class=\"district\">\r\n                <path id=\"solukhumbu\"\r\n                    class=\"mkhover prov1\" d=\"M953.574,464.201c0.906,0,1.813,0,2.807-0.113c0.113,1.701,0.313,3.402,0.397,4.989\r\n        c1.587,0.312,3.288,0.992,4.985,0.709c2.693-0.709,4.396-3.09,6.208-5.104c2.693,0.198,5.612-0.11,8.192,1.105\r\n        c1.896,2.691,1.188,6.095,0.907,9.099c2.689,1.393,5.188,3.487,8.391,3.714c2.409,0.396,4.79-0.11,7.313-0.11\r\n        c2.807,1.587,5.812,3.203,8.505,5.301c2.012,2.409,4.394,4.592,7.396,5.896c-1.305,7.004,0.793,14.092,3.911,20.41\r\n        c-0.992,1.587-2.296,3.203-3.005,4.988c0.114,3.799,1.898,7.087,4.395,9.809c-4.508,4.195-3.601,10.604-6.489,15.593\r\n        c-1.587,2.69-1.392,5.896-0.991,8.898c0.708,3.288-2.495,6.208-1.307,9.411c1.104,3.203-0.313,6.604-2.099,9.212\r\n        c-4.309,2.101-9.297,1.503-13.89,1.393c-4.11,1.587-7.71,4.309-11.792,5.896c-2.693,0.709-5.612,0.199-8.308,0.596\r\n        c-1.588,1.814-1.503,4.51-2.807,6.604c-3.09,1.503-6.689,2.098-10.205,1.701c-4.195-3.487-7.396-8.192-11.792-11.597\r\n        c-1.588-1.104-3.714-1.104-5.499-1.503c-1.305-3.483-2.605-6.888-3.912-10.289c-3.005-3.09-7.087-4.901-11.195-6.095\r\n        c1.589-3.005,3.201-6.208,6.489-7.512c5.188-2.409,4.904-9.016,7.601-13.295c2.098-2.014,4.192-3.911,6.604-5.499\r\n        c2.296-0.597,4.592-0.794,6.889-1.19c2.809-6.208,1.189-12.896-0.111-19.188c0.396-4.706,1.896-9.298,0.906-14.003\r\n        c-2.015-4.596-7.711-8.192-6.405-13.894c0.992-2.806,2.098-5.896,4.592-7.908c2.606-1.813,2.606-5.188,3.289-7.991\r\n        L953.574,464.201z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 938.0264 548.001)\" >Solukhumbu</text>\r\n            </g>\r\n        </g>\r\n\r\n        <g id=\"pradesh-2\" (click)=\"showProvincedata(this.$event,2)\" >\r\n                   <g class=\"district\"  >\r\n                <path id=\"parsa\"   class=\"mkhover prov2\"\r\n                    d=\"M669.09,563.104c2.409,0.112,4.904-0.111,7.313,0.396c2.689,0.992,4.394,4.309,7.512,3.912\r\n        c6.095,0,12.614-2.409,18.396,0.198c6.296,4.309,13.808,6.604,19.814,11.311c1.701,3.401,1.304,7.597,2.893,11.111\r\n        c2.1,4.791,0,9.894-1.306,14.599c-1.188,3.799-1.188,7.909-1.7,11.905c-1.39,3.714-4.593,6.406-6.488,9.809\r\n        c-0.313,2.101,0.396,4.195-0.199,6.207c-0.991,1.308-2.101,2.41-3.288,3.487c-1.502-2.098-3.203-4.11-5.104-5.896\r\n        c-2.297,1.307-4.705,3.008-7.513,2.016c-7.199-0.313-14.201-3.005-20.098-7.002c1.588-2.296,4.192-4.109,4.706-6.891\r\n        c0.904-4.394,1.104-8.898,1.896-13.295c0.396-2.689,1.19-5.811-0.313-8.391c-2.494-4.79-4.79-9.609-6.491-14.598\r\n        c-6.888-2.81-14.797-2.101-21.203-6.013c2.296-1.104,4.791-1.503,7.313-1.701c1.189-3.713,2.212-7.512,3.911-11.108\r\n        L669.09,563.104z\"></path>\r\n                <text class=\"maptext\"   transform=\"matrix(1 0 0 1 693.457 595.0039)\">Parsa</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"bara\"  class=\"mkhover prov2\"\r\n                    d=\"M724.479,579.005c5.414,0.313,10.803,0.907,16.217,0.198c2.098,4.507,5.188,8.391,7.598,12.699\r\n        c1.389,2.406,4.11,3.483,6.406,4.705c-1.393,3.909-3.203,8.104-1.503,12.188c2.211,5.499,3.912,11.707,2.211,17.489\r\n        c-0.708,1.813-0.511,3.799-0.793,5.698c-0.599,2.013-1.899,3.798-2.693,5.811c-2.098,5.5,2.013,11.509-0.907,16.896\r\n        c-3.997-0.198-8.189-0.513-11.707,1.698c-2.296,1.392-4.9,0.598-7.313,0.113c0.907-1.304,1.813-2.494,2.605-3.799\r\n        c-2.098-0.992-4.309-1.813-6.206-3.203c-1.59-2.211-0.197-5.612-2.1-7.71c-3.912-2.211-8.306-2.692-12.501-3.798\r\n        c1.389-2.212,3.005-4.313,4.706-6.208c-0.511-1.588-0.992-3.09-1.503-4.706c2.013-2.409,3.912-4.903,5.612-7.599\r\n        c2.605-3.601,1.104-8.307,2.297-12.304c1.188-5.811,4.592-12.104,1.813-17.886c-1.587-3.203-1.813-6.805-2.211-10.29h-0.026\r\n        L724.479,579.005L724.479,579.005z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 727.998 621.167)\"\r\n>Bara</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"saptari\"\r\n                    class=\"mkhover prov2\" d=\"M948.388,657.411c0.598-0.113,1.7-0.113,2.296-0.198c2.607,6.009,7.313,11.396,6.891,18.313\r\n        c2.605,1.304,5.414,2.406,7.711,4.309c2.296,2.211,0.51,5.612,0.51,8.391c3.486,1.701,6.293-1.304,9.1-3.09\r\n        c1.307,1.19,2.607,2.296,3.996,3.486c3.487-1.502,7.002-2.891,10.804-3.401c0.312,1.392,0.595,2.693,0.989,4.11\r\n        c4.903-1.701,9.212-5.188,11.707-9.808c2.296,1.389,5.304,1.813,7.199,3.908c1.105,1.191,2.41,2.41,3.604,3.604\r\n        c-5.304,5.896-9.411,13.096-10.01,21.09c-0.11,3.203,0.313,6.293,0.599,9.496c-5.104,2.409-7.994,7.993-13.808,9.212\r\n        c-3.005-0.396-5.499-2.891-8.589-2.409c-2.211,1.19-3.714,3.401-5.414,5.104c-2.297-1.19-4.593-2.409-6.889-3.486\r\n        c-2.807-1.19-6.01-1.701-8.107-3.912c-2.097-2.211-4.985-3.09-7.512-4.592c-2.012-1.701-3.004-4.396-5.414-5.5\r\n        c-2.211-1.105-4.592-1.7-6.888-2.607c1.188-2.892,4.193-5.609,3.398-9.015c-1.304-6.406-0.989-13.209,1.392-19.304\r\n        c1.39-3.093,0.992-6.604,1.39-10.007c0.51-4.509,0.708-9.102,0.992-13.69h0.056L948.388,657.411L948.388,657.411z\">\r\n                </path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 954.9033 707.9814)\"\r\n>Saptari</text>\r\n            </g>\r\n\r\n                  <g class=\"district\" >\r\n                <path id=\"siraha\"  class=\"mkhover prov2\" d=\"M892.998,650.693c2.892,1.389,5.188,3.713,7.796,5.609c1.389,1.307,3.288,0,4.988-0.312\r\n        c5.188-1.814,10.801-1.308,16.215-2.212c4.705-0.793,8.9,1.701,13.209,2.807c3.799,0.396,7.597-0.198,11.197,0.907\r\n        c0.708,7.396-0.992,14.712-1.814,21.997c-2.494,6.688-2.692,13.89-1.896,20.891c0.709,2.895-1.589,5.188-2.692,7.6\r\n        c-3.005-1.503-6.293-2.1-9.496-2.607c-5.698-3.203-11.509-8.391-18.511-6.689c-3.798,0.113-7.001,2.016-10.006,4.11\r\n        c-2.495-2.41-5.188-4.989-9.018-4.508c1.814-2.807,3.912-5.188,6.013-7.597c1.896-6.012-3.486-10.403-6.689-14.715\r\n        c0.708-3.713,1.898-7.313,2.607-11.108c-0.313-3.486-2.692-6.406-3.203-9.896c0.312-1.503,0.904-2.892,1.304-4.31L892.998,650.693\r\n        L892.998,650.693z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 908.2598 675.2979)\"\r\n>Siraha</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"dhanusa\"\r\n                    class=\"mkhover prov2\" d=\"M864.481,624.303c1.503,3.401,1.503,8.394,5.695,9.811c7.2,1.104,14.91,1.188,21.288,5.414\r\n        c5.414,3.398,11.111,6.488,15.987,10.602c-1.588,1.899-3.09,3.799-4.592,5.697c-3.487-2.409-6.293-6.491-10.914-6.406\r\n        c-0.992,2.296-2.409,4.706-1.7,7.313c0.793,2.808,2.296,5.413,3.005,8.19c-0.907,3.912-2.606,7.795-2.098,11.792\r\n        c1.7,4.396,7.71,7.398,6.403,12.813c-2.211,2.807-4.703,5.414-6.293,8.589c-5.301-2.894-10.4-6.406-16.3-8.309\r\n        c-2.409,1.505-4.901,2.81-7.512,3.802c-6.009,2.491-10.091,8.784-16.896,9.494c-0.195-0.99-0.312-2.014-0.51-3.006\r\n        c2.607-1.813,5.414-3.398,7.001-6.293c0.992-8.189-1.389-16.895,2.014-24.688c0.991-2.494,3.4-4.312,3.801-7.002\r\n        c-1.589-2.211-4.508-3.288-6.807-4.79c1.105-4.791,3.006-9.411,3.715-14.4c0.709-3.485,0.795-7.086,1.7-10.487\r\n        c0.991-0.99,2.1-1.896,3.203-2.807c-0.114-1.701-0.199-3.487-0.199-5.301v-0.029H864.481L864.481,624.303z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 853.3027 679.3232)\"\r\n>Dhanusha</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"sarlahi\"\r\n                    class=\"mkhover prov2\" d=\"M831.486,608.4c4.706-0.794,9.015,1.896,13.21,3.713c-3.799,3.288-3.203,8.504-4.904,12.813\r\n        c-0.709,2.608-3.09,4.312-4.507,6.604c-0.992,3.09-1.105,6.492-2.098,9.692c-0.907,3.203-3.401,5.697-4.11,8.9\r\n        c-0.709,4.309-3.486,7.71-5.414,11.594c-2.693-1.304-5.104-3.005-7.512-4.706c-2.101,1.308-4.312,2.41-6.69,2.81\r\n        c-5.499,3.005-10.204,7.512-16.101,9.691c-2.409,0.514-4.705-0.312-7.087-0.11c-3.801,1.39-7.086,3.911-10.604,5.896\r\n        c0.313-3.005,0.397-6.01,0.709-9.015c0.992-3.486,3.799-6.293,4.904-9.811c1.502-4.309,5.499-7.71,5.414-12.501\r\n        c0.196-3.398-0.709-6.604-0.907-9.893c0.992-4.195,4.309-7.2,6.889-10.403c2.409-3.09,5.188-5.896,7.515-9.1\r\n        c5.896,0.511,11.902,0.511,17.887,1.188c5.612,0.198,8.702-5.414,13.407-7.396V608.4L831.486,608.4z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 793.3301 643.0107)\"\r\n>Sarlahi</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"rauthat\"\r\n                    class=\"mkhover prov2\" d=\"M755.291,609.506c-1.7-4.109-0.992-8.703,1.588-12.188c1.587,0.11,3.288,0.11,4.988,0.312\r\n        c1.896,0.907,3.399,2.608,5.5,3.487c11.111,0.51,21.203,6.009,30.5,11.707c-0.313,1.304-0.313,2.689-1.305,3.713\r\n        c-3.602,4.109-7.397,8.104-10.487,12.614c-4.11,5.609,0.709,12.696-2.211,18.709c-2.692,4.986-5.188,10.202-8.106,15.105\r\n        c-2.211,3.602-1.503,8.107-1.701,12.104c-5.301-0.793-10.687-1.502-15.899-3.089c-2.494-0.514-3.203-3.288-3.997-5.415\r\n        c-1.7-3.401,1.104-6.891,0.511-10.402c-0.907-4.706-1.104-9.496-1.39-14.202c-0.313-4.195,3.09-7.313,4.192-11.111\r\n        c0.397-7.087,0.709-14.599-2.211-21.286L755.291,609.506z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 756.207 624.3027)\"\r\n>Rautahat</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"mahottari\"\r\n                    class=\"mkhover prov2\" d=\"M843.789,615.912c0.907-1.105,2.098-1.899,3.203-2.693c1.389,1.503,2.807,3.09,4.309,4.507\r\n        c1.814-0.51,3.486-1.304,5.414-1.389c2.211,0.907,4.989,1.701,6.095,3.997c0.113,2.893-0.396,5.697-0.11,8.589\r\n        c-1.105,0.794-2.296,1.701-3.288,2.494c0.312,9.411-3.799,18.198-4.791,27.411c2.211,1.104,4.309,2.211,6.491,3.486\r\n        c-1.899,3.399-4.396,6.688-4.903,10.688c-1.503,6.689,0,13.605-0.992,20.296c-2.41,3.09-5.896,6.095-10.007,6.208\r\n        c-3.288-1.39-6.293-3.601-9.496-5.301c-3.997-2.013-3.6-7.2-3.486-10.999c0.598-6.095,1.814-13.606-3.201-18.198\r\n        c-1.104-1.304-2.213-2.604-3.202-3.912c1.697-2.806,3.798-5.609,4.507-9.014c0.396-2.495,1.588-4.706,2.892-6.804\r\n        c1.899-3.203,2.296-6.891,3.005-10.402c0.198-3.401,3.401-5.188,4.705-8.104c1.701-3.486,1.814-7.313,2.895-10.913\r\n        L843.789,615.912z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 823.4258 655.6309)\"\r\n>Mahottari</text>\r\n            </g>\r\n\r\n\r\n        </g>\r\n\r\n        <g id=\"pradesh-3\" (click)=\"showProvincedata(this.$event,3)\">\r\n                  <g class=\"district\" >\r\n                <path id=\"nuwakot\"\r\n                    class=\"mkhover prov3\" d=\"M743.188,467.093\r\n        c3.008-1.188,6.098-1.813,9.216-2.211c-0.599,2.409-1.503,4.592-1.814,7.087c0.794,2.809,4.11,2.809,6.491,3.401\r\n        c0.113,2.409,0.198,4.705,0.312,7.087c4.195-0.113,8.394,0.312,12.614,0.198c6.491-0.198,10.8-6.604,17.292-6.491\r\n        c1.7-3.09,3.603-6.491,7.001-7.909c2.895,0.113,7.002,2.296,6.604,5.813c0.196,2.806-0.598,5.609-1.307,8.391\r\n        c-0.595,2.692,0.514,5.414,0.198,8.191c-0.708,3.2-3.288,5.5-4.394,8.59c-0.794,2.296-1.392,4.79-2.016,7.199\r\n        c-5.609,0.596-11.395,0.709-16.81-0.796c-2.494-0.904-4.11,1.898-5.499,3.401c-1.814,2.607-5.104,3.486-8.107,3.713\r\n        c-4.309,0.198-8.504,1.307-12.696,0.794c-5.104-2.296-9.811-5.499-14.799-8.104c-0.511-3.004-2.013-5.612-2.69-8.589\r\n        c0.709-5.304,1.587-10.604,2.494-15.902c0-1.813-0.708-3.486-1.105-5.188c-1.7-0.595-3.398-1.188-4.987-2.013\r\n        c2.808-0.595,6.011-0.396,8.392-2.296c1.896-1.304,3.601-3.09,5.613-4.394L743.188,467.093L743.188,467.093z\">\r\n                </path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 745.9023 493.7383)\"\r\n>Nuwakot</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"sindhupalchowk\"\r\n                    class=\"mkhover prov3\" d=\"M841.691,451.899\r\n        c1.587-0.907,2.807-2.409,4.107-3.717c1.813,1.591,3.997,2.693,5.697,4.312c2.098,3.09,2.892,6.804,5.301,9.606\r\n        c1.899,2.101,0.113,5.188,1.503,7.515c1.502,4.986,6.806,6.889,10.006,10.485c-1.104,3.203-2.406,6.406-2.807,9.812\r\n        c4.396,2.891,9.411,4.507,14.4,6.009c-1.307,3.09-3.802,5.613-5.499,8.504c-0.795,4.989,0.595,9.812,2.211,14.4\r\n        c-0.599,2.013-3.006,1.304-4.51,1.587c-3.601-0.198-7.002,1.701-9.298,4.31c-0.596,2.1-0.11,4.595-1.588,6.406\r\n        c-2.013,2.692-3.911,5.499-5.896,8.106c-3.604-2.607-6.293-7.515-11.313-7.001c-3.005-0.114-5.811-1.105-8.589-2.016\r\n        c-1.104,1.502-2.296,2.894-3.398,4.396c-2.213-3.799-2.81-9.213-7.313-11.197c-3.799-1.7-7.2-4.11-10.8-6.208\r\n        c-2.41-1.189-2.297-4.394-4.312-6.009c-2.892-0.198-5.695,0.794-8.504,1.188c-2.297-0.989-4.31-2.407-6.405-3.483\r\n        c0.795-2.608,1.391-5.304,2.099-7.994c0.907-3.713,4.11-6.406,4.791-10.091c0.198-3.005-0.992-6.098,0-9.018\r\n        c0.907-3.398,1.389-6.889,0.907-10.29c-1.814-2.604-4.594-3.996-7.002-5.811c1.896-2.211,4.593-3.288,7.396-4.11\r\n        c0.907-2.69,0.992-6.688,4.507-7.313c4.596-1.899,9.018,1.104,12.614,3.714c4.989-2.41,10.604-3.005,15.591-5.301\r\n        C837.609,452.183,839.707,452.381,841.691,451.899z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 795.3213 501.3438)\"\r\n>Sindhupalchowk</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"dhading\"\r\n                    class=\"mkhover prov3\" d=\"M741.6,425.509\r\n        c1.814-1.588,4.312-1.896,6.491-2.69c2.013,3.799,4.904,7.197,7.513,10.602c2.015,2.495,5.813,3.288,6.806,6.605\r\n        c-0.396,3.285-1.701,6.403-2.015,9.691c-2.099,1.392-4.902,2.494-5.412,5.301c-0.514,3.486-4.706,3.911-6.209,6.689\r\n        c-1.306,2.892-4.704,2.892-7.088,4.11c-2.605,1.587-4.395,4.309-7.313,5.609c-2.409,0.513-4.903,0.313-7.313,0.397\r\n        c0,0.793,0.112,2.296,0.197,3.004c1.899,1.104,3.997,1.813,5.813,3.203c1.39,2.69-0.598,5.301-0.708,8.104\r\n        c-0.313,4.904-2.101,10.007-0.199,14.797c0.596,1.899,0.907,3.912,1.104,5.896c6.209,2.494,11.597,6.688,17.805,8.985\r\n        c5.812-0.598,11.594-2.016,17.489-1.392c-2.298,3.091-6.097,4.593-8.393,7.71c-2.013,1.814-2.892,5.104-5.812,5.414\r\n        c-2.607,0.794-5.188-0.51-7.797-1.104c-2.893-0.313-3.714-3.997-6.688-4.11c-4.989-0.198-10.403-0.992-14.797,1.814\r\n        c-3.203,2.013-7.313-0.794-10.29,1.588c-2.099,1.502-4.507,0.111-6.803,0.111c-1.589,0.112-3.203,0.708-4.791,0.991\r\n        c-0.113-3.911-2.607-7.002-6.208-8.504c-2.692,0.113-5.304,0.906-7.993,0.991c-3.402-0.906-7.002-2.211-9.609-4.79\r\n        c1.19-1.189,2.409-2.296,3.603-3.486c-0.396-2.408-0.709-4.79-0.514-7.197c3.801,2.892,9.214,6.604,13.894,3.6\r\n        c2.098-1.19,6.094-1.7,5.188-4.989c-2.212-4.507-6.804-7.993-6.492-13.406c-0.396-2.297,1.393-3.8,3.093-4.902\r\n        c3.287-2.211,5.812-5.499,7.991-8.9c2.016-5.188,1.105-11.509,4.705-16.101c2.693,0.793,5.613,2.211,8.394,1.304\r\n        c2.41-1.304,4.903-2.607,7.512-3.486c0.313-4.593,1.503-9.1,2.296-13.688c0.907-4.791,6.492-5.414,9.298-8.703\r\n        c1.308-2.891,1.393-6.293,3.203-9.014L741.6,425.509z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 697.6025 493.7383)\"\r\n>Dhading</text>\r\n            </g>\r\n\r\n                  <g class=\"district\" >\r\n                <path id=\"rasuwa\"  class=\"mkhover prov3\"\r\n                    d=\"M826.583,429.704\r\n        c1.304-3.912,3.486-7.512,4.705-11.509c3.005,0.794,3.005,4.309,3.6,6.688c1.308,5.499,1.308,11.197,2.608,16.611\r\n        c1.813,2.69,3.997,4.904,5.697,7.597c-2.297,1.701-5.304,1.503-7.993,2.101c-4.904,1.698-9.896,3.09-14.91,4.309\r\n        c-3.005-1.389-6.01-3.288-9.298-3.912c-2.409,0.397-4.791,1.191-7.002,2.41c-1.305,1.896-1.899,4.11-2.809,6.208\r\n        c-2.892,1.188-6.208,2.211-7.991,4.903c-2.101,3.285-5.612,5.499-6.806,9.408c-6.208,0.198-10.29,5.896-16.413,6.604\r\n        c-3.713,0.199-7.396-0.396-11.108-0.396c-0.113-2.296-0.199-4.507-0.397-6.803c-1.813-0.313-3.6-0.709-5.414-1.104\r\n        c0.198-2.693,0.599-5.5,0.709-8.309c-1.304-0.794-2.605-1.503-3.912-2.296c1.701-1.104,3.486-2.013,5.104-3.289\r\n        c0.992-1.502,1.389-3.288,2.211-4.79c1.304-1.389,3.09-2.296,4.705-3.288c-0.113-4.706,3.487-9.298,0.992-13.805\r\n        c-1.813-1.813-4.312-2.892-6.009-4.904c-1.899-2.406-3.717-4.901-5.813-7.087c4.396,0.599,8.788,0.794,13.21,0.313\r\n        c2.099,3.798,5.414,6.688,9.694,7.512c2.409-0.313,4.592-1.389,6.803-2.211c1.899,1.7,4.195,3.005,6.69,3.486\r\n        c1.896-2.607,3.2-5.813,6.009-7.515c3.912-0.794,7.909-0.312,11.707,0.598c3.288,1.503,6.804,2.605,10.485,3.005\r\n        c0.514,2.69,1.105,5.414,1.814,8.104c4.309-0.904,7.597-4.592,9.1-8.589L826.583,429.704z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 772.6328 448.1855)\"\r\n>Rasuwa</text>\r\n            </g>\r\n\r\n            <g class=\"district\" >\r\n                <path id=\"chitwan\" fill=\"#546555\"  class=\"mkhover prov3\" d=\"M674.192,496.602\r\n        c3.911-0.904,7.001,1.814,9.014,4.791c-1.19,1.59-3.203,3.092-2.806,5.414c0.51,3.486-2.101,6.293-2.41,9.694\r\n        c2.69,1.587,5.499,3.203,8.589,3.997c3.288,0.793,6.688-0.313,10.007-0.199c1.587,0.709,2.893,1.899,4.309,2.895\r\n        c-0.11,1.503-0.11,3.005-0.11,4.507c-2.608,3.005-6.69,2.605-9.896,4.309c0.794,2.608,2.016,5.188,2.41,7.909\r\n        c-0.907,4.79-8.306,4.11-8.504,9.099c-0.313,2.693,0.708,5.188,1.587,7.601c1.304,3.004,0.198,6.293,0.113,9.411\r\n        c-4.592,0.312-7.086-4.509-11.594-4.706c-2.409-0.198-5.188-1.502-7.199,0.396c-1.701,3.289-2.495,7.002-3.714,10.488\r\n        c-3.401,0-6.293,1.588-8.589,3.997c-3.203-0.992-6.491-1.899-9.811-1.899c-5.698-0.11-10.999-1.896-16.413-3.398\r\n        c-0.907-2.494-1.188-5.304-2.604-7.6c-4.904-2.296-10.094-4.192-14.91-6.889c-1.105-1.7-1.191-3.911-2.608-5.414\r\n        c-1.896-0.51-3.911-0.312-5.811-0.396c-1.899,4.192-5.302,7.313-7.909,10.998c-1.104,1.503-3.005,1.896-4.79,1.503\r\n        c-3.09-0.709-6.293-0.794-9.608-0.599c0.512-2.806,0-6.095,2.1-8.306c1.104-1.389,2.098-2.692,3.089-3.996\r\n        c-2.891-0.396-5.811-0.596-8.589-0.992c1.503-1.188,3.288-2.211,5.415-1.896c8.104,0.396,16.412,0.396,24.207-2.101\r\n        c4.706-2.211,6.095-7.908,10.205-10.8c3.398-2.211,7.313-3.601,11.108-4.989c3.604-1.188,6.407-3.91,9.411-6.01\r\n        c3.005,0.709,5.896,2.211,9.018,1.899c3.6-1.105,3.995-5.104,5.414-7.993c1.588-1.503,3.6-2.41,5.411-3.487\r\n        c-2.013-1.896-4.394-3.398-6.803-4.901c0.992-1.189,1.392-3.287,3.401-3.401c4.592-0.708,9.411-1.304,13.604-3.713\r\n        c2.297-1.503,3.911-3.8,6.294-5.188L674.192,496.602z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 633.3984 545.001)\"\r\n>Chitwan</text>\r\n            </g>\r\n            <g class=\"district\" >\r\n                <path id=\"makwanpur\"  class=\"mkhover prov3\" d=\"M725.896,525.912\r\n        c3.993-1.899,8.504-2.693,12.896-2.013c1.587,0.989,2.891,2.604,4.592,3.6c3.799,1.19,7.795,2.098,11.792,1.899\r\n        c2.409-0.313,4.195,1.896,5.697,3.483c1.588,4.508,1.503,9.812,4.791,13.606c-1.304,3.912-3.005,8.189-1.587,12.303\r\n        c0.906,2.296,1.502,5.104,3.288,6.888c3.004,0.907,6.009,1.588,8.589,3.203c6.888,3.799,15.307,3.997,21.486,9.103\r\n        c-2.895,2.406-6.098,4.394-9.214,6.488c0.197,2.494-0.512,5.612,1.699,7.515c2.101,1.698,4.705,2.492,7.087,3.714\r\n        c0.708,2.806,1.587,5.499,2.607,8.188c-1.389,2.016-2.494,4.11-3.6,6.208c-8.192-6.604-18.514-9.496-28.604-11.396\r\n        c-3.09-1.7-6.208-3.09-9.694-3.486c-2.892-0.709-6.293-1.304-7.796-4.192c-2.689-4.595-5.499-9.102-8.306-13.606\r\n        c-7.512,0.396-15.59,1.104-22.396-2.607c-5.896-3.202-11.706-6.488-17.688-9.495c-4.195-1.104-8.505-0.905-12.813-0.597\r\n        c-0.396-3.203,0.513-6.604-0.904-9.606c-1.106-2.299-1.393-4.705-1.503-7.086c2.892-1.899,6.889-2.895,8.189-6.407\r\n        c1.307-3.004-0.596-6.009-1.503-8.787c4.706,0.396,8.107-3.005,12.189-4.507c3.288-1.899,7.087,1.502,10.29-0.709\r\n        c3.09-2.101,7.001,0.11,10.289-1.7L725.896,525.912L725.896,525.912z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 694.1191 561.458)\"\r\n>Makwanpur</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"sindhuli\"\r\n                    class=\"mkhover prov3\" d=\"M842.4,568.913\r\n        c4.309-0.396,7.795,2.296,11.508,3.997c4.395,1.813,8.59,4.109,12.699,6.406c3.09,1.588,1.813,5.812,4.395,7.795\r\n        c3.486,2.807,7.512,5.103,11.196,7.796c2.807,2.098,6.405,2.494,9.213,4.705c1.896,1.701,4.507,0.709,6.688,0.709\r\n        c2.298-0.511,4.11,1.188,5.896,2.211c1.587-0.794,3.288-1.701,4.988-2.494c2.892,1.587,6.095,2.494,9.015,4.11\r\n        c1.898,3.09,4.904,5.187,8.107,6.803c-1.105,3.713-1.105,7.71-3.203,10.913c-1.105,2.211-3.006,4.394-2.41,7.087\r\n        c0.907,2.013,2.495,3.6,3.912,5.301c-0.794,2.607-1.307,5.414-2.101,8.107c-2.098,2.891-6.01,1.813-9.015,2.806\r\n        c-1.7,0.992-3.004,2.41-4.395,3.714c-4.109-3.714-9.101-6.01-13.604-9.1c-5.104-2.607-10.205-6.01-16.215-6.01\r\n        c-3.602-0.598-7.993,0-10.604-3.092c-1.697-3.799-1.896-8.306-4.394-11.792c-1.701-2.013-4.11-3.399-6.604-4.31\r\n        c-2.099-0.313-4.193,0.794-6.209,1.305c-0.794-1.588-1.588-3.203-2.296-4.902c-5.61-0.795-10.4-4.109-15.984-4.789\r\n        c-6.491,0.708-9.812,9.606-17.011,7.99c-4.791-1.304-10.203,0.599-14.797-1.502c-1.588-2.807-0.313-5.812,0.396-8.589\r\n        c-0.907-3.09-2.015-6.293-3.203-9.298c-2.098-1.813-4.989-2.296-7.2-3.912c-1.104-1.587-0.992-3.6-1.188-5.301\r\n        c3.2-2.013,6.403-3.997,9.298-6.406c4.592,4.705,12.104,5.499,18.51,4.79c1.898-0.396,3.601,0.992,5.414,1.503\r\n        c2.211,0,4.395-0.511,6.604-0.794c0.513-3.005,0.396-6.01,0.906-8.897c2.212-2.81,6.095-1.701,9.213-1.899\r\n        c0.907-1.588,1.701-3.288,2.495-4.904L842.4,568.913z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 827.4648 599.5703)\"\r\n>Sindhuli</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"ramechhap\"\r\n                    class=\"mkhover prov3\" d=\"M932.995,523.701\r\n        c-0.992-5.301-1.814-12.813,3.997-15.704c2.892,0.907,5.414,2.892,7.2,5.301c2.098-0.596,4.192-1.104,6.293-1.503\r\n        c0.708,4.508,1.304,9.1-0.199,13.606c-2.211,0.511-4.507,0.794-6.689,1.39c-2.604,1.813-5.301,3.798-7.396,6.292\r\n        c-1.899,3.601-2.692,7.711-4.904,11.112c-2.097,1.701-4.79,2.494-6.292,4.79c-1.813,2.495-2.807,5.695-5.415,7.598\r\n        c-3.203,2.494-5.499,5.811-8.589,8.391c-2.494,2.015-3.6,5.104-5.301,7.71c-2.296,3.401-2.692,7.6-3.486,11.597\r\n        c-0.709,2.806,1.39,5.188,2.494,7.71c-1.897,2.013-3.6,4.192-5.102,6.491c-2.101,0-4.195,0.313-6.208,0.195\r\n        c-1.814-0.793-3.203-2.211-4.904-3.004c-5.697-1.701-10.29-5.698-15.108-9.1c-2.892-1.588-2.296-5.414-4.394-7.71\r\n        c-6.889-4.791-14.996-7.398-22.311-11.594c-0.112-3.604-2.213-7.398-0.197-10.688c1.701-3.005,0.992-7.002,3.912-9.298\r\n        c1.896-2.1,4.107-5.697,7.512-4.592c3.09,0.903,6.01,2.604,9.213,3.483c2.494,4.312,2.607,9.411,4.79,13.808\r\n        c5.414,2.689,12.614-0.709,17.292,3.997c2.494-2.101,3.09-5.304,4.903-7.909c2.892-4.195,7.002-7.71,11.988-8.9\r\n        c2.809-0.992,6.406-1.104,8.309-3.799c2.689-4.395,4.192-10.403,9.212-12.813c3.486-1.813,6.208-4.593,9.411-6.889\r\n        L932.995,523.701z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 850.1191 571.0957)\"\r\n>Ramechhap</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"dolkha\"  class=\"mkhover prov3\"\r\n                    d=\"M890.192,465.393\r\n        c2.296-3.994,5.811-7.002,8.702-10.485c1.188,2.494,2.604,4.985,4.192,7.196c-1.188,2.3-2.605,4.904-1.588,7.601\r\n        c1.503,4.705,1.19,9.808,2.297,14.598c2.607,0.397,5.188,0,7.795,0.113c1.899,0.596,2.895,2.693,4.705,3.487\r\n        c2.895,1.188,6.01,1.896,8.901,3.005c2.604,1.587,5.103,3.288,7.795,4.705c2.211-1.307,4.507-2.494,5.812-4.79\r\n        c1.307-2.297,3.911-3.204,6.097-4.396c1.698,2.81,3.91,5.188,5.5,8.107c1.104,5.103-0.313,10.29-1.814,15.105\r\n        c-0.907,0.599-1.814,1.105-2.693,1.588c-2.891-1.896-5.694-3.994-9.014-5.103c-2.807,0.313-4.195,3.09-5.301,5.414\r\n        c-1.701,3.601-0.992,7.597-0.198,11.396c-2.495,2.101-4.706,4.595-7.796,5.813c-5.612,1.813-7.71,7.909-10.091,12.813\r\n        c-1.814,3.487-6.406,3.289-9.609,4.596c-7.087,2.296-11.708,8.7-14.514,15.307c-4.791-3.486-10.8-0.907-15.987-2.692\r\n        c-1.104-0.989-1.104-2.493-1.503-3.799c-0.595-4.107-2.806-7.597-3.203-11.594c-4.309,1.19-7.908-1.502-11.707-2.807\r\n        c1.814-3.006,3.604-6.012,5.813-8.702c1.587-1.899,0.793-4.903,2.211-6.806c3.288-3.398,8.19-2.892,12.388-3.483\r\n        c2.211-4.706-2.098-8.788-1.701-13.493c-0.511-2.892,1.899-4.791,3.288-7.002c1.814-2.494,2.693-5.896,5.697-7.398\r\n        c1.701-1.188,4.706-1.389,5.104-3.798c0.111-4.791-2.298-9.1-4.509-13.21c-0.195-3.6,0.709-7.313,0.313-10.913\r\n        c1.503-0.111,3.005-0.198,4.593-0.312L890.192,465.393z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 886.1396 517.001)\"\r\n>Dolkha</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"kavrepalanchowk\"\r\n                    class=\"mkhover prov3\" d=\"M805.38,521.291\r\n        c1.898-1.304,4.194-2.098,6.491-2.607c4.394,1.19,7.71,4.705,11.99,6.293c5.301,2.214,3.912,10.094,8.787,12.504\r\n        c1.104-1.591,2.211-3.203,3.2-4.904c3.487,0.992,7.2,0.907,10.804,1.502c2.806,1.896,4.9,4.593,7.313,6.889\r\n        c-2.409,2.494-5.187,4.79-7.199,7.71c-0.904,3.288-1.503,6.604-3.399,9.609c0.114,2.692,1.104,5.414,1.503,8.192\r\n        c-3.09,0.709-5.499,2.491-6.293,5.811c-3.401-0.906-7.795-0.51-9.694,2.807c-0.313,2.409-0.198,4.706-0.198,7.087\r\n        c-2.098,0.313-4.192,0.992-6.208,0.396c-4.394-1.19-8.898,0.596-13.21-0.709c-2.494-0.793-5.301-0.991-7.313-2.894\r\n        c-3.713-3.005-7.795-5.301-11.905-7.396c0.113-2.098-0.312-4.593,1.105-6.406c2.69-3.799,3.09-8.703,2.013-13.097\r\n        c-1.19-2.098-3.912-2.807-5.896-4.11c0.709-3.089,1.503-6.094,2.495-9.212c3.288-0.794,7.2-0.709,10.006-3.005\r\n        c2.495-4.507,4.791-9.298,5.613-14.514v0.056L805.38,521.291L805.38,521.291z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 796.1738 550.6738)\"\r\n>Kavreplanchowk</text>\r\n            </g>\r\n\r\n\r\n                  <g class=\"district\" >\r\n                <path id=\"lalitpur\"\r\n                    class=\"mkhover prov3\" d=\"M774.481,528.689\r\n        c5.896,0.596,8.7,6.488,13.21,9.691c-0.794,3.487-1.503,7.087-2.101,10.688c2.016,1.188,3.997,2.407,6.097,3.483\r\n        c0.196,2.895-0.113,5.896-1.59,8.505c-2.013,3.092-1.896,6.89-2.013,10.402c-4.507-1.39-9.014-3.005-13.209-5.301\r\n        c-2.013-1.307-4.309-1.503-6.491-1.814c-0.904-2.493-2.211-4.901-2.69-7.512c0.11-2.409,0.312-4.904,0.989-7.2\r\n        c2.101-3.005,4.904-5.499,6.604-8.702c0.198-2.296-0.396-4.592-0.51-6.889c0.396-1.897,1.104-3.6,1.698-5.414L774.481,528.689\r\n        L774.481,528.689z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 772.5303 561.458)\"\r\n>Lalitpur</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"kathmandu\"\r\n                    class=\"mkhover prov3\" d=\"M770.684,513.609\r\n        c1.19-2.211,2.692-4.11,4.195-6.098c5.301,1.393,10.688,0.992,15.987,1.307c3.483,1.188,6.406,3.799,9.298,6.095\r\n        c2.494-0.595,5.102-1.502,7.71-1.813c1.502,0.198,1.899,2.015,2.892,3.005c-3.2,2.1-6.688,3.801-10.007,5.813\r\n        c-2.494,1.587-5.188-0.198-7.795-0.396c-4.903,0.794-8.391,4.593-11.792,7.906c-2.297-1.188-4.989-3.799-7.711-2.211\r\n        c-2.012,3.288-3.004,7.087-2.098,10.8c0.596,2.81-1.898,4.595-3.288,6.491c-0.992-0.595-1.898-1.188-2.894-1.813\r\n        c-0.511-3.799-1.104-7.601-2.807-10.999c-1.389-1.814-4.592-3.401-2.892-6.013c2.407-3.089,5.413-5.496,8.504-7.71\r\n        c1.588-0.904,1.813-2.892,2.69-4.394v0.027h0.006V513.609z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 770.249 520.9629)\"\r\n>Ktm</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"bhaktapur\"\r\n                    class=\"mkhover prov3\" d=\"M783.496,530.985\r\n        c1.813-3.798,5.499-6.292,9.496-7.397c3.398,0.708,6.803,1.105,10.29,0.595c-1.814,3.288-3.091,6.892-4.989,10.205\r\n        c-3.714,1.502-8.787,3.911-11.99,0.396C785.311,533.679,783.213,532.771,783.496,530.985z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 788.418 533.3115)\"\r\n>Bkt</text>\r\n            </g>\r\n        </g>\r\n\r\n        <g id=\"pradesh-4\" (click)=\"showProvincedata(this.$event,4)\">\r\n                  <g class=\"district\" >\r\n                <path id=\"mustang\"\r\n                    class=\"mkhover prov4\" d=\"M581.188,264.699\r\n        c3.603,0.312,7.09,0,10.604-0.595c1.899,1.502,2.807,3.912,4.11,5.896c1.813-0.198,3.6-0.794,5.414-0.198\r\n        c2.689,0.907,5.609,0.51,8.306,1.502c0.595,2.296,0.198,5.188,2.098,7.002c3.203,0.51,6.406,0.198,9.496,0.312\r\n        c-0.113,0.794-0.313,2.211-0.396,2.892c-1.392,0.595-2.692,1.19-3.997,1.814c-0.396,5.188,0,10.914,4.107,14.599\r\n        c-1.587,3.6-2.806,7.512-2.407,11.396c2.212,0.312,4.395-0.113,6.489-0.709c0.992,0.709,1.899,1.305,2.895,2.013\r\n        c-0.512,2.693-1.392,5.414-1.392,8.306c-0.904,4.195-3.09,8.192-3.202,12.614c-2.493,0.511-4.987,1.304-7.513,1.899\r\n        c-3.289,0.195-7.002-0.709-9.809,1.587c-0.793,1.39-0.992,3.005-1.392,4.593c-3.714,1.188-5.811,4.309-8.391,6.888\r\n        c-2.894-1.896-5.812-3.713-8.391-6.009c-2.692,1.7-2.895,4.988-3.401,7.795c-2.409,1.19-5.301,2.098-6.293,4.79\r\n        c-1.304,3.402-4.592,5.188-7.909,6.208c-2.098,0.511-2.604,2.807-3.713,4.396c-2.807-0.198-5.697-0.513-8.504-0.198\r\n        c-2.015,0.396-2.693,2.495-3.602,4.107c-1.104,2.608-3.911,4.11-4.987,6.807c-1.19,2.604-2.211,5.301-3.486,7.795\r\n        c-2.495-0.313-4.396-1.814-6.095-3.401c-2.015,0.313-3.997,0.511-6.011,0.708c-0.991-4.193-2.212-8.305-4.311-12.104\r\n        c-1.104-1.899-1.189-4.195-0.907-6.293c1.589-3.005,3.716-5.697,4.312-9.103c-2.893-3.004-6.89-4.507-10.913-5.499\r\n        c-0.198-1.699-0.597-3.483-0.709-5.301c0.596-1.304,2.013-1.897,3.005-3.005c2.211-1.587,1.189-4.988,3.203-6.803\r\n        c3.288-3.603,7.396-6.689,9.693-11.197c0.709-1.7,2.493-2.296,3.996-3.09c0.513-6.094,1.7-11.99,2.211-18\r\n        c2.809-1.502,7.089-2.608,7.993-6.095c-1.188-3.288-3.005-6.406-3.09-10.006c2.409-1.502,4.396-3.487,6.406-5.5\r\n        c2.409-1.502,5.301-0.793,7.908-0.992c1.699-0.51,3.288-1.19,4.902-1.814c0.512-2.41,0.512-6.406,3.713-6.69\r\n        c3.716-0.198,6.604-2.494,10.009-3.288L581.188,264.699z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 560.7349 318.1035)\"\r\n> Mustang</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"manang\"  class=\"mkhover prov4\"\r\n                    d=\"M613.984,334.998\r\n        c2.807,0.596,5.301-1.389,8.104-1.587c2.894-0.198,5.813,0.312,8.589,0.794c2.809,1.587,5.303,4.705,8.9,4.309\r\n        c2.605-0.11,5.103,0.513,7.597,1.105c1.814,4.902,7.087,8.306,6.491,14.088c1.588,2.296,4.593,3.203,6.69,5.103\r\n        c2.211,4.989,4.309,10.094,7.086,14.8c1.188,1.896,0.709,4.309,0.794,6.403c-0.313,5.896,2.098,11.396,3.6,17.011\r\n        c-2.409,3.09-6.491,2.892-9.808,4.309c-1.814-2.013-3.486-4.195-5.697-5.697c-1.899-0.199-3.997-0.111-5.896-0.111\r\n        c-0.511,2.212-0.905,4.395-1.39,6.604c-4.107-1.189-8.504-1.813-12.501-3.714c-4.394-0.51-9.213,1.588-13.493-0.51\r\n        c-3.713-1.307-6.604-3.997-9.409-6.604c-2.691-2.606-6.688-3.005-9.608-5.415c-4.705-3.911-10.289-6.604-15.902-9.014\r\n        c-3.996-1.105-8.104-1.392-12.188-1.701c-1.19-2.692-3.203-4.903-5.612-6.688c-2.41-1.39-2.495-4.902-0.992-6.89\r\n        c2.692-1.502,5.813-2.097,7.993-4.193c1.304-1.391,1.899-3.4,3.005-4.987c1.588-1.19,3.401-1.899,4.989-3.005\r\n        c1.188-2.016,1.104-4.396,1.7-6.604c2.807,1.587,5.301,3.486,8.104,4.988c2.409,0.396,3.997-1.7,5.303-3.401\r\n        c1.188-1.813,3.399-2.409,5.104-3.713c0.907-1.588,1.189-3.401,2.211-4.903c1.899-1.188,4.11-1.104,6.208-0.795L613.984,334.998z\">\r\n                </path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 606.0054 366.459)\"\r\n>Manang</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"myagdi\"  class=\"mkhover prov4\"\r\n                    d=\"M509.074,351.893\r\n        c4.309-0.904,8.787-1.587,12.896-3.2c3.288,0.196,6.293,1.813,9.017,3.714c-1.307,4.592-5.896,8.306-3.996,13.493\r\n        c2.296,4.702,4.192,9.606,5.414,14.711c3.09,0.313,6.604-0.113,9.212,2.098c1.588,1.191,3.601,0.709,5.415,0.794\r\n        c2.494-4.11,3.483-9.099,7.197-12.302c1.813-1.701,2.1-4.593,4.194-5.896c2.693-0.11,5.896-0.794,7.909,1.392\r\n        c2.494,2.892,6.095,4.901,7.71,8.391c-3.401,1.304-7.512,2.098-9.496,5.499c-1.389,3.005,1.304,5.698,2.296,8.504\r\n        c-2.604,2.297-4.79,4.989-7.396,7.313c-3.713,2.892-4.705,7.796-6.011,12.104c-2.014,0.396-4.791-0.113-5.813,2.098\r\n        c-1.189,2.016-2.098,4.11-3.005,6.208c-4.988,0.313-8.702-3.2-13.407-3.996c-0.794,4.194,1.587,7.711,3.911,10.912\r\n        c-3.713-2.211-7.908-2.892-11.99-1.587c-0.794-0.991-1.587-2.013-2.409-3.005c-2.69,0.595-5.812,1.502-7.991-0.709\r\n        c-2.692-2.494-6.293-3.203-9.609-4.507c-3.401-1.588-7.2-0.198-10.8-0.113c0.312-3.398,0.794-6.688,0.198-10.092\r\n        c-0.513-2.806,3.799-4.903,1.698-7.71c-2.892-1.813-5.812-3.6-8.589-5.612c-2.605-0.11-4.987,1.19-7.513,1.392\r\n        c-2.211-0.198-4.311-0.709-6.491-1.19c0-4.592-1.813-8.787-3.288-13.096c-1.587-3.604,1.701-6.805,2.211-10.29\r\n        c0.113-2.895,3.289-3.912,3.715-6.69c0.313-2.689-0.512-5.499-0.512-8.188c5.301,2.493,11.197,2.493,16.498,4.9\r\n        c3.602-0.793,7.087-1.698,10.8-1.502c3.401,0.709,4.989-3.202,8.107-3.799L509.074,351.893z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 487.3125 382.1953)\"\r\n>Myagdi</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"kaski\"  class=\"mkhover prov4\"\r\n                    d=\"M565.483,382.11\r\n        c2.892-3.912,7.795-5.188,12.501-5.304c4.9,0.513,9.893,1.19,14.198,3.912c5.499,1.813,9.609,5.813,14.517,8.589\r\n        c5.811,2.016,9.298,7.71,15.105,9.811c2.608,1.304,5.499,1.304,8.394,1.389c-3.486,3.09-5.104,7.398-7.515,11.313\r\n        c-0.709,1.188-1.502,2.491-1.304,3.997c0.313,4.79,0.313,9.691,2.013,14.283c-0.794,4.51-3.714,8.309-3.997,12.897\r\n        c0.198,1.39,1.307,2.41,2.016,3.714c2.689,3.601,0.794,8.391,1.389,12.614c-6.406,1.188-12.699-1.105-18.907-2.015\r\n        c-0.708-2.606-1.188-5.302-2.806-7.396c-2.693-2.608-6.604-2.693-9.81-4.11c-4.789-2.098-10.093-2.211-15.192-2.69\r\n        c-4.31-0.513-7.993-3.004-11.707-5.188c0.907-1.813,1.898-3.601,2.892-5.415c-2.296-1.7-5.5-2.211-7.197-4.507\r\n        c0.195-1.7,0.709-3.288,1.104-4.903c-1.502-1.588-3.6-3.005-3.799-5.301c-0.313-2.495-1.39-4.791-3.09-6.604\r\n        c1.39-3.911,2.297-7.993,4.31-11.597c2.893-3.2,6.292-5.811,9.212-9.014c1.19-3.005-1.304-5.896-2.296-8.504L565.483,382.11z\">\r\n                </path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 578.9624 413.8018)\"\r\n>Kaski</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"lamjung\"\r\n                    class=\"mkhover prov4\" d=\"M651.685,396.794\r\n        c1.308,0,2.693,0,3.997,0.198c2.297,1.502,3.912,3.799,5.698,5.896c3.798-0.904,7.795-1.813,11.396-3.714\r\n        c3.799,7.398,12.896,10.998,14.907,19.587c-8.39,8.309-3.483,22.11-10.912,31.015c-2.69,3.285-6.688,5.188-9.692,8.188\r\n        c-2.013,2.41-5.414,2.212-8.192,3.005c-4.985-4.592-12.104-6.888-18.793-6.688c-5.103-0.198-8.703,5.694-14.004,3.912\r\n        c-2.604-1.19-1.502-4.511-1.502-6.807c0.709-3.288-2.098-5.896-3.799-8.504c1.104-3.483,2.605-6.888,3.714-10.4\r\n        c1.19-3.203-0.992-6.292-0.992-9.496c0-2.894-0.596-5.813-0.112-8.702c2.691-5.499,5.611-11.196,10.604-15.108\r\n        c4.394,2.101,9.212,3.203,14.003,4.396c3.401,0.312,3.09-4.507,3.713-6.806L651.685,396.794z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 630.0762 432.001)\"\r\n>Lamjung</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"baglung\"\r\n                    class=\"mkhover prov4 \"\r\n                    d=\"M545.479,435.844c-3.91,4.31-4.99,10.199-7.4,15.31c-1.9,2.21-3.99,4.11-5.89,6.29    c-3.09-2.49-6.61-4.79-10.61-5.61c-3.09,0.11-6.6,2.21-9.29-0.199c-2.7-1.19-3.09-4.311-4.11-6.801c-2.1-0.71-4.31-1.59-6.1-2.89    c-2.8-2.1-6.4-2.021-9.61-3.01c1.82-3.48,2.9-7.2,4.91-10.49c-0.65-0.36-2.61-1.021-3.29-1.271c-6.32-1.68-13.38,0.73-19.85-0.109    c-2.01-0.521-3.28,1.5-4.9,2.29c-1.19-0.391-2.41-0.79-3.6-1.19c-1.39-3.399-3.29-6.689-4.79-10.2c-5.81-0.31-9.61-4.79-14-8    c-1.7-3.28-4.11-6.29-5.19-9.81c-0.91-2.49-3.2-3.91-4.79-5.89c1.7-0.2,3.4-0.51,5.1-0.71c-1.1-2.01-2.49-3.8-4.11-5.41    c0.99-0.2,2.1-0.4,3.09-0.6c0.31-2.21,0.6-4.51,1.11-6.69c2.69,1.31,5.5,2.41,8.39,3.29c1.1-1.9,1.81-4.11,2.1-6.29    c-1.71-1.31-4.12-2.11-4.71-4.4c0.8-2.81,4.31-2.41,6.6-3.01c4.2,0.32,8.39,1.11,12.5-0.19c-1.7,7.71,3.72,14.2,3.92,21.6    c4.79,1.19,9.8,1.59,14.39-0.4c2.5,2.3,5.42,4.11,8.31,5.7c-1.1,2.1-3.8,4.2-2.61,6.8c1.59,3.011-0.19,6.3,0.12,9.5    c2.29,3.49,6.89-0.399,10.09,0.91c0.45,0.2,0.94,0.37,1.39,0.54c2.92,0.99,7.48,2.49,9.81,4.64c1.7,1.7,4.19,1.591,6.4,1.7    c1.81,0,3.2,1.391,4.9,1.9c2.1,0.189,4.2-0.601,6.41-0.4c1.9,0.601,3.48,1.9,5.1,2.9c2.41,1.39,2.02,5.1,4.4,6.49    C541.559,433.434,543.579,434.623,545.479,435.844z\">\r\n                </path>\r\n\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 481.2817 426.1602)\"\r\n>Baglung</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"parbat\"  class=\"mkhover prov4\"\r\n                    d=\"M549.298,410.995\r\n        c2.494,1.503,6.406,2.605,6.208,6.208c-0.199,2.693,1.587,4.705,3.401,6.491c-0.794,1.104-1.393,2.211-2.101,3.288\r\n        c1.7,3.2,4.79,4.986,8.192,5.812c-0.709,1.304-1.39,2.494-2.098,3.713c-2.41-0.396-4.791-0.794-7.2-0.992\r\n        c-0.313,4.396,0,8.788-1.307,12.897c-1.588,1.813-3.484,3.09-5.188,4.706c0.595,1.502,1.389,3.005,2.296,4.394\r\n        c-2.409,2.409-3.714,5.499-4.309,8.702c-0.397,2.495-3.005,3.487-5.188,3.912c-2.296,0.198-3.601,2.211-5.301,3.486\r\n        c-0.511-1.502-0.907-3.203-1.701-4.595c-1.7-2.098-4.903-3.6-4.705-6.688c2.296-3.288,5.612-5.698,8.394-8.589\r\n        c3.6-4.508,2.689-12.586,9.298-14.4c0.11-4.901-5.613-6.095-8.59-8.787c-1.59-5.5-4.705-10.4-7.004-15.704\r\n        c3.801,1.899,7.798,4.195,12.188,3.801c3.005-1.307,3.288-4.988,4.706-7.6v-0.057L549.298,410.995L549.298,410.995z\">\r\n                </path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 543.3247 432.001)\"\r\n>Parbat</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"syangja\"\r\n                    class=\"mkhover prov4\" d=\"M557.49,436.904\r\n        c5.609,1.813,10.289,5.694,15.984,7.512c5.414,0.992,11.196,0.51,16.412,2.692c2.409,0.989,4.989,1.588,7.515,2.492\r\n        c3.997,2.299,5.188,7.199,3.799,11.511c-2.895-0.991-5.499-2.692-8.504-3.603c-4.904-0.396-10.604,3.486-9.214,9.018\r\n        c1.897,2.098,4.791,2.689,7.313,3.713c-3.714,4.192-4.989,10.29-3.912,15.899c1.503,3.997-3.798,5.104-5.896,7.6\r\n        c-2.297-0.907-4.596-2.101-7.087-2.607c-3.006,0-5.612,2.013-8.59,1.587c-3.801-1.502-6.806-5.301-11.196-5.103\r\n        c-3.09,0.199-5.302-2.211-7.908-3.288c-1.814,0.907-3.401,2.098-4.989,3.203c-2.494-3.603-6.604-6.207-11.196-5.813\r\n        c-5.5,0.794-11.194,1.19-16.693,0.794c1.587-2.013,2.604-4.593,4.705-6.01c4.901,0,9.894,0.596,14.599-0.907\r\n        c5.697-0.595,10.403-4.192,15.591-6.208c0.708-4.394,2.211-8.702,5.813-11.509c-0.794-1.587-1.7-3.203-2.494-4.705\r\n        c1.389-1.188,3.005-2.211,4.309-3.6c1.307-4.11,1.392-8.504,1.701-12.699L557.49,436.904z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 548.7866 475.501)\"\r\n>Syangja</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"tanahun\"\r\n                    class=\"mkhover prov4\" d=\"M627.676,460.205\r\n        c5.301,0.793,8.9-5.301,14.201-4.508c4.791,0.709,9.609,2.098,13.691,4.706c3.005,2.806,0.989,7.087,0.396,10.485\r\n        c-0.595,4.595-4.705,7.515-5.697,11.905c5.896,1.502,11.197,4.507,16.498,7.512c0.396,3.005,1.307,5.896,2.409,8.702\r\n        c-4.507,2.495-9.496,4.396-14.712,4.396c-3.912,0-4.592,4.395-5.188,7.313c-1.7-0.51-3.486-0.992-5.304-1.389\r\n        c-1.697,2.013-3.483,3.912-5.301,5.697c-3.288-4.312-4.705-9.694-4.394-15.108c-3.007-0.992-6.098-1.389-9.103-2.211\r\n        c-4.705-1.502-9.691-0.396-14.513-1.304c-2.808-0.313-5.301-1.393-7.909-1.899c-3.6-0.198-7.087,1.304-10.687,0.709\r\n        c-2.692-0.511-5.304-1.39-7.993-1.896c1.7-1.307,4.106-2.214,4.592-4.51c0.113-2.892-0.709-5.812-0.396-8.702\r\n        c0.396-3.994,2.692-7.396,5.5-10.287c-3.006-1.591-6.096-2.608-9.214-3.912c0.709-1.701,0.513-4.11,2.494-4.904\r\n        c1.899-0.793,4.11-2.494,6.293-1.389c2.608,0.794,4.989,2.892,7.909,2.807c1.19-0.992,2.098-2.211,3.09-3.402\r\n        c4.79,1.106,9.811,1.899,14.797,2.41c2.809-0.111,5.612-1.503,8.506-1.188L627.676,460.205z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 602.4346 480.834)\"\r\n>Tanahun</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"nawalparasieast\"\r\n                    class=\"mkhover prov4\"\r\n                    d=\"M593.291,496.913c4.706-0.113,9.496-1.502,14.004,0.511c6.094,2.409,12.897-0.511,18.708,2.494c2.013,0.907,4.312,0.396,6.491,0.596c0.709,5.697,0.794,13.099,6.491,16.188c2.212-1.814,4.192-3.799,6.01-5.896c5.812,1.393,6.804,11.112,0.907,12.898c-2.409-0.313-4.507-1.588-6.892-1.588c-4.192-0.513-6.206,3.912-9.691,5.188c-4.79,1.701-9.811,3.09-13.893,6.097c-3.483,3.201-5.103,8.19-9.606,10.287c-8.309,2.693-17.206,1.59-25.795,1.899c-0.06,0-0.113-0.028-0.17-0.028l-4.851-28.602c1.049,0.085,2.069,0.17,3.118,0.341c2.211,0.396,3.912-1.701,6.095-1.813c1.392-0.396,2.894-0.111,4.11-0.905c1.104-2.895,2.211-5.896,3.911-8.504c1.813-2.693,1.503-6.098,1.104-9.214L593.291,496.913z\">\r\n                </path><text class=\"maptext\" transform=\"matrix(1 0 0 1 552.2993 536.3115)\"\r\n x=\"25\" y=\"-10\">Nawalparasi (E)</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"gorkha\"  class=\"mkhover prov4\"\r\n                    d=\"M662.684,359.206\r\n        c6.013-0.198,12.104,0.198,17.89,2.013c2.409,3.401,4.592,7.002,8.504,8.901c0.113,1.813,0.312,3.486,0.51,5.301\r\n        c2.101,1.304,3.997,3.004,6.491,3.603c3.203,0.794,6.688,1.188,9.411,3.285c2.69,2.016,5.698,4.312,9.213,3.486\r\n        c2.296-0.992,4.507-2.692,7.087-2.494c2.692-0.396,4.988,2.409,7.597,1.19c1.899-0.595,2.607-2.81,4.11-3.997\r\n        c3.288-3.09,6.009-6.803,9.893-9.212c2.494-0.599,5.104-0.794,7.6-1.19c1.588,1.7,3.005,3.603,4.706,5.188\r\n        c1.697,0.709,3.6,0.709,5.499,1.104c0.51,2.495-0.992,4.593-1.899,6.69c-0.113,2.689,0.709,5.301,1.105,7.908\r\n        c-1.587,1.896-3.288,3.799-4.595,5.896c-1.588,3.6-7.396,3.6-7.512,8.192c0.396,4.507,2.211,8.897,1.304,13.404\r\n        c-2.013,3.203-5.896,3.486-8.7,5.499c-2.607,2.495-2.692,6.492-4.194,9.695c-2.693,2.891-7.711,3.713-8.901,7.993\r\n        c-0.992,4.394-2.211,8.787-2.604,13.295c-2.608,1.189-4.904,2.806-7.313,4.507c-2.892-0.511-6.49-3.484-9.1-0.794\r\n        c-2.409,4.195-2.494,9.101-3.401,13.606c-0.51,3.005-3.005,4.986-4.705,7.396c-2.495,3.09-8.104,4.396-7.313,9.298\r\n        c-0.313,5.896,4.394,9.694,6.803,14.517c-2.409,0.988-4.592,2.604-7.087,3.287c-2.692-0.396-6.207-0.598-7.313-3.603\r\n        c-1.306-2.806-2.691-5.896-5.5-7.512c-3.201-2.409-7.396-0.992-10.486,0.907c-0.597-2.409-0.991-4.791-1.307-7.313\r\n        c-5.188-3.09-10.687-5.697-16.214-8.19c4.791-4.987,6.097-11.904,7.2-18.597c3.005-0.794,6.491-0.709,8.787-3.203\r\n        c3.997-3.714,9.213-6.293,11.707-11.311c2.606-3.799,2.409-8.504,3.203-12.897c0.596-3.201,1.389-6.488,2.098-9.691\r\n        c0.709-2.693,2.895-4.396,4.592-6.406c-1.813-4.706-4.789-9.015-8.504-12.388c-2.098-2.296-4.986-3.912-6.404-6.689\r\n        c-2.213-4.194-3.287-8.788-4.594-13.295c-1.304-4.309-0.195-8.702-0.99-13.011c-2.691-4.507-5.696-9.103-6.688-14.4\r\n        L662.684,359.206z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 695.624 430.501)\"\r\n>Gorkha</text>\r\n            </g>\r\n        </g>\r\n\r\n        <g id=\"pradesh-5\" (click)=\"showProvincedata(this.$event,5)\" >\r\n\r\n                  <g class=\"district\" >\r\n                <path id=\"rukumeast\"  onmouseenter={show} class=\"mkhover prov5\"\r\n                    d=\"M422.221,340.129c2.271-0.595,4.507-1.389,6.774-1.729c2.296,0.312,4.394,2.012,6.804,1.188c3.603-0.907,7.795-1.588,11.196,0.396c5.103,3.997,11.594,5.609,17.802,7.002c0.907,1.699,1.701,3.483,2.494,5.188c1.588,0.113,3.203,0.313,4.791,0.396c0.113,2.098,0.312,4.192,0.198,6.403c0.312,2.298-2.016,3.603-3.005,5.414c-0.396,1.503-0.598,3.203-0.797,4.791c-6.688,1.19-13.604-0.989-20.098,1.19c-1.896,0.595-2.409,2.69-2.098,4.394c0,2.494,2.69,3.603,4.31,5.104c-0.313,0.708-1.104,2.098-1.503,2.689c-2.689-1.104-5.499-2.491-8.391-3.2c-0.708,2.211-1.19,4.593-1.502,6.889c-1.701,0.113-3.487,0.198-5.188,0.51c1.19,2.015,2.494,3.997,3.912,5.896c-2.212,0.595-4.395,2.689-6.688,1.502c-3.093-1.392-5.813-3.486-9.215-3.997c-2.297-0.368-4.139-2.186-6.265-3.004l6.491-47.059L422.221,340.129z\">\r\n                </path><text class=\"maptext\" transform=\"matrix(1 0 0 1 397.8335 366.459)\"\r\n x=\"28\">Rukum(E)</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"bardiya\"\r\n                    class=\"mkhover prov5\" d=\"M201.6,368.589c4.507-3.6,9.212-7.313,12.302-12.303c1.502,2.297,2.495,5.415,5.301,6.407\r\n        c5.698,2.012,10.687,6.009,14.003,11.108c1.389,1.814,3.487,2.607,5.301,3.799c9.695,5.612,15.988,15.593,25.795,21.007\r\n        c3.912,2.492,6.803,6.403,11.396,7.906c-1.191,2.494-1.814,5.188-2.495,7.908c-0.992-1.587-1.899-3.288-2.892-4.902\r\n        c-3.203-0.512-6.491-0.795-9.808-0.597c0.907,5.813-0.992,12.303-6.491,15.194c-4.394,1.896-8.306,4.79-11.991,7.908\r\n        c-4.592,4.704-5.613,11.987-2.693,17.802c-1.389,0.198-2.806,0.396-4.195,0.595c0.113-2.296,0.312-4.592,0.595-7.001\r\n        c-2.013-1.813-3.713-3.912-4.791-6.491c-1.899-4.192-7.398-3.714-11.197-3.399c-0.312,1.588-0.595,3.203-0.907,4.791\r\n        c-1.701,0-3.401,0-5.187,0.11c-0.397-3.203,0.595-6.403-0.51-9.496c-2.495-5.496-9.61-7.99-10.8-14.198\r\n        c0.312-3.714,0.794-7.994-1.814-11.197c-6.69-2.692-13.89-3.798-20.807-6.208c-0.198-0.595-0.595-1.813-0.793-2.296\r\n        c2.211-3.203,3.486-7.087,6.888-9.103c6.69-4.394,10.488-11.593,15.789-17.291L201.6,368.589L201.6,368.589z\">\r\n                </path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 207.2104 401.4004)\"\r\n>Bardia</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"banke\"  class=\"mkhover prov5\"\r\n                    d=\"M262.091,410.4c2.608,0.11,4.989,0.51,7.512,0.903c0.595,1.191,1.19,2.41,1.701,3.714\r\n        c4.904,0.513,8.589,3.912,13.011,5.697c2.296,0.794,3.997,2.693,5.301,4.706c1.389,2.211,4.592,1.813,6.491,3.603\r\n        c4.507,6.095,11.509,9.691,17.093,14.797c0.992,1.698,0.793,4.309,2.806,5.188c3.997,2.211,7.909,5.499,12.813,4.791\r\n        c-0.113,1.587-0.198,3.089-0.397,4.705c2.211,0.907,4.309,1.899,6.492,2.892c-0.397,3.911-0.709,7.798-0.596,11.597\r\n        c-4.706-2.41-9.496,0.595-14.4-0.514c-1.389,1.393-2.409,3.203-4.11,4.11c-3.798-0.312-7.597-1.701-11.395-1.304\r\n        c-4.706,2.494-7.001,7.512-9.694,11.902c-4.904-1.587-8.391-5.609-12.699-7.99c-5.698-2.81-9.695-7.796-14.514-11.707\r\n        c-2.608-3.09-6.888-3.005-10.403-4.508c-5.811-3.008-10.602-7.6-16.498-10.403c0.794-4.312-2.098-8.106-1.19-12.302\r\n        c1.389-7.002,7.994-10.999,14.003-14.006c6.009-2.605,10.403-9.213,8.702-15.899L262.091,410.4z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 263.7778 449.6797)\"\r\n>Banke</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"rolpa\"  class=\"mkhover prov5\"\r\n                    d=\"M379.389,386.391c1.701-0.989,2.608-2.807,3.713-4.394c7.597,0.198,13.407,5.697,19.304,9.694\r\n        c4.394,1.304,7.512-2.693,11.594-3.203c2.494,0.709,4.394,2.807,7.087,3.203c3.911,0.709,7.001,3.483,10.913,4.192\r\n        c3.401,0.794,7.313,2.607,7.994,6.293c0.991,3.912,3.996,6.891,5.499,10.688c-1.503,0.992-3.203,1.813-3.997,3.483\r\n        c-1.588,3.093-3.912,5.698-5.188,8.901c-0.794,2.098-2.892,3.203-4.394,4.705c-2.693,3.09-5.301,6.293-7.2,9.893\r\n        c-2.892-0.11-5.697-0.793-7.993-2.604c-2.212-1.814-5.103-1.814-7.796-2.211c-2.807,3.483-7.313,4.107-11.196,5.609\r\n        c-3.997,2.101-3.484,7.313-4.108,10.999c-2.891-1.305-3.6-4.31-4.592-7.002c-1.899-0.794-4.309-1.588-6.406-0.904\r\n        c-3.6,1.588-7.597,0-11.197,2.098c-1.588-3.401-4.309-6.095-6.01-9.298c-0.51-3.798,3.005-6.805,2.41-10.604\r\n        c0.708-4.309-4.309-6.688-4.195-10.913c0.992-2.098,2.409-3.996,3.6-6.01c-1.814-2.013-3.402-4.108-4.904-6.293\r\n        c2.013-1.813,3.997-3.713,5.698-5.811c2.296-2.693,2.693-6.491,4.989-9.103c2.098-0.794,4.309-0.992,6.407-1.502L379.389,386.391z\r\n        \"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 381.2461 418.2354)\"\r\n>Rolpa</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"dang\"  class=\"mkhover prov5\"\r\n                    d=\"M324.397,426.303c2.608-0.709,4.791,1.392,6.888,2.607c5.697-3.005,11.792,1.813,17.801,0.312\r\n        c2.807-0.793,3.912,2.495,5.698,3.997c3.09,2.296,6.208,4.507,9.609,6.406c2.807,1.588,3.798,4.904,5.811,7.313\r\n        c2.495,1.698,5.5,0.195,8.192,0.11c3.004-0.196,6.208-2.806,9.099-0.907c0.907,1.591,1.304,3.487,2.495,4.989\r\n        c5.102,5.301,10.999,10.403,18.51,11.707c-0.397,1.814-0.907,3.604-1.19,5.301c2.299,2.895,4.705,6.098,8.592,6.604\r\n        c-2.299,5.812,4.394,9.695,4.79,15.108c0,4.107-5.612,3.601-6.891,6.889c-0.596,1.304-0.709,3.005,0.794,3.714\r\n        c2.296,2.606,6.207,1.389,8.9,3.401c-1.502,1.188-2.608,3.09-4.396,3.713c-4.107-2.211-9.1-4.705-13.49-1.7\r\n        c0.312,2.296,0.709,4.705,0.989,7.086c-2.491,0-5.103-0.708-7.597,0.199c-6.095,1.813-12.501,3.203-18.907,3.288\r\n        c-3.005,0.195-5.811,2.013-8.788,1.304c-4.706-1.502-7.795-5.612-10.687-9.298c-4.195-3.603-9.694-5.414-13.691-9.298\r\n        c-5.698-5.104-11.508-11.313-19.587-12.104c-3.997-2.098-6.293-6.491-9.014-10.006c0.709-0.907,1.304-1.814,1.899-2.693\r\n        c3.09,0.599,6.094,0.396,9.014-0.709c2.409,0.514,4.791,1.588,7.398,0.907c-0.794-4.507-0.397-8.897,0.313-13.294\r\n        c-2.012-1.503-4.309-2.495-5.896-4.309c-0.312-1.393-0.51-2.895-0.708-4.313c-4.989-0.51-9.496-2.604-13.606-5.414\r\n        c-1.304-2.211-2.494-4.592-3.203-7.086c0.312-6.095,4.394-12.813,10.914-13.805L324.397,426.303z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 357.313 480.1582)\"\r\n>Dang</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"kapilvastu\"\r\n                    class=\"mkhover prov5\" d=\"M451.984,497.99c5.896-0.198,11.509,1.503,16.497,4.508c1.588,1.389,2.407,3.486,3.997,4.903\r\n        c1.389,0.312,2.892,0.396,4.394,0.511c1.503,4.705,3.288,9.496,2.495,14.513c-0.596,3.09,0.312,6.208,0.312,9.411\r\n        c-0.989,3.402-3.09,6.491-3.288,10.205c0.709,2.494,3.203,4.705,2.211,7.512c-1.588,3.912-1.304,8.192-1.502,12.306\r\n        c-1.813-1.701-3.399-3.487-5.301-4.989c-6.293-0.794-12.614,0-18.907-0.113c-3.484,0.51-6.804-1.188-9.894-2.605\r\n        c-1.587-1.588-2.409-3.716-3.798-5.304c-3.09-1.304-6.604,0-9.811-0.312c-5.301-0.596-10.688,0-16.102-0.794\r\n        c-0.198-4.592-0.198-9.297,1.19-13.808c-2.016-4.592-3.801-9.298-5.414-14.088c-0.313-4.394-0.598-8.787-1.899-13.096\r\n        c4.31-1.813,8.192,0.992,11.906,2.692c2.296-0.396,3.713-2.494,5.499-3.801c2.013-0.313,3.997,0.513,6.01,0.113\r\n        c2.409-0.992,4.592-3.09,7.398-3.005c3.2-0.113,6.403,0,9.606,0c1.391-1.588,2.894-3.203,4.396-4.706L451.984,497.99\r\n        L451.984,497.99z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 416.0698 527.8047)\"\r\n>Kapilvastu</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"rupandehi\"\r\n                    class=\"mkhover prov5\" d=\"M479.083,505.105c5.613,0.11,9.894,3.799,14.911,5.896c2.806,1.19,4.79,4.309,7.993,4.195\r\n        c4.901-0.397,9.298,2.689,14.201,2.098c5.695-0.709,10.485,3.486,16.102,3.288c2.098-0.313,3.996-1.305,5.896-2.013\r\n        c1.506,2.013,3.093,3.911,4.706,5.811c-3.005,1.304-6.095,2.013-9.015,3.486c-1.7,2.495-4.195,5.301-3.401,8.59\r\n        c1.105,6.604,0.396,13.294,1.503,20.012c-9.692-0.11-19.188-2.604-28.996-1.813c-0.992,2.409-2.693,4.592-3.093,7.2\r\n        c0.514,1.813,1.503,3.398,2.409,4.985c-2.604,2.895-5.102,5.813-7.597,8.703c-3.203-0.794-7.001,0.793-9.694-1.503\r\n        c-1.104-1.7-0.907-3.798-1.502-5.612c-1.188-1.813-3.005-3.09-4.309-4.791c-0.992-4.702-0.313-9.606,1.188-14.198\r\n        c0.992-2.81-1.188-5.188-2.098-7.71c0.312-3.402,2.296-6.491,3.09-9.812c0.113-3.005-1.188-6.009-0.313-9.014\r\n        c1.305-6.095-2.297-11.792-2.016-17.887L479.083,505.105z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 478.5884 539.2344)\"\r\n>Rupendehi</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"nawalparasiwest\"  onmouseenter={show} class=\"mkhover prov5\"\r\n                    d=\"M578.551,545.754c-1.527,0.624-2.381,2.637-2.151,4.365c1.698,1.813,4.192,1.104,6.403,1.188c-3.398,2.809-2.494,7.798-5.896,10.688c-2.495-0.198-5.104-0.709-7.513,0.396c-1.392,2.101-1.813,5.304-0.396,7.515c1.39,1.188,3.005,2.098,4.593,3.09c-1.503,1.503-2.807,4.195-5.301,3.714c-1.588-0.709-2.807-1.896-4.11-2.892c-4.791-3.997-10.914-5.612-15.984-8.901c-4.706-3.004-9.896-4.903-14.517-7.908c-0.99-7.597-0.794-15.19-1.502-22.705c1.105-2.41,2.409-5.301,5.104-5.896c4.706-1.307,8.703-4.11,12.896-6.293c3.089-1.814,5.414-6.013,9.41-5.612c4.763,0.453,9.524,0.142,14.23,0.396L578.551,545.754z\">\r\n                </path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 552.2993 536.3115)\"\r\n x=\"-40\" y=\"16\">Nawalparasi(W)</text>\r\n            </g>\r\n\r\n                  <g class=\"district\" >\r\n                <path id=\"palpa\"  class=\"mkhover prov5\"\r\n                    d=\"M501.478,480.501c2.409-1.503,3.603,2.409,5.813,2.692c2.892,0.196,5.697,0.511,8.589,1.104\r\n        c5.813,0.992,11.707-1.7,17.49-0.595c3.203,0.396,4.705,3.6,6.888,5.612c2.296,0.11,4.11-1.899,6.01-3.093\r\n        c2.213,1.589,4.705,3.006,7.6,3.093c4.394,0,7.199,3.909,11.195,4.986c2.691,0.313,5.303-0.991,7.992-1.503\r\n        c3.288,0.709,6.406,2.297,9.896,2.41c3.004,0.113,5.896,0.992,8.702,2.013c-0.113,2.809,0.595,5.896-1.105,8.393\r\n        c-1.701,2.41-2.807,5.103-3.714,7.909c-3.09-0.113-5.896,0.989-8.702,1.896c-6.406,0-12.896,0.313-19.188-0.709\r\n        c-5.104,0.113-7.599,5.499-12.104,7.2c-3.486,2.409-5.499-2.893-7.199-5.104c-3.799,0.598-7.513,2.408-11.311,1.503\r\n        c-3.997-1.391-8.107-3.202-12.389-2.808c-5.188,0.51-9.693-2.692-14.798-2.692c-3.399-1.188-6.209-3.799-9.607-4.986\r\n        c0.198-2.81,0-5.698,0.112-8.504c1.897-4.51,3.286-9.299,2.606-14.089c2.692-1.19,4.705-3.203,7.2-4.705L501.478,480.501z\">\r\n                </path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 518.3711 506.9199)\"\r\n>Palpa</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"arghakhanchi\"\r\n                    class=\"mkhover prov5\" d=\"M447.789,462.104c0.709-2.012,2.013-3.798,3.09-5.609c4.592,2.807,9.809,4.706,15.108,5.896\r\n        c3.714-0.11,7.2-1.698,10.8-2.296c3.203,1.7,4.508,5.414,5.812,8.504c1.392,4.312,7.398,5.414,7.6,10.204\r\n        c0.709,4.396,3.09,8.504,2.296,13.013c-0.313,2.691-2.016,4.987-3.005,7.514c0.195,2.494,0.904,4.988,0.596,7.597\r\n        c-3.601-2.211-8.391-4.706-12.501-2.41c-1.19,0.599-2.296,1.191-3.401,1.701c-2.409-3.09-5.103-6.208-9.1-7.313\r\n        c-4.396-2.494-9.496-3.401-14.514-2.409c-1.392,1.304-2.494,2.892-3.801,4.309c-8.699-0.511-17.688,2.81-26.189-0.196\r\n        c-2.101-0.513-4.11-1.104-5.813-2.298c1.7-1.39,3.603-2.69,5.414-4.107c2.211-2.211,3.401-5.301,5.612-7.514\r\n        c4.904-2.099,10.913,0.905,15.193-2.808c3.09-2.409,7.313-0.709,10.913-2.098c-0.112-1.502,0-3.005-0.197-4.507\r\n        c-1.105-2.608-3.402-4.396-4.508-7.002c0-2.692,0.511-5.499,0.596-8.192V462.104L447.789,462.104z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 428.9727 493.7383)\"\r\n>Arghakhanchi</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"pyuthan\"\r\n                    class=\"mkhover prov5\" d=\"M443.396,416.494c1.104-1.502,3.09-1.813,4.592-2.692c3.005,3.203,6.804,5.612,11.194,6.208\r\n        c1.392,3.486,4.396,6.689,3.801,10.8c-3.486,1.392-7.2,2.214-10.998,1.59c-1.588,2.492,0.709,4.508,1.587,6.688\r\n        c-0.113,2.692-0.992,5.499,0.196,8.106c1.105,1.698,2.809,3.005,4.194,4.508c-2.409,1.188-4.988,0.198-7.396-0.313\r\n        c-2.101,3.09-2.494,7.002-4.79,10.095c0.195,3.285,0,6.488-2.211,9.298c2.807,2.211,5.499,4.9,7.001,8.104\r\n        c-0.513,2.81-3.714,1.503-5.697,2.016c-3.713-0.513-6.095,3.483-9.896,3.2c-4.508,0.198-9.408-0.312-13.012,3.093\r\n        c-1.7-3.008-3.288-6.013-4.9-9.102c0.707-1.588,1.389-3.289,1.896-5.103c-2.013-0.313-4.11-0.397-6.095-0.907\r\n        c-1.392-1.588-2.409-3.401-3.714-5.104c0.794-1.698,1.503-3.6,1.813-5.411c-5.499-1.506-11.707-2.895-15.193-7.798\r\n        c-0.397-3.484-0.992-7.598,1.587-10.4c2.296-3.005,6.488-2.296,9.691-3.288c0.907-0.992,1.588-2.098,2.495-3.09\r\n        c2.494,0,4.989,0.708,7.001,2.296c2.81,2.098,6.208,2.211,9.496,2.211c2.495-5.301,6.492-9.694,10.801-13.493\r\n        c2.101-3.911,4.507-7.71,6.491-11.509H443.396L443.396,416.494z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 408.377 454.9043)\"\r\n>Pyuthan</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"gulmi\"  class=\"mkhover prov5\"\r\n                    d=\"M473.301,429.902c6.892-0.794,13.808-0.599,20.607-1.105c-0.793,3.486-1.898,7.087-3.996,10.006\r\n        c0.198,0.599,0.708,1.814,0.992,2.41c5.609,0.396,10.289,3.09,15.105,5.813c1.307,2.013,1.814,4.592,3.912,6.01\r\n        c2.893,3.09,7.398,1.304,11.111,1.304c2.892,0.396,5.414,2.211,7.909,3.714c-0.114,2.211-0.709,4.593,0,6.806\r\n        c1.304,2.69,3.798,4.507,5.896,6.604c-4.507,4.989-11.792,3.912-17.688,2.893c-2.299,3.287-4.988,6.604-9.102,7.71\r\n        c-2.013-1.698-3.912-4.193-6.804-3.601c-3.486-0.511-4.79,5.896-8.305,3.713c-0.71-2.098-0.71-4.394-1.393-6.491\r\n        c-2.098-2.604-4.987-4.507-7.001-7.086c-1.588-3.714-3.005-8.391-6.889-10.092c-4.396-0.198-8.504,2.895-13.012,1.899\r\n        c-4.705-1.503-9.896-2.693-13.295-6.604c2.099,0,4.31,0.113,6.404,0.113c0.794-0.794,1.503-1.588,2.296-2.41\r\n        c-1.698-2.296-3.909-4.108-5.414-6.491c-0.195-2.296,1.191-4.394,1.105-6.688c-0.595-1.19-1.304-2.409-2.013-3.603\r\n        c4.192,0.513,7.796-1.813,11.594-3.202c2.692-0.112,5.5-0.512,7.994-1.504L473.301,429.902z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 471.9902 455.7119)\"\r\n>Gulmi</text>\r\n            </g>\r\n        </g>\r\n\r\n        <g id=\"pradesh-6\" (click)=\"showProvincedata(this.$event,6)\" >\r\n                  <g class=\"district\" >\r\n                <path id=\"dolpa\"  class=\"mkhover prov6\"\r\n                    d=\"M435.799,202.507\r\n        c4.507-0.396,8.787-2.494,13.407-2.098c0.511,1.899-0.198,4.507,1.39,5.896c3.203,0.992,6.689,0,10.006,0.51\r\n        c3.997,3.288,7.2,7.398,11.111,10.8c2.098-2.211,4.989-4.706,8.192-3.09c0.907,1.587,1.503,3.203,2.211,4.791\r\n        c1.701-0.708,3.398-1.502,5.103-2.296c2.016,2.013,4.11,3.912,6.491,5.301c-2.098,3.798,0.511,7.597,2.211,10.999\r\n        c2.895-0.114,5.698-0.114,8.504,0.113c0.313,4.309,2.101,8.107,3.997,11.905c2.409,0.51,4.592,1.389,6.604,2.807\r\n        c-0.396,2.211-0.793,4.394-1.307,6.604c1.307,1.502,2.895,2.806,3.802,4.706c0.396,2.41-0.198,4.989,0.595,7.313\r\n        c2.098,3.288,6.604,4.195,8.306,7.909c1.19,2.409,1.19,5.612,3.604,7.2c1.188,0.992,2.891,0.709,4.309,0.907\r\n        c1.304,4.592,6.604,4.11,9.694,6.69c1.104-0.397,2.098-0.907,3.201-1.304c0.906,1.587,1.813,3.203,2.691,4.791\r\n        c-2.806,1.587-5.499,3.487-8.504,4.706c0.198,4.904-1.104,9.609-1.104,14.4c0.111,3.288-3.287,4.985-4.704,7.597\r\n        c-2.298,4.195-6.406,6.888-9.411,10.488c-1.588,1.813-1.814,4.192-2.693,6.293c-1.188,1.304-2.604,2.406-3.996,3.6\r\n        c0,2.608,1.306,5.896-0.596,8.107c-3.602,1.304-7.71,1.304-11.396,2.494c-2.492,1.188-4.395,3.994-7.513,3.601\r\n        c-3.288,0-6.604,0.595-9.893,0.793c-4.195-1.304-8.702-1.502-12.699-3.288c-2.894-1.104-6.01-0.907-8.901-0.992\r\n        c-0.904-1.813-1.389-3.997-3.004-5.301c-4.593-1.19-9.298-2.296-13.604-4.394c-2.409-1.19-4.312-3.288-7.002-3.802\r\n        c-4.312-1.502-8.787,1.589-13.209,0c-3.288-1.104-6.491,0.397-9.694,1.106c-2.41-2.808-5.415-4.989-8.788-6.208\r\n        c0.511-1.701,1.105-3.402,1.701-5.104c-1.588-2.406-3.401-4.705-4.396-7.396c-0.989-2.494-1.698-5.499-4.107-6.889\r\n        c-2.409-0.396-4.904,0.196-7.2-0.598c-1.899-1.188-3.09-3.09-4.791-4.507c-3.713-0.794-7.398-2.41-11.31-2.013\r\n        c-1.701,0.908-3.005,2.296-4.394,3.6c-2.296-0.709-4.507-1.502-6.689-2.604c0.312-3.005,1.389-5.896,1.304-8.986\r\n        c-0.312-3.004,1.389-5.612,2.211-8.305c0.709-2.013,2.098-3.997,4.195-4.706c5.301-0.397,10.914-0.199,15.987-1.899\r\n        c1.586-0.51,2.1-2.211,2.893-3.486c-2.296-2.013-4.792-3.799-6.208-6.605c1.304-4.394,3.288-8.788,7.597-10.999\r\n        c0-5.896-5.812-10.29-4.394-16.214c2.608-0.596,5.188-1.389,7.708-2.211c0.597,1.814,1.104,3.487,1.699,5.301\r\n        c4.396,0.114,8.192-2.409,11.512-5.102c3.484-3.005,3.484-7.994,3.799-12.302c2.409-0.397,4.705-0.992,7.087-1.587\r\n        c1.389-2.807,3.203-5.5,5.414-7.795c-0.709-3.203-1.503-6.406-2.211-9.694c1.587-1.389,3.484-2.807,4.79-4.706\r\n        c0.709-1.502,0.312-3.203,0.396-4.791L435.799,202.507L435.799,202.507z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 448.9585 288.4561)\"\r\n> Dolpa</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"jumla\"  class=\"mkhover prov6\"\r\n                    d=\"M362.296,228.813\r\n        c3.402,1.19,6.803,3.005,10.488,2.41c1.814,2.693,2.608,8.504,6.803,7.597c2.608-2.211,4.791-4.904,7.795-6.69\r\n        c0.113,3.912,0.793,7.71,2.296,11.311c1.304,0.397,2.693,0.907,4.195,1.304c-0.113,1.701-0.312,3.402-0.312,5.103\r\n        c1.701,3.401,3.487,6.803,4.989,10.29c-4.705,2.495-6.292,7.512-8.305,11.991c1.587,3.005,3.487,5.698,5.698,8.306\r\n        c-4.904,2.296-10.403,2.098-15.704,2.211c-4.11,0.907-5.811,5.698-9.694,7.001c-5.811,0-11.509-1.502-17.292-2.296\r\n        c-3.203,3.798-8.107,5.188-11.905,8.192c-3.912,1.502-6.01,5.188-8.901,7.994c-1.814,1.502-0.907,3.997-1.105,6.009\r\n        c-2.693,0.199-5.5,0.313-8.192,0.199c-1.304-2.693-2.608-5.415-3.912-8.107c-0.708-3.6,0.595-7.512-0.708-11.112\r\n        c-2.495-1.814-5.698-2.807-7.994-5.103c-2.409-3.401-4.705-6.888-6.406-10.687c-1.502-4.11-6.406-5.188-8.305-9.014\r\n        c1.899-0.907,3.912-1.587,6.009-2.098c1.19-3.798,3.6-6.803,6.803-9.099c1.105-4.706-0.113-9.695,1.105-14.514\r\n        c3.487-0.992,5.811-3.912,7.597-6.888c3.912,2.098,8.703,2.495,12.501,0c1.899,1.502,4.11,2.608,6.604,2.495\r\n        c-0.113,4.791,3.799,8.504,8.504,8.703c2.607,0.396,4.195-2.098,6.406-3.005c2.891-0.992,5.896-1.502,8.702-2.296\r\n        c0.113-3.487,0.907-6.889,2.211-10.205h0.029V228.813L362.296,228.813z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 332.3496 269.2998)\"\r\n>Jumla</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"mugu\"  class=\"mkhover prov6\"\r\n                    d=\"M385.88,167.386\r\n        c2.806-4.394,6.208-8.787,10.999-11.31c2.806,5.896,5.697,12.302,11.707,15.704c-1.104,2.013-2.013,3.997-3.005,6.01\r\n        c3.401,0.113,6.803,0,10.006-1.105c2.892-1.105,4.396,2.494,6.01,4.309c-2.013,1.19-4.107,2.211-5.694,3.912\r\n        c-0.794,1.389-0.599,3.09-0.907,4.706c2.807-0.113,5.612-0.312,8.391-0.397c1.105,2.807,2.016,6.208,5.301,7.087\r\n        c3.288,0.992,4.51,4.706,5.104,7.795c0.595,3.486-3.402,5.102-5.301,7.398c0.793,3.203,1.587,6.292,2.409,9.496\r\n        c-1.814,2.211-3.288,4.706-5.104,6.888c-2.296,0.992-4.79,1.304-7.087,1.899c-0.313,3.6,0.199,7.71-2.098,10.8\r\n        c-2.409,3.402-6.406,4.904-10.009,6.492c-0.904-1.814-0.709-4.507-2.807-5.301c-2.296,0.198-4.507,0.992-6.803,1.304\r\n        c-2.013-0.312-3.997-0.708-6.01-0.992c-0.907-3.798-1.587-7.597-2.296-11.395c-4.507,0.396-7.398,4.11-10.29,7.086\r\n        c-1.701-2.211-2.807-4.791-4.11-7.2c-0.397-1.502-2.098-1.106-3.203-1.304c-3.487-0.198-6.803-1.899-10.403-1.899\r\n        c-0.992,3.401-1.814,6.888-2.296,10.403c-3.798,0.708-7.909,1.19-10.999,3.912c-2.098,2.098-4.989,0.114-7.086-1.105\r\n        c-2.211-1.389-1.701-4.394-2.211-6.689c-3.005-0.199-5.811-1.19-8.107-3.005c-2.409,1.105-4.904,3.487-7.71,2.013\r\n        c-1.814-0.397-3.713-2.495-5.613-1.19c-2.013,1.587-3.09,4.11-4.706,6.208c-3.912-0.51-7.597-2.296-11.395-3.401\r\n        c-3.005-0.595-6.01,0-9.014,0.51c0.992-3.997-1.389-7.398-2.41-11.112c0.51-3.288,1.814-6.491,2.013-9.893\r\n        c-0.397-2.211-1.304-4.309-2.098-6.406c3.401,0.312,6.888,1.899,10.205,0.794c2.495-1.587,3.402-4.592,5.613-6.492\r\n        c2.891-0.793,5.896-1.105,8.787-2.098c5.301-2.608,8.788-7.512,13.096-11.31c2.41,4.706,5.613,8.901,7.086,13.89\r\n        c0.397,2.211,2.41,3.203,4.309,3.799c4.706-1.304,9.496-1.389,14.202-2.495c0.312-1.814,0.51-3.6,0.793-5.415\r\n        c2.693,0.114,5.499,0.992,7.994-0.113c1.899-0.595,3.713-1.701,5.613-1.814c2.806,0.793,5.414,2.409,8.107,3.487\r\n        c1.19-2.211,3.203-4.309,2.891-6.889c-0.312-3.713-0.113-7.313-0.396-10.913c1.502-0.794,3.089-1.587,4.592-2.41\r\n        c0-4.507,3.402-7.909,3.912-12.302L385.88,167.386z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 353.728 215.46)\"\r\n>Mugu</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"humla\"  class=\"mkhover prov6\"\r\n                    d=\"M274.479,76.11\r\n        c3.402,1.502,7.2,1.899,10.205,4.11c2.494,1.389,4.394,3.798,7.001,4.989c4.791,0.793,9.808,1.502,14.4,2.806\r\n        c3.09,3.005,7.313,3.912,11.396,4.592c1.899,1.587,3.6,3.288,5.414,4.989c2.296-1.304,4.507-3.798,7.398-2.693\r\n        c2.608,0.992,4.195-1.814,6.009-3.09c2.098,1.899,4.11,4.309,4.195,7.313c-0.51,4.11-2.013,8.107-3.798,11.792\r\n        c3.798,3.089,6.69,7.001,10.687,9.808c0.794,1.587,1.701,3.203,2.013,4.904c-2.495,3.912-3.912,8.504-4.195,13.096\r\n        c3.6,1.105,7.313,0.312,10.914-0.198c3.203-0.199,4.989,2.891,6.888,4.989c1.899-0.113,3.713-0.113,5.612-0.198\r\n        c1.105,2.211,2.296,4.309,3.288,6.491c1.105-0.992,2.098-1.899,3.203-2.806c3.09,3.004,6.605,5.612,10.403,7.512\r\n        c2.211,0.992,3.288,3.288,4.592,5.188c-2.211,2.296-4.394,4.592-6.605,6.803c1.389,4.791-3.6,7.597-3.713,12.104\r\n        c-1.389,0.709-2.806,1.389-4.195,2.098c0.199,3.798-0.708,7.71,0.51,11.396c0.709,2.098-0.992,3.912-1.701,5.811\r\n        c-2.495-1.19-4.791-2.495-7.512-3.203c-2.693,0.312-5.188,1.814-7.994,2.296c-2.211,0-4.309-0.397-6.491-0.595\r\n        c-0.794,2.013-1.389,3.997-2.013,6.009c-4.11,0.596-8.306,0.992-12.388,1.814c-1.587-0.397-2.409-1.899-2.806-3.402\r\n        c-1.304-4.309-4.11-7.994-6.094-11.99c-0.596-1.899-2.892-1.701-4.394-1.304c-2.012,2.098-3.486,4.592-5.698,6.491\r\n        c-4.195,3.912-9.893,5.698-15.59,6.208c-1.587,2.41-2.806,5.414-5.499,6.888c-3.289,0-6.69-1.701-9.893-0.113\r\n        c-3.288,1.587-7.086-0.397-9.014-3.288c-1.389-5.103,0.708-10.29,2.891-14.91c2.296-4.706,2.608-10.091,4.989-14.797\r\n        c1.701-1.191,3.997-1.191,5.499-2.693c2.013-3.203,1.389-7.002,1.19-10.602c-3.004-0.51-6.009-0.794-8.787-1.587\r\n        c-2.211-1.191-3.288-3.6-4.791-5.415c-8.192-0.992-16.299,1.502-24.491,1.899c-1.106,2.296-1.899,6.406-5.415,5.698\r\n        c-2.098,0.198-2.494-2.098-3.004-3.6c-1.587-3.912,3.288-7.2,1.587-11.112c-0.51-3.912-4.309-5.896-7.795-6.293\r\n        c-2.693-0.198-5.613,1.389-7.994-0.113c-2.806-1.701-5.698-3.203-8.788-4.195c0.595-3.09,1.105-6.208,1.502-9.298\r\n        c0.51-2.891-1.587-5.187-2.608-7.597c2.693-1.19,5.414-0.198,7.909,0.992c3.203-3.288,6.803-6.208,10.602-8.703\r\n        c0.113-3.6,0.595-7.2,2.608-10.205c2.693-4.791,0.198-9.893-0.595-14.797c1.502-0.992,4.507-0.992,4.11-3.401\r\n        c-1.105-1.389-2.41-2.608-3.6-3.798c0.51-0.596,1.502-1.587,1.899-2.211c3.997,1.106,6.208,4.394,8.788,7.2\r\n        c3.09,0.907,6.293,1.587,9.496,2.41c0.198-2.892,0.595-5.896,1.502-8.703c1.701,0.708,3.288,1.701,5.188,2.013\r\n        c2.098,0.198,2.494-2.495,3.6-3.798L274.479,76.11L274.479,76.11z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 290.0229 148.9492)\"\r\n>Humla</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"rukumwest\"\r\n                    class=\"mkhover prov6\"\r\n                    d=\"M392.287,313.2c4.791-0.397,9.411,1.304,14.088,1.389c2.296,4.11,2.891,9.018,6.491,12.388c-0.794,1.7-1.503,3.288-2.211,4.988c3.313,2.467,7.285,4.025,9.836,7.428l-6.321,47.366c-0.368-0.025-0.737-0.057-1.104,0c-2.895,0.709-5.304,2.693-8.192,3.604c-2.013,0.396-3.401-1.503-4.903-2.495c-3.399-3.09-7.909-4.592-11.509-7.398c-2.296-0.312-4.592-0.11-6.888-0.195c-0.907,1.588-1.899,3.285-2.892,4.901c-3.713,0.313-9.099,1.304-11.112-2.892c-1.389-4.11-4.394-8.589-9.212-8.787c-6.293-0.907-13.606-1.105-18-6.406c0.51-2.296,0.793-4.593,1.814-6.804c3.09-3.603,8.504-2.607,12.189-5.188c0.397-3.908-1.19-8.589,1.899-11.707c2.495-0.312,5.102,0,7.597-0.312c2.013-1.701,2.693-4.592,5.103-6.095c3.288-2.211,6.888-3.714,10.205-5.813c2.41-1.503,6.491-1.813,6.888-5.301c0.595-4.706,1.587-10.205,6.208-12.699L392.287,313.2z\">\r\n                </path><text class=\"maptext\" transform=\"matrix(1 0 0 1 397.8335 366.459)\"\r\n x=\"-34\">Rukum(W)</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"jajarkot\"  class=\"mkhover prov6\" d=\"M342.283,297.212\r\n        c3.714-3.203,8.589-4.507,12.189-7.795c6.094,0.708,12.188,2.494,18.396,1.587c-0.595,2.012-1.502,3.912-1.304,6.009\r\n        c0.198,3.487-0.992,6.803-1.389,10.29c2.892,1.588,5.896,3.714,9.411,3.487c2.211-1.305,3.997-4.396,7.001-3.402\r\n        c3.005,0.907,6.491,1.105,8.901,3.402c-2.693,0.595-5.499,1.104-7.2,3.401c-3.203,3.483-3.089,8.589-4.11,12.896\r\n        c-4.904,1.389-8.788,4.705-13.408,6.803c-3.288,1.503-5.811,4.312-7.398,7.601c-3.203,0.396-7.71-1.106-9.609,2.296\r\n        c-1.701,3.486-0.708,7.512-1.502,11.31c-1.899-0.11-4.195-1.188-5.896,0.313c-2.296,1.813-6.094,2.806-6.491,6.293\r\n        c-0.51,2.891-1.701,5.499-3.6,7.795c-3.005-1.389-6.094-2.693-9.496-2.013c-3.486,0.794-3.713-3.716-4.904-5.896\r\n        c-3.912,0.709-7.909,0.992-11.906,1.588c-4.394,0.907-8.787-0.396-13.096-1.188c-1.389-1.503-1.701-3.714-2.41-5.612\r\n        c-0.793-2.495-2.693-4.508-4.195-6.604c2.013-0.396,4.195-0.596,6.208-1.305c2.409-2.098,3.997-4.903,6.009-7.396\r\n        c-1.304-2.297-3.004-4.509-3.713-7.2c0-2.607,0.595-5.188,1.304-7.599c1.304-2.69,3.6-4.508,5.188-6.889\r\n        c0.51-2.691,0.113-5.5,0.396-8.306c0.794-1.19,2.41-1.393,3.487-2.1c3.005-1.39,5.103-3.913,7.2-6.292\r\n        c0.907,0.708,1.899,1.389,2.693,2.211c1.105,1.899,0.793,4.989,3.401,5.811c3.401,1.305,7.398,0.794,10.687-0.708\r\n        c0.113-1.503,0.113-3.09,0.312-4.592c2.494-3.09,4.791-6.888,8.787-8.192h0.057V297.212L342.283,297.212z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 314.4785 338.4004)\"\r\n>Jajarkot</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"kalikot\"\r\n                    class=\"mkhover prov6\" d=\"M291.09,236.891\r\n        c2.608-0.396,5.102-1.389,7.795-1.19c3.005,0.794,5.896,2.013,8.788,3.09c-0.595,4.904,0.199,9.893-0.595,14.797\r\n        c-3.288,2.013-5.613,4.904-6.491,8.702c-2.013,0.51-4.11,0.992-6.095,1.701c0.312,1.389,0.51,3.004,1.105,4.394\r\n        c1.502,2.495,5.103,3.09,6.208,5.896c1.701,4.11,4.195,7.71,6.604,11.31c2.41,2.892,6.01,4.394,9.213,6.208\r\n        c-0.113,2.608,0.312,5.414-0.51,7.994c-2.098,2.296-4.309,4.592-6.69,6.604c-2.098,2.098-5.188,1.188-7.71,1.188\r\n        c-3.09-0.199-6.01,1.304-8.788,2.409c-2.693-2.608-5.102-5.613-8.391-7.512c-4.904-0.51-11.31-1.304-12.699-7.086\r\n        c-3.089,0.708-6.208,1.105-9.411,1.304c-3.09,0.397-5.811-1.701-8.589-2.891c0-4.309,3.997-7.2,3.912-11.594\r\n        c-2.296,0-4.989,0.907-6.803-0.992c-2.098-2.296-6.69-2.608-7.001-6.293c-0.595-3.09,0.907-6.009,1.304-8.901\r\n        c0-2.494-1.587-5.301,0.397-7.398c4.309-6.094,10.999-10.913,18.51-12.188c0.793,2.693,1.701,5.414,2.806,7.994\r\n        c4.309-0.114,8.589-0.709,12.897-1.304c4.592-4.394,8.504-10.006,10.29-16.214L291.09,236.891z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 262.0142 281.6992)\"\r\n>Kalikot</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"dailekh\"\r\n                    class=\"mkhover prov6\" d=\"M245.48,289.389\r\n        c4.195-1.106,7.994-3.289,11.707-5.613c-2.41,3.401-5.301,7.71-3.005,11.707c2.892,1.899,6.406,3.997,10.006,3.005\r\n        c2.41-0.312,4.791-0.595,7.086-0.992c2.296,4.989,8.391,6.208,13.408,6.604c3.288,1.701,5.499,5.103,8.305,7.398\r\n        c3.289-0.794,6.605-1.899,9.893-2.494c1.105,3.005,1.105,6.293,0.51,9.411c-1.304,2.607-3.487,4.592-4.791,7.086\r\n        c-0.907,2.693-1.304,5.613-1.19,8.504c-0.113,2.693,1.899,4.791,3.203,7.087c-1.587,1.899-3.005,3.912-4.706,5.698\r\n        c-2.211,1.105-4.989,0.396-6.888,2.211c-1.814,1.105-1.899,3.401-2.608,5.301c-0.794,3.603-3.402,6.406-5.188,9.496\r\n        c-5.499-2.69-10.403-6.804-16.611-7.598c-2.807-2.296-5.698-4.195-8.901-5.896c-3.6-1.813-1.899-6.293-1.587-9.298\r\n        c0.708-2.098-1.105-3.6-1.899-5.188c-3.004-4.396-3.288-10.094-7.001-14.003c-3.288-3.486-5.499-7.795-8.787-11.197\r\n        c-3.09-3.401-4.592-8.787-1.389-12.699c2.806-3.487,5.896-7.512,10.488-8.504L245.48,289.389z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 257.9985 333.3672)\"\r\n>Dailekh</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"salyan\"  class=\"mkhover prov6\"\r\n                    d=\"M313.285,370.488\r\n        c2.409-2.494,4.706-4.989,6.803-7.795c1.389,2.098,1.814,4.985,3.997,6.488c3.288,0.198,6.605-0.313,9.694,0.992\r\n        c2.098,1.105,4.195-0.114,6.095-0.992c5.301,5.612,13.606,4.595,20.495,6.406c2.409,1.587,4.507,3.798,5.414,6.689\r\n        c0.907,2.406,3.203,3.799,5.102,5.609c-1.19,2.41-2.211,4.989-3.6,7.398c-2.013,2.606-4.507,4.593-7.002,6.604\r\n        c1.389,2.692,2.693,5.414,4.394,7.993c-1.105,1.814-2.806,3.714-2.608,6.011c0.312,4.109,3.997,7.002,4.309,10.997\r\n        c-0.907,3.486-2.693,6.807-3.09,10.403c-1.899-1.701-3.912-3.203-6.094-4.394c-2.211-1.19-3.005-3.716-4.989-5.104\r\n        c-2.806-1.104-5.811,0.396-8.702-0.51c-4.989-1.392-10.403-0.709-15.392-2.41c-3.487-1.502-7.087,0.709-10.205,2.013\r\n        c-3.288,3.8-5.612,8.192-6.208,13.21c-4.989-3.911-10.205-7.598-14.4-12.388c-3.289-1.898-6.492-3.997-9.213-6.804\r\n        c-4.195-2.692-8.787-4.705-13.011-7.397c-0.114-4.31,4.11-6.604,5.811-10.205c3.09,0.907,6.208,1.503,9.298,2.607\r\n        c2.296,2.098,2.693,6.208,6.208,6.604c4.394,1.502,7.71-2.493,11.509-3.911c-0.312-4.109-0.114-8.191-0.312-12.188\r\n        c1.304-2.211,3.997-2.806,6.094-3.798c0.907-3.203,2.296-6.208,2.013-9.609c0.312-4.508-5.414-7.993-2.409-12.501L313.285,370.488\r\n        L313.285,370.488z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 317.6821 410.3721)\"\r\n>Salyan</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"surkhet\"\r\n                    class=\"mkhover prov6\" d=\"M173.282,309.09\r\n        c4.195-2.494,9.213-3.6,14.088-2.494c4.904,3.401,8.504,9.102,14.712,10.402c4.592,0.709,9.496,0.511,13.89-1.389\r\n        c2.495,2.098,4.791,4.901,8.107,5.896c2.211-0.596,3.997-2.211,6.095-3.203c2.891,0.396,7.001,1.502,7.398,4.988\r\n        c0.708,3.997,3.004,7.512,5.499,10.602c2.41,3.008,2.098,7.002,2.41,10.604c2.012,0.313,4.11,0.596,6.094,0.794\r\n        c0.312,1.701,0.312,3.486,0.992,5.103c1.701,1.814,4.11,2.607,6.293,3.802c1.899,0.988,3.09,3.089,5.301,3.713\r\n        c6.604,0.905,11.594,5.694,17.603,8.189c3.288-4.192,6.095-8.788,7.313-14.202c3.487,2.81,4.592,7.2,5.811,11.313\r\n        c3.401,0.794,6.888,1.389,10.29,2.409c3.713-0.198,7.398-1.392,11.197-1.307c-2.013,2.608-5.415,4.312-5.5,7.909\r\n        c-1.19,3.486,1.899,6.097,2.806,9.212c1.304,3.288-0.595,6.69-1.389,9.896c-2.608,0.595-5.811,1.813-6.406,4.79\r\n        c-0.199,3.799-0.794,7.597-0.312,11.396c-3.004,1.19-5.698,5.188-9.212,3.288c-2.892-0.907-2.41-4.989-4.989-6.293\r\n        c-3.288-1.188-6.689-2.604-10.29-2.69c-2.296-0.113-3.402,3.399-5.811,2.69c-4.11-0.907-6.095-5.103-9.609-7.002\r\n        c-7.313-3.911-12.303-10.602-18.595-15.505c-4.592-4.593-10.999-7.002-14.911-12.303c-3.713-4.11-8.39-7.087-13.493-9.298\r\n        c-1.899-2.494-3.6-5.104-5.698-7.313c-2.608-5.811-2.693-12.387-6.406-17.688c-0.113-4.596-1.304-9.103-3.713-13.1h-3.005\r\n        c-0.113,2.211-0.198,4.396-0.312,6.605c-1.502-0.992-3.005-1.899-4.507-2.895c0.114-1.304,0.312-2.605,0.51-3.912\r\n        c-0.907-0.51-1.814-1.104-2.693-1.502c-1.814,0.396-3.09,2.016-4.592,3.093c-2.807-2.608-6.407-4.195-8.589-7.515\r\n        c-1.899-2.495-4.309-4.706-6.406-7.087L173.282,309.09L173.282,309.09z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 249.1646 376.8096)\"\r\n>Surkhet</text>\r\n            </g>\r\n        </g>\r\n\r\n        <g id=\"pradesh-7\" (click)=\"showProvincedata(this.$event,7)\">\r\n                  <g class=\"district\" >\r\n                <path id=\"kailali\"\r\n                    class=\"mkhover prov7\" d=\"M110.778,284.513c1.701,0,3.402-0.113,5.188,0c3.203,2.211,6.009,5.103,8.306,8.192\r\n        c1.19,1.899,3.6,1.701,5.499,2.296c2.892,0.907,5.811,1.814,8.703,2.608c2.098,2.211,4.507,3.997,6.689,6.208\r\n        c0.907,1.899,1.304,4,2.013,6.01c1.19,0,2.296-0.114,3.401-0.114c1.105-2.296,2.211-4.507,3.487-6.689\r\n        c2.296,1.502,2.891,4.11,3.713,6.491c4.394,1.19,9.212,0.198,13.691,1.19c2.693,1.813,4.989,4.309,7.001,6.889\r\n        c2.296,3.713,6.491,5.301,9.496,8.309c1.587-0.907,3.09-1.899,4.706-2.81c0.312,1.392,0.51,2.895,0.793,4.312\r\n        c2.41,1.39,4.904,2.892,7.71,3.484c0.113-2.212,0.312-4.395,0.51-6.604c1.899,3.484,2.495,7.396,2.891,11.196\r\n        c1.389,3.006,3.402,5.812,3.799,9.214c0.51,4.192,3.089,7.99,3.203,12.188c-1.701,3.09-4.791,4.989-7.2,7.398\r\n        c-6.406,4.394-9.893,11.509-15.194,16.895c-2.296,2.409-5.414,3.799-7.71,6.208c-1.389,2.014-2.296,4.312-3.713,6.406\r\n        c-0.992-0.198-2.013-0.396-3.005-0.596c-0.992-2.211-2.296-4.312-3.6-6.406c-4.791-0.396-9.099-2.692-13.691-3.713\r\n        c-0.113-1.899-0.113-3.799-0.198-5.698c-2.608-1.105-5.414-1.19-8.192-0.708c-1.899-0.992-3.487-2.296-5.301-3.402\r\n        c-3.289-2.097-4.706-6.009-7.71-8.305c-2.211-0.907-4.791-0.396-7.2-0.709c-0.907-3.713-2.098-7.313-3.798-10.8\r\n        c-2.211,0-4.507,0.111-6.689,0c-1.587-0.598-2.807-1.814-4.195-2.693c0.113-1.389,0.198-2.891,0.312-4.394\r\n        c-1.899-0.794-3.912-1.392-5.698-2.409c-1.389-1.503,0.397-3.401,0.596-5.104c0.198-2.013-0.312-3.997-0.397-5.896\r\n        c0.312-6.406-6.208-10.998-4.706-17.489c0.312-4.989,4.791-7.994,6.208-12.501c0-2.494-2.013-4.904-0.992-7.512\r\n        c1.502-3.486,0.312-7.313,1.304-10.999L110.778,284.513z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 128.3203 342.001)\"\r\n>Kailali</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"kanchanpur\"\r\n                    class=\"mkhover prov7\" d=\"M54,280.999c1.105-3.6,4.195-5.811,6.491-8.504c1.587,2.806,2.211,6.094,2.608,9.297\r\n        c0.113,2.013,2.098,2.693,3.6,3.402c3.487,1.701,7.398,0.708,11.112,1.304c3.912,0.794,8.192,0.794,11.792,2.806\r\n        c2.807,1.502,5.811,2.495,8.901,3.289c1.814,1.389,3.401,3.401,5.811,4.11c3.401,0.51,5.698,5.188,3.401,7.994\r\n        c-2.693,3.914-5.414,8.192-5.414,13.209c0.595,4.107,2.296,7.906,4.507,11.396c1.19,4.904,0.708,10.092-0.595,14.91\r\n        c-1.587,0.794-3.203,1.588-4.904,2.409c-0.396,5.698,0.595,11.396,1.105,17.093c-1.814-1.502-4.11-2.692-5.187-4.903\r\n        c-1.191-2.296-2.41-4.901-4.904-6.095c-2.693-1.813-6.094-0.709-9.099-0.312c-1.899-2.608-4.507-4.596-6.604-6.892\r\n        c-0.51-1.587-0.794-3.288-1.105-4.985c-1.899-1.105-3.912-2.215-5.896-3.203c-0.312-1.899-0.51-3.802-0.907-5.698\r\n        c-5.188-0.51-9.014-4.396-13.209-7.086c-2.608-1.701-3.798-5.188-7.087-5.813c-1.701-0.51-3.486-0.709-5.187-0.989\r\n        c-0.794-3.802-1.899-7.711-1.502-11.597c0.793-2.296,1.899-4.309,3.09-6.292c1.899-3.401,6.094-4.705,8.192-7.994\r\n        c0.992-3.486-0.198-7.313,0.992-10.8v-0.056L54,280.999L54,280.999z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 42.6006 310.001)\"\r\n>Kanchanpur</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"doti\"  class=\"mkhover prov7\"\r\n                    d=\"M159.477,234.595c2.098-1.389,4.394-2.608,6.69-3.912c0.51,2.296,0.992,4.592,1.587,6.888\r\n        c4.904,0.312,9.496-1.304,14.202-2.296c6.094,1.502,11.905,4.11,18.312,4.309c-1.105,4.195-2.806,8.192-4.309,12.303\r\n        c-1.899,3.203-3.798,6.491-5.414,9.893c0.992,1.389,2.013,2.807,3.005,4.309c-0.992,3.004-3.997,3.912-6.69,4.989\r\n        c-1.899-1.19-3.912-2.41-5.896-3.6c-0.51,0.709-1.105,1.502-1.587,2.211c3.6,3.6,3.486,9.213,6.888,13.011\r\n        c4.11,4.706,7.71,10.687,7.512,17.093c0.113,2.807-2.806,4.195-5.103,4.791c-3.486,0.312-7.2-0.992-10.602,0.51\r\n        c-3.6,0.907-6.491,4.312-10.488,3.401c-2.693-0.51-5.612,0.313-8.192-0.708c-1.19-2.693-2.296-5.613-5.301-6.889\r\n        c-2.211,1.814-3.401,4.394-4.507,6.889c-2.607,0-1.814-3.714-3.203-5.301c-2.296-2.296-4.705-4.394-7.086-6.491\r\n        c-4.309-1.19-8.504-2.495-12.699-3.6c-2.296-2.296-4.11-5.188-6.803-7.2c-2.608-2.41-6.406-2.693-9.212-4.904\r\n        c5.102-2.494,7.2-8.192,11.594-11.395c4.592-0.397,9.212-0.198,13.493-2.098c0.595-1.899,0.992-3.713,1.502-5.613\r\n        c1.814-1.105,3.713-2.098,5.613-3.203c-0.397-2.409-0.992-4.706-1.587-7.001c1.587-0.397,3.203-0.793,4.791-1.304\r\n        c-0.312-2.693-2.693-5.698-0.595-8.192c3.912-1.389,8.702,0,11.99-2.806c0.794-1.389,1.304-2.806,2.098-4.11v0.026\r\n        L159.477,234.595L159.477,234.595z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 143.3164 274.001)\"\r\n>Doti</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"achham\"  class=\"mkhover prov7\"\r\n                    d=\"M201.997,240.69c2.211,3.401,5.896,4.791,9.609,5.697c0.595,2.693,1.389,5.5,2.409,8.107\r\n        c2.608-0.114,4.791-1.191,7.001-2.495c1.899,1.701,3.487,3.713,5.613,5.188c4.195,0.992,8.504,1.899,12.897,2.409\r\n        c2.608,1.105,5.896,3.09,4.904,6.406c-0.907,3.997-2.013,8.504-0.114,12.388c2.892,2.013,6.01,3.486,8.589,5.896\r\n        c-3.487,2.495-7.795,3.288-11.792,4.791c-4.309,4.11-9.808,8.391-9.808,14.91c0.51,3.401,2.608,6.293,4.904,8.79\r\n        c2.892,3.2,4.791,7.087,7.909,10.202c3.6,3.997,3.798,9.694,6.888,14.091c0.708,1.39,2.098,2.69,1.587,4.508\r\n        c-1.19,1.7-3.288,1.7-5.103,1.896c-0.396-3.996-0.51-8.504-3.486-11.594c-2.495-2.806-4.11-6.207-4.989-9.808\r\n        c-0.51-3.288-4.11-4.312-6.803-5.304c-3.09-1.304-5.613,1.701-8.192,2.895c-2.806-1.814-5.103-4.312-8.107-5.896\r\n        c-3.288,0.599-6.406,2.41-9.893,1.899c-6.69,0.396-11.509-4.989-15.789-9.411c2.013-1.389,4.989-2.494,5.188-5.301\r\n        c0.708-7.512-3.401-14.711-8.306-20.098c-2.098-2.296-2.608-5.414-3.486-8.305c3.912,0.312,7.795-0.992,10.8-3.288\r\n        c0.794-2.892-0.595-5.613-1.304-8.306c0.992-3.912,4.195-6.69,5.301-10.602c0.992-3.288,2.296-6.491,3.6-9.694L201.997,240.69z\">\r\n                </path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 197.9937 281.6992)\"\r\n>Achham</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"dadeldhura\"\r\n                    class=\"mkhover prov7\" d=\"M103.776,232.81c3.713-1.587,6.604,1.899,10.205,1.814c3.6,0.113,7.087,0.708,10.687,0.708\r\n        c3.289-1.701,6.407-4.309,10.29-3.798c5.301-0.113,8.391,4.592,12.5,7.2c-1.587,0.992-3.486,1.814-4.195,3.713\r\n        c-0.397,1.899,0.113,3.912,0.396,5.811c-1.502,0.708-3.004,1.389-4.394,2.098c0.595,2.211,1.19,4.507,1.701,6.69\r\n        c-1.814,0.992-3.6,2.012-5.499,2.891c-0.199,1.701-0.51,3.288-0.709,4.989c-3.713,1.814-7.71,2.296-11.707,2.41\r\n        c-2.891,0.113-4.309,2.891-6.292,4.394c-2.892,2.098-4.195,5.613-7.512,7.087c0.397,2.608,0.397,5.187-0.595,7.71\r\n        c-1.304,3.005,1.587,7.087-1.814,9.099c-4.195,1.105-5.103-4.791-8.901-4.904c-4.394-0.397-7.909-3.486-12.189-4.592\r\n        c-4.195-0.907-8.504-1.814-12.813-1.502c-2.608,0.113-5.698,0.113-7.313-2.211c-1.701-2.806-2.013-6.208-2.806-9.297\r\n        c2.098,0.51,3.997,1.105,6.094,1.19c1.701-0.992,4.706-1.814,4.507-4.309c-0.114-3.798-1.389-7.398-1.814-11.112\r\n        c2.098,0.793,4.195,1.587,6.406,2.296c0.397-5.414,1.899-10.687,4.592-15.392c4.507-2.891,8.702-6.293,13.805-8.305\r\n        c1.899-2.296,4.195-4.394,7.313-4.706L103.776,232.81z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 78.8989 262.001)\"\r\n>Dadeldura</text>\r\n            </g>\r\n                  <g class=\"district\" >\r\n                <path id=\"bajura\"  class=\"mkhover prov7\"\r\n                    d=\"M270.68,155.707c2.608-0.595,5.301-0.51,7.994-0.51c1.389,1.701,2.608,3.487,4.309,4.904\r\n            c2.892,1.304,6.208,1.389,9.298,2.098c0.397,3.005-0.113,6.01-1.587,8.589c-1.701,0.396-3.401,0.595-4.989,0.907\r\n            c-1.389,3.713-2.608,7.512-3.6,11.311c-1.19,5.188-4.706,9.609-4.904,14.995c-0.114,2.211-0.199,4.394,0.312,6.491\r\n            c2.41,3.912,7.087,4.706,11.112,5.896c2.296,4.507-0.708,9.1-1.304,13.606c0.396,2.608,2.012,4.706,2.891,7.2\r\n            c0.113,2.806-0.907,5.499-1.814,8.192c-1.502,4.706-5.301,8.107-7.795,12.189c-3.997,0.397-7.994,1.19-11.991,1.105\r\n            c-0.595-2.494-1.19-4.989-1.899-7.512c-6.69-1.19-12.303,3.203-17.207,7.398c-2.296,1.587-3.798,4.11-5.301,6.491\r\n            c-5.612-1.304-11.31-1.814-16.809-3.486c-2.211-1.814-4.195-3.912-6.407-5.698c-1.899,0.992-3.798,2.211-5.811,3.203\r\n            c-1.105-2.693-1.304-5.896-2.891-8.306c-2.211-0.907-4.507-1.502-6.69-2.296c-0.113-0.51-0.312-1.587-0.396-2.211\r\n            c4.904-2.41,10.403-3.912,14.91-7.087c1.389-2.012,1.701-4.791,3.997-6.094c2.296-1.701,4.309-3.713,5.811-6.208\r\n            s4.309-3.713,6.491-5.499c2.807-3.713,3.799-8.306,5.415-12.614c2.494-0.51,5.102-0.708,7.512-1.587\r\n            c4.592-3.6,6.094-9.893,4.309-15.307c2.296-0.397,4.592-0.907,6.888-1.502c-0.595-6.094,1.389-12.104,0.397-18.198\r\n            c-1.19-2.296-3.6-3.6-5.5-5.188c0.312-1.304,0.596-2.608,0.794-3.912c4.791-0.595,9.694-0.199,14.513-1.389L270.68,155.707z\">\r\n                </path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 246.1265 226.001)\"\r\n>Bajura</text>\r\n            </g>\r\n\r\n\r\n                  <g class=\"district\" >\r\n                <path id=\"baitadi\"\r\n                    class=\"mkhover prov7\"\r\n                    d=\"M110.693,196.895c3.09-4.989,8.901-6.491,13.493-9.808c3.6,0.199,7.086,1.814,10.8,1.701\r\n        c5.414-0.114,10.687-1.899,16.214-1.814c-0.709,2.013-1.701,3.912-2.098,6.095c0.113,2.296,1.105,4.507,1.19,6.888\r\n        c-0.312,2.608-0.907,5.102-1.389,7.597c-1.502,0.708-3.004,1.389-4.507,2.098v2.693c2.806,1.389,5.187,3.6,5.896,6.803\r\n        c2.211,0.397,4.706,0.595,6.689,1.814c3.09,2.495,4.309,6.492,6.095,10.006c-1.899,0.794-3.713,1.701-5.613,2.495\r\n        c-0.312,1.389-0.708,2.806-0.992,4.195c-1.502,0.51-3.005,1.105-4.592,1.502c-5.414-1.701-8.703-7.313-14.287-8.788\r\n        c-3.798-0.708-7.909-0.113-11.197,2.098c-2.41,1.814-5.613,0.907-8.391,0.992c-3.6,0.113-7.001-0.992-10.29-2.211\r\n        c-4.989-0.595-9.808,1.701-13.096,5.188c-4.706,2.012-8.391,5.811-13.209,7.512c-1.587-2.41-3.09-5.103-3.487-8.107\r\n        c-0.51-4.309-4.195-7.71-3.713-12.189c2.098-0.396,4.195-0.793,6.208-1.105c0.198-3.997,2.693-7.086,6.009-9.212\r\n        c3.487-1.814,3.6-6.208,6.803-8.192c3.288-2.41,4.989-6.69,9.014-8.107c2.806-0.992,5.698-0.312,8.504-0.198L110.693,196.895z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 106.7822 212.001)\"\r\n>Baitadi</text>\r\n            </g>\r\n            <g class=\"district\" >\r\n                <path id=\"darchula\"\r\n                    class=\"mkhover prov7\" d=\"M177.392,102.387c3.6-0.396,7.398-0.312,10.999,0.199c2.098,2.494,2.296,6.009,3.09,9.014\r\n        c1.304,2.891,3.6,5.102,4.791,7.909c0.312,3.09,0.595,6.208,2.608,8.589c-0.596,1.304-1.191,2.693-1.899,3.912\r\n        c-2.41,2.892-6.888,3.798-8.306,7.597c-1.899,3.713-3.713,7.398-4.904,11.395c0.198,2.608,2.892,4.394,3.288,7.087\r\n        c0.199,2.098,0.114,4.309,0.397,6.491c0.992,2.409,2.892,4.309,4.309,6.406c-1.304,2.891-1.587,6.69-4.195,8.788\r\n        c-3.288,0.992-6.604,1.701-9.893,2.693c-4.394-0.709-8.788,0.51-12.699,2.494c-2.693,1.701-5.613,3.713-9.014,3.798\r\n        c-2.693-0.793-4.904-3.713-7.994-3.203c-3.713,0.397-7.398,1.191-11.112,1.588c-4.394,0.595-8.504-1.389-12.897-1.588\r\n        c-2.806,1.191-4.989,3.487-7.994,4.507c-2.693,0.992-4.507,3.288-6.208,5.499c-3.09-0.396-6.208-0.198-9.297,0.199\r\n        c-0.199-2.013,0.312-4.394-1.502-5.811c-3.005-2.495-3.288-6.605-4.309-10.205c-0.709-2.296,1.701-3.714,2.891-5.301\r\n        c1.701-1.588,1.814-4.195,3.487-5.812c3.713-1.389,7.597,0.511,11.395-0.312c2.608-1.19,4.507-3.401,6.888-4.989\r\n        c4.592-2.607,6.01-8.305,7.002-13.096c0.312-3.005,3.089-4.904,5.697-5.896c1.587,0.113,3.289,0.51,4.904,0.595\r\n        c2.693,0.595,4.791-1.814,6.803-3.203c3.487-2.495,5.613-6.406,8.107-9.893c5.102-4.989,10.687-9.609,17.49-12.104\r\n        c-0.113-2.806-2.098-5.896-0.113-8.391c2.296-3.288,3.713-7.994,8.107-9.014L177.392,102.387z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 132.9424 165.001)\">Darchula</text>\r\n            </g>\r\n           <g class=\"district\" >\r\n                <path id=\"bajhang\"\r\n                    class=\"mkhover prov7\" d=\"M190.885,138.897c1.588-2.012,3.997-3.09,6.095-4.592c3.203,3.288,6.888,7.086,11.905,6.406\r\n        c3.09-0.709,6.01,0.51,8.986,1.304c1.105-1.814,2.012-3.713,3.004-5.612c3.6,1.502,7.313,2.806,10.602,5.102\r\n        c3.6,2.892,8.504-0.907,12.302,1.587c2.693,0.992,4.592,4.706,2.892,7.313c-2.41,3.798-1.502,8.589,0.708,12.189\r\n        c4.195,0,9.099-0.312,11.792,3.6c1.587,5.811-1.701,11.395-0.511,17.206c-2.296,0.312-4.507,0.51-6.689,0.794\r\n        c0.397,4.394,1.701,9.496-1.502,13.294c-1.899,3.203-5.896,2.693-8.901,3.997c-3.486,2.409-2.693,7.512-5.414,10.602\r\n        c-1.389,3.6-5.811,4.195-7.398,7.597c-2.013,3.713-5.499,6.293-9.298,7.909c0,1.389,0.114,2.693,0.114,4.11\r\n        c-4.791,2.409-9.496,5.102-14.599,6.604c-7.994,0.312-15.505-2.608-22.989-4.791c-4.195,1.105-8.391,2.013-12.813,2.41\r\n        c-0.596-2.41-0.709-5.5-3.289-6.69c-3.486-2.013-4.507-6.094-7.313-8.788c-1.814-2.012-4.592-2.098-7.087-2.693\r\n        c-0.907-3.004-3.401-4.904-5.896-6.689c1.502-0.595,3.005-1.191,4.507-1.701c0.596-4.195,2.296-8.391,1.191-12.699\r\n        c-0.709-2.211-0.397-4.592-0.113-6.803c2.607,0,5.187,0.708,7.795,0c4.11-0.794,7.001-4.195,11.112-5.103\r\n        c2.495-0.907,5.103-0.312,7.71-0.312c2.693-0.793,5.301-2.012,8.192-2.409c4.507-0.51,5.698-5.698,6.803-9.298\r\n        c1.19-4.195-4.394-6.491-3.997-10.687c0.312-3.798-0.397-7.71-3.487-10.205c1.587-4.394,3.203-8.788,5.613-12.898L190.885,138.897\r\n        z\"></path>\r\n                <text class=\"maptext\" transform=\"matrix(1 0 0 1 178.3711 202.001)\"\r\n>Bajhang</text>\r\n            </g>\r\n        </g>\r\n\r\n\r\n    </svg>\r\n</div>\r\n  <div *ngIf=\"!showstuff\">\r\n    <div class=\"loading\">Loading&#8230;</div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div id=\"selectIt\"  style=\"display: none\" (mouseleave)=\"hideme(this.$event)\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      {{this.provinceName}}\r\n    </div>\r\n    <ul class=\"list-group list-group-flush\">\r\n      <li class=\"list-group-item\">Total tested:{{this.total_tested}}</li>\r\n      <li class=\"list-group-item\">Total Positive:{{this.total_positive}}</li>\r\n      <li class=\"list-group-item\">Total Negative:{{this.total_negative}}</li>\r\n      <li class=\"list-group-item\">Total in Isolation:{{this.total_in_isolation}}</li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/breadcrumb/breadcrumb.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/breadcrumb/breadcrumb.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Bread crumb and right sidebar toggle -->\r\n<!-- ============================================================== -->\r\n<!-- ============================================================== -->\r\n<!-- End Bread crumb and right sidebar toggle -->\r\n<!-- ============================================================== -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/button-loader/button-loader.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/button-loader/button-loader.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<i class=\"fa fa-spinner app-loader\" *ngIf=\"isLoading\"></i> {{label}}\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/form-error-wrapper/form-error-wrapper.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/form-error-wrapper/form-error-wrapper.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{'has-error': hasError()}\">\r\n  <ng-content></ng-content>\r\n  <ng-container *ngFor=\"let errorKey of errorKeys\">\r\n    <span class=\"help-block\" *ngIf=\"control.hasError(errorKey) && control.touched\">\r\n      {{formateError(errorObject[errorKey],control.errors[errorKey])}}\r\n    </span>\r\n  </ng-container>\r\n  <span class=\"help-block\" *ngIf=\"apiErrorMessage\">\r\n    {{apiErrorMessage}}\r\n  </span>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/layouts/blank/blank.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/layouts/blank/blank.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Only router without any element -->\r\n<!-- ============================================================== -->\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/layouts/full/full.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/layouts/full/full.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Main wrapper - style you can find in pages.scss -->\r\n<!-- ============================================================== -->\r\n<div id=\"main-wrapper\">\r\n    <!-- ============================================================== -->\r\n    <!-- Page wrapper  -->\r\n    <!-- ============================================================== -->\r\n    <div class=\"page-wrapper\">\r\n        <!-- ============================================================== -->\r\n        <!-- Container fluid  -->\r\n        <!-- ============================================================== -->\r\n        <div class=\"container-fluid\">\r\n            <app-breadcrumb></app-breadcrumb>\r\n            <!-- ============================================================== -->\r\n            <!-- Start Page Content -->\r\n            <!-- ============================================================== -->\r\n            <router-outlet></router-outlet>\r\n            <!-- ============================================================== -->\r\n            <!-- End Start Page Content -->\r\n            <!-- ============================================================== -->\r\n        </div>\r\n        <!-- ============================================================== -->\r\n        <!-- End Container fluid  -->\r\n        <!-- ============================================================== -->\r\n    </div>\r\n    <!-- ============================================================== -->\r\n    <!-- End Page wrapper  -->\r\n    <!-- ============================================================== -->\r\n    <!-- ============================================================== -->\r\n    <!-- footer -->\r\n    <!-- ============================================================== -->\r\n\r\n    <!-- ============================================================== -->\r\n    <!-- End footer -->\r\n    <!-- ============================================================== -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/suspectedcase/suspectedcase.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/suspectedcase/suspectedcase.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<section id=\"cover\" class=\"min-vh-100\">\r\n  <div id=\"cover-caption\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-5 col-lg-6 col-md-8 col-sm-12 mx-auto text-center form p-4\">\r\n      <form [formGroup]=\"signupForm\" (ngSubmit)=\"signup()\" class=\"form-horizontal form-material\" id=\"loginform\">\r\n        <a href=\"javascript:void(0)\" class=\"text-center db logo-container\">\r\n        </a>\r\n        <h3 class=\"box-title m-t-40 m-b-0\">Register Now</h3>\r\n        <small>Create your account and enjoy</small>\r\n        <div class=\"form-group m-t-20\">\r\n          <div class=\"col-xs-12\">\r\n            <app-form-error-wrapper [control]=\"signupForm.controls['symptoms']\" [controlName]=\"'symptoms'\" [apiErrorType]=\"'symptoms'\">\r\n              <input type=\"email\"  list=\"emails\" multiple class=\"form-control\" formControlName=\"symptoms\" placeholder=\"What symptoms are you facing?\">\r\n              <datalist id=\"emails\">\r\n                <option value=\"Dry Cough\"></option>\r\n                <option value=\"Diminished sense of smell\"></option>\r\n                <option value=\"Sore Throat\"></option>\r\n                <option value=\"Weakness\"></option>\r\n                <option value=\"Loss of Appetite\"></option>\r\n                <option value=\"None of these\"></option>\r\n                <option value=\"More than one\"></option>\r\n              </datalist>\r\n\r\n\r\n              <!--              <select id=\"multiple-checkboxes\" multiple=\"multiple\" class=\"form-control\" type=\"text\" formControlName=\"symptoms\" placeholder=\"What symptoms are you facing?\">-->\r\n<!--                <option value=\"php\">PHP</option>-->\r\n<!--                <option value=\"javascript\">JavaScript</option>-->\r\n<!--                <option value=\"java\">Java</option>-->\r\n<!--                <option value=\"sql\">SQL</option>-->\r\n<!--                <option value=\"jquery\">Jquery</option>-->\r\n<!--                <option value=\".net\">.Net</option>-->\r\n<!--              </select>-->\r\n            </app-form-error-wrapper>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group m-t-20\">\r\n          <div class=\"col-xs-12\">\r\n            <app-form-error-wrapper [control]=\"signupForm.controls['period']\" [controlName]=\"'period'\" [apiErrorType]=\"'period'\">\r\n              <input  list=\"period\" class=\"form-control\" type=\"text\" formControlName=\"period\" placeholder=\"How long have you felt so?\">\r\n              <datalist id=\"period\">\r\n                <option value=\"Less than 14 days\"></option>\r\n                <option value=\"More than 14 days\"></option>\r\n              </datalist>\r\n            </app-form-error-wrapper>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <div class=\"col-xs-12\">\r\n            <app-form-error-wrapper [control]=\"signupForm.controls['age']\" [controlName]=\"'age'\" [apiErrorType]=\"'age'\">\r\n              <input list=\"age\" class=\"form-control\" type=\"text\" formControlName=\"age\" placeholder=\"Please provide us your age\">\r\n              <datalist id=\"age\">\r\n                <option value=\"0-10 years\"></option>\r\n                <option value=\"10- 20 years\"></option>\r\n                <option value=\"20- 30 years\"></option>\r\n                <option value=\"30- 40 years\"></option>\r\n                <option value=\"40- 50 years\"></option>\r\n                <option value=\"More than 60 years\"></option>\r\n              </datalist>\r\n            </app-form-error-wrapper>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group \">\r\n          <div class=\"col-xs-12\">\r\n            <app-form-error-wrapper [control]=\"signupForm.controls['gender']\" [controlName]=\"'gender'\" [apiErrorType]=\"'gender'\">\r\n              <input list=\"gender\" class=\"form-control\" type=\"text\" formControlName=\"gender\" placeholder=\"What is your gender?\">\r\n              <datalist id=\"gender\">\r\n                <option value=\"Male\"></option>\r\n                <option value=\"Female\"></option>\r\n               <option value=\"Others\"></option>\r\n              </datalist>\r\n            </app-form-error-wrapper>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group \">\r\n          <div class=\"col-xs-12\">\r\n            <app-form-error-wrapper [control]=\"signupForm.controls['bodyTemperature']\" [controlName]=\"'bodyTemperature'\" [apiErrorType]=\"'bodyTemperature'\">\r\n              <input list=\"temp\" class=\"form-control\" type=\"text\" formControlName=\"bodyTemperature\" placeholder=\"What is your body temperature?\">\r\n              <datalist id=\"temp\">\r\n                <option value=\"Normal(97.6 C)\"></option>\r\n                <option value=\"High(100 C)\"></option>\r\n                <option value=\"Very High(>100)\"></option>\r\n              </datalist>\r\n            </app-form-error-wrapper>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group \">\r\n          <div class=\"col-xs-12\">\r\n            <app-form-error-wrapper [control]=\"signupForm.controls['contactFromOutside']\" [controlName]=\"'contactFromOutside'\" [apiErrorType]=\"'contactFromOutside'\">\r\n              <input list=\"Op\" class=\"form-control\" type=\"text\" formControlName=\"contactFromOutside\" placeholder=\"Do you have any recent travel history?\">\r\n              <datalist id=\"Op\">\r\n                <option value=\"Yes\"></option>\r\n                <option value=\"No\"></option>\r\n              </datalist>\r\n            </app-form-error-wrapper>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"form-group text-center m-t-20\">\r\n          <div class=\"col-xs-12\">\r\n            <button class=\"btn btn-info btn-lg btn-block btn-rounded text-uppercase waves-effect waves-light\" [disabled]=\"signupForm.invalid || isLoading\">\r\n              <app-button-loader [isLoading]=\"isLoading\" [label]=\"'Submit'\"></app-button-loader>\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view-blackmarketing/view-blackmarketing.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view-blackmarketing/view-blackmarketing.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"head-text\">\r\n    <h3>Black Market Cases:</h3>\r\n    <p>The cases mentioned below are black marketing cases where prices of essential\r\n       commodities have skyrocketed due to hoarding and black marketing by traders,\r\n       forcing people to pay double even for baby food. These activities, if prevailing in our locality\r\n       must be complained to the police authority as per the Government legal authorities decision.\r\n      </p>\r\n  </div>\r\n  <div class=\"blackmarketing-container\" *ngIf=\"marketing\">\r\n    <div class=\" text-center p-3\" *ngFor = \"let prod of blackMarketings; let i=index\" style=\"position: unset\">\r\n      <div class=\"card-body blackmarketing-div\" >\r\n        <h6 class=\"card-text text-left blackmarketing-div-title\">ProductName:<span class=\"blackmarketing-div-text\">{{prod.productName}}</span></h6>\r\n        <h6 class=\"card-text text-left blackmarketing-div-title\">Location: <span class=\"blackmarketing-div-text\">{{prod.location}}</span></h6>\r\n        <h6 class=\"card-text text-left blackmarketing-div-title\">Old Price: <span class=\"blackmarketing-div-text\">{{prod.thenPrice}}</span></h6>\r\n        <h6 class=\"card-text text-left blackmarketing-div-title\">New Price: <span class=\"blackmarketing-div-text\">{{prod.nowPrice}}</span></h6>\r\n        <h6 class=\"card-text text-left blackmarketing-div-title\"><span class=\"blackmarketing-div-text\">{{prod.comments}}</span></h6>\r\n        <p class=\"card-text text-left blackmarketing-div-title\"><span class=\"blackmarketing-div-text\">{{prod.created_date}}</span></p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"!marketing\">\r\n    <div class=\"loading\">Loading&#8230;</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view-misinformation/view-misinformation.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view-misinformation/view-misinformation.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"head-text\">\r\n    <h3>Misinformation Cases:</h3>\r\n    <p>Over the past few weeks, misinformation about the new coronavirus pandemic has been\r\n      spreading across social media at an alarming rate.The sheer number of false and\r\n      sometimes dangerous claims is worrying, as is the way people are unintentionally \r\n      spreading them in ever wider circles.</p>\r\n  </div>\r\n    <div class=\"misinformation-container\" *ngIf=\"marketing\">\r\n    <div class=\" text-center p-3\"   *ngFor = \"let prod of misinformation; let i=index\" >\r\n      <div class=\"card-body misinformation-div\"  >\r\n        <h4 class=\"card-text misinformation-div-title\" >Source:{{prod.source}}</h4>\r\n        <h5 class=\"card-text misinformation-div-text\" >{{prod.mInformation}}</h5>\r\n        <div class=\"card-body \">\r\n          <a (click)=\"gotoUrl(prod.link)\" class=\"card-link misinformation-div-goto\" >Go to link</a>\r\n        </div>\r\n        <p class=\"text-muted misinformation-div-time\" >{{prod.created_date}}</p>\r\n      </div>\r\n    </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"!marketing\">\r\n      <div class=\"loading\">Loading&#8230;</div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view-suspectedcases/view-suspectedcases.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view-suspectedcases/view-suspectedcases.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"suspected-container\">\r\n  <div class=\"text-center p-3\"   *ngFor = \"let prod of suspectedcases; let i=index\">\r\n    <div class=\"card-body suspected-div \" >\r\n      <h6 class=\"card-text text-left suspected-div-title\">Age: <span class=\"suspected-div-text\">{{prod.age}}</span></h6>\r\n      <h6 class=\"card-text text-left suspected-div-title\">Temperatue: <span class=\"suspected-div-text\">{{prod.bodyTemperature}}</span></h6>\r\n      <h6 class=\"card-text text-left suspected-div-title\">Gender: <span class=\"suspected-div-text\">{{prod.gender}}</span></h6>\r\n      <h6 class=\"card-text text-left suspected-div-title\">Symptoms: <span class=\"suspected-div-text\">{{prod.symptoms}}</span></h6>\r\n      <h6 class=\"card-text text-left suspected-div-title\">Period: <span class=\"suspected-div-text\">{{prod.period}}</span></h6>\r\n      <h6 class=\"card-text text-left suspected-div-title\">Contact From Outside: <span class=\"suspected-div-text\">{{prod.contactFromOutside}}</span></h6>\r\n      <div class=\"footer\">\r\n        <div class=\" text-muted suspected-div-time\">{{prod.created_date}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/visualize-corona-fear/visualize-corona-fear.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/visualize-corona-fear/visualize-corona-fear.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n  <div class=\"visualize\" id=\"CoronaAnchor\">\r\n    <h3>Corona Fear in Nepal</h3>\r\n    <p>The primary duty of medical professionals is to provide care to all the patients who come to them without\r\n      any discrimination and to do the best to save people’s lives. This is their social as well as professional duty.\r\n      But ever since the number of people infected with COVID-19 gradually started to go up in Nepal, many doctors across the country,\r\n      including in Kathmandu valley, have started refusing to attend to patients with fever and dry cough.</p>\r\n    <div class=\"row\" *ngIf=\"isDataAvailable && thisdata\">\r\n      <div class=\"col-md-6\">\r\n          <google-chart #googleChartComponent (select)=\"onSelect($event)\" [title]=\"chart.title\" [type]=\"chart.type\" [data]=\"chart.data\" [options]=\"chart.options\" [columnNames]=\"chart.columns\" >\r\n          </google-chart>\r\n      </div>\r\n    <div class=\"col-md-6 align-self-center\">\r\n      <div class=\"card text-center mb-3 w-100\">\r\n        <div class=\"card-header text-white\">Health Statics</div>\r\n        <ul class=\"list-group list-group-flush\">\r\n          <li class=\"list-group-item\">Death due to Corona:{{this.Cdeath}}</li>\r\n          <li class=\"list-group-item\">Death due to fear of Corona:{{this.death}}</li>\r\n          <li class=\"list-group-item\">Highly Affected due to Corona:{{this.Haffected}}</li>\r\n          <li class=\"list-group-item\">Affected due to Corona:{{this.affected}}</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    </div>\r\n  </div>\r\n      </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/visualizenepal/visualizenepal.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/visualizenepal/visualizenepal.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n  <div class=\"googlechart\" id=\"visualizAnchor\">\r\n    <h3>COVID-19 Testing Results in Nepal</h3>\r\n    <p>The chart includes the information of the test cases of Nepal including the positive /negative COVID-19 results.\r\n      Also the bar chart of the SAARC Countries.\r\n    </p>\r\n  </div>\r\n    <div class=\"visualize\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4 col-md-6 col-sm-12\">\r\n      <div class=\"w-80\" *ngIf=\"isDataAvailable\">\r\n        <google-chart #graph1 [title]=\"chart.title1\" [type]=\"chart.type\" [data]=\"chart.data1\" [options]=\"chart.options\">\r\n        </google-chart>\r\n\r\n        <div class=\"card\">\r\n          <div class=\"card-header text-white\">Nepal Statics</div>\r\n          <ul class=\"list-group list-group-flush\">\r\n            <li class=\"list-group-item\">Total tested:{{data.nepal.samples_tested}}</li>\r\n            <li class=\"list-group-item\">Positive:{{this.positive}}</li>\r\n            <li class=\"list-group-item\">Negative:{{this.negative}}</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"col-lg-4 col-md-6 col-sm-12\">\r\n      <div class=\"w-80\" *ngIf=\"isSAARCDataAvailable\">\r\n        <google-chart #graph2 [title]=\"chart.title2\" [type]=\"chart.type2\" [data]=\"chart.data2\" [columnNames]=\"chart.column2\"\r\n          [options]=\"chart.options2\">\r\n        </google-chart>\r\n\r\n        <div class=\"card\">\r\n          <div class=\"card-header text-white\">SAARC Country Statics</div>\r\n          <ul class=\"list-group list-group-flush\" *ngFor=\"let s of SAARCdata\">\r\n            <li class=\"list-group-item\">{{s.country}}, {{s.Active_Cases}} Active\r\n              cases,{{s.Total_Deaths==\"\"?0:s.Total_Deaths}} Deaths </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n      <div *ngIf=\"!isDataAvailable && !isSAARCDataAvailable\">\r\n        <div class=\"loading\">Loading&#8230;</div>\r\n      </div>\r\n\r\n\r\n    <div class=\"col-lg-4 col-md-6 col-sm-12\">\r\n      <div class=\"w-80\" *ngIf=\"isDataAvailable\">\r\n        <google-chart #graph3 [title]=\"chart.title\" [type]=\"chart.type\" [data]=\"chart.data\" [options]=\"chart.options\">\r\n        </google-chart>\r\n\r\n        <div class=\"card\">\r\n          <div class=\"card-header text-white\">Nepal Statics</div>\r\n          <ul class=\"list-group list-group-flush\">\r\n            <li class=\"list-group-item\">Total positive:{{this.positive}}</li>\r\n            <li class=\"list-group-item\">Recovered:{{this.recovered}}</li>\r\n            <li class=\"list-group-item\">Isolation:{{this.positive - this.recovered}}</li>\r\n          </ul>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var _misinformation_misinformation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./misinformation/misinformation.component */ "./src/app/misinformation/misinformation.component.ts");
/* harmony import */ var _view_misinformation_view_misinformation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-misinformation/view-misinformation.component */ "./src/app/view-misinformation/view-misinformation.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _blackmarketing_blackmarketing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blackmarketing/blackmarketing.component */ "./src/app/blackmarketing/blackmarketing.component.ts");
/* harmony import */ var _suspectedcase_suspectedcase_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./suspectedcase/suspectedcase.component */ "./src/app/suspectedcase/suspectedcase.component.ts");
/* harmony import */ var _view_blackmarketing_view_blackmarketing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view-blackmarketing/view-blackmarketing.component */ "./src/app/view-blackmarketing/view-blackmarketing.component.ts");
/* harmony import */ var _view_suspectedcases_view_suspectedcases_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view-suspectedcases/view-suspectedcases.component */ "./src/app/view-suspectedcases/view-suspectedcases.component.ts");
/* harmony import */ var _visualizenepal_visualizenepal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./visualizenepal/visualizenepal.component */ "./src/app/visualizenepal/visualizenepal.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _nepal_map_nepal_map_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nepal-map/nepal-map.component */ "./src/app/nepal-map/nepal-map.component.ts");
/* harmony import */ var _corona_fear_corona_fear_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./corona-fear/corona-fear.component */ "./src/app/corona-fear/corona-fear.component.ts");
/* harmony import */ var _getcorona_fear_getcorona_fear_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./getcorona-fear/getcorona-fear.component */ "./src/app/getcorona-fear/getcorona-fear.component.ts");
/* harmony import */ var _visualize_corona_fear_visualize_corona_fear_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./visualize-corona-fear/visualize-corona-fear.component */ "./src/app/visualize-corona-fear/visualize-corona-fear.component.ts");
/* harmony import */ var _hospital_list_hospital_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./hospital-list/hospital-list.component */ "./src/app/hospital-list/hospital-list.component.ts");
/* harmony import */ var _aqivisualize_aqivisualize_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./aqivisualize/aqivisualize.component */ "./src/app/aqivisualize/aqivisualize.component.ts");
/* harmony import */ var _essentials_essentials_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./essentials/essentials.component */ "./src/app/essentials/essentials.component.ts");



















const routes = [
    { path: 'nepalmap', component: _nepal_map_nepal_map_component__WEBPACK_IMPORTED_MODULE_12__["NepalMapComponent"] },
    { path: 'misinformation', component: _misinformation_misinformation_component__WEBPACK_IMPORTED_MODULE_3__["MisinformationComponent"] },
    { path: 'getmisinformation', component: _view_misinformation_view_misinformation_component__WEBPACK_IMPORTED_MODULE_4__["ViewMisinformationComponent"] },
    { path: 'landingpage', component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_5__["LandingPageComponent"] },
    { path: 'blackmarketing', component: _blackmarketing_blackmarketing_component__WEBPACK_IMPORTED_MODULE_6__["BlackmarketingComponent"] },
    { path: 'suspectedcase', component: _suspectedcase_suspectedcase_component__WEBPACK_IMPORTED_MODULE_7__["SuspectedcaseComponent"] },
    { path: 'getblackmarketing', component: _view_blackmarketing_view_blackmarketing_component__WEBPACK_IMPORTED_MODULE_8__["ViewBlackmarketingComponent"] },
    { path: 'getsuspectedcase', component: _view_suspectedcases_view_suspectedcases_component__WEBPACK_IMPORTED_MODULE_9__["ViewSuspectedcasesComponent"] },
    { path: 'visualizeNepal', component: _visualizenepal_visualizenepal_component__WEBPACK_IMPORTED_MODULE_10__["VisualizenepalComponent"] },
    { path: 'homepage', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_11__["HomepageComponent"] },
    { path: 'coronaCases', component: _corona_fear_corona_fear_component__WEBPACK_IMPORTED_MODULE_13__["CoronaFearComponent"] },
    { path: 'getcoronaCases', component: _getcorona_fear_getcorona_fear_component__WEBPACK_IMPORTED_MODULE_14__["GetcoronaFearComponent"] },
    { path: 'visualizecorona', component: _visualize_corona_fear_visualize_corona_fear_component__WEBPACK_IMPORTED_MODULE_15__["VisualizeCoronaFearComponent"] },
    { path: 'hospitalList', component: _hospital_list_hospital_list_component__WEBPACK_IMPORTED_MODULE_16__["HospitalListComponent"] },
    { path: 'AQIVisualize', component: _aqivisualize_aqivisualize_component__WEBPACK_IMPORTED_MODULE_17__["AQIvisualizeComponent"] },
    { path: 'essentials', component: _essentials_essentials_component__WEBPACK_IMPORTED_MODULE_18__["EssentialsComponent"] },
    {
        path: '',
        redirectTo: '/homepage',
        pathMatch: 'full'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(http://fonts.googleapis.com/css?family=Old+Standard+TT:400,700);\r\n[data-notify=\"container\"][class*=\"alert-pastel-\"] {\r\n  background-color: rgb(255, 255, 238);\r\n  border-width: 0px;\r\n  border-left: 15px solid rgb(255, 240, 106);\r\n  border-radius: 0px;\r\n  box-shadow: 0px 0px 5px rgba(51, 51, 51, 0.3);\r\n  font-family: 'Old Standard TT', serif;\r\n  letter-spacing: 1px;\r\n}\r\n[data-notify=\"container\"].alert-pastel-info {\r\n  border-left-color: rgb(255, 179, 40);\r\n}\r\n[data-notify=\"container\"].alert-pastel-danger {\r\n  border-left-color: rgb(255, 103, 76);\r\n}\r\n[data-notify=\"container\"][class*=\"alert-pastel-\"] > [data-notify=\"title\"] {\r\n  color: rgb(80, 80, 57);\r\n  display: block;\r\n  font-weight: 700;\r\n  margin-bottom: 5px;\r\n}\r\n[data-notify=\"container\"][class*=\"alert-pastel-\"] > [data-notify=\"message\"] {\r\n  font-weight: 400;\r\n}\r\n.container-fluid{\r\n  background-image: url('l.svg');\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  position : absolute;  \r\n  width: 100%;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n\r\n}\r\n@media only screen and (max-width: 767px){\r\n  .container-fluid{\r\n    background-image: url('iPhone.svg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    position : absolute;  \r\n    width: 100%;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;  \r\n  }\r\n}\r\n@media only screen and (max-width: 1023px){\r\n  .container-fluid{\r\n    background-image: url('ipad_new.svg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    position : absolute;  \r\n    width: 100%;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;  \r\n  }\r\n}\r\n@media only screen and (min-width:1024px) and (max-width: 1365px){\r\n  .container-fluid{\r\n    background-image: url('ipadpro_new.svg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    position : absolute;  \r\n    width: 100%;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;  \r\n  }\r\n}\r\n/* @media only screen and (max-width:1440px){\r\n  .container-fluid{\r\n    background-image: url(\"../assets/images/mdiscreen.svg\");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    position : absolute;  \r\n    width: 100%;\r\n    height: fit-content;  \r\n  }\r\n} */\r\n@media only screen and (min-width:1600px) and (max-width: 1920px){\r\n  .container-fluid{\r\n    background-image: url('mdiscreen.svg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    position : absolute;  \r\n    width: 100%;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;  \r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkVBQTJFO0FBQzNFO0VBQ0Usb0NBQW9DO0VBQ3BDLGlCQUFpQjtFQUNqQiwwQ0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLDZDQUE2QztFQUM3QyxxQ0FBcUM7RUFDckMsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLG9DQUFvQztBQUN0QztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLDhCQUErQztFQUMvQyw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsMkJBQW1CO0VBQW5CLHdCQUFtQjtFQUFuQixtQkFBbUI7O0FBRXJCO0FBRUE7RUFDRTtJQUNFLG1DQUFvRDtJQUNwRCw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7RUFDckI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxxQ0FBc0Q7SUFDdEQsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0VBQ3JCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0Usd0NBQXlEO0lBQ3pELDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCwyQkFBbUI7SUFBbkIsd0JBQW1CO0lBQW5CLG1CQUFtQjtFQUNyQjtBQUNGO0FBQ0E7Ozs7Ozs7OztHQVNHO0FBQ0g7RUFDRTtJQUNFLHNDQUF1RDtJQUN2RCw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7RUFDckI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cDovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T2xkK1N0YW5kYXJkK1RUOjQwMCw3MDApO1xyXG5bZGF0YS1ub3RpZnk9XCJjb250YWluZXJcIl1bY2xhc3MqPVwiYWxlcnQtcGFzdGVsLVwiXSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyMzgpO1xyXG4gIGJvcmRlci13aWR0aDogMHB4O1xyXG4gIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkIHJnYigyNTUsIDI0MCwgMTA2KTtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggcmdiYSg1MSwgNTEsIDUxLCAwLjMpO1xyXG4gIGZvbnQtZmFtaWx5OiAnT2xkIFN0YW5kYXJkIFRUJywgc2VyaWY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG5bZGF0YS1ub3RpZnk9XCJjb250YWluZXJcIl0uYWxlcnQtcGFzdGVsLWluZm8ge1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoMjU1LCAxNzksIDQwKTtcclxufVxyXG5bZGF0YS1ub3RpZnk9XCJjb250YWluZXJcIl0uYWxlcnQtcGFzdGVsLWRhbmdlciB7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYigyNTUsIDEwMywgNzYpO1xyXG59XHJcbltkYXRhLW5vdGlmeT1cImNvbnRhaW5lclwiXVtjbGFzcyo9XCJhbGVydC1wYXN0ZWwtXCJdID4gW2RhdGEtbm90aWZ5PVwidGl0bGVcIl0ge1xyXG4gIGNvbG9yOiByZ2IoODAsIDgwLCA1Nyk7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuW2RhdGEtbm90aWZ5PVwiY29udGFpbmVyXCJdW2NsYXNzKj1cImFsZXJ0LXBhc3RlbC1cIl0gPiBbZGF0YS1ub3RpZnk9XCJtZXNzYWdlXCJdIHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5jb250YWluZXItZmx1aWR7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL2ltYWdlcy9sLnN2Z1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgcG9zaXRpb24gOiBhYnNvbHV0ZTsgIFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcblxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KXtcclxuICAuY29udGFpbmVyLWZsdWlke1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL2ltYWdlcy9pUGhvbmUuc3ZnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwb3NpdGlvbiA6IGFic29sdXRlOyAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7ICBcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpe1xyXG4gIC5jb250YWluZXItZmx1aWR7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvaW1hZ2VzL2lwYWRfbmV3LnN2Z1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcG9zaXRpb24gOiBhYnNvbHV0ZTsgIFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50OyAgXHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDI0cHgpIGFuZCAobWF4LXdpZHRoOiAxMzY1cHgpe1xyXG4gIC5jb250YWluZXItZmx1aWR7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvaW1hZ2VzL2lwYWRwcm9fbmV3LnN2Z1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcG9zaXRpb24gOiBhYnNvbHV0ZTsgIFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50OyAgXHJcbiAgfVxyXG59XHJcbi8qIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDoxNDQwcHgpe1xyXG4gIC5jb250YWluZXItZmx1aWR7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvaW1hZ2VzL21kaXNjcmVlbi5zdmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBvc2l0aW9uIDogYWJzb2x1dGU7ICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDsgIFxyXG4gIH1cclxufSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTYwMHB4KSBhbmQgKG1heC13aWR0aDogMTkyMHB4KXtcclxuICAuY29udGFpbmVyLWZsdWlke1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL2ltYWdlcy9tZGlzY3JlZW4uc3ZnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwb3NpdGlvbiA6IGFic29sdXRlOyAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7ICBcclxuICB9XHJcbn0iXX0= */"

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let AppComponent = class AppComponent {
    constructor(meta) {
        this.meta = meta;
        this.title = 'covid19-angular';
        this.meta.addTag({ name: 'Nepal Covid', content: 'Nepal Covid.' });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]])
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
/* harmony import */ var _misinformation_misinformation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./misinformation/misinformation.component */ "./src/app/misinformation/misinformation.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _view_misinformation_view_misinformation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-misinformation/view-misinformation.component */ "./src/app/view-misinformation/view-misinformation.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _suspectedcase_suspectedcase_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./suspectedcase/suspectedcase.component */ "./src/app/suspectedcase/suspectedcase.component.ts");
/* harmony import */ var _blackmarketing_blackmarketing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blackmarketing/blackmarketing.component */ "./src/app/blackmarketing/blackmarketing.component.ts");
/* harmony import */ var _view_suspectedcases_view_suspectedcases_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view-suspectedcases/view-suspectedcases.component */ "./src/app/view-suspectedcases/view-suspectedcases.component.ts");
/* harmony import */ var _view_blackmarketing_view_blackmarketing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view-blackmarketing/view-blackmarketing.component */ "./src/app/view-blackmarketing/view-blackmarketing.component.ts");
/* harmony import */ var _visualizenepal_visualizenepal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./visualizenepal/visualizenepal.component */ "./src/app/visualizenepal/visualizenepal.component.ts");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-google-charts */ "./node_modules/angular-google-charts/fesm2015/angular-google-charts.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _core_notification_notification_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/notification/notification.module */ "./src/app/core/notification/notification.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./core */ "./src/app/core/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _nepal_map_nepal_map_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./nepal-map/nepal-map.component */ "./src/app/nepal-map/nepal-map.component.ts");
/* harmony import */ var _corona_fear_corona_fear_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./corona-fear/corona-fear.component */ "./src/app/corona-fear/corona-fear.component.ts");
/* harmony import */ var _getcorona_fear_getcorona_fear_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./getcorona-fear/getcorona-fear.component */ "./src/app/getcorona-fear/getcorona-fear.component.ts");
/* harmony import */ var _visualize_corona_fear_visualize_corona_fear_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./visualize-corona-fear/visualize-corona-fear.component */ "./src/app/visualize-corona-fear/visualize-corona-fear.component.ts");
/* harmony import */ var _hospital_list_hospital_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./hospital-list/hospital-list.component */ "./src/app/hospital-list/hospital-list.component.ts");
/* harmony import */ var _aqivisualize_aqivisualize_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./aqivisualize/aqivisualize.component */ "./src/app/aqivisualize/aqivisualize.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _hospital_list_search_pipe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./hospital-list/search.pipe */ "./src/app/hospital-list/search.pipe.ts");
/* harmony import */ var _essentials_essentials_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./essentials/essentials.component */ "./src/app/essentials/essentials.component.ts");
/* harmony import */ var _essentials_Essentials_pipe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./essentials/Essentials.pipe */ "./src/app/essentials/Essentials.pipe.ts");


































// import {MatSelectModule} from '@angular/material/select';
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"], _misinformation_misinformation_component__WEBPACK_IMPORTED_MODULE_3__["MisinformationComponent"], _view_misinformation_view_misinformation_component__WEBPACK_IMPORTED_MODULE_5__["ViewMisinformationComponent"],
            _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_6__["LandingPageComponent"], _suspectedcase_suspectedcase_component__WEBPACK_IMPORTED_MODULE_7__["SuspectedcaseComponent"], _blackmarketing_blackmarketing_component__WEBPACK_IMPORTED_MODULE_8__["BlackmarketingComponent"],
            _view_suspectedcases_view_suspectedcases_component__WEBPACK_IMPORTED_MODULE_9__["ViewSuspectedcasesComponent"], _view_blackmarketing_view_blackmarketing_component__WEBPACK_IMPORTED_MODULE_10__["ViewBlackmarketingComponent"],
            _visualizenepal_visualizenepal_component__WEBPACK_IMPORTED_MODULE_11__["VisualizenepalComponent"], _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_13__["HomepageComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_30__["FooterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_23__["NavbarComponent"], _nepal_map_nepal_map_component__WEBPACK_IMPORTED_MODULE_24__["NepalMapComponent"], _corona_fear_corona_fear_component__WEBPACK_IMPORTED_MODULE_25__["CoronaFearComponent"], _getcorona_fear_getcorona_fear_component__WEBPACK_IMPORTED_MODULE_26__["GetcoronaFearComponent"], _visualize_corona_fear_visualize_corona_fear_component__WEBPACK_IMPORTED_MODULE_27__["VisualizeCoronaFearComponent"], _hospital_list_hospital_list_component__WEBPACK_IMPORTED_MODULE_28__["HospitalListComponent"], _aqivisualize_aqivisualize_component__WEBPACK_IMPORTED_MODULE_29__["AQIvisualizeComponent"], _hospital_list_search_pipe__WEBPACK_IMPORTED_MODULE_31__["SearchPipe"], _essentials_essentials_component__WEBPACK_IMPORTED_MODULE_32__["EssentialsComponent"], _essentials_Essentials_pipe__WEBPACK_IMPORTED_MODULE_33__["Essentials"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_22__["CommonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            angular_google_charts__WEBPACK_IMPORTED_MODULE_12__["GoogleChartsModule"].forRoot(),
            _core_notification_notification_module__WEBPACK_IMPORTED_MODULE_14__["NotificationModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModule"],
            _core__WEBPACK_IMPORTED_MODULE_19__["CoreModule"],
            _shared__WEBPACK_IMPORTED_MODULE_20__["SharedModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/aqivisualize/aqivisualize.component.css":
/*!*********************************************************!*\
  !*** ./src/app/aqivisualize/aqivisualize.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    margin-top: 60px;\r\n}\r\n.container h3{\r\n    font-family: Montserrat;\r\n    color: #162C69;\r\n    font-weight: bold;\r\n    font-size: 1.68rem;\r\n    font-style: inherit;\r\n    text-align: center;\r\n}\r\n.container p{\r\n    font-family: sans-serif;\r\n    font-size: 1rem;\r\n    color: #162C69;\r\n    text-align: center;\r\n}\r\ngoogle-chart{\r\n  width: 100%;\r\n  min-height: 450px;\r\n}\r\n@media only screen and (max-width: 767px){\r\n    .container h3{\r\n        font-size: 1.35rem;\r\n        text-align: left;\r\n    }\r\n    .container p{\r\n        font-size: 1rem;\r\n        text-align: left;\r\n    }\r\n     google-chart{\r\n        width: 100%;\r\n       height: 100%;\r\n       min-height: 0px;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXFpdmlzdWFsaXplL2FxaXZpc3VhbGl6ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25CO0FBQ0E7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7S0FDQztRQUNHLFdBQVc7T0FDWixZQUFZO09BQ1osZUFBZTtJQUNsQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXFpdmlzdWFsaXplL2FxaXZpc3VhbGl6ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbn1cclxuLmNvbnRhaW5lciBoM3tcclxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gICAgY29sb3I6ICMxNjJDNjk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMS42OHJlbTtcclxuICAgIGZvbnQtc3R5bGU6IGluaGVyaXQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNvbnRhaW5lciBwe1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBjb2xvcjogIzE2MkM2OTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5nb29nbGUtY2hhcnR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogNDUwcHg7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCl7XHJcbiAgICAuY29udGFpbmVyIGgze1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zNXJlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lciBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgIGdvb2dsZS1jaGFydHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgIG1pbi1oZWlnaHQ6IDBweDtcclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/aqivisualize/aqivisualize.component.ts":
/*!********************************************************!*\
  !*** ./src/app/aqivisualize/aqivisualize.component.ts ***!
  \********************************************************/
/*! exports provided: AQIvisualizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AQIvisualizeComponent", function() { return AQIvisualizeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _core_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/notification/notification.service */ "./src/app/core/notification/notification.service.ts");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-google-charts */ "./node_modules/angular-google-charts/fesm2015/angular-google-charts.js");





let AQIvisualizeComponent = class AQIvisualizeComponent {
    constructor(handler, ns, httpClient) {
        this.ns = ns;
        this.httpClient = httpClient;
        this.url = '';
        this.title = 'AQI of Kathmandu';
        this.type = 'LineChart';
        this.data = [
            ['Jan 1', 152, 72],
            ['Feb 7', 161, 96],
            ['Mar 7', 100, 49],
            ['Apr 3', 96, 47],
            ['Apr 5', 125, 53],
            ['Apr 8', 142, 72],
            ['Apr 12', 160, 64],
            ['Apr 19', 69, 27]
        ];
        this.columnNames = ['Month', 'PM25', 'PM10'];
        this.options = {
            legend: {
                position: 'top'
            },
            hAxis: {
                title: 'Month'
            },
            vAxis: {
                title: 'AQI'
            },
        };
        // this.enddate = new Date().toISOString().split('.')[0];
        // this.startdate = this.enddate.split('T')[0] + 'T00:00:00';
        this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"](handler);
        this.httpClient.get('https://api.airvisual.com/v2/city?city=Kathmandu&state=Central%20Region&country=Nepal&key=cc48213a-38d8-430f-81a3-5973c871d7b4').subscribe(data => {
            this.currentAQI = data.data.current.pollution.aqius;
            this.currentPM10 = data.data.current.pollution.aqicn;
            this.data.push(['Now(Live)', this.currentAQI, this.currentPM10]);
            this.chart.ngOnChanges();
        });
    }
    onResize(event) {
        this.chart.ngOnChanges();
    }
    ngOnInit() {
    }
};
AQIvisualizeComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpBackend"] },
    { type: _core_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chart', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_google_charts__WEBPACK_IMPORTED_MODULE_4__["GoogleChartComponent"])
], AQIvisualizeComponent.prototype, "chart", void 0);
AQIvisualizeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-aqivisualize',
        template: __webpack_require__(/*! raw-loader!./aqivisualize.component.html */ "./node_modules/raw-loader/index.js!./src/app/aqivisualize/aqivisualize.component.html"),
        styles: [__webpack_require__(/*! ./aqivisualize.component.css */ "./src/app/aqivisualize/aqivisualize.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpBackend"], _core_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AQIvisualizeComponent);



/***/ }),

/***/ "./src/app/blackmarketing/blackmarketing.component.css":
/*!*************************************************************!*\
  !*** ./src/app/blackmarketing/blackmarketing.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* only used for background overlay not needed for centering */\r\n/* #cover{\r\n  background-color: #FEF9E7;\r\n} */\r\n.container-fluid{\r\n  background-image: url('reportbg.svg');\r\n  width: 100%;\r\n  overflow: hidden;\r\n  min-height: 100vh;\r\n}\r\nform{\r\n  background-color: #FCF3CF ;\r\n  border-radius: 10px;\r\n  padding: 17px 12px 13px 17px;\r\n  align-content: center;\r\n}\r\nform:before {\r\n  content: '';\r\n  height: 100%;\r\n  left: 0;\r\n  position: absolute;\r\n  top: 0;\r\n  width: 100%;\r\n  background-color: #FCF3CF ;\r\n  z-index: -1;\r\n  border-radius: 10px;\r\n}\r\n.form-control{\r\n  float: none;\r\n  text-align: center;\r\n}\r\n.btn.btn-info.btn-lg.btn-block.btn-rounded.btn-default.text-uppercase.waves-effect.waves-light{\r\n  background-color: #F7DC6F ;\r\n  border: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxhY2ttYXJrZXRpbmcvYmxhY2ttYXJrZXRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4REFBOEQ7QUFDOUQ7O0dBRUc7QUFDSDtFQUNFLHFDQUF5RDtFQUN6RCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2JsYWNrbWFya2V0aW5nL2JsYWNrbWFya2V0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBvbmx5IHVzZWQgZm9yIGJhY2tncm91bmQgb3ZlcmxheSBub3QgbmVlZGVkIGZvciBjZW50ZXJpbmcgKi9cclxuLyogI2NvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRUY5RTc7XHJcbn0gKi9cclxuLmNvbnRhaW5lci1mbHVpZHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL3JlcG9ydGJnLnN2Z1wiKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcbmZvcm17XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZDRjNDRiA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAxN3B4IDEycHggMTNweCAxN3B4O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5mb3JtOmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkNGM0NGIDtcclxuICB6LWluZGV4OiAtMTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5mb3JtLWNvbnRyb2x7XHJcbiAgZmxvYXQ6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5idG4uYnRuLWluZm8uYnRuLWxnLmJ0bi1ibG9jay5idG4tcm91bmRlZC5idG4tZGVmYXVsdC50ZXh0LXVwcGVyY2FzZS53YXZlcy1lZmZlY3Qud2F2ZXMtbGlnaHR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3REM2RiA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/blackmarketing/blackmarketing.component.ts":
/*!************************************************************!*\
  !*** ./src/app/blackmarketing/blackmarketing.component.ts ***!
  \************************************************************/
/*! exports provided: BlackmarketingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlackmarketingComponent", function() { return BlackmarketingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_authentication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/authentication */ "./src/app/core/authentication/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/notification/notification.service */ "./src/app/core/notification/notification.service.ts");







let BlackmarketingComponent = class BlackmarketingComponent {
    constructor(router, formBuilder, authenticationService, ns) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.ns = ns;
        this.isLoading = false;
        this.createForm();
    }
    ngOnInit() { }
    signup() {
        this.isLoading = true;
        this.authenticationService
            .saveblackmarketing(this.signupForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
            this.signupForm.markAsPristine();
            this.isLoading = false;
        }))
            .subscribe((user) => {
            this.ns.success('successful upload!');
            this.router.navigate(['/homepage']);
        }, (error) => {
            this.ns.error('Oops! something went wrong');
        });
    }
    createForm() {
        this.signupForm = this.formBuilder.group({
            productName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            location: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            thenPrice: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            nowPrice: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            comments: ['', []],
        });
    }
};
BlackmarketingComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _core_authentication__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _core_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }
];
BlackmarketingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-blackmarketing',
        template: __webpack_require__(/*! raw-loader!./blackmarketing.component.html */ "./node_modules/raw-loader/index.js!./src/app/blackmarketing/blackmarketing.component.html"),
        styles: [__webpack_require__(/*! ./blackmarketing.component.css */ "./src/app/blackmarketing/blackmarketing.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _core_authentication__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
        _core_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]])
], BlackmarketingComponent);



/***/ }),

/***/ "./src/app/core/authentication/authentication.guard.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/authentication/authentication.guard.ts ***!
  \*************************************************************/
/*! exports provided: AuthenticationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return AuthenticationGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/core/authentication/authentication.service.ts");




let AuthenticationGuard = class AuthenticationGuard {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    canActivate() {
        if (this.authenticationService.isAuthenticated()) {
            return true;
        }
        this.router.navigate(['/login'], {
            replaceUrl: true
        });
        return false;
    }
};
AuthenticationGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
AuthenticationGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
], AuthenticationGuard);



/***/ }),

/***/ "./src/app/core/authentication/authentication.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/authentication/authentication.service.ts ***!
  \***************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../local-storage.service */ "./src/app/core/local-storage.service.ts");





const credentialsKey = 'credentials';
/**
 * Provides a base for authentication workflow.
 * The Credentials interface as well as login/logout methods should be replaced with proper implementation.
 */
let AuthenticationService = class AuthenticationService {
    constructor(httpClient, localStorageService) {
        this.httpClient = httpClient;
        this.localStorageService = localStorageService;
        this.credentials$ = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        const savedCredentials = this.localStorageService.getItem(credentialsKey);
        if (savedCredentials) {
            this._credentials = JSON.parse(savedCredentials);
        }
    }
    login(payload) {
        return this.httpClient.post('/login', payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((body) => {
            this.setCredentials(body);
            return body;
        }));
    }
    signup(payload) {
        return this.httpClient.post('/signup', payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((body) => {
            return body;
        }));
    }
    saveMisinformation(payload) {
        return this.httpClient.post('/misinformation', payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((body) => {
            return body;
        }));
    }
    saveSuspectedcase(payload) {
        return this.httpClient.post('cases', payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((body) => {
            return body;
        }));
    }
    saveCoronaFear(payload) {
        return this.httpClient.post('coronaFear', payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((body) => {
            return body;
        }));
    }
    getCoronaFear() {
        return this.httpClient.get('coronaFear').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((body) => {
            return body;
        }));
    }
    getProvinceData() {
        return this.httpClient.get('provinceData').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((body) => {
            return body;
        }));
    }
    saveblackmarketing(payload) {
        return this.httpClient.post('blackmarketing', payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((body) => {
            return body;
        }));
    }
    getMisinformation() {
        return this.httpClient.get('/misinformation').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((body) => {
            return body;
        }));
    }
    showmisinformation() {
        return this.httpClient.get('/misinformation');
    }
    showblackmarketing() {
        return this.httpClient.get('blackMarketing');
    }
    showSuspectablecases() {
        return this.httpClient.get('cases');
    }
    getNepalLivedata() {
        return this.httpClient.get('update/Nepal');
    }
    getWorldData() {
        return this.httpClient.get('update/SAARC');
    }
    getEssentials() {
        return this.httpClient.get('getBulkEssential');
    }
    /**
     * Logs out the user and clear credentials.
     * @return {Observable<boolean>} True if the user was logged out successfully.
     */
    logout() {
        return this.httpClient
            .post('/logout', {
            sessionId: this.credentials.session
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => {
            this.setCredentials();
            return true;
        }));
    }
    /**
     * Checks is the user is authenticated.
     * @return {boolean} True if the user is authenticated.
     */
    isAuthenticated() {
        return !!this.credentials;
    }
    /**
     * Gets the user credentials.
     * @return {Credentials} The user credentials or null if the user is not authenticated.
     */
    get credentials() {
        return this._credentials;
    }
    /**
     * Get the auth token.
     * @return {string} The auth token is null if user is not authenticated.
     */
    get accessToken() {
        return this.credentials ? this.credentials.accessToken : null;
    }
    /**
     * Sets the user credentials.
     * @param {Credentials=} Authentication.Credentials The user credentials.
     */
    setCredentials(credentials) {
        this._credentials = credentials || null;
        if (credentials) {
            this.localStorageService.setItem(credentialsKey, JSON.stringify(credentials));
            this.credentials$.emit(this._credentials);
        }
        else {
            this.localStorageService.clearItem(credentialsKey);
        }
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
        _local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]])
], AuthenticationService);



/***/ }),

/***/ "./src/app/core/authentication/index.ts":
/*!**********************************************!*\
  !*** ./src/app/core/authentication/index.ts ***!
  \**********************************************/
/*! exports provided: AuthenticationGuard, AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _authentication_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.guard */ "./src/app/core/authentication/authentication.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return _authentication_guard__WEBPACK_IMPORTED_MODULE_0__["AuthenticationGuard"]; });

/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/core/authentication/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });

// start:ng42.barrel


// end:ng42.barrel


/***/ }),

/***/ "./src/app/core/class/baseAPI.class.ts":
/*!*********************************************!*\
  !*** ./src/app/core/class/baseAPI.class.ts ***!
  \*********************************************/
/*! exports provided: BaseAPIClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseAPIClass", function() { return BaseAPIClass; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let BaseAPIClass = class BaseAPIClass {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAll(filterObject) {
        let queryString = '';
        if (filterObject) {
            const fitlerKeys = Object.keys(filterObject);
            if (fitlerKeys.length > 0) {
                queryString = '?';
            }
            fitlerKeys.forEach((key, index) => {
                if (filterObject[key] !== undefined && filterObject[key] !== null) {
                    if (filterObject[key].toString().length) {
                        queryString += `${key}=${filterObject[key]}&`;
                    }
                }
            });
            if (fitlerKeys.length > 0 &&
                queryString[queryString.length - 1] === '&') {
                queryString = queryString.slice(0, -1);
            }
        }
        return this.httpClient.get(`${this.baseUrl}${queryString}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((body) => {
            return body;
        }));
    }
    getById(id, filterObject) {
        let queryString = '';
        if (filterObject) {
            const fitlerKeys = Object.keys(filterObject);
            if (fitlerKeys.length > 0) {
                queryString = '?';
            }
            fitlerKeys.forEach((key, index) => {
                if (filterObject[key] !== undefined && filterObject[key] !== null) {
                    if (filterObject[key].toString().length) {
                        queryString += `${key}=${filterObject[key]}&`;
                    }
                }
            });
            if (fitlerKeys.length > 0 &&
                queryString[queryString.length - 1] === '&') {
                queryString = queryString.slice(0, -1);
            }
        }
        return this.httpClient.get(`${this.baseUrl}/${id}${queryString}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((body) => {
            return body;
        }));
    }
    create(payload) {
        return this.httpClient.post(this.baseUrl, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((body) => {
            return body;
        }));
    }
    update(id, payload) {
        return this.httpClient.put(`${this.baseUrl}/${id}`, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((body) => {
            return body;
        }));
    }
    delete(id) {
        return this.httpClient.delete(`${this.baseUrl}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((body) => {
            return body;
        }));
    }
    deleteAll() {
        return this.httpClient.delete(`${this.baseUrl}/all`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((body) => {
            return body;
        }));
    }
};
BaseAPIClass.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
BaseAPIClass = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], BaseAPIClass);



/***/ }),

/***/ "./src/app/core/class/index.ts":
/*!*************************************!*\
  !*** ./src/app/core/class/index.ts ***!
  \*************************************/
/*! exports provided: BaseAPIClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseAPI_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseAPI.class */ "./src/app/core/class/baseAPI.class.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseAPIClass", function() { return _baseAPI_class__WEBPACK_IMPORTED_MODULE_0__["BaseAPIClass"]; });

// start:ng42.barrel

// end:ng42.barrel


/***/ }),

/***/ "./src/app/core/constants.ts":
/*!***********************************!*\
  !*** ./src/app/core/constants.ts ***!
  \***********************************/
/*! exports provided: API_ENDPOINT, ERROR_OBJECTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_ENDPOINT", function() { return API_ENDPOINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_OBJECTS", function() { return ERROR_OBJECTS; });
const API_ENDPOINT = [];
const ERROR_OBJECTS = {
    required: '{{field}} is required',
    email: 'Please enter valid email'
};


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _authentication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authentication */ "./src/app/core/authentication/index.ts");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./http */ "./src/app/core/http/index.ts");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/core/local-storage.service.ts");
/* harmony import */ var _route_reusable_strategy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./route-reusable-strategy */ "./src/app/core/route-reusable-strategy.ts");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service */ "./src/app/core/service/index.ts");










let CoreModule = class CoreModule {
};
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
        declarations: [],
        providers: [
            _local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"],
            _authentication__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _authentication__WEBPACK_IMPORTED_MODULE_5__["AuthenticationGuard"],
            _http__WEBPACK_IMPORTED_MODULE_6__["ApiPrefixInterceptor"],
            _http__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlerInterceptor"],
            _service__WEBPACK_IMPORTED_MODULE_9__["UserService"],
            _service__WEBPACK_IMPORTED_MODULE_9__["UtilService"],
            _service__WEBPACK_IMPORTED_MODULE_9__["ErrorMessageService"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                useClass: _http__WEBPACK_IMPORTED_MODULE_6__["ApiPrefixInterceptor"],
                multi: true
            },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
                useClass: _http__WEBPACK_IMPORTED_MODULE_6__["HttpService"]
            },
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"],
                useClass: _route_reusable_strategy__WEBPACK_IMPORTED_MODULE_8__["RouteReusableStrategy"]
            }
        ]
    })
], CoreModule);



/***/ }),

/***/ "./src/app/core/http/api-prefix.interceptor.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/http/api-prefix.interceptor.ts ***!
  \*****************************************************/
/*! exports provided: ApiPrefixInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiPrefixInterceptor", function() { return ApiPrefixInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");



/**
 * Prefixes all requests with `environment.serverUrl`.
 */
let ApiPrefixInterceptor = class ApiPrefixInterceptor {
    constructor() { }
    intercept(request, next) {
        request = request.clone({
            url: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverUrl + request.url
        });
        return next.handle(request);
    }
};
ApiPrefixInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ApiPrefixInterceptor);



/***/ }),

/***/ "./src/app/core/http/error-handler.interceptor.ts":
/*!********************************************************!*\
  !*** ./src/app/core/http/error-handler.interceptor.ts ***!
  \********************************************************/
/*! exports provided: ErrorHandlerInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerInterceptor", function() { return ErrorHandlerInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../local-storage.service */ "./src/app/core/local-storage.service.ts");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service */ "./src/app/core/service/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







const credentialsKey = 'credentials';
/**
 * Adds a default error handler to all requests.
 */
let ErrorHandlerInterceptor = class ErrorHandlerInterceptor {
    constructor(router, localStorageService, errorMessageService) {
        this.router = router;
        this.localStorageService = localStorageService;
        this.errorMessageService = errorMessageService;
    }
    intercept(request, next) {
        return next
            .handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(error => this.errorHandler(error)));
    }
    // Customize the default error handler here if needed
    errorHandler(response) {
        if (response.status === 401) {
            this.localStorageService.clearItem(credentialsKey);
            this.router.navigate(['/login'], {
                replaceUrl: true
            });
        }
        else if (response.status === 400) {
            const errorResponse = response;
            if (errorResponse.error) {
                if (errorResponse.error.validation) {
                    errorResponse.error.validation.keys.forEach((key) => {
                        this.errorMessageService.set(errorResponse.error.validation.errors[key], key, response.url);
                    });
                }
                else {
                    this.errorMessageService.set(errorResponse.error.error, '_GLOBAL_', response.url);
                }
            }
        }
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
            // Do something with the error
            console.error('Request error', response);
        }
        throw response;
    }
};
ErrorHandlerInterceptor.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] },
    { type: _service__WEBPACK_IMPORTED_MODULE_4__["ErrorMessageService"] }
];
ErrorHandlerInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"],
        _service__WEBPACK_IMPORTED_MODULE_4__["ErrorMessageService"]])
], ErrorHandlerInterceptor);



/***/ }),

/***/ "./src/app/core/http/http.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/http/http.service.ts ***!
  \*******************************************/
/*! exports provided: HTTP_DYNAMIC_INTERCEPTORS, HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_DYNAMIC_INTERCEPTORS", function() { return HTTP_DYNAMIC_INTERCEPTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _error_handler_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-handler.interceptor */ "./src/app/core/http/error-handler.interceptor.ts");

var HttpService_1;



// From @angular/common/http/src/interceptor: allows to chain interceptors
class HttpInterceptorHandler {
    constructor(next, interceptor) {
        this.next = next;
        this.interceptor = interceptor;
    }
    handle(request) {
        return this.interceptor.intercept(request, this.next);
    }
}
HttpInterceptorHandler.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHandler"] },
    { type: undefined }
];
/**
 * Allows to override default dynamic interceptors that can be disabled with the HttpService extension.
 * Except for very specific needs, you should better configure these interceptors directly in the constructor below
 * for better readability.
 *
 * For static interceptors that should always be enabled (like ApiPrefixInterceptor), use the standard
 * HTTP_INTERCEPTORS token.
 */
const HTTP_DYNAMIC_INTERCEPTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('HTTP_DYNAMIC_INTERCEPTORS');
/**
 * Extends HttpClient with per request configuration using dynamic interceptors.
 */
let HttpService = HttpService_1 = class HttpService extends _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] {
    constructor(httpHandler, injector, interceptors = []) {
        super(httpHandler);
        this.httpHandler = httpHandler;
        this.injector = injector;
        this.interceptors = interceptors;
        if (!this.interceptors) {
            // Configure default interceptors that can be disabled here
            this.interceptors = [this.injector.get(_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerInterceptor"])];
        }
    }
    skipErrorHandler() {
        return this.removeInterceptor(_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerInterceptor"]);
    }
    // Override the original method to wire interceptors when triggering the request.
    request(method, url, options) {
        const handler = this.interceptors.reduceRight((next, interceptor) => new HttpInterceptorHandler(next, interceptor), this.httpHandler);
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"](handler).request(method, url, options);
    }
    removeInterceptor(interceptorType) {
        return new HttpService_1(this.httpHandler, this.injector, this.interceptors.filter(i => !(i instanceof interceptorType)));
    }
    addInterceptor(interceptor) {
        return new HttpService_1(this.httpHandler, this.injector, this.interceptors.concat([interceptor]));
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHandler"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [HTTP_DYNAMIC_INTERCEPTORS,] }] }
];
HttpService = HttpService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(HTTP_DYNAMIC_INTERCEPTORS)),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHandler"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], Array])
], HttpService);



/***/ }),

/***/ "./src/app/core/http/index.ts":
/*!************************************!*\
  !*** ./src/app/core/http/index.ts ***!
  \************************************/
/*! exports provided: ApiPrefixInterceptor, ErrorHandlerInterceptor, HTTP_DYNAMIC_INTERCEPTORS, HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-prefix.interceptor */ "./src/app/core/http/api-prefix.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiPrefixInterceptor", function() { return _api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_0__["ApiPrefixInterceptor"]; });

/* harmony import */ var _error_handler_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-handler.interceptor */ "./src/app/core/http/error-handler.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerInterceptor", function() { return _error_handler_interceptor__WEBPACK_IMPORTED_MODULE_1__["ErrorHandlerInterceptor"]; });

/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/core/http/http.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTP_DYNAMIC_INTERCEPTORS", function() { return _http_service__WEBPACK_IMPORTED_MODULE_2__["HTTP_DYNAMIC_INTERCEPTORS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]; });

// start:ng42.barrel



// end:ng42.barrel


/***/ }),

/***/ "./src/app/core/index.ts":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: API_ENDPOINT, ERROR_OBJECTS, CoreModule, LocalStorageService, RouteReusableStrategy, AuthenticationGuard, AuthenticationService, BaseAPIClass, ApiPrefixInterceptor, ErrorHandlerInterceptor, HTTP_DYNAMIC_INTERCEPTORS, HttpService, UserService, UtilService, ErrorMessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/app/core/constants.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "API_ENDPOINT", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["API_ENDPOINT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ERROR_OBJECTS", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["ERROR_OBJECTS"]; });

/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core.module */ "./src/app/core/core.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return _core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"]; });

/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/core/local-storage.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return _local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]; });

/* harmony import */ var _route_reusable_strategy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./route-reusable-strategy */ "./src/app/core/route-reusable-strategy.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouteReusableStrategy", function() { return _route_reusable_strategy__WEBPACK_IMPORTED_MODULE_3__["RouteReusableStrategy"]; });

/* harmony import */ var _authentication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication */ "./src/app/core/authentication/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return _authentication__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]; });

/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./class */ "./src/app/core/class/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseAPIClass", function() { return _class__WEBPACK_IMPORTED_MODULE_5__["BaseAPIClass"]; });

/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./http */ "./src/app/core/http/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiPrefixInterceptor", function() { return _http__WEBPACK_IMPORTED_MODULE_6__["ApiPrefixInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerInterceptor", function() { return _http__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlerInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTP_DYNAMIC_INTERCEPTORS", function() { return _http__WEBPACK_IMPORTED_MODULE_6__["HTTP_DYNAMIC_INTERCEPTORS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return _http__WEBPACK_IMPORTED_MODULE_6__["HttpService"]; });

/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service */ "./src/app/core/service/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _service__WEBPACK_IMPORTED_MODULE_7__["UserService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return _service__WEBPACK_IMPORTED_MODULE_7__["UtilService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorMessageService", function() { return _service__WEBPACK_IMPORTED_MODULE_7__["ErrorMessageService"]; });

// start:ng42.barrel








// end:ng42.barrel


/***/ }),

/***/ "./src/app/core/local-storage.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/local-storage.service.ts ***!
  \***********************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


function createCookie(name, value, days) {
    let date, expires;
    if (days) {
        date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = '; expires=' + date.toGMTString();
    }
    else {
        expires = '';
    }
    document.cookie = name + '=' + value + expires + '; path=/';
}
function readCookie(name) {
    const nameEQ = name + '=', ca = document.cookie.split(';');
    let i, c;
    for (i = 0; i < ca.length; i++) {
        c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}
function setData(type, data) {
    // Convert data into JSON and encode to accommodate for special characters.
    data = encodeURIComponent(JSON.stringify(data));
    // Create cookie.
    if (type === 'session') {
        createCookie(getSessionName(), data, 365);
    }
    else {
        createCookie('localStorage', data, 365);
    }
}
function clearData(type) {
    if (type === 'session') {
        createCookie(getSessionName(), '', 365);
    }
    else {
        createCookie('localStorage', '', 365);
    }
}
function getData(type) {
    // Get cookie data.
    const data = type === 'session'
        ? readCookie(getSessionName())
        : readCookie('localStorage');
    // If we have some data decode, parse and return it.
    return data ? JSON.parse(decodeURIComponent(data)) : {};
}
function getSessionName() {
    // If there is no name for this window, set one.
    // To ensure it's unquie use the current timestamp.
    if (!window.name) {
        window.name = new Date().getTime().toString();
    }
    return 'sessionStorage' + window.name;
}
let LocalStorageService = class LocalStorageService {
    constructor() {
        try {
            // Test webstorage existence.
            if (!window.localStorage || !window.sessionStorage) {
                throw new Error('exception');
            }
            // Test webstorage accessibility - Needed for Safari private browsing.
            window.localStorage.setItem('storage_test', '1');
            window.localStorage.removeItem('storage_test');
            this.localStorage = window.localStorage;
        }
        catch (e) {
            class CustomStorage {
                constructor(type) {
                    this.length = 0;
                    this.type = type;
                    // Init data, if already present
                    this.data = getData(type);
                }
                clear() {
                    this.data = {};
                    this.length = 0;
                    clearData(this.type);
                }
                getItem(key) {
                    return this.data[key] === undefined ? null : this.data[key];
                }
                key(i) {
                    // not perfect, but works
                    let ctr = 0;
                    for (const k in this.data) {
                        if (ctr === i) {
                            return k;
                        }
                        else {
                            ctr++;
                        }
                    }
                    return null;
                }
                removeItem(key) {
                    delete this.data[key];
                    this.length--;
                    setData(this.type, this.data);
                }
                setItem(key, value) {
                    this.data[key] = value + ''; // forces the value to a string
                    this.length++;
                    setData(this.type, this.data);
                }
            }
            // Replace window.localStorage and window.sessionStorage with out custom
            // implementation.
            const localStorage = new CustomStorage('local');
            const sessionStorage = new CustomStorage('session');
            Object.defineProperty(window, 'localStorage', {
                get: () => localStorage
            });
            this.localStorage = localStorage;
            this.sessionStorage = sessionStorage;
        }
    }
    setItem(key, value) {
        return this.localStorage.setItem(key, value);
    }
    getItem(key) {
        return this.localStorage.getItem(key);
    }
    clearItem(key) {
        return this.localStorage.removeItem(key);
    }
    clearAll() {
        return this.localStorage.clear();
    }
};
LocalStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LocalStorageService);



/***/ }),

/***/ "./src/app/core/notification/notification.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/notification/notification.module.ts ***!
  \**********************************************************/
/*! exports provided: NotificationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationModule", function() { return NotificationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification.service */ "./src/app/core/notification/notification.service.ts");




let NotificationModule = class NotificationModule {
};
NotificationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [],
        providers: [_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]]
    })
], NotificationModule);



/***/ }),

/***/ "./src/app/core/notification/notification.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/notification/notification.service.ts ***!
  \***********************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_notify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap-notify */ "./node_modules/bootstrap-notify/bootstrap-notify.js");
/* harmony import */ var bootstrap_notify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_notify__WEBPACK_IMPORTED_MODULE_3__);




const $ = jquery__WEBPACK_IMPORTED_MODULE_2__;
let NotificationService = class NotificationService {
    success(message) {
        $.notify({
            message
        }, {
            type: 'success',
            z_index: 8000,
        });
    }
    error(message) {
        $.notify({
            message
        }, {
            type: 'danger',
            z_index: 8000,
        });
    }
    success1(message, title) {
        $.notify({
            title: title + ' \n',
            message: '                                          ' + message
        }, {
            type: 'pastel-danger',
            delay: 5000,
            template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert" style="background-color: rgb(255, 255, 238);\n' +
                '\tborder-width: 0px;\n' +
                '\tborder-left-color: rgb(255, 179, 40);\n' +
                '\tborder-radius: 0px;\n' +
                '\tbox-shadow: 0px 0px 5px rgba(51, 51, 51, 0.3);\n' +
                '\tfont-family: \'Old Standard TT\', serif;\n' +
                '\tletter-spacing: 1px;">' +
                '<span data-notify="title" style="color: #5DADE2">{1}</span>' +
                '<span data-notify="message">{2}</span>' +
                '</div>'
        });
    }
};
NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], NotificationService);



/***/ }),

/***/ "./src/app/core/route-reusable-strategy.ts":
/*!*************************************************!*\
  !*** ./src/app/core/route-reusable-strategy.ts ***!
  \*************************************************/
/*! exports provided: RouteReusableStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteReusableStrategy", function() { return RouteReusableStrategy; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

/**
 * A route strategy allowing for explicit route reuse.
 * Used as a workaround for https://github.com/angular/angular/issues/18374
 * To reuse a given route, add `data: { reuse: true }` to the route definition.
 */
class RouteReusableStrategy extends _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouteReuseStrategy"] {
    shouldDetach(route) {
        return false;
    }
    store(route, detachedTree) { }
    shouldAttach(route) {
        return false;
    }
    retrieve(route) {
        return null;
    }
    shouldReuseRoute(future, curr) {
        return future.routeConfig === curr.routeConfig || future.data.reuse;
    }
}


/***/ }),

/***/ "./src/app/core/service/error-message.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/service/error-message.service.ts ***!
  \*******************************************************/
/*! exports provided: ErrorMessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessageService", function() { return ErrorMessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ErrorMessageService = class ErrorMessageService {
    constructor() {
        this._errors = [];
        this.errors$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    get errors() {
        return this._errors;
    }
    set(error, type, serviceUrl) {
        this._errors.push({
            id: Date.now(),
            error: error,
            type: type,
            serviceUrl: serviceUrl
        });
        this.errors$.emit(this._errors);
    }
    clear() {
        this._errors = [];
        this.errors$.emit(this._errors);
    }
};
ErrorMessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ErrorMessageService);



/***/ }),

/***/ "./src/app/core/service/index.ts":
/*!***************************************!*\
  !*** ./src/app/core/service/index.ts ***!
  \***************************************/
/*! exports provided: UserService, UtilService, ErrorMessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.service */ "./src/app/core/service/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]; });

/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.service */ "./src/app/core/service/util.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return _util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"]; });

/* harmony import */ var _error_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-message.service */ "./src/app/core/service/error-message.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorMessageService", function() { return _error_message_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessageService"]; });

// start:ng42.barrel



// end:ng42.barrel


/***/ }),

/***/ "./src/app/core/service/user.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/service/user.service.ts ***!
  \**********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _class_baseAPI_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../class/baseAPI.class */ "./src/app/core/class/baseAPI.class.ts");




let UserService = class UserService extends _class_baseAPI_class__WEBPACK_IMPORTED_MODULE_3__["BaseAPIClass"] {
    constructor(httpClient) {
        super(httpClient);
        this.httpClient = httpClient;
        this.baseUrl = '/user';
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], UserService);



/***/ }),

/***/ "./src/app/core/service/util.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/service/util.service.ts ***!
  \**********************************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UtilService = class UtilService {
    constructor() { }
    removeEmpty(obj) {
        for (const propName in obj) {
            if (obj[propName] === null ||
                obj[propName] === undefined ||
                obj[propName] === '' ||
                (Array.isArray(obj[propName]) && !obj[propName].length)) {
                delete obj[propName];
            }
        }
        return obj;
    }
    copyToClipboard(value) {
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = value;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    }
};
UtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], UtilService);



/***/ }),

/***/ "./src/app/corona-fear/corona-fear.component.css":
/*!*******************************************************!*\
  !*** ./src/app/corona-fear/corona-fear.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.container-fluid{\r\n  background-image: url('reportbg.svg');\r\n  width: 100%;\r\n  overflow: hidden;\r\n  min-height: 100vh;\r\n}\r\nform{\r\n  background-color: #FCF3CF ;\r\n  border-radius: 10px;\r\n  padding: 17px 12px 13px 17px;\r\n}\r\n/* only used for background overlay not needed for centering */\r\nform:before {\r\n  content: '';\r\n  height: 100%;\r\n  left: 0;\r\n  position: absolute;\r\n  top: 0;\r\n  width: 100%;\r\n  background-color: #FCF3CF;\r\n  z-index: -1;\r\n  border-radius: 10px;\r\n}\r\n.form-control{\r\n  float: none;\r\n  text-align: center;\r\n}\r\n.btn.btn-info.btn-lg.btn-block.btn-rounded.btn-default.text-uppercase.waves-effect.waves-light{\r\n  background-color: #F7DC6F ;\r\n  border: none;\r\n}\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yb25hLWZlYXIvY29yb25hLWZlYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxxQ0FBeUQ7RUFDekQsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsNEJBQTRCO0FBQzlCO0FBQ0EsOERBQThEO0FBQzlEO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb3JvbmEtZmVhci9jb3JvbmEtZmVhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jb250YWluZXItZmx1aWR7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9yZXBvcnRiZy5zdmdcIik7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5mb3Jte1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGQ0YzQ0YgO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMTdweCAxMnB4IDEzcHggMTdweDtcclxufVxyXG4vKiBvbmx5IHVzZWQgZm9yIGJhY2tncm91bmQgb3ZlcmxheSBub3QgbmVlZGVkIGZvciBjZW50ZXJpbmcgKi9cclxuZm9ybTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZDRjNDRjtcclxuICB6LWluZGV4OiAtMTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbiAgXHJcbi5mb3JtLWNvbnRyb2x7XHJcbiAgZmxvYXQ6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5idG4uYnRuLWluZm8uYnRuLWxnLmJ0bi1ibG9jay5idG4tcm91bmRlZC5idG4tZGVmYXVsdC50ZXh0LXVwcGVyY2FzZS53YXZlcy1lZmZlY3Qud2F2ZXMtbGlnaHR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3REM2RiA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/corona-fear/corona-fear.component.ts":
/*!******************************************************!*\
  !*** ./src/app/corona-fear/corona-fear.component.ts ***!
  \******************************************************/
/*! exports provided: CoronaFearComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoronaFearComponent", function() { return CoronaFearComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/notification/notification.service */ "./src/app/core/notification/notification.service.ts");







let CoronaFearComponent = class CoronaFearComponent {
    constructor(router, formBuilder, authenticationService, ns) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.ns = ns;
        this.isLoading = false;
        this.createForm();
    }
    ngOnInit() { }
    signup() {
        this.isLoading = true;
        this.authenticationService
            .saveCoronaFear(this.signupForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
            this.signupForm.markAsPristine();
            this.isLoading = false;
        }))
            .subscribe((user) => {
            this.router.navigate(['/homepage']);
            this.ns.success('Upload successful');
        }, (error) => {
            this.ns.error('Oops something went wrong!');
        });
    }
    createForm() {
        this.signupForm = this.formBuilder.group({
            location: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            responsibleHospital: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            age: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            statuses: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
};
CoronaFearComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _core__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _core_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }
];
CoronaFearComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-corona-fear',
        template: __webpack_require__(/*! raw-loader!./corona-fear.component.html */ "./node_modules/raw-loader/index.js!./src/app/corona-fear/corona-fear.component.html"),
        styles: [__webpack_require__(/*! ./corona-fear.component.css */ "./src/app/corona-fear/corona-fear.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _core__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
        _core_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]])
], CoronaFearComponent);



/***/ }),

/***/ "./src/app/essentials/Essentials.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/essentials/Essentials.pipe.ts ***!
  \***********************************************/
/*! exports provided: Essentials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Essentials", function() { return Essentials; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Essentials = class Essentials {
    transform(value, args) {
        if (!args) {
            return value;
        }
        return value.filter((val) => {
            let rVal = (val.arraylocation.toString().toLocaleLowerCase().includes(args.toLocaleString().toLocaleLowerCase()));
            return rVal;
        });
    }
};
Essentials = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'essentialFilter'
    })
], Essentials);



/***/ }),

/***/ "./src/app/essentials/essentials.component.css":
/*!*****************************************************!*\
  !*** ./src/app/essentials/essentials.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid{\r\n  background-image: url('other_bg.svg');\r\n  background-repeat: no-repeat;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  min-height: 100vh;\r\n}\r\n.justify-content-center{\r\n  margin-top: 22px;\r\n}\r\n.card{\r\n    margin-top: 10px;\r\n    min-height: 37vh;\r\n}\r\n@media only screen  and (max-width:1023px){\r\n  .card{\r\n    margin-top: 10px;\r\n    min-height: 18vh;\r\n  }\r\n}\r\n@media only screen and (min-width:1024px) and (max-width:1365px){\r\n  .card{\r\n    margin-top: 10px;\r\n    min-height: 18vh;\r\n  }\r\n}\r\n.essentials-container h2{\r\n    margin-top: 30px;\r\n    text-align: left;\r\n    font-size: 1.35rem;\r\n    font-family: Montserrat;\r\n    color:#2F3D74;\r\n}\r\n.card-text.text-left.essentials-div-title{\r\n    font-size: 0.93rem;\r\n    font-weight: bold;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    color: #2E4053;\r\n}\r\n.essentials-div-text{\r\n    font-size: 0.85rem;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-weight: normal;\r\n}\r\n.essentials-div{\r\n    background-color: white;\r\n    box-shadow: 0px 2px 5px 0px #c7c7c7;\r\n    border-radius: 4px;\r\n    line-height: 20px;\r\n    transition: 0.4s;\r\n    height:100%;\r\n    position:relative;\r\n}\r\n.essentials-div:hover{\r\n    background-color: white;\r\n    box-shadow: 0px 10px 15px 0px #c7c7c7;\r\n    border-radius: 4px;\r\n}\r\n.loading {\r\n    position: fixed;\r\n    z-index: 999;\r\n    height: 2em;\r\n    width: 2em;\r\n    overflow: show;\r\n    margin: auto;\r\n    top: 10em;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n  }\r\n/* Transparent Overlay */\r\n.loading:before {\r\n    content: '';\r\n    display: block;\r\n    position: fixed;\r\n    top: 10em;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: radial-gradient(rgba(20, 20, 20,.8), rgba(0, 0, 0, .8));\r\n\r\n    background: -webkit-radial-gradient(rgba(20, 20, 20,.8), rgba(0, 0, 0,.8));\r\n  }\r\n/* :not(:required) hides these rules from IE9 and below */\r\n.loading:not(:required) {\r\n    /* hide \"loading...\" text */\r\n    font: 0/0 a;\r\n    color: transparent;\r\n    text-shadow: none;\r\n    background-color: transparent;\r\n    border: 0;\r\n  }\r\n.loading:not(:required):after {\r\n    content: '';\r\n    display: block;\r\n    font-size: 10px;\r\n    width: 1em;\r\n    height: 1em;\r\n    margin-top: -0.5em;\r\n    -webkit-animation: spinner 150ms infinite linear;\r\n    animation: spinner 150ms infinite linear;\r\n    border-radius: 0.5em;\r\n    box-shadow: rgba(255,255,255, 0.75) 1.5em 0 0 0, rgba(255,255,255, 0.75) 1.1em 1.1em 0 0, rgba(255,255,255, 0.75) 0 1.5em 0 0, rgba(255,255,255, 0.75) -1.1em 1.1em 0 0, rgba(255,255,255, 0.75) -1.5em 0 0 0, rgba(255,255,255, 0.75) -1.1em -1.1em 0 0, rgba(255,255,255, 0.75) 0 -1.5em 0 0, rgba(255,255,255, 0.75) 1.1em -1.1em 0 0;\r\n  }\r\n/* Animation */\r\n@-webkit-keyframes spinner {\r\n    0% {\r\n      -webkit-transform: rotate(0deg);\r\n      transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      -webkit-transform: rotate(360deg);\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n@keyframes spinner {\r\n    0% {\r\n      -webkit-transform: rotate(0deg);\r\n      transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      -webkit-transform: rotate(360deg);\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\nh2 {\r\n  text-align:center;\r\n  font-size:60px;\r\n}\r\na {\r\n  color: #f5b041;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXNzZW50aWFscy9lc3NlbnRpYWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBeUQ7RUFDekQsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFDQTtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7QUFDRjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGFBQWE7QUFDakI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsNERBQTREO0lBQzVELGNBQWM7QUFDbEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQiw0REFBNEQ7SUFDNUQsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsbUNBQW1DO0lBQ25DLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixxQ0FBcUM7SUFDckMsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxVQUFVO0lBQ1YsY0FBYztJQUNkLFlBQVk7SUFDWixTQUFTO0lBQ1QsT0FBTztJQUNQLFNBQVM7SUFDVCxRQUFRO0VBQ1Y7QUFFQSx3QkFBd0I7QUFDeEI7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGVBQWU7SUFDZixTQUFTO0lBQ1QsT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUVBQW1FOztJQUVuRSwwRUFBMEU7RUFDNUU7QUFFQSx5REFBeUQ7QUFDekQ7SUFDRSwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLFNBQVM7RUFDWDtBQUVBO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxlQUFlO0lBQ2YsVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0RBQWdEO0lBSWhELHdDQUF3QztJQUN4QyxvQkFBb0I7SUFFcEIsd1VBQXdVO0VBQzFVO0FBRUEsY0FBYztBQUVkO0lBQ0U7TUFDRSwrQkFBK0I7TUFJL0IsdUJBQXVCO0lBQ3pCO0lBQ0E7TUFDRSxpQ0FBaUM7TUFJakMseUJBQXlCO0lBQzNCO0VBQ0Y7QUFpQ0E7SUFDRTtNQUNFLCtCQUErQjtNQUkvQix1QkFBdUI7SUFDekI7SUFDQTtNQUNFLGlDQUFpQztNQUlqQyx5QkFBeUI7SUFDM0I7RUFDRjtBQUNGO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9lc3NlbnRpYWxzL2Vzc2VudGlhbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWR7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9vdGhlcl9iZy5zdmdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcbi5qdXN0aWZ5LWNvbnRlbnQtY2VudGVye1xyXG4gIG1hcmdpbi10b3A6IDIycHg7XHJcbn1cclxuLmNhcmR7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWluLWhlaWdodDogMzd2aDtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gIGFuZCAobWF4LXdpZHRoOjEwMjNweCl7XHJcbiAgLmNhcmR7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWluLWhlaWdodDogMTh2aDtcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjRweCkgYW5kIChtYXgtd2lkdGg6MTM2NXB4KXtcclxuICAuY2FyZHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxOHZoO1xyXG4gIH1cclxufVxyXG4uZXNzZW50aWFscy1jb250YWluZXIgaDJ7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMS4zNXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gICAgY29sb3I6IzJGM0Q3NDtcclxufVxyXG5cclxuLmNhcmQtdGV4dC50ZXh0LWxlZnQuZXNzZW50aWFscy1kaXYtdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDAuOTNyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjMkU0MDUzO1xyXG59XHJcbi5lc3NlbnRpYWxzLWRpdi10ZXh0e1xyXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG4uZXNzZW50aWFscy1kaXZ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNXB4IDBweCAjYzdjN2M3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxufVxyXG4uZXNzZW50aWFscy1kaXY6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDE1cHggMHB4ICNjN2M3Yzc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmxvYWRpbmcge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgaGVpZ2h0OiAyZW07XHJcbiAgICB3aWR0aDogMmVtO1xyXG4gICAgb3ZlcmZsb3c6IHNob3c7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0b3A6IDEwZW07XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICAvKiBUcmFuc3BhcmVudCBPdmVybGF5ICovXHJcbiAgLmxvYWRpbmc6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDEwZW07XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQocmdiYSgyMCwgMjAsIDIwLC44KSwgcmdiYSgwLCAwLCAwLCAuOCkpO1xyXG5cclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KHJnYmEoMjAsIDIwLCAyMCwuOCksIHJnYmEoMCwgMCwgMCwuOCkpO1xyXG4gIH1cclxuXHJcbiAgLyogOm5vdCg6cmVxdWlyZWQpIGhpZGVzIHRoZXNlIHJ1bGVzIGZyb20gSUU5IGFuZCBiZWxvdyAqL1xyXG4gIC5sb2FkaW5nOm5vdCg6cmVxdWlyZWQpIHtcclxuICAgIC8qIGhpZGUgXCJsb2FkaW5nLi4uXCIgdGV4dCAqL1xyXG4gICAgZm9udDogMC8wIGE7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gIH1cclxuXHJcbiAgLmxvYWRpbmc6bm90KDpyZXF1aXJlZCk6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHdpZHRoOiAxZW07XHJcbiAgICBoZWlnaHQ6IDFlbTtcclxuICAgIG1hcmdpbi10b3A6IC0wLjVlbTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGlubmVyIDE1MG1zIGluZmluaXRlIGxpbmVhcjtcclxuICAgIC1tb3otYW5pbWF0aW9uOiBzcGlubmVyIDE1MG1zIGluZmluaXRlIGxpbmVhcjtcclxuICAgIC1tcy1hbmltYXRpb246IHNwaW5uZXIgMTUwbXMgaW5maW5pdGUgbGluZWFyO1xyXG4gICAgLW8tYW5pbWF0aW9uOiBzcGlubmVyIDE1MG1zIGluZmluaXRlIGxpbmVhcjtcclxuICAgIGFuaW1hdGlvbjogc3Bpbm5lciAxNTBtcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogcmdiYSgyNTUsMjU1LDI1NSwgMC43NSkgMS41ZW0gMCAwIDAsIHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIDEuMWVtIDEuMWVtIDAgMCwgcmdiYSgyNTUsMjU1LDI1NSwgMC43NSkgMCAxLjVlbSAwIDAsIHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIC0xLjFlbSAxLjFlbSAwIDAsIHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIC0xLjVlbSAwIDAgMCwgcmdiYSgyNTUsMjU1LDI1NSwgMC43NSkgLTEuMWVtIC0xLjFlbSAwIDAsIHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIDAgLTEuNWVtIDAgMCwgcmdiYSgyNTUsMjU1LDI1NSwgMC43NSkgMS4xZW0gLTEuMWVtIDAgMDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIDEuNWVtIDAgMCAwLCByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAxLjFlbSAxLjFlbSAwIDAsIHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIDAgMS41ZW0gMCAwLCByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAtMS4xZW0gMS4xZW0gMCAwLCByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAtMS41ZW0gMCAwIDAsIHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIC0xLjFlbSAtMS4xZW0gMCAwLCByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAwIC0xLjVlbSAwIDAsIHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIDEuMWVtIC0xLjFlbSAwIDA7XHJcbiAgfVxyXG5cclxuICAvKiBBbmltYXRpb24gKi9cclxuXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHNwaW5uZXIge1xyXG4gICAgMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEAtbW96LWtleWZyYW1lcyBzcGlubmVyIHtcclxuICAgIDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuICBALW8ta2V5ZnJhbWVzIHNwaW5uZXIge1xyXG4gICAgMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgc3Bpbm5lciB7XHJcbiAgICAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbmgyIHtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBmb250LXNpemU6NjBweDtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6ICNmNWIwNDE7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/essentials/essentials.component.ts":
/*!****************************************************!*\
  !*** ./src/app/essentials/essentials.component.ts ***!
  \****************************************************/
/*! exports provided: EssentialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EssentialsComponent", function() { return EssentialsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");



let EssentialsComponent = class EssentialsComponent {
    constructor(apicall) {
        this.apicall = apicall;
        this.locations1 = [];
        this.locations2 = [];
        this.locations3 = [];
        this.apicall.getEssentials().subscribe(data => {
            this.essentials = data;
            this.grocery = this.essentials.filter(val => val.Category.toString() === 'Grocery and essential items');
            this.essentials.forEach(ess => {
                ess.arraylocation.forEach(loc => {
                    if (!this.locations1.includes(loc.trim())) {
                        this.locations1.push(loc.trim());
                    }
                });
            });
            this.fruits = this.essentials.filter(val => val.Category.toString() === 'Vegetables, fruits, & poultry');
            this.fruits.forEach(ess => {
                ess.arraylocation.forEach(loc => {
                    if (!this.locations2.includes(loc)) {
                        this.locations2.push(loc.trim());
                    }
                });
            });
            this.medicine = this.essentials.filter(val => val.Category.toString() === 'Medicinal supplies');
            this.medicine.forEach(ess => {
                ess.arraylocation.forEach(loc => {
                    if (!this.locations3.includes(loc.trim())) {
                        this.locations3.push(loc.trim());
                    }
                });
            });
            this.ready = true;
            this.showstuff = true;
        });
    }
    ngOnInit() {
    }
};
EssentialsComponent.ctorParameters = () => [
    { type: _core__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
EssentialsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-essentials',
        template: __webpack_require__(/*! raw-loader!./essentials.component.html */ "./node_modules/raw-loader/index.js!./src/app/essentials/essentials.component.html"),
        styles: [__webpack_require__(/*! ./essentials.component.css */ "./src/app/essentials/essentials.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
], EssentialsComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.col-md-6 p{\r\n    text-align: left;\r\n    font-family: Montserrat;\r\n    color: #162C69;\r\n    text-align:center;\r\n    font-size:14px;\r\n}\r\na{\r\n    padding: 0 20px 0 20px;\r\n}\r\n.col-md-6 a{\r\n    display: inline-block;\r\n    font-size:14px;\r\n    font-weight: bold;\r\n    font-family: Montserrat;\r\n    color: #162C69;\r\n}\r\n#left{\r\n    text-align: left;\r\n}\r\n#right{\r\n    text-align: right;\r\n}\r\n.last{\r\n    margin-top: 20px;\r\n}\r\n.last p{\r\n    text-align: left;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n    font-size: 8.5px;\r\n    color: #707B7C;\r\n}\r\n/*Responsive Footer*/\r\n@media screen and (max-width:767px) {\r\n    .footer p{\r\n        margin: 0 auto;\r\n    }\r\n\r\n    .col-md-6 a{\r\n        width: 100%;\r\n        text-align: center;\r\n        display: inline-block;\r\n        font-size: 13px;\r\n        font-family: Montserrat;\r\n        color: #162C69;\r\n      \r\n    }\r\n    \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsc0hBQXNIO0lBQ3RILGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBRUEsb0JBQW9CO0FBQ3BCO0lBQ0k7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtRQUNsQixxQkFBcUI7UUFDckIsZUFBZTtRQUNmLHVCQUF1QjtRQUN2QixjQUFjOztJQUVsQjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY29sLW1kLTYgcHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcclxuICAgIGNvbG9yOiAjMTYyQzY5O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBmb250LXNpemU6MTRweDtcclxufVxyXG5he1xyXG4gICAgcGFkZGluZzogMCAyMHB4IDAgMjBweDtcclxufVxyXG5cclxuLmNvbC1tZC02IGF7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6MTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcbiAgICBjb2xvcjogIzE2MkM2OTtcclxufVxyXG5cclxuI2xlZnR7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbiNyaWdodHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5sYXN0e1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4ubGFzdCBwe1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDguNXB4O1xyXG4gICAgY29sb3I6ICM3MDdCN0M7XHJcbn1cclxuXHJcbi8qUmVzcG9uc2l2ZSBGb290ZXIqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KSB7XHJcbiAgICAuZm9vdGVyIHB7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC1tZC02IGF7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcbiAgICAgICAgY29sb3I6ICMxNjJDNjk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/getcorona-fear/getcorona-fear.component.css":
/*!*************************************************************!*\
  !*** ./src/app/getcorona-fear/getcorona-fear.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Lato:300,400');\r\n.container-fluid{\r\n  background-image: url('other_bg.svg');\r\n  width: 100%;\r\n  overflow: hidden;\r\n  min-height: 100vh;\r\n}\r\n.head-text h3{\r\n  margin-top: 30px;\r\n  text-align: center;\r\n  font-size: 1.75rem;\r\n  color: #162C69;\r\n  font-family:Montserrat;\r\n}\r\n.head-text p{\r\n  padding: 0 150px 0 150px;\r\n  font-size: 1rem;\r\n  text-align: center;\r\n  color: #162C69;\r\n}\r\n.suspected-container{\r\n  display:grid;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  overflow-x: hidden;\r\n  color: #162C69;\r\n\r\n}\r\n@media only screen and (max-width:1365px){\r\n  .suspected-container {\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n}\r\n@media only screen and (max-width: 768px) {\r\n  .suspected-container {\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n  .card-text.text-left.suspected-div-title{\r\n    font-size: 0.88rem;\r\n  }\r\n  .suspected-div-text{\r\n    font-size: 0.77rem;\r\n  }\r\n}\r\n@media only screen and (max-width:1365px){\r\n  .head-text h3{\r\n    margin-top: 30px;\r\n    text-align: left;\r\n    font-size: 1.35rem;\r\n  }\r\n  .head-text p{\r\n    text-align: left;\r\n    padding: 0;\r\n    font-size: 1rem;\r\n  }\r\n}\r\n@media only screen and (max-width:1023px){\r\n  .head-text h3{\r\n    margin-top: 30px;\r\n    text-align: left;\r\n    font-size: 1.35rem;\r\n  }\r\n  .head-text p{\r\n    text-align: left;\r\n    padding: 0;\r\n    font-size: 1rem;\r\n  }\r\n}\r\n@media only screen and (max-width:767px){\r\n  .head-text h3{\r\n    margin-top: 30px;\r\n    text-align: left;\r\n    font-size: 1.35rem;\r\n  }\r\n  .head-text p{\r\n    text-align: left;\r\n    padding: 0;\r\n    font-size: 1rem;\r\n  }\r\n}\r\n@media only screen and (max-width: 576px) {\r\n  .suspected-container {\r\n    grid-template-columns:1fr;\r\n  }\r\n  .head-text h3{\r\n    margin-top: 30px;\r\n    text-align: left;\r\n  }\r\n  .head-text p{\r\n    text-align: left;\r\n  }\r\n}\r\n.suspected-div{\r\n  background-color: white;\r\n  box-shadow: 0px 2px 5px 0px #c7c7c7;\r\n  border-radius: 4px;\r\n  transition: 0.4s;\r\n  height:100%;\r\n  position:relative;\r\n}\r\n.suspected-div:hover{\r\n  background-color: white;\r\n  box-shadow: 0px 10px 15px 0px #c7c7c7;\r\n  border-radius: 4px;\r\n}\r\n.suspected-div-title{\r\n  font-family: AvertaSemiBold;\r\n}\r\n.suspected-div-text{\r\n  font-family: AvertaLight;\r\n}\r\n.suspected-div-time{\r\n  font-family: AvertaLight;\r\n}\r\n.footer{\r\n  position: absolute;\r\n  bottom:0;\r\n}\r\n.loading {\r\n  position: fixed;\r\n  z-index: 999;\r\n  height: 2em;\r\n  width: 2em;\r\n  overflow: show;\r\n  margin: auto;\r\n  top: 10em;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n}\r\n/* Transparent Overlay */\r\n.loading:before {\r\n  content: '';\r\n  display: block;\r\n  position: fixed;\r\n  top: 10em;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: radial-gradient(rgba(20, 20, 20,.8), rgba(0, 0, 0, .8));\r\n  background: -webkit-radial-gradient(rgba(20, 20, 20,.8), rgba(0, 0, 0,.8));\r\n}\r\n/* :not(:required) hides these rules from IE9 and below */\r\n.loading:not(:required) {\r\n  /* hide \"loading...\" text */\r\n  font: 0/0 a;\r\n  color: transparent;\r\n  text-shadow: none;\r\n  background-color: transparent;\r\n  border: 0;\r\n}\r\n.loading:not(:required):after {\r\n  content: '';\r\n  display: block;\r\n  font-size: 10px;\r\n  width: 1em;\r\n  height: 1em;\r\n  margin-top: -0.5em;\r\n  -webkit-animation: spinner 150ms infinite linear;\r\n  animation: spinner 150ms infinite linear;\r\n  border-radius: 0.5em;\r\n  box-shadow: rgba(255,255,255, 0.75) 1.5em 0 0 0, rgba(255,255,255, 0.75) 1.1em 1.1em 0 0, rgba(255,255,255, 0.75) 0 1.5em 0 0, rgba(255,255,255, 0.75) -1.1em 1.1em 0 0, rgba(255,255,255, 0.75) -1.5em 0 0 0, rgba(255,255,255, 0.75) -1.1em -1.1em 0 0, rgba(255,255,255, 0.75) 0 -1.5em 0 0, rgba(255,255,255, 0.75) 1.1em -1.1em 0 0;\r\n}\r\n/* Animation */\r\n@-webkit-keyframes spinner {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes spinner {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2V0Y29yb25hLWZlYXIvZ2V0Y29yb25hLWZlYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtRUFBbUU7QUFDbkU7RUFDRSxxQ0FBeUQ7RUFDekQsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGNBQWM7O0FBRWhCO0FBQ0E7RUFDRTtJQUNFLDhCQUE4QjtFQUNoQztBQUNGO0FBRUE7RUFDRTtJQUNFLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixlQUFlO0VBQ2pCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsZUFBZTtFQUNqQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGVBQWU7RUFDakI7QUFDRjtBQUVBO0VBQ0U7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGO0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHFDQUFxQztFQUNyQyxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0FBQ1Y7QUFDQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7RUFDVixjQUFjO0VBQ2QsWUFBWTtFQUNaLFNBQVM7RUFDVCxPQUFPO0VBQ1AsU0FBUztFQUNULFFBQVE7QUFDVjtBQUVBLHdCQUF3QjtBQUN4QjtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZUFBZTtFQUNmLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixtRUFBbUU7RUFDbkUsMEVBQTBFO0FBQzVFO0FBRUEseURBQXlEO0FBQ3pEO0VBQ0UsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixTQUFTO0FBQ1g7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZUFBZTtFQUNmLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdEQUFnRDtFQUloRCx3Q0FBd0M7RUFDeEMsb0JBQW9CO0VBRXBCLHdVQUF3VTtBQUMxVTtBQUlBLGNBQWM7QUFFZDtFQUNFO0lBQ0UsK0JBQStCO0lBSS9CLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsaUNBQWlDO0lBSWpDLHlCQUF5QjtFQUMzQjtBQUNGO0FBaUNBO0VBQ0U7SUFDRSwrQkFBK0I7SUFJL0IsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxpQ0FBaUM7SUFJakMseUJBQXlCO0VBQzNCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9nZXRjb3JvbmEtZmVhci9nZXRjb3JvbmEtZmVhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCw0MDAnKTtcclxuLmNvbnRhaW5lci1mbHVpZHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL290aGVyX2JnLnN2Z1wiKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcbi5oZWFkLXRleHQgaDN7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xyXG4gIGNvbG9yOiAjMTYyQzY5O1xyXG4gIGZvbnQtZmFtaWx5Ok1vbnRzZXJyYXQ7XHJcbn1cclxuLmhlYWQtdGV4dCBwe1xyXG4gIHBhZGRpbmc6IDAgMTUwcHggMCAxNTBweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjMTYyQzY5O1xyXG59XHJcbi5zdXNwZWN0ZWQtY29udGFpbmVye1xyXG4gIGRpc3BsYXk6Z3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBjb2xvcjogIzE2MkM2OTtcclxuXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEzNjVweCl7XHJcbiAgLnN1c3BlY3RlZC1jb250YWluZXIge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5zdXNwZWN0ZWQtY29udGFpbmVyIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICB9XHJcbiAgLmNhcmQtdGV4dC50ZXh0LWxlZnQuc3VzcGVjdGVkLWRpdi10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMC44OHJlbTtcclxuICB9XHJcbiAgLnN1c3BlY3RlZC1kaXYtdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMC43N3JlbTtcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEzNjVweCl7XHJcbiAgLmhlYWQtdGV4dCBoM3tcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAxLjM1cmVtO1xyXG4gIH1cclxuICAuaGVhZC10ZXh0IHB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwMjNweCl7XHJcbiAgLmhlYWQtdGV4dCBoM3tcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAxLjM1cmVtO1xyXG4gIH1cclxuICAuaGVhZC10ZXh0IHB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KXtcclxuICAuaGVhZC10ZXh0IGgze1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDEuMzVyZW07XHJcbiAgfVxyXG4gIC5oZWFkLXRleHQgcHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIC5zdXNwZWN0ZWQtY29udGFpbmVyIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczoxZnI7XHJcbiAgfVxyXG4gIC5oZWFkLXRleHQgaDN7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgLmhlYWQtdGV4dCBwe1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbn1cclxuXHJcbi5zdXNwZWN0ZWQtZGl2e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDBweCAycHggNXB4IDBweCAjYzdjN2M3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG59XHJcblxyXG4uc3VzcGVjdGVkLWRpdjpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAwcHggMTBweCAxNXB4IDBweCAjYzdjN2M3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLnN1c3BlY3RlZC1kaXYtdGl0bGV7XHJcbiAgZm9udC1mYW1pbHk6IEF2ZXJ0YVNlbWlCb2xkO1xyXG59XHJcblxyXG4uc3VzcGVjdGVkLWRpdi10ZXh0e1xyXG4gIGZvbnQtZmFtaWx5OiBBdmVydGFMaWdodDtcclxufVxyXG5cclxuLnN1c3BlY3RlZC1kaXYtdGltZXtcclxuICBmb250LWZhbWlseTogQXZlcnRhTGlnaHQ7XHJcbn1cclxuXHJcbi5mb290ZXJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTowO1xyXG59XHJcbi5sb2FkaW5nIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIGhlaWdodDogMmVtO1xyXG4gIHdpZHRoOiAyZW07XHJcbiAgb3ZlcmZsb3c6IHNob3c7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRvcDogMTBlbTtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuLyogVHJhbnNwYXJlbnQgT3ZlcmxheSAqL1xyXG4ubG9hZGluZzpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDEwZW07XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KHJnYmEoMjAsIDIwLCAyMCwuOCksIHJnYmEoMCwgMCwgMCwgLjgpKTtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChyZ2JhKDIwLCAyMCwgMjAsLjgpLCByZ2JhKDAsIDAsIDAsLjgpKTtcclxufVxyXG5cclxuLyogOm5vdCg6cmVxdWlyZWQpIGhpZGVzIHRoZXNlIHJ1bGVzIGZyb20gSUU5IGFuZCBiZWxvdyAqL1xyXG4ubG9hZGluZzpub3QoOnJlcXVpcmVkKSB7XHJcbiAgLyogaGlkZSBcImxvYWRpbmcuLi5cIiB0ZXh0ICovXHJcbiAgZm9udDogMC8wIGE7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHRleHQtc2hhZG93OiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuLmxvYWRpbmc6bm90KDpyZXF1aXJlZCk6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICB3aWR0aDogMWVtO1xyXG4gIGhlaWdodDogMWVtO1xyXG4gIG1hcmdpbi10b3A6IC0wLjVlbTtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogc3Bpbm5lciAxNTBtcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgLW1vei1hbmltYXRpb246IHNwaW5uZXIgMTUwbXMgaW5maW5pdGUgbGluZWFyO1xyXG4gIC1tcy1hbmltYXRpb246IHNwaW5uZXIgMTUwbXMgaW5maW5pdGUgbGluZWFyO1xyXG4gIC1vLWFuaW1hdGlvbjogc3Bpbm5lciAxNTBtcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgYW5pbWF0aW9uOiBzcGlubmVyIDE1MG1zIGluZmluaXRlIGxpbmVhcjtcclxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIDEuNWVtIDAgMCAwLCByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAxLjFlbSAxLjFlbSAwIDAsIHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIDAgMS41ZW0gMCAwLCByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAtMS4xZW0gMS4xZW0gMCAwLCByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAtMS41ZW0gMCAwIDAsIHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIC0xLjFlbSAtMS4xZW0gMCAwLCByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAwIC0xLjVlbSAwIDAsIHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIDEuMWVtIC0xLjFlbSAwIDA7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgyNTUsMjU1LDI1NSwgMC43NSkgMS41ZW0gMCAwIDAsIHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIDEuMWVtIDEuMWVtIDAgMCwgcmdiYSgyNTUsMjU1LDI1NSwgMC43NSkgMCAxLjVlbSAwIDAsIHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIC0xLjFlbSAxLjFlbSAwIDAsIHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIC0xLjVlbSAwIDAgMCwgcmdiYSgyNTUsMjU1LDI1NSwgMC43NSkgLTEuMWVtIC0xLjFlbSAwIDAsIHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIDAgLTEuNWVtIDAgMCwgcmdiYSgyNTUsMjU1LDI1NSwgMC43NSkgMS4xZW0gLTEuMWVtIDAgMDtcclxufVxyXG5cclxuXHJcblxyXG4vKiBBbmltYXRpb24gKi9cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzcGlubmVyIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIHNwaW5uZXIge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5ALW8ta2V5ZnJhbWVzIHNwaW5uZXIge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIHNwaW5uZXIge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/getcorona-fear/getcorona-fear.component.ts":
/*!************************************************************!*\
  !*** ./src/app/getcorona-fear/getcorona-fear.component.ts ***!
  \************************************************************/
/*! exports provided: GetcoronaFearComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetcoronaFearComponent", function() { return GetcoronaFearComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/authentication */ "./src/app/core/authentication/index.ts");



let GetcoronaFearComponent = class GetcoronaFearComponent {
    constructor(apicall) {
        this.apicall = apicall;
        this.apicall.getCoronaFear().subscribe(data => {
            this.coronaFeardata = data;
            if (this.coronaFeardata.length < 3) {
                this.colorbox = ['dark', 'light', 'dark', 'light'];
                this.textbox = ['white', 'black', 'white', 'black'];
            }
            else {
                this.colorbox = ['dark', 'dark', 'light', 'light'];
                this.textbox = ['white', 'white', 'black', 'black'];
            }
            this.marketing = true;
        });
    }
    gotoUrl(urlToOpen) {
        let url = '';
        if (!/^http[s]?:\/\//.test(urlToOpen)) {
            url += 'http://';
        }
        url += urlToOpen;
        window.open(url, '_blank');
    }
    ngOnInit() {
    }
};
GetcoronaFearComponent.ctorParameters = () => [
    { type: _core_authentication__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
GetcoronaFearComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-getcorona-fear',
        template: __webpack_require__(/*! raw-loader!./getcorona-fear.component.html */ "./node_modules/raw-loader/index.js!./src/app/getcorona-fear/getcorona-fear.component.html"),
        styles: [__webpack_require__(/*! ./getcorona-fear.component.css */ "./src/app/getcorona-fear/getcorona-fear.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_authentication__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
], GetcoronaFearComponent);



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .container-fluid{\r\n    background-image: url(\"../../assets/images/l.svg\");\r\n    position : absolute;  \r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0ciLCJmaWxlIjoic3JjL2FwcC9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmNvbnRhaW5lci1mbHVpZHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvbC5zdmdcIik7XHJcbiAgICBwb3NpdGlvbiA6IGFic29sdXRlOyAgXHJcbn0gKi8iXX0= */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomepageComponent = class HomepageComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-homepage',
        template: __webpack_require__(/*! raw-loader!./homepage.component.html */ "./node_modules/raw-loader/index.js!./src/app/homepage/homepage.component.html"),
        styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomepageComponent);



/***/ }),

/***/ "./src/app/hospital-list/hospital-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/hospital-list/hospital-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container h3{\r\n  margin-top: 20px;\r\n  font-family: Montserrat;\r\n  color: #162C69;\r\n  font-size:1.60rem ;\r\n  font-weight: bold;\r\n  text-align: center;\r\n}\r\n.d-flex.justify-content-center.align-items-center{\r\n  width: 100%;\r\n}\r\n.tr-class{\r\n  background-color: #ACAAD3\r\n}\r\n.table-responsive-md{\r\n  height: 700px;\r\n  overflow-y: auto;\r\n  font-size: 0.75rem;\r\n  letter-spacing: 0;\r\n  line-height: 1.35rem;\r\n}\r\n@media only screen and (max-width:767px){\r\n.container h3{\r\n  font-size:1.25rem ;\r\n  text-align: left;\r\n}  \r\n}\r\n.loading {\r\n  position: fixed;\r\n  z-index: 999;\r\n  height: 2em;\r\n  width: 2em;\r\n  overflow: show;\r\n  margin: auto;\r\n  top: 10em;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n}\r\n/* Transparent Overlay */\r\n.loading:before {\r\n  content: '';\r\n  display: block;\r\n  position: fixed;\r\n  top: 10em;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: radial-gradient(rgba(20, 20, 20,.8), rgba(0, 0, 0, .8));\r\n\r\n  background: -webkit-radial-gradient(rgba(20, 20, 20,.8), rgba(0, 0, 0,.8));\r\n}\r\n/* :not(:required) hides these rules from IE9 and below */\r\n.loading:not(:required) {\r\n  /* hide \"loading...\" text */\r\n  font: 0/0 a;\r\n  color: transparent;\r\n  text-shadow: none;\r\n  background-color: transparent;\r\n  border: 0;\r\n}\r\n.loading:not(:required):after {\r\n  content: '';\r\n  display: block;\r\n  font-size: 10px;\r\n  width: 1em;\r\n  height: 1em;\r\n  margin-top: -0.5em;\r\n  -webkit-animation: spinner 150ms infinite linear;\r\n  animation: spinner 150ms infinite linear;\r\n  border-radius: 0.5em;\r\n  box-shadow: rgba(255,255,255, 0.75) 1.5em 0 0 0, rgba(255,255,255, 0.75) 1.1em 1.1em 0 0, rgba(255,255,255, 0.75) 0 1.5em 0 0, rgba(255,255,255, 0.75) -1.1em 1.1em 0 0, rgba(255,255,255, 0.75) -1.5em 0 0 0, rgba(255,255,255, 0.75) -1.1em -1.1em 0 0, rgba(255,255,255, 0.75) 0 -1.5em 0 0, rgba(255,255,255, 0.75) 1.1em -1.1em 0 0;\r\n}\r\n/* Animation */\r\n@-webkit-keyframes spinner {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes spinner {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n.table-responsive-sm {\r\n  margin-top: 10px;\r\n  max-height:600px;\r\n  max-width: 600px;\r\n  overflow-x:auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9zcGl0YWwtbGlzdC9ob3NwaXRhbC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRTtBQUNGO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCO0FBQ0E7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFDQTtBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLGNBQWM7RUFDZCxZQUFZO0VBQ1osU0FBUztFQUNULE9BQU87RUFDUCxTQUFTO0VBQ1QsUUFBUTtBQUNWO0FBRUEsd0JBQXdCO0FBQ3hCO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxlQUFlO0VBQ2YsU0FBUztFQUNULE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1FQUFtRTs7RUFFbkUsMEVBQTBFO0FBQzVFO0FBRUEseURBQXlEO0FBQ3pEO0VBQ0UsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixTQUFTO0FBQ1g7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZUFBZTtFQUNmLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdEQUFnRDtFQUloRCx3Q0FBd0M7RUFDeEMsb0JBQW9CO0VBRXBCLHdVQUF3VTtBQUMxVTtBQUVBLGNBQWM7QUFFZDtFQUNFO0lBQ0UsK0JBQStCO0lBSS9CLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsaUNBQWlDO0lBSWpDLHlCQUF5QjtFQUMzQjtBQUNGO0FBaUNBO0VBQ0U7SUFDRSwrQkFBK0I7SUFJL0IsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxpQ0FBaUM7SUFJakMseUJBQXlCO0VBQzNCO0FBQ0Y7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9ob3NwaXRhbC1saXN0L2hvc3BpdGFsLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIgaDN7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcclxuICBjb2xvcjogIzE2MkM2OTtcclxuICBmb250LXNpemU6MS42MHJlbSA7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5kLWZsZXguanVzdGlmeS1jb250ZW50LWNlbnRlci5hbGlnbi1pdGVtcy1jZW50ZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnRyLWNsYXNze1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNBQ0FBRDNcclxufVxyXG4udGFibGUtcmVzcG9uc2l2ZS1tZHtcclxuICBoZWlnaHQ6IDcwMHB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjM1cmVtO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCl7XHJcbi5jb250YWluZXIgaDN7XHJcbiAgZm9udC1zaXplOjEuMjVyZW0gO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn0gIFxyXG59XHJcbi5sb2FkaW5nIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIGhlaWdodDogMmVtO1xyXG4gIHdpZHRoOiAyZW07XHJcbiAgb3ZlcmZsb3c6IHNob3c7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRvcDogMTBlbTtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuLyogVHJhbnNwYXJlbnQgT3ZlcmxheSAqL1xyXG4ubG9hZGluZzpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDEwZW07XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KHJnYmEoMjAsIDIwLCAyMCwuOCksIHJnYmEoMCwgMCwgMCwgLjgpKTtcclxuXHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQocmdiYSgyMCwgMjAsIDIwLC44KSwgcmdiYSgwLCAwLCAwLC44KSk7XHJcbn1cclxuXHJcbi8qIDpub3QoOnJlcXVpcmVkKSBoaWRlcyB0aGVzZSBydWxlcyBmcm9tIElFOSBhbmQgYmVsb3cgKi9cclxuLmxvYWRpbmc6bm90KDpyZXF1aXJlZCkge1xyXG4gIC8qIGhpZGUgXCJsb2FkaW5nLi4uXCIgdGV4dCAqL1xyXG4gIGZvbnQ6IDAvMCBhO1xyXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi5sb2FkaW5nOm5vdCg6cmVxdWlyZWQpOmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgd2lkdGg6IDFlbTtcclxuICBoZWlnaHQ6IDFlbTtcclxuICBtYXJnaW4tdG9wOiAtMC41ZW07XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW5uZXIgMTUwbXMgaW5maW5pdGUgbGluZWFyO1xyXG4gIC1tb3otYW5pbWF0aW9uOiBzcGlubmVyIDE1MG1zIGluZmluaXRlIGxpbmVhcjtcclxuICAtbXMtYW5pbWF0aW9uOiBzcGlubmVyIDE1MG1zIGluZmluaXRlIGxpbmVhcjtcclxuICAtby1hbmltYXRpb246IHNwaW5uZXIgMTUwbXMgaW5maW5pdGUgbGluZWFyO1xyXG4gIGFuaW1hdGlvbjogc3Bpbm5lciAxNTBtcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAxLjVlbSAwIDAgMCwgcmdiYSgyNTUsMjU1LDI1NSwgMC43NSkgMS4xZW0gMS4xZW0gMCAwLCByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAwIDEuNWVtIDAgMCwgcmdiYSgyNTUsMjU1LDI1NSwgMC43NSkgLTEuMWVtIDEuMWVtIDAgMCwgcmdiYSgyNTUsMjU1LDI1NSwgMC43NSkgLTEuNWVtIDAgMCAwLCByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAtMS4xZW0gLTEuMWVtIDAgMCwgcmdiYSgyNTUsMjU1LDI1NSwgMC43NSkgMCAtMS41ZW0gMCAwLCByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAxLjFlbSAtMS4xZW0gMCAwO1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIDEuNWVtIDAgMCAwLCByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAxLjFlbSAxLjFlbSAwIDAsIHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIDAgMS41ZW0gMCAwLCByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAtMS4xZW0gMS4xZW0gMCAwLCByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAtMS41ZW0gMCAwIDAsIHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIC0xLjFlbSAtMS4xZW0gMCAwLCByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAwIC0xLjVlbSAwIDAsIHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIDEuMWVtIC0xLjFlbSAwIDA7XHJcbn1cclxuXHJcbi8qIEFuaW1hdGlvbiAqL1xyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW5uZXIge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5ALW1vei1rZXlmcmFtZXMgc3Bpbm5lciB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbkAtby1rZXlmcmFtZXMgc3Bpbm5lciB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgc3Bpbm5lciB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG4udGFibGUtcmVzcG9uc2l2ZS1zbSB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXgtaGVpZ2h0OjYwMHB4O1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgb3ZlcmZsb3cteDphdXRvO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/hospital-list/hospital-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/hospital-list/hospital-list.component.ts ***!
  \**********************************************************/
/*! exports provided: HospitalListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitalListComponent", function() { return HospitalListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _core_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/notification/notification.service */ "./src/app/core/notification/notification.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bootstrap_notify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap-notify */ "./node_modules/bootstrap-notify/bootstrap-notify.js");
/* harmony import */ var bootstrap_notify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_notify__WEBPACK_IMPORTED_MODULE_5__);






const $ = jquery__WEBPACK_IMPORTED_MODULE_4__;
let HospitalListComponent = class HospitalListComponent {
    constructor(handler, ns, httpClient) {
        this.ns = ns;
        this.httpClient = httpClient;
        this.filtertext = '';
        this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"](handler);
        this.httpClient.get('https://covidapi.mohp.gov.np/api/v1/health-facility2/').subscribe(data => {
            this.data = data;
            this.Hospitals = this.data.results;
            this.databool = true;
        });
    }
    ngOnInit() {
    }
};
HospitalListComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpBackend"] },
    { type: _core_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HospitalListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hospital-list',
        template: __webpack_require__(/*! raw-loader!./hospital-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/hospital-list/hospital-list.component.html"),
        styles: [__webpack_require__(/*! ./hospital-list.component.css */ "./src/app/hospital-list/hospital-list.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpBackend"], _core_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], HospitalListComponent);



/***/ }),

/***/ "./src/app/hospital-list/search.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/hospital-list/search.pipe.ts ***!
  \**********************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SearchPipe = class SearchPipe {
    transform(value, args) {
        if (!args) {
            return value;
        }
        return value.filter((val) => {
            let rVal = (val.district_name.toLocaleLowerCase().includes(args.toLocaleString().toLocaleLowerCase())) || (val.name.toLocaleLowerCase().includes(args.toLocaleString().toLocaleLowerCase())) || (val.category_name.toLocaleLowerCase().includes(args.toLocaleString().toLocaleLowerCase()));
            return rVal;
        });
    }
};
SearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'hospitalFilter'
    })
], SearchPipe);



/***/ }),

/***/ "./src/app/landing-page/landing-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  box-sizing: border-box;\r\n}\r\n.container{ \r\n  position: relative;\r\n}\r\n.corona{\r\n  padding: 102px 0px 0px 574px;\r\n  float: right;\r\n  text-align: left;\r\n}\r\n.corona h2{\r\n  font-family: Montserrat;\r\n  color: #162C69;\r\n}\r\n.corona h6{\r\n  font-family: sans-serif;\r\n  color: #FB7820; \r\n  font-style: italic;\r\n  margin-top: 20px;\r\n}\r\n.corona-text p{\r\n  text-align: left;\r\n  font-family: sans-serif;\r\n  font-size: 1rem;\r\n  color: #162C69;\r\n}\r\n/* img{\r\n  padding: 3px 5px 3px 5px;\r\n  cursor: pointer;\r\n} */\r\n.button{\r\n  margin-top: 14px;\r\n}\r\n.corona .map-btn {\r\n  color: #fff;\r\n  border: 1.5px solid #fff;\r\n  padding: 5px 15px;\r\n  background-color: #C8C6E2;\r\n  border-radius: 55px;\r\n  font-weight: 500;\r\n  max-width: 200px;\r\n  margin: 0 auto;\r\n  margin-top: 35px;\r\n}\r\n.corona .country-btn {\r\n  color: #fff;\r\n  border: 1.5px solid #fff;\r\n  padding: 5px 15px;\r\n  background-color: #AEABD6;\r\n  border-radius: 55px;\r\n  font-weight: 500;\r\n  max-width: 200px;\r\n  margin: 0 auto;\r\n  margin-top: 35px;\r\n}\r\n.corona .coronafear-btn {\r\n  color: #fff;\r\n  border: 1.5px solid #fff;\r\n  padding: 5px 15px;\r\n  background-color: #ACAAD3;\r\n  border-radius: 55px;\r\n  font-weight: 500;\r\n  max-width: 200px;\r\n  margin: 0 auto;\r\n  margin-top: 35px;\r\n}\r\n.corona .aqi-btn {\r\n  color: #fff;\r\n  border: 1.5px solid #fff;\r\n  padding: 5px 15px;\r\n  background-color: #9694C6;\r\n  border-radius: 55px;\r\n  font-weight: 500;\r\n  max-width: 200px;\r\n  margin: 0 auto;\r\n  margin-top: 35px;\r\n}\r\n.corona a:hover {\r\n  color: #162C69;\r\n  text-decoration: none;\r\n  background-color: #AEABD6;\r\n  cursor: pointer;\r\n}\r\n@media only screen and (max-width: 567px) {\r\n  .container{\r\n    padding-top: 500px;    \r\n    text-align: left;\r\n    position: relative;\r\n  }\r\n  .corona{\r\n    padding: 0px;\r\n  }\r\n  .corona h2{\r\n    font-size: 1.35rem;\r\n    text-align: left;\r\n  }\r\n  .corona h6{\r\n    font-style: italic;\r\n    text-align: left;\r\n    font-size: 0.90rem;\r\n  }\r\n  .corona-text p{\r\n    text-align: left;\r\n    font-size: 0.90rem;\r\n    position: relative;\r\n\r\n  }\r\n  img{\r\n    padding: 2px 3px 2px 3px;\r\n    width: 75px;\r\n    height: 30px;\r\n  }\r\n}\r\n@media only screen and (min-width: 568px) and (max-width: 767px) {\r\n  .container{\r\n    padding-top: 600px;    \r\n    text-align: left;\r\n    position: relative;\r\n  }\r\n  .corona{\r\n    padding: 0px;\r\n  }\r\n  .corona h2{\r\n    font-size: 1.35rem;\r\n    text-align: left;\r\n  }\r\n  .corona h6{\r\n    font-style: italic;\r\n    text-align: left;\r\n    font-size: 0.90rem;\r\n  }\r\n  .corona-text p{\r\n    text-align: left;\r\n    font-size: 0.90rem;\r\n    position: relative;\r\n\r\n  }\r\n  img{\r\n    padding: 2px 3px 2px 3px;\r\n    width: 75px;\r\n    height: 30px;\r\n  }\r\n}\r\n@media only screen and (min-width: 768px) and (max-width: 1023px) {\r\n  .container{  \r\n    text-align: left;\r\n    position: relative;\r\n  }\r\n  .corona{\r\n    padding: 45px 0px 34px 352px;\r\n    float: right;\r\n    text-align: left;\r\n  } \r\n  .corona h2{\r\n    font-size: 1.35rem;\r\n    text-align: left;\r\n  }\r\n  .corona h6{\r\n    font-style: italic;\r\n    text-align: left;\r\n    font-size: 0.90rem;\r\n  }\r\n  .corona-text p{\r\n    text-align: left;\r\n    font-size: 0.90rem;\r\n    position: relative;\r\n\r\n  }\r\n  img{\r\n    padding: 2px 3px 2px 3px;\r\n    width: 75px;\r\n    height: 30px;\r\n  }\r\n}\r\n@media only screen and (min-width: 1024px) and (max-width: 1365px) {\r\n  .container{  \r\n    text-align: left;\r\n    position: relative;\r\n  }\r\n  .corona{\r\n    /* padding: 102px 0px 125px 460px; */\r\n    padding:155px 8px 222px 555px;;\r\n    float: right;\r\n    text-align: left;\r\n  } \r\n  .corona h2{\r\n    font-size: 1.35rem;\r\n    text-align: left;\r\n  }\r\n  .corona h6{\r\n    font-style: italic;\r\n    text-align: left;\r\n    font-size: 0.90rem;\r\n  }\r\n  .corona-text p{\r\n    text-align: left;\r\n    font-size: 0.90rem;\r\n    position: relative;\r\n\r\n  }\r\n  img{\r\n    padding: 2px 3px 2px 3px;\r\n    width: 75px;\r\n    height: 30px;\r\n  }\r\n} \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0FBQ0E7OztHQUdHO0FBQ0g7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztFQUNYLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCO0FBR0E7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjs7RUFFcEI7RUFDQTtJQUNFLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsWUFBWTtFQUNkO0FBQ0Y7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCOztFQUVwQjtFQUNBO0lBQ0Usd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7QUFDRjtBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCOztFQUVwQjtFQUNBO0lBQ0Usd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7QUFDRjtBQUNBO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxvQ0FBb0M7SUFDcEMsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjs7RUFFcEI7RUFDQTtJQUNFLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsWUFBWTtFQUNkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5jb250YWluZXJ7IFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uY29yb25he1xyXG4gIHBhZGRpbmc6IDEwMnB4IDBweCAwcHggNTc0cHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn0gXHJcbi5jb3JvbmEgaDJ7XHJcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcbiAgY29sb3I6ICMxNjJDNjk7XHJcbn1cclxuLmNvcm9uYSBoNntcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBjb2xvcjogI0ZCNzgyMDsgXHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLmNvcm9uYS10ZXh0IHB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY29sb3I6ICMxNjJDNjk7XHJcbn1cclxuLyogaW1ne1xyXG4gIHBhZGRpbmc6IDNweCA1cHggM3B4IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0gKi9cclxuLmJ1dHRvbntcclxuICBtYXJnaW4tdG9wOiAxNHB4O1xyXG59XHJcbi5jb3JvbmEgLm1hcC1idG4ge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogMS41cHggc29saWQgI2ZmZjtcclxuICBwYWRkaW5nOiA1cHggMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzhDNkUyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDU1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDM1cHg7XHJcbn1cclxuLmNvcm9uYSAuY291bnRyeS1idG4ge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogMS41cHggc29saWQgI2ZmZjtcclxuICBwYWRkaW5nOiA1cHggMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUVBQkQ2O1xyXG4gIGJvcmRlci1yYWRpdXM6IDU1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDM1cHg7XHJcbn1cclxuLmNvcm9uYSAuY29yb25hZmVhci1idG4ge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogMS41cHggc29saWQgI2ZmZjtcclxuICBwYWRkaW5nOiA1cHggMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUNBQUQzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDU1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDM1cHg7XHJcbn1cclxuLmNvcm9uYSAuYXFpLWJ0biB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZmZmO1xyXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5Njk0QzY7XHJcbiAgYm9yZGVyLXJhZGl1czogNTVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1heC13aWR0aDogMjAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMzVweDtcclxufVxyXG4uY29yb25hIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjMTYyQzY5O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUVBQkQ2O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTY3cHgpIHtcclxuICAuY29udGFpbmVye1xyXG4gICAgcGFkZGluZy10b3A6IDUwMHB4OyAgICBcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIC5jb3JvbmF7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgfVxyXG4gIC5jb3JvbmEgaDJ7XHJcbiAgICBmb250LXNpemU6IDEuMzVyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICAuY29yb25hIGg2e1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMC45MHJlbTtcclxuICB9XHJcbiAgLmNvcm9uYS10ZXh0IHB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAwLjkwcmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICB9XHJcbiAgaW1ne1xyXG4gICAgcGFkZGluZzogMnB4IDNweCAycHggM3B4O1xyXG4gICAgd2lkdGg6IDc1cHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgfVxyXG59IFxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjhweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIHBhZGRpbmctdG9wOiA2MDBweDsgICAgXHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAuY29yb25he1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gIH1cclxuICAuY29yb25hIGgye1xyXG4gICAgZm9udC1zaXplOiAxLjM1cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgLmNvcm9uYSBoNntcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDAuOTByZW07XHJcbiAgfVxyXG4gIC5jb3JvbmEtdGV4dCBwe1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMC45MHJlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgfVxyXG4gIGltZ3tcclxuICAgIHBhZGRpbmc6IDJweCAzcHggMnB4IDNweDtcclxuICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gIH1cclxufSBcclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcclxuICAuY29udGFpbmVyeyAgXHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAuY29yb25he1xyXG4gICAgcGFkZGluZzogNDVweCAwcHggMzRweCAzNTJweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfSBcclxuICAuY29yb25hIGgye1xyXG4gICAgZm9udC1zaXplOiAxLjM1cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgLmNvcm9uYSBoNntcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDAuOTByZW07XHJcbiAgfVxyXG4gIC5jb3JvbmEtdGV4dCBwe1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMC45MHJlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgfVxyXG4gIGltZ3tcclxuICAgIHBhZGRpbmc6IDJweCAzcHggMnB4IDNweDtcclxuICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gIH1cclxufSBcclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LXdpZHRoOiAxMzY1cHgpIHtcclxuICAuY29udGFpbmVyeyAgXHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAuY29yb25he1xyXG4gICAgLyogcGFkZGluZzogMTAycHggMHB4IDEyNXB4IDQ2MHB4OyAqL1xyXG4gICAgcGFkZGluZzoxNTVweCA4cHggMjIycHggNTU1cHg7O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9IFxyXG4gIC5jb3JvbmEgaDJ7XHJcbiAgICBmb250LXNpemU6IDEuMzVyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICAuY29yb25hIGg2e1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMC45MHJlbTtcclxuICB9XHJcbiAgLmNvcm9uYS10ZXh0IHB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAwLjkwcmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICB9XHJcbiAgaW1ne1xyXG4gICAgcGFkZGluZzogMnB4IDNweCAycHggM3B4O1xyXG4gICAgd2lkdGg6IDc1cHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgfVxyXG59ICJdfQ== */"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _nepal_map_nepal_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../nepal-map/nepal-map.component */ "./src/app/nepal-map/nepal-map.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






let LandingPageComponent = class LandingPageComponent {
    constructor(modal, router, viewportScroller) {
        this.modal = modal;
        this.router = router;
        this.viewportScroller = viewportScroller;
        this.date = new Date().toDateString();
    }
    ngOnInit() {
    }
    openit() {
        this.modal.open(this.content, { ariaLabelledBy: 'modal-basic-title' });
    }
    openit1() {
        this.modal.open(this.content1, { ariaLabelledBy: 'modal-basic-title' });
    }
    openit2() {
        this.router.navigate(['visualizeNepal']);
    }
    gotoMap() {
        document.querySelector('#nepalmapAnchor').scrollIntoView({ behavior: 'smooth', block: 'center' });
        // this.viewportScroller.scrollToAnchor('nepalmapAnchor');
    }
    gotoVisualize() {
        document.querySelector('#visualizAnchor').scrollIntoView({ behavior: 'smooth', block: 'center' });
        // this.viewportScroller.scrollToAnchor('nepalmapAnchor');
    }
    gotoCoronaFear() {
        document.querySelector('#CoronaAnchor').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    gotoAqi() {
        document.querySelector('#aqiAnchor').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
};
LandingPageComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["ViewportScroller"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], LandingPageComponent.prototype, "content", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content1', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], LandingPageComponent.prototype, "content1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('#cold', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _nepal_map_nepal_map_component__WEBPACK_IMPORTED_MODULE_4__["NepalMapComponent"])
], LandingPageComponent.prototype, "table", void 0);
LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing-page',
        template: __webpack_require__(/*! raw-loader!./landing-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/landing-page/landing-page.component.html"),
        styles: [__webpack_require__(/*! ./landing-page.component.css */ "./src/app/landing-page/landing-page.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["ViewportScroller"]])
], LandingPageComponent);



/***/ }),

/***/ "./src/app/misinformation/misinformation.component.css":
/*!*************************************************************!*\
  !*** ./src/app/misinformation/misinformation.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* only used for background overlay not needed for centering */\r\n.container-fluid{\r\n  background-image: url('reportbg.svg');\r\n  width: 100%;\r\n  overflow: hidden;\r\n  min-height: 100vh;\r\n}\r\nform{\r\n  background-color: #FCF3CF ;\r\n  border-radius: 10px;\r\n  padding: 17px 12px 13px 17px;\r\n\r\n}\r\nform:before {\r\n    content: '';\r\n    height: 100%;\r\n    left: 0;\r\n    position: absolute;\r\n    top: 0;\r\n    width: 100%;\r\n    background-color: #FCF3CF;\r\n    z-index: -1;\r\n    border-radius: 10px;\r\n}\r\n.form-control{\r\n  float: none;\r\n  text-align: center;\r\n}\r\n.btn.btn-info.btn-lg.btn-block.btn-rounded.btn-default.text-uppercase.waves-effect.waves-light{\r\n  background-color: #F7DC6F ;\r\n  border: none;\r\n}\r\n\r\n\r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWlzaW5mb3JtYXRpb24vbWlzaW5mb3JtYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsOERBQThEO0FBQzlEO0VBQ0UscUNBQXlEO0VBQ3pELFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLDRCQUE0Qjs7QUFFOUI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osT0FBTztJQUNQLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sV0FBVztJQUNYLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvbWlzaW5mb3JtYXRpb24vbWlzaW5mb3JtYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKiBvbmx5IHVzZWQgZm9yIGJhY2tncm91bmQgb3ZlcmxheSBub3QgbmVlZGVkIGZvciBjZW50ZXJpbmcgKi9cclxuLmNvbnRhaW5lci1mbHVpZHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL3JlcG9ydGJnLnN2Z1wiKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcbmZvcm17XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZDRjNDRiA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAxN3B4IDEycHggMTNweCAxN3B4O1xyXG5cclxufVxyXG5mb3JtOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQ0YzQ0Y7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuICBcclxuLmZvcm0tY29udHJvbHtcclxuICBmbG9hdDogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJ0bi5idG4taW5mby5idG4tbGcuYnRuLWJsb2NrLmJ0bi1yb3VuZGVkLmJ0bi1kZWZhdWx0LnRleHQtdXBwZXJjYXNlLndhdmVzLWVmZmVjdC53YXZlcy1saWdodHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdEQzZGIDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcblxyXG5cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/misinformation/misinformation.component.ts":
/*!************************************************************!*\
  !*** ./src/app/misinformation/misinformation.component.ts ***!
  \************************************************************/
/*! exports provided: MisinformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisinformationComponent", function() { return MisinformationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/notification/notification.service */ "./src/app/core/notification/notification.service.ts");







let MisinformationComponent = class MisinformationComponent {
    constructor(router, formBuilder, authenticationService, ns) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.ns = ns;
        this.isLoading = false;
        this.createForm();
    }
    ngOnInit() { }
    signup() {
        this.isLoading = true;
        this.authenticationService
            .saveMisinformation(this.signupForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
            this.signupForm.markAsPristine();
            this.isLoading = false;
        }))
            .subscribe((user) => {
            this.router.navigate(['/homepage']);
            this.ns.success('Upload successful');
        }, (error) => {
            console.log(`Signup error: ${error}`);
            this.ns.error('Oops something went wrong');
        });
    }
    createForm() {
        this.signupForm = this.formBuilder.group({
            mInformation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            link: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            source: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
};
MisinformationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _core__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _core_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }
];
MisinformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-misinformation',
        template: __webpack_require__(/*! raw-loader!./misinformation.component.html */ "./node_modules/raw-loader/index.js!./src/app/misinformation/misinformation.component.html"),
        styles: [__webpack_require__(/*! ./misinformation.component.css */ "./src/app/misinformation/misinformation.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _core__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
        _core_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]])
], MisinformationComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* CSS Document */\r\n/* \r\n\r\nbody {\r\n\tbackground: #212121;\r\n\tfont-size:22px;\r\n\tline-height: 32px;\r\n\tcolor: #ffffff;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tword-wrap:break-word !important;\r\n\tfont-family: 'Open Sans', sans-serif;\r\n\t}\r\n\r\nh1 {\r\n\tfont-size: 60px;\r\n\ttext-align: center;\r\n\tcolor: #FFF;\r\n}\t\r\n\r\nh3 {\r\n\tfont-size: 30px;\r\n\tline-height: 34px;\r\n\ttext-align: center;\r\n\tcolor: #FFF;\r\n}\r\n\r\nh3 a {\r\n\tcolor: #FFF;\r\n}\r\n\r\na {\r\n\tcolor: #FFF;\r\n}\r\n\r\nh1 {\r\n\tmargin-top: 100px;\r\n\ttext-align:center;\r\n\tfont-size:60px;\r\n\tline-height: 70px;\r\n\tfont-family: 'Bree Serif', 'serif';\r\n\t}\r\n\r\n#container {\r\n\tmargin: 0 auto;\r\n\tmax-width: 890px;\r\n}\r\n\r\np {\r\n\ttext-align: center;\r\n} */\r\n#essentials-btn{\r\n\tcolor: #fff;\r\n\tborder: 1.5px solid #fff;\r\n\tpadding: 6px 25px;\r\n\tbackground-color: #3A88EC;\r\n\tborder-radius: 55px;\r\n\tfont-weight: 500;\r\n\tmax-width: 200px;\r\n\tmargin: 0 auto;\r\n}\r\n#hoveressentials a:hover { \r\n\tcolor: #fff; \r\n\tbackground-color: #FBC983;\r\n}\r\n/* #essentials:hover{\r\n\tcolor: #FB7820;\r\n\ttext-decoration: none;\r\n\tbackground-color: transparent;\r\n  } */\r\n.toggle,\r\n[id^=drop] {\r\n\tdisplay: none;\r\n}\r\n/* Giving a background-color to the nav container. */\r\nnav { \r\n\tmargin:0;\r\n\tpadding: 0;\r\n\theight: 44px;\r\n\t/* background-color: #254441; */\r\n}\r\n#logo img{\r\n\tdisplay: block;\r\n\tpadding: 0 197px;\r\n\tfloat: left;\r\n}\r\n/* Since we'll have the \"ul li\" \"float:left\"\r\n * we need to add a clear after the container. */\r\nnav:after {\r\n\tcontent:\"\";\r\n\tdisplay:table;\r\n\tclear:both;\r\n}\r\n/* Removing padding, margin and \"list-style\" from the \"ul\",\r\n * and adding \"position:reltive\" */\r\nnav ul {\r\n\tfloat: right;\r\n\tpadding:0;\r\n\tmargin:0;\r\n\tlist-style: none;\r\n\tposition: relative;\r\n\t}\r\n/* Positioning the navigation items inline */\r\nnav ul li {\r\n\tmargin: 10px 0px 0px 0px;\r\n\tdisplay:inline-block;\r\n\ttext-align: center;\r\n\t/* background-color:#F5B041; */\r\n\tfont-family: Montserrat;\r\n\r\n\t}\r\n/* Styling the links */\r\nnav a {\r\n\tdisplay:block;\r\n\tpadding:14px 20px;\t\r\n\tcolor:#2F3D74;\r\n\tfont-weight: bold;\r\n\tfont-size:17px;\r\n\ttext-decoration:none;\r\n\tbackground-color: transparent;\r\n}\r\nnav ul li ul li:hover { background: #000000; }\r\n/* Background color change on Hover */\r\nnav a:hover { \r\n\tcolor: #FB7820; \r\n}\r\n.menu li a img{\r\n\twidth: 170px;\r\n}\r\n/* Hide Dropdowns by Default\r\n * and giving it a position of absolute */\r\nnav ul ul {\r\n\tdisplay: none;\r\n\tposition: absolute; \r\n\t/* has to be the same number as the \"line-height\" of \"nav a\" */\r\n\ttop: 60px; \r\n}\r\n/* Display Dropdowns on Hover */\r\nnav ul li:hover > ul {\r\n\tdisplay:inherit;\r\n}\r\n/* Fisrt Tier Dropdown */\r\nnav ul ul li {\r\n\twidth:170px;\r\n\tfloat:none;\r\n\tdisplay:list-item;\r\n\tposition: relative;\r\n}\r\n/* Second, Third and more Tiers\t\r\n * We move the 2nd and 3rd etc tier dropdowns to the left\r\n * by the amount of the width of the first tier.\r\n*/\r\nnav ul ul ul li {\r\n\tposition: relative;\r\n\ttop:-60px;\r\n\t/* has to be the same number as the \"width\" of \"nav ul ul li\" */ \r\n\tleft:170px; \r\n}\r\n/* Change ' +' in order to change the Dropdown symbol */\r\n/* li > a:after { content:  ' +'; }\r\nli > a:only-child:after { content: ''; } */\r\n/* Media Queries\r\n--------------------------------------------- */\r\n@media all and (max-width : 330px) {\r\n\r\n\tnav ul li {\r\n\t\tdisplay:block;\r\n\t\twidth: 94%;\r\n\t}\r\n\r\n}\r\n@media all and (max-width : 767px) {\r\n\r\n\t#logo {\r\n\t\tdisplay: block;\r\n\t\twidth: 100%;\r\n\t\ttext-align: center;\r\n\t\tfloat: none;\r\n\t}\r\n\t#logo img {\r\n\t\tfloat: left;\r\n\t\tpadding: 0;\r\n\t}\r\n\r\n\tnav {\r\n\t\tmargin: 0;\r\n\t}\r\n\r\n\t/* Hide the navigation menu by default */\r\n\t/* Also hide the  */\r\n\t.toggle + a,\r\n\t.menu {\r\n\t\tdisplay: none;\r\n  }\r\n  \r\n/* Stylinf the toggle lable */\r\n\t.toggle{\r\n\t\tdisplay: block;\r\n\t\tfloat: right;\r\n\t\tpadding-top: 27px;\r\n\t}\r\n\r\n\t.toggle:hover {\r\n\t\tcolor: #FAD7A0;\r\n\t}\r\n\r\n\t/* Display Dropdown when clicked on Parent Lable */\r\n\t[id^=drop]:checked + ul {\r\n\t\tdisplay: block;\r\n\t\twidth: 100%;\r\n\t\tbackground-color: white;\r\n\t\tz-index: 999999;\r\n\t}\r\n\r\n\t/* Change menu item's width to 100% */\r\n\tnav ul li {\r\n\t\tdisplay: block;\r\n\t\twidth: 100%;\r\n\t\t}\r\n\r\n\tnav ul ul .toggle,\r\n\tnav ul ul a {\r\n\t\tpadding: 0 40px;\r\n\t}\r\n\r\n\tnav ul ul ul a {\r\n\t\tpadding: 0 80px;\r\n\t}\r\n\r\n\tnav a:hover,\r\n \tnav ul ul ul a {\r\n\t\t/* background-color: #000000; */\r\n\t}\r\n  \r\n\tnav ul li ul li .toggle,\r\n\tnav ul ul a,\r\n  nav ul ul ul a{\r\n\t\tpadding:14px 20px;\t\r\n\t\tcolor:#FFF;\r\n\t\tfont-size:17px; \r\n\t}\r\n  \r\n  \r\n\tnav ul li ul li .toggle,\r\n\tnav ul ul a {\r\n\t\t/* background-color: #212121;  */\r\n\t}\r\n\r\n\t/* Hide Dropdowns by Default */\r\n\tnav ul ul {\r\n\t\tfloat: none;\r\n\t\tposition:static;\r\n\t\tcolor: #ffffff;\r\n\t\t/* has to be the same number as the \"line-height\" of \"nav a\" */\r\n\t}\r\n\t\t\r\n\t/* Hide menus on hover */\r\n\tnav ul ul li:hover > ul,\r\n\tnav ul li:hover > ul {\r\n\t\tdisplay: none;\r\n\t}\r\n\t\t\r\n\t/* Fisrt Tier Dropdown */\r\n\tnav ul ul li {\r\n\t\tdisplay: block;\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\tnav ul ul ul li {\r\n\t\tposition: static;\r\n\t\t/* has to be the same number as the \"width\" of \"nav ul ul li\" */ \r\n\r\n\t}\r\n\r\n}\r\n@media only screen and (max-width: 1023px){\r\n\r\n\t#logo img {\r\n\t\tdisplay: block;\r\n\t\tpadding: 0 16px;\r\n\t\tfloat: left;\r\n\t}\r\n}\r\n@media only screen and (min-width:1024px) and (max-width: 1365px){\r\n\r\n\t#logo img {\r\n\t\tdisplay: block;\r\n\t\tpadding: 0 105px;\r\n\t\tfloat: left;\r\n\t}\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQjtBQUNqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWlERztBQUNIO0NBQ0MsV0FBVztDQUNYLHdCQUF3QjtDQUN4QixpQkFBaUI7Q0FDakIseUJBQXlCO0NBQ3pCLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLGNBQWM7QUFDZjtBQUNBO0NBQ0MsV0FBVztDQUNYLHlCQUF5QjtBQUMxQjtBQUNBOzs7O0tBSUs7QUFDTDs7Q0FFQyxhQUFhO0FBQ2Q7QUFFQSxvREFBb0Q7QUFDcEQ7Q0FDQyxRQUFRO0NBQ1IsVUFBVTtDQUNWLFlBQVk7Q0FDWiwrQkFBK0I7QUFDaEM7QUFFQTtDQUNDLGNBQWM7Q0FDZCxnQkFBZ0I7Q0FDaEIsV0FBVztBQUNaO0FBRUE7Z0RBQ2dEO0FBRWhEO0NBQ0MsVUFBVTtDQUNWLGFBQWE7Q0FDYixVQUFVO0FBQ1g7QUFFQTtrQ0FDa0M7QUFDbEM7Q0FDQyxZQUFZO0NBQ1osU0FBUztDQUNULFFBQVE7Q0FDUixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCO0FBRUQsNENBQTRDO0FBQzVDO0NBQ0Msd0JBQXdCO0NBQ3hCLG9CQUFvQjtDQUNwQixrQkFBa0I7Q0FDbEIsOEJBQThCO0NBQzlCLHVCQUF1Qjs7Q0FFdkI7QUFFRCxzQkFBc0I7QUFDdEI7Q0FDQyxhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakIsY0FBYztDQUNkLG9CQUFvQjtDQUNwQiw2QkFBNkI7QUFDOUI7QUFHQSx3QkFBd0IsbUJBQW1CLEVBQUU7QUFFN0MscUNBQXFDO0FBQ3JDO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTt5Q0FDeUM7QUFDekM7Q0FDQyxhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLDhEQUE4RDtDQUM5RCxTQUFTO0FBQ1Y7QUFFQSwrQkFBK0I7QUFDL0I7Q0FDQyxlQUFlO0FBQ2hCO0FBRUEsd0JBQXdCO0FBQ3hCO0NBQ0MsV0FBVztDQUNYLFVBQVU7Q0FDVixpQkFBaUI7Q0FDakIsa0JBQWtCO0FBQ25CO0FBRUE7OztDQUdDO0FBQ0Q7Q0FDQyxrQkFBa0I7Q0FDbEIsU0FBUztDQUNULCtEQUErRDtDQUMvRCxVQUFVO0FBQ1g7QUFHQSx1REFBdUQ7QUFDdkQ7MENBQzBDO0FBRzFDOytDQUMrQztBQUMvQzs7Q0FFQztFQUNDLGFBQWE7RUFDYixVQUFVO0NBQ1g7O0FBRUQ7QUFDQTs7Q0FFQztFQUNDLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7Q0FDWjtDQUNBO0VBQ0MsV0FBVztFQUNYLFVBQVU7Q0FDWDs7Q0FFQTtFQUNDLFNBQVM7Q0FDVjs7Q0FFQSx3Q0FBd0M7Q0FDeEMsbUJBQW1CO0NBQ25COztFQUVDLGFBQWE7RUFDYjs7QUFFRiw2QkFBNkI7Q0FDNUI7RUFDQyxjQUFjO0VBQ2QsWUFBWTtFQUNaLGlCQUFpQjtDQUNsQjs7Q0FFQTtFQUNDLGNBQWM7Q0FDZjs7Q0FFQSxrREFBa0Q7Q0FDbEQ7RUFDQyxjQUFjO0VBQ2QsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixlQUFlO0NBQ2hCOztDQUVBLHFDQUFxQztDQUNyQztFQUNDLGNBQWM7RUFDZCxXQUFXO0VBQ1g7O0NBRUQ7O0VBRUMsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLGVBQWU7Q0FDaEI7O0NBRUE7O0VBRUMsK0JBQStCO0NBQ2hDOztDQUVBOzs7RUFHQyxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGNBQWM7Q0FDZjs7O0NBR0E7O0VBRUMsZ0NBQWdDO0NBQ2pDOztDQUVBLDhCQUE4QjtDQUM5QjtFQUNDLFdBQVc7RUFDWCxlQUFlO0VBQ2YsY0FBYztFQUNkLDhEQUE4RDtDQUMvRDs7Q0FFQSx3QkFBd0I7Q0FDeEI7O0VBRUMsYUFBYTtDQUNkOztDQUVBLHdCQUF3QjtDQUN4QjtFQUNDLGNBQWM7RUFDZCxXQUFXO0NBQ1o7O0NBRUE7RUFDQyxnQkFBZ0I7RUFDaEIsK0RBQStEOztDQUVoRTs7QUFFRDtBQUVBOztDQUVDO0VBQ0MsY0FBYztFQUNkLGVBQWU7RUFDZixXQUFXO0NBQ1o7QUFDRDtBQUNBOztDQUVDO0VBQ0MsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixXQUFXO0NBQ1o7O0FBRUQiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDU1MgRG9jdW1lbnQgKi9cclxuLyogXHJcblxyXG5ib2R5IHtcclxuXHRiYWNrZ3JvdW5kOiAjMjEyMTIxO1xyXG5cdGZvbnQtc2l6ZToyMnB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG5cdGNvbG9yOiAjZmZmZmZmO1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdHdvcmQtd3JhcDpicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcblx0Zm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG5cdH1cclxuXHJcbmgxIHtcclxuXHRmb250LXNpemU6IDYwcHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGNvbG9yOiAjRkZGO1xyXG59XHRcclxuXHJcbmgzIHtcclxuXHRmb250LXNpemU6IDMwcHg7XHJcblx0bGluZS1oZWlnaHQ6IDM0cHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGNvbG9yOiAjRkZGO1xyXG59XHJcblxyXG5oMyBhIHtcclxuXHRjb2xvcjogI0ZGRjtcclxufVxyXG5cclxuYSB7XHJcblx0Y29sb3I6ICNGRkY7XHJcbn1cclxuXHJcbmgxIHtcclxuXHRtYXJnaW4tdG9wOiAxMDBweDtcclxuXHR0ZXh0LWFsaWduOmNlbnRlcjtcclxuXHRmb250LXNpemU6NjBweDtcclxuXHRsaW5lLWhlaWdodDogNzBweDtcclxuXHRmb250LWZhbWlseTogJ0JyZWUgU2VyaWYnLCAnc2VyaWYnO1xyXG5cdH1cclxuXHJcbiNjb250YWluZXIge1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5cdG1heC13aWR0aDogODkwcHg7XHJcbn1cclxuXHJcbnAge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufSAqL1xyXG4jZXNzZW50aWFscy1idG57XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0Ym9yZGVyOiAxLjVweCBzb2xpZCAjZmZmO1xyXG5cdHBhZGRpbmc6IDZweCAyNXB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMzQTg4RUM7XHJcblx0Ym9yZGVyLXJhZGl1czogNTVweDtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG5cdG1heC13aWR0aDogMjAwcHg7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcbn1cclxuI2hvdmVyZXNzZW50aWFscyBhOmhvdmVyIHsgXHJcblx0Y29sb3I6ICNmZmY7IFxyXG5cdGJhY2tncm91bmQtY29sb3I6ICNGQkM5ODM7XHJcbn1cclxuLyogI2Vzc2VudGlhbHM6aG92ZXJ7XHJcblx0Y29sb3I6ICNGQjc4MjA7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH0gKi9cclxuLnRvZ2dsZSxcclxuW2lkXj1kcm9wXSB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLyogR2l2aW5nIGEgYmFja2dyb3VuZC1jb2xvciB0byB0aGUgbmF2IGNvbnRhaW5lci4gKi9cclxubmF2IHsgXHJcblx0bWFyZ2luOjA7XHJcblx0cGFkZGluZzogMDtcclxuXHRoZWlnaHQ6IDQ0cHg7XHJcblx0LyogYmFja2dyb3VuZC1jb2xvcjogIzI1NDQ0MTsgKi9cclxufVxyXG5cclxuI2xvZ28gaW1ne1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHBhZGRpbmc6IDAgMTk3cHg7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi8qIFNpbmNlIHdlJ2xsIGhhdmUgdGhlIFwidWwgbGlcIiBcImZsb2F0OmxlZnRcIlxyXG4gKiB3ZSBuZWVkIHRvIGFkZCBhIGNsZWFyIGFmdGVyIHRoZSBjb250YWluZXIuICovXHJcblxyXG5uYXY6YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6XCJcIjtcclxuXHRkaXNwbGF5OnRhYmxlO1xyXG5cdGNsZWFyOmJvdGg7XHJcbn1cclxuXHJcbi8qIFJlbW92aW5nIHBhZGRpbmcsIG1hcmdpbiBhbmQgXCJsaXN0LXN0eWxlXCIgZnJvbSB0aGUgXCJ1bFwiLFxyXG4gKiBhbmQgYWRkaW5nIFwicG9zaXRpb246cmVsdGl2ZVwiICovXHJcbm5hdiB1bCB7XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdHBhZGRpbmc6MDtcclxuXHRtYXJnaW46MDtcclxuXHRsaXN0LXN0eWxlOiBub25lO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR9XHJcblx0XHJcbi8qIFBvc2l0aW9uaW5nIHRoZSBuYXZpZ2F0aW9uIGl0ZW1zIGlubGluZSAqL1xyXG5uYXYgdWwgbGkge1xyXG5cdG1hcmdpbjogMTBweCAwcHggMHB4IDBweDtcclxuXHRkaXNwbGF5OmlubGluZS1ibG9jaztcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0LyogYmFja2dyb3VuZC1jb2xvcjojRjVCMDQxOyAqL1xyXG5cdGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG5cclxuXHR9XHJcblxyXG4vKiBTdHlsaW5nIHRoZSBsaW5rcyAqL1xyXG5uYXYgYSB7XHJcblx0ZGlzcGxheTpibG9jaztcclxuXHRwYWRkaW5nOjE0cHggMjBweDtcdFxyXG5cdGNvbG9yOiMyRjNENzQ7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0Zm9udC1zaXplOjE3cHg7XHJcblx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcblxyXG5uYXYgdWwgbGkgdWwgbGk6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjMDAwMDAwOyB9XHJcblxyXG4vKiBCYWNrZ3JvdW5kIGNvbG9yIGNoYW5nZSBvbiBIb3ZlciAqL1xyXG5uYXYgYTpob3ZlciB7IFxyXG5cdGNvbG9yOiAjRkI3ODIwOyBcclxufVxyXG4ubWVudSBsaSBhIGltZ3tcclxuXHR3aWR0aDogMTcwcHg7XHJcbn1cclxuLyogSGlkZSBEcm9wZG93bnMgYnkgRGVmYXVsdFxyXG4gKiBhbmQgZ2l2aW5nIGl0IGEgcG9zaXRpb24gb2YgYWJzb2x1dGUgKi9cclxubmF2IHVsIHVsIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcblx0LyogaGFzIHRvIGJlIHRoZSBzYW1lIG51bWJlciBhcyB0aGUgXCJsaW5lLWhlaWdodFwiIG9mIFwibmF2IGFcIiAqL1xyXG5cdHRvcDogNjBweDsgXHJcbn1cclxuXHRcclxuLyogRGlzcGxheSBEcm9wZG93bnMgb24gSG92ZXIgKi9cclxubmF2IHVsIGxpOmhvdmVyID4gdWwge1xyXG5cdGRpc3BsYXk6aW5oZXJpdDtcclxufVxyXG5cdFxyXG4vKiBGaXNydCBUaWVyIERyb3Bkb3duICovXHJcbm5hdiB1bCB1bCBsaSB7XHJcblx0d2lkdGg6MTcwcHg7XHJcblx0ZmxvYXQ6bm9uZTtcclxuXHRkaXNwbGF5Omxpc3QtaXRlbTtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi8qIFNlY29uZCwgVGhpcmQgYW5kIG1vcmUgVGllcnNcdFxyXG4gKiBXZSBtb3ZlIHRoZSAybmQgYW5kIDNyZCBldGMgdGllciBkcm9wZG93bnMgdG8gdGhlIGxlZnRcclxuICogYnkgdGhlIGFtb3VudCBvZiB0aGUgd2lkdGggb2YgdGhlIGZpcnN0IHRpZXIuXHJcbiovXHJcbm5hdiB1bCB1bCB1bCBsaSB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHRvcDotNjBweDtcclxuXHQvKiBoYXMgdG8gYmUgdGhlIHNhbWUgbnVtYmVyIGFzIHRoZSBcIndpZHRoXCIgb2YgXCJuYXYgdWwgdWwgbGlcIiAqLyBcclxuXHRsZWZ0OjE3MHB4OyBcclxufVxyXG5cclxuXHRcclxuLyogQ2hhbmdlICcgKycgaW4gb3JkZXIgdG8gY2hhbmdlIHRoZSBEcm9wZG93biBzeW1ib2wgKi9cclxuLyogbGkgPiBhOmFmdGVyIHsgY29udGVudDogICcgKyc7IH1cclxubGkgPiBhOm9ubHktY2hpbGQ6YWZ0ZXIgeyBjb250ZW50OiAnJzsgfSAqL1xyXG5cclxuXHJcbi8qIE1lZGlhIFF1ZXJpZXNcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGggOiAzMzBweCkge1xyXG5cclxuXHRuYXYgdWwgbGkge1xyXG5cdFx0ZGlzcGxheTpibG9jaztcclxuXHRcdHdpZHRoOiA5NCU7XHJcblx0fVxyXG5cclxufVxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoIDogNzY3cHgpIHtcclxuXHJcblx0I2xvZ28ge1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGZsb2F0OiBub25lO1xyXG5cdH1cclxuXHQjbG9nbyBpbWcge1xyXG5cdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0XHRwYWRkaW5nOiAwO1xyXG5cdH1cclxuXHJcblx0bmF2IHtcclxuXHRcdG1hcmdpbjogMDtcclxuXHR9XHJcblxyXG5cdC8qIEhpZGUgdGhlIG5hdmlnYXRpb24gbWVudSBieSBkZWZhdWx0ICovXHJcblx0LyogQWxzbyBoaWRlIHRoZSAgKi9cclxuXHQudG9nZ2xlICsgYSxcclxuXHQubWVudSB7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuLyogU3R5bGluZiB0aGUgdG9nZ2xlIGxhYmxlICovXHJcblx0LnRvZ2dsZXtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdFx0cGFkZGluZy10b3A6IDI3cHg7XHJcblx0fVxyXG5cclxuXHQudG9nZ2xlOmhvdmVyIHtcclxuXHRcdGNvbG9yOiAjRkFEN0EwO1xyXG5cdH1cclxuXHJcblx0LyogRGlzcGxheSBEcm9wZG93biB3aGVuIGNsaWNrZWQgb24gUGFyZW50IExhYmxlICovXHJcblx0W2lkXj1kcm9wXTpjaGVja2VkICsgdWwge1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cdFx0ei1pbmRleDogOTk5OTk5O1xyXG5cdH1cclxuXHJcblx0LyogQ2hhbmdlIG1lbnUgaXRlbSdzIHdpZHRoIHRvIDEwMCUgKi9cclxuXHRuYXYgdWwgbGkge1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdH1cclxuXHJcblx0bmF2IHVsIHVsIC50b2dnbGUsXHJcblx0bmF2IHVsIHVsIGEge1xyXG5cdFx0cGFkZGluZzogMCA0MHB4O1xyXG5cdH1cclxuXHJcblx0bmF2IHVsIHVsIHVsIGEge1xyXG5cdFx0cGFkZGluZzogMCA4MHB4O1xyXG5cdH1cclxuXHJcblx0bmF2IGE6aG92ZXIsXHJcbiBcdG5hdiB1bCB1bCB1bCBhIHtcclxuXHRcdC8qIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7ICovXHJcblx0fVxyXG4gIFxyXG5cdG5hdiB1bCBsaSB1bCBsaSAudG9nZ2xlLFxyXG5cdG5hdiB1bCB1bCBhLFxyXG4gIG5hdiB1bCB1bCB1bCBhe1xyXG5cdFx0cGFkZGluZzoxNHB4IDIwcHg7XHRcclxuXHRcdGNvbG9yOiNGRkY7XHJcblx0XHRmb250LXNpemU6MTdweDsgXHJcblx0fVxyXG4gIFxyXG4gIFxyXG5cdG5hdiB1bCBsaSB1bCBsaSAudG9nZ2xlLFxyXG5cdG5hdiB1bCB1bCBhIHtcclxuXHRcdC8qIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7ICAqL1xyXG5cdH1cclxuXHJcblx0LyogSGlkZSBEcm9wZG93bnMgYnkgRGVmYXVsdCAqL1xyXG5cdG5hdiB1bCB1bCB7XHJcblx0XHRmbG9hdDogbm9uZTtcclxuXHRcdHBvc2l0aW9uOnN0YXRpYztcclxuXHRcdGNvbG9yOiAjZmZmZmZmO1xyXG5cdFx0LyogaGFzIHRvIGJlIHRoZSBzYW1lIG51bWJlciBhcyB0aGUgXCJsaW5lLWhlaWdodFwiIG9mIFwibmF2IGFcIiAqL1xyXG5cdH1cclxuXHRcdFxyXG5cdC8qIEhpZGUgbWVudXMgb24gaG92ZXIgKi9cclxuXHRuYXYgdWwgdWwgbGk6aG92ZXIgPiB1bCxcclxuXHRuYXYgdWwgbGk6aG92ZXIgPiB1bCB7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxuXHRcdFxyXG5cdC8qIEZpc3J0IFRpZXIgRHJvcGRvd24gKi9cclxuXHRuYXYgdWwgdWwgbGkge1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblxyXG5cdG5hdiB1bCB1bCB1bCBsaSB7XHJcblx0XHRwb3NpdGlvbjogc3RhdGljO1xyXG5cdFx0LyogaGFzIHRvIGJlIHRoZSBzYW1lIG51bWJlciBhcyB0aGUgXCJ3aWR0aFwiIG9mIFwibmF2IHVsIHVsIGxpXCIgKi8gXHJcblxyXG5cdH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyM3B4KXtcclxuXHJcblx0I2xvZ28gaW1nIHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0cGFkZGluZzogMCAxNnB4O1xyXG5cdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0fVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDI0cHgpIGFuZCAobWF4LXdpZHRoOiAxMzY1cHgpe1xyXG5cclxuXHQjbG9nbyBpbWcge1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRwYWRkaW5nOiAwIDEwNXB4O1xyXG5cdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0fVxyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavbarComponent);



/***/ }),

/***/ "./src/app/nepal-map/nepal-map.component.css":
/*!***************************************************!*\
  !*** ./src/app/nepal-map/nepal-map.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.nepalmap-head{\r\n  margin-top: 629px;\r\n  text-align: center;\r\n}\r\n.nepalmap-head h4{\r\n  font-size:1.65rem ;\r\n  color: #162C69;\r\n  font-family:Montserrat;\r\n}\r\n.nepalmap-head p{\r\n  text-align: left;\r\n  font-family: sans-serif;\r\n  font-size: 1rem;\r\n  color: #162C69;\r\n\r\n}\r\n/* .nepalmap-head h6{\r\n  font-family: sans-serif;\r\n  color: #FB7820; \r\n  font-style: italic;\r\n} */\r\n/* .nepalmap svg{\r\n  padding: 160px 0px 0px 605px;\r\n  position: absolute;\r\n  \r\n} */\r\n.card{\r\n  z-index: 99999999;\r\n  background-color:#C8C6E2 ;\r\n  width: 170px;\r\n}\r\n.card-header{\r\n  font-size: 0.85rem;\r\n  font-weight: bold;\r\n}\r\n.list-group.list-group-flush{\r\n  font-size: 0.75rem;\r\n}\r\n/*Responsive*/\r\n@media only screen and (max-width:767px){\r\n  .nepalmap-head{\r\n    margin-top: 20px;\r\n    padding:0px;\r\n    float: left;\r\n    position: relative;\r\n  }\r\n  .nepalmap-head h4{\r\n    font-size:1.35rem ;\r\n    color: #162C69;\r\n    font-family:Montserrat;\r\n  }\r\n  .nepalmap-head p{\r\n    text-align: left;\r\n    font-family: sans-serif;\r\n    font-size: 1rem;\r\n    color: #162C69;\r\n  \r\n  }\r\n  .nepalmap-head h6{\r\n    font-family: sans-serif;\r\n    color: #FB7820; \r\n    font-style: italic;\r\n  }\r\n  .nepalmap p{\r\n    width: 100%;\r\n    \r\n  }\r\n  .card{\r\n    justify-content: center;\r\n  }\r\n}\r\n@media only screen and (max-width:1023px){\r\n  .nepalmap-head{\r\n    margin-top: 50px;\r\n    padding:0px;\r\n    float: left;\r\n    position: relative;\r\n  }\r\n  .nepalmap-head h4{\r\n    font-size:1.35rem ;\r\n    color: #162C69;\r\n    font-family:Montserrat;\r\n  }\r\n  .nepalmap-head p{\r\n    text-align: left;\r\n    font-family: sans-serif;\r\n    font-size: 1rem;\r\n    color: #162C69;\r\n  \r\n  }\r\n  .nepalmap-head h6{\r\n    font-family: sans-serif;\r\n    color: #FB7820; \r\n    font-style: italic;\r\n  }\r\n\r\n}\r\n@media only screen and (min-width:1024px) and (max-width:1365px){\r\n  .nepalmap-head{\r\n    margin-top: 50px;\r\n    padding:0px;\r\n    float: left;\r\n    position: relative;\r\n  }\r\n  .nepalmap-head h4{\r\n    font-size:1.35rem ;\r\n    color: #162C69;\r\n    font-family:Montserrat;\r\n  }\r\n  .nepalmap-head p{\r\n    text-align: left;\r\n    font-family: sans-serif;\r\n    font-size: 1rem;\r\n    color: #162C69;\r\n  \r\n  }\r\n  .nepalmap-head h6{\r\n    font-family: sans-serif;\r\n    color: #FB7820; \r\n    font-style: italic;\r\n  }\r\n\r\n}\r\n/* line 1, ../../Documents/styling-app/src/styles/scss/Layout/_nepalmap.scss */\r\n.district {\r\n    cursor: pointer;\r\n  }\r\n/* line 3, ../../Documents/styling-app/src/styles/scss/Layout/_nepalmap.scss */\r\n.district .prov1 {\r\n    fill: #5DADE2 ;\r\n  }\r\n/* line 6, ../../Documents/styling-app/src/styles/scss/Layout/_nepalmap.scss */\r\n.district .prov2 {\r\n    fill: #ba9cd6;\r\n  }\r\n/* line 9, ../../Documents/styling-app/src/styles/scss/Layout/_nepalmap.scss */\r\n.district .prov3 {\r\n    fill: #F5B041 ;\r\n  }\r\n/* line 12, ../../Documents/styling-app/src/styles/scss/Layout/_nepalmap.scss */\r\n.district .prov4 {\r\n    fill: #6c757d;\r\n  }\r\n/* line 15, ../../Documents/styling-app/src/styles/scss/Layout/_nepalmap.scss */\r\n.district .prov5 {\r\n    fill: #17a2b8;\r\n  }\r\n/* line 18, ../../Documents/styling-app/src/styles/scss/Layout/_nepalmap.scss */\r\n.district .prov6 {\r\n    fill: #EC7063;\r\n  }\r\n/* line 21, ../../Documents/styling-app/src/styles/scss/Layout/_nepalmap.scss */\r\n.district .prov7 {\r\n    fill: #58D68D;\r\n  }\r\n/* line 25, ../../Documents/styling-app/src/styles/scss/Layout/_nepalmap.scss */\r\n.district:hover path {\r\n    opacity: 0.8;\r\n  }\r\n/* line 32, ../../Documents/styling-app/src/styles/scss/Layout/_nepalmap.scss */\r\n.maptext {\r\n    color: #f1f1f1;\r\n    font-size: 12px;\r\n    font-family: AvertaSemiBold\r\n  }\r\ntext{\r\n      color: white;\r\n  }\r\n/*# sourceMappingURL=main.css.map */\r\n.field-tip:hover .tip-content {\r\n  right:-20px;\r\n  opacity:1;\r\n}\r\nbody {\r\n  padding:30px;\r\n  font:normal 12px/1.5 Arial, sans-serif;\r\n}\r\n.loading {\r\n  position: fixed;\r\n  z-index: 999;\r\n  height: 2em;\r\n  width: 2em;\r\n  overflow: show;\r\n  margin: auto;\r\n  top: 10em;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n}\r\n/* Transparent Overlay */\r\n.loading:before {\r\n  content: '';\r\n  display: block;\r\n  position: fixed;\r\n  top: 10em;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: radial-gradient(rgba(20, 20, 20,.8), rgba(0, 0, 0, .8));\r\n\r\n  background: -webkit-radial-gradient(rgba(20, 20, 20,.8), rgba(0, 0, 0,.8));\r\n}\r\n/* :not(:required) hides these rules from IE9 and below */\r\n.loading:not(:required) {\r\n  /* hide \"loading...\" text */\r\n  font: 0/0 a;\r\n  color: transparent;\r\n  text-shadow: none;\r\n  background-color: transparent;\r\n  border: 0;\r\n}\r\n.loading:not(:required):after {\r\n  content: '';\r\n  display: block;\r\n  font-size: 10px;\r\n  width: 1em;\r\n  height: 1em;\r\n  margin-top: -0.5em;\r\n  -webkit-animation: spinner 150ms infinite linear;\r\n  animation: spinner 150ms infinite linear;\r\n  border-radius: 0.5em;\r\n  box-shadow: rgba(255,255,255, 0.75) 1.5em 0 0 0, rgba(255,255,255, 0.75) 1.1em 1.1em 0 0, rgba(255,255,255, 0.75) 0 1.5em 0 0, rgba(255,255,255, 0.75) -1.1em 1.1em 0 0, rgba(255,255,255, 0.75) -1.5em 0 0 0, rgba(255,255,255, 0.75) -1.1em -1.1em 0 0, rgba(255,255,255, 0.75) 0 -1.5em 0 0, rgba(255,255,255, 0.75) 1.1em -1.1em 0 0;\r\n}\r\n/* Animation */\r\n@-webkit-keyframes spinner {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes spinner {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmVwYWwtbWFwL25lcGFsLW1hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixjQUFjOztBQUVoQjtBQUNBOzs7O0dBSUc7QUFDSDs7OztHQUlHO0FBQ0g7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUEsYUFBYTtBQUNiO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixjQUFjOztFQUVoQjtFQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFdBQVc7O0VBRWI7RUFDQTtJQUNFLHVCQUF1QjtFQUN6QjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGNBQWM7O0VBRWhCO0VBQ0E7SUFDRSx1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjs7QUFFRjtBQUNBO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixjQUFjOztFQUVoQjtFQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxrQkFBa0I7RUFDcEI7O0FBRUY7QUFFQSw4RUFBOEU7QUFDOUU7SUFDSSxlQUFlO0VBQ2pCO0FBRUEsOEVBQThFO0FBQzlFO0lBQ0UsY0FBYztFQUNoQjtBQUVBLDhFQUE4RTtBQUM5RTtJQUNFLGFBQWE7RUFDZjtBQUVBLDhFQUE4RTtBQUM5RTtJQUNFLGNBQWM7RUFDaEI7QUFFQSwrRUFBK0U7QUFDL0U7SUFDRSxhQUFhO0VBQ2Y7QUFFQSwrRUFBK0U7QUFDL0U7SUFDRSxhQUFhO0VBQ2Y7QUFFQSwrRUFBK0U7QUFDL0U7SUFDRSxhQUFhO0VBQ2Y7QUFFQSwrRUFBK0U7QUFDL0U7SUFDRSxhQUFhO0VBQ2Y7QUFFQSwrRUFBK0U7QUFDL0U7SUFDRSxZQUFZO0VBQ2Q7QUFFQSwrRUFBK0U7QUFDL0U7SUFDRSxjQUFjO0lBQ2QsZUFBZTtJQUNmO0VBQ0Y7QUFFQTtNQUNJLFlBQVk7RUFDaEI7QUFDQSxtQ0FBbUM7QUFFckM7RUFDRSxXQUFXO0VBQ1gsU0FBUztBQUNYO0FBQ0E7RUFDRSxZQUFZO0VBQ1osc0NBQXNDO0FBQ3hDO0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxVQUFVO0VBQ1YsY0FBYztFQUNkLFlBQVk7RUFDWixTQUFTO0VBQ1QsT0FBTztFQUNQLFNBQVM7RUFDVCxRQUFRO0FBQ1Y7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGVBQWU7RUFDZixTQUFTO0VBQ1QsT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUVBQW1FOztFQUVuRSwwRUFBMEU7QUFDNUU7QUFFQSx5REFBeUQ7QUFDekQ7RUFDRSwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLFNBQVM7QUFDWDtBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxlQUFlO0VBQ2YsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0RBQWdEO0VBSWhELHdDQUF3QztFQUN4QyxvQkFBb0I7RUFFcEIsd1VBQXdVO0FBQzFVO0FBRUEsY0FBYztBQUVkO0VBQ0U7SUFDRSwrQkFBK0I7SUFJL0IsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxpQ0FBaUM7SUFJakMseUJBQXlCO0VBQzNCO0FBQ0Y7QUFpQ0E7RUFDRTtJQUNFLCtCQUErQjtJQUkvQix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGlDQUFpQztJQUlqQyx5QkFBeUI7RUFDM0I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL25lcGFsLW1hcC9uZXBhbC1tYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubmVwYWxtYXAtaGVhZHtcclxuICBtYXJnaW4tdG9wOiA2MjlweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm5lcGFsbWFwLWhlYWQgaDR7XHJcbiAgZm9udC1zaXplOjEuNjVyZW0gO1xyXG4gIGNvbG9yOiAjMTYyQzY5O1xyXG4gIGZvbnQtZmFtaWx5Ok1vbnRzZXJyYXQ7XHJcbn1cclxuLm5lcGFsbWFwLWhlYWQgcHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBjb2xvcjogIzE2MkM2OTtcclxuXHJcbn1cclxuLyogLm5lcGFsbWFwLWhlYWQgaDZ7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICNGQjc4MjA7IFxyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufSAqL1xyXG4vKiAubmVwYWxtYXAgc3Zne1xyXG4gIHBhZGRpbmc6IDE2MHB4IDBweCAwcHggNjA1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIFxyXG59ICovXHJcbi5jYXJke1xyXG4gIHotaW5kZXg6IDk5OTk5OTk5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6I0M4QzZFMiA7XHJcbiAgd2lkdGg6IDE3MHB4O1xyXG59XHJcbi5jYXJkLWhlYWRlcntcclxuICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmxpc3QtZ3JvdXAubGlzdC1ncm91cC1mbHVzaHtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbn1cclxuXHJcbi8qUmVzcG9uc2l2ZSovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCl7XHJcbiAgLm5lcGFsbWFwLWhlYWR7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZzowcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgLm5lcGFsbWFwLWhlYWQgaDR7XHJcbiAgICBmb250LXNpemU6MS4zNXJlbSA7XHJcbiAgICBjb2xvcjogIzE2MkM2OTtcclxuICAgIGZvbnQtZmFtaWx5Ok1vbnRzZXJyYXQ7XHJcbiAgfVxyXG4gIC5uZXBhbG1hcC1oZWFkIHB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBjb2xvcjogIzE2MkM2OTtcclxuICBcclxuICB9XHJcbiAgLm5lcGFsbWFwLWhlYWQgaDZ7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjRkI3ODIwOyBcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICB9XHJcbiAgLm5lcGFsbWFwIHB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIFxyXG4gIH1cclxuICAuY2FyZHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAyM3B4KXtcclxuICAubmVwYWxtYXAtaGVhZHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBwYWRkaW5nOjBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAubmVwYWxtYXAtaGVhZCBoNHtcclxuICAgIGZvbnQtc2l6ZToxLjM1cmVtIDtcclxuICAgIGNvbG9yOiAjMTYyQzY5O1xyXG4gICAgZm9udC1mYW1pbHk6TW9udHNlcnJhdDtcclxuICB9XHJcbiAgLm5lcGFsbWFwLWhlYWQgcHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGNvbG9yOiAjMTYyQzY5O1xyXG4gIFxyXG4gIH1cclxuICAubmVwYWxtYXAtaGVhZCBoNntcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICNGQjc4MjA7IFxyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIH1cclxuXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjRweCkgYW5kIChtYXgtd2lkdGg6MTM2NXB4KXtcclxuICAubmVwYWxtYXAtaGVhZHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBwYWRkaW5nOjBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAubmVwYWxtYXAtaGVhZCBoNHtcclxuICAgIGZvbnQtc2l6ZToxLjM1cmVtIDtcclxuICAgIGNvbG9yOiAjMTYyQzY5O1xyXG4gICAgZm9udC1mYW1pbHk6TW9udHNlcnJhdDtcclxuICB9XHJcbiAgLm5lcGFsbWFwLWhlYWQgcHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGNvbG9yOiAjMTYyQzY5O1xyXG4gIFxyXG4gIH1cclxuICAubmVwYWxtYXAtaGVhZCBoNntcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICNGQjc4MjA7IFxyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qIGxpbmUgMSwgLi4vLi4vRG9jdW1lbnRzL3N0eWxpbmctYXBwL3NyYy9zdHlsZXMvc2Nzcy9MYXlvdXQvX25lcGFsbWFwLnNjc3MgKi9cclxuLmRpc3RyaWN0IHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC8qIGxpbmUgMywgLi4vLi4vRG9jdW1lbnRzL3N0eWxpbmctYXBwL3NyYy9zdHlsZXMvc2Nzcy9MYXlvdXQvX25lcGFsbWFwLnNjc3MgKi9cclxuICAuZGlzdHJpY3QgLnByb3YxIHtcclxuICAgIGZpbGw6ICM1REFERTIgO1xyXG4gIH1cclxuXHJcbiAgLyogbGluZSA2LCAuLi8uLi9Eb2N1bWVudHMvc3R5bGluZy1hcHAvc3JjL3N0eWxlcy9zY3NzL0xheW91dC9fbmVwYWxtYXAuc2NzcyAqL1xyXG4gIC5kaXN0cmljdCAucHJvdjIge1xyXG4gICAgZmlsbDogI2JhOWNkNjtcclxuICB9XHJcblxyXG4gIC8qIGxpbmUgOSwgLi4vLi4vRG9jdW1lbnRzL3N0eWxpbmctYXBwL3NyYy9zdHlsZXMvc2Nzcy9MYXlvdXQvX25lcGFsbWFwLnNjc3MgKi9cclxuICAuZGlzdHJpY3QgLnByb3YzIHtcclxuICAgIGZpbGw6ICNGNUIwNDEgO1xyXG4gIH1cclxuXHJcbiAgLyogbGluZSAxMiwgLi4vLi4vRG9jdW1lbnRzL3N0eWxpbmctYXBwL3NyYy9zdHlsZXMvc2Nzcy9MYXlvdXQvX25lcGFsbWFwLnNjc3MgKi9cclxuICAuZGlzdHJpY3QgLnByb3Y0IHtcclxuICAgIGZpbGw6ICM2Yzc1N2Q7XHJcbiAgfVxyXG5cclxuICAvKiBsaW5lIDE1LCAuLi8uLi9Eb2N1bWVudHMvc3R5bGluZy1hcHAvc3JjL3N0eWxlcy9zY3NzL0xheW91dC9fbmVwYWxtYXAuc2NzcyAqL1xyXG4gIC5kaXN0cmljdCAucHJvdjUge1xyXG4gICAgZmlsbDogIzE3YTJiODtcclxuICB9XHJcblxyXG4gIC8qIGxpbmUgMTgsIC4uLy4uL0RvY3VtZW50cy9zdHlsaW5nLWFwcC9zcmMvc3R5bGVzL3Njc3MvTGF5b3V0L19uZXBhbG1hcC5zY3NzICovXHJcbiAgLmRpc3RyaWN0IC5wcm92NiB7XHJcbiAgICBmaWxsOiAjRUM3MDYzO1xyXG4gIH1cclxuXHJcbiAgLyogbGluZSAyMSwgLi4vLi4vRG9jdW1lbnRzL3N0eWxpbmctYXBwL3NyYy9zdHlsZXMvc2Nzcy9MYXlvdXQvX25lcGFsbWFwLnNjc3MgKi9cclxuICAuZGlzdHJpY3QgLnByb3Y3IHtcclxuICAgIGZpbGw6ICM1OEQ2OEQ7XHJcbiAgfVxyXG5cclxuICAvKiBsaW5lIDI1LCAuLi8uLi9Eb2N1bWVudHMvc3R5bGluZy1hcHAvc3JjL3N0eWxlcy9zY3NzL0xheW91dC9fbmVwYWxtYXAuc2NzcyAqL1xyXG4gIC5kaXN0cmljdDpob3ZlciBwYXRoIHtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICB9XHJcblxyXG4gIC8qIGxpbmUgMzIsIC4uLy4uL0RvY3VtZW50cy9zdHlsaW5nLWFwcC9zcmMvc3R5bGVzL3Njc3MvTGF5b3V0L19uZXBhbG1hcC5zY3NzICovXHJcbiAgLm1hcHRleHQge1xyXG4gICAgY29sb3I6ICNmMWYxZjE7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LWZhbWlseTogQXZlcnRhU2VtaUJvbGRcclxuICB9XHJcblxyXG4gIHRleHR7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLyojIHNvdXJjZU1hcHBpbmdVUkw9bWFpbi5jc3MubWFwICovXHJcblxyXG4uZmllbGQtdGlwOmhvdmVyIC50aXAtY29udGVudCB7XHJcbiAgcmlnaHQ6LTIwcHg7XHJcbiAgb3BhY2l0eToxO1xyXG59XHJcbmJvZHkge1xyXG4gIHBhZGRpbmc6MzBweDtcclxuICBmb250Om5vcm1hbCAxMnB4LzEuNSBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmxvYWRpbmcge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgaGVpZ2h0OiAyZW07XHJcbiAgd2lkdGg6IDJlbTtcclxuICBvdmVyZmxvdzogc2hvdztcclxuICBtYXJnaW46IGF1dG87XHJcbiAgdG9wOiAxMGVtO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4vKiBUcmFuc3BhcmVudCBPdmVybGF5ICovXHJcbi5sb2FkaW5nOmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMTBlbTtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQocmdiYSgyMCwgMjAsIDIwLC44KSwgcmdiYSgwLCAwLCAwLCAuOCkpO1xyXG5cclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChyZ2JhKDIwLCAyMCwgMjAsLjgpLCByZ2JhKDAsIDAsIDAsLjgpKTtcclxufVxyXG5cclxuLyogOm5vdCg6cmVxdWlyZWQpIGhpZGVzIHRoZXNlIHJ1bGVzIGZyb20gSUU5IGFuZCBiZWxvdyAqL1xyXG4ubG9hZGluZzpub3QoOnJlcXVpcmVkKSB7XHJcbiAgLyogaGlkZSBcImxvYWRpbmcuLi5cIiB0ZXh0ICovXHJcbiAgZm9udDogMC8wIGE7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHRleHQtc2hhZG93OiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuLmxvYWRpbmc6bm90KDpyZXF1aXJlZCk6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICB3aWR0aDogMWVtO1xyXG4gIGhlaWdodDogMWVtO1xyXG4gIG1hcmdpbi10b3A6IC0wLjVlbTtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogc3Bpbm5lciAxNTBtcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgLW1vei1hbmltYXRpb246IHNwaW5uZXIgMTUwbXMgaW5maW5pdGUgbGluZWFyO1xyXG4gIC1tcy1hbmltYXRpb246IHNwaW5uZXIgMTUwbXMgaW5maW5pdGUgbGluZWFyO1xyXG4gIC1vLWFuaW1hdGlvbjogc3Bpbm5lciAxNTBtcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgYW5pbWF0aW9uOiBzcGlubmVyIDE1MG1zIGluZmluaXRlIGxpbmVhcjtcclxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIDEuNWVtIDAgMCAwLCByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAxLjFlbSAxLjFlbSAwIDAsIHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIDAgMS41ZW0gMCAwLCByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAtMS4xZW0gMS4xZW0gMCAwLCByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAtMS41ZW0gMCAwIDAsIHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIC0xLjFlbSAtMS4xZW0gMCAwLCByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAwIC0xLjVlbSAwIDAsIHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIDEuMWVtIC0xLjFlbSAwIDA7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgyNTUsMjU1LDI1NSwgMC43NSkgMS41ZW0gMCAwIDAsIHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIDEuMWVtIDEuMWVtIDAgMCwgcmdiYSgyNTUsMjU1LDI1NSwgMC43NSkgMCAxLjVlbSAwIDAsIHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIC0xLjFlbSAxLjFlbSAwIDAsIHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIC0xLjVlbSAwIDAgMCwgcmdiYSgyNTUsMjU1LDI1NSwgMC43NSkgLTEuMWVtIC0xLjFlbSAwIDAsIHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIDAgLTEuNWVtIDAgMCwgcmdiYSgyNTUsMjU1LDI1NSwgMC43NSkgMS4xZW0gLTEuMWVtIDAgMDtcclxufVxyXG5cclxuLyogQW5pbWF0aW9uICovXHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3Bpbm5lciB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBzcGlubmVyIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuQC1vLWtleWZyYW1lcyBzcGlubmVyIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBzcGlubmVyIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/nepal-map/nepal-map.component.ts":
/*!**************************************************!*\
  !*** ./src/app/nepal-map/nepal-map.component.ts ***!
  \**************************************************/
/*! exports provided: NepalMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NepalMapComponent", function() { return NepalMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _core_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/notification/notification.service */ "./src/app/core/notification/notification.service.ts");
/* harmony import */ var _core_authentication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/authentication */ "./src/app/core/authentication/index.ts");





let NepalMapComponent = class NepalMapComponent {
    constructor(handler, ns, apicall) {
        this.ns = ns;
        this.apicall = apicall;
        this.apicall.getProvinceData().subscribe(data => {
            this.provinceData = data;
            this.showstuff = true;
        });
        // this.httpClient = new HttpClient(handler);
        // this.httpClient.get<DataPayload>('https://covidapi.mohp.gov.np/api/v1/health-facility2/').subscribe(data => {
        //   console.log(data);
        //   this.data = data;
        //   this.Hospitals = this.data.results;
        //   this.showstuff = true;
        //   console.log(this.Hospitals);
        // });
    }
    showProvincedata1(mouse) {
        const id = mouse.path.some(elem => {
            if (elem.id) {
                if (elem.id.includes('pradesh')) {
                    return elem.id;
                }
            }
        });
        if (id) {
            mouse.path.forEach(papa => {
                if (papa.id) {
                    if (papa.id.includes('pradesh')) {
                        const pradesh = papa.id;
                        const provinceNum = pradesh.split('-')[1];
                        const provData1 = this.provinceData.filter(elem => elem.province_id == provinceNum);
                        this.provData = provData1[0];
                        if (this.provData != null) {
                            this.total_in_isolation = this.provData.total_in_isolation;
                            this.total_positive = this.provData.total_positive;
                            this.total_tested = this.provData.total_tested;
                            this.total_negative = this.provData.total_negative;
                            this.total_death = this.provData.total_death;
                            this.total_recovered = this.provData.total_recovered;
                            this.num_of_isolation_bed = this.provData.num_of_isolation_bed;
                            this.occupied_isolation_bed = this.provData.occupied_isolation_bed;
                            this.facility_count = this.provData.occupied_isolation_bed;
                            this.provinceName = this.provData.province_name;
                            const myelem = document.getElementById('selectIt');
                            myelem.style.position = 'absolute';
                            myelem.style.left = mouse.pageX + 'px';
                            myelem.style.top = mouse.pageY + 'px';
                            myelem.style.display = 'block';
                        }
                    }
                }
            });
        }
        else if ((document.activeElement === document.getElementById('nepalmapAnchor'))) {
            const myelem = document.getElementById('selectIt');
            myelem.style.display = 'none';
        }
        else {
            const myelem = document.getElementById('selectIt');
            myelem.style.display = 'none';
        }
    }
    hideme(hideme) {
        const myelem = document.getElementById('selectIt');
        myelem.style.display = 'none';
    }
    //   showProvincedata(mouse: MouseEvent, provinceNum,diva) {
    //     const div = document.getElementById(diva);
    //     const provData1 = this.provinceData.filter(elem => elem.province_id == provinceNum);
    //     this.provData = provData1[0];
    //     if (this.provData != null) {
    //       this.total_in_isolation = this.provData.total_in_isolation;
    //       this.total_positive = this.provData.total_positive;
    //       this.total_tested = this.provData.total_tested;
    //       this.total_negative =  this.provData.total_negative;
    //       this.total_death = this.provData.total_death;
    //       this.total_recovered = this.provData.total_recovered;
    //       this.num_of_isolation_bed = this.provData.num_of_isolation_bed;
    //       this.occupied_isolation_bed = this.provData.occupied_isolation_bed;
    //       this.facility_count = this.provData.occupied_isolation_bed;
    //       this.provinceName = this.provData.province_name;
    //       const myelem = document.getElementById('selectIt');
    //       myelem.style.position = 'absolute';
    //       myelem.style.left = mouse.pageX + 'px';
    //       myelem.style.top = mouse.pageY + 'px';
    //       myelem.style.display = 'block';
    //     }
    //     else{
    //       const myelem = document.getElementById('selectIt');
    //       myelem.style.display = 'none';
    //     }
    //
    //   }
    //
    //   hideProvincedata(event12:MouseEvent,diva) {
    //     // console.log(event12.relatedTarget.id);
    //     // console.log(event12.target.id);
    //     if(event12.relatedTarget.id =='' && event12.target.id == '' || (event12.relatedTarget.id =='Layer_1' || event12.target.id =='Layer_1')){
    //        console.log("out");
    //     }
    //     else{
    //        console.log("in")
    //     }
    // }
    //
    // mousMovedata(datala){
    //     console.log(datala);
    // }
    ngOnInit() {
    }
    gotoTop() {
        document.documentElement.scrollTop = 0;
    }
};
NepalMapComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpBackend"] },
    { type: _core_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] },
    { type: _core_authentication__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('selectIt', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], NepalMapComponent.prototype, "mydiv", void 0);
NepalMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nepal-map',
        template: __webpack_require__(/*! raw-loader!./nepal-map.component.html */ "./node_modules/raw-loader/index.js!./src/app/nepal-map/nepal-map.component.html"),
        styles: [__webpack_require__(/*! ./nepal-map.component.css */ "./src/app/nepal-map/nepal-map.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpBackend"], _core_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], _core_authentication__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
], NepalMapComponent);



/***/ }),

/***/ "./src/app/shared/breadcrumb/breadcrumb.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/shared/breadcrumb/breadcrumb.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".test-container {\n  border-bottom: 2px solid #ffb22b;\n  text-align: center;\n  position: absolute;\n  width: calc(100% - 50px);\n  z-index: 1;\n  top: 0;\n}\n.test-container span {\n  background: #ffb22b;\n  padding: 0px 10px;\n  font-size: 12px;\n  color: #fff;\n  margin: 0 0 0;\n  display: inline-block;\n  position: relative;\n  bottom: -4px;\n  border-radius: 7px 7px 0 0;\n  font-weight: 500;\n}\n.test-container span:before {\n  position: absolute;\n  content: \"\";\n  border-bottom: 0 solid transparent;\n  border-top: 17px solid transparent;\n  border-right: 18px solid #ffb22b;\n  top: -1px;\n  left: -14px;\n  border-radius: 0 6px 0 0;\n  z-index: 2222;\n}\n.test-container span:after {\n  position: absolute;\n  content: \"\";\n  border-radius: 4px 0 0 0;\n  border-bottom: 0 solid transparent;\n  border-top: 17px solid transparent;\n  border-left: 18px solid #ffb22b;\n  top: -1px;\n  right: -14px;\n  border-radius: 10px 14px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2JyZWFkY3J1bWIvQzpcXHByb2plY3RzXFxjb3ZpZDE5LWFuZ3VsYXIvc3JjXFxhcHBcXHNoYXJlZFxcYnJlYWRjcnVtYlxcYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7QUNDRjtBREFFO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQ0VKO0FEQUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtBQ0VKO0FEQUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSwrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVzdC1jb250YWluZXIge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZiMjJiO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpOyAvLyBwYWRkaW5nIDI1ICsgMjUgb24gLmNvbnRhaW5lci1mbHVpZCA9IDUwXHJcbiAgei1pbmRleDogMTtcclxuICB0b3A6IDA7XHJcbiAgc3BhbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZiMjJiO1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbjogMCAwIDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IC00cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHggN3B4IDAgMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIHNwYW46YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBib3JkZXItYm90dG9tOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXRvcDogMTdweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yaWdodDogMThweCBzb2xpZCAjZmZiMjJiO1xyXG4gICAgdG9wOiAtMXB4O1xyXG4gICAgbGVmdDogLTE0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDZweCAwIDA7XHJcbiAgICB6LWluZGV4OiAyMjIyO1xyXG4gIH1cclxuICBzcGFuOmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXRvcDogMTdweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1sZWZ0OiAxOHB4IHNvbGlkICNmZmIyMmI7XHJcbiAgICB0b3A6IC0xcHg7XHJcbiAgICByaWdodDogLTE0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDE0cHggMCAwO1xyXG4gIH1cclxufVxyXG4iLCIudGVzdC1jb250YWluZXIge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmYjIyYjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KTtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAwO1xufVxuLnRlc3QtY29udGFpbmVyIHNwYW4ge1xuICBiYWNrZ3JvdW5kOiAjZmZiMjJiO1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAwIDAgMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogLTRweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4IDdweCAwIDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4udGVzdC1jb250YWluZXIgc3BhbjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlci1ib3R0b206IDAgc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3A6IDE3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogMThweCBzb2xpZCAjZmZiMjJiO1xuICB0b3A6IC0xcHg7XG4gIGxlZnQ6IC0xNHB4O1xuICBib3JkZXItcmFkaXVzOiAwIDZweCAwIDA7XG4gIHotaW5kZXg6IDIyMjI7XG59XG4udGVzdC1jb250YWluZXIgc3BhbjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCAwO1xuICBib3JkZXItYm90dG9tOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wOiAxN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogMThweCBzb2xpZCAjZmZiMjJiO1xuICB0b3A6IC0xcHg7XG4gIHJpZ2h0OiAtMTRweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxNHB4IDAgMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/breadcrumb/breadcrumb.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/breadcrumb/breadcrumb.component.ts ***!
  \***********************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let BreadcrumbComponent = class BreadcrumbComponent {
    constructor(router, activatedRoute, titleService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => this.activatedRoute), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(route => {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(route => route.outlet === 'primary'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(route => route.data))
            .subscribe(event => {
            this.titleService.setTitle(event['title']);
            this.pageInfo = event;
        });
    }
    ngOnInit() { }
};
BreadcrumbComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], BreadcrumbComponent.prototype, "layout", void 0);
BreadcrumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-breadcrumb',
        template: __webpack_require__(/*! raw-loader!./breadcrumb.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/breadcrumb/breadcrumb.component.html"),
        styles: [__webpack_require__(/*! ./breadcrumb.component.scss */ "./src/app/shared/breadcrumb/breadcrumb.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
], BreadcrumbComponent);



/***/ }),

/***/ "./src/app/shared/breadcrumb/index.ts":
/*!********************************************!*\
  !*** ./src/app/shared/breadcrumb/index.ts ***!
  \********************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breadcrumb.component */ "./src/app/shared/breadcrumb/breadcrumb.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return _breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__["BreadcrumbComponent"]; });

// start:ng42.barrel

// end:ng42.barrel


/***/ }),

/***/ "./src/app/shared/button-loader/button-loader.component.css":
/*!******************************************************************!*\
  !*** ./src/app/shared/button-loader/button-loader.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9idXR0b24tbG9hZGVyL2J1dHRvbi1sb2FkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/button-loader/button-loader.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/button-loader/button-loader.component.ts ***!
  \*****************************************************************/
/*! exports provided: ButtonLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonLoaderComponent", function() { return ButtonLoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ButtonLoaderComponent = class ButtonLoaderComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], ButtonLoaderComponent.prototype, "isLoading", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ButtonLoaderComponent.prototype, "label", void 0);
ButtonLoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-button-loader',
        template: __webpack_require__(/*! raw-loader!./button-loader.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/button-loader/button-loader.component.html"),
        styles: [__webpack_require__(/*! ./button-loader.component.css */ "./src/app/shared/button-loader/button-loader.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ButtonLoaderComponent);



/***/ }),

/***/ "./src/app/shared/button-loader/index.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/button-loader/index.ts ***!
  \***********************************************/
/*! exports provided: ButtonLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_loader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button-loader.component */ "./src/app/shared/button-loader/button-loader.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonLoaderComponent", function() { return _button_loader_component__WEBPACK_IMPORTED_MODULE_0__["ButtonLoaderComponent"]; });

// start:ng42.barrel

// end:ng42.barrel


/***/ }),

/***/ "./src/app/shared/form-error-wrapper/form-error-wrapper.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared/form-error-wrapper/form-error-wrapper.component.ts ***!
  \***************************************************************************/
/*! exports provided: FormErrorWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormErrorWrapperComponent", function() { return FormErrorWrapperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");



let FormErrorWrapperComponent = class FormErrorWrapperComponent {
    constructor(errorMessageService) {
        this.errorMessageService = errorMessageService;
        this.errorObject = _core__WEBPACK_IMPORTED_MODULE_2__["ERROR_OBJECTS"];
        errorMessageService.errors$.subscribe((errors) => {
            errors
                .filter(e => e.type === this.apiErrorType
            //  && e.serviceUrl == this.apiServiceUrl
            )
                .map(e => {
                this.apiErrorMessage = e.error;
            });
        });
    }
    ngOnInit() { }
    ngOnChanges() {
        this.errorKeys = Object.keys(this.errorObject);
    }
    ngAfterViewInit() {
        this.control.valueChanges.subscribe(() => {
            this.apiErrorMessage = '';
        });
    }
    formateError(errorMessage, errorObj) {
        const types = ['min', 'max', 'requiredLength'];
        types.forEach(type => {
            if (!!errorObj[type]) {
                errorMessage = errorMessage.replace(/{{value}}/g, errorObj[type]);
            }
        });
        return errorMessage.replace(/{{field}}/g, this.controlName);
    }
    hasError() {
        return ((this.control.errors && this.control.touched) || this.apiErrorMessage);
    }
};
FormErrorWrapperComponent.ctorParameters = () => [
    { type: _core__WEBPACK_IMPORTED_MODULE_2__["ErrorMessageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FormErrorWrapperComponent.prototype, "control", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FormErrorWrapperComponent.prototype, "controlName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FormErrorWrapperComponent.prototype, "apiErrorType", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FormErrorWrapperComponent.prototype, "apiServiceUrl", void 0);
FormErrorWrapperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-error-wrapper',
        template: __webpack_require__(/*! raw-loader!./form-error-wrapper.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/form-error-wrapper/form-error-wrapper.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["ErrorMessageService"]])
], FormErrorWrapperComponent);



/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: SharedModule, SpinnerComponent, BreadcrumbComponent, BlankComponent, FullComponent, ButtonLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared/shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]; });

/* harmony import */ var _spinner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spinner.component */ "./src/app/shared/spinner.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return _spinner_component__WEBPACK_IMPORTED_MODULE_1__["SpinnerComponent"]; });

/* harmony import */ var _breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breadcrumb */ "./src/app/shared/breadcrumb/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return _breadcrumb__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbComponent"]; });

/* harmony import */ var _button_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button-loader */ "./src/app/shared/button-loader/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonLoaderComponent", function() { return _button_loader__WEBPACK_IMPORTED_MODULE_3__["ButtonLoaderComponent"]; });

/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts */ "./src/app/shared/layouts/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlankComponent", function() { return _layouts__WEBPACK_IMPORTED_MODULE_4__["BlankComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FullComponent", function() { return _layouts__WEBPACK_IMPORTED_MODULE_4__["FullComponent"]; });

/* harmony import */ var _layouts_blank__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/blank */ "./src/app/shared/layouts/blank/index.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _layouts_full__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/full */ "./src/app/shared/layouts/full/index.ts");
/* empty/unused harmony star reexport */// start:ng42.barrel







// end:ng42.barrel


/***/ }),

/***/ "./src/app/shared/layouts/blank/blank.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/layouts/blank/blank.component.ts ***!
  \*********************************************************/
/*! exports provided: BlankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankComponent", function() { return BlankComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BlankComponent = class BlankComponent {
};
BlankComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-blank-layout',
        template: __webpack_require__(/*! raw-loader!./blank.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/layouts/blank/blank.component.html")
    })
], BlankComponent);



/***/ }),

/***/ "./src/app/shared/layouts/blank/index.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/layouts/blank/index.ts ***!
  \***********************************************/
/*! exports provided: BlankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blank_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blank.component */ "./src/app/shared/layouts/blank/blank.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlankComponent", function() { return _blank_component__WEBPACK_IMPORTED_MODULE_0__["BlankComponent"]; });

// start:ng42.barrel

// end:ng42.barrel


/***/ }),

/***/ "./src/app/shared/layouts/full/full.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/shared/layouts/full/full.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container {\n  margin-top: 60px;\n  margin-left: 235px;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden;\n}\n\n@media screen and (max-width: 992px) {\n  .main-container {\n    margin-left: 0px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dHMvZnVsbC9DOlxccHJvamVjdHNcXGNvdmlkMTktYW5ndWxhci9zcmNcXGFwcFxcc2hhcmVkXFxsYXlvdXRzXFxmdWxsXFxmdWxsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvbGF5b3V0cy9mdWxsL2Z1bGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDQTtFQUNFO0lBQ0UsMkJBQUE7RUNFRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2xheW91dHMvZnVsbC9mdWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMzVweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIC1tcy1vdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5tYWluLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiIsIi5tYWluLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMzVweDtcbiAgcGFkZGluZzogMTVweDtcbiAgLW1zLW92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLm1haW4tY29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/layouts/full/full.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/layouts/full/full.component.ts ***!
  \*******************************************************/
/*! exports provided: FullComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullComponent", function() { return FullComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let FullComponent = class FullComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        if (this.router.url === '/') {
            this.router.navigate(['/dashboard']);
        }
    }
};
FullComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
FullComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-full-layout',
        template: __webpack_require__(/*! raw-loader!./full.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/layouts/full/full.component.html"),
        styles: [__webpack_require__(/*! ./full.component.scss */ "./src/app/shared/layouts/full/full.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], FullComponent);



/***/ }),

/***/ "./src/app/shared/layouts/full/index.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/layouts/full/index.ts ***!
  \**********************************************/
/*! exports provided: FullComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _full_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./full.component */ "./src/app/shared/layouts/full/full.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FullComponent", function() { return _full_component__WEBPACK_IMPORTED_MODULE_0__["FullComponent"]; });

// start:ng42.barrel

// end:ng42.barrel


/***/ }),

/***/ "./src/app/shared/layouts/index.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/layouts/index.ts ***!
  \*****************************************/
/*! exports provided: BlankComponent, FullComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blank__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blank */ "./src/app/shared/layouts/blank/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlankComponent", function() { return _blank__WEBPACK_IMPORTED_MODULE_0__["BlankComponent"]; });

/* harmony import */ var _full__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./full */ "./src/app/shared/layouts/full/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FullComponent", function() { return _full__WEBPACK_IMPORTED_MODULE_1__["FullComponent"]; });

// start:ng42.barrel


// end:ng42.barrel


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "./src/app/shared/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/blank/blank.component */ "./src/app/shared/layouts/blank/blank.component.ts");
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/full/full.component */ "./src/app/shared/layouts/full/full.component.ts");
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/spinner.component */ "./src/app/shared/spinner.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _shared_button_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/button-loader */ "./src/app/shared/button-loader/index.ts");
/* harmony import */ var _shared_form_error_wrapper_form_error_wrapper_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/form-error-wrapper/form-error-wrapper.component */ "./src/app/shared/form-error-wrapper/form-error-wrapper.component.ts");












let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [
            _shared_spinner_component__WEBPACK_IMPORTED_MODULE_8__["SpinnerComponent"],
            _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbComponent"],
            _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_6__["BlankComponent"],
            _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_7__["FullComponent"],
            _shared_button_loader__WEBPACK_IMPORTED_MODULE_10__["ButtonLoaderComponent"],
            _shared_form_error_wrapper_form_error_wrapper_component__WEBPACK_IMPORTED_MODULE_11__["FormErrorWrapperComponent"]
        ],
        exports: [
            _shared_spinner_component__WEBPACK_IMPORTED_MODULE_8__["SpinnerComponent"],
            _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbComponent"],
            _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_6__["BlankComponent"],
            _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_7__["FullComponent"],
            _shared_button_loader__WEBPACK_IMPORTED_MODULE_10__["ButtonLoaderComponent"],
            _shared_form_error_wrapper_form_error_wrapper_component__WEBPACK_IMPORTED_MODULE_11__["FormErrorWrapperComponent"]
        ],
        entryComponents: [],
        providers: []
    })
], SharedModule);



/***/ }),

/***/ "./src/app/shared/spinner.component.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/spinner.component.ts ***!
  \*********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let SpinnerComponent = class SpinnerComponent {
    constructor(router, document) {
        this.router = router;
        this.document = document;
        this.isSpinnerVisible = true;
        this.backgroundColor = 'rgba(0, 115, 170, 0.69)';
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                this.isSpinnerVisible = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"] ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
                this.isSpinnerVisible = false;
            }
        }, () => {
            this.isSpinnerVisible = false;
        });
    }
    ngOnDestroy() {
        this.isSpinnerVisible = false;
    }
};
SpinnerComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpinnerComponent.prototype, "backgroundColor", void 0);
SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-spinner',
        template: `<div class="preloader" *ngIf="isSpinnerVisible">
        <div class="spinner">
          <div class="double-bounce1"></div>
          <div class="double-bounce2"></div>
        </div>
    </div>`,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        Document])
], SpinnerComponent);



/***/ }),

/***/ "./src/app/suspectedcase/suspectedcase.component.css":
/*!***********************************************************!*\
  !*** ./src/app/suspectedcase/suspectedcase.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  #cover {\r\n    /* background: #F4F6F6  url('../../assets/images/corona.jpg') center center no-repeat; */\r\n    background-size: cover;\r\n    height: 100%;\r\n    text-align: center;\r\n    display: flex;\r\n    align-items: center;\r\n    position: relative;\r\n}\r\n\r\n#cover-caption {\r\n    width: 100%;\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n\r\n.container-fluid{\r\n  background-image: url('other_bg.svg');\r\n  width: 100%;\r\n  overflow: hidden;\r\n  min-height: 100vh;\r\n}\r\n\r\nform{\r\n  background-color: #FCF3CF ;\r\n  border-radius: 10px;\r\n  padding: 17px 12px 13px 17px;\r\n}\r\n\r\n/* only used for background overlay not needed for centering */\r\n\r\nform:before {\r\n    content: '';\r\n    height: 100%;\r\n    left: 0;\r\n    position: absolute;\r\n    top: 0;\r\n    width: 100%;\r\n    background-color: rgba(0,0,0,0.2);\r\n    z-index: -1;\r\n    border-radius: 10px;\r\n}\r\n\r\n.form-control{\r\n  float: none;\r\n  text-align: center;\r\n}\r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VzcGVjdGVkY2FzZS9zdXNwZWN0ZWRjYXNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtFQUNFO0lBQ0Usd0ZBQXdGO0lBQ3hGLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBQ0E7RUFDRSxxQ0FBeUQ7RUFDekQsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLDRCQUE0QjtBQUM5Qjs7QUFDQSw4REFBOEQ7O0FBQzlEO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixPQUFPO0lBQ1Asa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixXQUFXO0lBQ1gsaUNBQWlDO0lBQ2pDLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvc3VzcGVjdGVkY2FzZS9zdXNwZWN0ZWRjYXNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAjY292ZXIge1xyXG4gICAgLyogYmFja2dyb3VuZDogI0Y0RjZGNiAgdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2Nvcm9uYS5qcGcnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDsgKi9cclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuI2NvdmVyLWNhcHRpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcbi5jb250YWluZXItZmx1aWR7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9vdGhlcl9iZy5zdmdcIik7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5mb3Jte1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGQ0YzQ0YgO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMTdweCAxMnB4IDEzcHggMTdweDtcclxufVxyXG4vKiBvbmx5IHVzZWQgZm9yIGJhY2tncm91bmQgb3ZlcmxheSBub3QgbmVlZGVkIGZvciBjZW50ZXJpbmcgKi9cclxuZm9ybTpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuICBcclxuLmZvcm0tY29udHJvbHtcclxuICBmbG9hdDogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/suspectedcase/suspectedcase.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/suspectedcase/suspectedcase.component.ts ***!
  \**********************************************************/
/*! exports provided: SuspectedcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuspectedcaseComponent", function() { return SuspectedcaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/notification/notification.service */ "./src/app/core/notification/notification.service.ts");







let SuspectedcaseComponent = class SuspectedcaseComponent {
    constructor(router, formBuilder, authenticationService, ns) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.ns = ns;
        this.isLoading = false;
        this.createForm();
    }
    ngOnInit() { }
    signup() {
        this.isLoading = true;
        this.authenticationService
            .saveSuspectedcase(this.signupForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
            this.signupForm.markAsPristine();
            this.isLoading = false;
        }))
            .subscribe((user) => {
            this.router.navigate(['/homepage']);
            this.ns.success('Upload successful');
        }, (error) => {
            console.log(`Signup error: ${error}`);
            this.ns.error('Oops something went wrong!');
        });
    }
    createForm() {
        this.signupForm = this.formBuilder.group({
            period: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            symptoms: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            age: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            bodyTemperature: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            contactFromOutside: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
};
SuspectedcaseComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _core__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _core_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }
];
SuspectedcaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-suspectedcase',
        template: __webpack_require__(/*! raw-loader!./suspectedcase.component.html */ "./node_modules/raw-loader/index.js!./src/app/suspectedcase/suspectedcase.component.html"),
        styles: [__webpack_require__(/*! ./suspectedcase.component.css */ "./src/app/suspectedcase/suspectedcase.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _core__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
        _core_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]])
], SuspectedcaseComponent);



/***/ }),

/***/ "./src/app/view-blackmarketing/view-blackmarketing.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/view-blackmarketing/view-blackmarketing.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Lato:300,400');\r\n\r\n.container-fluid{\r\n  background-image: url('other_bg.svg');\r\n  width: 100%;\r\n  overflow: hidden;\r\n  min-height: 100vh;\r\n}\r\n\r\n.head-text h3{\r\n  margin-top: 30px;\r\n  text-align: center;\r\n  font-size: 1.75rem;\r\n  font-family: Montserrat;\r\n  color: #162C69;\r\n}\r\n\r\n.head-text p{\r\n  padding: 0 150px 0 150px;\r\n  font-size: 1rem;\r\n  color: #162C69;\r\n  text-align: center;\r\n}\r\n\r\n.blackmarketing-container{\r\n  display:grid;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  grid-auto-rows: 1fr;\r\n  color: #162C69;\r\n  overflow-x: hidden;\r\n}\r\n\r\n@media only screen and (max-width:1365px){\r\n  .blackmarketing-container {\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n  .head-text h3{\r\n    margin-top: 30px;\r\n    text-align: left;\r\n    font-size: 1.35rem;\r\n  }\r\n  .head-text p{\r\n    text-align: left;\r\n    padding: 0;\r\n    font-size: 1rem;\r\n  }  \r\n  .card-text.text-left.blackmarketing-div-title{\r\n    font-size: 0.84rem;\r\n  }\r\n  .blackmarketing-div-text{\r\n    font-size: 0.77rem;\r\n  }\r\n  /* .blackmarketing-container{\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-auto-rows: 1fr;\r\n\t} */\r\n}\r\n\r\n@media only screen and (max-width:767px){\r\n  .head-text h3{\r\n    margin-top: 30px;\r\n    text-align: left;\r\n    font-size: 1.35rem;\r\n  }\r\n  .head-text p{\r\n    text-align: left;\r\n    padding: 0;\r\n    font-size: 1rem;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 576px) {\r\n  .blackmarketing-container{\r\n    grid-template-columns: 1fr;\r\n    grid-auto-rows: 1fr;\r\n\t}\r\n  .head-text h3{\r\n    margin-top: 30px;\r\n    text-align: left;\r\n  }\r\n  .head-text p{\r\n    text-align: left;\r\n  }\r\n}\r\n\r\n.blackmarketing-div{\r\n  background-color: white;\r\n  box-shadow: 0px 2px 5px 0px #c7c7c7;\r\n  border-radius: 4px;\r\n  transition: 0.4s;\r\n  height:100%;\r\n  position:relative;\r\n}\r\n\r\n.blackmarketing-div:hover{\r\n  background-color: white;\r\n  box-shadow: 0px 10px 15px 0px #c7c7c7;\r\n  border-radius: 4px;\r\n}\r\n\r\n.blackmarketing-div-title{\r\n  font-family: AvertaSemiBold;\r\n}\r\n\r\n.blackmarketing-div-text{\r\n  font-family: AvertaLight;\r\n}\r\n\r\n.footer{\r\n  position: absolute;\r\n  bottom:0;\r\n}\r\n\r\n.blackmarketing-div-time{\r\n  font-family: AvertaLight;\r\n}\r\n\r\n.loading {\r\n  position: fixed;\r\n  z-index: 999;\r\n  height: 2em;\r\n  width: 2em;\r\n  overflow: show;\r\n  margin: auto;\r\n  top: 10em;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n}\r\n\r\n/* Transparent Overlay */\r\n\r\n.loading:before {\r\n  content: '';\r\n  display: block;\r\n  position: fixed;\r\n  top: 10em;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: radial-gradient(rgba(20, 20, 20,.8), rgba(0, 0, 0, .8));\r\n  background: -webkit-radial-gradient(rgba(20, 20, 20,.8), rgba(0, 0, 0,.8));\r\n}\r\n\r\n/* :not(:required) hides these rules from IE9 and below */\r\n\r\n.loading:not(:required) {\r\n  /* hide \"loading...\" text */\r\n  font: 0/0 a;\r\n  color: transparent;\r\n  text-shadow: none;\r\n  background-color: transparent;\r\n  border: 0;\r\n}\r\n\r\n.loading:not(:required):after {\r\n  content: '';\r\n  display: block;\r\n  font-size: 10px;\r\n  width: 1em;\r\n  height: 1em;\r\n  margin-top: -0.5em;\r\n  -webkit-animation: spinner 150ms infinite linear;\r\n  animation: spinner 150ms infinite linear;\r\n  border-radius: 0.5em;\r\n  box-shadow: rgba(255,255,255, 0.75) 1.5em 0 0 0, rgba(255,255,255, 0.75) 1.1em 1.1em 0 0, rgba(255,255,255, 0.75) 0 1.5em 0 0, rgba(255,255,255, 0.75) -1.1em 1.1em 0 0, rgba(255,255,255, 0.75) -1.5em 0 0 0, rgba(255,255,255, 0.75) -1.1em -1.1em 0 0, rgba(255,255,255, 0.75) 0 -1.5em 0 0, rgba(255,255,255, 0.75) 1.1em -1.1em 0 0;\r\n}\r\n\r\n/* Animation */\r\n\r\n@-webkit-keyframes spinner {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes spinner {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1ibGFja21hcmtldGluZy92aWV3LWJsYWNrbWFya2V0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUVBQW1FOztBQUVuRTtFQUNFLHFDQUF5RDtFQUN6RCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixjQUFjO0FBQ2hCOztBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0lBQ0UsOEJBQThCO0VBQ2hDO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGVBQWU7RUFDakI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7OztJQUdFO0FBQ0o7O0FBQ0E7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGVBQWU7RUFDakI7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsMEJBQTBCO0lBQzFCLG1CQUFtQjtDQUN0QjtFQUNDO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixxQ0FBcUM7RUFDckMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7RUFDVixjQUFjO0VBQ2QsWUFBWTtFQUNaLFNBQVM7RUFDVCxPQUFPO0VBQ1AsU0FBUztFQUNULFFBQVE7QUFDVjs7QUFFQSx3QkFBd0I7O0FBQ3hCO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxlQUFlO0VBQ2YsU0FBUztFQUNULE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1FQUFtRTtFQUNuRSwwRUFBMEU7QUFDNUU7O0FBRUEseURBQXlEOztBQUN6RDtFQUNFLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxlQUFlO0VBQ2YsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0RBQWdEO0VBSWhELHdDQUF3QztFQUN4QyxvQkFBb0I7RUFFcEIsd1VBQXdVO0FBQzFVOztBQUlBLGNBQWM7O0FBRWQ7RUFDRTtJQUNFLCtCQUErQjtJQUkvQix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGlDQUFpQztJQUlqQyx5QkFBeUI7RUFDM0I7QUFDRjs7QUFpQ0E7RUFDRTtJQUNFLCtCQUErQjtJQUkvQix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGlDQUFpQztJQUlqQyx5QkFBeUI7RUFDM0I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctYmxhY2ttYXJrZXRpbmcvdmlldy1ibGFja21hcmtldGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCw0MDAnKTtcclxuXHJcbi5jb250YWluZXItZmx1aWR7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9vdGhlcl9iZy5zdmdcIik7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG4uaGVhZC10ZXh0IGgze1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcclxuICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcclxuICBjb2xvcjogIzE2MkM2OTtcclxufVxyXG4uaGVhZC10ZXh0IHB7XHJcbiAgcGFkZGluZzogMCAxNTBweCAwIDE1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBjb2xvcjogIzE2MkM2OTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJsYWNrbWFya2V0aW5nLWNvbnRhaW5lcntcclxuICBkaXNwbGF5OmdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcclxuICBncmlkLWF1dG8tcm93czogMWZyO1xyXG4gIGNvbG9yOiAjMTYyQzY5O1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEzNjVweCl7XHJcbiAgLmJsYWNrbWFya2V0aW5nLWNvbnRhaW5lciB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuaGVhZC10ZXh0IGgze1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDEuMzVyZW07XHJcbiAgfVxyXG4gIC5oZWFkLXRleHQgcHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH0gIFxyXG4gIC5jYXJkLXRleHQudGV4dC1sZWZ0LmJsYWNrbWFya2V0aW5nLWRpdi10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMC44NHJlbTtcclxuICB9XHJcbiAgLmJsYWNrbWFya2V0aW5nLWRpdi10ZXh0e1xyXG4gICAgZm9udC1zaXplOiAwLjc3cmVtO1xyXG4gIH1cclxuICAvKiAuYmxhY2ttYXJrZXRpbmctY29udGFpbmVye1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcclxuXHR9ICovXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KXtcclxuICAuaGVhZC10ZXh0IGgze1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDEuMzVyZW07XHJcbiAgfVxyXG4gIC5oZWFkLXRleHQgcHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLmJsYWNrbWFya2V0aW5nLWNvbnRhaW5lcntcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcclxuXHR9XHJcbiAgLmhlYWQtdGV4dCBoM3tcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICAuaGVhZC10ZXh0IHB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxufVxyXG5cclxuLmJsYWNrbWFya2V0aW5nLWRpdntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAwcHggMnB4IDVweCAwcHggI2M3YzdjNztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxuICBoZWlnaHQ6MTAwJTtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxufVxyXG5cclxuLmJsYWNrbWFya2V0aW5nLWRpdjpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAwcHggMTBweCAxNXB4IDBweCAjYzdjN2M3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmJsYWNrbWFya2V0aW5nLWRpdi10aXRsZXtcclxuICBmb250LWZhbWlseTogQXZlcnRhU2VtaUJvbGQ7XHJcbn1cclxuXHJcbi5ibGFja21hcmtldGluZy1kaXYtdGV4dHtcclxuICBmb250LWZhbWlseTogQXZlcnRhTGlnaHQ7XHJcbn1cclxuXHJcbi5mb290ZXJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTowO1xyXG59XHJcblxyXG4uYmxhY2ttYXJrZXRpbmctZGl2LXRpbWV7XHJcbiAgZm9udC1mYW1pbHk6IEF2ZXJ0YUxpZ2h0O1xyXG59XHJcblxyXG4ubG9hZGluZyB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBoZWlnaHQ6IDJlbTtcclxuICB3aWR0aDogMmVtO1xyXG4gIG92ZXJmbG93OiBzaG93O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB0b3A6IDEwZW07XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi8qIFRyYW5zcGFyZW50IE92ZXJsYXkgKi9cclxuLmxvYWRpbmc6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAxMGVtO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChyZ2JhKDIwLCAyMCwgMjAsLjgpLCByZ2JhKDAsIDAsIDAsIC44KSk7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQocmdiYSgyMCwgMjAsIDIwLC44KSwgcmdiYSgwLCAwLCAwLC44KSk7XHJcbn1cclxuXHJcbi8qIDpub3QoOnJlcXVpcmVkKSBoaWRlcyB0aGVzZSBydWxlcyBmcm9tIElFOSBhbmQgYmVsb3cgKi9cclxuLmxvYWRpbmc6bm90KDpyZXF1aXJlZCkge1xyXG4gIC8qIGhpZGUgXCJsb2FkaW5nLi4uXCIgdGV4dCAqL1xyXG4gIGZvbnQ6IDAvMCBhO1xyXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi5sb2FkaW5nOm5vdCg6cmVxdWlyZWQpOmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgd2lkdGg6IDFlbTtcclxuICBoZWlnaHQ6IDFlbTtcclxuICBtYXJnaW4tdG9wOiAtMC41ZW07XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW5uZXIgMTUwbXMgaW5maW5pdGUgbGluZWFyO1xyXG4gIC1tb3otYW5pbWF0aW9uOiBzcGlubmVyIDE1MG1zIGluZmluaXRlIGxpbmVhcjtcclxuICAtbXMtYW5pbWF0aW9uOiBzcGlubmVyIDE1MG1zIGluZmluaXRlIGxpbmVhcjtcclxuICAtby1hbmltYXRpb246IHNwaW5uZXIgMTUwbXMgaW5maW5pdGUgbGluZWFyO1xyXG4gIGFuaW1hdGlvbjogc3Bpbm5lciAxNTBtcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAxLjVlbSAwIDAgMCwgcmdiYSgyNTUsMjU1LDI1NSwgMC43NSkgMS4xZW0gMS4xZW0gMCAwLCByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAwIDEuNWVtIDAgMCwgcmdiYSgyNTUsMjU1LDI1NSwgMC43NSkgLTEuMWVtIDEuMWVtIDAgMCwgcmdiYSgyNTUsMjU1LDI1NSwgMC43NSkgLTEuNWVtIDAgMCAwLCByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAtMS4xZW0gLTEuMWVtIDAgMCwgcmdiYSgyNTUsMjU1LDI1NSwgMC43NSkgMCAtMS41ZW0gMCAwLCByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAxLjFlbSAtMS4xZW0gMCAwO1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIDEuNWVtIDAgMCAwLCByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAxLjFlbSAxLjFlbSAwIDAsIHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIDAgMS41ZW0gMCAwLCByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAtMS4xZW0gMS4xZW0gMCAwLCByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAtMS41ZW0gMCAwIDAsIHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIC0xLjFlbSAtMS4xZW0gMCAwLCByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAwIC0xLjVlbSAwIDAsIHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIDEuMWVtIC0xLjFlbSAwIDA7XHJcbn1cclxuXHJcblxyXG5cclxuLyogQW5pbWF0aW9uICovXHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3Bpbm5lciB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBzcGlubmVyIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuQC1vLWtleWZyYW1lcyBzcGlubmVyIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBzcGlubmVyIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/view-blackmarketing/view-blackmarketing.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/view-blackmarketing/view-blackmarketing.component.ts ***!
  \**********************************************************************/
/*! exports provided: ViewBlackmarketingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewBlackmarketingComponent", function() { return ViewBlackmarketingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");



let ViewBlackmarketingComponent = class ViewBlackmarketingComponent {
    constructor(apicall) {
        this.apicall = apicall;
        this.apicall.showblackmarketing().subscribe(data => {
            this.blackMarketings = data;
            if (this.blackMarketings.length < 3) {
                this.colorbox = ['dark', 'light', 'dark', 'light'];
                this.textbox = ['white', 'black', 'white', 'black'];
            }
            else {
                this.colorbox = ['dark', 'dark', 'light', 'light'];
                this.textbox = ['white', 'white', 'black', 'black'];
            }
            this.marketing = true;
        });
    }
    gotoUrl(urlToOpen) {
        let url = '';
        if (!/^http[s]?:\/\//.test(urlToOpen)) {
            url += 'http://';
        }
        url += urlToOpen;
        window.open(url, '_blank');
    }
    ngOnInit() {
    }
};
ViewBlackmarketingComponent.ctorParameters = () => [
    { type: _core__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
ViewBlackmarketingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-blackmarketing',
        template: __webpack_require__(/*! raw-loader!./view-blackmarketing.component.html */ "./node_modules/raw-loader/index.js!./src/app/view-blackmarketing/view-blackmarketing.component.html"),
        styles: [__webpack_require__(/*! ./view-blackmarketing.component.css */ "./src/app/view-blackmarketing/view-blackmarketing.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
], ViewBlackmarketingComponent);



/***/ }),

/***/ "./src/app/view-misinformation/view-misinformation.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/view-misinformation/view-misinformation.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Lato:300,400');\r\n.container-fluid{\r\n  background-image: url('other_bg.svg');\r\n  width: 100%;\r\n  overflow: hidden;\r\n  min-height: 100vh;\r\n}\r\n.head-text h3{\r\n  margin-top: 30px;\r\n  text-align: center;\r\n  font-size: 1.75rem;\r\n  color: #162C69;\r\n  font-family:Montserrat;\r\n}\r\n.head-text p{\r\n  padding: 0 150px 0 150px;\r\n  font-size: 1rem;\r\n  text-align: center;\r\n  color: #162C69;\r\n}\r\n.content-front{\r\n  z-index: 1;\r\n  padding-top: 200px;\r\n}\r\n.card-text.misinformation-div-title{\r\n  font-size: 0.95rem;\r\n  color: #162C69;\r\n}\r\n.card-text.misinformation-div-text{\r\n  font-size: 0.85rem;\r\n  color: #162C69;\r\n}\r\n.card-link.misinformation-div-goto{\r\n  font-size: 0.80rem;\r\n}\r\n.text-muted.misinformation-div-time{\r\n  font-size: 0.60rem;\r\n}\r\n.text-center{\r\n  text-align: center;\r\n}\r\n.misinformation-container{\r\n    display:grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n}\r\n@media only screen and (max-width: 768px) {\r\n  .head-text h3{\r\n    margin-top: 30px;\r\n    text-align: left;\r\n    font-size: 1.35rem;\r\n  }\r\n  .head-text p{\r\n    text-align: left;\r\n    padding: 0;\r\n    font-size: 1rem;\r\n  }  \r\n\t.misinformation-container {\r\n        grid-template-columns: 1fr 1fr;\r\n\t}\r\n}\r\n@media only screen and (max-width:767px){\r\n  .head-text h3{\r\n    margin-top: 30px;\r\n    text-align: left;\r\n    font-size: 1.35rem;\r\n  }\r\n  .head-text p{\r\n    text-align: left;\r\n    padding: 0;\r\n    font-size: 1rem;\r\n  }\r\n}\r\n@media only screen and (max-width: 576px) {\r\n  .head-text h3{\r\n    margin-top: 30px;\r\n    text-align: left;\r\n  }\r\n  .head-text p{\r\n    text-align: left;\r\n  }\r\n\t.misinformation-container {\r\n        grid-template-columns: 1fr;\r\n\t}\r\n}\r\n.misinformation-div{\r\n    background-color: white;\r\n    box-shadow: 0px 2px 5px 0px #c7c7c7;\r\n    border-radius: 4px;\r\n    transition: 0.4s;\r\n    height:100%;\r\n    position:relative\r\n}\r\n.misinformation-div:hover{\r\n    background-color: white;\r\n    box-shadow: 0px 10px 15px 0px #c7c7c7;\r\n    border-radius: 4px;\r\n}\r\n.misinformation-div-title{\r\n    font-family: AvertaSemiBold;\r\n}\r\n.misinformation-div-text{\r\n    font-family: AvertaLight;\r\n}\r\n.misinformation-div-goto{\r\n    cursor:pointer;\r\n    font-family: AvertaLight;\r\n    color:white;\r\n    background: coral;\r\n    padding: 10px;\r\n    border-radius: 4px;\r\n    box-shadow: 0px 1px 3px 0px grey;\r\n}\r\n.footer{\r\n    position: absolute;\r\n    bottom:0;\r\n}\r\n.misinformation-div-time{\r\n    font-family: AvertaLight;\r\n}\r\n.loading {\r\n  position: fixed;\r\n  z-index: 999;\r\n  height: 2em;\r\n  width: 2em;\r\n  overflow: show;\r\n  margin: auto;\r\n  top: 10em;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n}\r\n/* Transparent Overlay */\r\n.loading:before {\r\n  content: '';\r\n  display: block;\r\n  position: fixed;\r\n  top: 10em;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: radial-gradient(rgba(20, 20, 20,.8), rgba(0, 0, 0, .8));\r\n\r\n  background: -webkit-radial-gradient(rgba(20, 20, 20,.8), rgba(0, 0, 0,.8));\r\n}\r\n/* :not(:required) hides these rules from IE9 and below */\r\n.loading:not(:required) {\r\n  /* hide \"loading...\" text */\r\n  font: 0/0 a;\r\n  color: transparent;\r\n  text-shadow: none;\r\n  background-color: transparent;\r\n  border: 0;\r\n}\r\n.loading:not(:required):after {\r\n  content: '';\r\n  display: block;\r\n  font-size: 10px;\r\n  width: 1em;\r\n  height: 1em;\r\n  margin-top: -0.5em;\r\n  -webkit-animation: spinner 150ms infinite linear;\r\n  animation: spinner 150ms infinite linear;\r\n  border-radius: 0.5em;\r\n  box-shadow: rgba(255,255,255, 0.75) 1.5em 0 0 0, rgba(255,255,255, 0.75) 1.1em 1.1em 0 0, rgba(255,255,255, 0.75) 0 1.5em 0 0, rgba(255,255,255, 0.75) -1.1em 1.1em 0 0, rgba(255,255,255, 0.75) -1.5em 0 0 0, rgba(255,255,255, 0.75) -1.1em -1.1em 0 0, rgba(255,255,255, 0.75) 0 -1.5em 0 0, rgba(255,255,255, 0.75) 1.1em -1.1em 0 0;\r\n}\r\n/* Animation */\r\n@-webkit-keyframes spinner {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes spinner {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1taXNpbmZvcm1hdGlvbi92aWV3LW1pc2luZm9ybWF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUVBQW1FO0FBQ25FO0VBQ0UscUNBQXlEO0VBQ3pELFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtJQUNJLFlBQVk7SUFDWixrQ0FBa0M7QUFDdEM7QUFDQTtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsZUFBZTtFQUNqQjtDQUNEO1FBQ08sOEJBQThCO0NBQ3JDO0FBQ0Q7QUFDQTtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsZUFBZTtFQUNqQjtBQUNGO0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtDQUNEO1FBQ08sMEJBQTBCO0NBQ2pDO0FBQ0Q7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixtQ0FBbUM7SUFDbkMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1g7QUFDSjtBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHFDQUFxQztJQUNyQyxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBR0E7SUFDSSxjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0FBQ1o7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLGNBQWM7RUFDZCxZQUFZO0VBQ1osU0FBUztFQUNULE9BQU87RUFDUCxTQUFTO0VBQ1QsUUFBUTtBQUNWO0FBRUEsd0JBQXdCO0FBQ3hCO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxlQUFlO0VBQ2YsU0FBUztFQUNULE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1FQUFtRTs7RUFFbkUsMEVBQTBFO0FBQzVFO0FBRUEseURBQXlEO0FBQ3pEO0VBQ0UsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixTQUFTO0FBQ1g7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZUFBZTtFQUNmLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdEQUFnRDtFQUloRCx3Q0FBd0M7RUFDeEMsb0JBQW9CO0VBRXBCLHdVQUF3VTtBQUMxVTtBQUlBLGNBQWM7QUFFZDtFQUNFO0lBQ0UsK0JBQStCO0lBSS9CLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsaUNBQWlDO0lBSWpDLHlCQUF5QjtFQUMzQjtBQUNGO0FBaUNBO0VBQ0U7SUFDRSwrQkFBK0I7SUFJL0IsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxpQ0FBaUM7SUFJakMseUJBQXlCO0VBQzNCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC92aWV3LW1pc2luZm9ybWF0aW9uL3ZpZXctbWlzaW5mb3JtYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzozMDAsNDAwJyk7XHJcbi5jb250YWluZXItZmx1aWR7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9vdGhlcl9iZy5zdmdcIik7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG4uaGVhZC10ZXh0IGgze1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcclxuICBjb2xvcjogIzE2MkM2OTtcclxuICBmb250LWZhbWlseTpNb250c2VycmF0O1xyXG59XHJcbi5oZWFkLXRleHQgcHtcclxuICBwYWRkaW5nOiAwIDE1MHB4IDAgMTUwcHg7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzE2MkM2OTtcclxufVxyXG4uY29udGVudC1mcm9udHtcclxuICB6LWluZGV4OiAxO1xyXG4gIHBhZGRpbmctdG9wOiAyMDBweDtcclxufVxyXG4uY2FyZC10ZXh0Lm1pc2luZm9ybWF0aW9uLWRpdi10aXRsZXtcclxuICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgY29sb3I6ICMxNjJDNjk7XHJcbn1cclxuLmNhcmQtdGV4dC5taXNpbmZvcm1hdGlvbi1kaXYtdGV4dHtcclxuICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgY29sb3I6ICMxNjJDNjk7XHJcbn1cclxuLmNhcmQtbGluay5taXNpbmZvcm1hdGlvbi1kaXYtZ290b3tcclxuICBmb250LXNpemU6IDAuODByZW07XHJcbn1cclxuLnRleHQtbXV0ZWQubWlzaW5mb3JtYXRpb24tZGl2LXRpbWV7XHJcbiAgZm9udC1zaXplOiAwLjYwcmVtO1xyXG59XHJcbi50ZXh0LWNlbnRlcntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5taXNpbmZvcm1hdGlvbi1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuaGVhZC10ZXh0IGgze1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDEuMzVyZW07XHJcbiAgfVxyXG4gIC5oZWFkLXRleHQgcHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH0gIFxyXG5cdC5taXNpbmZvcm1hdGlvbi1jb250YWluZXIge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuXHR9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KXtcclxuICAuaGVhZC10ZXh0IGgze1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDEuMzVyZW07XHJcbiAgfVxyXG4gIC5oZWFkLXRleHQgcHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIC5oZWFkLXRleHQgaDN7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgLmhlYWQtdGV4dCBwe1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcblx0Lm1pc2luZm9ybWF0aW9uLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcblx0fVxyXG59XHJcblxyXG4ubWlzaW5mb3JtYXRpb24tZGl2e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDVweCAwcHggI2M3YzdjNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlXHJcbn1cclxuXHJcbi5taXNpbmZvcm1hdGlvbi1kaXY6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDE1cHggMHB4ICNjN2M3Yzc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5taXNpbmZvcm1hdGlvbi1kaXYtdGl0bGV7XHJcbiAgICBmb250LWZhbWlseTogQXZlcnRhU2VtaUJvbGQ7XHJcbn1cclxuXHJcbi5taXNpbmZvcm1hdGlvbi1kaXYtdGV4dHtcclxuICAgIGZvbnQtZmFtaWx5OiBBdmVydGFMaWdodDtcclxufVxyXG5cclxuXHJcbi5taXNpbmZvcm1hdGlvbi1kaXYtZ290b3tcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IEF2ZXJ0YUxpZ2h0O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiBjb3JhbDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDNweCAwcHggZ3JleTtcclxufVxyXG4uZm9vdGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOjA7XHJcbn1cclxuLm1pc2luZm9ybWF0aW9uLWRpdi10aW1le1xyXG4gICAgZm9udC1mYW1pbHk6IEF2ZXJ0YUxpZ2h0O1xyXG59XHJcbi5sb2FkaW5nIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIGhlaWdodDogMmVtO1xyXG4gIHdpZHRoOiAyZW07XHJcbiAgb3ZlcmZsb3c6IHNob3c7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRvcDogMTBlbTtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuLyogVHJhbnNwYXJlbnQgT3ZlcmxheSAqL1xyXG4ubG9hZGluZzpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDEwZW07XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KHJnYmEoMjAsIDIwLCAyMCwuOCksIHJnYmEoMCwgMCwgMCwgLjgpKTtcclxuXHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQocmdiYSgyMCwgMjAsIDIwLC44KSwgcmdiYSgwLCAwLCAwLC44KSk7XHJcbn1cclxuXHJcbi8qIDpub3QoOnJlcXVpcmVkKSBoaWRlcyB0aGVzZSBydWxlcyBmcm9tIElFOSBhbmQgYmVsb3cgKi9cclxuLmxvYWRpbmc6bm90KDpyZXF1aXJlZCkge1xyXG4gIC8qIGhpZGUgXCJsb2FkaW5nLi4uXCIgdGV4dCAqL1xyXG4gIGZvbnQ6IDAvMCBhO1xyXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi5sb2FkaW5nOm5vdCg6cmVxdWlyZWQpOmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgd2lkdGg6IDFlbTtcclxuICBoZWlnaHQ6IDFlbTtcclxuICBtYXJnaW4tdG9wOiAtMC41ZW07XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW5uZXIgMTUwbXMgaW5maW5pdGUgbGluZWFyO1xyXG4gIC1tb3otYW5pbWF0aW9uOiBzcGlubmVyIDE1MG1zIGluZmluaXRlIGxpbmVhcjtcclxuICAtbXMtYW5pbWF0aW9uOiBzcGlubmVyIDE1MG1zIGluZmluaXRlIGxpbmVhcjtcclxuICAtby1hbmltYXRpb246IHNwaW5uZXIgMTUwbXMgaW5maW5pdGUgbGluZWFyO1xyXG4gIGFuaW1hdGlvbjogc3Bpbm5lciAxNTBtcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAxLjVlbSAwIDAgMCwgcmdiYSgyNTUsMjU1LDI1NSwgMC43NSkgMS4xZW0gMS4xZW0gMCAwLCByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAwIDEuNWVtIDAgMCwgcmdiYSgyNTUsMjU1LDI1NSwgMC43NSkgLTEuMWVtIDEuMWVtIDAgMCwgcmdiYSgyNTUsMjU1LDI1NSwgMC43NSkgLTEuNWVtIDAgMCAwLCByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAtMS4xZW0gLTEuMWVtIDAgMCwgcmdiYSgyNTUsMjU1LDI1NSwgMC43NSkgMCAtMS41ZW0gMCAwLCByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAxLjFlbSAtMS4xZW0gMCAwO1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIDEuNWVtIDAgMCAwLCByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAxLjFlbSAxLjFlbSAwIDAsIHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIDAgMS41ZW0gMCAwLCByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAtMS4xZW0gMS4xZW0gMCAwLCByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAtMS41ZW0gMCAwIDAsIHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIC0xLjFlbSAtMS4xZW0gMCAwLCByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAwIC0xLjVlbSAwIDAsIHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIDEuMWVtIC0xLjFlbSAwIDA7XHJcbn1cclxuXHJcblxyXG5cclxuLyogQW5pbWF0aW9uICovXHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3Bpbm5lciB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBzcGlubmVyIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuQC1vLWtleWZyYW1lcyBzcGlubmVyIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBzcGlubmVyIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/view-misinformation/view-misinformation.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/view-misinformation/view-misinformation.component.ts ***!
  \**********************************************************************/
/*! exports provided: ViewMisinformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewMisinformationComponent", function() { return ViewMisinformationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");



let ViewMisinformationComponent = class ViewMisinformationComponent {
    constructor(apicall) {
        this.apicall = apicall;
        this.colorbox = ['dark', 'dark', 'light', 'light'];
        this.textbox = ['white', 'white', 'black', 'black'];
        this.apicall.showmisinformation().subscribe(data => {
            this.misinformation = data;
            this.marketing = true;
        });
    }
    gotoUrl(urlToOpen) {
        let url = '';
        if (!/^http[s]?:\/\//.test(urlToOpen)) {
            url += 'http://';
        }
        url += urlToOpen;
        window.open(url, '_blank');
    }
    ngOnInit() {
    }
};
ViewMisinformationComponent.ctorParameters = () => [
    { type: _core__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
ViewMisinformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-misinformation',
        template: __webpack_require__(/*! raw-loader!./view-misinformation.component.html */ "./node_modules/raw-loader/index.js!./src/app/view-misinformation/view-misinformation.component.html"),
        styles: [__webpack_require__(/*! ./view-misinformation.component.css */ "./src/app/view-misinformation/view-misinformation.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
], ViewMisinformationComponent);



/***/ }),

/***/ "./src/app/view-suspectedcases/view-suspectedcases.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/view-suspectedcases/view-suspectedcases.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Lato:300,400');\r\n.content-front{\r\n  z-index: 1;\r\n  padding-top: 200px;\r\n}\r\n.text-center{\r\n  text-align: center;\r\n}\r\n.suspected-container{\r\n    display:grid; \r\n    grid-template-columns: 1fr 1fr 1fr;\r\n\r\n}\r\n@media only screen and (max-width: 768px) {\r\n\t.suspected-container {\r\n        grid-template-columns: 1fr 1fr; \r\n\t}\r\n}\r\n@media only screen and (max-width: 576px) {\r\n\t.suspected-container {\r\n        grid-template-columns: 1fr; \r\n\t}\r\n}\r\n.suspected-div{\r\n    background-color: white;\r\n    box-shadow: 0px 2px 5px 0px #c7c7c7;\r\n    border-radius: 4px;\r\n    transition: 0.4s;\r\n    height:100%;\r\n    position:relative\r\n}\r\n.suspected-div:hover{\r\n    background-color: white;\r\n    box-shadow: 0px 10px 15px 0px #c7c7c7;\r\n    border-radius: 4px;\r\n}\r\n.suspected-div-title{\r\n    font-family: AvertaSemiBold;\r\n}\r\n.suspected-div-text{\r\n    font-family: AvertaLight;\r\n}\r\n.suspected-div-time{\r\n    font-family: AvertaLight; \r\n}\r\n.footer{\r\n    position: absolute;\r\n    bottom:0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1zdXNwZWN0ZWRjYXNlcy92aWV3LXN1c3BlY3RlZGNhc2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUVBQW1FO0FBQ25FO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7SUFDSSxZQUFZO0lBQ1osa0NBQWtDOztBQUV0QztBQUVBO0NBQ0M7UUFDTyw4QkFBOEI7Q0FDckM7QUFDRDtBQUVBO0NBQ0M7UUFDTywwQkFBMEI7Q0FDakM7QUFDRDtBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1DQUFtQztJQUNuQyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWDtBQUNKO0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIscUNBQXFDO0lBQ3JDLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7QUFFQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7QUFDWiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctc3VzcGVjdGVkY2FzZXMvdmlldy1zdXNwZWN0ZWRjYXNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCw0MDAnKTtcclxuLmNvbnRlbnQtZnJvbnR7XHJcbiAgei1pbmRleDogMTtcclxuICBwYWRkaW5nLXRvcDogMjAwcHg7XHJcbn1cclxuXHJcbi50ZXh0LWNlbnRlcntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdXNwZWN0ZWQtY29udGFpbmVye1xyXG4gICAgZGlzcGxheTpncmlkOyBcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XHJcblxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcblx0LnN1c3BlY3RlZC1jb250YWluZXIge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjsgXHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcblx0LnN1c3BlY3RlZC1jb250YWluZXIge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyBcclxuXHR9XHJcbn1cclxuXHJcbi5zdXNwZWN0ZWQtZGl2e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDVweCAwcHggI2M3YzdjNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlXHJcbn1cclxuXHJcbi5zdXNwZWN0ZWQtZGl2OmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCAxNXB4IDBweCAjYzdjN2M3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uc3VzcGVjdGVkLWRpdi10aXRsZXtcclxuICAgIGZvbnQtZmFtaWx5OiBBdmVydGFTZW1pQm9sZDtcclxufVxyXG5cclxuLnN1c3BlY3RlZC1kaXYtdGV4dHtcclxuICAgIGZvbnQtZmFtaWx5OiBBdmVydGFMaWdodDtcclxufVxyXG5cclxuLnN1c3BlY3RlZC1kaXYtdGltZXtcclxuICAgIGZvbnQtZmFtaWx5OiBBdmVydGFMaWdodDsgXHJcbn1cclxuXHJcbi5mb290ZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206MDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/view-suspectedcases/view-suspectedcases.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/view-suspectedcases/view-suspectedcases.component.ts ***!
  \**********************************************************************/
/*! exports provided: ViewSuspectedcasesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewSuspectedcasesComponent", function() { return ViewSuspectedcasesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");



let ViewSuspectedcasesComponent = class ViewSuspectedcasesComponent {
    constructor(apicall) {
        this.apicall = apicall;
        this.apicall.showSuspectablecases().subscribe(data => {
            this.suspectedcases = data;
            if (this.suspectedcases.length < 3) {
                this.colorbox = ['dark', 'light', 'dark', 'light'];
                this.textbox = ['white', 'black', 'white', 'black'];
            }
            else {
                this.colorbox = ['dark', 'dark', 'light', 'light'];
                this.textbox = ['white', 'white', 'black', 'black'];
            }
        });
    }
    gotoUrl(urlToOpen) {
        let url = '';
        if (!/^http[s]?:\/\//.test(urlToOpen)) {
            url += 'http://';
        }
        url += urlToOpen;
        window.open(url, '_blank');
    }
    ngOnInit() {
    }
};
ViewSuspectedcasesComponent.ctorParameters = () => [
    { type: _core__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
ViewSuspectedcasesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-suspectedcases',
        template: __webpack_require__(/*! raw-loader!./view-suspectedcases.component.html */ "./node_modules/raw-loader/index.js!./src/app/view-suspectedcases/view-suspectedcases.component.html"),
        styles: [__webpack_require__(/*! ./view-suspectedcases.component.css */ "./src/app/view-suspectedcases/view-suspectedcases.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
], ViewSuspectedcasesComponent);



/***/ }),

/***/ "./src/app/visualize-corona-fear/visualize-corona-fear.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/visualize-corona-fear/visualize-corona-fear.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".visualize{\r\n    overflow:hidden;\r\n    margin-top: 70px;\r\n}\r\n.visualize h3{\r\n    font-family: Montserrat;\r\n    color: #162C69;\r\n    font-weight: bold;\r\n    font-size: 1.68rem;\r\n    font-style: inherit;\r\n    text-align: center;\r\n}\r\n.visualize p{\r\n    font-family: sans-serif;\r\n    font-size: 1rem;\r\n    color: #162C69;\r\n    text-align: center;\r\n}\r\n.card{\r\n    background-color: lightsalmon;\r\n}\r\n.card.text-center.mb-3.w-100{\r\n    margin: 0 auto; /* Added */\r\n    float: none; /* Added */\r\n}\r\n.card-header.text-white{\r\n    font-size: 15px;\r\n}\r\n.list-group.list-group-flush .list-group-item{\r\nfont-size: 0.9em;\r\n}\r\n@media only screen and (max-width: 767px){\r\n    .visualize h3{\r\n        font-size: 1.35rem;\r\n        text-align: left;\r\n    }\r\n    .visualize p{\r\n        font-size: 1rem;\r\n        text-align: left;\r\n    }\r\n    .card-header.text-white{\r\n       text-align: left;\r\n    }\r\n    .list-group.list-group-flush .list-group-item{\r\n        text-align: left;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlzdWFsaXplLWNvcm9uYS1mZWFyL3Zpc3VhbGl6ZS1jb3JvbmEtZmVhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxjQUFjLEVBQUUsVUFBVTtJQUMxQixXQUFXLEVBQUUsVUFBVTtBQUMzQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7SUFDQTtPQUNHLGdCQUFnQjtJQUNuQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztBQUVKIiwiZmlsZSI6InNyYy9hcHAvdmlzdWFsaXplLWNvcm9uYS1mZWFyL3Zpc3VhbGl6ZS1jb3JvbmEtZmVhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpc3VhbGl6ZXtcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgIG1hcmdpbi10b3A6IDcwcHg7XHJcbn1cclxuLnZpc3VhbGl6ZSBoM3tcclxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gICAgY29sb3I6ICMxNjJDNjk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMS42OHJlbTtcclxuICAgIGZvbnQtc3R5bGU6IGluaGVyaXQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnZpc3VhbGl6ZSBwe1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBjb2xvcjogIzE2MkM2OTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY2FyZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2FsbW9uO1xyXG59XHJcbi5jYXJkLnRleHQtY2VudGVyLm1iLTMudy0xMDB7XHJcbiAgICBtYXJnaW46IDAgYXV0bzsgLyogQWRkZWQgKi9cclxuICAgIGZsb2F0OiBub25lOyAvKiBBZGRlZCAqL1xyXG59XHJcbi5jYXJkLWhlYWRlci50ZXh0LXdoaXRle1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5saXN0LWdyb3VwLmxpc3QtZ3JvdXAtZmx1c2ggLmxpc3QtZ3JvdXAtaXRlbXtcclxuZm9udC1zaXplOiAwLjllbTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCl7XHJcbiAgICAudmlzdWFsaXplIGgze1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zNXJlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgLnZpc3VhbGl6ZSBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgLmNhcmQtaGVhZGVyLnRleHQtd2hpdGV7XHJcbiAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgLmxpc3QtZ3JvdXAubGlzdC1ncm91cC1mbHVzaCAubGlzdC1ncm91cC1pdGVte1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/visualize-corona-fear/visualize-corona-fear.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/visualize-corona-fear/visualize-corona-fear.component.ts ***!
  \**************************************************************************/
/*! exports provided: VisualizeCoronaFearComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizeCoronaFearComponent", function() { return VisualizeCoronaFearComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/authentication */ "./src/app/core/authentication/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-google-charts */ "./node_modules/angular-google-charts/fesm2015/angular-google-charts.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let VisualizeCoronaFearComponent = class VisualizeCoronaFearComponent {
    constructor(apicall, handler, httpClient, router) {
        this.apicall = apicall;
        this.handler = handler;
        this.httpClient = httpClient;
        this.router = router;
        this.death = 0;
        this.Haffected = 0;
        this.affected = 0;
        this.Cdeath = 0;
        this.mydata = [];
        // tslint:disable-next-line:max-line-length
        this.chart = { title: 'COVID-19 Nepal', type: 'ColumnChart', data: this.mydata, columns: ['Causes', 'Cases'],
            options: {
                width: 490,
                height: 400,
                colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
                chartArea: { left: 0 },
                legend: {
                    position: 'top'
                },
                vAxis: { textPosition: 'in', title: 'Milliamp Hours', titleTextStyle: { color: '#FF0000' } }
            },
        };
        this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"](handler);
        this.httpClient.get('https://covidapi.mohp.gov.np/api/v1/stats/?format=json').subscribe(data => {
            this.nepaldata = data;
            this.Cdeath = this.nepaldata.death;
            this.mydata.unshift(['Death due to Corona', parseInt(String(this.Cdeath), 10)]);
            this.thisdata = true;
        });
        this.apicall.getCoronaFear().subscribe(data => {
            // tslint:disable-next-line:no-shadowed-variable
            data.map(element => {
                if (element.statuses == 'Dead') {
                    this.death++;
                }
                if (element.statuses == 'Highly affected') {
                    this.Haffected++;
                }
                if (element.statuses == 'Affected') {
                    this.affected++;
                }
            });
            this.mydata.push(['Death due to fear of Corona', parseInt(String(this.death), 10)]);
            this.mydata.push(['Higly affected due to Corona', parseInt(String(this.Haffected), 10)]);
            this.mydata.push(['Affected due to Corona', parseInt(String(this.affected), 10)]);
            this.isDataAvailable = true;
            // this.mydata = [['Total Tested', data.Total_Samples_Tested], ['Positive', data.Positive], ['Negative', data.Negative]];
        });
    }
    onSelect(event) {
        this.router.navigate(['getcoronaCases']);
    }
    ngOnInit() {
    }
};
VisualizeCoronaFearComponent.ctorParameters = () => [
    { type: _core_authentication__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpBackend"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('googleChartComponent', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_google_charts__WEBPACK_IMPORTED_MODULE_4__["GoogleChartComponent"])
], VisualizeCoronaFearComponent.prototype, "googleChartComponent", void 0);
VisualizeCoronaFearComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-visualize-corona-fear',
        template: __webpack_require__(/*! raw-loader!./visualize-corona-fear.component.html */ "./node_modules/raw-loader/index.js!./src/app/visualize-corona-fear/visualize-corona-fear.component.html"),
        styles: [__webpack_require__(/*! ./visualize-corona-fear.component.css */ "./src/app/visualize-corona-fear/visualize-corona-fear.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_authentication__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], VisualizeCoronaFearComponent);



/***/ }),

/***/ "./src/app/visualizenepal/visualizenepal.component.css":
/*!*************************************************************!*\
  !*** ./src/app/visualizenepal/visualizenepal.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n  overflow: hidden;\r\n  margin-top: 70px;\r\n}\r\n.visualize{\r\n  display: grid;\r\n  grid-template-columns:repeat(3, auto);\r\n  grid-gap:10px;\r\n}\r\n.googlechart h3{\r\n  font-family: Montserrat;\r\n  color: #162C69;\r\n  font-weight: bold;\r\n  font-size: 1.68rem;\r\n  font-style: inherit;\r\n  text-align: center;\r\n}\r\n.googlechart p{\r\n  color: #162C69;\r\n  font-size: 1rem;\r\n  margin-bottom: 30px;\r\n  text-align: center;\r\n  \r\n}\r\n.card{  \r\n  background-color: lightsalmon;\r\n  text-align: center;\r\n  color: #162C69;\r\n}\r\n.card-header.text-white{\r\n  font-size: 15px;\r\n}\r\n.card.text-center.bg-primary.mb-3.w-75{\r\n  margin: 0 auto; /* Added */\r\n  float: none; /* Added */\r\n}\r\n.list-group.list-group-flush .list-group-item{\r\n  font-size: 0.9em;\r\n  color: #162C69;\r\n}\r\n@media only screen and (max-width:600px) and (min-width:300px){\r\n  .card{\r\n    width:50%;\r\n  }\r\n}\r\n@media only screen and (max-width: 767px){\r\n  .visualize{\r\n    display: grid;\r\n    grid-template-columns:repeat(1, auto)\r\n  }\r\n  .googlechart h3{\r\n    font-size: 1.35rem;\r\n    text-align: left;\r\n  }\r\n  .googlechart p{\r\n    font-size: 1rem;\r\n    text-align: left;\r\n    \r\n  } \r\n  .card-header.text-white{\r\n    text-align: left;\r\n  }\r\n  .card{\r\n    width: 85%;\r\n  }\r\n  .list-group.list-group-flush .list-group-item{\r\n    text-align: left;\r\n    position: relative;\r\n  }\r\n }\r\n@media only screen and (max-width: 900px) {\r\n  .visualize{\r\n    grid-template-columns:repeat(2, auto)\r\n  }\r\n}\r\n/* Absolute Center Spinner */\r\n.loading {\r\n  position: fixed;\r\n  z-index: 999;\r\n  height: 2em;\r\n  width: 2em;\r\n  overflow: show;\r\n  margin: auto;\r\n  top: 10em;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n}\r\n/* Transparent Overlay */\r\n.loading:before {\r\n  content: '';\r\n  display: block;\r\n  position: fixed;\r\n  top: 10em;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: radial-gradient(rgba(20, 20, 20,.8), rgba(0, 0, 0, .8));\r\n\r\n  background: -webkit-radial-gradient(rgba(20, 20, 20,.8), rgba(0, 0, 0,.8));\r\n}\r\n/* :not(:required) hides these rules from IE9 and below */\r\n.loading:not(:required) {\r\n  /* hide \"loading...\" text */\r\n  font: 0/0 a;\r\n  color: transparent;\r\n  text-shadow: none;\r\n  background-color: transparent;\r\n  border: 0;\r\n}\r\n.loading:not(:required):after {\r\n  content: '';\r\n  display: block;\r\n  font-size: 10px;\r\n  width: 1em;\r\n  height: 1em;\r\n  margin-top: -0.5em;\r\n  -webkit-animation: spinner 150ms infinite linear;\r\n  animation: spinner 150ms infinite linear;\r\n  border-radius: 0.5em;\r\n  box-shadow: rgba(255,255,255, 0.75) 1.5em 0 0 0, rgba(255,255,255, 0.75) 1.1em 1.1em 0 0, rgba(255,255,255, 0.75) 0 1.5em 0 0, rgba(255,255,255, 0.75) -1.1em 1.1em 0 0, rgba(255,255,255, 0.75) -1.5em 0 0 0, rgba(255,255,255, 0.75) -1.1em -1.1em 0 0, rgba(255,255,255, 0.75) 0 -1.5em 0 0, rgba(255,255,255, 0.75) 1.1em -1.1em 0 0;\r\n}\r\n/* Animation */\r\n@-webkit-keyframes spinner {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes spinner {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlzdWFsaXplbmVwYWwvdmlzdWFsaXplbmVwYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsYUFBYTtBQUNmO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCOztBQUVwQjtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxjQUFjLEVBQUUsVUFBVTtFQUMxQixXQUFXLEVBQUUsVUFBVTtBQUN6QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFDQTtFQUNFO0lBQ0UsU0FBUztFQUNYO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsYUFBYTtJQUNiO0VBQ0Y7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7O0VBRWxCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjtDQUNEO0FBRUQ7RUFDRTtJQUNFO0VBQ0Y7QUFDRjtBQUNBLDRCQUE0QjtBQUM1QjtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7RUFDVixjQUFjO0VBQ2QsWUFBWTtFQUNaLFNBQVM7RUFDVCxPQUFPO0VBQ1AsU0FBUztFQUNULFFBQVE7QUFDVjtBQUVBLHdCQUF3QjtBQUN4QjtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZUFBZTtFQUNmLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixtRUFBbUU7O0VBRW5FLDBFQUEwRTtBQUM1RTtBQUVBLHlEQUF5RDtBQUN6RDtFQUNFLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsU0FBUztBQUNYO0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGVBQWU7RUFDZixVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnREFBZ0Q7RUFJaEQsd0NBQXdDO0VBQ3hDLG9CQUFvQjtFQUVwQix3VUFBd1U7QUFDMVU7QUFJQSxjQUFjO0FBRWQ7RUFDRTtJQUNFLCtCQUErQjtJQUkvQix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGlDQUFpQztJQUlqQyx5QkFBeUI7RUFDM0I7QUFDRjtBQWlDQTtFQUNFO0lBQ0UsK0JBQStCO0lBSS9CLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsaUNBQWlDO0lBSWpDLHlCQUF5QjtFQUMzQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdmlzdWFsaXplbmVwYWwvdmlzdWFsaXplbmVwYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW4tdG9wOiA3MHB4O1xyXG59XHJcbi52aXN1YWxpemV7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDMsIGF1dG8pO1xyXG4gIGdyaWQtZ2FwOjEwcHg7XHJcbn1cclxuLmdvb2dsZWNoYXJ0IGgze1xyXG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gIGNvbG9yOiAjMTYyQzY5O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMS42OHJlbTtcclxuICBmb250LXN0eWxlOiBpbmhlcml0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZ29vZ2xlY2hhcnQgcHtcclxuICBjb2xvcjogIzE2MkM2OTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbn0gXHJcbi5jYXJkeyAgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzYWxtb247XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjMTYyQzY5O1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIudGV4dC13aGl0ZXtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLmNhcmQudGV4dC1jZW50ZXIuYmctcHJpbWFyeS5tYi0zLnctNzV7XHJcbiAgbWFyZ2luOiAwIGF1dG87IC8qIEFkZGVkICovXHJcbiAgZmxvYXQ6IG5vbmU7IC8qIEFkZGVkICovXHJcbn0gXHJcbi5saXN0LWdyb3VwLmxpc3QtZ3JvdXAtZmx1c2ggLmxpc3QtZ3JvdXAtaXRlbXtcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG4gIGNvbG9yOiAjMTYyQzY5O1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MDBweCkgYW5kIChtaW4td2lkdGg6MzAwcHgpe1xyXG4gIC5jYXJke1xyXG4gICAgd2lkdGg6NTAlO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KXtcclxuICAudmlzdWFsaXple1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoMSwgYXV0bylcclxuICB9XHJcbiAgLmdvb2dsZWNoYXJ0IGgze1xyXG4gICAgZm9udC1zaXplOiAxLjM1cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgLmdvb2dsZWNoYXJ0IHB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgXHJcbiAgfSBcclxuICAuY2FyZC1oZWFkZXIudGV4dC13aGl0ZXtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIC5jYXJke1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICB9XHJcbiAgLmxpc3QtZ3JvdXAubGlzdC1ncm91cC1mbHVzaCAubGlzdC1ncm91cC1pdGVte1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiB9XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgLnZpc3VhbGl6ZXtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoMiwgYXV0bylcclxuICB9XHJcbn1cclxuLyogQWJzb2x1dGUgQ2VudGVyIFNwaW5uZXIgKi9cclxuLmxvYWRpbmcge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgaGVpZ2h0OiAyZW07XHJcbiAgd2lkdGg6IDJlbTtcclxuICBvdmVyZmxvdzogc2hvdztcclxuICBtYXJnaW46IGF1dG87XHJcbiAgdG9wOiAxMGVtO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4vKiBUcmFuc3BhcmVudCBPdmVybGF5ICovXHJcbi5sb2FkaW5nOmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMTBlbTtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQocmdiYSgyMCwgMjAsIDIwLC44KSwgcmdiYSgwLCAwLCAwLCAuOCkpO1xyXG5cclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChyZ2JhKDIwLCAyMCwgMjAsLjgpLCByZ2JhKDAsIDAsIDAsLjgpKTtcclxufVxyXG5cclxuLyogOm5vdCg6cmVxdWlyZWQpIGhpZGVzIHRoZXNlIHJ1bGVzIGZyb20gSUU5IGFuZCBiZWxvdyAqL1xyXG4ubG9hZGluZzpub3QoOnJlcXVpcmVkKSB7XHJcbiAgLyogaGlkZSBcImxvYWRpbmcuLi5cIiB0ZXh0ICovXHJcbiAgZm9udDogMC8wIGE7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHRleHQtc2hhZG93OiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuLmxvYWRpbmc6bm90KDpyZXF1aXJlZCk6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICB3aWR0aDogMWVtO1xyXG4gIGhlaWdodDogMWVtO1xyXG4gIG1hcmdpbi10b3A6IC0wLjVlbTtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogc3Bpbm5lciAxNTBtcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgLW1vei1hbmltYXRpb246IHNwaW5uZXIgMTUwbXMgaW5maW5pdGUgbGluZWFyO1xyXG4gIC1tcy1hbmltYXRpb246IHNwaW5uZXIgMTUwbXMgaW5maW5pdGUgbGluZWFyO1xyXG4gIC1vLWFuaW1hdGlvbjogc3Bpbm5lciAxNTBtcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgYW5pbWF0aW9uOiBzcGlubmVyIDE1MG1zIGluZmluaXRlIGxpbmVhcjtcclxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIDEuNWVtIDAgMCAwLCByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAxLjFlbSAxLjFlbSAwIDAsIHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIDAgMS41ZW0gMCAwLCByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAtMS4xZW0gMS4xZW0gMCAwLCByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAtMS41ZW0gMCAwIDAsIHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIC0xLjFlbSAtMS4xZW0gMCAwLCByZ2JhKDI1NSwyNTUsMjU1LCAwLjc1KSAwIC0xLjVlbSAwIDAsIHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIDEuMWVtIC0xLjFlbSAwIDA7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgyNTUsMjU1LDI1NSwgMC43NSkgMS41ZW0gMCAwIDAsIHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIDEuMWVtIDEuMWVtIDAgMCwgcmdiYSgyNTUsMjU1LDI1NSwgMC43NSkgMCAxLjVlbSAwIDAsIHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIC0xLjFlbSAxLjFlbSAwIDAsIHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIC0xLjVlbSAwIDAgMCwgcmdiYSgyNTUsMjU1LDI1NSwgMC43NSkgLTEuMWVtIC0xLjFlbSAwIDAsIHJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpIDAgLTEuNWVtIDAgMCwgcmdiYSgyNTUsMjU1LDI1NSwgMC43NSkgMS4xZW0gLTEuMWVtIDAgMDtcclxufVxyXG5cclxuXHJcblxyXG4vKiBBbmltYXRpb24gKi9cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzcGlubmVyIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIHNwaW5uZXIge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5ALW8ta2V5ZnJhbWVzIHNwaW5uZXIge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIHNwaW5uZXIge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/visualizenepal/visualizenepal.component.ts":
/*!************************************************************!*\
  !*** ./src/app/visualizenepal/visualizenepal.component.ts ***!
  \************************************************************/
/*! exports provided: VisualizenepalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizenepalComponent", function() { return VisualizenepalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-google-charts */ "./node_modules/angular-google-charts/fesm2015/angular-google-charts.js");





let VisualizenepalComponent = class VisualizenepalComponent {
    constructor(apicall, handler, httpClient) {
        this.apicall = apicall;
        this.handler = handler;
        this.httpClient = httpClient;
        this.mydata = [];
        this.mydata1 = [];
        this.mydata2 = [];
        // tslint:disable-next-line:max-line-length
        this.chart = { title: 'COVID-19 Positive Cases in Nepal',
            type: 'PieChart', data: this.mydata,
            title1: 'COVID-19 Testing and Results in Nepal',
            title2: 'COVID-19 affected cases one in million in SAARC',
            data1: this.mydata1, type2: 'ColumnChart',
            data2: this.mydata2, column2: ['Country', 'Cases'],
            options: {
                width: 400,
                height: 300,
                chartArea: { left: 0 },
                colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
                legend: {
                    position: 'top'
                }
            },
            options1: {
                width: 400,
                height: 300,
                colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
                // chartArea:{left:0},
                legend: {
                    position: 'top'
                }
            },
            options2: {
                height: 300,
                width: 400,
                colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
                chartArea: { left: 0 },
                legend: {
                    position: 'top'
                }
            } };
        this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"](handler);
        this.httpClient.get('https://covid19.mohp.gov.np/covid/api/confirmedcases/?format=json').subscribe(data => {
            this.data = data;
            this.recovered = data.nepal.extra1;
            this.positive = data.nepal.positive;
            this.negative = data.nepal.negative;
            this.mydata.push(['Total Positive', parseInt(String(data.nepal.positive), 10)]);
            this.mydata.push(['Recovered', parseInt(String(data.nepal.extra1), 10)]);
            this.mydata.push(['Isolation', parseInt(String(data.nepal.positive), 10) - parseInt(String(data.nepal.extra1), 10)]);
            //      this.mydata1.push(['Total Tested', parseInt(String(data.nepal.samples_tested), 10)]);
            this.mydata1.push(['Negative', parseInt(String(data.nepal.negative), 10)]);
            this.mydata1.push(['Positive', parseInt(String(data.nepal.positive), 10)]);
            this.isDataAvailable = true;
        });
        // this.apicall.getNepalLivedata().subscribe(data => {
        //   console.log(data);
        //   this.mydata = this.mydata || [];
        //   this.data = data;
        //   this.mydata.push(['Total Positive', parseInt(String(data.positive), 10)]);
        //   this.mydata.push(['Recovered', parseInt(String(data.recovered), 10)]);
        //   this.mydata.push(['Isolation', parseInt(String(data.isolation), 10)]);
        //   this.mydata1.push(['Total Tested', parseInt(String(data.total_Samples_Tested), 10)]);
        //   this.mydata1.push(['Positive', parseInt(String(data.positive), 10)]);
        //   this.mydata1.push(['Negative', parseInt(String(data.negative), 10)]);
        //   // this.mydata = [['Total Tested', data.Total_Samples_Tested], ['Positive', data.Positive], ['Negative', data.Negative]];
        //   console.log('mydata', this.mydata);
        //   this.isDataAvailable = true;
        // });
        this.apicall.getWorldData().subscribe(data => {
            this.acitveCases = this.acitveCases || [];
            this.totalDeaths = this.totalDeaths || [];
            this.SAARCdata = data;
            this.SAARCdata.map(elem => {
                this.mydata2.push([elem.country, parseFloat(String(elem.TotIn1M))]);
            });
            this.isSAARCDataAvailable = true;
        });
    }
    ngOnInit() {
    }
};
VisualizenepalComponent.ctorParameters = () => [
    { type: _core__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpBackend"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('graph1', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_google_charts__WEBPACK_IMPORTED_MODULE_4__["GoogleChartComponent"])
], VisualizenepalComponent.prototype, "graph1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('graph2', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_google_charts__WEBPACK_IMPORTED_MODULE_4__["GoogleChartComponent"])
], VisualizenepalComponent.prototype, "graph2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('graph3', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_google_charts__WEBPACK_IMPORTED_MODULE_4__["GoogleChartComponent"])
], VisualizenepalComponent.prototype, "graph3", void 0);
VisualizenepalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-visualizenepal',
        template: __webpack_require__(/*! raw-loader!./visualizenepal.component.html */ "./node_modules/raw-loader/index.js!./src/app/visualizenepal/visualizenepal.component.html"),
        styles: [__webpack_require__(/*! ./visualizenepal.component.css */ "./src/app/visualizenepal/visualizenepal.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], VisualizenepalComponent);



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
const environment = {
    production: false,
    serverBaseUrl: 'http://13.92.124.37:8089/',
    serverUrl: 'http://13.92.124.37:8089/',
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projects\covid19-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map