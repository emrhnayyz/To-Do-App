const addToDo = document.querySelector("input");

const addBtn = document.querySelector("button");

const toDoUl = document.querySelector("#todo-ul")

let toDoList = []

let list2 = []



addBtn.onclick = () =>{
     
    toDoList.unshift(addToDo.value)
    toDoUl.innerHTML+=`<li><i class="fa-solid fa-check"></i><p class="li-p">${toDoList[0]}</p><i class="fa-solid fa-trash"></i></li>`;

    const ul = document.getElementById("todo-ul");
    const listItems = ul.getElementsByTagName("li");

    for (let i = 0; i <= listItems.length - 1; i++) {
        listItems[i].onclick=()=>{
            listItems[i].style.textDecoration="line-through"
        }
    } 

    

    


}