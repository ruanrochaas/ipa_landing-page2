class Slideshow{
    constructor(){
        this.botaoEsq = $('#botao-texto-esq');
        this.botaoDir = $('#botao-texto-dir');
        this.listaConteudo = $('body > header > div > div.container-slideshow-textos > div.container-textos > div > ul > li');
        this.idAtual = 0;

        this.init();
    }

    init(){
        this.addEventListener();
    }

    addEventListener(){
        this.botaoEsq.click(()=>{
            let aux = (this.listaConteudo.length - 1);
            let aux2 = (this.idAtual + 1);
            if(this.idAtual == aux){
                this.idAtual = 0;
                this.listaConteudo[aux].className = "para-esquerda";
                this.listaConteudo[this.idAtual].className = 'para-direita';
                setTimeout(()=>{
                    this.listaConteudo[this.idAtual].className = 'para-direita centro';
                }, 300);
            } else {
                this.listaConteudo[this.idAtual].className = "para-esquerda";
                this.listaConteudo[aux2].className = 'para-direita';
                setTimeout(()=>{
                    this.listaConteudo[aux2].className = 'para-direita centro';
                }, 300);
                this.idAtual++;
            }
        });

        this.botaoDir.click(()=>{
            let aux = 0;
            let aux2 = (this.idAtual - 1);
            if(this.idAtual == aux){
                this.idAtual = 2;
                this.listaConteudo[aux].className = "para-direita";
                this.listaConteudo[this.idAtual].className = 'para-esquerda';
                setTimeout(()=>{
                    this.listaConteudo[this.idAtual].className = 'para-esquerda centro';
                }, 300);
            } else {
                this.listaConteudo[this.idAtual].className = "para-direita";
                this.listaConteudo[aux2].className = 'para-esquerda';
                setTimeout(()=>{
                    this.listaConteudo[aux2].className = 'para-esquerda centro';
                }, 300);
                this.idAtual--;
            }
        });
    }
}

class Navbar{
    constructor(){
        this.listaNav = $('body > header > div > div.navbar > ul > li');
        this.video = $('.container-video');
        this.logo = $('body > header > div > div.container-texto-static > img');
        this.texto = $('body > header > div > h1');
        this.slideshow = $('.container-slideshow-textos');
        this.botaoGameplay = $('body > header > div > div.botao-jogar > a');

        this.init();
    }

    init(){
        this.addEventListener();
    }

    addEventListener(){
        this.listaNav[0].addEventListener("click", ()=>{
            let classes = this.video[0].className;
            if(classes == "container-video"){
                this.video[0].className = "container-video mostrar-video";
                this.logo[0].classList.add('invisivel');
                this.texto[0].classList.add('invisivel');
                this.slideshow[0].classList.add('slideshow-invisivel');
                this.botaoGameplay[0].classList.add('animacao-botao-gameplay');
                this.botaoGameplay[0].innerText = "VOLTAR";
                this.listaNav[0].innerText = "VOLTAR";
            } else {
                this.video[0].className = "container-video";
                this.logo[0].classList.remove('invisivel');
                this.texto[0].classList.remove('invisivel');
                this.slideshow[0].classList.remove('slideshow-invisivel');
                this.botaoGameplay[0].classList.remove('animacao-botao-gameplay');
                this.botaoGameplay[0].innerText = "Gameplay";
                this.listaNav[0].innerText = "GAMEPLAY";
            }
        });
        for(let i = 0; i < 4; i++){
            this.listaNav[i].addEventListener("mouseover", ()=>{
                this.listaNav[i].className = "crescer";
            });

            this.listaNav[i].addEventListener("mouseout", ()=>{
                this.listaNav[i].className = "";
            });
        }

        this.botaoGameplay.mouseover(()=>{
            this.botaoGameplay[0].classList.add("hover-bot");
        });
        this.botaoGameplay.mouseout(()=>{
            this.botaoGameplay[0].classList.remove("hover-bot");
        });

        this.botaoGameplay.click(()=>{let classes = this.video[0].className;
            if(classes == "container-video"){
                this.video[0].className = "container-video mostrar-video";
                this.logo[0].classList.add('invisivel');
                this.texto[0].classList.add('invisivel');
                this.slideshow[0].classList.add('slideshow-invisivel');
                this.botaoGameplay[0].classList.add('animacao-botao-gameplay');
                this.listaNav[0].className = "crescer";
                this.botaoGameplay[0].innerText = "VOLTAR";
                this.listaNav[0].innerText = "VOLTAR";
            } else {
                this.video[0].className = "container-video";
                this.logo[0].classList.remove('invisivel');
                this.texto[0].classList.remove('invisivel');
                this.slideshow[0].classList.remove('slideshow-invisivel');
                this.botaoGameplay[0].classList.remove('animacao-botao-gameplay');
                this.listaNav[0].className = "";
                this.botaoGameplay[0].innerText = "Gameplay";
                this.listaNav[0].innerText = "GAMEPLAY";
            }
        });
    }
}

