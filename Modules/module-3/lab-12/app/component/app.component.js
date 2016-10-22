"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var STUDENTS = [
    {
        id: 1,
        name: "Juan",
        classes: ["algebra", "ingles"],
        grade: "primero"
    },
    {
        id: 2,
        name: "Pedro",
        classes: ["calculo", "algebra"],
        grade: "Segundo"
    },
    {
        id: 3,
        name: "Javier",
        classes: ["Ingles", "calculo"],
        grade: "primero"
    }
];
var TEACHERS = [
    {
        id: 1,
        name: "Andrea",
        rooms: ["1001", "1002"],
        studies: ["Ingles", "Geografia"]
    },
    {
        id: 2,
        name: "Diana",
        rooms: ["1005", "1008"],
        studies: ["Calculo", "Historia"]
    },
    {
        id: 3,
        name: "Carolina",
        rooms: ["1004", "1010"],
        studies: ["Algebra", "Filosofia"]
    }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = "The School";
        this.student = STUDENTS;
        this.teacher = TEACHERS;
    }
    AppComponent.prototype.onSelect = function (student) {
        this.selected = student;
    };
    AppComponent.prototype.onSelect2 = function (teacher) {
        this.selected2 = teacher;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/templates/school.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map