$(document).ready(function () {

    $("#btnStart").click(function () {
        $(this).css("pointer-events", "none");

        let figuras = [
            { path: 'img2/android.png', id: 1, name: 'android'},
            { path: 'img2/android.png', id: 1, name: 'android'},
            { path: 'img2/chrome.png', id: 2, name: 'chrome'},
            { path: 'img2/chrome.png', id: 2, name: 'chrome'},
            { path: 'img2/facebook.png', id: 3, name: 'facebook'},
            { path: 'img2/facebook.png', id: 3, name: 'facebook'},
            { path: 'img2/firefox.png', id: 4, name: 'firefox'},
            { path: 'img2/firefox.png', id: 4, name: 'firefox'},
            { path: 'img2/googleplus.png', id: 5, name: 'googleplus'},
            { path: 'img2/googleplus.png', id: 5, name: 'googleplus'},
            { path: 'img2/html5.png', id: 6, name: 'html5'},
            { path: 'img2/html5.png', id: 6, name: 'html5'},
            { path: 'img2/twitter.png', id: 7, name: 'twitter'},
            { path: 'img2/twitter.png', id: 7, name: 'twitter'},
            { path: 'img2/windows.png', id: 8, name: 'windows'},
            { path: 'img2/windows.png', id: 8, name: 'windows'},
        ];

        figuras.sort(() => .5 - Math.random());

        $(figuras).each(function (local, card) {
            let jogo = $("#tabuleiro");
            $(jogo).append('<img class="figura"></img>');
            let figura = $("#tabuleiro > img")[local];
            $(".figura").css("pointer-events", "none");
            $(figura).attr({name: card.name, id: card.id, src: card.path});
            setTimeout(() => {
                $(".figura").fadeOut("fast", function () {
                    $(".figura").css("pointer-events", "auto");
                    $(".figura").attr("src", `img2/cross.png`);
                    $(".figura").fadeIn("fast");
                });
            }, 3000);
        });

        $(".figura").click(function () {
            if ($(this).attr("status") !== "confirmando") {
                $(this).attr("status", "confirmando");
                $(this).slideToggle("fast", function () {
                    $(this).attr("src", `img2/${this.name}.png`);
                    $(this).slideToggle("fast");
                });
            }
        });

        var pares = [];
        $(".figura").click(function () {
            $(this).attr("status", "confirmando");
            let figurasEscolhidas = $('.figura[status="confirmando"]');
            if (figurasEscolhidas.length == 2) {
                let primeiraFigura = $(figurasEscolhidas[0]);
                let segundaFigura = $(figurasEscolhidas[1]);
                if ($(primeiraFigura).attr("name") === $(segundaFigura).attr("name")) {
                    $('.figura[status="confirmando"]').attr("status", "confirmado");
                    // perguntar 
                    $('.figura[status="confirmado"]').css("pointer-events", "none");
                    pares.push(figurasEscolhidas);
                    if (pares.length == 8) {
                        $(".figura").css("pointer-events", "none");
                    }                    
                } 
                else {
                    $(".figura").css("pointer-events", "none");
                    setTimeout(() => {
                        $(".figura[status='confirmando']").fadeOut("fast", function () {
                            $(".figura[status='confirmando']").attr("src", `img2/cross.png`).fadeIn("fast");
                            $(".figura[status='confirmando']").attr("status", "");
                        });
                        $(".figura").css("pointer-events", "auto");
                    }, 1500);
                }
            }        
        });
    });

    $("#btnReload").click(function () {
        location.reload(true);
    })
})