const express = require('express')

const app = express()

// app.use((req, res, next) => {
//     console.log('The first middleware')
//     next()
// })

// app.use((req, res, next) => {
//     console.log('The second middleware')
//     res.send('You have reached the Express app.')
// })
app.get('/users', (req, res, next) => {
    res.send('<h1>Now you are on the Users page.</h1><br><span>Go to <a href="/">Home Page</a></span>')
})

app.get('/', (req, res, next) => {
    res.send('<h1>You have reached the home page. </h1><br><span>Go to <a href="/users">Users Page</a></span>')
})


app.listen(8080)