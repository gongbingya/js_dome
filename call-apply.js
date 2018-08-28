function People(name , age , sex ){
	this.name = name;
	this.age = age;
	this.sex = sex;
}

function Student(name , age , sex , xuehao , banji){
	// 将people call 指向 Student
	People.call(this , name , age , sex);
	this.xuehao = xuehao;
	this.banji = banji;
}

Student.prototype = new People();

var xiaoming = new Student("小明" , 12 , "男",1001,"三年二班");

console.log(xiaoming);