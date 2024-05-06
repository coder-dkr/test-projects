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

formBtn.addEventListener("click", (e) => {
    if (titleInp.value === "" || taskInp.value === "") {
        alert("TASK CANNOT BE EMPTY");
        e.preventDefault()
    }
    else {
        e.preventDefault()

        let title = titleInp.value;
        let task = taskInp.value;
        popup.style.display = "none"
        let dateLog = `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`
        primaryCard.insertAdjacentHTML('afterend', `
<li class="card new-card">
    <span class="title">${title}</span>
    <span class="note">${task}</span>
    <hr class="line">
    <div class="cardfoot">
        <span class="date">${dateLog}</span>
        <span class="editdel">
          <span class="edit"><img onclick="editTask(this)" src="img/pen-solid.svg" alt="pen"></span>
          <span class="delnote"><img onclick="deleteTask(this)" src="img/trash-can-solid.svg" alt="pen">
        </span>
        </span>
    </div>

</li>`);

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


    }

})

delBtn.addEventListener("click", (e) => {
    e.preventDefault()
    location.reload()


})


const deleteTask = (e) => {
    let delconfirm = confirm("Delete this task?")
    if(delconfirm){
        e.parentElement.parentElement.parentElement.parentElement.remove()
    }
    else{
        console.warn("TASK NOT DELETED")
    }
}

let editTask = (e)=>{
    popup.style.display = "block"
    formBtn.style.display = "none"
    updateFormBtn.style.display="block"
   let editableTitle = e.parentElement.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling;
    let editableTask = e.parentElement.parentElement.parentElement.previousElementSibling.previousElementSibling;
    taskInp.value = editableTask.innerHTML
    titleInp.value = editableTitle.innerHTML
  console.log("hei")
    
        updateFormBtn.addEventListener("click",(p)=>{
            p.preventDefault()
            if(titleInp.value === "" || taskInp.value === ""){
                alert("TASK CANNNOT BE EMPTY")
            }
            else{
            editableTitle.innerHTML = titleInp.value
            editableTask.innerHTML = taskInp.value
            formBtn.style.display = "block"
            updateFormBtn.style.display="none"
            popup.style.display = "none"
            }
            
        })           
}
