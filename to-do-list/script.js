document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    const taskList = document.getElementById('taskList');
    const placeholderImage = document.getElementById('placeholderImage');

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a delete button with a trash can emoji
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '🗑️';
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(li);
        checkPlaceholder(); // Check if we need to show the placeholder
    });

    // Mark as completed with a checkmark emoji
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
        li.innerHTML = li.classList.contains('completed') ? 
            `${taskText} ✅` : 
            taskText;
        li.appendChild(deleteButton); // Keep the delete button
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);
    taskInput.value = ''; // Clear input

    checkPlaceholder(); // Check if we need to show the placeholder
}

function checkPlaceholder() {
    const taskList = document.getElementById('taskList');
    const placeholderImage = document.getElementById('placeholderImage');

    // Show the placeholder image if there are no tasks
    if (taskList.children.length === 0) {
        placeholderImage.style.display = 'block';
    } else {
        placeholderImage.style.display = 'none';
    }
}