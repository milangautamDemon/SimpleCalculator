const numInput = document.querySelector("#numInput");
const btns = document.querySelectorAll("button");

let calculate = 0;
let btnArray = Array.from(btns)
numInput.value = 0;
btnArray.forEach(btn => {
    btn.addEventListener("click", (e) =>{
        if (e.target.textContent == "=") {
            if(numInput.value == 0) {
                numInput.value = 0;
                return
            }
            const val = numInput.value.split("")
            const newNumVal = val.map(str => parseInt(str))
            if(isNaN(newNumVal[newNumVal.length - 1])) {
                alert("please check your operation !!!");
                return;
            }
            calculate = eval(calculate);
            numInput.value = calculate; 
            calculate = 0;
            return;
        }
        else if (e.target.textContent == "AC") {
            numInput.value = 0;
            calculate = 0;
            return;
        }
        else if (e.target.textContent == "C") {
            calculate = calculate.substring(0, calculate.length - 1);
            numInput.value = calculate;
        }
        else {
            calculate += e.target.textContent;
            numInput.value = calculate;
            return
        }
    })
    btn.addEventListener("dblclick", (e)=>{
        if (e.target.textContent == "=") {
            alert("please do some operation !!!");
        }
    })
})
