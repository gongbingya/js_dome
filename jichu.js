// 变量声明提升特性
/*var a = 10 ;
function fn(){
	console.log(a);
	var a = 100;
};
fn();//undefined*/

// 变量声明的提升无视if语句，因为是在函数的预解析阶段

/*var a = true;
function fn(){
	console.log(a);//undefined,因为var a提升是无条件的，无视if语句的真假性
	if(!a){
		var a = 100;
	}
	console.log(a);//100 因为if(! undefine)所以进入了if语句体，此时a被赋值为10。
}
fn();*/

// 数组的去重
/*//ES6 Set
var arr = [1,2,1,2,12,12,11,11,12,31];
const set = new Set(arr);
console.log([...set])*/

//函数封装
/*var arr = [1,1,1,2,2,2,3,3,3,3];

function uniq(arr){
	var  _arr = [];
	for(var i = 0 ; i < arr.length ; i++){
		if(!_arr.includes(arr[i])){
			_arr.push(arr[i]);
		}
	}
	return _arr;
}
console.log(uniq(arr));*/


/*//随机获取数组中的某几项，不能重复
var arr = ["张三","李四","王五","赵六","haha"];

function sample(arr , n ){
	var _arr = [];
	while(_arr.length != n){
		var  m = parseInt(Math.random() * arr.length);
		if(!_arr.includes(arr[m])){
			_arr.push(arr[m]);
		}
	};
	return _arr;
}
console.log(sample(arr,3));*/

/*// 数组乱序
var arr = ["张三","李四","王五","赵六","haha"];

function shuffle(arr){
	var _arr = [];
	while(_arr.length != arr.length){
		var m = parseInt(Math.random() * arr.length);
		if(!_arr.includes(arr[m])){
			_arr.push(arr[m]);
		}
	};
	return _arr;
}
console.log(shuffle(arr));*/

// 数组排序
  //冒泡排序

 /*var arr = [10,8,5,8,7,6,14,23,5,2,4,77,88];

 for(let i = 0 ; i < arr.length-1 ; i++){
 	for(let j = 0 ; j < arr.length-1-i ; j++){
 		if(arr[j] > arr[j+1]){
 			var temp = arr[j];
 			arr[j] = arr[j+1];
 			arr[j+1] = temp;
 			console.log(temp);
 		}
 	}
 } 
 console.log(arr);*/

 // 快速排序
 // 是世界上最快的排序，也叫作二分法排序。
 // 算法是递归：
/*var arr = [2223,213,4,21,435,23,43,45,233,2,45,56,657,324,2,43345,223,123];

function quick(arr){
	if(arr.length <= 1){
		return arr;
	}
	var pivot = arr[0];
	var bigger = [];
	var smaller = [];
	for(let i = 1 ; i < arr.length ; i++){
		if(arr[i]>=pivot){
			bigger.push(arr[i]);
		}else{
			smaller.push(arr[i]);
		}
	} 
	return quick(smaller).concat(pivot,quick(bigger));
}
console.log(quick(arr));*/
/*
// sort 排序
var arr = [223,23,4,21,435,23,43,45,213,2,45,56,657,324,2,43345,223,123];

arr.sort((a,b)=>a-b);

console.log(arr);*/

// 数组辨识
/*// ES6 
var arr = [0,1,2];
console.log(Array.isArray(arr));//true*/

//鸭式变形
/*function checkIsArray(o){
	return typeof o == "object" && "push" in o &&Object.prototype.toString.call(o) == "[object Array]" && o instanceof Array;
}
var arr = [1,2];
console.log(checkIsArray(arr));//true*/

// 数组的扁平化
// 任意维的数组的扁平化：
/*
var arr = [1,[2,3],[4,5],[6,[7,8]],9,[[[10,[[11,12],13],14],15,16],17],18];

function flattenArray(arr){
	var _arr = [];
	for(let i = 0 ; i < arr.length ; i++){
		if(!Array.isArray(arr[i])){
			_arr.push(arr[i]);
		}else{
			_arr = _arr.concat(flattenArray(arr[i]));
		}
	}
	return _arr;
}
console.log(flattenArray(arr));*/

// 数组的交集、差集
/*// 交集
function intersection(arr1 ,arr2){
	var _arr = [];
	for(let i = 0 ; i < arr1.length ; i++){
		if(arr2.includes(arr1[i])){
			_arr.push(arr1[i]);
		}
	}
	return _arr;
}
var arr1 = [1,2,3,4,5,6];
var arr2 = [4,5,6,7,8,9];
console.log(intersection(arr1,arr2));
*/

/*// 差集
function diff(arr1,arr2){
	var _arr = [];
	for(let i = 0 ; i < arr1.length ; i++){
		if(!arr2.includes(arr1[i])){
			_arr.push(arr1[i])
		}
	}
	return _arr;
}
var arr1 = [1,2,3,4,5,6];
var arr2 = [4,5,6,7,8,9];
console.log(diff(arr1,arr2));*/


