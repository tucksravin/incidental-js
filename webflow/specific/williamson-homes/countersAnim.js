//eases
const easeInCubic = t => t * t * t;
const easeInQuintic = t => t * t * t * t * t;
const easeOutCubic = t => (--t) * t * t + 1;


var Counters = function() {
  this.section = $(".dream-home-count");
  this.cols = $(".cols-counter-wrapper");
  this.one = $(".counter-one");
  this.circleOne = $(".circle-one");
  this.two = $(".counter-two");
  this.circleTwo = $(".circle-two");
  this.three = $(".counter-three");
  this.circleThree = $(".circle-three");
  this.last = $(".counter-last");
  this.circleLast = $(".circle-last");
  this.counterHead = $(".counter-head");
  this.scrollingListener = false;
  this.upscrollListener = false;
  this.scrolling = false;
  this.activate = () => {
    if($(".counter-head")[0].getBoundingClientRect().top==0){
        if(this.scrollingListener) return; // listener for scroll event already added
        console.log("counters active, 1");
        countersInitEvent(this);
      } else { // counters  not inside viewport - remove scroll listener
        if(!this.scrollingListener) return; // listener for scroll event already removed
        window.removeEventListener("scroll", this.scrollingListener);
        this.scrollingListener = false;
        this.circleTwo.find("p").css("opacity", 0);
    }
  }

  this.reinit = () => {
    this.one.show()
    this.two.show()
    this.three.show()
    this.counterHead.css("position", "sticky");
    this.circleLast.removeClass("active");
    this.circleLast.find("h3").removeClass("active");
    this.circleLast.find("p").css("opacity", 0);
    this.last.css("margin-top", "240px");
    this.last.css("position", "sticky");
    if(this.lastScroll){
     window.scrollTo(0, this.lastScroll);
     this.lastScroll = false;
    }
  }

  window.addEventListener("scroll", this.activate);

};


function countersInitEvent(c) {
  c.scrollingListener =  countersScrolling.bind(c);
  window.addEventListener("scroll", c.scrollingListener);
  
};



function countersScrolling(){
  if(this.scrolling) return;
  this.scrolling = true;
  window.requestAnimationFrame(countersAnimation.bind(this));
};

function countersAnimation(){

  //tracks percentage through a specific phase
  let prog = 0;

  //clear active from every circle but the first



  //phase one
  if(this.two[0].getBoundingClientRect().top > 256){

   this.reinit();
    prog = (this.two[0].getBoundingClientRect().top - 240) / this.two.height();


    //add active to circle one remove from others
    this.circleOne.addClass("active");
    this.circleOne.find("h3").addClass("active");
    this.circleTwo.removeClass("active");
    this.circleTwo.find("h3").removeClass("active");
    this.circleThree.removeClass("active");
    this.circleThree.find("h3").removeClass("active");
    this.circleLast.removeClass("active");
    this.circleLast.find("h3").removeClass("active");

    //animate and set subtexts
    this.one.find("p").css("opacity", 1);
    this.two.find("p").css("opacity", 1-easeInCubic(prog));
    this.three.find("p").css("opacity", 0);
    this.last.find("p").css("opacity", 0);

    this.one.css("opacity", 1);
    this.two.css("opacity", 1);
    this.three.css("opacity", 1);
    this.last.css("opacity", 1);

    
  }
    
   
  //phase two
  else if(this.three[0].getBoundingClientRect().top > 256) {
    this.reinit();
    prog = (this.three[0].getBoundingClientRect().top - 256) / this.three.height();


    //add active to circle two
    this.circleOne.removeClass("active");
    this.circleOne.find("h3").removeClass("active");
    this.circleTwo.addClass("active");
    this.circleTwo.find("h3").addClass("active");
    this.circleThree.removeClass("active");
    this.circleThree.find("h3").removeClass("active");
    this.circleLast.removeClass("active");
    this.circleLast.find("h3").removeClass("active");


    //opacities
    this.one.css("opacity", easeInQuintic(prog));
    this.two.css("opacity", 1);
    this.three.css("opacity", 1);
    this.last.css("opacity", 1);

    //animate in subtext for three
    this.two.find("p").css("opacity", 1);
    this.three.find("p").css("opacity", 1 - easeInCubic(prog));
    this.last.find("p").css("opacity", 0);


  } 
  //phase three
  else if(this.last[0].getBoundingClientRect().top > 258) {
    this.reinit();
    prog = (this.last[0].getBoundingClientRect().top - 256) / this.last.height();


    //add active to circle three
    this.circleOne.removeClass("active");
    this.circleOne.find("h3").removeClass("active");
    this.circleTwo.removeClass("active");
    this.circleTwo.find("h3").removeClass("active");
    this.circleThree.addClass("active");
    this.circleThree.find("h3").addClass("active");
    this.circleLast.removeClass("active");
    this.circleLast.find("h3").removeClass("active");

    this.one.css("opacity", 0);
    this.two.css("opacity", easeInQuintic(prog));
    this.three.find("h3").css("opacity", easeOutCubic(prog));
    this.three.find("p").css("opacity", easeOutCubic(prog));
    this.last.css("opacity", 1);

    //animate in subtext for last
    this.last.find("p").css("opacity", 1 - easeInCubic(prog));
    if(prog<0.1){
        this.circleLast.addClass("active");
        this.circleLast.find("h3").addClass("active");
    }
  


  
  }
 if(this.counterHead[0].getBoundingClientRect().top < 0){
  	console.log("stick last")
    this.one.hide()
    this.two.hide()
    this.three.hide()
    this.counterHead.css("position", "static");
    this.circleLast.addClass("active");
    this.circleLast.find("h3").addClass("active");
    this.circleLast.find("p").css("opacity", 1);
    this.last.css("margin-top", 0);
    this.leastScroll = this.last.offset().top;
    
    
    window.scrollTo(0, this.counterHead.offset().top)
  
  }

  this.scrolling = false;

  //


};

