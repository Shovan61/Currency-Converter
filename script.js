// get Doms

const curElOne = document.getElementById('currency-one');
const amntElOne = document.getElementById('amount-one');
const curElTwo = document.getElementById('currency-two');
const amntElTwo = document.getElementById('amount-two');

const swapBtn = document.getElementById('swap');

const rate = document.getElementById('rate');


function calculate() {
const cur1 = curElOne.value;
const cur2 = curElTwo.value;
const amnt1 = amntElOne.value;
let amnt2;

fetch(`https://v6.exchangerate-api.com/v6/39b095bbb3dcd25fb7f15f11/latest/${cur1}`)
  .then(response => response.json())
  .then(data => {
  
  const output = data.conversion_rates[cur2]
  
   
  amnt2 = (amnt1 * output).toFixed(2);
  
  amntElTwo.value = amnt2;

  });


  
};






// Event Listners
curElOne.addEventListener('change', calculate);


curElTwo.addEventListener('change', calculate);

amntElOne.addEventListener('input', calculate);
amntElTwo.addEventListener('input', calculate);



swapBtn.addEventListener('click', function(){

const temp = curElOne.value;
curElOne.value = curElTwo.value;
curElTwo.value = temp;

});