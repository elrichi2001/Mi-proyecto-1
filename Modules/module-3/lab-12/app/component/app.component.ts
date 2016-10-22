import { Component } from '@angular/core';
import { Student } from '../model/student';
import { Teacher } from '../model/teacher';

const STUDENTS: Student[] = [
    {
        id: 1,
        name: "Juan",
        classes: ["algebra","ingles"],
        grade: "primero"
    },
    {
        id: 2,
        name: "Pedro",
        classes: ["calculo","algebra"],
        grade: "Segundo"
    },
    {
        id: 3,
        name: "Javier",
        classes: ["Ingles","calculo"],
        grade: "primero"
    }
];

const TEACHERS: Teacher[] = [
    {
        id: 1,
        name: "Andrea",
        rooms: ["1001","1002"],
        studies: ["Ingles","Geografia"]
    },
    {
        id: 2,
        name: "Diana",
        rooms: ["1005","1008"],
        studies: ["Calculo","Historia"]
    },
    {
        id: 3,
        name: "Carolina",
        rooms: ["1004","1010"],
        studies: ["Algebra","Filosofia"]
    }
];

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/school.html'
})
export class AppComponent {

    title: string = "The School";
    selected: Student;
    selected2: Teacher;
    student: Student[] = STUDENTS;
    teacher: Teacher[] = TEACHERS;


    onSelect(student: Student) {
        this.selected = student;
    }
    onSelect2(teacher: Teacher) {
       this.selected2 = teacher;
    }
}