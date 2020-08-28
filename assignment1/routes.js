const fs = require('fs')

const pages = require('./html/pages')

exports.routes = (req, res) => {
    const { url, method } = req
    if (url === '/' && method === 'GET') return indexRoute(req, res)
    if (url === '/users' && method === 'GET') return usersRoute(req, res)
    if (url === '/create-user' && method === 'POST') return createUser(req, res)
    res.setHeader('Content-Type', 'text/html')
    res.write('<h1>Error 404: Could not find route.</h1>')
}

const indexRoute = (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.write(pages.index)
    res.end()
}

const usersRoute = (req, res) => {
    fs.readFile('./users.json', (err, data) => {
        if (err) return res.writeHead(302, { 'Location': '/users' })
        const { usernames } = JSON.parse(data)
        const userList = usernames.map(user => `<li>${user}</li>`)
        const usersPage = pages.users.replace('{userlist}', userList.join(' '))
        res.setHeader('Content-Type', 'text/html')
        res.write(usersPage)
        res.end()
    })
}

const createUser = (req, res) => {
    const body = []
    req.on('data', chunk => body.push(chunk))
    req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString()
        let username
        try {
            username = decodeURI(parsedBody.split('=')[1]).replace('+', ' ')
        } catch (e) {
            console.log(e)
            res.writeHead(302, { 'Location': '/' })
            return res.end()
        }
        fs.readFile('./users.json', (err, data) => {
            if (err) return res.writeHead(302, { 'Location': '/' })
            let { usernames } = JSON.parse(data)
            usernames.push(username)
            fs.writeFile('./users.json', JSON.stringify({ usernames }), () => {
                res.writeHead(302, { 'Location': '/users' })
                return res.end()
            })
        })
    })
}