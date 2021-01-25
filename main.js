console.log("main.js: loaded");
// class App {
//     constructor() {
//         console.log("App initialized");
//     }
// }

// const app = new App();
// app();

const addTask = document.querySelector('.add-task');
const list = document.querySelector('.todos');

const createTask = task => {           // taskを作成
    const html = `
    <li class="list-group-item">
        <span>${task}</span>
    </li>`;

    list.innerHTML += html;
}

addTask.addEventListener('submit', e => {       // taskを追加
    e.preventDefault();

    const task = addTask.add.value.trim();
    if(task.length) {
        createTask(task);
        addTask.reset();
    }
});