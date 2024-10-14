var SLIDER = {
    slideBannerIndex: function () {
      const swiperBanner = new Swiper(".swiperBanner", {
        slidesPerView: 1,
        speed: 600,
        spaceBetween: 8,
        autoplay: {
          delay: 6000,
        },
        pagination: {
          el: ".pagination-banner",
          clickable: true,
        },
        navigation: {
          nextEl: ".banner-next",
          prevEl: ".banner-prev",
        },
      });
    },

    init: function () {
        SLIDER.slideBannerIndex();
    }
};
document.addEventListener("DOMContentLoaded", function () {
    SLIDER.init();
  });

//   var fancyImages = function () {
//     if ($(".fancy").length == 0) return;
//     $(".fancy").fancybox({
//       loop: true,
//       buttons: ["zoom", "share", "slideShow", "fullScreen", "thumbs", "close"],
//       thumbs: {
//         loop: true,
//         autoStart: false,
//         axis: "x",
//       },
//     });
//   };
  