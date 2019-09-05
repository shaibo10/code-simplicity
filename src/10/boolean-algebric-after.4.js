let enableEmpty = false
let radioButtonA = false
let radioButtonB = false

function switchRadioButtonAV1() {
    radioButtonA =  !radioButtonA && enableEmpty || !enableEmpty
    radioButtonB = enableEmpty && !radioButtonA && radioButtonB
}








// f = a && b || !b = a || !b

// abf
// 001
// 010
// 101
// 111

// Demorgan
// f= !(!a && b) = a || !b
// f = a && b || !b = a || !b

