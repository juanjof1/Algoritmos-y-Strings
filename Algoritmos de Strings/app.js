function text() {
    const texto = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged';
    document.getElementById('texto').innerHTML = (text);

    for (let texto = 0; texto < 5; texto ++) {
        return(text);
    }
}

function polidromo (cadena) {

    let array = cadena.split ("");
    let reverse = array.reverse();

    return cadena == reverse.join("") ? "Si es" : "No es"
}

console.log(polidromo ("lorem"));
console.log(polidromo("Ipsum lorem"));