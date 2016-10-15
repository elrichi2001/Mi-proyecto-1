class person {

	id: number;
	name: string;
	age: number;

	constructor(id: number, name: string, age: number){
		this.id = id;
		this.name = name;
		this.age = age;
	}
}

class Student extends person {
	constructor() {
		super(1, 'juan', 20)
	}

	setName(name:string):void{
		this.name = name;
	}
	getName():string{
		return this.name;
	}
}

class Teacher extends person {
	
	constructor() {
		super(1,'alejandro', 30)
	}

}

var student = new Student();
var teacher = new Teacher();


console.log(student);
console.log(teacher);