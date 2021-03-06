//Everything we need to do:
let orderedCandidate = [];
let listCandidates = [];
let finalCandidates = [];
let choiceNum = 1;

//save list into local storage
function saveFinalCandidates()
{
    localStorage.setItem('candidates', finalCandidates);
}


//states for which candidate is being picked (1st choice, 2nd choice, etc)
function candidateSelection(candidate) {

    orderedCandidate.push(candidate)
    //make a list w/o any duplicates
    listCandidates = [...new Set(orderedCandidate)];
    //console.log(orderedCandidate);

    //Theres only a max of 5 for the ballot
    /*if(orderedCandidate.length > 5){
        orderedCandidate.length = Math.min(orderedCandidate.length, 5);
    }*/
    addNameToBallot();
    
}

function addNameToBallot() {

    //put name in the ballot list
    for (let i = 0; i < listCandidates.length; i++) {
        try {
            //console.log(finalCandidates[i]);
            document.querySelector(`#choice${i + 1}`).innerHTML = `${listCandidates[i]}`;
            finalCandidates[i] = document.querySelector(`#choice${i + 1}`).innerHTML;

        } catch {
            console.log("Too many candidates");
            listCandidates, length = 5;
            finalCandidates.length = 5;
        }

    }
    stateChange(listCandidates);
    console.log(finalCandidates);
    saveFinalCandidates();
    return finalCandidates;
}//end add name to ballot

//submission confirmation: ballet and each candidate choice
function ballotSubmission() {

    if (confirm(`Are you sure you want to submit your ballot?`)) {
        //confirm
        //console.log("Confirmed");
        
        if(finalCandidates.length !=0)
        {
            //console.log(finalCandidates);
            window.location.href = "./confirmation.html";
        }else
        {
            window.alert("You need to select at least 1 candidate.");
        }
        return;
    } else {
        //cancel
        console.log("Cancelled");
    }

}//ballot submission end

function deleteButton(choice) {


    for (let i = 0; i < finalCandidates.length; i++) {
        if (finalCandidates[i] == document.querySelector(`#${choice}`).innerHTML) {
            //empty the spot in array
            listCandidates[i] = "null";
            //push up other choices
            moveUpBallots();

        }
    }

    displayBallotAfterDelete();
    orderedCandidate = listCandidates;
    return listCandidates;

}//end delete button

function displayBallotAfterDelete() {
    for (let i = 0; i < 5; i++) {
        try {
            //display the candidate on the ballot
            if (listCandidates[i] == undefined) {
                //display the choice number 
                document.querySelector(`#choice${i + 1}`).innerHTML = `Choice ${i + 1}`;
                document.querySelector(`#choice${i + 1}`).style.font = `Noto Sans`;
            } else {
                //display the candidate
                document.querySelector(`#choice${i + 1}`).innerHTML = `${listCandidates[i]}`;
                document.querySelector(`#choice${i + 1}`).style.font = `Noto Sans`;
            }

        }
        catch {

        }

    }

    //set the new final list
    finalCandidates = listCandidates;
    return listCandidates;

}//end display after delete

function moveUpBallots() {
    for (let i = 0; i < listCandidates.length; i++) {
        listCandidates.splice(i, 1, listCandidates[i]);
    }

    //make the final list equal the new list (no null elements)
    let newCandidates = [];
    listCandidates.forEach(elem => {
        if (elem != "null") {
            newCandidates.push(elem);
        }

    });
    listCandidates = newCandidates;
    return listCandidates;

}//end move up ballots

//clear the ballot
function clearBallot()
{
    finalCandidates.length = 0;
    deleteButton('choice1');
    return finalCandidates;
}

function keyboard(src, width, height, alt) {
    let img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
}



function stateChange(finalCandidates) {

    if (finalCandidates[0] == undefined) {
        document.getElementById("stateText").innerHTML = "Choose your <b><u>First Choice</u></b>";

    } else if (finalCandidates[1] == undefined) {
        document.getElementById("stateText").innerHTML = "Choose your <b><u>Second Choice</u></b>";

    } else if (finalCandidates[2] == undefined) {
        document.getElementById("stateText").innerHTML = "Choose your <b><u>Third Choice</u></b>";

    } else if (finalCandidates[3] == undefined) {
        document.getElementById("stateText").innerHTML = "Choose your <b><u>Fourth Choice</u></b>";

    } else if (finalCandidates[4] == undefined) {
        document.getElementById("stateText").innerHTML = "Choose your <b><u>Last Choice</u></b>";

    } else if (finalCandidates[5] == undefined) {
        document.getElementById("stateText").innerHTML = "<b><u>Edit</u></b> your choices or <b><u>Submit</u></b> your ballot";
    }
}
function mainPage() {
    window.open('/index.html')
}

function finalList() {

    let myBallot = localStorage['candidates'].split(',');
    //console.log("FINAL");
    console.log(myBallot);

    myBallot.forEach((item)=>{
        document.querySelector('#finalList').innerHTML += `<li>${item}</li>`;
    });
}

function finalConfirmation(){
    window.location.href="./outcome.html";
}

function revisionConfirmation(){
    window.location.href="./index.html";
}

