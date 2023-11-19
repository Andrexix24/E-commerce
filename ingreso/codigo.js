const consolas = [
    {
        id: 1,
        nombre: "Xbox serie X",
        precio: 400,
        img: "../assets/img/productos/xbox.jpeg",
    },
    {
        id: 2,
        nombre: "PlayStation 5",
        precio: 400,
        img: "../assets/img/productos/playstation.jpg",
    },
    {
        id: 3,
        nombre: "Control Xbox series",
        precio: 50,
        img: "../assets/img/productos/xbox-control.jpeg",
    },
    {
        id: 4,
        nombre: "Control Playstation 5",
        precio: 50,
        img: "../assets/img/productos/play-control.jpeg",
    }
];

const vistaConsolas = document.getElementById("Consolas");

function crearConsolas(consolas) {
    const card = document.createElement("div");
    card.className='card';
    card.dataset.consolas=consolas.id;

    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const buttom = document.createElement("buttom");
    buttom.className='buttom';
    p.className='p';
    

    img.src=consolas.img;
    img.alt=consolas.nombre; 
    h3.textContent=consolas.nombre;
    p.textContent=`${consolas.precio}$`;
    buttom.textContent="Agregar";
    buttom.addEventListener('click', agregarProducto)

    card.appendChild(img);
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(buttom);

    vistaConsolas.appendChild(card);
}

consolas.forEach(crearConsolas);







// Aqui PC
const PC = [
    {
        id: 5,
        nombre: "Portatil Gaming",
        precio: 500,
        img: "../assets/img/productos/portatil.jpeg",
    },
    {
        id: 6,
        nombre: "CPU Gaming",
        precio: 500,
        img: "../assets/img/productos/CPU.jpeg",
    },
    {
        id: 7,
        nombre: "Pantalla Gaming",
        precio: 200,
        img: "../assets/img/productos/pantalla.jpeg",
    },
    {
        id: 8,
        nombre: "Mouse Gaming",
        precio: 40,
        img: "../assets/img/productos/mause.jpg",
    },
    {
        id: 9,
        nombre: "Teclado Gaming",
        precio: 120,
        img: "../assets/img/productos/teclado.jpeg",
    }
];

const vistaPC = document.getElementById("PC");


function crearPC(PC) {
    const card = document.createElement("div");
    card.className='card';
    card.dataset.PC=PC.id;

    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const buttom = document.createElement("buttom");
    buttom.className='buttom';
    p.className='p';

    img.src=PC.img;
    img.alt=PC.nombre; 
    h3.textContent=PC.nombre;
    p.textContent=`${PC.precio}$`;
    buttom.textContent="Agregar";
    buttom.addEventListener('click', agregarProducto)

    card.appendChild(img);
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(buttom);

    vistaPC.appendChild(card);
}

PC.forEach(crearPC);





// Aqui video juegos
const juegos = [
    {
        id: 10,
        nombre: "GTA 5",
        precio: 30,
        img: "../assets/img/productos/gta5.jpeg",
    },
    {
        id: 11,
        nombre: "Halo 5",
        precio: 45,
        img: "../assets/img/productos/halo5.jpg",
    },
    {
        id: 12,
        nombre: "Forza Horizon 5",
        precio: 70,
        img: "../assets/img/productos/forza5.jpg",
    },
    {
        id: 13,
        nombre: "Call of duty",
        precio: 90,
        img: "../assets/img/productos/callofduty.jpg",
    }
];

const vistaJuegos = document.getElementById("juegos");


function crearJuegos(juegos) {
    const card = document.createElement("div");
    card.className='card';
    card.dataset.juegos=juegos.id;

    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const buttom = document.createElement("buttom");
    buttom.className='buttom';
    p.className='p';

    img.src=juegos.img;
    img.alt=juegos.nombre; 
    h3.textContent=juegos.nombre;
    p.textContent=`${juegos.precio}$`;
    buttom.textContent="Agregar";
    buttom.addEventListener('click', agregarProducto)

    card.appendChild(img);
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(buttom);

    vistaJuegos.appendChild(card);
}

juegos.forEach(crearJuegos);






// Aqui celulares
const celulares = [
    {
        id: 14,
        nombre: "Nubia: Red Magic 8 Pro",
        precio: 1100,
        img: "../assets/img/productos/redmagic.jpeg",
    },
    {
        id: 15,
        nombre: "Asus: ROG Phone 7",
        precio: 1000,
        img: "../assets/img/productos/azus.jpeg",
    }
];

const vistaCelulares = document.getElementById("celulares");


function crearCelulares(celulares) {
    const card = document.createElement("div");
    card.className='card';
    card.dataset.celulares=celulares.id;

    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const buttom = document.createElement("buttom");
    buttom.className='buttom';
    p.className='p';

    img.src=celulares.img;
    img.alt=celulares.nombre; 
    h3.textContent=celulares.nombre;
    p.textContent=`${celulares.precio}$`;
    buttom.textContent="Agregar";
    buttom.addEventListener('click', agregarProducto)

    card.appendChild(img);
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(buttom);

    vistaCelulares.appendChild(card);
}

celulares.forEach(crearCelulares);



// carrito de compras
let carrito=[];
let respuesta=document.getElementById('carrito')
function agregarProducto(e) {
    const agregarConsolas=e.target.parentNode.dataset.consolas
    const agregarPC=e.target.parentNode.dataset.PC
    const agregarJuegos=e.target.parentNode.dataset.juegos
    const agregarCelulares=e.target.parentNode.dataset.celulares

    let productoEncontrado = null;

    if (agregarConsolas) {
        productoEncontrado = consolas.find((consolas) => consolas.id === parseInt(agregarConsolas));
    } else if (agregarPC) {
        productoEncontrado = PC.find((PC) => PC.id === parseInt(agregarPC));
    } else if (agregarJuegos) {
        productoEncontrado = juegos.find((juegos) => juegos.id === parseInt(agregarJuegos));
    } else if (agregarCelulares) {
        productoEncontrado = celulares.find((celulares) => celulares.id === parseInt(agregarCelulares));
    }

    if (productoEncontrado) {
        carrito.push(productoEncontrado); // Agregar producto al carrito
        console.log(`Producto agregado al carrito: ${productoEncontrado.nombre}`);
        actualizarTotal(); // Llamar a una función para actualizar el total del carrito
    }
}

function actualizarTotal() {
    // Calcular el precio total del carrito sumando los precios de los productos
    const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    console.log(`Total del carrito: ${total}$`);
} 