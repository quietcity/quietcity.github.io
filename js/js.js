$(document).ready(pageFunction());

function pageFunction() {
    var arrow = $(".arrow");
    arrow.click(function() {
        $('body').animate({
            scrollTop: $("#feature-map").offset().top
        }, 500);
    });

    slideFunc();
}

function slideFunc() {
    var imgs = $(".app-page"),
        count = imgs.length,
        oWidth = parseInt($(imgs[0]).css("width")),
        oLeft = parseInt($(imgs[1]).css("left")),
        current = 0;

    setTimeout(slideAni, 3000);
    function slideAni() {
        var next = current + 1 >= count ? 0 : current + 1;
        $(imgs[current]).animate({
            left: -oWidth
        }, 1000, function () {
            $(imgs[current]).css("left", 270);
            current = current + 1 >= count ? 0 : current + 1;
            console.log(current);
            setTimeout(slideAni, 3000);
        });
        $(imgs[next]).animate({
            left: 0
        }, 1000);
    }
}
