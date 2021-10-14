//Everything we need to do:
let orderedCandidate = [];
let listCandidates = [];
let finalCandidates = [];
let choiceNum = 1;

//states for which candidate is being picked (1st choice, 2nd choice, etc)
function candidateSelection(candidate) {

    orderedCandidate.push(candidate)
    //console.log(orderedCandidate);

    //Theres only a max of 5 for the ballot
    /*if(orderedCandidate.length > 5){
        orderedCandidate.length = Math.min(orderedCandidate.length, 5);
    }*/

    //make a list w/o any duplicates
    listCandidates = [...new Set(orderedCandidate)];

    //put name in the ballot list
    for (let i = 0; i < listCandidates.length; i++) {
        try {
            //console.log(finalCandidates[i]);
            document.querySelector(`#choice${i + 1}`).innerHTML = `${listCandidates[i]}`;
            finalCandidates[i] = document.querySelector(`#choice${i + 1}`).innerHTML;

        } catch {
            console.log("Too many candidates");
        }

    }
    stateChange(listCandidates);
    console.log(finalCandidates);
    return finalCandidates;

}


//state changes based on confirmation pop-up
//edit button (which is on the slots) brings to that specific case
//html buttons/ slot fills are based on the array of candidates

//submission confirmation: ballet and each candidate choice
function ballotSubmission() {

    if (confirm(`Are you sure you want to submit your ballot?`)) {
        //confirm
        console.log("Confirmed");
        console.log(finalCandidates);

        return;
    } else {
        //cancel
        console.log("Cancelled");
    }

}

function deleteButton(choice) {

    for (let i = 0; i < finalCandidates.length; i++) {
        if (finalCandidates[i] == document.querySelector(`#${choice}`).innerHTML) {
            //empty the spot in array
            finalCandidates[i] = null;
            finalCandidates.splice(i, i + 1);
            document.querySelector(`#choice${i + 1}`).innerHTML = `${listCandidates[i]}`
        }
    }
    console.log(finalCandidates);
    return finalCandidates;

}


function stateChange(finalCandidates) {

    if (finalCandidates[0] == undefined) {
        document.getElementById("stateText").innerHTML = "Choose your <b><u>First Choice</u></b> candidate";

    } else if (finalCandidates[1] == undefined) {
        document.getElementById("stateText").innerHTML = "Choose your <b><u>Second Choice</u></b> candidate";

    } else if (finalCandidates[2] == undefined) {
        document.getElementById("stateText").innerHTML = "Choose your <b><u>Third Choice</u></b> candidate";

    } else if (finalCandidates[3] == undefined) {
        document.getElementById("stateText").innerHTML = "Choose your <b><u>Fourth Choice</u></b> candidate";

    } else if (finalCandidates[4] == undefined) {
        document.getElementById("stateText").innerHTML = "Choose your <b><u>Last Choice</u></b> candidate";

    } else if (finalCandidates[5] == undefined) {
        document.getElementById("stateText").innerHTML = "<b><u>Edit</u></b> your choices or <b><u>Submit</u></b> your ballot";
    }
}

//keyboard for write-in? : keyboard button that shows keyboard image
