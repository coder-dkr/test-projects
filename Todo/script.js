//add deleted button
let addBtn = document.querySelector(".addBtn")
let delBtn = document.querySelector(".delBtn")
let closePop = document.getElementById("closepopBtn")

// adding task to grid
let taskTitle = document.querySelector(".title")
let taskNote = document.querySelector(".note")
let titleInp = document.getElementById("add-title")
let taskInp = document.getElementById("add-task")

let popup = document.getElementById("popup")
let form = document.getElementById("form-card")
let formBtn = document.getElementById("form-button")
let updateFormBtn = document.getElementById("Update-form-button")
let newTask = document.querySelector(".new-card")

let primaryCard = document.querySelector(".Primary-card")

let cardfoots = document.querySelectorAll(".cardfoot")

addBtn.addEventListener("click", (e) => {
    titleInp.value = ""
    taskInp.value = ""
    e.preventDefault()
    popup.style.display = "block";




})


closePop.addEventListener("click", () => {
    popup.style.display = "none";
})
let i = 0
formBtn.addEventListener("click", (e) => {

    if (titleInp.value === "" || taskInp.value === "") {
        alert("TASK CANNOT BE EMPTY");
        e.preventDefault()
    }
    else {
        e.preventDefault()
        let Data = {
            title:[],
            task:[]
        };
        Data.title[i] = `${titleInp.value}`;
        Data.task[i] = `${taskInp.value}`;
        console.log(Data.title)
        
        let dateLog = `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`;
        
        localStorage.setItem("title",`${Data.title}`);
        localStorage.setItem("task",`${Data.task}`);
        localStorage.setItem("createdate",`${dateLog}`);
        
        popup.style.display = "none"
        localStorage.setItem("newcards",`
        <li class="card new-card">
        <span class="title forEDITtit">${localStorage.getItem("title")}</span>
        <span class="note forEDITtas">${localStorage.getItem("task")}</span>
        <hr class="line">
        <div class="cardfoot">
        <span class="date">${localStorage.getItem("createdate")}</span>
        <span class="editdel">
        <span class="edit"><img onclick="editTask(this)" src="img/pen-solid.svg" alt="pen"></span>
        <span class="delnote"><img onclick="deleteTask(this)" src="img/trash-can-solid.svg" alt="pen">
        </span>
        </span>
        </div>
        
        </li>`)
        primaryCard.insertAdjacentHTML('afterend', localStorage.getItem("newcards") );
        
        i++;

        let edits = document.querySelectorAll(".edit")
        Array.from(edits).forEach(e => {
            e.addEventListener("mouseover", () => {
                e.parentElement.parentElement.classList.add("activeedit")
            })
            e.addEventListener("mouseout", () => {
                e.parentElement.parentElement.classList.remove("activeedit")
            })

        })
        let delnotes = document.querySelectorAll(".delnote")
        Array.from(delnotes).forEach(e => {
            e.addEventListener("mouseover", () => {
                e.parentElement.parentElement.classList.add("activedel")
            })
            e.addEventListener("mouseout", () => {
                e.parentElement.parentElement.classList.remove("activedel")
            })

        })
        localStorage.setItem("number",i)
        
    }
    
})
for(let j =0; j<localStorage.getItem("number");j++){
    localStorage.newcards[j] = `
    <li class="card new-card">
        <span class="title forEDITtit">${localStorage.getItem("title")[i]}</span>
        <span class="note forEDITtas">${localStorage.getItem("task")[i]}</span>
        <hr class="line">
        <div class="cardfoot">
            <span class="date">${localStorage.getItem("createdate")}</span>
            <span class="editdel">
              <span class="edit"><img onclick="editTask(this)" src="img/pen-solid.svg" alt="pen"></span>
              <span class="delnote"><img onclick="deleteTask(this)" src="img/trash-can-solid.svg" alt="pen">
            </span>
            </span>
        </div>
    
    </li>`
    primaryCard.insertAdjacentHTML('afterend', localStorage.getItem("newcards") );

}



delBtn.addEventListener("click", (e) => {
    e.preventDefault()
    localStorage.clear()
    location.reload()


})


const deleteTask = (e) => {
    let delconfirm = confirm("Delete this task?")
    if (delconfirm) {
        e.parentElement.parentElement.parentElement.parentElement.remove()

    }
    else {
        console.warn("TASK NOT DELETED")
    }
}

function editTask(e) {
    popup.style.display = "block"
    formBtn.style.display = "none"
    updateFormBtn.style.display = "block"
    //    let editableTitle = e.parentElement.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling;
    //     let editableTask = e.parentElement.parentElement.parentElement.previousElementSibling.previousElementSibling;
    let editableTitle = e.parentElement.parentElement.parentElement.parentElement.getElementsByClassName("forEDITtit")[0];
    let editableTask = e.parentElement.parentElement.parentElement.parentElement.getElementsByClassName("forEDITtas")[0];

    taskInp.value = editableTask.innerHTML
    titleInp.value = editableTitle.innerHTML
    console.log(editableTitle)
    console.log(editableTask)


    console.log("before click")
    updateFormBtn.addEventListener("click", (p) => {
        p.preventDefault()
        alert("under contruction")
        // if (titleInp.value === "" || taskInp.value === "") {
        //     alert("TASK CANNNOT BE EMPTY")
        // }
        // else {
        //     console.log(editableTitle)
        //     console.log(editableTask)
        //     editableTitle.innerHTML = titleInp.value
        //     editableTask.innerHTML = taskInp.value
        //     formBtn.style.display = "block"
        //     updateFormBtn.style.display = "none"
        //     popup.style.display = "none"
        // }

    })
}


//alt method yet to try



// const storedTitles = localStorage.getItem("title");
// const storedTasks = localStorage.getItem("task");

// const titlesArray = storedTitles.split(",");
// const tasksArray = storedTasks.split(",");


// const primaryCard = document.querySelector(".Primary-card");


// for (let i = 0; i < titlesArray.length; i++) {
//     const newCard = document.createElement("li");
//     newCard.classList.add("card", "new-card");
//     newCard.innerHTML = `
//         <span class="title">${titlesArray[i]}</span>
//         <span class="note">${tasksArray[i]}</span>
//         <!-- Other card elements (date, edit/delete buttons, etc.) -->
//     `;
//     primaryCard.appendChild(newCard);
// }


