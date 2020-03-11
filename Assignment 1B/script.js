/*
    Tucker Kent
    script.js
    19SP_INFO_2134_WW Online - JavaScript II
    Thoendel
    10 March 2020
*/

window.addEventListener('load', function() {
    /* Write your solution between this comment */
    const selectList = document.getElementById("age"); //declaring the select element to constant
    for (i = 0; i < 100; i++){ //using for loop to iterate values to 100
        let optionElement = document.createElement("option"); //declaring variable to store each new option value
        optionElement.setAttribute("value", (i + 1)); //setting each new option's value attribute to the iterator + 1
        let optionText = document.createTextNode(`${i + 1}`); //creating text node with iterator value + 1
        optionElement.appendChild(optionText); //appending value to the option element
        selectList.appendChild(optionElement); //appending new option element to the select element
    }
    
    const errorDiv = document.getElementById("error-holder"); //declared and initialized constant for the div that holds the error messages
    
    const firstInput = document.getElementById("first-name"); //constant to hold input element for first name
    const lastInput = document.getElementById("last-name"); //constant to hold input element for last name
    const ageInput = document.getElementById("age"); //constant to hold input element for age option

    firstInput.addEventListener("input", catchFirst); //event listener added on input -- calls catchFirst method
    lastInput.addEventListener("input", catchLast); //event listener added on input -- calls catchLast method
    ageInput.addEventListener("input", catchAge); //event listener added on input -- calls catchAge method
    let firstText = ""; //declaring and initializing variable to store first name text entered
    let lastText = ""; //declaring and initializing variable to store last name text entered
    let ageEntry = ""; //declaring and initializing variable to store age selected

    function catchFirst(event){ //method to store user entry of first name
        firstText = event.target.value; //storing user entry in firstText
    }

    function catchLast(event){ //method to store user entry of last name
        lastText = event.target.value; //storing user entry in lastText
    }

    function catchAge(event){ //method to store user selection of age
        ageEntry = event.target.value; //storing user entry in ageEntry
    }

    addEventListener("submit", submitFunction); //eventListener added on submit -- calls submitFunction method

    function submitFunction(){ //submitfunction is the primary method that controls the form validation
        preventSubmitChecker(event); //method called to check if data entered is invalid and if so prevents form from submitting
        checkDiv(errorDiv); //method called to check if the errorDiv already contains elements -- removes them if it does
        createErrorDisplay(); //method called to check which entries are invalid and create the errorDiv display
    }

    function checkEntry(userEntry){ //checkEntry method accepts user entry parameter and checks if it contains any string value
        let formValue = userEntry; //storing the user entry in formValue variable 
        if(formValue === ""){ //if statement to determine return value
            return false; //returns false if the user entry did not contain characters
        } else { //else statement to determine alternate return value
            return true; // returns true if there is indeed a character
        }
    }

    function preventSubmitChecker(event){ //function accepts event as parameter -- this function checks whether data is valid and if not it prevents the form submission
        let a = checkEntry(firstText); //storing first name data validity return value into variable
        let b = checkEntry(lastText); //storing last name data validity return value into variable
        let c = checkEntry(ageEntry); //storing age data validity return value into variable

        if (a === false || b === false || c === false) { //checks if any of the user entry values are invalid
            event.preventDefault(); //if user entry is invalid, uses preventDefault method to stop submission
        }
    }

    function createErrorDisplay(){ //this function creates the error messages
        let a = checkEntry(firstText); //checks data validity
        let b = checkEntry(lastText); //checks data validity
        let c = checkEntry(ageEntry); //checks data validity
        let errorList = document.createElement("ul"); //created ul element to be appended in first if statement --  it is declared here to allow all parts of this function access

        if(a === false || b === false || c === false){ //if statement checking returned variables from above to see if any data was declared invalid 
            let errorPara = document.createElement("p"); //creating paragraph element
            let errorText = document.createTextNode("Error! Please correct the following items before you can submit the form:"); //creating paragraph error text node
            errorPara.appendChild(errorText); //appending error text to paragraph element
            errorDiv.appendChild(errorPara); //appending error paragraph to div element
            errorDiv.appendChild(errorList); //appending ul to div element
            errorDiv.setAttribute("class", "error-box"); //setting error-box class to div element
        }
        if(a === false){ //checking first name validity
            let li1 = document.createElement("li"); //creating li element
            let li1Text = document.createTextNode("First name cannot be blank!"); //creating first name error text node
            li1.appendChild(li1Text); //appending li1 textnode to li element
            errorList.appendChild(li1); //appending li to the ul errorList
        }
        if(b === false){ //checking last name validity
            let li2 = document.createElement("li"); //creating an li element
            let li2Text = document.createTextNode("Last name cannot be blank!"); //creating a text node with last name error text
            li2.appendChild(li2Text); //appending error message text node to the created list item
            errorList.appendChild(li2); //appending the li to the errorList ul
        }
        if(c === false){ //checking validity of the age selection
            let li3 = document.createElement("li"); //creating li element
            let li3Text = document.createTextNode("Age must be selected"); //creating text node with age error message
            li3.appendChild(li3Text); //appending text node to li
            errorList.appendChild(li3); //appending li to the errorList ul
        }
    }

    function checkDiv(){ //function to check if the error div has any child elements and remove them if so
        let boolFlag = true; //declaring and intializing a boolean variable to use as flag variable
        while(boolFlag === true){ //while loop to continue while boolean value is true
            let child1 = errorDiv.firstElementChild; //setting the first child element to child1 variable
            if(child1 !== null){ //if statement to determine if errorDiv contains any child elements -- if not it returns null 
             errorDiv.removeChild(child1); //removing child element if errorDiv contains one
            } else { //else statement in the case that the div does not have a child element
                boolFlag = false; //sets flag to false to exit the while loop and the function
            }
        }
    }
    /* and this comment */
});