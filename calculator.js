var displayValue=""; //
var shownAns = false;//
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
 	document.getElementById('dis').innerHTML = eval(displayValue)/100;
 	displayValue = eval(displayValue)/100;
 	
}

//do calculation and show answer
function showAnswer(){
	var lastIndex = displayValue.length-1;
	console.log("stringlength "+displayValue.length);
	if ( (displayValue.charAt(lastIndex))=='+' || (displayValue.charAt(lastIndex))=='-' || 
		 (displayValue.charAt(lastIndex))=='*' || (displayValue.charAt(lastIndex))=='/'){		 
         displayValue += displayValue.substring(0,lastIndex);
	}
  	document.getElementById('dis').innerHTML = eval(displayValue);
  	displayValue = eval(displayValue);
    shownAns = true;
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

