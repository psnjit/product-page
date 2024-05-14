let img= document.querySelector("#product-img");
let controls= document.querySelector('.controls');

controls.children[0].addEventListener('click', (e)=>{
    img.src='./images/image1.png'; 
    controls.children[0].classList.add('active');
    controls.children[1].classList.remove('active');
    controls.children[2].classList.remove('active');
});
controls.children[1].addEventListener('click', ()=>{
    img.src='./images/image2.png';
    controls.children[1].classList.add('active');
    controls.children[0].classList.remove('active');
    controls.children[2].classList.remove('active');
});
controls.children[2].addEventListener('click', ()=>{
    img.src='./images/image3.png';
    controls.children[2].classList.add('active');
    controls.children[1].classList.remove('active');
    controls.children[0].classList.remove('active');
});

