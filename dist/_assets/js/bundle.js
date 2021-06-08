/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_viewport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/_viewport */ \"./src/js/modules/_viewport.js\");\n/* harmony import */ var _modules_btnClickFunc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/_btnClickFunc */ \"./src/js/modules/_btnClickFunc.js\");\n/* harmony import */ var _modules_getSearchParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/_getSearchParams */ \"./src/js/modules/_getSearchParams.js\");\n/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/_accordion */ \"./src/js/modules/_accordion.js\");\n/* harmony import */ var _modules_backToTop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/_backToTop */ \"./src/js/modules/_backToTop.js\");\n/* harmony import */ var _modules_checkView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/_checkView */ \"./src/js/modules/_checkView.js\");\n/* harmony import */ var _modules_customSelect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/_customSelect */ \"./src/js/modules/_customSelect.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/_modal */ \"./src/js/modules/_modal.js\");\n/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/_smoothScroll */ \"./src/js/modules/_smoothScroll.js\");\n/* harmony import */ var _modules_stickyHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/_stickyHeader */ \"./src/js/modules/_stickyHeader.js\");\n/* harmony import */ var _modules_swiperSlider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/_swiperSlider */ \"./src/js/modules/_swiperSlider.js\");\n/* harmony import */ var _modules_swiperSlider__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_modules_swiperSlider__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _modules_wowEffects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/_wowEffects */ \"./src/js/modules/_wowEffects.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n$(function () {\n  (0,_modules_viewport__WEBPACK_IMPORTED_MODULE_0__.viewport)();\n  (0,_modules_btnClickFunc__WEBPACK_IMPORTED_MODULE_1__.btnClickFunc)();\n  (0,_modules_smoothScroll__WEBPACK_IMPORTED_MODULE_8__.smoothScroll)();\n  (0,_modules_wowEffects__WEBPACK_IMPORTED_MODULE_11__.wowEffects)();\n  (0,_modules_accordion__WEBPACK_IMPORTED_MODULE_3__.accordion)();\n  (0,_modules_swiperSlider__WEBPACK_IMPORTED_MODULE_10__.swiperSlider)();\n  (0,_modules_customSelect__WEBPACK_IMPORTED_MODULE_6__.customSelect)();\n  (0,_modules_backToTop__WEBPACK_IMPORTED_MODULE_4__.backToTop)();\n  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_7__.modal)();\n});\n$(window).on('load resize scroll', function () {\n  (0,_modules_checkView__WEBPACK_IMPORTED_MODULE_5__.checkView)();\n  (0,_modules_stickyHeader__WEBPACK_IMPORTED_MODULE_9__.stickyHeader)();\n});\n\n//# sourceURL=webpack://npm-scripts-webpack-test/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/_accordion.js":
/*!**************************************!*\
  !*** ./src/js/modules/_accordion.js ***!
  \**************************************/
/*! namespace exports */
/*! export accordion [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"accordion\": function() { return /* binding */ accordion; }\n/* harmony export */ });\nvar accordion = function accordion() {\n  if ($('.accordion').length) {\n    var _accordion = function _accordion(el, multiple) {\n      this.el = el || {};\n      this.multiple = multiple || false;\n      var trigger = this.el.find('.accordion__item__head');\n      trigger.on('click', {\n        el: this.el,\n        multiple: this.multiple\n      }, this.dropdown);\n    };\n\n    _accordion.prototype.dropdown = function (e) {\n      var $el = e.data.el;\n      $this = $(this), $acc_content = $this.parent('.accordion__item').find('.accordion__item__body');\n      $acc_content.slideToggle(); // Show content\n\n      $this.parents('.accordion__item').toggleClass('is-open'); // for custom css display\n\n      !e.data.multiple ? $el.find('.accordion__item__body').not($acc_content).slideUp().parents('.accordion__item').removeClass('is-open') : '';\n    };\n\n    var accordion__field = new _accordion($('.accordion'), true); // Set TRUE - allows to open multiple accordion\n    // Set FALSE - opens only one accordion at a time\n  }\n};\n\n//# sourceURL=webpack://npm-scripts-webpack-test/./src/js/modules/_accordion.js?");

/***/ }),

/***/ "./src/js/modules/_backToTop.js":
/*!**************************************!*\
  !*** ./src/js/modules/_backToTop.js ***!
  \**************************************/
/*! namespace exports */
/*! export backToTop [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"backToTop\": function() { return /* binding */ backToTop; }\n/* harmony export */ });\nvar backToTop = function backToTop() {\n  $('.js-toTop').click(function (e) {\n    e.preventDefault();\n    $('html, body').delay(300).animate({\n      scrollTop: 0\n    }, 800);\n  });\n};\n\n//# sourceURL=webpack://npm-scripts-webpack-test/./src/js/modules/_backToTop.js?");

