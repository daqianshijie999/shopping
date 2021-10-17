$(function(){
    // 登录页面转换
   var a = $(".titlle a");
   var scan = $(".scan");
   var account = $(".account");
   a.click(function(){
        $(this).css({"border-bottom":"none","background-color":"#fff"});
        $(this).siblings("a").css({"border-bottom": "1px solid #ddd","background-color":"#fcfcfc"});
        // console.log($(this).index()); 
        if ($(this).index()==0) {
            scan.css("display","block");
            account.css("display","none");
        }else{
            scan.css("display","none");
            account.css("display","block");
        }
    })

   

})