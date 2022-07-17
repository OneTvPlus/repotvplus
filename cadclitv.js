function checaLogin() {
                        /* ========CLIENTES VIPS PAGOS =================*/
  		var nomesPago = ['admin6648','william2009','dilene1979'];
                        /* ========CLIENTES GRÁTIS =================*/
  		var nomesGratis = ['Gratis22'];
  		var item = document.getElementById('senhaL').value;
  		
  		if (nomesPago.indexOf(item) > -1) {
    		            window.location.href="https://onetvplus.github.io/repotvplus/categoria_vip.html";
  		} else if (nomesGratis.indexOf(item) > -1) {
  		            window.location.href="go:gratis";
  		} else {
  			alert("Chave de Acesso Inválida");
  	}
    
}

/*function checaLogin(){
            //var nomeLogin = document.getElementById("login").value;
            senhaLogin = document.getElementById("senhaL").value;
                switch (senhaLogin) {
/* Clientes Pagos
                  case 'Dilene7875':
                  case 'Admin6648':
                  case 'William2009':
                         window.location.href="go:categorias";
                    break;
 /* Clientes Grátis
                  case 'Gratis':
                        window.location.href="go:gratis";
                    break;
                  default:
                    alert('Desculpe, mas o Nome:' +senhaLogin+'inválidos.');
                  break;
                }
        }           
*/
