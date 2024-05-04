let url = "dados.xml";
var id = 0;

$.ajax(url)
    .done(function(xml){
        $(xml).find("personagem").each(function(){
            var imageSrc = $(this).find("id").text() + '.jpg'; // Default to JPG
            // Check if PNG exists, if not, use JPG
            if (!imageExists(imageSrc)) {
                imageSrc = $(this).find("id").text() + '.png';
            }
            $("#cards").append('<div class="card"><a href="individual.html?id='+$(this).find("id").text()+'"><p class="procurado">Personagem</p> <img class="foto" src="'+ imageSrc +'"><p class="vivo">Detalhes</p> <p class="nome">'+ $(this).find("nome").text() +'</p> <p class="status">'+ $(this).find("status").text()+'</p></a></div>');
        });
    })
    .fail(function(){
        alert("Ocorreu um erro na leitura do arquivo XML.");
    });

function imageExists(imageUrl) {
    var http = new XMLHttpRequest();
    http.open('HEAD', imageUrl, false);
    http.send();
    return http.status != 404;
}

var url_string = window.location.href;
var url1 = new URL(url_string);
var id = parseInt(url1.searchParams.get("id"));

$.ajax(url)
    .done(function(xml){
        $(xml).find("personagem").each(function(){
            var pos = parseInt($(this).find("id").text());
            if(id == pos){
                var imageSrc = $(this).find("id").text() + '.jpg'; // Default to JPG
                // Check if PNG exists, if not, use JPG
                if (!imageExists(imageSrc)) {
                    imageSrc = $(this).find("id").text() + '.png';
                }
                $("#individual").append('<div class="card"><p class="procurado">Personagem</p> <img class="foto" src="'+ imageSrc +'"><p class="vivo">Detalhes</p> <p class="nome">'+ $(this).find("nome").text() +'</p> <p class="status">'+ $(this).find("status").text()+'</p></div>');
            }
        });
    })
    .fail(function(){
        alert("Ocorreu um erro na leitura do arquivo XML.");
    });
