const items = document.querySelector('.items');
const container = document.querySelector('.container');
const cardItems = document.getElementsByClassName('cart__items')[0];
const buyItem = document.getElementsByClassName('buy-item')[0];
const totalPrice = document.getElementsByClassName('total-price')[0];
const logoutIcon = document.getElementsByClassName('logout-btn')[0];
const btnSearch = document.getElementsByClassName('fa-search')[0];
const account = document.getElementsByClassName('fa-search')[0];
const myProducts = document.getElementsByClassName('my-products')[0];
const login = document.getElementsByClassName('login')[0];
const profile = document.getElementsByClassName('profile')[0];


const isVerifyAuth = async () => {
  const token = localStorage.getItem("token");
  const verifyToken = await fetchGetProfileClient(token)   
  if(verifyToken.message === 'unauthorized') {
    alert("Você não fez o login, por favor faça o login")
    window.location.href = "../index.html";  
  }

  return token
}


myProducts.addEventListener('click', () => {
  const token = localStorage.getItem("token");
  
  if (token) {
    window.location.href = "./index.html";  
    } else {
      alert("Você não fez o login.")
    }
})

login.addEventListener('click', async () => {
  const token = localStorage.getItem("token");
  const verifyToken = await fetchGetProfileClient(token) 
  if (!verifyToken.message) {
    const resposta = confirm("você ja fez login! deseja sair ?")
    if (resposta) { 
    localStorage.removeItem("token");
    window.location.href = "../login/index.html";  
    }
    } else {
    window.location.href = "../login/index.html";  
    }
})

profile.addEventListener('click', async () => {
  const token = localStorage.getItem("token");
  const verifyToken = await fetchGetProfileClient(token) 
  if (!verifyToken.message) {
    window.location.href = "../profile/index.html";  
    } else {
      alert("Você não fez o login.")
    }
})

logoutIcon.addEventListener('click', () => {
  const token = localStorage.getItem("token");
  if (token) {
    const resposta = confirm("Você deseja sair ?");
    if (resposta) {
      localStorage.removeItem("token");
    }
  } else {
    alert("Você não fez o login.")
  }
});




const createProductItemElement = ({ date, orderNumber, totalPrice, produtoName, produtoImage }) => {
  // Crie um novo elemento de pedido
  var orderItem = document.createElement('div');
  orderItem.className = 'order-item';

  // Crie o cabeçalho do pedido
  var orderHeader = document.createElement('div');
  orderHeader.className = 'order-header';
  orderHeader.innerHTML = `
    <span>Data: ${date}</span>
    <span>Pedido N°: #${orderNumber}</span>
    <span>Total: R$${totalPrice}</span>
  `;

  // Crie a imagem do produto
  var image = document.createElement('img');
  image.className = 'order-image';
  image.src = produtoImage;
  image.alt = 'Imagem do Produto';

  // Crie os detalhes do pedido
  var orderDetails = document.createElement('div');
  orderDetails.className = 'order-details';

  // Crie uma lista não ordenada
  var ul = document.createElement('ul');

  // Crie um item de lista para o novo produto
  var li = document.createElement('li');
  li.textContent = produtoName;

  // Adicione o item de lista à lista não ordenada
  ul.appendChild(li);

  // Adicione a lista não ordenada aos detalhes do pedido
  orderDetails.appendChild(ul);

  // Adicione o cabeçalho, a imagem e os detalhes do pedido ao item de produto
  orderItem.appendChild(orderHeader);
  orderItem.appendChild(image);
  orderItem.appendChild(orderDetails);

  return orderItem;
};

// Função para exibir os produtos na lista de pedidos
const showProducts = async () => {
  const token = await isVerifyAuth();
  const data = await fetchMyItemsAll(token);

  // Obtenha a referência para a div container
  var container = document.querySelector('.container');

  // Obtenha a referência para a div de pedidos
  var orderDiv = container.querySelector('.order');

  data.forEach(async item => {
    // Obtenha o produto com base no ID do produto do item
    const product = await fetchItem(item.produtoId);

    // Crie o elemento de item de produto
    const productItem = createProductItemElement({
      date: item.pedidoDate,
      orderNumber: item.pedidoId,
      totalPrice: product.produtoPrice,
      produtoName: product.produtoName,
      produtoImage: product.produtoImage
    });

    // Adicione o item de produto à div de pedidos
    orderDiv.appendChild(productItem);
  });
};

// Chame a função para exibir os produtos na lista de pedidos

window.onload = async () => { 
  await showProducts();
};


