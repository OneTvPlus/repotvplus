function checaLogin(){
            var nomeLogin = document.getElementById("login").value;
            var senhaLogin = document.getElementById("senhaL").value;
                switch (nomeLogin && senhaLogin) {

                  case 'Admin'&&'123':
                  case 'dilene'&&'123':
                  case 'william'&&'123':
                  case 'Samuel'&&'123':
                  case 'edgar'&&'123':
                  case 'larissa'&&'123':
                        window.location.href="go:categorias";
                    break;
                  case 'larissa'&&'123':
                        window.location.href="go:gratis";
                    break;
                  default:
                    alert('Desculpe, mas o Nome:' +nomeLogin+' E senha: '+senhaLogin+'. São inválidos.');
                }
        }           
