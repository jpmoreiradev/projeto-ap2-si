require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Deveria ser uma função', () => {
    expect(typeof fetchItem).toEqual('function');
  });

  it('fetch deveria ser chamado uma vez', async () => {
    expect.assertions(1);
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('test if called function fetchProducts with args "computador"', async () => {
    expect.assertions(1);
    const URL = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalledWith(URL);
  });

  it('Teste se o retorno da função fetchProducts com o argumento "computador"', async () => {
    expect.assertions(1);
    const response = await fetchItem('MLB1615760527');
    expect(response).toMatchObject(item);
  });

  it('Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: "You must provide an url"', async () => {
    try {
      await fetchItem();
    } catch (e) {
      expect(e).toEqual(new Error('You must provide an url'));
    }
  });
});
