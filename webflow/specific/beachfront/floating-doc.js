var FloatingDoctor = function() {
this.anchor = $(".ask-the-doctor-handwriting-anchor");
this.allQuestions = $(".qa-block");
this.currQuestion = 0;
this.questionHeight = this.allQuestions.outerHeight(true);
this.halfASecDelay = true;
this.scrollingListener = () => {
    if(!this.halfASecDelay) return;  

    if((this.anchor[0].getBoundingClientRect().top < 0 && this.currQuestion < this.allQuestions.length - 1)||(this.anchor[0].getBoundingClientRect().top > this.questionHeight && this.currQuestion > 0)){
        this.currQuestion = this.findTopVisibleQuestionIndex();
        this.anchor.css("transform", "translateY(" + this.questionHeight * this.currQuestion + "px)");
        this.anchor.css("z-index", "5");
        


    console.log(this.currQuestion);
    this.halfASecDelay = false;
    setTimeout(() => this.halfASecDelay = true , 500);
    }
        

    }
this.findTopVisibleQuestionIndex = () => {
    for(var i = 0; i < this.allQuestions.length; i++){
        if(this.allQuestions[i].getBoundingClientRect().top > 0){
             return i;
            }
        }
    return this.allQuestions.length - 1;

}
    
this.resizeListener = () => {
    this.questionHeight = this.allQuestions.outerHeight(true);
}
    window.addEventListener("resize", this.resizeListener.bind(this));
    window.addEventListener("scroll", this.scrollingListener.bind(this));
    console.log("floating doctor loaded")
}
