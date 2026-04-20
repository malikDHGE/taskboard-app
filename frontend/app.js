const API_URL = 'http://localhost:8080/api/tasks';

const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');
const taskIdInput = document.getElementById('task-id');
const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');
const statusInput = document.getElementById('status');

async function loadTasks() {
    const response = await fetch(API_URL);
    const tasks = await response.json();
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const div = document.createElement('div');
        div.className = 'task';
        div.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description || ''}</p>
            <p>Status: ${task.status}</p>
            <div class="task-actions">
                <button onclick="editTask(${task.id}, '${escapeString(task.title)}', '${escapeString(task.description || '')}', '${task.status}')">Bearbeiten</button>
                <button onclick="deleteTask(${task.id})">Löschen</button>
            </div>
        `;
        taskList.appendChild(div);
    });
}

function escapeString(str) {
    return str.replace(/'/g, "\\'").replace(/\n/g, ' ');
}

async function saveTask(event) {
    event.preventDefault();

    const task = {
        title: titleInput.value,
        description: descriptionInput.value,
        status: statusInput.value
    };

    const id = taskIdInput.value;

    if (id) {
        await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task)
        });
    } else {
        await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task)
        });
    }

    taskForm.reset();
    taskIdInput.value = '';
    loadTasks();
}

function editTask(id, title, description, status) {
    taskIdInput.value = id;
    titleInput.value = title;
    descriptionInput.value = description;
    statusInput.value = status;
}

async function deleteTask(id) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    loadTasks();
}

taskForm.addEventListener('submit', saveTask);
loadTasks();
