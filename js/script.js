$(document).ready(function($) {
   
    $(".tabs-menu2 li a").click(function(){
     $(".form-pm").show();
      $(".form-pm1").hide();

      $(".hideme").click(function(){
            $(".form-pm").hide();
            $(".form-pm1").show();

    });
    });
    // $('#accordion').find('.accordion-toggle').click(function(){

    //   //Expand or collapse this panel
    //   $(this).next().slideToggle('fast');

    //   //Hide the other panels
    //   $(".accordion-content").not($(this).next()).slideUp('fast');

    // });
 $('#accordion').find('.accordion-toggle').click(function(){

        //Expand or collapse this panel
        $(this).next().slideToggle('fast');
        
        //changes arrow 
        if( $(this).find('.drop').hasClass('drop-icon-right')){
            $('#accordion').find('.drop').removeClass('drop-icon-down').addClass('drop-icon-right');
            $(this).find('.drop').removeClass('drop-icon-right').addClass('drop-icon-down');

        } else {
            
            $('#accordion').find('.drop').removeClass('drop-icon-down').addClass('drop-icon-right');
             $(this).find('.drop').removeClass('drop-icon-right').addClass('drop-icon-down');
           
        }
        //Hide the other panels
        $(".accordion-content").not($(this).next()).slideUp('fast');
      
    });
 
 $('#accordion1').find('.accordion-toggle1').click(function(){
        
        //Expand or collapse this panel
        $(this).next().slideToggle('fast');
        $(this).addClass('toggle-color');
        //changes arrow 
        
        //Hide the other panels
        $(".accordion-content1").not($(this).next()).slideUp('fast');
        $(".accordion-toggle1").not($(this)).removeClass('toggle-color');
      
    });
  });
 
$(document).ready(function() {
    $(".tabs-menu1 a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content1").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
});
$(document).ready(function() {
    $(".tabs-menu2 a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content2").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
});