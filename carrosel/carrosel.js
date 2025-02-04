var pessoa1=document.getElementById('pessoa1')
var pessoa2=document.getElementById('pessoa2')
var pessoa3=document.getElementById('pessoa3')
var criandoh2=document.createElement('h2')
var criandoimg=document.createElement('img')
var criandop=document.createElement('p')

// Função para criar uma pessoa
function criarPessoa(nome, imgSrc) {
    let criandoh2 = document.createElement('h2');
    criandoh2.textContent = nome;
    
    let criandoimg = document.createElement('img');
    criandoimg.setAttribute('src', imgSrc);
    
    let criandop = document.createElement('p');
    //elemento um do lado do outro dentro do 'p'
    criandop.innerHTML = '<a href="https://youtu.be/Q5-zpqCHav0?si=U2_sN70ysPjHJSMN"><img src="simbolo-do-instagram (1).png" alt="" width="30px" style="padding: 10px;"></a>'; // Corrigido para interpretar como HTML
    criandop.innerHTML += '<a href="https://youtu.be/Q5-zpqCHav0?si=U2_sN70ysPjHJSMN"><img src="facebook.png" alt="" width="30px" style="padding: 10px;"></a>'; // Corrigido para interpretar como HTML
    criandop.innerHTML += '<a href="https://youtu.be/Q5-zpqCHav0?si=U2_sN70ysPjHJSMN"><img src="whatsapp.png" alt="" width="30px" style="padding: 10px;"></a>'; // Corrigido para interpretar como HTML
    
    let container = document.createElement('div'); // Para agrupar os elementos
    container.appendChild(criandoh2);
    container.appendChild(criandoimg);
    container.appendChild(criandop);
    
    return container;
}

// Adiciona uma nova instância para cada pessoa
function mudar1(){
    pessoa1.innerHTML = '';
    pessoa2.innerHTML = '';
    pessoa3.innerHTML = '';
    pessoa1.appendChild(criarPessoa('Marcos Silva Santos', 'adulto_m.png'));
    pessoa2.appendChild(criarPessoa('Maria Lurdez Santos ', 'idoso_f.png'));
    pessoa3.appendChild(criarPessoa('Melanie de Oliveira', 'jovem_f.png'));
}
function mudar2(){
    pessoa1.innerHTML = '';
    pessoa2.innerHTML = '';
    pessoa3.innerHTML = '';
    pessoa1.appendChild(criarPessoa('João Paulo  ', 'idoso_m.png'))
    pessoa2.appendChild(criarPessoa('Luisa Betina', 'bebê_f.png'))
    pessoa3.appendChild(criarPessoa('João Lucas', 'jovem_m.png'))
}
function mudar3(){
    pessoa1.innerHTML = '';
    pessoa2.innerHTML = '';
    pessoa3.innerHTML = '';
    pessoa1.appendChild(criarPessoa('Beto da Silva', 'bebê_m.png'))
    pessoa2.appendChild(criarPessoa('Luisa da Conceição', 'adulto_f.png'))
    pessoa3.appendChild(criarPessoa('Luisa', 'jovem_f.png'))
}
