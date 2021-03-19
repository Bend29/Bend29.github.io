
$(document).ready(function () {
  $('.js-tabs').each(function () {
      const $self = $(this);
      const toggle = $self.find('.js-tabs-target');
      const tabs = $self.find('.js-tabs-item');
      tabs.addClass('hidden').filter(':first').removeClass('hidden')

    toggle.click(function(){
      tabs.addClass('hidden');
      tabs.filter(this.hash).removeClass('hidden');
      toggle.removeClass('active');
      $(this).addClass('active');
      return false;
    }).filter(':first').click();
  })
})

