import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';

import routes from './routes';

import connectToDB from './utilities/dbConnection'

const port = process.env.PORT;
const app = express();

connectToDB();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(helmet());
app.use(cors());

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
