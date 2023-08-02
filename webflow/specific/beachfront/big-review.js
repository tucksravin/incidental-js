window.slider = {};
window.slider.slides = $(".big-review-item");
window.slider.i = 0;
window.slider.length = $(".big-review-item").length;
window.slider.inc = 20;

window.slider.checkInc = () => {
if(window.innerWidth < 480){
  window.slider.inc = 15;
}
else{
    window.slider.inc = 20;
}

console.log(window.slider.inc);
}

window.slider.checkInc();
window.onresize =  window.slider.checkInc;

window.slider.next = () => {
    window.slider.i++;
    if(window.slider.i % window.slider.length==0){
        window.slider.slides.clone().appendTo($(".big-review-slider"));
    }

    $(".big-review-slider").css("transform", "translateX(" + -1 * window.slider.inc * window.slider.i + "rem)");
}

window.slider.prev = () => { 
    window.slider.i--;
    if(window.slider.i % window.slider.length == -1){
        window.slider.slides.clone().prependTo($(".big-review-slider"));
        let prepNum = -1*(window.slider.i+1)/window.slider.length+1;
        $(".big-review-slider").css("margin-left", "-" + prepNum * window.slider.length * window.slider.inc + "rem")
    }

    $(".big-review-slider").css("transform", "translateX("+ -1*window.slider.inc * window.slider.i + "rem)");
}

$(".big-review-arrow-left").click(window.slider.next);
$(".big-review-arrow-right").click(window.slider.prev);

//webflow specific bugs
$(".big-review").css("opacity", "1");
$(".big-review").css("transform", "translate3d(0, 0, 0)");



