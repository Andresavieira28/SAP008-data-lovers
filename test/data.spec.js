
import {filterHouse, countCharactersHogwarts, selectNameAz, selectNameZa, filterFind, calculateCharactersPercentage} from '../src/data.js';

const HarryPotterData = [
{
  name: "Hermione",
  house: "Gryffindor"
},
{
  name: "Draco",
  house: "Slytherin"
},
{
  name: "Luna",
  house: "Hufflepuff"
}]
//calculo
describe('Teste calculateCharactersPercentage', () => {
  it('is a function', () => {
    expect(typeof calculateCharactersPercentage).toBe('function');
  });

  it('should calculate percentage', () => {
    expect(calculateCharactersPercentage(5,1)).toBe(20);
  });
});
//filtro ver todos
describe('Teste FilterHouse', () => {
  it('is a function', () => {
    expect(typeof filterHouse).toBe('function');
  }); 

  it('should returns "[{ Name: "Hermione", House: "Gryffindor"}]" ', () => {
    expect(filterHouse('Gryffindor', HarryPotterData)).toStrictEqual([{
      name: "Hermione",
      house: "Gryffindor"
    }]);
  });
});
// filtro por casa
describe('Teste countCharactersHogwarts', () => {
  it('is a function', () => {
    expect(typeof countCharactersHogwarts).toBe('function');
  });

  it('should returns `tamanho da array "3"`', () => {
    expect(countCharactersHogwarts(HarryPotterData)).toBe(3);
  });  
})
// ordenamento
describe('Teste selectNameAz', () => {
  it('is a function', () => {
    expect(typeof selectNameAz).toBe('function');
  });

  const HarryPotterAz = [
  {
    name: "Harry",
    house: "Gryffindor"
  },
  {
    name: "Severo",
    house: "Slytherin"
  },
  {
    name: "Cedrico",
    house: "Hufflepuff"
  }]

  const listaOrdenada = selectNameAz(HarryPotterAz)

  it('should returns `O primeiro nome da ordem de A-Z "Cedrico"`', () => {
    expect(listaOrdenada[0].name).toBe('Cedrico');
  });
});

describe('Teste selectNameZa', () => {
  it('is a function', () => {
    expect(typeof selectNameZa).toBe('function');
  });

  const HarryPotterZa = [
  {
    name: "Lucio",
    house: "Slytherin"
  },
  {
    name: "Rony",
    house: "Gryffindor"
  },
  {
    name: "Newton",
    house: "Hufflepuff"
  }]

  const listaOrdenadaZa = selectNameZa(HarryPotterZa)

  it('should returns `O primeiro nome da ordem de Z-A "Rony"`', () => {
    expect(listaOrdenadaZa[0].name).toBe('Rony');
  });
});
//campo de busca
describe('Teste filterFind', () => {
  it('is a function', () => {
    expect(typeof filterFind).toBe('function');
  });

  it('should returns "[{ Name: "Hermione", House: "Gryffindor"}]" ', () => {
    expect(filterFind('Hermione', HarryPotterData)).toStrictEqual([{
      name: "Hermione",
      house: "Gryffindor"
    }]);
  });
})