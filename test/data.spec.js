
import {createCard, filterHouse, countCharactersHogwarts, selectNameAz, selectNameZa, filterFind} from '../src/data.js';

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

describe('Teste createCard', () => {
  it('is a function', () => {
    expect(typeof createCard).toBe('function');
  });

  // it('returns `anotherExample`', () => {
  //   expect(example()).toBe('OMG');
  // });
});

describe('Teste FilterHouse', () => {
  it('is a function', () => {
    expect(typeof filterHouse).toBe('function');
  }); 

  it('should returns "[{ Name: "Hermione", House: "Gryffindor"}]" ', () => {
    expect(filterHouse(HarryPotterData)).toBe([{
      name: "Hermione",
      house: "Gryffindor"
    }]);
  });
});

describe('Teste countCharactersHogwarts', () => {
  it('is a function', () => {
    expect(typeof countCharactersHogwarts).toBe('function');
  });

  // it('returns `example`', () => {
  //   expect(example()).toBe('example');
  // });  
})

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

  it('returns `anotherExample`', () => {
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

  it('returns `anotherExample`', () => {
    expect(listaOrdenadaZa[0].name).toBe('Rony');
  });
});

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