$(document).ready(function () {
  $(".js-warning").each(function () {
    const $this = $(this);
    const $closeBtn = $this.find(".js-warning-close");

    $closeBtn.on("click", function () {
      $this.hide();
    });
  });
});
