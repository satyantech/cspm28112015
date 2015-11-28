jQuery(document).ready(function ($) {
	
	var slideCount = $('#slider p').length;
	var i = 1;	
	$('#slider p').first().prependTo('#slider');
	
	setInterval(function(){
		i++;
		$('#slider p:visible').fadeOut(500);
		if(i>slideCount) {i = 1;}
		$('#slider p#slideP'+i).fadeIn(1000);		
	},4000);

});
/* jQuery(document).ready(function ($) {

  *$('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });
	
	setInterval(function () {
        moveRight();
    }, 3000);
	*
	var slideCount = $('#slider p').length;
	var slideWidth = $('#slider').width();
	var slideHeight = $('#slider').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	
	//$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#slider p:last-child').prependTo('#slider');

    function moveLeft() {
        $('#slider p').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider p:last-child').prependTo('#slider p:first-child');
            $('#slider p').css({'left': ''});
        });
    };

    function moveRight() {
        $('#slider p').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider p:first-child').appendTo('#slider  p:last-child');
            $('#slider p').css({'left': ''});
        });
    };

    $('a.slide-prev').click(function () {
        moveLeft();
    });

    $('a.slide-next').click(function () {
        moveRight();
    });

});    
*/