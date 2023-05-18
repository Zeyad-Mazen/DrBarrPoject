// circle variables
const circle = document.querySelector('circle');
const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;

// form1 variables
const form1Inputs = [
  { input: document.getElementById('inputfirst'), valid: false, name: 'inputfirst' },
  { input: document.getElementById('inputlast'), valid: false, name: 'inputlast' },
  { input: document.getElementById('inputage'), valid: false, name: 'inputage' },
  { input: document.getElementById('inputproffession'), valid: false, name: 'inputproffession' },
  { input: document.getElementById('gender'), valid: false, name: 'gender' },
  { input: document.getElementById('marital status'), valid: false, name: 'marital status' },
  { input: document.getElementById('inputmail'), valid: false, name: 'inputmail' },
  { input: document.getElementById('inputphone'), valid: false, name: 'inputphone' },
];

// form2 variables
const form2Inputs = [
  { input: document.getElementById('inputgoal'), valid: false, name: 'inputgoal' },
  { input: document.getElementById('inputweight'), valid: false, name: 'inputweight' },
  { input: document.getElementById('inputheight'), valid: false, name: 'inputheight' },
  { input: document.getElementById('inputchest'), valid: false, name: 'inputchest' },
  { input: document.getElementById('inputwaist'), valid: false, name: 'inputwaist' },
  { input: document.getElementById('inputarm'), valid: false, name: 'inputarm' },
  { input: document.getElementById('inputalergie'), valid: false, name: 'inputalergie' },
  { input: document.getElementById('inputsickness'), valid: false, name: 'inputsickness' },
  { input: document.getElementById('inputoperation'), valid: false, name: 'inputoperation' },
  { input: document.getElementById('inputdrugs'), valid: false, name: 'inputdrugs' },
  { input: document.getElementById('inputfood1'), valid: false, name: 'inputfood1' },
  { input: document.getElementById('inputfood2'), valid: false, name: 'inputfood2' },
  { input: document.getElementById('meals'), valid: false, name: 'meals' },
  { input: document.getElementById('diet'), valid: false, name: 'diet' },
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
      const inputValue = inputObj.input.value.trim();
      if (inputObj.input.type == "email") {
        inputObj.valid = validateEmail(inputValue);
      } else {
        inputObj.valid = !!inputValue;
      }
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

function radioInputValidation(inputs, nextButtonId, radioName, labels) {
  const radName = document.getElementsByName(radioName);
  const radObj = inputs.find(input => input.name === radioName);
  const nextButton = document.getElementById(nextButtonId);

  for (const radio of radName) {
    radio.addEventListener("change", function () {
      for (const r of radName) {
        if (r.checked) {
          radObj.valid = true;

          for (let index = 0; index < labels.length; index++) {
            document.getElementById(labels[index]).removeAttribute("style");
          }
          
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

function validateEmail(email) {
  // Regular expression pattern for email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

addInputValidation(form1Inputs, document.getElementById('form1-next'));
radioInputValidation(form1Inputs, 'form1-next', 'gender', ['labelmale','labelfemale']);
radioInputValidation(form1Inputs, 'form1-next', 'marital status', ['labelsingle','labelmarried']);
addInputValidation(form2Inputs, document.getElementById('form2-next'));
radioInputValidation(form2Inputs, 'form2-next', 'meals', ['label3','label4','label5','label6']);
radioInputValidation(form2Inputs, 'form2-next', 'diet', ['labelyes','labelno']);

function invalidINPUT(inputs) {
  inputs.forEach(input => {
    input.input.classList.toggle('invalid', !input.valid);
  });
}
function invalidRadio(inputs, radioObjName ,labelsID) {
  const radioObj = inputs.find(input => input.name === radioObjName);

  if (radioObj.valid == false) {
    for (let index = 0; index < labelsID.length; index++) {
      document.getElementById(labelsID[index]).style.outline = "3px solid red";
      document.getElementById(labelsID[index]).style.color = "red";
    }
  }
}

// buttons functions
async function nextbtn1() {
  if (form1Inputs.every(i => i.valid)) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    await new Promise(resolve => setTimeout(resolve, 500));
    NextStep('step2');
    setProgress(form2Inputs);
  } else {
    invalidINPUT(form1Inputs);
    invalidRadio(form1Inputs, 'gender', ['labelmale', 'labelfemale']);
    invalidRadio(form1Inputs, 'marital status', ['labelsingle', 'labelmarried']);
  }
}
async function nextbtn2() {
  if (form2Inputs.every(i => i.valid)) {
    document.getElementById("fooddish").style.display = "none";
    document.getElementById("forms").classList.toggle('col-7', false);
    document.getElementById("forms").classList.toggle('col', true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    await new Promise(resolve => setTimeout(resolve, 800));
    NextStep('step3');
    setProgress(form2Inputs);
  } else {
    invalidINPUT(form2Inputs);
    invalidRadio(form2Inputs, 'meals', ['label3', 'label4', 'label5', 'label6']);
    invalidRadio(form2Inputs, 'diet', ['labelyes', 'labelno']);
  }
}
async function backbtn() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  await new Promise(resolve => setTimeout(resolve, 600));
  LastStep('step2');
  setProgress(form1Inputs);
}
async function backbtn2() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  await new Promise(resolve => setTimeout(resolve, 500));
  document.getElementById("fooddish").removeAttribute("style");
  document.getElementById("forms").classList.toggle('col-7', true);
  document.getElementById("forms").classList.toggle('col-8', false);
  LastStep('step3');
  setProgress(form2Inputs);
}

//price plans

let choosenPlan;

async function pricebtn(Obj){
  window.scrollTo({ top: 0, behavior: 'smooth' });
  await new Promise(resolve => setTimeout(resolve, 700));
  NextStep('step4');
  choosenPlan = Obj;
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
function openPopup2() {
  blur();
  pp2.classList.add("open-Popup");
  pp2.classList.add("PopUpAnim");
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
  
  handling_forms(choosenPlan);
}

// form handler

function handling_forms(Obj){
  createCollector();
  // form1 handler
  document.getElementById('f-name').value = document.getElementById('inputfirst').value;
  document.getElementById('l-name').value = document.getElementById('inputlast').value;
  document.getElementById('mail').value = document.getElementById('inputmail').value;
  document.getElementById('phone').value = document.getElementById('inputphone').value;
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
  
  document.getElementById('current-date').value = formatDate();

  radio_handler(Obj);
  
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


function createCollector() {
  // Create the form element
  const formElement = document.getElementById("form-handler");
  
  // Add the form fields
  const fieldElements = [
    { type: 'text', id: 'f-name', name: 'fName' },
    { type: 'text', id: 'l-name', name: 'lName' },
    { type: 'radio', name: 'gender-type', id: 'male', value: 'male' },
    { type: 'radio', name: 'gender-type', id: 'female', value: 'female' },
    { type: 'email', id: 'mail', name: 'mail' },
    { type: 'text', id: 'phone', name: 'phone' },
    { type: 'number', id: 'age', name: 'age' },
    { type: 'text', id: 'job', name: 'job' },
    { type: 'radio', name: 'relationship', id: 'single', value: 'single' },
    { type: 'radio', name: 'relationship', id: 'married', value: 'married' },
    { type: 'text', id: 'goal', name: 'goal' },
    { type: 'number', id: 'weight', name: 'weight' },
    { type: 'number', id: 'height', name: 'height' },
    { type: 'number', id: 'chest', name: 'chest' },
    { type: 'number', id: 'waist', name: 'waist' },
    { type: 'number', id: 'arm', name: 'arm' },
    { type: 'text', id: 'food-alergie', name: 'foodAlergie' },
    { type: 'text', id: 'sickness', name: 'sickness' },
    { type: 'text', id: 'operations', name: 'operations' },
    { type: 'text', id: 'supplements', name: 'supplements' },
    { type: 'text', id: 'liked-food', name: 'likedFood' },
    { type: 'text', id: 'disliked-food', name: 'dislikedFood' },
    { type: 'radio', name: 'meals', id: 'three', value: 'three' },
    { type: 'radio', name: 'meals', id: 'four', value: 'four' },
    { type: 'radio', name: 'meals', id: 'five', value: 'five' },
    { type: 'radio', name: 'meals', id: 'six', value: 'six' },
    { type: 'radio', name: 'first-time', id: 'yes', value: 'yes' },
    { type: 'radio', name: 'first-time', id: 'no', value: 'no' },
    { type: 'radio', name: 'price-plan', id: 'basic', value: 'basic' },
    { type: 'radio', name: 'price-plan', id: 'advanced', value: 'advanced' },
    { type: 'radio', name: 'price-plan', id: 'premium', value: 'premium' },
    { type: 'date', id: 'current-date', name: 'currentDate' }
  ];
  
  fieldElements.forEach(field => {
    const fieldElement = document.createElement('input');
    fieldElement.type = field.type;
    fieldElement.id = field.id;
    fieldElement.name = field.name;
    if (fieldElement.type == 'radio') {
      fieldElement.value = field.value;
    }
    formElement.appendChild(fieldElement);
    formElement.appendChild(document.createElement("br"));
  });
}