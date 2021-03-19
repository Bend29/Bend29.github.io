import Readmore from "readmore-js";
$(document).ready(function () {
  $(".js-spoiler-breaking").each(function () {
    const $self = $(this);

    let viewportWidth = $(window).width();

    let $itemsSliceAmount;
    let $itemsSliceAmountHeight = $self.find(".js-breaking-item");

    let amountItems;
    let heightItem = 0;

    const $items = $self.find(".js-breaking-item");

    const tabletBreakpoint = viewportWidth >= 768 && viewportWidth < 1024;
    const desktopBreakpoint = viewportWidth >= 1024;
    const mobileBreakpoint = viewportWidth < 768;

    const hideItems = function (itemIndex) {
      $itemsSliceAmountHeight.each(function (index) {
        if (index > itemIndex) {
          $(this).addClass("hidden");
        }
      });
    };

    const hideItemsOnCurrentBreakpoint = function () {
      if (mobileBreakpoint) {
        hideItems(3);
      } else if (tabletBreakpoint) {
        hideItems(5);
      } else if (desktopBreakpoint) {
        hideItems(8);
      }
    };

    const showInvisibleItems = function () {
      $itemsSliceAmountHeight.each(function () {
        $(this).removeClass("hidden");
      });
    };

    let heightCurrentItems = function (firstItemIndex, secondItemIndex, thirdItemIndex) {
      const heightForShadowBoxHover = 64;
      return (heightItem =
        $items.eq(firstItemIndex).outerHeight(true) +
        $items.eq(secondItemIndex).outerHeight(true) +
        $items.eq(thirdItemIndex).outerHeight(true) +
        heightForShadowBoxHover);
    };

    if (mobileBreakpoint) {
      amountItems = 4;
      $itemsSliceAmount = $itemsSliceAmountHeight.slice(0, amountItems);
      $itemsSliceAmount.each(function () {
        heightItem += $(this).outerHeight(true);
      });
      hideItemsOnCurrentBreakpoint();
    } else if (tabletBreakpoint) {
      heightCurrentItems(0, 2, 4);
      hideItemsOnCurrentBreakpoint();
    } else if (desktopBreakpoint) {
      heightCurrentItems(0, 3, 6);
      hideItemsOnCurrentBreakpoint();
    }

    new Readmore($self, {
      collapsedHeight: heightItem,
      moreLink: `<a href="#" class="breaking__btn">
                     <span>Еще поломки</span>
                     <svg class="breaking__btn-icon">
                        <use xlink:href="img/icons.svg#icon_arrow-multi-color"></use>
                     </svg>
                 </a>`,
      lessLink: `<a href="#" class="breaking__btn opened">
                     <span>Скрыть</span>
                     <svg class="breaking__btn-icon">
                        <use xlink:href="img/icons.svg#icon_arrow-multi-color"></use>
                     </svg>
                 </a>`,
      embedCSS: false,
      heightMargin: 0,
      afterToggle: function (trigger, element, more) {
        if (!more) {
          hideItemsOnCurrentBreakpoint();
        } else if (more) {
          showInvisibleItems();
        }
      },
    });
  });
});
