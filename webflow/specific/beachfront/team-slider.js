window.slider = {};
window.slider.slides = $(".team-list-item");
window.slider.i = 0;
window.slider.length = $(".team-list-item").length;
window.slider.inc = 9;

window.slider.checkInc = () => {
if(window.innerWidth < 480){
  window.slider.inc = 9;
}
else{
    window.slider.inc = 9;
}

console.log(window.slider.inc);
}

window.slider.checkInc();
window.onresize =  window.slider.checkInc;

window.slider.next = () => {
    window.slider.i++;
    if(window.slider.i % window.slider.length==0){
        window.slider.slides.clone().appendTo($(".team-list-slider"));
    }

    $(".team-list-slider").css("transform", "translateX(" + -1 * window.slider.inc * window.slider.i + "rem)");
}

window.slider.prev = () => { 
    window.slider.i--;
    if(window.slider.i % window.slider.length == -1){
        window.slider.slides.clone().prependTo($(".team-list-slider"));
        let prepNum = -1*(window.slider.i+1)/window.slider.length+1;
        $(".team-list-slider").css("margin-left", "-" + prepNum * window.slider.length * window.slider.inc + "rem")
    }

    $(".team-list-slider").css("transform", "translateX("+ -1*window.slider.inc * window.slider.i + "rem)");
}

$(".left").click(window.slider.next);
$(".right").click(window.slider.prev);

//webflow specific bugs
//$(".big-review").css("opacity", "1");
//$(".big-review").css("transform", "translate3d(0, 0, 0)");



