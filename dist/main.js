(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/admin/admin.module": [
		"./src/app/admin/admin.module.ts",
		"app-admin-admin-module~app-front-desk-front-desk-module",
		"app-admin-admin-module"
	],
	"app/front-desk/front-desk.module": [
		"./src/app/front-desk/front-desk.module.ts",
		"app-admin-admin-module~app-front-desk-front-desk-module",
		"app-front-desk-front-desk-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/@core/core.module.ts":
/*!**************************************!*\
  !*** ./src/app/@core/core.module.ts ***!
  \**************************************/
/*! exports provided: NbSimpleRoleProvider, NB_CORE_PROVIDERS, CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbSimpleRoleProvider", function() { return NbSimpleRoleProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NB_CORE_PROVIDERS", function() { return NB_CORE_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@nebular/auth */ "./src/app/@nebular/auth/index.js");
/* harmony import */ var _nebular_security__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@nebular/security */ "./src/app/@nebular/security/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module-import-guard */ "./src/app/@core/module-import-guard.ts");
/* harmony import */ var _data_data_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data/data.module */ "./src/app/@core/data/data.module.ts");
/* harmony import */ var _utils_analytics_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/analytics.service */ "./src/app/@core/utils/analytics.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var socialLinks = [
    {
        url: 'https://github.com/akveo/nebular',
        target: '_blank',
        icon: 'socicon-github',
    },
    {
        url: 'https://www.facebook.com/akveo/',
        target: '_blank',
        icon: 'socicon-facebook',
    },
    {
        url: 'https://twitter.com/akveo_inc',
        target: '_blank',
        icon: 'socicon-twitter',
    },
];
var NbSimpleRoleProvider = /** @class */ (function (_super) {
    __extends(NbSimpleRoleProvider, _super);
    function NbSimpleRoleProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbSimpleRoleProvider.prototype.getRole = function () {
        // here you could provide any role based on any auth flow
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])('guest');
    };
    return NbSimpleRoleProvider;
}(_nebular_security__WEBPACK_IMPORTED_MODULE_3__["NbRoleProvider"]));

var NB_CORE_PROVIDERS = _data_data_module__WEBPACK_IMPORTED_MODULE_6__["DataModule"].forRoot().providers.concat(_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthModule"].forRoot({
    providers: {
        email: {
            service: _nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbDummyAuthProvider"],
            config: {
                delay: 3000,
                login: {
                    rememberMe: true,
                },
            },
        },
    },
    forms: {
        login: {
            socialLinks: socialLinks,
        },
        register: {
            socialLinks: socialLinks,
        },
    },
}).providers, [
    _nebular_security__WEBPACK_IMPORTED_MODULE_3__["NbSecurityModule"].forRoot({
        accessControl: {
            guest: {
                view: '*',
            },
            user: {
                parent: 'guest',
                create: '*',
                edit: '*',
                remove: '*',
            },
        },
    }).providers,
    {
        provide: _nebular_security__WEBPACK_IMPORTED_MODULE_3__["NbRoleProvider"], useClass: NbSimpleRoleProvider,
    },
    _utils_analytics_service__WEBPACK_IMPORTED_MODULE_7__["AnalyticsService"],
]);
var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        Object(_module_import_guard__WEBPACK_IMPORTED_MODULE_5__["throwIfAlreadyLoaded"])(parentModule, 'CoreModule');
    }
    CoreModule_1 = CoreModule;
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule_1,
            providers: NB_CORE_PROVIDERS.slice(),
        };
    };
    CoreModule = CoreModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ],
            exports: [
                _nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthModule"],
            ],
            declarations: [],
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
    var CoreModule_1;
}());



/***/ }),

/***/ "./src/app/@core/data/data.module.ts":
/*!*******************************************!*\
  !*** ./src/app/@core/data/data.module.ts ***!
  \*******************************************/
/*! exports provided: DataModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataModule", function() { return DataModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.service */ "./src/app/@core/data/users.service.ts");
/* harmony import */ var _electricity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./electricity.service */ "./src/app/@core/data/electricity.service.ts");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state.service */ "./src/app/@core/data/state.service.ts");
/* harmony import */ var _smart_table_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./smart-table.service */ "./src/app/@core/data/smart-table.service.ts");
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player.service */ "./src/app/@core/data/player.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SERVICES = [
    _users_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
    _electricity_service__WEBPACK_IMPORTED_MODULE_3__["ElectricityService"],
    _state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"],
    _smart_table_service__WEBPACK_IMPORTED_MODULE_5__["SmartTableService"],
    _player_service__WEBPACK_IMPORTED_MODULE_6__["PlayerService"],
];
var DataModule = /** @class */ (function () {
    function DataModule() {
    }
    DataModule_1 = DataModule;
    DataModule.forRoot = function () {
        return {
            ngModule: DataModule_1,
            providers: SERVICES.slice(),
        };
    };
    DataModule = DataModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ],
            providers: SERVICES.slice(),
        })
    ], DataModule);
    return DataModule;
    var DataModule_1;
}());



/***/ }),

/***/ "./src/app/@core/data/electricity.service.ts":
/*!***************************************************!*\
  !*** ./src/app/@core/data/electricity.service.ts ***!
  \***************************************************/
/*! exports provided: ElectricityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectricityService", function() { return ElectricityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ElectricityService = /** @class */ (function () {
    function ElectricityService() {
        this.data = [
            {
                title: '2015',
                months: [
                    { month: 'Jan', delta: '0.97', down: true, kWatts: '816', cost: '97' },
                    { month: 'Feb', delta: '1.83', down: true, kWatts: '806', cost: '95' },
                    { month: 'Mar', delta: '0.64', down: true, kWatts: '803', cost: '94' },
                    { month: 'Apr', delta: '2.17', down: false, kWatts: '818', cost: '98' },
                    { month: 'May', delta: '1.32', down: true, kWatts: '809', cost: '96' },
                    { month: 'Jun', delta: '0.05', down: true, kWatts: '808', cost: '96' },
                    { month: 'Jul', delta: '1.39', down: false, kWatts: '815', cost: '97' },
                    { month: 'Aug', delta: '0.73', down: true, kWatts: '807', cost: '95' },
                    { month: 'Sept', delta: '2.61', down: true, kWatts: '792', cost: '92' },
                    { month: 'Oct', delta: '0.16', down: true, kWatts: '791', cost: '92' },
                    { month: 'Nov', delta: '1.71', down: true, kWatts: '786', cost: '89' },
                    { month: 'Dec', delta: '0.37', down: false, kWatts: '789', cost: '91' },
                ],
            },
            {
                title: '2016',
                active: true,
                months: [
                    { month: 'Jan', delta: '1.56', down: true, kWatts: '789', cost: '91' },
                    { month: 'Feb', delta: '0.33', down: false, kWatts: '791', cost: '92' },
                    { month: 'Mar', delta: '0.62', down: true, kWatts: '790', cost: '92' },
                    { month: 'Apr', delta: '1.93', down: true, kWatts: '783', cost: '87' },
                    { month: 'May', delta: '2.52', down: true, kWatts: '771', cost: '83' },
                    { month: 'Jun', delta: '0.39', down: false, kWatts: '774', cost: '85' },
                    { month: 'Jul', delta: '1.61', down: true, kWatts: '767', cost: '81' },
                    { month: 'Aug', delta: '1.41', down: true, kWatts: '759', cost: '76' },
                    { month: 'Sept', delta: '1.03', down: true, kWatts: '752', cost: '74' },
                    { month: 'Oct', delta: '2.94', down: false, kWatts: '769', cost: '82' },
                    { month: 'Nov', delta: '0.26', down: true, kWatts: '767', cost: '81' },
                    { month: 'Dec', delta: '1.62', down: true, kWatts: '760', cost: '76' },
                ],
            },
            {
                title: '2017',
                months: [
                    { month: 'Jan', delta: '1.34', down: false, kWatts: '789', cost: '91' },
                    { month: 'Feb', delta: '0.95', down: false, kWatts: '793', cost: '93' },
                    { month: 'Mar', delta: '0.25', down: true, kWatts: '791', cost: '92' },
                    { month: 'Apr', delta: '1.72', down: false, kWatts: '797', cost: '95' },
                    { month: 'May', delta: '2.62', down: true, kWatts: '786', cost: '90' },
                    { month: 'Jun', delta: '0.72', down: false, kWatts: '789', cost: '91' },
                    { month: 'Jul', delta: '0.78', down: true, kWatts: '784', cost: '89' },
                    { month: 'Aug', delta: '0.36', down: true, kWatts: '782', cost: '88' },
                    { month: 'Sept', delta: '0.55', down: false, kWatts: '787', cost: '90' },
                    { month: 'Oct', delta: '1.81', down: true, kWatts: '779', cost: '86' },
                    { month: 'Nov', delta: '1.12', down: true, kWatts: '774', cost: '84' },
                    { month: 'Dec', delta: '0.52', down: false, kWatts: '776', cost: '95' },
                ],
            },
        ];
    }
    // TODO: observables
    ElectricityService.prototype.getData = function () {
        return this.data;
    };
    ElectricityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ElectricityService);
    return ElectricityService;
}());



/***/ }),

/***/ "./src/app/@core/data/player.service.ts":
/*!**********************************************!*\
  !*** ./src/app/@core/data/player.service.ts ***!
  \**********************************************/
/*! exports provided: Track, PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Track", function() { return Track; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return PlayerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Track = /** @class */ (function () {
    function Track() {
    }
    return Track;
}());

var PlayerService = /** @class */ (function () {
    function PlayerService() {
        this.playlist = [
            {
                name: 'Don\'t Wanna Fight',
                artist: 'Alabama Shakes',
                url: 'https://p.scdn.co/mp3-preview/6156cdbca425a894972c02fca9d76c0b70e001af',
                cover: 'assets/images/cover1.jpg',
            },
            {
                name: 'Harder',
                artist: 'Daft Punk',
                url: 'https://p.scdn.co/mp3-preview/92a04c7c0e96bf93a1b1b1cae7dfff1921969a7b',
                cover: 'assets/images/cover2.jpg',
            },
            {
                name: 'Come Together',
                artist: 'Beatles',
                url: 'https://p.scdn.co/mp3-preview/83090a4db6899eaca689ae35f69126dbe65d94c9',
                cover: 'assets/images/cover3.jpg',
            },
        ];
    }
    PlayerService.prototype.random = function () {
        this.current = Math.floor(Math.random() * this.playlist.length);
        return this.playlist[this.current];
    };
    PlayerService.prototype.next = function () {
        return this.getNextTrack();
    };
    PlayerService.prototype.prev = function () {
        return this.getPrevTrack();
    };
    PlayerService.prototype.getNextTrack = function () {
        if (this.current === this.playlist.length - 1) {
            this.current = 0;
        }
        else {
            this.current++;
        }
        return this.playlist[this.current];
    };
    PlayerService.prototype.getPrevTrack = function () {
        if (this.current === 0) {
            this.current = this.playlist.length - 1;
        }
        else {
            this.current--;
        }
        return this.playlist[this.current];
    };
    PlayerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], PlayerService);
    return PlayerService;
}());



/***/ }),

/***/ "./src/app/@core/data/smart-table.service.ts":
/*!***************************************************!*\
  !*** ./src/app/@core/data/smart-table.service.ts ***!
  \***************************************************/
/*! exports provided: SmartTableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartTableService", function() { return SmartTableService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SmartTableService = /** @class */ (function () {
    function SmartTableService() {
        this.data = [{
                id: 1,
                firstName: 'Mark',
                lastName: 'Otto',
                username: '@mdo',
                email: 'mdo@gmail.com',
                age: '28',
            }, {
                id: 2,
                firstName: 'Jacob',
                lastName: 'Thornton',
                username: '@fat',
                email: 'fat@yandex.ru',
                age: '45',
            }, {
                id: 3,
                firstName: 'Larry',
                lastName: 'Bird',
                username: '@twitter',
                email: 'twitter@outlook.com',
                age: '18',
            }, {
                id: 4,
                firstName: 'John',
                lastName: 'Snow',
                username: '@snow',
                email: 'snow@gmail.com',
                age: '20',
            }, {
                id: 5,
                firstName: 'Jack',
                lastName: 'Sparrow',
                username: '@jack',
                email: 'jack@yandex.ru',
                age: '30',
            }, {
                id: 6,
                firstName: 'Ann',
                lastName: 'Smith',
                username: '@ann',
                email: 'ann@gmail.com',
                age: '21',
            }, {
                id: 7,
                firstName: 'Barbara',
                lastName: 'Black',
                username: '@barbara',
                email: 'barbara@yandex.ru',
                age: '43',
            }, {
                id: 8,
                firstName: 'Sevan',
                lastName: 'Bagrat',
                username: '@sevan',
                email: 'sevan@outlook.com',
                age: '13',
            }, {
                id: 9,
                firstName: 'Ruben',
                lastName: 'Vardan',
                username: '@ruben',
                email: 'ruben@gmail.com',
                age: '22',
            }, {
                id: 10,
                firstName: 'Karen',
                lastName: 'Sevan',
                username: '@karen',
                email: 'karen@yandex.ru',
                age: '33',
            }, {
                id: 11,
                firstName: 'Mark',
                lastName: 'Otto',
                username: '@mark',
                email: 'mark@gmail.com',
                age: '38',
            }, {
                id: 12,
                firstName: 'Jacob',
                lastName: 'Thornton',
                username: '@jacob',
                email: 'jacob@yandex.ru',
                age: '48',
            }, {
                id: 13,
                firstName: 'Haik',
                lastName: 'Hakob',
                username: '@haik',
                email: 'haik@outlook.com',
                age: '48',
            }, {
                id: 14,
                firstName: 'Garegin',
                lastName: 'Jirair',
                username: '@garegin',
                email: 'garegin@gmail.com',
                age: '40',
            }, {
                id: 15,
                firstName: 'Krikor',
                lastName: 'Bedros',
                username: '@krikor',
                email: 'krikor@yandex.ru',
                age: '32',
            }, {
                'id': 16,
                'firstName': 'Francisca',
                'lastName': 'Brady',
                'username': '@Gibson',
                'email': 'franciscagibson@comtours.com',
                'age': 11,
            }, {
                'id': 17,
                'firstName': 'Tillman',
                'lastName': 'Figueroa',
                'username': '@Snow',
                'email': 'tillmansnow@comtours.com',
                'age': 34,
            }, {
                'id': 18,
                'firstName': 'Jimenez',
                'lastName': 'Morris',
                'username': '@Bryant',
                'email': 'jimenezbryant@comtours.com',
                'age': 45,
            }, {
                'id': 19,
                'firstName': 'Sandoval',
                'lastName': 'Jacobson',
                'username': '@Mcbride',
                'email': 'sandovalmcbride@comtours.com',
                'age': 32,
            }, {
                'id': 20,
                'firstName': 'Griffin',
                'lastName': 'Torres',
                'username': '@Charles',
                'email': 'griffincharles@comtours.com',
                'age': 19,
            }, {
                'id': 21,
                'firstName': 'Cora',
                'lastName': 'Parker',
                'username': '@Caldwell',
                'email': 'coracaldwell@comtours.com',
                'age': 27,
            }, {
                'id': 22,
                'firstName': 'Cindy',
                'lastName': 'Bond',
                'username': '@Velez',
                'email': 'cindyvelez@comtours.com',
                'age': 24,
            }, {
                'id': 23,
                'firstName': 'Frieda',
                'lastName': 'Tyson',
                'username': '@Craig',
                'email': 'friedacraig@comtours.com',
                'age': 45,
            }, {
                'id': 24,
                'firstName': 'Cote',
                'lastName': 'Holcomb',
                'username': '@Rowe',
                'email': 'coterowe@comtours.com',
                'age': 20,
            }, {
                'id': 25,
                'firstName': 'Trujillo',
                'lastName': 'Mejia',
                'username': '@Valenzuela',
                'email': 'trujillovalenzuela@comtours.com',
                'age': 16,
            }, {
                'id': 26,
                'firstName': 'Pruitt',
                'lastName': 'Shepard',
                'username': '@Sloan',
                'email': 'pruittsloan@comtours.com',
                'age': 44,
            }, {
                'id': 27,
                'firstName': 'Sutton',
                'lastName': 'Ortega',
                'username': '@Black',
                'email': 'suttonblack@comtours.com',
                'age': 42,
            }, {
                'id': 28,
                'firstName': 'Marion',
                'lastName': 'Heath',
                'username': '@Espinoza',
                'email': 'marionespinoza@comtours.com',
                'age': 47,
            }, {
                'id': 29,
                'firstName': 'Newman',
                'lastName': 'Hicks',
                'username': '@Keith',
                'email': 'newmankeith@comtours.com',
                'age': 15,
            }, {
                'id': 30,
                'firstName': 'Boyle',
                'lastName': 'Larson',
                'username': '@Summers',
                'email': 'boylesummers@comtours.com',
                'age': 32,
            }, {
                'id': 31,
                'firstName': 'Haynes',
                'lastName': 'Vinson',
                'username': '@Mckenzie',
                'email': 'haynesmckenzie@comtours.com',
                'age': 15,
            }, {
                'id': 32,
                'firstName': 'Miller',
                'lastName': 'Acosta',
                'username': '@Young',
                'email': 'milleryoung@comtours.com',
                'age': 55,
            }, {
                'id': 33,
                'firstName': 'Johnston',
                'lastName': 'Brown',
                'username': '@Knight',
                'email': 'johnstonknight@comtours.com',
                'age': 29,
            }, {
                'id': 34,
                'firstName': 'Lena',
                'lastName': 'Pitts',
                'username': '@Forbes',
                'email': 'lenaforbes@comtours.com',
                'age': 25,
            }, {
                'id': 35,
                'firstName': 'Terrie',
                'lastName': 'Kennedy',
                'username': '@Branch',
                'email': 'terriebranch@comtours.com',
                'age': 37,
            }, {
                'id': 36,
                'firstName': 'Louise',
                'lastName': 'Aguirre',
                'username': '@Kirby',
                'email': 'louisekirby@comtours.com',
                'age': 44,
            }, {
                'id': 37,
                'firstName': 'David',
                'lastName': 'Patton',
                'username': '@Sanders',
                'email': 'davidsanders@comtours.com',
                'age': 26,
            }, {
                'id': 38,
                'firstName': 'Holden',
                'lastName': 'Barlow',
                'username': '@Mckinney',
                'email': 'holdenmckinney@comtours.com',
                'age': 11,
            }, {
                'id': 39,
                'firstName': 'Baker',
                'lastName': 'Rivera',
                'username': '@Montoya',
                'email': 'bakermontoya@comtours.com',
                'age': 47,
            }, {
                'id': 40,
                'firstName': 'Belinda',
                'lastName': 'Lloyd',
                'username': '@Calderon',
                'email': 'belindacalderon@comtours.com',
                'age': 21,
            }, {
                'id': 41,
                'firstName': 'Pearson',
                'lastName': 'Patrick',
                'username': '@Clements',
                'email': 'pearsonclements@comtours.com',
                'age': 42,
            }, {
                'id': 42,
                'firstName': 'Alyce',
                'lastName': 'Mckee',
                'username': '@Daugherty',
                'email': 'alycedaugherty@comtours.com',
                'age': 55,
            }, {
                'id': 43,
                'firstName': 'Valencia',
                'lastName': 'Spence',
                'username': '@Olsen',
                'email': 'valenciaolsen@comtours.com',
                'age': 20,
            }, {
                'id': 44,
                'firstName': 'Leach',
                'lastName': 'Holcomb',
                'username': '@Humphrey',
                'email': 'leachhumphrey@comtours.com',
                'age': 28,
            }, {
                'id': 45,
                'firstName': 'Moss',
                'lastName': 'Baxter',
                'username': '@Fitzpatrick',
                'email': 'mossfitzpatrick@comtours.com',
                'age': 51,
            }, {
                'id': 46,
                'firstName': 'Jeanne',
                'lastName': 'Cooke',
                'username': '@Ward',
                'email': 'jeanneward@comtours.com',
                'age': 59,
            }, {
                'id': 47,
                'firstName': 'Wilma',
                'lastName': 'Briggs',
                'username': '@Kidd',
                'email': 'wilmakidd@comtours.com',
                'age': 53,
            }, {
                'id': 48,
                'firstName': 'Beatrice',
                'lastName': 'Perry',
                'username': '@Gilbert',
                'email': 'beatricegilbert@comtours.com',
                'age': 39,
            }, {
                'id': 49,
                'firstName': 'Whitaker',
                'lastName': 'Hyde',
                'username': '@Mcdonald',
                'email': 'whitakermcdonald@comtours.com',
                'age': 35,
            }, {
                'id': 50,
                'firstName': 'Rebekah',
                'lastName': 'Duran',
                'username': '@Gross',
                'email': 'rebekahgross@comtours.com',
                'age': 40,
            }, {
                'id': 51,
                'firstName': 'Earline',
                'lastName': 'Mayer',
                'username': '@Woodward',
                'email': 'earlinewoodward@comtours.com',
                'age': 52,
            }, {
                'id': 52,
                'firstName': 'Moran',
                'lastName': 'Baxter',
                'username': '@Johns',
                'email': 'moranjohns@comtours.com',
                'age': 20,
            }, {
                'id': 53,
                'firstName': 'Nanette',
                'lastName': 'Hubbard',
                'username': '@Cooke',
                'email': 'nanettecooke@comtours.com',
                'age': 55,
            }, {
                'id': 54,
                'firstName': 'Dalton',
                'lastName': 'Walker',
                'username': '@Hendricks',
                'email': 'daltonhendricks@comtours.com',
                'age': 25,
            }, {
                'id': 55,
                'firstName': 'Bennett',
                'lastName': 'Blake',
                'username': '@Pena',
                'email': 'bennettpena@comtours.com',
                'age': 13,
            }, {
                'id': 56,
                'firstName': 'Kellie',
                'lastName': 'Horton',
                'username': '@Weiss',
                'email': 'kellieweiss@comtours.com',
                'age': 48,
            }, {
                'id': 57,
                'firstName': 'Hobbs',
                'lastName': 'Talley',
                'username': '@Sanford',
                'email': 'hobbssanford@comtours.com',
                'age': 28,
            }, {
                'id': 58,
                'firstName': 'Mcguire',
                'lastName': 'Donaldson',
                'username': '@Roman',
                'email': 'mcguireroman@comtours.com',
                'age': 38,
            }, {
                'id': 59,
                'firstName': 'Rodriquez',
                'lastName': 'Saunders',
                'username': '@Harper',
                'email': 'rodriquezharper@comtours.com',
                'age': 20,
            }, {
                'id': 60,
                'firstName': 'Lou',
                'lastName': 'Conner',
                'username': '@Sanchez',
                'email': 'lousanchez@comtours.com',
                'age': 16,
            }];
    }
    SmartTableService.prototype.getData = function () {
        return this.data;
    };
    SmartTableService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], SmartTableService);
    return SmartTableService;
}());



/***/ }),

/***/ "./src/app/@core/data/state.service.ts":
/*!*********************************************!*\
  !*** ./src/app/@core/data/state.service.ts ***!
  \*********************************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@nebular/theme */ "./src/app/@nebular/theme/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StateService = /** @class */ (function () {
    function StateService(directionService) {
        var _this = this;
        this.layouts = [
            {
                name: 'One Column',
                icon: 'nb-layout-default',
                id: 'one-column',
                selected: true,
            },
            {
                name: 'Two Column',
                icon: 'nb-layout-two-column',
                id: 'two-column',
            },
            {
                name: 'Center Column',
                icon: 'nb-layout-centre',
                id: 'center-column',
            },
        ];
        this.sidebars = [
            {
                name: 'Sidebar at layout start',
                icon: 'nb-layout-sidebar-left',
                id: 'start',
                selected: true,
            },
            {
                name: 'Sidebar at layout end',
                icon: 'nb-layout-sidebar-right',
                id: 'end',
            },
        ];
        this.layoutState$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.layouts[0]);
        this.sidebarState$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.sidebars[0]);
        this.alive = true;
        directionService.onDirectionChange()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (direction) { return _this.updateSidebarIcons(direction); });
        this.updateSidebarIcons(directionService.getDirection());
    }
    StateService.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    StateService.prototype.updateSidebarIcons = function (direction) {
        var _a = this.sidebars, startSidebar = _a[0], endSidebar = _a[1];
        var isLtr = direction === _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutDirection"].LTR;
        var startIconClass = isLtr ? 'nb-layout-sidebar-left' : 'nb-layout-sidebar-right';
        var endIconClass = isLtr ? 'nb-layout-sidebar-right' : 'nb-layout-sidebar-left';
        startSidebar.icon = startIconClass;
        endSidebar.icon = endIconClass;
    };
    StateService.prototype.setLayoutState = function (state) {
        this.layoutState$.next(state);
    };
    StateService.prototype.getLayoutStates = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.layouts);
    };
    StateService.prototype.onLayoutState = function () {
        return this.layoutState$.asObservable();
    };
    StateService.prototype.setSidebarState = function (state) {
        this.sidebarState$.next(state);
    };
    StateService.prototype.getSidebarStates = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.sidebars);
    };
    StateService.prototype.onSidebarState = function () {
        return this.sidebarState$.asObservable();
    };
    StateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutDirectionService"]])
    ], StateService);
    return StateService;
}());



/***/ }),

/***/ "./src/app/@core/data/users.service.ts":
/*!*********************************************!*\
  !*** ./src/app/@core/data/users.service.ts ***!
  \*********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var counter = 0;
var UserService = /** @class */ (function () {
    function UserService() {
        this.users = {
            nick: { name: 'Nick Jones', picture: 'assets/images/nick.png' },
            eva: { name: 'Eva Moor', picture: 'assets/images/eva.png' },
            jack: { name: 'Jack Williams', picture: 'assets/images/jack.png' },
            lee: { name: 'Lee Wong', picture: 'assets/images/lee.png' },
            alan: { name: 'Alan Thompson', picture: 'assets/images/alan.png' },
            kate: { name: 'Kate Martinez', picture: 'assets/images/kate.png' },
        };
        // this.userArray = Object.values(this.users);
    }
    UserService.prototype.getUsers = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.users);
    };
    UserService.prototype.getUserArray = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.userArray);
    };
    UserService.prototype.getUser = function () {
        counter = (counter + 1) % this.userArray.length;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.userArray[counter]);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/@core/module-import-guard.ts":
/*!**********************************************!*\
  !*** ./src/app/@core/module-import-guard.ts ***!
  \**********************************************/
/*! exports provided: throwIfAlreadyLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return throwIfAlreadyLoaded; });
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}


/***/ }),

/***/ "./src/app/@core/utils/analytics.service.ts":
/*!**************************************************!*\
  !*** ./src/app/@core/utils/analytics.service.ts ***!
  \**************************************************/
/*! exports provided: AnalyticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsService", function() { return AnalyticsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AnalyticsService = /** @class */ (function () {
    function AnalyticsService(location, router) {
        this.location = location;
        this.router = router;
        this.enabled = false;
    }
    AnalyticsService.prototype.trackPageViews = function () {
        var _this = this;
        if (this.enabled) {
            this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }))
                .subscribe(function () {
                ga('send', { hitType: 'pageview', page: _this.location.path() });
            });
        }
    };
    AnalyticsService.prototype.trackEvent = function (eventName) {
        if (this.enabled) {
            ga('send', 'event', eventName);
        }
    };
    AnalyticsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AnalyticsService);
    return AnalyticsService;
}());



/***/ }),

/***/ "./src/app/@nebular/auth/auth.module.js":
/*!**********************************************!*\
  !*** ./src/app/@nebular/auth/auth.module.js ***!
  \**********************************************/
/*! exports provided: nbAuthServiceFactory, nbOptionsFactory, NbAuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nbAuthServiceFactory", function() { return nbAuthServiceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nbOptionsFactory", function() { return nbOptionsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbAuthModule", function() { return NbAuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme */ "./src/app/@nebular/theme/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/@nebular/auth/services/auth.service.js");
/* harmony import */ var _providers_dummy_auth_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./providers/dummy-auth.provider */ "./src/app/@nebular/auth/providers/dummy-auth.provider.js");
/* harmony import */ var _providers_email_pass_auth_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./providers/email-pass-auth.provider */ "./src/app/@nebular/auth/providers/email-pass-auth.provider.js");
/* harmony import */ var _services_token_token_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/token/token.service */ "./src/app/@nebular/auth/services/token/token.service.js");
/* harmony import */ var _services_token_token__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/token/token */ "./src/app/@nebular/auth/services/token/token.js");
/* harmony import */ var _services_token_token_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/token/token-storage */ "./src/app/@nebular/auth/services/token/token-storage.js");
/* harmony import */ var _auth_options__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth.options */ "./src/app/@nebular/auth/auth.options.js");
/* harmony import */ var _components_auth_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/auth.component */ "./src/app/@nebular/auth/components/auth.component.js");
/* harmony import */ var _components_auth_block_auth_block_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/auth-block/auth-block.component */ "./src/app/@nebular/auth/components/auth-block/auth-block.component.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/@nebular/auth/components/login/login.component.js");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/@nebular/auth/components/register/register.component.js");
/* harmony import */ var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/logout/logout.component */ "./src/app/@nebular/auth/components/logout/logout.component.js");
/* harmony import */ var _components_request_password_request_password_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/request-password/request-password.component */ "./src/app/@nebular/auth/components/request-password/request-password.component.js");
/* harmony import */ var _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/reset-password/reset-password.component */ "./src/app/@nebular/auth/components/reset-password/reset-password.component.js");
/* harmony import */ var _auth_routes__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./auth.routes */ "./src/app/@nebular/auth/auth.routes.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./helpers */ "./src/app/@nebular/auth/helpers.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");


























function nbAuthServiceFactory(config, tokenService, injector) {
    var providers = config.providers || {};
    for (var key in providers) {
        if (providers.hasOwnProperty(key)) {
            var provider = providers[key];
            var object = injector.get(provider.service);
            object.setConfig(provider.config || {});
        }
    }
    return new _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["NbAuthService"](tokenService, injector, providers);
}
function nbOptionsFactory(options) {
    return Object(_helpers__WEBPACK_IMPORTED_MODULE_21__["deepExtend"])(_auth_options__WEBPACK_IMPORTED_MODULE_12__["defaultSettings"], options);
}
var NbAuthModule = /** @class */ (function () {
    function NbAuthModule() {
    }
    NbAuthModule.forRoot = function (nbAuthOptions) {
        return {
            ngModule: NbAuthModule,
            providers: [
                { provide: _auth_options__WEBPACK_IMPORTED_MODULE_12__["NB_AUTH_USER_OPTIONS"], useValue: nbAuthOptions },
                { provide: _auth_options__WEBPACK_IMPORTED_MODULE_12__["NB_AUTH_OPTIONS"], useFactory: nbOptionsFactory, deps: [_auth_options__WEBPACK_IMPORTED_MODULE_12__["NB_AUTH_USER_OPTIONS"]] },
                { provide: _auth_options__WEBPACK_IMPORTED_MODULE_12__["NB_AUTH_PROVIDERS"], useValue: {} },
                { provide: _auth_options__WEBPACK_IMPORTED_MODULE_12__["NB_AUTH_TOKEN_CLASS"], useValue: _services_token_token__WEBPACK_IMPORTED_MODULE_10__["NbAuthSimpleToken"] },
                { provide: _auth_options__WEBPACK_IMPORTED_MODULE_12__["NB_AUTH_INTERCEPTOR_HEADER"], useValue: 'Authorization' },
                {
                    provide: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["NbAuthService"],
                    useFactory: nbAuthServiceFactory,
                    deps: [_auth_options__WEBPACK_IMPORTED_MODULE_12__["NB_AUTH_OPTIONS"], _services_token_token_service__WEBPACK_IMPORTED_MODULE_9__["NbTokenService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]],
                },
                { provide: _services_token_token_storage__WEBPACK_IMPORTED_MODULE_11__["NbTokenStorage"], useClass: _services_token_token_storage__WEBPACK_IMPORTED_MODULE_11__["NbTokenLocalStorage"] },
                _services_token_token_service__WEBPACK_IMPORTED_MODULE_9__["NbTokenService"],
                _providers_dummy_auth_provider__WEBPACK_IMPORTED_MODULE_7__["NbDummyAuthProvider"],
                _providers_email_pass_auth_provider__WEBPACK_IMPORTED_MODULE_8__["NbEmailPassAuthProvider"],
                _services_api_service__WEBPACK_IMPORTED_MODULE_22__["ApiService"],
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_24__["CookieService"],
            ],
        };
    };
    NbAuthModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                        _theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutModule"],
                        _theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"],
                        _theme__WEBPACK_IMPORTED_MODULE_5__["NbCheckboxModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_auth_routes__WEBPACK_IMPORTED_MODULE_20__["routes"]),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    ],
                    declarations: [
                        _components_auth_component__WEBPACK_IMPORTED_MODULE_13__["NbAuthComponent"],
                        _components_auth_block_auth_block_component__WEBPACK_IMPORTED_MODULE_14__["NbAuthBlockComponent"],
                        _components_login_login_component__WEBPACK_IMPORTED_MODULE_15__["NbLoginComponent"],
                        _components_register_register_component__WEBPACK_IMPORTED_MODULE_16__["NbRegisterComponent"],
                        _components_request_password_request_password_component__WEBPACK_IMPORTED_MODULE_18__["NbRequestPasswordComponent"],
                        _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_19__["NbResetPasswordComponent"],
                        _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_17__["NbLogoutComponent"],
                    ],
                    exports: [
                        _components_auth_component__WEBPACK_IMPORTED_MODULE_13__["NbAuthComponent"],
                        _components_auth_block_auth_block_component__WEBPACK_IMPORTED_MODULE_14__["NbAuthBlockComponent"],
                        _components_login_login_component__WEBPACK_IMPORTED_MODULE_15__["NbLoginComponent"],
                        _components_register_register_component__WEBPACK_IMPORTED_MODULE_16__["NbRegisterComponent"],
                        _components_request_password_request_password_component__WEBPACK_IMPORTED_MODULE_18__["NbRequestPasswordComponent"],
                        _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_19__["NbResetPasswordComponent"],
                        _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_17__["NbLogoutComponent"],
                    ],
                },] },
    ];
    return NbAuthModule;
}());

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ "./src/app/@nebular/auth/auth.options.js":
/*!***********************************************!*\
  !*** ./src/app/@nebular/auth/auth.options.js ***!
  \***********************************************/
/*! exports provided: defaultSettings, NB_AUTH_OPTIONS, NB_AUTH_USER_OPTIONS, NB_AUTH_PROVIDERS, NB_AUTH_TOKEN_CLASS, NB_AUTH_INTERCEPTOR_HEADER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSettings", function() { return defaultSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NB_AUTH_OPTIONS", function() { return NB_AUTH_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NB_AUTH_USER_OPTIONS", function() { return NB_AUTH_USER_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NB_AUTH_PROVIDERS", function() { return NB_AUTH_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NB_AUTH_TOKEN_CLASS", function() { return NB_AUTH_TOKEN_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NB_AUTH_INTERCEPTOR_HEADER", function() { return NB_AUTH_INTERCEPTOR_HEADER; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var socialLinks = [];
var defaultSettings = {
    forms: {
        login: {
            redirectDelay: 500,
            // delay before redirect after a successful login, while success message is shown to the user
            provider: 'email',
            // provider id key. If you have multiple providers, or what to use your own
            rememberMe: true,
            // whether to show or not the `rememberMe` checkbox
            showMessages: {
                // show/not show success/error messages
                success: true,
                error: true,
            },
            socialLinks: socialLinks,
        },
        register: {
            redirectDelay: 500,
            provider: 'email',
            showMessages: {
                success: true,
                error: true,
            },
            terms: true,
            socialLinks: socialLinks,
        },
        requestPassword: {
            redirectDelay: 500,
            provider: 'email',
            showMessages: {
                success: true,
                error: true,
            },
            socialLinks: socialLinks,
        },
        resetPassword: {
            redirectDelay: 500,
            provider: 'email',
            showMessages: {
                success: true,
                error: true,
            },
            socialLinks: socialLinks,
        },
        logout: {
            redirectDelay: 500,
            provider: 'email',
        },
        validation: {
            password: {
                required: true,
                minLength: 4,
                maxLength: 50,
            },
            email: {
                required: true,
            },
            fullName: {
                required: false,
                minLength: 4,
                maxLength: 50,
            },
        },
    },
};
var NB_AUTH_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Nebular Auth Options');
var NB_AUTH_USER_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Nebular User Auth Options');
var NB_AUTH_PROVIDERS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Nebular Auth Providers');
var NB_AUTH_TOKEN_CLASS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Nebular Token Class');
var NB_AUTH_INTERCEPTOR_HEADER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Nebular Simple Interceptor Header');
//# sourceMappingURL=auth.options.js.map

/***/ }),

/***/ "./src/app/@nebular/auth/auth.routes.js":
/*!**********************************************!*\
  !*** ./src/app/@nebular/auth/auth.routes.js ***!
  \**********************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _components_auth_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/auth.component */ "./src/app/@nebular/auth/components/auth.component.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/@nebular/auth/components/login/login.component.js");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/@nebular/auth/components/register/register.component.js");
/* harmony import */ var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/logout/logout.component */ "./src/app/@nebular/auth/components/logout/logout.component.js");
/* harmony import */ var _components_request_password_request_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/request-password/request-password.component */ "./src/app/@nebular/auth/components/request-password/request-password.component.js");
/* harmony import */ var _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/reset-password/reset-password.component */ "./src/app/@nebular/auth/components/reset-password/reset-password.component.js");






var routes = [
    {
        path: 'auth',
        component: _components_auth_component__WEBPACK_IMPORTED_MODULE_0__["NbAuthComponent"],
        children: [
            {
                path: '',
                component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__["NbLoginComponent"],
            },
            {
                path: 'login',
                component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__["NbLoginComponent"],
            },
            {
                path: 'register',
                component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_2__["NbRegisterComponent"],
            },
            {
                path: 'logout',
                component: _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_3__["NbLogoutComponent"],
            },
            {
                path: 'request-password',
                component: _components_request_password_request_password_component__WEBPACK_IMPORTED_MODULE_4__["NbRequestPasswordComponent"],
            },
            {
                path: 'reset-password',
                component: _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__["NbResetPasswordComponent"],
            },
        ],
    },
];
//# sourceMappingURL=auth.routes.js.map

/***/ }),

/***/ "./src/app/@nebular/auth/components/auth-block/auth-block.component.js":
/*!*****************************************************************************!*\
  !*** ./src/app/@nebular/auth/components/auth-block/auth-block.component.js ***!
  \*****************************************************************************/
/*! exports provided: NbAuthBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbAuthBlockComponent", function() { return NbAuthBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var NbAuthBlockComponent = /** @class */ (function () {
    function NbAuthBlockComponent() {
    }
    NbAuthBlockComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'nb-auth-block',
                    styles: ["@media (max-width: 550px){:host /deep/ .accept-group{font-size:12px;padding:0}}:host /deep/ form{width:100%}:host /deep/ .alert{text-align:center}:host /deep/ .title{margin-bottom:0.75rem;text-align:center}:host /deep/ .sub-title{margin-bottom:2rem;text-align:center}:host /deep/ .checkbox{display:flex;justify-content:space-between;margin-bottom:10px;font-weight:normal}:host /deep/ .form-group.accept-group{display:flex;justify-content:space-between;margin:2rem 0}:host /deep/ .form-group.accept-group .forgot-password{line-height:2}:host /deep/ .links{text-align:center;margin-top:1.75rem}:host /deep/ .links .socials{margin:1.5rem 0 2.5rem}:host /deep/ .links .socials a{margin:0 1rem;text-decoration:none;font-size:1rem;vertical-align:middle}:host /deep/ .links .socials a.with-icon{font-size:2rem} "],
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    return NbAuthBlockComponent;
}());

//# sourceMappingURL=auth-block.component.js.map

/***/ }),

/***/ "./src/app/@nebular/auth/components/auth.component.js":
/*!************************************************************!*\
  !*** ./src/app/@nebular/auth/components/auth.component.js ***!
  \************************************************************/
/*! exports provided: NbAuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbAuthComponent", function() { return NbAuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/@nebular/auth/services/auth.service.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");



var NbAuthComponent = /** @class */ (function () {
    // showcase of how to use the onAuthenticationChange method
    function NbAuthComponent(auth) {
        var _this = this;
        this.auth = auth;
        this.alive = true;
        this.authenticated = false;
        this.token = '';
        this.subscription = auth.onAuthenticationChange()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (authenticated) {
            _this.authenticated = authenticated;
        });
    }
    NbAuthComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    NbAuthComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'nb-auth',
                    styles: [":host /deep/ nb-layout .layout .layout-container .content .columns nb-layout-column{padding:2.5rem}:host /deep/ nb-card{height:calc(100vh - 2 * 2.5rem)}:host /deep/ nb-card{margin:0}:host /deep/ .flex-centered{margin:auto}:host /deep/ nb-card-body{display:flex}@media (max-width: 550px){:host /deep/ /deep/ nb-layout .layout .layout-container .content .columns nb-layout-column{padding:0}:host /deep/ nb-card{border-radius:0;height:100vh}} "],
                    template: "\n    <nb-layout>\n      <nb-layout-column>\n        <nb-card>\n          <nb-card-body>\n            <div class=\"flex-centered col-xl-4 col-lg-6 col-md-8 col-sm-12\">\n              <router-outlet></router-outlet>\n            </div>\n          </nb-card-body>\n        </nb-card>\n      </nb-layout-column>\n    </nb-layout>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbAuthComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["NbAuthService"], },
    ]; };
    return NbAuthComponent;
}());

//# sourceMappingURL=auth.component.js.map

/***/ }),

/***/ "./src/app/@nebular/auth/components/index.js":
/*!***************************************************!*\
  !*** ./src/app/@nebular/auth/components/index.js ***!
  \***************************************************/
/*! exports provided: NbAuthComponent, NbAuthBlockComponent, NbLoginComponent, NbLogoutComponent, NbRegisterComponent, NbRequestPasswordComponent, NbResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.component */ "./src/app/@nebular/auth/components/auth.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbAuthComponent", function() { return _auth_component__WEBPACK_IMPORTED_MODULE_0__["NbAuthComponent"]; });

/* harmony import */ var _auth_block_auth_block_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-block/auth-block.component */ "./src/app/@nebular/auth/components/auth-block/auth-block.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbAuthBlockComponent", function() { return _auth_block_auth_block_component__WEBPACK_IMPORTED_MODULE_1__["NbAuthBlockComponent"]; });

/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/@nebular/auth/components/login/login.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbLoginComponent", function() { return _login_login_component__WEBPACK_IMPORTED_MODULE_2__["NbLoginComponent"]; });

/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/@nebular/auth/components/logout/logout.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbLogoutComponent", function() { return _logout_logout_component__WEBPACK_IMPORTED_MODULE_3__["NbLogoutComponent"]; });

/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/@nebular/auth/components/register/register.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbRegisterComponent", function() { return _register_register_component__WEBPACK_IMPORTED_MODULE_4__["NbRegisterComponent"]; });

/* harmony import */ var _request_password_request_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./request-password/request-password.component */ "./src/app/@nebular/auth/components/request-password/request-password.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbRequestPasswordComponent", function() { return _request_password_request_password_component__WEBPACK_IMPORTED_MODULE_5__["NbRequestPasswordComponent"]; });

/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/@nebular/auth/components/reset-password/reset-password.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbResetPasswordComponent", function() { return _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__["NbResetPasswordComponent"]; });








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/@nebular/auth/components/login/login.component.js":
/*!*******************************************************************!*\
  !*** ./src/app/@nebular/auth/components/login/login.component.js ***!
  \*******************************************************************/
/*! exports provided: NbLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbLoginComponent", function() { return NbLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth.options */ "./src/app/@nebular/auth/auth.options.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers */ "./src/app/@nebular/auth/helpers.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/@nebular/auth/services/auth.service.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../common */ "./src/app/common.ts");










var NbLoginComponent = /** @class */ (function () {
    function NbLoginComponent(service, toastrService, cookieService, config, router) {
        if (config === void 0) { config = {}; }
        this.service = service;
        this.toastrService = toastrService;
        this.cookieService = cookieService;
        this.config = config;
        this.router = router;
        this.redirectDelay = 0;
        this.showMessages = {};
        this.provider = '';
        this.errors = [];
        this.messages = [];
        this.user = {};
        this.submitted = false;
        this.redirectDelay = this.getConfigValue('forms.login.redirectDelay');
        this.showMessages = this.getConfigValue('forms.login.showMessages');
        this.provider = this.getConfigValue('forms.login.provider');

        if (this.cookieService.check('user') && this.cookieService.get('user') != '') {
            var user = _common__WEBPACK_IMPORTED_MODULE_8__["Utils"].decodeJwt(this.cookieService.get('user'));
            this.signInUser(user.username, user.password);
        }
    }
    NbLoginComponent.prototype.login = function () {
        this.errors = this.messages = [];
        this.submitted = true;
        this.signInUser(this.user.username, this.user.password);
    };
    NbLoginComponent.prototype.signInUser = function(username, password) {
        var _this = this;
        this.service.signInUser(username, password).subscribe(
            res => {
                console.log(res);
                var success = false;
                var redirect = '/admin/dashboard';
                if (res) {
                    if (!res.err) {
                        var user = res.response;
                        _this.fetchRestaurant(user.restaurant_id).then(result => {
                            if (!result['err']) {
                                success = true;
                                _this.toastrService.info('Logged in successfully!');
                                // save current user
                                user.restaurant = result['response'][0];
                                user.restaurant.bank_account = JSON.parse(user.restaurant.bank_account);
                                console.log(user);
                                _this.cookieService.set('user', _common__WEBPACK_IMPORTED_MODULE_8__["Utils"].encodeJwt(user), null, '/');
                                if (user.role == 2) 
                                    redirect = '/frontdesk/pending';
                            } else {
                                _this.toastrService.error('Cannot get restaurant information');
                                _this.submitted = false;
                            }

                            setTimeout(function () {
                                if (!success) {
                                    redirect = '/auth/login';
                                }
                                console.log(success);
                                console.log(redirect);
                                return _this.router.navigateByUrl(redirect);
                            }, _this.redirectDelay);
                        });
                    } else {
                        _this.toastrService.error('Incorrect username or password, try again');
                        _this.submitted = false;
                    }
                } else {
                    _this.toastrService.error('Incorrect username or password, try again');
                    _this.submitted = false;
                }
            }
        );
    };

    NbLoginComponent.prototype.fetchRestaurant = function(restaurant_id) {
        return new Promise((resolve, reject) => {
            var param1 = -1;
            var param2 = -1;
            this.service.getRestaurant(restaurant_id).subscribe(
                res => {
                    resolve(res);
                }
            );
        });
    };
    NbLoginComponent.prototype.getConfigValue = function (key) {
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getDeepFromObject"])(this.config, key, null);
    };
    NbLoginComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'nb-login',
                    template: "\n    <nb-auth-block>\n      <h2 class=\"title\">Sign In</h2>\n      <small class=\"form-text sub-title\">Hello! Sign in with your username</small>\n\n      <form (ngSubmit)=\"login()\" #form=\"ngForm\" autocomplete=\"nope\">\n\n        <div *ngIf=\"showMessages.error && errors && errors.length > 0 && !submitted\"\n             class=\"alert alert-danger\" role=\"alert\">\n          <div><strong>Oh snap!</strong></div>\n          <div *ngFor=\"let error of errors\">{{ error }}</div>\n        </div>\n\n        <div *ngIf=\"showMessages.success && messages && messages.length > 0 && !submitted\"\n             class=\"alert alert-success\" role=\"alert\">\n          <div><strong>Hooray!</strong></div>\n          <div *ngFor=\"let message of messages\">{{ message }}</div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"input-username\" class=\"sr-only\">Username</label>\n          <input name=\"username\" [(ngModel)]=\"user.username\" id=\"input-username\" pattern=\".+\"\n                 class=\"form-control\" placeholder=\"Username\" #username=\"ngModel\"\n                 [class.form-control-danger]=\"username.invalid && username.touched\" autofocus\n                 [required]=\"getConfigValue('forms.validation.email.required')\">\n          <small class=\"form-text error\" *ngIf=\"username.invalid && username.touched && username.errors?.required\">\n            Username is required!\n          </small>\n          </div>\n\n        <div class=\"form-group\">\n          <label for=\"input-password\" class=\"sr-only\">Password</label>\n          <input name=\"password\" [(ngModel)]=\"user.password\" type=\"password\" id=\"input-password\"\n                 class=\"form-control\" placeholder=\"Password\" #password=\"ngModel\"\n                 [class.form-control-danger]=\"password.invalid && password.touched\"\n                 [required]=\"getConfigValue('forms.validation.password.required')\"\n                 [minlength]=\"getConfigValue('forms.validation.password.minLength')\"\n                 [maxlength]=\"getConfigValue('forms.validation.password.maxLength')\">\n          <small class=\"form-text error\" *ngIf=\"password.invalid && password.touched && password.errors?.required\">\n            Password is required!\n          </small>\n          <small\n            class=\"form-text error\"\n            *ngIf=\"password.invalid && password.touched && (password.errors?.minlength || password.errors?.maxlength)\">\n            Password should contains\n            from {{ getConfigValue('forms.validation.password.minLength') }}\n            to {{ getConfigValue('forms.validation.password.maxLength') }}\n            characters\n          </small>\n        </div>\n\n        <div class=\"form-group accept-group col-sm-12\">\n          <nb-checkbox name=\"rememberMe\" [(ngModel)]=\"user.rememberMe\">Remember me</nb-checkbox>\n          <a class=\"forgot-password\" routerLink=\"../request-password\">Forgot Password?</a>\n        </div>\n\n        <button [disabled]=\"submitted || !form.valid\" class=\"btn btn-block btn-hero-success\"\n                [class.btn-pulse]=\"submitted\">\n          Sign In\n        </button>\n      </form>\n\n",
                },] },
    ];
    /** @nocollapse */
    NbLoginComponent.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"], },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_auth_options__WEBPACK_IMPORTED_MODULE_2__["NB_AUTH_OPTIONS"],] },] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], },
    ]; };
    return NbLoginComponent;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./src/app/@nebular/auth/components/logout/logout.component.js":
/*!*********************************************************************!*\
  !*** ./src/app/@nebular/auth/components/logout/logout.component.js ***!
  \*********************************************************************/
/*! exports provided: NbLogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbLogoutComponent", function() { return NbLogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth.options */ "./src/app/@nebular/auth/auth.options.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers */ "./src/app/@nebular/auth/helpers.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/@nebular/auth/services/auth.service.js");





var NbLogoutComponent = /** @class */ (function () {
    function NbLogoutComponent(service, config, router) {
        if (config === void 0) { config = {}; }
        this.service = service;
        this.config = config;
        this.router = router;
        this.redirectDelay = 0;
        this.provider = '';
        this.redirectDelay = this.getConfigValue('forms.logout.redirectDelay');
        this.provider = this.getConfigValue('forms.logout.provider');
    }
    NbLogoutComponent.prototype.ngOnInit = function () {
        this.logout(this.provider);
    };
    NbLogoutComponent.prototype.logout = function (provider) {
        var _this = this;
        this.service.logout(provider).subscribe(function (result) {
            var redirect = result.getRedirect();
            if (redirect) {
                setTimeout(function () {
                    return _this.router.navigateByUrl(redirect);
                }, _this.redirectDelay);
            }
        });
    };
    NbLogoutComponent.prototype.getConfigValue = function (key) {
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getDeepFromObject"])(this.config, key, null);
    };
    NbLogoutComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'nb-logout',
                    template: "\n    <div>Logging out, please wait...</div>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbLogoutComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["NbAuthService"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_auth_options__WEBPACK_IMPORTED_MODULE_2__["NB_AUTH_OPTIONS"],] },] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], },
    ]; };
    return NbLogoutComponent;
}());

//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ "./src/app/@nebular/auth/components/register/register.component.js":
/*!*************************************************************************!*\
  !*** ./src/app/@nebular/auth/components/register/register.component.js ***!
  \*************************************************************************/
/*! exports provided: NbRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbRegisterComponent", function() { return NbRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth.options */ "./src/app/@nebular/auth/auth.options.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers */ "./src/app/@nebular/auth/helpers.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/@nebular/auth/services/auth.service.js");





var NbRegisterComponent = /** @class */ (function () {
    function NbRegisterComponent(service, config, router) {
        if (config === void 0) { config = {}; }
        this.service = service;
        this.config = config;
        this.router = router;
        this.redirectDelay = 0;
        this.showMessages = {};
        this.provider = '';
        this.submitted = false;
        this.errors = [];
        this.messages = [];
        this.user = {};
        this.socialLinks = [];
        this.redirectDelay = this.getConfigValue('forms.register.redirectDelay');
        this.showMessages = this.getConfigValue('forms.register.showMessages');
        this.provider = this.getConfigValue('forms.register.provider');
        this.socialLinks = this.getConfigValue('forms.login.socialLinks');
    }
    NbRegisterComponent.prototype.register = function () {
        var _this = this;
        this.errors = this.messages = [];
        this.submitted = true;
        this.service.register(this.provider, this.user).subscribe(function (result) {
            _this.submitted = false;
            if (result.isSuccess()) {
                _this.messages = result.getMessages();
            }
            else {
                _this.errors = result.getErrors();
            }
            var redirect = result.getRedirect();
            if (redirect) {
                setTimeout(function () {
                    return _this.router.navigateByUrl(redirect);
                }, _this.redirectDelay);
            }
        });
    };
    NbRegisterComponent.prototype.getConfigValue = function (key) {
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getDeepFromObject"])(this.config, key, null);
    };
    NbRegisterComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'nb-register',
                    styles: [":host .title{margin-bottom:2rem} "],
                    template: "\n    <nb-auth-block>\n      <h2 class=\"title\">Sign Up</h2>\n      <form (ngSubmit)=\"register()\" #form=\"ngForm\">\n\n        <div *ngIf=\"showMessages.error && errors && errors.length > 0 && !submitted\"\n             class=\"alert alert-danger\" role=\"alert\">\n          <div><strong>Oh snap!</strong></div>\n          <div *ngFor=\"let error of errors\">{{ error }}</div>\n        </div>\n        <div *ngIf=\"showMessages.success && messages && messages.length > 0 && !submitted\"\n             class=\"alert alert-success\" role=\"alert\">\n          <div><strong>Hooray!</strong></div>\n          <div *ngFor=\"let message of messages\">{{ message }}</div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"input-name\" class=\"sr-only\">Full name</label>\n          <input name=\"fullName\" [(ngModel)]=\"user.fullName\" id=\"input-name\" #fullName=\"ngModel\"\n                 class=\"form-control\" placeholder=\"Full name\"\n                 [class.form-control-danger]=\"fullName.invalid && fullName.touched\"\n                 [required]=\"getConfigValue('forms.validation.fullName.required')\"\n                 [minlength]=\"getConfigValue('forms.validation.fullName.minLength')\"\n                 [maxlength]=\"getConfigValue('forms.validation.fullName.maxLength')\"\n                 autofocus>\n          <small class=\"form-text error\" *ngIf=\"fullName.invalid && fullName.touched && fullName.errors?.required\">\n            Full name is required!\n          </small>\n          <small\n            class=\"form-text error\"\n            *ngIf=\"fullName.invalid && fullName.touched && (fullName.errors?.minlength || fullName.errors?.maxlength)\">\n            Full name should contains\n            from {{getConfigValue('forms.validation.fullName.minLength')}}\n            to {{getConfigValue('forms.validation.fullName.maxLength')}}\n            characters\n          </small>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"input-email\" class=\"sr-only\">Email address</label>\n          <input name=\"email\" [(ngModel)]=\"user.email\" id=\"input-email\" #email=\"ngModel\"\n                 class=\"form-control\" placeholder=\"Email address\" pattern=\".+@.+..+\"\n                 [class.form-control-danger]=\"email.invalid && email.touched\"\n                 [required]=\"getConfigValue('forms.validation.email.required')\">\n          <small class=\"form-text error\" *ngIf=\"email.invalid && email.touched && email.errors?.required\">\n            Email is required!\n          </small>\n          <small class=\"form-text error\"\n                 *ngIf=\"email.invalid && email.touched && email.errors?.pattern\">\n            Email should be the real one!\n          </small>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"input-password\" class=\"sr-only\">Password</label>\n          <input name=\"password\" [(ngModel)]=\"user.password\" type=\"password\" id=\"input-password\"\n                 class=\"form-control\" placeholder=\"Password\" #password=\"ngModel\"\n                 [class.form-control-danger]=\"password.invalid && password.touched\"\n                 [required]=\"getConfigValue('forms.validation.password.required')\"\n                 [minlength]=\"getConfigValue('forms.validation.password.minLength')\"\n                 [maxlength]=\"getConfigValue('forms.validation.password.maxLength')\">\n          <small class=\"form-text error\" *ngIf=\"password.invalid && password.touched && password.errors?.required\">\n            Password is required!\n          </small>\n          <small\n            class=\"form-text error\"\n            *ngIf=\"password.invalid && password.touched && (password.errors?.minlength || password.errors?.maxlength)\">\n            Password should contains\n            from {{ getConfigValue('forms.validation.password.minLength') }}\n            to {{ getConfigValue('forms.validation.password.maxLength') }}\n            characters\n          </small>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"input-re-password\" class=\"sr-only\">Repeat password</label>\n          <input\n            name=\"rePass\" [(ngModel)]=\"user.confirmPassword\" type=\"password\" id=\"input-re-password\"\n            class=\"form-control\" placeholder=\"Confirm Password\" #rePass=\"ngModel\"\n            [class.form-control-danger]=\"(rePass.invalid || password.value != rePass.value) && rePass.touched\"\n            [required]=\"getConfigValue('forms.validation.password.required')\">\n          <small class=\"form-text error\"\n                 *ngIf=\"rePass.invalid && rePass.touched && rePass.errors?.required\">\n            Password confirmation is required!\n          </small>\n          <small\n            class=\"form-text error\"\n            *ngIf=\"rePass.touched && password.value != rePass.value && !rePass.errors?.required\">\n            Password does not match the confirm password.\n          </small>\n        </div>\n\n        <div class=\"form-group accept-group col-sm-12\" *ngIf=\"getConfigValue('forms.register.terms')\">\n          <nb-checkbox name=\"terms\" [(ngModel)]=\"user.terms\" [required]=\"getConfigValue('forms.register.terms')\">\n            Agree to <a href=\"#\" target=\"_blank\"><strong>Terms & Conditions</strong></a>\n          </nb-checkbox>\n        </div>\n\n        <button [disabled]=\"submitted || !form.valid\" class=\"btn btn-block btn-hero-success\"\n                [class.btn-pulse]=\"submitted\">\n          Register\n        </button>\n      </form>\n\n      <div class=\"links\">\n\n        <ng-container *ngIf=\"socialLinks && socialLinks.length > 0\">\n          <small class=\"form-text\">Or connect with:</small>\n\n          <div class=\"socials\">\n            <ng-container *ngFor=\"let socialLink of socialLinks\">\n              <a *ngIf=\"socialLink.link\"\n                 [routerLink]=\"socialLink.link\"\n                 [attr.target]=\"socialLink.target\"\n                 [attr.class]=\"socialLink.icon\"\n                 [class.with-icon]=\"socialLink.icon\">{{ socialLink.title }}</a>\n              <a *ngIf=\"socialLink.url\"\n                 [attr.href]=\"socialLink.url\"\n                 [attr.target]=\"socialLink.target\"\n                 [attr.class]=\"socialLink.icon\"\n                 [class.with-icon]=\"socialLink.icon\">{{ socialLink.title }}</a>\n            </ng-container>\n          </div>\n        </ng-container>\n\n        <small class=\"form-text\">\n          Already have an account? <a routerLink=\"../login\"><strong>Sign in</strong></a>\n        </small>\n      </div>\n    </nb-auth-block>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbRegisterComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["NbAuthService"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_auth_options__WEBPACK_IMPORTED_MODULE_2__["NB_AUTH_OPTIONS"],] },] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], },
    ]; };
    return NbRegisterComponent;
}());

//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "./src/app/@nebular/auth/components/request-password/request-password.component.js":
/*!*****************************************************************************************!*\
  !*** ./src/app/@nebular/auth/components/request-password/request-password.component.js ***!
  \*****************************************************************************************/
/*! exports provided: NbRequestPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbRequestPasswordComponent", function() { return NbRequestPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth.options */ "./src/app/@nebular/auth/auth.options.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers */ "./src/app/@nebular/auth/helpers.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/@nebular/auth/services/auth.service.js");





var NbRequestPasswordComponent = /** @class */ (function () {
    function NbRequestPasswordComponent(service, config, router) {
        if (config === void 0) { config = {}; }
        this.service = service;
        this.config = config;
        this.router = router;
        this.redirectDelay = 0;
        this.showMessages = {};
        this.provider = '';
        this.submitted = false;
        this.errors = [];
        this.messages = [];
        this.user = {};
        this.redirectDelay = this.getConfigValue('forms.requestPassword.redirectDelay');
        this.showMessages = this.getConfigValue('forms.requestPassword.showMessages');
        this.provider = this.getConfigValue('forms.requestPassword.provider');
    }
    NbRequestPasswordComponent.prototype.requestPass = function () {
        var _this = this;
        this.errors = this.messages = [];
        this.submitted = true;
        this.service.requestPassword(this.provider, this.user).subscribe(function (result) {
            _this.submitted = false;
            if (result.isSuccess()) {
                _this.messages = result.getMessages();
            }
            else {
                _this.errors = result.getErrors();
            }
            var redirect = result.getRedirect();
            if (redirect) {
                setTimeout(function () {
                    return _this.router.navigateByUrl(redirect);
                }, _this.redirectDelay);
            }
        });
    };
    NbRequestPasswordComponent.prototype.getConfigValue = function (key) {
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getDeepFromObject"])(this.config, key, null);
    };
    NbRequestPasswordComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'nb-request-password-page',
                    styles: [":host .links{display:flex;justify-content:space-between}:host .form-group:last-of-type{margin-bottom:3rem} "],
                    template: "\n    <nb-auth-block>\n      <h2 class=\"title\">Forgot Password</h2>\n      <small class=\"form-text sub-title\">Enter your email adress and we\u2019ll send a link to reset your password</small>\n      <form (ngSubmit)=\"requestPass()\" #requestPassForm=\"ngForm\">\n\n        <div *ngIf=\"showMessages.error && errors && errors.length > 0 && !submitted\"\n             class=\"alert alert-danger\" role=\"alert\">\n          <div><strong>Oh snap!</strong></div>\n          <div *ngFor=\"let error of errors\">{{ error }}</div>\n        </div>\n        <div *ngIf=\"showMessages.success && messages && messages.length > 0 && !submitted\"\n             class=\"alert alert-success\" role=\"alert\">\n          <div><strong>Hooray!</strong></div>\n          <div *ngFor=\"let message of messages\">{{ message }}</div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"input-email\" class=\"sr-only\">Enter your email address</label>\n          <input name=\"email\" [(ngModel)]=\"user.email\" id=\"input-email\" #email=\"ngModel\"\n                 class=\"form-control\" placeholder=\"Email address\" pattern=\".+@.+..+\"\n                 [class.form-control-danger]=\"email.invalid && email.touched\"\n                 [required]=\"getConfigValue('forms.validation.email.required')\"\n                 autofocus>\n          <small class=\"form-text error\" *ngIf=\"email.invalid && email.touched && email.errors?.required\">\n            Email is required!\n          </small>\n          <small class=\"form-text error\"\n                 *ngIf=\"email.invalid && email.touched && email.errors?.pattern\">\n            Email should be the real one!\n          </small>\n        </div>\n\n        <button [disabled]=\"submitted || !requestPassForm.form.valid\" class=\"btn btn-hero-success btn-block\"\n                [class.btn-pulse]=\"submitted\">\n          Request password\n        </button>\n      </form>\n\n      <div class=\"links col-sm-12\">\n        <small class=\"form-text\">\n          Already have an account? <a routerLink=\"../login\"><strong>Sign In</strong></a>\n        </small>\n        <small class=\"form-text\">\n          <a routerLink=\"../register\"><strong>Sign Up</strong></a>\n        </small>\n      </div>\n    </nb-auth-block>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbRequestPasswordComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["NbAuthService"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_auth_options__WEBPACK_IMPORTED_MODULE_2__["NB_AUTH_OPTIONS"],] },] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], },
    ]; };
    return NbRequestPasswordComponent;
}());

//# sourceMappingURL=request-password.component.js.map

/***/ }),

/***/ "./src/app/@nebular/auth/components/reset-password/reset-password.component.js":
/*!*************************************************************************************!*\
  !*** ./src/app/@nebular/auth/components/reset-password/reset-password.component.js ***!
  \*************************************************************************************/
/*! exports provided: NbResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbResetPasswordComponent", function() { return NbResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth.options */ "./src/app/@nebular/auth/auth.options.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers */ "./src/app/@nebular/auth/helpers.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/@nebular/auth/services/auth.service.js");





var NbResetPasswordComponent = /** @class */ (function () {
    function NbResetPasswordComponent(service, config, router) {
        if (config === void 0) { config = {}; }
        this.service = service;
        this.config = config;
        this.router = router;
        this.redirectDelay = 0;
        this.showMessages = {};
        this.provider = '';
        this.submitted = false;
        this.errors = [];
        this.messages = [];
        this.user = {};
        this.redirectDelay = this.getConfigValue('forms.resetPassword.redirectDelay');
        this.showMessages = this.getConfigValue('forms.resetPassword.showMessages');
        this.provider = this.getConfigValue('forms.resetPassword.provider');
    }
    NbResetPasswordComponent.prototype.resetPass = function () {
        var _this = this;
        this.errors = this.messages = [];
        this.submitted = true;
        this.service.resetPassword(this.provider, this.user).subscribe(function (result) {
            _this.submitted = false;
            if (result.isSuccess()) {
                _this.messages = result.getMessages();
            }
            else {
                _this.errors = result.getErrors();
            }
            var redirect = result.getRedirect();
            if (redirect) {
                setTimeout(function () {
                    return _this.router.navigateByUrl(redirect);
                }, _this.redirectDelay);
            }
        });
    };
    NbResetPasswordComponent.prototype.getConfigValue = function (key) {
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getDeepFromObject"])(this.config, key, null);
    };
    NbResetPasswordComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'nb-reset-password-page',
                    styles: [":host .links{display:flex;justify-content:space-between}:host .form-group:last-of-type{margin-bottom:3rem} "],
                    template: "\n    <nb-auth-block>\n      <h2 class=\"title\">Change password</h2>\n      <small class=\"form-text sub-title\">Please enter a new password</small>\n      <form (ngSubmit)=\"resetPass()\" #resetPassForm=\"ngForm\">\n\n        <div *ngIf=\"errors && errors.length > 0 && !submitted\" class=\"alert alert-danger\" role=\"alert\">\n          <div><strong>Oh snap!</strong></div>\n          <div *ngFor=\"let error of errors\">{{ error }}</div>\n        </div>\n        <div *ngIf=\"messages && messages.length > 0 && !submitted\" class=\"alert alert-success\" role=\"alert\">\n          <div><strong>Hooray!</strong></div>\n          <div *ngFor=\"let message of messages\">{{ message }}</div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"input-password\" class=\"sr-only\">New Password</label>\n          <input name=\"password\" [(ngModel)]=\"user.password\" type=\"password\" id=\"input-password\"\n                 class=\"form-control form-control-lg first\" placeholder=\"New Password\" #password=\"ngModel\"\n                 [class.form-control-danger]=\"password.invalid && password.touched\"\n                 [required]=\"getConfigValue('forms.validation.password.required')\"\n                 [minlength]=\"getConfigValue('forms.validation.password.minLength')\"\n                 [maxlength]=\"getConfigValue('forms.validation.password.maxLength')\"\n                 autofocus>\n          <small class=\"form-text error\" *ngIf=\"password.invalid && password.touched && password.errors?.required\">\n            Password is required!\n          </small>\n          <small\n            class=\"form-text error\"\n            *ngIf=\"password.invalid && password.touched && (password.errors?.minlength || password.errors?.maxlength)\">\n            Password should contains\n            from {{getConfigValue('forms.validation.password.minLength')}}\n            to {{getConfigValue('forms.validation.password.maxLength')}}\n            characters\n          </small>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"input-re-password\" class=\"sr-only\">Confirm Password</label>\n          <input\n            name=\"rePass\" [(ngModel)]=\"user.confirmPassword\" type=\"password\" id=\"input-re-password\"\n            class=\"form-control form-control-lg last\" placeholder=\"Confirm Password\" #rePass=\"ngModel\"\n            [class.form-control-danger]=\"(rePass.invalid || password.value != rePass.value) && rePass.touched\"\n            [required]=\"getConfigValue('forms.validation.password.required')\">\n          <small class=\"form-text error\"\n                 *ngIf=\"rePass.invalid && rePass.touched && rePass.errors?.required\">\n            Password confirmation is required!\n          </small>\n          <small\n            class=\"form-text error\"\n            *ngIf=\"rePass.touched && password.value != rePass.value && !rePass.errors?.required\">\n            Password does not match the confirm password.\n          </small>\n        </div>\n\n        <button [disabled]=\"submitted || !resetPassForm.form.valid\" class=\"btn btn-hero-success btn-block\"\n                [class.btn-pulse]=\"submitted\">\n          Change password\n        </button>\n      </form>\n\n      <div class=\"links col-sm-12\">\n        <small class=\"form-text\">\n          Already have an account? <a routerLink=\"../login\"><strong>Sign In</strong></a>\n        </small>\n        <small class=\"form-text\">\n          <a routerLink=\"../register\"><strong>Sign Up</strong></a>\n        </small>\n      </div>\n    </nb-auth-block>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbResetPasswordComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["NbAuthService"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_auth_options__WEBPACK_IMPORTED_MODULE_2__["NB_AUTH_OPTIONS"],] },] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], },
    ]; };
    return NbResetPasswordComponent;
}());

//# sourceMappingURL=reset-password.component.js.map

/***/ }),

/***/ "./src/app/@nebular/auth/helpers.js":
/*!******************************************!*\
  !*** ./src/app/@nebular/auth/helpers.js ***!
  \******************************************/
/*! exports provided: deepExtend, getDeepFromObject, urlBase64Decode, b64decode, b64DecodeUnicode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepExtend", function() { return deepExtend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDeepFromObject", function() { return getDeepFromObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlBase64Decode", function() { return urlBase64Decode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b64decode", function() { return b64decode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b64DecodeUnicode", function() { return b64DecodeUnicode; });
/**
 * Extending object that entered in first argument.
 *
 * Returns extended object or false if have no target object or incorrect type.
 *
 * If you wish to clone source object (without modify it), just use empty new
 * object as first argument, like this:
 *   deepExtend({}, yourObj_1, [yourObj_N]);
 */
var deepExtend = function () {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
    }
    if (arguments.length < 1 || typeof arguments[0] !== 'object') {
        return false;
    }
    if (arguments.length < 2) {
        return arguments[0];
    }
    var target = arguments[0];
    // convert arguments to array and cut off target object
    var args = Array.prototype.slice.call(arguments, 1);
    var val, src;
    args.forEach(function (obj) {
        // skip argument if it is array or isn't object
        if (typeof obj !== 'object' || Array.isArray(obj)) {
            return;
        }
        Object.keys(obj).forEach(function (key) {
            src = target[key]; // source value
            val = obj[key]; // new value
            // recursion prevention
            if (val === target) {
                return;
                /**
                         * if new value isn't object then just overwrite by new value
                         * instead of extending.
                         */
            }
            else if (typeof val !== 'object' || val === null) {
                target[key] = val;
                return;
                // just clone arrays (and recursive clone objects inside)
            }
            else if (Array.isArray(val)) {
                target[key] = deepCloneArray(val);
                return;
                // custom cloning and overwrite for specific objects
            }
            else if (isSpecificValue(val)) {
                target[key] = cloneSpecificValue(val);
                return;
                // overwrite by new value if source isn't object or array
            }
            else if (typeof src !== 'object' || src === null || Array.isArray(src)) {
                target[key] = deepExtend({}, val);
                return;
                // source value and new value is objects both, extending...
            }
            else {
                target[key] = deepExtend(src, val);
                return;
            }
        });
    });
    return target;
};
function isSpecificValue(val) {
    return (val instanceof Date
        || val instanceof RegExp) ? true : false;
}
function cloneSpecificValue(val) {
    if (val instanceof Date) {
        return new Date(val.getTime());
    }
    else if (val instanceof RegExp) {
        return new RegExp(val);
    }
    else {
        throw new Error('cloneSpecificValue: Unexpected situation');
    }
}
/**
 * Recursive cloning array.
 */
function deepCloneArray(arr) {
    var clone = [];
    arr.forEach(function (item, index) {
        if (typeof item === 'object' && item !== null) {
            if (Array.isArray(item)) {
                clone[index] = deepCloneArray(item);
            }
            else if (isSpecificValue(item)) {
                clone[index] = cloneSpecificValue(item);
            }
            else {
                clone[index] = deepExtend({}, item);
            }
        }
        else {
            clone[index] = item;
        }
    });
    return clone;
}
// getDeepFromObject({result: {data: 1}}, 'result.data', 2); // returns 1
function getDeepFromObject(object, name, defaultValue) {
    if (object === void 0) { object = {}; }
    var keys = name.split('.');
    // clone the object
    var level = deepExtend({}, object || {});
    keys.forEach(function (k) {
        if (level && typeof level[k] !== 'undefined') {
            level = level[k];
        }
        else {
            level = undefined;
        }
    });
    return typeof level === 'undefined' ? defaultValue : level;
}
function urlBase64Decode(str) {
    var output = str.replace(/-/g, '+').replace(/_/g, '/');
    switch (output.length % 4) {
        case 0: {
            break;
        }
        case 2: {
            output += '==';
            break;
        }
        case 3: {
            output += '=';
            break;
        }
        default: {
            throw new Error('Illegal base64url string!');
        }
    }
    return b64DecodeUnicode(output);
}
function b64decode(str) {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var output = '';
    str = String(str).replace(/=+$/, '');
    if (str.length % 4 === 1) {
        throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
    }
    for (
    // initialize result and counters
    var bc = 0, bs = void 0, buffer = void 0, idx = 0; 
    // get next character
    buffer = str.charAt(idx++); 
    // character found in table? initialize bit storage and add its ascii value;
    ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
        // and if not first of each 4 characters,
        // convert the first 8 bits to one ascii character
        bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {
        // try to find character in table (0-63, not found => -1)
        buffer = chars.indexOf(buffer);
    }
    return output;
}
// https://developer.mozilla.org/en/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
function b64DecodeUnicode(str) {
    return decodeURIComponent(Array.prototype.map.call(b64decode(str), function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "./src/app/@nebular/auth/index.js":
/*!****************************************!*\
  !*** ./src/app/@nebular/auth/index.js ***!
  \****************************************/
/*! exports provided: defaultSettings, NB_AUTH_OPTIONS, NB_AUTH_USER_OPTIONS, NB_AUTH_PROVIDERS, NB_AUTH_TOKEN_CLASS, NB_AUTH_INTERCEPTOR_HEADER, nbAuthServiceFactory, nbOptionsFactory, NbAuthModule, NbAuthComponent, NbAuthBlockComponent, NbLoginComponent, NbLogoutComponent, NbRegisterComponent, NbRequestPasswordComponent, NbResetPasswordComponent, NbAuthService, NbAuthResult, NbAuthJWTInterceptor, NbAuthSimpleInterceptor, nbCreateToken, NbAuthSimpleToken, NbAuthJWTToken, NbTokenStorage, NbTokenLocalStorage, NbTokenService, NbAbstractAuthProvider, NbDummyAuthProvider, NbEmailPassAuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.options */ "./src/app/@nebular/auth/auth.options.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultSettings", function() { return _auth_options__WEBPACK_IMPORTED_MODULE_0__["defaultSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NB_AUTH_OPTIONS", function() { return _auth_options__WEBPACK_IMPORTED_MODULE_0__["NB_AUTH_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NB_AUTH_USER_OPTIONS", function() { return _auth_options__WEBPACK_IMPORTED_MODULE_0__["NB_AUTH_USER_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NB_AUTH_PROVIDERS", function() { return _auth_options__WEBPACK_IMPORTED_MODULE_0__["NB_AUTH_PROVIDERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NB_AUTH_TOKEN_CLASS", function() { return _auth_options__WEBPACK_IMPORTED_MODULE_0__["NB_AUTH_TOKEN_CLASS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NB_AUTH_INTERCEPTOR_HEADER", function() { return _auth_options__WEBPACK_IMPORTED_MODULE_0__["NB_AUTH_INTERCEPTOR_HEADER"]; });

/* harmony import */ var _auth_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.module */ "./src/app/@nebular/auth/auth.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nbAuthServiceFactory", function() { return _auth_module__WEBPACK_IMPORTED_MODULE_1__["nbAuthServiceFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nbOptionsFactory", function() { return _auth_module__WEBPACK_IMPORTED_MODULE_1__["nbOptionsFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbAuthModule", function() { return _auth_module__WEBPACK_IMPORTED_MODULE_1__["NbAuthModule"]; });

/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./src/app/@nebular/auth/components/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbAuthComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["NbAuthComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbAuthBlockComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["NbAuthBlockComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbLoginComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["NbLoginComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbLogoutComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["NbLogoutComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbRegisterComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["NbRegisterComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbRequestPasswordComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["NbRequestPasswordComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbResetPasswordComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["NbResetPasswordComponent"]; });

/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services */ "./src/app/@nebular/auth/services/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbAuthService", function() { return _services__WEBPACK_IMPORTED_MODULE_3__["NbAuthService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbAuthResult", function() { return _services__WEBPACK_IMPORTED_MODULE_3__["NbAuthResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbAuthJWTInterceptor", function() { return _services__WEBPACK_IMPORTED_MODULE_3__["NbAuthJWTInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbAuthSimpleInterceptor", function() { return _services__WEBPACK_IMPORTED_MODULE_3__["NbAuthSimpleInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nbCreateToken", function() { return _services__WEBPACK_IMPORTED_MODULE_3__["nbCreateToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbAuthSimpleToken", function() { return _services__WEBPACK_IMPORTED_MODULE_3__["NbAuthSimpleToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbAuthJWTToken", function() { return _services__WEBPACK_IMPORTED_MODULE_3__["NbAuthJWTToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbTokenStorage", function() { return _services__WEBPACK_IMPORTED_MODULE_3__["NbTokenStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbTokenLocalStorage", function() { return _services__WEBPACK_IMPORTED_MODULE_3__["NbTokenLocalStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbTokenService", function() { return _services__WEBPACK_IMPORTED_MODULE_3__["NbTokenService"]; });

/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./providers */ "./src/app/@nebular/auth/providers/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbAbstractAuthProvider", function() { return _providers__WEBPACK_IMPORTED_MODULE_4__["NbAbstractAuthProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbDummyAuthProvider", function() { return _providers__WEBPACK_IMPORTED_MODULE_4__["NbDummyAuthProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbEmailPassAuthProvider", function() { return _providers__WEBPACK_IMPORTED_MODULE_4__["NbEmailPassAuthProvider"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/@nebular/auth/providers/abstract-auth.provider.js":
/*!*******************************************************************!*\
  !*** ./src/app/@nebular/auth/providers/abstract-auth.provider.js ***!
  \*******************************************************************/
/*! exports provided: NbAbstractAuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbAbstractAuthProvider", function() { return NbAbstractAuthProvider; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/app/@nebular/auth/helpers.js");


var NbAbstractAuthProvider = /** @class */ (function () {
    function NbAbstractAuthProvider() {
        this.defaultConfig = {};
        this.config = {};
    }
    NbAbstractAuthProvider.prototype.setConfig = function (config) {
        this.config = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["deepExtend"])({}, this.defaultConfig, config);
    };
    NbAbstractAuthProvider.prototype.getConfigValue = function (key) {
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["getDeepFromObject"])(this.config, key, null);
    };
    NbAbstractAuthProvider.prototype.createFailResponse = function (data) {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({ body: {}, status: 401 });
    };
    NbAbstractAuthProvider.prototype.createSuccessResponse = function (data) {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({ body: {}, status: 200 });
    };
    NbAbstractAuthProvider.prototype.getJsonSafe = function (res) {
        return res.body;
    };
    return NbAbstractAuthProvider;
}());

//# sourceMappingURL=abstract-auth.provider.js.map

/***/ }),

/***/ "./src/app/@nebular/auth/providers/dummy-auth.provider.js":
/*!****************************************************************!*\
  !*** ./src/app/@nebular/auth/providers/dummy-auth.provider.js ***!
  \****************************************************************/
/*! exports provided: NbDummyAuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbDummyAuthProvider", function() { return NbDummyAuthProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _abstract_auth_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abstract-auth.provider */ "./src/app/@nebular/auth/providers/abstract-auth.provider.js");
/* harmony import */ var _services_auth_result__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth-result */ "./src/app/@nebular/auth/services/auth-result.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var NbDummyAuthProvider = /** @class */ (function (_super) {
    __extends(NbDummyAuthProvider, _super);
    function NbDummyAuthProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultConfig = {
            delay: 1000,
        };
        return _this;
    }
    NbDummyAuthProvider.prototype.authenticate = function (data) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.createDummyResult(data))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(this.getConfigValue('delay')));
    };
    NbDummyAuthProvider.prototype.register = function (data) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.createDummyResult(data))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(this.getConfigValue('delay')));
    };
    NbDummyAuthProvider.prototype.requestPassword = function (data) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.createDummyResult(data))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(this.getConfigValue('delay')));
    };
    NbDummyAuthProvider.prototype.resetPassword = function (data) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.createDummyResult(data))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(this.getConfigValue('delay')));
    };
    NbDummyAuthProvider.prototype.logout = function (data) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.createDummyResult(data))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(this.getConfigValue('delay')));
    };
    NbDummyAuthProvider.prototype.refreshToken = function (data) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.createDummyResult(data))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(this.getConfigValue('delay')));
    };
    NbDummyAuthProvider.prototype.createDummyResult = function (data) {
        if (this.getConfigValue('alwaysFail')) {
            // TODO we dont call tokenService clear during logout in case result is not success
            return new _services_auth_result__WEBPACK_IMPORTED_MODULE_4__["NbAuthResult"](false, this.createFailResponse(data), null, ['Something went wrong.']);
        }
        // TODO is it missed messages here, is it token should be defined
        return new _services_auth_result__WEBPACK_IMPORTED_MODULE_4__["NbAuthResult"](true, this.createSuccessResponse(data), '/', ['Successfully logged in.']);
    };
    NbDummyAuthProvider.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return NbDummyAuthProvider;
}(_abstract_auth_provider__WEBPACK_IMPORTED_MODULE_3__["NbAbstractAuthProvider"]));

//# sourceMappingURL=dummy-auth.provider.js.map

/***/ }),

/***/ "./src/app/@nebular/auth/providers/email-pass-auth.provider.js":
/*!*********************************************************************!*\
  !*** ./src/app/@nebular/auth/providers/email-pass-auth.provider.js ***!
  \*********************************************************************/
/*! exports provided: NbEmailPassAuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbEmailPassAuthProvider", function() { return NbEmailPassAuthProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_result__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth-result */ "./src/app/@nebular/auth/services/auth-result.js");
/* harmony import */ var _abstract_auth_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./abstract-auth.provider */ "./src/app/@nebular/auth/providers/abstract-auth.provider.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers */ "./src/app/@nebular/auth/helpers.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








/**
 * The most common authentication provider for email/password strategy.
 *
 *
 * @example
 *
 * Default settings object:
 *
 * ```
 * {
 *  baseEndpoint: '',
 *  login: {
 *    alwaysFail: false,
 *    rememberMe: true,
 *    endpoint: '/api/auth/login',
 *    method: 'post',
 *    redirect: {
 *      success: '/',
 *      failure: null,
 *    },
 *    defaultErrors: ['Login/Email combination is not correct, please try again.'],
 *    defaultMessages: ['You have been successfully logged in.'],
 *  },
 *  register: {
 *    alwaysFail: false,
 *    rememberMe: true,
 *    endpoint: '/api/auth/register',
 *    method: 'post',
 *    redirect: {
 *      success: '/',
 *      failure: null,
 *    },
 *    defaultErrors: ['Something went wrong, please try again.'],
 *    defaultMessages: ['You have been successfully registered.'],
 *  },
 *  logout: {
 *    alwaysFail: false,
 *    endpoint: '/api/auth/logout',
 *    method: 'delete',
 *    redirect: {
 *      success: '/',
 *      failure: null,
 *    },
 *    defaultErrors: ['Something went wrong, please try again.'],
 *    defaultMessages: ['You have been successfully logged out.'],
 *  },
 *  requestPass: {
 *    endpoint: '/api/auth/request-pass',
 *    method: 'post',
 *    redirect: {
 *      success: '/',
 *      failure: null,
 *    },
 *    defaultErrors: ['Something went wrong, please try again.'],
 *    defaultMessages: ['Reset password instructions have been sent to your email.'],
 *  },
 *  resetPass: {
 *    endpoint: '/api/auth/reset-pass',
 *    method: 'put',
 *    redirect: {
 *      success: '/',
 *      failure: null,
 *    },
 *    resetPasswordTokenKey: 'reset_password_token',
 *    defaultErrors: ['Something went wrong, please try again.'],
 *    defaultMessages: ['Your password has been successfully changed.'],
 *  },
 *  refreshToken: {
 *    endpoint: '/api/auth/refresh-token',
 *    method: 'post',
 *    redirect: {
 *      success: null,
 *      failure: null,
 *    },
 *    defaultErrors: ['Something went wrong, please try again.'],
 *    defaultMessages: ['Your token has been successfully refreshed.'],
 *  },
 *  token: {
 *    key: 'data.token',
 *    getter: (module: string, res: HttpResponse<Object>) => getDeepFromObject(res.body,
 *      this.getConfigValue('token.key')),
 *  },
 *  errors: {
 *    key: 'data.errors',
 *    getter: (module: string, res: HttpErrorResponse) => getDeepFromObject(res.error,
 *      this.getConfigValue('errors.key'),
 *      this.getConfigValue(`${module}.defaultErrors`)),
 *  },
 *  messages: {
 *    key: 'data.messages',
 *    getter: (module: string, res: HttpResponse<Object>) => getDeepFromObject(res.body,
 *      this.getConfigValue('messages.key'),
 *      this.getConfigValue(`${module}.defaultMessages`)),
 *  },
 *}
 *
 * // Note, there is no need to copy over the whole object to change the settings you need.
 * // Also, this.getConfigValue call won't work outside ofthe default config declaration
 * // (which is inside of the `NbEmailPassAuthProvider` class), so you have to replace it with a custom helper function
 * // if you need it.
 * ```
 */
var NbEmailPassAuthProvider = /** @class */ (function (_super) {
    __extends(NbEmailPassAuthProvider, _super);
    function NbEmailPassAuthProvider(http, route) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.route = route;
        _this.defaultConfig = {
            baseEndpoint: '/api/auth/',
            login: {
                alwaysFail: false,
                rememberMe: true,
                // TODO: what does that mean?
                endpoint: 'login',
                method: 'post',
                redirect: {
                    success: '/',
                    failure: null,
                },
                defaultErrors: ['Login/Email combination is not correct, please try again.'],
                defaultMessages: ['You have been successfully logged in.'],
            },
            register: {
                alwaysFail: false,
                rememberMe: true,
                endpoint: 'register',
                method: 'post',
                redirect: {
                    success: '/',
                    failure: null,
                },
                defaultErrors: ['Something went wrong, please try again.'],
                defaultMessages: ['You have been successfully registered.'],
            },
            logout: {
                alwaysFail: false,
                endpoint: 'logout',
                method: 'delete',
                redirect: {
                    success: '/',
                    failure: null,
                },
                defaultErrors: ['Something went wrong, please try again.'],
                defaultMessages: ['You have been successfully logged out.'],
            },
            requestPass: {
                endpoint: 'request-pass',
                method: 'post',
                redirect: {
                    success: '/',
                    failure: null,
                },
                defaultErrors: ['Something went wrong, please try again.'],
                defaultMessages: ['Reset password instructions have been sent to your email.'],
            },
            resetPass: {
                endpoint: 'reset-pass',
                method: 'put',
                redirect: {
                    success: '/',
                    failure: null,
                },
                resetPasswordTokenKey: 'reset_password_token',
                defaultErrors: ['Something went wrong, please try again.'],
                defaultMessages: ['Your password has been successfully changed.'],
            },
            refreshToken: {
                endpoint: 'refresh-token',
                method: 'post',
                redirect: {
                    success: null,
                    failure: null,
                },
                defaultErrors: ['Something went wrong, please try again.'],
                defaultMessages: ['Your token has been successfully refreshed.'],
            },
            token: {
                key: 'data.token',
                getter: function (module, res) {
                    return Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["getDeepFromObject"])(res.body, _this.getConfigValue('token.key'));
                },
            },
            errors: {
                key: 'data.errors',
                getter: function (module, res) {
                    return Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["getDeepFromObject"])(res.error, _this.getConfigValue('errors.key'), _this.getConfigValue(module + ".defaultErrors"));
                },
            },
            messages: {
                key: 'data.messages',
                getter: function (module, res) {
                    return Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["getDeepFromObject"])(res.body, _this.getConfigValue('messages.key'), _this.getConfigValue(module + ".defaultMessages"));
                },
            },
        };
        return _this;
    }
    NbEmailPassAuthProvider.prototype.authenticate = function (data) {
        var _this = this;
        var method = this.getConfigValue('login.method');
        var url = this.getActionEndpoint('login');
        return this.http.request(method, url, { body: data, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            if (_this.getConfigValue('login.alwaysFail')) {
                throw _this.createFailResponse(data);
            }
            return res;
        }), this.validateToken('login'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return new _services_auth_result__WEBPACK_IMPORTED_MODULE_5__["NbAuthResult"](true, res, _this.getConfigValue('login.redirect.success'), [], _this.getConfigValue('messages.getter')('login', res), _this.getConfigValue('token.getter')('login', res));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (res) {
            var errors = [];
            if (res instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                errors = _this.getConfigValue('errors.getter')('login', res);
            }
            else {
                errors.push('Something went wrong.');
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _services_auth_result__WEBPACK_IMPORTED_MODULE_5__["NbAuthResult"](false, res, _this.getConfigValue('login.redirect.failure'), errors));
        }));
    };
    NbEmailPassAuthProvider.prototype.register = function (data) {
        var _this = this;
        var method = this.getConfigValue('register.method');
        var url = this.getActionEndpoint('register');
        return this.http.request(method, url, { body: data, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            if (_this.getConfigValue('register.alwaysFail')) {
                throw _this.createFailResponse(data);
            }
            return res;
        }), this.validateToken('register'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return new _services_auth_result__WEBPACK_IMPORTED_MODULE_5__["NbAuthResult"](true, res, _this.getConfigValue('register.redirect.success'), [], _this.getConfigValue('messages.getter')('register', res), _this.getConfigValue('token.getter')('register', res));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (res) {
            var errors = [];
            if (res instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                errors = _this.getConfigValue('errors.getter')('register', res);
            }
            else {
                errors.push('Something went wrong.');
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _services_auth_result__WEBPACK_IMPORTED_MODULE_5__["NbAuthResult"](false, res, _this.getConfigValue('register.redirect.failure'), errors));
        }));
    };
    NbEmailPassAuthProvider.prototype.requestPassword = function (data) {
        var _this = this;
        var method = this.getConfigValue('requestPass.method');
        var url = this.getActionEndpoint('requestPass');
        return this.http.request(method, url, { body: data, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            if (_this.getConfigValue('requestPass.alwaysFail')) {
                throw _this.createFailResponse();
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return new _services_auth_result__WEBPACK_IMPORTED_MODULE_5__["NbAuthResult"](true, res, _this.getConfigValue('requestPass.redirect.success'), [], _this.getConfigValue('messages.getter')('requestPass', res));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (res) {
            var errors = [];
            if (res instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                errors = _this.getConfigValue('errors.getter')('requestPass', res);
            }
            else {
                errors.push('Something went wrong.');
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _services_auth_result__WEBPACK_IMPORTED_MODULE_5__["NbAuthResult"](false, res, _this.getConfigValue('requestPass.redirect.failure'), errors));
        }));
    };
    NbEmailPassAuthProvider.prototype.resetPassword = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        var tokenKey = this.getConfigValue('resetPass.resetPasswordTokenKey');
        data[tokenKey] = this.route.snapshot.queryParams[tokenKey];
        var method = this.getConfigValue('resetPass.method');
        var url = this.getActionEndpoint('resetPass');
        return this.http.request(method, url, { body: data, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            if (_this.getConfigValue('resetPass.alwaysFail')) {
                throw _this.createFailResponse();
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return new _services_auth_result__WEBPACK_IMPORTED_MODULE_5__["NbAuthResult"](true, res, _this.getConfigValue('resetPass.redirect.success'), [], _this.getConfigValue('messages.getter')('resetPass', res));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (res) {
            var errors = [];
            if (res instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                errors = _this.getConfigValue('errors.getter')('resetPass', res);
            }
            else {
                errors.push('Something went wrong.');
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _services_auth_result__WEBPACK_IMPORTED_MODULE_5__["NbAuthResult"](false, res, _this.getConfigValue('resetPass.redirect.failure'), errors));
        }));
    };
    NbEmailPassAuthProvider.prototype.logout = function () {
        var _this = this;
        var method = this.getConfigValue('logout.method');
        var url = this.getActionEndpoint('logout');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (res) {
            if (!url) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(res);
            }
            return _this.http.request(method, url, { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            if (_this.getConfigValue('logout.alwaysFail')) {
                throw _this.createFailResponse();
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return new _services_auth_result__WEBPACK_IMPORTED_MODULE_5__["NbAuthResult"](true, res, _this.getConfigValue('logout.redirect.success'), [], _this.getConfigValue('messages.getter')('logout', res));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (res) {
            var errors = [];
            if (res instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                errors = _this.getConfigValue('errors.getter')('logout', res);
            }
            else {
                errors.push('Something went wrong.');
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _services_auth_result__WEBPACK_IMPORTED_MODULE_5__["NbAuthResult"](false, res, _this.getConfigValue('logout.redirect.failure'), errors));
        }));
    };
    NbEmailPassAuthProvider.prototype.refreshToken = function (data) {
        var _this = this;
        var method = this.getConfigValue('refreshToken.method');
        var url = this.getActionEndpoint('refreshToken');
        return this.http.request(method, url, { body: data, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            if (_this.getConfigValue('refreshToken.alwaysFail')) {
                throw _this.createFailResponse(data);
            }
            return res;
        }), this.validateToken('refreshToken'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return new _services_auth_result__WEBPACK_IMPORTED_MODULE_5__["NbAuthResult"](true, res, _this.getConfigValue('refreshToken.redirect.success'), [], _this.getConfigValue('messages.getter')('refreshToken', res), _this.getConfigValue('token.getter')('refreshToken', res));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (res) {
            var errors = [];
            if (res instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                errors = _this.getConfigValue('errors.getter')('refreshToken', res);
            }
            else {
                errors.push('Something went wrong.');
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _services_auth_result__WEBPACK_IMPORTED_MODULE_5__["NbAuthResult"](false, res, _this.getConfigValue('refreshToken.redirect.failure'), errors));
        }));
    };
    NbEmailPassAuthProvider.prototype.validateToken = function (module) {
        var _this = this;
        return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            var token = _this.getConfigValue('token.getter')(module, res);
            if (!token) {
                var key = _this.getConfigValue('token.key');
                console.warn("NbEmailPassAuthProvider:\n                          Token is not provided under '" + key + "' key\n                          with getter '" + _this.getConfigValue('token.getter') + "', check your auth configuration.");
                throw new Error('Could not extract token from the response.');
            }
            return res;
        });
    };
    NbEmailPassAuthProvider.prototype.getActionEndpoint = function (action) {
        var actionEndpoint = this.getConfigValue(action + ".endpoint");
        var baseEndpoint = this.getConfigValue('baseEndpoint');
        return baseEndpoint + actionEndpoint;
    };
    NbEmailPassAuthProvider.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NbEmailPassAuthProvider.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], },
    ]; };
    return NbEmailPassAuthProvider;
}(_abstract_auth_provider__WEBPACK_IMPORTED_MODULE_6__["NbAbstractAuthProvider"]));

//# sourceMappingURL=email-pass-auth.provider.js.map

/***/ }),

/***/ "./src/app/@nebular/auth/providers/index.js":
/*!**************************************************!*\
  !*** ./src/app/@nebular/auth/providers/index.js ***!
  \**************************************************/
/*! exports provided: NbAbstractAuthProvider, NbDummyAuthProvider, NbEmailPassAuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _abstract_auth_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-auth.provider */ "./src/app/@nebular/auth/providers/abstract-auth.provider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbAbstractAuthProvider", function() { return _abstract_auth_provider__WEBPACK_IMPORTED_MODULE_0__["NbAbstractAuthProvider"]; });

/* harmony import */ var _dummy_auth_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dummy-auth.provider */ "./src/app/@nebular/auth/providers/dummy-auth.provider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbDummyAuthProvider", function() { return _dummy_auth_provider__WEBPACK_IMPORTED_MODULE_1__["NbDummyAuthProvider"]; });

/* harmony import */ var _email_pass_auth_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email-pass-auth.provider */ "./src/app/@nebular/auth/providers/email-pass-auth.provider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbEmailPassAuthProvider", function() { return _email_pass_auth_provider__WEBPACK_IMPORTED_MODULE_2__["NbEmailPassAuthProvider"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/@nebular/auth/services/auth-result.js":
/*!*******************************************************!*\
  !*** ./src/app/@nebular/auth/services/auth-result.js ***!
  \*******************************************************/
/*! exports provided: NbAuthResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbAuthResult", function() { return NbAuthResult; });
var NbAuthResult = /** @class */ (function () {
    function NbAuthResult(success, response, redirect, errors, messages, rawToken) {
        this.success = success;
        this.response = response;
        this.redirect = redirect;
        this.errors = [];
        this.messages = [];
        this.errors = this.errors.concat([errors]);
        if (errors instanceof Array) {
            this.errors = errors;
        }
        this.messages = this.messages.concat([messages]);
        if (messages instanceof Array) {
            this.messages = messages;
        }
        this.rawToken = rawToken;
    }
    NbAuthResult.prototype.setToken = function (token) {
        this.token = token;
        this.rawToken = token.toString();
    };
    NbAuthResult.prototype.getResponse = function () {
        return this.response;
    };
    NbAuthResult.prototype.getRawToken = function () {
        return this.rawToken;
    };
    NbAuthResult.prototype.getToken = function () {
        return this.token;
    };
    NbAuthResult.prototype.getRedirect = function () {
        return this.redirect;
    };
    NbAuthResult.prototype.getErrors = function () {
        return this.errors.filter(function (val) { return !!val; });
    };
    NbAuthResult.prototype.getMessages = function () {
        return this.messages.filter(function (val) { return !!val; });
    };
    NbAuthResult.prototype.isSuccess = function () {
        return this.success;
    };
    NbAuthResult.prototype.isFailure = function () {
        return !this.success;
    };
    return NbAuthResult;
}());

//# sourceMappingURL=auth-result.js.map

/***/ }),

/***/ "./src/app/@nebular/auth/services/auth.service.js":
/*!********************************************************!*\
  !*** ./src/app/@nebular/auth/services/auth.service.js ***!
  \********************************************************/
/*! exports provided: NbAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbAuthService", function() { return NbAuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.options */ "./src/app/@nebular/auth/auth.options.js");
/* harmony import */ var _token_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./token/token.service */ "./src/app/@nebular/auth/services/token/token.service.js");





/**
 * Common authentication service.
 * Should be used to as an interlayer between UI Components and Auth Providers.
 */
var NbAuthService = /** @class */ (function () {
    function NbAuthService(tokenService, injector, providers) {
        if (providers === void 0) { providers = {}; }
        this.tokenService = tokenService;
        this.injector = injector;
        this.providers = providers;
    }
    /**
     * Retrieves current authenticated token stored
     * @returns {Observable<any>}
     */
    /**
       * Retrieves current authenticated token stored
       * @returns {Observable<any>}
       */
    NbAuthService.prototype.getToken = /**
       * Retrieves current authenticated token stored
       * @returns {Observable<any>}
       */
    function () {
        return this.tokenService.get();
    };
    /**
     * Returns true if auth token is presented in the token storage
     * @returns {Observable<any>}
     */
    /**
       * Returns true if auth token is presented in the token storage
       * @returns {Observable<any>}
       */
    NbAuthService.prototype.isAuthenticated = /**
       * Returns true if auth token is presented in the token storage
       * @returns {Observable<any>}
       */
    function () {
        return this.getToken()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (token) { return token.isValid(); }));
    };
    /**
     * Returns tokens stream
     * @returns {Observable<NbAuthSimpleToken>}
     */
    /**
       * Returns tokens stream
       * @returns {Observable<NbAuthSimpleToken>}
       */
    NbAuthService.prototype.onTokenChange = /**
       * Returns tokens stream
       * @returns {Observable<NbAuthSimpleToken>}
       */
    function () {
        return this.tokenService.tokenChange();
    };
    /**
     * Returns authentication status stream
     * @returns {Observable<boolean>}
     */
    /**
       * Returns authentication status stream
       * @returns {Observable<boolean>}
       */
    NbAuthService.prototype.onAuthenticationChange = /**
       * Returns authentication status stream
       * @returns {Observable<boolean>}
       */
    function () {
        return this.onTokenChange()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (token) { return token.isValid(); }));
    };
    /**
     * Authenticates with the selected provider
     * Stores received token in the token storage
     *
     * Example:
     * authenticate('email', {email: 'email@example.com', password: 'test'})
     *
     * @param provider
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    /**
       * Authenticates with the selected provider
       * Stores received token in the token storage
       *
       * Example:
       * authenticate('email', {email: 'email@example.com', password: 'test'})
       *
       * @param provider
       * @param data
       * @returns {Observable<NbAuthResult>}
       */
    NbAuthService.prototype.authenticate = /**
       * Authenticates with the selected provider
       * Stores received token in the token storage
       *
       * Example:
       * authenticate('email', {email: 'email@example.com', password: 'test'})
       *
       * @param provider
       * @param data
       * @returns {Observable<NbAuthResult>}
       */
    function (provider, data) {
        var _this = this;
        return this.getProvider(provider).authenticate(data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (result) {
            return _this.processResultToken(result);
        }));
    };
    /**
     * Registers with the selected provider
     * Stores received token in the token storage
     *
     * Example:
     * register('email', {email: 'email@example.com', name: 'Some Name', password: 'test'})
     *
     * @param provider
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    /**
       * Registers with the selected provider
       * Stores received token in the token storage
       *
       * Example:
       * register('email', {email: 'email@example.com', name: 'Some Name', password: 'test'})
       *
       * @param provider
       * @param data
       * @returns {Observable<NbAuthResult>}
       */
    NbAuthService.prototype.register = /**
       * Registers with the selected provider
       * Stores received token in the token storage
       *
       * Example:
       * register('email', {email: 'email@example.com', name: 'Some Name', password: 'test'})
       *
       * @param provider
       * @param data
       * @returns {Observable<NbAuthResult>}
       */
    function (provider, data) {
        var _this = this;
        return this.getProvider(provider).register(data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (result) {
            return _this.processResultToken(result);
        }));
    };
    /**
     * Sign outs with the selected provider
     * Removes token from the token storage
     *
     * Example:
     * logout('email')
     *
     * @param provider
     * @returns {Observable<NbAuthResult>}
     */
    /**
       * Sign outs with the selected provider
       * Removes token from the token storage
       *
       * Example:
       * logout('email')
       *
       * @param provider
       * @returns {Observable<NbAuthResult>}
       */
    NbAuthService.prototype.logout = /**
       * Sign outs with the selected provider
       * Removes token from the token storage
       *
       * Example:
       * logout('email')
       *
       * @param provider
       * @returns {Observable<NbAuthResult>}
       */
    function (provider) {
        var _this = this;
        return this.getProvider(provider).logout()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (result) {
            if (result.isSuccess()) {
                _this.tokenService.clear()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () { return result; }));
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        }));
    };
    /**
     * Sends forgot password request to the selected provider
     *
     * Example:
     * requestPassword('email', {email: 'email@example.com'})
     *
     * @param provider
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    /**
       * Sends forgot password request to the selected provider
       *
       * Example:
       * requestPassword('email', {email: 'email@example.com'})
       *
       * @param provider
       * @param data
       * @returns {Observable<NbAuthResult>}
       */
    NbAuthService.prototype.requestPassword = /**
       * Sends forgot password request to the selected provider
       *
       * Example:
       * requestPassword('email', {email: 'email@example.com'})
       *
       * @param provider
       * @param data
       * @returns {Observable<NbAuthResult>}
       */
    function (provider, data) {
        return this.getProvider(provider).requestPassword(data);
    };
    /**
     * Tries to reset password with the selected provider
     *
     * Example:
     * resetPassword('email', {newPassword: 'test'})
     *
     * @param provider
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    /**
       * Tries to reset password with the selected provider
       *
       * Example:
       * resetPassword('email', {newPassword: 'test'})
       *
       * @param provider
       * @param data
       * @returns {Observable<NbAuthResult>}
       */
    NbAuthService.prototype.resetPassword = /**
       * Tries to reset password with the selected provider
       *
       * Example:
       * resetPassword('email', {newPassword: 'test'})
       *
       * @param provider
       * @param data
       * @returns {Observable<NbAuthResult>}
       */
    function (provider, data) {
        return this.getProvider(provider).resetPassword(data);
    };
    /**
     * Sends a refresh token request
     * Stores received token in the token storage
     *
     * Example:
     * authenticate('email', {email: 'email@example.com', password: 'test'})
     *
     * @param {string} provider
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    /**
       * Sends a refresh token request
       * Stores received token in the token storage
       *
       * Example:
       * authenticate('email', {email: 'email@example.com', password: 'test'})
       *
       * @param {string} provider
       * @param data
       * @returns {Observable<NbAuthResult>}
       */
    NbAuthService.prototype.refreshToken = /**
       * Sends a refresh token request
       * Stores received token in the token storage
       *
       * Example:
       * authenticate('email', {email: 'email@example.com', password: 'test'})
       *
       * @param {string} provider
       * @param data
       * @returns {Observable<NbAuthResult>}
       */
    function (provider, data) {
        var _this = this;
        return this.getProvider(provider).refreshToken()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (result) {
            return _this.processResultToken(result);
        }));
    };
    /**
     * Gets the selected provider
     *
     * Example:
     * getProvider('email')
     *
     * @param {string} provider
     * @returns {NbAbstractAuthProvider}
     */
    /**
       * Gets the selected provider
       *
       * Example:
       * getProvider('email')
       *
       * @param {string} provider
       * @returns {NbAbstractAuthProvider}
       */
    NbAuthService.prototype.getProvider = /**
       * Gets the selected provider
       *
       * Example:
       * getProvider('email')
       *
       * @param {string} provider
       * @returns {NbAbstractAuthProvider}
       */
    function (provider) {
        if (!this.providers[provider]) {
            throw new TypeError("Nb auth provider '" + provider + "' is not registered");
        }
        return this.injector.get(this.providers[provider].service);
    };
    NbAuthService.prototype.processResultToken = function (result) {
        var _this = this;
        if (result.isSuccess() && result.getRawToken()) {
            return this.tokenService.setRaw(result.getRawToken())
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () { return _this.tokenService.get(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (token) {
                result.setToken(token);
                return result;
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
    };
    NbAuthService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NbAuthService.ctorParameters = function () { return [
        { type: _token_token_service__WEBPACK_IMPORTED_MODULE_4__["NbTokenService"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_auth_options__WEBPACK_IMPORTED_MODULE_3__["NB_AUTH_PROVIDERS"],] },] },
    ]; };
    return NbAuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "./src/app/@nebular/auth/services/index.js":
/*!*************************************************!*\
  !*** ./src/app/@nebular/auth/services/index.js ***!
  \*************************************************/
/*! exports provided: NbAuthService, NbAuthResult, NbAuthJWTInterceptor, NbAuthSimpleInterceptor, nbCreateToken, NbAuthSimpleToken, NbAuthJWTToken, NbTokenStorage, NbTokenLocalStorage, NbTokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "./src/app/@nebular/auth/services/auth.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbAuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_0__["NbAuthService"]; });

/* harmony import */ var _auth_result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-result */ "./src/app/@nebular/auth/services/auth-result.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbAuthResult", function() { return _auth_result__WEBPACK_IMPORTED_MODULE_1__["NbAuthResult"]; });

/* harmony import */ var _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interceptors/jwt-interceptor */ "./src/app/@nebular/auth/services/interceptors/jwt-interceptor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbAuthJWTInterceptor", function() { return _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__["NbAuthJWTInterceptor"]; });

/* harmony import */ var _interceptors_simple_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interceptors/simple-interceptor */ "./src/app/@nebular/auth/services/interceptors/simple-interceptor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbAuthSimpleInterceptor", function() { return _interceptors_simple_interceptor__WEBPACK_IMPORTED_MODULE_3__["NbAuthSimpleInterceptor"]; });

/* harmony import */ var _token_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./token/token */ "./src/app/@nebular/auth/services/token/token.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nbCreateToken", function() { return _token_token__WEBPACK_IMPORTED_MODULE_4__["nbCreateToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbAuthSimpleToken", function() { return _token_token__WEBPACK_IMPORTED_MODULE_4__["NbAuthSimpleToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbAuthJWTToken", function() { return _token_token__WEBPACK_IMPORTED_MODULE_4__["NbAuthJWTToken"]; });

/* harmony import */ var _token_token_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./token/token-storage */ "./src/app/@nebular/auth/services/token/token-storage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbTokenStorage", function() { return _token_token_storage__WEBPACK_IMPORTED_MODULE_5__["NbTokenStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbTokenLocalStorage", function() { return _token_token_storage__WEBPACK_IMPORTED_MODULE_5__["NbTokenLocalStorage"]; });

/* harmony import */ var _token_token_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./token/token.service */ "./src/app/@nebular/auth/services/token/token.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbTokenService", function() { return _token_token_service__WEBPACK_IMPORTED_MODULE_6__["NbTokenService"]; });








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/@nebular/auth/services/interceptors/jwt-interceptor.js":
/*!************************************************************************!*\
  !*** ./src/app/@nebular/auth/services/interceptors/jwt-interceptor.js ***!
  \************************************************************************/
/*! exports provided: NbAuthJWTInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbAuthJWTInterceptor", function() { return NbAuthJWTInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/@nebular/auth/services/auth.service.js");



var NbAuthJWTInterceptor = /** @class */ (function () {
    function NbAuthJWTInterceptor(injector) {
        this.injector = injector;
    }
    NbAuthJWTInterceptor.prototype.intercept = function (req, next) {
        return this.authService.getToken()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (token) {
            if (token.isValid()) {
                var JWT = "Bearer " + token.getValue();
                req = req.clone({
                    setHeaders: {
                        Authorization: JWT,
                    },
                });
            }
            return next.handle(req);
        }));
    };
    Object.defineProperty(NbAuthJWTInterceptor.prototype, "authService", {
        get: function () {
            return this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_2__["NbAuthService"]);
        },
        enumerable: true,
        configurable: true
    });
    NbAuthJWTInterceptor.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NbAuthJWTInterceptor.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], },
    ]; };
    return NbAuthJWTInterceptor;
}());

//# sourceMappingURL=jwt-interceptor.js.map

/***/ }),

/***/ "./src/app/@nebular/auth/services/interceptors/simple-interceptor.js":
/*!***************************************************************************!*\
  !*** ./src/app/@nebular/auth/services/interceptors/simple-interceptor.js ***!
  \***************************************************************************/
/*! exports provided: NbAuthSimpleInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbAuthSimpleInterceptor", function() { return NbAuthSimpleInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/@nebular/auth/services/auth.service.js");
/* harmony import */ var _auth_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth.options */ "./src/app/@nebular/auth/auth.options.js");




var NbAuthSimpleInterceptor = /** @class */ (function () {
    function NbAuthSimpleInterceptor(injector, headerName) {
        if (headerName === void 0) { headerName = 'Authorization'; }
        this.injector = injector;
        this.headerName = headerName;
    }
    NbAuthSimpleInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return this.authService.getToken()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (token) {
            if (token && token.getValue()) {
                req = req.clone({
                    setHeaders: (_a = {},
                        _a[_this.headerName] = token.getValue(),
                        _a),
                });
            }
            return next.handle(req);
            var _a;
        }));
    };
    Object.defineProperty(NbAuthSimpleInterceptor.prototype, "authService", {
        get: function () {
            return this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_2__["NbAuthService"]);
        },
        enumerable: true,
        configurable: true
    });
    NbAuthSimpleInterceptor.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NbAuthSimpleInterceptor.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_auth_options__WEBPACK_IMPORTED_MODULE_3__["NB_AUTH_INTERCEPTOR_HEADER"],] },] },
    ]; };
    return NbAuthSimpleInterceptor;
}());

//# sourceMappingURL=simple-interceptor.js.map

/***/ }),

/***/ "./src/app/@nebular/auth/services/token/token-storage.js":
/*!***************************************************************!*\
  !*** ./src/app/@nebular/auth/services/token/token-storage.js ***!
  \***************************************************************/
/*! exports provided: NbTokenStorage, NbTokenLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbTokenStorage", function() { return NbTokenStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbTokenLocalStorage", function() { return NbTokenLocalStorage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth.options */ "./src/app/@nebular/auth/auth.options.js");
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token */ "./src/app/@nebular/auth/services/token/token.js");



var NbTokenStorage = /** @class */ (function () {
    function NbTokenStorage() {
    }
    return NbTokenStorage;
}());

/**
 * Service that uses browser localStorage as a storage.
 *
 * The token storage is provided into auth module the following way:
 * ```
 * { provide: NbTokenStorage, useClass: NbTokenLocalStorage },
 * ```
 *
 * If you need to change the storage behaviour or provide your own - just extend your class from basic `NbTokenStorage`
 * or `NbTokenLocalStorage` and provide in your `app.module`:
 * ```
 * { provide: NbTokenStorage, useClass: NbTokenCustomStorage },
 * ```
 *
 */
var NbTokenLocalStorage = /** @class */ (function () {
    function NbTokenLocalStorage(tokenClass) {
        this.tokenClass = tokenClass;
        this.key = 'auth_app_token';
    }
    /**
     * Returns token from localStorage
     * @returns {NbAuthToken}
     */
    /**
       * Returns token from localStorage
       * @returns {NbAuthToken}
       */
    NbTokenLocalStorage.prototype.get = /**
       * Returns token from localStorage
       * @returns {NbAuthToken}
       */
    function () {
        return Object(_token__WEBPACK_IMPORTED_MODULE_2__["nbCreateToken"])(this.tokenClass, localStorage.getItem(this.key));
    };
    /**
     * Sets token to localStorage
     * @param {NbAuthToken} token
     */
    /**
       * Sets token to localStorage
       * @param {NbAuthToken} token
       */
    NbTokenLocalStorage.prototype.set = /**
       * Sets token to localStorage
       * @param {NbAuthToken} token
       */
    function (token) {
        localStorage.setItem(this.key, token.toString());
    };
    /**
     * Sets raw (string) token to localStorage
     * @param {string} token
     */
    /**
       * Sets raw (string) token to localStorage
       * @param {string} token
       */
    NbTokenLocalStorage.prototype.setRaw = /**
       * Sets raw (string) token to localStorage
       * @param {string} token
       */
    function (token) {
        localStorage.setItem(this.key, token);
    };
    /**
     * Clears token from localStorage
     */
    /**
       * Clears token from localStorage
       */
    NbTokenLocalStorage.prototype.clear = /**
       * Clears token from localStorage
       */
    function () {
        localStorage.removeItem(this.key);
    };
    NbTokenLocalStorage.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NbTokenLocalStorage.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_auth_options__WEBPACK_IMPORTED_MODULE_1__["NB_AUTH_TOKEN_CLASS"],] },] },
    ]; };
    return NbTokenLocalStorage;
}());

//# sourceMappingURL=token-storage.js.map

/***/ }),

/***/ "./src/app/@nebular/auth/services/token/token.js":
/*!*******************************************************!*\
  !*** ./src/app/@nebular/auth/services/token/token.js ***!
  \*******************************************************/
/*! exports provided: nbCreateToken, NbAuthSimpleToken, NbAuthJWTToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nbCreateToken", function() { return nbCreateToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbAuthSimpleToken", function() { return NbAuthSimpleToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbAuthJWTToken", function() { return NbAuthJWTToken; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ "./src/app/@nebular/auth/helpers.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

function nbCreateToken(tokenClass, token) {
    return new tokenClass(token);
}
/**
 * Wrapper for simple (text) token
 */
var /**
 * Wrapper for simple (text) token
 */
NbAuthSimpleToken = /** @class */ (function () {
    function NbAuthSimpleToken(token) {
        this.token = token;
    }
    /**
     * Returns the token value
     * @returns string
     */
    /**
       * Returns the token value
       * @returns string
       */
    NbAuthSimpleToken.prototype.getValue = /**
       * Returns the token value
       * @returns string
       */
    function () {
        return this.token;
    };
    /**
     * Is non empty and valid
     * @returns {boolean}
     */
    /**
       * Is non empty and valid
       * @returns {boolean}
       */
    NbAuthSimpleToken.prototype.isValid = /**
       * Is non empty and valid
       * @returns {boolean}
       */
    function () {
        return !!this.token;
    };
    /**
     * Validate value and convert to string, if value is not valid return empty string
     * @returns {string}
     */
    /**
       * Validate value and convert to string, if value is not valid return empty string
       * @returns {string}
       */
    NbAuthSimpleToken.prototype.toString = /**
       * Validate value and convert to string, if value is not valid return empty string
       * @returns {string}
       */
    function () {
        return !!this.token ? this.token : '';
    };
    return NbAuthSimpleToken;
}());
/**
 * Wrapper for simple (text) token
 */

/**
 * Wrapper for JWT token with additional methods.
 */
var /**
 * Wrapper for JWT token with additional methods.
 */
NbAuthJWTToken = /** @class */ (function (_super) {
    __extends(NbAuthJWTToken, _super);
    function NbAuthJWTToken() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns payload object
     * @returns any
     */
    /**
       * Returns payload object
       * @returns any
       */
    NbAuthJWTToken.prototype.getPayload = /**
       * Returns payload object
       * @returns any
       */
    function () {
        if (!this.token) {
            throw new Error('Cannot extract payload from an empty token.');
        }
        var parts = this.token.split('.');
        if (parts.length !== 3) {
            throw new Error("The token " + this.token + " is not valid JWT token and must consist of three parts.");
        }
        var decoded;
        try {
            decoded = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["urlBase64Decode"])(parts[1]);
        }
        catch (e) {
            throw new Error("The token " + this.token + " is not valid JWT token and cannot be parsed.");
        }
        if (!decoded) {
            throw new Error("The token " + this.token + " is not valid JWT token and cannot be decoded.");
        }
        return JSON.parse(decoded);
    };
    /**
     * Returns expiration date
     * @returns Date
     */
    /**
       * Returns expiration date
       * @returns Date
       */
    NbAuthJWTToken.prototype.getTokenExpDate = /**
       * Returns expiration date
       * @returns Date
       */
    function () {
        var decoded = this.getPayload();
        if (!decoded.hasOwnProperty('exp')) {
            return null;
        }
        var date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    };
    /**
     * Is data expired
     * @returns {boolean}
     */
    /**
       * Is data expired
       * @returns {boolean}
       */
    NbAuthJWTToken.prototype.isValid = /**
       * Is data expired
       * @returns {boolean}
       */
    function () {
        return _super.prototype.isValid.call(this) && (!this.getTokenExpDate() || new Date() < this.getTokenExpDate());
    };
    return NbAuthJWTToken;
}(NbAuthSimpleToken));
/**
 * Wrapper for JWT token with additional methods.
 */

//# sourceMappingURL=token.js.map

/***/ }),

/***/ "./src/app/@nebular/auth/services/token/token.service.js":
/*!***************************************************************!*\
  !*** ./src/app/@nebular/auth/services/token/token.service.js ***!
  \***************************************************************/
/*! exports provided: NbTokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbTokenService", function() { return NbTokenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _token_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token-storage */ "./src/app/@nebular/auth/services/token/token-storage.js");




/**
 * Service that allows you to manage authentication token - get, set, clear and also listen to token changes over time.
 */
var NbTokenService = /** @class */ (function () {
    function NbTokenService(tokenStorage) {
        this.tokenStorage = tokenStorage;
        this.token$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.publishStoredToken();
    }
    /**
     * Publishes token when it changes.
     * @returns {Observable<NbAuthToken>}
     */
    /**
       * Publishes token when it changes.
       * @returns {Observable<NbAuthToken>}
       */
    NbTokenService.prototype.tokenChange = /**
       * Publishes token when it changes.
       * @returns {Observable<NbAuthToken>}
       */
    function () {
        return this.token$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (value) { return !!value; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
    };
    /**
     * Sets a token into the storage. This method is used by the NbAuthService automatically.
     *
     * @param {NbAuthToken} token
     * @returns {Observable<any>}
     */
    /**
       * Sets a token into the storage. This method is used by the NbAuthService automatically.
       *
       * @param {NbAuthToken} token
       * @returns {Observable<any>}
       */
    NbTokenService.prototype.set = /**
       * Sets a token into the storage. This method is used by the NbAuthService automatically.
       *
       * @param {NbAuthToken} token
       * @returns {Observable<any>}
       */
    function (token) {
        this.tokenStorage.set(token);
        this.publishStoredToken();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * Sets a raw token into the storage. This method is used by the NbAuthService automatically.
     *
     * @param {string} token
     * @returns {Observable<any>}
     */
    /**
       * Sets a raw token into the storage. This method is used by the NbAuthService automatically.
       *
       * @param {string} token
       * @returns {Observable<any>}
       */
    NbTokenService.prototype.setRaw = /**
       * Sets a raw token into the storage. This method is used by the NbAuthService automatically.
       *
       * @param {string} token
       * @returns {Observable<any>}
       */
    function (token) {
        this.tokenStorage.setRaw(token);
        this.publishStoredToken();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * Returns observable of current token
     * @returns {Observable<NbAuthToken>}
     */
    /**
       * Returns observable of current token
       * @returns {Observable<NbAuthToken>}
       */
    NbTokenService.prototype.get = /**
       * Returns observable of current token
       * @returns {Observable<NbAuthToken>}
       */
    function () {
        var token = this.tokenStorage.get();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(token);
    };
    /**
     * Removes the token and published token value
     *
     * @returns {Observable<any>}
     */
    /**
       * Removes the token and published token value
       *
       * @returns {Observable<any>}
       */
    NbTokenService.prototype.clear = /**
       * Removes the token and published token value
       *
       * @returns {Observable<any>}
       */
    function () {
        this.tokenStorage.clear();
        this.publishStoredToken();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    NbTokenService.prototype.publishStoredToken = function () {
        this.token$.next(this.tokenStorage.get());
    };
    NbTokenService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NbTokenService.ctorParameters = function () { return [
        { type: _token_storage__WEBPACK_IMPORTED_MODULE_3__["NbTokenStorage"], },
    ]; };
    return NbTokenService;
}());

//# sourceMappingURL=token.service.js.map

/***/ }),

/***/ "./src/app/@nebular/security/directives/is-granted.directive.js":
/*!**********************************************************************!*\
  !*** ./src/app/@nebular/security/directives/is-granted.directive.js ***!
  \**********************************************************************/
/*! exports provided: NbIsGrantedDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbIsGrantedDirective", function() { return NbIsGrantedDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_access_checker_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/access-checker.service */ "./src/app/@nebular/security/services/access-checker.service.js");



var NbIsGrantedDirective = /** @class */ (function () {
    function NbIsGrantedDirective(templateRef, viewContainer, accessChecker) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.accessChecker = accessChecker;
        this.alive = true;
        this.hasView = false;
    }
    Object.defineProperty(NbIsGrantedDirective.prototype, "nbIsGranted", {
        set: function (_a) {
            var _this = this;
            var permission = _a[0], resource = _a[1];
            this.accessChecker.isGranted(permission, resource)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeWhile"])(function () { return _this.alive; }))
                .subscribe(function (can) {
                if (can && !_this.hasView) {
                    _this.viewContainer.createEmbeddedView(_this.templateRef);
                    _this.hasView = true;
                }
                else if (!can && _this.hasView) {
                    _this.viewContainer.clear();
                    _this.hasView = false;
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    NbIsGrantedDirective.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    NbIsGrantedDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[nbIsGranted]' },] },
    ];
    /** @nocollapse */
    NbIsGrantedDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
        { type: _services_access_checker_service__WEBPACK_IMPORTED_MODULE_2__["NbAccessChecker"], },
    ]; };
    NbIsGrantedDirective.propDecorators = {
        "nbIsGranted": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NbIsGrantedDirective;
}());

//# sourceMappingURL=is-granted.directive.js.map

/***/ }),

/***/ "./src/app/@nebular/security/index.js":
/*!********************************************!*\
  !*** ./src/app/@nebular/security/index.js ***!
  \********************************************/
/*! exports provided: NB_SECURITY_OPTIONS_TOKEN, NbSecurityModule, NbAclService, ɵ0, ɵ1, ɵ2, NbAccessChecker, NbRoleProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _security_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./security.options */ "./src/app/@nebular/security/security.options.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NB_SECURITY_OPTIONS_TOKEN", function() { return _security_options__WEBPACK_IMPORTED_MODULE_0__["NB_SECURITY_OPTIONS_TOKEN"]; });

/* harmony import */ var _security_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./security.module */ "./src/app/@nebular/security/security.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbSecurityModule", function() { return _security_module__WEBPACK_IMPORTED_MODULE_1__["NbSecurityModule"]; });

/* harmony import */ var _services_acl_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/acl.service */ "./src/app/@nebular/security/services/acl.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbAclService", function() { return _services_acl_service__WEBPACK_IMPORTED_MODULE_2__["NbAclService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return _services_acl_service__WEBPACK_IMPORTED_MODULE_2__["ɵ0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return _services_acl_service__WEBPACK_IMPORTED_MODULE_2__["ɵ1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵ2", function() { return _services_acl_service__WEBPACK_IMPORTED_MODULE_2__["ɵ2"]; });

/* harmony import */ var _services_access_checker_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/access-checker.service */ "./src/app/@nebular/security/services/access-checker.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbAccessChecker", function() { return _services_access_checker_service__WEBPACK_IMPORTED_MODULE_3__["NbAccessChecker"]; });

/* harmony import */ var _services_role_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/role.provider */ "./src/app/@nebular/security/services/role.provider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbRoleProvider", function() { return _services_role_provider__WEBPACK_IMPORTED_MODULE_4__["NbRoleProvider"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/@nebular/security/security.module.js":
/*!******************************************************!*\
  !*** ./src/app/@nebular/security/security.module.js ***!
  \******************************************************/
/*! exports provided: NbSecurityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbSecurityModule", function() { return NbSecurityModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _security_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./security.options */ "./src/app/@nebular/security/security.options.js");
/* harmony import */ var _services_acl_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/acl.service */ "./src/app/@nebular/security/services/acl.service.js");
/* harmony import */ var _services_access_checker_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/access-checker.service */ "./src/app/@nebular/security/services/access-checker.service.js");
/* harmony import */ var _directives_is_granted_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/is-granted.directive */ "./src/app/@nebular/security/directives/is-granted.directive.js");






var NbSecurityModule = /** @class */ (function () {
    function NbSecurityModule() {
    }
    NbSecurityModule.forRoot = function (nbSecurityOptions) {
        return {
            ngModule: NbSecurityModule,
            providers: [
                { provide: _security_options__WEBPACK_IMPORTED_MODULE_2__["NB_SECURITY_OPTIONS_TOKEN"], useValue: nbSecurityOptions },
                _services_acl_service__WEBPACK_IMPORTED_MODULE_3__["NbAclService"],
                _services_access_checker_service__WEBPACK_IMPORTED_MODULE_4__["NbAccessChecker"],
            ],
            exports: [
                _directives_is_granted_directive__WEBPACK_IMPORTED_MODULE_5__["NbIsGrantedDirective"],
            ],
        };
    };
    NbSecurityModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ],
                    declarations: [
                        _directives_is_granted_directive__WEBPACK_IMPORTED_MODULE_5__["NbIsGrantedDirective"],
                    ],
                    exports: [
                        _directives_is_granted_directive__WEBPACK_IMPORTED_MODULE_5__["NbIsGrantedDirective"],
                    ],
                },] },
    ];
    return NbSecurityModule;
}());

//# sourceMappingURL=security.module.js.map

/***/ }),

/***/ "./src/app/@nebular/security/security.options.js":
/*!*******************************************************!*\
  !*** ./src/app/@nebular/security/security.options.js ***!
  \*******************************************************/
/*! exports provided: NB_SECURITY_OPTIONS_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NB_SECURITY_OPTIONS_TOKEN", function() { return NB_SECURITY_OPTIONS_TOKEN; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var NB_SECURITY_OPTIONS_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Nebular Security Options');
//# sourceMappingURL=security.options.js.map

/***/ }),

/***/ "./src/app/@nebular/security/services/access-checker.service.js":
/*!**********************************************************************!*\
  !*** ./src/app/@nebular/security/services/access-checker.service.js ***!
  \**********************************************************************/
/*! exports provided: NbAccessChecker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbAccessChecker", function() { return NbAccessChecker; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _role_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./role.provider */ "./src/app/@nebular/security/services/role.provider.js");
/* harmony import */ var _acl_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./acl.service */ "./src/app/@nebular/security/services/acl.service.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




/**
 * Access checker service.
 *
 * Injects `NbRoleProvider` to determine current user role, and checks access permissions using `NbAclService`
 */
var NbAccessChecker = /** @class */ (function () {
    function NbAccessChecker(roleProvider, acl) {
        this.roleProvider = roleProvider;
        this.acl = acl;
    }
    /**
     * Checks whether access is granted or not
     *
     * @param {string} permission
     * @param {string} resource
     * @returns {Observable<boolean>}
     */
    /**
       * Checks whether access is granted or not
       *
       * @param {string} permission
       * @param {string} resource
       * @returns {Observable<boolean>}
       */
    NbAccessChecker.prototype.isGranted = /**
       * Checks whether access is granted or not
       *
       * @param {string} permission
       * @param {string} resource
       * @returns {Observable<boolean>}
       */
    function (permission, resource) {
        var _this = this;
        return this.roleProvider.getRole()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (role) {
            return _this.acl.can(role, permission, resource);
        }));
    };
    NbAccessChecker.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NbAccessChecker.ctorParameters = function () { return [
        { type: _role_provider__WEBPACK_IMPORTED_MODULE_1__["NbRoleProvider"], },
        { type: _acl_service__WEBPACK_IMPORTED_MODULE_2__["NbAclService"], },
    ]; };
    return NbAccessChecker;
}());

//# sourceMappingURL=access-checker.service.js.map

/***/ }),

/***/ "./src/app/@nebular/security/services/acl.service.js":
/*!***********************************************************!*\
  !*** ./src/app/@nebular/security/services/acl.service.js ***!
  \***********************************************************/
/*! exports provided: NbAclService, ɵ0, ɵ1, ɵ2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbAclService", function() { return NbAclService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return ɵ1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ2", function() { return ɵ2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _security_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../security.options */ "./src/app/@nebular/security/security.options.js");


var shallowObjectClone = function (o) { return Object.assign({}, o); };
var ɵ0 = shallowObjectClone;
var shallowArrayClone = function (a) { return Object.assign([], a); };
var ɵ1 = shallowArrayClone;
var popParent = function (abilities) {
    var parent = abilities['parent'];
    delete abilities['parent'];
    return parent;
};
var ɵ2 = popParent;
/**
 * Common acl service.
 */
var NbAclService = /** @class */ (function () {
    function NbAclService(settings) {
        if (settings === void 0) { settings = {}; }
        this.settings = settings;
        this.state = {};
        if (settings.accessControl) {
            this.setAccessControl(settings.accessControl);
        }
    }
    /**
     * Set/Reset ACL list
     * @param {NbAccessControl} list
     */
    /**
       * Set/Reset ACL list
       * @param {NbAccessControl} list
       */
    NbAclService.prototype.setAccessControl = /**
       * Set/Reset ACL list
       * @param {NbAccessControl} list
       */
    function (list) {
        for (var _i = 0, _a = Object.entries(list); _i < _a.length; _i++) {
            var _b = _a[_i], role = _b[0], value = _b[1];
            var abilities = shallowObjectClone(value);
            var parent_1 = popParent(abilities);
            this.register(role, parent_1, abilities);
        }
    };
    /**
     * Register a new role with a list of abilities (permission/resources combinations)
     * @param {string} role
     * @param {string} parent
     * @param {[permission: string]: string|string[]} abilities
     */
    /**
       * Register a new role with a list of abilities (permission/resources combinations)
       * @param {string} role
       * @param {string} parent
       * @param {[permission: string]: string|string[]} abilities
       */
    NbAclService.prototype.register = /**
       * Register a new role with a list of abilities (permission/resources combinations)
       * @param {string} role
       * @param {string} parent
       * @param {[permission: string]: string|string[]} abilities
       */
    function (role, parent, abilities) {
        if (parent === void 0) { parent = null; }
        if (abilities === void 0) { abilities = {}; }
        this.validateRole(role);
        this.state[role] = {
            parent: parent,
        };
        for (var _i = 0, _a = Object.entries(abilities); _i < _a.length; _i++) {
            var _b = _a[_i], permission = _b[0], value = _b[1];
            var resources = typeof value === 'string' ? [value] : value;
            this.allow(role, permission, shallowArrayClone(resources));
        }
    };
    /**
     * Allow a permission for specific resources to a role
     * @param {string} role
     * @param {string} permission
     * @param {string | string[]} resource
     */
    /**
       * Allow a permission for specific resources to a role
       * @param {string} role
       * @param {string} permission
       * @param {string | string[]} resource
       */
    NbAclService.prototype.allow = /**
       * Allow a permission for specific resources to a role
       * @param {string} role
       * @param {string} permission
       * @param {string | string[]} resource
       */
    function (role, permission, resource) {
        this.validateRole(role);
        if (!this.getRole(role)) {
            this.register(role, null, {});
        }
        resource = typeof resource === 'string' ? [resource] : resource;
        var resources = shallowArrayClone(this.getRoleResources(role, permission));
        resources = resources.concat(resource);
        this.state[role][permission] = resources
            .filter(function (item, pos) { return resources.indexOf(item) === pos; });
    };
    /**
     * Check whether the role has a permission to a resource
     * @param {string} role
     * @param {string} permission
     * @param {string} resource
     * @returns {boolean}
     */
    /**
       * Check whether the role has a permission to a resource
       * @param {string} role
       * @param {string} permission
       * @param {string} resource
       * @returns {boolean}
       */
    NbAclService.prototype.can = /**
       * Check whether the role has a permission to a resource
       * @param {string} role
       * @param {string} permission
       * @param {string} resource
       * @returns {boolean}
       */
    function (role, permission, resource) {
        this.validateResource(resource);
        var parentRole = this.getRoleParent(role);
        var parentCan = parentRole && this.can(this.getRoleParent(role), permission, resource);
        return parentCan || this.exactCan(role, permission, resource);
    };
    NbAclService.prototype.getRole = function (role) {
        return this.state[role];
    };
    NbAclService.prototype.validateRole = function (role) {
        if (!role) {
            throw new Error('NbAclService: role name cannot be empty');
        }
    };
    NbAclService.prototype.validateResource = function (resource) {
        if (!resource || [NbAclService.ANY_RESOURCE].includes(resource)) {
            throw new Error("NbAclService: cannot use empty or bulk '*' resource placeholder with 'can' method");
        }
    };
    NbAclService.prototype.exactCan = function (role, permission, resource) {
        var resources = this.getRoleResources(role, permission);
        return resources.includes(resource) || resources.includes(NbAclService.ANY_RESOURCE);
    };
    NbAclService.prototype.getRoleResources = function (role, permission) {
        return this.getRoleAbilities(role)[permission] || [];
    };
    NbAclService.prototype.getRoleAbilities = function (role) {
        var abilities = shallowObjectClone(this.state[role] || {});
        popParent(shallowObjectClone(this.state[role] || {}));
        return abilities;
    };
    NbAclService.prototype.getRoleParent = function (role) {
        return this.state[role] ? this.state[role]['parent'] : null;
    };
    NbAclService.ANY_RESOURCE = '*';
    NbAclService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NbAclService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_security_options__WEBPACK_IMPORTED_MODULE_1__["NB_SECURITY_OPTIONS_TOKEN"],] },] },
    ]; };
    return NbAclService;
}());


//# sourceMappingURL=acl.service.js.map

/***/ }),

/***/ "./src/app/@nebular/security/services/role.provider.js":
/*!*************************************************************!*\
  !*** ./src/app/@nebular/security/services/role.provider.js ***!
  \*************************************************************/
/*! exports provided: NbRoleProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbRoleProvider", function() { return NbRoleProvider; });
var NbRoleProvider = /** @class */ (function () {
    function NbRoleProvider() {
    }
    return NbRoleProvider;
}());

//# sourceMappingURL=role.provider.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/components/actions/actions.component.js":
/*!************************************************************************!*\
  !*** ./src/app/@nebular/theme/components/actions/actions.component.js ***!
  \************************************************************************/
/*! exports provided: NbActionComponent, NbActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbActionComponent", function() { return NbActionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbActionsComponent", function() { return NbActionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/app/@nebular/theme/components/helpers.js");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */


/**
 * Action item, display a link with an icon, or any other content provided instead.
 */
var NbActionComponent = /** @class */ (function () {
    function NbActionComponent() {
        this.disabledValue = false;
    }
    Object.defineProperty(NbActionComponent.prototype, "disabled", {
        set: /**
           * Disables the item (changes item opacity and mouse cursor)
           * @type boolean
           */
        function (val) {
            this.disabledValue = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["convertToBoolProperty"])(val);
        },
        enumerable: true,
        configurable: true
    });
    NbActionComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'nb-action',
                    template: "\n    <a class=\"icon-container\" href=\"#\" *ngIf=\"icon; else showContent\" (click)=\"$event.preventDefault()\">\n      <i class=\"control-icon {{ icon }}\"></i>\n    </a>\n    <ng-template #showContent>\n      <ng-content></ng-content>\n    </ng-template>\n    <nb-badge *ngIf=\"badgeText\" [text]=\"badgeText\" [status]=\"badgeStatus\" [position]=\"badgePosition\"></nb-badge>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbActionComponent.propDecorators = {
        "disabledValue": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.disabled',] },],
        "icon": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "badgeText": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "badgeStatus": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "badgePosition": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NbActionComponent;
}());

/**
 * Shows a horizontal list of actions, available in multiple sizes
 * Aligns items vertically.
 *
 * @styles
 *
 * actions-font-size:
 * actions-font-family:
 * actions-line-height:
 * actions-fg:
 * actions-bg:
 * actions-separator:
 * actions-padding:
 * actions-size-small:
 * actions-size-medium:
 * actions-size-large:
 */
var NbActionsComponent = /** @class */ (function () {
    function NbActionsComponent() {
        this.fullWidthValue = false;
    }
    Object.defineProperty(NbActionsComponent.prototype, "small", {
        get: function () {
            return this.sizeValue === NbActionsComponent.SIZE_SMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbActionsComponent.prototype, "medium", {
        get: function () {
            return this.sizeValue === NbActionsComponent.SIZE_MEDIUM;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbActionsComponent.prototype, "large", {
        get: function () {
            return this.sizeValue === NbActionsComponent.SIZE_LARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbActionsComponent.prototype, "size", {
        set: /**
           * Size of the component, small|medium|large
           * @type string
           */
        function (val) {
            this.sizeValue = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbActionsComponent.prototype, "inverse", {
        set: /**
           * Makes colors inverse based on current theme
           * @type boolean
           */
        function (val) {
            this.inverseValue = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["convertToBoolProperty"])(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbActionsComponent.prototype, "fullWidth", {
        set: /**
           * Component will fill full width of the container
           * @type boolean
           */
        function (val) {
            this.fullWidthValue = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["convertToBoolProperty"])(val);
        },
        enumerable: true,
        configurable: true
    });
    NbActionsComponent.SIZE_SMALL = 'small';
    NbActionsComponent.SIZE_MEDIUM = 'medium';
    NbActionsComponent.SIZE_LARGE = 'large';
    NbActionsComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'nb-actions',
                    styles: [":host{display:flex;align-items:center}:host /deep/ nb-action{display:flex;flex-wrap:wrap;align-items:center;position:relative}:host /deep/ nb-action i.control-icon:hover{cursor:pointer}:host /deep/ nb-action.disabled{cursor:not-allowed}:host /deep/ nb-action.disabled>*{opacity:0.5}:host /deep/ nb-action.disabled a,:host /deep/ nb-action.disabled i{cursor:not-allowed !important} "],
                    template: "\n    <ng-content select=\"nb-action\"></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbActionsComponent.propDecorators = {
        "inverseValue": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.inverse',] },],
        "small": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.small',] },],
        "medium": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.medium',] },],
        "large": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.large',] },],
        "fullWidthValue": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.full-width',] },],
        "size": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "inverse": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fullWidth": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NbActionsComponent;
}());

//# sourceMappingURL=actions.component.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/components/actions/actions.module.js":
/*!*********************************************************************!*\
  !*** ./src/app/@nebular/theme/components/actions/actions.module.js ***!
  \*********************************************************************/
/*! exports provided: NbActionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbActionsModule", function() { return NbActionsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/@nebular/theme/components/shared/shared.module.js");
/* harmony import */ var _actions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions.component */ "./src/app/@nebular/theme/components/actions/actions.component.js");
/* harmony import */ var _badge_badge_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../badge/badge.module */ "./src/app/@nebular/theme/components/badge/badge.module.js");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




var NB_ACTIONS_COMPONENTS = [
    _actions_component__WEBPACK_IMPORTED_MODULE_2__["NbActionComponent"],
    _actions_component__WEBPACK_IMPORTED_MODULE_2__["NbActionsComponent"],
];
var NbActionsModule = /** @class */ (function () {
    function NbActionsModule() {
    }
    NbActionsModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["NbSharedModule"],
                        _badge_badge_module__WEBPACK_IMPORTED_MODULE_3__["NbBadgeModule"],
                    ],
                    declarations: NB_ACTIONS_COMPONENTS.slice(),
                    exports: NB_ACTIONS_COMPONENTS.slice(),
                },] },
    ];
    return NbActionsModule;
}());

//# sourceMappingURL=actions.module.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/components/badge/badge.component.js":
/*!********************************************************************!*\
  !*** ./src/app/@nebular/theme/components/badge/badge.component.js ***!
  \********************************************************************/
/*! exports provided: NbBadgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbBadgeComponent", function() { return NbBadgeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_direction_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/direction.service */ "./src/app/@nebular/theme/services/direction.service.js");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */


/**
 * Badge is a simple labeling component.
 * It can be used to add additional information to any content or highlight unread items.
 *
 * Element is absolute positioned, so parent should be
 * [positioned element](https://developer.mozilla.org/en-US/docs/Web/CSS/position).
 * It means parent `position` should be set to anything except `static`, e.g. `relative`,
 * `absolute`, `fixed`, or `sticky`.
 *
 *
 * @example Badge with default position and status(color):
 *
 * ```
 * <nb-badge text="badgeText"></nb-badge>
 * ```
 *
 * @example Badge located on the bottom right with warning status:
 *
 * ```
 * <nb-badge text="badgeText" status="warning" position="bottom right">
 * </nb-badge>
 * ```
 *
 * @styles
 *
 * badge-fg-text:
 * badge-primary-bg-color:
 * badge-success-bg-color:
 * badge-info-bg-color:
 * badge-warning-bg-color:
 * badge-danger-bg-color:
 */
var NbBadgeComponent = /** @class */ (function () {
    function NbBadgeComponent(layoutDirectionService) {
        this.layoutDirectionService = layoutDirectionService;
        this.colorClass = NbBadgeComponent.STATUS_PRIMARY;
        /**
           * Text to display
           * @type string
           */
        this.text = '';
    }
    Object.defineProperty(NbBadgeComponent.prototype, "status", {
        set: /**
           * Badge status (adds specific styles):
           * 'primary', 'info', 'success', 'warning', 'danger'
           * @param {string} val
           * @type string
           */
        function (value) {
            if (value) {
                this.colorClass = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbBadgeComponent.prototype, "positionClass", {
        get: function () {
            if (!this.position) {
                return NbBadgeComponent.TOP_RIGHT;
            }
            var isLtr = this.layoutDirectionService.isLtr();
            var startValue = isLtr ? 'left' : 'right';
            var endValue = isLtr ? 'right' : 'left';
            return this.position
                .replace(/\bstart\b/, startValue)
                .replace(/\bend\b/, endValue);
        },
        enumerable: true,
        configurable: true
    });
    NbBadgeComponent.TOP_LEFT = 'top left';
    NbBadgeComponent.TOP_RIGHT = 'top right';
    NbBadgeComponent.BOTTOM_LEFT = 'bottom left';
    NbBadgeComponent.BOTTOM_RIGHT = 'bottom right';
    NbBadgeComponent.TOP_START = 'top start';
    NbBadgeComponent.TOP_END = 'top end';
    NbBadgeComponent.BOTTOM_START = 'bottom start';
    NbBadgeComponent.BOTTOM_END = 'bottom end';
    NbBadgeComponent.STATUS_PRIMARY = 'primary';
    NbBadgeComponent.STATUS_INFO = 'info';
    NbBadgeComponent.STATUS_SUCCESS = 'success';
    NbBadgeComponent.STATUS_WARNING = 'warning';
    NbBadgeComponent.STATUS_DANGER = 'danger';
    NbBadgeComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'nb-badge',
                    styles: [":host .nb-badge{position:absolute;padding:0.25em 0.4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:0.25rem}:host .nb-badge.top{top:0}:host .nb-badge.right{right:0}:host .nb-badge.bottom{bottom:0}:host .nb-badge.left{left:0} "],
                    template: "\n    <span class=\"nb-badge {{positionClass}} nb-badge-{{colorClass}}\">{{text}}</span>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbBadgeComponent.ctorParameters = function () { return [
        { type: _services_direction_service__WEBPACK_IMPORTED_MODULE_1__["NbLayoutDirectionService"], },
    ]; };
    NbBadgeComponent.propDecorators = {
        "text": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "position": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "status": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NbBadgeComponent;
}());

//# sourceMappingURL=badge.component.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/components/badge/badge.module.js":
/*!*****************************************************************!*\
  !*** ./src/app/@nebular/theme/components/badge/badge.module.js ***!
  \*****************************************************************/
/*! exports provided: NbBadgeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbBadgeModule", function() { return NbBadgeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _badge_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./badge.component */ "./src/app/@nebular/theme/components/badge/badge.component.js");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */


var NbBadgeModule = /** @class */ (function () {
    function NbBadgeModule() {
    }
    NbBadgeModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    exports: [_badge_component__WEBPACK_IMPORTED_MODULE_1__["NbBadgeComponent"]],
                    declarations: [_badge_component__WEBPACK_IMPORTED_MODULE_1__["NbBadgeComponent"]],
                },] },
    ];
    return NbBadgeModule;
}());

//# sourceMappingURL=badge.module.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/components/card/card.component.js":
/*!******************************************************************!*\
  !*** ./src/app/@nebular/theme/components/card/card.component.js ***!
  \******************************************************************/
/*! exports provided: NbCardHeaderComponent, NbCardBodyComponent, NbCardFooterComponent, NbCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbCardHeaderComponent", function() { return NbCardHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbCardBodyComponent", function() { return NbCardBodyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbCardFooterComponent", function() { return NbCardFooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbCardComponent", function() { return NbCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * Component intended to be used within  the `<nb-card>` component.
 * It adds styles for a preset header section.
 *
 * @styles
 *
 * card-header-font-family:
 * card-header-font-size:
 * card-header-font-weight:
 * card-header-fg:
 * card-header-fg-heading:
 * card-header-active-bg:
 * card-header-active-fg:
 * card-header-disabled-bg:
 * card-header-primary-bg:
 * card-header-info-bg:
 * card-header-success-bg:
 * card-header-warning-bg:
 * card-header-danger-bg:
 */
var NbCardHeaderComponent = /** @class */ (function () {
    function NbCardHeaderComponent() {
    }
    NbCardHeaderComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'nb-card-header',
                    template: "<ng-content></ng-content>",
                },] },
    ];
    return NbCardHeaderComponent;
}());

/**
 * Component intended to be used within  the `<nb-card>` component.
 * Adds styles for a preset body section.
 */
var NbCardBodyComponent = /** @class */ (function () {
    function NbCardBodyComponent() {
    }
    NbCardBodyComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'nb-card-body',
                    template: "<ng-content></ng-content>",
                },] },
    ];
    return NbCardBodyComponent;
}());

/**
 * Component intended to be used within  the `<nb-card>` component.
 * Adds styles for a preset footer section.
 */
var NbCardFooterComponent = /** @class */ (function () {
    function NbCardFooterComponent() {
    }
    NbCardFooterComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'nb-card-footer',
                    template: "<ng-content></ng-content>",
                },] },
    ];
    return NbCardFooterComponent;
}());

/**
 * Basic content container component.
 *
 * @example While this component can be used alone, it also provides a number
 * of child components for common card sections:
 *
 * ```
 * <nb-card-header></nb-card-header>
 * <nb-card-body></nb-card-body>
 * <nb-card-footer></nb-card-footer>
 * ```
 *
 * @styles
 *
 * card-line-height:
 * card-font-weight:
 * card-fg-text:
 * card-bg:
 * card-height-xxsmall:
 * card-height-xsmall:
 * card-height-small:
 * card-height-medium:
 * card-height-large:
 * card-height-xlarge:
 * card-height-xxlarge:
 * card-shadow:
 * card-border-radius:
 * card-padding:
 * card-margin:
 * card-separator:
 *
 */
var NbCardComponent = /** @class */ (function () {
    function NbCardComponent() {
    }
    Object.defineProperty(NbCardComponent.prototype, "xxsmall", {
        get: function () {
            return this.size === NbCardComponent.SIZE_XXSMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "xsmall", {
        get: function () {
            return this.size === NbCardComponent.SIZE_XSMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "small", {
        get: function () {
            return this.size === NbCardComponent.SIZE_SMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "medium", {
        get: function () {
            return this.size === NbCardComponent.SIZE_MEDIUM;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "large", {
        get: function () {
            return this.size === NbCardComponent.SIZE_LARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "xlarge", {
        get: function () {
            return this.size === NbCardComponent.SIZE_XLARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "xxlarge", {
        get: function () {
            return this.size === NbCardComponent.SIZE_XXLARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "active", {
        get: function () {
            return this.status === NbCardComponent.STATUS_ACTIVE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "disabled", {
        get: function () {
            return this.status === NbCardComponent.STATUS_DISABLED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "primary", {
        get: function () {
            return this.status === NbCardComponent.STATUS_PRIMARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "info", {
        get: function () {
            return this.status === NbCardComponent.STATUS_INFO;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "success", {
        get: function () {
            return this.status === NbCardComponent.STATUS_SUCCESS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "warning", {
        get: function () {
            return this.status === NbCardComponent.STATUS_WARNING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "danger", {
        get: function () {
            return this.status === NbCardComponent.STATUS_DANGER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "hasAccent", {
        get: function () {
            return this.accent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "primaryAccent", {
        get: function () {
            return this.accent === NbCardComponent.ACCENT_PRIMARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "infoAccent", {
        get: function () {
            return this.accent === NbCardComponent.ACCENT_INFO;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "successAccent", {
        get: function () {
            return this.accent === NbCardComponent.ACCENT_SUCCESS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "warningAccent", {
        get: function () {
            return this.accent === NbCardComponent.ACCENT_WARNING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "dangerAccent", {
        get: function () {
            return this.accent === NbCardComponent.ACCENT_DANGER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "activeAccent", {
        get: function () {
            return this.accent === NbCardComponent.ACCENT_ACTIVE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "disabledAccent", {
        get: function () {
            return this.accent === NbCardComponent.ACCENT_DISABLED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "setSize", {
        set: /**
           * Card size, available sizes:
           * xxsmall, xsmall, small, medium, large, xlarge, xxlarge
           * @param {string} val
           */
        function (val) {
            this.size = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "setStatus", {
        set: /**
           * Card status (adds specific styles):
           * active, disabled, primary, info, success, warning, danger
           * @param {string} val
           */
        function (val) {
            this.status = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "setAccent", {
        set: /**
           * Card accent (color of the top border):
           * active, disabled, primary, info, success, warning, danger
           * @param {string} val
           */
        function (val) {
            this.accent = val;
        },
        enumerable: true,
        configurable: true
    });
    NbCardComponent.SIZE_XXSMALL = 'xxsmall';
    NbCardComponent.SIZE_XSMALL = 'xsmall';
    NbCardComponent.SIZE_SMALL = 'small';
    NbCardComponent.SIZE_MEDIUM = 'medium';
    NbCardComponent.SIZE_LARGE = 'large';
    NbCardComponent.SIZE_XLARGE = 'xlarge';
    NbCardComponent.SIZE_XXLARGE = 'xxlarge';
    NbCardComponent.STATUS_ACTIVE = 'active';
    NbCardComponent.STATUS_DISABLED = 'disabled';
    NbCardComponent.STATUS_PRIMARY = 'primary';
    NbCardComponent.STATUS_INFO = 'info';
    NbCardComponent.STATUS_SUCCESS = 'success';
    NbCardComponent.STATUS_WARNING = 'warning';
    NbCardComponent.STATUS_DANGER = 'danger';
    NbCardComponent.ACCENT_ACTIVE = 'active';
    NbCardComponent.ACCENT_DISABLED = 'disabled';
    NbCardComponent.ACCENT_PRIMARY = 'primary';
    NbCardComponent.ACCENT_INFO = 'info';
    NbCardComponent.ACCENT_SUCCESS = 'success';
    NbCardComponent.ACCENT_WARNING = 'warning';
    NbCardComponent.ACCENT_DANGER = 'danger';
    NbCardComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'nb-card',
                    styles: [":host{display:flex;flex-direction:column} "],
                    template: "\n    <ng-content></ng-content>\n    <ng-content select=\"nb-card-header\"></ng-content>\n    <ng-content select=\"nb-card-body\"></ng-content>\n    <ng-content select=\"nb-card-footer\"></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbCardComponent.propDecorators = {
        "xxsmall": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.xxsmall-card',] },],
        "xsmall": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.xsmall-card',] },],
        "small": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.small-card',] },],
        "medium": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.medium-card',] },],
        "large": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.large-card',] },],
        "xlarge": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.xlarge-card',] },],
        "xxlarge": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.xxlarge-card',] },],
        "active": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.active-card',] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.disabled-card',] },],
        "primary": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.primary-card',] },],
        "info": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.info-card',] },],
        "success": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.success-card',] },],
        "warning": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.warning-card',] },],
        "danger": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.danger-card',] },],
        "hasAccent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.accent',] },],
        "primaryAccent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.accent-primary',] },],
        "infoAccent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.accent-info',] },],
        "successAccent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.accent-success',] },],
        "warningAccent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.accent-warning',] },],
        "dangerAccent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.accent-danger',] },],
        "activeAccent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.accent-active',] },],
        "disabledAccent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.accent-disabled',] },],
        "setSize": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['size',] },],
        "setStatus": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['status',] },],
        "setAccent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['accent',] },],
    };
    return NbCardComponent;
}());

//# sourceMappingURL=card.component.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/components/card/card.module.js":
/*!***************************************************************!*\
  !*** ./src/app/@nebular/theme/components/card/card.module.js ***!
  \***************************************************************/
/*! exports provided: NbCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbCardModule", function() { return NbCardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/@nebular/theme/components/shared/shared.module.js");
/* harmony import */ var _card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card.component */ "./src/app/@nebular/theme/components/card/card.component.js");
/* harmony import */ var _reveal_card_reveal_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reveal-card/reveal-card.component */ "./src/app/@nebular/theme/components/card/reveal-card/reveal-card.component.js");
/* harmony import */ var _flip_card_flip_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flip-card/flip-card.component */ "./src/app/@nebular/theme/components/card/flip-card/flip-card.component.js");
/* harmony import */ var _shared_shared_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.component */ "./src/app/@nebular/theme/components/card/shared/shared.component.js");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */






var NB_CARD_COMPONENTS = [
    _card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"],
    _card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"],
    _card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardFooterComponent"],
    _card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardHeaderComponent"],
    _reveal_card_reveal_card_component__WEBPACK_IMPORTED_MODULE_3__["NbRevealCardComponent"],
    _flip_card_flip_card_component__WEBPACK_IMPORTED_MODULE_4__["NbFlipCardComponent"],
    _shared_shared_component__WEBPACK_IMPORTED_MODULE_5__["NbCardFrontComponent"],
    _shared_shared_component__WEBPACK_IMPORTED_MODULE_5__["NbCardBackComponent"],
];
var NbCardModule = /** @class */ (function () {
    function NbCardModule() {
    }
    NbCardModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["NbSharedModule"],
                    ],
                    declarations: NB_CARD_COMPONENTS.slice(),
                    exports: NB_CARD_COMPONENTS.slice(),
                },] },
    ];
    return NbCardModule;
}());

//# sourceMappingURL=card.module.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/components/card/flip-card/flip-card.component.js":
/*!*********************************************************************************!*\
  !*** ./src/app/@nebular/theme/components/card/flip-card/flip-card.component.js ***!
  \*********************************************************************************/
/*! exports provided: NbFlipCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbFlipCardComponent", function() { return NbFlipCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Flip card component.
 *
 * ![image](assets/images/components/flip-card.gif)
 *
 * @example
 *
 * ```
 * <nb-flip-card>
 *   <nb-card-front>
 *     <nb-card><nb-card-body>Front Card</nb-card-body></nb-card>
 *   </nb-card-front>
 *   <nb-card-back>
 *     <nb-card><nb-card-body>Back Card</nb-card-body></nb-card>
 *   </nb-card-back>
 * </nb-flip-card>
 * ```
 */
var NbFlipCardComponent = /** @class */ (function () {
    function NbFlipCardComponent() {
        /**
           * Flip state
           * @type boolean
           */
        this.flipped = false;
    }
    NbFlipCardComponent.prototype.toggleFlip = function () {
        this.flipped = !this.flipped;
    };
    NbFlipCardComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'nb-flip-card',
                    styles: [":host{display:block;perspective:1200px;position:relative}:host.flipped .flipcard-body{transform:rotateY(180deg)}:host.flipped .flipcard-body .front-container .flip-button{opacity:0}:host .flipcard-body{display:flex;transition:transform 0.5s;transform-style:preserve-3d}:host .flipcard-body .front-container,:host .flipcard-body .back-container{backface-visibility:hidden;flex:1}:host .flipcard-body .front-container .flip-button,:host .flipcard-body .back-container .flip-button{cursor:pointer;position:absolute;right:0;bottom:0;opacity:1;transition:opacity 0s 0.15s}:host .flipcard-body .back-container{transform:rotateY(180deg)} "],
                    template: "\n    <div class=\"flipcard-body\">\n      <div class=\"front-container\">\n        <ng-content select=\"nb-card-front\"></ng-content>\n        <a class=\"flip-button\" (click)=\"toggleFlip()\">\n          <i class=\"nb-arrow-dropleft\" aria-hidden=\"true\"></i>\n        </a>\n      </div>\n      <div class=\"back-container\">\n        <ng-content select=\"nb-card-back\"></ng-content>\n        <a class=\"flip-button\" (click)=\"toggleFlip()\">\n          <i class=\"nb-arrow-dropleft\" aria-hidden=\"true\"></i>\n        </a>\n      </div>\n    </div>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbFlipCardComponent.propDecorators = {
        "flipped": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.flipped',] },],
    };
    return NbFlipCardComponent;
}());

//# sourceMappingURL=flip-card.component.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/components/card/reveal-card/reveal-card.component.js":
/*!*************************************************************************************!*\
  !*** ./src/app/@nebular/theme/components/card/reveal-card/reveal-card.component.js ***!
  \*************************************************************************************/
/*! exports provided: NbRevealCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbRevealCardComponent", function() { return NbRevealCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Reveal card component.
 *
 * ![image](assets/images/components/reveal-card.gif)
 *
 * @example
 *
 * ```
 * <nb-reveal-card>
 *   <nb-card-front>
 *     <nb-card><nb-card-body>Front Card</nb-card-body></nb-card>
 *   </nb-card-front>
 *   <nb-card-back>
 *     <nb-card><nb-card-body>Back Card</nb-card-body></nb-card>
 *   </nb-card-back>
 * </nb-reveal-card>
 * ```
 */
var NbRevealCardComponent = /** @class */ (function () {
    function NbRevealCardComponent() {
        /**
           * Reveal state
           * @type boolean
           */
        this.revealed = false;
    }
    NbRevealCardComponent.prototype.toggleReveal = function () {
        this.revealed = !this.revealed;
    };
    NbRevealCardComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'nb-reveal-card',
                    styles: [":host{display:block;position:relative}:host.revealed .second-card-container{top:0;transition:none}:host.revealed .second-card-container /deep/ nb-card-back{top:0}:host.revealed .reveal-button{transform:none}:host /deep/ nb-card-front{display:block;height:100%}:host .second-card-container{position:absolute;top:100%;right:0;left:0;overflow:hidden;transition:top 0s 0.5s}:host .second-card-container /deep/ nb-card-back{position:absolute;left:0;top:100%;width:100%;transition:top 0.5s}:host .reveal-button{cursor:pointer;position:absolute;right:0;bottom:0;transform:rotate(180deg);transition:transform 0.3s} "],
                    template: "\n    <ng-content select=\"nb-card-front\"></ng-content>\n    <div class=\"second-card-container\">\n      <ng-content select=\"nb-card-back\"></ng-content>\n    </div>\n    <a class=\"reveal-button\" (click)=\"toggleReveal()\">\n      <i class=\"nb-arrow-dropdown\" aria-hidden=\"true\"></i>\n    </a>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbRevealCardComponent.propDecorators = {
        "revealed": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.revealed',] },],
    };
    return NbRevealCardComponent;
}());

//# sourceMappingURL=reveal-card.component.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/components/card/shared/shared.component.js":
/*!***************************************************************************!*\
  !*** ./src/app/@nebular/theme/components/card/shared/shared.component.js ***!
  \***************************************************************************/
/*! exports provided: NbCardFrontComponent, NbCardBackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbCardFrontComponent", function() { return NbCardFrontComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbCardBackComponent", function() { return NbCardBackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Component intended to be used within the `<nb-flip-card>` and `<nb-reveal-card>` components.
 *
 * Use it as a container for the front card.
 */
var NbCardFrontComponent = /** @class */ (function () {
    function NbCardFrontComponent() {
    }
    NbCardFrontComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'nb-card-front',
                    template: '<ng-content select="nb-card"></ng-content>',
                },] },
    ];
    return NbCardFrontComponent;
}());

/**
 * Component intended to be used within the `<nb-flip-card>` and `<nb-reveal-card>` components.
 *
 * Use it as a container for the back card.
 */
var NbCardBackComponent = /** @class */ (function () {
    function NbCardBackComponent() {
    }
    NbCardBackComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'nb-card-back',
                    template: '<ng-content select="nb-card"></ng-content>',
                },] },
    ];
    return NbCardBackComponent;
}());

//# sourceMappingURL=shared.component.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/components/checkbox/checkbox.component.js":
/*!**************************************************************************!*\
  !*** ./src/app/@nebular/theme/components/checkbox/checkbox.component.js ***!
  \**************************************************************************/
/*! exports provided: NbCheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbCheckboxComponent", function() { return NbCheckboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./src/app/@nebular/theme/components/helpers.js");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */



/**
 * Styled checkbox component
 *
 * @example Basic example
 *
 * ```
 *  <nb-checkbox [(ngModel)]="enabled">Enabled?</nb-checkbox>
 * ```
 *
 * @example Example with status
 *
 * ```
 *  <nb-checkbox [(ngModel)]="enabled" status="danger">Enabled?</nb-checkbox>
 * ```
 *
 * @styles
 *
 * checkbox-bg:
 * checkbox-size:
 * checkbox-border-size:
 * checkbox-border-color:
 * checkbox-checkmark:
 * checkbox-checked-bg:
 * checkbox-checked-size:
 * checkbox-checked-border-size:
 * checkbox-checked-border-color:
 * checkbox-checked-checkmark:
 * checkbox-disabled-bg:
 * checkbox-disabled-size:
 * checkbox-disabled-border-size:
 * checkbox-disabled-border-color:
 * checkbox-disabled-checkmark:
 */
var NbCheckboxComponent = /** @class */ (function () {
    function NbCheckboxComponent() {
        /**
           * Checkbox value
           * @type {boolean}
           * @private
           */
        this._value = false;
        this.disabled = false;
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    Object.defineProperty(NbCheckboxComponent.prototype, "setDisabled", {
        set: function (val) {
            this.disabled = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["convertToBoolProperty"])(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCheckboxComponent.prototype, "setStatus", {
        set: /**
           * Checkbox status (success, warning, danger)
           * @param {string} val
           */
        function (val) {
            this.status = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCheckboxComponent.prototype, "success", {
        get: function () {
            return this.status === 'success';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCheckboxComponent.prototype, "warning", {
        get: function () {
            return this.status === 'warning';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCheckboxComponent.prototype, "danger", {
        get: function () {
            return this.status === 'danger';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCheckboxComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            this._value = val;
            this.onChange(val);
            this.onTouched();
        },
        enumerable: true,
        configurable: true
    });
    NbCheckboxComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NbCheckboxComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    NbCheckboxComponent.prototype.writeValue = function (val) {
        this.value = val;
    };
    NbCheckboxComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'nb-checkbox',
                    template: "\n    <label class=\"customised-control customised-checkbox\">\n      <input type=\"checkbox\" class=\"customised-control-input\"\n             [disabled]=\"disabled\"\n             [checked]=\"value\"\n             (change)=\"value = !value\">\n      <span class=\"customised-control-indicator\"></span>\n      <span class=\"customised-control-description\">\n        <ng-content></ng-content>\n      </span>\n    </label>\n  ",
                    providers: [{
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return NbCheckboxComponent; }),
                            multi: true,
                        }],
                },] },
    ];
    /** @nocollapse */
    NbCheckboxComponent.propDecorators = {
        "_value": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['value',] },],
        "setDisabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['disabled',] },],
        "setStatus": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['status',] },],
        "success": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.success',] },],
        "warning": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.warning',] },],
        "danger": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.danger',] },],
    };
    return NbCheckboxComponent;
}());

//# sourceMappingURL=checkbox.component.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/components/checkbox/checkbox.module.js":
/*!***********************************************************************!*\
  !*** ./src/app/@nebular/theme/components/checkbox/checkbox.module.js ***!
  \***********************************************************************/
/*! exports provided: NbCheckboxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbCheckboxModule", function() { return NbCheckboxModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/@nebular/theme/components/shared/shared.module.js");
/* harmony import */ var _checkbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkbox.component */ "./src/app/@nebular/theme/components/checkbox/checkbox.component.js");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */



var NbCheckboxModule = /** @class */ (function () {
    function NbCheckboxModule() {
    }
    NbCheckboxModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["NbSharedModule"],
                    ],
                    declarations: [_checkbox_component__WEBPACK_IMPORTED_MODULE_2__["NbCheckboxComponent"]],
                    exports: [_checkbox_component__WEBPACK_IMPORTED_MODULE_2__["NbCheckboxComponent"]],
                },] },
    ];
    return NbCheckboxModule;
}());

//# sourceMappingURL=checkbox.module.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/components/context-menu/context-menu.component.js":
/*!**********************************************************************************!*\
  !*** ./src/app/@nebular/theme/components/context-menu/context-menu.component.js ***!
  \**********************************************************************************/
/*! exports provided: NbContextMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbContextMenuComponent", function() { return NbContextMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * Context menu component used as content within NbContextMenuDirective.
 *
 * @styles
 *
 * context-menu-fg
 * context-menu-active-fg
 * context-menu-active-bg
 * */
var NbContextMenuComponent = /** @class */ (function () {
    function NbContextMenuComponent() {
        this.items = [];
    }
    NbContextMenuComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'nb-context-menu',
                    styles: [":host /deep/ nb-menu{display:inline;font-size:0.875rem;line-height:1.5rem}:host /deep/ nb-menu ul.menu-items{margin:0;padding:0.5rem 0}:host /deep/ nb-menu ul.menu-items .menu-item{border:none;white-space:nowrap}:host /deep/ nb-menu ul.menu-items .menu-item:first-child{border:none}:host /deep/ nb-menu ul.menu-items .menu-item a{cursor:pointer;border-radius:0;padding:0}:host /deep/ nb-menu ul.menu-items .menu-item a .menu-icon{font-size:1.5rem;width:auto}:host /deep/ nb-menu ul.menu-items .menu-item a .menu-title{padding:0.375rem 3rem}[dir=rtl] :host /deep/ nb-menu ul.menu-items .menu-item a .menu-title{text-align:right}[dir=ltr] :host /deep/ nb-menu ul.menu-items .menu-item a .menu-icon ~ .menu-title{padding-left:0}[dir=rtl] :host /deep/ nb-menu ul.menu-items .menu-item a .menu-icon ~ .menu-title{padding-right:0}[dir=ltr] :host /deep/ nb-menu ul.menu-items .menu-item a .menu-icon:first-child{padding-left:1rem}[dir=rtl] :host /deep/ nb-menu ul.menu-items .menu-item a .menu-icon:first-child{padding-right:1rem} "],
                    template: '<nb-menu class="context-menu" [items]="items" [tag]="tag"></nb-menu>',
                },] },
    ];
    /** @nocollapse */
    NbContextMenuComponent.propDecorators = {
        "items": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "tag": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NbContextMenuComponent;
}());

//# sourceMappingURL=context-menu.component.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/components/context-menu/context-menu.directive.js":
/*!**********************************************************************************!*\
  !*** ./src/app/@nebular/theme/components/context-menu/context-menu.directive.js ***!
  \**********************************************************************************/
/*! exports provided: NbContextMenuDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbContextMenuDirective", function() { return NbContextMenuDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _popover_popover_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../popover/popover.directive */ "./src/app/@nebular/theme/components/popover/popover.directive.js");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/theme.service */ "./src/app/@nebular/theme/services/theme.service.js");
/* harmony import */ var _popover_helpers_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../popover/helpers/model */ "./src/app/@nebular/theme/components/popover/helpers/model.js");
/* harmony import */ var _context_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context-menu.component */ "./src/app/@nebular/theme/components/context-menu/context-menu.component.js");
/* harmony import */ var _popover_helpers_positioning_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../popover/helpers/positioning.helper */ "./src/app/@nebular/theme/components/popover/helpers/positioning.helper.js");
/* harmony import */ var _popover_helpers_adjustment_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../popover/helpers/adjustment.helper */ "./src/app/@nebular/theme/components/popover/helpers/adjustment.helper.js");
/* harmony import */ var _popover_helpers_trigger_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../popover/helpers/trigger.helper */ "./src/app/@nebular/theme/components/popover/helpers/trigger.helper.js");
/* harmony import */ var _popover_helpers_placement_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../popover/helpers/placement.helper */ "./src/app/@nebular/theme/components/popover/helpers/placement.helper.js");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */









/**
 * Full featured context menu directive.
 *
 * ![image](assets/images/components/context-menu.gif)
 *
 * @example Just pass menu items array:
 *
 * ```
 * <button [nbContextMenu]="items"></button>
 * ...
 * items = [{ title: 'Profile' }, { title: 'Log out' }];
 * ```
 *
 * @example If you want to handle context menu clicks you have to pass `nbContextMenuTag`
 * param and subscribe to events using NbMenuService.
 * `NbContextMenu` renders plain `NbMenu` inside, so
 * you have to work with it just like with `NbMenu` component:
 *
 * ```
 * <button [nbContextMenu]="items" nbContextMenuTag="my-context-menu"></button>
 * ...
 * nbMenuService.onItemClick()
 *   .pipe(filter(({ tag }) => tag === 'my-context-menu'))
 *   .subscribe(...handle it somehow)
 * ```
 *
 * @example Context menu has different placements, such as: top, bottom, left and right
 * which can be used as following:
 *
 * ```
 * <button [nbContextMenu]="items" nbContextMenuPlacement="right"></button>
 * ...
 * items = [{ title: 'Profile' }, { title: 'Log out' }];
 * ```
 *
 * @example By default context menu will try to adjust itself to maximally fit viewport
 * and provide the best user experience. It will try to change placement of the context menu.
 * If you wanna disable this behaviour just set it falsy value.
 *
 * ```
 * <button [nbContextMenu]="items" nbContextMenuAdjustment="counterclockwise"></button>
 * ...
 * items = [{ title: 'Profile' }, { title: 'Log out' }];
 * ```
 * */
var NbContextMenuDirective = /** @class */ (function () {
    function NbContextMenuDirective(hostRef, themeService, componentFactoryResolver, positioningHelper, adjustmentHelper, triggerHelper, platformId, placementHelper) {
        this.context = {};
        /**
             * Initialize popover with all the important inputs.
             * */
        this.popover = new _popover_popover_directive__WEBPACK_IMPORTED_MODULE_1__["NbPopoverDirective"](hostRef, themeService, componentFactoryResolver, positioningHelper, adjustmentHelper, triggerHelper, platformId, placementHelper);
        this.popover.content = _context_menu_component__WEBPACK_IMPORTED_MODULE_4__["NbContextMenuComponent"];
        this.popover.placement = _popover_helpers_model__WEBPACK_IMPORTED_MODULE_3__["NbPopoverPlacement"].BOTTOM;
    }
    Object.defineProperty(NbContextMenuDirective.prototype, "items", {
        set: /**
           * Basic menu items, will be passed to the internal NbMenuComponent.
           * */
        function (items) {
            this.validateItems(items);
            this.popover.context = Object.assign(this.context, { items: items });
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(NbContextMenuDirective.prototype, "placement", {
        set: /**
           * Position will be calculated relatively host element based on the placement.
           * Can be top, right, bottom and left.
           * */
        function (placement) {
            this.popover.placement = placement;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(NbContextMenuDirective.prototype, "adjustment", {
        set: /**
           * Container placement will be changes automatically based on this strategy if container can't fit view port.
           * Set this property to any falsy value if you want to disable automatically adjustment.
           * Available values: clockwise, counterclockwise.
           * */
        function (adjustment) {
            this.popover.adjustment = adjustment;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbContextMenuDirective.prototype, "tag", {
        set: /**
           * Set NbMenu tag, which helps identify menu when working with NbMenuService.
           * */
        function (tag) {
            this.popover.context = Object.assign(this.context, { tag: tag });
        },
        enumerable: true,
        configurable: true
    });
    NbContextMenuDirective.prototype.ngOnInit = function () {
        this.popover.ngOnInit();
    };
    NbContextMenuDirective.prototype.ngOnDestroy = function () {
        this.popover.ngOnDestroy();
    };
    /**
     * Show context menu.
     * */
    /**
       * Show context menu.
       * */
    NbContextMenuDirective.prototype.show = /**
       * Show context menu.
       * */
    function () {
        this.popover.show();
    };
    /**
     * Hide context menu.
     * */
    /**
       * Hide context menu.
       * */
    NbContextMenuDirective.prototype.hide = /**
       * Hide context menu.
       * */
    function () {
        this.popover.hide();
    };
    /**
     * Toggle context menu state.
     * */
    /**
       * Toggle context menu state.
       * */
    NbContextMenuDirective.prototype.toggle = /**
       * Toggle context menu state.
       * */
    function () {
        this.popover.toggle();
    };
    NbContextMenuDirective.prototype.onResize = function () {
        this.popover.onResize();
    };
    /*
     * NbMenuComponent will crash if don't pass menu items to it.
     * So, we just validating them and throw custom obvious error.
     * */
    /*
       * NbMenuComponent will crash if don't pass menu items to it.
       * So, we just validating them and throw custom obvious error.
       * */
    NbContextMenuDirective.prototype.validateItems = /*
       * NbMenuComponent will crash if don't pass menu items to it.
       * So, we just validating them and throw custom obvious error.
       * */
    function (items) {
        if (!items || !items.length) {
            throw Error("List of menu items expected, but given: " + items);
        }
    };
    NbContextMenuDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[nbContextMenu]' },] },
    ];
    /** @nocollapse */
    NbContextMenuDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _services_theme_service__WEBPACK_IMPORTED_MODULE_2__["NbThemeService"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], },
        { type: _popover_helpers_positioning_helper__WEBPACK_IMPORTED_MODULE_5__["NbPositioningHelper"], },
        { type: _popover_helpers_adjustment_helper__WEBPACK_IMPORTED_MODULE_6__["NbAdjustmentHelper"], },
        { type: _popover_helpers_trigger_helper__WEBPACK_IMPORTED_MODULE_7__["NbTriggerHelper"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] },] },
        { type: _popover_helpers_placement_helper__WEBPACK_IMPORTED_MODULE_8__["NbPlacementHelper"], },
    ]; };
    NbContextMenuDirective.propDecorators = {
        "items": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['nbContextMenu',] },],
        "placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['nbContextMenuPlacement',] },],
        "adjustment": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['nbContextMenuAdjustment',] },],
        "tag": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['nbContextMenuTag',] },],
        "onResize": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:resize', ['$event'],] },],
    };
    return NbContextMenuDirective;
}());

//# sourceMappingURL=context-menu.directive.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/components/context-menu/context-menu.module.js":
/*!*******************************************************************************!*\
  !*** ./src/app/@nebular/theme/components/context-menu/context-menu.module.js ***!
  \*******************************************************************************/
/*! exports provided: NbContextMenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbContextMenuModule", function() { return NbContextMenuModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _context_menu_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context-menu.directive */ "./src/app/@nebular/theme/components/context-menu/context-menu.directive.js");
/* harmony import */ var _context_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context-menu.component */ "./src/app/@nebular/theme/components/context-menu/context-menu.component.js");
/* harmony import */ var _menu_menu_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../menu/menu.module */ "./src/app/@nebular/theme/components/menu/menu.module.js");
/* harmony import */ var _popover_popover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../popover/popover.component */ "./src/app/@nebular/theme/components/popover/popover.component.js");
/* harmony import */ var _popover_popover_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../popover/popover.module */ "./src/app/@nebular/theme/components/popover/popover.module.js");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */







var NbContextMenuModule = /** @class */ (function () {
    function NbContextMenuModule() {
    }
    NbContextMenuModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _popover_popover_module__WEBPACK_IMPORTED_MODULE_6__["NbPopoverModule"], _menu_menu_module__WEBPACK_IMPORTED_MODULE_4__["NbMenuModule"]],
                    exports: [_context_menu_directive__WEBPACK_IMPORTED_MODULE_2__["NbContextMenuDirective"]],
                    declarations: [_context_menu_directive__WEBPACK_IMPORTED_MODULE_2__["NbContextMenuDirective"], _context_menu_component__WEBPACK_IMPORTED_MODULE_3__["NbContextMenuComponent"]],
                    entryComponents: [_popover_popover_component__WEBPACK_IMPORTED_MODULE_5__["NbPopoverComponent"], _context_menu_component__WEBPACK_IMPORTED_MODULE_3__["NbContextMenuComponent"]],
                },] },
    ];
    return NbContextMenuModule;
}());

//# sourceMappingURL=context-menu.module.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/components/helpers.js":
/*!******************************************************!*\
  !*** ./src/app/@nebular/theme/components/helpers.js ***!
  \******************************************************/
/*! exports provided: convertToBoolProperty, getElementHeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToBoolProperty", function() { return convertToBoolProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementHeight", function() { return getElementHeight; });
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
function convertToBoolProperty(val) {
    if (typeof val === 'string') {
        val = val.toLowerCase().trim();
        return (val === 'true' || val === '');
    }
    return !!val;
}
function getElementHeight(el) {
    /**
       *
       * TODO: Move helpers in separate common module.
       * TODO: Provide window through di token.
       * */
    var style = window.getComputedStyle(el);
    var marginTop = parseInt(style.getPropertyValue('margin-top'), 10);
    var marginBottom = parseInt(style.getPropertyValue('margin-bottom'), 10);
    return el.offsetHeight + marginTop + marginBottom;
}
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/components/layout/layout.component.js":
/*!**********************************************************************!*\
  !*** ./src/app/@nebular/theme/components/layout/layout.component.js ***!
  \**********************************************************************/
/*! exports provided: NbLayoutColumnComponent, NbLayoutHeaderComponent, NbLayoutFooterComponent, NbLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbLayoutColumnComponent", function() { return NbLayoutColumnComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbLayoutHeaderComponent", function() { return NbLayoutHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbLayoutFooterComponent", function() { return NbLayoutFooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbLayoutComponent", function() { return NbLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers */ "./src/app/@nebular/theme/components/helpers.js");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/theme.service */ "./src/app/@nebular/theme/services/theme.service.js");
/* harmony import */ var _services_spinner_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/spinner.service */ "./src/app/@nebular/theme/services/spinner.service.js");
/* harmony import */ var _services_direction_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/direction.service */ "./src/app/@nebular/theme/services/direction.service.js");
/* harmony import */ var _theme_options__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../theme.options */ "./src/app/@nebular/theme/theme.options.js");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */










/**
 * A container component which determines a content position inside of the layout.
 * The layout could contain unlimited columns (not including the sidebars).
 *
 * @example By default the columns are ordered from the left to the right,
 * but it's also possible to overwrite this behavior by setting a `left` attribute to the column,
 * moving it to the very first position:
 * ```
 * <nb-layout>
 *   <nb-layout-column>Second</nb-layout-column>
 *   <nb-layout-column>Third</nb-layout-column>
 *   <nb-layout-column left>First</nb-layout-column>
 * </nb-layout>
 * ```
 */
var NbLayoutColumnComponent = /** @class */ (function () {
    function NbLayoutColumnComponent() {
    }
    Object.defineProperty(NbLayoutColumnComponent.prototype, "left", {
        set: /**
           * Move the column to the very left position in the layout.
           * @param {boolean} val
           */
        function (val) {
            this.leftValue = Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["convertToBoolProperty"])(val);
            this.startValue = false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbLayoutColumnComponent.prototype, "start", {
        set: /**
           * Make columnt first in the layout.
           * @param {boolean} val
           */
        function (val) {
            this.startValue = Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["convertToBoolProperty"])(val);
            this.leftValue = false;
        },
        enumerable: true,
        configurable: true
    });
    NbLayoutColumnComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'nb-layout-column',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbLayoutColumnComponent.propDecorators = {
        "leftValue": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.left',] },],
        "startValue": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.start',] },],
        "left": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "start": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NbLayoutColumnComponent;
}());

/**
 * Page header component.
 * Located on top of the page above the layout columns and sidebars.
 * Could be made `fixed` by setting the corresponding property. In the fixed mode the header becomes
 * sticky to the top of the nb-layout (to of the page).
 *
 * @styles
 *
 * header-font-family
 * header-line-height
 * header-fg
 * header-bg
 * header-height
 * header-padding
 * header-shadow
 */
var NbLayoutHeaderComponent = /** @class */ (function () {
    function NbLayoutHeaderComponent() {
    }
    Object.defineProperty(NbLayoutHeaderComponent.prototype, "fixed", {
        set: /**
           * Makes the header sticky to the top of the nb-layout.
           * @param {boolean} val
           */
        function (val) {
            this.fixedValue = Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["convertToBoolProperty"])(val);
        },
        enumerable: true,
        configurable: true
    });
    NbLayoutHeaderComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'nb-layout-header',
                    template: "\n    <nav [class.fixed]=\"fixedValue\">\n      <ng-content></ng-content>\n    </nav>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbLayoutHeaderComponent.propDecorators = {
        "fixedValue": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.fixed',] },],
        "fixed": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NbLayoutHeaderComponent;
}());

/**
 * Page footer.
 * Located under the nb-layout content (specifically, under the columns).
 * Could be made `fixed`, becoming sticky to the bottom of the view port (window).
 *
 * @styles
 *
 * footer-height
 * footer-padding
 * footer-fg
 * footer-bg
 * footer-separator
 * footer-shadow
 */
var NbLayoutFooterComponent = /** @class */ (function () {
    function NbLayoutFooterComponent() {
    }
    Object.defineProperty(NbLayoutFooterComponent.prototype, "fixed", {
        set: /**
           * Makes the footer sticky to the bottom of the window.
           * @param {boolean} val
           */
        function (val) {
            this.fixedValue = Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["convertToBoolProperty"])(val);
        },
        enumerable: true,
        configurable: true
    });
    NbLayoutFooterComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'nb-layout-footer',
                    template: "\n    <nav [class.fixed]=\"fixedValue\">\n      <ng-content></ng-content>\n    </nav>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbLayoutFooterComponent.propDecorators = {
        "fixedValue": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.fixed',] },],
        "fixed": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NbLayoutFooterComponent;
}());

/**
 * The general Nebular component-container.
 * It is required that all children component of the framework are located inside of the nb-layout.
 *
 * Can contain the following components inside:
 *
 * ```
 * nb-layout-header
 * nb-layout-column
 * nb-sidebar
 * nb-layout-footer
 * ```
 *
 * By default the layout fills up the full view-port.
 * The window scrollbars are disabled on the body and moved inside of the nb-layout, so that the scrollbars
 * won't mess with the fixed nb-header.
 *
 * The children components are projected into the flexible layout structure allowing to adjust the layout behavior
 * based on the settings provided.
 *
 * The layout content (columns) becomes centered when the window width is more than
 * the value specified in the theme variable `layout-content-width`.
 *
 * The layout also contains the area on the very top (the first child of the nb-layout), which could be used
 * to dynamically append some components like modals or spinners/loaders
 * so that they are located on top of the elements hierarchy.
 * More details are below under the `ThemeService` section.
 *
 * The layout component is also responsible for changing of the application themes.
 * It listens to the `themeChange` event and change the theme CSS class appended to body.
 * Based on the class appended a specific CSS-theme is applied to the application.
 * More details of the Theme System could be found here [Enabling Theme System](#/docs/concepts/theme-system)
 *
 * @example A simple layout example:
 *
 * ```
 * <nb-layout>
 *   <nb-layout-header>Great Company</nb-layout-header>
 *
 *   <nb-layout-column>
 *     Hello World!
 *   </nb-layout-column>
 *
 *   <nb-layout-footer>Contact us</nb-layout-footer>
 * </nb-layout>
 * ```
 *
 * @example For example, it is possible to ask the layout to center the columns (notice: we added a `center` attribute
 * to the layout:
 *
 * ```
 * <nb-layout center>
 *   <nb-layout-header>Great Company</nb-layout-header>
 *
 *   <nb-layout-column>
 *     Hello World!
 *   </nb-layout-column>
 *
 *   <nb-layout-footer>Contact us</nb-layout-footer>
 * </nb-layout>
 * ```
 *
 * @styles
 *
 * layout-font-family
 * layout-font-size
 * layout-line-height
 * layout-fg
 * layout-bg
 * layout-min-height
 * layout-content-width
 * layout-window-mode-min-width
 * layout-window-mode-max-width: window mode only, after this value layout turns into floating window
 * layout-window-mode-bg: window mode only, background
 * layout-window-mode-padding-top: window mode only, max padding from top
 * layout-window-shadow: window mode shadow
 * layout-padding
 * layout-medium-padding
 * layout-small-padding
 */
var NbLayoutComponent = /** @class */ (function () {
    function NbLayoutComponent(themeService, spinnerService, componentFactoryResolver, elementRef, renderer, router, window, document, platformId, layoutDirectionService) {
        var _this = this;
        this.themeService = themeService;
        this.spinnerService = spinnerService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.router = router;
        this.window = window;
        this.document = document;
        this.platformId = platformId;
        this.layoutDirectionService = layoutDirectionService;
        this.centerValue = false;
        this.windowModeValue = false;
        this.withScrollValue = false;
        this.afterViewInit$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.alive = true;
        this.themeService.onThemeChange()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (theme) {
            var body = _this.document.getElementsByTagName('body')[0];
            if (theme.previous) {
                _this.renderer.removeClass(body, "nb-theme-" + theme.previous);
            }
            _this.renderer.addClass(body, "nb-theme-" + theme.name);
        });
        this.themeService.onAppendLayoutClass()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (className) {
            _this.renderer.addClass(_this.elementRef.nativeElement, className);
        });
        this.themeService.onRemoveLayoutClass()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (className) {
            _this.renderer.removeClass(_this.elementRef.nativeElement, className);
        });
        this.spinnerService.registerLoader(new Promise(function (resolve, reject) {
            _this.afterViewInit$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
                .subscribe(function (_) { return resolve(); });
        }));
        this.spinnerService.load();
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            // trigger first time so that after the change we have the initial value
            this.themeService.changeWindowWidth(this.window.innerWidth);
        }
    }
    Object.defineProperty(NbLayoutComponent.prototype, "center", {
        set: /**
           * Defines whether the layout columns will be centered after some width
           * @param {boolean} val
           */
        function (val) {
            this.centerValue = Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["convertToBoolProperty"])(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbLayoutComponent.prototype, "windowMode", {
        set: /**
           * Defines whether the layout enters a 'window' mode, when the layout content (including sidebars and fixed header)
           * becomes centered by width with a margin from the top of the screen, like a floating window.
           * Automatically enables `withScroll` mode, as in the window mode scroll must be inside the layout and cannot be on
           * window. (TODO: check this)
           * @param {boolean} val
           */
        function (val) {
            this.windowModeValue = Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["convertToBoolProperty"])(val);
            this.withScroll = this.windowModeValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbLayoutComponent.prototype, "withScroll", {
        set: /**
           * Defines whether to move the scrollbars to layout or leave it at the body level.
           * Automatically set to true when `windowMode` is enabled.
           * @param {boolean} val
           */
        function (val) {
            this.withScrollValue = Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["convertToBoolProperty"])(val);
            // TODO: is this the best way of doing it? as we don't have access to body from theme styles
            // TODO: add e2e test
            var body = this.document.getElementsByTagName('body')[0];
            if (this.withScrollValue) {
                this.renderer.setStyle(body, 'overflow', 'hidden');
            }
            else {
                this.renderer.setStyle(body, 'overflow', 'initial');
            }
        },
        enumerable: true,
        configurable: true
    });
    NbLayoutComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeService.onAppendToTop()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (data) {
            var componentRef = _this.veryTopRef.createComponent(data.factory);
            data.listener.next(componentRef);
            data.listener.complete();
        });
        this.themeService.onClearLayoutTop()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (data) {
            _this.veryTopRef.clear();
            data.listener.next(true);
        });
        this.layoutDirectionService.onDirectionChange()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (direction) {
            _this.renderer.setProperty(_this.document, 'dir', direction);
        });
        this.afterViewInit$.next(true);
    };
    NbLayoutComponent.prototype.ngOnInit = function () {
        this.initScrollTop();
    };
    NbLayoutComponent.prototype.ngOnDestroy = function () {
        this.themeService.clearLayoutTop();
        this.alive = false;
    };
    NbLayoutComponent.prototype.onResize = function (event) {
        this.themeService.changeWindowWidth(event.target.innerWidth);
    };
    NbLayoutComponent.prototype.initScrollTop = function () {
        var _this = this;
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }))
            .subscribe(function () {
            _this.scrollableContainerRef.nativeElement.scrollTo && _this.scrollableContainerRef.nativeElement.scrollTo(0, 0);
        });
    };
    NbLayoutComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'nb-layout',
                    styles: [":host{-webkit-font-smoothing:antialiased}[dir=ltr] :host{text-align:left}[dir=rtl] :host{text-align:right}:host .layout{display:flex;flex-direction:column}:host /deep/ nb-layout-header{display:block}:host /deep/ nb-layout-header nav{align-items:center;justify-content:flex-start;display:flex}:host /deep/ nb-layout-header.fixed{position:fixed;left:0;right:0;z-index:1040}:host .layout-container{display:flex;flex:1;-ms-flex:1 1 auto;flex-direction:row}[dir=ltr] :host .layout-container /deep/ nb-sidebar.left{order:0}[dir=rtl] :host .layout-container /deep/ nb-sidebar.left{order:2}[dir=ltr] :host .layout-container /deep/ nb-sidebar.right{order:2}[dir=rtl] :host .layout-container /deep/ nb-sidebar.right{order:0}:host .layout-container /deep/ nb-sidebar.end{order:2}:host .layout-container /deep/ nb-sidebar .fixed{position:fixed;width:100%;overflow-y:auto;height:100%}:host .layout-container .content{display:flex;flex:1;-ms-flex:1 1 auto;flex-direction:column;min-width:0}:host .layout-container .content.center{max-width:100%;position:relative;margin-left:auto;margin-right:auto}:host .layout-container .content .columns{display:flex;flex:1;-ms-flex:1 1 auto;flex-direction:row;width:100%}:host .layout-container .content .columns /deep/ nb-layout-column{order:1;flex:1 0;min-width:0}[dir=ltr] :host .layout-container .content .columns /deep/ nb-layout-column.left{order:0}[dir=rtl] :host .layout-container .content .columns /deep/ nb-layout-column.left{order:2}:host .layout-container .content .columns /deep/ nb-layout-column.start{order:0}:host .layout-container .content /deep/ nb-layout-footer{display:block;margin-top:auto}:host .layout-container .content /deep/ nb-layout-footer nav{justify-content:center;display:flex} "],
                    template: "\n    <ng-template #layoutTopDynamicArea></ng-template>\n    <div class=\"scrollable-container\" #scrollableContainer>\n      <div class=\"layout\">\n        <ng-content select=\"nb-layout-header\"></ng-content>\n        <div class=\"layout-container\">\n          <ng-content select=\"nb-sidebar\"></ng-content>\n          <div class=\"content\" [class.center]=\"centerValue\">\n            <div class=\"columns\">\n              <ng-content select=\"nb-layout-column\"></ng-content>\n            </div>\n            <ng-content select=\"nb-layout-footer\"></ng-content>\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbLayoutComponent.ctorParameters = function () { return [
        { type: _services_theme_service__WEBPACK_IMPORTED_MODULE_6__["NbThemeService"], },
        { type: _services_spinner_service__WEBPACK_IMPORTED_MODULE_7__["NbSpinnerService"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_theme_options__WEBPACK_IMPORTED_MODULE_9__["NB_WINDOW"],] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_theme_options__WEBPACK_IMPORTED_MODULE_9__["NB_DOCUMENT"],] },] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] },] },
        { type: _services_direction_service__WEBPACK_IMPORTED_MODULE_8__["NbLayoutDirectionService"], },
    ]; };
    NbLayoutComponent.propDecorators = {
        "windowModeValue": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.window-mode',] },],
        "withScrollValue": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.with-scroll',] },],
        "center": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "windowMode": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "withScroll": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "veryTopRef": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['layoutTopDynamicArea', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },] },],
        "scrollableContainerRef": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['scrollableContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },] },],
        "onResize": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:resize', ['$event'],] },],
    };
    return NbLayoutComponent;
}());

//# sourceMappingURL=layout.component.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/components/layout/layout.module.js":
/*!*******************************************************************!*\
  !*** ./src/app/@nebular/theme/components/layout/layout.module.js ***!
  \*******************************************************************/
/*! exports provided: NbLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbLayoutModule", function() { return NbLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/@nebular/theme/components/shared/shared.module.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.component */ "./src/app/@nebular/theme/components/layout/layout.component.js");



var NB_LAYOUT_COMPONENTS = [
    _layout_component__WEBPACK_IMPORTED_MODULE_2__["NbLayoutComponent"],
    _layout_component__WEBPACK_IMPORTED_MODULE_2__["NbLayoutColumnComponent"],
    _layout_component__WEBPACK_IMPORTED_MODULE_2__["NbLayoutFooterComponent"],
    _layout_component__WEBPACK_IMPORTED_MODULE_2__["NbLayoutHeaderComponent"],
];
var NbLayoutModule = /** @class */ (function () {
    function NbLayoutModule() {
    }
    NbLayoutModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["NbSharedModule"],
                    ],
                    declarations: NB_LAYOUT_COMPONENTS.slice(),
                    exports: NB_LAYOUT_COMPONENTS.slice(),
                },] },
    ];
    return NbLayoutModule;
}());

//# sourceMappingURL=layout.module.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/components/menu/menu.component.js":
/*!******************************************************************!*\
  !*** ./src/app/@nebular/theme/components/menu/menu.component.js ***!
  \******************************************************************/
/*! exports provided: NbMenuItemComponent, NbMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbMenuItemComponent", function() { return NbMenuItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbMenuComponent", function() { return NbMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu.service */ "./src/app/@nebular/theme/components/menu/menu.service.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers */ "./src/app/@nebular/theme/components/helpers.js");
/* harmony import */ var _theme_options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../theme.options */ "./src/app/@nebular/theme/theme.options.js");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */







function sumSubmenuHeight(item) {
    return item.expanded
        ? (item.subMenuHeight || 0) + item.children.filter(function (c) { return c.children; }).reduce(function (acc, c) { return acc + sumSubmenuHeight(c); }, 0)
        : 0;
}
var NbMenuItemComponent = /** @class */ (function () {
    function NbMenuItemComponent(menuService, platformId, changeDetection) {
        this.menuService = menuService;
        this.platformId = platformId;
        this.changeDetection = changeDetection;
        this.menuItem = null;
        this.hoverItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.toggleSubMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.itemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.alive = true;
        this.maxHeight = 0;
    }
    NbMenuItemComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.subMenu.changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function () {
            _this.updateSubmenuHeight();
            _this.updateMaxHeight();
        });
        this.menuService.onSubmenuToggle()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function () { return _this.updateMaxHeight(); });
        this.updateSubmenuHeight();
        this.updateMaxHeight();
        this.changeDetection.detectChanges();
    };
    NbMenuItemComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    NbMenuItemComponent.prototype.updateSubmenuHeight = function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            this.menuItem.subMenuHeight = this.subMenu.reduce(function (acc, c) { return acc + Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getElementHeight"])(c.nativeElement); }, 0);
        }
    };
    NbMenuItemComponent.prototype.updateMaxHeight = function () {
        this.maxHeight = sumSubmenuHeight(this.menuItem);
    };
    NbMenuItemComponent.prototype.onToggleSubMenu = function (item) {
        this.toggleSubMenu.emit(item);
    };
    NbMenuItemComponent.prototype.onHoverItem = function (item) {
        this.hoverItem.emit(item);
    };
    NbMenuItemComponent.prototype.onSelectItem = function (item) {
        this.selectItem.emit(item);
    };
    NbMenuItemComponent.prototype.onItemClick = function (item) {
        this.itemClick.emit(item);
    };
    NbMenuItemComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    // tslint:disable-next-line:component-selector
                    selector: '[nbMenuItem]',
                    template: "<span *ngIf=\"menuItem.group\"> <i class=\"menu-icon {{ menuItem.icon }}\" *ngIf=\"menuItem.icon\"></i> {{ menuItem.title }} </span> <a *ngIf=\"menuItem.link && !menuItem.url && !menuItem.children && !menuItem.group\" [routerLink]=\"menuItem.link\" [queryParams]=\"menuItem.queryParams\" [fragment]=\"menuItem.fragment\" [attr.target]=\"menuItem.target\" [attr.title]=\"menuItem.title\" [class.active]=\"menuItem.selected\" (mouseenter)=\"onHoverItem(menuItem)\"> <i class=\"menu-icon {{ menuItem.icon }}\" *ngIf=\"menuItem.icon\"></i> <span class=\"menu-title\">{{ menuItem.title }}</span> </a> <a *ngIf=\"menuItem.url && !menuItem.children && !menuItem.link && !menuItem.group\" [attr.href]=\"menuItem.url\" [attr.target]=\"menuItem.target\" [attr.title]=\"menuItem.title\" [class.active]=\"menuItem.selected\" (mouseenter)=\"onHoverItem(menuItem)\" (click)=\"onSelectItem(menuItem)\"> <i class=\"menu-icon {{ menuItem.icon }}\" *ngIf=\"menuItem.icon\"></i> <span class=\"menu-title\">{{ menuItem.title }}</span> </a> <a *ngIf=\"!menuItem.children && !menuItem.link && !menuItem.url && !menuItem.group\" [attr.target]=\"menuItem.target\" [attr.title]=\"menuItem.title\" [class.active]=\"menuItem.selected\" (mouseenter)=\"onHoverItem(menuItem)\" (click)=\"$event.preventDefault(); onItemClick(menuItem);\"> <i class=\"menu-icon {{ menuItem.icon }}\" *ngIf=\"menuItem.icon\"></i> <span class=\"menu-title\">{{ menuItem.title }}</span> </a> <a *ngIf=\"menuItem.children\" (click)=\"$event.preventDefault(); onToggleSubMenu(menuItem);\" [attr.target]=\"menuItem.target\" [attr.title]=\"menuItem.title\" [class.active]=\"menuItem.selected\" (mouseenter)=\"onHoverItem(menuItem)\" href=\"#\"> <i class=\"menu-icon {{ menuItem.icon }}\" *ngIf=\"menuItem.icon\"></i> <span class=\"menu-title\">{{ menuItem.title }}</span> <i class=\"ion chevron\" [class.ion-chevron-left]=\"!menuItem.expanded\" [class.ion-chevron-down]=\"menuItem.expanded\"></i> </a> <ul *ngIf=\"menuItem.children\" [class.collapsed]=\"!(menuItem.children && menuItem.expanded)\" [class.expanded]=\"menuItem.expanded\" class=\"menu-items\" [style.max-height.px]=\"maxHeight\"> <ng-container *ngFor=\"let item of menuItem.children\"> <li nbMenuItem *ngIf=\"!item.hidden\" [menuItem]=\"item\" [class.menu-group]=\"item.group\" (hoverItem)=\"onHoverItem($event)\" (toggleSubMenu)=\"onToggleSubMenu($event)\" (selectItem)=\"onSelectItem($event)\" (itemClick)=\"onItemClick($event)\" class=\"menu-item\"> </li> </ng-container> </ul> ",
                },] },
    ];
    /** @nocollapse */
    NbMenuItemComponent.ctorParameters = function () { return [
        { type: _menu_service__WEBPACK_IMPORTED_MODULE_4__["NbMenuService"], },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] },] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    ]; };
    NbMenuItemComponent.propDecorators = {
        "menuItem": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "hoverItem": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "toggleSubMenu": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "selectItem": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "itemClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "subMenu": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"], args: [NbMenuItemComponent, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },] },],
    };
    return NbMenuItemComponent;
}());

/**
 * Vertical menu component.
 *
 * Accepts a list of menu items and renders them accordingly. Supports multi-level menus.
 *
 * @example Basic usage
 *
 * ```
 * // ...
 * menuItems: NbMenuItem[] = [{ title: home, link: '/' }, { title: dashboard, link: 'dashboard' }];
 * // ...
 * <nb-menu [items]="menuItems"></nb-menu>
 * ```
 *
 * @styles
 *
 * menu-font-family:
 * menu-font-size:
 * menu-font-weight:
 * menu-fg:
 * menu-bg:
 * menu-active-fg:
 * menu-active-bg:
 * menu-active-font-weight:
 * menu-submenu-bg:
 * menu-submenu-fg:
 * menu-submenu-active-fg:
 * menu-submenu-active-bg:
 * menu-submenu-active-border-color:
 * menu-submenu-active-shadow:
 * menu-submenu-hover-fg:
 * menu-submenu-hover-bg:
 * menu-submenu-item-border-width:
 * menu-submenu-item-border-radius:
 * menu-submenu-item-padding:
 * menu-submenu-item-container-padding:
 * menu-submenu-padding:
 * menu-group-font-weight:
 * menu-group-font-size:
 * menu-group-fg:
 * menu-group-padding
 * menu-item-padding:
 * menu-item-separator:
 * menu-icon-font-size:
 * menu-icon-margin:
 * menu-icon-color:
 * menu-icon-active-color:
 */
var NbMenuComponent = /** @class */ (function () {
    function NbMenuComponent(window, menuInternalService, router) {
        this.window = window;
        this.menuInternalService = menuInternalService;
        this.router = router;
        this.alive = true;
        this.autoCollapseValue = false;
    }
    Object.defineProperty(NbMenuComponent.prototype, "inverse", {
        set: /**
           * Makes colors inverse based on current theme
           * @type boolean
           */
        function (val) {
            this.inverseValue = Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["convertToBoolProperty"])(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbMenuComponent.prototype, "autoCollapse", {
        set: /**
           * Collapse all opened submenus on the toggle event
           * Default value is "false"
           * @type boolean
           */
        function (val) {
            this.autoCollapseValue = Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["convertToBoolProperty"])(val);
        },
        enumerable: true,
        configurable: true
    });
    NbMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuInternalService
            .onAddItem()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (data) { return _this.compareTag(data.tag); }))
            .subscribe(function (data) { return _this.onAddItem(data); });
        this.menuInternalService
            .onNavigateHome()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (data) { return _this.compareTag(data.tag); }))
            .subscribe(function () { return _this.navigateHome(); });
        this.menuInternalService
            .onGetSelectedItem()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (data) { return _this.compareTag(data.tag); }))
            .subscribe(function (data) {
            data.listener.next({ tag: _this.tag, item: _this.getSelectedItem(_this.items) });
        });
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }))
            .subscribe(function () {
            _this.menuInternalService.resetItems(_this.items);
            _this.menuInternalService.updateSelection(_this.items, _this.tag, _this.autoCollapseValue);
        });
        // TODO: this probably won't work if you pass items dynamically into items input
        this.menuInternalService.prepareItems(this.items);
        (_a = this.items).push.apply(_a, this.menuInternalService.getItems());
        var _a;
    };
    NbMenuComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { return _this.menuInternalService.updateSelection(_this.items, _this.tag); });
    };
    NbMenuComponent.prototype.onAddItem = function (data) {
        (_a = this.items).push.apply(_a, data.items);
        this.menuInternalService.prepareItems(this.items);
        this.menuInternalService.updateSelection(this.items, this.tag, this.autoCollapseValue);
        var _a;
    };
    NbMenuComponent.prototype.onHoverItem = function (item) {
        this.menuInternalService.itemHover(item, this.tag);
    };
    NbMenuComponent.prototype.onToggleSubMenu = function (item) {
        if (this.autoCollapseValue) {
            this.menuInternalService.collapseAll(this.items, this.tag, item);
        }
        item.expanded = !item.expanded;
        this.menuInternalService.submenuToggle(item, this.tag);
    };
    // TODO: is not fired on page reload
    // TODO: is not fired on page reload
    NbMenuComponent.prototype.onSelectItem = 
    // TODO: is not fired on page reload
    function (item) {
        this.menuInternalService.resetItems(this.items);
        this.menuInternalService.selectItem(item, this.tag);
    };
    NbMenuComponent.prototype.onItemClick = function (item) {
        this.menuInternalService.itemClick(item, this.tag);
    };
    NbMenuComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    NbMenuComponent.prototype.navigateHome = function () {
        var homeItem = this.getHomeItem(this.items);
        if (homeItem) {
            if (homeItem.link) {
                this.router.navigate([homeItem.link], { queryParams: homeItem.queryParams, fragment: homeItem.fragment });
            }
            if (homeItem.url) {
                this.window.location.href = homeItem.url;
            }
        }
    };
    NbMenuComponent.prototype.getHomeItem = function (items) {
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            if (item.home) {
                return item;
            }
            var homeItem = item.children && this.getHomeItem(item.children);
            if (homeItem) {
                return homeItem;
            }
        }
    };
    NbMenuComponent.prototype.compareTag = function (tag) {
        return !tag || tag === this.tag;
    };
    NbMenuComponent.prototype.getSelectedItem = function (items) {
        var _this = this;
        var selected = null;
        items.forEach(function (item) {
            if (item.selected) {
                selected = item;
            }
            if (item.selected && item.children && item.children.length > 0) {
                selected = _this.getSelectedItem(item.children);
            }
        });
        return selected;
    };
    NbMenuComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'nb-menu',
                    styles: [":host /deep/ {display:block}:host /deep/ .menu-items,:host /deep/ .menu-item>.menu-items{list-style-type:none;overflow:hidden;transition:max-height 0.3s ease-in}:host /deep/ .menu-item a{display:flex;color:inherit;text-decoration:none;align-items:center}:host /deep/ .menu-item{cursor:pointer;}:host /deep/ .menu-item a .menu-title{flex:1}[dir=rtl] :host /deep/ .menu-item a .menu-title{text-align:right} "],
                    template: "\n    <ul class=\"menu-items\">\n      <ng-container *ngFor=\"let item of items\">\n        <li nbMenuItem *ngIf=\"!item.hidden\"\n            [menuItem]=\"item\"\n            [class.menu-group]=\"item.group\"\n            (hoverItem)=\"onHoverItem($event)\"\n            (toggleSubMenu)=\"onToggleSubMenu($event)\"\n            (selectItem)=\"onSelectItem($event)\"\n            (itemClick)=\"onItemClick($event)\"\n            class=\"menu-item\">\n        </li>\n      </ng-container>\n    </ul>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbMenuComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_theme_options__WEBPACK_IMPORTED_MODULE_6__["NB_WINDOW"],] },] },
        { type: _menu_service__WEBPACK_IMPORTED_MODULE_4__["NbMenuInternalService"], },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], },
    ]; };
    NbMenuComponent.propDecorators = {
        "inverseValue": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.inverse',] },],
        "tag": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "items": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "inverse": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "autoCollapse": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NbMenuComponent;
}());

//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/components/menu/menu.module.js":
/*!***************************************************************!*\
  !*** ./src/app/@nebular/theme/components/menu/menu.module.js ***!
  \***************************************************************/
/*! exports provided: NbMenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbMenuModule", function() { return NbMenuModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/@nebular/theme/components/shared/shared.module.js");
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.component */ "./src/app/@nebular/theme/components/menu/menu.component.js");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.service */ "./src/app/@nebular/theme/components/menu/menu.service.js");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




var nbMenuComponents = [_menu_component__WEBPACK_IMPORTED_MODULE_2__["NbMenuComponent"], _menu_component__WEBPACK_IMPORTED_MODULE_2__["NbMenuItemComponent"]];
var NB_MENU_PROVIDERS = [_menu_service__WEBPACK_IMPORTED_MODULE_3__["NbMenuService"], _menu_service__WEBPACK_IMPORTED_MODULE_3__["NbMenuInternalService"]];
var NbMenuModule = /** @class */ (function () {
    function NbMenuModule() {
    }
    NbMenuModule.forRoot = function () {
        return {
            ngModule: NbMenuModule,
            providers: NB_MENU_PROVIDERS.slice(),
        };
    };
    NbMenuModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["NbSharedModule"]],
                    declarations: nbMenuComponents.slice(),
                    exports: nbMenuComponents.slice(),
                },] },
    ];
    return NbMenuModule;
}());

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/components/menu/menu.service.js":
/*!****************************************************************!*\
  !*** ./src/app/@nebular/theme/components/menu/menu.service.js ***!
  \****************************************************************/
/*! exports provided: NbMenuItem, NbMenuService, NbMenuInternalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbMenuItem", function() { return NbMenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbMenuService", function() { return NbMenuService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbMenuInternalService", function() { return NbMenuInternalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _url_matching_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./url-matching-helpers */ "./src/app/@nebular/theme/components/menu/url-matching-helpers.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var itemClick$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
var addItems$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
var navigateHome$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
var getSelectedItem$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
var itemSelect$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
var itemHover$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
var submenuToggle$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
// TODO: check if we need both URL and LINK
/**
 * Menu Item options
 */
var 
// TODO: check if we need both URL and LINK
/**
 * Menu Item options
 */
NbMenuItem = /** @class */ (function () {
    function NbMenuItem() {
        /**
           * Children items height
           * @type {number}
           */
        this.subMenuHeight = 0;
        /**
           * Item is selected when partly or fully equal to the current url
           * @type {string}
           */
        this.pathMatch = 'full';
    }
    return NbMenuItem;
}());
// TODO: check if we need both URL and LINK
/**
 * Menu Item options
 */

// TODO: map select events to router change events
// TODO: review the interface
/**
 * Menu Service. Allows you to listen to menu events, or to interact with a menu.
 */
var NbMenuService = /** @class */ (function () {

    function NbMenuService() {
    }

    /**
     * Add items to the end of the menu items list
     * @param {List<NbMenuItem>} items
     * @param {string} tag
     */
    /**
       * Add items to the end of the menu items list
       * @param {List<NbMenuItem>} items
       * @param {string} tag
       */
    NbMenuService.prototype.addItems = /**
       * Add items to the end of the menu items list
       * @param {List<NbMenuItem>} items
       * @param {string} tag
       */
    function (items, tag) {
        addItems$.next({ tag: tag, items: items });
    };
    /**
     * Navigate to the home menu item
     * @param {string} tag
     */
    /**
       * Navigate to the home menu item
       * @param {string} tag
       */
    NbMenuService.prototype.navigateHome = /**
       * Navigate to the home menu item
       * @param {string} tag
       */
    function (tag) {
        navigateHome$.next({ tag: tag });
    };
    /**
     * Returns currently selected item. Won't subscribe to the future events.
     * @param {string} tag
     * @returns {Observable<{tag: string; item: NbMenuItem}>}
     */
    /**
       * Returns currently selected item. Won't subscribe to the future events.
       * @param {string} tag
       * @returns {Observable<{tag: string; item: NbMenuItem}>}
       */
    NbMenuService.prototype.getSelectedItem = /**
       * Returns currently selected item. Won't subscribe to the future events.
       * @param {string} tag
       * @returns {Observable<{tag: string; item: NbMenuItem}>}
       */
    function (tag) {
        var listener = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        getSelectedItem$.next({ tag: tag, listener: listener });
        return listener.asObservable();
    };
    NbMenuService.prototype.onItemClick = function () {
        return itemClick$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
    };
    NbMenuService.prototype.onItemSelect = function () {
        return itemSelect$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
    };
    NbMenuService.prototype.onItemHover = function () {
        return itemHover$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
    };
    NbMenuService.prototype.onSubmenuToggle = function () {
        return submenuToggle$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
    };
    NbMenuService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return NbMenuService;
}());

var NbMenuInternalService = /** @class */ (function () {
    function NbMenuInternalService(location) {
        this.location = location;
        this.items = [];
        this.items = [];
    }
    NbMenuInternalService.prototype.getItems = function () {
        return this.items;
    };
    NbMenuInternalService.prototype.prepareItems = function (items) {
        var _this = this;
        var defaultItem = new NbMenuItem();
        items.forEach(function (i) {
            _this.applyDefaults(i, defaultItem);
            _this.setParent(i);
        });
    };
    NbMenuInternalService.prototype.updateSelection = function (items, tag, collapseOther) {
        var _this = this;
        if (collapseOther === void 0) { collapseOther = false; }
        if (collapseOther) {
            this.collapseAll(items, tag);
        }
        items.forEach(function (item) { return _this.selectItemByUrl(item, tag); });
    };
    NbMenuInternalService.prototype.resetItems = function (items) {
        var _this = this;
        items.forEach(function (i) { return _this.resetItem(i); });
    };
    NbMenuInternalService.prototype.collapseAll = function (items, tag, except) {
        var _this = this;
        items.forEach(function (i) { return _this.collapseItem(i, tag, except); });
    };
    NbMenuInternalService.prototype.onAddItem = function () {
        return addItems$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
    };
    NbMenuInternalService.prototype.onNavigateHome = function () {
        return navigateHome$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
    };
    NbMenuInternalService.prototype.onGetSelectedItem = function () {
        return getSelectedItem$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
    };
    NbMenuInternalService.prototype.itemHover = function (item, tag) {
        itemHover$.next({ tag: tag, item: item });
    };
    NbMenuInternalService.prototype.submenuToggle = function (item, tag) {
        submenuToggle$.next({ tag: tag, item: item });
    };
    NbMenuInternalService.prototype.itemSelect = function (item, tag) {
        itemSelect$.next({ tag: tag, item: item });
    };
    NbMenuInternalService.prototype.itemClick = function (item, tag) {
        itemClick$.next({ tag: tag, item: item });
    };
    NbMenuInternalService.prototype.resetItem = function (item) {
        var _this = this;
        item.selected = false;
        item.children && item.children.forEach(function (child) {
            _this.resetItem(child);
        });
    };
    NbMenuInternalService.prototype.isParent = function (parent, child) {
        return child.parent
            ? child.parent === parent || this.isParent(parent, child.parent)
            : false;
    };
    NbMenuInternalService.prototype.collapseItem = function (item, tag, except) {
        var _this = this;
        if (except && (item === except || this.isParent(item, except))) {
            return;
        }
        var wasExpanded = item.expanded;
        item.expanded = false;
        if (wasExpanded) {
            this.submenuToggle(item);
        }
        item.children && item.children.forEach(function (child) { return _this.collapseItem(child, tag); });
    };
    NbMenuInternalService.prototype.applyDefaults = function (item, defaultItem) {
        var _this = this;
        var menuItem = __assign({}, item);
        Object.assign(item, defaultItem, menuItem);
        item.children && item.children.forEach(function (child) {
            _this.applyDefaults(child, defaultItem);
        });
    };
    NbMenuInternalService.prototype.setParent = function (item) {
        var _this = this;
        item.children && item.children.forEach(function (child) {
            child.parent = item;
            _this.setParent(child);
        });
    };
    NbMenuInternalService.prototype.selectItem = function (item, tag) {
        item.selected = true;
        this.itemSelect(item, tag);
        this.selectParent(item, tag);
    };
    NbMenuInternalService.prototype.selectParent = function (_a, tag) {
        var item = _a.parent;
        if (!item) {
            return;
        }
        if (!item.expanded) {
            item.expanded = true;
            this.submenuToggle(item, tag);
        }
        item.selected = true;
        this.selectParent(item, tag);
    };
    NbMenuInternalService.prototype.selectItemByUrl = function (item, tag) {
        var wasSelected = item.selected;
        var isSelected = this.selectedInUrl(item);
        if (!wasSelected && isSelected) {
            this.selectItem(item, tag);
        }
        if (item.children) {
            this.updateSelection(item.children, tag);
        }
    };
    NbMenuInternalService.prototype.selectedInUrl = function (item) {
        var exact = item.pathMatch === 'full';
        return exact
            ? Object(_url_matching_helpers__WEBPACK_IMPORTED_MODULE_4__["isUrlPathEqual"])(this.location.path(), item.link)
            : Object(_url_matching_helpers__WEBPACK_IMPORTED_MODULE_4__["isUrlPathContain"])(this.location.path(), item.link);
    };
    NbMenuInternalService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NbMenuInternalService.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], },
    ]; };
    return NbMenuInternalService;
}());

//# sourceMappingURL=menu.service.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/components/menu/url-matching-helpers.js":
/*!************************************************************************!*\
  !*** ./src/app/@nebular/theme/components/menu/url-matching-helpers.js ***!
  \************************************************************************/
/*! exports provided: isUrlPathEqual, isUrlPathContain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUrlPathEqual", function() { return isUrlPathEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUrlPathContain", function() { return isUrlPathContain; });
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
function isUrlPathEqual(path, link) {
    var locationPath = getPathPartOfUrl(path);
    return link === locationPath;
}
function isUrlPathContain(path, link) {
    var locationPath = getPathPartOfUrl(path);
    var endOfUrlSegmentRegExp = /\/|^$/;
    return locationPath.startsWith(link) &&
        locationPath.slice(link.length).charAt(0).search(endOfUrlSegmentRegExp) !== -1;
}
function getPathPartOfUrl(url) {
    return url.match(/.*?(?=[?#]|$)/)[0];
}
//# sourceMappingURL=url-matching-helpers.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/components/popover/helpers/adjustment.helper.js":
/*!********************************************************************************!*\
  !*** ./src/app/@nebular/theme/components/popover/helpers/adjustment.helper.js ***!
  \********************************************************************************/
/*! exports provided: NbAdjustmentHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbAdjustmentHelper", function() { return NbAdjustmentHelper; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../theme.options */ "./src/app/@nebular/theme/theme.options.js");
/* harmony import */ var _positioning_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./positioning.helper */ "./src/app/@nebular/theme/components/popover/helpers/positioning.helper.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model */ "./src/app/@nebular/theme/components/popover/helpers/model.js");




/**
 * Describes the bypass order of the {@link NbPopoverPlacement} in the {@link NbPopoverAdjustment}.
 * */
var NB_ORDERED_PLACEMENTS = (_a = {},
    _a[_model__WEBPACK_IMPORTED_MODULE_3__["NbPopoverAdjustment"].CLOCKWISE] = [
        _model__WEBPACK_IMPORTED_MODULE_3__["NbPopoverPlacement"].TOP,
        _model__WEBPACK_IMPORTED_MODULE_3__["NbPopoverPlacement"].RIGHT,
        _model__WEBPACK_IMPORTED_MODULE_3__["NbPopoverPlacement"].BOTTOM,
        _model__WEBPACK_IMPORTED_MODULE_3__["NbPopoverPlacement"].LEFT,
    ],
    _a[_model__WEBPACK_IMPORTED_MODULE_3__["NbPopoverAdjustment"].COUNTERCLOCKWISE] = [
        _model__WEBPACK_IMPORTED_MODULE_3__["NbPopoverPlacement"].TOP,
        _model__WEBPACK_IMPORTED_MODULE_3__["NbPopoverPlacement"].LEFT,
        _model__WEBPACK_IMPORTED_MODULE_3__["NbPopoverPlacement"].BOTTOM,
        _model__WEBPACK_IMPORTED_MODULE_3__["NbPopoverPlacement"].RIGHT,
    ],
    _a);
var NbAdjustmentHelper = /** @class */ (function () {
    function NbAdjustmentHelper(positioningHelper, window) {
        this.positioningHelper = positioningHelper;
        this.window = window;
    }
    /**
     * Calculated {@link NbPopoverPosition} based on placed element, host element,
     * placed element placement and adjustment strategy.
     *
     * @param placed {ClientRect} placed element relatively host.
     * @param host {ClientRect} host element.
     * @param placement {NbPopoverPlacement} placed element placement relatively host.
     * @param adjustment {NbPopoverAdjustment} adjustment strategy.
     *
     * @return {NbPopoverPosition} calculated position.
     * */
    /**
       * Calculated {@link NbPopoverPosition} based on placed element, host element,
       * placed element placement and adjustment strategy.
       *
       * @param placed {ClientRect} placed element relatively host.
       * @param host {ClientRect} host element.
       * @param placement {NbPopoverPlacement} placed element placement relatively host.
       * @param adjustment {NbPopoverAdjustment} adjustment strategy.
       *
       * @return {NbPopoverPosition} calculated position.
       * */
    NbAdjustmentHelper.prototype.adjust = /**
       * Calculated {@link NbPopoverPosition} based on placed element, host element,
       * placed element placement and adjustment strategy.
       *
       * @param placed {ClientRect} placed element relatively host.
       * @param host {ClientRect} host element.
       * @param placement {NbPopoverPlacement} placed element placement relatively host.
       * @param adjustment {NbPopoverAdjustment} adjustment strategy.
       *
       * @return {NbPopoverPosition} calculated position.
       * */
    function (placed, host, placement, adjustment) {
        var _this = this;
        var placements = NB_ORDERED_PLACEMENTS[adjustment].slice();
        var ordered = this.orderPlacements(placement, placements);
        var possible = ordered.map(function (pl) {
            return ({
                position: _this.positioningHelper.calcPosition(placed, host, pl),
                placement: pl,
            });
        });
        return this.chooseBest(placed, possible);
    };
    /**
     * Searches first adjustment which doesn't go beyond the viewport.
     *
     * @param placed {ClientRect} placed element relatively host.
     * @param possible {NbPopoverPosition[]} possible positions list ordered according to adjustment strategy.
     *
     * @return {NbPopoverPosition} calculated position.
     * */
    /**
       * Searches first adjustment which doesn't go beyond the viewport.
       *
       * @param placed {ClientRect} placed element relatively host.
       * @param possible {NbPopoverPosition[]} possible positions list ordered according to adjustment strategy.
       *
       * @return {NbPopoverPosition} calculated position.
       * */
    NbAdjustmentHelper.prototype.chooseBest = /**
       * Searches first adjustment which doesn't go beyond the viewport.
       *
       * @param placed {ClientRect} placed element relatively host.
       * @param possible {NbPopoverPosition[]} possible positions list ordered according to adjustment strategy.
       *
       * @return {NbPopoverPosition} calculated position.
       * */
    function (placed, possible) {
        var _this = this;
        return possible.find(function (adjust) { return _this.inViewPort(placed, adjust); }) || possible.shift();
    };
    /**
     * Finds out is adjustment doesn't go beyond of the view port.
     *
     * @param placed {ClientRect} placed element relatively host.
     * @param position {NbPopoverPosition} position of the placed element.
     *
     * @return {boolean} true if placed element completely viewport.
     * */
    /**
       * Finds out is adjustment doesn't go beyond of the view port.
       *
       * @param placed {ClientRect} placed element relatively host.
       * @param position {NbPopoverPosition} position of the placed element.
       *
       * @return {boolean} true if placed element completely viewport.
       * */
    NbAdjustmentHelper.prototype.inViewPort = /**
       * Finds out is adjustment doesn't go beyond of the view port.
       *
       * @param placed {ClientRect} placed element relatively host.
       * @param position {NbPopoverPosition} position of the placed element.
       *
       * @return {boolean} true if placed element completely viewport.
       * */
    function (placed, position) {
        return position.position.top - this.window.pageYOffset > 0
            && position.position.left - this.window.pageXOffset > 0
            && position.position.top + placed.height < this.window.innerHeight + this.window.pageYOffset
            && position.position.left + placed.width < this.window.innerWidth + this.window.pageXOffset;
    };
    /**
     * Reorder placements list to make placement start point and fit {@link NbPopoverAdjustment}
     *
     * @param placement {NbPopoverPlacement} active placement
     * @param placements {NbPopoverPlacement[]} placements list according to the active adjustment strategy.
     *
     * @return {NbPopoverPlacement[]} correctly ordered placements list.
     *
     * @example order placements for {@link NbPopoverPlacement#RIGHT} and {@link NbPopoverAdjustment#CLOCKWISE}
     * ```
     * const placements = NB_ORDERED_PLACEMENTS[NbPopoverAdjustment.CLOCKWISE];
     * const ordered = orderPlacement(NbPopoverPlacement.RIGHT, placements);
     *
     * expect(ordered).toEqual([
     *  NbPopoverPlacement.RIGHT,
     *  NbPopoverPlacement.BOTTOM,
     *  NbPopoverPlacement.LEFT,
     *  NbPopoverPlacement.TOP,
     * ]);
     * ```
     * */
    /**
       * Reorder placements list to make placement start point and fit {@link NbPopoverAdjustment}
       *
       * @param placement {NbPopoverPlacement} active placement
       * @param placements {NbPopoverPlacement[]} placements list according to the active adjustment strategy.
       *
       * @return {NbPopoverPlacement[]} correctly ordered placements list.
       *
       * @example order placements for {@link NbPopoverPlacement#RIGHT} and {@link NbPopoverAdjustment#CLOCKWISE}
       * ```
       * const placements = NB_ORDERED_PLACEMENTS[NbPopoverAdjustment.CLOCKWISE];
       * const ordered = orderPlacement(NbPopoverPlacement.RIGHT, placements);
       *
       * expect(ordered).toEqual([
       *  NbPopoverPlacement.RIGHT,
       *  NbPopoverPlacement.BOTTOM,
       *  NbPopoverPlacement.LEFT,
       *  NbPopoverPlacement.TOP,
       * ]);
       * ```
       * */
    NbAdjustmentHelper.prototype.orderPlacements = /**
       * Reorder placements list to make placement start point and fit {@link NbPopoverAdjustment}
       *
       * @param placement {NbPopoverPlacement} active placement
       * @param placements {NbPopoverPlacement[]} placements list according to the active adjustment strategy.
       *
       * @return {NbPopoverPlacement[]} correctly ordered placements list.
       *
       * @example order placements for {@link NbPopoverPlacement#RIGHT} and {@link NbPopoverAdjustment#CLOCKWISE}
       * ```
       * const placements = NB_ORDERED_PLACEMENTS[NbPopoverAdjustment.CLOCKWISE];
       * const ordered = orderPlacement(NbPopoverPlacement.RIGHT, placements);
       *
       * expect(ordered).toEqual([
       *  NbPopoverPlacement.RIGHT,
       *  NbPopoverPlacement.BOTTOM,
       *  NbPopoverPlacement.LEFT,
       *  NbPopoverPlacement.TOP,
       * ]);
       * ```
       * */
    function (placement, placements) {
        var index = placements.indexOf(placement);
        var start = placements.splice(index, placements.length);
        return start.concat.apply(start, placements);
    };
    NbAdjustmentHelper.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NbAdjustmentHelper.ctorParameters = function () { return [
        { type: _positioning_helper__WEBPACK_IMPORTED_MODULE_2__["NbPositioningHelper"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_theme_options__WEBPACK_IMPORTED_MODULE_1__["NB_WINDOW"],] },] },
    ]; };
    return NbAdjustmentHelper;
}());

var _a;
//# sourceMappingURL=adjustment.helper.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/components/popover/helpers/model.js":
/*!********************************************************************!*\
  !*** ./src/app/@nebular/theme/components/popover/helpers/model.js ***!
  \********************************************************************/
/*! exports provided: NbPopoverPosition, NbPopoverAdjustment, NbPopoverPlacement, NbPopoverLogicalPlacement, NbPopoverMode, NbPopoverTrigger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbPopoverPosition", function() { return NbPopoverPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbPopoverAdjustment", function() { return NbPopoverAdjustment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbPopoverPlacement", function() { return NbPopoverPlacement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbPopoverLogicalPlacement", function() { return NbPopoverLogicalPlacement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbPopoverMode", function() { return NbPopoverMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbPopoverTrigger", function() { return NbPopoverTrigger; });
/**
 * Describes placement of the UI element on the screen.
 * */
var /**
 * Describes placement of the UI element on the screen.
 * */
NbPopoverPosition = /** @class */ (function () {
    function NbPopoverPosition() {
    }
    return NbPopoverPosition;
}());
/**
 * Describes placement of the UI element on the screen.
 * */

/**
 * Adjustment strategies.
 * */
/**
 * Adjustment strategies.
 * */
var NbPopoverAdjustment;
/**
 * Adjustment strategies.
 * */
(function (NbPopoverAdjustment) {
    NbPopoverAdjustment["CLOCKWISE"] = "clockwise";
    NbPopoverAdjustment["COUNTERCLOCKWISE"] = "counterclockwise";
})(NbPopoverAdjustment || (NbPopoverAdjustment = {}));
/**
 * Arrangement of one element relative to another.
 * */
/**
 * Arrangement of one element relative to another.
 * */
var NbPopoverPlacement;
/**
 * Arrangement of one element relative to another.
 * */
(function (NbPopoverPlacement) {
    NbPopoverPlacement["TOP"] = "top";
    NbPopoverPlacement["BOTTOM"] = "bottom";
    NbPopoverPlacement["LEFT"] = "left";
    NbPopoverPlacement["RIGHT"] = "right";
})(NbPopoverPlacement || (NbPopoverPlacement = {}));
var NbPopoverLogicalPlacement;
(function (NbPopoverLogicalPlacement) {
    NbPopoverLogicalPlacement["START"] = "start";
    NbPopoverLogicalPlacement["END"] = "end";
})(NbPopoverLogicalPlacement || (NbPopoverLogicalPlacement = {}));
/**
 * NbPopoverMode describes when to trigger show and hide methods of the popover.
 * */
/**
 * NbPopoverMode describes when to trigger show and hide methods of the popover.
 * */
var NbPopoverMode;
/**
 * NbPopoverMode describes when to trigger show and hide methods of the popover.
 * */
(function (NbPopoverMode) {
    NbPopoverMode["CLICK"] = "click";
    NbPopoverMode["HOVER"] = "hover";
    NbPopoverMode["HINT"] = "hint";
})(NbPopoverMode || (NbPopoverMode = {}));
/**
 * Popover uses different triggers for different {@link NbPopoverMode}.
 * see {@link NbTriggerHelper}
 * */
var /**
 * Popover uses different triggers for different {@link NbPopoverMode}.
 * see {@link NbTriggerHelper}
 * */
NbPopoverTrigger = /** @class */ (function () {
    function NbPopoverTrigger() {
    }
    return NbPopoverTrigger;
}());
/**
 * Popover uses different triggers for different {@link NbPopoverMode}.
 * see {@link NbTriggerHelper}
 * */

//# sourceMappingURL=model.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/components/popover/helpers/placement.helper.js":
/*!*******************************************************************************!*\
  !*** ./src/app/@nebular/theme/components/popover/helpers/placement.helper.js ***!
  \*******************************************************************************/
/*! exports provided: NbPlacementHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbPlacementHelper", function() { return NbPlacementHelper; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_direction_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/direction.service */ "./src/app/@nebular/theme/services/direction.service.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model */ "./src/app/@nebular/theme/components/popover/helpers/model.js");



var NbPlacementHelper = /** @class */ (function () {
    function NbPlacementHelper(layoutDirectionService) {
        this.layoutDirectionService = layoutDirectionService;
    }
    /*
     * Maps logical position to physical according to current layout direction.
     * */
    /*
       * Maps logical position to physical according to current layout direction.
       * */
    NbPlacementHelper.prototype.toPhysicalPlacement = /*
       * Maps logical position to physical according to current layout direction.
       * */
    function (placement) {
        var isLtr = this.layoutDirectionService.isLtr();
        if (placement === _model__WEBPACK_IMPORTED_MODULE_2__["NbPopoverLogicalPlacement"].START) {
            return isLtr ? _model__WEBPACK_IMPORTED_MODULE_2__["NbPopoverPlacement"].LEFT : _model__WEBPACK_IMPORTED_MODULE_2__["NbPopoverPlacement"].RIGHT;
        }
        if (placement === _model__WEBPACK_IMPORTED_MODULE_2__["NbPopoverLogicalPlacement"].END) {
            return isLtr ? _model__WEBPACK_IMPORTED_MODULE_2__["NbPopoverPlacement"].RIGHT : _model__WEBPACK_IMPORTED_MODULE_2__["NbPopoverPlacement"].LEFT;
        }
        return placement;
    };
    NbPlacementHelper.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NbPlacementHelper.ctorParameters = function () { return [
        { type: _services_direction_service__WEBPACK_IMPORTED_MODULE_1__["NbLayoutDirectionService"], },
    ]; };
    return NbPlacementHelper;
}());

//# sourceMappingURL=placement.helper.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/components/popover/helpers/positioning.helper.js":
/*!*********************************************************************************!*\
  !*** ./src/app/@nebular/theme/components/popover/helpers/positioning.helper.js ***!
  \*********************************************************************************/
/*! exports provided: NbPositioningHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbPositioningHelper", function() { return NbPositioningHelper; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/app/@nebular/theme/components/popover/helpers/model.js");
/* harmony import */ var _theme_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../theme.options */ "./src/app/@nebular/theme/theme.options.js");



var NbPositioningHelper = /** @class */ (function () {
    function NbPositioningHelper(window) {
        this.window = window;
    }
    /**
     * Calculates position of the element relatively to the host element based on the placement.
     * */
    /**
       * Calculates position of the element relatively to the host element based on the placement.
       * */
    NbPositioningHelper.prototype.calcPosition = /**
       * Calculates position of the element relatively to the host element based on the placement.
       * */
    function (positioned, host, placement) {
        var positionCalculator = NbPositioningHelper.positionCalculator[placement];
        var position = positionCalculator.call(NbPositioningHelper.positionCalculator, positioned, host);
        position.top += this.window.pageYOffset;
        position.left += this.window.pageXOffset;
        return position;
    };
    /**
       * Describes height of the popover arrow.
       * */
    NbPositioningHelper.ARROW_SIZE = 10;
    /**
       * Contains position calculators for all {@link NbPopoverPlacement}
       * */
    NbPositioningHelper.positionCalculator = (_a = {},
        _a[_model__WEBPACK_IMPORTED_MODULE_1__["NbPopoverPlacement"].TOP] = function (positioned, host) {
            return {
                top: host.top - positioned.height - NbPositioningHelper.ARROW_SIZE,
                left: host.left + host.width / 2 - positioned.width / 2,
            };
        },
        _a[_model__WEBPACK_IMPORTED_MODULE_1__["NbPopoverPlacement"].BOTTOM] = function (positioned, host) {
            return {
                top: host.top + host.height + NbPositioningHelper.ARROW_SIZE,
                left: host.left + host.width / 2 - positioned.width / 2,
            };
        },
        _a[_model__WEBPACK_IMPORTED_MODULE_1__["NbPopoverPlacement"].LEFT] = function (positioned, host) {
            return {
                top: host.top + host.height / 2 - positioned.height / 2,
                left: host.left - positioned.width - NbPositioningHelper.ARROW_SIZE,
            };
        },
        _a[_model__WEBPACK_IMPORTED_MODULE_1__["NbPopoverPlacement"].RIGHT] = function (positioned, host) {
            return {
                top: host.top + host.height / 2 - positioned.height / 2,
                left: host.left + host.width + NbPositioningHelper.ARROW_SIZE,
            };
        },
        _a);
    NbPositioningHelper.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NbPositioningHelper.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_theme_options__WEBPACK_IMPORTED_MODULE_2__["NB_WINDOW"],] },] },
    ]; };
    return NbPositioningHelper;
}());

var _a;
//# sourceMappingURL=positioning.helper.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/components/popover/helpers/trigger.helper.js":
/*!*****************************************************************************!*\
  !*** ./src/app/@nebular/theme/components/popover/helpers/trigger.helper.js ***!
  \*****************************************************************************/
/*! exports provided: NbTriggerHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbTriggerHelper", function() { return NbTriggerHelper; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _theme_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../theme.options */ "./src/app/@nebular/theme/theme.options.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model */ "./src/app/@nebular/theme/components/popover/helpers/model.js");





/**
 * Describes popover triggers strategies based on popover {@link NbPopoverMode} mode.
 * */
var NB_TRIGGERS = (_a = {},
    /**
     * Creates toggle and close events streams based on popover {@link NbPopoverMode#CLICK} mode.
     * Fires toggle event when click was performed on the host element.
     * Fires close event when click was performed on the document but
     * not on the host or container or popover container isn't rendered yet.
     *
     * @param host {HTMLElement} popover host element.
     * @param getContainer {Function} popover container getter.
     * @param document {Document} document ref.
     *
     * @return {NbPopoverTrigger} open and close events streams.
     * */
    _a[_model__WEBPACK_IMPORTED_MODULE_4__["NbPopoverMode"].CLICK] = /**
       * Creates toggle and close events streams based on popover {@link NbPopoverMode#CLICK} mode.
       * Fires toggle event when click was performed on the host element.
       * Fires close event when click was performed on the document but
       * not on the host or container or popover container isn't rendered yet.
       *
       * @param host {HTMLElement} popover host element.
       * @param getContainer {Function} popover container getter.
       * @param document {Document} document ref.
       *
       * @return {NbPopoverTrigger} open and close events streams.
       * */
    function (host, getContainer, document) {
        return {
            open: rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"],
            close: Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(document, 'click')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) {
                return !host.contains(event.target)
                    && getContainer()
                    && !getContainer().location.nativeElement.contains(event.target);
            })),
            toggle: Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(host, 'click'),
        };
    },
    /**
     * Creates open and close events streams based on popover {@link NbPopoverMode#HOVER} mode.
     * Fires open event when mouse hovers over the host element and stay over at least 100 milliseconds.
     * Fires close event when mouse leaves the host element and stops out of the host and popover container.
     *
     * @param host {HTMLElement} popover host element.
     * @param getContainer {Function} popover container getter.
     * @param document {Document} document ref.
     *
     * @return {NbPopoverTrigger} open and close events streams.
     * */
    _a[_model__WEBPACK_IMPORTED_MODULE_4__["NbPopoverMode"].HOVER] = /**
       * Creates open and close events streams based on popover {@link NbPopoverMode#HOVER} mode.
       * Fires open event when mouse hovers over the host element and stay over at least 100 milliseconds.
       * Fires close event when mouse leaves the host element and stops out of the host and popover container.
       *
       * @param host {HTMLElement} popover host element.
       * @param getContainer {Function} popover container getter.
       * @param document {Document} document ref.
       *
       * @return {NbPopoverTrigger} open and close events streams.
       * */
    function (host, getContainer, document) {
        return {
            open: Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(host, 'mouseenter')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(host, 'mouseleave')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["repeat"])()),
            close: Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(host, 'mouseleave')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(document, 'mousemove')
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])(function () { return !!getContainer(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) {
                    return !host.contains(event.target)
                        && !getContainer().location.nativeElement.contains(event.target);
                }));
            })),
            toggle: rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"],
        };
    },
    /**
     * Creates open and close events streams based on popover {@link NbPopoverMode#HOVER} mode.
     * Fires open event when mouse hovers over the host element and stay over at least 100 milliseconds.
     * Fires close event when mouse leaves the host element.
     *
     * @param host {HTMLElement} popover host element.
     *
     * @return {NbPopoverTrigger} open and close events streams.
     * */
    _a[_model__WEBPACK_IMPORTED_MODULE_4__["NbPopoverMode"].HINT] = /**
       * Creates open and close events streams based on popover {@link NbPopoverMode#HOVER} mode.
       * Fires open event when mouse hovers over the host element and stay over at least 100 milliseconds.
       * Fires close event when mouse leaves the host element.
       *
       * @param host {HTMLElement} popover host element.
       *
       * @return {NbPopoverTrigger} open and close events streams.
       * */
    function (host) {
        return {
            open: Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(host, 'mouseenter')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(host, 'mouseleave')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["repeat"])()),
            close: Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(host, 'mouseleave'),
            toggle: rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"],
        };
    },
    _a);
var NbTriggerHelper = /** @class */ (function () {
    function NbTriggerHelper(document) {
        this.document = document;
    }
    /**
     * Creates open and close events streams based on popover {@link NbPopoverMode} mode.
     *
     * @param host {HTMLElement} popover host element.
     * @param getContainer {Function} popover container getter.
     * Getter required because listen can be called when container isn't initialized.
     * @param mode {NbPopoverMode} describes container triggering strategy.
     *
     * @return {NbPopoverTrigger} open and close events streams.
     * */
    /**
       * Creates open and close events streams based on popover {@link NbPopoverMode} mode.
       *
       * @param host {HTMLElement} popover host element.
       * @param getContainer {Function} popover container getter.
       * Getter required because listen can be called when container isn't initialized.
       * @param mode {NbPopoverMode} describes container triggering strategy.
       *
       * @return {NbPopoverTrigger} open and close events streams.
       * */
    NbTriggerHelper.prototype.createTrigger = /**
       * Creates open and close events streams based on popover {@link NbPopoverMode} mode.
       *
       * @param host {HTMLElement} popover host element.
       * @param getContainer {Function} popover container getter.
       * Getter required because listen can be called when container isn't initialized.
       * @param mode {NbPopoverMode} describes container triggering strategy.
       *
       * @return {NbPopoverTrigger} open and close events streams.
       * */
    function (host, getContainer, mode) {
        var createTrigger = NB_TRIGGERS[mode];
        return createTrigger.call(NB_TRIGGERS, host, getContainer, this.document);
    };
    NbTriggerHelper.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NbTriggerHelper.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_theme_options__WEBPACK_IMPORTED_MODULE_3__["NB_DOCUMENT"],] },] },
    ]; };
    return NbTriggerHelper;
}());

var _a;
//# sourceMappingURL=trigger.helper.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/components/popover/popover.component.js":
/*!************************************************************************!*\
  !*** ./src/app/@nebular/theme/components/popover/popover.component.js ***!
  \************************************************************************/
/*! exports provided: NbPopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbPopoverComponent", function() { return NbPopoverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/model */ "./src/app/@nebular/theme/components/popover/helpers/model.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */



/**
 * Popover container.
 * Renders provided content inside.
 *
 * @styles
 *
 * popover-fg
 * popover-bg
 * popover-border
 * popover-shadow
 * */
var NbPopoverComponent = /** @class */ (function () {
    function NbPopoverComponent(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        /**
           * Popover placement relatively host element.
           * */
        this.placement = _helpers_model__WEBPACK_IMPORTED_MODULE_1__["NbPopoverPlacement"].TOP;
        this.positionTop = 0;
        this.positionLeft = 0;
    }
    Object.defineProperty(NbPopoverComponent.prototype, "componentOutlet", {
        set: /**
           * If content type is TemplateRef we're passing context as template outlet param.
           * But if we have custom component content we're just assigning passed context to the component instance.
           * */
        function (el) {
            if (this.isComponent) {
                Object.assign(el._componentRef.instance, this.context);
                /**
                       * Change detection have to performed here, because another way applied context
                       * will be rendered on the next change detection loop and
                       * we'll have incorrect positioning. Because rendered component may change its size
                       * based on the context.
                       * */
                this.changeDetectorRef.detectChanges();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbPopoverComponent.prototype, "isTemplate", {
        /**
         * Check that content is a TemplateRef.
         *
         * @return boolean
         * */
        get: /**
           * Check that content is a TemplateRef.
           *
           * @return boolean
           * */
        function () {
            return this.content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbPopoverComponent.prototype, "isComponent", {
        /**
         * Check that content is an angular component.
         *
         * @return boolean
         * */
        get: /**
           * Check that content is an angular component.
           *
           * @return boolean
           * */
        function () {
            return this.content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["Type"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbPopoverComponent.prototype, "isPrimitive", {
        /**
         * Check that if content is not a TemplateRef or an angular component it means a primitive.
         * */
        get: /**
           * Check that if content is not a TemplateRef or an angular component it means a primitive.
           * */
        function () {
            return !this.isTemplate && !this.isComponent;
        },
        enumerable: true,
        configurable: true
    });
    NbPopoverComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'nb-popover',
                    styles: [":host{position:absolute;z-index:10000;border-radius:5px;top:200px}:host .primitive-popover{padding:0.75rem 1rem}:host .arrow{position:absolute;width:0;height:0}:host .arrow{border-left:11px solid transparent;border-right:11px solid transparent}:host .arrow::after{position:absolute;content:' ';width:0;height:0;top:3px;left:calc(50% - 9px);border-left:9px solid transparent;border-right:9px solid transparent}:host.bottom .arrow{top:-11px;left:calc(50% - 11px)}:host.left .arrow{right:-17px;top:calc(50% - 5.5px);transform:rotate(90deg)}:host.top .arrow{bottom:-11px;left:calc(50% - 11px);transform:rotate(180deg)}:host.right .arrow{left:-17px;top:calc(50% - 5.5px);transform:rotate(270deg)} "],
                    template: "\n    <span class=\"arrow\"></span>\n\n    <ng-container *ngIf=\"isTemplate\">\n      <ng-container *ngTemplateOutlet=\"content; context: context\"></ng-container>\n    </ng-container>\n    <ng-container *ngIf=\"isComponent\" [ngComponentOutlet]=\"content\"></ng-container>\n    <ng-container *ngIf=\"isPrimitive\">\n      <div class=\"primitive-popover\">{{content}}</div>\n    </ng-container>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbPopoverComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    ]; };
    NbPopoverComponent.propDecorators = {
        "content": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "context": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class',] },],
        "positionTop": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.top.px',] },],
        "positionLeft": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.left.px',] },],
        "componentOutlet": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgComponentOutlet"],] },],
    };
    return NbPopoverComponent;
}());

//# sourceMappingURL=popover.component.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/components/popover/popover.directive.js":
/*!************************************************************************!*\
  !*** ./src/app/@nebular/theme/components/popover/popover.directive.js ***!
  \************************************************************************/
/*! exports provided: NbPopoverDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbPopoverDirective", function() { return NbPopoverDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _helpers_positioning_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/positioning.helper */ "./src/app/@nebular/theme/components/popover/helpers/positioning.helper.js");
/* harmony import */ var _popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popover.component */ "./src/app/@nebular/theme/components/popover/popover.component.js");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/theme.service */ "./src/app/@nebular/theme/services/theme.service.js");
/* harmony import */ var _helpers_adjustment_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/adjustment.helper */ "./src/app/@nebular/theme/components/popover/helpers/adjustment.helper.js");
/* harmony import */ var _helpers_trigger_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/trigger.helper */ "./src/app/@nebular/theme/components/popover/helpers/trigger.helper.js");
/* harmony import */ var _helpers_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers/model */ "./src/app/@nebular/theme/components/popover/helpers/model.js");
/* harmony import */ var _helpers_placement_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/placement.helper */ "./src/app/@nebular/theme/components/popover/helpers/placement.helper.js");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */










/**
 * Powerful popover directive, which provides the best UX for your users.
 *
 * ![image](assets/images/components/popover.gif)
 *
 * @example Popover can accept different content such as:
 * TemplateRef
 *
 * ```
 * <button [nbPopover]="templateRef"></button>
 * <ng-template #templateRef>
 *   <span>Hello, Popover!</span>
 * </ng-template>
 * ```
 *
 * @example Custom components
 *
 * ```
 * <button [nbPopover]="NbCardComponent"></button>
 * ```
 *
 * @example Primitive types
 *
 * ```
 * <button nbPopover="Hello, Popover!"></button>
 * ```
 *
 * @example Popover has different placements, such as: top, bottom, left and right
 * which can be used as following:
 *
 * ```
 * <button nbPopover="Hello, Popover!" nbPopoverPlacement="left"></button>
 * ```
 *
 * @example By default popover will try to adjust itself to maximally fit viewport
 * and provide the best user experience. It will try to change placement of the popover container.
 * If you wanna disable this behaviour just set it falsy value.
 *
 * ```
 * <button nbPopover="Hello, Popover!" [nbPopoverAdjust]="false"></button>
 * ```
 *
 * */
/*
*
* TODO
* Rendering strategy have to be refactored.
* For now directive creates and deletes popover container each time.
* I think we can handle this slightly smarter and show/hide in any situations.
*/
var NbPopoverDirective = /** @class */ (function () {
    function NbPopoverDirective(hostRef, themeService, componentFactoryResolver, positioningHelper, adjustmentHelper, triggerHelper, platformId, placementHelper) {
        this.hostRef = hostRef;
        this.themeService = themeService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.positioningHelper = positioningHelper;
        this.adjustmentHelper = adjustmentHelper;
        this.triggerHelper = triggerHelper;
        this.platformId = platformId;
        this.placementHelper = placementHelper;
        /**
           * Position will be calculated relatively host element based on the placement.
           * Can be top, right, bottom, left, start or end.
           * */
        this.placement = _helpers_model__WEBPACK_IMPORTED_MODULE_8__["NbPopoverPlacement"].TOP;
        /**
           * Container placement will be changes automatically based on this strategy if container can't fit view port.
           * Set this property to any falsy value if you want to disable automatically adjustment.
           * Available values: clockwise, counterclockwise.
           * */
        this.adjustment = _helpers_model__WEBPACK_IMPORTED_MODULE_8__["NbPopoverAdjustment"].CLOCKWISE;
        /**
           * Describes when the container will be shown.
           * Available options: click, hover and hint
           * */
        this.mode = _helpers_model__WEBPACK_IMPORTED_MODULE_8__["NbPopoverMode"].CLICK;
        /*
           * Is used for unsubscribe all subscriptions after component destructuring.
           * */
        this.alive = true;
    }
    Object.defineProperty(NbPopoverDirective.prototype, "isShown", {
        /**
         * Returns true if popover already shown.
         * @return boolean
         * */
        get: /**
           * Returns true if popover already shown.
           * @return boolean
           * */
        function () {
            return !!this.containerRef;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbPopoverDirective.prototype, "isHidden", {
        /**
         * Returns true if popover hidden.
         * @return boolean
         * */
        get: /**
           * Returns true if popover hidden.
           * @return boolean
           * */
        function () {
            return !this.containerRef;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbPopoverDirective.prototype, "container", {
        get: function () {
            return this.containerRef.instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbPopoverDirective.prototype, "containerElement", {
        get: function () {
            return this.containerRef.location.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbPopoverDirective.prototype, "hostElement", {
        get: function () {
            return this.hostRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    NbPopoverDirective.prototype.ngOnInit = function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            this.registerTriggers();
        }
    };
    NbPopoverDirective.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    /**
     * Show popover.
     * */
    /**
       * Show popover.
       * */
    NbPopoverDirective.prototype.show = /**
       * Show popover.
       * */
    function () {
        if (this.isHidden) {
            this.renderPopover();
        }
    };
    /**
     * Hide popover.
     * */
    /**
       * Hide popover.
       * */
    NbPopoverDirective.prototype.hide = /**
       * Hide popover.
       * */
    function () {
        if (this.isShown) {
            this.destroyPopover();
        }
    };
    /**
     * Toggle popover state.
     * */
    /**
       * Toggle popover state.
       * */
    NbPopoverDirective.prototype.toggle = /**
       * Toggle popover state.
       * */
    function () {
        if (this.isShown) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    /*
       * Adjust popover position on window resize.
       * Window resize may change host element position, so popover relocation required.
       *
       * TODO
       * Fix tslint to add capability make HostListener private.
       * */
    NbPopoverDirective.prototype.onResize = /*
       * Adjust popover position on window resize.
       * Window resize may change host element position, so popover relocation required.
       *
       * TODO
       * Fix tslint to add capability make HostListener private.
       * */
    function () {
        if (this.isShown) {
            this.place();
        }
    };
    /*
     * Subscribe to the popover triggers created from the {@link NbPopoverDirective#mode}.
     * see {@link NbTriggerHelper}
     * */
    /*
       * Subscribe to the popover triggers created from the {@link NbPopoverDirective#mode}.
       * see {@link NbTriggerHelper}
       * */
    NbPopoverDirective.prototype.registerTriggers = /*
       * Subscribe to the popover triggers created from the {@link NbPopoverDirective#mode}.
       * see {@link NbTriggerHelper}
       * */
    function () {
        var _this = this;
        var _a = this.triggerHelper
            .createTrigger(this.hostElement, function () { return _this.containerRef; }, this.mode), open = _a.open, close = _a.close, toggle = _a.toggle;
        open.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function () { return _this.show(); });
        close.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function () { return _this.hide(); });
        toggle.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function () { return _this.toggle(); });
    };
    /*
     * Renders popover putting {@link NbPopoverComponent} in the top of {@link NbLayoutComponent}
     * and positioning container based on {@link NbPopoverDirective#placement}
     * and {@link NbPopoverDirective#adjustment}.
     * */
    /*
       * Renders popover putting {@link NbPopoverComponent} in the top of {@link NbLayoutComponent}
       * and positioning container based on {@link NbPopoverDirective#placement}
       * and {@link NbPopoverDirective#adjustment}.
       * */
    NbPopoverDirective.prototype.renderPopover = /*
       * Renders popover putting {@link NbPopoverComponent} in the top of {@link NbLayoutComponent}
       * and positioning container based on {@link NbPopoverDirective#placement}
       * and {@link NbPopoverDirective#adjustment}.
       * */
    function () {
        var _this = this;
        var factory = this.componentFactoryResolver.resolveComponentFactory(_popover_component__WEBPACK_IMPORTED_MODULE_4__["NbPopoverComponent"]);
        this.themeService.appendToLayoutTop(factory)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (containerRef) {
            _this.containerRef = containerRef;
            _this.patchPopover(_this.content, _this.context);
            /*
                     * Have to call detectChanges because on this phase {@link NbPopoverComponent} isn't inserted in the DOM
                     * and haven't got calculated size.
                     * But we should have size on this step to calculate popover position correctly.
                     *
                     * TODO
                     * I don't think we have to call detectChanges each time we're using {@link NbThemeService#appendToLayoutTop}.
                     * Investigate, maybe we can create method in the {@link NbThemeService}
                     * which will call {@link NbThemeService#appendToLayoutTop} and 'do' detectChanges,
                     * instead of performing this call by service client.
                     * */
            /*
             * Have to call detectChanges because on this phase {@link NbPopoverComponent} isn't inserted in the DOM
             * and haven't got calculated size.
             * But we should have size on this step to calculate popover position correctly.
             *
             * TODO
             * I don't think we have to call detectChanges each time we're using {@link NbThemeService#appendToLayoutTop}.
             * Investigate, maybe we can create method in the {@link NbThemeService}
             * which will call {@link NbThemeService#appendToLayoutTop} and 'do' detectChanges,
             * instead of performing this call by service client.
             * */
            _this.containerRef.changeDetectorRef.markForCheck();
            _this.containerRef.changeDetectorRef.detectChanges();
            _this.place();
        });
    };
    /*
     * Destroys the {@link NbPopoverComponent} and nullify its reference;
     * */
    /*
       * Destroys the {@link NbPopoverComponent} and nullify its reference;
       * */
    NbPopoverDirective.prototype.destroyPopover = /*
       * Destroys the {@link NbPopoverComponent} and nullify its reference;
       * */
    function () {
        this.containerRef.destroy();
        this.containerRef = null;
    };
    /*
     * Moves {@link NbPopoverComponent} relatively host component based on the {@link NbPopoverDirective#placement}.
     * */
    /*
       * Moves {@link NbPopoverComponent} relatively host component based on the {@link NbPopoverDirective#placement}.
       * */
    NbPopoverDirective.prototype.place = /*
       * Moves {@link NbPopoverComponent} relatively host component based on the {@link NbPopoverDirective#placement}.
       * */
    function () {
        var hostRect = this.hostElement.getBoundingClientRect();
        var containerRect = this.containerElement.getBoundingClientRect();
        this.adjust(containerRect, hostRect);
    };
    /*
     * Set container content and context.
     * */
    /*
       * Set container content and context.
       * */
    NbPopoverDirective.prototype.patchPopover = /*
       * Set container content and context.
       * */
    function (content, context) {
        this.container.content = content;
        this.container.context = context;
    };
    /*
     * Set container placement.
     * */
    /*
       * Set container placement.
       * */
    NbPopoverDirective.prototype.patchPopoverPlacement = /*
       * Set container placement.
       * */
    function (placement) {
        this.container.placement = placement;
    };
    /*
     * Set container position.
     * */
    /*
       * Set container position.
       * */
    NbPopoverDirective.prototype.patchPopoverPosition = /*
       * Set container position.
       * */
    function (_a) {
        var top = _a.top, left = _a.left;
        this.container.positionTop = top;
        this.container.positionLeft = left;
    };
    /*
     * Calculates container adjustment and sets container position and placement.
     * */
    /*
       * Calculates container adjustment and sets container position and placement.
       * */
    NbPopoverDirective.prototype.adjust = /*
       * Calculates container adjustment and sets container position and placement.
       * */
    function (containerRect, hostRect) {
        var _a = this.performAdjustment(containerRect, hostRect), placement = _a.placement, position = _a.position;
        this.patchPopoverPlacement(placement);
        this.patchPopoverPosition(position);
    };
    /*
     * Checks if {@link NbPopoverDirective#adjustment} can be performed and runs it.
     * If not, just calculates element position.
     * */
    /*
       * Checks if {@link NbPopoverDirective#adjustment} can be performed and runs it.
       * If not, just calculates element position.
       * */
    NbPopoverDirective.prototype.performAdjustment = /*
       * Checks if {@link NbPopoverDirective#adjustment} can be performed and runs it.
       * If not, just calculates element position.
       * */
    function (placed, host) {
        if (this.adjustment) {
            return this.calcAdjustment(placed, host);
        }
        return this.calcPosition(placed, host);
    };
    /*
     * Calculate adjustment.
     * see {@link NbAdjustmentHelper}.
     * */
    /*
       * Calculate adjustment.
       * see {@link NbAdjustmentHelper}.
       * */
    NbPopoverDirective.prototype.calcAdjustment = /*
       * Calculate adjustment.
       * see {@link NbAdjustmentHelper}.
       * */
    function (placed, host) {
        var placement = this.placementHelper.toPhysicalPlacement(this.placement);
        return this.adjustmentHelper.adjust(placed, host, placement, this.adjustment);
    };
    /*
     * Calculate position.
     * see {@link NbPositioningHelper}
     * */
    /*
       * Calculate position.
       * see {@link NbPositioningHelper}
       * */
    NbPopoverDirective.prototype.calcPosition = /*
       * Calculate position.
       * see {@link NbPositioningHelper}
       * */
    function (placed, host) {
        var placement = this.placementHelper.toPhysicalPlacement(this.placement);
        return {
            position: this.positioningHelper.calcPosition(placed, host, placement),
            placement: placement,
        };
    };
    NbPopoverDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[nbPopover]' },] },
    ];
    /** @nocollapse */
    NbPopoverDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _services_theme_service__WEBPACK_IMPORTED_MODULE_5__["NbThemeService"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], },
        { type: _helpers_positioning_helper__WEBPACK_IMPORTED_MODULE_3__["NbPositioningHelper"], },
        { type: _helpers_adjustment_helper__WEBPACK_IMPORTED_MODULE_6__["NbAdjustmentHelper"], },
        { type: _helpers_trigger_helper__WEBPACK_IMPORTED_MODULE_7__["NbTriggerHelper"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] },] },
        { type: _helpers_placement_helper__WEBPACK_IMPORTED_MODULE_9__["NbPlacementHelper"], },
    ]; };
    NbPopoverDirective.propDecorators = {
        "content": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['nbPopover',] },],
        "context": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['nbPopoverContext',] },],
        "placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['nbPopoverPlacement',] },],
        "adjustment": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['nbPopoverAdjustment',] },],
        "mode": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['nbPopoverMode',] },],
        "onResize": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:resize', ['$event'],] },],
    };
    return NbPopoverDirective;
}());

//# sourceMappingURL=popover.directive.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/components/popover/popover.module.js":
/*!*********************************************************************!*\
  !*** ./src/app/@nebular/theme/components/popover/popover.module.js ***!
  \*********************************************************************/
/*! exports provided: NbPopoverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbPopoverModule", function() { return NbPopoverModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _popover_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popover.component */ "./src/app/@nebular/theme/components/popover/popover.component.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/@nebular/theme/components/shared/shared.module.js");
/* harmony import */ var _popover_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popover.directive */ "./src/app/@nebular/theme/components/popover/popover.directive.js");
/* harmony import */ var _helpers_adjustment_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/adjustment.helper */ "./src/app/@nebular/theme/components/popover/helpers/adjustment.helper.js");
/* harmony import */ var _helpers_positioning_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/positioning.helper */ "./src/app/@nebular/theme/components/popover/helpers/positioning.helper.js");
/* harmony import */ var _helpers_trigger_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/trigger.helper */ "./src/app/@nebular/theme/components/popover/helpers/trigger.helper.js");
/* harmony import */ var _helpers_placement_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/placement.helper */ "./src/app/@nebular/theme/components/popover/helpers/placement.helper.js");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */








var NbPopoverModule = /** @class */ (function () {
    function NbPopoverModule() {
    }
    NbPopoverModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["NbSharedModule"]],
                    declarations: [_popover_component__WEBPACK_IMPORTED_MODULE_1__["NbPopoverComponent"], _popover_directive__WEBPACK_IMPORTED_MODULE_3__["NbPopoverDirective"]],
                    exports: [_popover_directive__WEBPACK_IMPORTED_MODULE_3__["NbPopoverDirective"]],
                    entryComponents: [_popover_component__WEBPACK_IMPORTED_MODULE_1__["NbPopoverComponent"]],
                    providers: [_helpers_adjustment_helper__WEBPACK_IMPORTED_MODULE_4__["NbAdjustmentHelper"], _helpers_positioning_helper__WEBPACK_IMPORTED_MODULE_5__["NbPositioningHelper"], _helpers_trigger_helper__WEBPACK_IMPORTED_MODULE_6__["NbTriggerHelper"], _helpers_placement_helper__WEBPACK_IMPORTED_MODULE_7__["NbPlacementHelper"]],
                },] },
    ];
    return NbPopoverModule;
}());

//# sourceMappingURL=popover.module.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/components/route-tabset/route-tabset.component.js":
/*!**********************************************************************************!*\
  !*** ./src/app/@nebular/theme/components/route-tabset/route-tabset.component.js ***!
  \**********************************************************************************/
/*! exports provided: NbRouteTabsetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbRouteTabsetComponent", function() { return NbRouteTabsetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./src/app/@nebular/theme/components/helpers.js");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */



/**
 * Route tabset components.
 * Renders tabs inside of a router-outlet.
 *
 * @example basic usage example
 *
 * ```
 *  tabs = [
 *  {
 *    title: 'Route tab #1',
 *    route: '/pages/description',
 *  },
 *  {
 *    title: 'Route tab #2',
 *    route: '/pages/images',
 *    }
 *  ];
 *
 *  <nb-route-tabset [tabs]="tabs"></nb-route-tabset>
 * ```
 *
 * @styles
 *
 * route-tabs-font-family:
 * route-tabs-font-size:
 * route-tabs-active-bg:
 * route-tabs-active-font-weight:
 * route-tabs-padding:
 * route-tabs-header-bg:
 * route-tabs-separator:
 * route-tabs-fg:
 * route-tabs-fg-heading:
 * route-tabs-bg:
 * route-tabs-selected:
 */
var NbRouteTabsetComponent = /** @class */ (function () {
    function NbRouteTabsetComponent(router) {
        this.router = router;
        this.fullWidthValue = false;
        /**
           * Emits when tab is selected
           * @type {EventEmitter<any>}
           */
        this.changeTab = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(NbRouteTabsetComponent.prototype, "fullWidth", {
        set: /**
           * Take full width of a parent
           * @param {boolean} val
           */
        function (val) {
            this.fullWidthValue = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["convertToBoolProperty"])(val);
        },
        enumerable: true,
        configurable: true
    });
    NbRouteTabsetComponent.prototype.selectTab = function (tab) {
        this.changeTab.emit(tab);
        this.router.navigate([tab.route]);
    };
    NbRouteTabsetComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'nb-route-tabset',
                    styles: ["ul{display:flex;flex-direction:row;list-style-type:none;margin:0}ul li{cursor:pointer;margin-bottom:-1px;text-align:center}ul li.active a::before{display:block}ul li a{position:relative;text-decoration:none;display:inline-block}ul li a::before{display:none;position:absolute;content:'';width:100%;height:6px;border-radius:3px;bottom:-2px;left:0}:host.full-width ul{justify-content:space-around} "],
                    template: "\n    <ul>\n      <li *ngFor=\"let tab of tabs\"\n          (click)=\"$event.preventDefault(); selectTab(tab)\"\n          routerLink=\"{{tab.route}}\"\n          routerLinkActive=\"active\"\n          [routerLinkActiveOptions]=\"{ exact: true }\">\n        <a href>{{tab.title}}</a>\n      </li>\n    </ul>\n    <router-outlet></router-outlet>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbRouteTabsetComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], },
    ]; };
    NbRouteTabsetComponent.propDecorators = {
        "fullWidthValue": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.full-width',] },],
        "tabs": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fullWidth": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "changeTab": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return NbRouteTabsetComponent;
}());

//# sourceMappingURL=route-tabset.component.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/components/route-tabset/route-tabset.module.js":
/*!*******************************************************************************!*\
  !*** ./src/app/@nebular/theme/components/route-tabset/route-tabset.module.js ***!
  \*******************************************************************************/
/*! exports provided: NbRouteTabsetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbRouteTabsetModule", function() { return NbRouteTabsetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/@nebular/theme/components/shared/shared.module.js");
/* harmony import */ var _route_tabset_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./route-tabset.component */ "./src/app/@nebular/theme/components/route-tabset/route-tabset.component.js");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */



var NbRouteTabsetModule = /** @class */ (function () {
    function NbRouteTabsetModule() {
    }
    NbRouteTabsetModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["NbSharedModule"],
                    ],
                    declarations: [
                        _route_tabset_component__WEBPACK_IMPORTED_MODULE_2__["NbRouteTabsetComponent"],
                    ],
                    exports: [
                        _route_tabset_component__WEBPACK_IMPORTED_MODULE_2__["NbRouteTabsetComponent"],
                    ],
                },] },
    ];
    return NbRouteTabsetModule;
}());

//# sourceMappingURL=route-tabset.module.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/components/search/search.component.js":
/*!**********************************************************************!*\
  !*** ./src/app/@nebular/theme/components/search/search.component.js ***!
  \**********************************************************************/
/*! exports provided: NbSearchFieldComponent, NbSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbSearchFieldComponent", function() { return NbSearchFieldComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbSearchComponent", function() { return NbSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search.service */ "./src/app/@nebular/theme/components/search/search.service.js");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/theme.service */ "./src/app/@nebular/theme/services/theme.service.js");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */






/**
 * search-field-component is used under the hood by nb-search component
 * can't be used itself
 */
var NbSearchFieldComponent = /** @class */ (function () {
    function NbSearchFieldComponent() {
        this.searchClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tabOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showSearch = false;
    }
    Object.defineProperty(NbSearchFieldComponent.prototype, "modalZoomin", {
        get: function () {
            return this.searchType === NbSearchFieldComponent.TYPE_MODAL_ZOOMIN;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSearchFieldComponent.prototype, "rotateLayout", {
        get: function () {
            return this.searchType === NbSearchFieldComponent.TYPE_ROTATE_LAYOUT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSearchFieldComponent.prototype, "modalMove", {
        get: function () {
            return this.searchType === NbSearchFieldComponent.TYPE_MODAL_MOVE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSearchFieldComponent.prototype, "curtain", {
        get: function () {
            return this.searchType === NbSearchFieldComponent.TYPE_CURTAIN;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSearchFieldComponent.prototype, "columnCurtain", {
        get: function () {
            return this.searchType === NbSearchFieldComponent.TYPE_COLUMN_CURTAIN;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSearchFieldComponent.prototype, "modalDrop", {
        get: function () {
            return this.searchType === NbSearchFieldComponent.TYPE_MODAL_DROP;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSearchFieldComponent.prototype, "modalHalf", {
        get: function () {
            return this.searchType === NbSearchFieldComponent.TYPE_MODAL_HALF;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSearchFieldComponent.prototype, "type", {
        set: function (val) {
            this.searchType = val;
        },
        enumerable: true,
        configurable: true
    });
    NbSearchFieldComponent.prototype.closeSearch = function () {
        this.searchClose.emit(true);
    };
    NbSearchFieldComponent.prototype.submitSearch = function (term) {
        if (term) {
            this.search.emit(term);
        }
    };
    NbSearchFieldComponent.TYPE_MODAL_ZOOMIN = 'modal-zoomin';
    NbSearchFieldComponent.TYPE_ROTATE_LAYOUT = 'rotate-layout';
    NbSearchFieldComponent.TYPE_MODAL_MOVE = 'modal-move';
    NbSearchFieldComponent.TYPE_CURTAIN = 'curtain';
    NbSearchFieldComponent.TYPE_COLUMN_CURTAIN = 'column-curtain';
    NbSearchFieldComponent.TYPE_MODAL_DROP = 'modal-drop';
    NbSearchFieldComponent.TYPE_MODAL_HALF = 'modal-half';
    NbSearchFieldComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'nb-search-field',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    styles: [":host button{margin:0;padding:0;cursor:pointer;border:none;background:none}:host button:focus{box-shadow:none;outline:none}:host input{border-top:0;border-right:0;border-left:0;background:transparent;border-radius:0;line-height:1;display:inline-block;box-sizing:border-box;padding:0.05rem 0;-webkit-appearance:none}:host input:focus{outline:none}:host input::placeholder{opacity:0.3}:host span{font-size:90%;font-weight:bold;display:block;width:75%;margin:0 auto;padding:0.85rem 0;text-align:right}:host.modal-zoomin{display:block}:host.modal-zoomin .search{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;position:fixed;z-index:1050;top:0;left:0;width:100%;height:100vh;pointer-events:none;opacity:0;transition:opacity 0.5s}:host.modal-zoomin .search::before,:host.modal-zoomin .search::after{content:'';position:absolute;width:calc(100% + 15px);height:calc(100% + 15px);pointer-events:none}:host.modal-zoomin .search::before{top:0;left:0;border-right-width:0;border-bottom-width:0;transform:translate3d(-15px, -15px, 0)}:host.modal-zoomin .search::after{right:0;bottom:0;border-top-width:0;border-left-width:0;transform:translate3d(15px, 15px, 0)}:host.modal-zoomin .search button{position:absolute;top:3rem;font-size:2.5rem}[dir=ltr] :host.modal-zoomin .search button{right:3rem}[dir=rtl] :host.modal-zoomin .search button{left:3rem}:host.modal-zoomin .search input{font-size:10vw;width:75%}:host.modal-zoomin .search button{opacity:0;transform:scale3d(0.8, 0.8, 1);transition:opacity 0.5s, transform 0.5s}:host.modal-zoomin .search form{opacity:0;transform:scale3d(0.8, 0.8, 1);transition:opacity 0.5s, transform 0.5s}:host.modal-zoomin.show .search{pointer-events:auto;opacity:1}:host.modal-zoomin.show .search::before,:host.modal-zoomin.show .search::after{transform:translate3d(0, 0, 0);transition:transform 0.5s}:host.modal-zoomin.show .search button{opacity:1;transform:scale3d(1, 1, 1)}:host.modal-zoomin.show .search form{opacity:1;transform:scale3d(1, 1, 1)}@media screen and (max-width: 40rem){:host.modal-zoomin form{margin:5rem 0 1rem}:host.modal-zoomin span{text-align:left}} ",
"/deep/ nb-layout.rotate-layout{position:fixed;overflow:hidden;width:100%}/deep/ nb-layout.rotate-layout.with-search .scrollable-container{transition:transform 0.5s cubic-bezier(0.2, 1, 0.3, 1);transform-origin:50vw 50vh;transform:perspective(1000px) translate3d(0, 50vh, 0) rotate3d(1, 0, 0, 30deg);pointer-events:none}:host.rotate-layout{position:absolute;display:block;width:100%;height:100vh;pointer-events:none;opacity:0;transition-property:opacity;transition-delay:0.4s}:host.rotate-layout .search{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;z-index:1050;position:fixed;top:0;left:0;width:100%;height:50vh;pointer-events:none;opacity:0;transition:opacity 0.5s;transition-timing-function:cubic-bezier(0.2, 1, 0.3, 1)}:host.rotate-layout .search button{position:absolute;top:3rem;font-size:2.5rem;opacity:0;transform:scale3d(0.8, 0.8, 1);transition:opacity 0.5s, transform 0.5s;transition-timing-function:cubic-bezier(0.2, 1, 0.3, 1)}[dir=ltr] :host.rotate-layout .search button{right:3rem}[dir=rtl] :host.rotate-layout .search button{left:3rem}:host.rotate-layout .search form{margin:5rem 0;opacity:0;transform:scale3d(0.7, 0.7, 1);transition:opacity 0.5s, transform 0.5s;transition-timing-function:cubic-bezier(0.2, 1, 0.3, 1)}:host.rotate-layout .search input{font-size:7vw;width:75%}:host.rotate-layout.show{opacity:1;transition-delay:0s}:host.rotate-layout.show .search{pointer-events:auto;opacity:1}:host.rotate-layout.show .search button{opacity:1;transform:scale3d(1, 1, 1)}:host.rotate-layout.show .search form{opacity:1;transform:scale3d(1, 1, 1)} ",
"/deep/ nb-layout.modal-move .layout{transition:transform 0.5s}/deep/ nb-layout.modal-move.with-search .layout{transform:scale3d(0.8, 0.8, 1);pointer-events:none}:host.modal-move .search{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;position:fixed;z-index:1050;top:0;left:0;width:100%;height:100vh;pointer-events:none;opacity:0;transition:opacity 0.5s}:host.modal-move .search button{position:absolute;top:3rem;font-size:2.5rem;opacity:0;transition:opacity 0.5s}[dir=ltr] :host.modal-move .search button{right:3rem}[dir=rtl] :host.modal-move .search button{left:3rem}:host.modal-move .search form{margin:5rem 0;opacity:0;transform:scale3d(0.8, 0.8, 1);transition:opacity 0.5s, transform 0.5s}:host.modal-move .search input{font-size:10vw;width:75%;transform:scale3d(0, 1, 1);transform-origin:0 50%;transition:transform 0.3s}:host.modal-move.show .search{pointer-events:auto;opacity:1}:host.modal-move.show .search button{opacity:1}:host.modal-move.show .search form{opacity:1;transform:scale3d(1, 1, 1)}:host.modal-move.show .search input{transform:scale3d(1, 1, 1);transition-duration:0.5s}@media screen and (max-width: 40rem){:host.modal-move span{text-align:left}} ",
":host.curtain .search{position:fixed;z-index:1050;top:0;left:100%;overflow:hidden;height:100vh;width:100%;padding:3rem;pointer-events:none;transition:transform 0.3s;transition-delay:0.4s;transition-timing-function:ease-out}:host.curtain .search::after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;transition:transform 0.3s;transition-timing-function:ease-out}:host.curtain .search button{font-size:2.5rem;position:absolute;top:3rem;transition:opacity 0.1s;transition-delay:0.3s}[dir=ltr] :host.curtain .search button{right:3rem}[dir=rtl] :host.curtain .search button{left:3rem}:host.curtain .search form{width:50%;opacity:0;transform:scale3d(0.8, 0.8, 1);transition:opacity 0.5s, transform 0.5s}:host.curtain .search input{width:100%;font-size:6vw}:host.curtain.show .search{width:100%;pointer-events:auto;transform:translate3d(-100%, 0, 0);transition-delay:0s}:host.curtain.show .search::after{transform:translate3d(100%, 0, 0);transition-delay:0.4s}:host.curtain.show .search button{opacity:1;transform:scale3d(1, 1, 1)}:host.curtain.show .search form{opacity:1;transform:scale3d(1, 1, 1)}@media screen and (max-width: 40em){:host.curtain span{width:90%}:host.curtain input{font-size:2em;width:90%}} ",
"/deep/ nb-layout.column-curtain.with-search .layout{pointer-events:none}:host.column-curtain{display:block;position:fixed;z-index:1050;top:0;left:50%;overflow:hidden;width:50%;height:100vh;pointer-events:none}:host.column-curtain::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;transform:scale3d(0, 1, 1);transform-origin:0 50%;transition:transform 0.3s;transition-timing-function:cubic-bezier(0.86, 0, 0.07, 1)}:host.column-curtain .search{position:relative;padding:2.5rem 1.5rem 0;background:transparent}:host.column-curtain .search button{position:absolute;top:2rem;font-size:2.5rem;opacity:0;transition:opacity 0.5s}[dir=ltr] :host.column-curtain .search button{right:2rem}[dir=rtl] :host.column-curtain .search button{left:2rem}:host.column-curtain .search form{width:85%;transform:translate3d(-150%, 0, 0);transition:transform 0.3s}:host.column-curtain .search input{font-size:2.5rem;width:100%}:host.column-curtain .search span{font-size:85%}:host.column-curtain.show{pointer-events:auto}:host.column-curtain.show::before{transform:scale3d(1, 1, 1)}:host.column-curtain.show .search form{transform:translate3d(0, 0, 0);transition-delay:0.15s;transition-timing-function:cubic-bezier(0.86, 0, 0.07, 1)}:host.column-curtain.show .search button{opacity:1;z-index:100}@media screen and (max-width: 40rem){:host.column-curtain span{width:90%}:host.column-curtain input{font-size:2rem;width:90%}} ",
"/deep/ nb-layout.modal-drop .layout{position:relative;transition:transform 0.4s, opacity 0.4s;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}/deep/ nb-layout.modal-drop.with-search .layout{opacity:0;transform:scale3d(0.9, 0.9, 1);pointer-events:none}:host.modal-drop .search{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;z-index:1050;position:fixed;top:0;left:0;width:100%;height:100vh;background:none;pointer-events:none}:host.modal-drop .search::before{content:'';position:absolute;top:0;right:0;width:100%;height:100%;opacity:0;transition:opacity 0.4s}:host.modal-drop .search button{font-size:2.5rem;position:absolute;top:3rem;display:block;opacity:0;transition:opacity 0.4s}[dir=ltr] :host.modal-drop .search button{right:3rem}[dir=rtl] :host.modal-drop .search button{left:3rem}:host.modal-drop .search form{position:relative;margin:5rem 0 2rem}:host.modal-drop .search input{font-size:6vw;width:60%;padding:0.25rem;text-align:center;opacity:0;transition:opacity 0.4s}:host.modal-drop .search span{position:relative;z-index:9;display:block;width:60%;padding:0.85rem 0;opacity:0;transform:translate3d(0, -50px, 0);transition:opacity 0.4s, transform 0.4s}:host.modal-drop .search .form-content{position:relative;z-index:10;overflow:hidden;transform:translate3d(0, -50px, 0);transition:transform 0.4s}:host.modal-drop .search .form-content::after{content:'';position:absolute;top:0;left:20%;width:60%;height:105%;opacity:0;transform-origin:50% 0}:host.modal-drop.show .search{pointer-events:auto}:host.modal-drop.show .search::before{opacity:1}:host.modal-drop.show .search button{opacity:1}:host.modal-drop.show .search .form-content{transform:translate3d(0, 0, 0);transition:none}:host.modal-drop.show .search .form-content::after{animation:scaleUpDown 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards}:host.modal-drop.show .search input{opacity:1;transition:opacity 0s 0.4s}:host.modal-drop.show .search span{opacity:1;transform:translate3d(0, 0, 0);transition-delay:0.4s;transition-timing-function:ease-out}@keyframes scaleUpDown{0%{opacity:1;transform:scale3d(1, 0, 1)}50%{transform:scale3d(1, 1, 1);transform-origin:50% 0;transition-timing-function:ease-out}50.1%{transform-origin:50% 100%;transition-timing-function:ease-out}100%{opacity:1;transform:scale3d(1, 0, 1);transform-origin:50% 100%;transition-timing-function:ease-out}}@media screen and (max-width: 40rem){:host.modal-drop form{margin:2rem 0}:host.modal-drop input{width:100%;left:0}} ",
"/deep/ nb-layout.modal-half .layout{transition:transform 0.6s, opacity 0.6s;transition-timing-function:cubic-bezier(0.2, 1, 0.3, 1)}/deep/ nb-layout.modal-half.with-search .layout{transform:scale3d(0.8, 0.8, 1);pointer-events:none}:host.modal-half .search{text-align:center;position:fixed;z-index:1050;top:0;left:0;overflow:hidden;width:100%;height:100vh;background:none;pointer-events:none}:host.modal-half .search::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;opacity:0;transition:opacity 0.6s;transition-timing-function:cubic-bezier(0.2, 1, 0.3, 1)}:host.modal-half .search button{font-size:2.5rem;position:absolute;top:3rem;display:block;z-index:100;opacity:0;transform:scale3d(0.8, 0.8, 1);transition:opacity 0.6s, transform 0.6s;transition-timing-function:cubic-bezier(0.2, 1, 0.3, 1)}[dir=ltr] :host.modal-half .search button{right:3rem}[dir=rtl] :host.modal-half .search button{left:3rem}:host.modal-half .search .form-wrapper{position:absolute;display:flex;justify-content:center;align-items:center;width:100%;height:50%;transition:transform 0.6s;transition-timing-function:cubic-bezier(0.2, 1, 0.3, 1);transform:translate3d(0, -100%, 0)}:host.modal-half .search form{width:75%;margin:0 auto}:host.modal-half .search input{font-size:7vw;width:100%}:host.modal-half.show .search{pointer-events:auto}:host.modal-half.show .search::before{opacity:1}:host.modal-half.show .search button{opacity:1;transform:scale3d(1, 1, 1)}:host.modal-half.show .search .form-wrapper{transform:translate3d(0, 0, 0)} "],
                    template: "\n    <div class=\"search\" (keyup.esc)=\"closeSearch()\">\n      <button (click)=\"closeSearch()\">\n        <i class=\"nb-close-circled\"></i>\n      </button>\n      <div class=\"form-wrapper\">\n        <form class=\"form\" (keyup.enter)=\"submitSearch(searchInput.value)\">\n          <div class=\"form-content\">\n            <input class=\"search-input\"\n                   #searchInput\n                   autocomplete=\"off\"\n                   [attr.placeholder]=\"placeholder\"\n                   tabindex=\"-1\"\n                   (blur)=\"tabOut.next($event)\"/>\n          </div>\n          <span class=\"info\">{{ hint }}</span>\n        </form>\n      </div>\n    </div>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbSearchFieldComponent.propDecorators = {
        "searchType": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "placeholder": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "hint": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "searchClose": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "search": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "tabOut": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "inputElement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['searchInput',] },],
        "showSearch": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.show',] },],
        "modalZoomin": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.modal-zoomin',] },],
        "rotateLayout": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.rotate-layout',] },],
        "modalMove": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.modal-move',] },],
        "curtain": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.curtain',] },],
        "columnCurtain": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.column-curtain',] },],
        "modalDrop": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.modal-drop',] },],
        "modalHalf": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.modal-half',] },],
        "type": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NbSearchFieldComponent;
}());

/**
 * Beautiful full-page search control.
 *
 * @styles
 *
 * search-btn-open-fg:
 * search-btn-close-fg:
 * search-bg:
 * search-bg-secondary:
 * search-text:
 * search-info:
 * search-dash:
 * search-placeholder:
 */
var NbSearchComponent = /** @class */ (function () {
    function NbSearchComponent(searchService, themeService, router) {
        this.searchService = searchService;
        this.themeService = themeService;
        this.router = router;
        this.alive = true;
        /**
           * Search input placeholder
           * @type {string}
           */
        this.placeholder = 'Search...';
        /**
           * Hint showing under the input field to improve user experience
           *
           * @type {string}
           */
        this.hint = 'Hit enter to search';
        this.showSearch = false;
        this.searchFieldComponentRef$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.searchType = 'rotate-layout';
    }
    Object.defineProperty(NbSearchComponent.prototype, "type", {
        set: /**
           * Search design type, available types are
           * modal-zoomin, rotate-layout, modal-move, curtain, column-curtain, modal-drop, modal-half
           * @type {string}
           */
        function (val) {
            this.searchType = val;
        },
        enumerable: true,
        configurable: true
    });
    NbSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }))
            .subscribe(function (event) { return _this.searchService.deactivateSearch(_this.searchType, _this.tag); });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([
            this.searchFieldComponentRef$,
            this.searchService.onSearchActivate(),
        ])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (_a) {
            var componentRef = _a[0], data = _a[1];
            return componentRef != null;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (_a) {
            var componentRef = _a[0], data = _a[1];
            return !_this.tag || data.tag === _this.tag;
        }))
            .subscribe(function (_a) {
            var componentRef = _a[0], data = _a[1];
            _this.showSearch = true;
            _this.themeService.appendLayoutClass(_this.searchType);
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(0)).subscribe(function () {
                _this.themeService.appendLayoutClass('with-search');
            });
            componentRef.instance.showSearch = true;
            componentRef.instance.inputElement.nativeElement.focus();
            componentRef.changeDetectorRef.detectChanges();
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([
            this.searchFieldComponentRef$,
            this.searchService.onSearchDeactivate(),
        ])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (_a) {
            var componentRef = _a[0], data = _a[1];
            return componentRef != null;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (_a) {
            var componentRef = _a[0], data = _a[1];
            return !_this.tag || data.tag === _this.tag;
        }))
            .subscribe(function (_a) {
            var componentRef = _a[0], data = _a[1];
            _this.showSearch = false;
            componentRef.instance.showSearch = false;
            componentRef.instance.inputElement.nativeElement.value = '';
            componentRef.instance.inputElement.nativeElement.blur();
            componentRef.changeDetectorRef.detectChanges();
            _this.themeService.removeLayoutClass('with-search');
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500)).subscribe(function () {
                _this.themeService.removeLayoutClass(_this.searchType);
            });
        });
    };
    NbSearchComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeService.appendToLayoutTop(NbSearchFieldComponent)
            .subscribe(function (componentRef) {
            _this.connectToSearchField(componentRef);
        });
    };
    NbSearchComponent.prototype.openSearch = function () {
        this.searchService.activateSearch(this.searchType, this.tag);
    };
    NbSearchComponent.prototype.connectToSearchField = function (componentRef) {
        var _this = this;
        componentRef.instance.searchType = this.searchType;
        componentRef.instance.placeholder = this.placeholder;
        componentRef.instance.hint = this.hint;
        componentRef.instance.searchClose.subscribe(function () {
            _this.searchService.deactivateSearch(_this.searchType, _this.tag);
        });
        componentRef.instance.search.subscribe(function (term) {
            _this.searchService.submitSearch(term, _this.tag);
            _this.searchService.deactivateSearch(_this.searchType, _this.tag);
        });
        componentRef.instance.tabOut
            .subscribe(function () { return _this.showSearch && componentRef.instance.inputElement.nativeElement.focus(); });
        componentRef.changeDetectorRef.detectChanges();
        this.searchFieldComponentRef$.next(componentRef);
    };
    NbSearchComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
        var componentRef = this.searchFieldComponentRef$.getValue();
        if (componentRef) {
            componentRef.destroy();
        }
    };
    NbSearchComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'nb-search',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    styles: [":host button{font-size:2rem;margin:0 auto;padding:0;cursor:pointer;border:none;background:none}:host button:focus{box-shadow:none;outline:none} "],
                    template: "\n    <button class=\"start-search\" (click)=\"openSearch()\">\n      <i class=\"nb-search\"></i>\n    </button>\n    <ng-template #attachedSearchContainer></ng-template>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbSearchComponent.ctorParameters = function () { return [
        { type: _search_service__WEBPACK_IMPORTED_MODULE_4__["NbSearchService"], },
        { type: _services_theme_service__WEBPACK_IMPORTED_MODULE_5__["NbThemeService"], },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], },
    ]; };
    NbSearchComponent.propDecorators = {
        "tag": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "placeholder": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "hint": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "showSearch": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.show',] },],
        "attachedSearchContainer": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['attachedSearchContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },] },],
        "type": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NbSearchComponent;
}());

//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/components/search/search.module.js":
/*!*******************************************************************!*\
  !*** ./src/app/@nebular/theme/components/search/search.module.js ***!
  \*******************************************************************/
/*! exports provided: NbSearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbSearchModule", function() { return NbSearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/@nebular/theme/components/shared/shared.module.js");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.component */ "./src/app/@nebular/theme/components/search/search.component.js");
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.service */ "./src/app/@nebular/theme/components/search/search.service.js");




var NbSearchModule = /** @class */ (function () {
    function NbSearchModule() {
    }
    NbSearchModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["NbSharedModule"],
                    ],
                    declarations: [
                        _search_component__WEBPACK_IMPORTED_MODULE_2__["NbSearchComponent"],
                        _search_component__WEBPACK_IMPORTED_MODULE_2__["NbSearchFieldComponent"],
                    ],
                    exports: [
                        _search_component__WEBPACK_IMPORTED_MODULE_2__["NbSearchComponent"],
                        _search_component__WEBPACK_IMPORTED_MODULE_2__["NbSearchFieldComponent"],
                    ],
                    providers: [
                        _search_service__WEBPACK_IMPORTED_MODULE_3__["NbSearchService"],
                    ],
                    entryComponents: [
                        _search_component__WEBPACK_IMPORTED_MODULE_2__["NbSearchFieldComponent"],
                    ],
                },] },
    ];
    return NbSearchModule;
}());

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/components/search/search.service.js":
/*!********************************************************************!*\
  !*** ./src/app/@nebular/theme/components/search/search.service.js ***!
  \********************************************************************/
/*! exports provided: NbSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbSearchService", function() { return NbSearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */



/**
 * Search component service, connects you code to a page-level search component.
 */
var NbSearchService = /** @class */ (function () {
    function NbSearchService() {
        this.searchSubmittings$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.searchActivations$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.searchDeactivations$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    /***
     * Activate (open) search component
     * @param {string} searchType
     * @param {string} tag
     */
    /***
       * Activate (open) search component
       * @param {string} searchType
       * @param {string} tag
       */
    NbSearchService.prototype.activateSearch = /***
       * Activate (open) search component
       * @param {string} searchType
       * @param {string} tag
       */
    function (searchType, tag) {
        this.searchActivations$.next({ searchType: searchType, tag: tag });
    };
    /**
     * Deactibate (close) search component
     * @param {string} searchType
     * @param {string} tag
     */
    /**
       * Deactibate (close) search component
       * @param {string} searchType
       * @param {string} tag
       */
    NbSearchService.prototype.deactivateSearch = /**
       * Deactibate (close) search component
       * @param {string} searchType
       * @param {string} tag
       */
    function (searchType, tag) {
        this.searchDeactivations$.next({ searchType: searchType, tag: tag });
    };
    /**
     * Trigger search submit
     * @param {string} term
     * @param {string} tag
     */
    /**
       * Trigger search submit
       * @param {string} term
       * @param {string} tag
       */
    NbSearchService.prototype.submitSearch = /**
       * Trigger search submit
       * @param {string} term
       * @param {string} tag
       */
    function (term, tag) {
        this.searchSubmittings$.next({ term: term, tag: tag });
    };
    /**
     * Subscribe to 'activate' event
     * @returns Observable<{searchType: string; tag?: string}>
     */
    /**
       * Subscribe to 'activate' event
       * @returns Observable<{searchType: string; tag?: string}>
       */
    NbSearchService.prototype.onSearchActivate = /**
       * Subscribe to 'activate' event
       * @returns Observable<{searchType: string; tag?: string}>
       */
    function () {
        return this.searchActivations$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
    };
    /**
     * Subscribe to 'deactivate' event
     * @returns Observable<{searchType: string; tag?: string}>
     */
    /**
       * Subscribe to 'deactivate' event
       * @returns Observable<{searchType: string; tag?: string}>
       */
    NbSearchService.prototype.onSearchDeactivate = /**
       * Subscribe to 'deactivate' event
       * @returns Observable<{searchType: string; tag?: string}>
       */
    function () {
        return this.searchDeactivations$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
    };
    /**
     * Subscribe to 'submit' event (when submit button clicked)
     * @returns Observable<{term: string; tag?: string}>
     */
    /**
       * Subscribe to 'submit' event (when submit button clicked)
       * @returns Observable<{term: string; tag?: string}>
       */
    NbSearchService.prototype.onSearchSubmit = /**
       * Subscribe to 'submit' event (when submit button clicked)
       * @returns Observable<{term: string; tag?: string}>
       */
    function () {
        return this.searchSubmittings$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
    };
    NbSearchService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return NbSearchService;
}());

//# sourceMappingURL=search.service.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/components/shared/shared.module.js":
/*!*******************************************************************!*\
  !*** ./src/app/@nebular/theme/components/shared/shared.module.js ***!
  \*******************************************************************/
/*! exports provided: NbSharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbSharedModule", function() { return NbSharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




var NbSharedModule = /** @class */ (function () {
    function NbSharedModule() {
    }
    NbSharedModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    exports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    ],
                },] },
    ];
    return NbSharedModule;
}());

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/components/sidebar/sidebar.component.js":
/*!************************************************************************!*\
  !*** ./src/app/@nebular/theme/components/sidebar/sidebar.component.js ***!
  \************************************************************************/
/*! exports provided: NbSidebarHeaderComponent, NbSidebarFooterComponent, NbSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbSidebarHeaderComponent", function() { return NbSidebarHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbSidebarFooterComponent", function() { return NbSidebarFooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbSidebarComponent", function() { return NbSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./src/app/@nebular/theme/components/helpers.js");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/theme.service */ "./src/app/@nebular/theme/services/theme.service.js");
/* harmony import */ var _sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar.service */ "./src/app/@nebular/theme/components/sidebar/sidebar.service.js");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





/**
 * Sidebar header container.
 *
 * Placeholder which contains a sidebar header content,
 * placed at the very top of the sidebar outside of the scroll area.
 */
var NbSidebarHeaderComponent = /** @class */ (function () {
    function NbSidebarHeaderComponent() {
    }
    NbSidebarHeaderComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'nb-sidebar-header',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    return NbSidebarHeaderComponent;
}());

/**
 * Sidebar footer container.
 *
 * Placeholder which contains a sidebar footer content,
 * placed at the very bottom of the sidebar outside of the scroll area.
 */
var NbSidebarFooterComponent = /** @class */ (function () {
    function NbSidebarFooterComponent() {
    }
    NbSidebarFooterComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'nb-sidebar-footer',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    return NbSidebarFooterComponent;
}());

/**
 * Layout sidebar component.
 *
 * Sidebar can be placed on the left or the right side of the layout,
 * or on start or end position of layout (depends on document direction, left to right or right to left)
 * It can be fixed (shown above the content) or can push the layout when opened.
 *
 * There are three states - `expanded`, `collapsed`, `compacted`.
 * By default sidebar content is fixed and saves its position while the page is being scrolled.
 *
 * Sidebar also supports a `responsive` behavior, listening to window size change and changing its size respectably.
 *
 * @example Minimal sidebar example
 *
 * ```
 * <nb-sidebar>
 *   Sidebar content.
 * </nb-sidebar>
 * ```
 *
 * @example Example of fixed sidebar located on the left side, initially collapsed.
 *
 * ```
 * <nb-sidebar left fixed state="collapsed">
 *  <nb-sidebar-header>Header</nb-sidebar-header>
 *
 *    Sidebar content, menu or another component here.
 *
 *  <nb-sidebar-footer>
 *    Footer components here
 *  </nb-sidebar-footer>
 * </nb-sidebar>
 * ```
 *
 * @styles
 *
 * sidebar-font-size: Sidebar content font size
 * sidebar-line-height: Sidebar content line height
 * sidebar-fg: Foreground color
 * sidebar-bg: Background color
 * sidebar-height: Content height
 * sidebar-width: Expanded width
 * sidebar-width-compact: Compacted width
 * sidebar-padding: Sidebar content padding
 * sidebar-header-height: Sidebar header height
 * sidebar-footer-height: Sidebar footer height
 * sidebar-shadow: Sidebar container shadow
 *
 */
var NbSidebarComponent = /** @class */ (function () {
    function NbSidebarComponent(sidebarService, themeService, element) {
        this.sidebarService = sidebarService;
        this.themeService = themeService;
        this.element = element;
        this.responsiveValue = false;
        this.alive = true;
        this.fixedValue = false;
        this.rightValue = false;
        this.leftValue = true;
        this.startValue = false;
        this.endValue = false;
        this.responsiveState = NbSidebarComponent.RESPONSIVE_STATE_PC;
    }
    Object.defineProperty(NbSidebarComponent.prototype, "expanded", {
        get: 
        // TODO: rename stateValue to state (take a look to the card component)
        function () {
            return this.stateValue === NbSidebarComponent.STATE_EXPANDED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSidebarComponent.prototype, "collapsed", {
        get: function () {
            return this.stateValue === NbSidebarComponent.STATE_COLLAPSED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSidebarComponent.prototype, "compacted", {
        get: function () {
            return this.stateValue === NbSidebarComponent.STATE_COMPACTED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSidebarComponent.prototype, "right", {
        set: /**
           * Places sidebar on the right side
           * @type {boolean}
           */
        function (val) {
            this.rightValue = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["convertToBoolProperty"])(val);
            this.leftValue = !this.rightValue;
            this.startValue = false;
            this.endValue = false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSidebarComponent.prototype, "left", {
        set: /**
           * Places sidebar on the left side
           * @type {boolean}
           */
        function (val) {
            this.leftValue = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["convertToBoolProperty"])(val);
            this.rightValue = !this.leftValue;
            this.startValue = false;
            this.endValue = false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSidebarComponent.prototype, "start", {
        set: /**
           * Places sidebar on the start edge of layout
           * @type {boolean}
           */
        function (val) {
            this.startValue = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["convertToBoolProperty"])(val);
            this.endValue = !this.startValue;
            this.leftValue = false;
            this.rightValue = false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSidebarComponent.prototype, "end", {
        set: /**
           * Places sidebar on the end edge of layout
           * @type {boolean}
           */
        function (val) {
            this.endValue = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["convertToBoolProperty"])(val);
            this.startValue = !this.endValue;
            this.leftValue = false;
            this.rightValue = false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSidebarComponent.prototype, "fixed", {
        set: /**
           * Makes sidebar fixed (shown above the layout content)
           * @type {boolean}
           */
        function (val) {
            this.fixedValue = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["convertToBoolProperty"])(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSidebarComponent.prototype, "state", {
        set: /**
           * Initial sidebar state, `expanded`|`collapsed`|`compacted`
           * @type {string}
           */
        function (val) {
            this.stateValue = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSidebarComponent.prototype, "responsive", {
        set: /**
           * Makes sidebar listen to media query events and change its behaviour
           * @type {boolean}
           */
        function (val) {
            this.responsiveValue = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["convertToBoolProperty"])(val);
            this.toggleResponsive(this.responsiveValue);
        },
        enumerable: true,
        configurable: true
    });
    NbSidebarComponent.prototype.toggleResponsive = function (enabled) {
        if (enabled) {
            this.mediaQuerySubscription = this.onMediaQueryChanges();
        }
        else if (this.mediaQuerySubscription) {
            this.mediaQuerySubscription.unsubscribe();
        }
    };
    NbSidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sidebarService.onToggle()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (data) {
            if (!_this.tag || _this.tag === data.tag) {
                _this.toggle(data.compact);
            }
        });
        this.sidebarService.onExpand()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (data) {
            if (!_this.tag || _this.tag === data.tag) {
                _this.expand();
            }
        });
        this.sidebarService.onCollapse()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (data) {
            if (!_this.tag || _this.tag === data.tag) {
                _this.collapse();
            }
        });
    };
    NbSidebarComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
        if (this.mediaQuerySubscription) {
            this.mediaQuerySubscription.unsubscribe();
        }
    };
    // TODO: this is more of a workaround, should be a better way to make components communicate to each other
    // TODO: this is more of a workaround, should be a better way to make components communicate to each other
    NbSidebarComponent.prototype.onClick = 
    // TODO: this is more of a workaround, should be a better way to make components communicate to each other
    function (event) {
        var menu = this.element.nativeElement.querySelector('nb-menu');
        if (menu && menu.contains(event.target)) {
            var link = event.target;
            var linkChildren = ['span', 'i'];
            // if we clicked on span - get the link
            if (linkChildren.indexOf(link.tagName.toLowerCase()) !== -1 && link.parentNode) {
                link = event.target.parentNode;
            }
            // we only expand if an item has children
            if (link && link.nextElementSibling && link.nextElementSibling.classList.contains('menu-items')) {
                this.expand();
            }
        }
    };
    /**
     * Collapses the sidebar
     */
    /**
       * Collapses the sidebar
       */
    NbSidebarComponent.prototype.collapse = /**
       * Collapses the sidebar
       */
    function () {
        this.state = NbSidebarComponent.STATE_COLLAPSED;
    };
    /**
     * Expands the sidebar
     */
    /**
       * Expands the sidebar
       */
    NbSidebarComponent.prototype.expand = /**
       * Expands the sidebar
       */
    function () {
        this.state = NbSidebarComponent.STATE_EXPANDED;
    };
    /**
     * Compacts the sidebar (minimizes)
     */
    /**
       * Compacts the sidebar (minimizes)
       */
    NbSidebarComponent.prototype.compact = /**
       * Compacts the sidebar (minimizes)
       */
    function () {
        this.state = NbSidebarComponent.STATE_COMPACTED;
    };
    /**
     * Toggles sidebar state (expanded|collapsed|compacted)
     * @param {boolean} compact If true, then sidebar state will be changed between expanded & compacted,
     * otherwise - between expanded & collapsed. False by default.
     *
     * @example Toggle sidebar state
     *
     * ```
     * this.sidebar.toggle(true);
     * ```
     */
    /**
       * Toggles sidebar state (expanded|collapsed|compacted)
       * @param {boolean} compact If true, then sidebar state will be changed between expanded & compacted,
       * otherwise - between expanded & collapsed. False by default.
       *
       * @example Toggle sidebar state
       *
       * ```
       * this.sidebar.toggle(true);
       * ```
       */
    NbSidebarComponent.prototype.toggle = /**
       * Toggles sidebar state (expanded|collapsed|compacted)
       * @param {boolean} compact If true, then sidebar state will be changed between expanded & compacted,
       * otherwise - between expanded & collapsed. False by default.
       *
       * @example Toggle sidebar state
       *
       * ```
       * this.sidebar.toggle(true);
       * ```
       */
    function (compact) {
        if (compact === void 0) { compact = false; }
        if (this.responsiveEnabled()) {
            if (this.responsiveState === NbSidebarComponent.RESPONSIVE_STATE_MOBILE) {
                compact = false;
            }
        }
        var closedStates = [NbSidebarComponent.STATE_COMPACTED, NbSidebarComponent.STATE_COLLAPSED];
        if (compact) {
            this.state = closedStates.indexOf(this.stateValue) >= 0 ?
                NbSidebarComponent.STATE_EXPANDED : NbSidebarComponent.STATE_COMPACTED;
        }
        else {
            this.state = closedStates.indexOf(this.stateValue) >= 0 ?
                NbSidebarComponent.STATE_EXPANDED : NbSidebarComponent.STATE_COLLAPSED;
        }
    };
    NbSidebarComponent.prototype.onMediaQueryChanges = function () {
        var _this = this;
        return this.themeService.onMediaQueryChange()
            .subscribe(function (_a) {
            var prev = _a[0], current = _a[1];
            // TODO: get width by the key and define only max width for the tablets and mobiles
            var tablet = ['xs', 'is', 'sm', 'md', 'lg'];
            var mobile = ['xs', 'is'];
            if (tablet.indexOf(current.name) !== -1) {
                _this.fixed = true;
                _this.compact();
                _this.responsiveState = NbSidebarComponent.RESPONSIVE_STATE_TABLET;
            }
            if (mobile.indexOf(current.name) !== -1) {
                _this.collapse();
                _this.responsiveState = NbSidebarComponent.RESPONSIVE_STATE_MOBILE;
            }
            if (tablet.indexOf(current.name) === -1 && prev.width < current.width) {
                _this.expand();
                _this.fixed = false;
                _this.responsiveState = NbSidebarComponent.RESPONSIVE_STATE_PC;
            }
        });
    };
    NbSidebarComponent.prototype.responsiveEnabled = function () {
        return this.responsiveValue;
    };
    NbSidebarComponent.STATE_EXPANDED = 'expanded';
    NbSidebarComponent.STATE_COLLAPSED = 'collapsed';
    NbSidebarComponent.STATE_COMPACTED = 'compacted';
    NbSidebarComponent.RESPONSIVE_STATE_MOBILE = 'mobile';
    NbSidebarComponent.RESPONSIVE_STATE_TABLET = 'tablet';
    NbSidebarComponent.RESPONSIVE_STATE_PC = 'pc';
    NbSidebarComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'nb-sidebar',
                    styles: [":host{display:flex;flex-direction:column;overflow:hidden;z-index:auto;order:0}:host .scrollable{overflow-y:auto;overflow-x:hidden;flex:1}:host .main-container{position:fixed;transform:translate3d(0, 0, 0);display:flex;flex-direction:column}:host.right{margin-right:0;margin-left:auto}[dir=ltr] :host.right{order:4}[dir=rtl] :host.right{order:0}:host.end{order:4}[dir=ltr] :host.end{margin-right:0;margin-left:auto}[dir=rtl] :host.end{margin-left:0;margin-right:auto}:host.fixed{position:fixed;height:100%;z-index:999;top:0;bottom:0;left:0}:host.fixed.right{right:0}[dir=ltr] :host.fixed.start{left:0}[dir=rtl] :host.fixed.start{right:0}[dir=ltr] :host.fixed.end{right:0}[dir=rtl] :host.fixed.end{left:0}:host /deep/ nb-sidebar-footer{margin-top:auto;display:block}:host /deep/ nb-sidebar-header{display:block} "],
                    template: "\n    <div class=\"main-container\">\n      <ng-content select=\"nb-sidebar-header\"></ng-content>\n      <div class=\"scrollable\" (click)=\"onClick($event)\">\n        <ng-content></ng-content>\n      </div>\n      <ng-content select=\"nb-sidebar-footer\"></ng-content>\n    </div>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbSidebarComponent.ctorParameters = function () { return [
        { type: _sidebar_service__WEBPACK_IMPORTED_MODULE_4__["NbSidebarService"], },
        { type: _services_theme_service__WEBPACK_IMPORTED_MODULE_3__["NbThemeService"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    NbSidebarComponent.propDecorators = {
        "fixedValue": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.fixed',] },],
        "rightValue": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.right',] },],
        "leftValue": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.left',] },],
        "startValue": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.start',] },],
        "endValue": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.end',] },],
        "expanded": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.expanded',] },],
        "collapsed": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.collapsed',] },],
        "compacted": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.compacted',] },],
        "right": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "left": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "start": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "end": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fixed": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "state": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "responsive": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "tag": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NbSidebarComponent;
}());

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/components/sidebar/sidebar.module.js":
/*!*********************************************************************!*\
  !*** ./src/app/@nebular/theme/components/sidebar/sidebar.module.js ***!
  \*********************************************************************/
/*! exports provided: NbSidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbSidebarModule", function() { return NbSidebarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/@nebular/theme/components/shared/shared.module.js");
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar.component */ "./src/app/@nebular/theme/components/sidebar/sidebar.component.js");
/* harmony import */ var _sidebar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar.service */ "./src/app/@nebular/theme/components/sidebar/sidebar.service.js");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




var NB_SIDEBAR_COMPONENTS = [
    _sidebar_component__WEBPACK_IMPORTED_MODULE_2__["NbSidebarComponent"],
    _sidebar_component__WEBPACK_IMPORTED_MODULE_2__["NbSidebarFooterComponent"],
    _sidebar_component__WEBPACK_IMPORTED_MODULE_2__["NbSidebarHeaderComponent"],
];
var NB_SIDEBAR_PROVIDERS = [
    _sidebar_service__WEBPACK_IMPORTED_MODULE_3__["NbSidebarService"],
];
var NbSidebarModule = /** @class */ (function () {
    function NbSidebarModule() {
    }
    NbSidebarModule.forRoot = function () {
        return {
            ngModule: NbSidebarModule,
            providers: NB_SIDEBAR_PROVIDERS.slice(),
        };
    };
    NbSidebarModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["NbSharedModule"],
                    ],
                    declarations: NB_SIDEBAR_COMPONENTS.slice(),
                    exports: NB_SIDEBAR_COMPONENTS.slice(),
                },] },
    ];
    return NbSidebarModule;
}());

//# sourceMappingURL=sidebar.module.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/components/sidebar/sidebar.service.js":
/*!**********************************************************************!*\
  !*** ./src/app/@nebular/theme/components/sidebar/sidebar.service.js ***!
  \**********************************************************************/
/*! exports provided: NbSidebarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbSidebarService", function() { return NbSidebarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */



/**
 * Sidebar service.
 *
 * Root module service to control the sidebar from any part of the app.
 */
var NbSidebarService = /** @class */ (function () {
    function NbSidebarService() {
        this.toggle$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.expand$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.collapse$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    /**
     * Subscribe to toggle events
     *
     * @returns Observable<{ compact: boolean, tag: string }>
     */
    /**
       * Subscribe to toggle events
       *
       * @returns Observable<{ compact: boolean, tag: string }>
       */
    NbSidebarService.prototype.onToggle = /**
       * Subscribe to toggle events
       *
       * @returns Observable<{ compact: boolean, tag: string }>
       */
    function () {
        return this.toggle$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
    };
    /**
     * Subscribe to expand events
     * @returns Observable<{ tag: string }>
     */
    /**
       * Subscribe to expand events
       * @returns Observable<{ tag: string }>
       */
    NbSidebarService.prototype.onExpand = /**
       * Subscribe to expand events
       * @returns Observable<{ tag: string }>
       */
    function () {
        return this.expand$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
    };
    /**
     * Subscribe to collapse evens
     * @returns Observable<{ tag: string }>
     */
    /**
       * Subscribe to collapse evens
       * @returns Observable<{ tag: string }>
       */
    NbSidebarService.prototype.onCollapse = /**
       * Subscribe to collapse evens
       * @returns Observable<{ tag: string }>
       */
    function () {
        return this.collapse$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
    };
    /**
     * Toggle a sidebar
     * @param {boolean} compact
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar you want to control
     */
    /**
       * Toggle a sidebar
       * @param {boolean} compact
       * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
       * to specify which sidebar you want to control
       */
    NbSidebarService.prototype.toggle = /**
       * Toggle a sidebar
       * @param {boolean} compact
       * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
       * to specify which sidebar you want to control
       */
    function (compact, tag) {
        if (compact === void 0) { compact = false; }
        this.toggle$.next({ compact: compact, tag: tag });
    };
    /**
     * Expands a sidebar
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar you want to control
     */
    /**
       * Expands a sidebar
       * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
       * to specify which sidebar you want to control
       */
    NbSidebarService.prototype.expand = /**
       * Expands a sidebar
       * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
       * to specify which sidebar you want to control
       */
    function (tag) {
        this.expand$.next({ tag: tag });
    };
    /**
     * Collapses a sidebar
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar you want to control
     */
    /**
       * Collapses a sidebar
       * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
       * to specify which sidebar you want to control
       */
    NbSidebarService.prototype.collapse = /**
       * Collapses a sidebar
       * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
       * to specify which sidebar you want to control
       */
    function (tag) {
        this.collapse$.next({ tag: tag });
    };
    NbSidebarService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return NbSidebarService;
}());

//# sourceMappingURL=sidebar.service.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/components/tabset/tabset.component.js":
/*!**********************************************************************!*\
  !*** ./src/app/@nebular/theme/components/tabset/tabset.component.js ***!
  \**********************************************************************/
/*! exports provided: NbTabComponent, NbTabsetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbTabComponent", function() { return NbTabComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbTabsetComponent", function() { return NbTabsetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./src/app/@nebular/theme/components/helpers.js");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */



/**
 * Specific tab container.
 */
var NbTabComponent = /** @class */ (function () {
    function NbTabComponent() {
        this.activeValue = false;
        this.init = false;
    }
    Object.defineProperty(NbTabComponent.prototype, "active", {
        get: /**
           * Specifies active tab
           * @returns {boolean}
           */
        function () {
            return this.activeValue;
        },
        set: function (val) {
            this.activeValue = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["convertToBoolProperty"])(val);
            if (this.activeValue) {
                this.init = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbTabComponent.prototype, "lazyLoad", {
        set: /**
           * Lazy load content before tab selection
           * @param {boolean} val
           */
        function (val) {
            this.init = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["convertToBoolProperty"])(val);
        },
        enumerable: true,
        configurable: true
    });
    NbTabComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'nb-tab',
                    template: "\n    <ng-container *ngIf=\"init\">\n      <ng-content></ng-content>\n    </ng-container>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbTabComponent.propDecorators = {
        "tabTitle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "route": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "activeValue": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.content-active',] },],
        "active": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "lazyLoad": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "badgeText": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "badgeStatus": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "badgePosition": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NbTabComponent;
}());

// TODO: Combine tabset with route-tabset, so that we can:
// - have similar interface
// - easy to migrate from one to another
// - can mix them both (route/content tab)
/**
 *
 * Dynamic tabset component.
 * Renders `<nb-tab></ng-tab> containers inside.
 *
 * @example Basic tabset example
 *
 * ```
 * <nb-tabset>
 *  <nb-tab tabTitle="Simple Tab #1">
 *    Tab content 1
 *  </nb-tab>
 *  <nb-tab tabTitle="Simple Tab #2">
 *    Tab content 2
 *  </nb-tab>
 * </nb-tabset>
 *
 * @styles
 *
 * tabs-font-family:
 * tabs-font-size:
 * tabs-content-font-family:
 * tabs-content-font-size:
 * tabs-active-bg:
 * tabs-active-font-weight:
 * tabs-padding:
 * tabs-content-padding:
 * tabs-header-bg:
 * tabs-separator:
 * tabs-fg:
 * tabs-fg-text:
 * tabs-fg-heading:
 * tabs-bg:
 * tabs-selected:
 *
 ```
 */
var NbTabsetComponent = /** @class */ (function () {
    function NbTabsetComponent(route) {
        this.route = route;
        this.fullWidthValue = false;
        /**
           * Emits when tab is selected
           * @type EventEmitter<any>
           */
        this.changeTab = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(NbTabsetComponent.prototype, "fullWidth", {
        set: /**
           * Take full width of a parent
           * @param {boolean} val
           */
        function (val) {
            this.fullWidthValue = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["convertToBoolProperty"])(val);
        },
        enumerable: true,
        configurable: true
    });
    NbTabsetComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            var activeTab = _this.tabs.find(function (tab) { return _this.routeParam ? tab.route === params[_this.routeParam] : tab.active; });
            _this.selectTab(activeTab || _this.tabs.first);
        });
    };
    // TODO: navigate to routeParam
    // TODO: navigate to routeParam
    NbTabsetComponent.prototype.selectTab = 
    // TODO: navigate to routeParam
    function (selectedTab) {
        this.tabs.forEach(function (tab) { return tab.active = tab === selectedTab; });
        this.changeTab.emit(selectedTab);
    };
    NbTabsetComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'nb-tabset',
                    styles: [":host{display:block}:host.full-width ul{justify-content:space-around}:host /deep/ nb-tab{flex:1;-ms-flex:1 1 auto;overflow:auto;display:none}:host /deep/ nb-tab.content-active{display:block}ul{display:flex;flex-direction:row;list-style-type:none;margin:0}ul li{cursor:pointer;margin-bottom:-1px;text-align:center;position:relative}ul li.active a::before{display:block}ul li a{position:relative;text-decoration:none;display:inline-block}ul li a::before{display:none;position:absolute;content:'';width:100%;height:6px;border-radius:3px;bottom:-2px;left:0} "],
                    template: "\n    <ul>\n      <li *ngFor=\"let tab of tabs\"\n          (click)=\"selectTab(tab)\"\n          [class.active]=\"tab.active\">\n        <a href (click)=\"$event.preventDefault()\">{{ tab.tabTitle }}</a>\n        <nb-badge *ngIf=\"tab.badgeText\"\n          [text]=\"tab.badgeText\"\n          [status]=\"tab.badgeStatus\"\n          [position]=\"tab.badgePosition\">\n        </nb-badge>\n      </li>\n    </ul>\n    <ng-content select=\"nb-tab\"></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbTabsetComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], },
    ]; };
    NbTabsetComponent.propDecorators = {
        "tabs": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NbTabComponent,] },],
        "fullWidthValue": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.full-width',] },],
        "fullWidth": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "routeParam": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "changeTab": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return NbTabsetComponent;
}());

//# sourceMappingURL=tabset.component.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/components/tabset/tabset.module.js":
/*!*******************************************************************!*\
  !*** ./src/app/@nebular/theme/components/tabset/tabset.module.js ***!
  \*******************************************************************/
/*! exports provided: NbTabsetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbTabsetModule", function() { return NbTabsetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/@nebular/theme/components/shared/shared.module.js");
/* harmony import */ var _tabset_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabset.component */ "./src/app/@nebular/theme/components/tabset/tabset.component.js");
/* harmony import */ var _badge_badge_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../badge/badge.module */ "./src/app/@nebular/theme/components/badge/badge.module.js");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




var NB_TABSET_COMPONENTS = [
    _tabset_component__WEBPACK_IMPORTED_MODULE_2__["NbTabsetComponent"],
    _tabset_component__WEBPACK_IMPORTED_MODULE_2__["NbTabComponent"],
];
var NbTabsetModule = /** @class */ (function () {
    function NbTabsetModule() {
    }
    NbTabsetModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["NbSharedModule"],
                        _badge_badge_module__WEBPACK_IMPORTED_MODULE_3__["NbBadgeModule"],
                    ],
                    declarations: NB_TABSET_COMPONENTS.slice(),
                    exports: NB_TABSET_COMPONENTS.slice(),
                },] },
    ];
    return NbTabsetModule;
}());

//# sourceMappingURL=tabset.module.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/components/user/user.component.js":
/*!******************************************************************!*\
  !*** ./src/app/@nebular/theme/components/user/user.component.js ***!
  \******************************************************************/
/*! exports provided: NbUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbUserComponent", function() { return NbUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./src/app/@nebular/theme/components/helpers.js");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */



/**
 * Represents a component showing a user avatar (picture) with a user name on the right.
 *
 * Can be used as a user profile link.
 *
 * @styles
 *
 * user-font-size:
 * user-line-height:
 * user-bg:
 * user-fg:
 * user-fg-highlight:
 * user-font-family-secondary:
 * user-size-small:
 * user-size-medium:
 * user-size-large:
 * user-size-xlarge:
 */
var NbUserComponent = /** @class */ (function () {
    function NbUserComponent(domSanitizer) {
        this.domSanitizer = domSanitizer;
        /**
           * Specifies a name to be shown on the right of a user picture
           * @type string
           */
        this.name = 'Anonymous';
        this.showNameValue = true;
        this.showTitleValue = true;
        this.showInitialsValue = true;
        this.isMenuShown = false;
    }
    Object.defineProperty(NbUserComponent.prototype, "small", {
        get: function () {
            return this.sizeValue === NbUserComponent.SIZE_SMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "medium", {
        get: function () {
            return this.sizeValue === NbUserComponent.SIZE_MEDIUM;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "large", {
        get: function () {
            return this.sizeValue === NbUserComponent.SIZE_LARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "xlarge", {
        get: function () {
            return this.sizeValue === NbUserComponent.SIZE_XLARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "picture", {
        set: /**
           * Absolute path to a user picture. Or base64 image
           * User name initials (JD for John Doe) will be shown if no picture specified
           * @type string
           */
        function (value) {
            this.imageBackgroundStyle = value ? this.domSanitizer.bypassSecurityTrustStyle("url(" + value + ")") : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "size", {
        set: /**
           * Size of the component, small|medium|large
           * @type string
           */
        function (val) {
            this.sizeValue = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "showName", {
        set: /**
           * Whether to show a user name or not
           * @type boolean
           */
        function (val) {
            this.showNameValue = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["convertToBoolProperty"])(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "showTitle", {
        set: /**
           * Whether to show a user title or not
           * @type boolean
           */
        function (val) {
            this.showTitleValue = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["convertToBoolProperty"])(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "showInitials", {
        set: /**
           * Whether to show a user initials (if no picture specified) or not
           * @type boolean
           */
        function (val) {
            this.showInitialsValue = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["convertToBoolProperty"])(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "onlyPicture", {
        set: /**
           * Whether to show only a picture or also show the name and title
           * @type boolean
           */
        function (val) {
            this.showNameValue = this.showTitleValue = !Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["convertToBoolProperty"])(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "inverse", {
        set: /**
           * Makes colors inverse based on current theme
           * @type boolean
           */
        function (val) {
            this.inverseValue = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["convertToBoolProperty"])(val);
        },
        enumerable: true,
        configurable: true
    });
    NbUserComponent.prototype.getInitials = function () {
        if (this.name) {
            var names = this.name.split(' ');
            return names.map(function (n) { return n.charAt(0); }).splice(0, 2).join('').toUpperCase();
        }
        return '';
    };
    // TODO: it makes sense use object instead of list of variables (or even enum)
    /*
        static readonly SIZE = {
         SMALL: 'small',
         MEDIUM: 'medium',
         LARGE: 'large',
        };
       */
    NbUserComponent.SIZE_SMALL = 'small';
    NbUserComponent.SIZE_MEDIUM = 'medium';
    NbUserComponent.SIZE_LARGE = 'large';
    NbUserComponent.SIZE_XLARGE = 'xlarge';
    NbUserComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'nb-user',
                    styles: [":host{display:flex}:host .user-container{position:relative;display:flex;align-items:center}:host .user-picture{position:relative;border-radius:50%;flex-shrink:0}:host .user-picture.image{background-size:cover;background-repeat:no-repeat}:host .user-picture.background{display:flex;align-items:center;justify-content:center}:host .user-title{font-size:0.75rem}[dir=rtl] :host .user-name,[dir=rtl] :host .user-title{text-align:right}[dir=ltr] :host .info-container{margin-left:.5rem}[dir=rtl] :host .info-container{margin-right:.5rem} "],
                    template: "<div class=\"user-container\"> <div *ngIf=\"imageBackgroundStyle\" class=\"user-picture image\" [style.background-image]=\"imageBackgroundStyle\"> <nb-badge *ngIf=\"badgeText\" [text]=\"badgeText\" [status]=\"badgeStatus\" [position]=\"badgePosition\"></nb-badge> </div> <div *ngIf=\"!imageBackgroundStyle\" class=\"user-picture background\" [style.background-color]=\"color\"> <ng-container *ngIf=\"showInitialsValue\"> {{ getInitials() }} </ng-container> <nb-badge *ngIf=\"badgeText\" [text]=\"badgeText\" [status]=\"badgeStatus\" [position]=\"badgePosition\"></nb-badge> </div> <div class=\"info-container\"> <div *ngIf=\"showNameValue && name\" class=\"user-name\">{{ name }}</div> <div *ngIf=\"showTitleValue && title\" class=\"user-title\">{{ title }}</div> </div> </div> ",
                },] },
    ];
    /** @nocollapse */
    NbUserComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"], },
    ]; };
    NbUserComponent.propDecorators = {
        "inverseValue": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.inverse',] },],
        "small": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.small',] },],
        "medium": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.medium',] },],
        "large": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.large',] },],
        "xlarge": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.xlarge',] },],
        "name": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "title": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "picture": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "color": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "size": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "showName": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "showTitle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "showInitials": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "onlyPicture": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "inverse": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "badgeText": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "badgeStatus": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "badgePosition": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NbUserComponent;
}());

//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/components/user/user.module.js":
/*!***************************************************************!*\
  !*** ./src/app/@nebular/theme/components/user/user.module.js ***!
  \***************************************************************/
/*! exports provided: NbUserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbUserModule", function() { return NbUserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/@nebular/theme/components/shared/shared.module.js");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.component */ "./src/app/@nebular/theme/components/user/user.component.js");
/* harmony import */ var _badge_badge_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../badge/badge.module */ "./src/app/@nebular/theme/components/badge/badge.module.js");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




var NB_USER_COMPONENTS = [
    _user_component__WEBPACK_IMPORTED_MODULE_2__["NbUserComponent"],
];
var NbUserModule = /** @class */ (function () {
    function NbUserModule() {
    }
    NbUserModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["NbSharedModule"],
                        _badge_badge_module__WEBPACK_IMPORTED_MODULE_3__["NbBadgeModule"],
                    ],
                    declarations: NB_USER_COMPONENTS.slice(),
                    exports: NB_USER_COMPONENTS.slice(),
                },] },
    ];
    return NbUserModule;
}());

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/index.js":
/*!*****************************************!*\
  !*** ./src/app/@nebular/theme/index.js ***!
  \*****************************************/
/*! exports provided: NbMenuService, NbMenuItem, nbThemeOptionsToken, nbMediaBreakpointsToken, nbBuiltInJSThemesToken, nbJSThemesToken, NB_WINDOW, NB_DOCUMENT, nbWindowFactory, NbThemeModule, NbThemeService, NbSpinnerService, DEFAULT_MEDIA_BREAKPOINTS, NbMediaBreakpointsService, NbColorHelper, NbLayoutDirection, NB_LAYOUT_DIRECTION, NbLayoutDirectionService, NbCardModule, NbLayoutModule, NbMenuModule, NbRouteTabsetModule, NbSidebarModule, NbSidebarService, NbTabsetModule, NbUserModule, NbActionsModule, NbSearchModule, NbSearchService, NbCheckboxComponent, NbCheckboxModule, NbBadgeComponent, NbBadgeModule, NbPopoverDirective, NbPopoverModule, NbContextMenuDirective, NbContextMenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme.options */ "./src/app/@nebular/theme/theme.options.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nbThemeOptionsToken", function() { return _theme_options__WEBPACK_IMPORTED_MODULE_0__["nbThemeOptionsToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nbMediaBreakpointsToken", function() { return _theme_options__WEBPACK_IMPORTED_MODULE_0__["nbMediaBreakpointsToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nbBuiltInJSThemesToken", function() { return _theme_options__WEBPACK_IMPORTED_MODULE_0__["nbBuiltInJSThemesToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nbJSThemesToken", function() { return _theme_options__WEBPACK_IMPORTED_MODULE_0__["nbJSThemesToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NB_WINDOW", function() { return _theme_options__WEBPACK_IMPORTED_MODULE_0__["NB_WINDOW"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NB_DOCUMENT", function() { return _theme_options__WEBPACK_IMPORTED_MODULE_0__["NB_DOCUMENT"]; });

/* harmony import */ var _theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme.module */ "./src/app/@nebular/theme/theme.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nbWindowFactory", function() { return _theme_module__WEBPACK_IMPORTED_MODULE_1__["nbWindowFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbThemeModule", function() { return _theme_module__WEBPACK_IMPORTED_MODULE_1__["NbThemeModule"]; });

/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/theme.service */ "./src/app/@nebular/theme/services/theme.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbThemeService", function() { return _services_theme_service__WEBPACK_IMPORTED_MODULE_2__["NbThemeService"]; });

/* harmony import */ var _services_spinner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/spinner.service */ "./src/app/@nebular/theme/services/spinner.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbSpinnerService", function() { return _services_spinner_service__WEBPACK_IMPORTED_MODULE_3__["NbSpinnerService"]; });

/* harmony import */ var _services_breakpoints_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/breakpoints.service */ "./src/app/@nebular/theme/services/breakpoints.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_MEDIA_BREAKPOINTS", function() { return _services_breakpoints_service__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_MEDIA_BREAKPOINTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbMediaBreakpointsService", function() { return _services_breakpoints_service__WEBPACK_IMPORTED_MODULE_4__["NbMediaBreakpointsService"]; });

/* harmony import */ var _services_color_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/color.helper */ "./src/app/@nebular/theme/services/color.helper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbColorHelper", function() { return _services_color_helper__WEBPACK_IMPORTED_MODULE_5__["NbColorHelper"]; });

/* harmony import */ var _services_direction_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/direction.service */ "./src/app/@nebular/theme/services/direction.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbLayoutDirection", function() { return _services_direction_service__WEBPACK_IMPORTED_MODULE_6__["NbLayoutDirection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NB_LAYOUT_DIRECTION", function() { return _services_direction_service__WEBPACK_IMPORTED_MODULE_6__["NB_LAYOUT_DIRECTION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbLayoutDirectionService", function() { return _services_direction_service__WEBPACK_IMPORTED_MODULE_6__["NbLayoutDirectionService"]; });

/* harmony import */ var _components_card_card_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/card/card.module */ "./src/app/@nebular/theme/components/card/card.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbCardModule", function() { return _components_card_card_module__WEBPACK_IMPORTED_MODULE_7__["NbCardModule"]; });

/* harmony import */ var _components_layout_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/layout/layout.module */ "./src/app/@nebular/theme/components/layout/layout.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbLayoutModule", function() { return _components_layout_layout_module__WEBPACK_IMPORTED_MODULE_8__["NbLayoutModule"]; });

/* harmony import */ var _components_menu_menu_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/menu/menu.module */ "./src/app/@nebular/theme/components/menu/menu.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbMenuModule", function() { return _components_menu_menu_module__WEBPACK_IMPORTED_MODULE_9__["NbMenuModule"]; });

/* harmony import */ var _components_menu_menu_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/menu/menu.service */ "./src/app/@nebular/theme/components/menu/menu.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbMenuService", function() { return _components_menu_menu_service__WEBPACK_IMPORTED_MODULE_10__["NbMenuService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbMenuItem", function() { return _components_menu_menu_service__WEBPACK_IMPORTED_MODULE_10__["NbMenuItem"]; });

/* harmony import */ var _components_route_tabset_route_tabset_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/route-tabset/route-tabset.module */ "./src/app/@nebular/theme/components/route-tabset/route-tabset.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbRouteTabsetModule", function() { return _components_route_tabset_route_tabset_module__WEBPACK_IMPORTED_MODULE_11__["NbRouteTabsetModule"]; });

/* harmony import */ var _components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/sidebar/sidebar.module */ "./src/app/@nebular/theme/components/sidebar/sidebar.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbSidebarModule", function() { return _components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_12__["NbSidebarModule"]; });

/* harmony import */ var _components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/sidebar/sidebar.service */ "./src/app/@nebular/theme/components/sidebar/sidebar.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbSidebarService", function() { return _components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_13__["NbSidebarService"]; });

/* harmony import */ var _components_tabset_tabset_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/tabset/tabset.module */ "./src/app/@nebular/theme/components/tabset/tabset.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbTabsetModule", function() { return _components_tabset_tabset_module__WEBPACK_IMPORTED_MODULE_14__["NbTabsetModule"]; });

/* harmony import */ var _components_user_user_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/user/user.module */ "./src/app/@nebular/theme/components/user/user.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbUserModule", function() { return _components_user_user_module__WEBPACK_IMPORTED_MODULE_15__["NbUserModule"]; });

/* harmony import */ var _components_actions_actions_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/actions/actions.module */ "./src/app/@nebular/theme/components/actions/actions.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbActionsModule", function() { return _components_actions_actions_module__WEBPACK_IMPORTED_MODULE_16__["NbActionsModule"]; });

/* harmony import */ var _components_search_search_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/search/search.module */ "./src/app/@nebular/theme/components/search/search.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbSearchModule", function() { return _components_search_search_module__WEBPACK_IMPORTED_MODULE_17__["NbSearchModule"]; });

/* harmony import */ var _components_search_search_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/search/search.service */ "./src/app/@nebular/theme/components/search/search.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbSearchService", function() { return _components_search_search_service__WEBPACK_IMPORTED_MODULE_18__["NbSearchService"]; });

/* harmony import */ var _components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/checkbox/checkbox.component */ "./src/app/@nebular/theme/components/checkbox/checkbox.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbCheckboxComponent", function() { return _components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_19__["NbCheckboxComponent"]; });

/* harmony import */ var _components_checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/checkbox/checkbox.module */ "./src/app/@nebular/theme/components/checkbox/checkbox.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbCheckboxModule", function() { return _components_checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_20__["NbCheckboxModule"]; });

/* harmony import */ var _components_badge_badge_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/badge/badge.component */ "./src/app/@nebular/theme/components/badge/badge.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbBadgeComponent", function() { return _components_badge_badge_component__WEBPACK_IMPORTED_MODULE_21__["NbBadgeComponent"]; });

/* harmony import */ var _components_badge_badge_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/badge/badge.module */ "./src/app/@nebular/theme/components/badge/badge.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbBadgeModule", function() { return _components_badge_badge_module__WEBPACK_IMPORTED_MODULE_22__["NbBadgeModule"]; });

/* harmony import */ var _components_popover_popover_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/popover/popover.directive */ "./src/app/@nebular/theme/components/popover/popover.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbPopoverDirective", function() { return _components_popover_popover_directive__WEBPACK_IMPORTED_MODULE_23__["NbPopoverDirective"]; });

/* harmony import */ var _components_popover_popover_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/popover/popover.module */ "./src/app/@nebular/theme/components/popover/popover.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbPopoverModule", function() { return _components_popover_popover_module__WEBPACK_IMPORTED_MODULE_24__["NbPopoverModule"]; });

/* harmony import */ var _components_context_menu_context_menu_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/context-menu/context-menu.directive */ "./src/app/@nebular/theme/components/context-menu/context-menu.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbContextMenuDirective", function() { return _components_context_menu_context_menu_directive__WEBPACK_IMPORTED_MODULE_25__["NbContextMenuDirective"]; });

/* harmony import */ var _components_context_menu_context_menu_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/context-menu/context-menu.module */ "./src/app/@nebular/theme/components/context-menu/context-menu.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbContextMenuModule", function() { return _components_context_menu_context_menu_module__WEBPACK_IMPORTED_MODULE_26__["NbContextMenuModule"]; });

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */



























//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/services/breakpoints.service.js":
/*!****************************************************************!*\
  !*** ./src/app/@nebular/theme/services/breakpoints.service.js ***!
  \****************************************************************/
/*! exports provided: DEFAULT_MEDIA_BREAKPOINTS, NbMediaBreakpointsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_MEDIA_BREAKPOINTS", function() { return DEFAULT_MEDIA_BREAKPOINTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbMediaBreakpointsService", function() { return NbMediaBreakpointsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme.options */ "./src/app/@nebular/theme/theme.options.js");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */


var DEFAULT_MEDIA_BREAKPOINTS = [
    {
        name: 'xs',
        width: 0,
    },
    {
        name: 'is',
        width: 400,
    },
    {
        name: 'sm',
        width: 576,
    },
    {
        name: 'md',
        width: 768,
    },
    {
        name: 'lg',
        width: 992,
    },
    {
        name: 'xl',
        width: 1200,
    },
    {
        name: 'xxl',
        width: 1400,
    },
    {
        name: 'xxxl',
        width: 1600,
    },
];
/**
 * Manages media breakpoints
 *
 * Provides access to available media breakpoints to convert window width to a configured breakpoint,
 * e.g. 200px - *xs* breakpoint
 */
var NbMediaBreakpointsService = /** @class */ (function () {
    function NbMediaBreakpointsService(breakpoints) {
        this.breakpoints = breakpoints;
        this.breakpointsMap = this.breakpoints.reduce(function (res, b) {
            res[b.name] = b.width;
            return res;
        }, {});
    }
    /**
     * Returns a configured breakpoint by width
     * @param width number
     * @returns {Z|{name: string, width: number}}
     */
    /**
       * Returns a configured breakpoint by width
       * @param width number
       * @returns {Z|{name: string, width: number}}
       */
    NbMediaBreakpointsService.prototype.getByWidth = /**
       * Returns a configured breakpoint by width
       * @param width number
       * @returns {Z|{name: string, width: number}}
       */
    function (width) {
        var unknown = { name: 'unknown', width: width };
        var breakpoints = this.getBreakpoints();
        return breakpoints
            .find(function (point, index) {
            var next = breakpoints[index + 1];
            return width >= point.width && (!next || width < next.width);
        }) || unknown;
    };
    /**
     * Returns a configured breakpoint by name
     * @param name string
     * @returns NbMediaBreakpoint
     */
    /**
       * Returns a configured breakpoint by name
       * @param name string
       * @returns NbMediaBreakpoint
       */
    NbMediaBreakpointsService.prototype.getByName = /**
       * Returns a configured breakpoint by name
       * @param name string
       * @returns NbMediaBreakpoint
       */
    function (name) {
        var unknown = { name: 'unknown', width: NaN };
        var breakpoints = this.getBreakpoints();
        return breakpoints.find(function (point) { return name === point.name; }) || unknown;
    };
    /**
     * Returns a list of configured breakpoints for the theme
     * @returns NbMediaBreakpoint[]
     */
    /**
       * Returns a list of configured breakpoints for the theme
       * @returns NbMediaBreakpoint[]
       */
    NbMediaBreakpointsService.prototype.getBreakpoints = /**
       * Returns a list of configured breakpoints for the theme
       * @returns NbMediaBreakpoint[]
       */
    function () {
        return this.breakpoints;
    };
    /**
     * Returns a map of configured breakpoints for the theme
     * @returns {[p: string]: number}
     */
    /**
       * Returns a map of configured breakpoints for the theme
       * @returns {[p: string]: number}
       */
    NbMediaBreakpointsService.prototype.getBreakpointsMap = /**
       * Returns a map of configured breakpoints for the theme
       * @returns {[p: string]: number}
       */
    function () {
        return this.breakpointsMap;
    };
    NbMediaBreakpointsService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NbMediaBreakpointsService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_theme_options__WEBPACK_IMPORTED_MODULE_1__["nbMediaBreakpointsToken"],] },] },
    ]; };
    return NbMediaBreakpointsService;
}());

//# sourceMappingURL=breakpoints.service.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/services/color.helper.js":
/*!*********************************************************!*\
  !*** ./src/app/@nebular/theme/services/color.helper.js ***!
  \*********************************************************/
/*! exports provided: NbColorHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbColorHelper", function() { return NbColorHelper; });
var NbColorHelper = /** @class */ (function () {
    function NbColorHelper() {
    }
    NbColorHelper.shade = function (color, weight) {
        return NbColorHelper.mix('#000000', color, weight);
    };
    NbColorHelper.tint = function (color, weight) {
        return NbColorHelper.mix('#ffffff', color, weight);
    };
    NbColorHelper.mix = function (color1, color2, weight) {
        var d2h = function (d) { return d.toString(16); };
        var h2d = function (h) { return parseInt(h, 16); };
        var result = '#';
        for (var i = 1; i < 7; i += 2) {
            var firstPart = h2d(color1.substr(i, 2));
            var secondPart = h2d(color2.substr(i, 2));
            var resultPart = d2h(Math.floor(secondPart + (firstPart - secondPart) * (weight / 100.0)));
            result += ('0' + resultPart).slice(-2);
        }
        return result;
    };
    NbColorHelper.hexToRgbA = function (hex, alpha) {
        var c;
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
            c = hex.substring(1).split('');
            if (c.length === 3) {
                c = [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c = '0x' + c.join('');
            return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + alpha + ')';
        }
        throw new Error('Bad Hex');
    };
    return NbColorHelper;
}());

//# sourceMappingURL=color.helper.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/services/direction.service.js":
/*!**************************************************************!*\
  !*** ./src/app/@nebular/theme/services/direction.service.js ***!
  \**************************************************************/
/*! exports provided: NbLayoutDirection, NB_LAYOUT_DIRECTION, NbLayoutDirectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbLayoutDirection", function() { return NbLayoutDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NB_LAYOUT_DIRECTION", function() { return NB_LAYOUT_DIRECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbLayoutDirectionService", function() { return NbLayoutDirectionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");



/**
 * Layout direction.
 * */
/**
 * Layout direction.
 * */
var NbLayoutDirection;
/**
 * Layout direction.
 * */
(function (NbLayoutDirection) {
    NbLayoutDirection["LTR"] = "ltr";
    NbLayoutDirection["RTL"] = "rtl";
})(NbLayoutDirection || (NbLayoutDirection = {}));
;
/**
 * Layout direction setting injection token.
 * */
var NB_LAYOUT_DIRECTION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Layout direction');
/**
 * Layout Direction Service.
 * Allows to set or get layout direction and listen to it's changes
 */
var NbLayoutDirectionService = /** @class */ (function () {
    function NbLayoutDirectionService(direction) {
        if (direction === void 0) { direction = NbLayoutDirection.LTR; }
        this.direction = direction;
        this.$directionChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.setDirection(direction);
    }
    /**
     * Returns true if layout direction set to left to right.
     * @returns boolean.
     * */
    /**
       * Returns true if layout direction set to left to right.
       * @returns boolean.
       * */
    NbLayoutDirectionService.prototype.isLtr = /**
       * Returns true if layout direction set to left to right.
       * @returns boolean.
       * */
    function () {
        return this.direction === NbLayoutDirection.LTR;
    };
    /**
     * Returns true if layout direction set to right to left.
     * @returns boolean.
     * */
    /**
       * Returns true if layout direction set to right to left.
       * @returns boolean.
       * */
    NbLayoutDirectionService.prototype.isRtl = /**
       * Returns true if layout direction set to right to left.
       * @returns boolean.
       * */
    function () {
        return this.direction === NbLayoutDirection.RTL;
    };
    /**
     * Returns current layout direction.
     * @returns NbLayoutDirection.
     * */
    /**
       * Returns current layout direction.
       * @returns NbLayoutDirection.
       * */
    NbLayoutDirectionService.prototype.getDirection = /**
       * Returns current layout direction.
       * @returns NbLayoutDirection.
       * */
    function () {
        return this.direction;
    };
    /**
     * Sets layout direction
     * @param {NbLayoutDirection} direction
     */
    /**
       * Sets layout direction
       * @param {NbLayoutDirection} direction
       */
    NbLayoutDirectionService.prototype.setDirection = /**
       * Sets layout direction
       * @param {NbLayoutDirection} direction
       */
    function (direction) {
        this.direction = direction;
        this.$directionChange.next(direction);
    };
    /**
     * Triggered when direction was changed.
     * @returns Observable<NbLayoutDirection>.
     */
    /**
       * Triggered when direction was changed.
       * @returns Observable<NbLayoutDirection>.
       */
    NbLayoutDirectionService.prototype.onDirectionChange = /**
       * Triggered when direction was changed.
       * @returns Observable<NbLayoutDirection>.
       */
    function () {
        return this.$directionChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
    };
    NbLayoutDirectionService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NbLayoutDirectionService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NB_LAYOUT_DIRECTION,] },] },
    ]; };
    return NbLayoutDirectionService;
}());

//# sourceMappingURL=direction.service.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/services/js-themes-registry.service.js":
/*!***********************************************************************!*\
  !*** ./src/app/@nebular/theme/services/js-themes-registry.service.js ***!
  \***********************************************************************/
/*! exports provided: BUILT_IN_THEMES, NbJSThemesRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUILT_IN_THEMES", function() { return BUILT_IN_THEMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbJSThemesRegistry", function() { return NbJSThemesRegistry; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _js_themes_default_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js-themes/default.theme */ "./src/app/@nebular/theme/services/js-themes/default.theme.js");
/* harmony import */ var _js_themes_cosmic_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js-themes/cosmic.theme */ "./src/app/@nebular/theme/services/js-themes/cosmic.theme.js");
/* harmony import */ var _theme_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme.options */ "./src/app/@nebular/theme/theme.options.js");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




var BUILT_IN_THEMES = [
    _js_themes_default_theme__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_THEME"],
    _js_themes_cosmic_theme__WEBPACK_IMPORTED_MODULE_2__["COSMIC_THEME"],
];
/**
 * Js Themes registry - provides access to the JS themes' variables.
 * Usually shouldn't be used directly, but through the NbThemeService class methods (getJsTheme).
 */
var NbJSThemesRegistry = /** @class */ (function () {
    function NbJSThemesRegistry(builtInThemes, newThemes) {
        if (newThemes === void 0) { newThemes = []; }
        var _this = this;
        this.themes = {};
        var themes = this.combineByNames(newThemes, builtInThemes);
        themes.forEach(function (theme) {
            _this.register(theme, theme.name, theme.base);
        });
    }
    /**
     * Registers a new JS theme
     * @param config any
     * @param themeName string
     * @param baseTheme string
     */
    /**
       * Registers a new JS theme
       * @param config any
       * @param themeName string
       * @param baseTheme string
       */
    NbJSThemesRegistry.prototype.register = /**
       * Registers a new JS theme
       * @param config any
       * @param themeName string
       * @param baseTheme string
       */
    function (config, themeName, baseTheme) {
        var base = this.has(baseTheme) ? this.get(baseTheme) : {};
        this.themes[themeName] = this.mergeDeep({}, base, config);
    };
    /**
     * Checks whether the theme is registered
     * @param themeName
     * @returns boolean
     */
    /**
       * Checks whether the theme is registered
       * @param themeName
       * @returns boolean
       */
    NbJSThemesRegistry.prototype.has = /**
       * Checks whether the theme is registered
       * @param themeName
       * @returns boolean
       */
    function (themeName) {
        return !!this.themes[themeName];
    };
    /**
     * Return a theme
     * @param themeName
     * @returns NbJSThemeOptions
     */
    /**
       * Return a theme
       * @param themeName
       * @returns NbJSThemeOptions
       */
    NbJSThemesRegistry.prototype.get = /**
       * Return a theme
       * @param themeName
       * @returns NbJSThemeOptions
       */
    function (themeName) {
        if (!this.themes[themeName]) {
            throw Error("NbThemeConfig: no theme '" + themeName + "' found registered.");
        }
        return JSON.parse(JSON.stringify(this.themes[themeName]));
    };
    NbJSThemesRegistry.prototype.combineByNames = function (newThemes, oldThemes) {
        var _this = this;
        if (newThemes) {
            var mergedThemes_1 = [];
            newThemes.forEach(function (theme) {
                var sameOld = oldThemes.find(function (tm) { return tm.name === theme.name; })
                    || {};
                var mergedTheme = _this.mergeDeep({}, sameOld, theme);
                mergedThemes_1.push(mergedTheme);
            });
            oldThemes.forEach(function (theme) {
                if (!mergedThemes_1.find(function (tm) { return tm.name === theme.name; })) {
                    mergedThemes_1.push(theme);
                }
            });
            return mergedThemes_1;
        }
        return oldThemes;
    };
    NbJSThemesRegistry.prototype.isObject = function (item) {
        return item && typeof item === 'object' && !Array.isArray(item);
    };
    // TODO: move to helpers
    // TODO: move to helpers
    NbJSThemesRegistry.prototype.mergeDeep = 
    // TODO: move to helpers
    function (target) {
        var sources = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            sources[_i - 1] = arguments[_i];
        }
        if (!sources.length) {
            return target;
        }
        var source = sources.shift();
        if (this.isObject(target) && this.isObject(source)) {
            for (var key in source) {
                if (this.isObject(source[key])) {
                    if (!target[key]) {
                        Object.assign(target, (_a = {}, _a[key] = {}, _a));
                    }
                    this.mergeDeep(target[key], source[key]);
                }
                else {
                    Object.assign(target, (_b = {}, _b[key] = source[key], _b));
                }
            }
        }
        return this.mergeDeep.apply(this, [target].concat(sources));
        var _a, _b;
    };
    NbJSThemesRegistry.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NbJSThemesRegistry.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_theme_options__WEBPACK_IMPORTED_MODULE_3__["nbBuiltInJSThemesToken"],] },] },
        { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_theme_options__WEBPACK_IMPORTED_MODULE_3__["nbJSThemesToken"],] },] },
    ]; };
    return NbJSThemesRegistry;
}());

//# sourceMappingURL=js-themes-registry.service.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/services/js-themes/cosmic.theme.js":
/*!*******************************************************************!*\
  !*** ./src/app/@nebular/theme/services/js-themes/cosmic.theme.js ***!
  \*******************************************************************/
/*! exports provided: COSMIC_THEME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COSMIC_THEME", function() { return COSMIC_THEME; });
/* harmony import */ var _color_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../color.helper */ "./src/app/@nebular/theme/services/color.helper.js");

var palette = {
    primary: '#7659ff',
    success: '#00d977',
    info: '#0088ff',
    warning: '#ffa100',
    danger: '#ff386a',
};
var COSMIC_THEME = {
    name: 'cosmic',
    base: 'default',
    variables: {
        bg: '#3d3780',
        fg: '#a1a1e5',
        fgHeading: '#ffffff',
        fgText: '#d1d1ff',
        fgHighlight: '#00f9a6',
        layoutBg: '#2f296b',
        separator: '#342e73',
        primary: palette.primary,
        success: palette.success,
        info: palette.info,
        warning: palette.warning,
        danger: palette.danger,
        primaryLight: _color_helper__WEBPACK_IMPORTED_MODULE_0__["NbColorHelper"].tint(palette.primary, 20),
        successLight: _color_helper__WEBPACK_IMPORTED_MODULE_0__["NbColorHelper"].tint(palette.success, 20),
        infoLight: _color_helper__WEBPACK_IMPORTED_MODULE_0__["NbColorHelper"].tint(palette.info, 20),
        warningLight: _color_helper__WEBPACK_IMPORTED_MODULE_0__["NbColorHelper"].tint(palette.warning, 20),
        dangerLight: _color_helper__WEBPACK_IMPORTED_MODULE_0__["NbColorHelper"].tint(palette.danger, 20),
    },
};
//# sourceMappingURL=cosmic.theme.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/services/js-themes/default.theme.js":
/*!********************************************************************!*\
  !*** ./src/app/@nebular/theme/services/js-themes/default.theme.js ***!
  \********************************************************************/
/*! exports provided: DEFAULT_THEME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_THEME", function() { return DEFAULT_THEME; });
/* harmony import */ var _color_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../color.helper */ "./src/app/@nebular/theme/services/color.helper.js");

var palette = {
    primary: '#8a7fff',
    success: '#40dc7e',
    info: '#4ca6ff',
    warning: '#ffa100',
    danger: '#ff4c6a',
};
var DEFAULT_THEME = {
    name: 'default',
    variables: {
        fontMain: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        fontSecondary: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        bg: '#ffffff',
        fg: '#a4abb3',
        fgHeading: '#2a2a2a',
        fgText: '#3b3b3b',
        fgHighlight: '#41d974',
        layoutBg: '#ebeff5',
        separator: '#ebeef2',
        primary: palette.primary,
        success: palette.success,
        info: palette.info,
        warning: palette.warning,
        danger: palette.danger,
        primaryLight: _color_helper__WEBPACK_IMPORTED_MODULE_0__["NbColorHelper"].tint(palette.primary, 15),
        successLight: _color_helper__WEBPACK_IMPORTED_MODULE_0__["NbColorHelper"].tint(palette.success, 15),
        infoLight: _color_helper__WEBPACK_IMPORTED_MODULE_0__["NbColorHelper"].tint(palette.info, 15),
        warningLight: _color_helper__WEBPACK_IMPORTED_MODULE_0__["NbColorHelper"].tint(palette.warning, 15),
        dangerLight: _color_helper__WEBPACK_IMPORTED_MODULE_0__["NbColorHelper"].tint(palette.danger, 15),
    },
};
//# sourceMappingURL=default.theme.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/services/spinner.service.js":
/*!************************************************************!*\
  !*** ./src/app/@nebular/theme/services/spinner.service.js ***!
  \************************************************************/
/*! exports provided: NbSpinnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbSpinnerService", function() { return NbSpinnerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme.options */ "./src/app/@nebular/theme/theme.options.js");


/**
 * Service to control the global page spinner.
 */
var NbSpinnerService = /** @class */ (function () {
    function NbSpinnerService(document) {
        this.document = document;
        this.loaders = [];
        this.selector = 'nb-global-spinner';
    }
    /**
     * Appends new loader to the list of loader to be completed before
     * spinner will be hidden
     * @param method Promise<any>
     */
    /**
       * Appends new loader to the list of loader to be completed before
       * spinner will be hidden
       * @param method Promise<any>
       */
    NbSpinnerService.prototype.registerLoader = /**
       * Appends new loader to the list of loader to be completed before
       * spinner will be hidden
       * @param method Promise<any>
       */
    function (method) {
        this.loaders.push(method);
    };
    /**
     * Clears the list of loader
     */
    /**
       * Clears the list of loader
       */
    NbSpinnerService.prototype.clear = /**
       * Clears the list of loader
       */
    function () {
        this.loaders = [];
    };
    /**
     * Start the loader process, show spinnder and execute loaders
     */
    /**
       * Start the loader process, show spinnder and execute loaders
       */
    NbSpinnerService.prototype.load = /**
       * Start the loader process, show spinnder and execute loaders
       */
    function () {
        this.showSpinner();
        this.executeAll();
    };
    NbSpinnerService.prototype.executeAll = function (done) {
        var _this = this;
        if (done === void 0) { done = function () { }; }
        Promise.all(this.loaders).then(function (values) {
            _this.hideSpinner();
            done.call(null, values);
        })
            .catch(function (error) {
            // TODO: Promise.reject
            console.error(error);
        });
    };
    // TODO is there any better way of doing this?
    // TODO is there any better way of doing this?
    NbSpinnerService.prototype.showSpinner = 
    // TODO is there any better way of doing this?
    function () {
        var el = this.getSpinnerElement();
        if (el) {
            el.style['display'] = 'block';
        }
    };
    NbSpinnerService.prototype.hideSpinner = function () {
        var el = this.getSpinnerElement();
        if (el) {
            el.style['display'] = 'none';
        }
    };
    NbSpinnerService.prototype.getSpinnerElement = function () {
        return this.document.getElementById(this.selector);
    };
    NbSpinnerService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NbSpinnerService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_theme_options__WEBPACK_IMPORTED_MODULE_1__["NB_DOCUMENT"],] },] },
    ]; };
    return NbSpinnerService;
}());

//# sourceMappingURL=spinner.service.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/services/theme.service.js":
/*!**********************************************************!*\
  !*** ./src/app/@nebular/theme/services/theme.service.js ***!
  \**********************************************************/
/*! exports provided: NbThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbThemeService", function() { return NbThemeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _theme_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme.options */ "./src/app/@nebular/theme/theme.options.js");
/* harmony import */ var _js_themes_registry_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js-themes-registry.service */ "./src/app/@nebular/theme/services/js-themes-registry.service.js");
/* harmony import */ var _breakpoints_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./breakpoints.service */ "./src/app/@nebular/theme/services/breakpoints.service.js");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */






/**
 * Main Nebular service. Includes various helper methods.
 */
var NbThemeService = /** @class */ (function () {
    function NbThemeService(options, breakpointService, jsThemesRegistry, componentFactoryResolver) {
        this.options = options;
        this.breakpointService = breakpointService;
        this.jsThemesRegistry = jsThemesRegistry;
        this.componentFactoryResolver = componentFactoryResolver;
        this.themeChanges$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.appendToLayoutTop$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]();
        this.createLayoutTop$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.appendLayoutClass$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.removeLayoutClass$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.changeWindowWidth$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](2);
        if (options && options.name) {
            this.changeTheme(options.name);
        }
    }
    NbThemeService.prototype.changeTheme = function (name) {
        this.themeChanges$.next({ name: name, previous: this.currentTheme });
        this.currentTheme = name;
    };
    NbThemeService.prototype.changeWindowWidth = function (width) {
        this.changeWindowWidth$.next(width);
    };
    NbThemeService.prototype.appendToLayoutTop = function (entity) {
        var factory = entity;
        if (entity instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["Type"]) {
            factory = this.componentFactoryResolver.resolveComponentFactory(entity);
        }
        var subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.appendToLayoutTop$.next({ factory: factory, listener: subject });
        return subject.asObservable();
    };
    /**
     * Returns a theme object with variables (color/paddings/etc) on a theme change.
     * Once subscribed - returns current theme.
     *
     * @returns {Observable<NbJSThemeOptions>}
     */
    /**
       * Returns a theme object with variables (color/paddings/etc) on a theme change.
       * Once subscribed - returns current theme.
       *
       * @returns {Observable<NbJSThemeOptions>}
       */
    NbThemeService.prototype.getJsTheme = /**
       * Returns a theme object with variables (color/paddings/etc) on a theme change.
       * Once subscribed - returns current theme.
       *
       * @returns {Observable<NbJSThemeOptions>}
       */
    function () {
        var _this = this;
        return this.onThemeChange().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (theme) {
            return _this.jsThemesRegistry.get(theme.name);
        }));
    };
    NbThemeService.prototype.clearLayoutTop = function () {
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.createLayoutTop$.next({ listener: observable });
        this.appendToLayoutTop$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]();
        return observable.asObservable();
    };
    /**
     * Triggers media query breakpoint change
     * Returns a pair where the first item is previous media breakpoint and the second item is current breakpoit.
     * ```
     *  [{ name: 'xs', width: 0 }, { name: 'md', width: 768 }] // change from `xs` to `md`
     * ```
     * @returns {Observable<[NbMediaBreakpoint, NbMediaBreakpoint]>}
     */
    /**
       * Triggers media query breakpoint change
       * Returns a pair where the first item is previous media breakpoint and the second item is current breakpoit.
       * ```
       *  [{ name: 'xs', width: 0 }, { name: 'md', width: 768 }] // change from `xs` to `md`
       * ```
       * @returns {Observable<[NbMediaBreakpoint, NbMediaBreakpoint]>}
       */
    NbThemeService.prototype.onMediaQueryChange = /**
       * Triggers media query breakpoint change
       * Returns a pair where the first item is previous media breakpoint and the second item is current breakpoit.
       * ```
       *  [{ name: 'xs', width: 0 }, { name: 'md', width: 768 }] // change from `xs` to `md`
       * ```
       * @returns {Observable<[NbMediaBreakpoint, NbMediaBreakpoint]>}
       */
    function () {
        var _this = this;
        return this.changeWindowWidth$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(undefined), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
            var prevWidth = _a[0], width = _a[1];
            return [
                _this.breakpointService.getByWidth(prevWidth),
                _this.breakpointService.getByWidth(width),
            ];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (_a) {
            var prevPoint = _a[0], point = _a[1];
            return prevPoint.name !== point.name;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(null, function (params) { return params[0].name + params[1].name; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
    };
    NbThemeService.prototype.onThemeChange = function () {
        return this.themeChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
    };
    NbThemeService.prototype.onAppendToTop = function () {
        return this.appendToLayoutTop$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
    };
    NbThemeService.prototype.onClearLayoutTop = function () {
        return this.createLayoutTop$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
    };
    NbThemeService.prototype.appendLayoutClass = function (className) {
        this.appendLayoutClass$.next(className);
    };
    NbThemeService.prototype.onAppendLayoutClass = function () {
        return this.appendLayoutClass$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
    };
    NbThemeService.prototype.removeLayoutClass = function (className) {
        this.removeLayoutClass$.next(className);
    };
    NbThemeService.prototype.onRemoveLayoutClass = function () {
        return this.removeLayoutClass$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
    };
    NbThemeService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NbThemeService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_theme_options__WEBPACK_IMPORTED_MODULE_3__["nbThemeOptionsToken"],] },] },
        { type: _breakpoints_service__WEBPACK_IMPORTED_MODULE_5__["NbMediaBreakpointsService"], },
        { type: _js_themes_registry_service__WEBPACK_IMPORTED_MODULE_4__["NbJSThemesRegistry"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], },
    ]; };
    return NbThemeService;
}());

//# sourceMappingURL=theme.service.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/theme.module.js":
/*!************************************************!*\
  !*** ./src/app/@nebular/theme/theme.module.js ***!
  \************************************************/
/*! exports provided: nbWindowFactory, NbThemeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nbWindowFactory", function() { return nbWindowFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbThemeModule", function() { return NbThemeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _theme_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme.options */ "./src/app/@nebular/theme/theme.options.js");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/theme.service */ "./src/app/@nebular/theme/services/theme.service.js");
/* harmony import */ var _services_spinner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/spinner.service */ "./src/app/@nebular/theme/services/spinner.service.js");
/* harmony import */ var _services_js_themes_registry_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/js-themes-registry.service */ "./src/app/@nebular/theme/services/js-themes-registry.service.js");
/* harmony import */ var _services_breakpoints_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/breakpoints.service */ "./src/app/@nebular/theme/services/breakpoints.service.js");
/* harmony import */ var _services_direction_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/direction.service */ "./src/app/@nebular/theme/services/direction.service.js");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */








function nbWindowFactory() {
    return window;
}
var NbThemeModule = /** @class */ (function () {
    function NbThemeModule() {
    }
    // TODO: check the options (throw exception?)
    /**
     * Main Theme Module
     *
     * @param nbThemeOptions {NbThemeOptions} Main theme options
     * @param nbJSThemes {NbJSThemeOptions[]} List of JS Themes, will be merged with default themes
     * @param nbMediaBreakpoints {NbMediaBreakpoint} Available media breakpoints
     *
     * @returns {ModuleWithProviders}
     */
    // TODO: check the options (throw exception?)
    /**
       * Main Theme Module
       *
       * @param nbThemeOptions {NbThemeOptions} Main theme options
       * @param nbJSThemes {NbJSThemeOptions[]} List of JS Themes, will be merged with default themes
       * @param nbMediaBreakpoints {NbMediaBreakpoint} Available media breakpoints
       *
       * @returns {ModuleWithProviders}
       */
    NbThemeModule.forRoot = 
    // TODO: check the options (throw exception?)
    /**
       * Main Theme Module
       *
       * @param nbThemeOptions {NbThemeOptions} Main theme options
       * @param nbJSThemes {NbJSThemeOptions[]} List of JS Themes, will be merged with default themes
       * @param nbMediaBreakpoints {NbMediaBreakpoint} Available media breakpoints
       *
       * @returns {ModuleWithProviders}
       */
    function (nbThemeOptions, nbJSThemes, nbMediaBreakpoints, layoutDirection) {
        return {
            ngModule: NbThemeModule,
            providers: [
                { provide: _theme_options__WEBPACK_IMPORTED_MODULE_2__["nbThemeOptionsToken"], useValue: nbThemeOptions || {} },
                { provide: _theme_options__WEBPACK_IMPORTED_MODULE_2__["nbBuiltInJSThemesToken"], useValue: _services_js_themes_registry_service__WEBPACK_IMPORTED_MODULE_5__["BUILT_IN_THEMES"] },
                { provide: _theme_options__WEBPACK_IMPORTED_MODULE_2__["nbJSThemesToken"], useValue: nbJSThemes || [] },
                { provide: _theme_options__WEBPACK_IMPORTED_MODULE_2__["nbMediaBreakpointsToken"], useValue: nbMediaBreakpoints || _services_breakpoints_service__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_MEDIA_BREAKPOINTS"] },
                { provide: _theme_options__WEBPACK_IMPORTED_MODULE_2__["NB_WINDOW"], useFactory: nbWindowFactory },
                { provide: _theme_options__WEBPACK_IMPORTED_MODULE_2__["NB_DOCUMENT"], useExisting: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"] },
                _services_js_themes_registry_service__WEBPACK_IMPORTED_MODULE_5__["NbJSThemesRegistry"],
                _services_theme_service__WEBPACK_IMPORTED_MODULE_3__["NbThemeService"],
                _services_breakpoints_service__WEBPACK_IMPORTED_MODULE_6__["NbMediaBreakpointsService"],
                _services_spinner_service__WEBPACK_IMPORTED_MODULE_4__["NbSpinnerService"],
                { provide: _services_direction_service__WEBPACK_IMPORTED_MODULE_7__["NB_LAYOUT_DIRECTION"], useValue: layoutDirection || _services_direction_service__WEBPACK_IMPORTED_MODULE_7__["NbLayoutDirection"].LTR },
                _services_direction_service__WEBPACK_IMPORTED_MODULE_7__["NbLayoutDirectionService"],
            ],
        };
    };
    NbThemeModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ],
                    exports: [],
                },] },
    ];
    return NbThemeModule;
}());

//# sourceMappingURL=theme.module.js.map

/***/ }),

/***/ "./src/app/@nebular/theme/theme.options.js":
/*!*************************************************!*\
  !*** ./src/app/@nebular/theme/theme.options.js ***!
  \*************************************************/
/*! exports provided: nbThemeOptionsToken, nbMediaBreakpointsToken, nbBuiltInJSThemesToken, nbJSThemesToken, NB_WINDOW, NB_DOCUMENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nbThemeOptionsToken", function() { return nbThemeOptionsToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nbMediaBreakpointsToken", function() { return nbMediaBreakpointsToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nbBuiltInJSThemesToken", function() { return nbBuiltInJSThemesToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nbJSThemesToken", function() { return nbJSThemesToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NB_WINDOW", function() { return NB_WINDOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NB_DOCUMENT", function() { return NB_DOCUMENT; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

var nbThemeOptionsToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NB_THEME_OPTIONS');
var nbMediaBreakpointsToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NB_MEDIA_BREAKPOINTS');
var nbBuiltInJSThemesToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NB_BUILT_IN_THEMES');
var nbJSThemesToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NB_THEMES');
/**
 * We're providing browser apis with tokens to improve testing capabilities.
 * */
var NB_WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NB_WINDOW');
var NB_DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NB_DOCUMENT');
//# sourceMappingURL=theme.options.js.map

/***/ }),

/***/ "./src/app/@theme/components/footer/footer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/@theme/components/footer/footer.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-default :host {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n.nb-theme-default :host .socials {\n    font-size: 2rem; }\n.nb-theme-default :host .socials a {\n      padding: 0.4rem;\n      color: #a4abb3;\n      transition: color ease-out 0.1s; }\n.nb-theme-default :host .socials a:hover {\n        color: #2a2a2a; }\n@media (max-width: 575.98px) {\n    .nb-theme-default :host .socials {\n      font-size: 1.5rem; } }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-cosmic :host {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n.nb-theme-cosmic :host .socials {\n    font-size: 2rem; }\n.nb-theme-cosmic :host .socials a {\n      padding: 0.4rem;\n      color: #a1a1e5;\n      transition: color ease-out 0.1s; }\n.nb-theme-cosmic :host .socials a:hover {\n        color: #ffffff; }\n@media (max-width: 575.98px) {\n    .nb-theme-cosmic :host .socials {\n      font-size: 1.5rem; } }\n"

/***/ }),

/***/ "./src/app/@theme/components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/@theme/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-footer',
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/@theme/components/footer/footer.component.scss")],
            template: "\n    <span class=\"created-by\">All rights reserved, Paranoid Fan, Inc.</span>\n  ",
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/@theme/components/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-container\"\r\n     [class.left]=\"position === 'normal'\"\r\n     [class.right]=\"position === 'inverse'\">\r\n  <div class=\"logo-containter\">\r\n    <a (click)=\"toggleSidebar()\" href=\"#\" class=\"navigation\"><i class=\"nb-menu\"></i></a>\r\n    <div class=\"logo\" (click)=\"goToHome()\">Food-Ordering<span>-Admin</span></div>\r\n  </div>\r\n  <ngx-theme-switcher></ngx-theme-switcher>\r\n</div>\r\n\r\n<nb-actions\r\n  size=\"medium\"\r\n  class=\"header-container\"\r\n  [class.right]=\"position === 'normal'\"\r\n  [class.left]=\"position === 'inverse'\">\r\n  <nb-action *nbIsGranted=\"['view', 'user']\" >\r\n    <nb-user [nbContextMenu]=\"userMenu\" [name]=\"user?.first_name+' '+user?.last_name\" [picture]=\"user?.picture\"></nb-user>\r\n  </nb-action>\r\n</nb-actions>\r\n"

/***/ }),

/***/ "./src/app/@theme/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/@theme/components/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-default :host {\n  display: flex;\n  justify-content: space-between;\n  width: 100%; }\n.nb-theme-default :host .left {\n    display: flex;\n    width: 100%;\n    order: 0;\n    flex-direction: row; }\n.nb-theme-default :host .right {\n    order: 1;\n    flex-direction: row-reverse; }\n.nb-theme-default :host .logo-containter {\n    display: flex;\n    align-items: center; }\n.nb-theme-default :host .control-item {\n    display: block; }\n.nb-theme-default :host .header-container {\n    display: flex;\n    align-items: center;\n    width: 100%; }\n.nb-theme-default :host .header-container .navigation {\n      font-size: 2.5rem;\n      text-decoration: none; }\n[dir=ltr] .nb-theme-default :host .header-container .navigation {\n        padding-right: 1.25rem; }\n[dir=rtl] .nb-theme-default :host .header-container .navigation {\n        padding-left: 1.25rem; }\n.nb-theme-default :host .header-container .navigation i {\n        display: block; }\n.nb-theme-default :host .header-container .logo {\n      padding: 0 1.25rem;\n      font-size: 1.75rem;\n      font-weight: 500;\n      white-space: nowrap; }\n[dir=ltr] .nb-theme-default :host .header-container .logo {\n        border-left: 1px solid #ebeef2; }\n[dir=rtl] .nb-theme-default :host .header-container .logo {\n        border-right: 1px solid #ebeef2; }\n.nb-theme-default :host .header-container .logo span {\n        font-weight: 400; }\n.nb-theme-default :host ngx-layout-direction-switcher,\n  .nb-theme-default :host ngx-theme-switcher {\n    margin: 0 1em; }\n@media (max-width: 1399.98px) {\n    .nb-theme-default :host ngx-layout-direction-switcher {\n      display: none; } }\n.nb-theme-default :host .toggle-layout /deep/ a {\n    display: block;\n    text-decoration: none;\n    line-height: 1; }\n.nb-theme-default :host .toggle-layout /deep/ a i {\n      color: #40dc7e;\n      font-size: 2.25rem;\n      border-radius: 50%;\n      position: relative;\n      -webkit-animation-name: pulse-light;\n              animation-name: pulse-light; }\n.nb-theme-default :host .toggle-layout /deep/ a i::after {\n        content: ' ';\n        background-image: url(\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\");\n        border-radius: 50%;\n        pointer-events: none;\n        position: absolute;\n        top: 52.3%;\n        left: 50%;\n        -webkit-transform: translate(-50%, -50%);\n                transform: translate(-50%, -50%);\n        width: 13%;\n        height: 13%;\n        -webkit-animation: 3s linear infinite pulse;\n                animation: 3s linear infinite pulse;\n        -webkit-animation-name: pulse-light;\n                animation-name: pulse-light; }\n@-webkit-keyframes pulse {\n  0% {\n    box-shadow: 0 0 1px 0 rgba(64, 220, 126, 0); }\n  20% {\n    box-shadow: 0 0 3px 10px rgba(64, 220, 126, 0.4); }\n  100% {\n    box-shadow: 0 0 5px 20px rgba(64, 220, 126, 0); } }\n@keyframes pulse {\n  0% {\n    box-shadow: 0 0 1px 0 rgba(64, 220, 126, 0); }\n  20% {\n    box-shadow: 0 0 3px 10px rgba(64, 220, 126, 0.4); }\n  100% {\n    box-shadow: 0 0 5px 20px rgba(64, 220, 126, 0); } }\n@-webkit-keyframes pulse-light {\n  0% {\n    box-shadow: 0 0 1px 0 rgba(115, 255, 208, 0); }\n  20% {\n    box-shadow: 0 0 3px 10px rgba(115, 255, 208, 0.4); }\n  100% {\n    box-shadow: 0 0 5px 20px rgba(115, 255, 208, 0); } }\n@keyframes pulse-light {\n  0% {\n    box-shadow: 0 0 1px 0 rgba(115, 255, 208, 0); }\n  20% {\n    box-shadow: 0 0 3px 10px rgba(115, 255, 208, 0.4); }\n  100% {\n    box-shadow: 0 0 5px 20px rgba(115, 255, 208, 0); } }\n@media (max-width: 991.98px) {\n    .nb-theme-default :host nb-action:not(.toggle-layout) {\n      border: none; }\n    .nb-theme-default :host .control-item {\n      display: none; }\n    .nb-theme-default :host .toggle-layout {\n      padding: 0; }\n    .nb-theme-default :host ngx-layout-direction-switcher,\n    .nb-theme-default :host ngx-theme-switcher {\n      display: none; } }\n@media (max-width: 767.98px) {\n    .nb-theme-default :host nb-user /deep/ .user-name {\n      display: none; } }\n@media (max-width: 575.98px) {\n    .nb-theme-default :host .header-container .logo {\n      font-size: 1.25rem; }\n    .nb-theme-default :host .toggle-layout {\n      display: none; }\n    .nb-theme-default :host nb-action:not(.toggle-layout) {\n      padding: 0; } }\n@media (max-width: 399.98px) {\n    .nb-theme-default :host .right /deep/ {\n      display: none; } }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-cosmic :host {\n  display: flex;\n  justify-content: space-between;\n  width: 100%; }\n.nb-theme-cosmic :host .left {\n    display: flex;\n    width: 100%;\n    order: 0;\n    flex-direction: row; }\n.nb-theme-cosmic :host .right {\n    order: 1;\n    flex-direction: row-reverse; }\n.nb-theme-cosmic :host .logo-containter {\n    display: flex;\n    align-items: center; }\n.nb-theme-cosmic :host .control-item {\n    display: block; }\n.nb-theme-cosmic :host .header-container {\n    display: flex;\n    align-items: center;\n    width: 100%; }\n.nb-theme-cosmic :host .header-container .navigation {\n      font-size: 2.5rem;\n      text-decoration: none; }\n[dir=ltr] .nb-theme-cosmic :host .header-container .navigation {\n        padding-right: 1.25rem; }\n[dir=rtl] .nb-theme-cosmic :host .header-container .navigation {\n        padding-left: 1.25rem; }\n.nb-theme-cosmic :host .header-container .navigation i {\n        display: block; }\n.nb-theme-cosmic :host .header-container .logo {\n      padding: 0 1.25rem;\n      font-size: 1.75rem;\n      font-weight: 500;\n      white-space: nowrap; }\n[dir=ltr] .nb-theme-cosmic :host .header-container .logo {\n        border-left: 1px solid #342e73; }\n[dir=rtl] .nb-theme-cosmic :host .header-container .logo {\n        border-right: 1px solid #342e73; }\n.nb-theme-cosmic :host .header-container .logo span {\n        font-weight: 400; }\n.nb-theme-cosmic :host ngx-layout-direction-switcher,\n  .nb-theme-cosmic :host ngx-theme-switcher {\n    margin: 0 1em; }\n@media (max-width: 1399.98px) {\n    .nb-theme-cosmic :host ngx-layout-direction-switcher {\n      display: none; } }\n.nb-theme-cosmic :host .toggle-layout /deep/ a {\n    display: block;\n    text-decoration: none;\n    line-height: 1; }\n.nb-theme-cosmic :host .toggle-layout /deep/ a i {\n      color: #00f9a6;\n      font-size: 2.25rem;\n      border-radius: 50%;\n      position: relative;\n      -webkit-animation-name: pulse-light;\n              animation-name: pulse-light; }\n.nb-theme-cosmic :host .toggle-layout /deep/ a i::after {\n        content: ' ';\n        background-image: url(\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\");\n        border-radius: 50%;\n        pointer-events: none;\n        position: absolute;\n        top: 52.3%;\n        left: 50%;\n        -webkit-transform: translate(-50%, -50%);\n                transform: translate(-50%, -50%);\n        width: 13%;\n        height: 13%;\n        -webkit-animation: 3s linear infinite pulse;\n                animation: 3s linear infinite pulse; }\n@-webkit-keyframes pulse {\n  0% {\n    box-shadow: 0 0 1px 0 rgba(0, 249, 166, 0); }\n  20% {\n    box-shadow: 0 0 3px 10px rgba(0, 249, 166, 0.4); }\n  100% {\n    box-shadow: 0 0 5px 20px rgba(0, 249, 166, 0); } }\n@keyframes pulse {\n  0% {\n    box-shadow: 0 0 1px 0 rgba(0, 249, 166, 0); }\n  20% {\n    box-shadow: 0 0 3px 10px rgba(0, 249, 166, 0.4); }\n  100% {\n    box-shadow: 0 0 5px 20px rgba(0, 249, 166, 0); } }\n@-webkit-keyframes pulse-light {\n  0% {\n    box-shadow: 0 0 1px 0 rgba(115, 255, 208, 0); }\n  20% {\n    box-shadow: 0 0 3px 10px rgba(115, 255, 208, 0.4); }\n  100% {\n    box-shadow: 0 0 5px 20px rgba(115, 255, 208, 0); } }\n@keyframes pulse-light {\n  0% {\n    box-shadow: 0 0 1px 0 rgba(115, 255, 208, 0); }\n  20% {\n    box-shadow: 0 0 3px 10px rgba(115, 255, 208, 0.4); }\n  100% {\n    box-shadow: 0 0 5px 20px rgba(115, 255, 208, 0); } }\n@media (max-width: 991.98px) {\n    .nb-theme-cosmic :host nb-action:not(.toggle-layout) {\n      border: none; }\n    .nb-theme-cosmic :host .control-item {\n      display: none; }\n    .nb-theme-cosmic :host .toggle-layout {\n      padding: 0; }\n    .nb-theme-cosmic :host ngx-layout-direction-switcher,\n    .nb-theme-cosmic :host ngx-theme-switcher {\n      display: none; } }\n@media (max-width: 767.98px) {\n    .nb-theme-cosmic :host nb-user /deep/ .user-name {\n      display: none; } }\n@media (max-width: 575.98px) {\n    .nb-theme-cosmic :host .header-container .logo {\n      font-size: 1.25rem; }\n    .nb-theme-cosmic :host .toggle-layout {\n      display: none; }\n    .nb-theme-cosmic :host nb-action:not(.toggle-layout) {\n      padding: 0; } }\n@media (max-width: 399.98px) {\n    .nb-theme-cosmic :host .right /deep/ {\n      display: none; } }\n"

/***/ }),

/***/ "./src/app/@theme/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/@theme/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@nebular/theme */ "./src/app/@nebular/theme/index.js");
/* harmony import */ var _core_data_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@core/data/users.service */ "./src/app/@core/data/users.service.ts");
/* harmony import */ var _core_utils_analytics_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@core/utils/analytics.service */ "./src/app/@core/utils/analytics.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common */ "./src/app/common.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(sidebarService, menuService, userService, analyticsService, cookieService, router) {
        this.sidebarService = sidebarService;
        this.menuService = menuService;
        this.userService = userService;
        this.analyticsService = analyticsService;
        this.cookieService = cookieService;
        this.router = router;
        this.position = 'normal';
        this.logoutAvailable = false;
        this.userMenu = [{ title: 'Log out' }];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _this1 = this;
        this.logoutAvailable = false;
        this.user = _common__WEBPACK_IMPORTED_MODULE_5__["Utils"].decodeJwt(this.cookieService.get('user'));
        this.menuService.onItemClick().subscribe(function (event) {
            _this.onItemSelection(event.item.title);
        });
        this.logoutAvailable = true;
    };
    HeaderComponent.prototype.onItemSelection = function (title) {
        // console.log(title);
        if (title === 'Log out') {
            if (!this.logoutAvailable)
                return;
            console.log('log out ~~~~~~~~~~~~~~');
            this.cookieService.delete('user', '/');
            var _this = this;
            setTimeout(function () {
                _this.router.navigate(['/auth/login'], { replaceUrl: true });
            }, 1000);
        }
    };
    HeaderComponent.prototype.toggleSidebar = function () {
        this.sidebarService.toggle(true, 'menu-sidebar');
        return false;
    };
    HeaderComponent.prototype.toggleSettings = function () {
        this.sidebarService.toggle(false, 'settings-sidebar');
        return false;
    };
    HeaderComponent.prototype.goToHome = function () {
        this.menuService.navigateHome();
    };
    HeaderComponent.prototype.startSearch = function () {
        this.analyticsService.trackEvent('startSearch');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "position", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-header',
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/@theme/components/header/header.component.scss")],
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/@theme/components/header/header.component.html"),
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSidebarService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbMenuService"],
            _core_data_users_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _core_utils_analytics_service__WEBPACK_IMPORTED_MODULE_3__["AnalyticsService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/index.ts":
/*!********************************************!*\
  !*** ./src/app/@theme/components/index.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent, FooterComponent, SearchInputComponent, TinyMCEComponent, ThemeSettingsComponent, ThemeSwitcherComponent, SwitcherComponent, LayoutDirectionSwitcherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ "./src/app/@theme/components/header/header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _header_header_component__WEBPACK_IMPORTED_MODULE_0__["HeaderComponent"]; });

/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/@theme/components/footer/footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]; });

/* harmony import */ var _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-input/search-input.component */ "./src/app/@theme/components/search-input/search-input.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchInputComponent", function() { return _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_2__["SearchInputComponent"]; });

/* harmony import */ var _tiny_mce_tiny_mce_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tiny-mce/tiny-mce.component */ "./src/app/@theme/components/tiny-mce/tiny-mce.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TinyMCEComponent", function() { return _tiny_mce_tiny_mce_component__WEBPACK_IMPORTED_MODULE_3__["TinyMCEComponent"]; });

/* harmony import */ var _theme_settings_theme_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-settings/theme-settings.component */ "./src/app/@theme/components/theme-settings/theme-settings.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeSettingsComponent", function() { return _theme_settings_theme_settings_component__WEBPACK_IMPORTED_MODULE_4__["ThemeSettingsComponent"]; });

/* harmony import */ var _theme_switcher_theme_switcher_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme-switcher/theme-switcher.component */ "./src/app/@theme/components/theme-switcher/theme-switcher.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeSwitcherComponent", function() { return _theme_switcher_theme_switcher_component__WEBPACK_IMPORTED_MODULE_5__["ThemeSwitcherComponent"]; });

/* harmony import */ var _switcher_switcher_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./switcher/switcher.component */ "./src/app/@theme/components/switcher/switcher.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitcherComponent", function() { return _switcher_switcher_component__WEBPACK_IMPORTED_MODULE_6__["SwitcherComponent"]; });

/* harmony import */ var _layout_direction_switcher_layout_direction_switcher_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout-direction-switcher/layout-direction-switcher.component */ "./src/app/@theme/components/layout-direction-switcher/layout-direction-switcher.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutDirectionSwitcherComponent", function() { return _layout_direction_switcher_layout_direction_switcher_component__WEBPACK_IMPORTED_MODULE_7__["LayoutDirectionSwitcherComponent"]; });











/***/ }),

/***/ "./src/app/@theme/components/layout-direction-switcher/layout-direction-switcher.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/@theme/components/layout-direction-switcher/layout-direction-switcher.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: LayoutDirectionSwitcherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutDirectionSwitcherComponent", function() { return LayoutDirectionSwitcherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@nebular/theme */ "./src/app/@nebular/theme/index.js");
/* harmony import */ var rxjs_operators_takeWhile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators/takeWhile */ "./node_modules/rxjs-compat/_esm5/operators/takeWhile.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LayoutDirectionSwitcherComponent = /** @class */ (function () {
    function LayoutDirectionSwitcherComponent(directionService) {
        var _this = this;
        this.directionService = directionService;
        this.directions = _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutDirection"];
        this.alive = true;
        this.vertical = false;
        this.currentDirection = this.directionService.getDirection();
        this.directionService.onDirectionChange()
            .pipe(Object(rxjs_operators_takeWhile__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (newDirection) { return _this.currentDirection = newDirection; });
    }
    LayoutDirectionSwitcherComponent.prototype.toggleDirection = function (newDirection) {
        this.directionService.setDirection(newDirection);
    };
    LayoutDirectionSwitcherComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], LayoutDirectionSwitcherComponent.prototype, "vertical", void 0);
    LayoutDirectionSwitcherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-layout-direction-switcher',
            template: "\n    <ngx-switcher\n      [firstValue]=\"directions.RTL\"\n      [secondValue]=\"directions.LTR\"\n      [firstValueLabel]=\"'RTL'\"\n      [secondValueLabel]=\"'LTR'\"\n      [value]=\"currentDirection\"\n      (valueChange)=\"toggleDirection($event)\"\n      [vertical]=\"vertical\"\n    >\n    </ngx-switcher>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutDirectionService"]])
    ], LayoutDirectionSwitcherComponent);
    return LayoutDirectionSwitcherComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/search-input/search-input.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/@theme/components/search-input/search-input.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  align-items: center; }\n  :host i.control-icon::before {\n    font-size: 2.3rem; }\n  :host i.control-icon:hover {\n    cursor: pointer; }\n  :host input {\n    border: none;\n    outline: none;\n    margin-left: 1rem;\n    width: 15rem;\n    transition: width 0.2s ease; }\n  :host input.hidden {\n      width: 0;\n      margin: 0; }\n  :host /deep/ search-input input {\n    background: transparent; }\n"

/***/ }),

/***/ "./src/app/@theme/components/search-input/search-input.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/@theme/components/search-input/search-input.component.ts ***!
  \**************************************************************************/
/*! exports provided: SearchInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchInputComponent", function() { return SearchInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchInputComponent = /** @class */ (function () {
    function SearchInputComponent() {
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isInputShown = false;
    }
    SearchInputComponent.prototype.showInput = function () {
        this.isInputShown = true;
        this.input.nativeElement.focus();
    };
    SearchInputComponent.prototype.hideInput = function () {
        this.isInputShown = false;
    };
    SearchInputComponent.prototype.onInput = function (val) {
        this.search.emit(val);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('input'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SearchInputComponent.prototype, "input", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SearchInputComponent.prototype, "search", void 0);
    SearchInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-search-input',
            styles: [__webpack_require__(/*! ./search-input.component.scss */ "./src/app/@theme/components/search-input/search-input.component.scss")],
            template: "\n    <i class=\"control-icon ion ion-ios-search\"\n       (click)=\"showInput()\"></i>\n    <input placeholder=\"Type your search request here...\"\n           #input\n           [class.hidden]=\"!isInputShown\"\n           (blur)=\"hideInput()\"\n           (input)=\"onInput($event)\">\n  ",
        })
    ], SearchInputComponent);
    return SearchInputComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/switcher/switcher.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/@theme/components/switcher/switcher.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-default :host .switch-label {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n  margin: 0; }\n.nb-theme-default :host .switch-label.vertical {\n    flex-direction: column;\n    align-items: flex-start; }\n.nb-theme-default :host .switch-label.vertical .first,\n    .nb-theme-default :host .switch-label.vertical .second {\n      padding: 0; }\n.nb-theme-default :host .switch-label.vertical .switch {\n      margin-top: 0.5em; }\n.nb-theme-default :host .switch-label > span {\n    font-size: 1.125rem;\n    font-weight: 600;\n    transition: opacity 0.3s ease;\n    color: #a4abb3; }\n[dir=ltr] .nb-theme-default :host .switch-label > span.first {\n      padding-right: 10px; }\n[dir=rtl] .nb-theme-default :host .switch-label > span.first {\n      padding-left: 10px; }\n[dir=ltr] .nb-theme-default :host .switch-label > span.second {\n      padding-left: 10px; }\n[dir=rtl] .nb-theme-default :host .switch-label > span.second {\n      padding-right: 10px; }\n.nb-theme-default :host .switch-label > span.active {\n      color: #4b4b4b; }\n.nb-theme-default :host .switch-label > span:active {\n      opacity: 0.78; }\n.nb-theme-default :host .switch {\n  position: relative;\n  display: inline-block;\n  width: 4rem;\n  height: 1.75rem;\n  margin: 0; }\n.nb-theme-default :host .switch input {\n    display: none; }\n[dir=ltr] .nb-theme-default :host .switch input:checked + .slider::before {\n      -webkit-transform: translateX(2.25rem);\n              transform: translateX(2.25rem); }\n[dir=rtl] .nb-theme-default :host .switch input:checked + .slider::before {\n      -webkit-transform: translateX(-2.25rem);\n              transform: translateX(-2.25rem); }\n.nb-theme-default :host .switch .slider {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 1.75rem;\n    background-color: #ebeff5; }\n.nb-theme-default :host .switch .slider::before {\n    position: absolute;\n    content: '';\n    height: 1.75rem;\n    width: 1.75rem;\n    border-radius: 50%;\n    background-color: #40dc7e;\n    transition: 0.2s;\n    box-shadow: 0 0 0.25rem 0 rgba(164, 171, 179, 0.4); }\n@media (max-width: 399.98px) {\n  .nb-theme-default :host {\n    align-items: flex-end; } }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-cosmic :host .switch-label {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n  margin: 0; }\n.nb-theme-cosmic :host .switch-label.vertical {\n    flex-direction: column;\n    align-items: flex-start; }\n.nb-theme-cosmic :host .switch-label.vertical .first,\n    .nb-theme-cosmic :host .switch-label.vertical .second {\n      padding: 0; }\n.nb-theme-cosmic :host .switch-label.vertical .switch {\n      margin-top: 0.5em; }\n.nb-theme-cosmic :host .switch-label > span {\n    font-size: 1.125rem;\n    font-weight: 600;\n    transition: opacity 0.3s ease;\n    color: #a1a1e5;\n    color: #a1a1e5; }\n[dir=ltr] .nb-theme-cosmic :host .switch-label > span.first {\n      padding-right: 10px; }\n[dir=rtl] .nb-theme-cosmic :host .switch-label > span.first {\n      padding-left: 10px; }\n[dir=ltr] .nb-theme-cosmic :host .switch-label > span.second {\n      padding-left: 10px; }\n[dir=rtl] .nb-theme-cosmic :host .switch-label > span.second {\n      padding-right: 10px; }\n.nb-theme-cosmic :host .switch-label > span.active {\n      color: #d1d1ff; }\n.nb-theme-cosmic :host .switch-label > span.active {\n      color: #ffffff; }\n.nb-theme-cosmic :host .switch-label > span:active {\n      opacity: 0.78; }\n.nb-theme-cosmic :host .switch {\n  position: relative;\n  display: inline-block;\n  width: 4rem;\n  height: 1.75rem;\n  margin: 0; }\n.nb-theme-cosmic :host .switch input {\n    display: none; }\n[dir=ltr] .nb-theme-cosmic :host .switch input:checked + .slider::before {\n      -webkit-transform: translateX(2.25rem);\n              transform: translateX(2.25rem); }\n[dir=rtl] .nb-theme-cosmic :host .switch input:checked + .slider::before {\n      -webkit-transform: translateX(-2.25rem);\n              transform: translateX(-2.25rem); }\n.nb-theme-cosmic :host .switch .slider {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 1.75rem;\n    background-color: #2f296b; }\n.nb-theme-cosmic :host .switch .slider::before {\n    position: absolute;\n    content: '';\n    height: 1.75rem;\n    width: 1.75rem;\n    border-radius: 50%;\n    background-color: #00d977;\n    transition: 0.2s;\n    box-shadow: 0 0 0.25rem 0 rgba(161, 161, 229, 0.4);\n    background-image: linear-gradient(to right, #ad59ff, #7659ff); }\n@media (max-width: 399.98px) {\n  .nb-theme-cosmic :host {\n    align-items: flex-end; } }\n"

/***/ }),

/***/ "./src/app/@theme/components/switcher/switcher.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/@theme/components/switcher/switcher.component.ts ***!
  \******************************************************************/
/*! exports provided: SwitcherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitcherComponent", function() { return SwitcherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SwitcherComponent = /** @class */ (function () {
    function SwitcherComponent() {
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SwitcherComponent.prototype.isFirstValue = function () {
        return this.value === this.firstValue;
    };
    SwitcherComponent.prototype.isSecondValue = function () {
        return this.value === this.secondValue;
    };
    SwitcherComponent.prototype.currentValueLabel = function () {
        return this.isFirstValue()
            ? this.firstValueLabel
            : this.secondValueLabel;
    };
    SwitcherComponent.prototype.changeValue = function () {
        this.value = this.isFirstValue()
            ? this.secondValue
            : this.firstValue;
        this.valueChange.emit(this.value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SwitcherComponent.prototype, "firstValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SwitcherComponent.prototype, "secondValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SwitcherComponent.prototype, "firstValueLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SwitcherComponent.prototype, "secondValueLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SwitcherComponent.prototype, "vertical", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SwitcherComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SwitcherComponent.prototype, "valueChange", void 0);
    SwitcherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-switcher',
            styles: [__webpack_require__(/*! ./switcher.component.scss */ "./src/app/@theme/components/switcher/switcher.component.scss")],
            template: "\n    <label class=\"switch-label\" [class.vertical]=\"vertical\">\n      <span class=\"first\" [class.active]=\"vertical || isFirstValue()\">\n        {{vertical ? currentValueLabel() : firstValueLabel}}\n      </span>\n\n      <div class=\"switch\">\n        <input type=\"checkbox\" [checked]=\"isSecondValue()\" (change)=\"changeValue()\">\n        <span class=\"slider\"></span>\n      </div>\n\n      <span\n        *ngIf=\"!vertical\"\n        class=\"second\"\n        [class.active]=\"isSecondValue()\"\n      >\n          {{secondValueLabel}}\n      </span>\n    </label>\n  ",
        })
    ], SwitcherComponent);
    return SwitcherComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/theme-settings/theme-settings.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/@theme/components/theme-settings/theme-settings.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-default :host h6 {\n  margin-bottom: 0.5rem; }\n.nb-theme-default :host .settings-row {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 90%;\n  margin: 0 0 1rem; }\n.nb-theme-default :host .settings-row a {\n    text-decoration: none;\n    font-size: 2.25rem;\n    color: #a4abb3; }\n.nb-theme-default :host .settings-row a.selected {\n      color: #40dc7e; }\n.nb-theme-default :host .settings {\n  margin-bottom: 1em; }\n.nb-theme-default :host .switcher {\n  margin-bottom: 1rem; }\n.nb-theme-default :host .switcher /deep/ ngx-switcher .switch-label span {\n    font-size: 1em;\n    font-weight: normal; }\n.nb-theme-default :host .switcher /deep/ ngx-switcher .switch {\n    height: 1.5em;\n    width: 3em; }\n.nb-theme-default :host .switcher /deep/ ngx-switcher .switch .slider::before {\n      height: 1.5em;\n      width: 1.5em; }\n[dir=ltr] .nb-theme-default :host .switcher /deep/ ngx-switcher .switch input:checked + .slider::before {\n      -webkit-transform: translateX(1.5rem) !important;\n              transform: translateX(1.5rem) !important; }\n[dir=rtl] .nb-theme-default :host .switcher /deep/ ngx-switcher .switch input:checked + .slider::before {\n      -webkit-transform: translateX(-1.5rem) !important;\n              transform: translateX(-1.5rem) !important; }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-cosmic :host h6 {\n  margin-bottom: 0.5rem; }\n.nb-theme-cosmic :host .settings-row {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 90%;\n  margin: 0 0 1rem; }\n.nb-theme-cosmic :host .settings-row a {\n    text-decoration: none;\n    font-size: 2.25rem;\n    color: #a1a1e5; }\n.nb-theme-cosmic :host .settings-row a.selected {\n      color: #00d977; }\n.nb-theme-cosmic :host .settings-row a.selected {\n      color: #00f9a6; }\n.nb-theme-cosmic :host .settings {\n  margin-bottom: 1em; }\n.nb-theme-cosmic :host .switcher {\n  margin-bottom: 1rem; }\n.nb-theme-cosmic :host .switcher /deep/ ngx-switcher .switch-label span {\n    font-size: 1em;\n    font-weight: normal; }\n.nb-theme-cosmic :host .switcher /deep/ ngx-switcher .switch {\n    height: 1.5em;\n    width: 3em; }\n.nb-theme-cosmic :host .switcher /deep/ ngx-switcher .switch .slider::before {\n      height: 1.5em;\n      width: 1.5em; }\n[dir=ltr] .nb-theme-cosmic :host .switcher /deep/ ngx-switcher .switch input:checked + .slider::before {\n      -webkit-transform: translateX(1.5rem) !important;\n              transform: translateX(1.5rem) !important; }\n[dir=rtl] .nb-theme-cosmic :host .switcher /deep/ ngx-switcher .switch input:checked + .slider::before {\n      -webkit-transform: translateX(-1.5rem) !important;\n              transform: translateX(-1.5rem) !important; }\n.nb-theme-cosmic :host .switcher /deep/ ngx-switcher .switch .slider {\n    background-color: #3d3780; }\n"

/***/ }),

/***/ "./src/app/@theme/components/theme-settings/theme-settings.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/@theme/components/theme-settings/theme-settings.component.ts ***!
  \******************************************************************************/
/*! exports provided: ThemeSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeSettingsComponent", function() { return ThemeSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_data_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@core/data/state.service */ "./src/app/@core/data/state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThemeSettingsComponent = /** @class */ (function () {
    function ThemeSettingsComponent(stateService) {
        var _this = this;
        this.stateService = stateService;
        this.layouts = [];
        this.sidebars = [];
        this.stateService.getLayoutStates()
            .subscribe(function (layouts) { return _this.layouts = layouts; });
        this.stateService.getSidebarStates()
            .subscribe(function (sidebars) { return _this.sidebars = sidebars; });
    }
    ThemeSettingsComponent.prototype.layoutSelect = function (layout) {
        this.layouts = this.layouts.map(function (l) {
            l.selected = false;
            return l;
        });
        layout.selected = true;
        this.stateService.setLayoutState(layout);
        return false;
    };
    ThemeSettingsComponent.prototype.sidebarSelect = function (sidebars) {
        this.sidebars = this.sidebars.map(function (s) {
            s.selected = false;
            return s;
        });
        sidebars.selected = true;
        this.stateService.setSidebarState(sidebars);
        return false;
    };
    ThemeSettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-theme-settings',
            styles: [__webpack_require__(/*! ./theme-settings.component.scss */ "./src/app/@theme/components/theme-settings/theme-settings.component.scss")],
            template: "\n    <h6>LAYOUTS</h6>\n    <div class=\"settings-row\">\n      <a *ngFor=\"let layout of layouts\"\n         href=\"#\"\n         [class.selected]=\"layout.selected\"\n         [attr.title]=\"layout.name\"\n         (click)=\"layoutSelect(layout)\">\n        <i [attr.class]=\"layout.icon\"></i>\n      </a>\n    </div>\n    <h6>SIDEBAR</h6>\n    <div class=\"settings-row\">\n      <a *ngFor=\"let sidebar of sidebars\"\n         href=\"#\"\n         [class.selected]=\"sidebar.selected\"\n         [attr.title]=\"sidebar.name\"\n         (click)=\"sidebarSelect(sidebar)\">\n        <i [attr.class]=\"sidebar.icon\"></i>\n      </a>\n    </div>\n    <h6 class=\"settings\">SETTINGS</h6>\n    <div class=\"switcher\">\n      <ngx-theme-switcher [vertical]=\"true\"></ngx-theme-switcher>\n    </div>\n    <div class=\"switcher\">\n      <ngx-layout-direction-switcher [vertical]=\"true\"></ngx-layout-direction-switcher>\n    </div>\n  ",
        }),
        __metadata("design:paramtypes", [_core_data_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"]])
    ], ThemeSettingsComponent);
    return ThemeSettingsComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/theme-switcher/theme-switcher.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/@theme/components/theme-switcher/theme-switcher.component.ts ***!
  \******************************************************************************/
/*! exports provided: ThemeSwitcherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeSwitcherComponent", function() { return ThemeSwitcherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@nebular/theme */ "./src/app/@nebular/theme/index.js");
/* harmony import */ var _core_utils_analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@core/utils/analytics.service */ "./src/app/@core/utils/analytics.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ThemeSwitcherComponent = /** @class */ (function () {
    function ThemeSwitcherComponent(themeService, analyticsService) {
        this.themeService = themeService;
        this.analyticsService = analyticsService;
        this.firstTheme = 'default';
        this.secondTheme = 'cosmic';
        this.vertical = false;
    }
    ThemeSwitcherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.themeService.getJsTheme()
            .subscribe(function (theme) { return _this.theme = theme; });
    };
    ThemeSwitcherComponent.prototype.toggleTheme = function (theme) {
        var themeName = this.boolToTheme(theme);
        this.themeService.changeTheme(themeName);
        this.analyticsService.trackEvent('switchTheme');
    };
    ThemeSwitcherComponent.prototype.currentBoolTheme = function () {
        return this.themeToBool(this.theme);
    };
    ThemeSwitcherComponent.prototype.themeToBool = function (theme) {
        return theme.name === this.secondTheme;
    };
    ThemeSwitcherComponent.prototype.boolToTheme = function (theme) {
        return theme ? this.secondTheme : this.firstTheme;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ThemeSwitcherComponent.prototype, "vertical", void 0);
    ThemeSwitcherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-theme-switcher',
            template: "\n    <ngx-switcher\n      [firstValue]=\"false\"\n      [secondValue]=\"true\"\n      [firstValueLabel]=\"'Light'\"\n      [secondValueLabel]=\"'Cosmic'\"\n      [value]=\"currentBoolTheme()\"\n      (valueChange)=\"toggleTheme($event)\"\n      [vertical]=\"vertical\"\n    >\n    </ngx-switcher>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"],
            _core_utils_analytics_service__WEBPACK_IMPORTED_MODULE_2__["AnalyticsService"]])
    ], ThemeSwitcherComponent);
    return ThemeSwitcherComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/tiny-mce/tiny-mce.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/@theme/components/tiny-mce/tiny-mce.component.ts ***!
  \******************************************************************/
/*! exports provided: TinyMCEComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TinyMCEComponent", function() { return TinyMCEComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TinyMCEComponent = /** @class */ (function () {
    function TinyMCEComponent(host) {
        this.host = host;
        this.editorKeyup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TinyMCEComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        tinymce.init({
            target: this.host.nativeElement,
            plugins: ['link', 'paste', 'table'],
            skin_url: 'assets/skins/lightgray',
            setup: function (editor) {
                _this.editor = editor;
                editor.on('keyup', function () {
                    _this.editorKeyup.emit(editor.getContent());
                });
            },
            height: '320',
        });
    };
    TinyMCEComponent.prototype.ngOnDestroy = function () {
        tinymce.remove(this.editor);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TinyMCEComponent.prototype, "editorKeyup", void 0);
    TinyMCEComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-tiny-mce',
            template: '',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], TinyMCEComponent);
    return TinyMCEComponent;
}());



/***/ }),

/***/ "./src/app/@theme/layouts/index.ts":
/*!*****************************************!*\
  !*** ./src/app/@theme/layouts/index.ts ***!
  \*****************************************/
/*! exports provided: SampleLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sample_sample_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sample/sample.layout */ "./src/app/@theme/layouts/sample/sample.layout.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SampleLayoutComponent", function() { return _sample_sample_layout__WEBPACK_IMPORTED_MODULE_0__["SampleLayoutComponent"]; });




/***/ }),

/***/ "./src/app/@theme/layouts/sample/sample.layout.scss":
/*!**********************************************************!*\
  !*** ./src/app/@theme/layouts/sample/sample.layout.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-default :host nb-layout-column.small {\n  flex: 0.15 !important; }\n.nb-theme-default :host nb-sidebar.settings-sidebar {\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n.nb-theme-default :host nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n.nb-theme-default :host nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n.nb-theme-default :host nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n.nb-theme-default :host nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #ffffff;\n    transition: width 0.3s ease;\n    overflow: hidden; }\n.nb-theme-default :host nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n.nb-theme-default :host nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n.nb-theme-default :host nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important; }\n[dir=ltr] .nb-theme-default :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      border-top-right-radius: 0.375rem; }\n[dir=rtl] .nb-theme-default :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      border-top-left-radius: 0.375rem; }\n.nb-theme-default :host nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n.nb-theme-default :host nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n.nb-theme-default :host nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n[dir=ltr] .nb-theme-default :host nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n[dir=rtl] .nb-theme-default :host nb-sidebar.menu-sidebar .main-btn span {\n      padding-right: 0.25rem; }\n.nb-theme-default :host nb-sidebar.menu-sidebar .main-btn i, .nb-theme-default :host nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n.nb-theme-default :host nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n.nb-theme-default :host nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    transition: none; }\n.nb-theme-default :host nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n@media (max-width: 399.98px) {\n  .nb-theme-default :host .main-content {\n    padding: 0.75rem !important; } }\n@media (max-width: 767.98px) {\n  .nb-theme-default :host nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    .nb-theme-default :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important; }\n      [dir=ltr] .nb-theme-default :host nb-sidebar.menu-sidebar /deep/ .main-container {\n        border-top-right-radius: 0; }\n      [dir=rtl] .nb-theme-default :host nb-sidebar.menu-sidebar /deep/ .main-container {\n        border-top-left-radius: 0; }\n      .nb-theme-default :host nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  .nb-theme-default :host .main-btn {\n    display: none; } }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-cosmic :host nb-layout-column.small {\n  flex: 0.15 !important; }\n.nb-theme-cosmic :host nb-sidebar.settings-sidebar {\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n.nb-theme-cosmic :host nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n.nb-theme-cosmic :host nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n.nb-theme-cosmic :host nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n.nb-theme-cosmic :host nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #3d3780;\n    transition: width 0.3s ease;\n    overflow: hidden;\n    background: #2f296b; }\n.nb-theme-cosmic :host nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important; }\n[dir=ltr] .nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      border-top-right-radius: 0.5rem; }\n[dir=rtl] .nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      border-top-left-radius: 0.5rem; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n[dir=ltr] .nb-theme-cosmic :host nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n[dir=rtl] .nb-theme-cosmic :host nb-sidebar.menu-sidebar .main-btn span {\n      padding-right: 0.25rem; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar .main-btn i, .nb-theme-cosmic :host nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    transition: none; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n@media (max-width: 399.98px) {\n  .nb-theme-cosmic :host .main-content {\n    padding: 0.75rem !important; } }\n@media (max-width: 767.98px) {\n  .nb-theme-cosmic :host nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    .nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important; }\n      [dir=ltr] .nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ .main-container {\n        border-top-right-radius: 0; }\n      [dir=rtl] .nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ .main-container {\n        border-top-left-radius: 0; }\n      .nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  .nb-theme-cosmic :host .main-btn {\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/@theme/layouts/sample/sample.layout.ts":
/*!********************************************************!*\
  !*** ./src/app/@theme/layouts/sample/sample.layout.ts ***!
  \********************************************************/
/*! exports provided: SampleLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleLayoutComponent", function() { return SampleLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@nebular/theme */ "./src/app/@nebular/theme/index.js");
/* harmony import */ var _core_data_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@core/data/state.service */ "./src/app/@core/data/state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// TODO: move layouts into the framework
var SampleLayoutComponent = /** @class */ (function () {
    function SampleLayoutComponent(stateService, menuService, themeService, bpService, sidebarService) {
        var _this = this;
        this.stateService = stateService;
        this.menuService = menuService;
        this.themeService = themeService;
        this.bpService = bpService;
        this.sidebarService = sidebarService;
        this.subMenu = [
            {
                title: 'PAGE LEVEL MENU',
                group: true,
            },
            {
                title: 'Buttons',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/buttons',
            },
            {
                title: 'Grid',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/grid',
            },
            {
                title: 'Icons',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/icons',
            },
            {
                title: 'Modals',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/modals',
            },
            {
                title: 'Typography',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/typography',
            },
            {
                title: 'Animated Searches',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/search-fields',
            },
            {
                title: 'Tabs',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/tabs',
            },
        ];
        this.layout = {};
        this.sidebar = {};
        this.layoutState$ = this.stateService.onLayoutState()
            .subscribe(function (layout) { return _this.layout = layout; });
        this.sidebarState$ = this.stateService.onSidebarState()
            .subscribe(function (sidebar) {
            _this.sidebar = sidebar;
        });
        var isBp = this.bpService.getByName('is');
        this.menuClick$ = this.menuService.onItemSelect()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["withLatestFrom"])(this.themeService.onMediaQueryChange()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(20))
            .subscribe(function (_a) {
            var item = _a[0], _b = _a[1], bpFrom = _b[0], bpTo = _b[1];
            if (bpTo.width <= isBp.width) {
                _this.sidebarService.collapse('menu-sidebar');
            }
        });
    }
    SampleLayoutComponent.prototype.ngOnDestroy = function () {
        this.layoutState$.unsubscribe();
        this.sidebarState$.unsubscribe();
        this.menuClick$.unsubscribe();
    };
    SampleLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'food-ordering-layout',
            styles: [__webpack_require__(/*! ./sample.layout.scss */ "./src/app/@theme/layouts/sample/sample.layout.scss")],
            template: "\n    <nb-layout [center]=\"layout.id === 'center-column'\" windowMode>\n      <nb-layout-header fixed>\n        <ngx-header [position]=\"sidebar.id === 'start' ? 'normal': 'inverse'\"></ngx-header>\n      </nb-layout-header>\n\n      <nb-sidebar class=\"menu-sidebar\"\n                   tag=\"menu-sidebar\"\n                   responsive\n                   [end]=\"sidebar.id === 'end'\">\n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column class=\"main-content\">\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-column start class=\"small\" *ngIf=\"layout.id === 'two-column' || layout.id === 'three-column'\">\n        <nb-menu [items]=\"subMenu\"></nb-menu>\n      </nb-layout-column>\n\n      <nb-layout-column class=\"small\" *ngIf=\"layout.id === 'three-column'\">\n        <nb-menu [items]=\"subMenu\"></nb-menu>\n      </nb-layout-column>\n\n      <nb-layout-footer fixed>\n        <ngx-footer></ngx-footer>\n      </nb-layout-footer>\n\n      <nb-sidebar class=\"settings-sidebar\"\n                   tag=\"settings-sidebar\"\n                   state=\"collapsed\"\n                   fixed\n                   [end]=\"sidebar.id !== 'end'\">\n        <ngx-theme-settings></ngx-theme-settings>\n      </nb-sidebar>\n    </nb-layout>\n  ",
        }),
        __metadata("design:paramtypes", [_core_data_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbThemeService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMediaBreakpointsService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSidebarService"]])
    ], SampleLayoutComponent);
    return SampleLayoutComponent;
}());



/***/ }),

/***/ "./src/app/@theme/pipes/capitalize.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/@theme/pipes/capitalize.pipe.ts ***!
  \*************************************************/
/*! exports provided: CapitalizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function() { return CapitalizePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = /** @class */ (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (input) {
        return input && input.length
            ? (input.charAt(0).toUpperCase() + input.slice(1).toLowerCase())
            : input;
    };
    CapitalizePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'ngxCapitalize' })
    ], CapitalizePipe);
    return CapitalizePipe;
}());



/***/ }),

/***/ "./src/app/@theme/pipes/index.ts":
/*!***************************************!*\
  !*** ./src/app/@theme/pipes/index.ts ***!
  \***************************************/
/*! exports provided: CapitalizePipe, PluralPipe, RoundPipe, TimingPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _capitalize_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capitalize.pipe */ "./src/app/@theme/pipes/capitalize.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function() { return _capitalize_pipe__WEBPACK_IMPORTED_MODULE_0__["CapitalizePipe"]; });

/* harmony import */ var _plural_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plural.pipe */ "./src/app/@theme/pipes/plural.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PluralPipe", function() { return _plural_pipe__WEBPACK_IMPORTED_MODULE_1__["PluralPipe"]; });

/* harmony import */ var _round_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./round.pipe */ "./src/app/@theme/pipes/round.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoundPipe", function() { return _round_pipe__WEBPACK_IMPORTED_MODULE_2__["RoundPipe"]; });

/* harmony import */ var _timing_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timing.pipe */ "./src/app/@theme/pipes/timing.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimingPipe", function() { return _timing_pipe__WEBPACK_IMPORTED_MODULE_3__["TimingPipe"]; });







/***/ }),

/***/ "./src/app/@theme/pipes/plural.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/@theme/pipes/plural.pipe.ts ***!
  \*********************************************/
/*! exports provided: PluralPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluralPipe", function() { return PluralPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PluralPipe = /** @class */ (function () {
    function PluralPipe() {
    }
    PluralPipe.prototype.transform = function (input, label, pluralLabel) {
        if (pluralLabel === void 0) { pluralLabel = ''; }
        input = input || 0;
        return input === 1
            ? input + " " + label
            : pluralLabel
                ? input + " " + pluralLabel
                : input + " " + label + "s";
    };
    PluralPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'ngxPlural' })
    ], PluralPipe);
    return PluralPipe;
}());



/***/ }),

/***/ "./src/app/@theme/pipes/round.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/@theme/pipes/round.pipe.ts ***!
  \********************************************/
/*! exports provided: RoundPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundPipe", function() { return RoundPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RoundPipe = /** @class */ (function () {
    function RoundPipe() {
    }
    RoundPipe.prototype.transform = function (input) {
        return Math.round(input);
    };
    RoundPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'ngxRound' })
    ], RoundPipe);
    return RoundPipe;
}());



/***/ }),

/***/ "./src/app/@theme/pipes/timing.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/@theme/pipes/timing.pipe.ts ***!
  \*********************************************/
/*! exports provided: TimingPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimingPipe", function() { return TimingPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimingPipe = /** @class */ (function () {
    function TimingPipe() {
    }
    TimingPipe.prototype.transform = function (time) {
        if (time) {
            var minutes = Math.floor(time / 60);
            var seconds = Math.floor(time % 60);
            return "" + this.initZero(minutes) + minutes + ":" + this.initZero(seconds) + seconds;
        }
        return '00:00';
    };
    TimingPipe.prototype.initZero = function (time) {
        return time < 10 ? '0' : '';
    };
    TimingPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'timing' })
    ], TimingPipe);
    return TimingPipe;
}());



/***/ }),

/***/ "./src/app/@theme/styles/theme.cosmic.ts":
/*!***********************************************!*\
  !*** ./src/app/@theme/styles/theme.cosmic.ts ***!
  \***********************************************/
/*! exports provided: COSMIC_THEME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COSMIC_THEME", function() { return COSMIC_THEME; });
var COSMIC_THEME = {
    name: 'cosmic',
    base: 'default',
    variables: {
        temperature: [
            '#2ec7fe',
            '#31ffad',
            '#7bff24',
            '#fff024',
            '#f7bd59',
        ],
        solar: {
            gradientLeft: '#7bff24',
            gradientRight: '#2ec7fe',
            shadowColor: '#19977E',
            radius: ['70%', '90%'],
        },
        traffic: {
            colorBlack: '#000000',
            tooltipBg: 'rgba(0, 255, 170, 0.35)',
            tooltipBorderColor: '#00d977',
            tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: '#ffffff',
            tooltipFontWeight: 'normal',
            lineBg: '#d1d1ff',
            lineShadowBlur: '14',
            itemColor: '#BEBBFF',
            itemBorderColor: '#ffffff',
            itemEmphasisBorderColor: '#ffffff',
            shadowLineDarkBg: '#655ABD',
            shadowLineShadow: 'rgba(33, 7, 77, 0.5)',
            gradFrom: 'rgba(118, 89, 255, 0.4)',
            gradTo: 'rgba(164, 84, 255, 0.5)',
        },
        electricity: {
            tooltipBg: 'rgba(0, 255, 170, 0.35)',
            tooltipLineColor: 'rgba(255, 255, 255, 0.1)',
            tooltipLineWidth: '1',
            tooltipBorderColor: '#00d977',
            tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: '#ffffff',
            tooltipFontWeight: 'normal',
            axisLineColor: 'rgba(161, 161 ,229, 0.3)',
            xAxisTextColor: '#a1a1e5',
            yAxisSplitLine: 'rgba(161, 161 ,229, 0.2)',
            itemBorderColor: '#ffffff',
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: '#00ffaa',
            lineGradTo: '#fff835',
            lineShadow: 'rgba(14, 16, 48, 0.4)',
            areaGradFrom: 'rgba(188, 92, 255, 0.5)',
            areaGradTo: 'rgba(188, 92, 255, 0)',
            shadowLineDarkBg: '#a695ff',
        },
        bubbleMap: {
            titleColor: '#ffffff',
            areaColor: '#2c2961',
            areaHoverColor: '#a1a1e5',
            areaBorderColor: '#654ddb',
        },
        echarts: {
            bg: '#3d3780',
            textColor: '#ffffff',
            axisLineColor: '#a1a1e5',
            splitLineColor: '#342e73',
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: '#6a7985',
            areaOpacity: '1',
        },
        chartjs: {
            axisLineColor: '#a1a1e5',
            textColor: '#ffffff',
        },
    },
};


/***/ }),

/***/ "./src/app/@theme/styles/theme.default.ts":
/*!************************************************!*\
  !*** ./src/app/@theme/styles/theme.default.ts ***!
  \************************************************/
/*! exports provided: DEFAULT_THEME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_THEME", function() { return DEFAULT_THEME; });
var DEFAULT_THEME = {
    name: 'default',
    base: null,
    variables: {
        // Safari fix
        temperature: [
            '#42db7d',
            '#42db7d',
            '#42db7d',
            '#42db7d',
            '#42db7d',
        ],
        solar: {
            gradientLeft: '#42db7d',
            gradientRight: '#42db7d',
            shadowColor: 'rgba(0, 0, 0, 0)',
            radius: ['80%', '90%'],
        },
        traffic: {
            colorBlack: '#000000',
            tooltipBg: '#ffffff',
            tooltipBorderColor: '#c0c8d1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: '#2a2a2a',
            tooltipFontWeight: 'bolder',
            lineBg: '#c0c8d1',
            lineShadowBlur: '1',
            itemColor: '#bcc3cc',
            itemBorderColor: '#bcc3cc',
            itemEmphasisBorderColor: '#42db7d',
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            shadowLineShadow: 'rgba(0, 0, 0, 0)',
            gradFrom: '#ebeef2',
            gradTo: '#ebeef2',
        },
        electricity: {
            tooltipBg: '#ffffff',
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: '#ebeef2',
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: '#2a2a2a',
            tooltipFontWeight: 'bolder',
            axisLineColor: 'rgba(0, 0, 0, 0)',
            xAxisTextColor: '#2a2a2a',
            yAxisSplitLine: '#ebeef2',
            itemBorderColor: '#42db7d',
            lineStyle: 'solid',
            lineWidth: '4',
            lineGradFrom: '#42db7d',
            lineGradTo: '#42db7d',
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: 'rgba(235, 238, 242, 0.5)',
            areaGradTo: 'rgba(235, 238, 242, 0.5)',
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        },
        bubbleMap: {
            titleColor: '#484848',
            areaColor: '#dddddd',
            areaHoverColor: '#cccccc',
            areaBorderColor: '#ebeef2',
        },
        echarts: {
            bg: '#ffffff',
            textColor: '#484848',
            axisLineColor: '#bbbbbb',
            splitLineColor: '#ebeef2',
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: '#6a7985',
            areaOpacity: '0.7',
        },
        chartjs: {
            axisLineColor: '#cccccc',
            textColor: '#484848',
        },
    },
};


/***/ }),

/***/ "./src/app/@theme/theme.module.ts":
/*!****************************************!*\
  !*** ./src/app/@theme/theme.module.ts ***!
  \****************************************/
/*! exports provided: ThemeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeModule", function() { return ThemeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@nebular/theme */ "./src/app/@nebular/theme/index.js");
/* harmony import */ var _nebular_security__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@nebular/security */ "./src/app/@nebular/security/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components */ "./src/app/@theme/components/index.ts");
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes */ "./src/app/@theme/pipes/index.ts");
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts */ "./src/app/@theme/layouts/index.ts");
/* harmony import */ var _styles_theme_default__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/theme.default */ "./src/app/@theme/styles/theme.default.ts");
/* harmony import */ var _styles_theme_cosmic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/theme.cosmic */ "./src/app/@theme/styles/theme.cosmic.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var BASE_MODULES = [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]];
var NB_MODULES = [
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTabsetModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbRouteTabsetModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbMenuModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbUserModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbActionsModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSearchModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSidebarModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCheckboxModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbPopoverModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbContextMenuModule"],
    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
    _nebular_security__WEBPACK_IMPORTED_MODULE_5__["NbSecurityModule"],
];
var COMPONENTS = [
    _components__WEBPACK_IMPORTED_MODULE_6__["SwitcherComponent"],
    _components__WEBPACK_IMPORTED_MODULE_6__["LayoutDirectionSwitcherComponent"],
    _components__WEBPACK_IMPORTED_MODULE_6__["ThemeSwitcherComponent"],
    _components__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
    _components__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
    _components__WEBPACK_IMPORTED_MODULE_6__["SearchInputComponent"],
    _components__WEBPACK_IMPORTED_MODULE_6__["ThemeSettingsComponent"],
    _components__WEBPACK_IMPORTED_MODULE_6__["TinyMCEComponent"],
    _layouts__WEBPACK_IMPORTED_MODULE_8__["SampleLayoutComponent"],
];
var PIPES = [
    _pipes__WEBPACK_IMPORTED_MODULE_7__["CapitalizePipe"],
    _pipes__WEBPACK_IMPORTED_MODULE_7__["PluralPipe"],
    _pipes__WEBPACK_IMPORTED_MODULE_7__["RoundPipe"],
    _pipes__WEBPACK_IMPORTED_MODULE_7__["TimingPipe"],
];
var NB_THEME_PROVIDERS = _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbThemeModule"].forRoot({
    name: 'cosmic',
}, [_styles_theme_default__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_THEME"], _styles_theme_cosmic__WEBPACK_IMPORTED_MODULE_10__["COSMIC_THEME"]]).providers.concat(_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSidebarModule"].forRoot().providers, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbMenuModule"].forRoot().providers);
var ThemeModule = /** @class */ (function () {
    function ThemeModule() {
    }
    ThemeModule_1 = ThemeModule;
    ThemeModule.forRoot = function () {
        return {
            ngModule: ThemeModule_1,
            providers: NB_THEME_PROVIDERS.slice(),
        };
    };
    ThemeModule = ThemeModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: BASE_MODULES.concat(NB_MODULES),
            exports: BASE_MODULES.concat(NB_MODULES, COMPONENTS, PIPES),
            declarations: COMPONENTS.concat(PIPES),
        })
    ], ThemeModule);
    return ThemeModule;
    var ThemeModule_1;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./@nebular/auth */ "./src/app/@nebular/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' },
    { path: 'frontdesk', loadChildren: 'app/front-desk/front-desk.module#FrontDeskModule' },
    {
        path: 'auth',
        component: _nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthComponent"],
        children: [
            {
                path: '',
                component: _nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbLoginComponent"],
            },
            {
                path: 'login',
                component: _nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbLoginComponent"],
            },
            {
                path: 'logout',
                component: _nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbLogoutComponent"],
            },
            {
                path: 'request-password',
                component: _nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbRequestPasswordComponent"],
            },
            {
                path: 'reset-password',
                component: _nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbResetPasswordComponent"],
            },
        ],
    },
    { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
    { path: '**', redirectTo: 'auth/login' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: "\n      <router-outlet></router-outlet>\n  ",
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./@core/core.module */ "./src/app/@core/core.module.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _core_data_smart_table_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./@core/data/smart-table.service */ "./src/app/@core/data/smart-table.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _custom_component_custom_confirm_custom_confirm_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./custom-component/custom-confirm/custom-confirm.component */ "./src/app/custom-component/custom-confirm/custom-confirm.component.ts");
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/file.service */ "./src/app/services/file.service.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _custom_component_custom_confirm_custom_confirm_component__WEBPACK_IMPORTED_MODULE_14__["CustomConfirmComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot({ positionClass: 'toastr-top-full-width', timeOut: 2500, autoDismiss: true, maxOpened: 10 }),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"].forRoot(),
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_6__["ThemeModule"].forRoot(),
                _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"].forRoot(),
            ],
            providers: [
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["APP_BASE_HREF"], useValue: '/' },
                _services_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"],
                _services_file_service__WEBPACK_IMPORTED_MODULE_15__["FileService"],
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_13__["CookieService"],
                _core_data_smart_table_service__WEBPACK_IMPORTED_MODULE_12__["SmartTableService"],
            ],
            entryComponents: [
                _custom_component_custom_confirm_custom_confirm_component__WEBPACK_IMPORTED_MODULE_14__["CustomConfirmComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common.ts":
/*!***************************!*\
  !*** ./src/app/common.ts ***!
  \***************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_0__);

var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.encodeJwt = function (data) {
        try {
            var encodedHeader = this.base64url(crypto_js__WEBPACK_IMPORTED_MODULE_0__["enc"].Utf8.parse(JSON.stringify({ "alg": "HS256", "typ": "JWT" })));
            var encodedData = this.base64url(crypto_js__WEBPACK_IMPORTED_MODULE_0__["enc"].Utf8.parse(JSON.stringify(data)));
            return encodedHeader + '.' + encodedData;
        }
        catch (e) {
            console.error('exception in common.ts.decodeJwt', e);
            return null;
        }
    };
    Utils.decodeJwt = function (token) {
        try {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            return JSON.parse(window.atob(base64));
        }
        catch (e) {
            console.error('exception in common.ts.decodeJwt', e);
            this.CookieService.delete('user');
            window.location.href = '/user/login';
            return null;
        }
    };
    ;
    Utils.base64url = function (source) {
        try {
            var encodedSource = crypto_js__WEBPACK_IMPORTED_MODULE_0__["enc"].Base64.stringify(source);
            encodedSource = encodedSource.replace(/=+$/, '');
            encodedSource = encodedSource.replace(/\+/g, '-');
            encodedSource = encodedSource.replace(/\//g, '_');
            return encodedSource;
        }
        catch (e) {
            console.error('exception in common.ts.base64url', e);
            return null;
        }
    };
    return Utils;
}());



/***/ }),

/***/ "./src/app/custom-component/custom-confirm/custom-confirm.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/custom-component/custom-confirm/custom-confirm.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <span>{{ title }}</span>\n  <button class=\"close\" aria-label=\"Close\" (click)=\"closeModal()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  {{ description }}\n</div>\n<div class=\"modal-footer\">\n  <button class=\"btn btn-md btn-success\" (click)=\"onClickOk()\">Ok</button>\n  <button class=\"btn btn-md btn-danger\" (click)=\"closeModal()\">Cancel</button>\n</div>"

/***/ }),

/***/ "./src/app/custom-component/custom-confirm/custom-confirm.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/custom-component/custom-confirm/custom-confirm.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/custom-component/custom-confirm/custom-confirm.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/custom-component/custom-confirm/custom-confirm.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CustomConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomConfirmComponent", function() { return CustomConfirmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap_modal_modal_ref__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/modal/modal-ref */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-ref.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CustomConfirmComponent = /** @class */ (function () {
    function CustomConfirmComponent(activeModal, api_service, cookieService, toastrService, fb) {
        this.activeModal = activeModal;
        this.api_service = api_service;
        this.cookieService = cookieService;
        this.toastrService = toastrService;
        this.fb = fb;
    }
    CustomConfirmComponent.prototype.onClickOk = function () {
        this.activeModal.close();
        this.closeModal();
    };
    CustomConfirmComponent.prototype.closeModal = function () {
        this.activeModal.dismiss();
    };
    CustomConfirmComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CustomConfirmComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CustomConfirmComponent.prototype, "description", void 0);
    CustomConfirmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'custom-confirm',
            template: __webpack_require__(/*! ./custom-confirm.component.html */ "./src/app/custom-component/custom-confirm/custom-confirm.component.html"),
            styles: [__webpack_require__(/*! ./custom-confirm.component.scss */ "./src/app/custom-component/custom-confirm/custom-confirm.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap_modal_modal_ref__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"], _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], CustomConfirmComponent);
    return CustomConfirmComponent;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        "Content-Type": "application/json",
        "Accept": "application/json"
    })
};
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.BASE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].SERVER_URL + '/api/';
        this.apiEndPoints = {
            // user
            login: 'user/login',
            register: 'user/register',
            fetchAllUsers: 'user/fetch_all',
            updateUser: 'user/update',
            deleteUser: 'user/delete/:user_id',
            getChildren: 'user/getChildren/:restaurant_id',
            // restaurant
            addRestaurant: 'restaurant/add',
            getRestaurant: 'restaurant/get/:restaurant_id',
            updateRestaurantStatus: 'restaurant/updateStatus/:restaurant_id/:status',
            updateRestaurantPrepareTime: 'restaurant/updatePrepareTime/:restaurant_id/:prepare_time',
            addBankAccount: 'restaurant/addBank',
            // menu
            addMenu: 'menu/add',
            getMenu: 'menu/get/:restaurant_id',
            // category
            addCategory: 'category/add',
            getCategory: 'category/get/:menu_id',
            updateCategory: 'category/update',
            deleteCategory: 'category/delete/:category_id',
            // items
            addItem: 'items/add',
            getItems: 'items/get/:category_id',
            updateItem: 'items/update',
            deleteItem: 'items/delete/:item_id',
            getStatistics: 'items/statistic/:restaurant_id/:duration',
            getSoldItems: 'items/sold/:restaurant_id/:duration',
            // order
            getOrderAll: 'order/get/:restaurant_id',
            getPendingOrders: 'order/get/pending/:restaurant_id',
            getCompletedOrders: 'order/get/completed/:restaurant_id',
            getOrderByID: 'order/get/:order_id',
            addOrder: 'order/add',
            updateOrderStatus: 'order/update/:order_id/:status',
            // add customer
            addCustomer: 'customer/add',
        };
        for (var key in this.apiEndPoints) {
            this.apiEndPoints[key] = this.BASE_URL + this.apiEndPoints[key];
        }
    }
    ApiService.prototype.getHeaders = function () {
        return { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }) };
    };
    ApiService.prototype.signInUser = function (username, password) {
        var _this = this;
        var data = {
            username: username,
            password: password,
        };
        console.log(this.apiEndPoints.login);
        return this.http
            .post(this.apiEndPoints.login, data, httpOptions)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) { return _this.log("request is ok"); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Sign in')));
    };
    ApiService.prototype.fetchAllUsers = function () {
        var _this = this;
        console.log(this.apiEndPoints.fetchAllUsers);
        return this.http
            .get(this.apiEndPoints.fetchAllUsers, this.getHeaders())
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("fetched recent messaged users"); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("fetched recent messaged users")));
    };
    ApiService.prototype.registerUser = function (user) {
        var _this = this;
        var data = {
            username: user.username,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            password: user.password,
            location: user.location,
            role: user.role,
        };
        console.log(this.apiEndPoints.register);
        return this.http
            .post(this.apiEndPoints.register, data, httpOptions)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) { return _this.log("request is ok"); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Register')));
    };
    ApiService.prototype.updateUser = function (user) {
        var _this = this;
        var data = {
            id: user.id,
            username: user.username,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            password: user.password,
            location: user.location,
            role: user.role,
        };
        console.log(this.apiEndPoints.updateUser);
        return this.http
            .post(this.apiEndPoints.updateUser, data, httpOptions)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) { return _this.log("request is ok"); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Register')));
    };
    ApiService.prototype.deleteUser = function (id) {
        var _this = this;
        var url = this.apiEndPoints.deleteUser.replace(':user_id', id);
        console.log(url);
        return this.http
            .get(url, this.getHeaders())
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) { return _this.log("request is ok"); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteUser')));
    };
    ApiService.prototype.getChildren = function (restaurant_id) {
        var _this = this;
        var url = this.apiEndPoints.getChildren.replace(':restaurant_id', restaurant_id);
        console.log(url);
        return this.http
            .get(url, this.getHeaders())
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) { return _this.log("request is ok"); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getChildren')));
    };
    ApiService.prototype.addRestaurant = function (client_id, manager_id, name) {
        var _this = this;
        var data = { client_id: client_id, manager_id: manager_id, name: name };
        console.log(this.apiEndPoints.addRestaurant);
        return this.http
            .post(this.apiEndPoints.addRestaurant, data, httpOptions)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) { return _this.log("request is ok"); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Add Restaurant')));
    };
    ApiService.prototype.getRestaurant = function (restaurant_id) {
        var _this = this;
        var url = this.apiEndPoints.getRestaurant.replace(':restaurant_id', restaurant_id);
        console.log(url);
        return this.http
            .get(url, this.getHeaders())
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) { return _this.log("request is ok"); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Get Restaurant')));
    };
    ApiService.prototype.updateRestaurantStatus = function (restaurant_id, status) {
        var _this = this;
        var url = this.apiEndPoints.updateRestaurantStatus.replace(':restaurant_id', restaurant_id);
        url = url.replace(':status', status);
        console.log(url);
        return this.http
            .get(url, this.getHeaders())
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("Updated restaurant's status"); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("Update restaurant's status")));
    };
    ApiService.prototype.updateRestaurantPrepareTime = function (restaurant_id, prepare_time) {
        var _this = this;
        var url = this.apiEndPoints.updateRestaurantPrepareTime.replace(':restaurant_id', restaurant_id);
        url = url.replace(':prepare_time', prepare_time);
        console.log(url);
        return this.http
            .get(url, this.getHeaders())
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("Updated restaurant's preparation time"); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("Update restaurant's preparation time")));
    };
    ApiService.prototype.addBankAccount = function (restaurant_id, account_number, routing_number, account_holder_name) {
        var _this = this;
        var data = {
            restaurant_id: restaurant_id,
            routing_number: routing_number,
            account_number: account_number,
            account_holder_name: account_holder_name,
        };
        console.log(this.apiEndPoints.addBankAccount);
        return this.http
            .post(this.apiEndPoints.addBankAccount, data, httpOptions)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) { return _this.log("request is ok"); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Add Bank Account')));
    };
    ApiService.prototype.getMenu = function (restaurant_id) {
        var _this = this;
        var url = this.apiEndPoints.getMenu.replace(':restaurant_id', restaurant_id);
        console.log(url);
        return this.http
            .get(url, this.getHeaders())
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("fetched recent messaged users"); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("fetched recent messaged users")));
    };
    ApiService.prototype.addMenu = function (name, restaurant_id) {
        var _this = this;
        var data = {
            menu_name: name,
            restaurant_id: restaurant_id,
        };
        console.log(this.apiEndPoints.addMenu);
        return this.http
            .post(this.apiEndPoints.addMenu, data, httpOptions)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) { return _this.log("request is ok"); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Sign in')));
    };
    ApiService.prototype.getCategory = function (menu_id) {
        var _this = this;
        var url = this.apiEndPoints.getCategory.replace(':menu_id', menu_id);
        console.log(url);
        return this.http
            .get(url, this.getHeaders())
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("fetched recent messaged users"); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("fetched recent messaged users")));
    };
    ApiService.prototype.addCategory = function (name, menu_id, thumbnail) {
        var _this = this;
        var data = {
            category_name: name,
            menu_id: menu_id,
            photo: thumbnail,
            is_deleted: false,
        };
        console.log(this.apiEndPoints.addCategory);
        return this.http
            .post(this.apiEndPoints.addCategory, data, httpOptions)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) { return _this.log("request is ok"); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Sign in')));
    };
    ApiService.prototype.updateCategory = function (category_id, menu_id, name, thumbnail, is_deleted) {
        var _this = this;
        if (is_deleted === void 0) { is_deleted = 0; }
        var data = {
            category_id: category_id,
            menu_id: menu_id,
            category_name: name,
            photo: thumbnail,
            is_deleted: is_deleted
        };
        console.log(this.apiEndPoints.updateCategory);
        return this.http
            .post(this.apiEndPoints.updateCategory, data, httpOptions)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) { return _this.log("request is ok"); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Update Category')));
    };
    ApiService.prototype.deleteCategory = function (category_id) {
        var _this = this;
        var url = this.apiEndPoints.deleteCategory.replace(':category_id', category_id);
        console.log(url);
        return this.http
            .get(url, this.getHeaders())
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) { return _this.log("request is ok"); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Update Category')));
    };
    ApiService.prototype.getItems = function (category_id) {
        var _this = this;
        var url = this.apiEndPoints.getItems.replace(':category_id', category_id);
        console.log(url);
        return this.http
            .get(url, this.getHeaders())
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("fetched recent messaged users"); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("fetched recent messaged users")));
    };
    ApiService.prototype.addItem = function (category_id, name, description, price, tax, thumbnail) {
        var _this = this;
        var data = {
            category_id: category_id,
            name: name,
            description: description,
            price: price,
            tax: tax,
            photo: thumbnail,
        };
        console.log(this.apiEndPoints.addItem);
        return this.http
            .post(this.apiEndPoints.addItem, data, httpOptions)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) { return _this.log("request is ok"); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Sign in')));
    };
    ApiService.prototype.updateItem = function (item_id, category_id, name, description, price, tax, thumbnail, is_deleted) {
        var _this = this;
        if (is_deleted === void 0) { is_deleted = 0; }
        var data = {
            item_id: item_id,
            category_id: category_id,
            name: name,
            description: description,
            price: price,
            tax: tax,
            thumbnail: thumbnail,
            is_deleted: is_deleted
        };
        console.log(this.apiEndPoints.updateItem);
        return this.http
            .post(this.apiEndPoints.updateItem, data, httpOptions)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) { return _this.log("request is ok"); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Update Item')));
    };
    ApiService.prototype.deleteItem = function (item_id) {
        var _this = this;
        var url = this.apiEndPoints.deleteItem.replace(':item_id', item_id);
        console.log(url);
        return this.http
            .get(url, this.getHeaders())
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("deleteItem"); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("item was deleted")));
    };
    ApiService.prototype.getStatistics = function (restaurant_id, duration) {
        var _this = this;
        var url = this.apiEndPoints.getStatistics.replace(':duration', duration);
        url = url.replace(':restaurant_id', restaurant_id);
        console.log(url);
        return this.http
            .get(url, this.getHeaders())
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getStatistics"); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("fetched statistics")));
    };
    ApiService.prototype.getSoldItems = function (restaurant_id, duration) {
        var _this = this;
        var url = this.apiEndPoints.getSoldItems.replace(':duration', duration);
        url = url.replace(':restaurant_id', restaurant_id);
        console.log(url);
        return this.http
            .get(url, this.getHeaders())
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getSoldItems"); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("fetched sold items")));
    };
    ApiService.prototype.getOrderAll = function (restaurant_id) {
        var _this = this;
        var url = this.apiEndPoints.getOrderAll.replace(':restaurant_id', restaurant_id);
        console.log(url);
        return this.http
            .get(url, this.getHeaders())
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getOrderAll"); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("fetched recent messaged users")));
    };
    ApiService.prototype.getPendingOrders = function (restaurant_id) {
        var _this = this;
        var url = this.apiEndPoints.getPendingOrders.replace(':restaurant_id', restaurant_id);
        console.log(url);
        return this.http
            .get(url, this.getHeaders())
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getPendingOrders"); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("fetched recent messaged users")));
    };
    ApiService.prototype.getCompletedOrders = function (restaurant_id) {
        var _this = this;
        var url = this.apiEndPoints.getCompletedOrders.replace(':restaurant_id', restaurant_id);
        console.log(url);
        return this.http
            .get(url, this.getHeaders())
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getCompletedOrders"); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("fetched recent messaged users")));
    };
    ApiService.prototype.getOrderByID = function (id) {
        var _this = this;
        var url = this.apiEndPoints.getOrderByID.replace(':order_id', id);
        console.log(url);
        return this.http
            .get(url, this.getHeaders())
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("getOrderByID"); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("fetched recent messaged users")));
    };
    ApiService.prototype.updateOrderStatus = function (id, status) {
        var _this = this;
        var url = this.apiEndPoints.updateOrderStatus.replace(':order_id', id);
        url = url.replace(':status', status);
        console.log(url);
        return this.http
            .get(url, this.getHeaders())
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("updateOrderStatus"); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("fetched recent messaged users")));
    };
    ApiService.prototype.refundedOrder = function (id) {
        var _this = this;
        var url = this.apiEndPoints.updateOrderStatus.replace(':order_id', id);
        url = url.replace(':status', 3);
        console.log(url);
        return this.http
            .get(url, this.getHeaders())
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("refundedOrder"); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("fetched recent messaged users")));
    };
    ApiService.prototype.fileUpload = function (formdata) {
        console.log('uploading file....');
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', 'http://localhost:3000/api/fileupload', formdata, {
            reportProgress: true
        });
        return this.http.request(req);
    };
    ;
    // Customer
    ApiService.prototype.addCustomer = function (user_id, name, email, token) {
        var _this = this;
        var data = {
            user_id: user_id,
            name: name,
            email: email,
            token: token,
        };
        console.log(this.apiEndPoints.addCustomer);
        return this.http
            .post(this.apiEndPoints.addCustomer, data, httpOptions)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) { return _this.log("request is ok"); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Add Customer')));
    };
    // Error handling
    ApiService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = "operation"; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    ApiService.prototype.log = function (message) {
        console.log(message);
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/file.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/file.service.ts ***!
  \******************************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FileService = /** @class */ (function () {
    function FileService(http) {
        this.http = http;
        //   public FileUrl = 'https://orders.paranoidfan.com:3000/api/fileupload';
        this.FileUrl = 'https://api.paranoidfan.com/api/sdk/upload';
    }
    FileService.prototype.getFiles = function () {
        return this.http.get(this.FileUrl);
    };
    FileService.prototype.addFile = function (data) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Authkey": "BGta}*X2V1M6SCta}*XTV1E8"
            })
        };
        return this.http
            .post(this.FileUrl, data, httpOptions)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) { return _this.log("request is ok"); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('File upload')));
    };
    FileService.prototype.deleteFile = function (filename) {
        return this.http.delete(this.FileUrl + filename);
    };
    // Error handling
    FileService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = "operation"; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    FileService.prototype.log = function (message) {
        console.log(message);
    };
    FileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FileService);
    return FileService;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    // SERVER_URL : 'http://192.168.0.134:3000'
    SERVER_URL: 'https://orders.paranoidfan.com:3000'
};


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

module.exports = __webpack_require__(/*! G:\Work\Fast_Lane_Ordering\Product\foodordering\food-ordering-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map