
import express from 'express';
import logger from './middleware/logger.js';
import morgan from 'morgan';
import todosRouter from './router/todos.js';

const app = express();


// app.use(logger);
app.use(morgan('dev'));
app.use(express.static('public'));
app.use('/todos', todosRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});