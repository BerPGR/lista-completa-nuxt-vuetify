const router = require('express').Router()
const Tarefa = require('../models/dever')

router.get('/', async (req, res) => {
    const deveres = await Tarefa.find({})

    if (deveres.length == 0) {
        res.send({message:'Não foi achado nenhum dever'})
        return
    }

    res.send(deveres);
})

module.exports = router