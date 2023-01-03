function banner_seletor_click(){
    for(let i=0 ; i<span_seletor.length ; i++){
        span_seletor[i].style = null;
    }
    span_seletor[index].style = 'background-color: #333;';
}
function banner_slide(){
    let width = getComputedStyle(banner).width;
    width = Number(width.slice(0,-2));
    banner_img.style = null;
    banner_img.style.left = (-1 * index * width)+(-200 * index) +'px';
    banner_seletor_click();
}
function banner_slideNext(){
    index++;
    if(index>2){
        index = 0;   
    }
    banner_slide();
    banner_seletor_click();
}
function banner_slideTo(p){
    index = p;
    clearInterval(timer);
    timer = setInterval(banner_slideNext, 10000);
    banner_slide();
}
function title_img_show(){
    let chandelier = document.querySelector('#chandelier');
    let plant = document.querySelector('#plant');
    plant.style = 'top: -20px; opacity: 1;';
    chandelier.style = 'top: 0px; opacity: 1;';
}
function food_img_click(num){
    let menu_img = document.querySelector('#menu_img');
    let food = document.querySelector('#food');
    let text_introduce = document.querySelector('#text_introduce');
    let food_big_img = document.querySelector('.food_big_img');
    let clicked = document.querySelector('.food_img_click');

    if(clicked){
        clicked.removeEventListener('click',food_img_unclick);
        clicked.classList.add('food_img');
        clicked.classList.remove('food_img_click');
        //food_big_img.style = null;
    }
    n = num;
    menu_img.classList.add('none');
    food_introduce.classList.remove('none');
    food_introduce.classList.add('food_introduce');
    food.innerText = 'food_'+(n+1);
    text_introduce.innerText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur nostrum placeat quasi repudiandae maxime! Repellat delectus adipisci minima dicta aut at veniam rem optio, iusto porro accusamus dignissimos itaque quisquam.'+(n+1);
    food_big_img.src = 'https://picsum.photos/500?random='+(n+1);
    //food_big_img.style = 'width: 50%';
    food_img[n].classList.add("food_img_click");
    food_img[n].classList.remove("food_img");

    let newclicked = document.querySelector('.food_img_click');
    clicked = newclicked;
    clicked.addEventListener('click',food_img_unclick);
}
function food_img_unclick(){
    let clicked = document.querySelector('.food_img_click');
    //let food_big_img= document.querySelector('.food_big_img');
    let event_ = window.event;
    //food_big_img.style = null;

    clicked.removeEventListener('click',food_img_unclick);

    clicked.classList.add('food_img');
    clicked.classList.remove('food_img_click');
    menu_img.classList.remove('none');
    food_introduce.classList.add('none');
    food_introduce.classList.remove('food_introduce');

    event_.stopPropagation();
}



let span_seletor = document.getElementsByClassName('span_seletor');
let index = 0;
let banner = document.querySelector('#banner');
let banner_img = document.querySelector('#banner_img');
let timer = setInterval(banner_slideNext, 10000);
let upbtn = document.querySelector('#upbtn');
let food_img = document.getElementsByClassName('food_img');
let food_introduce = document.querySelector('#food_introduce');
let food_img_div = document.getElementsByClassName('food_img_div');
let n ;
banner_seletor_click();





window.addEventListener('load',title_img_show);
window.addEventListener('resize',()=>{
    banner_slide();
    banner_img.style.transition = 0 + 's';
});
for(let i=0 ; i<span_seletor.length ; i++){
    span_seletor[i].addEventListener('click',banner_slideTo.bind(null,i));
}
upbtn.addEventListener('click',()=>{
    //console.log('y='+window.scrollY);
    //console.log('top='+document.documentElement.scrollTop);
    //console.log('top='+document.body.scrollTop);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
window.addEventListener("scroll",()=>{
    let scroll = document.documentElement.scrollTop + document.body.scrollTop;
    let h = document.body.scrollHeight-screen.availHeight;
    //console.log('h='+h+'='+document.body.scrollHeight+'-'+screen.availHeight);
    //console.log('s='+scroll);
   if(scroll >= h-10)
        upbtn.style = 'bottom: 150px; opacity: 0.7;';
    else
        upbtn.style = null;
});
for(let i=0; i<food_img_div.length; i++){
    food_img_div[i].addEventListener('click',food_img_click.bind(null,i));
}

fetch('https://jsonplaceholder.typicode.com/photos/1')
.then((response) =>{
    const data = response.json();
    return data;
})
.then((data) =>{
    console.log(data);
    //let map = document.querySelector('#info_map');
    //map.innerHTML = '<img src="'+data.url+'">';
});