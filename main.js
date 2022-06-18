let i = Math.floor(Math.random()*3);

//hide slide
document.getElementsByClassName('slider')[0].style.display="none";
document.getElementsByClassName('slider')[1].style.display="none";
document.getElementsByClassName('slider')[2].style.display="none";
document.getElementsByClassName('slider')[i].style.display="block";

//img slider
function slider(ar){
    document.getElementsByClassName('slider')[i].style.display = 'none';
    i =  ar==='next'?i+1:i-1;
    i = i<0? 2: i>2? 0:i;
    document.getElementsByClassName('slider')[i].style.display = "block";
};