const textoUsuario=document.querySelector(".textoDelUsuario");
const textoResultado=document.querySelector(".textoLeer");

function botonEncriptador(){
    const textoEncriptado=encriptar(textoUsuario.value);
    textoResultado.value=textoEncriptado;
    textoUsuario.value="";
    textoResultado.style.backgroundImage="none";
}

function encriptar(stringEncriptado){
    let matrizLlave=[["e","enter"], ["a","ai"], ["i","imes"],  ["o","ober"], ["u","ufat"]];
    stringEncriptado=stringEncriptado.toLowerCase();

    for (let i=0; i<matrizLlave.length; i++){
        if(stringEncriptado.includes(matrizLlave[i][0])){
            stringEncriptado=stringEncriptado.replaceAll(matrizLlave[i][0], matrizLlave[i][1]);
        }
    }
    return stringEncriptado;
}

function botonDesencriptador(){
    const textoDesencriptado=desencriptar(textoUsuario.value);
    textoResultado.value=textoDesencriptado;
    textoUsuario.value="";
    textoResultado.style.backgroundImage="none";

}

function desencriptar(stringDesencriptado){
    let matrizLlave=[["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptado=stringDesencriptado.toLowerCase();

    for (let i=0; i<matrizLlave.length; i++){
        if(stringDesencriptado.includes(matrizLlave[i][0])){
            stringDesencriptado=stringDesencriptado.replaceAll(matrizLlave[i][1], matrizLlave[i][0]);
        }
    }
    return stringDesencriptado;
}

function copiarTexto(){
    textoResultado.select();
    navigator.clipboard.writeText(textoResultado.value)
    alert("Texto copiado de forma exitosa :)");
}

