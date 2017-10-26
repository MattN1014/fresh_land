
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
    	$(".navbar-light").removeClass("padded");
    } else {
        $(".navbar-light").addClass("padded");
    }
});
