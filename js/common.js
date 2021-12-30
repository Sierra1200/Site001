$(function () {
    // ハンバーガーメニュー
    let header = $('header');
    let sp_nav = $('.nav-toggle, .nav');
    let cover = $('.cover');
    $('.nav-toggle').on('click', function() {
        header.toggleClass('show');
        sp_nav.toggleClass('show');
        cover.toggleClass('show');
        if (cover.hasClass('show'))
        {
            cover.on('click', function() {
                header.removeClass('show');
                sp_nav.removeClass('show');
                cover.removeClass('show');
            });
        }
    });

    // タグリスト
    $('main .nav .tag-list').hide();
    $('#tag').on('click', function() {
        $('main .nav .tag-list').slideToggle(300);
        $('main .nav .menu-list .menu-item#tag').toggleClass('active');
    });
});
