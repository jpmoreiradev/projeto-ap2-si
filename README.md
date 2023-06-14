# UNI STORE

### Front-end

Neste projeto, foi desenvolvida uma loja online utilizando a API (Interface de Programação de Aplicativos) do Mercado Livre. A ideia era aproveitar as funcionalidades e o amplo catálogo de produtos disponíveis na plataforma para construir uma loja virtual própria.

O projeto envolveu diversas etapas, desde o planejamento inicial até a implementação final da loja. Inicialmente, foi necessário realizar a integração com a API do Mercado Livre, que permite acessar informações sobre produtos, categorias, preços, estoques e realizar vendas.

Após a integração, a equipe desenvolveu a estrutura básica da loja, incluindo páginas de produtos, carrinho de compras. Foram utilizadas tecnologias web como HTML, CSS e JavaScript, para criar uma interface do front-end

### Back-end

No projeto de desenvolvimento da loja utilizando a API do Mercado Livre, foram utilizadas várias tecnologias e bibliotecas no lado do back-end. Entre elas, estão o Axios, Bcryptjs, Crypto, Dotenv, Express, Jsonwebtoken e Sequelize.

O Axios é uma biblioteca utilizada para fazer requisições HTTP, sendo especialmente útil para realizar chamadas à API do Mercado Livre. Com ele, é possível fazer solicitações de busca, obtenção e atualização de informações relacionadas a produtos, categorias e vendas.

O Bcryptjs é uma biblioteca de criptografia de senhas. Ela oferece funções para realizar o hash das senhas dos usuários antes de armazená-las no banco de dados. Isso aumenta a segurança das informações e evita que senhas sejam armazenadas em formato legível.

A biblioteca Crypto é utilizada para gerar e manipular chaves de criptografia, além de fornecer recursos para criptografia e descriptografia de dados. Essa biblioteca pode ser útil para implementar recursos adicionais de segurança no projeto, como a criptografia de dados sensíveis.

O Dotenv é uma biblioteca que permite carregar variáveis de ambiente a partir de um arquivo de configuração. Isso é útil para armazenar informações sensíveis, como chaves de API do Mercado Livre, em um local seguro e evitar que esses dados sejam expostos acidentalmente.

O Express é um framework web rápido e flexível para Node.js. Ele simplifica a criação de rotas, o tratamento de requisições e respostas HTTP, além de fornecer recursos para o desenvolvimento de APIs robustas. O Express foi utilizado para construir a estrutura do back-end da aplicação, definindo as rotas necessárias para a integração com a API do Mercado Livre.

O Jsonwebtoken é uma biblioteca que permite a geração e validação de tokens de autenticação. Esses tokens podem ser usados para autenticar usuários e proteger rotas sensíveis no servidor. No projeto, o Jsonwebtoken pode ter sido utilizado para implementar um sistema de autenticação seguro para os usuários da loja.

### Requisitos para roda o projeto

Docker: É necessário ter o Docker instalado em seu sistema para configurar e executar o banco de dados MySQL. O Docker permite a criação de contêineres para isolar e executar aplicativos em ambientes controlados. Você pode baixar e instalar o Docker a partir do site oficial: https://www.docker.com/products/docker-desktop/.

Node.js e npm: O back-end do projeto foi desenvolvido utilizando Node.js e npm (gerenciador de pacotes do Node.js). Portanto, é necessário ter o Node.js e o npm instalados em seu sistema. O Node.js é um ambiente de execução de código JavaScript no lado do servidor, e o npm é um gerenciador de pacotes que permite instalar e gerenciar dependências do projeto. Você pode baixar e instalar o Node.js e npm a partir do site oficial: https://nodejs.org/.

Git: permitirá que você clone o repositório do projeto, mantenha um histórico de alterações e facilite a colaboração com outros desenvolvedores.

~~~bash
git clone https://github.com/jpmoreiradev/projeto-ap2-si.git
~~~

~~~bash
cd projeto-ap2-si/backend
~~~

~~~bash
npm install
~~~
