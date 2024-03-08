const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World Paty!')
})


app.post('/', (req, res) => {
    res.send('Got a POST request Paty')
})

app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user paty')
})

app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user paty')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

  