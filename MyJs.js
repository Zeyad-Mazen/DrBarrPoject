// circle variables
const circle = document.querySelector('circle');
const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;

// form1 variables
const form1Inputs = [
  { input: document.getElementById('inputfirst'), valid: false },
  { input: document.getElementById('inputlast'), valid: false },
  { input: document.getElementById('inputage'), valid: false },
  { input: document.getElementById('inputproffession'), valid: false },
  { input: document.getElementById('gender'), valid: false },
  { input: document.getElementById('marital status'), valid: false },
];

// form2 variables
const form2Inputs = [
  { input: document.getElementById('inputgoal'), valid: false },
  { input: document.getElementById('inputweight'), valid: false },
  { input: document.getElementById('inputheight'), valid: false },
  { input: document.getElementById('inputchest'), valid: false },
  { input: document.getElementById('inputwaist'), valid: false },
  { input: document.getElementById('inputarm'), valid: false },
  { input: document.getElementById('inputalergie'), valid: false },
  { input: document.getElementById('inputsickness'), valid: false },
  { input: document.getElementById('inputoperation'), valid: false },
  { input: document.getElementById('inputdrugs'), valid: false },
  { input: document.getElementById('inputfood1'), valid: false },
  { input: document.getElementById('inputfood2'), valid: false },
  { input: document.getElementById('meals'), valid: false },
  { input: document.getElementById('diet'), valid: false },
];

// circle function
circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

function setProgress(inputs) {
  const count = (((inputs.filter(i => !i.valid).length) / (inputs.length)) * 100);
  const offset = circumference - count / 100 * circumference;
  circle.style.strokeDashoffset = offset;
}

setProgress(form1Inputs);

// form function
function addInputValidation(inputs, nextButton) {
  inputs.forEach(inputObj => {
    inputObj.input.addEventListener('change', () => {
      inputObj.valid = !!inputObj.input.value.trim();
      inputObj.input.classList.toggle('valid', inputObj.valid);
      inputObj.input.classList.toggle('invalid', !inputObj.valid);
      //nextButton.disabled = !inputs.every(i => i.valid);
      if (inputs.every(i => i.valid)) {
        nextButton.setAttribute('data-bs-slide', 'next');
      } else {
        nextButton.removeAttribute('data-bs-slide');
      }
      setProgress(inputs);
    });
  });
}

function radioInputValidation1(inputs, nextButton) {
  const rad1 = document.getElementsByName("gender");
  const rad2 = document.getElementsByName("marital status");

  for (const radio of rad1) {
    radio.addEventListener("change", function () {
      for (const r of rad1) {
        if (r.checked) {
          inputs[4].valid = true;
          document.getElementById('labelmale').removeAttribute("style");
          document.getElementById('labelfemale').removeAttribute("style");
          if (inputs.every(i => i.valid)) {
            nextButton.setAttribute('data-bs-slide', 'next');
          } else {
            nextButton.removeAttribute('data-bs-slide');
          }
          setProgress(inputs);
          break;
        }
      }
    });
  }
  for (const radio of rad2) {
    radio.addEventListener("change", function () {
      for (const r of rad2) {
        if (r.checked) {
          inputs[5].valid = true;
          document.getElementById('labelsingle').removeAttribute("style");
          document.getElementById('labelmarried').removeAttribute("style");
          if (inputs.every(i => i.valid)) {
            nextButton.setAttribute('data-bs-slide', 'next');
          } else {
            nextButton.removeAttribute('data-bs-slide');
          }
          setProgress(inputs);
          break;
        }
      }
    });
  }
}
function radioInputValidation2(inputs, nextButton) {
  const rad3 = document.getElementsByName("meals");
  const rad4 = document.getElementsByName("diet");

  for (const radio of rad3) {
    radio.addEventListener("change", function () {
      for (const r of rad3) {
        if (r.checked) {
          inputs[12].valid = true;
          document.getElementById('label3').removeAttribute("style");
          document.getElementById('label4').removeAttribute("style");
          document.getElementById('label5').removeAttribute("style");
          document.getElementById('label6').removeAttribute("style");
          if (inputs.every(i => i.valid)) {
            nextButton.setAttribute('data-bs-slide', 'next');
          } else {
            nextButton.removeAttribute('data-bs-slide');
          }
          setProgress(inputs);
          break;
        }
      }
    });
  }
  for (const radio of rad4) {
    radio.addEventListener("change", function () {
      for (const r of rad4) {
        if (r.checked) {
          inputs[13].valid = true;
          document.getElementById('labelyes').removeAttribute("style");
          document.getElementById('labelno').removeAttribute("style");
          if (inputs.every(i => i.valid)) {
            nextButton.setAttribute('data-bs-slide', 'next');
          } else {
            nextButton.removeAttribute('data-bs-slide');
          }
          setProgress(inputs);
          break;
        }
      }
    });
  }
}

