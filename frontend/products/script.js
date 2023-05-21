const items = document.querySelector('.items');
const cardItems = document.getElementsByClassName('cart__items')[0];
const totalPrice = document.getElementsByClassName('total-price')[0];
const emptyCart = document.getElementsByClassName('empty-cart')[0];
const cartIcon = document.getElementsByClassName('material-icons')[0];
const searchInput = document.getElementsByClassName('search-txt')[0];
const btnSearch = document.getElementsByClassName('fa-search')[0];

// Utils

cartIcon.addEventListener('click', () => {
  document.getElementsByClassName('container-cartTitle')[0].classList.toggle('invisible-cart');
  document.getElementsByClassName('cart')[0].classList.toggle('invisible-cart');
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

emptyCart.addEventListener('click', () => {
  cardItems.innerHTML = '';
  saveCartItems(cardItems.innerHTML);
  showPrice();
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

const getClientProfile = async (token) => {
  
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': token
  }
  
  
  const init = {
    method: 'GET',
    headers
  }
  
  const response = await fetch('http://localhost:3000/cliente/profile', init)
  const data = await response.json();
  return data;
}


// Produto

const showProduct = async (product) => {
  const token = localStorage.getItem("token");

  if(!token) {
    window.location.href = "../login/index.html"; 
  }

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
  document.addEventListener('click', async (e) => {
    if (e.target.classList.contains('item__add')) {
        const ele = createLiReload();
        cardItems.appendChild(ele);
        const idElement = e.target.parentElement.firstChild.textContent;
        const { id, title, price, thumbnail } = await fetchItem(idElement);
        const li = createCartItemElement(
          { sku: id, name: title, salePrice: price, image: thumbnail },
        );
        cardItems.appendChild(li);
        ele.remove();
        saveCartItems(cardItems.innerHTML);
        showPrice();
    }
  });
};

const cartItemClickListener = async () => {
  cardItems.addEventListener('click', (e) => {
    if (e.target.classList.contains('material-symbols-outlined')) {
      e.target.parentElement.remove();
      saveCartItems(cardItems.innerHTML);
      showPrice();
    }
  });
};

const getCartItems = () => {
  cardItems.innerHTML = getSavedCartItems();
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
  getCartItems();
  showPrice();
};


