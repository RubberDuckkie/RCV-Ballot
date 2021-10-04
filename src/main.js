//Everything we need to do:
let orderedCandidate = []
//states for which candidate is being picked (1st choice, 2nd choice, etc)
function candidateSelection(candidate){
    //confirm submission
    /*if(confirm(`Are you sure ${candidate} your choice?`))
    {
        //confirm
        console.log("Confirmed");
        
    }else
    {
        //cancel
        console.log("Cancelled");
    }*/
    orderedCandidate.push(candidate)
    console.log(orderedCandidate);
    return orderedCandidate;
}

//state changes based on confirmation pop-up
//edit button (which is on the slots) brings to that specific case
//html buttons/ slot fills are based on the array of candidates

//submission confirmation: ballet and each candidate choice

function ballotSubmission(){

    //need to make sure there is no duplicate candidates
    console.log(orderedCandidate);
    return
}


//keyboard for write-in? : keyboard button that shows keyboard image

//css



// let nameArr = ['Eric L. Adams', 'Kathryn Garcia', 'Scott M. Stringer', 'Dianne Morales', 'Shaun Donovan', 
// 'Art Chang', 'Isaac Wright Jr.','Maya D. Wiley', 'Andrew Young', 'Raymond J. Mcguire', 
// 'Paperboy Love Prince', 'Aaron S. Foldenaur', 'Joycelyn Taylor', 'Write in Candidate'];