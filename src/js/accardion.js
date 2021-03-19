$(document).ready(function () {
  $(".js-accordion").each(function () {
    const $self = $(this);
    const $item = $(this).find(".js-accordion__item");
    const container = ".js-accordion-container";
    const content = ".js-accordion-container-wrapper";

    const activeClass = "active";

    $item.each(function () {
      $(this).on("click", function (event) {
        event.stopPropagation()
        const $current = $(this);
      if ($current.hasClass(activeClass) ) {
        if(event.target === $current.find(content)[0] || event.target === $current.find(container)[0]){
          return
        }
        $current.removeClass(activeClass);
        $current.find(container).css({
          height: 0,
        });
      }
      else {
          $self.find(".js-accordion__item").removeClass(activeClass).find(container).css({
            height: 0,
          });
          $current.addClass(activeClass);
          $current.find(container).css({
            height: $(this).find(content).outerHeight(true),
          });

      }
      });
    });
  });
});
