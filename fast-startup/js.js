$(window).on('scroll',function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 450) {
        $(".btn").addClass("stick");
        $(".otchet").addClass("hid");
        $("span.ic").removeClass("hid");
        
    } else {
        $(".btn").removeClass("stick");
        $(".otchet").removeClass("hid");
        $("span.ic").addClass("hid");
    }
});