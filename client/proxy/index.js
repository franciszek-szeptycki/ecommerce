const express = require('express')
const httpProxy = require('http-proxy')
const path = require('path')

const app = express()
const proxy = httpProxy.createProxyServer()

const STATIC_DIR = 'public'
const PORT = 3000
const SERVER_PORT = 8000
const SERVER_HOST = 'server'
const PROXY = { target: `http://${SERVER_HOST}:${SERVER_PORT}` }

app.use(express.static(path.join(__dirname, STATIC_DIR)))

app.all('/api/*', (req, res) => {
    proxy.web(req, res, PROXY)
})

app.all('/auth/*', (req, res) => {
    proxy.web(req, res, PROXY)
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, STATIC_DIR, 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
