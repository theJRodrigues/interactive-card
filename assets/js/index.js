const input_name = document.getElementById("card-name");
const input_number = document.getElementById("card-number");
const input_month = document.getElementById("month");
const input_year = document.getElementById("year");
const input_cvv = document.getElementById("cvv");

var inputs = document.querySelectorAll("input");
const display_name = document.querySelector(".card-name .name");
const display_number = document.querySelectorAll(".card-number span");
const diplay_month = document.getElementById("month_display");
const diplay_year = document.getElementById("year_display");
const display_cvv = document.querySelector(".card-cvv");
const added_card = document.querySelector(".added-card");
const form_off = document.querySelector(".form-card");
const form = document.querySelector(".form");

input_name.value = "";
input_number.value="";
input_month.value = "";
input_year.value = "";
input_cvv.value="";

//validation
form.addEventListener("submit", event =>{
  event.preventDefault();
  if(input_name.value === ''){
    input_name.classList.add("required-input");
    alert('Please enter name.');
    return;
  }else{
    if(input_name.classList.contains("required-input")){
      input_name.classList.remove("required-input");
    }
  }
  
  if(input_number.value.length < 16){
    input_number.classList.add("required-input");
    alert('Please enter the numbers.');
    return;
  }else{
    if(input_number.classList.contains("required-input")){
      input_number.classList.remove("required-input");
    }
  }

  if(input_month.value === ''){
    input_month.classList.add("required-input");
    alert('Please enter Month');
    return;
  }else{
    if(input_month.classList.contains("required-input")){
      input_month.classList.remove("required-input");
    }
  }

  if(input_year.value === ''){
    input_year.classList.add("required-input");
    alert('Please enter Year');
    return;
  }else if(input_year.value < "24"){
    input_year.classList.add("required-input");
    alert('Year > 24');
    input_year.value = '';
    return;
  }else{
    if(input_year.classList.contains("required-input")){
      input_year.classList.remove("required-input");
    }
  }

  if(input_cvv.value.length < 3){
    input_cvv.classList.add("required-input");
    alert('Please enter CVV');
    return;
  }else{
    if(input_cvv.classList.contains("required-input")){
      input_cvv.classList.remove("required-input");
    }
  }
  added_card.classList.add("added-card-active");
  form_off.classList.add("form-off");
})



input_name.addEventListener("input", (event) =>{
  if(event.target.value === ''){
    display_name.innerHTML = 'JANE APLESSED';
  }
  display_name.innerHTML = event.target.value ?? 'JANE APLESSED';
})

input_number.addEventListener("input", (event) => {
  let array_number = event.target.value.match(/[0-9]{1,4}/g);
  if(array_number === null){
    display_number[0].innerHTML = '0000';
    return;
  }
  for(i = 0; i <= array_number.length ; i++){
    display_number[i].innerHTML = array_number[i] ?? "0000";
  }
});

input_month.addEventListener("input", event =>{
  if(event.target.value>12){
    input_month.value = "";
  }
  if(event.target.value.length === 0){
    diplay_month.innerHTML = '00';
    return;
  }
  diplay_month.innerHTML = event.target.value;
});

input_year.addEventListener("input", event =>{
  if(event.target.value.length === 0){
    diplay_year.innerHTML = '00';
    return;
  }
  diplay_year.innerHTML = event.target.value;
});

input_cvv.addEventListener("input", event =>{
  if(event.target.value.length === 0){
    display_cvv.innerHTML = '000';
    return;
  }
  display_cvv.innerHTML = event.target.value;
});

function button_added(){
  window.location.reload();
}

