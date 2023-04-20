const router = require('express').Router()
const Tarefa = require('../models/Dever')

router.get('/', async (req, res) => {
    const deveres = await Tarefa.find({})

    if (deveres.length == 0) {
        res.send({message:'Não foi achado nenhum dever'})
        return
    }

    res.send(deveres);
})

router.post('/', async (req, res) => {

    const { title, description, type, time } = req.body 

    const newDutie = {
        title, description, type, time
    }

    try {
        await Tarefa.create(newDutie)
        console.log('Nova tarefa criada')
    }
    catch(e) {
        console.log('Nao foi possivel criar nova tarefa')
    }
})
module.exports = router