$(window).on('scroll',function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 450) {
        $(".spec").addClass("stick");
        $(".otchet").addClass("hid");
        $("span.ic").removeClass("hid");
        
    } else {
        $(".spec").removeClass("stick");
        $(".otchet").removeClass("hid");
        $("span.ic").addClass("hid");
    }
});