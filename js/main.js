let btn = document.querySelector("#btn");
btn.addEventListener('click',mood)
function mood(){
    document. body.style.backgroundColor ='#' + Math.random().toString(15).slice(2,8)
}