addInputValidation(form1Inputs, document.getElementById('form1-next'));
radioInputValidation1(form1Inputs, document.getElementById('form1-next'));
addInputValidation(form2Inputs, document.getElementById('form2-next'));
radioInputValidation2(form2Inputs, document.getElementById('form2-next'));

function invalidINPUT(inputs) {
  inputs.forEach(input => {
    input.input.classList.toggle('invalid', !input.valid);
  });
}

// buttons functions
async function nextbtn1() {
  if (form1Inputs.every(i => i.valid)) {
    NextStep('step2');
    await new Promise(resolve => setTimeout(resolve, 1000));
    setProgress(form2Inputs);
  } else {
    invalidINPUT(form1Inputs);
    if (form1Inputs[4].valid == false) {
      document.getElementById('labelmale').style.outline = "3px solid red";
      document.getElementById('labelmale').style.color = "red";
      document.getElementById('labelfemale').style.outline = "3px solid red";
      document.getElementById('labelfemale').style.color = "red";
    }
    if (form1Inputs[5].valid == false) {
      document.getElementById('labelsingle').style.outline = "3px solid red";
      document.getElementById('labelsingle').style.color = "red";
      document.getElementById('labelmarried').style.outline = "3px solid red";
      document.getElementById('labelmarried').style.color = "red";
    }
  }
}
async function nextbtn2() {
  if (form2Inputs.every(i => i.valid)) {
    document.getElementById("fooddish").style.display = "none";
    document.getElementById("forms").classList.toggle('col-7', false);
    document.getElementById("forms").classList.toggle('col', true);
    NextStep('step3');
    await new Promise(resolve => setTimeout(resolve, 1000));
    setProgress(form2Inputs);
  } else {
    invalidINPUT(form2Inputs);
    if (form2Inputs[12].valid == false) {
      document.getElementById('label3').style.outline = "3px solid red";
      document.getElementById('label3').style.color = "red";
      document.getElementById('label4').style.outline = "3px solid red";
      document.getElementById('label4').style.color = "red";
      document.getElementById('label5').style.outline = "3px solid red";
      document.getElementById('label5').style.color = "red";
      document.getElementById('label6').style.outline = "3px solid red";
      document.getElementById('label6').style.color = "red";
    }
    if (form2Inputs[13].valid == false) {
      document.getElementById('labelyes').style.outline = "3px solid red";
      document.getElementById('labelyes').style.color = "red";
      document.getElementById('labelno').style.outline = "3px solid red";
      document.getElementById('labelno').style.color = "red";
    }
  }
  document.getElementById("fooddish").style.display = "none";
  document.getElementById("forms").classList.toggle('col-7', false);
  document.getElementById("forms").classList.toggle('col', true);
}
function backbtn() {
  LastStep('step2');
  setProgress(form1Inputs);
}
function backbtn2() {
  document.getElementById("fooddish").removeAttribute("style");
  document.getElementById("forms").classList.toggle('col-7', true);
  document.getElementById("forms").classList.toggle('col-8', false);
  LastStep('step3');
  setProgress(form2Inputs);
}

//price plans

