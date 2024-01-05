const express = require('express');
const app = express();
const port = 3000;

// ============================ Basic Routing ============================
// Get method
app.get('/', (req, res) => {
  res.send('Hello World')
})


// Post method
// app.post('/', (req, res) => {
//   res.send('Got a POST request')
// })


// Put method
// app.put('/user', (req, res) => {
//   res.send('Got a PUT request at /user')
// })


// Delete method
// app.delete('/user', (req, res) => {
//   res.send('Got a DELETE request at /user')
// })




// ============================ Route Parameter ============================
// Put method
app.put('/users/:id', (req, res) => {
  res.send(req.params)
})


// ========================== App Route ======================
app.route('/book')
  .get((req, res) => {
    res.send('Get Book')
  })
  .post((req, res) => {
    res.send('Post Book')
  })
  .put((req, res) => {
    res.send('Put Book')
  })




app.listen(port, () => {
  console.log(`Server running in port ${port}`)
})