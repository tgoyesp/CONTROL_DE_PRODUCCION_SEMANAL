const selectDiasproduccion =  document.getElementById("id-select-dias")
const btncargarproduccion = document.getElementById("id-btn-cargar-produccion")
const btnpresentar = document.getElementById("id-btn-presentar-produccion")
const txtpresentarproduccion = document.getElementById("id-listado-produccion")
const btnmayorproduccion = document.getElementById("btn-mayor-produccion")
const txtpresentarmayor = document.getElementById("id-txt-mayor-produccion")
const btnmenorproduccion = document.getElementById("btn-menor-produccion")
const txtpresentarmenor = document.getElementById("id-txt-menor-produccion")
const btncalcularpromedio = document.getElementById("btn-calcular-promedio")
const txtpresentarpromedio = document.getElementById("id-txt-promedio")
const btnarribapromedio = document.getElementById("btn-arriba-promedio")
const txtpresentararriba = document.getElementById("id-txt-arriba-promedio")
const btndiascriticos = document.getElementById("btn-critico")
const txtpresentarcriticos = document.getElementById("id-txt-critico")
const btnproduccionrepetida = document.getElementById("btn-produccion-repetida")
const txtproduccionrepetida = document.getElementById("id-txt-repetida")
const btncalculartotal = document.getElementById("btn-calcular-total")
const txtrespuestatotal = document.getElementById("id-txt-total")


let vectordias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
const vectorproduccion = []


btncalculartotal.addEventListener("click", function(e)
{
    txtrespuestatotal.value = calculartotal ()
})

btndiascriticos.addEventListener("click", function(e)
{
    txtpresentarcriticos.value = diascriticos ()
})

btnarribapromedio.addEventListener("click", function(e)
{
    txtpresentararriba.value = arribapromedio()
})

btncalcularpromedio.addEventListener("click", function(e)
{
    txtpresentarpromedio.value = calcularpromedio () .toFixed(2)
})

btnmenorproduccion.addEventListener("click", function(e)
{
    const indice = menorproduccion()
    const menor = vectorproduccion [indice]
    const dia = vectordias[indice]

    txtpresentarmenor.value = "Dia: " + dia + " - Valor: " + menor
})

btnmayorproduccion.addEventListener("click", function(e)
{
    const indice = mayorproduccion()
    const mayor = vectorproduccion[indice]
    const dia = vectordias [indice]

    txtpresentarmayor.value = "Dia: " + dia + " - Valor: " + mayor
})

btncargarproduccion.addEventListener("click", function(e)
{
    const dimension = selectDiasproduccion.value
    cargarproduccion (dimension)
    console.log (vectorproduccion)
})



btnpresentar.addEventListener("click", function(e)
{
    txtpresentarproduccion.value = vectorproduccion.join(",")
})


btnproduccionrepetida.addEventListener("click", function(e)
{
    txtproduccionrepetida.value = produccionrepetida ()
})


function cargarproduccion (dimension)
{
    vectorproduccion.length = 0
    for (let i=0; i<dimension; i++)
    {
        const numaleatorio = Math.ceil(Math.random() * 1000)
        vectorproduccion [i] = numaleatorio
    }
}

function mayorproduccion ()
{
    let mayor = 0;
    let index = 0;

    for (let i= 0; i<vectorproduccion.length; i++)  
    {
        const produccion = vectorproduccion[i]
        if (produccion > mayor)
        {
            mayor = produccion
            index = i
        }
    }
    return index
}


function menorproduccion ()
{
    let menor = 1001
    let index = 0
    for (let i=0; i< vectorproduccion.length; i++)
    {
        const produccion = vectorproduccion [i]
        if (produccion<menor)
        {
            menor = produccion
            index = i
        }
    }
    return index
}

function calcularpromedio ()
{
    let suma = 0
    let promedio = 0
    for (let i = 0; i< vectorproduccion.length; i++)
    {
        suma += vectorproduccion[i]
    }
    promedio = suma/vectorproduccion.length
    return promedio
}


function arribapromedio ()
{
    const promedio = calcularpromedio ()
    let resultado = ""
    for (let i=0; i<vectorproduccion.length; i++ )
    {
        const produccion = vectorproduccion[i]
        if ( produccion>promedio)
        {
            resultado += "Dia: " + vectordias [i] + " Valor: " + vectorproduccion[i] + "\n"
        }
    }
    return resultado
}


function diascriticos ()
{
    
    let resultado = ""
    for (let i =0; i<vectorproduccion.length; i++)
    {
        const produccion = vectorproduccion[i]
        if (produccion < 100)
        {
            resultado += "Dias: "+ vectordias [i] + " - Valor: " + vectorproduccion[i] + "\n"
        }
    }
    if (resultado == "")
    {
        return "No hay dias criticos"
    }
    return resultado
}

function produccionrepetida ()
{
    let resultado = ""
    for (let i=0; i< vectorproduccion.length; i++)
    {
        for (let j=i + 1; j<vectorproduccion.length; j++)
        {
            const produccion1 = vectorproduccion[i]
            const produccion2 = vectorproduccion[j]
            if (produccion1==produccion2)
            {
                resultado += "Dias repetidos: " + vectordias[i] + " Y " + vectordias[j] + "\n" +
                "Valor repetido: " + vectorproduccion[i],m 
            }
        }
    }
    if (resultado == "")
    {
        return "No hay produccion repetida"
    }
    
    return resultado
}

function calculartotal ()
{
    let suma = 0
    for (let i=0; i < vectorproduccion.length; i++)
    {
        suma += vectorproduccion[i]
    }
    return suma
}
