# Boas vindas ao projeto Cookmaster V2!

## O que deverá ser desenvolvido

O primeiro app utilizando a arquitetura MSC!

Já construí o projeto cookmaster, uma aplicação de cadastro de receitas, onde é possível criar e visualizar receitas, seus ingredientes, e sua forma de preparo. Agora você vai implementar novas funcionalidades ao projeto anterior! Caso deseje, pode começar um novo projeto do zero.
Nesse novo projeto deverá ser possível fazer o cadastramento e login de usuário, onde apenas esse usúario poderá acessar, modificar e deletar as receitas que cadastrou.

---

## Desenvolvimento

Desenvolvido todas as camadas da aplicação (Models, Service e Controllers) a partir do código no projeto cookmaster anterior.

Através dessa aplicação, será possível realizar as operações básicas que se pode fazer em um determinado banco de dados: Criação, Leitura, Atualização e Exclusão (ou `CRUD`, pros mais íntimos 😜).

Para realizar qualquer tipo de alteração no banco de dados (como cadastro, edição ou exclusão de receitas) será necessário autenticar-se. Além disso, os usuários devem poder ser clientes ou administradores. Os clientes apenas poderão disparar ações nas receitas que ele mesmo criou. Já um administrador pode disparar qualquer ação em qualquer receita.

A autenticação é realizada via `JWT`.

⚠️ **Dicas Importantes** ⚠️:

- Não há front-end nesse projeto, portanto não se preocupe com a visualização, mas apenas com as funcionalidades e organização do código.

---

## Requisitos do projeto

### 1 - Todos os seus endpoints devem estar no padrão REST

- Use os verbos HTTP adequados para cada operação.

- Agrupe e padronize suas URL em cada recurso.

- Garanta que seus endpoints sempre retornem uma resposta, havendo sucesso nas operações ou não.

- Retorne os códigos de status corretos (recurso criado, erro de validação, autorização, etc).

### 2 - Crie um endpoint para o cadastro de usuários

- A rota deve ser (`/users`).

- No banco um usuário precisa ter os campos Email, Senha, Nome e Role.

- Para criar um usuário através da API, todos os campos são obrigatórios, com exceção do Role.

- O campo Email deve ser único.

- Usuários criados através desse endpoint devem ter seu campo Role com o atributo _user_, ou seja, devem ser usuários comuns, e não admins.

- O body da requisição deve conter o seguinte formato:

  ```json
  {
    "name": "string",
    "email": "string",
    "password": "string"
  }
  ```

### 3 - Crie um endpoint para o login de usuários

- A rota deve ser (`/login`).

- A rota deve receber os campos Email e Senha e esses campos devem ser validados no banco de dados.

- Um token `JWT` deve ser gerado e retornado caso haja sucesso no login. No seu payload deve estar presente o id, email e role do usuário.

- O body da requisição deve conter o seguinte formato:

  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```

### 4 - Crie um endpoint para o cadastro de receitas

- A rota deve ser (`/recipes`).

- A receita só pode ser criada caso o usuário esteja logado e o token `JWT` validado.

- No banco, a receita deve ter os campos Nome, Ingredientes, Modo de preparo, URL da imagem e Id do Autor.

- Nome, ingredientes e modo de preparo devem ser recebidos no corpo da requisição, com o seguinte formato:

  ```json
  {
    "name": "string",
    "ingredients": "string",
    "preparation": "string"
  }
  ```

- O campo dos ingredientes pode ser um campo de texto aberto.

- O campo ID do autor, deve ser preenchido automaticamente com o ID do usuário logado, que deve ser extraído do token JWT.

- A URL da imagem será preenchida através de outro endpoint

### 5 - Crie um endpoint para a listagem de receitas

- A rota deve ser (`/recipes`).

- A rota pode ser acessada por usuários logados ou não

### 6 - Crie um endpoint para visualizar uma receita específica

- A rota deve ser (`/recipes/:id`).

- A rota pode ser acessada por usuários logados ou não

### 7 - Crie um endpoint para a edição de uma receita

- A rota deve ser (`/recipes/:id`).

- A receita só pode ser atualizada caso o usuário esteja logado e o token `JWT` validado.

- A receita só pode ser atualizada caso pertença ao usuário logado, ou caso esse usuário seja um admin.

- O corpo da requisição deve receber o seguinte formato:

  ```json
  {
    "name": "string",
    "ingredients": "string",
    "preparation": "string"
  }
  ```

### 8 - Crie um endpoint para a exclusão de uma receita

- A rota deve ser (`/recipes/:id`).

- A receita só pode ser excluída caso o usuário esteja logado e o token `JWT` validado.

- A receita só pode ser excluída caso pertença ao usuário logado, ou caso o usuário logado seja um admin.

### 9 - Crie um endpoint para a adição de uma imagem a uma receita

- A rota deve ser (`/recipes/:id/image/`).

- A imagem deve ser lida do campo `image`.

- O endpoint deve aceitar requisições no formato `multipart/form-data`.

- A receita só pode ser atualizada caso o usuário esteja logado e o token `JWT` validado.

- A receita só pode ser atualizada caso pertença ao usuário logado ou caso o usuário logado seja admin.

- O upload da imagem deverá ser feito utilizando o `Multer`.

- O nome do arquivo deve ser o ID da receita, sem extensão. As imagens devem estar disponíveis através da rota `/images/<id-da-receita>` na API.

- A URL completa para acessar a imagem através da API deve ser gravada no banco de dados, junto com os dados da receita.

### 10 - Permissões do usuário admin

- Por padrão, deve existir no banco de dados ao menos um usuário com a Role _admin_.

- Esse usuário tem o poder de criar, deletar, atualizar ou remover qualquer receita, independente de quem a cadastrou.

- Crie um script na raiz do seu projeto com a extensão `.sql`, caso utilize o MySQL, ou `.js`, caso utilize o mongodb. Este arquivo deve inicializar o banco de dados e cadastrar um usuário admin com o email `root@email.com` e a senha `admin`.

### 11 - Utilize o MongoDB como banco de dados

O projeto Cookmaster que você realizou anteriormente utilizava o MySQL como banco de dados. Altere seus `Model`s para que sua aplicação utilize o MongoDB ao invés do MySQL.

---
