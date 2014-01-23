console.log('\'Allo \'Allo!');


$('.input').click(function(){
	console.log ('focused on input!');
	$('input').each(function(){
		$('input').addClass('error');
	})
})



$('.activate-box').click(function(){
  console.log('the button clicked');
 
  $('.box').addClass('active');
});
 


$('.round').hover(function(){
	console.log('hover on object');
	$('.round').addClass('change');

})

$('.here').hover(function(){
	console.log('hover on object');
	$('.here').addClass('gone');
})

$('.spin').click(function(){
	console.log('the object clicked');
	$('.spin').addClass('move');
})


$('.up').dblclick(function(){
	console.log('the object double clicked');
	$('.up').addClass('light');
})

$('.disappear').mouseenter(function(){
	console.log('mouse enters the object');
	$('.disappear').addClass('poof');
})






