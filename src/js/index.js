import { viewport } from './modules/_viewport';
import { btnClickFunc } from './modules/_btnClickFunc';
import { getSearchParams } from './modules/_getSearchParams';
import { accordion } from './modules/_accordion';
import { backToTop } from './modules/_backToTop';
import { checkView } from './modules/_checkView';
import { customSelect } from './modules/_customSelect';
import { modal } from './modules/_modal';
import { smoothScroll } from './modules/_smoothScroll';
import { stickyHeader } from './modules/_stickyHeader';
import { swiperSlider } from './modules/_swiperSlider';
import { wowEffects } from './modules/_wowEffects';

$(function () {
  viewport();
  btnClickFunc();
  smoothScroll();
  wowEffects();
  accordion();
  swiperSlider();
  customSelect();
  backToTop();
  modal();
});

$(window).on('load resize scroll', function () {
  checkView();
  stickyHeader();
});
