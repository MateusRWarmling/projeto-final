# Projeto final

Aplicação desenvolvida para o projeto final da disciplina de programação web.

# URL para teste
- https://projeto-final-mateus.herokuapp.com/

# Tecnologias utilizadas
  - Node.JS
  - Express.js
  - axios
  - yarn

# Como utilizar?

  - Instale as dependências
    ```sh
    yarn
    ```
    Inicie a aplicação
    ```sh
    yarn start
    ```
  - Utilize as rotas no navegador e/ou Insomnia
    ```sh
    /collection
    /brand
    ```

# Rotas!

**GET** /collection
  - Retorna a lista de coleções cadastradas
  - Paginação adicionada na rota
  - ```sh
    {
        nome: String,
        descricao: String,
        lancamento: Number,
        styleId: String,
    }
    ```
**GET** /collection/:id
  - Retorna a coleção referente ao Id definido na rota
  - ```sh
    {
        nome: String,
        descricao: String,
        lancamento: Number,
        estilo: {
           nome: String,
           descricao: String, 
           ano: String,
           surgimento: String,
        },
    }
    ```
**POST** /collection
  - Rota para a criação de uma nova coleção
  - Necessário passar o id de um dos estilos de https://projeto-final-gustavo.herokuapp.com/style
  - ```sh
    {
        nome: String,
        descricao: String,
        lancamento: Number,
        styleId: String,
    }
    ```
**PUT** /collection/:id
  - Rota para a edição da coleção referente ao Id definido na rota
  - ```sh
    {
        nome: String,
        descricao: String,
        lancamento: Number,
        styleId: String,
    }
    ```
**DELETE** /collection/:id
  - Rota para a exclusão da coleção referente ao Id definido na rota
  - ```sh
    {
        message: "Coleção deletada com sucesso!"
    }
    ```


**GET** /brand
  - Retorna a lista de marcas cadastradas
  - Paginação adicionada na rota
  - ```sh
    {
        nome: String,
        pais: String,
        surgimento: String,
        sobre: String,
    }
    ```
**GET** /brand/:id
  - Retorna a marca referente ao Id definido na rota
  - ```sh
    {
        nome: String,
        pais: String,
        surgimento: String,
        sobre: String,
    }
    ```
**POST** /brand
  - Rota para a criação de uma nova marca
  - ```sh
    {
        nome: String,
        pais: String,
        surgimento: String,
        sobre: String,
    }
    ```
**PUT** /brand/:id
  - Rota para a edição da marca referente ao Id definido na rota
  - ```sh
    {
        nome: String,
        pais: String,
        surgimento: String,
        sobre: String,
    }
    ```
**DELETE** /brand/:id
  - Rota para a exclusão da marca referente ao Id definido na rota
  - ```sh
    {
        message: "Marca deletada com sucesso!"
    }
    ```
