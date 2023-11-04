// implement your API here
const data = require('./data/db')
const express = require(`express`)
const server = express() // This is an isntance of a server powered by express ----

server.get('/dogs', (req, res) => {
    const canines = [
        {
            id: 1,
            breed: 'German Shepherd'
        },
        {
            id: 2,
            breed: 'Siberian Husky'
        }
    ]

    res.status(200).json(canines)
})

server.get('/users', async (req, res) => {
    try {
        const users = await data.find()
        console.log(`thestuff`, users)
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json({ message: 'The users information could not be retrieved. ' + err.message })
    }
})

server.get('/users/:id', async (req, res) => {
    try {
        const { id } = req.params
        const user = await data.findById(id)

        if(!user) {
            res.status(404).json({ message: `Cannot find user of ${id}`})
        } else {
            res.status(200).json(user)
        }
    } catch(err) {
        res.status(500).json({ message: 'Error fetching this user ' + req.params.id + " " + err.message})
    }
})

server.listen(3000, () => { // Im telling teh server to listen to communcation requests ---- Ports by default run at port 80
    console.log('Server is running on 3000:')
})

//console.log(data)
