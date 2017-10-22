
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 30) {
    	$(".navbar-light").removeClass("padded");
    } else {
        $(".navbar-light").addClass("padded");
    }
});
