let nameNum = 1;
function PostingCommentFunc(){


let starsCont = document.querySelectorAll(".starsCont")
let regularStar = document.querySelectorAll(".regularStar")
let goldStar = document.querySelectorAll(".goldStar")
var rated = false;

var userStarRate = 1;
Array.from(starsCont).forEach((e, index) => {
     
    e.addEventListener("click", () => {
        if (index === 0) {
            userStarRate = 1
            rated = true;
            e.classList.add("active")

            e.nextElementSibling.classList.remove("active")
            e.nextElementSibling.nextElementSibling.classList.remove("active")
            e.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove("active")
            e.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove("active")

        }
        if (index === 1) {
            userStarRate = 2
            rated = true;
            e.classList.add("active")
            e.previousElementSibling.classList.add("active")

            e.nextElementSibling.classList.remove("active")
            e.nextElementSibling.nextElementSibling.classList.remove("active")
            e.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove("active")

        }
        if (index === 2) {
            userStarRate = 3
            rated = true;
            e.classList.add("active")
            e.previousElementSibling.classList.add("active")
            e.previousElementSibling.previousElementSibling.classList.add("active")

            e.nextElementSibling.classList.remove("active")
            e.nextElementSibling.nextElementSibling.classList.remove("active")

        }
        if (index === 3) {
            userStarRate = 4
            rated = true;
            e.classList.add("active")
            e.previousElementSibling.classList.add("active")
            e.previousElementSibling.previousElementSibling.classList.add("active")
            e.previousElementSibling.previousElementSibling.previousElementSibling.classList.add("active")

            e.nextElementSibling.classList.remove("active")

        }
        if (index === 4) {
            userStarRate = 5
            rated = true;
            e.classList.add("active")
            e.previousElementSibling.classList.add("active")
            e.previousElementSibling.previousElementSibling.classList.add("active")
            e.previousElementSibling.previousElementSibling.previousElementSibling.classList.add("active")
            e.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.classList.add("active")

        }

    })
   
})


  //commenting
const commentReels = document.querySelector(".commentReels")
const postBtn = document.getElementById("postBtn")
let reviewInput = document.getElementById("reviewInput")
postBtn.addEventListener("click", () => {
    
      if(rated === false){
          alert("PLEASE SELECT THE NUMBER OF STARS YOU WANT TO GIVE US FIRST");
      }
      else{
        
        if(reviewInput.value === "" || reviewInput.value === " ") {
                  alert("Comment cannot be Empty")
              }

              else {
                rated = false;
                Array.from(starsCont).forEach((e)=>{
                    e.classList.remove("active")
                })
            
                console.log(userStarRate)
                
//figuring out number of stars user inputed
var enteredStars = "";
for(let s = 1 ; s <= userStarRate;s++ ){
    enteredStars += `<img src="starGold.svg" alt="Star">`
}
    let datelog = `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`
    let userComment = document.createElement("div")
    userComment.className = "comment"
    userComment.innerHTML = `<div class="commentHeader">
                    <span class="user"><img src="user-solid.svg" alt="U"><span class="username">username ${nameNum}</span></span>
                    <span id="commentDate">${datelog}</span>
            </div>
                <div class="ActualComment">${reviewInput.value}</div>
                <div class="userRating">${enteredStars}</div>`
    commentReels.appendChild(userComment)
    reviewInput.value = "";
    document.querySelector(".commentReels").scrollLeft += -490;
    nameNum++;

      }
      }
  })
  
}
PostingCommentFunc()