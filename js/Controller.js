var json =  
{
  0:{categoria:'celular',link:'#',imagem:'img/tania.jpg',nome:'Tania Cecilia Bento',datanascimento:'... anos - ...',apelido:'Cicy'},
  1:{categoria:'celular',link:'#',imagem:'img/zi.jpg',nome:'Idaliza Josefa Herculano',datanascimento:'... anos - ...',apelido:'Zi'},
  2:{categoria:'tablet',link:'#',imagem:'img/carmem.jpg',nome:'Carmem Loid Saviemba',datanascimento:'... anos - ...',apelido:'Carmem'},
  3:{categoria:'tablet',link:'#',imagem:'img/janet.jpg',nome:'Janeth Gio',datanascimento:'... anos - ...',apelido:'Janeth'},
  4:{categoria:'pc',link:'#',imagem:'img/telma.jpg',nome:'Telma Teresa',datanascimento:'... anos - ...',apelido:'Teresa'},
};

$(document).ready(function(){
	$('#saidaTxt').html("");
	listaItens(json);

	$('#search').bind('input',function(){
    busca = $(this).val().toLowerCase();
    var keyTeste = null;
    if(busca !== ''){
      var corresponde = false;
      var saida = Array();
      var quantidade = 0;
      for(var key in json){
        var aux = json[key];
        for(var key2 in aux){
          corresponde = aux[key2].toLowerCase().indexOf(busca) >= 0;
          if(corresponde){
            if(keyTeste != key){
              saida.push(json[key]);
              quantidade += 1;
              keyTeste = key;
            }           
            
          }
        }
      }
      if(quantidade){
        $('#saidaTxt').text('');
        $('#quantidade').html(quantidade+' resultados!<br><br>');
        
        listaItens(saida);
        
      }else{
        $('#quantidade').html('Nenhum Resultado!');
        $('#saidaTxt').text('');
        listaItens(json);
      }
    
    }else{
      $('#quantidade').html('');
      $('#saidaTxt').text('');
      listaItens(json);
    }
    
    
    
  });
});



function listaItens(objeto){    

    for(var ind in objeto){
      var li ='<li class="ui-li-has-thumb ui-first-child"><a href="'+objeto[ind]['link']+'" class="ui-btn ui-btn-icon-right ui-icon-carat-r">'+
              '<img src="'+objeto[ind]['imagem']+'" class="ui-li-thumb">'+
              '<h2>'+objeto[ind]['nome']+'</h2>'+
              '<p>'+objeto[ind]['datanascimento']+'</p>'+
              '<p class="ui-li-aside">'+objeto[ind]['apelido']+'</p>'+
              '</a></li>';
      $('#saidaTxt').append(li);
    }
  
}

$( document ).on( "pagecreate", "body", function() {
    $( document ).on( "swipeleft swiperight", "body", function( e ) {
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swiperight" ) {
                $( "#outside" ).panel( "open" );
            } 
        }
    });
});