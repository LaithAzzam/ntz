'use strict';
document.addEventListener("DOMContentLoaded", function(event) { 
	

	// if(marginTop > 0){
	// 	video.style.marginTop = marginTop + "px";
	// 	video.style.marginBottom = marginBottom + "px";
	// 	console.log(screenWrapHeight, videoHeight);
	// }

	$('.slick').slick({
		autoplay: true,
  		autoplaySpeed: 3000,
  		infinite: true,
        dots: true,
        centerMode: false,
        arrows: false,
	}
	);
				

	var iframe = $('#video')[0];
    var player = $f(iframe);

    // When the player is ready, add listeners for pause, finish, and playProgress

    // Call the API when a button is pressed
    $('.play').bind('click', function(event) {
        player.api('play');

        var video = document.querySelector(".video-wrapper");
		var screenHeight = window.innerHeight;
		var videoHeight = video.offsetHeight;
		var marginTop = (( screenHeight - videoHeight)/2);

        $('html,body').animate({
        	scrollTop: ($("#video").offset().top - marginTop) + "px"
        },1200);
        return false;
    });

    $(".buy").click(function() {
	    $('html,body').animate({
        	scrollTop: $(".push").offset().top - 25
        },1200);
        return false;
	});

});
