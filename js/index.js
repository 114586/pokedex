var myPage={
	pag: document.getElementById("pagina"),
	load:function(){

		var myHTML='';
		//loop pokemons
		for (var pok in myPokemon){
            
			var myPok=myPokemon[pok];

            myHTML+='<div class="kaartframe">'; 
                myHTML+='<div class="kaart">';                    
                    myHTML+='<div class="plaatje">';
                         myHTML+='<img src="img/' + myPok.img + '" height="170px" />';
                    myHTML+='</div>';
			        myHTML+='<div class="tekst">'; 
			             myHTML+='<div class="naam">';  
			                 myHTML+=myPok.naam;
			             myHTML+='</div>';  
					     myHTML+='<div class="info">';
			                 myHTML+=myPok.info;
			             myHTML+='</div>';
                    myHTML+="</div>";
				myHTML+="</div>"; 
             myHTML+="</div>";
		};		
		//write content

		myPage.pag.innerHTML=myHTML;		
	}
};

//on document ready - start
$( document ).ready(function() {
	//start loading
	myPage.load();	
});


