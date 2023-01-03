let img01 = document.getElementById('img01');

window.addEventListener('load',function(){
    img01.style = 'opacity: 1; transition: 3s;';
})
img01.addEventListener('mousemove', function(){
    img01.style = 'opacity: 0; transition: 1s;';
})
img01.addEventListener('mouseout', function(){
    img01.style = 'opacity: 1; transition: 3s 1s;';
})