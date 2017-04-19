// $("document").ready(function() {
//     $(".toggleNav").on("click", function(n) {
//         $(".ul-container").toggleClass("open"), n.preventDefault()
//         $('.ul-secondary-container').toggleClass('open-secondary');
//     }), $(".nw-story-small")
// }), $(window).on("resize", function() {
//     $("ul").removeClass("open")
// });

$("document").ready(function() {
    $('.toggleNav').on("click", function(e) {
        e.preventDefault();
        $(".ul-container").toggleClass("open");
    });

    $('.toggleNavSecondary').on("click", function(e) {
        e.preventDefault();
        $('.ul-secondary-container').toggleClass("open-secondary");
    });

    $(window).on("resize", function() {
        $(".ul-container").removeClass("open");
        $(".ul-secondary-container").removeClass("open");

    });
});


var swiper = new Swiper(".swiper-container", {
    pagination: ".swiper-pagination",
    paginationClickable: !0,
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
    spaceBetween: 30
});