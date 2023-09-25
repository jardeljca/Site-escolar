function verificarLarguraEcran() {
    const BotaoSociais = document.getElementById("BotaoSociais");
    const MenuSociais = document.getElementById("MenuSociais");
    const BotaoMenuLogo = document.getElementById("BotaoMenuLogo");
    const MenuLogo = document.getElementById("MenuLogo");
    var larguraDaJanela = window.innerWidth;

    MenuLogo.style.display = 'none';
    MenuSociais.style.display = 'none';
    
    if(larguraDaJanela < 560){
        BotaoSociais.addEventListener("click", () => {
            if(MenuSociais.style.display === 'none' || MenuSociais.style.display === ''){
                MenuSociais.style.display = 'block';
                MenuLogo.style.display = 'none';
            } else{
                MenuSociais.style.display = 'none';
            }
        })
        
        BotaoMenuLogo.addEventListener("click", () => {
            if(MenuLogo.style.display === 'none' || MenuLogo.style.display === ''){
                MenuLogo.style.display = 'block';
                MenuSociais.style.display = 'none';
            } else{
                MenuLogo.style.display = 'none';
            }
        })
    }
    else{
        MenuLogo.style.display = 'block';
        MenuSociais.style.display = 'block';
    }
}

window.addEventListener("load", verificarLarguraEcran);
window.addEventListener("resize", verificarLarguraEcran);