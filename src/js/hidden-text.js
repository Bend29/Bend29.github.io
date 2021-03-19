$(document).ready(function () {
  $(".js-hidden-text").each(function () {
    const $self = $(this);

    let viewportWindow = document.body.clientWidth;
    let visibleContentHeight = 0;

    const getStartVisibleHeight = () => {
      if (viewportWindow < 768) {
        visibleContentHeight = $self.data("sm-height");
      } else if (viewportWindow >= 768 && viewportWindow < 1024) {
        visibleContentHeight = $self.data("md-height");
      } else if (viewportWindow >= 1024) {
        visibleContentHeight = $self.data("lg-height");
      }
      if ($self.innerHeight() >= visibleContentHeight) {
        $self.addClass('hidden');
        $self.css({
          'max-height': visibleContentHeight,
        })
      } else {
        $self.removeClass('hidden');
        $self.css({
          'max-height': '100%',
        })
      }
    };

    getStartVisibleHeight();

    $(window).on("resize orientationchange", { passive: false }, function () {
      viewportWindow = $(window).width();
      getStartVisibleHeight();
    });
  });
});
