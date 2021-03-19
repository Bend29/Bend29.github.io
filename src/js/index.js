import $ from "jquery";

import "./dropdown";
import "./accardion";
import "./read-more";
import "./mobileMenu";
import "./spoiler";
import "./slider";
import "./hidden-text";
import "./frame-insert";
import "./spoilerCard";
import "./positive-progress";
import "./formatPrice";
import "./dropdown";
import "./search";
import "./spoilerRepait";
import "./show-comments";
import "./tabs";
import "./rating-form";
import "./chart-review-scale";
import "./table-fixed-header";
import "./pop-up";
import Dropzone from "dropzone";
import "./tabs-review";
import "./fixed-header";
import "./warning";
import "./zoom-image";
import "lazyloadxt/dist/jquery.lazyloadxt.extra.min";
import Inputmask from "maskedinput";
import "./like-comment";

function requireAll(r) {
  r.keys().forEach(r);
}

$.extend($.lazyLoadXT, {
  edgeY: 200,
  srcAttr: "data-src",
});
$.lazyLoadXT.onload.addClass = "animated fadeIn";
Dropzone.autoDiscover = false;

$("div.dropzone").each(function () {
  const $self = $(this);
  const btnAdd = $self.find(".dropzone__add");
  const dropzonePreview = $self.find(".dropzone_preview");
  $self.dropzone({
    url: "/upload",
    maxFilesize: 100,
    dictDefaultMessage: "Прикрепить фото/видео",
    paramName: "uploadfile",
    maxThumbnailFilesize: 5,
    clickable: true,
    previewTemplate: `<div class="dz-preview dz-file-preview">
        <div class="dropzone__wrapper">
               <div class="dz-details">
                 <img data-dz-thumbnail class="dropzone__img" />
               </div>
               <button data-dz-remove  class="dropzone__remove">
                  <svg width="30px" height="30px" class="dropzone__remove-icon">
                    <use xlink:href="./img/icons.svg#icon_close"></use>
                     </svg>
                </button>
        </div>
        </div>`,
    previewsContainer: dropzonePreview[0],
  });
});

const inputMask = new Inputmask("+7 999 999 99 99");
inputMask.mask(".js-phone");

$(".js-zoom-gallery-content").zoomGallery();
$(".js-zoom-gallery-comment").zoomGallery();
requireAll(require.context("../img/icons/", true, /\.svg$/));
