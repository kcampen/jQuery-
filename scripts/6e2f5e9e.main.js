console.log(),$(".input").click(function(){console.log("focused on input!"),$("input").each(function(){$("input").addClass("error")})}),$(".activate-box").click(function(){console.log("the button clicked"),$(".box").addClass("active")}),$(".round").hover(function(){console.log("hover on object"),$(this).addClass("change")}),$(".here").hover(function(){console.log("hover on object"),$(this).addClass("gone")}),$(".spin").click(function(){console.log("the object clicked"),$(this).addClass("move")}),$(".up").dblclick(function(){console.log("the object double clicked"),$(this).addClass("light")}),$(".disappear").mouseenter(function(){console.log("mouse enters the object"),$(this).addClass("poof")}),$(".door").click(function(){console.log("the object clicked"),$(".window").addClass("window-show")}),$(".one").hover(function(){console.log("hover on object"),$(this).addClass("shadow")}),$(".two").hover(function(){$(this).addClass("boxshadow")}),$(".three").hover(function(){$(this).fadeOut(1e3)}),$(".button").click(function(){$(".input-trigger").trigger("focus")}),$(".slide").hover(function(){$(this).slideUp()}),$(".focus").mouseover(function(){$(".text-field").focus()}),$(".row").click(function(){$(this).toggleClass("toggle")}),$(".seven").click(function(){$(this).addClass("colors")}),$(".eight").click(function(){$(this).toggleClass("toggletwo")}),$(".nine").click(function(){$(this).toggleClass("togglethree")}),$(".error").dblclick(function(){alert("robot warning")}),$(".rawr").mousedown(function(){$(this).append("<span style='color:red;'>RRAAAAA</span>")}).mouseup(function(){$(this).append("<span style='color:orange;'>WWWWRRRRRR</span>")}),$(".ten").hover(function(){$(this).css("border-radius","0%")}),$(".eleven").mouseenter(function(){$(this).css("border","2px solid yellow")}),$(".twelve").mouseleave(function(){$(this).css("background-color","green")}),$(".thirteen").click(function(){$(this).css("width","100px")}),$(".boxes").click(function(){$(this).removeClass("borders")}),$(".boxes").mouseleave(function(){$(this).removeClass("background")}),$(".hiding").hover(function(){$(this).hide("fast")}),$(".sphere").bind("mouseenter mouseleave",function(){$(this).toggleClass("change")}),$(".texting").click(function(){$(this).text("Pizza")}),$(".ball").click(function(){$(this).toggleClass("bounce")}),$(".cubes").hover(function(){$(this).toggleClass("floating")}),$(".text").focus(function(){$(this).css("background-color","yellow")}),$(".text").blur(function(){$(this).css("background-color","white")});