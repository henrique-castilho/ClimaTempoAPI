require('dotenv').config()
const axios = require('axios')

const PROTOCOL = process.env.PROTOCOL
const BASE_URL = process.env.BASE_URL
const Q = process.env.Q
const APPID = process.env.APPID
const UNITS = process.env.UNITS
const DESIRED_LANGUAGE = process.env.DESIRED_LANGUAGE

const url = `${PROTOCOL}://${BASE_URL}?q=London&appid=${APPID}&units=${UNITS}&lang=${DESIRED_LANGUAGE}`

axios.get(url)
  .then((resposta) => {
    const data = resposta.data[0]
      console.log(`Latitude: ${data.lat}, Longitude: ${data.lon}`)
  })
  .catch((error) => {
    console.error("Erro ao fazer a requisição:", error)
  });
