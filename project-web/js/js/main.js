const breakTask = document.getElementById('break');
const koreanTask = document.getElementById('korean');
const englishTask = document.getElementById('english');
const speakingclubTask = document.getElementById('speakingclub');
const movieTask = document.getElementById('movietime');
const examTask = document.getElementById('exam');
const deselectBtn = document.getElementById('deselect');
const taskContainer = document.querySelector('.task__container');
const scheduleContainer = document.querySelector('.schedule__container');
const resetBtn = document.querySelector('.deleteBtn');
const popUp = document.querySelector('.pop-up__container');
const noBtn = document.getElementById('btn__no');
const yesBtn = document.getElementById('btn__yes');

let selectedColor, active;

//Event Listeners
taskContainer.addEventListener('click', selectTask);
scheduleContainer.addEventListener('click', setColors);
deselectBtn.addEventListener('click', resetTasks);
resetBtn.addEventListener('click',openPopup);
noBtn.addEventListener('click', closePopup);
yesBtn.addEventListener('click', deleteTasks);

// Tasks click  (3)
function selectTask (e){
    resetTasks()

    taskColor = e.target.style.backgroundColor;

    switch(e.target.id){
        case 'break':
            activeTask(breakTask, taskColor);
            icon = '<i class="fas fa-couch"></i>';
            break
        case 'korean':
            activeTask(koreanTask, taskColor);
            icon = '<i class="fas fa-book-open"></i>';
            break
        case 'english':
            activeTask(englishTask, taskColor);
            icon = '<i class="fas fa-chalkboard"></i>';
            break
        case 'speakingclub':
            activeTask(speakingclubTask, taskColor);
            icon = '<i class="fas fa-user-friends"></i>';
            break
        case 'movietime':
            activeTask(movieTask, taskColor);
            icon = '<i class="fas fa-video"></i>';
            break
        case 'exam':
            activeTask(examTask, taskColor);
            icon = '<i class="fas fa-briefcase"></i>';
            break
    }

};

// Set colors for schedule (4)
function setColors (e){
    if(e.target.classList.contains('task') && active === true){
        e.target.style.backgroundColor = selectedColor;
        e.target.innerHTML = icon;
    }else if(e.target.classList.contains('fas') && active === true){
        e.target.parentElement.style.backgroundColor = selectedColor;
        e.target.parentElement.innerHTML = icon;
    }
};

// Active task (1)
function activeTask(task, color){
    task.classList.toggle('selected');

    if(task.classList.contains('selected')){
        active = true;
        selectedColor = color;
        return selectedColor;
    } else {
        active = false;
    }
}


function resetTasks(){
    const allTasks = document.querySelectorAll('.task__name');

    allTasks.forEach((item)=>{
        item.className = 'task__name';
    })
}


function deleteTasks(){
    const tasks = document.querySelectorAll('.task');

    tasks.forEach((item)=>{
        item.innerHTML = '';
        item.style.backgroundColor = 'white';
    })

    closePopup();
}


function openPopup(){
    popUp.style.display = 'flex';
}


function closePopup(){
    popUp.style.display = 'none';
}


//const input = login.querySelector("input")
//const emailIcon = login.querySelector(".email-icon")

//input.

