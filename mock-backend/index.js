import express from 'express'
import data from './data.js'
import cors from 'cors'

const PORT = 3000

const app = express()

app.use(cors({}))

app.get('/', (req, res) => {
    console.log("Pinged")
    return res.json({
        msg : "Hello from Node"
    })
})

app.get('/data', (req, res) => {
    const delay = Math.random() * 5000
    console.log("Delay : ", delay)
    setTimeout(() => {
        res.json(data)
    }, delay)
})

app.listen(PORT, () => {
    console.log("App live on Port 3000")
})