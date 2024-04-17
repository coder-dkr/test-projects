let datee = document.querySelector(".date")

datee.textContent = `${new Date().getDate()}/${new Date().getMonth() +1}/${new Date().getUTCFullYear()}`