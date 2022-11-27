
const toDoList=document.querySelector('.to-do-list');
const sortIcon=document.querySelector('.sort-icon img');
const input=document.querySelector('input')
const inputImg=document.querySelector('.task-input img');
const addButton=document.querySelector('.addToListButton');
const taskList=document.querySelector('.task');
const inputDiv=document.querySelector('.task-input');

addButton.addEventListener('click',add);
input.addEventListener('keyup',function(e){
    if(e.key==='Enter'){
        add();
    }
});
let i=toDoList.childElementCount+1;

function add(){
    let newTask=document.createElement('div');
    newTask.className='task';
    newTask.innerHTML=
    `<p>${i}) ${input.value}</p>
    <img src="/files/delete-icon.svg" alt="delete">`
    if(i==i){
        i++
    }
    
    toDoList.style.display='block'
    toDoList.appendChild(newTask);
    input.value='';
    if(toDoList.childElementCount==5){
        inputDiv.style.display='none';
    }else if(toDoList.childElementCount==0){
        inputDiv.style.display='block';
    }
    const deleteList=document.querySelectorAll('.task img');
deleteList.forEach(element=>{
    element.addEventListener('click', function(e){
        e.target.parentElement.remove();
        i--;
        if(toDoList.childElementCount==5){
            inputDiv.style.display='none';
        }else if(toDoList.childElementCount<5 && toDoList.childElementCount>0 ){
            inputDiv.style.display='block';
        }else if(toDoList.childElementCount==0){
            inputDiv.style.display='block';
            toDoList.style.display='none'; 
        }
        
       /*  if(toDoList.childElementCount==0){
            toDoList.style.display='none';
            i==1
        } */
    })
})  
}

inputImg.addEventListener('click', function(){
    input.value='';
    console.log(input.value);
})