/***/ }),

/***/ "./src/js/modules/_btnClickFunc.js":
/*!*****************************************!*\
  !*** ./src/js/modules/_btnClickFunc.js ***!
  \*****************************************/
/*! namespace exports */
/*! export btnClickFunc [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"btnClickFunc\": function() { return /* binding */ btnClickFunc; }\n/* harmony export */ });\nvar btnClickFunc = function btnClickFunc() {\n  var $btns = $('.js-btn');\n  $btns.on('click', function (e) {\n    var btnTargetData = $(e.currentTarget).attr('data-btn');\n    var btnAnimationData = $(e.currentTarget).attr('data-animation');\n    var target = $(\"[data-target = \\\"\".concat(btnTargetData, \"\\\"]\"));\n    var btnTargetGroupData = $(e.currentTarget).attr('data-btnGroup');\n    var $sameBtns = $(\"[data-btnGroup = \\\"\".concat(btnTargetGroupData, \"\\\"]\"));\n    var $sameTargets = $(\"[data-targetGroup = \\\"\".concat(btnTargetGroupData, \"\\\"]\"));\n\n    if (btnAnimationData == 'slide') {\n      $(e.currentTarget).toggleClass('is-active');\n      target.slideToggle(300);\n    } else if (btnAnimationData == 'class') {\n      $(e.currentTarget).toggleClass('is-active');\n      target.toggleClass('is-active');\n    } else if (btnAnimationData == 'commonFade') {\n      $sameBtns.toggleClass('is-active');\n      target.fadeToggle(300);\n    } else if (btnAnimationData == 'allClass') {\n      $(e.currentTarget).toggleClass('is-active');\n      $sameTargets.addClass('is-active');\n    } else if (btnAnimationData == 'tab') {\n      $sameBtns.not($(e.currentTarget)).removeClass('is-active');\n      $(e.currentTarget).addClass('is-active');\n      $sameTargets.removeClass('is-active');\n      target.addClass('is-active');\n    } else if (btnAnimationData == 'pageTop') {\n      $('body, html').animate({\n        scrollTop: 0\n      }, 700);\n      return false;\n    } else {\n      console.log($(e.currentTarget));\n      $(e.currentTarget).toggleClass('is-active');\n    }\n  });\n};\n\n//# sourceURL=webpack://npm-scripts-webpack-test/./src/js/modules/_btnClickFunc.js?");

/***/ }),

/***/ "./src/js/modules/_checkView.js":
/*!**************************************!*\
  !*** ./src/js/modules/_checkView.js ***!
  \**************************************/
/*! namespace exports */
/*! export checkView [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkView\": function() { return /* binding */ checkView; }\n/* harmony export */ });\nvar checkView = function checkView() {\n  var target = $('.js-checkView');\n  var viewport = $(window).scrollTop() + $(window).height();\n  $.each(target, function () {\n    var el = $(this);\n    var el_position = el.offset().top;\n    viewport > el_position ? el.addClass('is-active') : el.removeClass('is-active');\n  });\n};\n\n//# sourceURL=webpack://npm-scripts-webpack-test/./src/js/modules/_checkView.js?");

