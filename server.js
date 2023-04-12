const express = require('express')
const { urlencoded } = require('express')
const mongoose = require('mongoose')
const { loadNuxt, build } = require('nuxt')
const isDev = process.env.NODE_ENV !== 'production'

const app = express()

app.use(urlencoded({
    extended: true
}))

app.use(express.json())

mongoose.connect(`mongodb+srv://tiober007:FSz2oCZcwnH2Plg9@listona.qp0oi22.mongodb.net/pessoas?retryWrites=true&w=majority`)
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