import Swiper, { Navigation, Pagination, Scrollbar } from "swiper";
Swiper.use([Navigation, Pagination, Scrollbar]);

$(document).ready(function () {
  $(".js-swiper-container").each(function () {
    const mySwiper = new Swiper(this, {
      slidesPerView: "auto",
      freeMode: true,
      updateOnWindowResize: true,
      uniqueNavElements: true,
      watchSlidesVisibility: true,
      navigation: {
        nextEl: ".js-btn-next",
        prevEl: ".js-btn-prev",
      },
      scrollbar: {
        el: ".js-swiper-scrollbar",
      },
      breakpoints: {
        1280: {
          freeMode: false,
          navigation: {
            nextEl: ".js-btn-next",
            prevEl: ".js-btn-prev",
          },
        },
      },
      on: {
        resize: function () {
          this.update();
        },
      },
    });
  });
});
