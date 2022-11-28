
const toDoList=document.querySelector('.to-do-list');
const sortIcon=document.querySelector('.sort-icon svg');
const input=document.querySelector('input')
const inputImg=document.querySelector('.task-input svg');
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
    `<p class="tasks">${i}) ${input.value}</p>
    <img class="gray" src="/files/delete-icon.svg" alt="cancel">
    <img style="display: none;" class="violet" src="/files/cancel-blueviolet.svg" alt="cancel">
`
    if(i==5){
        i--
    }else if(i==i){
        i++
    }else{
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
    
    const grayCancel=document.querySelectorAll('.gray');
    const bluevioletCancel=document.querySelectorAll('.violet');
    const deleteList=document.querySelectorAll('.task img');
    deleteList.forEach(element=>{
        element.addEventListener('mouseover',function(){
            grayCancel.forEach(e=>{
                e.style.display='none';
            })
            bluevioletCancel.forEach(el=>{
                el.style.display='block';
            })

        })
        element.addEventListener('mouseout',function(){
            grayCancel.forEach(e=>{
                e.style.display='inline';
            })
            bluevioletCancel.forEach(el=>{
                el.style.display='none';
            })
        })
        element.addEventListener('click', function(e){
            
            e.target.parentElement.remove();
            if(toDoList.childElementCount==5){
                inputDiv.style.display='none';
            }else if(toDoList.childElementCount<5 && toDoList.childElementCount>0 ){
                inputDiv.style.display='block';
            }else if(toDoList.childElementCount==0){
                inputDiv.style.display='block';
                toDoList.style.display='none'; 
            }
        })
    })  
}

inputImg.addEventListener('click', function(){
    input.value='';
})

sortIcon.addEventListener('click', sort);

function sort(){
    const sortIcon1=document.querySelector('.sort-icon svg:first-child');
    const sortIcon2=document.querySelector('.sort-icon svg:last-child');
    const taskList=document.querySelectorAll('.task');
    let arr=[...taskList]
    sortedByIndex=[...arr].reverse();
    toDoList.replaceChildren(...taskList, ...sortedByIndex)
    if(getComputedStyle(sortIcon1).display==='inline'){
        sortIcon2.style.display='inline'
        sortIcon1.style.display='none';
    }else{
        alert('back')
    }
}