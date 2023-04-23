const router = require('express').Router()
const Tarefa = require('../models/Dever')

router.get('/', async (req, res) => {
    const deveres = await Tarefa.find({})

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
    res.send(newDutie)
})

router.delete('/:id', async(req, res) => {
    const id = req.params.id

    try {
        await Tarefa.deleteOne({_id: id})
    }
    catch (e) {
        console.log(e)
    }
    res.send()
})
module.exports = router