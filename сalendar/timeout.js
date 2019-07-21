var btns = document.getElementsByClassName("num");
var i;
for (i = 0; i < btns.length; i++) {
  let btn = btns[i];
  if (parseInt(btn.textContent) < new Date().getDate()){
    btn.classList.add("expired");
  }
}