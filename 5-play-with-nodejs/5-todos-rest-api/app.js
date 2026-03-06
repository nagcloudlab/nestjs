
import express from 'express';
import exphbs from 'express-handlebars';
import mysql from 'mysql2';

const app = express();


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootpass123",
    database: "todosdb"
});

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Todos API' });
});

app.post('/todos', express.json(), (req, res) => {
    const { title, description } = req.body;
    const query = 'INSERT INTO todos (title, description) VALUES (?, ?)';
    connection.query(query, [title, description], (err) => {
        if (err) {
            console.error('Error inserting todo:', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
        res.status(201).json({ message: 'Todo created successfully' });
    });
});
app.get('/todos', (req, res) => {
    const query = 'SELECT * FROM todos';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching todos:', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
        res.json(results);
    });
});
app.put('/todos/:id/toggle', (req, res) => {
    const { id } = req.params;
    const query = 'UPDATE todos SET completed = NOT completed WHERE id = ?';

    connection.query(query, [id], (err) => {
        if (err) {
            console.error('Error toggling todo status:', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }

        res.json({ message: 'Todo status toggled successfully' });
    });
});
app.delete('/todos/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM todos WHERE id = ?';

    connection.query(query, [id], (err) => {
        if (err) {
            console.error('Error deleting todo:', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
        res.json({ message: 'Todo deleted successfully' });
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});