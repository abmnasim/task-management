class UI {
    constructor(){}

    static AddNewTaskInTaskList(task){
        const list = document.querySelector('#taskList');
        const div = document.createElement('tr');
        div.innerHTML = `
            <td>${task.id}</td>
            <td>${task.title}</td>
            <td>${task.date} ${task.time}</td>
            <td>${task.edate} ${task.etime}</td>
            <td><input type="checkbox" id=""></td>
            <td><a href="delete" title="delete">X</a></td>
        `;
        list.appendChild(div);
    }

    static Notice(msg, status){
        const div = document.createElement('div');
        div.className = `alert ${status}`;
        div.appendChild(document.createTextNode(msg));
        document.querySelector('#notice').appendChild(div);
        setTimeout(() => {
            UI.clearAlert();
        }, 3000);
    }

    static clearAlert(){
        let currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove();
        }
    }

    static ClearFields(){
        document.querySelector("#title").value = description = document.querySelector("#description").value = startDate = document.querySelector("#date").value = startTime = document.querySelector("#time").value = endDate = document.querySelector("#edate").value = endTime = document.querySelector("#etime").value = vTitle = vDescription = vStartDate = vStartTime = vEndDate = vEndTime = '';
    }
}