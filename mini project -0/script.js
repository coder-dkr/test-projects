let bub = document.querySelectorAll(".bulv");

bub.forEach((abc, idx) => {
  if (idx % 2 == 1) {
    abc.classList.toggle("redus");
  }
})
setInterval(function() {
  bub.forEach((abc, idx) => {
    if (idx % 2 == 1) {
      abc.classList.toggle("redus");
    }
    else {
     abc.classList.toggle("bulb");
    }
  })
}, 200);

toggleExpand();
setInterval(function() {
    toggleExpand();
}, bub.length * 100 + 100);

function toggleExpand() {
    bub.forEach((abc, idx) => {
        let delayTime = idx * 100;
        if (idx >= bub.length / 2) {
            delayTime = (bub.length - idx + bub.length / 2) * 100;
        }
        setTimeout(() => {
            abc.classList.toggle("bulb-expand");
        }, delayTime);
        setTimeout(() => {
            abc.classList.toggle("bulb-expand");
        }, delayTime + 100);
    })
}
