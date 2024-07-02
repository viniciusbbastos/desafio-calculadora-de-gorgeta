

function limparTexto(input) {
    if (input.value === "0" || input.value === "Custom") {
        input.value = "";
    }
}

function reporTexto(input) {
    if (input.value === ""){
        input.value = "0";
    }
}

function reporTextoC(input) {
    if (input.value === ""){
        input.value = "Custom"
    }
}