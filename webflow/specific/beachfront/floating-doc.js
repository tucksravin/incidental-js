var FloatingDoctor = function() {
this.anchor = $(".ask-the-doctor-handwriting-anchor");
this.allQuestions = $(".qa-block");
this.currQuestion = 0;
this.questionHeight = this.allQuestions.outerHeight(true);
this.scrollingListener = () => {
    if(this.anchor[0].getBoundingClientRect().top < 0 && this.currQuestion < this.allQuestions.length - 1){
        this.currQuestion++;
        this.anchor.css("transform", "translateY(" + this.questionHeight * this.currQuestion + "px)");
        }
    else if(this.anchor[0].getBoundingClientRect().top > this.questionHeight && this.currQuestion > 0){
        this.currQuestion--;
        this.anchor.css("transform", "translateY(" + this.questionHeight * this.currQuestion + "px)");
        }   
    this.anchor.css("z-index", "5");
    }
    
this.resizeListener = () => {
    this.questionHeight = this.allQuestions.outerHeight(true);
}
    window.addEventListener("resize", this.resizeListener.bind(this));
    window.addEventListener("scroll", this.scrollingListener.bind(this));
    console.log("floating doctor loaded")
}
