$(document).ready(function () {
  $(".js-rating-form").each(function () {
    const $this = $(this);
    const $input = $this.find(".js-rating-input");
    const $tooltip = $this.find(".js-rating-tooltip");
    const $label = $this.find(".js-rating-label");

    $input.on("click", function () {
      $(this).attr("checked", true);
      if ($(this).attr("checked")) {
        $input.each(function () {
          $(this).prop("disabled", true);
        });
        $label.addClass("disabled");
        $tooltip.addClass("show-tooltip");
        setTimeout(() => {
          $tooltip.removeClass("show-tooltip");
        },1500);
      }
    });
  });
});
