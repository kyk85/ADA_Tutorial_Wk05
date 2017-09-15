function addWOD() {
	//Generate new elements
	var table = document.getElementById("wodTable")
	var newWodRow = document.createElement("tr");
	var newWodQuestion = document.createElement("td");
	var newWodDifficulty = document.createElement("td");
	var newWodAssigned = document.createElement("td");
	var newDoneButton = document.createElement("button")
	var newDeleteButton = document.createElement("button")

	//Get user input values
	var wodQuestion = document.getElementById("wodInput").value;
	var wodDifficulty = document.getElementById("difficultyInput").value;
	var wodAssigned = document.getElementById("assignedInput").value;
	
	//Get HTML element IDs
	var information = document.getElementById("info")
	var spanDifficulty = document.getElementById("wodDifficulty");
	var spanAssigned = document.getElementById("wodAssigned");
	var spanStatus = document.getElementById("wodStatus");
	var infoName = document.getElementById("wodName");
	var doneButton = document.getElementById("doneButton");
	var deleteButton = document.getElementById("deleteButton");

	//Create objects based on input
	function wodObject(question,difficulty,assigned,status){
		this.question = question;
		this.difficulty = difficulty;
		this.assigned = assigned;
		this.status = "Open"
		this.changeStatus = function () {
			this.status = "Closed"
		}
	}

	var anotherWOD = new wodObject (wodQuestion, wodDifficulty, wodAssigned)

	newWodQuestion.innerHTML=anotherWOD.question;
	newWodDifficulty.innerHTML=anotherWOD.difficulty;	
	newWodAssigned.innerHTML=anotherWOD.assigned;

	//Insert new HTML elements and assigns class/ID for css effects
	newWodRow.appendChild(newWodQuestion);
	newWodRow.appendChild(newWodDifficulty);
	newWodRow.appendChild(newWodAssigned);
	table.appendChild(newWodRow);
	newWodRow.className="rows"

	//Click functions
	newWodRow.addEventListener("click", function(){
		console.log(anotherWOD)

		//Insert text based on object properties
		infoName.innerHTML=anotherWOD.question
		spanDifficulty.innerHTML=anotherWOD.difficulty
		spanAssigned.innerHTML=anotherWOD.assigned
		spanStatus.innerHTML=anotherWOD.status
		newDeleteButton.innerHTML="Delete"
		newDoneButton.innerHTML="Mark as Done"
		info.style.visibility="visible"

		//Removes button if button is active
		if (deleteButton.hasChildNodes()){
			deleteButton.removeChild(deleteButton.childNodes[0])
		}
		
		//Adds a new button that is tied to new Item (DOM linked)
		deleteButton.appendChild(newDeleteButton)
		newDeleteButton.onclick = function() {
		wodTable.removeChild(newWodRow);
		deleteButton.removeChild(newDeleteButton)
		}

		//Removes button if button is active
		if (doneButton.hasChildNodes()){
			doneButton.removeChild(doneButton.childNodes[0])
		}

		//Adds a new button that is tied to new Item (DOM linked)
		doneButton.appendChild(newDoneButton)
		newDoneButton.onclick = function () {
			anotherWOD.changeStatus();
			spanStatus.innerHTML=anotherWOD.status
		}
	})
}
