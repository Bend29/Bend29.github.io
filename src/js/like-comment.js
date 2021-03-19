$(document).ready(function () {
  $(".js-like-comment").each(function () {
    const $self = $(this);
    const $counter = $self.find(".js-like-amount");
    $self.on("click", function () {
      const amount = $counter.data("amount");
      $counter.empty().text(amount + 1);

      $counter.data("amount", amount + 1);
      $self.prop("disabled", true);
      $self.addClass("disabled");
      $self
        .closest(".js-help-like")
        .find(".js-like-comment")
        .each(function () {
          $(this).addClass("disabled").prop("disabled", true);
        });
    });
  });
});
