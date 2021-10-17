$(function(){
    var username = $(".username");
    var password = $(".password");
 var login = $(".btn-login");
 login.click(function(){
    
     console.log(username.val());
     if (username.val()=="admin"&&password.val()=="123") {
        // $.session.set('name', 'admin');
        location.href = 'hello.html';
     }
 })


})