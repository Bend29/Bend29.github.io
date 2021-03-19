$(document).ready(function () {
  $(".js-mobile-menu").each(function () {
    const $self = $(this);
    const $toggleMenuButton = $self.find(".js-btn-menu");

    const menuIsOpenedClass = "opened";

    const setWhitening = () => {
      $("body").toggleClass("overflow-hidden");
    };
    /**
     * Открыть меню
     */
    const openMenu = () => {
      $self.addClass(menuIsOpenedClass);
      setWhitening();
    };

    /**
     * Закрыть меню
     */
    const closeMenu = () => {
      $self.removeClass(menuIsOpenedClass);
      setWhitening();
    };

    /**
     * Переключение закрытого/открытого состояния меню
     */
    const toggleMenu = () => (!$self.hasClass(menuIsOpenedClass) ? openMenu() : closeMenu());

    /**
     * Переключить состояние меню по клику на бургер
     */
    $toggleMenuButton.on("click", function () {
      toggleMenu();
    });
  });
});
