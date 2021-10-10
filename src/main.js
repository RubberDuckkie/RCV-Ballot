//Everything we need to do:
let orderedCandidate = [];
let listCandidates = [];
let finalCandidates = [];
let choiceNum = 1;

//states for which candidate is being picked (1st choice, 2nd choice, etc)
function candidateSelection(candidate){
   
    orderedCandidate.push(candidate)
    //console.log(orderedCandidate);

    //Theres only a max of 5 for the ballot
    /*if(orderedCandidate.length > 5){
        orderedCandidate.length = Math.min(orderedCandidate.length, 5);
    }*/
    
    //make a list w/o any duplicates
    listCandidates = [...new Set(orderedCandidate)];
    

    //put name in the ballot list
    for(let i=0; i<listCandidates.length; i++)
    {
        try{
            //console.log(finalCandidates[i]);
            document.querySelector(`#choice${i+1}`).innerHTML = `${listCandidates[i]}`;
            finalCandidates[i] = document.querySelector(`#choice${i+1}`).innerHTML;
        }catch{
            console.log("Too many candidates");
        }
        
    }
        console.log(finalCandidates);
    return finalCandidates;
}


//state changes based on confirmation pop-up
//edit button (which is on the slots) brings to that specific case
//html buttons/ slot fills are based on the array of candidates

//submission confirmation: ballet and each candidate choice
function ballotSubmission(){
   
    if(confirm(`Are you sure you want to submit your ballot?`))
    {
        //confirm
        console.log("Confirmed");
        console.log(finalCandidates);
        return;
    }else
    {
        //cancel
        console.log("Cancelled");
    }
    
}

console.log(document.querySelector('#editButton'));

//keyboard for write-in? : keyboard button that shows keyboard image
