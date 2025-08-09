export class Storage{
    static getTasks(){
        return JSON.parse(localStorage.getItem("tasks")) || [];
    }

    static saveToLocal(task){
        const tasks = this.getTasks();
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    static deleteTask(id){
        const filter = this.getTasks().filter(task => task.id !== id);
        localStorage.setItem("tasks", JSON.stringify(filter));
    }

    static editTask(newTask){
        
      
    }

}