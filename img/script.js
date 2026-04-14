const tasks = [
    {id:1, title:"Implementar tela de listagem de tarefas", tag:"front-end", date:"21/08/2025", done: false },
    {id:2, title:"Criar endpoint para cadastro de tarefas", tag:"back-end", date:"21/08/2025", done: false },
    {id:3, title:"Implementar prototipo da listagem de tarefas", tag:"back-end", date:"21/08/2025", done: true },
];


window.onload = function(){
    const todoList = document.getElementById("task-list");

    tasks.forEach(task => {
    const todo = document.createElement("li");
    todo.id = `task-${task.id}`;
     todo.innerHTML = `
    <strong>${task.title}</strong>
    <span>${task.tag}</span>
    <span>${task.date}</span>
  `;
    todoList.appendChild(todo);
  });


}