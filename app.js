//selector
document.querySelector('form').addEventListener('submit', handleSubmitForm);

//Event handler
function handleSubmitForm(e){
    e.preventDefault();
    let input = document.querySelector("input");
    if(input.value != '')
        addTodo(input.value);
    input.value = '';
}


//helpers

function addTodo(todo){
    let ul = document.querySelector('ul');
    let li = document.querySelector('li');

    li.innerHTML = `
        <span class = "todo-item">${todo}</span>
        <button name = "checkButton"><i class = "fas fa-check-square"></i></button>
        <button name = "deleteButton"><i class = "fas fa-trash"></i></button>
    
    `;

    li.classList.add('todo-list-item');
    ul.appendChild(li);
}