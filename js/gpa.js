if(document.readyState == "loading"){
  document.addEventListener("DOMContentLoaded", ready);
} else{
  ready();
}


function ready(){

  var moduleButton = document.getElementsByClassName("moduleButton")[0];
  moduleButton.addEventListener("click", addAnotherModule);
}

function addAnotherModule(event){
  var button = event.target;
  var moduleField =  button.parentElement.parentElement.getElementsByClassName("modules")[0];

  var oneModule = document.createElement("div");
  oneModule.classList.add("oneModule");

  var moduleNames = document.getElementsByClassName("moduleName");
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
  `;
  oneModule.innerHTML = oneModuleContent;

  moduleField.appendChild(oneModule);

}

function display(){
  var moduleName = document.getElementsByClassName("moduleName")[0].value;
  var moduleGrade = document.getElementsByClassName("moduleGrade")[0].value;
  var moduleCredit = document.getElementsByClassName("moduleCredit")[0].value;

  alert(moduleName);
  alert(moduleGrade);
  alert(moduleCredit);
}