class AninPlanoDeFundo{
    constructor(){
        this.logo = $('body > header > div > div.container-texto-static > img');
        this.texto = $('body > header > div > h1');
        this.animacao = $('.container-animacao');
        this.botaoGameplay = $('body > header > div > div.botao-jogar > a');
        
        this.init();
    }

    init(){
        this.addEventListener();
    }

    addEventListener(){
        this.botaoGameplay.mouseover(()=>{
            this.animacao[0].className = "container-animacao mudar-fundo";
        });
        this.botaoGameplay.mouseout(()=>{
            this.animacao[0].className = "container-animacao";
        });
    }
}

class BotaoMenu{
    constructor(){
        this.botaoMenu = $('body > header > div > div.botao-menu');
        this.divsBotaoMenu = $('body > header > div > div.botao-menu > div');
        this.menu = $('.menu');
        this.menuItems = $('.container-lista-menu > ul > li');
        this.formulario = $('.container-conteudo-iten > div');
        
        this.divEsq = this.divsBotaoMenu[0];
        this.divCen = this.divsBotaoMenu[1];
        this.divDir = this.divsBotaoMenu[2];

        this.init();
    }

    init(){
        this.addEventListener();
    }

    addEventListener(){
        this.botaoMenu.click(()=>{
            if(this.divCen.className != "barra barra-baixo"){
                this.animacaoDivsAbrir();
                this.abrirMenu();
                this.animacaoForm();
            } else {
                this.animacaoDivsFechar();
                this.fecharMenu();
                this.removerForm();
            }
            
        });

        for (let index = 0; index < 4; index++) {
            let element = this.menuItems[index];
            element.addEventListener('mouseover',()=>{
                if (!element.classList.contains('crescer')) {
                    element.classList.add('crescer');
                }
            });
        }

        for (let index = 0; index < 4; index++) {
            let element = this.menuItems[index];
            element.addEventListener('mouseout',()=>{
                if (element.classList.contains('crescer')) {
                    element.classList.remove('crescer');
                }
            });
        }
    }

    animacaoForm(){
        setTimeout(()=>{
            this.formulario[0].classList.remove("cima");
        }, 1700);
    }

    removerForm(){
        setTimeout(()=>{
            this.formulario[0].classList.add("cima");
        }, 100);
    }

    animacaoDivsAbrir(){
        this.divEsq.classList.add("barra-esquerda");
        this.divDir.classList.add("barra-direita");
        this.divCen.classList.add("barra-baixo");
        setTimeout(()=>{
            this.divEsq.classList.add("barra-esquerda-fechar");
            this.divDir.classList.add("barra-direita-fechar");
        },300);

        setTimeout(()=>{
            this.mostrarMenuItems();
        },200);
    }

    animacaoDivsFechar(){
        this.divEsq.classList.remove("barra-esquerda");
        this.divDir.classList.remove("barra-direita");
        this.divCen.classList.remove("barra-baixo");
        setTimeout(()=>{
            this.divEsq.classList.remove("barra-esquerda-fechar");
            this.divDir.classList.remove("barra-direita-fechar");
        },300);

        setTimeout(()=>{
            this.esconderMenuItems();
        },200);
    }

    abrirMenu(){
        this.menu[0].classList.add("aberto");
    }

    fecharMenu(){
        this.menu[0].classList.remove("aberto");
    }

    mostrarMenuItems(){
        this.menuItems[0].classList.remove('para-esquerda', 'invisivel');

        setTimeout(()=>{
            this.menuItems[1].classList.remove('para-esquerda', 'invisivel');
        },300);

        setTimeout(()=>{
            this.menuItems[2].classList.remove('para-esquerda', 'invisivel');
        },600);

        setTimeout(()=>{
            this.menuItems[3].classList.remove('para-esquerda', 'invisivel');
        },900);
    }

    esconderMenuItems(){
        this.menuItems[0].classList.add('para-esquerda', 'invisivel');
        this.menuItems[1].classList.add('para-esquerda', 'invisivel');
        this.menuItems[2].classList.add('para-esquerda', 'invisivel');
        this.menuItems[3].classList.add('para-esquerda', 'invisivel');
    }
}

