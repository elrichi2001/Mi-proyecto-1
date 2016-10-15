var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var person = (function () {
    function person(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    return person;
}());
var Student = (function (_super) {
    __extends(Student, _super);
    function Student() {
        _super.call(this, 1, 'juan', 20);
    }
    Student.prototype.setName = function (name) {
        this.name = name;
    };
    Student.prototype.getName = function () {
        return this.name;
    };
    return Student;
}(person));
var Teacher = (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        _super.call(this, 1, 'alejandro', 30);
    }
    return Teacher;
}(person));
var student = new Student();
var teacher = new Teacher();
console.log(student);
console.log(teacher);
