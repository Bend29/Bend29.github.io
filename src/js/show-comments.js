$(document).ready(function () {
  $(".js-comments").each(function () {
    const $self = $(this);
    const list = $self.find(".js-comments__list");
    const items = list.find(".js-comments__item");
    const $button = $self.find(".js-comments__btn");
    const $buttonWrapper = $self.find(".js-comments__button-wrapper");
    let currentIndex = 0;
    const SHOW_ITEMS_NUMBER = $self.data('show-items-number');

    const hideAllComment = () => {
      items.each(function () {
        $(this).addClass("hidden");
      });
    };
    const showChunkComments = () => {
      const sliceArr = items.slice(currentIndex, currentIndex + SHOW_ITEMS_NUMBER);
      sliceArr.each(function () {
        $(this).removeClass("hidden");
      });
      currentIndex = currentIndex + SHOW_ITEMS_NUMBER <= items.length - 1 ? currentIndex + SHOW_ITEMS_NUMBER : currentIndex;
    };

    const hideButton = () => {
      if (!items.hasClass('hidden')) {
        $buttonWrapper.hide();
      }
    }

    hideAllComment();
    showChunkComments();
    hideButton();

    $button.on("click", function (event) {
      event.preventDefault();
      showChunkComments();
      hideButton();
    });
  });
});
