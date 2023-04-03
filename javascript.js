$('#language-toggle').on("click", function() {
	$(".homet").toggle();
	$(".aboutt").toggle();
	$(".skillst").toggle();
	$(".portfoliot").toggle();
	$(".contactt").toggle();
	$(".h1home").toggle();
	$(".firsth2").toggle();
	$(".h3bio").toggle();
	$(".bioparagraph").toggle();
	$(".skills-header").toggle();
	$(".myprojects").toggle();
	$(".tindog").toggle();
	$(".drum").toggle();
	$(".drumkit").toggle();
	$(".snake").toggle();
	$(".snakev").toggle();
	$(".contacth2div").toggle();
	$(".contact1").toggle();
	$(".answer").toggle();
	$(".conbut").toggle();
	$(".simon").toggle();
	$(".simonp").toggle();
	$(".bottom-cloud").toggle();
	$(".music").toggle();
	$(".musicp").toggle();
	$(".csoon").toggle();
	$(".cosoon").toggle();
	$(".skills-p").toggle();

});





const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('.show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


$(window).on(function() {
	$('#shopSign').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+350) {
			$(this).addClass("bounce2");
		}
	});
});


$(document).ready(function() {
	
	//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	$('.accordionButton').on(function() {

		//REMOVE THE ON CLASS FROM ALL BUTTONS
		$('.accordionButton').removeClass('on');
		
		//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	$('.accordionContent').slideUp('normal');

		//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
		if($(this).next().is(':hidden') == true) {
			
			//ADD THE ON CLASS TO THE BUTTON
			$(this).addClass('on');
			
			//OPEN THE SLIDE
			$(this).next().slideDown('normal');
		} 
		
});
	
	
	/*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	//ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
	$('.accordionButton').on(function() {
		$(this).addClass('over');
		
	//ON MOUSEOUT REMOVE THE OVER CLASS
	}).on(function() {
		$(this).removeClass('over');										
	});
	
	/*** END REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	
	/********************************************************************************************************************
	CLOSES ALL S ON PAGE LOAD
	********************************************************************************************************************/	
	$('.accordionContent').hide();

});


