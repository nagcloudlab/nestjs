console.log("Client-side JavaScript is running!");

const todosBtn = document.getElementById('todos-btn');
const todosTableBody = document.getElementById('todos-table-body');

todosBtn.addEventListener('click', () => {
    fetch('/todos?limit=5')
        .then(response => response.json())
        .then(data => {
            todosTableBody.innerHTML = '';
            data.forEach(todo => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${todo.id}</td>
                    <td>${todo.title}</td>
                    <td>${todo.completed ? 'Yes' : 'No'}</td>
                `;
                todosTableBody.appendChild(row);
            });
        });
});