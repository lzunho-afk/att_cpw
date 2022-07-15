$(window).bind("load", function() {
    var fheight = 0;
    var ftop = 0;
    $footer = $("#footer");

    positionFooter();

    function positionFooter() {
        fheight = $footer.height();
        ftop = ($(window).scrollTop()+$(window).height()-fheight)+"px";

        if(($(document.body).height()+fheight) < $(window).height()) {
            $footer.css({
                position: "absolute"
            }).animate({
                top: ftop
            })
        } else {
            $footer.css({
                position: "static"
            })
        }
    }

    $(window)
        .scroll(positionFooter)
        .resize(positionFooter)
});

