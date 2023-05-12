require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('test if fetchProducts is a "function"', () => {
    expect(typeof fetchProducts).toEqual('function');
  });

  it('if fetch was called ', async () => {
    expect.assertions(1);
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('test if called function fetchProducts with args "computador"', async () => {
    expect.assertions(1);
    const URL = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts("computador");
    expect(fetch).toBeCalledWith(URL);
  });

  it('Teste se o retorno da função fetchProducts com o argumento "computador"', async () => {
    expect.assertions(1);
    const response = await fetchProducts('computador');
    expect(response).toMatchObject(computadorSearch);
  });

  it('Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: "You must provide an url"', async () => {
    try {
      await fetchProducts();
    } catch (e) {
      expect(e).toEqual(new Error('You must provide an url'));
    }
  });
});
