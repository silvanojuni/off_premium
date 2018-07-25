var new_header = `
<div class="header_ab">
    <div class="container">
        <div class="nav_primario">
            <ul class="primeiro_nivel">
                <li class="active">
                    <a>Feminino</a>
                    <button class="menu__handle menu__handle--level-1 btn-plus"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 42 42" style="enable-background:new 0 0 42 42;" xml:space="preserve" width="15px" height="15px" class=""><g><script xmlns="" class="active-path" style="fill:#EAE8E8" data-old_color="#E9E8E8"/><polygon points="42,19 23,19 23,0 19,0 19,19 0,19 0,23 19,23 19,42 23,42 23,23 42,23 " data-original="#000000" class="active-path" data-old_color="#E9E8E8" fill="#FFFFFF"/></g> </svg></button>
                    <button class="menu__handle menu__handle--level-1 btn-minus"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="15px" height="15px" viewBox="0 0 83 83" style="enable-background:new 0 0 83 83;" xml:space="preserve"><g><script xmlns="" class="active-path"/><g><path d="M81,36.166H2c-1.104,0-2,0.896-2,2v6.668c0,1.104,0.896,2,2,2h79c1.104,0,2-0.896,2-2v-6.668   C83,37.062,82.104,36.166,81,36.166z" data-original="#fff" class="active-path" fill="#fff"/></g></g> </svg></button>
                </li>
                <li>
                    <a>Masculino</a>
                    <button class="menu__handle menu__handle--level-1 btn-plus"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 42 42" style="enable-background:new 0 0 42 42;" xml:space="preserve" width="15px" height="15px" class=""><g><script xmlns="" class="active-path" style="fill:#EAE8E8" data-old_color="#E9E8E8"/><polygon points="42,19 23,19 23,0 19,0 19,19 0,19 0,23 19,23 19,42 23,42 23,23 42,23 " data-original="#000000" class="active-path" data-old_color="#E9E8E8" fill="#FFFFFF"/></g> </svg></button>
                    <button class="menu__handle menu__handle--level-1 btn-minus"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="15px" height="15px" viewBox="0 0 83 83" style="enable-background:new 0 0 83 83;" xml:space="preserve"><g><script xmlns="" class="active-path"/><g><path d="M81,36.166H2c-1.104,0-2,0.896-2,2v6.668c0,1.104,0.896,2,2,2h79c1.104,0,2-0.896,2-2v-6.668   C83,37.062,82.104,36.166,81,36.166z" data-original="#fff" class="active-path" fill="#fff"/></g></g> </svg></button>
                </li>
                <li>
                    <a>Infantil</a>
                    <button class="menu__handle menu__handle--level-1 btn-plus"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 42 42" style="enable-background:new 0 0 42 42;" xml:space="preserve" width="15px" height="15px" class=""><g><script xmlns="" class="active-path" style="fill:#EAE8E8" data-old_color="#E9E8E8"/><polygon points="42,19 23,19 23,0 19,0 19,19 0,19 0,23 19,23 19,42 23,42 23,23 42,23 " data-original="#000000" class="active-path" data-old_color="#E9E8E8" fill="#FFFFFF"/></g> </svg></button>
                    <button class="menu__handle menu__handle--level-1 btn-minus"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="15px" height="15px" viewBox="0 0 83 83" style="enable-background:new 0 0 83 83;" xml:space="preserve"><g><script xmlns="" class="active-path"/><g><path d="M81,36.166H2c-1.104,0-2,0.896-2,2v6.668c0,1.104,0.896,2,2,2h79c1.104,0,2-0.896,2-2v-6.668   C83,37.062,82.104,36.166,81,36.166z" data-original="#fff" class="active-path" fill="#fff"/></g></g> </svg></button>
                </li>
            </ul>
        </div>
    </div>
</div>`;

$('.menu__modal').prepend(new_header);

//Open sub menu
$('body').on('click','.header_ab ul.primeiro_nivel li .menu__handle',function(event) {
    event.preventDefault();

    if($(this).hasClass('btn-plus')) {
        $(this).hide();
        $(this).parent().find('.btn-minus').show();
    } else {
        $(this).hide();
        $(this).parent().find('.btn-plus').show();
    }

        /* Comentando código abaixo por enquanto---

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
    */

    return false;
});