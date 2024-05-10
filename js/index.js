
// 내용 시작

window.addEventListener("wheel", function(e){
    e.preventDefault();
},{passive : false});


var mHtml = $("html");
var page = 1;


mHtml.animate({scrollTop : 0},10);


$(window).on("wheel", function(e) {
    if(mHtml.is(":animated")) return;
    if(e.originalEvent.deltaY > 0) {
        if(page == 6) return;
        page++;
    } else if(e.originalEvent.deltaY < 0) {
        if(page == 1) return;
        page--;
    }
    var posTop =(page-1) * $(window).height();
    mHtml.animate({scrollTop : posTop});
})

// 배경이미지 비율유지

$(function(){
    var container = $('.full_bg');
    $(window).resize(function(){
        var currentWindow = $(this),
        windowWidth = currentWindow.width(),
        windowHeight = currentWindow.height(),
        broswerRatio = windowWidth / windowHeight,
        imageRetio = 1280/620;

        if(imageRetio > broswerRatio){
            container.css({
                height:"100%",
                width:windowHeight * imageRetio,
                left: -(windowHeight * imageRetio-windowWidth)/2,
                top : 0
            });
        }else{
            container.css({
                height: windowHeight / imageRetio,
                width: "100%",
                left: 0,
                top : -(windowHeight - windowHeight / imageRetio)/2
            });
        }
    });

    $(window).trigger("resize");
});


// 다운 메뉴
var down_menu_button = document.getElementById("down_menu_button");
var down_menu_close_button = document.getElementById("down_menu_close_button");
var down_menu = document.getElementById("down_menu");
var menu_position = 0;

function menu_slide(){
    menu_position++;
    if(menu_position % 2 == 0){
        down_menu.classList.remove("open");
    }else{
        down_menu.classList.add("open");
    }
  }

down_menu_button.addEventListener('click', menu_slide);
down_menu_close_button.addEventListener('click', menu_slide);



// 왼쪽 퀵 메뉴
(function (global, $) {

    var $menu     = $('#left_menu_all li#left_menu'),
        $contents = $('.section'),
        $doc      = $('html, body');
    $(function () {
        // 해당 섹션으로 스크롤 이동
        $menu.on('click','a', function(e){
            var $target = $(this).parent(),
                idx     = $target.index(),
                section = $contents.eq(idx),
                offsetTop = section.offset().top;
            $doc.stop()
                    .animate({
                        scrollTop :offsetTop
                    }, 0);
            return false;
        });
    });

    // menu class 추가
    $(window).scroll(function(){
        var scltop = $(window).scrollTop();
        $.each($contents, function(idx){
            var $target   = $contents.eq(idx),
                targetTop = $target.offset().top;

            if (targetTop <= scltop) {
                $menu.removeClass('shine');
                $menu.eq(idx).addClass('shine');
            }
            if (!(0 <= scltop)) {
                $menu.removeClass('shine');
            }
        })

    });
    
}(window, window.jQuery));




// 오른쪽 퀵 메뉴

var quickUp = document.getElementById("quick_menu_text");

function quickDown_button(){
    quickUp.innerText = ("SCROLL\n"+"DOWN");
}
function quickUp_button(){
    quickUp.innerText = ("SCROLL\n"+"UP");
}

$("#quick_menu_text").click(function(){
    window.scrollTo({top : 0, behavior: 'smooth'});
    
    page = 1;
});

// story 시작

let observer = new IntersectionObserver((e)=>{
    e.forEach((brandStory)=>{
        if(brandStory.isIntersecting){
            brandStory.target.style.opacity = 1;

            brandImg_01.style.width = '400px';
        }else{
            brandStory.target.style.opacity = 0;

            brandImg_01.style.width = '400px';
        }
    });
});


let brandStory = document.querySelectorAll(".brand_story");
observer.observe(brandStory[0]);
observer.observe(brandStory[1]);
observer.observe(brandStory[2]);

let brandImg_01 = document.querySelector(".brand_img_01");
observer.observe(brandImg_01);


// 브랜드 스토리 세번째 배경이미지 비율유지

$(function(){
    var container_02 = $('.full_bg_02');
    $(window).resize(function(){
        var currentWindow = $(this),
        windowWidth = currentWindow.width(),
        windowHeight = currentWindow.height(),
        broswerRatio = windowWidth / windowHeight,
        imageRetio_02 = 1280/520;

        if(imageRetio_02 > broswerRatio){
            container_02.css({
                height:"100%",
                width:windowHeight * imageRetio_02,
                left: -(windowHeight * imageRetio_02-windowWidth)/2,
                top : 0
            });
        }else{
            container_02.css({
                height: windowHeight / imageRetio_02,
                width: "100%",
                left: 0,
                top : -(windowHeight - windowHeight / imageRetio_02)/2
            });
        }
    });

    $(window).trigger("resize");
});



// we made 시작
const slider = document.querySelector('#mover');
  let isMouseDown = false;
  let startX, scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    slider.classList.add('active');

    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  
  slider.addEventListener('mouseleave', () => {
    isMouseDown = false;
    slider.classList.remove('active');
  });
  
  slider.addEventListener('mouseup', () => {
    isMouseDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;

    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1;
    slider.scrollLeft = scrollLeft - walk;
  });