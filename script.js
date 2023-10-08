const h1 = document.getElementsByTagName("h1");

let button = document.getElementById('button');
let pokeName = document.getElementById('name');
let pokeNumber = document.getElementById('number');
let image = document.getElementById('image');
let type = document.getElementById('type');


const changePokemon = async () => {
    let randomNumber = Math.ceil(Math.random() * 1291) + 1;

    let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;

    let data = await fetch(requestString);
    console.log(data);

    let response = await data.json();
    console.log(response);

    image.src = response.sprites.front_default;

    pokeName.textContent = response.name
    pokeType.textContent = response.name.type


}

// const clearImg = document.getElementById('image');

// clearImg.addEventListener('click', () => {
//     image.style.filter = 'none'; 
// });


button.addEventListener("click", changePokemon);
// button.addEventListener("click", image.classList.add('blur'));

