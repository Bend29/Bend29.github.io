import "magnific-popup";
$(document).ready(function () {
  $(".js-popup-btn").each(function () {
    $(this).magnificPopup({
      tLoading: false,
      overflowY: "auto",
      fixedContentPos: false,
    });
  });

  $(".js-pop-up").each(function () {
    const $self = $(this);
    const closeBtn = $self.find(".js-pop-up-close");
    closeBtn.on("click", function () {
      $.magnificPopup.close();
    });
  });
});
