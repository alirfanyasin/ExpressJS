const express = require('express');
const app = express();
const port = 3000;

// response send()
app.get('/', (req, res) => {
  res.send('<h3>Hello World</h3>')
})


// response sendStatus()
app.get('/user', (req, res) => {
  res.send('Get User')
  res.sendStatus(200).send('ok')
})

// response json()
app.get('/user', (req, res) => {
  const user = {
    id: 1,
    name: 'Irfan',
    old: 19
  }
  res.json(user)
})

// resnponse resdirect()
app.get('/about-user', (req, res) => {
  res.redirect('/user')
})


// 










app.listen(port, () => {
  console.log(`Server running in port ${port}`)
})