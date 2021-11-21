{/* <div class="light-box">
    <i class="fas fa-chevron-left"></i>
    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg">
    <i class="fas fa-chevron-right"></i>
  </div> */}


const Images=document.querySelectorAll('.box img');
const leng=[...Images].length;
Images.forEach(item => item.addEventListener("click",ZoomImage));
var src=""
let index=0;
function ZoomImage(even){
    src=even.target.getAttribute("src")
    const template= `<div class="light-box">
    <i class="fas fa-chevron-left prev-button"></i>
    <div class="center">
    <img src="${src}">
    <div class="menu-button"></div>
    </div>
    <i class="fas fa-chevron-right next-button"></i>
    </div>`
    const note=`<div class="note"></div>`
    document.body.insertAdjacentHTML("beforeend",template);
    const centerElement=document.querySelector('.menu-button');
    for(i=0;i<leng;i++) centerElement.insertAdjacentHTML("beforeend",note);
    const noteButtons=document.querySelectorAll('.note'); 
    index=[...Images].indexOf(even.target);
    [...noteButtons][index].style.backgroundColor="white";
    
}



//next
document.body.addEventListener('click',function(e){
    const noteButtons=document.querySelectorAll('.note'); 
    const lightboxImage=document.querySelector('.light-box img');
    var Imagesrc=lightboxImage.getAttribute("src");
    var newsrc="";
    if(e.target.matches(".light-box")) e.target.parentNode.removeChild(e.target)
    else if(e.target.matches(".next-button")){
        index= [...Images].findIndex(item=> item.getAttribute("src")===Imagesrc);
        [...noteButtons][index].style.backgroundColor="rgb(177, 166, 166)"; 
        index=index+1;
        if(index>[...Images].length-1) index=0;
        [...noteButtons][index].style.backgroundColor="white";
        var newsrc=[...Images][index].getAttribute("src");
        lightboxImage.setAttribute("src",newsrc);
    }
    else if(e.target.matches(".prev-button")){
        index= [...Images].findIndex(item=> item.getAttribute("src")===Imagesrc);
        console.log(index);
        [...noteButtons][index].style.backgroundColor="rgb(177, 166, 166)"; 
        index=index-1;
        if(index<0) index=[...Images].length-1;
        [...noteButtons][index].style.backgroundColor="white";
        newsrc=[...Images][index].getAttribute("src");
        lightboxImage.setAttribute("src",newsrc);
    }
    else if(e.target.matches(".note")){
        // noteButtons.forEach(item => item.addEventListener("click",function(ev){
        [...noteButtons][index].style.backgroundColor="rgb(177, 166, 166)"; 
        index=[...noteButtons].indexOf(e.target);
        newsrc=[...Images][index].getAttribute("src");
        lightboxImage.setAttribute("src",newsrc);
        [...noteButtons][index].style.backgroundColor="white";
        // }))
    }
})


