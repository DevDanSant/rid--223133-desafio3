const tasks = [
    {id:1, title:"Implementar tela de listagem de tarefas", tag:"front-end", date:"21/08/2025", done: false },
    {id:2, title:"Criar endpoint para cadastro de tarefas", tag:"back-end", date:"21/08/2025", done: false },
    {id:3, title:"Implementar prototipo da listagem de tarefas", tag:"back-end", date:"21/08/2025", done: true },
];
const createTask = (event) => {
  event.preventDefault();
  const description = event.target.elements.description.value;
  const tag = event.target.elements.tag.value;
  

 

 const newTask = {
    id: tasks.length + 1,
    title: description,
    tag: tag,
    date: new Date().toLocaleDateString(),
    done: false
  }

  tasks.push(newTask);

   const todoList = document.getElementById("task-list");
  const todo = document.createElement("li");
  todo.id = `task-${newTask.id}`;
  todo.innerHTML = `
    <strong>${newTask.title}</strong>
    <span>${newTask.tag}</span>
    <span>${newTask.date}</span>
  `;
  todoList.appendChild(todo);
  renderTask(newTask);

  

  console.log(tasks);

}

const renderTask = (task) => {
    const todoList = document.getElementById("task-list");

    const todo = document.createElement("li");
    todo.id = `task-${task.id}`;
    todo.style.background = "#fff";
    todo.style.borderRadius = "0.75rem";
    todo.style.padding = "0.9rem 1rem";
    todo.style.border = "1px solid #e5e7eb";
    todo.style.listStyle = "none";
    todo.style.marginBottom = "0.75rem";

    const title = document.createElement("strong");
    title.textContent = task.title;
    title.style.fontSize = "0.95rem";
    title.style.color = "#111827";
    title.style.display = "block";
    title.style.marginBottom = "0.4rem";

    const tag = document.createElement("span");
    tag.textContent = task.tag;
    tag.style.border = "1px solid #d1d5db";
    tag.style.borderRadius = "999px";
    tag.style.padding = "0.2rem 0.7rem";
    tag.style.fontSize = "0.75rem";
    tag.style.color = "#6b7280";
    tag.style.marginRight = "0.5rem";

    const date = document.createElement("span");
    date.textContent = `Criado em: ${task.date}`;
    date.style.fontSize = "0.78rem";
    date.style.color = "#9ca3af";
    date.style.display = "block";
    date.style.marginTop = "0.4rem";

   const botao = document.createElement("button");
   botao.textContent = "Concluir";
   botao.style.fontSize = "0.78rem";
   botao.style.background = " #2D70FD";

   botao.addEventListener("click", ()=>{
    task.done = true;
    botao.remove();
     title.style.textDecoration = "line-through";
    

   });

   











    todo.appendChild(title);
    todo.appendChild(tag);
    todo.appendChild(date);
    todo.appendChild(botao);
    todoList.appendChild(todo);

  
}


window.onload = function() {
    const form = document.getElementById("form-task");
    form.addEventListener('submit', createTask);

    tasks.forEach(task => renderTask(task)); // e aqui também
}




