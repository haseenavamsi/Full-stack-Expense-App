const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const expenseRoutes = require('./routes/expenseroutes');

app.use(bodyParser.json());

app.use('/expenses', expenseRoutes);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
