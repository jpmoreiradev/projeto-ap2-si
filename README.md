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

O Sequelize é uma biblioteca de mapeamento objeto-relacional (ORM) para Node.js, que permite aos desenvolvedores interagir facilmente com bancos de dados relacionais, como MySQL, PostgreSQL, SQLite, entre outros. Ele fornece uma interface fácil de usar para realizar operações de banco de dados, abstraindo as consultas SQL subjacentes.

### Requisitos para roda o projeto

Docker: É necessário ter o Docker instalado em seu sistema para configurar e executar o banco de dados MySQL. O Docker permite a criação de contêineres para isolar e executar aplicativos em ambientes controlados. Você pode baixar e instalar o Docker a partir do site oficial: https://www.docker.com/products/docker-desktop/.

Node.js e npm: O back-end do projeto foi desenvolvido utilizando Node.js e npm (gerenciador de pacotes do Node.js). Portanto, é necessário ter o Node.js e o npm instalados em seu sistema. O Node.js é um ambiente de execução de código JavaScript no lado do servidor, e o npm é um gerenciador de pacotes que permite instalar e gerenciar dependências do projeto. Você pode baixar e instalar o Node.js e npm a partir do site oficial: https://nodejs.org/.

Git: permitirá que você clone o repositório do projeto, mantenha um histórico de alterações e facilite a colaboração com outros desenvolvedores.

### Clonar o repositório do projeto:
~~~bash
git clone https://github.com/jpmoreiradev/projeto-ap2-si.git
~~~

![Screenshot from 2023-06-14 00-24-50](https://github.com/jpmoreiradev/projeto-ap2-si/assets/78699072/9e2ab50d-a696-4d17-a2bd-de7263d8e4e2)

### Navegar até o diretório do backend
~~~bash
cd projeto-ap2-si/backend
~~~

![Screenshot from 2023-06-14 00-30-07](https://github.com/jpmoreiradev/projeto-ap2-si/assets/78699072/1b22bce4-ec6c-40aa-afe0-c81e6998a713)

### Instalar as dependências do projeto
~~~bash
npm install
~~~
![Screenshot from 2023-06-14 00-32-59](https://github.com/jpmoreiradev/projeto-ap2-si/assets/78699072/ed0924c7-4264-4ca7-9227-b0c933845474)

### Iniciar o contêiner Docker para o banco de dados MySQL em segundo plano
~~~bash
docker compose up -d
~~~

![Screenshot from 2023-06-14 00-42-35](https://github.com/jpmoreiradev/projeto-ap2-si/assets/78699072/b5167ce2-6ee0-4fa5-a409-959716f6d573)

### Executar o script SQL para criar as tabelas no banco de dados
~~~bash
mysql -u root -proot -h 0.0.0.0 unistore < db-migrations/V20230613__create_tables.sql 
~~~
![Screenshot from 2023-06-14 01-00-54](https://github.com/jpmoreiradev/projeto-ap2-si/assets/78699072/66c6e8a6-c68b-4044-a8f7-b45574a16cf1)

### Iniciar o servidor de desenvolvimento do backend
~~~bash
npm run dev
~~~

![Screenshot from 2023-06-14 00-45-25](https://github.com/jpmoreiradev/projeto-ap2-si/assets/78699072/63ce3b14-6b9e-4ffa-9df1-1deff05b4337)

### inicializar o projeto

[Screencast from 2023-06-14 01-13-45.webm](https://github.com/jpmoreiradev/projeto-ap2-si/assets/78699072/74ff54ec-6561-4fa4-8328-04c61c1c17f5)


