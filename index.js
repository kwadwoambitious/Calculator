//display the calculation when it first loads
let calculation = JSON.parse(localStorage.getItem('calculation')) || 0;

     displayAnswer();
    
function updateCalculation(number){
    calculation += number;

    displayAnswer();

    localStorage.setItem('calculation', calculation);
    
};

function displayAnswer(){
  const displayCalculation = document.querySelector('.display-calculation');

  displayCalculation.innerHTML = calculation;
};

function clearInputField(input){
  if(calculation === 0){
      calculation = '';
      updateCalculation(input);
  }
  else{
      updateCalculation(input);
  }
};