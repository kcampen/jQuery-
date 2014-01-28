// notes from class

// [["fish", "milk"], "cheerse", "beer", 11 ]

// {
//         style: undefined,
//         legs: 4,
//         height: "5 feet",
//         materials: [
//         'pine',
//         'iron'
//         ],
//         maxCapacity: '400lb'

// }

// true
// false

// /.+/

// var dog = {
//         legs: 4;
//         ears: 2;
//         bark: function function() {
//                 console.log ('woof')
//         },
//         countEars: function (){
//                 console.log ('I have', this.ears, 'ears');
//         }
// }
// var students = [
//         {
//                 name: 'Austin',
//                 age: 73,
//                 superPower: 'Eating Soup'
//         },
//         {
//                 name: 'Matt',
//                 age: 90000,
//                 superPower: 'Sleeping'
//         },
//         {
//                 name: 'ALF',
//                 age: 1,
//                 superPower: 'Eating cats'
//         }
// ]

// students.forEach(function(student, index){
//         var newDiv = $(<div class="student-container"> + student.name +'</div>')
//         $('body').append(newDiv);

// })







var Dinosaur = {
	head: 1,
	legs: 4,
	pizza: 0,
	alive: false,
	hungry: false,
	feelings: ['More Pizza', 'Rawr'],


	eatsPizza: function(){
		this.alive = true;
		return 'More Pizza'
	};

	isHungry: function(){
		this.hungry = true;
		return 'Rawr'
	}
}

//  can do one function but not both without getting error

var turtle = {
	ninja: true, 
	pizza: 0,
	color: 'red',
eatsPizza: function(){
this.pizza = +1
}
}



var katy = {
	age: 24,
	student: true,
	likesPizza: true,
	eatsPizza: 0,

	isHungry: function(){
	this.eatsPizza = +1;
	return 'I have '+ this.eatsPizza + ' pizzas'
	}
}

