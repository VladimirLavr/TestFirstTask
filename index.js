$(document).ready(function () {
    $('.devider').animate({
        width: '100%'
    }, 1500)

    $('.menu_item').on('click', function () {
        $(this).toggleClass('active')
        $(this).find('a').toggleClass('active')
        $(this).find('.dropdown_menu').toggleClass('active')
    })

    $('.cabinet').on('click', function () {
        $(this).toggleClass('active')
        $(this).find('.dropdown_menu.cab').toggleClass('active')
    })

    $(document).mouseup(function (e) {
        $('.menu_item').each(function () {
            let div = $(this)
            if (!div.is(e.target) && div.has(e.target).length === 0) {
                $(this).find('.dropdown_menu.active').removeClass('active')
                $(this).removeClass('active')
                $(this).find('a').removeClass('active')
            }
        })
        let div = $('.cabinet')
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            $(div).find('.dropdown_menu.active').removeClass('active')
            $(div).removeClass('active')
            $(div).find('a').removeClass('active')
        }
    });
})

