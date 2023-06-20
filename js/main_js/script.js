//click ani
$(function(){

    $("#button1").click(function(){

            $(".introduction").fadeIn().siblings().fadeOut();
    });	

    $("#button2").click(function(){

            $(".story").fadeIn().siblings().fadeOut();
    });	
    $("#button3").click(function(){

            $(".applcation").fadeIn().siblings().fadeOut();
    });	
    $("#button4").click(function(){

            $(".regular_box").fadeIn().siblings().fadeOut();
    });	

    $("#button5").click(function(){

        $(".recipe").fadeIn().siblings().fadeOut();
});	
});



$(function() {
        $(".story").hide(); // 처음에 가리고

        $(".applcation").hide(); // 처음에 가리고

        $(".regular_box").hide(); // 처음에 가리고

        $(".recipe").hide(); // 처음에 가리고

    });



//flow_banner

$(window).on('load', function () {
        setFlowBanner();  
    })
    
    function setFlowBanner(){
        const $wrap = $('.flow_banner');
        const $list = $('.flow_banner .list');
        let wrapWidth = ''; //$wrap의 가로 크기
        let listWidth = ''; //$list의 가로 크기
        const speed = 92; //1초에 몇픽셀 이동하는지 설정
    
        //리스트 복제
        let $clone = $list.clone();
        $wrap.append($clone);
        flowBannerAct()
    
        //반응형 :: 디바이스가 변경 될 때마다 배너 롤링 초기화
        let oldWChk = window.innerWidth > 1279 ? 'pc' : window.innerWidth > 767 ? 'ta' : 'mo';
        $(window).on('resize', function() {
            let newWChk = window.innerWidth > 1279 ? 'pc' : window.innerWidth > 767 ? 'ta' : 'mo';
            if (newWChk != oldWChk) {
                oldWChk = newWChk;
                flowBannerAct();
            }
        });
    
        //배너 실행 함수
        function flowBannerAct() {
            //배너 롤링 초기화
            if(wrapWidth != ''){
                $wrap.find('.list').css({ 'animation': 'none' });
                $wrap.find('.list').slice(2).remove();
            }
            wrapWidth = $wrap.width();
            listWidth = $list.width();
    
            //무한 반복을 위해 리스트를 복제 후 배너에 추가
            if (listWidth < wrapWidth) {
                const listCount = Math.ceil(wrapWidth * 2 / listWidth);
                for (let i = 2; i < listCount; i++) {
                    $clone = $clone.clone();
                    $wrap.append($clone);
                }
            }
            $wrap.find('.list').css({ 'animation': `${listWidth / speed}s linear infinite flowRolling` }); 
        } 
    }


//scroll to top

var btn = $('#scroll-to-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 2000) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});