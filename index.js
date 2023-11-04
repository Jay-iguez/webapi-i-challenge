// implement your API here

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

server.listen(3000, () => { // Im telling teh server to listen to communcation requests ---- Ports by default run at port 80
    console.log('Server is running on 3000:')
})
