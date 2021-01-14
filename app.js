$('.modal__open').click(function (e) {
    e.preventDefault();
    $('.modal-bg').fadeIn(600)
    $('body').addClass('no-scroll')
});
$('.modal__close').click(function (e) {
    $('.modal-bg').fadeOut(600)
    $('body').removeClass('no-scroll')
});
