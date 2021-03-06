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
        <label>
            <input type="checkbox" class="checkbox">
            <span>&nbsp&nbsp${task}</span>
        </label>
    </li>
    `;

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