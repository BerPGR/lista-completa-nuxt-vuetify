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
        res.send()
    }
    catch(e) {
        console.log('Nao foi possivel criar nova tarefa')
    }
})

router.delete('/:id', async(req, res) => {
    const id = req.params.id

    try {
        await Tarefa.deleteOne({_id: id})
        res.send()
    }
    catch (e) {
        console.log(e)
    }
})

router.put('/:id', async (req, res) => {
    const id = req.params.id
    const { title, description, type, time } = req.body

    const updatedDutie = {
        title, description, type, time
    }

    try {
        await Tarefa.updateOne({_id: id}, updatedDutie)
    } catch(e) {
        console.log(e)
    }

    res.send()
})
module.exports = router