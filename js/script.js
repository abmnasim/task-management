const form = document.querySelector("#newTaskData")
document.addEventListener('DOMContentLoaded', Store.DisplayTaskList());


// Add Event Listners
form.addEventListener('submit', addNewTask);

//Function Area
function addNewTask(e) {
    e.preventDefault();
    console.log(e.target);
    const title = document.querySelector("#title").value,
    description = document.querySelector("#description").value,
    startDate = document.querySelector("#date").value,
    startTime = document.querySelector("#time").value,
    endDate = document.querySelector("#edate").value,
    endTime = document.querySelector("#etime").value;

    let vTitle = vDescription = vStartDate = vStartTime = vEndDate = vEndTime = '';

    vDescription = description;

    if (title === '' || title.length < 3) {
        document.querySelector("#title").classList.add("is-invalid");
        document.querySelector('#titleFeedback').innerHTML = "Please enter valid title.";
    }else{
        document.querySelector("#title").classList.remove("is-invalid");
        document.querySelector('#titleFeedback').innerHTML = "";
        vTitle = title;
    }

    if(startDate === ''){
        document.querySelector("#date").classList.add("is-invalid");
        document.querySelector('#dateFeedback').innerHTML = "Please enter valid date.";
    }else{
        document.querySelector("#date").classList.remove("is-invalid");
        document.querySelector('#dateFeedback').innerHTML = "";
        vStartDate = startDate;
    }

    if(startTime === ''){
        document.querySelector("#time").classList.add("is-invalid");
        document.querySelector('#timeFeedback').innerHTML = "Please enter valid time.";
    }else{
        document.querySelector("#time").classList.remove("is-invalid");
        document.querySelector('#timeFeedback').innerHTML = "";
        vStartTime = startTime;
    }

    if(endDate === ''){
        document.querySelector("#edate").classList.add("is-invalid");
        document.querySelector('#edateFeedback').innerHTML = "Please enter valid date.";
    }else{
        document.querySelector("#edate").classList.remove("is-invalid");
        document.querySelector('#edateFeedback').innerHTML = "";
        vEndDate = endDate;
    }

    if(endTime === ''){
        document.querySelector("#etime").classList.add("is-invalid");
        document.querySelector('#etimeFeedback').innerHTML = "Please enter valid time.";
    }else{
        document.querySelector("#etime").classList.remove("is-invalid");
        document.querySelector('#etimeFeedback').innerHTML = "";
        vEndTime = endTime;
    }

    let vId = Store.getId();

    if (vTitle != '' && vStartDate != '' && vStartTime != '' && vEndDate != '' && vEndTime != '') {
        const task = new Task(vId, vTitle, vDescription, vStartDate, vStartTime, vEndDate, vEndTime);
        UI.AddNewTaskInTaskList(task);
        Store.AddNewTask(task);
        UI.Notice('Valid data!', 'success');
        UI.ClearFields();
    }else{
        UI.Notice('Please enter valid data!', 'error');
    }
}