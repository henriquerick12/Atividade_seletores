/*
  1. Selecione o elemento de id "ingredients" e o atribua a uma constante.  
  Mostre somente o elemento selecionado no console.
*/
const idIngredients = document.getElementById('ingredients')
console.log(idIngredients)

/*
  2. Selecione o elemento <h1> e o atribua a uma constante.
   Mostre somente o elemento selecionado no console.
*/
const h1Element = document.getElementsByTagName('h1')
console.log(h1Element)

/*
  3. Selecione o elemento com classe "recipe" e o atribua a uma constante.
   Mostre somente elemento selecionado no console.
*/
const recipeElement = document.getElementsByClassName('recipe')
console.log(recipeElement)

/*
  Desafio 1: Selecione todos os elementos <h2> da página e altere a cor do texto de
   todos para azul.
*/
const h2All = document.querySelectorAll("h2")
h2All.forEach((h2) => {
  h2.style.color = "blue"
})

/* 
  Desafio 2: Selecione todos os elementos <input> da página, e altere a cor da borda de
   todos para vermelho.
*/
const inputAll = document.querySelectorAll("input")
inputAll.forEach((input) => {
  input.style.borderColor = "red"
})