var menuTeste = 
`<div class="container container--level-2">
    <ul class="menu__list menu__list--level-2 menu__col menu__col--col-1">
<li class="menu__item menu__item--level-2">
<a class="menu__link menu__link--level-2" href="/masculino/bermuda?O=OrderByScoreDESC"><span>Bermuda</span></a>
</li>

<li class="menu__item menu__item--level-2 menu__item--calca"><a class="menu__link menu__link--level-2" href="/masculino/calca?O=OrderByScoreDESC"><span>Calça</span></a></li><li class="menu__item menu__item--level-2 menu__item--calcado"><a class="menu__link menu__link--level-2" href="/masculino/calcado?O=OrderByScoreDESC"><span>Calçado</span></a></li><li class="menu__item menu__item--level-2 menu__item--camisa"><a class="menu__link menu__link--level-2" href="/masculino/camisa?O=OrderByScoreDESC"><span>Camisa</span></a></li><li class="menu__item menu__item--level-2 menu__item--camiseta"><a class="menu__link menu__link--level-2" href="/masculino/camiseta?O=OrderByScoreDESC"><span>Camiseta</span></a></li><li class="menu__item menu__item--level-2 menu__item--casaco"><a class="menu__link menu__link--level-2" href="/masculino/casaco?O=OrderByScoreDESC"><span>Casaco</span></a></li><li class="menu__item menu__item--level-2 menu__item--relogio"><a class="menu__link menu__link--level-2" href="/masculino/relogio?O=OrderByScoreDESC"><span>Relógio</span></a></li></ul><ul class="menu__list menu__list--level-2 menu__col menu__col--col-2"><li class="menu__item menu__item--level-2 menu__item--ver-tudo"><a class="menu__link menu__link--level-2" href="/masculino?O=OrderByScoreDESC"><span>Ver Tudo</span></a></li>
</ul>

    <div class="menu__banner">
        <div class="box-banner">
            <a href="/mr-cat"><img width="450" height="180" id="ihttps://lojaoffpremium.vteximg.com.br/arquivos/ids/1569195/29_site_menu_banner_mr_cat_masculino.jpg?v=636663085278370000" alt="MenuBannerMasculino" src="https://lojaoffpremium.vteximg.com.br/arquivos/ids/1569195/29_site_menu_banner_mr_cat_masculino.jpg?v=636663085278370000" complete="complete"></a>
        </div>
    </div>
</div>
`;

$('.menu_principal > ul.menu__list > li:eq(0) .menu__panel--level-2').html(menuTeste);