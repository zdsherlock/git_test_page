$(document).ready(function(){
    $(".select > li:first").on("click",function(){
        $(this).addClass("active");
        $(".select > li:last").removeClass("active");
        console.log("test")
        $(".our-intro").css("display","block");
        $(".our-honor").css("display","none");
    })
    $(".select > li:last").on("click",function(){
        $(this).addClass("active");
        $(".select > li:first").removeClass("active");
        $(".our-honor").css("display","block");
        $(".our-intro").css("display","none");
        
    })
})