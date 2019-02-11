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
    

// Positionnement du menu
$(window).on("scroll", function(){
    let positionN = $(this).scrollTop();
    // Menu en position fixe quand on scroll vers le bas
    if(positionN > 5){
        $("#navBar").css("position", "fixed");
        // Propriétés esthétiques du menu
        $("#navBar").css("width", "100%");
        $(".menu").css("height", "40px");
        $(".menu").css("transition", "0.3s");
        $(".menu").css("opacity", 0.8);
    }
    // Position relative du menu quand il est en haut de page
    if(positionN < 5){
        $("#navBar").css("position", "relative");
        // Propriétés esthétiques du menu
        $("#navBar").css("width", "100%");
        $(".menu").css("height", "60px");
        $(".menu").css("transition", "0.3s");
        $(".menu").css("opacity", 1);
    }
})    