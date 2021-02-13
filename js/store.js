class Store{
    static getTask(){
        let tasks;

        if(localStorage.getItem('tasks') === null){
            tasks = [];
        }else{
            tasks = JSON.parse(localStorage.getItem('books'));
        }
        return tasks;
    }

    static getId(){
        let tasks = this.getTask();
        let taskId = 0;
        tasks.forEach(book => {
            taskId = book.id;
        });
        return taskId + 1;
    }
}