const express = require('express')
const httpProxy = require('http-proxy')

const app = express()
const proxy = httpProxy.createProxyServer()

const { CLIENT_PORT, SERVER_PORT, SERVER_CONTAINER_NAME } = process.env
// const CLIENT_PORT = 3000
// const SERVER_PORT = 8000
// const SERVER_CONTAINER_NAME = 'server'
const STATIC_DIR = 'public'

PROXY_CONFIG = {
    target: `http://${SERVER_CONTAINER_NAME}:${SERVER_PORT}`,
}

app.use(express.static(STATIC_DIR))

app.all('/api/*', (req, res) => {
    console.log(PROXY_CONFIG)
    proxy.web(req, res, PROXY_CONFIG)
})

app.all('/auth/*', (req, res) => {
    console.log(PROXY_CONFIG)
    proxy.web(req, res, PROXY_CONFIG)
})

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/${STATIC_DIR}/index.html`)
})

app.listen(CLIENT_PORT, () => {
    console.log(`Server is running on port ${CLIENT_PORT}`)
})
