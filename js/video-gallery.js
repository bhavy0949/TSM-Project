$(document).ready(function () {
    $('.grid').isotope({ itemSelector: '.video-item' });
    $('.filters').on('click', '.filter-item', function () {
        let filterValue = $(this).attr('data-filter');
        $('.grid').isotope({ filter: filterValue });
        $('.filters .filter-item').removeClass('active');
        $(this).addClass('active');
        
    });
});