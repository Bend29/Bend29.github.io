$(document).ready(function () {
  $(".js-table-fixed-header").each(function () {
    const $this = $(this);
    const $tableHeaderInner = $this.find(".js-table-header-inner");
    const $tableHeader = $this.find(".js-table-header");
    const $tableGrayInner = $this.find(".js-table-gray-inner");

    const fixedTableHeader = () => {
      const offsetTop = $this.offset().top;
      const heightTableHeader = $tableHeader.outerHeight(true);
      const heightHeader = $(document).find('.js-header').outerHeight(true);
      const tableHeight = $this.outerHeight(true);
      const windowScrollTop = $(window).scrollTop();
      if (windowScrollTop >= offsetTop - heightHeader && windowScrollTop <= offsetTop + tableHeight - heightHeader - heightTableHeader) {
        $tableHeaderInner.addClass("fixed");
        $tableGrayInner.css("top", heightHeader);
        $tableHeaderInner.css("height", heightTableHeader);
      } else {
        $tableHeaderInner.removeClass("fixed");
        $tableHeaderInner.css("height", "auto");
        $tableGrayInner.css("top", 0);
      }
    }
    fixedTableHeader();
    $(window).on("resize orientationchange", function () {
      fixedTableHeader();
    });

    $(window).on("scroll", function () {
      fixedTableHeader();
    });
  });
});
