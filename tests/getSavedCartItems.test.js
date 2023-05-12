const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Se ao executar getSavedCartItems, o método localStorage.getItem deveria der chamado',async () => {
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalled();
  });
});