function pricebtn(Obj){
  NextStep('step4');
  handling_forms();
  document.getElementById('current-date').value = formatDate();
  radio_handler(Obj);
  let price_amount = document.getElementById("price-amount");
  
  let plan1_detail = document.getElementById("plan1-detail");
  let plan2_detail = document.getElementById("plan2-detail");
  let plan3_detail = document.getElementById("plan3-detail");

  let plan1_list = document.getElementById("plan1-list");
  let plan2_list = document.getElementById("plan2-list");
  let plan3_list = document.getElementById("plan3-list");

  if (Obj.value == "basic") {
    price_amount.innerHTML = "500.00 جنيه";
    
    plan1_detail.style.display = "flex";
    plan2_detail.style.display = "none";
    plan3_detail.style.display = "none";

    plan1_list.removeAttribute("style");
    plan2_list.style.display = "none";
    plan3_list.style.display = "none";
  
  } else if (Obj.value == "advanced") {
    price_amount.innerHTML = "1,350.00 جنيه";
    
    plan1_detail.style.display = "none";
    plan2_detail.style.display = "flex";
    plan3_detail.style.display = "none";

    plan1_list.style.display = "none";
    plan2_list.removeAttribute("style");
    plan3_list.style.display = "none";
  
  } else {
    price_amount.innerHTML = "2,500.00 جنيه";
    
    plan1_detail.style.display = "none";
    plan2_detail.style.display = "none";
    plan3_detail.style.display = "flex";

    plan1_list.style.display = "none";
    plan2_list.style.display = "none";
    plan3_list.removeAttribute("style");
  }
}

//submit screen

let pp1 = document.getElementById("popup");
let pp2 = document.getElementById("popup2");


function openPopup() {
  blur();
  pp1.classList.add("open-Popup");
  pp1.classList.add("PopUpAnim");
}
function closePopup() {
  unblur();
  pp1.classList.remove("open-Popup");
  pp1.classList.remove("PopUpAnim");
}
function openPopup2() {
  blur();
  pp2.classList.add("open-Popup");
  pp2.classList.add("PopUpAnim");
}
function closePopup2() {
  unblur();
  pp2.classList.remove("open-Popup");
  pp2.classList.remove("PopUpAnim");
}
function blur(){
  document.getElementById("blur-bg").style.visibility = "visible";
}
function unblur(){
  document.getElementById("blur-bg").removeAttribute("style");
}
function openpp() {
  if (document.getElementById("selectPayment").options[1].selected == true) {
    openPopup2();
  }
  else {
    openPopup();
  }
}

// form handler

function handling_forms(){
  // form1 handler
  document.getElementById('f-name').value = document.getElementById('inputfirst').value;
  document.getElementById('l-name').value = document.getElementById('inputlast').value;
  document.getElementById('age').value = document.getElementById('inputage').value;
  document.getElementById('job').value = document.getElementById('inputproffession').value;
  radio_handler(document.querySelector('input[name = gender]:checked'));
  radio_handler(document.querySelector("input[name = 'marital status']:checked"));

  // form2 handler
  document.getElementById('goal').value = document.getElementById('inputgoal').value;
  document.getElementById('weight').value = document.getElementById('inputweight').value;
  document.getElementById('height').value = document.getElementById('inputheight').value;
  document.getElementById('chest').value = document.getElementById('inputchest').value;
  document.getElementById('waist').value = document.getElementById('inputwaist').value;
  document.getElementById('arm').value = document.getElementById('inputarm').value;
  document.getElementById('food-alergie').value = document.getElementById('inputalergie').value;
  document.getElementById('sickness').value = document.getElementById('inputsickness').value;
  document.getElementById('operations').value = document.getElementById('inputoperation').value;
  document.getElementById('supplements').value = document.getElementById('inputdrugs').value;
  document.getElementById('liked-food').value = document.getElementById('inputfood1').value;
  document.getElementById('disliked-food').value = document.getElementById('inputfood2').value;
  radio_handler(document.querySelector('input[name = meals]:checked'));
  radio_handler(document.querySelector("input[name = diet]:checked"));
}

function radio_handler(Obj) {
  document.getElementById(Obj.value).checked = true;
}

// current date setter

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function formatDate(date = new Date()) {
  return [
    date.getFullYear(),
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
  ].join('-');
}

// stepper Animation

function NextStep(ID) {
  let Obj = document.getElementById(ID);
  Obj.style.backgroundPosition = "left";
}
function LastStep(ID) {
  let Obj = document.getElementById(ID);
  Obj.style.backgroundPosition = "Right";
}