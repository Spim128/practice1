function clear(){
    this.style = null;
}
function mousedown(){
    this.style = 'background-color: #bbb;';
}
function sidebaropen(){
    side.style = 'left: 0;';
}
function sidebarclose(){
    side.style = null;
}
function scroll() {
    let scrollY = this.scrollY;
    if(scrollY<y){
        header.style = 'top: 0px; transition: .2s;';
        y = scrollY;
        //console.log('y =',y);
    }
    else if(scrollY>y && scrollY<50)
        header.style = 'top: '+(-scrollY)+'px;';
    else{
        header.style = 'top: -50px;';
        y = scrollY;
        //console.log('y =',y);
    }
    if(scrollY==0)
    header.style = null;
}
function debounce(func, delay){
    // timeout 初始值
    let timeout = null;
    return function(){
      let context = this;  // 指向 myDebounce 這個 input
      let args = arguments;  // KeyboardEvent
      clearTimeout(timeout)
  
      timeout = setTimeout(function(){
        func.apply(context, args)
      }, delay)
    }
  }


let sidebarbtn = document.getElementsByClassName('sidebarbtn');
let side = document.querySelector('.sidebar');
let header = document.querySelector('.header');
let content = document.querySelector('.content');
let y = 0;



for(let i=0; i<sidebarbtn.length; i++){
    sidebarbtn[i].addEventListener('mousedown' , mousedown);
    sidebarbtn[i].addEventListener('mouseout' , clear);
}
sidebarbtn[0].addEventListener('click' , sidebaropen);
sidebarbtn[1].addEventListener('click' , sidebarclose);
content.addEventListener('click',sidebarclose);
window.addEventListener("scroll",scroll );
//window.addEventListener('scroll', debounce(scroll, 5));