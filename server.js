const express = require('express')
const { urlencoded } = require('express')
const mongoose = require('mongoose')
const { loadNuxt, build } = require('nuxt')
const isDev = process.env.NODE_ENV !== 'production'
require('dotenv').config()

const db_user = process.env.DB_USER
const db_pass = process.env.DB_PASSWORD

const app = express()

app.use(urlencoded({
    extended: true
}))

app.use(express.json())

mongoose.connect(`mongodb+srv://${db_user}:${db_pass}@listona.qp0oi22.mongodb.net/pessoas?retryWrites=true&w=majority`)
.then(async() => {
    const nuxt = await loadNuxt(isDev ? 'dev' : 'start')

    app.use(nuxt.render)
    if (isDev) {
        build(nuxt)
    }
    console.log('Conectado ao mongodb')
    app.listen(3000)
})
.catch((error) => {
    console.log(error)
})