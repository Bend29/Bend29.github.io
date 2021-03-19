$(document).ready(function () {
  $(".js-iframe-holder-youtube").each(function () {
    const $self = $(this);

    const settings = {
      startButtonSelector: ".js-insert-video",
      url: "https://www.youtube.com/embed/_UUf_D0MGjA",
      popup: false,
      attributes: 'frameborder="0" allowfullscreen="true" autoplay="1"',
      containerId: 'remBitTeh',
      widthProportion: 32,
      heightProportion: 18,
    };

    const $startButton = $self.find(settings.startButtonSelector);
    const frameUrl = settings.url;
    const containerId = settings.containerId;
    const attributes = settings.attributes;

    let $iframe;

    const insertFrame = (url) => {
      $self.append(`<iframe src="${url}" ${attributes}></iframe>`);
      $iframe = $self.find("iframe");
      setIframeStyles($iframe);
    };

    const setContainerId = () => $self.attr("id", containerId);

    const setIframeStyles = (iframe) => {
      iframe.css({
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0",
        left: "0",
      });
    };

    const setContainerStyles = () => {
      $self.css("position", "relative");
    };

    const init = () => {
      if (containerId) {
        setContainerId();
      }
      setContainerStyles();
    };


    $startButton.on("click", () => {
      insertFrame(frameUrl);
    });

    init();
  });

});