/***/ }),

/***/ "./src/js/modules/_customSelect.js":
/*!*****************************************!*\
  !*** ./src/js/modules/_customSelect.js ***!
  \*****************************************/
/*! namespace exports */
/*! export customSelect [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"customSelect\": function() { return /* binding */ customSelect; }\n/* harmony export */ });\nvar customSelect = function customSelect() {\n  var custom_select = $('.custom-select');\n\n  if (custom_select.length) {\n    var x, i, j, selElmnt, a, b, c;\n\n    (function () {\n      var closeAllSelect = function closeAllSelect(elmnt) {\n        /*a function that will close all select boxes in the document, except the current select box:*/\n        var x,\n            y,\n            i,\n            arrNo = [];\n        x = document.getElementsByClassName('select-items');\n        y = document.getElementsByClassName('select-selected');\n\n        for (i = 0; i < y.length; i++) {\n          if (elmnt == y[i]) {\n            arrNo.push(i);\n          } else {\n            y[i].classList.remove('select-arrow-active');\n          }\n        }\n\n        for (i = 0; i < x.length; i++) {\n          if (arrNo.indexOf(i)) {\n            x[i].classList.add('select-hide');\n          }\n        }\n      };\n      /*if the user clicks anywhere outside the select box, then close all select boxes:*/\n\n\n      /*look for any elements with the class \"custom-select\":*/\n      x = document.getElementsByClassName('custom-select');\n\n      for (i = 0; i < x.length; i++) {\n        selElmnt = x[i].getElementsByTagName('select')[0];\n        /*for each element, create a new DIV that will act as the selected item:*/\n\n        a = document.createElement('DIV');\n        a.setAttribute('class', 'select-selected');\n        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;\n        x[i].appendChild(a);\n        /*for each element, create a new DIV that will contain the option list:*/\n\n        b = document.createElement('DIV');\n        b.setAttribute('class', 'select-items select-hide');\n\n        for (j = 1; j < selElmnt.length; j++) {\n          /*for each option in the original select element, create a new DIV that will act as an option item:*/\n          c = document.createElement('DIV');\n          c.innerHTML = selElmnt.options[j].innerHTML;\n          c.addEventListener('click', function (e) {\n            /*when an item is clicked, update the original select box and the selected item:*/\n            var y, i, k, s, h;\n            s = this.parentNode.parentNode.getElementsByTagName('select')[0];\n            h = this.parentNode.previousSibling;\n\n            for (i = 0; i < s.length; i++) {\n              if (s.options[i].innerHTML == this.innerHTML) {\n                s.selectedIndex = i;\n                h.innerHTML = this.innerHTML;\n                y = this.parentNode.getElementsByClassName('same-as-selected');\n\n                for (k = 0; k < y.length; k++) {\n                  y[k].removeAttribute('class');\n                }\n\n                this.setAttribute('class', 'same-as-selected');\n                break;\n              }\n            }\n\n            h.click();\n          });\n          b.appendChild(c);\n        }\n\n        x[i].appendChild(b);\n        a.addEventListener('click', function (e) {\n          /*when the select box is clicked, close any other select boxes and open/close the current select box:*/\n          e.stopPropagation();\n          closeAllSelect(this);\n          this.nextSibling.classList.toggle('select-hide');\n          this.classList.toggle('select-arrow-active');\n        });\n      }\n\n      document.addEventListener('click', closeAllSelect);\n    })();\n  }\n};\n\n//# sourceURL=webpack://npm-scripts-webpack-test/./src/js/modules/_customSelect.js?");

/***/ }),

/***/ "./src/js/modules/_getSearchParams.js":
/*!********************************************!*\
  !*** ./src/js/modules/_getSearchParams.js ***!
  \********************************************/
