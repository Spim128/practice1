// let movie = fetch('');

// movie.then((response) =>{
//     return response.json();
// }).then((data) =>{
//     console.log(data);
// })
function submit() {
    let length = document.querySelector('#length');
    if(length.value>20)
    alert("這只是測試用而已，不要輸入太多比較好，最好不要超過20個");
    else if(length.value<0)
    alert("不要亂!");
    else
    movie_count(length.value);
}

function movie_count(length){
    let movielist = '';
    let dialog = '';
    let list = document.querySelector('#movie-list');
    let ALLdialog = document.querySelector('#ALLdialog');

    for(let i=0 ; i<length ; i++){
        let poster_src = 'https://picsum.photos/700/1000?random='+(i+1); 
        let title = 'Title' + (i+1);
        let introduction = (i+1) + 'Lorem ipsum dolor sit, amet consectetur adipisicing elit...';
        let director = 'director' + (i+1);
        let cast = 'cast'+(i+1) + '、cast'+(i+1.1) + '、cast'+(i+1.2);
        let introductionfull = (i+1) + 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero a, maiores molestiae dolore laborum tempora aut accusamus eius culpa odit aspernatur ut? Suscipit eum incidunt sint, tempora omnis cumque laboriosam.';

        let movie = 
        '<div class="movie">'+
            '<img class="poster" src='+poster_src+'>'+
            '<h3 class="film-title">'+title+'</h3>'+
            '<p class="introduction">'+introduction+'</p>'+
            '<button class="morebtn">more>></button>'+
        '</div>';
        let moredialog = 
        '<dialog class="moredia">'+
            '<button class="xbtn">X</button>'+
            '<h1 class="film-title">'+title+'</h1>'+
            '<h3 class="director">導演：'+director+'</h3>'+
            '<h3 class="cast">主演：'+cast+'</h3>'+
            '<p class="introduction">'+introductionfull+'</p>'+
        '</dialog>';

        movielist += movie;
        dialog += moredialog;
    }

    list.innerHTML = movielist;
    ALLdialog.innerHTML = dialog;

    let morebtn = document.querySelectorAll('.morebtn');
    let moredia = document.querySelectorAll('.moredia');
    let xbtn = document.querySelectorAll('.xbtn');
    for(let i=0 ; i<length ; i++){
        morebtn[i].addEventListener('click',()=>{
            moredia[i].showModal();
            console.log(i);
        });
        xbtn[i].addEventListener('click',()=>{
            moredia[i].close();
            console.log(i+'x');
        });
        // moredia[i].margin.addEventListener('click',()=>{
        //     moredia[i].close();
        //     console.log(i+'x');
        // });
    }
}

movie_count(8);
let btn = document.querySelector('#btn');
btn.addEventListener('click', submit);