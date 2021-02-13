class Store{
    static getTask(){
        let tasks;

        if(localStorage.getItem('tasks') === null){
            tasks = [];
        }else{
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        return tasks;
    }

    static getId(){
        let tasks = Store.getTask();
        let taskId = 0;
        tasks.forEach(book => {
            taskId = book.id;
        });
        return taskId + 1;
    }

    static AddNewTask(task){
        let tasks = Store.getTask();

        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    static DisplayTaskList(){
        
        let tasks = this.getTask();
        console.log(tasks);
        tasks.forEach((task) => {
            UI.AddNewTaskInTaskList(task);
        })
    }
}