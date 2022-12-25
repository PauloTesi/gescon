Tecnologias utilizadas:
    Github e Git para controle de versão 
        Repositório criado no Github
    NodeJS para o Angular
        Versão 18.12.1
        Instalar o Angular  
            npm install -g @angular/cli
    Typescript e Javascript

    Backend
        Simulando com JSON Server
        Criada a pasta backend
            cd backend
            npm init -y (Criando o arquivo package json)
            npm i json-server (instalando o json-server)
        Criando o arquivo db-json para simular uma aplicação
            db.json
            populando com os dados
            No arquivo package.json fazer a seguinte alteração
                    alterar na chave "srcipts": [tests mudar para start] e acrescentar o seguinte:
                        "start": "json-server --watch db.json --port 3000"  
            Salvar o arquivo e rodar o comando npm start
            