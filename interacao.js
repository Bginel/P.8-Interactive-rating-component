function acao() {

    document.querySelector('div#box').style.display = 'none'
    document.querySelector('div#box2').style.display = 'block'
   
}


 function foco1() {
   const teste = document.querySelector('h3').innerHTML = `You selected 1 out of 5`
   return teste 
 } 
 function foco2() {
   const teste = document.querySelector('h3').innerHTML = `You selected 2 out of 5`
   return teste 
 } 
 function foco3() {
   const teste = document.querySelector('h3').innerHTML = `You selected 3 out of 5`
   return teste 
 } 
 function foco4() {
   const teste = document.querySelector('h3').innerHTML = `You selected 4 out of 5`
   return teste 
 } 
 function foco5() {
   const teste = document.querySelector('h3').innerHTML = `You selected 5 out of 5`
   return teste 
 } 

 function perdeFoco(event) {
    document.getElementsByClassName('numeros')
 }
