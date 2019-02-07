// Faire apparaître la flèche quand on arrive en bas de la page
$(window).on("scroll", function(){
    let positionY = $(this).scrollTop();
    if(positionY > 1700){
        $("#scrolltotop").css("opacity", 1);
    }
    if(positionY < 1700){
        $("#scrolltotop").css("opacity", 0);
    }
})
