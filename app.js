//var firebaseConfig = {
 //   apiKey: "AIzaSyCr0UpQOsc7nI1myNuU6zizjHF7gg_Vf3k",
 //   authDomain: "todoist-59e43.firebaseapp.com",
 //   databaseURL: "https://todoist-59e43.firebaseio.com",
 //   projectId: "todoist-59e43",
 //   storageBucket: "todoist-59e43.appspot.com",
 //   messagingSenderId: "743158732366",
 //   appId: "1:743158732366:web:885771f1636ed5f2b3551f"
 // };
  // Initialize Firebase
 // firebase.initializeApp(firebaseConfig);


//selector
document.querySelector('form').addEventListener('submit', handleSubmitForm);
document.querySelector('ul').addEventListener('click', handleClickDeleteOrCheck);
document.getElementById('clearAll').addEventListener('click', handleClearAll);
//Event handler
function handleSubmitForm(e){
    e.preventDefault();
    let input = document.querySelector("input");
    if(input.value != '')
        addTodo(input.value);
    input.value = '';
}

function handleClickDeleteOrCheck(e){
    if (e.target.name == 'checkButton')
        checkTodo(e);

    if (e.target.name == 'deleteButton')
        deleteTodo(e);
}

function handleClearAll(e) {
    document.querySelector('ul').innerHTML = '';
}


//helpers

function addTodo(todo) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');

    li.innerHTML = `
        <span class = "todo-item">${todo}</span>
        <button name = "checkButton"><i class = "fas fa-check-square"></i></button>
        <button name = "deleteButton"><i class = "fas fa-trash"></i></button>
    
    `;

    li.classList.add('todo-list-item');
    ul.appendChild(li);
}

function checkTodo(e) {
    let item = e.target.parentNode;
    if (item.style.textDecoration == 'line-through')
        item.style.textDecoration = 'none';
    else
        item.style.textDecoration = 'line-through';
}

function deleteTodo(e) {
    let item = e.target.parentNode;
    item.remove()
    /*item.addEventListener('transitioned', function(){
        item.remove();
    });*/

    item.classList.add('todo-list-item-fall');
}
