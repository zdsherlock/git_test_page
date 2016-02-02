$(document).ready(function(){
    $("#production-list > ul > li > a").hover(function(){
        $(this).css("color", "#86b637");},function(){
        $(this).css("color", "#333")  
   });
   $("#production-list > ul > li:nth-child(2)").click(function(){
       console.log("test");
       $("#products-traffic").css("display","none");
       $("#products-fruits").css("display","block");
        $("#fruits-detail").css("display","none");       
   });
   $("#production-list > ul > li:nth-child(4)").click(function(){
       console.log("test");
       $("#products-traffic").css("display","block");
       $("#products-fruits").css("display","none");       
   });
   $(".item").on("click",function(){
       $(".item").removeClass("active");
       $(this).addClass("active");
   })
});