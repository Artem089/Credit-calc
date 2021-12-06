
let input = document.querySelector("#summ");
let input1 = document.querySelector("#srok");
let btn = document.querySelector("#get");
let btn1 = document.querySelector("#clear")
let table1 = document.querySelector(".table")

btn.disabled = true; //setting button state to disabled

  input.addEventListener("change", stateHandle);
  input1.addEventListener("change", stateHandle);

  function stateHandle() {
      if (document.querySelector("#summ").value == 0 && document.querySelector("#srok").value == 0 ){
          btn.disabled = true; //button remains disabled
      } else {
          btn.disabled = false; //button is enabled
      }
  }
btn1.onclick = function(){
    input.value = ''; 
    input1.value = '';
    let table2 = '<table></table>';
    table1.innerHTML = table2;
    btn.disabled = this.value.trim().length === 0;
}

btn.onclick = function() {
    let summa = +input.value;
    let period = +input1.value;
    let rate = 0.18;
    let table = document.querySelector(".table");
    let str = "<table><tr><th>Ежемесячный платеж:</th><th>Сумма кредита с процентами:</th></tr>";
    
    let ann = 0;
    let monthRate = rate / 5;
    let topPart = +(summa * monthRate).toFixed(2);
    let bottomPart = +(1 - (1 / Math.pow(monthRate + 1, period))).toFixed(2);
        ann = +(topPart / bottomPart).toFixed(2);
        str += `<tr><td>${ann}</td>`;
        let summaCreditPersent = summa * rate;
        let itog = summaCreditPersent + summa;
        str += `<td>${itog}</td></tr>`;
    str += "</table>"
    table.innerHTML = str;
}

