const express = require('express')
const users = express.Router()

//Considering it starts with /users
users.get('/', (req,res) => {
    
})

users.post('/')

users.put('/:id')

users.delete('/:id')

users.get('/:id')

module.exports = users


