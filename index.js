//導覽列背景
$(window).scroll(function() {
    if($(window).scrollTop() >10) {
        $(".navbar").addClass("navbar-top")
    } else {
        $(".navbar").removeClass("navbar-top")
    }
})

$(window).scroll(function() {
    if($(window).scrollTop() < 650) {
        $(".area1").addClass("active")
    } else {
        $(".area1").removeClass("active")
    }
})
$(window).scroll(function() {
    if($(window).scrollTop() > 650 && $(window).scrollTop() < 1300) {
        $(".area2").addClass("active")
    } else {
        $(".area2").removeClass("active")
    }
})
$(window).scroll(function() {
    if($(window).scrollTop() > 1300 && $(window).scrollTop() < 2400) {
        $(".area3").addClass("active")
    } else {
        $(".area3").removeClass("active")
    }
})
$(window).scroll(function() {
    if($(window).scrollTop() > 2400) {
        $(".area4").addClass("active")
    } else {
        $(".area4").removeClass("active")
    }
})
//錨點
// $(".bi-arrow-down-circle").click(function() {
//     $('html', 'body').animate({
//         scrollTop: $($(this).attr('href')).offset().top
//     }, 1000, 'linear')
// })

let scroll = document.querySelector(".bi-arrow-down-circle")
scroll.addEventListener('click', () => {
    console.log('test')
    window.scrollTo({
        top: 680,
        left: 100,
        behavior: 'smooth'
      });
})

//個人技能淡出淡入效果
$("#front").on("click",function() {
    $(this).toggleClass("active")
    $(".name_card").css("width", "600px")
    $(".front").toggle(1000, function() {
        if($(".front").css('display') == 'none' && $(".back").css('display') == 'none' && $(".database").css('display') == 'none') {
            $(".name_card").css("width", "300px")
        }
    }) 
})
$("#back").on("click",function() {
    $(this).toggleClass("active")
    $(".name_card").css("width", "600px")
    $(".back").toggle(1000, function() {
        if($(".front").css('display') == 'none' && $(".back").css('display') == 'none' && $(".database").css('display') == 'none') {
            $(".name_card").css("width", "300px")
        }      
    })
})
$("#database").on("click",function() {
    $(this).toggleClass("active")
    $(".name_card").css("width", "600px")
    $(".database").toggle(1000, function() {
        if($(".front").css('display') == 'none' && $(".back").css('display') == 'none' && $(".database").css('display') == 'none') {
            $(".name_card").css("width", "300px")
        }     
    })    
})