/*! namespace exports */
/*! export getSearchParams [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getSearchParams\": function() { return /* binding */ getSearchParams; }\n/* harmony export */ });\nvar getSearchParams = function getSearchParams(k) {\n  var p = {};\n  location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (s, k, v) {\n    p[k] = v;\n  });\n  return k ? p[k] : p; // Usage:\n  // let x = getSearchParams('parameter_name') - returns specific param value\n  // let x = getSearchParams(); - returns an array\n};\n\n//# sourceURL=webpack://npm-scripts-webpack-test/./src/js/modules/_getSearchParams.js?");

/***/ }),

/***/ "./src/js/modules/_modal.js":
/*!**********************************!*\
  !*** ./src/js/modules/_modal.js ***!
  \**********************************/
/*! namespace exports */
/*! export modal [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modal\": function() { return /* binding */ modal; }\n/* harmony export */ });\nvar modal = function modal() {\n  var modal = $('.modal');\n  var modal_box = $('.modal__box');\n  var open_btn = $('.js-openModal');\n  var close_btn = $('.modal__box__closeButton');\n  open_btn.click(function () {\n    modal.addClass('is-open');\n    setTimeout(function () {\n      modal_box.addClass('is-active');\n    }, 300);\n  });\n  close_btn.click(function () {\n    modal_box.removeClass('is-active');\n    setTimeout(function () {\n      modal.removeClass('is-open');\n    }, 600);\n  });\n};\n\n//# sourceURL=webpack://npm-scripts-webpack-test/./src/js/modules/_modal.js?");

/***/ }),

/***/ "./src/js/modules/_smoothScroll.js":
/*!*****************************************!*\
  !*** ./src/js/modules/_smoothScroll.js ***!
  \*****************************************/
/*! namespace exports */
/*! export smoothScroll [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"smoothScroll\": function() { return /* binding */ smoothScroll; }\n/* harmony export */ });\nvar smoothScroll = function smoothScroll() {\n  $('.js-scroll').on('click', function (e) {\n    if (this.hash !== '') {\n      e.preventDefault();\n      $('html, body').animate({\n        scrollTop: $(this.hash).offset().top\n      }, 800, 'swing', function () {\n        window.location.hash = '';\n      });\n    }\n  });\n};\n\n//# sourceURL=webpack://npm-scripts-webpack-test/./src/js/modules/_smoothScroll.js?");

/***/ }),

/***/ "./src/js/modules/_stickyHeader.js":
/*!*****************************************!*\
  !*** ./src/js/modules/_stickyHeader.js ***!
  \*****************************************/
/*! namespace exports */
/*! export stickyHeader [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stickyHeader\": function() { return /* binding */ stickyHeader; }\n/* harmony export */ });\nvar stickyHeader = function stickyHeader() {\n  $(window).scrollTop() > 0 ? $('header').addClass('is-sticky') : $('header').removeClass('is-sticky'); // add the sticky settings thru css\n};\n\n//# sourceURL=webpack://npm-scripts-webpack-test/./src/js/modules/_stickyHeader.js?");

/***/ }),

