window.slider = {};
window.slider.slides = $(".big-review-item");
window.slider.sliderport = $(".review-slider-holder-viewport");
window.slider.arrowleft = $(".big-review-arrow-left")
window.slider.arrowright = $(".big-review-arrow-right")
window.slider.i = 0;
window.slider.length = $(".big-review-item").length;
window.slider.inc = 20;
window.slider.cloneCount = 1;

//mobile 1 rem is 24px
let mobileSlidesWidth;

window.slider.checkInc = () => {
if(window.innerWidth < 480){
  
  mobileSlidesWidth = window.slider.sliderport.width()/24;
  window.slider.slides.css("width", ""+mobileSlidesWidth+"rem")
  window.slider.inc = 5+mobileSlidesWidth;
}
else{
    window.slider.inc = 20;
}

//console.log(window.slider.inc);
}

window.slider.checkInc();
$( window ).on("window:resize",   window.slider.checkInc);

window.slider.next = () => {
    window.slider.i++;
    if(window.slider.i % window.slider.length==0){
        window.slider.slides.clone().appendTo($(".big-review-slider"));
        window.slider.cloneCount++;
        $(".big-review-slider").css({"width": window.slider.inc * window.slider.length * window.slider.cloneCount + "rem"});
    }

    $(".big-review-slider").css({"transform": "translateX(" + -1 * window.slider.inc * window.slider.i + "rem)"});
}

window.slider.prev = () => { 
    window.slider.i--;
    if(window.slider.i % window.slider.length == -1){
        window.slider.slides.clone().prependTo($(".big-review-slider"));
        window.slider.cloneCount++;
        $(".big-review-slider").css({"width": window.slider.inc * window.slider.length * window.slider.cloneCount + "rem"});
        let prepNum = -1*(window.slider.i+1)/window.slider.length+1;
        $(".big-review-slider").css("margin-left", "-" + prepNum * window.slider.length * window.slider.inc + "rem")
    }

    $(".big-review-slider").css("transform", "translateX("+ -1*window.slider.inc * window.slider.i + "rem)");
}

$(".big-review-arrow-right").click(window.slider.next);
$(".big-review-arrow-left").click(window.slider.prev);

//webflow specific bugs
$(".big-review").css("opacity", "1");
$(".big-review").css("transform", "translate3d(0, 0, 0)");



