const BotaoSociais = document.getElementById("BotaoSociais");
const MenuSociais = document.getElementById("MenuSociais");

BotaoSociais.addEventListener("click");{
    if(MenuSociais.style.display === 'none' || MenuSociais.style.display === ''){
        MenuSociais.style.display = 'block';
    } else{
        MenuSociais.style.display = 'none';
    }
}