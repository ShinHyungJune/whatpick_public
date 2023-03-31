
$(document).ready(function(){
    //헤더 푸터 컴포넌트
    $('#header').load('./components/header.html', function(){

        var swiper = new Swiper(".gnb_history", {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            slidesPerView: 4,
            spaceBetween: 8,
        });

        $('.toggle').click(function(){
            $(this).toggleClass('active')
            
            if( $(this).hasClass('active') ) {
                $('.gnb-mb').addClass('show')
                $('html').css('overflow', 'hidden')
            } else {
                $('.gnb-mb').removeClass('show')
                $('html').css('overflow', 'unset')
            }
            
        });

    });
    $('#footer').load('./components/footer.html', function(){});

    $('#pagination').load('./components/pagination.html');


    //스크롤 애니메이션  
    AOS.init();
})