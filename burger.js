$('.burger').on('click',function (){
    $(this).toggleClass('active')
    $('#menu_mob').animate({
        'margin-left': '0',
    }, 500)
    if(!($(this).hasClass('active'))){
        $('#menu_mob').animate({
            'margin-left': '-200%'
        },500)
    }
})