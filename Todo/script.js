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
let newTask = document.querySelector(".new-card")

let primaryCard = document.querySelector(".Primary-card")



addBtn.addEventListener("click", (e) => {
    titleInp.value = ""
    taskInp.value = ""
    e.preventDefault()
    popup.style.display = "block";



})
closePop.addEventListener("click", () => {
    titleInp.value = "";
    taskInp.value = "";
    popup.style.display = "none";
})

formBtn.addEventListener("click", (e) => {
    e.preventDefault()
    let title = titleInp.value;
    let task = taskInp.value;
    popup.style.display = "none"
    let dateLog = `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`
    primaryCard.insertAdjacentHTML('afterend',`  <li class="card new-card">
                
    <span class="title">${title}</span>
    <span class="note">${task}</span>
    <hr class="line">
    <span class="date">${dateLog}</span>

</li>`);


})

delBtn.addEventListener("click", (e) => {
    e.preventDefault()
    location.reload()


})






    // let div1 = document.createElement("div");
    // div1.className = "card"
    // div1.classList.add("new-card")
    
    // let div2 =document.createElement("div")
    // div2.className = "task" 
    
    // let span1 = document.createElement("span")
    // span1.className = "title"
    // span1.innerHTML = titleInp.value
    
    // let hr = document.createElement("hr") 
    // hr.className = "line"
    
    // let span2 = document.createElement("span")
    // span2.className = "note"
    // span2.innerHTML = taskInp.value
    
    // let span3 = document.createElement("span")
    // span3.className = "date"
    // span3.innerHTML = `${dateLog}`
    
    // div1.appendChild(div2)
    
    // div2.appendChild(span1)
    // div2.appendChild(hr)
    // div2.appendChild(span2)
    
    // div1.appendChild(span3)
