//Everything we need to do:
let orderedCandidate = [];
let finalCandidates = [];
let choiceNum = 1;

//states for which candidate is being picked (1st choice, 2nd choice, etc)
function candidateSelection(candidate){
   
    orderedCandidate.push(candidate)
    //console.log(orderedCandidate);

    //make a list w/o any duplicates
    finalCandidates = [...new Set(orderedCandidate)];
    console.log(finalCandidates);
    
    
    //put name in the ballot list
    for(let i=0; i<finalCandidates.length; i++)
    {
        console.log(finalCandidates[i]);
        document.querySelector(`#choice${i+1}`).innerHTML = `${finalCandidates[i]}`;
    }
    
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
        console.log(orderedCandidate);
        return;
    }else
    {
        //cancel
        console.log("Cancelled");
    }
    
}


//keyboard for write-in? : keyboard button that shows keyboard image

//css



// let nameArr = ['Eric L. Adams', 'Kathryn Garcia', 'Scott M. Stringer', 'Dianne Morales', 'Shaun Donovan', 
// 'Art Chang', 'Isaac Wright Jr.','Maya D. Wiley', 'Andrew Young', 'Raymond J. Mcguire', 
// 'Paperboy Love Prince', 'Aaron S. Foldenaur', 'Joycelyn Taylor', 'Write in Candidate'];