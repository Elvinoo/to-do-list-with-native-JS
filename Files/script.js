const toDoList = document.querySelector('.to-do-list');
const sortIcon = document.querySelector('.sort-icon svg');
const input = document.querySelector('input');
const inputImg = document.querySelector('.task-input svg');
const addButton = document.querySelector('.addToListButton');
const inputDiv = document.querySelector('.task-input');
const svg = sortIcon.innerHTML;
const svg2 = `<svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="5" y="15" width="2.5" height="12.5" transform="rotate(-180 5 15)" fill="#C4C4C4"/>
<rect x="10" y="3.75" width="2.5" height="7.5" transform="rotate(-90 10 3.75)" fill="#C4C4C4"/>
<rect x="10" y="8.75" width="2.5" height="10" transform="rotate(-90 10 8.75)" fill="#C4C4C4"/>
<rect x="10" y="13.75" width="2.5" height="15" transform="rotate(-90 10 13.75)" fill="#C4C4C4"/>
<path d="M3.75 6.55671e-07L6.99759 4.6875L0.502404 4.6875L3.75 6.55671e-07Z" fill="#C4C4C4"/>
</svg>`
addButton.addEventListener('click', add);
input.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        add();
    }
});
let i = toDoList.childElementCount + 1;
function add() {
    if (toDoList.childElementCount < 5) {
        let newTask = document.createElement('div');
        newTask.className = 'task';
        newTask.innerHTML =
            `<p contentEditable="true" class="tasks">${i}) ${input.value}</p>
    <img class="gray" src="/files/delete-icon.svg" alt="cancel">
    
`
        i++;
        toDoList.style.display = 'block'
        toDoList.appendChild(newTask);
        input.value = '';
        if (toDoList.childElementCount == 5) {
            inputDiv.style.display = 'none';
        } else if (toDoList.childElementCount < 5) {
            inputDiv.style.display = 'block';
        }
        const grayCancel = document.querySelectorAll('.gray');
        const deleteList = document.querySelectorAll('.task img');
        deleteList.forEach(element => {
            grayCancel.forEach((e) => {
                e.addEventListener('mouseover', function (event) {
                    event.target.setAttribute('src', '/files/cancel-blueviolet.svg');
                })
                e.addEventListener('mouseout', function (event) {
                    event.target.setAttribute('src', '/files/delete-icon.svg')
                })
            })
            element.addEventListener('click', function (e) {

                e.target.parentElement.remove();
                if (toDoList.childElementCount == 5) {
                    inputDiv.style.display = 'none';
                } else if (toDoList.childElementCount < 5 && toDoList.childElementCount > 0) {
                    inputDiv.style.display = 'block';
                } else if (toDoList.childElementCount == 0) {
                    inputDiv.style.display = 'block';
                    toDoList.style.display = 'none';
                }
            })
        })
    }
}

inputImg.addEventListener('click', function () {
    input.value = '';
})

sortIcon.addEventListener('click', sort);

function sort() {
    if (toDoList.childElementCount > 1) {
        const taskList = document.querySelectorAll('.task');
        let arr = [...taskList]
        console.log(arr)
        sortedByIndex = [...arr].reverse();
        if (sortIcon.innerHTML == svg) {
            toDoList.replaceChildren(...taskList, ...sortedByIndex);
            sortIcon.innerHTML = svg2;

        } else {
            sortIcon.innerHTML = svg;
            toDoList.replaceChildren(...sortedByIndex,...taskList);

        }
    } else {
        alert('Nothing to sort');
    }
}