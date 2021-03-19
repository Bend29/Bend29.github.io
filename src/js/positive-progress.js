$(document).ready(function () {
  $(".js-positive-progress").each(function () {
    const $this = $(this);
    const allAssessment = $this.data("assessment");

    const $positiveRow = $this.find(".js-positive-row");
    const $positiveRowBenween = $this.find(".js-positive-row-between");
    const positiveValue = $this.find(".js-positive-value").data("pos-assessment");

    const positiveAmountValue = (positiveValue / allAssessment) * 100;
    $positiveRow.css({
      width: positiveAmountValue + "%",
    });
    $positiveRowBenween.css({
      left: positiveAmountValue + "%",
    });
  });
});
