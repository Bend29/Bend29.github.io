
$(document).ready(function () {
  $('.js-review-tabs').each(function () {
      const $self = $(this);
      const $toggle = $self.find('.js-review-tab-btn');
      const $tabs = $self.find('.js-review-tab');
      const $formRating = $self.find('.js-tab-form-rating');
      $tabs.addClass('hidden')

    $toggle.click(function(){
      $tabs.addClass('hidden');
      $tabs.filter(this.hash).removeClass('hidden');
      $formRating.removeClass('hidden');
      $toggle.removeClass('active');
      $(this).addClass('active');
      return false;
    })
  })
})

