import Select2 from "select2";
import PerfectScrollbar from 'perfect-scrollbar';

import amdLanguageBase from "select2/dist/js/i18n/ru.js";
$(document).ready(function () {
  $.fn.select2.defaults.set("amdLanguageBase", "select2/i18n/");
  $(".js-dropdown").each(function () {
    const $dropdown = $(this);
    const $dropdownParent = $dropdown.closest(".js-dropdown-parent");
    new Select2($dropdown, {
      dropdownAutoWidth: true,
      dropdownParent: $dropdownParent,
      width: "100%",
      minimumResultsForSearch: -1,
    });
    $dropdown.on('select2:open', function () {
      $dropdown.data('ps', new PerfectScrollbar('.select2-results__options'), {
        wheelPropagation: false,
      });
      $(".select2-results__options").on("wheel", function(e) {
        e.preventDefault();
        e.stopPropagation();
      });
    });
    $dropdown.on('select2:closing', function () {
      if (typeof $dropdown.data('ps') !== 'undefined') {
        $dropdown.data('ps').destroy();
        $dropdown.data('ps', '');
      }
    });
  });
});
