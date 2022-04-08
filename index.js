
var menudeselecao = document.getElementById ("menuselect")
var valormenudeselecao
menudeselecao.addEventListener("change", function (){ valormenudeselecao = menudeselecao.value} )



function Cripto (){
//     var textos = document.getElementById ("0").value;
//     var textoCriptografado = "";
//     var passo = document.getElementById ("#passo").value;
//     console.log (texto)
//     console.log (passo)
        if (valormenudeselecao == "base"){
                var texto = document.getElementById ("0")
                var embase64 = btoa(texto.value)
                var p = document.getElementById("resultado")
                p.innerText = embase64
        }
}

var criptografar= document.getElementById ("Criptografar")
var descriptografar = document.getElementById ("Descriptografar")


        var button = document.getElementById ("button")
                button.addEventListener ("click", function (){
                        if (criptografar.checked ){
                                if (valormenudeselecao == "base"){
                                var texto = document.getElementById ("0")
                                var embase64 = btoa(texto.value)
                                var p = document.getElementById("resultado")
                                p.innerText = embase64
                                console.log (embase64)
                                console.log (texto.value)
                        }                
                
                } else if (descriptografar.checked){
                        if (valormenudeselecao == "base"){
                        var texto = document.getElementById ("0")
                        var embase64 = atob(texto.value)
                        var p = document.getElementById("resultado")
                        p.innerText = embase64
                        console.log (embase64)
                        console.log (texto.value)
                }
        }
})

