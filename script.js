

$( document ).ready(function() {

$( ".cross" ).hide();
$( ".menuh" ).hide();
$( ".hamburger" ).click(function() {
$( ".menuh" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menuh" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});

});
 
$("#navigaition> li").click(function(){  // 네비게이션 클릭시
    var direction = $(this).attr("href");   // direction = 클릭한 요소의 href 속성
    scrolling( direction ); // direction 을 인자로 함수 실행
    return false;   // 본래 이벤트 방지 
});




var now_img, next_img;
 function fade_change(){
     now_img = $(".fade_container img:eq(0)");
     next_img = $(".fade_container img:eq(1)");
     next_img.addClass("active").css("opacity",0).animate({"opacity":1},1000, function(){
         $(".fade_container").append(now_img);           //콜백
         now_img.removeClass("active");
     });
 }
 
 
 // 순환 
  
 /*
     fade_change() 함수를 순환시키는 timer 설정
     mouse hover 로 애니메이션 멈춤/재생   
  
 */
 var timer = setInterval("fade_change()", 4000);
  
 $("div.fade_container").hover(function(){       // mouse enter 시 
     clearInterval(timer);
 }, function(){                                  // mouse leave 시
     timer = setInterval("fade_change()",4000);
 });


$(function(){
        $("#navigaition a").click(function(e){
            $.scrollTo(this.hash || 0,1500);
            e.preventDefault();
        });
    });
 
