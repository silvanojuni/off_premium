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

var iconeLogin = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 55 55" style="enable-background:new 0 0 55 55;" xml:space="preserve" width="23px" height="23px"><g><script xmlns="" class="active-path" style="fill:#FDFBFB" data-old_color="#FBF7F7"/><path d="M55,27.5C55,12.337,42.663,0,27.5,0S0,12.337,0,27.5c0,8.009,3.444,15.228,8.926,20.258l-0.026,0.023l0.892,0.752  c0.058,0.049,0.121,0.089,0.179,0.137c0.474,0.393,0.965,0.766,1.465,1.127c0.162,0.117,0.324,0.234,0.489,0.348  c0.534,0.368,1.082,0.717,1.642,1.048c0.122,0.072,0.245,0.142,0.368,0.212c0.613,0.349,1.239,0.678,1.88,0.98  c0.047,0.022,0.095,0.042,0.142,0.064c2.089,0.971,4.319,1.684,6.651,2.105c0.061,0.011,0.122,0.022,0.184,0.033  c0.724,0.125,1.456,0.225,2.197,0.292c0.09,0.008,0.18,0.013,0.271,0.021C25.998,54.961,26.744,55,27.5,55  c0.749,0,1.488-0.039,2.222-0.098c0.093-0.008,0.186-0.013,0.279-0.021c0.735-0.067,1.461-0.164,2.178-0.287  c0.062-0.011,0.125-0.022,0.187-0.034c2.297-0.412,4.495-1.109,6.557-2.055c0.076-0.035,0.153-0.068,0.229-0.104  c0.617-0.29,1.22-0.603,1.811-0.936c0.147-0.083,0.293-0.167,0.439-0.253c0.538-0.317,1.067-0.648,1.581-1  c0.185-0.126,0.366-0.259,0.549-0.391c0.439-0.316,0.87-0.642,1.289-0.983c0.093-0.075,0.193-0.14,0.284-0.217l0.915-0.764  l-0.027-0.023C51.523,42.802,55,35.55,55,27.5z M2,27.5C2,13.439,13.439,2,27.5,2S53,13.439,53,27.5  c0,7.577-3.325,14.389-8.589,19.063c-0.294-0.203-0.59-0.385-0.893-0.537l-8.467-4.233c-0.76-0.38-1.232-1.144-1.232-1.993v-2.957  c0.196-0.242,0.403-0.516,0.617-0.817c1.096-1.548,1.975-3.27,2.616-5.123c1.267-0.602,2.085-1.864,2.085-3.289v-3.545  c0-0.867-0.318-1.708-0.887-2.369v-4.667c0.052-0.519,0.236-3.448-1.883-5.864C34.524,9.065,31.541,8,27.5,8  s-7.024,1.065-8.867,3.168c-2.119,2.416-1.935,5.345-1.883,5.864v4.667c-0.568,0.661-0.887,1.502-0.887,2.369v3.545  c0,1.101,0.494,2.128,1.34,2.821c0.81,3.173,2.477,5.575,3.093,6.389v2.894c0,0.816-0.445,1.566-1.162,1.958l-7.907,4.313  c-0.252,0.137-0.502,0.297-0.752,0.476C5.276,41.792,2,35.022,2,27.5z M42.459,48.132c-0.35,0.254-0.706,0.5-1.067,0.735  c-0.166,0.108-0.331,0.216-0.5,0.321c-0.472,0.292-0.952,0.57-1.442,0.83c-0.108,0.057-0.217,0.111-0.326,0.167  c-1.126,0.577-2.291,1.073-3.488,1.476c-0.042,0.014-0.084,0.029-0.127,0.043c-0.627,0.208-1.262,0.393-1.904,0.552  c-0.002,0-0.004,0.001-0.006,0.001c-0.648,0.16-1.304,0.293-1.964,0.402c-0.018,0.003-0.036,0.007-0.054,0.01  c-0.621,0.101-1.247,0.174-1.875,0.229c-0.111,0.01-0.222,0.017-0.334,0.025C28.751,52.97,28.127,53,27.5,53  c-0.634,0-1.266-0.031-1.895-0.078c-0.109-0.008-0.218-0.015-0.326-0.025c-0.634-0.056-1.265-0.131-1.89-0.233  c-0.028-0.005-0.056-0.01-0.084-0.015c-1.322-0.221-2.623-0.546-3.89-0.971c-0.039-0.013-0.079-0.027-0.118-0.04  c-0.629-0.214-1.251-0.451-1.862-0.713c-0.004-0.002-0.009-0.004-0.013-0.006c-0.578-0.249-1.145-0.525-1.705-0.816  c-0.073-0.038-0.147-0.074-0.219-0.113c-0.511-0.273-1.011-0.568-1.504-0.876c-0.146-0.092-0.291-0.185-0.435-0.279  c-0.454-0.297-0.902-0.606-1.338-0.933c-0.045-0.034-0.088-0.07-0.133-0.104c0.032-0.018,0.064-0.036,0.096-0.054l7.907-4.313  c1.36-0.742,2.205-2.165,2.205-3.714l-0.001-3.602l-0.23-0.278c-0.022-0.025-2.184-2.655-3.001-6.216l-0.091-0.396l-0.341-0.221  c-0.481-0.311-0.769-0.831-0.769-1.392v-3.545c0-0.465,0.197-0.898,0.557-1.223l0.33-0.298v-5.57l-0.009-0.131  c-0.003-0.024-0.298-2.429,1.396-4.36C21.583,10.837,24.061,10,27.5,10c3.426,0,5.896,0.83,7.346,2.466  c1.692,1.911,1.415,4.361,1.413,4.381l-0.009,5.701l0.33,0.298c0.359,0.324,0.557,0.758,0.557,1.223v3.545  c0,0.713-0.485,1.36-1.181,1.575l-0.497,0.153l-0.16,0.495c-0.59,1.833-1.43,3.526-2.496,5.032c-0.262,0.37-0.517,0.698-0.736,0.949  l-0.248,0.283V39.8c0,1.612,0.896,3.062,2.338,3.782l8.467,4.233c0.054,0.027,0.107,0.055,0.16,0.083  C42.677,47.979,42.567,48.054,42.459,48.132z" data-original="#000000" class="active-path" data-old_color="#FBF7F7" fill="#FFFFFF"/></g> </svg>';
$('.nav_secundario .header__box .user .user__handle i.icon.icon-user').html(iconeLogin);


$('.nav_primario .box_buscar .header__box.header__search .search button.js-toggle-search span').text('Busque por vestidos, calçados, blusas, marcas etc...');

//Ativa menu principal
$('body').on('click','.nav_primario ul.primeiro_nivel li', function(){
    $('.nav_primario ul.primeiro_nivel li').removeClass('active');
    $(this).addClass('active');

    var menu = $(this).text().trim();
    console.log(menu);
});