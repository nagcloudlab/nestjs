

import express from 'express';

const router = express.Router();

const todos = [
    { id: 1, title: 'Learn Node.js', completed: false },
    { id: 2, title: 'Learn Express', completed: false },
    { id: 3, title: 'Build a REST API', completed: false },
    { id: 4, title: 'Deploy to Heroku', completed: false },
    { id: 5, title: 'Learn React', completed: false },
    { id: 6, title: 'Learn Redux', completed: false },
    { id: 7, title: 'Build a React App', completed: false },
    { id: 8, title: 'Deploy React App', completed: false },
    { id: 9, title: 'Learn TypeScript', completed: false },
    { id: 10, title: 'Build a TypeScript App', completed: false },
];

router.get('/', (req, res) => {
    // load todos from database
    const limit = parseInt(req.query.limit) || todos.length;
    res.json(todos.slice(0, limit));
});
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find(t => t.id === id);
    if (todo) {
        res.json(todo);
    } else {
        res.status(404).json({ error: 'Todo not found' });
    }
});
router.post('/', express.json(), (req, res) => {
    const { title, completed } = req.body;
    if (!title) {
        return res.status(400).json({ error: 'Title is required' });
    }
    const newTodo = {
        id: todos.length + 1,
        title,
        completed: completed || false,
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});
router.put('/:id', express.json(), (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find(t => t.id === id);
    if (todo) {
        const { title, completed } = req.body;
        if (title !== undefined) {
            todo.title = title;
        }
        if (completed !== undefined) {
            todo.completed = completed;
        }
        res.json(todo);
    }
    else {
        res.status(404).json({ error: 'Todo not found' });
    }
});
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = todos.findIndex(t => t.id === id);
    if (index !== -1) {
        const deletedTodo = todos.splice(index, 1)[0];
        res.json(deletedTodo);
    } else {
        res.status(404).json({ error: 'Todo not found' });
    }
});

export default router;
