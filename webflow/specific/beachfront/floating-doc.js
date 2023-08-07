var FloatingDoctor = function() {
this.anchor = $(".ask-the-doctor-handwriting-anchor");
this.allQuestions = $(".qa-block");
this.currQuestion = 0;
this.questionHeight = this.allQuestions.outerHeight(true);
window.addEventListener("scroll", this.scrollingListener.bind(this));
this.scrollingListener = () => {
    if(this.anchor[0].getBoundingClientRect().top < 0){
        this.currQuestion++;
        this.anchor.css("transform", "translateY(" + this.questionHeight * this.currQuestion + "px)");
        }
    else if(this.anchor[0].getBoundingClientRect().top > this.questionHeight){
        this.currQuestion--;
        this.anchor.css("transform", "translateY(" + this.questionHeight * this.currQuestion + "px)");
        }   
    }   
}
