const account = document.getElementsByClassName('fa-search')[0];
const myProducts = document.getElementsByClassName('my-products')[0];
const login = document.getElementsByClassName('login')[0];
const profile = document.getElementsByClassName('profile')[0];
const logoutIcon = document.getElementsByClassName('logout-btn')[0];
const name = document.getElementById('nome');
const user = document.getElementById('user');


const currentInfos = async () => {
  const token = localStorage.getItem("token");
  const client = await fetchGetProfileClient(token) 

  name.setAttribute("placeholder", client.clienteName);
  
  user.setAttribute("placeholder", client.clienteUser)
}

currentInfos()





myProducts.addEventListener('click', async () => {
    const token = localStorage.getItem("token");
    const verifyToken = await fetchGetProfileClient(token) 
    if (!verifyToken.message) {
        window.location.href = "../myProducts/index.html";  
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
  
  
  logoutIcon.addEventListener('click', async () => {
    const token = localStorage.getItem("token");
    const verifyToken = await fetchGetProfileClient(token) 
    
    if (!verifyToken.message) {
      const resposta = confirm("Você deseja sair ?");
      if (resposta) {
        localStorage.removeItem("token");
      }
    } else {
      alert("Você não fez o login.")
    }
  });