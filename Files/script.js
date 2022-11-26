const deleteList=document.querySelectorAll('.task img');
const toDoList=document.querySelector('.to-do-list');
const sortIcon=document.querySelector('.sort-icon img');
const input=document.querySelector('input')
const inputImg=document.querySelector('.task-input img');
const addButton=document.querySelector('.addToListButton');
const taskList=document.querySelector('.task');
const inputDiv=document.querySelector('.task-input');
let i=0;
addButton.addEventListener('click',add)
function add(){
    let newTask=document.createElement('div');
    newTask.className='task';
    i++;
    newTask.innerHTML=
    `<p>${i}) ${input.value}</p>
     <img src="/files/delete-icon.svg" alt="delete">`
    toDoList.style.display='block'
    toDoList.appendChild(newTask);
    input.value='';
    if(toDoList.childElementCount==5){
        inputDiv.style.display='none';
    }   
}

deleteList.forEach(element=>{
    element.addEventListener('click', function(e){
        e.target.parentElement.remove();
        if(toDoList.childElementCount==0){
            toDoList.style.display='none';
        }
    })
})
inputImg.addEventListener('click', function(){
    input.value='';
    console.log(input.value);
})