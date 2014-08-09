jQuery(document).ready(function($) {

    /* ======= Scrollspy ======= */
    $('body').scrollspy({
        target: '#top',
        offset: 400
    });

    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function(e) {

        //store hash
        var target = this.hash;

        e.preventDefault();

        $('body').scrollTo(target, 800, {
            offset: -80
        }, {
            easing: 'easeOutQuad'
        });

        //Collapse mobile menu after clicking
        if ($('.navbar-collapse').hasClass('in')) {
            $('.navbar-collapse').removeClass('in').addClass('collapse');
        }

    });

    /* ======= Flexslider ======= */
    $('.flexslider').flexslider({
        animation: "fade",
        touch: true,
        directionNav: false
    });

    /* ======= jQuery Placeholder ======= */
    $('input, textarea').placeholder();

    /* ======= jQuery FitVids - Responsive Video ======= */
    $("#video-container").fitVids();


    $('#config-close').on('click', function(e) {
        e.preventDefault();
        $('#config-panel').hide();
    });


    $('#color-options a').on('click', function(e) {
        var $styleSheet = $(this).attr('data-style');
        var $logoImage = $(this).attr('data-logo');
        $('#theme-style').attr('href', $styleSheet);
        $('#logo-image').attr('src', $logoImage);

        var $listItem = $(this).closest('li');
        $listItem.addClass('active');
        $listItem.siblings().removeClass('active');

        e.preventDefault();

    });

});