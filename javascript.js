const textoEntrada = document.querySelector(".entradaTexto")
const textoSalida = document.querySelector(".mensajeAbajoPersona")

function copiar(){
    textoSalida.select()
    navigator.clipboard.writeText(textoSalida.value)
    textoSalida.value = ""
    alert("¡Texto copiado!")
}

function botonEncriptar(){
    const textoEncriptado =encriptar(textoEntrada.value)
    textoSalida.value = textoEncriptado
    textoEntrada.value= ""
    document.getElementById("imagenPersona").style.display = "none"
    document.getElementById("mensajeNoEncontrado").style.display= "none"
    document.getElementById("botonCopiar").style.display ="show"
    document.getElementById("botonCopiar").style.display ="inherit"
}

function encriptar(stringEncriptada){
    let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase()

    for (let i = 0; i < matrixCode.length; i++) {
      if (stringEncriptada.includes(matrixCode[i][0])) {
        stringEncriptada = stringEncriptada.replaceAll(matrixCode[i][0], matrixCode[i][1])
      }
    }
    return stringEncriptada

}

function botonDesencriptar(){
    const textoEncriptado =desencriptar(textoEntrada.value)
    textoSalida.value = textoEncriptado
    textoEntrada.value= ""
    document.getElementById("imagenPersona").style.display = "none"
    document.getElementById("mensajeNoEncontrado").style.display= "none"
    document.getElementById("botonCopiar").style.display ="show"
    document.getElementById("botonCopiar").style.display ="inherit"

}

function desencriptar(stringDesencriptada){
    let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase()
    for (let i = 0; i < matrixCode.length; i++) {
      if (stringDesencriptada.includes(matrixCode[i][1])) {
        stringDesencriptada = stringDesencriptada.replaceAll(matrixCode[i][1], matrixCode[i][0])
      }
    }
    return stringDesencriptada
  }

