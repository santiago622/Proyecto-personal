
//Dark Mode
flagDarkMode = false;
const DarkMode =()=>{
   !flagDarkMode ? document.getElementById("html").classList ="dark" : document.getElementById("html").classList ="light";
    flagDarkMode=!flagDarkMode;
}
//borrar el contenido del display
const clearDisplay = () => document.getElementById("display").value = ""

//Show in display press numbers
const showDisplay = (value) =>document.getElementById("display").value += value

const resolver = () => {
    //Obtener el valor
    let x = document.getElementById('display').value;
    console.log(x);
    //Evaluar la operacion matematica y devolver el resultado
    let y = eval(x);
    if (x === undefined || x === null || x === "") {        
        y = 0;
    }
    //Mostrar el resultado en el display 
    document.getElementById('display').value = y;
}

//contenedor
const container = `<div id="container" class="paper container"> </div>`;
//navbar
const navbarHtml = `
<nav class="border fixed split-nav">
    <div class="nav-brand">
    <h3><a>Calculadora SP</a></h3>
    </div>
    <div class="collapsible">
    <input id="collapsible1" type="checkbox" name="collapsible1">
    <label for="collapsible1">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
    </label>
    <div class="collapsible-body">
        <ul class="inline">
        <li><a href="#" onclick="DarkMode()">Dark Mode</a></li>
        </ul>
    </div>
    </div>
</nav>
`;

//divCalculadora
const divCalculadora = `<div id="calculadora"> </div>`;

//creo el row Display
// const rowDisplay = document.createElement('div');
// rowDisplay.id = 'rowDisplay';
// rowDisplay.className = 'row rDisplay margin';

const rowDisplay = `
    <div id="row" class="row rDisplay margin">
    <div class="col-9 col"><input type="text" class="display btn-calc" id="display" oninput="validateInput(event)"></div>
    <div class="col-3 col"><button class="btn-large btn-block btn-danger" onclick="clearDisplay()">AC</button></div>
    </div>
`;

const row4 = `
    <div class="row margin ">
    <div class="col-3 col"><button class="btn-calc btn-block btn-secondary-outline"
        onclick="showDisplay('7')">7</button></div>
    <div class="col-3 col"><button class="btn-calc btn-block btn-secondary-outline"
        onclick="showDisplay('8')">8</button></div>
    <div class="col-3 col"><button class="btn-calc btn-block btn-secondary-outline"
        onclick="showDisplay('9')">9</button></div>
    <div class="col-3 col"><button class="btn-calc btn-block btn-secondary" onclick="showDisplay('+')">+</button>
    </div>
`;

const row3 = `
    <div class="row margin">
    <div class="col-3 col"><button class="btn-calc btn-block btn-secondary-outline"
        onclick="showDisplay('4')">4</button></div>
    <div class="col-3 col"><button class="btn-calc btn-block btn-secondary-outline"
        onclick="showDisplay('5')">5</button></div>
    <div class="col-3 col"><button class="btn-calc btn-block btn-secondary-outline"
        onclick="showDisplay('6')">6</button></div>
    <div class="col-3 col"><button class="btn-large btn-block btn-secondary" onclick="showDisplay('-')">-</button>
    </div>
    </div>
`;

const row2 = `
    <div class="row margin">
    <div class="col-3 col"><button class="btn-calc btn-block btn-secondary-outline"
        onclick="showDisplay('1')">1</button></div>
    <div class="col-3 col"><button class="btn-calc btn-block btn-secondary-outline"
        onclick="showDisplay('2')">2</button></div>
    <div class="col-3 col"><button class="btn-calc btn-block btn-secondary-outline"
        onclick="showDisplay('3')">3</button></div>
    <div class="col-3 col"><button class="btn-large btn-block btn-secondary" onclick="showDisplay('*')">*</button>
    </div>
    </div>
`;

const row1 = `
    <div class="row margin">
    <div class="col-3 col"><button class="btn-calc btn-block btn-secondary-outline"
        onclick="showDisplay('0')">0</button></div>
    <div class="col-3 col"><button class="btn-calc btn-block btn-warning-outline"
        onclick="showDisplay('.')">.</button></div>
    <div class="col-3 col"><button class="btn-calc btn-block btn-success" onclick="resolver()">=</button></div>
    <div class="col-3 col"><button class="btn-large btn-block btn-secondary " onclick="showDisplay('/')">/</button>
    </div>
    </div> 
`;

// defino un arreglo con los caracteres permitidos para realizar una operacion matematica
const allowedChars = ['+', '-', '*', '/', '.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
 
//valido cada elemento ingresado para verificar que es un caracter valido y esta definido en el arreglo allowedChars
function validateInput(event) {
    const input = event.target;
    const currentValue = input.value;
    const lastChar = currentValue[currentValue.length - 1];
    if (allowedChars.indexOf(lastChar) === -1) {
      input.value = currentValue.slice(0, currentValue.length - 1);
      event.preventDefault();
    }
  }


const addElements = (idDiv, elto) => {
    const divTarget = document.getElementById(idDiv);
    divTarget.innerHTML += elto; 
} 

//Evento load - se ejecuta cuando se carga completamente la pagina  
window.addEventListener('load', function() {
    //verifico si se ejecuto el evento load
    console.log("evento load");
    addElements('app', container);
    addElements('container', navbarHtml);
    addElements('container', divCalculadora);
    addElements('calculadora', rowDisplay);
    addElements('calculadora', row4);
    addElements('calculadora', row3);
    addElements('calculadora', row2);
    addElements('calculadora', row1);
    //obtengo los elementos del input de la calculadora
    const inputElement = document.getElementById('display');
    //agrego un listener al input para controlar que los caracteres ingresados sean los q se encuentran definidos en el arreglo
    inputElement.addEventListener('input', validateInput);
});




