Ao rodar a API, certifique-se de mudar de diretório para back-july (cd back-july) e instalar o node (npm install) novamente
para baixar os módulos necessários.
Ative o Apache e o MySQL no aplicativo Laragon.
O arquivo .env (crie-o, ele não foi upado por motivos de segurança) tem os seguintes campos:
DB_USER=root
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=trendix
DB_PASSWORD=

PORT = 3001

JWT_SECRET = rlAK6krb2f6v16KKKEhJKhfohwg58wvb

Não esqueça de criá-lo na raíz do diretório back-july.
Após, rode o comando sequelize db:create para criar o schema e sequelize db:migrate para criar as tabelas
Depois disso, use o comando sequelize db:seed:all para popular o banco de dados e os dados aparecerem nas rotas criadas

Teste as rotas com o Insomnia ou com o navegador.

Feito estas instruções, o app estará pronto para rodar usando o comando npm start.


Para visualizar os endpoints no Swagger copie e cole esse link na url do seu navegador
http://localhost:3001/api-trendix/#/

