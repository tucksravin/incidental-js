//global functions for all webflow sites

/*
toggle: 
    for elements with an active or inactive state, apply to parent with
        $(".parent").click(toggle);
        or
        add "toggleable" as a class
    gives parent and all children the active state on first click and removes it on the second
    allows to make more complex anims in webflow, add transition to default class, 
    then add active state and make active version of the class, including any changes to children
*/

var toggle = function(){
	if($(this).hasClass('active')){
  	$(this).removeClass('active');
    $(this).find('*').removeClass('active')
  }
  else{
  $(this).addClass('active')
  $(this).find('*').addClass('active');
  }
}
    
$(".togglable").click(toggle);

/*
resize decoupler: 
    call:
        $(window).on("window:resize", (e) => {do stuff});
    instead of overwriting window.onresize
   */

$(window).resize(function () {
    $(window).trigger("window:resize")
 })