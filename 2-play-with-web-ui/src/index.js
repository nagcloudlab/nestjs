
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

console.log('Hello, Play with Web UI!');

//-----------------------------------------------
// using DOM api
//-----------------------------------------------

const greetBtn = document.querySelector('.btn-primary');
const hideBtn = document.querySelector('.btn-danger');
const showBtn = document.querySelector('.btn-success');
const cardDiv = document.querySelector('.card');
const cardBodyDiv = document.querySelector('.card-body');


greetBtn.addEventListener('click', (event) => {
    // by current-time, greet either "Good Morning", "Good Afternoon" or "Good Evening"
    const currentHour = new Date().getHours();
    let greetMsg = '';
    if (currentHour < 12) {
        greetMsg = 'Good Morning!';
    } else if (currentHour < 18) {
        greetMsg = 'Good Afternoon!';
    } else {
        greetMsg = 'Good Evening!';
    }

    // display the greeting message in the card body
    cardBodyDiv.innerText = greetMsg;
})

hideBtn.addEventListener('click', (event) => {
    cardDiv.style.display = 'none';
})

showBtn.addEventListener('click', (event) => {
    cardDiv.style.display = 'block';
})


//-----------------------------------------------
// using DOM api + Timer api
//-----------------------------------------------

const emojiBoxDiv = document.querySelector('#emoji-box');
const smileEmojis = ['😀', '😃', '😄', '😁', '😆', '😊', '🙂', '😉', '😇', '🥰'];

setInterval(() => {
    // pick a random emoji from smileEmojis array
    const randomIndex = Math.floor(Math.random() * smileEmojis.length);
    const randomEmoji = smileEmojis[randomIndex];
    emojiBoxDiv.innerText = randomEmoji;
}, 1000);


//-----------------------------------------------
// using DOM api + Fetch api
//-----------------------------------------------
const apiUrl = 'https://jsonplaceholder.typicode.com/todos?_limit=5';
const top5TodosBtn = document.querySelector('#top5-todos-btn');
const todosTbody = document.querySelector('#todos-tbody');
const progressMessageSpan = document.querySelector('#progress-message');

top5TodosBtn.addEventListener('click', () => {
    const promise = fetch(apiUrl) // GET request ( async http request )
    promise.then((response) => {
        return response.json(); // read response body and parse as JSON
    }).then((todos) => {
        // todos is an array of todo objects
        progressMessageSpan.innerText = '';
        const trList = todos.map((todo) => {
            return `<tr>
                <td>${todo.id}</td>
                <td style="color: ${todo.completed ? 'green' : 'red'}">${todo.title}</td>
                <td>${todo.completed}</td>
            </tr>`;
        });
        todosTbody.innerHTML = trList.join('');
    });
    progressMessageSpan.innerText = 'Loading top-5 todos...';
})