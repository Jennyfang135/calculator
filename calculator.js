var displayValue=""; // displayValue variable holds all the input from user
var shownAns = false;// shownAns boolean if the = button has been pressed before
//show the input value on display area
function disValue(val){
	if (!shownAns){
		displayValue+= val.toString();
    	document.getElementById("dis").innerHTML = displayValue;
	}
 	else if(shownAns && isNaN(val)){
 		shownAns = false;
 		displayValue+= val.toString();
    	document.getElementById("dis").innerHTML = displayValue;
    }	
    else {
    	shownAns = false;
    	displayValue=val;
    	document.getElementById("dis").innerHTML = displayValue;
    }
}

// do percetage function
function disPercentageValue(){
  var percentageNumber=0; 
  var i = findLastOprIndex(displayValue);
  if (i=== -2){
    percentageNumber = eval(displayValue)/100;
    displayValue = percentageNumber;     
  }
  else{
    percentageNumber =eval(displayValue.substring(i+1))/100;
    displayValue = displayValue.slice(0,i)+"+"+percentageNumber;    
  }
  document.getElementById('dis').innerHTML = percentageNumber;
}	

//show oposite value when +/- button is clicked
function showOposite(){
  var i = findLastOprIndex(displayValue);
  if (i=== -2){
    displayValue = -displayValue;
    document.getElementById('dis').innerHTML = eval(displayValue);
  }
  else{
    var number = -eval(displayValue.substring(i+1))
    displayValue = displayValue.slice(0,i)+"+"+number;
    document.getElementById('dis').innerHTML = number;
  }
}

function findLastOprIndex(disVal){
  
  var len = disVal.length-1;
  for(var i = len; i>=0; i--){ 
    if (checkOperator(i)){
      return i;
    }
  }
  return -2;
}
//do calculation and show answer
function showAnswer(){
  var lastIndex = displayValue.length-1;  
  var hasOperator = false;
  for(let i=0; i<=lastIndex; i++){
     if(checkOperator(i)){
      hasOperator= true;
      break;
     }
  }
  if(hasOperator){
    if(checkOperator(lastIndex)){
      displayValue += displayValue.substring(0,lastIndex);         
    }    
    document.getElementById('dis').innerHTML = eval(displayValue);
    displayValue = eval(displayValue);
    shownAns = true;
  }
  else{
    document.getElementById('dis').innerHTML = displayValue;
    shownAns = false;
  }  
}	

//reset display area when AC button is clicked
function reset(){
 	displayValue="";
 	document.getElementById("dis").innerHTML="0";
}


//check if character at position indes is an operator or not
function checkOperator(index) {
  if (displayValue.charAt(index)=='+' || displayValue.charAt(index) =='-' ||
    displayValue.charAt(index)=='*' || displayValue.charAt(index)=='/'){
    return true;
  }
  else{
    return false;
  }
}
//set background color when Normal button is clicked 
function normalVersion(){
  changeContainerBgColor("black");
  changeBtnBgColor('button-item','grey');
  changeBtn0BgColor('grey');
  changeBtnBgColor('btnOperator', '#FF4500');
  changeH1fontColor('black');
}
//set background color when Christmasy button is clicked
function christmasVersion(){
  changeContainerBgColor("url('christmas2.jpg')");
  changeBtnBgColor('button-item','#006400');
  changeBtn0BgColor('#006400');
  changeBtnBgColor('btnOperator', 'red');
  changeH1fontColor('#006400');
}

function changeH1fontColor(colorOfChoice){
  var elements = document.getElementsByClassName('h1'); 
  elements[0].style.color= colorOfChoice;
}
//change background color for Container
function changeContainerBgColor(colorOfChoice){
  var elements = document.getElementsByClassName('button-container'); 
  elements[0].style.background= colorOfChoice;
}

//change background color for buttons of given classname
function changeBtnBgColor(classname, colorOfChoice){
  var elements=document.getElementsByClassName(classname);
  for (var i=0;i<elements.length;i++){
    elements[i].style.background= colorOfChoice;
  } 
}

//change background color for button 0
function changeBtn0BgColor(colorOfChoice){
  document.getElementById('btn0Style').style.background=colorOfChoice;
}
