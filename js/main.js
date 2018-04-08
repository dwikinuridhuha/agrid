$(document).ready(function () {
    $('.button-collapse').sideNav();

    $('.carousel.carousel-slider').carousel({fullWidth: true});
    // move next carousel
    $('.moveNextCarousel').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        $('.carousel').carousel('next');
    });
    // move prev carousel
    $('.movePrevCarousel').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        $('.carousel').carousel('prev');
    });
});