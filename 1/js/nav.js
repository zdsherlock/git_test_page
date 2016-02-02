$(document).ready(function(){
    $("#products-menu").hover(function(){
        $("#products-menu > ul").css("display", "block");},function(){
        $("#products-menu > ul").css("display", "none");   
   });//导航栏下拉菜单
   function nav(url){
       window.location.href = url
   }
   $(".nav > ul > li:first").on("click",function(){
       nav("index.html");
   });
    $(".nav > ul > li:nth-child(2)").on("click",function(){
       nav("products-index-fruits.html");
   });
    $(".nav > ul > li:nth-child(3)").on("click",function(){
       nav("aboutus.html");
   });
    $(".nav > ul > li:nth-child(4)").on("click",function(){
       nav("news-index.html");
   });
    $(".nav > ul > li:last-child").on("click",function(){
       nav("contactus.html");
   });
});
