const displayOutput = document.querySelector("#result");
const btn = document.querySelectorAll("button");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const toggleBtn = document.querySelector("#tggleBTn");

let str = "";
let arr = Array.from(btn);
arr.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML === "DEL") {
      if (str.length > 0) {
        str = str.substring(0, str.length - 1);
        displayOutput.value = str;
      }
    } else if (e.target.innerHTML === "RESET") {
      str = "";
      displayOutput.value = str;
    } else if (e.target.innerHTML === "=") {
      try {
        str = eval(str);
        displayOutput.value = str;
      } catch {
        displayOutput.value = "Error";
      }
    } else {
      str += e.target.innerHTML;
      displayOutput.value = str;
    }
  });
});

one.addEventListener("click", ()=>{
  let body = document.querySelector("main");
  body.classList.remove("active2")
  body.classList.remove("active3")
  toggleBtn.style.marginLeft = "0.1rem"
})

two.addEventListener("click", () => {
  let body = document.querySelector("main");
  body.classList.add("active2");
  body.classList.remove("active3");
  toggleBtn.style.marginLeft = "1.1rem";
});

three.addEventListener("click", ()=> {
  let body = document.querySelector("main");
  body.classList.add("active3")
  body.classList.remove("active2");
  toggleBtn.style.marginLeft=("2.5rem")
})