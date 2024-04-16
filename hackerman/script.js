
let hack = document.getElementById("hack")
let btn = document.getElementById("myBtn")
let connect = document.querySelector(".connecting")
 
let hackcode = [
   "Intializing Hack Program...",
    "Intializing Dark Pilot...",
    "Connecting to server 1...",
    "Request Failed...",
    "Connecting to server 2...",
    `Success...Fetching data...`,
    "Fetching facebook..Instagram..MobileMedia.........[error].....",
    "Stabalized...",
    "PHoneNumber access=true...Media Acess=true",
    "phone number: +91XXXXXXXXXX..instaId: x_x_69",
    "hack successful.. [-_+] </>",


];
const sleep = async (sec) => {
return new Promise((resolve,reject) =>{
      setTimeout(() => {
      resolve(true)
        }, sec * 1000)
    })

}


btn.addEventListener("click", () => {
    let tInput = document.getElementById("tname");
    let targeted = tInput.value;
    if(targeted == ""){
        alert("enter valid name")
    }
    else{

        setTimeout(()=>{
            hack.style.justifyContent = "flex-start";
            hack.style.alignItems = "flex-start";
            hack.style.padding = "5px 8px";
            hack.style.fontSize = "1rem";
          
          
            const showHack = async (message) => {
              await sleep(2)
              hack.innerHTML += `<br>${message}`
            }
            (async () =>{
              hack.textContent = `target set - ${targeted.charAt(0).toUpperCase() + targeted.slice(1)}`
              for (let j = 0; j < hackcode.length ; j++){
                await showHack(hackcode[j])
              }
            })()
          
            
          },1800)
            
            connect.style.display = "block";
            setTimeout(() => {
              connect.style.display = "none";
          
            }, 1600)
             
    }
  


})