/***/ "./src/js/modules/_swiperSlider.js":
/*!*****************************************!*\
  !*** ./src/js/modules/_swiperSlider.js ***!
  \*****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (function() {

eval("var swiperSlider = function swiperSlider() {\n  var slider01 = new Swiper('.swiper-container', {\n    direction: 'horizontal',\n    // スライド方向\n    autoHeight: false,\n    // 高さがスライドに合わせて変わる\n    nested: false,\n    // スライダーをネストできる\n    grabCursor: false,\n    // スライダーを掴むカーソル表示\n    watchOverflow: true,\n    // スライドが1枚しかなかったらスライダー機能をなくす\n    freeMode: false,\n    //スライドが停止しなくなる\n    autoplay: {\n      delay: 4000,\n      // 自動スライド・1スライド滞在時間\n      disableOnInteraction: false,\n      // ユーザーがスライド操作した後もautoplay続行\n      waitForTransition: true // スライドの移動を待ったあとに自動再生する\n\n    },\n    speed: 2000,\n    // スライド切替スピード\n    loop: false,\n    // ループ(クローンスライドが作られる)\n    spaceBetween: 0,\n    // スライド間のmarginは0px\n    slidesPerView: 1,\n    // 1スライド表示\n    slidesPerGroup: 1,\n    // 1スライドで1グループ\n    centeredSlides: false,\n    // スライドが中央からスタートする\n    observer: true,\n    // 初期状態でスライダーが非表示でも動くようにする\n    observeParents: true,\n    // 初期状態でスライダーが非表示でも動くようにする\n    preloadImages: false,\n    // 画像の事前読み込みを禁止\n    lazy: true,\n    // 画像の読み込み遅延\n    effect: 'slide',\n    // エフェクト\n    fadeEffect: {\n      crossFade: true\n    },\n    pagination: {\n      el: '.swiper-pagination',\n      // ページャー\n      clickable: true // ページャークリッカブル\n\n    },\n    navigation: {\n      prevEl: '.swiper-button-prev',\n      // 前へボタン\n      nextEl: '.swiper-button-next' // 次へボタン\n\n    },\n    breakpoints: {\n      1000: {},\n      767: {}\n    }\n  });\n};\n\n//# sourceURL=webpack://npm-scripts-webpack-test/./src/js/modules/_swiperSlider.js?");

/***/ }),

/***/ "./src/js/modules/_viewport.js":
/*!*************************************!*\
  !*** ./src/js/modules/_viewport.js ***!
  \*************************************/
/*! namespace exports */
/*! export viewport [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"viewport\": function() { return /* binding */ viewport; }\n/* harmony export */ });\n// VIEWPORT MANIPULATION\nvar viewport = function viewport() {\n  var _ua = function (u) {\n    return {\n      Tablet: u.indexOf('windows') != -1 && u.indexOf('touch') != -1 && u.indexOf('tablet pc') == -1 || u.indexOf('ipad') != -1 || u.indexOf('android') != -1 && u.indexOf('mobile') == -1 || u.indexOf('firefox') != -1 && u.indexOf('tablet') != -1 || u.indexOf('kindle') != -1 || u.indexOf('silk') != -1 || u.indexOf('playbook') != -1,\n      Mobile: u.indexOf('windows') != -1 && u.indexOf('phone') != -1 || u.indexOf('iphone') != -1 || u.indexOf('ipod') != -1 || u.indexOf('android') != -1 && u.indexOf('mobile') != -1 || u.indexOf('firefox') != -1 && u.indexOf('mobile') != -1 || u.indexOf('blackberry') != -1\n    };\n  }(window.navigator.userAgent.toLowerCase());\n\n  if (_ua.Tablet) {\n    $(\"meta[name='viewport']\").attr('content', 'width=767');\n  } else {\n    $(\"meta[name='viewport']\").attr('content', 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=2.0,user-scalable=yes');\n  }\n};\n\n//# sourceURL=webpack://npm-scripts-webpack-test/./src/js/modules/_viewport.js?");

/***/ }),

/***/ "./src/js/modules/_wowEffects.js":
/*!***************************************!*\
  !*** ./src/js/modules/_wowEffects.js ***!
  \***************************************/
/*! namespace exports */
/*! export wowEffects [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"wowEffects\": function() { return /* binding */ wowEffects; }\n/* harmony export */ });\nvar wowEffects = function wowEffects() {\n  var ua = window.navigator.userAgent;\n\n  var wowInit = function wowInit() {\n    var wow = new WOW({\n      boxClass: 'wow',\n      animateClass: 'animated',\n      offset: 100,\n      mobile: true,\n      live: true,\n      callback: function callback(box) {},\n      scrollContainer: null\n    });\n    wow.init();\n  }; // IE Browser\n\n\n  if (ua.indexOf('Trident') != -1 || ua.indexOf('MSIE') != -1) {\n    $(window).on('load', function (e) {\n      wowInit();\n    });\n  } else {\n    wowInit();\n  }\n};\n\n//# sourceURL=webpack://npm-scripts-webpack-test/./src/js/modules/_wowEffects.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;