// 对象的深浅克隆
// 浅克隆：如果某个属性的值是引用类型值，
// 直接将它的引用转给新克隆出的对象，
// 也就是说没有创建这个引用类型值的真正的副本。
/*var obj = {
	a  : 1,
	b  : "2",
	c  : true,
	d  : undefined,
	e  : [2,1,3,5,{"a" : 1, "b" : 2}] 
}

function clone(o){
	var _o = {};
	for(var k in o){
		_o[k] = o[k];
	}
	return _o;
}
console.log(clone(obj));
*/

// 深克隆：将对象的所有的引用类型值也一并真正制造出副本。需要使用递归实现。
/*function deepClone(o){
	if(
		typeof o == "string" ||
		typeof o == "number" ||
		typeof o == "undefined" ||
		typeof o == "boolean"
	){
		return o;
	}else if(Array.isArray(o)){
		var _arr = [];
		for(let i = 0 ; i < o.length ; i++){
			_arr.push(deepClone(o[i]));
		}
		return _arr;
	}else if(typeof o == "object"){
		var _o = {};
		for(var k in o){
			_o[k] = deepClone(o[k]);
		}
		return _o;
	}
}

var obj = {
	a  : 1,
	b  : "2",
	c  : true,
	d  : undefined,
	e  : [2,1,3,5,{"a" : 1, "b" : 2}] 
}

console.log(deepClone(obj));*/

// 函数柯里化

// 柯里化：当一个函数被调用的时候，并没有提供足够的参数，此时将返回接收剩余参数的函数。

/*// 科里化函数
function curry(fn){
	return function(){
		var args1 = arguments;
		return function(){
			var args2 = arguments;
			return fn(...args1,...args2);
		}
	}
}*/


// 闭包
// 一个函数能够记住自己定义时候的作用域，即使它不在这个作用域中运行，也能够访问当初定义时候的作用域。
/*function outer(){
	var a = 10;
	return function inner(){
		console.log(a);
	}
}

var inn = outer();
var  a = 1;
inn();//10*/

// 同步和异步
/*setTimeout(function(){
	console.log("*");
},0);
for(var i = 0 ; i < 50; i++){
	console.log(i);
};
for(var j = 0 ; j < 60 ; j++){
	console.log(j);
}*/

// for(var i = 0 ; i < 5 ; i++){
// 	setTimeout(function(){
// 		console.log(i)
// 	},1000)
// }

// 面向对象
// this 的上下文
/*function Foo(){
	function getName(){
		console.log(1);
	};
	return this;
};
Foo.getName = function(){
	console.log(2);	
};
Foo.prototype.getName = function(){
	console.log(3);
};
var getName =function(){
	console.log(4);
};
// 注意函数申明提升
function getName(){
	console.log(5);
};

// Foo().getName();
getName();//4
new Foo().getName();//3
new Foo.getName();//2
new new Foo().getName();//3*/


//当构造函数中有return的时候，基本类型值会忽略；引用类型值会返回引用类型值。

/*function People(name,age,sex){
	this.name = name;
	this.age = age;
	this.sex =sex;

	return [1,2,3];
}
var xiaoming = new People("小明",12,"男");

console.log(xiaoming);//[1,2,3]因为数组是引用类型值*/



// 判断m instanceof M是否为真，只需要看M.prototepe是否在m的原型链上。
/*function A(){};

function B(){
	return new A();
}
A.prototype = B();
B.prototype = new B();

var a = new A();
var b = new B();
console.log(a.__proto__ == b.__proto__);//true
console.log(a instanceof A);//true
console.log(a instanceof B);//false
console.log(b instanceof A);//true
console.log(b instanceof B);//false
*/

// 箭头函数是定义的时候决定上下文。
// 普通函数是调用的时候决定上下文。
/*function foo(){
	return ()=>{
		console.log(this.a);
	}
}
const xiaoming = {a  : 10};
const xiaohong = { a : 100};

var fn = foo.call(xiaohong);
fn();//100
fn.call(xiaoming);//100//箭头函数没办改变他的上下文*/


/*function C1(name){
    if(name) this.name = name;
}

function C2(name){
    this.name = name;
}
function C3(name){
    this.name = name || "John";
}

C1.prototype.name = "Tom";
C2.prototype.name = "Tom";
C3.prototype.name = "Tom";
//TomundefinedJohn
console.log((new C1().name) + (new C2().name) + (new C3().name));*/


// 类数组对象变为数组

// ES6
/*function fun(){
	var m = [...arguments];
	console.log(m);//[ 1, 2, 3, 4, 5, 6 ]
	console.log(Array.isArray(m));//true
}

fun(1,2,3,4,5,6);*/

// function fun(){
// 	var m = Array.prototype.slice.call(arguments,0);
// 	console.log(m);
// 	console.log(Array.isArray(m));
// }
// fun(1,2,3,4,5,6);

//原生Ajax
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
	if(xhr.status == 200 || xhr.status == 304){
		if(xhr.readyState == 4){
			console.log(xhr.responseText);
		}
	}
}
xhr.open("GET","/api",true);
xhr.send(null);