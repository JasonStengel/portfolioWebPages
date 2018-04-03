//variables that pull data from the web page 
	var numOne = document.getElementById("num-one");
	var numTwo = document.getElementById("num-two");
	var addSum = document.getElementById("add-sum");
	
//waits for user input and passes it to the add function
	numOne.addEventListener("input", add);
	numTwo.addEventListener("input", add);	
	
	function add(){
		
		//sets the values to whats entered by the user or to zero if they enter nothing
		var one = parseFloat(numOne.value)|| 0;
		var two = parseFloat(numTwo.value)|| 0;
		var sum = one + two;
		
		//sets the value of the addSum <p> on the web page as the user enters 
		//values into each of the numOne and numTwo input boxes
		addSum.innerHTML = "your sum is: " + sum;	
	}

