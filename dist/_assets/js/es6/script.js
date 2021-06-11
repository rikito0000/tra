function smoothScroll() {
  $('a[href^="#"]').click(function() {
    const speed = 600;
    const href = $(this).attr('href');
    const target = $(href == '#' || href == '' ? 'html' : href);
    const position = target.offset().top;
    $('body, html').delay(200).animate({scrollTop: position}, speed, 'swing');
    return false;
  });
}

var btnClickFunc = function btnClickFunc() {
  var $btns = $(".js-btn");
  $btns.on("click", function (e) {
    var btnTargetData = $(e.currentTarget).attr("data-btn");
    var btnAnimationData = $(e.currentTarget).attr("data-animation");
    var target = $('[data-target = "'.concat(btnTargetData, '"]'));
    var btnTargetGroupData = $(e.currentTarget).attr("data-btnGroup");
    var $sameBtns = $('[data-btnGroup = "'.concat(btnTargetGroupData, '"]'));
    var $sameTargets = $(
      '[data-targetGroup = "'.concat(btnTargetGroupData, '"]')
    );

    if (btnAnimationData == "slide") {
      $(e.currentTarget).toggleClass("js-active");
      target.slideToggle(300);
    } else if (btnAnimationData == "class") {
      $(e.currentTarget).toggleClass("js-active");
      target.toggleClass("js-active");
    } else if (btnAnimationData == "singleActiveClass") {
      $(e.currentTarget).toggleClass("js-active");
      $sameBtns.not($(e.currentTarget)).removeClass("js-active");
      target.toggleClass("js-active");
      $sameTargets.not(target).removeClass("js-active");
    } else if (btnAnimationData == "fade") {
      $(e.currentTarget).toggleClass("js-active");
      target.fadeToggle(300);
    } else if (btnAnimationData == "commonFade") {
      $sameBtns.toggleClass("js-active");
      target.fadeToggle(300);
    } else if (btnAnimationData == "allClass") {
      $(e.currentTarget).toggleClass("js-active");
      $sameTargets.addClass("js-active");
    } else if (btnAnimationData == "tab") {
      $sameBtns.not($(e.currentTarget)).removeClass("js-active");
      $(e.currentTarget).addClass("js-active");
      $sameTargets.removeClass("js-active");
      target.addClass("js-active");
    } else if (btnAnimationData == "pageTop") {
      $("body, html").animate(
        {
          scrollTop: 0,
        },
        700
      );
      return false;
    } else {
      $(e.currentTarget).toggleClass("js-active");
    }
  });
};

function swiperSlider() {
  if ($(".mainContent").length) {
    var screenWidth = $(window).width();
    var topPageFvSecSlider = new Swiper(".topPageFvSec__sliderArea", {
      autoplay: {
        delay: 4000, // 自動スライド・1スライド滞在時間
      },
      speed: 2600, // スライド切替スピード
      loop: true, // ループ(クローンスライドが作られる)
      loopedSlides: 7, // ループする数(下のスライド枚数に合わせている)
      effect: "fade", // エフェクト
    });
  topPageFvSecSlider.init();
  }
};


function headerNav() {
  var $win = $(window);
  var $header = $(".siteHeader");
  var $headerSp = $(".siteHeaderSP");
  var $headerSpLogo = $(".topPage .siteHeaderSP__logo");
  var animationClass = "is-animation";

  $win.on("load scroll", function () {
    if ($(".mainContent").length) {
        var value = $(this).scrollTop();
        if (value > 300) {
          $header.addClass(animationClass);
          $headerSp.addClass(animationClass);
          $headerSpLogo.addClass(animationClass)
        } else {
          $header.removeClass(animationClass);
          $headerSp.removeClass(animationClass);
          $headerSpLogo.removeClass(animationClass);
        }

    } else {
      $header.addClass(animationClass);
      $headerSp.addClass(animationClass);
    }
  });

};

function anchorLink() {
    // 画像が読み込み終わってから
    // $(window).on("load", function () {
    //htmlが読み込み終わってから
      $(document).ready(function(){
      if ($(".lowerContent").length) {
        var url = $(location).attr("href");
        if (url.indexOf("#") != -1) {
          var anchor = url.split("#");
          var target = $("#" + anchor[anchor.length - 1]);
          if (target.length) {
            var pos = Math.floor(target.offset().top) - 73;
            $("html, body").animate({ scrollTop: pos }, 500);
          }
        }
      }
    });
}

function headerModal() {
  var nav_w = $(".siteHeaderSP__nav__wrapper");
  var nav = $(".siteHeaderSP__nav");

  $(".js-btn").click(function () {
    nav_w.fadeIn();
    nav.fadeIn();
  });
  $(".js-closeBtn").click(function () {
    nav_w.fadeOut();
    nav.fadeOut();
  });
}

$(function () {
  btnClickFunc();
  swiperSlider();
  headerNav();
  anchorLink();
  headerModal();
});
