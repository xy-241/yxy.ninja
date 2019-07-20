if(document.readyState == "loading"){
  document.addEventListener("DOMContentLoaded", ready);
} else{
  ready();
}


function ready(){
  //Add Module Button
  var moduleButtons = document.getElementsByClassName("moduleButton");
  for(var i = 0; i<moduleButtons.length; i++){
    var moduleButton = moduleButtons[i];
    moduleButton.addEventListener("click", addAnotherModule);
  }

  //Calculate Button
  var calculateButton = document.getElementsByClassName("calculateButton")[0];
  calculateButton.addEventListener("click", calculateResult);
  //Add form button
  var addFormButton = document.getElementsByClassName("addFormButton")[0];
  addFormButton.addEventListener("click", addForm);
}

function addForm(event){
  var button = event.target;
  var forms = button.parentElement.parentElement;

  var form = document.createElement("form");
  form.classList.add("grade");

  var lastFormSemester = document.getElementsByClassName("schoolTerm");
  lastFormSemester = lastFormSemester[(lastFormSemester.length-1)].getElementsByTagName("p")[0].innerHTML;
  lastFormSemester = parseInt(lastFormSemester[lastFormSemester.length - 1]) + 1;

  var formContent = `
  <div class="schoolTerm">
    <p>Semester ${lastFormSemester}</p>
  </div>

  <div class="modules">
    <div class="oneModule">

      <div class="userInput">
        <label>Module Name:</label>
        <input type="text" class="moduleName" value="" placeholder="Module Name 1">
      </div>


      <div class="userInput">
        <label>Grade:</label>
        <select class="moduleGrade">
          <option selected="selected" value="NA">-</option>
          <option value="A">A</option>
          <option value="B+">B+</option>
          <option value="B">B</option>
          <option value="C+">C+</option>
          <option value="C">C</option>
          <option value="D+">D+</option>
          <option value="D">D</option>
          <option value="F">F</option>
        </select>
      </div>


      <div class="userInput">
        <label>Credits:</label>
        <input type="number" class="moduleCredit" value="">
      </div>
    </div>
  </div>

  <div class="moduleButtonDiv">
    <input type="button" class="moduleButton" value="Add Another Module">
  </div>
  `
  form.innerHTML = formContent;
  forms.insertBefore(form, forms.getElementsByClassName("addForm")[0]);

  //Make new addModule button working
  var moduleButtons = document.getElementsByClassName("moduleButton");
  for(var i = 0; i<moduleButtons.length; i++){
    var moduleButton = moduleButtons[i];
    moduleButton.addEventListener("click", addAnotherModule);
  }

} //End Function [Add Form]
function calculateResult(event){
  var totalGrade = 0;
  var totalCredit = 0;
  var finalResult = 0;

  var button = event.target;
  var forms = button.parentElement.parentElement.getElementsByClassName("grade");
  //Loop through the forms
  for(var i =0; i< forms.length; i++){
    var form = forms[i];
    var modules = form.getElementsByClassName("modules")[0].getElementsByClassName("oneModule");
    //Loop through the modules
    for(var j=0; j<modules.length; j++){
      var oneModule = modules[j];

      var moduleGrade = oneModule.getElementsByClassName("moduleGrade")[0].value;
      var moduleCredit = oneModule.getElementsByClassName("moduleCredit")[0].value;


      if(moduleCredit == "" || moduleGrade == "NA"){

      } else{
        switch (moduleGrade) {
          case "A":
            totalGrade += (4 * moduleCredit);
            break;
          case "B+":
            totalGrade += (3.5 * moduleCredit);
            break;
          case "B":
            totalGrade += (3 * moduleCredit);
            break;
          case "C+":
            totalGrade += (2.5 * moduleCredit);
            break;
          case "C":
            totalGrade += (2 * moduleCredit);
            break;
          case "D+":
            totalGrade += (1.5 * moduleCredit);
            break;
          case "D":
            totalGrade += (1 * moduleCredit);
            break;
          case "F":
            totalGrade += 0;
            break;
          default:
            alert("Grade Translation went wrong, please report to site adminstrator!!!");  //Hidden
        } //End Switch
        totalCredit += parseFloat(moduleCredit);
        //alert(totalGrade); //Testing is the switch working
      } //End ELse

    } //End for modules loop
  } //End for forms loop

  finalResult = totalGrade / totalCredit;
  finalResult = Math.round(finalResult*100)/100;
  alert(finalResult);
  //Calculate FUnction //
} //End function [Calculate]
function addAnotherModule(event){
  var button = event.target;
  var moduleField =  button.parentElement.parentElement.getElementsByClassName("modules")[0];

  var oneModule = document.createElement("div");
  oneModule.classList.add("oneModule");

  var moduleNames = moduleField.getElementsByClassName("moduleName");
  var place = moduleNames.length + 1;

  var oneModuleContent = `
  <div class="userInput">
  <label>Module Name:</label>
    <input type="text" class="moduleName" value="" placeholder="Module Name ${place}">
  </div>


  <div class="userInput">
  <label>Grade:</label>
    <select class="moduleGrade">
      <option selected="selected" value="NA">-</option>
      <option value="A">A</option>
      <option value="B+">B+</option>
      <option value="B">B</option>
      <option value="C+">C+</option>
      <option value="C">C</option>
      <option value="D+">D+</option>
      <option value="D">D</option>
      <option value="F">F</option>
    </select>
  </div>

  <div class="userInput" id="creditLast">
  <label>Credits:</label>
    <input type="number" class="moduleCredit" value="">
  </div>
  `;  //HIdden
  oneModule.innerHTML = oneModuleContent;

  moduleField.appendChild(oneModule);
} //End FUnction [Add Module]
