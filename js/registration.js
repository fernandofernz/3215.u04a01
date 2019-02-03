// Fernando Becerra
// Capella IT 3215 
// Assignment #4

//function to validate form vaForm
function validator() {
    // setting a counter
    var checker = 0;
    // store value of UserName 
    var userName = document.vaForm.userName.value;
    // store value of Password
    var pWord = document.vaForm.password.value;
    // store value of Confirmation Password 
    var confirmPWord = document.vaForm.passwordVerify.value;
    // store value of FirstName
    var fName = document.vaForm.firstName.value;
    // store value of Last Name
    var lName = document.vaForm.lastNamer.value;
    // store value of Email 
    var eltMail = document.vaForm.email.value;
    // store value of @ location
    var atSymbol = eltMail.indexOf("@");
    // store value of . 
    var dotLocation = eltMail.lastIndexOf(".");
    // store value of phone number
    var phoneNumber = document.vaForm.phoneNumber.value;
    // store value of radio buttons
    var signNews = document.vaForm.signUpNewsletter.value;

    //logic for validation
    // check if value of userName is null
    if (userName == "") {
        //if true, value of check = 0. Validation Stops
        checker = 0;
    } else {
        checker++;
    }
     // check if value of pWord is null
    if (pWord == "") {
        //if true, value of check = 0. Validation Stops
        checker = 0;
    } else {
        checker++;
    }
     // check if value of confirmPWord is null
    if (confirmPWord == "") {
        //if true, value of check = 0. Validation Stops
        checker = 0;
    } 
    // check if pWord and confirmPWord are equal
    else if (confirmPWord == pWord) {
        checker++;
    } else {
        alert("Password do not match");
    }
     // check if value of First Name is null
    if (fName == "") {
        //if true, value of check = 0. Validation Stops
        checker = 0;
    } else {
        checker++;
    }
     // check if value of Last Name is null
    if (lName == "") {
        //if true, value of check = 0. Validation Stops
        checker = 0;
    } else {
        checker++;
    }
     // check if value of eltMail is null
    if (eltMail == "") {
        //if true, value of check = 0. Validation Stops
        checker = 0;
    }
    // also check if @ or . are found on string    
    else if (atSymbol < 1 || dotLocation < atSymbol + 2 || dotLocation + 2 >= eltMail.length)
        console.log("incorrect format");
    else {
        checker++;
    }
     // check if value of phoneNumber is null
    if (phoneNumber == "") {
        // if true, value of check = 0. Validation Stops    
        checker = 0;
    } else {
        checker++;
    }
     // check if value of singNews is null
    if (signNews == "") {
        // if true, value of check = 0. Validation Stops
        checker = 0;
    } else {
        checker++;
    }
    // if checker reaches value of 8
    if (checker == 8) {
        // if true, the confirmation page is called
        window.location.href = "confirm.html";
        
    }

}