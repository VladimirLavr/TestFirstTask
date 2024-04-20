$('.burger').on('click',function (){
    $(this).toggleClass('active')
    $('#menu').animate({
        left: '-54px'
    }, 500)
    if(!($(this).hasClass('active'))){
        $('#menu').animate({
            left: '-100%'
        },200)
    }
})