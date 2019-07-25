var btns = document.getElementsByClassName("btn");
var i;
for (i = 0; i < btns.length; i++) {
  let btn = btns[i];
  console.log(new Date().getDate() +"/"+parseInt(btn.textContent))
  console.log()
  console.log(parseInt(btn.textContent,10)<new Date().getDate())
  if (parseInt(btn.textContent,10)<new Date().getDate()){
    btn.classList.add("expired");
  } else if (parseInt(btn.textContent,10) == new Date().getDate()){
    btn.classList.add("active");
  }
}