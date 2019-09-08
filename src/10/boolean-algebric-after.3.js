let enableEmpty = false
let radioButtonA = false
let radioButtonB = false

function switchRadioButtonAV1() {
    radioButtonA = enableEmpty && !radioButtonA || !enableEmpty
    radioButtonB = enableEmpty && !radioButtonA && radioButtonB
}



// f = a && b || !b 

// abf
// 001
// 010
// 101
// 111

// Demorgan
// f= !(!a && b) = a || !b
// f = a && b || !b = a || !b

// f = a && b || !b === a || !b


