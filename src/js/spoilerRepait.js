import Readmore from "readmore-js";
$(document).ready(function () {
  $(".js-spoiler-repair").each(function () {
    const $self = $(this);
    const numberHide = {
      mobile: $self.data('hide-mobile-index') || 4,
      table: $self.data('hide-table-index') || 5,
      desktop: $self.data('hide-desktop-index') || 5,
    }
    let viewportWidth = $(window).width();

    let $itemsSliceAmount;
    let $itemsSliceAmountHeight = $self.find(".js-spoiler-repair-item");

    let amountItems;
    let heightItem = 0;

    const $items = $self.find(".js-spoiler-repair-item");

    const tabletBreakpoint = viewportWidth >= 600 && viewportWidth < 1024;
    const desktopBreakpoint = viewportWidth >= 1024;
    const mobileBreakpoint = viewportWidth < 600;

    const hideItems = function (itemIndex) {
      $itemsSliceAmountHeight.each(function (index) {
        if (index > itemIndex) {
          $(this).addClass("hidden");
        }
      });
    };

    const hideItemsOnCurrentBreakpoint = function () {
      if (mobileBreakpoint) {
        hideItems(numberHide.mobile);
      } else if (tabletBreakpoint) {
        hideItems(numberHide.table);
      } else if (desktopBreakpoint) {
        hideItems(numberHide.desktop);
      }
    };

    const showInvisibleItems = function () {
      $itemsSliceAmountHeight.each(function () {
        $(this).removeClass("hidden");
      });
    };

    let heightCurrentItems = function (...rest) {
      const heightForShadowBoxHover = 12;
      return heightItem = rest.reduce((acc,numberIndex) =>  acc + $items.eq(numberIndex).outerHeight(true) ,heightForShadowBoxHover)
    };

    if (mobileBreakpoint) {
      amountItems = 5;
      $itemsSliceAmount = $itemsSliceAmountHeight.slice(0, amountItems);
      $itemsSliceAmount.each(function () {
        heightItem += $(this).outerHeight(true);
      });
      hideItemsOnCurrentBreakpoint();
    } else if (tabletBreakpoint) {
      heightCurrentItems(0, 2, 4);
      hideItemsOnCurrentBreakpoint();
    } else if (desktopBreakpoint) {
      heightCurrentItems(0, 3,);
      hideItemsOnCurrentBreakpoint();
    }

    new Readmore($self, {
      collapsedHeight: heightItem,
      moreLink: `<a href="#" class=" repairs__button breaking__btn">
                     <span>Вся техника</span>
                     <svg class="breaking__btn-icon">
                        <use xlink:href="img/icons.svg#icon_arrow-multi-color"></use>
                     </svg>
                 </a>`,
      lessLink: `<a href="#" class="repairs__button breaking__btn opened">
                     <span>Свернуть</span>
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
