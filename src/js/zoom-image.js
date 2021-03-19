(function ($) {
  /**
   * Галерея в magnific-popup
   */
  $.fn.zoomGallery = function () {
    $(this).magnificPopup({
      delegate: ".js-zoom-image",
      type: "image",
      tLoading: "",
      mainClass: "mfp-fade zoom-popup",
      fixedContentPos: true,
      modal: false,
      tClose: "",
      midClick: false,
      closeOnBgClick: true,
      gallery: {
        enabled: true,
        navigateByImgClick: false,
        preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
        tPrev: "",
        tNext: "",
        closeOnBgClick: true,
      },
      cursor: "mfp-zoom-out-cur",
      image: {
        markup: `<div class="mfp-figure js-mfp-figure">
       <div class="zoom-popup__wrapper jz-zoom-image-wrapper">
         <div class="mfp-close zoom-popup__btn-close"></div>
        <div class="mfp-img mfp-prevent-close"></div>
        <div class="mfp-preloader"></div>
        </div>
       </div>`,
      },
      callbacks: {
        imageLoadComplete: function () {
          const self = this;
          setTimeout(function () {
            self.wrap.addClass("mfp-image-loaded");
          }, 200);
        },
        open: function () {
          const $instanceContent = this.contentContainer;
          const $arrows = this.container.find(".mfp-arrow");
          const $btnClose = $instanceContent.find(".mfp-close");
          const preventCLoseClass = "mfp-prevent-close";
          $arrows.each(function () {
            $(this).append(
              `<div class="zoom-popup__arrow mfp-prevent-close"><svg class="i-arrow mfp-prevent-close"><use xlink:href="img/icons.svg#icon_arrow-go-big"></use></svg></div>`
            );
            $(this).addClass(preventCLoseClass);
          });
          $btnClose.empty().append(`<svg class="zoom-popup__icon-close"><use xlink:href="img/icons.svg#icon_close"></use></svg>`);
        },
        change: function () {
          this.wrap.removeClass("mfp-image-loaded");
          const $picture = this.contentContainer.find(".jz-zoom-image-wrapper");
          let $counter = $picture.find(".zoom-popup__counter");
          const counterText = `${this.currItem.index + 1} из ${this.items.length}`;
          if ($counter.length) {
            $counter.text(counterText);
          } else {
            $picture.append(`<div class="zoom-popup__counter mfp-prevent-close">${counterText}</div>`);
          }
        },

        close: function () {
          this.wrap.removeClass("mfp-image-loaded");
        },
      },
    });
  };
})(jQuery);
