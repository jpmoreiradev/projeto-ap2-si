const items = document.querySelector('.items');
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




// Produto

// const showProduct = async () => {
//   const token = await isVerifyAuth();
//   const ele = createLiReload();
//   cardItems.appendChild(ele);
//   const data = await fetchMyItemsAll(token);
//   ele.remove();

//   data.map(async item => {
//     const product =  await fetchItem(item.produtoId)
//       const section = createProductItemElement({ sku:  product.productId, name: product.produtoName, image: product.produtoImage, price: product.produtoPrice, date: item.pedidoDate });
//       items.appendChild(section);
//   })
// };


// window.onload = async () => { 
//   await showProduct();
// };