class Formulario{
    constructor(){
        this.formulario = $('.container-conteudo-iten > div > form');
        this.inputs = $('.container-conteudo-iten > div >form > input');
        this.feedbacks = $('.container-conteudo-iten > div > form > small');
        this.botoes = $('.container-conteudo-iten > div > button');
        this.overlay = $('.conteudo > .overlay');
        this.card = $('.conteudo > .overlay > .card');
        this.mensagem = $('.conteudo > .overlay > div.card > h4');
        this.loader = $('.conteudo > .overlay > div:nth-child(2)');
        this.validacao1 = false;
        this.validacao2 = false;

        this.init();
    }

    init(){
        this.addEventListener();
    }

    addEventListener(){
        this.inputs[0].addEventListener("input", ()=>{
            this.validacaoEmail();
        });
        
        this.inputs[1].addEventListener("input", ()=>{
            this.validacaoSenha();
        });

        this.botoes[0].addEventListener("click", ()=>{
            event.preventDefault();
            this.abrirOverlay();
            this.abrirLoader();
            if(this.validacao1 && this.validacao2){
                setTimeout(()=>{
                    this.fecharLoader();
                    this.mensagem[0].innerHTML = "Cadastro realizado com sucesso!<br>[Aqui ocorre a verificação no servidor]";
                    this.card[0].classList.remove("invisivel");
                },2000);
            } else {
                setTimeout(()=>{
                    this.fecharLoader();
                    this.mensagem[0].innerHTML = "Dados inválidos.<br>[Aqui ocorre a verificação no servidor]";
                    this.card[0].classList.remove("invisivel");
                },2000);
            }
        });

        this.overlay.click(()=>{
            if(this.mensagem[0].innerHTML != ""){
                if(event.target == this.overlay[0]){
                    this.fecharOverlay();
                    this.card[0].classList.add("invisivel");
                    this.mensagem[0].innerHTML = "";
                }
            }
        });
    }

    abrirOverlay(){
        this.overlay[0].classList.add("overlay-aberto");
    }

    fecharOverlay(){
        this.overlay[0].classList.remove("overlay-aberto");
    }

    abrirLoader(){
        this.loader[0].classList.remove("invisivel");
    }

    fecharLoader(){
        this.loader[0].classList.add("invisivel");
    }

    validacaoEmail(){
        let email = this.inputs[0].value;
        let emailP1 = email.substring(0, email.indexOf("@"));
        let emailP2 = email.substring(email.indexOf("@")+ 1, email.length);
        
        if((emailP1.length >=1) && (emailP2.length >=3) && (emailP1.search("@")==-1) && (emailP2.search("@")==-1) && (emailP1.search(" ")==-1) && 
        (emailP2.search(" ")==-1) && (emailP2.search(".")!=-1) && (emailP2.indexOf(".") >=1)&& (emailP2.lastIndexOf(".") < emailP2.length - 1)){
            this.feedbacks[0].classList.add("invisivel");
            this.validacao1 = true;
        } else if(email.length == 0){
            this.feedbacks[0].innerText = "O campo não pode ficar vazio.";
            this.feedbacks[0].classList.remove("invisivel");
            this.validacao1 = false;
        } else {
            this.feedbacks[0].innerText = "Formato do email está incorreto.";
            this.feedbacks[0].classList.remove("invisivel");
            this.validacao1 = false;
        }
    }

    validacaoSenha(){
        let senha = this.inputs[1].value;
        let senha2 = senha.toLowerCase();
            
        if(senha.length > 7){
            if(senha2 == senha){
                this.feedbacks[1].innerText = "Sua senha precisa ter pelo menos uma maiúscula.";
                this.feedbacks[1].classList.remove("invisivel");
                this.validacao2 = false;
            } else {
                this.feedbacks[1].innerText = "Senha válida.";
                this.feedbacks[1].classList.remove("invisivel");
                this.validacao2 = true;
            }
        } else if(senha.length < 8){
            this.feedbacks[1].innerText = "Sua senha precisa ter no mínimo 8 caracteres.";
            this.feedbacks[1].classList.remove("invisivel");
            this.validacao2 = false;
            if(senha.length == 0){
                this.feedbacks[1].innerText = "O campo não pode ficar vazio.";
                this.feedbacks[1].classList.remove("invisivel");
                this.validacao2 = false;
            }
        }
    }
}


let slideshow = new Slideshow();
let navbar = new Navbar();
let aninPlanoDeFundo = new AninPlanoDeFundo();
let botaoMenu = new BotaoMenu();
let formulario = new Formulario();