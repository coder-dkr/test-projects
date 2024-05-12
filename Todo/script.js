//add deleted button
let addBtn = document.querySelector(".addBtn")
let delBtn = document.querySelector(".delBtn")
let closePop = document.getElementById("closepopBtn")
const todoKey = "todoData";
// adding task to grid
let taskTitle = document.querySelector(".title")
let taskNote = document.querySelectorAll(".note")
let titleInp = document.getElementById("add-title")
let taskInp = document.getElementById("add-task")
let popup = document.getElementById("popup")
let form = document.getElementById("form-card")
let formBtn = document.getElementById("form-button")
let updateFormBtn = document.getElementById("Update-form-button")
let newTask = document.querySelectorAll(".new-card")
let primaryCard = document.querySelector(".Primary-card")
let cardfoots = document.querySelectorAll(".cardfoot")
addBtn.addEventListener("click", (e) => {
    titleInp.value = ""
    taskInp.value = ""
    e.preventDefault()
    formBtn.style.display = "block"
    updateFormBtn.style.display = "none";
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

        var Data = {
            "title": `${titleInp.value}`,
            "task": `${taskInp.value}`,
            "dateLog": `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`,
            "id": `${Number.parseInt(Math.random() * 999).toString()}`
        };

        if (localStorage.getItem(todoKey) == null) {
            localStorage.setItem(todoKey, JSON.stringify([Data]))
        }
        else {
            var temp = JSON.parse(localStorage.getItem(todoKey))
            temp.push(Data)
            localStorage.setItem(todoKey, JSON.stringify(temp))
        }
        popup.style.display = "none"
        primaryCard.insertAdjacentHTML('afterend', `
        <li class="card new-card">
        <span class="title forEDITtit">${Data.title}</span>
        <span class="note forEDITtas">${Data.task}</span>
        <hr class="line">
        <div class="cardfoot">
        <span class="date">${Data.dateLog}</span>
        <span class="editdel">
        <span class="edit"><img onclick="editTask(this,${Data.id})" src="img/pen-solid.svg" alt="pen"></span>
        <span class="delnote"><img onclick="deleteTask(this,${Data.id})" src="img/trash-can-solid.svg" alt="pen">
        </span> 
        </span>
        </div>
        </li>` );
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
        localStorage.setItem("number", i)
    }
})
let todoDataList = JSON.parse(localStorage.getItem(todoKey))
if (todoDataList !== null) {
    todoDataList.forEach((elem, id) => {
        primaryCard.insertAdjacentHTML('afterend', `
        <li class="card new-card">
        <span class="title forEDITtit">${elem.title}</span>
        <span class="note forEDITtas">${elem.task}</span>
        <hr class="line">
        <div class="cardfoot">
        <span class="date">${elem.dateLog}</span>
        <span class="editdel">
        <span class="edit"><img onclick="editTask(this,${elem.id})" src="img/pen-solid.svg" alt="pen"></span>
        <span class="delnote"><img onclick="deleteTask(this,${elem.id})" src="img/trash-can-solid.svg" alt="pen">
        </span>
        </span>
        </div>
        </li>` );

    })
}
// for mouseover texxt
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
//&&&&&&&&&&&&&&&&
const deleteTask = (e, dataId) => {
    let delconfirm = confirm("Completed?")
    if (delconfirm) {
        let tempDataList = JSON.parse(localStorage.getItem(todoKey))
        if (tempDataList != null) {
            tempDataList.forEach((value, index) => {
                if (dataId == value.id) {
                    tempDataList.splice(index, 1,)
                    localStorage.setItem(todoKey, JSON.stringify(tempDataList));
                }
            })
            let TobedEL = e.parentElement.parentElement.parentElement.parentElement
            e.parentElement.parentElement.parentElement.parentElement.classList.add("gettingDel")
            e.parentElement.parentElement.parentElement.parentElement.innerHTML = `<img src="img/tickk.gif" alt="">`
            TobedEL.firstElementChild.style.transform = "scale(0)" 
            setTimeout(()=>{
            TobedEL.firstElementChild.style.transform = "scale(1.35)"
            },300)
            setTimeout(()=>{
                TobedEL.remove()
            },3520)
        }
    }
    else {
        console.warn("TASK NOT DELETED")
    }
}

function editTask(e, editId) {
    popup.style.display = "block"
    formBtn.style.display = "none"
    updateFormBtn.style.display = "block";
    let editableTitle = e.parentElement.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling;
    let editableTask = e.parentElement.parentElement.parentElement.previousElementSibling.previousElementSibling;
    taskInp.value = editableTask.innerHTML
    titleInp.value = editableTitle.innerHTML

    updateFormBtn.addEventListener("click", (p) => {
        p.preventDefault()
        if (titleInp.value === "" || taskInp.value === "") {
            alert("TASK CANNNOT BE EMPTY")
        }
        else {
            let dateoftask = e.parentElement.parentElement.previousElementSibling.innerHTML

            let EditedData = {
                "title": `${titleInp.value}`,
                "task": `${taskInp.value}`,
                "dateLog": `${dateoftask}`,
                "id": `${editId}`
            };

            let tempDataList = JSON.parse(localStorage.getItem(todoKey))
            if (tempDataList != null) {
                tempDataList.forEach((value, index) => {
                    if (editId == value.id) {
                        tempDataList.splice(index, 1, EditedData)
                        localStorage.setItem(todoKey, JSON.stringify(tempDataList));
                    }
                })
            }
            formBtn.style.display = "block"
            updateFormBtn.style.display = "none"
            popup.style.display = "none"
            location.reload()
        }
    })
}
delBtn.addEventListener("click", (e) => {
    e.preventDefault()
    localStorage.clear()
    location.reload()
})

//reading overflown content
let isCard = document.querySelectorAll(".card")

document.addEventListener("DOMContentLoaded", () => {
    const wholeCover = document.querySelector(".wholeCover")
    const newTaskCard = document.querySelectorAll(".new-card");
    wholeCover.style.zIndex = "-1"
    newTaskCard.forEach((e) => {
        e.addEventListener("click", () => {
        
        const noteof = e.querySelector(".note");
        if (noteof) {
          const notestr = String(noteof.innerHTML).split(" ");
          if (notestr.length > 15) {
            wholeCover.style.zIndex = "99"
            e.style.zIndex = "100"
            noteof.style.overflowY = "scroll";
            console.log(notestr.length);
          } else {
            console.log(notestr.length);
          }
          wholeCover.addEventListener("click",()=>{
            noteof.style.overflowY = "hidden";
            wholeCover.style.zIndex = "-1"
            e.style.zIndex = "0"

          })

        } 
        else {
          console.error("hello");
        }
      });
      

    });
  });
  
