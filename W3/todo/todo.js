
//Model section

let todos = [{
    title: 'Get kids',
    dueDate: '10-10-2020',
    id : 'id1'
},
{title:'Buy shoes',
dueDate: '11-11-2020',
id : 'id2'},

{title:'New Car', 
dueDate: '12-12-2020',
id:'id3'}];

//Add Todo


function createTodo(title,dueDate){
    const id = ''+ new Date().getTime();
     
    todos.push({title: title,
        dueDate:dueDate,
        id : id
    });

    saveTodos();
    
}


// Save Todo
function saveTodos(){
    localStorage.setItem('todos', JSON.stringify(todos));
}

//Remove Todo


function removeTodo(idToDelete){
   
    todos = todos.filter(function(todo){
        if (todo.id === idToDelete){
        return false;
        } else{ 
        return true
       }});
    
       render();
    };
    
    saveTodos();



 render();
 
 
 
 //Controller Section

function addToDo(){
    const textbox = document.getElementById("todo-title");
    const title= textbox.value;
    const datePicker = document.getElementById("date-picker");
    const dueDate = datePicker.value;
    createTodo(title, dueDate);
    
    render();
};

function deleteTodo(event){
   
   const deleteButton = event.target;
   const idToDelete = deleteButton.id; 

   todos = todos.filter(function(todo){
    if (todo.id === idToDelete){
    return false;
    } else{ 
    return true
   }});
   removeTodo(idToDelete)
   render();
}



//View Section

function render(){
    document.getElementById('todo-list').innerHTML = '';
    todos.forEach(function (todo){
        let element = document.createElement('div'); 

        element.innerText = todo.title +" "+ todo.dueDate;
        
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.style = 'margin-left:10px';
        deleteButton.onclick= deleteTodo;
        deleteButton.id = todo.id;
        element.appendChild(deleteButton);
        
        const todoList = document.getElementById('todo-list');
        todoList.appendChild(element);
    });
};
