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
  var len = displayValue.length-1;
  for(var i = len; i>=0; i--){ 
    if (checkOperator(i)){
      percentageNumber =eval(displayValue.substring(i+1))/100;
      console.log("percentageNumber "+percentageNumber);
      displayValue = displayValue.slice(0,i)+"+"+percentageNumber;
      console.log("displayValue "+ displayValue);
      document.getElementById('dis').innerHTML = percentageNumber;
      return;
    }
  }  
  percentageNumber = eval(displayValue)/100;
  displayValue = percentageNumber;     
 	document.getElementById('dis').innerHTML = percentageNumber;
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
    console.log("displayValue "+displayValue);
    shownAns = true;
    return;
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

//show oposite value when +/- button is clicked
function showOposite(){
	displayValue = -displayValue;
	document.getElementById('dis').innerHTML = eval(displayValue);
}

function checkOperator(index) {
  if (displayValue.charAt(index)=='+' || displayValue.charAt(index) =='-' ||
    displayValue.charAt(index)=='*' || displayValue.charAt(index)=='/'){
    return true;
  }
  else{
    return false;
  }
}
 
function normalVersion(){
  var elements = document.getElementsByClassName('button-container'); 
    elements[0].style.background= "black";
  elements = document.getElementsByClassName('button-item');
  for (var i=0;i<elements.length;i++){
    elements[i].style.background= "grey";
  }
  document.getElementById('btn0Style').style.background="grey";
  elements=document.getElementsByClassName('btnOperator')
  for (var i=0;i<elements.length;i++){
    elements[i].style.background= "#FF4500";
  }
}

function christmasVersion(){
  var elements = document.getElementsByClassName('button-container');
  
    elements[0].style.background = "url('christmas2.jpg')";
  
  elements = document.getElementsByClassName('button-item');
  for (var i=0;i<elements.length;i++){
    elements[i].style.background= "#006400";
  }
  document.getElementById('btn0Style').style.background="#006400";
  elements=document.getElementsByClassName('btnOperator')
  for (var i=0;i<elements.length;i++){
    elements[i].style.background= "red";
  }
}
