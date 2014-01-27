console.log();


$('.input').click(function(){
	console.log ('focused on input!');
	$('input').each(function(){
		$('input').addClass('error');
	})
});



$('.activate-box').click(function(){
  console.log('the button clicked');
 
  $('.box').addClass('active');
});
 

// example one
$('.round').hover(function(){
	console.log('hover on object');
	$(this).addClass('change');

});

// example two
$('.here').hover(function(){
	console.log('hover on object');
	$(this).addClass('gone');
});

// example three
$('.spin').click(function(){
	console.log('the object clicked');
	$(this).addClass('move');
});

// example four
$('.up').dblclick(function(){
	console.log('the object double clicked');
	$(this).addClass('light');
});

// example five
$('.disappear').mouseenter(function(){
	console.log('mouse enters the object');
	$(this).addClass('poof');
});


// example six
$('.door').click(function(){
	console.log('the object clicked');
	$('.window').addClass('window-show');
});

// example seven

$('.one').hover(function(){
	console.log('hover on object');
	$(this).addClass('shadow'); 
});

// example eight
$('.two').hover(function(){
    $(this).addClass('boxshadow');
});

//example nine 
$('.three').hover(function(){
	$(this).fadeOut(1000);
});

// example ten
$('.button').click(function(){
	$('.input-trigger').trigger('focus');
});

// example eleven 
$('.slide').hover(function(){
     $(this).slideUp();
});

// example twelve

$('.focus').mouseover(function(){
   $('.text-field').focus();

});

// example thirteen

$('.row').click(function(){
	$(this).toggleClass('toggle');
});


// example fourteen
$('.seven').click(function(){
	$(this).addClass('colors');
});

// example fifteen
$('.eight').click(function(){
	$(this).toggleClass('toggletwo');
});

// example sixteen
$('.nine').click(function(){
	$(this).toggleClass('togglethree');
});

// example seventeen
$('.error').dblclick(function(){
	alert('robot warning')
});

// example eighteen
$('.rawr').mousedown(function(){
	$(this).append("<span style='color:red;'>RRAAAAA</span>");	
})
.mouseup(function(){
	$(this).append("<span style='color:orange;'>WWWWRRRRRR</span>")
});

 //example nineteen 
$('.ten').hover(function(){
     $(this).css('border-radius', '0%');
});


// example twenty
$('.eleven').mouseenter(function(){
	$(this).css('border', '2px solid yellow');
});

// example twenty-one
$('.twelve').mouseleave(function(){
	$(this).css('background-color', 'green');
});

// example twenty-two
$('.thirteen').click(function(){
	$(this).css('width', '100px');
});


// example twenty-three
$('.boxes').click(function(){
	$(this).removeClass('borders');
});

// example twenty-four
$('.boxes').mouseleave(function(){
	$(this).removeClass('background');
});

// example twenty-five
$('.hiding').hover(function(){
	$(this).hide('fast');
});


// example twenty-six
$('.sphere').bind("mouseenter mouseleave", function(){
	$(this).toggleClass('change');
});

// example twenty-seven
$('.texting').click(function(){
	$(this).text('Pizza');
});

// example twenty-eight
$('.ball').click(function(){
	$(this).toggleClass('bounce');
});

// example twenty-nine
$('.cubes').hover(function(){
	$(this).toggleClass('floating');
});

// example thirty
$('.text').focus(function(){
	$(this).css('background-color','yellow');
});

$('.text').blur(function(){
	$(this).css('background-color', 'white');
});




