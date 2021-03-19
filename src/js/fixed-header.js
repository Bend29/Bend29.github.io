$(document).ready(function () {
  $(".js-header").each(function () {
    const $self = $(this);
    const headerRowHeight = $self.find(".js-header-wrapper").innerHeight();
    const setFixedClass = () => {
      let topPosition = $self.offset().top;

      if ($(document).scrollTop() > topPosition) {
        $self.addClass("fixed");
        $self.css("height", headerRowHeight);
      } else {
        $self.removeClass("fixed");
        $self.css("height", 'auto');
      }
    };
    setFixedClass();
    $(document).on("scroll", { passive: true }, function () {
      setFixedClass();
    });
  });
});
