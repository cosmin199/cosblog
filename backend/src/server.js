import express from 'express'

const app = express()

app.get('/hello', (req, res) => res.send('helloooo'))

app.listen(8000, () => console.log('listening on port 8000'))

