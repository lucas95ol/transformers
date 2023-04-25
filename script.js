/*variáeis*/ 
const MENU = document.querySelector(".menu-father");
const CLICK = document.querySelector(".warning");
const HEAD = document.querySelector(".header");
const FTEXT = document.querySelector(".first-text");
const STEXT = document.querySelector(".second-text");
const TTEXT = document.querySelector(".thirty-text");
const FTTEXT = document.querySelector(".fourty-text")

/*função para fazer a div que contem o menu aparecer, ela aparecera quando teclar algum botão do teclado*/
function menu(){
    MENU.setAttribute("style", "visibility: visible");
    hide(CLICK);
}

function show(element){
    element.setAttribute("style", "visibility:visible; animation: card; animation-duration: 3s");
}

function hide(element){
    element.setAttribute("style", "visibility:hidden; height:0rem");
}

function deceptcolor(){
    HEAD.setAttribute("style","animation: decep; animation-duration: 4s; background-color:  #9d13e7");
    hide(MENU);
    show(FTEXT);
    show(STEXT);
    show(TTEXT);
    show(FTTEXT);
}

function autocolor(){
    HEAD.setAttribute("style","animation: auto; animation-duration: 4s; background-color:  #ed1c33")
    hide(MENU);
    show(FTEXT);
    show(STEXT);
    show(TTEXT);
    show(FTTEXT);
}