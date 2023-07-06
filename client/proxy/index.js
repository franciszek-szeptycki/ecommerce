const express = require('express')
const httpProxy = require('http-proxy')
const path = require('path')

const app = express()
const proxy = httpProxy.createProxyServer()

const PUBLIC_DIR = 'public'
const ASSETS_DIR = 'assets'
const PORT = 3000
const SERVER_PORT = 8000
const SERVER_HOST = 'server'
const PROXY = { target: `http://${SERVER_HOST}:${SERVER_PORT}` }

// Dodaj nagłówki do obsługi typów MIME
app.use((req, res, next) => {
    res.set('X-Content-Type-Options', 'nosniff')
    next()
})

app.use(express.static(path.join(__dirname, PUBLIC_DIR)))

app.all('/api/*', (req, res) => {
    proxy.web(req, res, PROXY)
})

app.all('/auth/*', (req, res) => {
    proxy.web(req, res, PROXY)
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, PUBLIC_DIR, 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
