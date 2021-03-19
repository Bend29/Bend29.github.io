import PerfectScrollbar from "perfect-scrollbar";

$(document).ready(function () {
  $(".js-spoiler").each(function () {
    const $self = $(this);
    const $spoilerButton = $(this).find(".js-spoiler-btn");
    const $spoilerContent = $(this).find(".js-spoiler-content");
    const $spoilerContainer = $(this).find(".js-spoiler-container");
    let ps;
    const spoilerIsOpenedClass = "opened";
    /**
     * Открыть спойлер
     */
    const openSpoiler = () => {
      $self.addClass(spoilerIsOpenedClass);
      $spoilerContainer.css({
        height: $spoilerContent.outerHeight(true),
      });

      if ($spoilerContent.hasClass("js-scroll") && $(window).width() >= 1024) {
        ps = new PerfectScrollbar($spoilerContent[0], {
          wheelPropagation: true,
        });
        $spoilerContainer.on("wheel", { passive: false }, function (e) {
          e.preventDefault();
          e.stopPropagation();
        });
      }
    };

    $(window).on("resize orientationchange", function () {
      if ($self.hasClass(spoilerIsOpenedClass)) {
        if (ps) {
          ps.update();
        }
        $spoilerContainer.css({
          height: $spoilerContent.outerHeight(true),
        });
      }

      if ($self.hasClass("js-no-spoiler-lg") && $(window).width() >= 1024) {
        $self.removeClass(spoilerIsOpenedClass);
        $spoilerContainer.css({
          height: 0,
        });
        openSpoiler();

      }
    });
    /**
     * Закрыть спойлер
     */
    const closeSpoiler = () => {
      $self.removeClass(spoilerIsOpenedClass);
      $spoilerContainer.css({
        height: 0,
      });
      if (ps) {
        ps.destroy();
        $spoilerContainer.off("wheel");
      }
    };

    /**
     * Переключение закрытого/открытого состояния спойлера
     */
    const toggleSpoiler = () => (
      !$self.hasClass(spoilerIsOpenedClass) ? openSpoiler() : closeSpoiler());

    if ($self.hasClass(spoilerIsOpenedClass)) {
      openSpoiler();
    }
    /**
     * Переключить состояние спойлера по клику на кнопку
     */
    $spoilerButton.on("click", function () {
      if ($self.hasClass("js-no-spoiler-lg") && $(window).width() >= 1024) {
        return;
      }
      toggleSpoiler();
    });
  });
});
