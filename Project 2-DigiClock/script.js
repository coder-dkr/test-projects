
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

function isYesMatch(value) {
    yesArr = ['y', 'yes','I pay my respects to grand overseer'];
    return yesArr.some((element) => {
        return element.toLowerCase() === value.toLowerCase();
    })
}
function isNoMatch(value) {
    noArr = ['n', 'no','nah'];
    return noArr.some((element) => {
        return element.toLowerCase() === value.toLowerCase();
    })
}

const myask = () => {
    alert("HOHOHO, YOU ARE HERE...GREETINGS MORTAL, I\'M..THE HEAVENLY CREATOR ~ OVERSEER(ROY)");
    let firs = prompt("(will you greet the divine overseer?)", 'I pay my respects to grand overseer/nah');
    if (isYesMatch(firs)) {
        alert("HOHOHOHO WHAT A WELL MANNERED CHILD..")
        alert("IN THE CURRENT ERA, COUNTLESS MORTALS HAVE BEEN SWAYED BY DEMON OF LAZE..BUT YOUR AURA IS DIFFERENT..")
        firs = prompt("O MORTAL...DO YOU..DESIRE GREATNESS ? ", 'y/n')
        if (isYesMatch(firs)) {
            firs = prompt("OH YOURE AN INTERESTING ONE, BUT ARE YOU SURE..? THE PATH YOU'LL TAKE TRANSCENDS MORTAL LIMITS..", 'y/n')
            if (isYesMatch(firs)) {

                alert("KWAHAHAHAHA ITS VERY RARE TO ENCOUNTER A STRONG WILLED MORTAL LIKE YOU..IM IMPRESSED")
                alert("VERY WELL...MAY LUCK BE WITH YOU...!!!")
                location.href = "https://www.google.com/search?q=how+to+achieve+greatness";
            }
            else if (isNoMatch(firs)) {
                alert("SUCH WEAK WILL...[-_-] NO MATTER...NOT EVERYONE IS DESTINED TO BE GREAT..")
            }
            else {
                alert("WEAKONE..YOU LACK FOCUS...TRY AGAIN")
            }
        }
        else if (isNoMatch(firs)) {
            firs = prompt(" ARE YOU SURE MORTAL??", 'y/n')
            if (isYesMatch(firs)) {
                firs = prompt("Pakka bro?? uh, I MEAN YOURE 100% NOT INTERESTED..???")
                if (isYesMatch(firs)) {
                    alert('I SEE, YOU WERE NOT THE CHOOSEN ONE')
                }
                else if (isNoMatch(firs)) {
                    firs = prompt("HMMMM...WILL YOUU CONTINUE THEN", 'y/n')
                    if (isYesMatch(firs)) {
                        alert("HAHAHAHAHAHA SO YOU ARE NOT A COMPLETE TRASH...")
                        alert("VERY WELL...MAY LUCK BE WITH YOU...!!!")
                        location.href = "https://www.google.com/search?q=how+to+achieve+greatness";
                    }
                    else {
                        alert("YOU.... DISSAPOINTED ME..BEGONE")
                    }
                }
            }
            else if (isNoMatch(firs)) {
                firs = prompt("EVERSINCE THIS WORLD CAME TO BE..ALL MORTALS HAVE CHOOSEN THEIR UNIQUE 'PATH OF LIFE'...WILL YOU CARRY THE WILL OF YOUR ANCESTORS AND STRIVE TO TRANSCEND??", 'y/n')
                if (isYesMatch(firs)) {
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
