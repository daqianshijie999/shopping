$(function(){
  // 轮播图
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
      },
  });
  // 电梯导航栏
  var flag = true;
  // 1.显示隐藏电梯导航
  var toolTop = $(".container-recommend").offset().top;
  toggleTool();
  function toggleTool() {
      if ($(document).scrollTop() >= toolTop) {
          $(".fixedtool").fadeIn();
      } else {
          $(".fixedtool").fadeOut();
      };
  }

  $(window).scroll(function() {
      toggleTool();
      // 3. 页面滚动到某个内容区域，左侧电梯导航小li相应添加和删除current类名
      if (flag) {
          $(".body .w").each(function(i, ele) {
              if ($(document).scrollTop() >= $(ele).offset().top) {
                  // console.log(i);
                  $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();

              }
          })
      }
  });
  // 2. 点击电梯导航页面可以滚动到相应内容区域
  $(".fixedtool li").click(function() {
      flag = false;
      // console.log($(this).index());
      // 当我们每次点击小li 就需要计算出页面要去往的位置 
      // 选出对应索引号的内容区的盒子 计算它的.offset().top
      var current = $(".body .w").eq($(this).index()).offset().top;
      // 页面动画滚动效果
      $("body, html").stop().animate({
          scrollTop: current
      }, function() {
          flag = true;
      });
      // 点击之后，让当前的小li 添加current 类名 ，姐妹移除current类名
      $(this).addClass("current").siblings().removeClass();
  });

//   卷去顶部S
var boxTop = $(".container-recommend").offset().top;
$(".top").hide();
 $(window).scroll(function() {
      if ($(document).scrollTop() >= boxTop) {
            $(".top").fadeIn();
        } else {
            $(".top").fadeOut();
        }
});
    $(".top").click(function(){
        // 方法一
        // $("body,html").stop().animate({
        //     scrollTop:0
        //    })
        // 方法二
        $("html, body").stop().animate({scrollTop: 0}, 500);
    });
        // 卷去顶部 END

        // 懒加载
        lazyLoadInit({
            // coverColor: "white",
            showTime: 100,
            onLoadBackEnd: function (i, e) {
              // console.log("onLoadBackEnd:" + i);
            },
            onLoadBackStart: function (i, e) {
              // console.log("onLoadBackStart:" + i);
            },
          });

          
})


  
