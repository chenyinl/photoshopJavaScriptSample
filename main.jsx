#script "Main Checking Program"
#target "photoshop"

// use confirm for user to choose
var r = confirm ("start the process?", false, "Script says:");

// a global variable
var v1 = 345;

// a flag to check if continue the process
var continueCheck=1;

// files to include, file name cannot be variables.
#include "proc1.jsx";
#include "proc2.jsx";
#include "proc3.jsx";
#include "proc4.jsx";
#include "proc5.jsx";

if(r ==true){
    // the third parameter "title" in confirm does not seem work in photoshop.
    // I put "Script says:" anyway
    if(confirm ("Check title boundary?", false, "Script says:")){

        checkTitleBoundry(v1);

    }

    if(continueCheck &&confirm ("Check screen size?", false, "Script says:")){
        
        checkScreenSize();
    }

    if(continueCheck &&confirm ("Check Authoring House?", false, "Script says:")){
        
        checkAuthHouse();
    }

    if(continueCheck &&confirm ("Check TV Format?", false, "Script says:")){
        
        // this one has error handling, see proc4.jsx
        checkTVFormat(v1);
    }

    if(continueCheck && confirm ("Check Color Index?", false, "Script says:")){
        
        checkColorIndex();
    }

}else{

    // if user answers "NO"
    
}

alert("Good-bye");
