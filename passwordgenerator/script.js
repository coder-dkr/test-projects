let screen = document.getElementById("screen");
let upperBox = document.getElementById("upper");
let lowerBox = document.getElementById("lower");
let numberBox = document.getElementById("number");
let symbolBox = document.getElementById("symbol");

let genBtn = document.getElementById("generate")

let incre = document.getElementById("plus");
let decre = document.getElementById("minus");
let lengthPass = document.getElementById("length");
let count = 0;

incre.addEventListener("click",() => {

    count  = count +1;
   lengthPass.innerHTML = count;
})
decre.addEventListener("click",() => {
    count  = count - 1;
   lengthPass.innerHTML = count;
})



let upperletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerletters = "abcdefghijklmnopqrstuvwxyz";
let numbers = "1234567890";
let symbols = "!@$%^&*(_)/\\~";


genBtn.addEventListener("click",(figure) => {
    figure = Number.parseInt(lengthPass.textContent)
    
    let passArr = [];
    if(upperBox.checked == true){
        passArr.push(upperletters)
    }
    if(lowerBox.checked == true){
        passArr.push(lowerletters)
    }
    if(numberBox.checked == true){
        passArr.push(numbers)
    }
    if(symbolBox.checked == true){
        passArr.push(symbols)
    
    }
  
    if(passArr.length == 0){
        alert("Select a checkbox");

    }
    else{
    let password = ""
    if(figure < 4){
        alert("Your password atleast need to be 4 digit lomg..")
    }
    else{
        passArr.forEach((e) => {
            let i = 0;
            while(i < figure){
                password += e[Math.floor(Math.random() * e.length)]
                i += passArr.length ;

            }
            
            password = password.substr(0,figure);
            console.log(password.length)
            

             
        });

        if(password.length > 16){
            document.querySelector(".PassScreen").classList.toggle("FONT-REDU")
        }
        if(password.length > 24){
            document.querySelector(".PassScreen").classList.toggle("FONT-REDUXL")
        }

       
        
        screen.textContent = password;
        
    }
}
})

