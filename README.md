# Luna Application

## Sobre o Projeto
O **Luna Application** é um aplicativo mobile desenvolvido para ajudar mulheres a monitorarem seus ciclos menstruais e ajustarem seus treinos com base nas diferentes fases do ciclo. O objetivo principal é promover saúde, personalização e bem-estar.

---

## Arquitetura do Projeto
O projeto está organizado em três principais camadas: **frontend**, **backend** e **banco de dados**.

### 1. Frontend
O frontend foi desenvolvido utilizando **React Native** e gerenciado com o **Expo**. Ele possui uma interface amigável e responsiva para dispositivos móveis.

#### Principais Telas
- **Login:** Permite que a usuária faça login no sistema.
- **Cadastro:** Coleta dados de novas usuárias para registro.
- **Informações Iniciais:** Coleta dados como data de nascimento, peso e altura.
- **Último Ciclo:** Permite registrar o início do último ciclo menstrual.
- **Dashboard:** Exibe informações e recomendações personalizadas baseadas no ciclo menstrual.
- **Treino Recomendado:** Apresenta sugestões de treinos baseados na fase atual do ciclo menstrual.

### 2. Backend
O backend foi desenvolvido em **Node.js** com **Express**. Ele é responsável pela lógica de negócios, autenticação e comunicação com o banco de dados.

#### Funcionalidades Backend
- **Registro de novas usuárias:** Endpoint para criar novas usuárias no sistema.
- **Login e autenticação:** Utiliza JWT (JSON Web Tokens) para autenticação segura das usuárias.
- **Armazenamento de dados:** Guarda informações sobre ciclos menstruais, dados pessoais e preferências de treino das usuárias.
- **Recomendações personalizadas:** Gera recomendações de treinos e dicas de acordo com a fase do ciclo menstrual de cada usuária.
- **Rotas e Controladores:** O backend possui rotas específicas para manipulação de usuários, treinos e ciclos, utilizando controladores para centralizar a lógica de cada operação.

#### Principais Arquivos do Backend
- **server.js:** Arquivo principal que inicializa o servidor e configura os middlewares.
- **userRoutes.js:** Define as rotas relacionadas ao usuário, como registro, login e atualização de perfil.
- **activityRoutes.js e healthRoutes.js:** Rotas relacionadas aos treinos e à saúde da usuária.
- **controllers:** Contém a lógica de cada operação, dividida em arquivos como `userController.js`, `activityController.js` e `healthController.js`.
- **models:** Define os modelos de dados para o MongoDB utilizando **Mongoose**, como o `User.js`.

### 3. Banco de Dados
O banco de dados utilizado é o **MongoDB Atlas**, um serviço de banco de dados na nuvem que oferece escalabilidade e facilidade de integração.

- **Coleções:** O banco de dados contém coleções para armazenar informações de usuárias, treinos e ciclos menstruais.

---

## Como Configurar e Rodar o Projeto

### Pré-requisitos
Certifique-se de que possui as seguintes ferramentas instaladas:
1. **Node.js** (versão 14 ou superior).
2. **Expo CLI** (para rodar o frontend).
3. Um editor de código como o **Visual Studio Code**.

### Clonando o Repositório
Clone o projeto do GitHub e entre na pasta do projeto:
```bash
git clone https://github.com/seuusuario/luna-application.git
cd luna-application
```

### Configurando o Backend
1. Entre na pasta do backend:
   ```bash
   cd backend
   ```
2. Instale as dependências necessárias:
   ```bash
   npm install
   ```
3. Crie um arquivo `.env` na raiz do backend e adicione a URL do MongoDB:
   ```
   MONGO_URI=mongodb+srv://seuusuario:suasenha@cluster.mongodb.net/luna?retryWrites=true&w=majority
   ```
4. Inicie o servidor backend:
   ```bash
   npm start
   ```

### Configurando o Frontend
1. Volte para a pasta raiz do projeto e entre na pasta do frontend:
   ```bash
   cd frontend
   ```
2. Instale as dependências necessárias:
   ```bash
   npm install
   ```
3. Inicie o Expo:
   ```bash
   expo start
   ```

### Acessando o Projeto
- **Backend:** O servidor estará rodando por padrão na porta `5001`. As rotas podem ser acessadas em `http://localhost:5001`.
- **Frontend:** O Expo CLI abrirá uma página no navegador, permitindo que você escolha rodar o app em um emulador, dispositivo físico ou no navegador.

---

## Testes
### Testes Unitários e de Integração
- **Backend:** Utilize **Jest** para rodar testes unitários e de integração no backend.
- **Frontend:** Utilize **React Native Testing Library** para garantir a qualidade das interfaces e da lógica do app.

---

## Contribuindo
Se desejar contribuir com o projeto, faça um fork do repositório, crie um branch para suas alterações e abra um pull request para revisão.

```bash
git checkout -b minha-nova-feature
```

Após implementar sua feature, faça o commit e abra um pull request.

---

## Licença
Este projeto está sob a licença MIT. Sinta-se à vontade para utilizá-lo e modificá-lo conforme necessário.
