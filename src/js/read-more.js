$(document).ready(function () {
  $(".js-readmore").each(function () {
    const $self = $(this);
    const wrapper = $self.find(".js-readmore__wrapper");
    const container = $self.find(".js-readmore__container");
    const buttons = $self.find(".js-readmore__buttons");
    const buttonDeploy = $self.find(".js-readmore__btn-deploy");
    const buttonRollUp = $self.find(".js-readmore__btn-roll-up");

    const deploy = () => {
      wrapper.addClass("active");
      wrapper.css({
        height: container.innerHeight(),
      });
    };
    const rollUp = () => {
      wrapper.removeClass("active");
      wrapper.css({
        height: "0px",
      });
    };
    const destroy = () => {
      if(!$self.hasClass('js-no-destroy')) {
        wrapper.attr('style', '');
        wrapper.removeClass("active");
        buttons.addClass('hide')
      }
    }
    const init = () => {
      if(wrapper.hasClass("active")) {
        deploy()
      }
      if(buttons.hasClass('hide')){
        buttons.removeClass('hide')
      }
    }


    const toggleReadMore = () => (wrapper.hasClass("active") ? rollUp() : deploy());

    buttonDeploy.on("click", toggleReadMore);
    buttonRollUp.on("click", toggleReadMore);
    $(window).resize(function(){
        if( container.innerHeight() <= wrapper.innerHeight()){
          destroy()
        }else {
          init()
        }

    })
  });
});
