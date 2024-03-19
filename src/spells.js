/* eslint-disable no-console */
import { filterSPells } from "./dataSpells.js";
import data from "./data/harrypotter/data.js";


const spellsPrint = document.getElementById('listSpells');
const fullSpells = data.spells;
const selectSpells = document.getElementById('selectFiltros');
const btnRefresh = document.querySelector('#refresh');

function createSpells(spells){
  return `<section class="card">
  <br><strong>Nome: </strong>${spells.name}
  </br><strong>Tipo de feitiço: </strong>${spells.spell_type}
  </br><strong>Descrição: </strong>${spells.description}
  </section>`
}
function displaySpellsList() {
  spellsPrint.innerHTML = fullSpells.map(createSpells).join('');
}
displaySpellsList()

selectSpells.addEventListener('change', (e) => {
  if(e.target.value) {
    const listSpells = filterSPells(e.target.value, fullSpells);
    spellsPrint.innerHTML = listSpells.map(createSpells).join('');
  }
});

btnRefresh.addEventListener('click',
function refresh(){
  window.location.reload();
})

let btnTop = document.getElementById('btn-top')
btnTop.addEventListener('click',
function buttonTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})
window.onscroll = function() {
  scrollFunction()
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
}
