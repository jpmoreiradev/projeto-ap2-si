const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Se ao executar saveCartItems, o método localStorage.setItem deveria der chamado',async () => {
    const elementHtml = '<ol><li>Item</li></ol>';
    await saveCartItems(elementHtml);
    expect(localStorage.setItem).toBeCalled();
  });
});
