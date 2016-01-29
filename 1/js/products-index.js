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
    $("#nav-bottom > ul > li:nth-child(4),#nav-bottom > ul > li:nth-child(5),#nav-bottom > ul > li:last-child").on("click",
        function(){
            $("#products-fruits").css("display","none");
            $("#products-fruits-second").css("display","block");
            $("#nav-bottom > ul > li:nth-child(4)").addClass("active");
            $("#nav-bottom > ul > li:nth-child(3)").removeClass("active");                        
    }); 
    $("#nav-bottom > ul > li:first-child,#nav-bottom > ul > li:nth-child(2),#nav-bottom > ul > li:nth-child(3)").on("click",
        function(){
            $("#products-fruits").css("display","block");
            $("#products-fruits-second").css("display","none");
            $("#nav-bottom > ul > li:nth-child(3)").addClass("active");  
            $("#nav-bottom > ul > li:nth-child(4)").removeClass("active");                                              
    });
    $("#products-fruits > div:nth-child(2) > div > div:first-child").on("click",
        function(){
            $("#products-fruits").css("display","none");
            $("#fruits-detail").css("display","block");
        }
    );
});