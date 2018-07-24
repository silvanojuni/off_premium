var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
    $('.menu__modal').prepend($('.header__box.nav-ab-test'));

    //Ativa menu Feminino
    $('.header__box.nav-ab-test > ul > li:first').addClass('active');

    function estruturaMenu(menu) {
        switch (menu) {
            case 'Feminino':
                $('ul.menu__list.menu__list--level-1').html($('.header__box.nav-ab-test > ul > li:eq(0) .menu__panel--level-2 .sub-home > ul').html());
                break;
            case 'Masculino':
                $('ul.menu__list.menu__list--level-1').html($('.header__box.nav-ab-test > ul > li:eq(1) .menu__panel--level-2 .sub-home > ul').html());
                break;
            case 'Infantil':
                $('ul.menu__list.menu__list--level-1').html($('.header__box.nav-ab-test > ul > li:eq(2) .menu__panel--level-2 .sub-home > ul').html());
                break;
            default:
            $('ul.menu__list.menu__list--level-1').html($('.header__box.nav-ab-test > ul > li:eq(0) .menu__panel--level-2 .sub-home > ul').html());
                break;
        }
    }

    estruturaMenu('Feminino');
  
    //Removendo o menu Feminino
    
    $('ul.menu__list.menu__list--level-1').html()
    //Open sub menu
    $('body').on('click','.menu__panel--level-1 .container > ul > li .menu__handle',function(event) {
        event.preventDefault();

        $('.menu__icon').removeClass('active');
        $(this).find('.menu__icon').addClass('active');        

        $('.menu__panel--level-1 .container > ul > li .menu__handle')
        .parent().find('div.container:visible').slideUp("slow");

        if($(this).parent().find('div.container').css('display') === 'block') {
            $(this).parent().find('div.container').slideUp("slow");
            $('.menu__icon').removeClass('active');
        } else {
            $(this).parent().find('div.container').slideDown("slow");
        }

        return false;
    });

    //Seleciona Feminino / Masculino / Infantil
    $('body').on('click','.header__box.nav-ab-test > ul > li > a',function(event) {
        event.preventDefault();
        $('.header__box.nav-ab-test > ul > li').removeClass('active');        

        var menu = $(this).text().trim();
        setTimeout(function() {
            estruturaMenu(menu);
        },200);

        $(this).parent().addClass('active');
    });
}