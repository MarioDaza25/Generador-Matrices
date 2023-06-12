
function agregarCeldas() {
    let filas = parseInt(document.getElementById("numeroFilas").value);
    let columnas = parseInt(document.getElementById("numeroColumnas").value);
    let minimo = parseInt(document.getElementById("desde").value);
    let maximo = parseInt(document.getElementById("hasta").value);
    let tabla = document.getElementById("tabla_original");
    tabla.innerHTML = "";


    //Crea Tabla Inicial 
    for (let i = 0; i < filas; i++) {
        let fila = document.createElement("tr");
        for (let j = 0; j < columnas; j++){
            let columna = document.createElement("td");
            columna.textContent = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
            fila.appendChild(columna);  
        }
        tabla.appendChild(fila);
    } 
    
    
} 
// Ordena tabla Final    
function ordenarTabla() {
    const arrayA = [];
    const arrayC = [];
    let tabla = document.getElementById("tabla_original");
    let filas = tabla.getElementsByTagName("tr");
    let newTabla = document.getElementById("tabla_ordenada");
    let nFilas = parseInt(document.getElementById("numeroFilas").value);
    let nColumnas = parseInt(document.getElementById("numeroColumnas").value);
    newTabla.innerHTML = ""
    
    //Crea array y se llena con valores de tabla Html
    for (let i = 0; i < filas.length; i++) {
        let celdas = filas[i].getElementsByTagName("td");
        for (let j = 0; j < celdas.length; j++) {
            let valor = celdas[j].textContent;
            arrayA.push(valor)
        }
    }
    //Metodo para organizar array de menor a mayor
    let arrayB = arrayA.flat().sort((a, b) => (a - b));
    
    //Separa array con metodo splice
    for (let k = 0; k < nFilas; k++){
        if (k % 2 === 0) {
            arrayC[k] = arrayB.splice(0, (nColumnas));
        } else { arrayC[k] = arrayB.splice(0, (nColumnas)).reverse() }
    };
    
    //Crea y muestra nuev atabla en Html
    for (let i = 0; i < nFilas; i++) {
        let fila = document.createElement("tr");
        for (let j = 0; j < nColumnas; j++){
            let columna = document.createElement("td");
            columna.textContent = arrayC[i][j];
            fila.appendChild(columna);  
        }
        newTabla.appendChild(fila);
    } 
    
}
    




