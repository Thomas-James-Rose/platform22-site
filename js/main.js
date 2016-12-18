// on scroll
$(window).on('scroll',function(){

    var mainbottom = $('#page-header').offset().top + $('#page-header').height();

    // we round here to reduce a little workload
    stop = Math.round($(window).scrollTop());
    if (stop > mainbottom) {
        $('#main-nav').addClass('topnav');
        $('#top-arrow').addClass('top-arrow-active')
    } else {
        $('#main-nav').removeClass('topnav');
        $('#top-arrow').removeClass('top-arrow-active')
    }

});
