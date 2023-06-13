const items = document.querySelector('.items');
const cardItems = document.getElementsByClassName('cart__items')[0];
const buyItem = document.getElementsByClassName('buy-item')[0];
const totalPrice = document.getElementsByClassName('total-price')[0];
const emptyCart = document.getElementsByClassName('empty-cart')[0];
const buyCart = document.getElementsByClassName('buy-cart')[0];
const cartIcon = document.getElementsByClassName('material-icons')[0];
const logoutIcon = document.getElementsByClassName('logout-btn')[0];
const searchInput = document.getElementsByClassName('search-txt')[0];
const btnSearch = document.getElementsByClassName('fa-search')[0];
const account = document.getElementsByClassName('fa-search')[0];
const myProducts = document.getElementsByClassName('my-products')[0];
const login = document.getElementsByClassName('login')[0];
const profile = document.getElementsByClassName('profile')[0];


// Utils
document.getElementsByClassName('cart')[0].classList.toggle('invisible-cart');
document.getElementsByClassName('container-cartTitle')[0].classList.toggle('invisible-cart');

cartIcon.addEventListener('click', () => {
  document.getElementsByClassName('cart')[0].classList.toggle('invisible-cart');
  document.getElementsByClassName('container-cartTitle')[0].classList.toggle('invisible-cart');
});

myProducts.addEventListener('click', async () => {
  const token = localStorage.getItem("token");
  const verifyToken = await fetchGetProfileClient(token) 
  if (!verifyToken.message) {
    window.location.href = "./orders/index.html";  
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
    window.location.href = "./login/index.html";  
    }
    } else {
    window.location.href = "./login/index.html";  
    }
})

profile.addEventListener('click', async () => {
  const token = localStorage.getItem("token");
  const verifyToken = await fetchGetProfileClient(token) 
  if (!verifyToken.message) {
    window.location.href = "./profile/index.html";  
    } else {
      alert("Você não fez o login.")
    }
})


logoutIcon.addEventListener('click', async () => {
  const token = localStorage.getItem("token");
  const verifyToken = await fetchGetProfileClient(token) 
  
  if (verifyToken.message === 'unauthorized') {
    const resposta = confirm("Você deseja sair ?");
    if (resposta) {
      localStorage.removeItem("token");
    }
  } else {
    alert("Você não fez o login.")
  }
});

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createIconSpan = () => {
  const span = createCustomElement('span', 'material-symbols-outlined', 'delete');
  return span;
}

const createProductItemElement = ({ sku, name, image, price }) => {
  const section = document.createElement('section');
  const valor = Number(price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  section.className = 'item';
  const img = image.replace('I', 'W');
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createProductImageElement(img));
  section.appendChild(createCustomElement('span', 'prices', valor));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const createCartItemElement = ({ sku, name, salePrice, image }) => {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const img = createProductImageElement(image);
  const icon = createIconSpan();
  li.className = 'cart__item';
  span.innerText = `${name} | PRICE: $${salePrice}`;
  span.setAttribute('produtoId', sku)
  li.appendChild(icon);
  li.appendChild(img);
  li.appendChild(span);
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const createLiReload = () => {
  const li = document.createElement('li');
  li.className = 'loading';
  li.innerText = 'carregando...';
  return li;
};

emptyCart.addEventListener('click', async () => {
  cardItems.innerHTML = '';
  buyItem.innerHTML = '';
  const token = localStorage.getItem("token");
  await fetchDeleteCartAll(token)
  
  showPrice();
});

buyCart.addEventListener('click', async () => {
  const cart = cardItems.innerHTML;
  const tempElement = document.createElement('div');
  tempElement.innerHTML = cart;
  const token = localStorage.getItem("token");
  const spanElements = tempElement.querySelectorAll('span');
  
  spanElements.forEach( async item => {
    const productId = item.getAttribute('produtoId')
    if(productId) {
      console.log(productId)
      await fetchDeleteCartAll(token)
      await fetchBuyProduct(productId, token)
    }
  })
  
  cardItems.innerHTML = ''
  buyItem.innerHTML =  `<h1>Produtos comprados<h1/>`;


});

btnSearch.addEventListener('click', async () => {
  items.innerHTML = '';
  const product = searchInput.value.trim();
  await showProduct(product);
  searchInput.value = '';
});

searchInput.addEventListener('keyup', async (e) => {
  if(e.keyCode === 13) {
    items.innerHTML = '';
    const product = searchInput.value.trim();
    await showProduct(product);
    searchInput.value = '';
  }
});

// Produto

const showProduct = async (product) => {
  const ele = createLiReload();
  cardItems.appendChild(ele);
  const data = await fetchProducts(product);
  const { results } = await data;
  ele.remove();
  results.forEach(({ id, title, thumbnail, price }) => {
    const section = createProductItemElement({ sku: id, name: title, image: thumbnail, price });
    items.appendChild(section);
  });
};

const addShoppingCart = async () => {
  document.addEventListener('click', async (element) => {
    if (element.target.classList.contains('item__add')) {
      buyItem.innerHTML = '';
      const token = localStorage.getItem("token");
      const verifyToken = await fetchGetProfileClient(token)  
      if(verifyToken.message === 'unauthorized') {
        window.location.href = "./login/index.html"; 
      }
      const ele = createLiReload();
        cardItems.appendChild(ele);
        const elementId = element.target.parentElement.firstChild.textContent;

        await fetchSaveProduct(elementId)
        const { produtoId, produtoName, produtoPrice, produtoImage } = await fetchItem(elementId);

        const li = createCartItemElement(
          { sku: produtoId, name: produtoName, salePrice: produtoPrice, image: produtoImage },
        );

        cardItems.appendChild(li);
        ele.remove();
        saveCartItems(produtoId, token);
        showPrice();
    }
  });
};

const cartItemClickListener = async () => {
  cardItems.addEventListener('click', async (element) => {
    if (element.target.classList.contains('material-symbols-outlined')) {
      const token = localStorage.getItem("token");
      const spanItem = element.target.parentElement.querySelectorAll('span')[1]
      const productId = spanItem.getAttribute('produtoId')
      await fetchDeleteCartById(productId, token)
      element.target.parentElement.remove();
      showPrice();
    }
  });
};

const getCartItems = async () => {
  const token = localStorage.getItem("token");
  const data = await getSavedCartItems(token);

  console.log(data[0])

  data.map(async item => {
    const { produtoId, produtoName, produtoPrice, produtoImage } = await fetchItem(item.produtoId);

    const li = createCartItemElement(
      { sku: produtoId, name: produtoName, salePrice: produtoPrice, image: produtoImage },
    );

    cardItems.appendChild(li);

  })

  showPrice();
};

const showPrice = () => {
  let finalValue = 0;
  cardItems.childNodes.forEach((item) => {
  const value = item.textContent.split('PRICE: $')[1];
  finalValue += Number(value);
  });
  totalPrice.innerHTML = finalValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};


window.onload = async () => { 
  await showProduct('computador');
  await addShoppingCart();
  await cartItemClickListener();
  await getCartItems();
  showPrice();
};


