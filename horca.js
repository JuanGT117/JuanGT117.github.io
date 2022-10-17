let btnNuevoJuego = document.getElementById("inicio");
    btnNuevoJuego.addEventListener("click", function () {
        location.reload();
      });
      

var palabras = ["SEPULTURA", "VOCAL", "JUDO", "CONTENEDOR","DELITO", "RACIMO", "RIACHUELO", "AMORTIGUAR", "MOSTAZA", "BOLSO", "IMAGEN", "FUNDA", "RASCAR", "ASPIRAR", "PATEAR", "VEHICULO", "ELEGANTE", "ANCIANO", "MEZCLA", "ENCADENADO", "SENDERO", "BACTERIA", "MITAD", "NINJA", "CIRCUITO", "AGUJA", "IMPRESORA"];
var tablero = document.getElementById("horca").getContext("2d");
var palabraSecreta = "";
var palabraCorrecta = "";
var errores = 8;
let numeroDeErrores = 8
let letrasIncorrectas = [];
var letras = [];
let letraElegida = [];

function escojerPalabraSecreta(){
    var palabra = palabras[Math.floor(Math.random() * palabras.length)]
    palabraSecreta = palabra
    console.log(palabraSecreta)
}


function verificarLetraClicada(key) {
    if (letras.length < 1 || letras.indexOf(key) < 0) {
      letras.push(key)
      return false
      
    }
    else {
      letras.push(key)
      return true
    }
 }
  
  function adicionarLetraCorrecta(i) {
    palabraCorrecta += palabraSecreta[i].toUpperCase()
  }
  
  function adicionarLetraIncorrecta(letter) {
    if (palabraSecreta.indexOf(letter) <= 0) {
      errores -= 1
    }
  }


function verificarFinJuego(letra) {
   if(letraElegida.length < palabraSecreta.length) { 
      letrasIncorrectas.push(letra);
      

      if (letrasIncorrectas.length > numeroDeErrores) {
        perdiste()
      }
      else if(letraElegida.length < palabraSecreta.length) {
        adicionarLetraIncorrecta(letra)
        escribirLetraIncorrecta(letra, errores)
      }
    }
   } 
  

  function verificarVencedor(letra) {
    letraElegida.push(letra.toUpperCase());
    if (letraElegida.length == palabraSecreta.length) {
  
      ganaste()
      
    }
  
  }

  function verificarLetra(keyCode) {
    if (typeof keyCode === "number" && keyCode >= 65 && keyCode <= 90) {
      return true;
    } else {
      return false;
    }
  }


  function iniciarJuego(){
    document.getElementById("botonIniciarJuego").style.display = "none";
    document.getElementById("inicio").style.display = "flex";
    escojerPalabraSecreta()
    dibujarCanvas()
    dibujarLinea()

    document.onkeydown = (e) => {
        
        let letra = e.key.toUpperCase()
       
        if (letrasIncorrectas.length <= numeroDeErrores) {
          if (!verificarLetraClicada(e.key) && verificarLetra(e.keyCode)) {
            if (palabraSecreta.includes(letra)) {
              adicionarLetraCorrecta(palabraSecreta.indexOf(letra))
              for (let i = 0; i < palabraSecreta.length; i++) {
                if (palabraSecreta[i] === letra) {
                  escrribirLetraCorrecta(i)
                  verificarVencedor(letra)
    
                }
              }
    
            }
          
            else {
              if (!verificarLetraClicada(e.key) && !verificarVencedor(letra)) return
              dibujarAhorcado(errores)
              verificarFinJuego(letra)
            }
          }
        }
        else {
          
        }
    
      };
}
