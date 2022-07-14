
import express, { ErrorRequestHandler } from 'express';

import 'express-async-errors';
import { CreateAccountServiceExample } from './services/createUserServiceExample1';

const app = express()

app.use(express.json())

app.post('/account', async (req, res, next) => {
  const createAccount = new CreateAccountServiceExample()

    try {
      const account = await createAccount.execute(req.body)
      return res.json(account)
    } catch (error) {
      next(error)
    }

})

const errorHandler : ErrorRequestHandler= (err, req, res, next) => {
  return res.status(err.status).send({
    message: err.message
  })
};

app.use(errorHandler);

app.listen(3000, () =>
  console.log('NOSSA API TA ONLINE PAPAI! 🏃🏼‍♀️💨: http://localhost:3000'),
)