import Select2 from "select2";
import PerfectScrollbar from "perfect-scrollbar";
import amdLanguageBase from "select2/dist/js/i18n/ru.js";
$(document).ready(function () {
  $.fn.select2.defaults.set("amdLanguageBase", "select2/i18n/");
  $(".js-search").each(function () {
    const $dropdown = $(this);
    const $dropdownParent = $dropdown.closest(".js-search-parent");
    new Select2($dropdown, {
      dropdownAutoWidth: true,
      dropdownParent: $dropdownParent,
      width: "100%",
    });
    $dropdown.on("select2:open", function () {
      $dropdown.data("ps", new PerfectScrollbar(".select2-results__options"));
      $(".select2-search__field").on("input", function () {
        $dropdown.data("ps").update();
      });
      $(".select2-results__options").on("wheel", function(e) {
        e.preventDefault();
        e.stopPropagation();
      });
    });
    $dropdown.on("select2:closing", function () {
      if (typeof $dropdown.data("ps") !== "undefined") {
        $dropdown.data("ps").destroy();
        $dropdown.data("ps", "");
      }
    });
  });
});
