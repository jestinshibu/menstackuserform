const express = require('express')
const app = express()
const port = 5000;
const userRouter = require('./routers/userRoute');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(/api/auth, userRouter);
app.use(express.json());

app.listen(port, () => {
  console.log(app listening on port ${port})
})