# ClimaTempoAPI

## Descrição

Pequeno projeto Node.js que consulta a API de clima (OpenWeatherMap) para obter coordenadas a partir de um nome de cidade e, em seguida, consulta as condições atuais usando latitude/longitude.

## Tecnologias

- Node.js
- axios
- dotenv

## Pré-requisitos

- Node.js e npm instalados
- Chave de API do OpenWeatherMap (valor para `APPID`)

## Instalação

1. Instale dependências:

```bash
npm install
```

2. Crie um arquivo `.env` na raiz do projeto com as variáveis abaixo (veja exemplo):

```
PROTOCOL=https
BASE_URL1=api.openweathermap.org/geo/1.0/direct
BASE_URL2=api.openweathermap.org/data/2.5/weather
Q=Lisbon
APPID=seu_appid_aqui
UNITS=metric
DESIRED_LANGUAGE=pt_br
```

Observação: ajuste `Q` para a cidade desejada e `APPID` para sua chave da OpenWeatherMap.

## Execução

Execute diretamente com:

```bash
node index.js
```

Sugestão (opcional): adicione um script `start` em `package.json` para rodar com `npm start`.

## Observações importantes

- O código atual espera que a resposta de geocoding (`BASE_URL1`) retorne um array e acessa `resposta.data[0]`. Se a API mudar o formato, pode causar erros.
- Erros de requisição e de parsing são logados no console.

## 👨‍💻 Autores

* **Henrique Castilho**  
  [LinkedIn](https://www.linkedin.com/in/henriquecastilhopires/) | [GitHub](https://github.com/henrique-castilho)

* **Felipe Navas**  
  [LinkedIn](https://www.linkedin.com/in/felipe-navas-nascimento/) | [GitHub](https://github.com/FelipeNascimentoDev)

* **Leonardo Vivo**  
  [LinkedIn](https://www.linkedin.com/in/leonardovivoguerreiro/) | [GitHub](https://github.com/leonardovivo)

* **Rafael Brito**  
  [LinkedIn](https://www.linkedin.com/in/rafael-brito-de-campos-b8a421333/) | [GitHub](https://github.com/BritooRC)
