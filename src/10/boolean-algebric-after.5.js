let enableEmpty = false
let radioButtonA = false
let radioButtonB = false

function switchRadioButtonAV1() {
    radioButtonA =  !radioButtonA || !enableEmpty
    radioButtonB = enableEmpty && !radioButtonA && radioButtonB
}

// ab B
// 00 0
// 01 0
// 10 0
// 11 fi




