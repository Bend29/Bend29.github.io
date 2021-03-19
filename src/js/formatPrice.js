$(document).ready(function () {
  $(".js-format-price").each(function () {
    const stringifiedValue = $(this).text().toString().split(" ").join("");
    const parsedValue = Number.parseInt(stringifiedValue);
    if (!parsedValue) return "";
    const res = Math.floor(parsedValue)
      .toString()
      .replace(/[^0-9.]/g, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    $(this).text(res);
  });
});
