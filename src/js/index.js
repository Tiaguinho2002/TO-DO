const addTask = document.querySelector(".add-task")
const addBtn = document.querySelector(".add")
const Trash = document.querySelector(".trash")
const Task = document.querySelector(".Task")
const ContainerTask = document.querySelector(".Task-Container")
const word = document.querySelector(".Word")


    addBtn.addEventListener('click', (e) => {
        e.preventDefault()
      
        let adicionar = document.querySelector(".add-task")
        let value = adicionar.value;
      

    if (value !== "") {
    const existingTasks = Array.from(ContainerTask.querySelectorAll(".Word"));
    const isDuplicate = existingTasks.some(task => task.innerText === value);

    if (!isDuplicate) {
        let task = document.createElement('div')
        task.classList = "Task-Container"
  
    let boxCheck = document.createElement('input')
        boxCheck.type = 'checkbox'
        task.appendChild(boxCheck)
   
    let content = document.createElement('h1')
        content.classList = "Word"
        content.innerText = adicionar.value
        task.appendChild(content)       

    let TwoTask = document.createElement('button');
        TwoTask.classList = 'trash'
        TwoTask.innerHTML = '<i class="material-symbols-outlined"> delete </i>'
        task.appendChild(TwoTask)
        
        // delete 
        TwoTask.addEventListener('click', () => {
            task.remove()
        })
        
        ContainerTask.appendChild(task)
        
        adicionar.value = '';

    } else {
        alert("Tarefa já existe na lista.");
    }
}   else {
    alert("Digite uma tarefa válida.");
}
})
