console.log();


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
 

// example one
$('.round').hover(function(){
	console.log('hover on object');
	$(this).addClass('change');

})

// example two
$('.here').hover(function(){
	console.log('hover on object');
	$(this).addClass('gone');
})

// example three
$('.spin').click(function(){
	console.log('the object clicked');
	$(this).addClass('move');
})

// example four
$('.up').dblclick(function(){
	console.log('the object double clicked');
	$(this).addClass('light');
})

// example five
$('.disappear').mouseenter(function(){
	console.log('mouse enters the object');
	$(this).addClass('poof');
})


// example six
$('.door').click(function(){
	console.log('the object clicked');
	$('.window').addClass('window-show');
})

// example seven

$('.one').hover(function(){
	console.log('hover on object');
	$(this).addClass('shadow'); 
})

// example eight
$('.two').hover(function(){
    $(this).addClass('boxshadow');
})

//example nine 
$('.three').hover(function(){
	$(this).fadeOut(1000);
})

// example ten
$('.button').click(function(){

	$('.input-trigger').trigger('focus');
})

// example eleven 
$('.slide').hover(function(){

     $(this).slideUp();
})

$('.focus').mouseover(function(){
   $('.text-field').focus();

})




