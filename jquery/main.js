$("*").fadeIn(body > p);
$(document).ready(function(){
    $('.login-button').on("click",()=>{
        $(".login-form").toggle();
    });
    $('.menu-button').on("click",()=>{
        $(".nav-menu").toggle();
    });
    $('.menu-button').mouseenter(()=>{
        $(".menu-button").css("background","#00ff00")
    });
    $('.menu-button').mouseleave(()=>{
        $(".menu-button").css("background","#000")
    });
    $("button").on("click",()=>{
        $("p").toggle();
    })
});