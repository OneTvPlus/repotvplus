function checaLogin(){
            //var nomeLogin = document.getElementById("login").value;
            senhaLogin = document.getElementById("senhaL").value;
                switch (senhaLogin) {
/* Clientes Pagos*/
                  case 'Dilene7875':
                  case 'Admin6648':
                  case 'William2009':
                         window.location.href="go:categorias";
                    break;
 /* Clientes Grátis*/
                  case 'Gratis':
                        window.location.href="go:gratis";
                    break;
                  default:
                    alert('Desculpe, mas o Nome:' +nomeLogin+' E senha: '+senhaLogin+'. São inválidos.');
                  break;
                }
        }           
