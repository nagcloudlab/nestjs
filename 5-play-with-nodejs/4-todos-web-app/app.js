
import express from 'express';
import exphbs from 'express-handlebars';
import mysql from 'mysql2';

const app = express();

// Configure handlebars
app.engine(
    "hbs",
    exphbs.engine({
        extname: "hbs"
    })
);

app.set("view engine", "hbs");
app.set("views", "./views");

app.use(express.static('public'));


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootpass123",
    database: "todosdb"
});

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/todos/new', (req, res) => {
    res.render('new-todo-form');
});
app.post('/todos/new', express.urlencoded({ extended: true }), (req, res) => {
    const { title, description } = req.body;
    const query = 'INSERT INTO todos (title, description) VALUES (?, ?)';
    connection.query(query, [title, description], (err) => {
        if (err) {
            console.error('Error inserting todo:', err);
            return res.status(500).send('Internal Server Error');
        }
        res.redirect('/todos');
    });
});
app.get('/todos', (req, res) => {
    const query = 'SELECT * FROM todos';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching todos:', err);
            return res.status(500).send('Internal Server Error');
        }
        // render the todos-list view with the todos data
        res.render('todos-list', { todos: results });
    });
});

app.post('/todos/:id/toggle', (req, res) => {
    const { id } = req.params;
    const query = 'UPDATE todos SET completed = NOT completed WHERE id = ?';

    connection.query(query, [id], (err) => {
        if (err) {
            console.error('Error toggling todo status:', err);
            return res.status(500).send('Internal Server Error');
        }

        res.redirect('/todos');
    });
});

app.post('/todos/:id/delete', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM todos WHERE id = ?';

    connection.query(query, [id], (err) => {
        if (err) {
            console.error('Error deleting todo:', err);
            return res.status(500).send('Internal Server Error');
        }
        res.redirect('/todos');
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});