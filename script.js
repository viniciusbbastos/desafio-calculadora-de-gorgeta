
function limparTexto(input) {
    if (input.value === "0" || input.value === "Custom") {
        input.value = "";
        input.style.textAlign = "right";
        input.style.paddingRight = "5%";
    }
}

function reporTexto(input) {
    if (input.value === ""){
        input.value = "0";
    }
}

function reporTextoC(input) {
    if (input.value === ""){
        input.value = "Custom";
        input.style.textAlign = "center";
        input.style.paddingRight = "0";
    }
}