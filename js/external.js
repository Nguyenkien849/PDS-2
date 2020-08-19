$(document).ready(function () {
    $('.comebacktop').click(function (e) { 
        e.preventDefault();
<<<<<<< HEAD
        $('html,body').animate({ scrollTop: 0}, 1500, "easeInOutSine");
=======
        $('html').animate({ scrollTop: 0}, 1500, "");
>>>>>>> development
    });
   
    
    // Menu ẩn khi chưa click
    $('.menu-mobile').animate({opacity: 0, marginLeft:-300});

     // Menu hiện ra và thu lại khi click

    $('.nav-mobile').click(function() {
        $('.menu-mobile').animate({opacity: 0, marginLeft:-300});
        $('.menu-mobile').toggleClass('menu-mobile-1');
<<<<<<< HEAD
        $('.menu-mobile-1').animate({opacity: 1, marginLeft:0}, 800, "easeInOutSine");
=======
        $('.menu-mobile-1').animate({opacity: 1, marginLeft:0}, 1000, "easeOutExpo");
>>>>>>> development
    });
    

    $('.search-box').animate({opacity: 0, marginTop:-50});

    $('.search').click(function() {
        $('.search-box').animate({opacity: 0, marginTop:-50});
        $('.search-box').toggleClass('search-box-1');
        $('.search-box-1').animate({opacity: 1, marginTop:0}, 500);
    });
<<<<<<< HEAD
});





=======
});
>>>>>>> development
