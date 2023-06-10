function convertir(cantidadEntradas,categoria) {
    let entradaEstudiante = 40
    let entradaTrainee = 100
    let entradaJunior = 170
    let totalAPagar = 0

    if (categoria == Estudiante) {
        totalAPagar = cantidadEntradas * entradaEstudiante
    } else if (categoria == Trainee) {
        totalAPagar = cantidadEntradas * entradaTrainee
    } else {
        totalAPagar = cantidadEntradas * entradaJunior
    }
    return totalAPagar
}

let formulario = document.getElementById("form_tickets")

let categoria = document.getElementById("Categoria")

let cantidad = document.getElementById("Cantidad")

let divTotalAPagar = document.getElementById("TotalAPagar")

formulario.addEventListener("reset", ()=>{
    divTotalAPagar.textContent = ""
})

formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault();

    divTotalAPagar.textContent = convertir(cantidad.value,categoria.value)
})