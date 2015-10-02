'use strict';
document.addEventListener("DOMContentLoaded", function(event) { 
	// var video = document.querySelector(".video-wrapper");
	// var screenWrap = document.querySelector(".ntz-wrapper");
	// var screenWrapHeight = screenWrap.offsetHeight;
	// var videoHeight = video.offsetHeight;
	// var videoTop = video.offsetTop;
	// var marginTop = (( screenWrapHeight - videoHeight)/2) - videoTop/1.5;
	// var marginBottom = (( screenWrapHeight - videoHeight)/2);

	// if(marginTop > 0){
	// 	video.style.marginTop = marginTop + "px";
	// 	video.style.marginBottom = marginBottom + "px";
	// 	console.log(screenWrapHeight, videoHeight);
	// }

	var iframe = $('#video')[0];
    var player = $f(iframe);

    // When the player is ready, add listeners for pause, finish, and playProgress

    // Call the API when a button is pressed
    $('.play').bind('click', function(event) {
        player.api('play');
        $('html,body').animate({
        	scrollTop: $("#video").offset().top - 25
        },'slow');
        return false;
    });

    $(".buy").click(function() {
	    $('html,body').animate({
        	scrollTop: $(".push").offset().top - 25
        },'slow');
        return false;
	});

});
