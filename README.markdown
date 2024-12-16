# Tech-Store Server

## Descrição
O **Tech-Store Server** é o backend para gerenciamento de dados de uma loja virtual de tecnologia. Ele foi projetado para suportar um catálogo dinâmico de produtos e interagir com o banco de dados MongoDB.

## Funcionalidades
- Cadastro, edição e exclusão de produtos.
- Integração com MongoDB para persistência de dados.
- API RESTful para integração com aplicações frontend.

## Tecnologias Utilizadas
- **Node.js**: Ambiente de execução para o backend.
- **Express.js**: Framework para APIs.
- **MongoDB**: Banco de dados NoSQL.

## Instalação e Uso
### Pré-requisitos
- Node.js instalado (versão 16 ou superior).
- MongoDB em execução.

### Passos para instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/RaFeltrim/Tech-Store-Server.git
   cd Tech-Store-Server
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o arquivo `.env`:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/tech-store
   ```

4. Inicie o servidor:
   ```bash
   npm start
   ```

5. A API estará disponível em [http://localhost:5000](http://localhost:5000).

## Licença
Este projeto está licenciado sob os termos da [MIT License](LICENSE).

---
**Autores**: Rafael Feltrim e Daniela Yukari Udo  
**Contato**: [rafeltrim@gmail.com](mailto:rafeltrim@gmail.com), [danielaudo26@gmail.com](mailto:danielaudo26@gmail.com)
