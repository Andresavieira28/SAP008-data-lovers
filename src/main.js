import data from "./data/harrypotter/data.js";
import {mapAll, filterHouse, createCard} from "./data.js";
//visualizar todos os personagens
const fullCast = data.characters;
function displayCharaList(){
    const charactersPrint = document.getElementById('lista');
    return charactersPrint.innerHTML = fullCast.map(createCard).join('');
}
displayCharaList()
//filtrar todos e por casa  
let selectCharacters = document.querySelector('.select')
selectCharacters.addEventListener('change', 
function select(){
    if(displayCharaList.value === "VerTodos"){
        let listAllCharacters = mapAll(displayCharaList.value)
        printName(listAllCharacters)
    }else{
    let listName = filterHouse(filterHouse.value)
        printName(listName)
    }
})     
function printName(charactersHouse){
    console.log(charactersHouse)
    document.getElementById('lista').innerHTML = ""
    for (let i = 0; i < charactersHouse.length; i++){
       document.getElementById('lista').innerHTML += charactersHouse[i] + "</br>"
    }
}