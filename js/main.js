$(document).ready(function () {
    $('.pilih-gambar-detail-produk').carousel({
        indicators: true
    });

    $('.button-collapse').sideNav();
    
    $('.dropdown-trigger').dropdown();

    $('.slider').slider({
        indicators: true
    });

    $('select').material_select();
});