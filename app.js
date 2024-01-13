const express = require('express')
const app = express()
const port = 4747

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/api/projects', (req, res) => {
    res.send('Hello World!/api/projects')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})