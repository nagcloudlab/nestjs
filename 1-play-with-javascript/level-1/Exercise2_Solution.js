
// console based 'todos' application

// what is data model? todo
// properties: id, title, completed`
// data structure: array 


//------------------------------
// Data Model
//------------------------------

class Todo {
    static nextId = 1;
    constructor(title, completed = false) {
        this.id = Todo.nextId++;
        this.title = title;
        this.completed = completed;
    }
}

//------------------------------
// Service Layer ( business logic )
//------------------------------

class TodoService {
    constructor() {
        this.todos = [];
    }
    addTodo(title) {
        const todo = new Todo(title);
        this.todos.push(todo);
        console.log(`Added todo: [${todo.id}] ${todo.title}`);
    }

    editTodo(id, newTitle) {
        const todo = this.todos.find(function(t) {
            return t.id === id;
        });
        if (todo) {
            todo.title = newTitle;
            console.log(`Edited todo: [${todo.id}] ${todo.title}`);
        } else {
            console.log(`Todo with id ${id} not found.`);
        }
    }
    printTodos() {
        console.log("Todo List:");
        this.todos.forEach(function(todo) {
            console.log(`[${todo.id}] ${todo.title} - Completed: ${todo.completed}`);
        });
    }
    completeTodo(id) {
        const todo = this.todos.find(function(t) {
            return t.id === id;
        });
        if (todo) {
            todo.completed = !todo.completed;
            console.log(`Todo [${todo.id}] marked as ${todo.completed ? 'completed' : 'not completed'}.`);
        } else {
            console.log(`Todo with id ${id} not found.`);
        }
    }
    deleteTodo(id) {
        const index = this.todos.findIndex(function(t) {
            return t.id === id;
        });
        if (index !== -1) {
            const deletedTodo = this.todos.splice(index, 1)[0];
            console.log(`Deleted todo: [${deletedTodo.id}] ${deletedTodo.title}`);
        } else {
            console.log(`Todo with id ${id} not found.`);
        }
    }

}

//------------------------------
// UI Layer ( presentation logic )
//------------------------------

const todoService = new TodoService();
todoService.addTodo("Learn JavaScript");
todoService.addTodo("Build a todo app");
todoService.addTodo("eat pongal");
console.log("\n");
todoService.editTodo(2, "Build a todo application");
console.log("\n");
todoService.completeTodo(1);
console.log("\n");
todoService.deleteTodo(3);
console.log("\n");
todoService.printTodos();


//------------------------------------------
// End of File
//------------------------------------------
