document.getElementById('add-task').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    if (taskText) {
        addTask(taskText);
        document.getElementById('new-task').value = '';
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('tasks-list');
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `${taskText} <i class="fas fa-trash-alt delete"></i>`;
    taskList.appendChild(taskItem);

    taskItem.querySelector('.delete').addEventListener('click', function() {
        taskItem.remove();
    });
}
