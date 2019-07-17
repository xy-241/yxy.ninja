if(document.readyState == "loading"){
  document.addEventListener("DOMContentLoaded", ready);
} else{
  ready();
}


function ready(){
  var addModule = document.getElementById("addModule");
  addModule.addEventListener("click", addAnotherModule);
}

function addAnotherModule(event){
  var button = event.target;
  var moduleField =  button.parentElement.getElementsByClassName("modules")[0];

  var oneModule = document.createElement("div");
  oneModule.classList.add("oneModule");

  var oneModuleContent = `
  <label>Module Name:</label>
  <div class="userInput">
    <input type="text" class="moduleName" value="" placeholder="Module Name">
  </div>

  <label>Grade:</label>
  <div class="userInput">
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

  <label>Credits:</label>
  <div class="userInput" id="creditLast">
    <input type="number" class="moduleCredit" value="">
  </div>
  `;
  oneModule.innerHTML = oneModuleContent;

  moduleField.append(oneModule);

}

function display(){
  var moduleName = document.getElementsByClassName("moduleName")[0].value;
  var moduleGrade = document.getElementsByClassName("moduleGrade")[0].value;
  var moduleCredit = document.getElementsByClassName("moduleCredit")[0].value;

  alert(moduleName);
  alert(moduleGrade);
  alert(moduleCredit);
}
