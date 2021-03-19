$(document).ready(function () {
  $(".js-chart-reviews").each(function () {
    const $this = $(this);
    const $scaleCurrent = $this.find(".js-reviews-scale");
    const $ratingAmount = $this.find(".js-rating-amount");

    const amountReviews = $this.data("reviews-amount");
    const currentRating = $this.data("current-rating");

    $scaleCurrent.css({
      width: (currentRating / amountReviews) * 100 + "%",
    });
    if (currentRating < 1) {
      $ratingAmount.addClass("empty");
    }
  });
});
