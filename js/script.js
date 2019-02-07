// $(window).on("scroll", function(){
//    let positionY = $(this).scrollTop();
//    console.log (positionY);
//    $(window).height();
// })

// Faire apparaître la flèche quand on arrive en bas de la page
$(window).on("scroll", function(){
    if($(this).scrolltotop() > 141){
        $(".fas").show();
    }


    let positionY = $(this).scrollTop();
    console.log (positionY);
})