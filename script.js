/*variáeis*/ 
const BODY = document.querySelector(".body");
const MENU = document.querySelector(".menu-father");
const CLICK = document.querySelector(".warning");
const MINIBTN = document.querySelector(".minibuttons")
const AUDIO =document.querySelector(".audio");
const HEAD = document.querySelector(".header");
const TITLE = document.querySelector(".title")
const FTEXT = document.querySelector(".first-text");
const STEXT = document.querySelector(".second-text");
const TTEXT = document.querySelector(".thirty-text");
const FTTEXT = document.querySelector(".fourty-text");

/*função para fazer a div que contem o menu aparecer, ela aparecera quando teclar algum botão do teclado*/
function menu(){
    MENU.setAttribute("style", "visibility: visible");
    hide(CLICK);
}

function title(){
    TITLE.setAttribute("style", "animation:title; animation-duration: 5s");
}

function sides(element){
    element.setAttribute("style", "visibility: visible; animation: minib; animation-duration: 5s")
}

function show(element){
    element.setAttribute("style", "visibility:visible; animation: card; animation-duration: 5s");
}

function hide(element){
    element.setAttribute("style", "visibility:hidden; height:0rem");
}

function deceptcolor(){
    HEAD.setAttribute("style","animation: decep; animation-duration: 5s; background-color:  #9d13e7");
    BODY.setAttribute("style", "overflow: scroll");
    AUDIO.play();
    sides(MINIBTN);
    title();
    hide(MENU);
    show(FTEXT);
    sides(STEXT);
    show(TTEXT);
    show(FTTEXT);
    
}

function autocolor(){
    HEAD.setAttribute("style","animation: auto; animation-duration: 5s; background-color:  #ed1c33");
    BODY.setAttribute("style", "overflow: scroll");
    AUDIO.play();
    sides(MINIBTN);
    title();
    hide(MENU);
    show(FTEXT);
    sides(STEXT);
    show(TTEXT);
    show(FTTEXT);
}

function red(){
    HEAD.setAttribute("style", "animation: red; animation-duration: 3s; background-color:  #ed1c33");
}

function purple(){
    HEAD.setAttribute("style", "animation: purple; animation-duration: 3s; background-color:   #9d13e7")
}