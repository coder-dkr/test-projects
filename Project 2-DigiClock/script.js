
document.getElementsByTagName('a')[0].style.color = "white";



const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};
setInterval(() => {
    ab = new Date();
    dates = ab.toLocaleDateString(undefined, options);
    time = ab.getHours().toString().padStart(2, '0') + ":" + ab.getMinutes().toString().padStart(2, '0') + ":" + ab.getSeconds().toString().padStart(2, '0');


    document.getElementById('time').innerHTML = `<b> ${time} on     ${dates} </b>`
}, 100);

const myask = () => {
    
    yesArr = ['y', 'Y', 'YES', 'yes'];
    noArr = ['n', 'N', 'NO', 'no'];
    

    alert("HOHOHO, YOU ARE HERE...GREETINGS MORTAL, I\'M..THE HEAVENLY CREATOR ~ OVERSEER(");
    let firs = prompt("(will you greet the divine overseer?)", 'y/n');
    let isYesMatch = yesArr.some((element) => {
        return element == firs;
    })
    let isNoMatch = noArr.some((element) => {
        return element == firs;
    })
    if (isYesMatch) {

        firs = prompt("DO YOU..DESIRE GREATNESS", 'y/n')

        if (isYesMatch) {
            firs = prompt("OH YOURE BRAVE BUT ARE YOU SURE..? THE PATH YOU'LL TAKE TRANSCENDS MORTAL LIMITS..", 'y/n')
            if (isYesMatch) {
                alert("VERY WELL...MAY LUCK BE WITH YOU...!!!")
                location.href = "https://www.google.com/search?q=how+to+achieve+greatness";
            }
            else if (isNoMatch) {
                alert("NO MATTER...NOT EVERYONE IS DESTINED TO BE GREAT..")
            }
            else {
                alert("WEAKONE..YOU LACK FOCUS...TRY AGAIN")
            }
        }
        else if (isNoMatch) {
            firs = prompt(" ARE YOU SURE MORTAL??", 'y/n')
            if (isYesMatch) {
                firs = prompt("Pakka bro?? uh -cough-I MEAN YOURE 100% NOT INTERESTED..???")
                if (isYesMatch) {
                    alert('I SEE, YOU WERE NOT THE CHOOSEN ONE')
                }
                else if (isNoMatch) {
                    firs = prompt("HMMMM...WILL YOUU CONTINUE THEN", 'y/n')
                    if (isYesMatch) {
                        alert("HAHAHAHAHAHA SO YOU ARE NOT A COMPLETE TRASH...")
                        alert("VERY WELL...MAY LUCK BE WITH YOU...!!!")
                        location.href = "https://www.google.com/search?q=how+to+achieve+greatness";
                    }
                    else {
                        alert("YOU.... DISSAPOINTED ME..BEGONE")
                    }
                }
            }
            else if (isNoMatch) {
                firs = prompt("EVERSINCE THIS WORLD CAME TO BE..ALL MORTALS HAVE CHOOSEN THEIR UNIQUE 'PATH OF LIFE'...WILL YOU CARRY THE WILL OF YOUR ANCESTORS AND STRIVE TO TRANSCEND??", 'y/n')
                if (isYesMatch) {
                    alert("HAHAHAHA BRAVOOOO SO YOU DO HAVE WHAT IT TAKES...IM SATISFIED WITH YOUR RESPONSE")
                    alert("VERY WELL...MAY LUCK BE WITH YOU...!!!")
                    location.href = "https://www.google.com/search?q=how+to+achieve+greatness";

                }
                else {
                    alert("WEAKNESS DISGUST ME [-_-]")
                }
            }

        }
        else {
            alert("SO YOU WERE NEVER AWARE..NAIVE..YOU MAY LEAVE")
        }

    }
    else {
        alert("[-_-] NAIVE CHILD...BEFORE ANYTHING..LEARN SOME-")
        location.href = "https://www.google.com/search?q=manners";

    }





}


