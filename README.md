# Site da BG Studios em React

Site criado em React e utilizando o MateriaUI como framework principal.

O site foi desenvolvido para apresentar os produtos e clientes da BG Studios.

# Como utilizar

### `npm install`
Para instalar as dependencias do node.


### `npm start`
Para rodar o servidor de desenvolvimento, utilizar o *npm start*.


### `npm run build`
Para gerar uma build.


### `serve -s build`
Para rodar o build.

# *Importante*
Verificar se a versão do Node é compativel com o React

Para desenvolver o site foi utilizado o *React 18*. O React 18 necessita que o Node esteja na *versão 14+*.

# Para verificar a versão do Node e caso necessário, fazer atualização:

### `node --version`
Verifica a versão do Node

### `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash`
Para fazer a atualização e verificar as versões disponíveis do Node, é necessário instalar o NVM. 

Antes de passar o comando para o bash, sempre é uma boa ideia auditar o script, para garantir que ele não fará nada que você não concorde. Faça isso removendo o segmento *| bash* no final do comando curl

### `source ~/.bashrc`
Isso instalará o script nvm em sua conta de usuário. Para usá-lo, você deve antes gerar seu arquivo .bashrc

### `nvm list-remote`
Perguntando ao NVM quais versões do Node estão disponíveis

### `nvm install v17.8.0`
É uma lista muito longa! Instale uma versão do Node digitando qualquer uma das versões que estiver vendo. Por exemplo, para obter a versão v17.8.0, digite o conando acima. 
