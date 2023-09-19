window.teamSlider = {};
window.teamSlider.slides = $(".team-list-item");
window.teamSlider.i = 0;
window.teamSlider.length = $(".team-list-item").length;
window.teamSlider.portSize = window.innerWidth-(getContentWidthMargin()*2);
window.teamSlider.inc = window.teamSlider.portSize/3;
window.teamSlider.slideHorMargin = 0;
window.teamSlider.hideLeft = () => $(".left").css({"opacity":"0", "pointer-events":"none"});
window.teamSlider.hideRight = () => $(".right").css({"opacity":"0", "pointer-events":"none"});
window.teamSlider.showLeft = () => $(".left").css({"opacity":"1", "pointer-events":"auto"});
window.teamSlider.showRight = () => $(".right").css({"opacity":"1", "pointer-events":"auto"});

window.teamSlider.checkInc = () => {

    window.teamSlider.portSize = $(".team-slider-holder").width();
    window.teamSlider.inc = window.teamSlider.portSize/3;
    window.slideHorMargin = (window.teamSlider.portSize-3*$(".team-list-item").outerWidth(false))/6;

    if(window.innerWidth < 992){ 
        window.teamSlider.inc = window.teamSlider.portSize;
        window.slideHorMargin = (window.teamSlider.portSize-$(".team-list-item").outerWidth(false))/2;
        }
    
        $(".team-list-item").css("margin-right", "" + window.slideHorMargin + "px");
        $(".team-list-item").css("margin-left", "" + window.slideHorMargin + "px");
console.log(window.teamSlider.inc);
}

window.teamSlider.checkInc();
$( window ).on("window:resize", window.teamSlider.checkInc);

window.teamSlider.next = () => {
    window.teamSlider.i++;
    if(window.teamSlider.i==window.teamSlider.length-1)
    window.teamSlider.hideRight();

    if(window.teamSlider.i==1)
        window.teamSlider.showLeft();
    
        
    

    console.log("click right")

    $(".team-slider").css("transform", "translateX(" + -1 * window.teamSlider.inc * window.teamSlider.i + "px)");
}

window.teamSlider.prev = () => { 
    window.teamSlider.i--;
    if(window.teamSlider.i==0)
    window.teamSlider.hideLeft();

    if(window.teamSlider.i==window.teamSlider.length-2)
        window.teamSlider.showRight();

    console.log("click left")

    $(".team-slider").css("transform", "translateX("+ -1*window.teamSlider.inc * window.teamSlider.i + "px)");
}

$(".right").click(window.teamSlider.next);
$(".left").click(window.teamSlider.prev);

$(".left").css({"opacity":"0", "pointer-events":"none"});

$(".team-slider").css("width", "" + $(".team-list-item").length*$(".team-list-item").outerWidth(true) + "px");



//webflow specific bugs
//$(".big-review").css("opacity", "1");
//$(".big-review").css("transform", "translate3d(0, 0, 0)");



