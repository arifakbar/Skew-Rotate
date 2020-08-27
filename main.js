var b1 = document.querySelector('#b1');
var b2 = document.querySelector('#b2');
var b3 = document.querySelector('#b3');
var b4 = document.querySelector('#b4');
var b5 = document.querySelector('#b5');
var box = document.querySelectorAll('.box');

b1.addEventListener('click',function(){
    b2.style.transform = ' scale(0.7) rotate(-30deg) skew(25deg) ';
});
b2.addEventListener('click',function(){
    b3.style.transform = ' scale(0.7) rotate(-30deg) skew(25deg) ';
});
b3.addEventListener('click',function(){
    b4.style.transform = ' scale(0.7) rotate(-30deg) skew(25deg) ';
});
b4.addEventListener('click',function(){
    b5.style.transform = ' scale(0.7) rotate(-30deg) skew(25deg) ';
});
b5.addEventListener('click',function(){
    b1.style.transform = ' rotate(-30deg) skew(25deg) scale(0.7) translate(40px,-40px) ';
    b1.style.boxShadow = '  -60px 60px 10px rgba(0, 0, 0, 0.8) ';
    b2.style.transform = ' rotate(-30deg) skew(25deg) scale(0.7) translate(40px,-40px) ';
    b2.style.boxShadow = '  -60px 60px 10px rgba(0, 0, 0, 0.8) ';
    b3.style.transform = ' rotate(-30deg) skew(25deg) scale(0.7) translate(40px,-40px) ';
    b3.style.boxShadow = '  -60px 60px 10px rgba(0, 0, 0, 0.8) ';
    b4.style.transform = ' rotate(-30deg) skew(25deg) scale(0.7) translate(40px,-40px) ';
    b4.style.boxShadow = '  -60px 60px 10px rgba(0, 0, 0, 0.8) ';
    b5.style.transform = ' rotate(-30deg) skew(25deg) scale(0.7) translate(40px,-40px) ';
    b5.style.boxShadow = '  -60px 60px 10px rgba(0, 0, 0, 0.8) ';
});