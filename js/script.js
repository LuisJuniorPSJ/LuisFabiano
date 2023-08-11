window.sr = ScrollReveal({ reset : true});


sr.reveal('.title', {rotate : {x: 0, y: 80, z: 0},duration: 1500})

sr.reveal('.img_edit', {rotate : {x: 180, y: 360, z:0},duration: 1500})

sr.reveal('.content-text', {rotate : {x: 0, y: 80, z: 0},duration: 1500})

sr.reveal('.content-tecs', {rotate : {x: 0, y: 80, z: 0},duration: 1500})

sr.reveal('.card-content', {rotate : {x: 0, y: 80, z: 0},duration: 1500})





function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 65 * i)

  });
}
const titulo = document.querySelector('.title');
typeWrite(titulo);


