var new_header = `
<div class="header_ab">
    <div class="container">
        <div class="nav_primario">
            <ul class="primeiro_nivel">
                <li class="active">
                    <a>Feminino</a>
                </li>
                <li>
                    <a>Masculino</a>
                </li>
                <li>
                    <a>Infantil</a>
                </li>
            </ul>
            <div class="box_buscar"></div>
        </div>
        <div class="nav_secundario">        
        </div>
    </div>
</div>`;

$('body.js-tipbar .header').prepend(new_header);

//Buscar
$('.box_buscar').html($('.header__box.header__search'));

//Filtro Rápido
$('.nav_secundario').append($('.header__box.header__quickfilter'));

//Login
$('.nav_secundario').prepend($('.header__box.header__user'));

//Carrinho
$('.nav_secundario').append($('.header__box.header__minicart'));

var nav_principal = `
<div class="nav_principal">
    <div class="menu_principal">
        <ul class="menu__list">
            <li>
                <a>Marcas <span class="icon-arrow"></span> </a>
                <div class="menu__panel menu__panel--level-2">
                </div>
            </li>
            <li>
                <a>Novidades <span class="icon-arrow"></span></a>
                <div class="menu__panel menu__panel--level-2">
                </div>
            </li>
            <li>
                <a>Roupas <span class="icon-arrow"></span></a>
                <div class="menu__panel menu__panel--level-2">
                </div>
            </li>
            <li>
                <a>Acessórios <span class="icon-arrow"></span></a>
                <div class="menu__panel menu__panel--level-2">
                </div>
            </li>
            <li>
                <a>Calçados <span class="icon-arrow"></span></a>
                <div class="menu__panel menu__panel--level-2">
                </div>
            </li>
            <li>
                <a>Lingerie <span class="icon-arrow"></span></a>
                <div class="menu__panel menu__panel--level-2">
                </div>
            </li>
            <li>
                <a>Praia <span class="icon-arrow"></span></a>
                <div class="menu__panel menu__panel--level-2">
                </div>
            </li>
            <li>
                <a>Fitness <span class="icon-arrow"></span></a>
                <div class="menu__panel menu__panel--level-2">
                </div>
            </li>
            <li>
                <a>Relógios <span class="icon-arrow"></span></a>
                <div class="menu__panel menu__panel--level-2">
                </div>
            </li>
        </ul>
    </div>
</div>`;

$('.header__area.header__area--top.grid').after(nav_principal);

var iconeFilter = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 247.46 247.46" style="enable-background:new 0 0 247.46 247.46;" xml:space="preserve" width="21px" height="19px" class=""><g><path d="M246.744,13.984c-1.238-2.626-3.881-4.301-6.784-4.301H7.5c-2.903,0-5.545,1.675-6.784,4.301  c-1.238,2.626-0.85,5.73,0.997,7.97l89.361,108.384v99.94c0,2.595,1.341,5.005,3.545,6.373c1.208,0.749,2.579,1.127,3.955,1.127  c1.137,0,2.278-0.259,3.33-0.78l50.208-24.885c2.551-1.264,4.165-3.863,4.169-6.71l0.098-75.062l89.366-108.388  C247.593,19.714,247.982,16.609,246.744,13.984z M143.097,122.873c-1.105,1.34-1.711,3.023-1.713,4.761l-0.096,73.103  l-35.213,17.453v-90.546c0-1.741-0.605-3.428-1.713-4.771L23.404,24.682h200.651L143.097,122.873z" data-original="#000000" class="active-path" data-old_color="#F7F4F4" fill="#F8F7F7"/></g> </svg>';

$('.nav_secundario .header__quickfilter > div > button').html(iconeFilter);

var iconeBag = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 33 33" style="enable-background:new 0 0 33 33;" xml:space="preserve" width="28px" height="33px"><g><g> <path d="M28.313,33H4.688c-0.137,0-0.268-0.056-0.362-0.155c-0.094-0.099-0.144-0.232-0.138-0.369L5.313,8.851   c0.013-0.267,0.232-0.476,0.5-0.476h21.375c0.267,0,0.487,0.209,0.5,0.476l1.125,23.625c0.006,0.137-0.043,0.27-0.138,0.369   C28.58,32.944,28.449,33,28.313,33z M5.212,32h22.576L26.711,9.375H6.289L5.212,32z" data-original="#000000" class="active-path" data-old_color="#FBF8F8" fill="#FDFBFB"/> <path d="M21.905,11.375c-0.276,0-0.5-0.224-0.5-0.5v-4.97C21.405,3.201,19.205,1,16.5,1s-4.905,2.201-4.905,4.905v4.97   c0,0.276-0.224,0.5-0.5,0.5s-0.5-0.224-0.5-0.5v-4.97C10.595,2.649,13.244,0,16.5,0s5.905,2.649,5.905,5.905v4.97 C22.405,11.151,22.182,11.375,21.905,11.375z" data-original="#000000" class="active-path" data-old_color="#FBF8F8" fill="#FDFBFB"/> </g></g> </svg>';

$('.minicart__count .icon').html(iconeBag);

$('.nav_primario .box_buscar .header__box.header__search .search button.js-toggle-search span').text('Busque por vestidos, calçados, blusas, marcas etc...');

//Ativa menu principal
$('body').on('click','.nav_primario ul.primeiro_nivel li', function(){
    $('.nav_primario ul.primeiro_nivel li').removeClass('active');
    $(this).addClass('active');

    var menu = $(this).text().trim();
    console.log(menu);
});