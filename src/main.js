//Everything we need to do:
let orderedCandidate = [];
let listCandidates = [];
let finalCandidates = [];
let choiceNum = 1;

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

function addNameToBallot()
{

    //put name in the ballot list
    for (let i = 0; i < listCandidates.length; i++) {
        try {
            //console.log(finalCandidates[i]);
            document.querySelector(`#choice${i + 1}`).innerHTML = `${listCandidates[i]}`;
            finalCandidates[i] = document.querySelector(`#choice${i + 1}`).innerHTML;

        } catch {
            console.log("Too many candidates");
            listCandidates,length = 5;
            finalCandidates.length = 5;
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
            listCandidates[i] = "null";
            //push up other choices
            moveUpBallots();

        }
    }
    
    displayBallotAfterDelete();
    orderedCandidate = listCandidates;
    //console.log(listCandidates);
    return listCandidates;

}//end delete button

function displayBallotAfterDelete()
{
    for(let i=0; i<5; i++)
    {
        try{
            document.querySelector(`#choice${i+1}`).innerHTML = `${listCandidates[i]}`;
            
            
        }
        catch{
            document.querySelector(`#choice${i+1}`).innerHTML = `Choice ${i+ 1}`;
        }
        
    }
    return listCandidates;
}
function moveUpBallots()
{
    for(let i=0; i<listCandidates.length; i++)
    {
        listCandidates.splice(i,1, listCandidates[i]);
    }

    //make the final list equal the new list (no null elements)
    let newCandidates = [];
    listCandidates.forEach(elem=>{
        if(elem != "null")
        {
            newCandidates.push(elem);
        }
        
    });
    listCandidates = newCandidates;
    return listCandidates;
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
function mainPage(){
    window.open('/index.html')
}

function finalList(){
    document.getElementById('finalList').innerHTML = finalCandidates;
}

//keyboard for write-in? : keyboard button that shows keyboard image
